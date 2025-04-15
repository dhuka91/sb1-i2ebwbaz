const DEEPSEEK_API_KEY = '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';
const API_URL = 'https://api.deepseek.com/v1';

export async function callDeepseekAPI(prompt: string) {
  const response = await fetch(`${API_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}