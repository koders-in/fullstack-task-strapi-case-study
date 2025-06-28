// src/data/pricingData.js

const pricingData = [
  {
    id: "family",
    badge: "60% off",
    title: "Family",
    subtitle: "For your Family and friends",
    price: "2.69",
    duration: "Up to 6 months",
    originalPrice: "141.36",
    discountedPrice: "64.6",
    cta: "Start 14 days free trial",
    trialNote: null,
    features: [
      "Autofill & Audit Passwords",
      "Encrypted password vault",
      "Sync across all your devices",
      "Password Health Checker",
      "Data Breach Monitoring Tool",
      "Secure file uploads",
      "Private Email Aliases/Masking",
    ],
  },
  {
    id: "personal",
    badge: "50% off",
    title: "Personal",
    subtitle: "Just for you",
    price: "1.99",
    duration: "Up to 3 months",
    originalPrice: "100.00",
    discountedPrice: "49.99",
    cta: "Try for free",
    trialNote: "Cancel anytime within 14 days",
    features: [
      "Secure password generation",
      "Encrypted storage",
      "Device sync",
      "Two-factor authentication",
    ],
  },
];

export default pricingData;
