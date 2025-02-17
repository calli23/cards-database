import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magneton"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Magnemite",
		fr: "Magneti",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnetic Resonance",
				fr: "Résonance magnétique",
			},
			effect: {
				en: "If you have a Stadium card in play, this attack does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnetic Release",
				fr: "Relâche magnétique",
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il est formé de trois Magnéti liés par magnétisme. En groupe, ils déclenchent un orage magnétique"
	}
}

export default card
