import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Kakuna",
		fr: "Coconfort"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		14,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weedle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Secrete Poison",
				fr: "Sécrétion de poison"
			},
			effect: {
				en: "During your opponent's next turn, whenever your opponent's attack damages Kakuna (even if Kakuna is knocked out), your opponent's Active Pokémon is now Poisoned and Kakuna does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Pendant le prochain tour de votre adversaire, quand son attaque fait des dégâts à Coconfort (même si Coconfort est K.O.), le Pokémon Actif de votre adversaire est Empoisonné et Coconfort inflige 10 dégâts à chaque Pokémon du Banc de votre adversaire. (N'appliquez pas la Faiblesse et la Résistance pour les Pokémon du Banc.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Même si c'est un cocon, il peut bouger un peu. Il peut allonger ses pointes empoisonnées s'il est attrapé."
	}
}

export default card
