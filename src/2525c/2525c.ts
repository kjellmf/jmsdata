export const BATTLE_DIMENSIONS = {
    "P": "Space",
    "A": "Air",
    "G": "Ground",
    "S": "Sea Surface",
    "U": "Sea Subsurface",
    "F": "SOF"
};

export const CODING_SCHEME = {
    "S": "Warfighting",
    "I": "Intelligence",
    "O": "Stability Operations",
    "E": "Emergency Management Symbols"
};

export const STANDARD_IDENTITIES = {
    "P": "Pending",
    "U": "Unknown",
    "A": "Assumed Friend",
    "F": "Friend",
    "N": "Neutral",
    "S": "Suspect",
    "H": "Hostile",
    "G": "Exercise Pending",
    "W": "Exercise Unknown",
    "D": "Exercise Friend",
    "L": "Exercise Neutral",
    "M": "Exercise Assumed Friend",
    "J": "Joker",
    "K": "Faker",
    "O": "None Specified"
};

export const STATUSES = {
    "-": "-",
    "A": "Anticipated/Planned",
    "P": "Present",
    "C": "Present/Fully Capable",
    "D": "Present/Damaged",
    "X": "Present/Destroyed",
    "F": "Present/Full To Capacity"
};

export const ECHELONS = {
    "-": "-",
    "A": "Team/Crew",
    "B": "Squad",
    "C": "Section",
    "D": "Platoon/Detachment",
    "E": "Company/Battery/Troop",
    "F": "Battalion/Squadron",
    "G": "Regiment/Group",
    "H": "Brigade",
    "I": "Division",
    "J": "Corps/Mef",
    "K": "Army",
    "L": "Army Group/Front",
    "M": "Region",
    "N": "Command"
};

export const ECHELON_LIST = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"]

export const MODIFIERS = {
    "-": { label: "-", values: ECHELONS },
    "A": { label: "Headquarters", values: ECHELONS },
    "B": { label: "Task Force HQ", values: ECHELONS },
    "C": { label: "Feint Dummy HQ", values: ECHELONS },
    "D": { label: "Feint Dummy/Task Force HQ", values: ECHELONS },
    "E": { label: "Task Force", values: ECHELONS },
    "F": { label: "Feint Dummy", values: ECHELONS },
    "G": { label: "Feint Dummy/Task Force", values: ECHELONS },
    "H": { label: "Installation", values: { "-": "-", "B": "FEINT DUMMY INSTALLATION" } },
    "M": {
        label: "Mobility",
        values: {
            "O": "Wheeled/Limited",
            "P": "Wheeled",
            "Q": "Tracked",
            "R": "Wheeled And Tracked",
            "S": "Towed",
            "T": "Rail",
            "U": "Over The Snow",
            "V": "Sled",
            "W": "Pack Animals",
            "Y": "Barge",
            "Z": "Amphibious"
        }
    },
    "N": { label: "Towed Array", values: { "S": "Towed Array (Short)", "L": "Towed Array (Long)" } },
};

