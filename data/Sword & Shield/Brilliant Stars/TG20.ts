import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Rapid Strike Urshifu V",
		fr: "Shifours Mille Poings V",
		es: "Urshifu Golpe Fluido V",
		it: "Urshifu Pluricolpo V",
		pt: "Urshifu Golpe Fluido V",
		de: "Fließender-Angriff-Wulaosu V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Strafe",
			fr: "Bombarder",
			es: "Pasada de Ataque",
			it: "Mitragliare",
			pt: "Bombardear",
			de: "Beharken"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Hundred Furious Blows",
			fr: "Multicoups Furieux",
			es: "Cien Golpes Furiosos",
			it: "Cento Colpi Distruttivi",
			pt: "Centenas de Golpes Furiosos",
			de: "Hundert heftige Schläge"
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card