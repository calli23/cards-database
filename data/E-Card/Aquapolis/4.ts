import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Azumarill",
		fr: "Azumarill"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		184,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marill",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Bubble Turn",
				fr: "Tourne-bulle"
			},
			effect: {
				en: "Once during your turn (before your attack), if Azumarill is on your bench, you may flip a coin. If heads, return Azumarill and all cards attached to it to your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Azumarill est sur votre Banc, vous pouvez lancer une pièce. Si c'est face, renvoyez Azumarill et toutes les cartes qui y sont attachées dans votre main."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Sonic",
				fr: "Aquasonique"
			},
			effect: {
				en: "Don't apply Resistance.",
				fr: "N'appliquez pas la Résistance."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
