// === Icon initialization ===
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// Update timestamp with current time in milliseconds
function updateTimestamp() {
  const timeElement = document.getElementById('currentTime');
  if (!timeElement) return; // guard: only update when element exists
  const currentTime = Date.now();
  timeElement.textContent = currentTime;
  timeElement.setAttribute('datetime', new Date(currentTime).toISOString());
}

updateTimestamp();  // Update timestamp on page load
setInterval(updateTimestamp, 1000);  // Update every second

// === Contact form code: only run on contact page when the form exists ===
const form = document.getElementById('contactForm');
if (form) {
  const successMessage = document.querySelector('[data-testid="test-contact-success"]');

  // Form fields
  const fullName = document.querySelector('[data-testid="test-contact-name"]');
  const email = document.querySelector('[data-testid="test-contact-email"]');
  const subject = document.querySelector('[data-testid="test-contact-subject"]');
  const message = document.querySelector('[data-testid="test-contact-message"]');

  // Error messages
  const nameError = document.querySelector('[data-testid="test-contact-error-name"]');
  const emailError = document.querySelector('[data-testid="test-contact-error-email"]');
  const subjectError = document.querySelector('[data-testid="test-contact-error-subject"]');
  const messageError = document.querySelector('[data-testid="test-contact-error-message"]');

  function showError(input, errorElement) {
    if (!input || !errorElement) return;
    input.classList.add('error');
    errorElement.classList.add('show');
    input.setAttribute('aria-invalid', 'true');
  }

  function hideError(input, errorElement) {
    if (!input || !errorElement) return;
    input.classList.remove('error');
    errorElement.classList.remove('show');
    input.setAttribute('aria-invalid', 'false');
  }

  function validateName() {
    if (!fullName) return true;
    const value = fullName.value.trim();
    if (value === '') {
      showError(fullName, nameError);
      return false;
    }
    hideError(fullName, nameError);
    return true;
  }

  function validateEmail() {
    if (!email) return true;
    const value = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === '' || !emailRegex.test(value)) {
      showError(email, emailError);
      return false;
    }
    hideError(email, emailError);
    return true;
  }

  function validateSubject() {
    if (!subject) return true;
    const value = subject.value.trim();
    if (value === '') {
      showError(subject, subjectError);
      return false;
    }
    hideError(subject, subjectError);
    return true;
  }

  function validateMessage() {
    if (!message) return true;
    const value = message.value.trim();
    if (value === '' || value.length < 10) {
      showError(message, messageError);
      return false;
    }
    hideError(message, messageError);
    return true;
  }

  // Real-time validation (attach only if element exists)
  if (fullName) fullName.addEventListener('blur', validateName);
  if (email) email.addEventListener('blur', validateEmail);
  if (subject) subject.addEventListener('blur', validateSubject);
  if (message) message.addEventListener('blur', validateMessage);

  if (fullName) fullName.addEventListener('input', () => { if (fullName.classList.contains('error')) validateName(); });
  if (email) email.addEventListener('input', () => { if (email.classList.contains('error')) validateEmail(); });
  if (subject) subject.addEventListener('input', () => { if (subject.classList.contains('error')) validateSubject(); });
  if (message) message.addEventListener('input', () => { if (message.classList.contains('error')) validateMessage(); });

  // Form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (successMessage) successMessage.classList.remove('show');

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      if (successMessage) successMessage.classList.add('show');
      form.reset();
      [fullName, email, subject, message].forEach(field => {
        if (!field) return;
        field.classList.remove('error');
        field.setAttribute('aria-invalid', 'false');
      });
      [nameError, emailError, subjectError, messageError].forEach(err => { if (err) err.classList.remove('show'); });

      if (successMessage) {
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        successMessage.focus();
        setTimeout(() => successMessage.classList.remove('show'), 5000);
      }
    } else {
      const firstError = [fullName, email, subject, message].find(f => f && f.classList.contains('error'));
      if (firstError) firstError.focus();
    }
  });
}

