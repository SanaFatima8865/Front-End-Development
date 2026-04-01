# 📧 EmailJS Setup Guide - Get Real Email Functionality

## Current Status
❌ EmailJS not configured (that's why you're getting 404 errors)
✅ Mailto fallback working (opens email client)

## 🚀 Quick Setup (10 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE)
3. Use your email: `sanaf8865@gmail.com`
4. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Click "Connect Account" and login with `sanaf8865@gmail.com`
5. **Copy the Service ID** (looks like `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. **Template Name:** `Portfolio Contact`
4. **Template Content:**
```
Subject: New Portfolio Contact: {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to this email to respond directly to {{from_name}}.
```

5. **Set Variables:**
   - `{{from_name}}` - Contact's name
   - `{{from_email}}` - Contact's email  
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content

6. **Set "To Email":** `sanaf8865@gmail.com`
7. **Copy the Template ID** (looks like `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" in EmailJS dashboard
2. Find "Public Key" section
3. **Copy your Public Key** (looks like `user_abcdefghijk`)

### Step 5: Update Your Portfolio
1. Open `src/config/emailConfig.js`
2. Replace these values:
```javascript
export const EMAIL_CONFIG = {
  serviceId: 'your_service_id_here',    // From Step 2
  templateId: 'your_template_id_here',  // From Step 3
  publicKey: 'your_public_key_here',    // From Step 4
  toEmail: 'sanaf8865@gmail.com'
};
```

### Step 6: Test & Deploy
1. Run `npm run build`
2. Test locally - form should work without 404 errors
3. Deploy to production
4. Test on live site

## 🔧 Alternative: Use Formspree (Easier)

If EmailJS seems complex, use Formspree instead:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up with `sanaf8865@gmail.com`
3. Create new form, get endpoint URL
4. I can update your code to use Formspree instead

## 🎯 What You'll Get

After setup:
✅ **Direct emails** to sanaf8865@gmail.com
✅ **No 404 errors**
✅ **Professional contact form**
✅ **Instant notifications** when someone contacts you
✅ **Reply-to address** set to sender's email

## 🆘 Need Help?

If you get stuck:
1. **Current fallback works** - mailto opens email client
2. **I can help** set up EmailJS step by step
3. **Alternative services** available (Formspree, Netlify Forms)

## ⚡ Quick Fix for Now

Your portfolio works with mailto fallback:
- Form opens user's email client
- Pre-fills your email address
- User sends email manually
- You receive it in your inbox

**Want me to help you set up EmailJS right now?** Just let me know and I'll guide you through each step!
