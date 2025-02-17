import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Bellsprout",
		fr: "Chétiflor"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		69,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet liane"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon named Bellsprout and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				fr: "Cherchez dans votre deck un Pokémon de base appelé Chétiflor et placez-le sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Un Pokémon carnivore qui se nourrit de petits insectes. Ses racines servent d'attaches."
	}
}

export default card
