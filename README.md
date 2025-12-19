# Photo Gallery

A curated collection of my favorite photos from travels and daily life. Built with Next.js and Tailwind CSS.

## 📸 Overview

This application serves as a personal photo gallery, showcasing high-quality images with a focus on visual presentation and technical performance. It utilizes a masonry layout for an elegant display and includes detailed EXIF data for photography enthusiasts.

**Key Features:**
- **Masonry Layout:** Optimal use of screen space for images of varying aspect ratios.
- **Lightbox Support:** High-resolution image viewing with `lightgallery`.
- **EXIF Data Extraction:** Automatically parses and displays camera settings (Aperture, ISO, Shutter Speed, etc.) using `exifreader`.
- **GitHub-based Content:** Fetches photo data dynamically from a GitHub repository using `octokit`.
- **Responsive Design:** Fully responsive interface built with Tailwind CSS.

## ⚒️ Development

1. Create a `.env` file in the root directory and add your GitHub token:
   ```env
   GITHUB_TOKEN=your_github_token_here
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤖 GitHub Actions

Integrated with GitHub Actions to automatically run code checks (linting, prettier) on push to the main branch.