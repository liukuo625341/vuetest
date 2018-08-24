<template>
	<section>
		<h1>Regular expression正则表达式初次接触</h1>
		<h3>1.模糊匹配</h3>
		<div>1.1横向模糊匹配:一个正则可以匹配的字符的长度不是固定的,可以是多种情况.实现方式:使用z{m,n}   表示z出现m到n次  /ab{2,5}c/   表示b可以出现2-5次  ac固定^</div>
		<div>1.2纵向模糊匹配:当具体到某一个字符串时  他可以不是某个确定的字符 ,可以有多种可能.实现方式:使用字符组[] 比如:/a[123]c/  可以匹配a1c a2c a3c </div>
	</section>
</template>

<script>
	export default{
		
	}
</script>

<style>
</style>