import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Flareon ex",
		fr: "Pyroli ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Eevee",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Flame",
				fr: "Flamme évolutive"
			},
			effect: {
				en: "Once during your turn, when you play Flareon ex from your hand to evolve 1 of your Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Burned and Confused.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Pyroli ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Brûlé et Confus."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flame Screen",
				fr: "Mur de feu"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Flareon ex by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Pyroli ex par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance)."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Tackle",
				fr: "Charge énergétique"
			},
			effect: {
				en: "Flareon ex does 10 damage to itself.",
				fr: "Pyroli ex s'inflige 10 dégâts."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
