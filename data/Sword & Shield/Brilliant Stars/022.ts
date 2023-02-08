import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Entei V",
		fr: "Entei V",
		es: "Entei V",
		it: "Entei V",
		pt: "Entei V",
		de: "Entei V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fleet-Footed",
			fr: "Pas Agiles",
			es: "Celeridad",
			it: "Corsalesta",
			pt: "Ligeirinho",
			de: "Leichtfüßig"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may draw a card.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez piocher une carte.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes robar 1 carta.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi pescare una carta.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá comprar 1 carta.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 1 Karte ziehen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Burning Rondo",
			fr: "Rondo Brûlant",
			es: "Rondó Ardiente",
			it: "Bruciarondò",
			pt: "Cântico Incandescente",
			de: "Feuerrondo"
		},

		effect: {
			en: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			es: "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco (seus e do seu oponente).",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card