<template>
	<nav class="header">
		<ul>
			<li><nuxt-link to="/">ホーム</nuxt-link></li>
			<li><nuxt-link to="/blog">ブログ</nuxt-link></li>
			<li><nuxt-link to="/profile">プロフィール</nuxt-link></li>
			<li><nuxt-link to="/contact">お問い合わせ</nuxt-link></li>
		</ul>
	</nav>
</template>


<style lang="scss" scoped>
.header {
	ul {
		display: flex;
	}
	a {
		text-decoration: none;
		&:hover,
		&.nuxt-link exact-active {
			text-decoration: underline;
		}
	}
}
</style>

