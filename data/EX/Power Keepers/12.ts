import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pikachu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Plasma",
				fr: "Plasma"
			},
			effect: {
				en: "Search your discard pile for a Lightning Energy card and attach it to Raichu.",
				fr: "Cherchez dans votre pile de défausse une carte Énergie  et attachez-la à Raichu."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunderbolt",
				fr: "Tonnerre"
			},
			effect: {
				en: "Discard all Energy cards attached to Raichu.",
				fr: "Défaussez toutes les cartes Énergie attachées à Raichu."
			},
			damage: 100,

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
