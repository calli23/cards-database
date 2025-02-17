import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Lumineon",
		fr: "Luminéon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		457,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Finneon",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Lure Ring",
				fr: "Cercle trompeur"
			},
			effect: {
				en: "Once during your turn (before your attack), if Lumineon is your Active Pokémon, you may choose 1 of your opponent's Benched Pokémon that has maximum HP of 100 or more and switch it with 1 of the Defending Pokémon. This power can't be used if Lumineon is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Luminéon est votre Pokémon Actif, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire possédant un maximum de 100 PV ou plus et l'échanger avec 1 des Pokémon Défenseurs. Ce pouvoir ne peut pas être utilisé si Luminéon est affecté par un État Spécial."
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
				en: "Reverse Stream",
				fr: "Courant inverse"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Water Energy attached to Lumineon. Then, return all Water Energy attached to Lumineon to your hand.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Water attachée à Luminéon. Ensuite, reprenez dans votre main toutes les Énergies Water attachées à Luminéon."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	description: {
		fr: "Il vit au plus profond de l'océan. Il attire sa proie en illuminant les motifs de ses 4 nageoires."
	}
}

export default card
