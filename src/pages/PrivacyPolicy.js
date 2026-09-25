import { PRIVACY_EFFECTIVE_DATE, SUPPORT_EMAIL } from '../config';

function PrivacyPolicy() {
  return (
    <main className="page">
      <div className="policy">
        <h1>Privacy Policy</h1>
        <p className="policy-meta">Effective Date: {PRIVACY_EFFECTIVE_DATE}</p>

        <h2>1. Introduction</h2>
        <p>
          WorthLater (&ldquo;WorthLater&rdquo;, &ldquo;we&rdquo;,
          &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy.
        </p>
        <p>
          WorthLater helps you look at a purchase before you make it. To do
          that it holds some of the most sensitive information a phone can hold:
          what you earn, what you are about to spend, and what you decided. All
          of it is stored on your device.
        </p>
        <p>
          We use three third-party services: Firebase Analytics and PostHog, to
          understand how the app is used, and RevenueCat, to manage
          subscriptions and in-app purchases. None of them receives the amounts
          you enter.
        </p>
        <p>
          This Privacy Policy explains what information may be collected, how it
          is used, and how it is handled when you use WorthLater.
        </p>

        <p className="policy-callout">
          In short: the prices, incomes, hourly rates, item names and budget
          figures you enter never leave your device. Where analytics record that
          something happened, they record a range or a yes-or-no fact instead of
          the number itself.
        </p>

        <h2>2. Information We Collect</h2>

        <h3>a) Personal Information</h3>
        <p>WorthLater does not require you to create an account.</p>
        <p>
          We do not ask for or collect your name, email address, phone number,
          address, contacts, location, or similar personal information through
          the app.
        </p>
        <p>
          If you voluntarily contact us for support, we may receive your email
          address and any information included in your message. We use this only
          to respond to your inquiry and provide support.
        </p>

        <h3>b) Financial Information You Enter</h3>
        <p>
          The prices you check, the names you give them, your income, your
          hourly rate, your currency, your budget figures and your decision
          history are stored on your device and are not transmitted to us or to
          anyone else.
        </p>
        <p>
          The app has no server, no account system and no sync. There is nowhere
          for those figures to go.
        </p>
        <p>
          The historical price data the app compares your money against is
          bundled with the app itself, so choosing an asset or dragging a window
          over its price history does not send a request describing what you are
          looking at.
        </p>

        <h3>c) Analytics Data</h3>
        <p>
          WorthLater uses Firebase Analytics, a service provided by Google LLC,
          and PostHog, a service provided by PostHog, Inc. and hosted in the
          European Union, to help us understand how the app is used and improve
          it. Both receive the same events.
        </p>
        <p>These services may collect information such as:</p>
        <ul className="policy-list">
          <li>App interactions and usage events</li>
          <li>Features used within the app</li>
          <li>App version</li>
          <li>Device type and model</li>
          <li>Operating system and version</li>
          <li>Language and general region</li>
          <li>App instance identifiers</li>
          <li>
            The app-specific identifier RevenueCat assigns to your installation
            (see below), used so that analytics and subscription records refer
            to the same installation
          </li>
          <li>General technical and diagnostic information</li>
        </ul>
        <p>
          Analytics events describe <em>what kind of thing</em> happened, never
          the values behind it. A checked purchase is reported inside a price
          band rather than at its price; an hourly rate is reported as present
          or absent rather than as a rate; a retirement horizon is reported as a
          choice rather than as the number of years, because that number would
          be your age with the subtraction already done. Your year of birth, and
          every amount you enter, stay on the device.
        </p>
        <p>
          We use this information to understand usage patterns, evaluate
          features, identify technical issues, and improve WorthLater.
        </p>
        <p>
          We do not use analytics to access the content of your
          messages, photos, contacts, personal files, or other applications, and
          we do not use analytics data for personalized advertising.
        </p>

        <h3>d) Subscription and Purchase Information</h3>
        <p>
          WorthLater uses RevenueCat, a third-party subscription management
          service provided by RevenueCat, Inc., to manage in-app purchases and
          subscriptions for WorthLater Plus.
        </p>
        <p>
          When you purchase, renew, or restore a subscription, RevenueCat may
          process information necessary to verify and manage it, including:
        </p>
        <ul className="policy-list">
          <li>Purchase and subscription history</li>
          <li>Purchase receipts</li>
          <li>Subscription status</li>
          <li>Renewal and expiration information</li>
          <li>Product identifiers</li>
          <li>App version</li>
          <li>Device and operating system information</li>
          <li>An app-specific user identifier</li>
        </ul>
        <p>
          Because you do not create an account, RevenueCat uses an
          automatically generated app-specific identifier to associate purchases
          with your installation.
        </p>
        <p>
          We use this information to provide premium features, verify
          subscription status, and restore purchases.
        </p>
        <p>
          WorthLater does not receive or store your payment card or banking
          information. Payments are processed by the app store you installed the
          app from.
        </p>
        <p>
          We do not use purchase or subscription information for personalized
          advertising.
        </p>

        <h3>e) Data Stored on Your Device</h3>
        <p>
          WorthLater stores the following locally on your device in order to
          work at all:
        </p>
        <ul className="policy-list">
          <li>The purchases you check, with their prices and any names you give them</li>
          <li>Your decisions: skipped, bought, or still deciding</li>
          <li>Your currency, income, hourly rate and year of birth, if you provide them</li>
          <li>Your chosen investment options, return rates and horizon</li>
          <li>Your budget categories, plans and entries</li>
          <li>Reminders you have asked for, and app settings</li>
        </ul>
        <p>
          Income and year of birth are optional. Skipping them costs you the
          hours-of-work figure and the retirement horizon; nothing is guessed on
          your behalf.
        </p>

        <h2>3. Notifications</h2>
        <p>
          If you ask the app to remind you about a purchase, WorthLater
          schedules a local notification on your device. The reminder text,
          including the price and the projected amount, is composed and
          delivered entirely on the device.
        </p>
        <p>
          No push server is involved and no part of a reminder is transmitted to
          us or to any third party. Declining the notification permission does
          not affect anything else in the app.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>WorthLater uses the following third-party services:</p>
        <h3>Firebase Analytics</h3>
        <p>
          Firebase Analytics, provided by Google LLC, is used to understand
          general app usage and improve WorthLater. Firebase may process limited
          analytics, device, identifier, and technical information on our
          behalf.
        </p>
        <h3>PostHog</h3>
        <p>
          PostHog, provided by PostHog, Inc., is used alongside Firebase
          Analytics to understand general app usage and improve WorthLater. Data
          is hosted in the European Union. PostHog may process the same limited
          analytics, device, identifier, and technical information on our
          behalf.
        </p>
        <h3>RevenueCat</h3>
        <p>
          RevenueCat, provided by RevenueCat, Inc., is used to manage
          subscriptions, verify purchases, determine subscription status, and
          restore purchases. RevenueCat may process purchase, subscription, app,
          device, and app-specific identifier information as necessary to
          provide these services.
        </p>
        <p>
          These third-party providers process information according to their own
          privacy policies and applicable data protection terms.
        </p>

        <h2>5. Data Sharing</h2>
        <p>We do not sell or rent your personal information.</p>
        <p>
          We do not share information with third parties for their own
          personalized advertising or marketing purposes.
        </p>
        <p>
          Information may be processed by service providers such as Google
          Firebase, PostHog and RevenueCat as necessary to provide analytics and
          subscription functionality.
        </p>
        <p>
          We may also disclose information if required by applicable law,
          regulation, legal process, or governmental request, or where
          reasonably necessary to protect the rights, security, or integrity of
          WorthLater and its users.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          Information stored locally by WorthLater remains on your device until
          you clear it in the app, reset it, or delete the app.
        </p>
        <p>
          Analytics information collected through Firebase Analytics and
          PostHog may be retained according to our configuration of each
          service and their applicable data retention practices.
        </p>
        <p>
          Subscription and purchase information processed through RevenueCat may
          be retained as necessary to manage subscriptions, maintain purchase
          records, restore purchases, and comply with applicable legal
          obligations.
        </p>
        <p>
          Deleting WorthLater from your device removes the information stored
          locally, but it does not necessarily immediately delete information
          previously transmitted to Firebase Analytics, PostHog, RevenueCat, or
          your app store.
        </p>

        <h2>7. Your Choices</h2>
        <p>
          You can clear your decision log from within the app&rsquo;s settings at
          any time.
        </p>
        <p>
          You can turn off usage analytics at any time in the app under
          Settings &rarr; Privacy &rarr; Usage analytics. Turning it off stops
          both Firebase Analytics and PostHog from collecting anything more and
          clears their identifiers on your device.
        </p>
        <p>
          You may manage or cancel your subscription through your app store
          account settings.
        </p>
        <p>
          Where applicable under privacy laws, you may also have rights relating
          to your personal data, including rights to request access,
          correction, deletion, restriction, or information about how your data
          is processed. You may contact us using the email address below with a
          privacy-related request.
        </p>

        <h2>8. Children&rsquo;s Privacy</h2>
        <p>WorthLater is not specifically directed to children.</p>
        <p>
          We do not knowingly collect personal information from children through
          account registration or similar mechanisms.
        </p>
        <p>
          If we become aware that personal information from a child has been
          collected in a manner that requires parental consent under applicable
          law, we will take appropriate steps to delete or otherwise handle that
          information as required.
        </p>

        <h2>9. Security</h2>
        <p>
          We take reasonable measures to protect information handled through
          WorthLater and the third-party services used by the app.
        </p>
        <p>
          The strongest measure is structural: the financial information you
          enter is not transmitted, so there is no copy of it for us to lose.
        </p>
        <p>
          However, no method of electronic transmission or storage can be
          guaranteed to be completely secure.
        </p>

        <h2>10. Not Financial Advice</h2>
        <p>
          WorthLater shows illustrations, not forecasts. Projections assume a
          steady rate of return that real markets do not deliver, and historical
          price windows are not a promise about the future. Nothing in the app
          or on this site is financial advice or a recommendation to buy or sell
          any asset.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy if WorthLater&rsquo;s functionality,
          third-party services, data practices, or applicable legal requirements
          change.
        </p>
        <p>
          When we make changes, we will update the &ldquo;Effective Date&rdquo;
          at the top of this Privacy Policy.
        </p>

        <h2>12. Contact</h2>
        <p>
          If you have questions or requests regarding this Privacy Policy, you
          may contact us at:
        </p>
        <p>
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
