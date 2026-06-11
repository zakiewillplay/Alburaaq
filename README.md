#☕ Digity – Free Digital QR Menu for Cafés

**Digity** gives your café a beautiful, instant digital menu that customers scan with their phone.  
No app install, no paper menus, no waiting – just seamless ordering, real‑time kitchen alerts, and an AI‑powered menu scanner.

🌐 **Live Demo:** [zakiewillplay.github.io/Digity](https://zakiewillplay.github.io/Digity/)

---

## ✨ Features

- **📱 QR Menu** – generate a unique QR code for your café (and individual tables). Customers scan and browse instantly.
- **🛒 Easy Ordering** – customers add items, choose variants, enter table number, and place orders in seconds.
- **🤖 AI Menu Scanner** – snap a photo of your paper menu and the AI extracts items with prices and variants.
- **🔊 Real‑time Alerts** – new orders appear instantly in the dashboard with a sound alert.
- **📲 Telegram Notifications** – receive order alerts directly on your phone via Telegram.
- **📰 Café News** – post updates, specials, or events that appear on the customer menu.
- **⭐ Digity Spotlight** – advertise your café on other menus (or discover new cafés).
- **🌗 Dark / Light Mode** – looks great day or night.
- **💳 UPI Subscription** – built‑in payment flow with admin approval.
- **📊 Daily Reports** – send a summary of the last 24 hours' orders to your Telegram.

---

## 🧠 Tech Stack

| Layer       | Technology |
|-------------|------------|
| Frontend    | HTML, CSS, JavaScript (vanilla) |
| Backend     | [Supabase](https://supabase.com) (auth, database, realtime, edge functions) |
| AI          | Google Gemini (menu scanner & voice orders) |
| Images      | Unsplash (auto‑fetch) & ImgBB (upload) |
| QR Codes    | qrcode.js & QR Server API |
| Hosting     | GitHub Pages (static) |

---

## 🚀 Getting Started (for café owners)

1. Go to [zakiewillplay.github.io/Digity](https://zakiewillplay.github.io/Digity/) and tap **Get Started Free**.
2. Sign up with your email – you get a **1‑month free trial**.
3. In the dashboard:
   - Add your menu items (or use the AI scanner).
   - Customize your colors and upload a logo.
   - Generate a QR code and print it for your tables.
4. Share the QR code – customers scan, order, and you get instant alerts.

---

## 👑 Admin Panel

Super admins can manage all cafés, approve UPI payments, set subscription prices, and choose featured cafés for the Spotlight.

---

## 📦 Run Locally

Just clone the repo and serve the folder with any static server (e.g., `npx serve`).  
All API keys are already configured in the Supabase edge functions – no local setup needed for the database.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to improve.

---

## 📄 License

MIT – free to use, modify, and distribute.
