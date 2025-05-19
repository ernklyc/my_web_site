"use client";

// Simple contact form submission handler
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real application, you would send this data to a server endpoint
    // or use a service like EmailJS, Formspree, etc.
    
    // This is a placeholder implementation
    console.log('Form submission data:', formData);
    
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demonstration purposes, we'll return success
    return {
      success: true,
      message: 'Thank you for your message! I will get back to you as soon as possible.'
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'There was an error sending your message. Please try again later.'
    };
  }
};
