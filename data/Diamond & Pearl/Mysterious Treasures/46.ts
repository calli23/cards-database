import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Dodrio",
		fr: "Dodrio"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Doduo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Pick",
				fr: "Triplette"
			},
			effect: {
				en: "Choose 3 of your opponent's Evolved Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 3 des Pokémon Évolués de votre adversaire. Cette attaque inflige 30 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		fr: "Quand Doduo connait cette étrange évolution, l'une de ses têtes se dédouble. Il atteint les 60 km/h."
	}
}

export default card
