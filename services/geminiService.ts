
import { GoogleGenAI, Type } from "@google/genai";

export interface GeoAIResponse {
  projectName: string;
  description: string;
  potentialDatasets: string[];
  analysisMethods: string[];
}

// Assume API key is set in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. GeoAI functionality will be limited.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateGeoProjectIdea = async (topic: string): Promise<GeoAIResponse> => {
  if (!API_KEY) {
    throw new Error("API key is not configured. Please set the API_KEY environment variable.");
  }

  const prompt = `Based on the geoinformatics topic "${topic}", generate a concise and innovative project idea. Provide a project name, a short description, a list of potential datasets, and a list of key analysis methods.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            projectName: {
              type: Type.STRING,
              description: "A creative and descriptive name for the project.",
            },
            description: {
              type: Type.STRING,
              description: "A brief, one-paragraph summary of the project's goals and scope.",
            },
            potentialDatasets: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "A list of 3-4 relevant public datasets (e.g., from NASA, USGS, OpenStreetMap).",
            },
            analysisMethods: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "A list of 3-4 key geoinformatics techniques or methods to be used (e.g., NDVI, Spatial Interpolation).",
            },
          },
          required: ["projectName", "description", "potentialDatasets", "analysisMethods"],
        },
        temperature: 0.8,
        topP: 0.95,
      },
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Error generating project idea with Gemini API:", error);
    throw new Error("Failed to generate a project idea. The AI service may be unavailable.");
  }
};
