import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Lombre",
		fr: "Lombre"
	},
	illustrator: "Ken Sugimori",
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

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Natural Cure",
				fr: "Guérison naturelle"
			},
			effect: {
				en: "When you attach a Water Energy card from your hand to Lombre, remove all Special Conditions from Lombre.",
				fr: "Lorsque vous attachez une carte Énergie  de votre main à Lombre, retirez-lui tous ses États Spéciaux."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blot",
				fr: "Pâté"
			},
			effect: {
				en: "Remove 2 damage counters from Lombre.",
				fr: "Retirez à Lombre 2 marqueurs de dégât."
			},
			damage: 20,

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
