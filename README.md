# Frugloo Landing Page

Welcome to the Frugloo landing page! This is a modern, responsive landing page built with React, TypeScript, and Tailwind CSS.

## Environment Setup

### Formspree Configuration

To enable the waitlist email functionality, you need to set up a Formspree form:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy the form ID
3. Create a `.env` file in the root directory with:
   ```
   VITE_FORMSPREE_FORM_ID=your_form_id_here
   ```

### Development

```bash
yarn install
yarn dev
```

### Build

```bash
yarn build
```

## Features

- Modern, responsive design
- Waitlist signup with Formspree integration
- Smooth animations and transitions
- Mobile-first approach
- TypeScript for type safety
