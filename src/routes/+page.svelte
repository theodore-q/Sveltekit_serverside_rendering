<script lang="ts">
	import { createForm } from 'felte';
	import { validateSchema } from '@felte/validator-zod';
	import * as z from 'zod';
	import Personal_details from './Personal_details.svelte';
	import Income_and_expenditure from './Income_and_expenditure.svelte';
	import Thanks from './Thanks.svelte';
	import reporter from '@felte/reporter-dom';
	import { convertYYYYMMDDToDate, parseFloatToInt } from '../helpers/helpers';
	import type { SubmitResponse } from '../helpers/helpers';

	let step = 0;

	const stepComponents = [Personal_details, Income_and_expenditure, Thanks];
	let pagesState: any[] = [];
	let submitResponse: SubmitResponse = null;

	const validationSchemas = [
		z.object({
			email: z.string().email().min(1, { message: 'Email is required' }),
			name: z.string().min(1, { message: 'Name is required' }),
			phone_number: z.string().min(8, { message: 'Valid uk number is required' }),
			date_of_birth_yyyy: z.string().min(4, { message: 'Must be YYYY format' }),
			date_of_birth_mm: z.string().min(2, { message: 'Must be MM format' }),
			date_of_birth_dd: z.string().min(2, { message: 'Must be DD format' }),
			address_line_1: z.string().min(1, { message: 'First line of adderss is required' }),
			postcode: z.string().min(1, { message: 'Postcode is required' })
		})
	];

	const { form, data } = createForm({
		extend: reporter({
			single: true
		}),
		async onSubmit(values) {
			pagesState[step] = values;
			pagesState = pagesState; // Triggering update
			step += 1;
			window.scrollTo(0, 0); // Scroll to top of page

			if (step === stepComponents.length - 1) {
				const formValues = pagesState.reduce((acc, cur) => ({ ...acc, ...cur }), {});

				let { date_of_birth_yyyy, date_of_birth_mm, date_of_birth_dd, ...values } = formValues;

				//combine date of birth feilds into one date object
				values.date_of_birth = convertYYYYMMDDToDate(
					date_of_birth_yyyy,
					date_of_birth_mm,
					date_of_birth_dd
				);

				//if values key contains income or expenditure, change to int to save as pence
				Object.keys(values).forEach((key) => {
					if (key.includes('income') || key.includes('expenditure')) {
						values[key] = parseFloatToInt(values[key]);
					}
				});

				const response = await fetch('/api/applications', {
					method: 'POST',
					body: JSON.stringify(values),
					headers: {
						'content-type': 'application/json'
					}
				});
				if (response.status >= 200 && response.status <= 299) {
					const jsonResponse = await response.json();
					submitResponse = {
						success: jsonResponse
					};
				} else {
					// Handle errors
					const jsonResponse = await response.json();
					submitResponse = {
						error: jsonResponse
					};
				}
			}
		},
		validate: (values) => {
			if (!validationSchemas[step]) {
				return;
			}
			return validateSchema(validationSchemas[step])(values);
		}
	});
</script>

<form use:form>
	<svelte:component this={stepComponents[step]} bind:step {submitResponse} formData={data} />
</form>
