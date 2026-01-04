# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This portfolio showcases education, skills, projects, and volunteering experience.

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Mobile-first approach
- 🌙 Dark mode support
- 📧 Contact form with Resend API integration
- ⚡ Fast performance with Next.js 15
- 🎯 SEO optimized
- ♿ Accessible design

## Tech Stack

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email Service:** Resend API

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on Cloudflare Pages. Set the `RESEND_API_KEY` environment variable in your deployment platform.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact form
│   ├── Education.tsx         # Education section
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section
│   ├── Navigation.tsx        # Navigation bar
│   ├── Skills.tsx            # Skills section
│   └── Volunteering.tsx      # Volunteering section
└── public/                   # Static assets
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Mahmoud Aly
- Email: mi2371384@gmail.com
- LinkedIn: [mahmoud-alyy](https://www.linkedin.com/in/mahmoud-alyy)
- GitHub: [mahhmoouds](https://github.com/mahhmoouds)

