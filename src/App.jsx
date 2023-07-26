import { useState } from "react";

 /*
  - 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
  
  */

const billRate = [
  {
    pageviews: '10K',
    rate: 8,
    id: 1,
  },
  {
    pageviews: '50K',
    rate: 12,
    id: 2,
  },
  {
    pageviews: '100K',
    rate: 16,
    id: 3,
  },
  {
    pageviews: '500K',
    rate: 24,
    id: 4,
  },
  {
    pageviews: '1M',
    rate: 36,
    id: 5,
  },
]
const discountRate = 25;

function App() {
	const [range, setRange] = useState(1);
  const [billing, setBilling] = useState(false);
  
  function calDiscount(discount, amount) {
    return amount - (amount * (discount / 100))
  }
  function handleCheckbox(e) {
    setBilling(e.target.checked )
  }

	return (
		<main className="card">
			<header>
				<h1>Simple, traffic-based pricing</h1>
				<p>Sign-up for our 30-day trial. No credit card required.</p>
      </header>
      
			<section className="pricing">
				<form className="form">
					<p className="pageViews">{billRate[range-1].pageviews} Pageviews</p>
					
					<section className="form__group--range">
						<label htmlFor="priceSlider"></label>
            <input type="range" min={1} max={5} value={range} onChange={(e)=> setRange(e.target.value)}/>
          </section>

          <p className="billing">
						${billing ? calDiscount(discountRate, billRate[range-1].rate) : billRate[range-1].rate}/{billing ? "year" : "month"}
          </p>
          
					<section className="form__group--checkbox_container">
            <p>Monthly Billing</p>
            <section className="form__group--checkbox">
              <label htmlFor="checkbox" className={billing ? "checked" : ""}></label>
              <input type="checkbox" id="checkbox" onChange={handleCheckbox}/>
            </section>
						<p>
							Yearly Billing <span className="discount">25% <span className="discount__text">discount</span></span>
						</p>
					</section>
				</form>

				<section className="spec">
					<ul>
						<li><img src="images/icon-check.svg" alt="check mark" /> Unlimited websites</li>
						<li><img src="images/icon-check.svg" alt="check mark" /> 100% data ownership</li>
						<li><img src="images/icon-check.svg" alt="check mark" />Email reports</li>
					</ul>
					<button className="cta">Start my trial</button>
				</section>
			</section>

			<div className="attribution">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					rel="noreferrer"
				>
					Frontend Mentor
				</a>
				. Coded by <a href="#">Your Name Here</a>.
			</div>
		</main>
	);
}

export default App;
