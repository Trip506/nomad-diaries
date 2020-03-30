<template>
	<div class="text-xs-center">
		<v-dialog v-model="dialog" width="500">
			<template v-slot:activator="{ on }">
				<v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
			</template>

			<v-card>
				<v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

				<v-container grid-list-xs>
					<v-layout row wrap>
						<v-card v-for="(item, index) in $store.state.cart.items" :key="index">{{item}}</v-card>
					</v-layout>
				</v-container>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" flat @click="dialog = false">I accept</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>