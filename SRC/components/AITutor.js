const html = `
  <div style="background:white;color:black;padding:1rem;border-radius:12px;margin:1rem 0;">
    <h3>Ask AI Tutor</h3>
    <input id="ai-q" placeholder="e.g. Explain fractions" style="width:100%;padding:0.8rem;" />
    <button onclick="askAI()" style="margin-top:0.5rem;">Ask</button>
    <div id="ai-ans" style="margin-top:1rem;font-style:italic;"></div>
  </div>
`;

document.getElementById('dashboard')?.insertAdjacentHTML('beforeend', html);

window.askAI = async () => {
  const q = document.getElementById('ai-q').value;
  if (!q) return;
  document.getElementById('ai-ans').innerText = 'Thinking...';

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + import.meta.env.VITE_OPENAI_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: q }],
        max_tokens: 150
      })
    });
    const data = await res.json();
    document.getElementById('ai-ans').innerText = data.choices[0].message.content;
  } catch (e) {
    document.getElementById('ai-ans').innerText = 'Error: Check OpenAI key';
  }
};
