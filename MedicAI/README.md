# 🏥 Medic – AI Medical Note Summarizer

**MedicAI** is a responsive, user-friendly web application that helps patients simplify complex doctor consultation notes into easy-to-understand summaries using AI. Built with React and Tailwind CSS, the app is designed for clarity, accessibility, and trust — especially for users with low medical literacy.

---


## ✨ Features

- 📤 Upload doctor notes in `.txt`, `.pdf`, `.jpg`, `.jpeg`, `.png`
- 📝 Paste notes manually using the text input
- 👨‍⚕️ Mode toggle: **Patient Mode** (simple) vs **Doctor Mode** (technical)
- 🤖 AI-generated summary *(coming soon with GPT-4)*
- 🧾 Summary includes: diagnosis, medications, lifestyle steps
- 📱 Fully responsive: works beautifully on phones, tablets, and desktops
- 🎨 Soft healthcare-themed UI with icons and micro-interactions

---

## 🧠 Tech Stack

| Area                   | Tech Used                      |
|------------------------|--------------------------------|
| Frontend               | React, Tailwind CSS            |
| Icons                  | Lucide React                   |
| Backend *(Planned)*    | FastAPI, OpenAI API, Tesseract OCR |
| Deployment *(Planned)* | Vercel or Netlify              |

---

## 🚀 Getting Started (Local Setup)



### 3. Start Development Server
```bash
npm start
```

The application will open at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
medihelp/
│
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── FileUpload.js
│   │   ├── TextInput.js
│   │   ├── ModeToggle.js
│   │   └── Summary.js
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🎯 Roadmap

- [x] **Phase 1**: Frontend UI/UX with React & Tailwind
- [ ] **Phase 2**: Backend API with FastAPI
- [ ] **Phase 3**: OpenAI GPT-4 integration for AI summaries
- [ ] **Phase 4**: OCR support for image uploads (Tesseract)
- [ ] **Phase 5**: User authentication and history
- [ ] **Phase 6**: Multi-language support
- [ ] **Phase 7**: Mobile app development

---

## 🔧 Environment Variables


```

---

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for continuous deployment

---





## 🏥 Disclaimer

**Important**: MediHelp is designed to help simplify medical notes for better understanding. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical decisions.
