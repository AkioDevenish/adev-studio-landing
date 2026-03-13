import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for ADEV Studio — how we collect, use, protect, and handle your personal data.",
};

export default function PrivacyPolicy() {
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
            Privacy Policy
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
              ADEV Studio (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website{" "}
              <a href="https://www.adevstudio.com" className="text-foreground underline underline-offset-4 hover:text-foreground/60 transition-colors">
                www.adevstudio.com
              </a>{" "}
              (the &ldquo;Site&rdquo;), use our services, or otherwise interact with us.
            </p>
            <p className="mt-4">
              By accessing or using the Site, you agree to this Privacy Policy. If you do not agree
              with the terms of this policy, please do not access the Site.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              1. Information We Collect
            </h2>

            <h3 className="text-lg font-display text-foreground/90 mb-3">
              1.1 Personal Information You Provide
            </h3>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>Submit a message through our contact form (name, email address, message content)</li>
              <li>Schedule a consultation through Cal.com (name, email, scheduling preferences)</li>
              <li>Interact with our AI chat assistant (message content during your session)</li>
              <li>Subscribe to our newsletter or mailing list (email address)</li>
              <li>Communicate with us via email, phone, or social media</li>
            </ul>

            <h3 className="text-lg font-display text-foreground/90 mb-3">
              1.2 Information Automatically Collected
            </h3>
            <p className="mb-4">
              When you visit the Site, we automatically collect certain information about your device
              and your visit, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>IP address (anonymized by Google Analytics)</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website or source</li>
              <li>Pages visited and time spent on pages</li>
              <li>Device type (desktop, tablet, mobile)</li>
              <li>Screen resolution</li>
              <li>Geographic location (country/city level, not precise)</li>
            </ul>

            <h3 className="text-lg font-display text-foreground/90 mb-3">
              1.3 Information We Do Not Collect
            </h3>
            <p>
              We do not collect or process sensitive personal data such as financial information,
              government-issued identification numbers, health information, racial or ethnic origin,
              political opinions, religious beliefs, or biometric data.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Schedule and manage consultations and meetings</li>
              <li>Provide and improve our services</li>
              <li>Analyze website usage to improve the user experience</li>
              <li>Monitor and analyze trends, usage, and activities on the Site</li>
              <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
              <li>Send you updates about our services (only with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              3. Third-Party Services
            </h2>
            <p className="mb-6">
              We use the following third-party services that may collect and process your data in
              accordance with their own privacy policies:
            </p>

            <div className="space-y-6">
              <div className="border border-foreground/[0.06] rounded-xl p-6">
                <h4 className="font-display text-foreground/90 mb-2">Google Analytics (GA4)</h4>
                <p className="text-sm">
                  Used for website analytics. Collects anonymized data about page views, sessions, device
                  information, and user behavior. Data is processed by Google LLC. You can opt out using the{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-foreground/60 transition-colors">
                    Google Analytics Opt-out Browser Add-on
                  </a>.
                </p>
              </div>

              <div className="border border-foreground/[0.06] rounded-xl p-6">
                <h4 className="font-display text-foreground/90 mb-2">Web3Forms</h4>
                <p className="text-sm">
                  Processes and delivers contact form submissions. Your name, email, and message are
                  transmitted through their API to our email inbox. Web3Forms does not store your data permanently.
                </p>
              </div>

              <div className="border border-foreground/[0.06] rounded-xl p-6">
                <h4 className="font-display text-foreground/90 mb-2">Google Gemini API</h4>
                <p className="text-sm">
                  Powers our AI chat assistant. Messages you send are processed by Google&apos;s Gemini
                  language model to generate responses. Chat conversations are not stored beyond your
                  active browser session and are not used by us for any other purpose.
                </p>
              </div>

              <div className="border border-foreground/[0.06] rounded-xl p-6">
                <h4 className="font-display text-foreground/90 mb-2">Cal.com</h4>
                <p className="text-sm">
                  Used for booking consultations and meetings. When you schedule a call, Cal.com
                  collects your name, email, and scheduling preferences. Cal.com&apos;s own privacy
                  policy governs how they handle this data.
                </p>
              </div>

              <div className="border border-foreground/[0.06] rounded-xl p-6">
                <h4 className="font-display text-foreground/90 mb-2">Vercel</h4>
                <p className="text-sm">
                  Hosts the Site and provides edge network delivery. Vercel may collect server logs that
                  include IP addresses, timestamps, and request metadata. Vercel Analytics and Speed
                  Insights collect anonymous performance data.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to collect and track information about
              your activity on the Site. The types of cookies we use include:
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-foreground/90 font-display shrink-0 w-32">Essential</span>
                <p className="text-sm">
                  Required for the Site to function properly. These cannot be disabled. They include
                  session cookies and cookies needed for Cal.com scheduling functionality.
                </p>
              </div>
              <div className="h-[1px] bg-foreground/[0.06]" />
              <div className="flex gap-4">
                <span className="text-foreground/90 font-display shrink-0 w-32">Analytics</span>
                <p className="text-sm">
                  Used by Google Analytics to collect anonymized usage data. These help us understand how
                  visitors interact with the Site so we can improve the experience.
                </p>
              </div>
              <div className="h-[1px] bg-foreground/[0.06]" />
              <div className="flex gap-4">
                <span className="text-foreground/90 font-display shrink-0 w-32">Advertising</span>
                <p className="text-sm">
                  We do <strong className="text-foreground/90">not</strong> use any advertising or
                  third-party tracking cookies.
                </p>
              </div>
            </div>

            <p className="mt-6">
              You can control cookies through your browser settings. Most browsers allow you to refuse
              cookies or alert you when a cookie is being set. Note that disabling cookies may affect
              the functionality of certain features on the Site.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              5. Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy. Specifically:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>
                <strong className="text-foreground/90">Contact form submissions</strong> — retained in
                our email inbox until the inquiry is resolved, then archived or deleted within 12 months.
              </li>
              <li>
                <strong className="text-foreground/90">Analytics data</strong> — retained by Google
                Analytics for 14 months (default GA4 retention period), then automatically deleted.
              </li>
              <li>
                <strong className="text-foreground/90">AI chat conversations</strong> — not retained
                beyond your active browser session.
              </li>
              <li>
                <strong className="text-foreground/90">Calendar bookings</strong> — retained by Cal.com
                per their retention policies.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. These
              measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>SSL/TLS encryption for all data transmitted between your browser and the Site</li>
              <li>Secure hosting infrastructure via Vercel&apos;s edge network</li>
              <li>Content Security Policy (CSP) headers to prevent cross-site scripting attacks</li>
              <li>Regular security monitoring and updates</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure.
              While we strive to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              7. Your Rights
            </h2>
            <p className="mb-4">
              Depending on your jurisdiction, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-foreground/90">Right of access</strong> — request a copy of the personal data we hold about you</li>
              <li><strong className="text-foreground/90">Right to rectification</strong> — request correction of inaccurate or incomplete data</li>
              <li><strong className="text-foreground/90">Right to erasure</strong> — request deletion of your personal data</li>
              <li><strong className="text-foreground/90">Right to restrict processing</strong> — request that we limit how we use your data</li>
              <li><strong className="text-foreground/90">Right to data portability</strong> — request your data in a structured, machine-readable format</li>
              <li><strong className="text-foreground/90">Right to object</strong> — object to the processing of your data for certain purposes</li>
              <li><strong className="text-foreground/90">Right to withdraw consent</strong> — withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:hello@adevstudio.com" className="text-foreground underline underline-offset-4 hover:text-foreground/60 transition-colors">
                hello@adevstudio.com
              </a>. We will respond to your request within 30 days.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              8. Children&apos;s Privacy
            </h2>
            <p>
              The Site is not intended for children under the age of 16. We do not knowingly collect
              personal information from children under 16. If we become aware that we have collected
              personal data from a child under 16 without parental consent, we will take steps to
              delete that information promptly.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              9. International Data Transfers
            </h2>
            <p>
              Your information may be transferred to and processed in countries other than your own,
              including the United States (where Google, Vercel, and other service providers are based).
              These countries may have data protection laws that differ from the laws of your country.
              By using the Site, you consent to the transfer of your information to these countries.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this page
              periodically to stay informed about how we protect your data. Your continued use of the
              Site after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-display text-foreground tracking-tight mb-6">
              11. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices,
              please contact us:
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
              <Link href="/terms" className="text-foreground/60 underline underline-offset-4 hover:text-foreground transition-colors">
                Terms &amp; Conditions
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
