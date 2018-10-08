<template>
	<section class="container">
		<div>
			<app-logo/>
			<h1 class="title">
				ブログ
			</h1>
			<h2 class="subtitle">
				まず記事一覧があって<br>詳細ページへのリンクがある
			</h2>
		</div>
	</section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';

export default {
	components: {
		AppLogo,
	},
};
</script>
