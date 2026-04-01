// Email service using Formsubmit.co - works immediately
export const sendContactEmail = async (formData) => {
  try {
    console.log('Sending email via Formsubmit...');

    const response = await fetch('https://formsubmit.co/sanaf8865@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'Contact from Portfolio',
        message: formData.message,
        _captcha: 'false',
        _template: 'table'
      })
    });

    if (response.ok) {
      console.log('Email sent successfully via Formsubmit');
      return { success: true, method: 'formsubmit' };
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Formsubmit failed:', error);

    // Fallback: Use simple mailto
    console.log('Using mailto fallback...');
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:sanaf8865@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    return { success: true, method: 'mailto' };
  }
};

// Copy contact details to clipboard
export const copyContactToClipboard = async (formData) => {
  const contactText = `Email: sanaf8865@gmail.com
Subject: ${formData.subject || 'Contact from Portfolio'}

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

  try {
    await navigator.clipboard.writeText(contactText);
    return { success: true };
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return { success: false, error };
  }
};

// Direct email link - always works
export const openMailtoLink = (formData) => {
  const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );
  const mailtoLink = `mailto:sanaf8865@gmail.com?subject=${subject}&body=${body}`;

  console.log('Opening mailto link:', mailtoLink);

  // Create a temporary link and click it
  const link = document.createElement('a');
  link.href = mailtoLink;
  link.target = '_blank';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Generate mailto link without opening it
export const generateMailtoLink = (formData) => {
  const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );
  return `mailto:sanaf8865@gmail.com?subject=${subject}&body=${body}`;
};
