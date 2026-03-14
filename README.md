# metyatech-site

Official marketing and policy site for `metyatech.com`, including the public product pages for Meal Autopilot.

## Supported environment

- Node.js 20+
- npm 10+
- Vercel for deployment

## Pages

- `/` company landing page
- `/meal-autopilot` product overview
- `/meal-autopilot/support` support page
- `/meal-autopilot/privacy` privacy policy
- `/meal-autopilot/terms` terms of service
- `/meal-autopilot/legal-notice` specified commercial transactions notice

## Setup

```bash
npm install
npx compose-agentsmd --compose
```

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run verify
```

## Deployment

```bash
npx vercel
```

For production:

```bash
npx vercel --prod
```

Then attach `metyatech.com` and any required subdomains in the Vercel project settings.

## Configuration

This site currently uses no runtime environment variables.

## Related links

- [SECURITY.md](SECURITY.md)
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [LICENSE](LICENSE)
- [CHANGELOG.md](CHANGELOG.md)
