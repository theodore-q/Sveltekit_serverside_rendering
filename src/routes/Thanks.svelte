<script lang="ts">
	import type { SubmitResponse } from '../helpers/helpers';
	export let submitResponse: SubmitResponse;
</script>

<div>
	{#if submitResponse?.success}
		<h1>Thanks for submitting the form</h1>
		<p>Here is the details of the data you submitted:</p>
		<pre>{JSON.stringify(submitResponse, null, 2)}</pre>
	{/if}
	{#if submitResponse?.error}
		<h1>There was an error submitting the form</h1>
		<p>Here is the error:</p>
		<pre>{JSON.stringify(submitResponse.error, null, 2)}</pre>
	{/if}
</div>
