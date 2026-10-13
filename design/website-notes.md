# Buildmate Website Notes

## Current implementation

The homepage is a dependency-free, responsive static site in `index.html`. It uses embedded CSS and JavaScript for now, so it can be previewed without a build step.

## Brand

- Name: Buildmate
- Motto: We Build. We Test. We Fix. We Maintain.
- Initial audience: web design and marketing agencies that need a reliable delivery partner, plus startups with clearly scoped website work.
- Tone: direct, human, collaborative, honest about the team's stage.

## Homepage narrative

1. **Promise:** the four-part motto.
2. **Proof:** verified project metrics. The homepage displays 3 live projects and 5 completed project/deliverable items based on the founder’s current account; confirm counting method before launch.
3. **Origin:** a group of friends with complementary skills building a focused delivery team.
4. **Offer:** web development, UI/UX, QA, and maintenance/support.
5. **Work:** case-study slots with an explicit warning to replace them with real work or label demos honestly.
6. **Process:** understand, plan, build, test/refine, launch/support.
7. **Principles:** clear communication, quality checks, and partnership.
8. **CTA:** start a project conversation.

## Before launch

- The homepage currently displays 3 live projects and 5 completed project/deliverable items based on the founder’s account; confirm that these are the preferred counting method before launch.
- Replace case-study placeholders with actual work, or remove them until the team has suitable examples.
- Replace `REPLACE_WITH_REAL_BUSINESS_EMAIL` in the contact button with the business email.
- Replace the temporary Unsplash imagery with approved team and project photos where possible.
- Confirm that all services shown are currently deliverable; SEO and content are described as future roadmap items.
- Check accessibility, mobile layout, performance, and all links on real devices.
- If using third-party images, verify their license/terms and keep the required attribution if applicable.

## Deploying

This is a static `index.html` page. It can be deployed to GitHub Pages, Netlify, Vercel, or another static host without a framework build command.


## Pricing section

The homepage includes indicative guide pricing: manual QA from $20/hour; web development landing pages by custom fixed-scope quote; maintenance and fixes by custom quote. Confirm the rate and exact scope before launch. Browser zoom is a user/browser preference and cannot be reliably synchronized between separate pages with website code.


## Asset structure

- `assets/css/styles.css`: homepage styles.
- `assets/css/work.css`: portfolio page styles.
- `assets/js/main.js`: homepage navigation, year, and reveal effects.
- `assets/js/work.js`: work-page navigation, year, and category filters.

The contact CTA uses the supplied address `BRISHAYCHAUHAN3357@gmail.com`. Confirm spelling before launch.
