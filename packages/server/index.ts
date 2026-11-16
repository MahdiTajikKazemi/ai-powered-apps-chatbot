import express from 'express';
import type { Request, Response } from 'express';
import OpenAI from 'openai';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

const client = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/chat', async (req: Request, res: Response) => {
   const { prompt } = req.body;

   const response = await client.responses.create({
      model: 'gpt-4o-mini',
      input: prompt,
      temperature: 0.2,
      max_output_tokens: 100,
   });

   res.json({ message: response.output_text });
});

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
