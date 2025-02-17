import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Delcatty",
		fr: "Delcatty"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		301,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Skitty",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Draw",
				fr: "Pioche d'énergie"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard 1 Energy card from your hand. Then draw up to 3 cards from your deck. This power can't be used if Delcatty is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser une carte Énergie de votre main. Ensuite, piochez jusqu'à 3 cartes de votre deck. Ce pouvoir ne peut pas être utilisé si Delcatty est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Max Energy Source",
				fr: "Source d'énergie maximale"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to all of your Active Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à tous vos Pokémon Actifs."
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





}

export default card
