import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Initialize the GoogleGenAI client on the server side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { goal, customMessage } = body;

    if (!goal) {
      return NextResponse.json(
        { error: "Goal selection is required" },
        { status: 400 }
      );
    }

    const systemInstruction = `You are the Head Personal AI Fitness Coach at AURA, an elite, world-class luxury fitness sanctuary for high-achievers.
Your coaching tone is highly professional, scientific, refined, motivational, and exclusive.
You design high-end, customized fitness, recovery, and nutrition pathways.
Ensure your response is returned as a structured JSON object according to the schema specified. Use premium luxury fitness terminology (e.g., 'Metabolic Conditioning', 'Hypertrophy Coaching', 'Contrast Therapy Recovery', 'Macro-Nutrient Optimization').`;

    let userPrompt = `Generate an elite, personalized 7-day blueprint for an individual aiming to achieve: ${goal}.`;
    if (customMessage) {
      userPrompt += `\nThey also shared the following context or question: "${customMessage}". Adjust the response to directly address their specific request while keeping it in the premium context.`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            blueprintName: {
              type: Type.STRING,
              description: "A premium, sophisticated name for this fitness blueprint (e.g. 'AURA Hypertrophy Elite Split')",
            },
            overview: {
              type: Type.STRING,
              description: "A high-level luxurious overview of the physiological target and psychological preparation required.",
            },
            weeklyRoutine: {
              type: Type.ARRAY,
              description: "A structured 7-day split program.",
              items: {
                type: Type.OBJECT,
                properties: {
                  day: { type: Type.STRING, description: "e.g., 'Day 1: Upper Body Strength'" },
                  workoutName: { type: Type.STRING, description: "Elegant name of the session" },
                  focus: { type: Type.STRING, description: "Core muscle groups and training type" },
                  exercises: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: "3-4 premium exercises with sets, reps, and luxury rest protocols (e.g., 90s sensory rest)",
                  },
                },
                required: ["day", "workoutName", "focus", "exercises"],
              },
            },
            dietaryStructure: {
              type: Type.OBJECT,
              description: "Nutritional blueprint optimized for high energy and physical enhancement.",
              properties: {
                caloricStrategy: { type: Type.STRING, description: "Clear macro and calorie strategy explanation" },
                proteins: { type: Type.STRING, description: "Protein recommendations and key premium sources" },
                carbsAndFats: { type: Type.STRING, description: "Carbohydrate and essential lipids approach" },
                luxurySupplementation: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Premium micronutrient and supplementation suggestions (e.g., Liposomal Glutathione, Grass-Fed Whey)",
                },
              },
              required: ["caloricStrategy", "proteins", "carbsAndFats", "luxurySupplementation"],
            },
            luxuryRecoveryProtocol: {
              type: Type.OBJECT,
              description: "Contrast therapy, sleep optimization, and active restoration details suitable for a luxury wellness club.",
              properties: {
                activeRest: { type: Type.STRING, description: "e.g., Cold plunge, steam chamber parameters" },
                sleepOptimization: { type: Type.STRING, description: "Elite level sleep and nervous system down-regulation rules" },
              },
              required: ["activeRest", "sleepOptimization"],
            },
            coachQuote: {
              type: Type.STRING,
              description: "A powerful, personalized, high-society motivational quote from the Head Coach.",
            },
          },
          required: [
            "blueprintName",
            "overview",
            "weeklyRoutine",
            "dietaryStructure",
            "luxuryRecoveryProtocol",
            "coachQuote",
          ],
        },
      },
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("Empty response from Gemini API");
    }

    const data = JSON.parse(responseText.trim());
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("AI Coach API error:", error);
    return NextResponse.json(
      { error: "Failed to generate your personalized AI blueprint. Please try again." },
      { status: 500 }
    );
  }
}
