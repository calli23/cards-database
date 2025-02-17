import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Celebi",
		fr: "Celebi brillant"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Healing Water",
				fr: "Eau de soin"
			},
			effect: {
				en: "Remove a number of damage counters from 1 of your Benched Pokémon equal to the number of Energy cards attached to Shining Celebi. If the Pokémon has fewer damage counters than that, remove all of them.",
				fr: "Retirez un nombre de marqueurs de dégâts sur un des Pokémon de votre Banc égal au nombre d'Énergies  attachées à Celebi brillant. Si le Pokémon a moins de marqueurs de dégâts, retirez-les tous."
			},

		},
		{
			cost: [
				"Grass",
				"Psychic",
			],

			name: {
				en: "Miracle Leaf",
				fr: "Feuille miracle"
			},

			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to the Defending Pokémon. If you get 1 or more heads, the Defending Pokémon is now Asleep, Confused, or Poisoned (your choice).",
				fr: "Lancez un nombre de pièces égal au nombre de cartes Énergie attachées au Pokémon Défenseur. Si vous obtenez au moins une face, le Pokémon Défenseur est maintenant Endormi, Confus ou Empoisonné (selon votre choix)."
			},

			damage: 10
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il est adoré comme un dieu de la forêt. Il n'apparaît que dans des forêts anciennes et paisibles."
	}
}

export default card
