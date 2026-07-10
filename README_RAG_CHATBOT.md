# Your Portfolio with RAG + Gemini AI Chatbot

## What's Been Set Up

✅ **Loading Screen** - Beautiful animated loading screen (2.5 seconds)
✅ **RAG System** - Retrieval Augmented Generation with Google Gemini
✅ **Chatbot Widget** - Floating AI assistant in bottom-right corner
✅ **Admin Dashboard** - Manage your knowledge base at `/admin`
✅ **Custom Cursor** - Interactive cursor with hover effects
✅ **API Endpoints** - Chat API (`/api/chat`) and Knowledge API (`/api/knowledge`)

## What You Need to Do

### 1️⃣ Add Your Gemini API Key

Create `.env.local` in the project root:

```
GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
```

Get your key: https://aistudio.google.com/apikey

### 2️⃣ Run Locally

```bash
npm run dev
# or
pnpm dev
```

Visit: http://localhost:3000

### 3️⃣ Add Your Information

Go to: http://localhost:3000/admin

Add entries about:
- Your experience
- Skills
- Projects
- Certifications
- Education

### 4️⃣ Test the Chatbot

Click the chat bubble and ask questions:
- "What's your experience?"
- "Tell me about your skills"
- "What projects have you built?"
- "Do you have any certifications?"

The AI will respond using YOUR information!

### 5️⃣ Customize the Design

Edit `app/globals.css` to change:
- Colors and theme
- Fonts and typography
- Spacing and layouts

### 6️⃣ Deploy to Vercel

```bash
git add .
git commit -m "Portfolio with Gemini RAG"
git push origin main
```

Then on Vercel:
1. Add `GOOGLE_GENERATIVE_AI_API_KEY` environment variable
2. Deploy!

---

## File Structure

```
app/
├── admin/page.tsx              # Knowledge base manager
├── api/
│   ├── chat/route.ts           # Chatbot endpoint
│   └── knowledge/route.ts       # Knowledge management
├── layout.tsx                  # Root layout with loading screen
└── page.tsx                    # Home page

components/
├── loading-screen.tsx          # Loading animation
├── chatbot-widget.tsx          # Chat widget
├── knowledge-manager.tsx       # Admin panel
└── ...other components

lib/
└── gemini-rag.ts              # RAG + Gemini integration

SETUP_GUIDE.md                 # Detailed setup instructions
```

## How It Works

```
User Question
    ↓
Search Knowledge Base
    ↓
Retrieve Relevant Info (RAG)
    ↓
Send to Gemini AI
    ↓
Generate Response
    ↓
Display to User
```

## Example Workflow

1. **You add to knowledge base:**
   ```
   "I built an e-commerce platform using React, Node.js, 
    and PostgreSQL that handles 10,000+ daily transactions"
   ```

2. **User asks chatbot:**
   ```
   "What's your biggest project?"
   ```

3. **System retrieves your entry** and sends context to Gemini

4. **Gemini generates:** 
   ```
   "One of my biggest projects is an e-commerce platform 
    built with React and Node.js that processes thousands 
    of transactions daily..."
   ```

## Features Included

- **Loading Screen** - Professional animated intro
- **RAG (Retrieval Augmented Generation)** - Smart context retrieval
- **Gemini Integration** - Uses Google's latest AI model
- **Session Management** - Conversation history per user
- **Knowledge Management** - Easy admin interface
- **Responsive Design** - Works on all devices
- **Custom Cursor** - Unique interactive cursor
- **Error Handling** - Graceful fallbacks

## Customization Ideas

- Change theme colors in `globals.css`
- Update portfolio sections in `components/`
- Add more knowledge entry categories
- Customize loading screen animation
- Modify chatbot personality/system prompt
- Add more portfolio sections

## Troubleshooting

**Q: "API key not set" error**
A: Create `.env.local` with your API key and restart dev server

**Q: Chatbot not responding**
A: Make sure you added entries to the knowledge base in `/admin`

**Q: Portal looks plain**
A: Edit `globals.css` to customize colors and theme

**Q: Want to use database instead of in-memory storage?**
A: Update `lib/gemini-rag.ts` to use Neon PostgreSQL (already configured!)

---

## Next Steps

1. Add your Gemini API key to `.env.local`
2. Run `npm run dev`
3. Visit `http://localhost:3000/admin` and add your information
4. Test the chatbot at `http://localhost:3000`
5. Customize colors and design
6. Deploy to Vercel

**Enjoy your new AI-powered portfolio!** 🚀
