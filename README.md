# veyra

> Understand long educational videos without watching every minute.

veyra is an AI-powered tool that breaks long YouTube videos into focused 5-minute sections and helps you understand what each part is about.

Instead of going through an entire video to find the information you need, veyra gives you a structured breakdown of the video.

## What it does

Paste a YouTube video URL and veyra:

1. Fetches the video transcript.
2. Splits the transcript into 5-minute sections.
3. Uses **Gemma** to analyze each section.
4. Generates:
   - Topic
   - Summary
   - Key points
   - Concepts
   - Useful resources

The goal is not to replace the original video, but to make long videos easier to explore.

## Project Structure

```text
veyra/
│
├── app/
│   ├── api/
│   │   └── analyze/
│   │       ├── route.ts
│   │       └── ai/
│   │           └── route.ts
│   │
│   ├── contribute/
│   │   └── page.tsx
│   │
│   ├── dashboard/
│   │   └── page.tsx
│   │
│   ├── icon.png
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Dashboard.tsx
│   ├── Dashboardnav.tsx
│   ├── VideoInput.tsx
│   ├── VideoProcessing.tsx
│   ├── VideoResults.tsx
│   │
│   └── LandingPage/
│       ├── Hero.tsx
│       ├── HowItWorks.tsx
│       ├── Testimonials.tsx
│       ├── Footer.tsx
│       └── Navbar.tsx
│
├── public/
│   ├── ...
│   └── veyraThumbnail.png
│
├── .env.local
├── LICENSE
├── package.json
├── README.md
└── tsconfig.json
```

### Main directories

- `app/` — Next.js pages, layouts, and API routes.
- `app/api/analyze/` — Fetches transcripts and splits them into 5-minute sections.
- `app/api/analyze/ai/` — Sends sections to Gemma and processes the AI response.
- `app/dashboard/` — Dashboard page where videos are analyzed.
- `app/contribute/` — Contribution and local development guide.
- `components/` — Reusable UI components.
- `components/LandingPage/` — Landing page sections.
- `public/` — Static assets and images.

## How it works

```text
YouTube URL
     ↓
Transcript
     ↓
5-minute sections
     ↓
Gemma
     ↓
Structured results
```

### 1. YouTube URL

The user pastes a YouTube video URL into the dashboard.

### 2. Transcript

veyra fetches the transcript of the video.

If the primary transcript method fails, a fallback transcript service is used.

### 3. 5-minute sections

The transcript is divided into 5-minute sections.

Each section contains:

- Start time
- End time
- Transcript

### 4. Gemma

Each section is sent to **Gemma** for analysis.

Gemma identifies:

- The topic
- A short summary
- Important key points
- Concepts mentioned
- Useful related resources

### 5. Structured results

The processed sections are displayed in the dashboard so users can explore the video without going through the entire video manually.

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### AI

- Gemma
- Google GenAI SDK

### Backend

- Next.js API Routes
- YouTube Transcript

### Deployment

- Vercel

## Getting Started

### Prerequisites

Make sure you have:

- Node.js
- npm
- Google AI API key

### Clone the repository

```bash
git clone https://github.com/Tsaishashanth/veyra.git
cd veyra
```

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env.local` file in the root of the project:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Never commit your API key to GitHub.

### Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Development Workflow

Create a new branch before making changes:

```bash
git checkout -b feature/your-feature
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

After testing your changes:

```bash
git add .
git commit -m "feat: describe your change"
git push
```

Then open a Pull Request on GitHub.

## Contributing

Contributions are welcome.

You can contribute by:

- Fixing bugs
- Improving the UI
- Improving transcript handling
- Improving AI prompts
- Improving the video analysis pipeline
- Adding new features
- Improving documentation

Before contributing, please check the [Contribute](https://aiveyra.vercel.app/contribute) page for the project setup and contribution guidelines.


## Security

Never commit API keys or other sensitive information.

Your `.env.local` file should remain local and should never be pushed to GitHub.

If an API key is accidentally exposed:

1. Revoke the exposed key.
2. Generate a new key.
3. Update your local `.env.local` file.

## Open Source

veyra is open source and contributions are welcome.

The project uses **Gemma** as its open-weight AI model and is designed so developers can inspect, modify, and improve the application.

If you find a bug, have an idea, or want to improve veyra, feel free to open an issue or submit a pull request.

## License

veyra is licensed under the MIT License.

See the [LICENSE](./LICENSE) file for details.

## Links

- [Live Demo](https://aiveyra.vercel.app)
- [GitHub](https://github.com/Tsaishashanth/veyra)
- [Contribute](https://aiveyra.vercel.app/contribute)

## Built by

**Shashanth**

Open source & built by Shashanth.
