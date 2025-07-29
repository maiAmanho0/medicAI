# 🏥 MediHelp – AI Medical Note Summarizer

**MediHelp** is a responsive, user-friendly web application that helps patients simplify complex doctor consultation notes into easy-to-understand summaries using AI. Built with React and Tailwind CSS, the app is designed for clarity, accessibility, and trust — especially for users with low medical literacy.

---

## 📸 Screenshot Preview

![MediHelp Interface](https://github.com/user-attachments/assets/1ecd2fc0-3e9a-413b-a573-fb20c32d8c8b)

![Upload Feature](https://github.com/user-attachments/assets/78e8b918-b23d-49e3-b506-5fbaed078dcb)

![Summary Output](https://github.com/user-attachments/assets/3265f49d-89e1-4178-8443-4a1cdabb3d87)

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

### 1. Clone the Repository
```bash
git clone https://github.com/therealvinayak/medihelp.git
cd medihelp
```

### 2. Install Dependencies
```bash
npm install
```

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

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_OPENAI_API_KEY=your_openai_api_key
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

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- UI inspiration from modern healthcare applications
- Thanks to the open-source community for amazing tools and libraries

---

## 👤 Author

**Vinayak Vinod**
- GitHub: [@therealvinayak](https://github.com/therealvinayak)
- LinkedIn: [Connect with me](https://linkedin.com/in/therealvinayak)

---

## 📞 Support

If you have any questions or need help, please:
- Open an [issue](https://github.com/therealvinayak/medihelp/issues)
- Reach out via email: vinayak@example.com

---

⭐ **If you find this project helpful, please consider giving it a star!**

---

## 🏥 Disclaimer

**Important**: MediHelp is designed to help simplify medical notes for better understanding. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical decisions.
