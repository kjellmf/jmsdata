import {Context, StandardIdentity} from "./jmsml";

export const contexts = <Context[]>[
    {
        "digits": "0",
        "label": "Reality",
        "id": "REALITY"
    },
    {
        "digits": "1",
        "label": "Exercise",
        "id": "EXERCISE"
    },
    {
        "digits": "2",
        "label": "Simulation",
        "id": "SIMULATION"
    }
];

export const standardIdentities = <StandardIdentity[]>[
    {
        "digits": "0",
        "label": "Pending",
        "id": "SI_PENDING"
    },
    {
        "digits": "1",
        "label": "Unknown",
        "id": "SI_UNKNOWN"
    },
    {
        "digits": "2",
        "label": "Assumed Friend",
        "id": "SI_ASSUMED_FRIEND"
    },
    {
        "digits": "3",
        "label": "Friend",
        "id": "SI_FRIEND"
    },
    {
        "digits": "4",
        "label": "Neutral",
        "id": "SI_NEUTRAL"
    },
    {
        "digits": "5",
        "label": "Suspect/Joker",
        "id": "SI_SUSPECT_JOKER"
    },
    {
        "digits": "6",
        "label": "Hostile/Faker",
        "id": "SI_HOSTILE_FAKER"
    }
];

const standardIdentityMap = {
    "0": "cloverGraphic",
    "1": "cloverGraphic",
    "2": "rectangleGraphic",
    "3": "rectangleGraphic",
    "4": "squareGraphic",
    "5": "diamondGraphic",
    "6": "diamondGraphic"
};

const standardIdentityMap2 = {
    "SI_PENDING": "cloverGraphic",
    "SI_UNKNOWN": "cloverGraphic",
    "SI_ASSUMED_FRIEND": "rectangleGraphic",
    "SI_FRIEND": "rectangleGraphic",
    "SI_NEUTRAL": "squareGraphic",
    "SI_SUSPECT_JOKER": "diamondGraphic",
    "SI_HOSTILE_FAKER": "diamondGraphic"
};

const SID_MAP = {
    "SI_PENDING": "0",
    "SI_UNKNOWN": "1",
    "SI_ASSUMED_FRIEND": "2",
    "SI_FRIEND": "3",
    "SI_NEUTRAL": "4",
    "SI_SUSPECT_JOKER": "5",
    "SI_HOSTILE_FAKER": "6",
};



