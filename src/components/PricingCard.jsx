import { useState } from "react";
import Header from "./Header";
import Features from "./Features";
import Attribution from "./Attribution";

const billRate = [
	{
		pageviews: "10K",
		rate: 8,
		id: 1,
	},
	{
		pageviews: "50K",
		rate: 12,
		id: 2,
	},
	{
		pageviews: "100K",
		rate: 16,
		id: 3,
	},
	{
		pageviews: "500K",
		rate: 24,
		id: 4,
	},
	{
		pageviews: "1M",
		rate: 36,
		id: 5,
	},
];
const discountRate = 25;

function PricingCard() {
	const [range, setRange] = useState(1);
	const [rate, setRate] = useState(false);

	function calDiscountPrice(discount, amount) {
		return amount - amount * (discount / 100);
	}
	function handleChangeRate(e) {
		setRate(e.target.checked);
	}

	return (
		<main className="card">
			<Header />

			<section className="pricing">
				<form className="form">
					<p className="pageViews">{billRate[range - 1].pageviews} Pageviews</p>

					<section className="form__group--range">
						<label htmlFor="range" className="range__label"></label>
						<input
							type="range"
							id="range"
							min={1}
							max={billRate.length}
							value={range}
							onChange={(e) => setRange(e.target.value)}
						/>
					</section>

					<p className="billing">
						<span className="billing__amount">
							$
							{rate
								? calDiscountPrice(discountRate, billRate[range - 1].rate)
								: billRate[range - 1].rate}
						</span>
						/{rate ? "year" : "month"}
					</p>

					<section className="form__group--checkbox_container">
						<p>Monthly Billing</p>
						<section
							className={
								rate
									? "form__group--checkbox active__checkbox"
									: "form__group--checkbox"
							}
						>
							<label
								htmlFor="checkbox"
								className={rate ? "checked" : ""}
							></label>
							<input
								type="checkbox"
								id="checkbox"
								onChange={handleChangeRate}
							/>
						</section>
						<p>
							Yearly Billing{" "}
							<span className="discount">
								25% <span className="discount__text">discount</span>
							</span>
						</p>
					</section>
        </form>
        
				<Features />
			</section>

      <Attribution />
		</main>
	);
}

export default PricingCard;
