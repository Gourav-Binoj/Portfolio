# Quick Start - 5 Minutes to Go Live

## Step 1: Get API Key (1 min)
```
Go to: https://aistudio.google.com/apikey
Click: Create API Key
Copy: The key
```

## Step 2: Add to Project (1 min)
Create file `.env.local` in project root:
```
GOOGLE_GENERATIVE_AI_API_KEY=paste_your_key_here
```

## Step 3: Run Locally (1 min)
```bash
cd your-portfolio-folder
pnpm dev
# or: npm run dev
```

Open browser: `http://localhost:3000`

## Step 4: Add Your Info (2 min)
Visit: `http://localhost:3000/admin`

Click "Add Entry" and add:
- Your experience (category: experience)
- Your skills (category: skills)
- Your projects (category: projects)
- Your certifications (category: certifications)
- Your education (category: education)

## Step 5: Test Chatbot
- Click chat bubble in bottom-right
- Ask: "What's your experience?"
- See AI respond with YOUR information!

---

## Deploy to Vercel

```bash
git add .
git commit -m "Portfolio with AI chatbot"
git push origin main
```

Then on Vercel Dashboard:
1. Import your GitHub repo
2. Add environment variable: `GOOGLE_GENERATIVE_AI_API_KEY`
3. Deploy!

---

## Key URLs

| URL | Purpose |
|-----|---------|
| http://localhost:3000 | Your portfolio |
| http://localhost:3000/admin | Manage knowledge base |
| /api/chat | Chat API endpoint |
| /api/knowledge | Knowledge API endpoint |

---

## Features You Have

✅ Loading screen animation
✅ AI chatbot powered by Gemini
✅ RAG (retrieves your info, then generates response)
✅ Custom cursor animations
✅ Session management
✅ Admin dashboard
✅ All sections (home, about, projects, certs, footer)

---

## Common Questions

**Q: Where's my API key stored?**
A: In `.env.local` (never committed to Git)

**Q: Can I use my own database?**
A: Yes! Update `lib/gemini-rag.ts` to use Neon

**Q: How do I change colors?**
A: Edit `app/globals.css` - look for `@theme` section

**Q: Will the chatbot work without adding info?**
A: Yes, but it'll use default sample data. Add your info for best results!

**Q: Is my API key safe?**
A: Yes - it's in `.env.local` which is in `.gitignore`

---

## Files to Edit

| File | What to Edit |
|------|-------------|
| `app/globals.css` | Colors, theme, design tokens |
| `components/hero.tsx` | Hero section text |
| `components/about.tsx` | About section |
| `components/projects.tsx` | Projects display |
| `components/certificates.tsx` | Certifications |
| `components/footer.tsx` | Social links |
| `app/admin/page.tsx` | Admin dashboard |

---

## Environment Variables

Only ONE required variable:
```
GOOGLE_GENERATIVE_AI_API_KEY=your_key_from_aistudio.google.com/apikey
```

---

**You're all set! Follow these 5 steps and you'll have an AI-powered portfolio. 🚀**
