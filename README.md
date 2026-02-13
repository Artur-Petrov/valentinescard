💖 Valentine's Interactive Card
A modern, interactive web application built to demonstrate core frontend development skills, featuring a playful "escaping" button and a festive confetti celebration.

🔗 Live Demo
View Project Live

🚀 Tech Stack
React 19 – Used for building the user interface and managing component lifecycle.

TypeScript – Implemented for strict typing to ensure code stability (using interfaces for position tracking).

Vite – Utilized as a high-performance build tool and development server.

Tailwind CSS – Leveraged for utility-first styling and responsive design.

Canvas-confetti – Integrated to provide a high-quality visual reward upon interaction.

✨ Key Features
Smart Escape Logic: Developed a custom algorithm with a minimum distance threshold to ensure the "No" button dynamically repositions without appearing directly under the cursor.

State Management: Orchestrated useState and useEffect hooks to synchronize button movements and celebratory effects.

UX & Accessibility: Included tabIndex={-1} on the escaping button to prevent keyboard selection, ensuring the interactive "joke" remains consistent across input methods.

CI/CD Pipeline: Configured an automated deployment workflow to GitHub Pages using the gh-pages package.

🛠️ Installation & Local Setup
Clone the repository:

Bash
git clone https://github.com/artur-petrov/valentinescard.git
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Build for production:

Bash
npm run build
