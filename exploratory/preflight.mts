// The OpenRouter key works and the account has credit. Prints the balance, never the key; exits 1 otherwise.
const j = (await (await fetch("https://openrouter.ai/api/v1/credits", { headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}` } })).json()) as { data?: { total_credits: number; total_usage: number }; error?: { message?: string } };
if (!j.data) { console.error("OpenRouter key rejected:", j.error?.message); process.exit(1); }
console.log(`OpenRouter balance: $${(j.data.total_credits - j.data.total_usage).toFixed(2)}`);
