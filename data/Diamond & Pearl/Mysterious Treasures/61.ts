import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Sandslash",
		fr: "Sablaireau"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Sandshrew",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spike Armor",
				fr: "Armure piquante"
			},
			effect: {
				en: "During your opponent's next turn, if Sandslash is damaged by an opponent's attack (even if Sandslash is Knocked Out), put 4 damage counters on the Attacking Pokémon.",
				fr: "Lors du prochain tour de votre adversaire, si une attaque de votre adversaire inflige des dégâts à Sablaireau (même s'il est mis K.O), placez 4 marqueurs de dégât sur le Pokémon Attaquant."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Poison Spike",
				fr: "Pointe empoisonnée"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, that Pokémon is now Poisoned.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Empoisonné."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	description: {
		fr: "Il se met en boule pour percuter l'ennemi. Ses épines aiguisées font beaucoup de dégâts."
	}
}

export default card
