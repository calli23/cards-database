import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Mightyena δ",
		fr: "Grahyena δ ESPÈCES DELTA"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		262,
	],
	hp: 70,
	types: [
		"Darkness",
		"Metal",
	],
	evolveFrom: {
		en: "Poochyena",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Delta Fang",
				fr: "Croc Delta"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, that Pokémon can't attack during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, il ne peut pas attaquer lors du prochain tour de votre adversaire."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Gang Up",
				fr: "S'y mettre à plusieurs"
			},
			effect: {
				en: "Does 10 damage times the number of Darkness Pokémon and Metal Pokémon you have in play.",
				fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon  et  que vous avez en jeu."
			},
			damage: "10×",

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
