# Portfolio Setup Guide - RAG with Gemini AI

Your portfolio is now equipped with a powerful RAG (Retrieval Augmented Generation) system powered by Google's Gemini AI. Here's how to set it up and use it.

## Quick Setup

### 1. Get Gemini API Key

1. Go to: **https://aistudio.google.com/apikey**
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the API key

### 2. Add API Key to Your Project

Create a `.env.local` file in your project root:

```bash
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here_from_step_1
```

**Note:** Never commit `.env.local` to Git. It's already in `.gitignore`.

### 3. Run Your Portfolio

```bash
cd portfolio
npm install  # if needed
npm run dev
```

Your portfolio will be available at: **http://localhost:3000**

## Features

### Loading Screen ✓
- Beautiful animated loading screen when the site first loads
- Automatically disappears after 2.5 seconds

### AI Chatbot ✓
- Floating chat widget in the bottom-right corner
- Powered by Google Gemini AI
- Uses RAG to retrieve your information and answer questions

### Admin Dashboard
- Visit: **http://localhost:3000/admin**
- Add your resume, projects, skills, certifications, and education
- The chatbot will use this information to answer questions

### Custom Cursor ✓
- Unique animated cursor that expands on hover
- Professional and engaging

## How RAG Works

1. **User asks a question**: "What's your experience?"
2. **System retrieves relevant info**: Searches your knowledge base for experience entries
3. **Gemini AI generates response**: Creates a natural, conversational answer using the retrieved information
4. **User sees personalized response**: "I have 5+ years of experience as a full-stack developer..."

## Adding Your Information

### Step 1: Go to Admin Dashboard
Visit: `http://localhost:3000/admin`

### Step 2: Add Entries
Click "Add Entry" and fill in:
- **Category**: experience, skills, projects, certifications, or education
- **Content**: Your information (be descriptive for better AI responses)

### Step 3: The Chatbot Learns
Your entries are immediately available to the AI. Test it by asking the chatbot questions!

## Example Entries

### Experience
```
I have 5+ years of professional experience as a full-stack developer. 
I've worked with React, Next.js, Node.js, and cloud technologies like AWS and Vercel.
```

### Skills
```
Frontend: React, Next.js, TypeScript, Tailwind CSS
Backend: Node.js, Express, PostgreSQL
DevOps: AWS, Docker, GitHub Actions
```

### Projects
```
E-Commerce Platform: Built with React and Node.js, integrated Stripe payment processing, 
supports 10,000+ users with real-time inventory tracking.
```

### Certifications
```
AWS Certified Solutions Architect - Professional (2023)
Google Cloud Professional Data Engineer (2023)
Certified Kubernetes Administrator (2022)
```

### Education
```
Bachelor of Science in Computer Science from [University]
GPA: 3.8/4.0
Relevant coursework: Data Structures, Database Management, Cloud Computing, Web Development
```

## Deployment

### Deploy to Vercel

1. **Push to GitHub:**
```bash
git add .
git commit -m "Portfolio with Gemini RAG"
git push origin main
```

2. **Connect to Vercel:**
- Go to https://vercel.com
- Import your GitHub repository
- Add environment variable: `GOOGLE_GENERATIVE_AI_API_KEY`
- Deploy!

### Important: Add Env Variable in Vercel

1. Go to your Vercel project settings
2. Click "Environment Variables"
3. Add: `GOOGLE_GENERATIVE_AI_API_KEY` = your API key
4. Redeploy

## Troubleshooting

### "GOOGLE_GENERATIVE_AI_API_KEY is not set"
- Make sure `.env.local` has the correct API key
- Restart the dev server after adding the file

### Chatbot not responding
- Check that the API key is valid
- Make sure you've added entries to the knowledge base
- Check browser console for errors (F12)

### API Key isn't secret
- Never share or commit your API key
- Use `.env.local` (which is in `.gitignore`)
- For Vercel, use Project Settings → Environment Variables

## File Structure

```
app/
  admin/
    page.tsx           # Admin dashboard
  api/
    chat/route.ts      # Chatbot API
    knowledge/route.ts # Knowledge base API
  layout.tsx           # Main layout with loading screen

components/
  loading-screen.tsx   # Loading animation
  chatbot-widget.tsx   # Chat widget
  knowledge-manager.tsx # Admin panel

lib/
  gemini-rag.ts       # RAG system with Gemini
```

## API Endpoints

### Chat API
```
POST /api/chat
{
  "message": "What's your experience?",
  "sessionId": "optional-session-id"
}
```

### Knowledge Base API
```
GET  /api/knowledge              # Get all entries
POST /api/knowledge              # Add entry
PUT  /api/knowledge              # Update entries
```

## Next Steps

1. ✓ Set up Gemini API key
2. ✓ Run the portfolio locally
3. → Add your information via admin dashboard
4. → Test the chatbot
5. → Customize the theme/design
6. → Deploy to Vercel

---

Happy building! If you have questions, check the console logs or review the source code.
