# HandPi Games

Computer-vision portfolio project for real-time hand gesture recognition in a web app.

## Project status

Active as a **portfolio/demo project**.

This repository is the canonical HandPi project.  
Historical academic baseline is archived at:  
`Amirofcodes/IT-akademy-PROJECT-IoT-HandPi-Games`.

---

## What it demonstrates

- Real-time hand gesture recognition using camera input
- End-to-end fullstack setup (frontend + backend)
- AI/ML inference integrated into an interactive UX
- Containerized local run and reproducible environment

---

## Stack (current)

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Flask, OpenCV, MediaPipe, scikit-learn
- **Infra/Dev:** Docker Compose

---

## Quick start

```bash
git clone https://github.com/Amirofcodes/HandPi-Games.git
cd HandPi-Games
cp compose/.env.example compose/.env
cd compose && docker compose up -d
```

Then open the app on your local environment and allow camera access.

---

## Scope note

This is a practical demo project intended to showcase computer-vision integration and fullstack delivery.
It is not positioned as a production SaaS product.

---

## License

MIT
