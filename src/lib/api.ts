import { createClient } from '@supabase/supabase-js';

const DEEPSEEK_API_KEY = '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';
const API_URL = 'https://api.deepseek.com/v1';

export const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_ANON_KEY || ''
);

export async function callDeepseekAPI(prompt: string) {
  try {
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
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling Deepseek API:', error);
    throw error;
  }
}

export async function processText(text: string, type: string) {
  try {
    let prompt = '';
    switch (type) {
      case 'plagiarism':
        prompt = `Check this text for potential plagiarism: ${text}`;
        break;
      case 'rewrite':
        prompt = `Rewrite this text while maintaining its meaning: ${text}`;
        break;
      case 'grammar':
        prompt = `Check and correct any grammar issues in this text: ${text}`;
        break;
      case 'summarize':
        prompt = `Summarize this text concisely: ${text}`;
        break;
      default:
        prompt = text;
    }
    return await callDeepseekAPI(prompt);
  } catch (error) {
    console.error('Error processing text:', error);
    throw error;
  }
}

export async function generateAIContent(type: string, prompt: string) {
  try {
    let aiPrompt = '';
    switch (type) {
      case 'essay':
        aiPrompt = `Write an essay about: ${prompt}`;
        break;
      case 'article':
        aiPrompt = `Write an article about: ${prompt}`;
        break;
      case 'title':
        aiPrompt = `Generate an engaging title for: ${prompt}`;
        break;
      case 'paragraph':
        aiPrompt = `Write a paragraph about: ${prompt}`;
        break;
      default:
        aiPrompt = prompt;
    }
    return await callDeepseekAPI(aiPrompt);
  } catch (error) {
    console.error('Error generating AI content:', error);
    throw error;
  }
}