<template>
	<div>
		<v-container grid-list-lg>
			<v-layout column>
				<v-card mb5 v-for="(item, index) in $store.state.cart.items" :key="index">
					<v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img>
					<v-card-title primary-title>
						<v-layout align-content-space-between justify-space-between>
							<v-flex>
								<p class="headline d-flex">{{item.name}}</p>
							</v-flex>

							<span
								v-if="item.discount_price!=0"
								class="title red--text"
							>{{item.discount_price/item.price*100}}% OFF!</span>
						</v-layout>
					</v-card-title>

					<v-card-text>{{item.description}}</v-card-text>

					<v-card-actions>
						<v-btn>
							<nuxt-link :to="'/shop/'+item.slug" class="accent--text">Read more</nuxt-link>
						</v-btn>
						<v-spacer></v-spacer>
						<p
							v-if="item.discount_price==0"
							class="title"
							style="margin-right: 15px;"
						>{{$store.state.currency}}:{{ Math.round($store.state.exchangeRate * item.price )}}</p>

						<p v-else class="title red--text" style="margin-right: 15px; ">
							<span
								class="grey--text"
								style="margin-right: 15px; text-decoration-line: line-through;"
							>{{$store.state.currency}}:{{Math.round($store.state.exchangeRate * item.price)}}</span>
							{{$store.state.currency}}:{{Math.round($store.state.exchangeRate * item.discount_price) }}
						</p>
					</v-card-actions>
					<v-btn color="error" @click="remove(index)">Remove from cart</v-btn>
				</v-card>
			</v-layout>
			<v-card>
				<v-card-title
					primary-title
				>Total Price {{$store.state.currency}} : {{Math.round($store.state.exchangeRate * totalPrice)}}</v-card-title>
			</v-card>
		</v-container>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
	data() {
		return {};
	},

	computed: {
		totalPrice() {
			var total = 0;
			this.$store.state.cart.items.forEach(element => {
				total = total + parseInt(element.price);
			});

			return total;
		}
	},

	methods: {
		...mapMutations({
			remove: "removeFromCart"
		})
	}
};
</script>