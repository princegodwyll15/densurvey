This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Public website content and requests

The landing page incorporates the supplied Robo Club HTML: five learning pathways and fees, the learning journey, NMBCF community impact, FAQs, registration, and organization partner-code requests. Existing branding, photography, gallery, and administration routes are retained.

Registration fields are defined in `src/constants/registration.json`; FAQs are in `src/constants/faq.json`. Program links select the matching registration form using `?program=…#register`.

Registration and partner requests are validated on the server and emailed through the existing Resend integration (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and optional `CONTACT_FROM_EMAIL`). These requests do not automatically create student accounts or process payments. Partner codes are forwarded for staff verification; sample discount codes from the HTML are not enabled. Success is shown only after the email provider accepts the request.

The supplied HTML marks its testimonial quotes, analytics identifier, and discount codes as examples. These are intentionally not published or activated. Replace them with approved content/configuration before adding those features. Program prices use the amounts supplied in the HTML.
