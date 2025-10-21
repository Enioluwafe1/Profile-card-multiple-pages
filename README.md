# Profile Card Multi-Page Application

A modern, accessible, and responsive multi-page web application featuring a profile card, contact form with validation, and personal reflections page. Built with semantic HTML, CSS, and vanilla JavaScript.
(HNG Stage 1 Task)

## Features

- Fully accessible with ARIA labels and semantic HTML
- Responsive design (mobile, tablet, desktop)
- All elements include data-testid attributes for automated testing
- Real-time form validation with user-friendly error messages
- Keyboard navigable with visible focus states
- Modern UI with Lucide icons
- Multi-page navigation

## Live Demo

**Live URL:** https://your-site-name.netlify.app

## Pages

### 1. Profile Card (index.html)
- User profile with avatar, bio, and social links
- Real-time timestamp display in milliseconds
- Lists of hobbies and dislikes
- All required data-testid attributes implemented

### 2. Contact Us (contact.html)
- Contact form with real-time validation
- Required fields: Full Name, Email, Subject, Message
- Email format validation
- Message minimum length validation (10 characters)
- Success message on valid submission
- Accessible error messages with ARIA

### 3. About Me (about.html)
- Personal bio and introduction
- Program goals and objectives
- Areas of low confidence and growth
- Note to future self
- Additional reflections and thoughts

## Technology Stack

- HTML5 - Semantic markup
- CSS3 - Flexbox, Grid, CSS Variables, Gradients
- Vanilla JavaScript - Form validation, DOM manipulation
- Lucide Icons - SVG icon library (CDN)

## Data TestIDs Implementation

### Profile Page
- `test-profile-card` - Root container
- `test-user-name` - User name
- `test-user-bio` - Biography
- `test-user-time` - Current timestamp
- `test-user-avatar` - Profile image
- `test-user-social-links` - Social links container
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

### Contact Page
- `test-contact-name` - Full name input
- `test-contact-email` - Email input
- `test-contact-subject` - Subject input
- `test-contact-message` - Message textarea
- `test-contact-submit` - Submit button
- `test-contact-error-name` - Name error message
- `test-contact-error-email` - Email error message
- `test-contact-error-subject` - Subject error message
- `test-contact-error-message` - Message error message
- `test-contact-success` - Success message

### About Page
- `test-about-page` - Main content container
- `test-about-bio` - Bio section
- `test-about-goals` - Goals section
- `test-about-confidence` - Confidence section
- `test-about-future-note` - Future note section
- `test-about-extra` - Extra thoughts section

## Run Locally

### Option 1: Direct File Open
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/profile-card-project.git

# Navigate to project folder
cd profile-card-project

# Open index.html in your browser
# Windows: double-click index.html
# Mac: open index.html
# Linux: xdg-open index.html
```

### Option 2: Local Server (Recommended)

**Using Python:**
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

**Using Node.js:**
```bash
npm install -g http-server
http-server
# Visit: http://localhost:8080
```

**Using VS Code:**
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Form Validation Rules

The contact form implements the following validation:
- **Full Name**: Required, cannot be empty
- **Email**: Required, must match format `name@example.com`
- **Subject**: Required, cannot be empty
- **Message**: Required, minimum 10 characters

Validation occurs:
- On blur (when user leaves field)
- On submit (all fields validated)
- Real-time error clearing as user types corrections

## Accessibility Features

- Semantic HTML5 elements (article, nav, section, main, form)
- Proper heading hierarchy (h1, h2, h3)
- All form inputs have associated labels with `for` attribute
- Error messages linked via `aria-describedby`
- Form fields marked with `aria-required` and `aria-invalid`
- Success/error messages use `role="alert"` and `aria-live="polite"`
- Keyboard-accessible interactive elements
- Visible focus indicators on all focusable elements
- Alt text on images
- Color contrast meets WCAG AA standards

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Mobile:** < 640px (single column, stacked navigation)
- **Tablet:** 641px - 1024px (two-column layouts)
- **Desktop:** > 1024px (full grid layouts)

## Testing

### Manual Testing Checklist

**Profile Page:**
- [ ] All data-testid attributes present
- [ ] Timestamp updates and shows milliseconds
- [ ] Avatar loads with alt text
- [ ] Social links open in new tabs
- [ ] Navigation works correctly

**Contact Page:**
- [ ] Form prevents empty submissions
- [ ] Email validation works
- [ ] Message length validation works
- [ ] Error messages display correctly
- [ ] Success message appears on valid submission
- [ ] Form resets after successful submission

**About Page:**
- [ ] All required sections present with correct testids
- [ ] Content is readable and well-structured
- [ ] Semantic HTML used throughout

**General:**
- [ ] All pages responsive on mobile, tablet, desktop
- [ ] Keyboard navigation works on all pages
- [ ] Focus states visible
- [ ] Navigation highlights active page

### Automated Testing (Browser Console)
```javascript
// Test Profile Page testids
const profileTestIds = [
  'test-profile-card', 'test-user-name', 'test-user-bio',
  'test-user-time', 'test-user-avatar', 'test-user-social-links',
  'test-user-hobbies', 'test-user-dislikes'
];

profileTestIds.forEach(id => {
  const el = document.querySelector(`[data-testid="${id}"]`);
  console.log(`${id}: ${el ? '✅' : '❌'}`);
});

// Test Contact Page testids
const contactTestIds = [
  'test-contact-name', 'test-contact-email', 'test-contact-subject',
  'test-contact-message', 'test-contact-submit', 'test-contact-success',
  'test-contact-error-name', 'test-contact-error-email',
  'test-contact-error-subject', 'test-contact-error-message'
];

contactTestIds.forEach(id => {
  const el = document.querySelector(`[data-testid="${id}"]`);
  console.log(`${id}: ${el ? '✅' : '❌'}`);
});

// Test About Page testids
const aboutTestIds = [
  'test-about-page', 'test-about-bio', 'test-about-goals',
  'test-about-confidence', 'test-about-future-note', 'test-about-extra'
];

aboutTestIds.forEach(id => {
  const el = document.querySelector(`[data-testid="${id}"]`);
  console.log(`${id}: ${el ? '✅' : '❌'}`);
});
```

## Customization

### Change Colors
Edit the gradient in any HTML file's CSS:
```css
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

### Personalize About Page
Edit the content in `about.html` to reflect YOUR actual:
- Personal bio
- Program goals
- Confidence areas
- Future note
- Extra thoughts

### Update Profile Information
Edit `index.html` to include YOUR:
- Name
- Bio
- Social media links
- Hobbies
- Dislikes

## Project Structure
profile-card-project/
│
├── index.html          # Profile card with navigation
├── about.html          # Personal reflections page
├── contact.html        # Contact form with validation
└── README.md           # This file

## Author

[Enioluwafe Odunayo]
- GitHub: [@your-username](https://github.com/Enioluwafe1)
- LinkedIn: [Your Profile](https://linkedin.com/in/enioluwafe-odunayo-050321338)

## Acknowledgments

- Icons by Lucide Icons (https://lucide.dev/)
