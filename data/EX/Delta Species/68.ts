import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Eevee δ",
		fr: "Evoli δ ESPÈCES DELTA"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 50,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metal Scoop",
				fr: "Pelle métallique"
			},
			effect: {
				en: "Search your discard pile for a Metal Energy card and attach it to Eevee.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie  et attachez-la à Evoli."
			},
			damage: 10,

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
