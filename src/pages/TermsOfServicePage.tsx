import { useEffect } from 'react';

export function TermsOfServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-slate-500 mb-10">Effective Date: January 1, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by Clean Ledger Accounting, LLC
              ("Clean Ledger," "we," "us," or "our"), you agree to be bound by these Terms of
              Service. If you do not agree, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">2. Services</h2>
            <p>
              Clean Ledger provides bookkeeping, accounting, payroll management, and financial
              reporting services to small and medium-sized businesses. The specific scope of
              services will be outlined in a separate engagement agreement between you and
              Clean Ledger.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">3. Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide accurate and complete financial records and information.</li>
              <li>Grant timely access to accounts, documents, and systems as needed.</li>
              <li>Review and approve deliverables in a timely manner.</li>
              <li>Pay for services as outlined in your engagement agreement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">4. Fees and Payment</h2>
            <p>
              Service fees are determined on a per-engagement basis and detailed in your
              engagement agreement. Invoices are due upon receipt unless otherwise specified.
              Late payments may be subject to a fee of 1.5% per month on the outstanding balance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">5. Confidentiality</h2>
            <p>
              We treat all client financial data and business information as confidential. We will
              not disclose your information to third parties except as necessary to perform our
              services, as required by law, or with your written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">6. Limitation of Liability</h2>
            <p>
              Clean Ledger provides bookkeeping and accounting services with reasonable care and
              skill. However, we are not liable for any indirect, incidental, special, or
              consequential damages arising from our services. Our total liability shall not exceed
              the fees paid by you for the services giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">7. No Tax or Legal Advice</h2>
            <p>
              Clean Ledger provides bookkeeping and accounting services only. We do not provide
              tax preparation, tax advisory, legal, or investment advice. You should consult
              qualified professionals for tax and legal matters.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">8. Termination</h2>
            <p>
              Either party may terminate the service engagement with 30 days' written notice. Upon
              termination, you are responsible for payment of all services rendered through the
              termination date. We will return or securely destroy your records as requested.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">9. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and design, is the
              property of Clean Ledger Accounting, LLC and is protected by applicable intellectual
              property laws. You may not reproduce, distribute, or create derivative works without
              our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">10. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the
              laws of the State of Florida, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">11. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be
              posted on this page with an updated effective date. Continued use of our services
              after changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">12. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
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
