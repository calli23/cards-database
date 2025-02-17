import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "EXP. ALL",
		fr: "Multi expédition"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Multi expéditions à 1 de vos Pokémon (sauf les Pokémon-ex et les Pokémon dont le nom comporte un nom de Dresseur) qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez cette carte.\n\nLors du tour de votre adversaire, si 1 de vos Pokémon Actifs est mis K.O. par une attaque de votre adversaire, vous pouvez prendre 1 carte Énergie de base attachée au Pokémon K.O et la placer sur le Pokémon qui possède Multi expéditions. Dans ce cas, défaussez Multi expéditions."
	}
}

export default card
