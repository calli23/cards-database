import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Lombre",
		fr: "Lombre"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		271,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Lotad",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Plunder",
				fr: "Pillage"
			},
			effect: {
				en: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Dresseur attachées au Pokémon Défenseur."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
