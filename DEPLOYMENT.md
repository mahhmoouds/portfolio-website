# Deployment Guide - Cloudflare Pages

This guide will help you deploy your portfolio website to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account (free tier works)
2. A GitHub account
3. A Resend API key (for contact form functionality)

## Step 1: Get Your Resend API Key

1. Sign up at [Resend.com](https://resend.com)
2. Create an API key in the dashboard
3. Save it for later use

## Step 2: Prepare Your Repository

1. Push your code to GitHub
2. Make sure all files are committed

## Step 3: Deploy to Cloudflare Pages

### Option A: Using Cloudflare Dashboard (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Select your GitHub account and authorize Cloudflare
6. Choose your repository (`portfolio-website`)
7. Configure build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
   - **Root directory:** `/` (leave as default)
   - **Node.js version:** 18 or higher
8. Click **Save and Deploy**

### Option B: Using Wrangler CLI

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Build your project:
```bash
npm run build
```

4. Deploy:
```bash
wrangler pages deploy .next
```

## Step 4: Configure Environment Variables

1. In Cloudflare Pages dashboard, go to your project
2. Navigate to **Settings** > **Environment Variables**
3. Add the following variable:
   - **Variable name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key
   - **Environment:** Production (and Preview if needed)
4. Click **Save**

## Step 5: Update Contact Form Email

1. In `app/api/contact/route.ts`, update the `from` field:
   - Replace `onboarding@resend.dev` with your verified domain email
   - Or use a verified email address from Resend

## Step 6: Custom Domain (Optional)

1. In Cloudflare Pages dashboard, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain name
4. Follow the DNS configuration instructions

## Troubleshooting

### Contact Form Not Working

- Verify `RESEND_API_KEY` is set correctly in environment variables
- Check that you're using a verified email address in the `from` field
- Review Cloudflare Pages function logs for errors

### Build Fails

- Ensure Node.js version is 18 or higher
- Check that all dependencies are listed in `package.json`
- Review build logs in Cloudflare dashboard

### API Routes Not Working

- Cloudflare Pages supports Next.js API routes through Pages Functions
- Make sure your API routes are in the `app/api` directory
- The `@cloudflare/next-on-pages` adapter handles the conversion automatically

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Resend Documentation](https://resend.com/docs)

