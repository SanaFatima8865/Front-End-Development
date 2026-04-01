// EmailJS Configuration
// Update these values when you set up EmailJS
// Instructions: See EMAIL_SETUP.md in the project root

export const EMAIL_CONFIG = {
  // EmailJS configuration - You need to set these up
  serviceId: 'service_your_id',
  templateId: 'template_your_id',
  publicKey: 'your_public_key',

  // Your email address
  toEmail: 'sanaf8865@gmail.com'
};

// Check if EmailJS is properly configured
export const isEmailJSConfigured = () => {
  return EMAIL_CONFIG.serviceId !== 'service_portfolio' && 
         EMAIL_CONFIG.templateId !== 'template_contact' && 
         EMAIL_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY' &&
         EMAIL_CONFIG.publicKey.length > 10;
};

// For immediate use without EmailJS setup
export const CONTACT_INFO = {
  email: 'sanaf8865@gmail.com',
  phone: '+92 305 2229166',
  linkedin: 'https://linkedin.com/in/sana-fatima-frontend'
};
