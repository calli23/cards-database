import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Alph Lithograph",
		fr: "Lithographie d’Alpha",
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "REGARDEZ TOUTES VOS CARTES RECOMPENSE QUI SONT FACE CACHEE!",
		en: "LOOK AT ALL OF YOUR FACE DOWN PRIZE CARDS!"
	},

	trainerType: "Item",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 0
}

export default card
