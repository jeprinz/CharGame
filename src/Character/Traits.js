//@flow

import {List} from "immutable";
// import type {List} from "immutable";

// export type BaseTrait =
//     "Fire"
//     | "Water"
//     | "Earth"
//     | "Air"
//     | "Dark"
//     | "Light"
//     | "Magic"
//     | "Melee"
//
// export type ExtraTrait =
//     "Friendly"
//     | "Arrogant"
//     | "Beserk"
//     | "Slow"
//     | "Scared"
//     | "Foresight"
//     | "Snack"
//     | "Stunning"
//     | "Shield"
//     | "Persistent"
//     | "Goading"
//     | "Slippery"

export type BaseTrait = {
    name : string,
    power : number,
    speed : number,
    other : string,
    characterTraitBonus : string,
}

export const baseTraits : List <BaseTrait> = List ([
    {
        name : "Fire",
        other : "Does no damage to characters with water trait",
        power : 150,
        speed : 50,
        characterTraitBonus : "Fire moves have 10% more power"
    },
    {
        name : "Water",
        other : "",
        power : 75,
        speed : 50,
        characterTraitBonus : "Allied water characters have 30% more power"
    },
    {
        name : "Earth",
        other : "",
        power : 50,
        speed : 20,
        characterTraitBonus : "50% more HP and take half damage"
    },
    {
        name : "Air",
        other : "",
        power : 50,
        speed : 100,
        characterTraitBonus : "40% chance to dodge attacks"
    },
    {
        name : "Magic",
        other : "Damage can't be reduced or evaded",
        power : 85,
        speed : 50,
        characterTraitBonus : "Can't take Melee damage"
    },
    {
        name : "Melee",
        other : "",
        power : 100,
        speed : 70,
        characterTraitBonus : ""
    }
])

export type ExtraTrait = {
    name : string,
    effect : string,
    characterTraitBonus : string
}

export const extraTraits : List <ExtraTrait> = List([
    {
        name : "Friendly",
        effect : "Power x20%, and action affects all allies instead of enemy",
        characterTraitBonus : "Heal 30hp each turn if another friendly ally alive"
    },
    {
        name : "Arrogant",
        effect : "Action affects self instead of enemy",
        characterTraitBonus : "Take 10% more damage"
    },
    {
        name : "",
        effect : "",
        characterTraitBonus : ""
    },
    {
        name : "",
        effect : "",
        characterTraitBonus : ""
    },
    {
        name : "",
        effect : "",
        characterTraitBonus : ""
    },
    {
        name : "",
        effect : "",
        characterTraitBonus : ""
    },
    {
        name : "",
        effect : "",
        characterTraitBonus : ""
    },
    {
        name : "",
        effect : "",
        characterTraitBonus : ""
    },
    {
        name : "",
        effect : "",
        characterTraitBonus : ""
    },
    {
        name : "",
        effect : "",
        characterTraitBonus : ""
    },
    {
        name : "",
        effect : "",
        characterTraitBonus : ""
    },
    {
        name : "",
        effect : "",
        characterTraitBonus : ""
    },
])

export type Constraint =
    {
        type : "oneOf",
        traits : List<string>
    }

export const constraints : [Constraint]= [
    { // Affects which target
        type : "oneOf",
        traits : List([
            "Friendly",
            "Arrogant",

        ])
    }
]
