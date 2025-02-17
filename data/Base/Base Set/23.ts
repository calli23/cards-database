import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flamme"
			},
			effect: {
				en: "Discard 1 Energy card attached to Arcanine in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Arcanin pour pouvoir utiliser cette attaque."
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier"
			},
			effect: {
				en: "Arcanine does 30 damage to itself.",
				fr: "Arcanin s'inflige 30 dégâts."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Un Pokémon très recherché pour sa grâce légendaire. Son pas élégant semble glisser sur le vent."
	}
}

export default card
