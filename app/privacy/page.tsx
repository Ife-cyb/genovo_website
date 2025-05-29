"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import LegalContent from "@/components/legal/legal-content"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <main className="pt-20">
        <LegalContent
          title="Privacy Policy"
          lastUpdated="December 15, 2025"
          content={`
# Privacy Policy

At Genovo Technologies Limited, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.

## Information We Collect

### Personal Information
- Name and contact information when you reach out to us
- Email address for newsletter subscriptions
- Professional information when applying for positions

### Technical Information
- Website usage analytics (anonymized)
- Device and browser information
- IP addresses for security purposes

## How We Use Your Information

We use your information to:
- Respond to your inquiries and provide support
- Send newsletters and updates (with your consent)
- Improve our website and services
- Protect against fraud and security threats

## Data Protection

We implement industry-standard security measures to protect your data:
- Encryption in transit and at rest
- Regular security audits
- Limited access controls
- Secure data centers

## Your Rights

You have the right to:
- Access your personal data
- Correct inaccurate information
- Request deletion of your data
- Opt-out of marketing communications

## Contact Us

For privacy-related questions, contact us at privacy@genovo.tech.
          `}
        />
      </main>
      <Footer />
    </div>
  )
}
