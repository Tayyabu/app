'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services."
    },
    {
      title: "2. Use of Service",
      content: "You agree to use our service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the service. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content or disrupting the normal flow of dialogue within our services."
    },
    {
      title: "3. User Accounts",
      content: "To access some features of the service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password."
    },
    {
      title: "4. Intellectual Property",
      content: "The service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."
    },
    {
      title: "5. Termination",
      content: "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms."
    },
    {
      title: "6. Limitation of Liability",
      content: "In no event shall we, nor our directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service."
    },
    {
      title: "7. Changes to Terms",
      content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms."
    },
    {
      title: "8. Contact Us",
      content: "If you have any questions about these Terms, please contact us at legal@example.com."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
      
      <p className="mb-6 text-muted-foreground">
        Last updated: 10/9/2024
      </p>

      <p className="mb-6">
        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using our website or services.
      </p>

      <Accordion type="single" collapsible className="mb-8">
        {sections.map((section, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{section.title}</AccordionTrigger>
            <AccordionContent>{section.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex justify-center">
        <Button>I Accept the Terms of Service</Button>
      </div>
    </div>
  )
}