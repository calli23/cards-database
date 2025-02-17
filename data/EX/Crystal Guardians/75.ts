import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Crystal Beach",
		fr: "Plage de cristal"
	},

	illustrator: "Shizurow",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nChaque carte Énergie spéciale fournissant 2 Énergies ou plus (les vôtres et celles de votre adversaire) fournit maintenant 1 Énergie  uniquement. Cet effet n'est pas affecté par les Poké-Powers ou les Poké-Bodies."
	}
}

export default card
