import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Gible",
		fr: "Griknot"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		443,
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
				en: "Push Down",
				fr: "Renverser"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+10"
		},
	],

	description: {
		fr: "Il niche dans les petits trous horizontaux des murs des grottes. Il bondit pour saisir sa proie."
	}
}

export default card
