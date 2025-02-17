import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Entei Star",
		fr: "Entei ☆"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		244,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burning Turn",
				fr: "Tour brûlant"
			},
			effect: {
				en: "Switch Entei Star with 1 of your Benched Pokémon.",
				fr: "Échangez Entei  avec 1 de vos Pokémon de Banc."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Detonation",
				fr: "Détonation"
			},
			effect: {
				en: "If you have less Prize cards left than your opponent, discard the top 10 cards from your deck.",
				fr: "S'il vous reste moins de cartes Récompense que votre adversaire, défaussez les 10 cartes du dessus de votre deck."
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
