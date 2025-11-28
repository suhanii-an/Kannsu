import { GoogleGenAI } from "@google/genai";
import { GiftRequest } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getGiftSuggestions = async (request: GiftRequest): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing. Mocking response.");
    return `Based on your request for ${request.recipient} for ${request.occasion}, we recommend:
    1. A "Pastel Love" Hamper: 5 Crochet Tulips (₹225), a custom Chocolate Bouquet (10 mixed sticks ~₹300), and a heartfelt note.
    2. The "Memory Lane" Box: 15 Polaroids (₹210) with 3 Silk Ribbon Flowers (₹30) and Dairy Milk Silk (₹80).
    3. Custom Luxury: A sourced vintage watch (Budget pending) paired with an elegant white crochet rose bouquet (5 roses for ₹180).`;
  }

  try {
    const prompt = `
      Act as a high-end gift concierge for "Kannsu", a minimal and dreamy gift store.
      
      Our Product List & Prices (Currency is INR ₹):
      - Crochet Tulips: ₹50 each (10% off for 5+ items)
      - Crochet Roses: ₹40 each (10% off for 5+ items)
      - Silk Ribbon Flowers: ₹10 each (Bundles of 1, 2, 3, 5, 10)
      - Crochet Alphabet Keychains: ₹50 each (Custom Letter & Color)
      - Chocolate Bouquets: Custom built using sticks. 
        (Snickers ₹25, KitKat ₹20, Ferrero ₹50, Dairy Milk ₹10, Raffaello ₹50). Max 15 sticks.
      - Polaroids: 10 for ₹150, 15 for ₹210, 20 for ₹260.
      - Chocolates: Dairy Milk Mini (₹10), Bar (₹25), Silk (₹80), KitKat 4-finger (₹30), Snickers (₹40), Ferrero Pack (₹120), Raffaello Pack (₹120).
      - Custom Sourcing: Watches, Perfumes, Books, Plushies.

      User Request:
      - Recipient: ${request.recipient}
      - Occasion: ${request.occasion}
      - Preferences: ${request.preferences}
      - Budget: ${request.budget}
      - Vibe: ${request.vibe}

      Please provide 3 distinct, creative, and personalized gift hamper ideas using ONLY our products or custom sourcing.
      Include estimated prices in ₹ (INR).
      Keep the tone warm, dreamy, minimal, and premium.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are a creative gifting expert for Kannsu. Be concise, calculate prices accurately based on the list, and be descriptive about the aesthetic.",
        temperature: 0.7,
      }
    });

    return response.text || "We couldn't generate suggestions at this moment, but our team will contact you shortly!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "We are currently experiencing high traffic. Please submit your request, and our team will personally curate a list for you.";
  }
};