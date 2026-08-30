import { Link } from 'react-router-dom';
import { SUPPORT_EMAIL } from '../config';

function Support() {
  return (
    <main className="page">
      <div className="policy">
        <h1>Support</h1>
        <p className="policy-meta">
          Questions, bug reports and anything the app got wrong.
        </p>

        <p className="policy-callout">
          Write to{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Telling us
          which device and app version you are on makes a bug much faster to
          find.
        </p>

        <h2>Common questions</h2>

        <div className="faq">
          <h3>I already paid. How do I get WorthLater Plus back?</h3>
          <p>
            Open the Budget tab and tap through to the purchase screen, then tap{' '}
            <strong>Restore</strong> in the top right. Purchases are tied to
            your store account, so a restore works on a new phone and after a
            reinstall.
          </p>
        </div>

        <div className="faq">
          <h3>How do I cancel the subscription?</h3>
          <p>
            In your App Store account settings, under Subscriptions. The app
            deliberately does not offer a cancel button of its own: only the
            store can actually cancel, and a button that pretended to would be
            exactly the kind of trick this app exists to argue against. The
            one-time purchase has nothing to cancel.
          </p>
        </div>

        <div className="faq">
          <h3>My reminder never arrived.</h3>
          <p>
            Check that notifications are allowed for WorthLater in your phone
            settings. Reminders are scheduled on the device rather than sent
            from a server, so the app has to be installed and permitted for one
            to arrive. A reminder whose time passed while the phone was off is
            not fired late; the purchase is still sitting at the top of History.
          </p>
        </div>

        <div className="faq">
          <h3>Can I change the return rate, the currency or my hourly rate?</h3>
          <p>
            Yes, all of them, in Settings. The horizon can be a fixed number of
            years or run all the way to retirement. Every figure in the app is
            recalculated from whatever you set.
          </p>
        </div>

        <div className="faq">
          <h3>Where is my data, and how do I delete it?</h3>
          <p>
            On your device. Settings can clear the decision log, and deleting
            the app removes what is stored locally. See the{' '}
            <Link to="/privacy-policy">privacy policy</Link> for what the app
            does and does not send anywhere.
          </p>
        </div>

        <div className="faq">
          <h3>Is this financial advice?</h3>
          <p>
            No. Projections assume a steady return that real markets do not
            deliver, and historical price windows are not a promise about the
            future. WorthLater is a way to look at a purchase twice before
            making it, not a recommendation to buy or sell anything.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Support;
