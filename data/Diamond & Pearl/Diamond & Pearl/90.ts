import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Mime Jr.",
		fr: "Mime Jr.",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		439,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Mr. Mime from your hand onto Mime Jr. (this counts as evolving Mime Jr.) and remove all damage counters from Mime Jr.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer M Mime de votre main sur Mime Jr. (vous le faites ainsi évoluer) et retirer à Mime Jr. tous ses marqueurs de dégât.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Mime",
				fr: "Mime",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
				fr: "Mélangez votre main à votre deck. Ensuite, piochez autant de cartes qu'il y a de cartes dans la main de votre adversaire.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il imite ses ennemis. Une fois imités, ils ne peuvent plus quitter ce Pokémon des yeux."
	}
}

export default card
