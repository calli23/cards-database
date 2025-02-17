import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Rhydon",
		fr: "Rhinoferos"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		112,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rhyhorn",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud'korne"
			},

			damage: 30,

		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				en: "Rock Tumble",
				fr: "Roule-pierre"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance."
			},
			damage: 60,

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
