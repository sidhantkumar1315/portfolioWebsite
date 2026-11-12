// Cloudflare Worker: proxies the portfolio chat to Groq.
// The model and limits are pinned here so the Groq key can't be used for
// arbitrary requests. Set the GROQ_API_KEY secret in the Worker settings.

const MODEL = 'openai/gpt-oss-20b';
const MAX_COMPLETION_TOKENS = 700;
const MAX_QUESTION_CHARS = 1000;
const MAX_SYSTEM_CHARS = 20000;

const ALLOWED_ORIGINS = [
    'https://sidhantkumar1315.github.io',
    'http://localhost:8080',
    'http://127.0.0.1:8080',
    'http://localhost:3000',
];

function corsHeaders(origin) {
    return {
        'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Vary': 'Origin',
    };
}

function json(data, status, origin) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    });
}

export default {
    async fetch(request, env) {
        const origin = request.headers.get('Origin') || '';

        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: corsHeaders(origin) });
        }
        if (request.method !== 'POST') {
            return json({ error: { message: 'Method not allowed' } }, 405, origin);
        }
        if (!ALLOWED_ORIGINS.includes(origin)) {
            return json({ error: { message: 'Origin not allowed' } }, 403, origin);
        }

        let body;
        try {
            body = await request.json();
        } catch {
            return json({ error: { message: 'Invalid JSON' } }, 400, origin);
        }

        const { system, question } = body || {};
        if (typeof question !== 'string' || !question.trim() || question.length > MAX_QUESTION_CHARS) {
            return json({ error: { message: 'Question missing or too long' } }, 400, origin);
        }
        if (typeof system !== 'string' || system.length > MAX_SYSTEM_CHARS) {
            return json({ error: { message: 'Invalid context' } }, 400, origin);
        }

        try {
            const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${env.GROQ_API_KEY}`,
                },
                body: JSON.stringify({
                    model: MODEL,
                    messages: [
                        { role: 'system', content: system },
                        { role: 'user', content: question.trim() },
                    ],
                    max_completion_tokens: MAX_COMPLETION_TOKENS,
                    temperature: 0.7,
                    reasoning_effort: 'low',
                }),
            });

            const data = await groqResponse.json();
            return json(data, groqResponse.status, origin);
        } catch (error) {
            return json({ error: { message: error.message } }, 500, origin);
        }
    },
};
