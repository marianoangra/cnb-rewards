import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyEN = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <Link to="/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <h1 className="text-2xl font-bold text-foreground mb-6">Privacy Policy</h1>
        <p className="text-xs text-muted-foreground mb-6">Last updated: April 4, 2026</p>

        <div className="prose prose-sm text-muted-foreground space-y-4">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Introduction</h2>
            <p>CNB Cripto ("we", "our" or "App") is committed to protecting the privacy of our users. This Privacy Policy describes how we collect, use, store and protect your personal information.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Information Collected</h2>
            <p>We collect the following categories of information:</p>
            <h3 className="text-base font-medium text-foreground mt-3">2.1 Account Information</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Display name (provided by the authentication provider);</li>
              <li>Email address;</li>
              <li>Profile picture (when available via Google or Apple);</li>
              <li>Unique account identifier.</li>
            </ul>
            <h3 className="text-base font-medium text-foreground mt-3">2.2 Usage Data</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dates and times of App access;</li>
              <li>Accumulated score and check-in history;</li>
              <li>Consecutive day streak;</li>
              <li>Ranking position.</li>
            </ul>
            <h3 className="text-base font-medium text-foreground mt-3">2.3 Technical Information</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Device type and operating system;</li>
              <li>App version;</li>
              <li>Performance and diagnostic data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Create and manage your account;</li>
              <li>Record daily check-ins and calculate scores;</li>
              <li>Display user rankings;</li>
              <li>Improve the user experience and App performance;</li>
              <li>Communicate important service updates;</li>
              <li>Prevent fraud and abuse.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Data Sharing</h2>
            <p><strong>We do not sell, rent, or trade your personal information.</strong></p>
            <p>Your information may only be shared in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Public ranking:</strong> your display name and score may be visible to other users in the ranking;</li>
              <li><strong>Service providers:</strong> we use third-party services for hosting and authentication (Google, Apple);</li>
              <li><strong>Legal obligation:</strong> when required by law or legal process.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Storage and Security</h2>
            <p>Your data is stored on secure servers with encryption in transit and at rest. We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, or destruction.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Data Retention</h2>
            <p>We retain your personal information as long as your account is active. After account deletion, your data will be removed within 30 days, except when retention is required by legal obligation.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Your Rights</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Access:</strong> request a copy of the data we hold about you;</li>
              <li><strong>Correction:</strong> request correction of inaccurate data;</li>
              <li><strong>Deletion:</strong> request deletion of your data and account;</li>
              <li><strong>Portability:</strong> receive your data in a structured format;</li>
              <li><strong>Objection:</strong> object to the processing of your data.</li>
            </ul>
            <p>To exercise any of these rights, contact us at: <a href="mailto:suporte@cnbcripto.com" className="text-primary underline">suporte@cnbcripto.com</a></p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Children's Privacy</h2>
            <p>The App is not intended for children under 13 years of age. We do not knowingly collect information from children under 13. If we become aware that we have collected data from a child under 13, we will take steps to delete that information.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">9. Cookies and Similar Technologies</h2>
            <p>The App may use cookies and similar technologies to maintain your authentication session and improve the user experience. These technologies are essential for the App's operation.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">10. International Data Transfer</h2>
            <p>Your data may be processed on servers located outside your country of residence. We ensure that any international data transfer is carried out with appropriate safeguards and in compliance with applicable laws.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of significant changes through the App. We recommend reviewing this policy regularly.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">12. Contact</h2>
            <p>For questions about this Privacy Policy or your personal data, please contact:</p>
            <p>Email: <a href="mailto:suporte@cnbcripto.com" className="text-primary underline">suporte@cnbcripto.com</a></p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">13. Apple Compliance</h2>
            <p>This App complies with Apple App Store guidelines, including Apple's App Review Guidelines and App Tracking Transparency (ATT) privacy requirements. We do not track users across third-party apps or websites.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyEN;
