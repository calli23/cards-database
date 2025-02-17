import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Chinchou",
		fr: "Loupio"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		170,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Supersonic",
				fr: "Ultrason"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus"
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Flail",
				fr: "Fleau"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Chinchou.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Loupio."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Il lance des arcs électriques positifs et négatifs entre ses antennes et électrocute ses ennemis."
	}
}

export default card
