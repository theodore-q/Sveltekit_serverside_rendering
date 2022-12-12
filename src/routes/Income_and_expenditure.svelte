<script lang="ts">
	export let formData;
	import { getValue } from 'felte';
	import { parseFloatToInt, ratioToGrade } from '../helpers/helpers';

	let income = 0;
	let expenditure = 0;
	let expenditureToIncomeRatio = 0;
	let grade: string | null = null;

	$: income = [
		parseFloatToInt(getValue($formData, 'income_salary') || '0'),
		parseFloatToInt(getValue($formData, 'income_other') || '0')
	].reduce((a, b) => a + b, 0); // get sum of income

	$: expenditure = [
		parseFloatToInt(getValue($formData, 'expenditure_mortgage') || '0'),
		parseFloatToInt(getValue($formData, 'expenditure_rent') || '0'),
		parseFloatToInt(getValue($formData, 'expenditure_utilities') || '0'),
		parseFloatToInt(getValue($formData, 'expenditure_travel') || '0'),
		parseFloatToInt(getValue($formData, 'expenditure_food') || '0'),
		parseFloatToInt(getValue($formData, 'expenditure_loans') || '0'),
		parseFloatToInt(getValue($formData, 'expenditure_credit_cards') || '0')
	].reduce((a, b) => a + b, 0); // get sum of expenditure

	$: expenditureToIncomeRatio = expenditure / income;
	$: grade = ratioToGrade(expenditureToIncomeRatio);
</script>

<h1 class="title is-1">Income & Expenditure (Monthly)</h1>
<h2 class="subtitle is-3">Step 2: Please fill in the form below</h2>
<section class="form-wrapper">
	<div class="form-group income">
		<h2 class="title is-3">Income</h2>
		<label class="label">
			Salary
			<div class="field has-addons">
				<div class="control">
					<span class="button is-static"> £ </span>
				</div>
				<div class="control">
					<input class="input" placeholder="00.00" type="number" name="income_salary" />
				</div>
			</div>
		</label>

		<label class="label">
			Other
			<div class="field has-addons">
				<div class="control">
					<span class="button is-static"> £ </span>
				</div>
				<div class="control">
					<input class="input" placeholder="00.00" type="number" name="income_other" />
				</div>
			</div>
		</label>
	</div>

	<div class="form-group expenditure">
		<h2 class="title is-3">Expenditure</h2>
		<label class="label">
			Mortgage
			<div class="field has-addons">
				<div class="control">
					<span class="button is-static"> £ </span>
				</div>
				<div class="control">
					<input class="input" placeholder="00.00" type="number" name="expenditure_mortgage" />
				</div>
			</div>
		</label>

		<label class="label">
			Rent
			<div class="field has-addons">
				<div class="control">
					<span class="button is-static"> £ </span>
				</div>
				<div class="control">
					<input class="input" placeholder="00.00" type="number" name="expenditure_rent" />
				</div>
			</div>
		</label>

		<label class="label">
			Utilities
			<div class="field has-addons">
				<div class="control">
					<span class="button is-static"> £ </span>
				</div>
				<div class="control">
					<input class="input" placeholder="00.00" type="number" name="expenditure_utilities" />
				</div>
			</div>
		</label>

		<label class="label">
			Travel
			<div class="field has-addons">
				<div class="control">
					<span class="button is-static"> £ </span>
				</div>
				<div class="control">
					<input class="input" placeholder="00.00" type="number" name="expenditure_travel" />
				</div>
			</div>
		</label>

		<label class="label">
			Food
			<div class="field has-addons">
				<div class="control">
					<span class="button is-static"> £ </span>
				</div>
				<div class="control">
					<input class="input" placeholder="00.00" type="number" name="expenditure_food" />
				</div>
			</div>
		</label>
	</div>
	<div class="form-group debt-payments">
		<h2 class="title is-3">Debt payments</h2>
		<label class="label">
			Loans
			<div class="field has-addons">
				<div class="control">
					<span class="button is-static"> £ </span>
				</div>
				<div class="control">
					<input class="input" placeholder="00.00" type="number" name="expenditure_loans" />
				</div>
			</div>
		</label>

		<label class="label">
			Credit cards
			<div class="field has-addons">
				<div class="control">
					<span class="button is-static"> £ </span>
				</div>
				<div class="control">
					<input class="input" placeholder="00.00" type="number" name="expenditure_credit_cards" />
				</div>
			</div>
		</label>
	</div>

	<div class="grade-display">
		<h3><b>Your I&E rating: {grade}</b></h3>
		<div>Disposable income: £{(income - expenditure) / 100}</div>
		<div>I&E Ratio: {isFinite(expenditureToIncomeRatio) && Math.floor(expenditureToIncomeRatio * 100) || 0}%</div>
		<table class="grade-display__table">
			<caption>Expenditure to Income</caption>
			<thead>
				<tr>
					<th>Ratio</th>
					<th>Grade</th>
				</tr>
			</thead>
			<tbody>
				<tr class={grade === 'A' ? 'active' : ''}>
					<td>&lt; 10%</td>
					<td>A</td>
				</tr>
				<tr class={grade === 'B' ? 'active' : ''}>
					<td>10%</td>
					<td>B</td>
				</tr>
				<tr class={grade === 'C' ? 'active' : ''}>
					<td>30%</td>
					<td>C</td>
				</tr>
				<tr class={grade === 'D' ? 'active' : ''}>
					<td>50% &gt;</td>
					<td>D</td>
				</tr>
			</tbody>
		</table>
	</div>

	<button class="button is-primary" type="submit"> SUBMIT </button>
</section>

<style lang="scss">
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
	.form-wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2);
		grid-column-gap: 0px;
		grid-row-gap: 37px;
		grid-column-gap: 8px;
	}

	.grade-display__table {
		tbody {
			tr.active:nth-child(1) {
				background-color: #6aa84f;
			}
			tr.active:nth-child(2) {
				background-color: #93c47d;
			}
			tr.active:nth-child(3) {
				background-color: #ffd966;
			}
			tr.active:nth-child(4) {
				background-color: #ff9900;
			}
		}
	}
	.income {
		grid-area: 1 / 1 / 2 / 3;
	}
	.expenditure {
		grid-area: 2 / 1 / 3 / 2;
	}
	.debt-payments {
		grid-area: 2 / 2 / 3 / 3;
	}
	.grade-display {
		grid-area: 1/3/3/4;
		align-self: center;
	}
	@media screen and (max-width: 768px) {
		.form-wrapper {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(4);
			grid-column-gap: 0px;
			grid-row-gap: 37px;
		}
		.income {
			grid-area: 1 / 1 / 2 / 2;
		}
		.expenditure {
			grid-area: 2 / 1 / 3 / 2;
		}
		.debt-payments {
			grid-area: 3 / 1 / 4 / 2;
		}
		.grade-display {
			grid-area: 4/1/5/2;
			align-self: center;
		}
	}

	.grade-display {
		border: 1px solid;
		padding: 20px;
		border-radius: 6px;
		max-width: 255px;
	}
	.grade-display__table {
		width: 100%;
	}
	.form-group h2 {
		margin-bottom: 12px;
	}
</style>
