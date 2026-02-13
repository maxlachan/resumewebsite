# Steve Paul - DevOps Engineer Portfolio

A professional portfolio website showcasing experience, skills, and certifications in DevOps and Cloud Engineering.

## Features

- **Modern Card-Based Layout** - Clean, professional design with card components
- **Professional Blue & White Theme** - Visually appealing color scheme
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - Fade-in effects and smooth scrolling
- **Downloadable Resume** - Easy access to PDF resume
- **Contact Information** - Multiple ways to get in touch

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Fonts**: Google Fonts (Inter)
- **Icons**: SVG icons

## Project Structure

```
steve-paul-portfolio/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   │   └── profile.jpg
│   ├── index.html
│   └── Steve_Paul_Resume.pdf
├── server.js
├── package.json
├── .env
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Steps

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your resume PDF**
   - Place your resume PDF in the `public` folder
   - Name it `Steve_Paul_Resume.pdf` (or update the link in index.html)

4. **Start the server**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

5. **Access the website**
   - Open your browser and go to: `http://localhost:3000`

## Customization

### Update Profile Photo
Replace `public/images/profile.jpg` with your own photo.

### Update Content
Edit `public/index.html` to modify:
- Personal information
- Professional summary
- Work experience
- Skills
- Certifications
- Contact details

### Change Colors
Edit `public/css/styles.css` - update the CSS variables in the `:root` section:
```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --primary-light: #3b82f6;
    /* ... more colors */
}
```

## Deployment

### Option 1: Heroku
1. Create a Heroku account
2. Install Heroku CLI
3. Run:
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

### Option 2: Vercel/Netlify
1. Create account on Vercel or Netlify
2. Connect your GitHub repository
3. Deploy with one click

### Option 3: Traditional Hosting
1. Upload files to your web server
2. Ensure Node.js is installed
3. Run `npm install` and `npm start`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact

**Steve Paul**
- Email: maxlachanagain@gmail.com
- Phone: +91-9497********
- LinkedIn: [linkedin.com/in/stevepaul92](https://linkedin.com/in/stevepaul92)
- Location: Bangalore, India

---

© 2026 Steve Paul. All rights reserved.
