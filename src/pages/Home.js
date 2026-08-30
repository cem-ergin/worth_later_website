import { Link } from 'react-router-dom';
import StoreButton from '../components/StoreButton';

/// The verdict screen, restated on a page: spend it and keep it side by side
/// at the same size, the premise underneath. The figures are the app's own
/// arithmetic (180 at 10% a year for 10 years is 466.87), so the page cannot
/// promise a number the app then contradicts.
function Trade() {
  return (
    <div className="trade">
      <div className="trade-half">
        <span className="trade-label">Spend it</span>
        <span className="trade-figure">$180</span>
        <span className="trade-note">About 7 hours of your work</span>
      </div>
      <div className="trade-half keep">
        <span className="trade-label">Keep it</span>
        <span className="trade-figure">$467</span>
        <span className="trade-note">What it could become in 10 years</span>
      </div>
      <p className="trade-premise">
        A broad index fund at 10% a year, over 10 years. The fund, the rate and
        the horizon are yours to change — they are your assumptions, not ours.
      </p>
    </div>
  );
}

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-inner">
          <h1>Is it really worth it?</h1>
          <p className="hero-lede">
            WorthLater asks one question before you spend. Type the price, pick
            what you would do with the money instead, and read the answer in two
            units: what it could become, and the hours of work it already cost
            you.
          </p>
          <div className="hero-actions">
            <StoreButton />
            <span className="hero-aside">
              Free. No account, no budget to build.
            </span>
          </div>
          <Trade />
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Two numbers, not one</p>
        <h2>Every price gets stated twice.</h2>
        <p>
          Once in money, as what the same amount could grow into over the
          horizon you choose. Once in time, as the hours of work it took to
          earn, from your own hourly rate. Two levers on one decision, side by
          side, at the same size.
        </p>
        <p>
          Nothing here shames you for buying. Skipping a purchase is the only
          thing the app colours green; buying is a plain, ordinary answer, and
          it gets logged the same way.
        </p>
      </section>

      <section className="section section-alt">
        <p className="eyebrow">How it works</p>
        <h2>Four steps, and the first one is the whole setup.</h2>
        <ol className="steps">
          <li>
            <span className="step-number">01</span>
            <span className="step-body">
              <strong>Type the price.</strong>
              <span>
                The hours of work it cost appear underneath as you type.
              </span>
            </span>
          </li>
          <li>
            <span className="step-number">02</span>
            <span className="step-body">
              <strong>Pick what the money would do instead.</strong>
              <span>
                An index fund, gold, a savings account, or a company you follow.
              </span>
            </span>
          </li>
          <li>
            <span className="step-number">03</span>
            <span className="step-body">
              <strong>See the trade.</strong>
              <span>
                Spend it now, or keep it and see what it becomes by a date you
                pick.
              </span>
            </span>
          </li>
          <li>
            <span className="step-number">04</span>
            <span className="step-body">
              <strong>Skip it, buy it, or sleep on it.</strong>
              <span>Either way it is logged.</span>
            </span>
          </li>
        </ol>
      </section>

      <section className="section">
        <p className="eyebrow">Hindsight, not just projection</p>
        <h2>Compare against what actually happened.</h2>
        <p>
          Search a company, fund, coin or metal, drag a window over its price
          history, and WorthLater states what your money would have come to
          across that stretch.
        </p>
        <p>
          It always prints a broad index fund over the same window next to it,
          along with the worst drop inside it. One company over a window you
          picked is the most flattering number an app like this can produce, so
          the boring one is shown too. A losing window is a real answer, and the
          app says so plainly.
        </p>
      </section>

      <section className="section section-alt">
        <p className="eyebrow">The rest of it</p>
        <h2>What the app keeps doing after you close it.</h2>
        <div className="feature-grid">
          <article className="feature">
            <h3>Sleep on it</h3>
            <p>
              Not sure? Ask to be reminded in a day, a week, a month. The
              reminder arrives carrying the same trade the app showed you: the
              price, and what it becomes if you keep it.
            </p>
          </article>
          <article className="feature">
            <h3>The receipts</h3>
            <p>
              Every decision is kept. History shows what you skipped, what you
              bought, and one running total for the money you walked away from.
            </p>
          </article>
          <article className="feature">
            <h3>Your assumptions, not ours</h3>
            <p>
              Change the return rate, the horizon, the currency and your hourly
              rate. Count to a fixed number of years, or all the way to
              retirement.
            </p>
          </article>
          <article className="feature">
            <h3>A whole month</h3>
            <span className="feature-tag">WorthLater Plus</span>
            <p>
              Budget asks the same question of a month rather than a purchase.
              Made, spent on wants, spent on needs, set aside. The leftover
              carries the same projection a skipped purchase does, and the whole
              tab flips to hours of work.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Private by default</p>
        <h2>Every price, salary and decision stays on your device.</h2>
        <p>
          No account. No sign-up. Nothing to log in to. The app knows what you
          earn and what you are about to buy, so none of those figures are ever
          sent anywhere: analytics carry a band or a yes-or-no fact, never an
          amount, and reminders are scheduled and delivered entirely on your
          phone.
        </p>
        <p>
          The full detail is in the{' '}
          <Link to="/privacy-policy">privacy policy</Link>.
        </p>
      </section>

      <section className="section section-alt">
        <p className="eyebrow">What it costs</p>
        <h2>The part that talks you out of spending is free.</h2>
        <div className="tiers">
          <div className="tier">
            <h3>Free, forever</h3>
            <p className="tier-price">No account, no trial to start</p>
            <ul>
              <li>Check any purchase, as often as you like</li>
              <li>Both units: money and hours of work</li>
              <li>Compare against real price history</li>
              <li>Reminders and the full decision log</li>
              <li>Every preference and assumption</li>
            </ul>
          </div>
          <div className="tier">
            <h3>WorthLater Plus</h3>
            <p className="tier-price">A monthly subscription, or one payment</p>
            <ul>
              <li>The Budget tab: a whole month in four columns</li>
              <li>A plan each month is measured against</li>
              <li>The leftover, projected forward</li>
              <li>The month in hours of work</li>
            </ul>
          </div>
        </div>
        <p>
          Anyone about to spend money should be able to stop and look at it
          first, and charging for that would be the app doing the thing it warns
          about. Budgeting a whole month is the tool you graduate to, and that
          is what is sold.
        </p>
      </section>

      <section className="section closing">
        <h2>Before you tap buy.</h2>
        <p>
          See the same money ten years from now, and the hours of work it
          already cost. Everything stays on your phone.
        </p>
        <div className="hero-actions">
          <StoreButton />
        </div>
      </section>

      <p className="disclaimer">
        Not advice. Projections use long-run average returns and assume steady
        growth. Real markets do not behave that way, and past price history is
        not a promise about the future. WorthLater shows illustrations, not
        forecasts, and nothing in it is financial advice.
      </p>
    </main>
  );
}

export default Home;
