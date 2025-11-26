import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateArticleContent = async (title: string, category: string, excerpt: string): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      Você é um jornalista de tecnologia sênior para o "Tech Talks", um site futurista de tecnologia e jogos.
      Escreva o corpo de um artigo envolvente, detalhado e atraente em PORTUGUÊS DO BRASIL para a seguinte postagem:
      
      Título: ${title}
      Categoria: ${category}
      Contexto/Resumo: ${excerpt}
      
      Requisitos:
      - Use formatação markdown (cabeçalhos, listas, negrito).
      - Tom: Profissional mas entusiasmado, apelando para gamers e entusiastas de tecnologia.
      - Duração: Aproximadamente 400-600 palavras.
      - Inclua uma seção "Veredito" ou "Considerações Finais" no final.
      - NÃO inclua o título na saída (ele já é exibido na página).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Falha ao gerar conteúdo. Por favor, tente novamente.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Erro ao carregar o conteúdo do artigo. Verifique se sua chave de API está configurada corretamente.";
  }
};