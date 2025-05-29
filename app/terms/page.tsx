"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import LegalContent from "@/components/legal/legal-content"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <main className="pt-20">
        <LegalContent
          title="Terms of Service"
          lastUpdated="December 15, 2025"
          content={`
# Terms of Service

These Terms of Service govern your use of Genovo Technologies Limited's website and services.

## Acceptance of Terms

By accessing our website, you agree to be bound by these terms and conditions.

## Use License

Permission is granted to temporarily download materials on Genovo Technologies' website for personal, non-commercial transitory viewing only.

## Disclaimer

The materials on Genovo Technologies' website are provided on an 'as is' basis. Genovo Technologies makes no warranties, expressed or implied.

## Limitations

In no event shall Genovo Technologies or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.

## Privacy Policy

Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.

## Contact Information

Questions about the Terms of Service should be sent to legal@genovo.tech.
          `}
        />
      </main>
      <Footer />
    </div>
  )
}
