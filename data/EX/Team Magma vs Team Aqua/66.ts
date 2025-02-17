import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Poochyena",
		fr: "Medhyena de Team Magma"
	},
	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		261,
	],
	hp: 50,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Darkness Call",
				fr: "Demande d'Obscurité"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc, s'il en a."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc aiguisé"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
