import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { conversationRepository } from '../repositories/conversation.repository';
import template from '../prompts/chatbot.txt';

const client = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

const parkInfo = fs.readFileSync(
   path.join(__dirname, '..', 'prompts', 'WonderWorld.md'),
   'utf-8'
);

const instructions = template.replace('{{placeHolder}}', parkInfo);

type ChatResponse = {
   id: string;
   message: string;
};

export const chatService = {
   async sendMessage(
      prompt: string,
      conversationId: string
   ): Promise<ChatResponse> {
      const response = await client.responses.create({
         model: 'gpt-4o-mini',
         input: prompt,
         instructions,
         temperature: 0.2,
         max_output_tokens: 100,
         previous_response_id:
            conversationRepository.getLastResponseId(conversationId),
      });

      conversationRepository.setLastResponseId(conversationId, response.id);

      return {
         id: response.id,
         message: response.output_text,
      };

      //Mocking the OpenAI service call
      // await new Promise((resolve) => setTimeout(resolve, 2000));

      // const message =
      //    'This is a test response to verify that the API is working correctly and returning data as expected The request was successfully processed, and the server generated this sample message.';

      // return {
      //    id: crypto.randomUUID(),
      //    message,
      // };
   },
};
