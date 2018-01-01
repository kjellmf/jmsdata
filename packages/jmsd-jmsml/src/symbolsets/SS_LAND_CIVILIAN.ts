/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "11";
export const label = "Land Civilian";
export const id = "SS_LAND_CIVILIAN";
export const dimensionId = "LAND_UNIT";
export const geometry = "POINT";

export const entities = <Entity[]>[
    {
        "digits": "00", 
        "label": "Unspecified", 
        "id": "UNSPECIFIED", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": []
    }, 
    {
        "digits": "11", 
        "label": "Civilian", 
        "id": "CIVILIAN", 
        "graphic": "11110000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Environmental Protection", 
                "id": "ENVIRONMENTAL_PROTECTION", 
                "graphic": "11110100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Government Organization", 
                "id": "GOVERNMENT_ORGANIZATION", 
                "graphic": "11110200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Individual", 
                "id": "INDIVIDUAL", 
                "graphic": "11110300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Organization or Group", 
                "id": "ORGANIZATION", 
                "graphic": "11110400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Killing Victim", 
                "id": "KILLING_VICTIM", 
                "graphic": "11110500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Killing Victims", 
                "id": "KILLING_VICTIMS", 
                "graphic": "11110600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Victim of an Attempted Crime", 
                "id": "VICTIM_ATTEMPTED_CRIME", 
                "graphic": "11110700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Spy", 
                "id": "SPY", 
                "graphic": "11110800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Composite Loss", 
                "id": "COMPOSITE_LOSS", 
                "graphic": "11110900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Emergency Medical Operation", 
                "id": "EMERGENCY_MEDICAL_OPERATION", 
                "graphic": "11111000.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }
];

export const specialEntitySubTypes = <EntitySubType[]>[];

export const sectorOneModifiers = <Modifier[]>[
    {
        "digits": "00", 
        "label": "Unspecified", 
        "id": "UNSPECIFIED_MOD"
    }, 
    {
        "digits": "01", 
        "label": "Assassination", 
        "id": "ASSASSINATION_MOD", 
        "graphic": "11011.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "02", 
        "label": "Execution (Wrongful Killing)", 
        "id": "EXECUTION_MOD", 
        "graphic": "11021.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "03", 
        "label": "Murder Victims", 
        "id": "MURDER_VICTIMS_MOD", 
        "graphic": "11031.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "04", 
        "label": "Hijacking", 
        "id": "HIJACKING_MOD", 
        "graphic": "11041.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "05", 
        "label": "Kidnapping", 
        "id": "KIDNAPPING_MOD", 
        "graphic": "11051.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "06", 
        "label": "Piracy", 
        "id": "PIRACY_MOD", 
        "graphic": "11061.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "07", 
        "label": "Rape", 
        "id": "RAPE_MOD", 
        "graphic": "11071.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "08", 
        "label": "Civilian", 
        "id": "CIVILIAN_MOD", 
        "graphic": "11081.svg", 
        "category": "Organization"
    }, 
    {
        "digits": "09", 
        "label": "Displaced Person(s), Refugee(s) and Evacuee(s)", 
        "id": "DISPLACED_MOD", 
        "graphic": "11091.svg", 
        "category": "Organization"
    }, 
    {
        "digits": "10", 
        "label": "Foreign Fighter(s)", 
        "id": "FOREIGN_FIGHTER_MOD", 
        "graphic": "11101.svg", 
        "category": "Organization"
    }, 
    {
        "digits": "11", 
        "label": "Gang Member or Gang", 
        "id": "GANG_MOD", 
        "graphic": "11111.svg", 
        "category": "Organization"
    }, 
    {
        "digits": "12", 
        "label": "Government Organization", 
        "id": "GOVERNMENT_ORGANIZATION_MOD", 
        "graphic": "11121.svg", 
        "category": "Organization"
    }, 
    {
        "digits": "13", 
        "label": "Leader or Leadership", 
        "id": "LEADER_1_MOD", 
        "graphic": "11131.svg", 
        "category": "Organization"
    }, 
    {
        "digits": "14", 
        "label": "Nongovernmental Organization Member or Nongovernmental Organization", 
        "id": "NONGOVERNMENTAL_ORGANIZATION_MOD", 
        "graphic": "11141.svg", 
        "category": "Organization"
    }, 
    {
        "digits": "15", 
        "label": "Coerced/Impressed Recruit", 
        "id": "COERCED_RECRUIT_MOD", 
        "graphic": "11151.svg", 
        "category": "Organization"
    }, 
    {
        "digits": "16", 
        "label": "Willing Recruit", 
        "id": "WILLING_RECRUIT_MOD", 
        "graphic": "11161.svg", 
        "category": "Organization"
    }, 
    {
        "digits": "17", 
        "label": "Religious or Religious Organization", 
        "id": "RELIGIOUS_MOD", 
        "graphic": "11171.svg", 
        "category": "Organization"
    }, 
    {
        "digits": "18", 
        "label": "Targeted Individual or Organization", 
        "id": "TARGETED_MOD", 
        "graphic": "11181.svg", 
        "category": "Organization"
    }, 
    {
        "digits": "19", 
        "label": "Terrorist or Terrorist Organization", 
        "id": "TERRORIST_MOD", 
        "graphic": "11191.svg", 
        "category": "Organization"
    }, 
    {
        "digits": "20", 
        "label": "Speaker", 
        "id": "SPEAKER_MOD", 
        "graphic": "11201.svg", 
        "category": "Organization"
    }, 
    {
        "digits": "21", 
        "label": "Accident", 
        "id": "ACCIDENT_MOD", 
        "graphic": "11211.svg", 
        "category": "Composite Loss"
    }, 
    {
        "digits": "22", 
        "label": "Combat", 
        "id": "COMBAT_MOD", 
        "graphic": "11221.svg", 
        "category": "Composite Loss"
    }, 
    {
        "digits": "23", 
        "label": "Other", 
        "id": "OTHER_MOD", 
        "graphic": "11231.svg", 
        "category": "Composite Loss"
    }, 
    {
        "digits": "24", 
        "label": "Loot", 
        "id": "LOOT_MOD", 
        "graphic": "11241.svg", 
        "category": "Crime"
    }
];

export const sectorTwoModifiers = <Modifier[]>[
    {
        "digits": "00", 
        "label": "Unspecified", 
        "id": "UNSPECIFIED_2_MOD"
    }, 
    {
        "digits": "01", 
        "label": "Leader or Leadership", 
        "id": "LEADER_2_MOD", 
        "graphic": "11012.svg", 
        "category": "Organization"
    }
];

export const graphicFolder = {
    "entities": "Appendices/Land", 
    "modifierTwos": "Appendices/Land/mod2", 
    "modifierOnes": "Appendices/Land/mod1"
};

