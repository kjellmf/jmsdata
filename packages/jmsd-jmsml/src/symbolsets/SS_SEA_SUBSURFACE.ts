/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "35";
export const label = "Sea Subsurface";
export const id = "SS_SEA_SUBSURFACE";
export const dimensionId = "SEA_SUBSURFACE";
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
        "label": "Military", 
        "id": "MILITARY", 
        "graphic": "35110000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Submarine", 
                "id": "SUBMARINE", 
                "graphic": "35110100.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Submarine-Surfaced", 
                        "id": "SUBMARINE_SURFACED", 
                        "graphic": "35110101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Submarine-Snorkeling", 
                        "id": "SUBMARINE_SNORKELING", 
                        "graphic": "35110102.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Submarine-Bottomed", 
                        "id": "SUBMARINE_BOTTOMED", 
                        "graphic": "35110103.svg"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Other Submersible", 
                "id": "OTHER_SUBMERSIBLE", 
                "graphic": "35110200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Nonsubmarine", 
                "id": "NONSUBMARINE", 
                "graphic": "35110300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Autonomous Underwater Vehicle (AUV)/Unmanned Underwater Vehicle (UUV)", 
                "id": "AUV_UUV", 
                "graphic": "35110400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Diver", 
                "id": "DIVER", 
                "graphic": "35110500.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "12", 
        "label": "Civilian", 
        "id": "CIVILIAN", 
        "graphic": "35120000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Submersible", 
                "id": "SUBMERSIBLE_CIV", 
                "graphic": "35120100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Autonomous Underwater Vehicle (AUV)/ Underwater Vehicle (UUV)", 
                "id": "AUV_UUV_CIV", 
                "graphic": "35120200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Diver", 
                "id": "DIVER_CIV", 
                "graphic": "35120300.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "13", 
        "label": "Weapon", 
        "id": "WEAPON", 
        "graphic": "35130000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Torpedo", 
                "id": "TORPEDO", 
                "graphic": "35130100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Improvised Explosive Device (IED)", 
                "id": "IMPROVISED_EXPLOSIVE_DEVICE_IED", 
                "graphic": "35130200.svg", 
                "remarks": "Used with hostile standard identity only.", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Decoy", 
                "id": "DECOY", 
                "graphic": "35130300.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "14", 
        "label": "Echo Tracker Classifier (ETC) / Possible Contact (POSCON)", 
        "id": "ECHO_TRACKER_CLASSIFIER_ETC_POSSIBLE_CONTACT_POSCON", 
        "graphic": "35140000.svg", 
        "remarks": "All ETC/POSCON tracks shall have a pending standard identity frame.", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }, 
    {
        "digits": "15", 
        "label": "Fused Track", 
        "id": "FUSED_TRACK", 
        "graphic": "35150000.svg", 
        "remarks": "All fused tracks shall have a pending standard identity frame.", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }, 
    {
        "digits": "16", 
        "label": "Manual Track", 
        "id": "MANUAL_TRACK", 
        "graphic": "35160000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
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
        "label": "Antisubmarine Warfare", 
        "id": "ANTISUBMARINE_WARFARE_MOD", 
        "graphic": "35011.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "02", 
        "label": "Auxiliary", 
        "id": "AUXILIARY_MOD", 
        "graphic": "35021.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Mission Area"
    }, 
    {
        "digits": "03", 
        "label": "Command and Control", 
        "id": "COMMAND_AND_CONTROL_MOD", 
        "graphic": "35031.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Mission Area"
    }, 
    {
        "digits": "04", 
        "label": "Intelligence Surveillance Reconnaissance", 
        "id": "INTELLIGENCE_SURVEILLANCE_RECONNAISSANCE_MOD", 
        "graphic": "35041.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "05", 
        "label": "Mine Countermeasures", 
        "id": "MINE_COUNTERMEASURES_MOD", 
        "graphic": "35051.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "06", 
        "label": "Mine Warfare", 
        "id": "MINE_WARFARE_MOD", 
        "graphic": "35061.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "07", 
        "label": "Surface Warfare", 
        "id": "SURFACE_WARFARE_MOD", 
        "graphic": "35071.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "08", 
        "label": "Attack", 
        "id": "ATTACK_MOD", 
        "graphic": "35081.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Weapons Capability"
    }, 
    {
        "digits": "09", 
        "label": "Ballistic Missile", 
        "id": "BALLISTIC_MISSILE_MOD", 
        "graphic": "35091.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Weapons Capability"
    }, 
    {
        "digits": "10", 
        "label": "Guided Missile", 
        "id": "GUIDED_MISSILE_MOD", 
        "graphic": "35101.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Weapons Capability"
    }, 
    {
        "digits": "11", 
        "label": "Other Guided Missile", 
        "id": "OTHER_GUIDED_MISSILE_MOD", 
        "graphic": "35111.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Weapons Capability"
    }, 
    {
        "digits": "12", 
        "label": "Special Operations Forces (SOF)", 
        "id": "SPECIAL_OPERATIONS_FORCES_SOF_MOD", 
        "graphic": "35121.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Asset Capability"
    }, 
    {
        "digits": "13", 
        "label": "Possible Submarine Low 1", 
        "id": "POSSIBLE_SUBMARINE_LOW_1_MOD", 
        "graphic": "35131.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Submarine Confidence"
    }, 
    {
        "digits": "14", 
        "label": "Possible Submarine Low 2", 
        "id": "POSSIBLE_SUBMARINE_LOW_2_MOD", 
        "graphic": "35141.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Submarine Confidence"
    }, 
    {
        "digits": "15", 
        "label": "Possible Submarine High 3", 
        "id": "POSSIBLE_SUBMARINE_HIGH_3_MOD", 
        "graphic": "35151.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Submarine Confidence"
    }, 
    {
        "digits": "16", 
        "label": "Possible Submarine High 4", 
        "id": "POSSIBLE_SUBMARINE_HIGH_4_MOD", 
        "graphic": "35161.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Submarine Confidence"
    }, 
    {
        "digits": "17", 
        "label": "Probable Submarine", 
        "id": "PROBABLE_SUBMARINE_MOD", 
        "graphic": "35171.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Submarine Confidence"
    }, 
    {
        "digits": "18", 
        "label": "Certain Submarine", 
        "id": "CERTAIN_SUBMARINE_MOD", 
        "graphic": "35181.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Submarine Confidence"
    }, 
    {
        "digits": "19", 
        "label": "Anti-torpedo Torpedo", 
        "id": "ANTI_TORPEDO_TORPEDO_MOD", 
        "graphic": "35191.svg", 
        "limitUseTo": [
            "TORPEDO"
        ], 
        "category": "Weapons Capability"
    }, 
    {
        "digits": "20", 
        "label": "Hijacking/Highjacked", 
        "id": "HIJACKING_HIGHJACKED_MOD", 
        "graphic": "35201.svg", 
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
        "label": "Air Independent Propulsion", 
        "id": "AIR_INDEPENDENT_PROPULSION_MOD", 
        "graphic": "35012.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "02", 
        "label": "Diesel Electric General", 
        "id": "DIESEL_ELECTRIC_GENERAL_MOD", 
        "graphic": "35022.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "03", 
        "label": "Diesel - Type 1", 
        "id": "DIESEL___TYPE_1_MOD", 
        "graphic": "35032.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "04", 
        "label": "Diesel - Type 2", 
        "id": "DIESEL___TYPE_2_MOD", 
        "graphic": "35042.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "05", 
        "label": "Diesel - Type 3", 
        "id": "DIESEL___TYPE_3_MOD", 
        "graphic": "35052.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "06", 
        "label": "Nuclear Powered General", 
        "id": "NUCLEAR_POWERED_GENERAL_MOD", 
        "graphic": "35062.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "07", 
        "label": "Nuclear - Type 1", 
        "id": "NUCLEAR___TYPE_1_MOD", 
        "graphic": "35072.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "08", 
        "label": "Nuclear - Type 2", 
        "id": "NUCLEAR___TYPE_2_MOD", 
        "graphic": "35082.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "09", 
        "label": "Nuclear - Type 3", 
        "id": "NUCLEAR___TYPE_3_MOD", 
        "graphic": "35092.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "10", 
        "label": "Nuclear - Type 4", 
        "id": "NUCLEAR___TYPE_4_MOD", 
        "graphic": "35102.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "11", 
        "label": "Nuclear - Type 5", 
        "id": "NUCLEAR___TYPE_5_MOD", 
        "graphic": "35112.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "12", 
        "label": "Nuclear - Type 6", 
        "id": "NUCLEAR___TYPE_6_MOD", 
        "graphic": "35122.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "13", 
        "label": "Nuclear - Type 7", 
        "id": "NUCLEAR___TYPE_7_MOD", 
        "graphic": "35132.svg", 
        "limitUseTo": [
            "SUBMARINE"
        ], 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "14", 
        "label": "Autonomous Control", 
        "id": "AUTONOMOUS_CONTROL_MOD", 
        "graphic": "35142.svg", 
        "limitUseTo": [
            "AUV_UUV"
        ], 
        "category": "UUV Control"
    }, 
    {
        "digits": "15", 
        "label": "Remotely Piloted", 
        "id": "REMOTELY_PILOTED_MOD", 
        "graphic": "35152.svg", 
        "limitUseTo": [
            "AUV_UUV"
        ], 
        "category": "UUV Control"
    }, 
    {
        "digits": "16", 
        "label": "Expendable", 
        "id": "EXPENDABLE_MOD", 
        "graphic": "35162.svg", 
        "limitUseTo": [
            "AUV_UUV"
        ], 
        "category": "UUV Control"
    }
];

export const graphicFolder = {
    "entities": "Appendices/SeaSubsurface", 
    "modifierTwos": "Appendices/SeaSubsurface/mod2", 
    "modifierOnes": "Appendices/SeaSubsurface/mod1"
};

