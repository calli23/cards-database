import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Abra",
		fr: "Abra"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		63,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Play Search",
				fr: "Jeu recherche"
			},
			effect: {
				en: "Look at the top 5 cards of your deck, choose 1 of them, and put it into your hand. Put the 4 other cards back on top of your deck. Shuffle your deck afterward.",
				fr: "Regardez les 5 cartes du dessus de votre deck, choisissez-en 1 et placez-la dans votre main. Replacez les 4 autres cartes au dessus de votre deck. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Ultra Evolution",
				fr: "Ultra évolution"
			},
			effect: {
				en: "Search your deck for Alakazam and put it onto Abra (this counts as evolving Abra). Shuffle your deck afterward.",
				fr: "Cherchez Alakazam dans votre deck et placez-le sur Abra (vous le faites ainsi évoluer). Ensuite, mélangez votre deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	description: {
		fr: "Il dort 18 heures par jour. Même éveillé, il ne prend pas la peine de se lever pour se téléporter."
	}
}

export default card
