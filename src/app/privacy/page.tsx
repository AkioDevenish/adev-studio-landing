import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for ADEV Studio — how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-foreground mb-8">
        Privacy Policy
      </h1>
      <p className="text-sm font-mono text-muted uppercase tracking-widest mb-12">
        Last updated: March 2026
      </p>

      <div className="prose prose-lg prose-stone max-w-none text-foreground/80 prose-headings:font-display prose-headings:text-foreground prose-headings:tracking-tight">
        <h2>Information We Collect</h2>
        <p>
          When you use our contact form, we collect your name, email address, and message content.
          This information is processed through Web3Forms to deliver your message to us.
          We do not store this data on our servers.
        </p>

        <h2>Analytics</h2>
        <p>
          We use Google Analytics (GA4) to understand how visitors interact with our website.
          Google Analytics collects anonymous data such as pages visited, time spent, and device information.
          This data helps us improve our website experience. You can opt out of Google Analytics by using a
          {" "}<a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">browser plugin</a>.
        </p>

        <h2>AI Chat Assistant</h2>
        <p>
          Our website includes an AI-powered chat assistant. Messages you send to the assistant
          are processed by Google&apos;s Gemini API to generate responses. We do not store chat
          conversations beyond the duration of your browser session.
        </p>

        <h2>Cookies</h2>
        <p>
          We use essential cookies required for the website to function, and analytics cookies
          from Google Analytics. No advertising or tracking cookies are used.
        </p>

        <h2>Third-Party Services</h2>
        <ul>
          <li><strong>Web3Forms</strong> — Contact form processing</li>
          <li><strong>Google Analytics</strong> — Website analytics</li>
          <li><strong>Google Gemini API</strong> — AI chat assistant</li>
          <li><strong>Cal.com</strong> — Meeting scheduling</li>
          <li><strong>Vercel</strong> — Website hosting</li>
        </ul>

        <h2>Your Rights</h2>
        <p>
          You have the right to request access to, correction of, or deletion of any personal
          data we may hold. Contact us at{" "}
          <a href="mailto:hello@adevstudio.com">hello@adevstudio.com</a> with any privacy-related requests.
        </p>

        <h2>Contact</h2>
        <p>
          For any questions about this privacy policy, please contact us at{" "}
          <a href="mailto:hello@adevstudio.com">hello@adevstudio.com</a>.
        </p>
      </div>
    </div>
  );
}
