import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Granbull",
		fr: "Granbull"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		210,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Snubbull",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Fang",
				fr: "Croc intimidant"
			},
			effect: {
				en: "As long as Granbull is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
				fr: "Tant que Granbull est votre Pokémon Actif, les dégâts qui sont infligés à vos Pokémon par une attaque de votre adversaire sont réduits de 10 (avant application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crushing Blow",
				fr: "Coup écrasant"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Lariat",
				fr: "Double lasso"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de faces."
			},
			damage: "50×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
