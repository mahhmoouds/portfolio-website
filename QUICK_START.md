# Quick Start Guide

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```
   > Note: For local testing, you can use a test API key from [Resend](https://resend.com)

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Before Deployment

1. **Update Contact Form Email**
   - Edit `app/api/contact/route.ts`
   - Replace `onboarding@resend.dev` with your verified email domain
   - Update the `to` field if needed (currently set to `mi2371384@gmail.com`)

2. **Update Project Links**
   - Edit `components/Education.tsx`
   - Update the graduation project document and GitHub repository links (currently placeholders)

3. **Verify All Information**
   - Check all personal details in `components/Hero.tsx`
   - Verify education details in `components/Education.tsx`
   - Review skills and volunteering sections

## Build for Production

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

## Deploy to Cloudflare Pages

See `DEPLOYMENT.md` for detailed instructions.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Skills.tsx
│   └── Volunteering.tsx
├── public/                # Static assets
└── ...config files
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Content
- Personal info: `components/Hero.tsx`
- About section: `components/About.tsx`
- Education: `components/Education.tsx`
- Skills: `components/Skills.tsx`
- Volunteering: `components/Volunteering.tsx`

### Styling
Global styles are in `app/globals.css`. Component-specific styles use Tailwind CSS classes.

## Troubleshooting

### Contact Form Not Working
- Verify `RESEND_API_KEY` is set in `.env.local`
- Check browser console for errors
- Ensure email domain is verified in Resend dashboard

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (requires 18+)
- Clear `.next` directory and rebuild

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check that `postcss.config.js` exists
- Verify `tailwind.config.ts` includes all content paths

