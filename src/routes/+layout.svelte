<div class="page-layout">
	<section class="form-wrapper">
		<slot />
	</section>
</div>

<style>
	.page-layout {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 10px 20px rgb(0 0 0 / 10%), 0 6px 6px rgb(0 0 0 / 10%);
		padding: 59px 33px;
		/* text-align: center; */
		/* max-width: 100%; */
		max-width: 913px;
		/* height: 20px; */
		margin: 26px auto;
	}
	@media screen and (max-width: 768px) {
		.page-layout {
			padding: 0px 20px 30px;
		}
	}
</style>
