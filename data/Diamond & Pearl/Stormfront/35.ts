import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Dusclops",
		fr: "Teraclope"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		356,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Duskull",
		fr: "Skélénox",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trick Room",
				fr: "Distorsion",
			},
			effect: {
				en: "If you have a Stadium card in play, this attack does 40 damage plus 20 more damage. If your opponent has a Stadium card in play, remove 2 damage counters from Dusclops.",
				fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires. Si votre adversaire a une carte Stade en jeu, retirez à Teraclope 2 marqueurs de dégât.",
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Son corps est creux. On raconte que celui qui regarde à l'intérieur finira aspiré par le néant."
	}
}

export default card
