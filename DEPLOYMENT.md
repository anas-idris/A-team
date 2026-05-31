# Deployment Checklist

## Pre-Deployment

- [ ] All environment variables documented in `.env.production.example`
- [ ] Sanity schema deployed (via `sanity deploy` or Sanity Dashboard)
- [ ] Portfolio content created in Sanity (if using)
- [ ] Plausible account created and domain configured
- [ ] Build passes locally: `npm run build`

## Netlify Setup

1. **Create Site**
   - [ ] Log in to https://app.netlify.com
   - [ ] Click "Add new site" → "Import an existing project"
   - [ ] Connect GitHub repository
   - [ ] Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

2. **Environment Variables**
   - [ ] `SANITY_PROJECT_ID` — from Sanity Dashboard
   - [ ] `SANITY_DATASET` — `production`
   - [ ] `SANITY_TOKEN` — read token from Sanity Dashboard (Settings → API → Create token)
   - [ ] `PLAUSIBLE_DOMAIN` — your Plausible domain
   - [ ] `SITE` — your production URL
   - [ ] `GOOGLE_PLAY_URL` — Google Play URL

3. **Domain Configuration**
   - [ ] Add custom domain in Netlify Dashboard → Domain Settings
   - [ ] Update DNS records with your registrar (see Story 12.3)
   - [ ] Verify SSL certificate auto-provisioned

4. **Notifications**
   - [ ] Go to Site Settings → Forms
   - [ ] Enable Email notifications
   - [ ] Set notification recipient: `bisquery@gmail.com`

## Sanity CMS Setup

1. **Initialize Project**
   ```bash
   cd sanity
   sanity init
   ```

2. **Deploy Schema**
   ```bash
   sanity deploy
   ```

3. **Create Portfolio Items**
   - Go to Sanity Studio: `https://your-project.sanity.studio`
   - Create portfolio items with all required fields
   - Upload images via Sanity Media Library

4. **Create Read Token**
   - Go to Sanity Dashboard → Settings → API
   - Create new token with "Reader" role
   - Copy token to Netlify environment variables

## Post-Deployment

- [ ] Visit production URL and verify:
  - [ ] All sections render correctly
  - [ ] Contact form submits successfully
  - [ ] Navigation links work
  - [ ] Mobile responsive
- [ ] Run Lighthouse audit:
  - [ ] Performance ≥ 90
  - [ ] Accessibility ≥ 95
  - [ ] Best Practices ≥ 95
  - [ ] SEO ≥ 95
- [ ] Verify sitemap.xml accessible at `/sitemap.xml`
- [ ] Verify robots.txt accessible at `/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Plausible analytics tracking

## Troubleshooting

- **Build fails**: Check Netlify build logs for error details
- **Forms not working**: Verify Netlify Forms is enabled for the site
- **Sanity content missing**: Check environment variables and Sanity schema deployment
- **404 on refresh**: Verify `_headers` or `netlify.toml` redirect rules
