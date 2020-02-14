<template>
	<div>
		{{data}}
		<v-container fluid>
			<h1>Currency Converter</h1>

			<v-layout row wrap align-center>
				<v-flex xs12 sm6>
					<v-subheader v-text="'Select Currency'"></v-subheader>
				</v-flex>
				<v-flex xs12 sm6>
					<v-select
						v-model="currencyfrom"
						:items="currencylist"
						:menu-props="{ maxHeight: '400' }"
						label="Select"
						hint="Pick your currency"
						persistent-hint
					></v-select>
				</v-flex>

				<v-flex xs12 sm6>
					<v-subheader v-text="'Select Currency'"></v-subheader>
				</v-flex>

				<v-flex xs12 sm6>
					<v-select
						v-model="currencyto"
						:items="currencylist"
						label="Select"
						hint="Pick your currency"
						persistent-hint
					></v-select>
				</v-flex>
			</v-layout>
		</v-container>

		<v-btn color="success" @click="fetch(currencyto, currencyfrom)">Get data</v-btn>


		<v-card>
			<v-card-text>
			<p>From: <v-text-field
				name="number"
				id="number"
				v-model="number"
			></v-text-field> {{data.base}}</p>
			<p v-for="(item, index) in data.rates" :key="index">To: {{item*number}} {{currencyto}}</p>
			</v-card-text>
		</v-card>




		<br />
		<br />
		<br />

		<v-container>
			<v-card v-for="(item, index) in currency" :key="index">
				<v-card-text>
					{{item.name}}
					{{item.code}}
				</v-card-text>
			</v-card>
		</v-container>
	</div>
</template>

<script>
import currency from "@/assets/currency.json";
export default {
	data() {
		return {
			currencyfrom: "",
			currencyto: "",
			currencylist: [
				'USD', 'GBP', 'EUR', 'JPY', 'BGN', 'CZK', 'DKK', 'HUF', 'PLN', 'RON',
				'SEK', 'CHF', 'ISK', 'NOK', 'HRK', 'RUB', 'TRY', 'AUD', 'BRL', 'CAD',
				'CNY', 'HKD', 'IDR', 'ILS', 'INR', 'KRW', 'MXN', 'MYR', 'NZD', 'BHP',
				'SGD', 'THB', 'ZAR'
			],
			input: "",
			data: "",
			currency: currency,
			number: "1"
		};
	},

	computed: {
		currencykeys() {
			return Object.keys(this.currency);
		}
	},
	methods: {
		async fetch(to, from) {
			let amount = this.input;
			const ip = await this.$axios.$get(
				"https://api.exchangeratesapi.io/latest?base=" + from +  "&symbols=" + to
			);
			this.data = ip;
		}
	}
};
</script>