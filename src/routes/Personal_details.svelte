<script>
	export let formData;
</script>

<h1 class="title is-1">Income & Expenditure Form</h1>
<h2 class="subtitle is-3">Step 1: Please fill in the form below</h2>
<h3 class="subtitle is-4">Personal Details</h3>

<label class="label">
	Email*
	<div class="field is-flex">
		<div class="control">
			<input class="input" name="email" aria-describedby="email-validation" />
		</div>
	</div>
	<p
		class="help is-danger"
		id="email-validation"
		data-felte-reporter-dom-for="email"
		aria-live="polite"
	/>
</label>

<label class="label">
	Name*
	<div class="field is-flex">
		<div class="control">
			<input class="input" name="name" aria-describedby="name-validation" />
		</div>
	</div>
	<p
		class="help is-danger"
		id="name-validation"
		data-felte-reporter-dom-for="name"
		aria-live="polite"
	/>
</label>

<label class="label">
	Phone number*
	<div class="field has-addons">
		<div class="control">
			<span class="button is-static"> +44 </span>
		</div>
		<div class="control">
			<input class="input" name="phone_number" aria-describedby="phone_number-validation" />
		</div>
	</div>
	<p
		class="help is-danger"
		id="phone_number-validation"
		data-felte-reporter-dom-for="phone_number"
		aria-live="polite"
	/>
</label>

<label class="label">
	Date of birth*
	<div class="date-of-birth is-flex">
		<div class="field">
			<div class="control">
				<input
					class="input"
					autocomplete="bday-day"
					maxlength="2"
					placeholder="DD"
					name="date_of_birth_dd"
					aria-describedby="date_of_birth-validation"
				/>
			</div>
		</div>
		<div class="field">
			<div class="control">
				<input
					class="input"
					autocomplete="bday-month"
					maxlength="2"
					placeholder="MM"
					name="date_of_birth_mm"
					aria-describedby="date_of_birth-validation"
				/>
			</div>
		</div>
		<div class="field">
			<div class="control">
				<input
					class="input"
					autocomplete="bday-year"
					maxlength="4"
					placeholder="YYYY"
					name="date_of_birth_yyyy"
					aria-describedby="date_of_birth-validation"
				/>
			</div>
		</div>
	</div>
	<p
		class="help is-danger"
		id="date_of_birth_dd-validation"
		data-felte-reporter-dom-for="date_of_birth_dd"
		aria-live="polite"
	/>
	<p
		class="help is-danger"
		id="date_of_birth_mm-validation"
		data-felte-reporter-dom-for="date_of_birth_mm"
		aria-live="polite"
	/>
	<p
		class="help is-danger"
		id="date_of_birth_yyyy-validation"
		data-felte-reporter-dom-for="date_of_birth_yyyy"
		aria-live="polite"
	/>
</label>

<label class="label">
	Line one of address*
	<div class="field is-flex">
		<div class="control">
			<input
				class="input"
				type="street-address"
				autocomplete="street-address"
				name="address_line_1"
				aria-describedby="address_line_1-validation"
			/>
		</div>
	</div>
	<p
		class="help is-danger"
		id="address_line_1-validation"
		data-felte-reporter-dom-for="address_line_1"
		aria-live="polite"
	/>
</label>

<label class="label">
	Postcode*
	<div class="field is-flex">
		<div class="control">
			<input class="input" name="postcode" aria-describedby="postcode-validation" />
		</div>
	</div>
	<p
		class="help is-danger"
		id="postcode-validation"
		data-felte-reporter-dom-for="postcode"
		aria-live="polite"
	/>
</label>

<button class="button is-primary" type="submit"> NEXT </button>

<style type="scss">
	.date-of-birth .field {
		width: 70px;
		padding-right: 8px;
	}
</style>
