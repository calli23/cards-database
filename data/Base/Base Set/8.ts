import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Strikes Back",
				fr: "Riposte"
			},
			effect: {
				en: "Whenever your opponent's attack damages Machamp (even if Machamp is Knoced Out), this power does 10 damage to attacking Pokémon. (Don't apply Weakness and Resistance.) This power can't be used if Machamp is already Asleep, Confused, or Paralyzed when your opponent attacks.",
				fr: "À chaque fois que l'attaque de votre adversaire inflige des dégâts à Mackogneur (même si Mackogneur est K.O.), ce pouvoir inflige 10 dégâts au Pokémon attaquant. (Ne pas tenir compte de la Faiblesse et de la Résistance.) Ce pouvoir ne peut être utilisé si Mackogneur est Endormi, Confus ou Paralysé quand votre adversaire attaque."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Seismic Toss",
				fr: "Frappe Atlas"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ses coups de poing sont si puissants qu'ils font voler ses adversaires jusqu'à l'horizon."
	}
}

export default card
