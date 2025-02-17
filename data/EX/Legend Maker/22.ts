import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magneton"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magnemite",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Reactive Recharge",
				fr: "Recharge réactive"
			},
			effect: {
				en: "If Magneton would be Knocked Out by damage from an opponent's attack, you may move any number of React Energy cards from Magneton to your Pokémon in any way you like.",
				fr: "Si Magneton doit être mis K.O par les dégâts d'une attaque de votre adversaire, vous pouvez déplacer autant de cartes Énergie réaction que vous voulez de Magneton sur vos Pokémon, de la façon que vous voulez."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Multiple Force",
				fr: "Forces multiples"
			},
			effect: {
				en: "If Magneton has any React Energy cards attached to it, this attack does 30 damage plus 10 more damage for each Magnemite and Magneton (both yours and your opponent's) in play.",
				fr: "Si Magneton possède des cartes Énergie réaction, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Magneti et Magneton en jeu (les vôtres et ceux de votre adversaire)."
			},
			damage: "30+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnetic Blast",
				fr: "Explosion magnétique"
			},

			damage: 60,

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
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
