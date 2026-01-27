# Paul Brugman - Cybersecurity Portfolio

A premium, interactive personal portfolio website built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.  
This project showcases a professional transition from Android Development to Cybersecurity, featuring a dark-mode aesthetic with neon accents and smooth animations.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🚀 Features

-   **Cybersecurity Theme:** Dark mode UI with grid patterns, glowing effects, and terminal-inspired fonts.
-   **Interactive Timeline:** Experience section visualizing career progression.
-   **Animated Entrance:** Smooth component transitions using Framer Motion.
-   **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
-   **Dynamic Content:** Sections for About, Experience, Education, Certifications, and Contact.

## 🛠️ Tech Stack

-   **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animation:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Deployment:** [Vercel](https://vercel.com/) (Recommended)

## 📦 Installation

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Selmeny/personal_website.git
    cd "personal_website"
    ```

2.  **Install dependencies:**
    *(Note: Using `--legacy-peer-deps` may be required due to React 19 beta compatibility)*
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
src/
├── app/
│   ├── layout.tsx      # Root layout (fonts, global styles)
│   ├── page.tsx        # Main landing page (sections assembly)
│   └── globals.css     # Global Tailwind directives
├── components/
│   ├── Hero.tsx        # Landing section with animations
│   ├── About.tsx       # Bio and introduction
│   ├── Experience.tsx  # Interactive timeline
│   ├── Certifications.tsx # Grid of degrees & certs
│   └── Contact.tsx     # Footer and social links
```

## ⚠️ Troubleshooting

**Build Failures (EPERM / OneDrive):**
If you are running this project inside a OneDrive-synced folder on macOS/Windows, you may encounter `EPERM` (permission) errors during `npm install` or `build`.
**Fix:** Move the project folder to a location *outside* of OneDrive (e.g., `~/Projects/`) and reinstall dependencies.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Based in Brisbane, Australia.
[LinkedIn](https://www.linkedin.com/in/paulmbrugman/) | [Seek Profile](https://www.seek.com.au/profiles/paul-brugman-DvJggdsvwl)
