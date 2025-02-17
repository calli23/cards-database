import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Skitty",
		fr: "Skitty"
	},
	illustrator: "Satoshi Ohta",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		300,
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
				en: "Important Errands",
				fr: "Courses importantes"
			},
			effect: {
				en: "Search your deck for a React Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie réaction, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jump On",
				fr: "Sauter"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "10+",

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
