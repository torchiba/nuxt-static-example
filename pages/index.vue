<template>
	<!-- section.container
		div
			app-logo
			h1.title torchiba
			h2.subtitle ポートフォリオ予定地 -->
	<el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue';

export default {
	components: {
		// AppLogo,
	},
	data() {
		return {
			radio: 1,
			activeName: 'first',
		};
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		},
	},
};
</script>

<style lang="scss">
.container {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
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

