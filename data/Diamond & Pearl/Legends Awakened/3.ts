import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Froslass",
		fr: "Momartik",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		478,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Snorunt",
		fr: "Schneppke",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Destiny Bond",
				fr: "Prlvt Destin",
			},
			effect: {
				en: "Discard a Psychic Energy attached to Froslass. During your opponent's next turn, if Froslass would be Knocked Out by damage from an attack, the Attacking Pokémon is Knocked Out.",
				fr: "Défaussez une Énergie Psychic attachée à Momartik. Lors du prochain tour de votre adversaire, si Momartik est mis K.O par des dégâts d'une attaque, le Pokémon Attaquant est mis K.O.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Icy Breath",
				fr: "Haleine glacée",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep. Put 1 damage counter on each of your opponent's Benched Pokémon.",
				fr: "Le Pokémon Défenseur est maintenant Endormi. Placez 1 marqueur de dégât sur chacun des Pokémon de Banc de votre adversaire.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "Momartik gèle ses ennemis grâce à son souffle à -50°C. Ça ne se voit pas, mais son corps est creux."
	}
}

export default card
