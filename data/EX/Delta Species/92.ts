import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Holon Lass",
		fr: "Jeune fille Holon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nDéfaussez une carte de votre main. Si vous ne pouvez pas défausser de carte de votre main, vous ne pouvez pas jouer cette carte.\n\nComptabilisez le nombre de cartes Récompense restantes (les vôtres et celles de votre adversaire). Regardez le même nombre de cartes du dessus de votre deck. Choisissez autant de cartes Énergie que vous voulez, montrez-les à votre adversaire et placez-les dans votre main. Placez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck."
	}
}

export default card
