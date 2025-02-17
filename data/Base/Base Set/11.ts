import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nidorino",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thrash",
				fr: "Mania"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Nidoking does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires ; si c'est pile, cette attaque inflige 30 dégâts et Nidoking s'inflige 10 dégâts."
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Toxic",
				fr: "Toxik"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Il subit maintenant 20 dégâts Poison au lieu de 10 après le tour de chaque joueur (même s'il était déjà empoisonné)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Sa queue est une arme redoutable, il s'en sert pour attraper sa proie et lui broyer les os."
	}
}

export default card
