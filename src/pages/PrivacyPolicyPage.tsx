import { useEffect } from 'react';

export function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-10">Effective Date: January 1, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">1. Introduction</h2>
            <p>
              Clean Ledger Accounting, LLC ("Clean Ledger," "we," "us," or "our") respects your
              privacy and is committed to protecting the personal information you share with us.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, business
                name, and mailing address provided when you contact us or engage our services.
              </li>
              <li>
                <strong>Financial Information:</strong> Bank statements, transaction records,
                payroll data, and other financial documents you provide for bookkeeping and
                accounting services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our website,
                including IP address, browser type, pages visited, and referring URL.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide bookkeeping, accounting, and payroll services.</li>
              <li>Communicate with you about your account and our services.</li>
              <li>Respond to your inquiries and requests.</li>
              <li>Improve our website and services.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">4. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information. We may share your
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Service Providers:</strong> With trusted third-party tools and platforms
                (e.g., QuickBooks, payroll processors) necessary to deliver our services.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, regulation, or legal
                process.
              </li>
              <li>
                <strong>With Your Consent:</strong> When you have given us explicit permission.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">5. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect
              your personal and financial information. However, no method of transmission over the
              Internet or electronic storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">6. Data Retention</h2>
            <p>
              We retain your personal and financial information for as long as necessary to provide
              our services and comply with legal obligations. When information is no longer needed,
              we securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your information.</li>
              <li>Opt out of certain uses of your information.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:joan@getcleanledger.com" className="text-emerald-600 hover:text-emerald-700 underline">
                joan@getcleanledger.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">8. Cookies</h2>
            <p>
              Our website may use cookies and similar technologies to enhance your browsing
              experience and analyze site usage. You can control cookie preferences through your
              browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated effective date. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-3">
              Clean Ledger Accounting, LLC<br />
              Email:{' '}
              <a href="mailto:joan@getcleanledger.com" className="text-emerald-600 hover:text-emerald-700 underline">
                joan@getcleanledger.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
