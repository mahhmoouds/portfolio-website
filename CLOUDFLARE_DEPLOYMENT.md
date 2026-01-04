# Cloudflare Pages Deployment Guide

## ✅ Code Pushed to GitHub

Your code has been successfully pushed to: **https://github.com/mahhmoouds/portfolio-website.git**

## Step-by-Step Cloudflare Deployment

### Step 1: Sign Up / Login to Cloudflare

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Sign up for a free account or log in if you already have one

### Step 2: Navigate to Pages

1. In the Cloudflare dashboard, click on **"Pages"** in the left sidebar
2. Click **"Create a project"** button

### Step 3: Connect Your GitHub Repository

1. Click **"Connect to Git"**
2. You'll be prompted to authorize Cloudflare to access your GitHub account
3. Click **"Authorize Cloudflare"** and follow the prompts
4. Select your GitHub account
5. Find and select the repository: **`mahhmoouds/portfolio-website`**
6. Click **"Begin setup"**

### Step 4: Configure Build Settings

Configure the following settings:

- **Project name:** `portfolio-website` (or any name you prefer)
- **Production branch:** `main`
- **Framework preset:** Select **"Next.js"** from the dropdown
- **Build command:** `npm run build`
- **Build output directory:** `.next`
- **Root directory:** `/` (leave as default)
- **Node.js version:** Select **18** or higher (18.x or 20.x recommended)

### Step 5: Add Environment Variables

**IMPORTANT:** Before deploying, you must add your Resend API key.

1. Scroll down to the **"Environment variables"** section
2. Click **"Add variable"**
3. Add the following:
   - **Variable name:** `RESEND_API_KEY`
   - **Value:** `re_FHuJ5PTm_2Aid3rCfJ2ak7yL3eHQeD64M`
   - **Environment:** Select **"Production"** (and optionally **"Preview"** if you want it for preview deployments too)
4. Click **"Save"**

### Step 6: Deploy

1. Review all your settings
2. Click **"Save and Deploy"**
3. Cloudflare will start building your project
4. Wait for the build to complete (usually 2-5 minutes)

### Step 7: Access Your Website

Once deployment is complete:

1. You'll see a success message with your website URL
2. Your portfolio will be available at: `https://portfolio-website.pages.dev` (or similar)
3. Click on the URL to view your live website

## Post-Deployment Steps

### Update Contact Form Email (Optional but Recommended)

1. Go to [Resend Dashboard](https://resend.com)
2. Verify your domain or use the default `onboarding@resend.dev` (works for testing)
3. If you want to use a custom email, update `app/api/contact/route.ts`:
   - Change line 20: `from: "Portfolio Contact <onboarding@resend.dev>"`
   - Replace with your verified email domain
4. Commit and push the changes - Cloudflare will automatically redeploy

### Custom Domain (Optional)

1. In Cloudflare Pages dashboard, go to your project
2. Click on **"Custom domains"** tab
3. Click **"Set up a custom domain"**
4. Enter your domain name (e.g., `yourname.com`)
5. Follow the DNS configuration instructions
6. Cloudflare will automatically provision SSL certificates

## Troubleshooting

### Build Fails

**Issue:** Build command fails
- **Solution:** Check the build logs in Cloudflare dashboard
- Ensure Node.js version is 18 or higher
- Verify all dependencies are in `package.json`

**Issue:** Environment variables not working
- **Solution:** 
  - Make sure `RESEND_API_KEY` is set in Cloudflare Pages environment variables
  - Check that it's set for the correct environment (Production/Preview)
  - Redeploy after adding environment variables

### Contact Form Not Working

**Issue:** Contact form shows error
- **Solution:**
  1. Verify `RESEND_API_KEY` is correctly set in Cloudflare environment variables
  2. Check browser console for errors
  3. Verify the API key is valid in Resend dashboard
  4. Check Cloudflare Pages function logs for errors

### API Routes Not Working

**Issue:** `/api/contact` endpoint returns 404
- **Solution:** 
  - Cloudflare Pages supports Next.js API routes automatically
  - Make sure your API route is in `app/api/contact/route.ts`
  - The route should work automatically with Next.js 15 on Cloudflare Pages

## Updating Your Website

After making changes:

1. Make your changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. Cloudflare will automatically detect the push and redeploy
4. Your changes will be live in 2-5 minutes

## Useful Links

- **Your Repository:** https://github.com/mahhmoouds/portfolio-website.git
- **Cloudflare Dashboard:** https://dash.cloudflare.com
- **Resend Dashboard:** https://resend.com
- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/

## Support

If you encounter any issues:

1. Check the build logs in Cloudflare Pages dashboard
2. Review the function logs for API errors
3. Verify all environment variables are set correctly
4. Check the Cloudflare Pages documentation

---

**Your Resend API Key:** `re_FHuJ5PTm_2Aid3rCfJ2ak7yL3eHQeD64M`  
**Make sure to add this as an environment variable in Cloudflare Pages!**

