<template>
	<div>
		<header>
			<h1>@torchiba</h1>
			<p>横浜・都内が活動拠点のフロントエンドエンジニア</p>
			<img src="~/static/img_profile.png" alt="">
		</header>
		<section class="profile">
			<h2>プロフィール</h2>
			<div>
				<!-- <p>吾輩は猫である。名前はまだ無い。<br>どこで生れたか頓（とん）と見當がつかぬ。何でも薄暗いじめじめした所でニヤーニヤー泣いて居た事丈は記憶して居る。吾輩はこゝで始めて人間といふものを見た。然（しか）もあとで聞くとそれは書生といふ人間中で一番獰悪（だうあく）な種族であつたさうだ。此書生といふのは時々我々を捕（つかま）へて煮て食ふといふ話である。然し其當時は何といふ考（かんがへ）もなかつたから別段恐しいとも思はなかつた。但（たゞ）彼の掌（てのひら）に載せられてスーと持ち上げられた時何だかフハフハした感じが有つた許（ばか）りである。掌の上で少し落ち付いて書生の顔を見たのが所謂（いはゆる）人間といふものゝ見始（みはじめ）であらう。此時妙なものだと思つた感じが今でも殘つて居る。第一毛を以て装飾されべき筈の顔がつるつるして丸で薬罐（やくわん）だ。其後猫にも大分逢つたがこんな片輪には一度も出會（でく）はした事がない。加之（のみならず）顔の眞中が餘りに突起して居る。そうして其穴の中から時々ぷうぷうと烟（けむり）を吹く。どうも咽（む）せぽくて實に弱つた。是が人間の飲む烟草（たばこ）といふものである事は漸く此頃（このごろ）知つた。</p> -->
				<p>30代から業界未経験で2014年春からWebデザイナーとしてWeb制作会社で約4年勤めました。<br>
				1案件1デザイナーでこなすことが基本で、デザインラフ作成・仕様策定・コーティング・ディレクション・運用保守を一通り経験しています。</p>
				<p>開発の過程で、綺麗なデザインを作ることよりも「サイトの仕様や設計、要望をどのようにシステムに盛り込み、どう使いやすくUIを設計するか」に興味が強くなっていき、2018年から本格的にフロントエンドデザイナーとしてキャリアチェンジしました。</p>
			</div>
			<div>
				<h3>スキルセット</h3>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>vue.js</li>
					<li>Nuxt.js</li>
					<li>JavaScript<span>jQuery</span></li>
					<li>Git</li>
					<li>Github</li>
					<li>WordPress</li>
					<li>Photoshop</li>
					<li>Illustrator</li>
					<li>Adobe XD</li>
					<li>Visual Studio Code</li>
					<li>iTerm2 + Zsh</li>
				</ul>
			</div>
			<div>
				<ul>
					<li></li>
				</ul>
			</div>
		</section>
		<section class="blog">
			<h2>ブログ</h2>
			<ul>
				<li v-for="post in posts" :key="post.id">
					<router-link :to="`/blog/${post.id}`">{{post.title}}</router-link>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue';
export default {
	data() {
		return {};
	},
	computed: {
		posts() {
			return this.$store.state.posts;
		},
	},
	mounted() {
		this.$store.dispatch('load');
	},
};
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
	transition: opacity 0.15s;
}
.page-enter,
.page-leave-to {
	opacity: 0;
}

.container {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
}

section {
	border-bottom: 3px solid #ddd;
	padding: 2em 0;
	// text-align: center;
}

.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
		Arial, sans-serif; /* 1 */
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>

