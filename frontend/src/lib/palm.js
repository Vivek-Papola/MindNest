// helper to call PaLM generateText
export async function generateText(prompt) {
  const key = process.env.REACT_APP_PALM_API_KEY;
  const model = process.env.REACT_APP_PALM_MODEL;
  const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateText`;
  const body = {
    prompt: { text: prompt },
    temperature: 0.7,
    maxOutputTokens: 256,
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'PaLM API error');
  }
  const json = await res.json();
  return json.candidates?.[0]?.output || '';
}
