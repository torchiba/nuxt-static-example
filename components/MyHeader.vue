<template>
	<nav class="header">
		<p class="logo header"><nuxt-link to="/">LOGO</nuxt-link></p>
		<ul>
			<li><nuxt-link to="/blog">ブログ</nuxt-link></li>
			<li><nuxt-link to="/about">プロフィール</nuxt-link></li>
			<li><nuxt-link to="/contact">お問い合わせ</nuxt-link></li>
		</ul>
	</nav>
</template>


<style lang="scss" scoped>
.header {
	display: flex;
	padding: 8px;
	align-items: center;
	.logo {
		font-size: 20px;
		font-weight: bold;
	}
	ul {
		display: flex;
		list-style: none;
		margin-left: auto;
		li {
			&:not(:last-child) {
				margin-right: 1em;
			}
		}
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

