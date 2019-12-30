<template>
	<div>Sam Furneaux is a great person</div>
</template>

<script>
export default {
	jsonld() {
		return {
			"@context": "http://schema.org",
			"@type": "Person",
			name: "Sam Furneaux ",
			disambiguatingDescription: "41st President of the United States",
			children: {
				"@type": "Person",
				name: "George W. Bush",
				disambiguatingDescription: "43rd President of the United States"
			}
		};
	}
};
</script>