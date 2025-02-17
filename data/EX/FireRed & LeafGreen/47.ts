import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon"
	},
	illustrator: "Tomoaki Imakuni",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		137,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Data Retrieval",
				fr: "Récupération d'informations"
			},
			effect: {
				en: "If you have less than 4 cards in your hand, draw cards until you have 4 cards in your hand.",
				fr: "Si vous avez moins de 4 cartes dans votre main, piochez des cartes jusqu'à ce que vous ayez 4 cartes en main."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
