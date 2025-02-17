import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Flygon ex δ",
		fr: "Libegon ex δ"
	},
	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 150,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Vibrava",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sand Damage",
				fr: "Sable Volant"
			},
			effect: {
				en: "As long as Flygon ex is your Active Pokémon, put 1 damage counter on each of your opponent's Benched Basic Pokémon between turns. You can't use more than 1 Sand Damage Poké-Body between turns.",
				fr: "Tant que Libegon ex est votre Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon de base sur le Banc de votre adversaire entre deux tours. Vous ne pouvez pas utiliser plus d'1 Poké-Body Sable Volant entre deux tours."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Pulse",
				fr: "Vibration psy"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 80,

		},
	],






}

export default card
