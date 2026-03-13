import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for ADEV Studio — the rules and guidelines governing the use of our website and services.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-background text-foreground">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-gradient-to-r from-foreground/40 to-transparent" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/40">
              Legal
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm font-mono text-foreground/40 uppercase tracking-widest">
            Last updated: March 13, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-foreground/70 leading-relaxed text-base font-light">
          {/* Intro */}
          <section>
            <p>
              Welcome to ADEV Studio. These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your
              access to and use of the website located at{" "}
              <a href="https://www.adevstudio.com" className="text-foreground underline underline-offset-4 hover:text-foreground/60 transition-colors">
                www.adevstudio.com
              </a>{" "}
              (the &ldquo;Site&rdquo;) and any services provided by ADEV Studio (&ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
            </p>
            <p className="mt-4">
              By accessing or using the Site, you agree to be bound by these Terms. If you disagree
              with any part of these Terms, you must not use the Site.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              1. Services
            </h2>
            <p className="mb-4">
              ADEV Studio is a digital agency providing the following services:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>Web development and web application design</li>
              <li>Data science, analytics, and machine learning consulting</li>
              <li>UI/UX design and brand identity development</li>
              <li>3D and interactive web experiences (WebGL, Three.js)</li>
              <li>Ongoing maintenance and support retainers</li>
            </ul>
            <p>
              All services are provided subject to a separate project agreement, statement of work
              (SOW), or service contract that will be agreed upon in writing between ADEV Studio and
              the client before work commences. These Terms govern the use of the Site itself; any
              project-specific terms are outlined in the applicable service agreement.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              2. Use of the Site
            </h2>

            <h3 className="text-lg font-display text-foreground/90 mb-3">
              2.1 Permitted Use
            </h3>
            <p className="mb-6">
              You may use the Site for lawful purposes only. You may browse the Site, view our
              portfolio and case studies, read our blog content, use the contact form, schedule
              consultations, and interact with the AI chat assistant.
            </p>

            <h3 className="text-lg font-display text-foreground/90 mb-3">
              2.2 Prohibited Use
            </h3>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Site in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Site, its servers, or connected databases</li>
              <li>Introduce viruses, trojans, worms, or other malicious software</li>
              <li>Use automated tools (bots, scrapers, crawlers) to access, scrape, or index the Site without our express written permission</li>
              <li>Reproduce, duplicate, copy, sell, or exploit any portion of the Site for commercial purposes without authorization</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>
              <li>Use the AI chat assistant to generate harmful, abusive, or illegal content</li>
              <li>Interfere with or disrupt the Site or servers/networks connected to the Site</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              3. Intellectual Property
            </h2>

            <h3 className="text-lg font-display text-foreground/90 mb-3">
              3.1 Our Content
            </h3>
            <p className="mb-6">
              All content on the Site — including but not limited to text, graphics, logos, icons, images,
              audio clips, video clips, data compilations, 3D models, animations, code, and software —
              is the property of ADEV Studio or its content suppliers and is protected by international
              copyright, trademark, and other intellectual property laws. The compilation of all content
              on the Site is the exclusive property of ADEV Studio.
            </p>

            <h3 className="text-lg font-display text-foreground/90 mb-3">
              3.2 Trademarks
            </h3>
            <p className="mb-6">
              &ldquo;ADEV Studio,&rdquo; &ldquo;ADEVSTUDIO,&rdquo; the ADEV Studio logo, and all related
              names, logos, product and service names, designs, and slogans are trademarks of ADEV Studio.
              You must not use these marks without our prior written permission.
            </p>

            <h3 className="text-lg font-display text-foreground/90 mb-3">
              3.3 Client Work
            </h3>
            <p>
              Ownership of deliverables created for clients (websites, applications, designs, data models,
              etc.) is governed by the specific project agreement between ADEV Studio and the client.
              Unless otherwise agreed in writing, clients receive full ownership of all custom work upon
              final payment. ADEV Studio retains the right to display completed projects in our portfolio
              and case studies unless a non-disclosure agreement (NDA) is in place.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              4. Project Agreements &amp; Payments
            </h2>

            <h3 className="text-lg font-display text-foreground/90 mb-3">
              4.1 Proposals &amp; Scope
            </h3>
            <p className="mb-6">
              All projects begin with a discovery call and a written proposal or statement of work (SOW)
              that outlines the project scope, deliverables, timeline, and pricing. Work does not commence
              until both parties have agreed to the proposal in writing (email confirmation is sufficient).
            </p>

            <h3 className="text-lg font-display text-foreground/90 mb-3">
              4.2 Payment Terms
            </h3>
            <p className="mb-4">
              Unless otherwise agreed in the project agreement:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>A <strong className="text-foreground/90">50% deposit</strong> is required before work begins</li>
              <li>The remaining <strong className="text-foreground/90">50% balance</strong> is due upon project completion, before final files/deployment access is transferred</li>
              <li>For retainer agreements, payment is due at the beginning of each billing cycle</li>
              <li>All prices are quoted in <strong className="text-foreground/90">USD</strong> unless otherwise stated</li>
              <li>Invoices are payable within <strong className="text-foreground/90">14 days</strong> of issuance</li>
            </ul>

            <h3 className="text-lg font-display text-foreground/90 mb-3">
              4.3 Refunds
            </h3>
            <p>
              Deposits are non-refundable once work has commenced. If a project is cancelled by the client
              after work has begun, the client is responsible for payment for all work completed up to the
              date of cancellation. Refunds for any remaining balance will be assessed on a case-by-case basis.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              5. Revisions &amp; Approvals
            </h2>
            <p className="mb-4">
              Each project tier includes a specified number of revision rounds as outlined in the project
              proposal:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li><strong className="text-foreground/90">Foundation tier</strong> — 1 revision round</li>
              <li><strong className="text-foreground/90">Growth tier</strong> — 3 revision rounds</li>
              <li><strong className="text-foreground/90">Partnership tier</strong> — Unlimited revisions within scope</li>
            </ul>
            <p>
              Revisions beyond the agreed number will be billed at our standard hourly rate.
              A &ldquo;revision&rdquo; is defined as a set of changes submitted together at one time.
              Major scope changes or feature additions are not considered revisions and may require a
              separate change order with revised pricing and timeline.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              6. Consultations
            </h2>
            <p>
              We offer a free 30-minute initial consultation via{" "}
              <a href="https://cal.com/adevstudio/30min" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-foreground/60 transition-colors">
                Cal.com
              </a>. These consultations are for the purpose of discussing potential projects and are
              non-binding. Scheduling a consultation does not constitute a commitment to engage our services
              or vice versa. We reserve the right to decline any project at our discretion.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              7. AI Chat Assistant
            </h2>
            <p>
              The Site features an AI-powered chat assistant that provides general information about
              ADEV Studio and our services. This assistant is powered by Google&apos;s Gemini API.
              Please be aware that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Responses are generated by artificial intelligence and may not always be accurate or complete</li>
              <li>The assistant does not provide legal, financial, or professional advice</li>
              <li>Conversations with the assistant do not constitute a contractual agreement</li>
              <li>We are not liable for any decisions made based on information provided by the assistant</li>
              <li>Message data is processed by Google&apos;s API and is subject to{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-foreground/60 transition-colors">
                  Google&apos;s Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              8. Blog Content
            </h2>
            <p>
              All blog posts and articles published on the Site are provided for informational and
              educational purposes only. While we strive for accuracy, we make no representations
              or warranties about the completeness, reliability, or suitability of the information.
              Code snippets and technical tutorials are provided &ldquo;as is&rdquo; and you use them
              at your own risk. Sharing blog content is encouraged, provided you attribute ADEV Studio
              and link back to the original article.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              9. Limitation of Liability
            </h2>
            <p className="mb-4">
              To the fullest extent permitted by applicable law:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>ADEV Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site</li>
              <li>ADEV Studio shall not be liable for any loss of profits, data, business opportunities, or goodwill</li>
              <li>Our total liability for any claims arising from or related to the Site shall not exceed the amount paid by you (if any) to us in the 12 months preceding the claim</li>
            </ul>
            <p>
              This limitation applies regardless of the form of action, whether in contract, tort, strict
              liability, or otherwise, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              10. Disclaimer of Warranties
            </h2>
            <p>
              The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis,
              without warranties of any kind, either express or implied. We disclaim all warranties,
              including but not limited to implied warranties of merchantability, fitness for a particular
              purpose, and non-infringement. We do not warrant that the Site will be uninterrupted,
              error-free, secure, or free of viruses or other harmful components.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              11. Third-Party Links
            </h2>
            <p>
              The Site may contain links to third-party websites, services, or resources that are not
              owned or controlled by ADEV Studio. These include links to client projects, social media
              platforms, scheduling tools, and external resources. We have no control over and assume no
              responsibility for the content, privacy policies, or practices of any third-party sites.
              Accessing these sites is at your own risk.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              12. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless ADEV Studio, its owner, affiliates,
              and service providers from and against any claims, damages, obligations, losses, liabilities,
              costs, or expenses (including attorney&apos;s fees) arising from: (a) your use of the Site;
              (b) your violation of these Terms; (c) your violation of any third-party rights; or
              (d) your violation of any applicable law or regulation.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              13. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic
              of Trinidad and Tobago, without regard to its conflict of law provisions. Any disputes
              arising from these Terms or your use of the Site shall be subject to the exclusive
              jurisdiction of the courts of the Republic of Trinidad and Tobago.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              14. Severability
            </h2>
            <p>
              If any provision of these Terms is held to be invalid, illegal, or unenforceable by a
              court of competent jurisdiction, the remaining provisions shall remain in full force and
              effect. The invalid provision shall be modified to the minimum extent necessary to make
              it valid and enforceable while preserving its original intent.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              15. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Any changes will be posted on this
              page with an updated &ldquo;Last updated&rdquo; date. Your continued use of the Site after
              any changes constitutes your acceptance of the new Terms. We encourage you to review these
              Terms periodically.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              16. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms &amp; Conditions, please contact us:
            </p>
            <div className="mt-6 border border-foreground/[0.06] rounded-xl p-6 space-y-3">
              <p className="font-display text-foreground/90">ADEV Studio</p>
              <p className="text-sm">
                Email:{" "}
                <a href="mailto:hello@adevstudio.com" className="text-foreground underline underline-offset-4 hover:text-foreground/60 transition-colors">
                  hello@adevstudio.com
                </a>
              </p>
              <p className="text-sm">
                Phone:{" "}
                <a href="tel:+18684695973" className="text-foreground underline underline-offset-4 hover:text-foreground/60 transition-colors">
                  1-868-469-5973
                </a>
              </p>
              <p className="text-sm">Location: Trinidad &amp; Tobago</p>
            </div>
          </section>

          {/* Cross-link */}
          <section className="border-t border-foreground/[0.06] pt-10">
            <p className="text-sm text-foreground/40">
              See also:{" "}
              <Link href="/privacy" className="text-foreground/60 underline underline-offset-4 hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
