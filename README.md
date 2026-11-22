# AI-Powered Theme Park Chatbot

A full-stack AI-powered chatbot application designed to act as a **theme park support assistant**. It helps visitors get answers to their questions about the park, including attractions, facilities, available services, visitor information, and park policies.

The application acts as a wrapper around an LLM (Large Language Model), using prompt engineering to specialize the AI's responses for the theme park support domain and provide relevant, context-aware answers.

## Tech Stack

**Frontend**

- React
- Vite
- Tailwind CSS
- shadcn/ui

**Backend**

- Express.js
- Bun
- OpenAI API

**Code Quality & Git Workflow**

- ESLint – Code linting and static analysis
- Prettier – Code formatting
- Husky – Git hooks and workflow automation
- lint-staged – Running checks and formatting on staged files

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.
- An [OpenAI API key](https://platform.openai.com/api-keys).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MahdiTajikKazemi/ai-powered-apps-chatbot.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ai-powered-apps-chatbot
   ```

3. Install project dependencies:

   ```bash
   bun install
   ```

### Environment Variables

Create a `.env` file in the root directory of the project and add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key
```

Replace `your_openai_api_key` with your actual OpenAI API key.

### Run the Application

Start the development server from the project root:

```bash
bun run dev
```

The application should now be running in development mode.
