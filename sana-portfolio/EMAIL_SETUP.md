# Email Setup Instructions

This portfolio includes a contact form that can send emails directly to sanaf8865@gmail.com. Follow these steps to set up the email functionality:

## Option 1: EmailJS Setup (Recommended)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended) or your preferred email provider
4. Follow the setup instructions to connect your Gmail account
5. Note down the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Set the template variables:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{subject}}` - email subject
   - `{{message}}` - email message
5. Set the "To Email" to: `sanaf8865@gmail.com`
6. Note down the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** (e.g., `user_abcdefghijk`)

### Step 5: Update Configuration
1. Open `src/services/emailService.js`
2. Replace the placeholder values:
   ```javascript
   const EMAIL_CONFIG = {
     serviceId: 'your_service_id_here',
     templateId: 'your_template_id_here', 
     publicKey: 'your_public_key_here',
   };
   ```

## Option 2: Mailto Fallback (Already Working)

The contact form includes a fallback option that opens the user's default email client with a pre-filled message. This works immediately without any setup.

## Testing

1. Fill out the contact form
2. Click "Send Message"
3. If EmailJS is configured correctly, the email will be sent
4. If not, use the "Open Email App" button as a fallback

## Deployment Notes

When deploying to production, make sure:
1. EmailJS configuration is properly set up
2. The domain is added to your EmailJS allowed origins (if required)
3. Test the contact form after deployment

## Troubleshooting

- **Email not sending**: Check browser console for errors and verify EmailJS configuration
- **CORS errors**: Add your domain to EmailJS allowed origins
- **Template errors**: Verify all template variables are correctly named
