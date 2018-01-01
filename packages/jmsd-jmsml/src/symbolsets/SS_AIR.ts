/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "01";
export const label = "Air";
export const id = "SS_AIR";
export const dimensionId = "AIR";
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
        "graphic": "01110000.svg", 
        "remarks": "Reserved for hiearchical purposes.", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Fixed-Wing", 
                "id": "FIXED_WING", 
                "graphic": "01110100.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Medical Evacuation (MEDEVAC)", 
                        "id": "MEDEVAC", 
                        "graphic": "01110101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Attack/Strike", 
                        "id": "ATTACK_STRIKE", 
                        "graphic": "01110102.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Bomber", 
                        "id": "BOMBER", 
                        "graphic": "01110103.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Fighter", 
                        "id": "FIGHTER", 
                        "graphic": "01110104.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Fighter/Bomber", 
                        "id": "FIGHTER_BOMBER", 
                        "graphic": "01110105.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Cargo", 
                        "id": "CARGO", 
                        "graphic": "01110107.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Electronic Combat (EC)/Jammer", 
                        "id": "ECJ", 
                        "graphic": "01110108.svg"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Tanker", 
                        "id": "TANKER", 
                        "graphic": "01110109.svg"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Patrol", 
                        "id": "PATROL", 
                        "graphic": "01110110.svg"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Reconnaissance", 
                        "id": "RECON", 
                        "graphic": "01110111.svg"
                    }, 
                    {
                        "digits": "12", 
                        "label": "Trainer", 
                        "id": "TRAINER", 
                        "graphic": "01110112.svg"
                    }, 
                    {
                        "digits": "13", 
                        "label": "Utility", 
                        "id": "UTILITY", 
                        "graphic": "01110113.svg"
                    }, 
                    {
                        "digits": "14", 
                        "label": "VSTOL", 
                        "id": "VSTOL", 
                        "graphic": "01110114.svg"
                    }, 
                    {
                        "digits": "15", 
                        "label": "Airborne Command Post (ACP)", 
                        "id": "ACP", 
                        "graphic": "01110115.svg"
                    }, 
                    {
                        "digits": "16", 
                        "label": "Airborne Early Warning (AEW)", 
                        "id": "AEW", 
                        "graphic": "01110116.svg"
                    }, 
                    {
                        "digits": "17", 
                        "label": "Antisurface Warfare", 
                        "id": "ASUW", 
                        "graphic": "01110117.svg"
                    }, 
                    {
                        "digits": "18", 
                        "label": "Antisubmarine Warfare", 
                        "id": "ASW", 
                        "graphic": "01110118.svg"
                    }, 
                    {
                        "digits": "19", 
                        "label": "Communications", 
                        "id": "COM", 
                        "graphic": "01110119.svg"
                    }, 
                    {
                        "digits": "20", 
                        "label": "Combat Search and Rescue (CSAR)", 
                        "id": "CSAR", 
                        "graphic": "01110120.svg"
                    }, 
                    {
                        "digits": "21", 
                        "label": "Electronic Support (ES)", 
                        "id": "ES", 
                        "graphic": "01110121.svg"
                    }, 
                    {
                        "digits": "22", 
                        "label": "Government", 
                        "id": "GOV", 
                        "graphic": "01110122.svg"
                    }, 
                    {
                        "digits": "23", 
                        "label": "Mine Countermeasures (MCM)", 
                        "id": "MCM", 
                        "graphic": "01110123.svg"
                    }, 
                    {
                        "digits": "24", 
                        "label": "Personnel Recovery", 
                        "id": "PR", 
                        "graphic": "01110124.svg"
                    }, 
                    {
                        "digits": "25", 
                        "label": "Search and Rescue", 
                        "id": "SAR", 
                        "graphic": "01110125.svg"
                    }, 
                    {
                        "digits": "26", 
                        "label": "Special Operations Forces", 
                        "id": "SOF", 
                        "graphic": "01110126.svg"
                    }, 
                    {
                        "digits": "27", 
                        "label": "Ultra Light", 
                        "id": "UL", 
                        "graphic": "01110127.svg"
                    }, 
                    {
                        "digits": "28", 
                        "label": "Photographic Reconnaissance", 
                        "id": "PH", 
                        "graphic": "01110128.svg"
                    }, 
                    {
                        "digits": "29", 
                        "label": "Very Important Person (VIP)", 
                        "id": "VIP", 
                        "graphic": "01110129.svg"
                    }, 
                    {
                        "digits": "30", 
                        "label": "Suppression of Enemy Air Defense", 
                        "id": "SEAD", 
                        "graphic": "01110130.svg"
                    }, 
                    {
                        "digits": "31", 
                        "label": "Passenger", 
                        "id": "PX", 
                        "graphic": "01110131.svg"
                    }, 
                    {
                        "digits": "32", 
                        "label": "Escort", 
                        "id": "E", 
                        "graphic": "01110132.svg"
                    }, 
                    {
                        "digits": "33", 
                        "label": "Electronic Attack (EA)", 
                        "id": "EA", 
                        "graphic": "01110133.svg"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Rotary-Wing", 
                "id": "ROTARY_WING", 
                "graphic": "01110200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Unmanned Aircraft (UA)/Unmanned Aerial Vehicle (UAV)/Unmanned Aircraft System (UAS)/Remote Piloted Vehicle (RPV)", 
                "id": "UAV", 
                "graphic": "01110300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Vertical-Takeoff UAV (VT-UAV)", 
                "id": "VT_UAV", 
                "graphic": "01110400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Lighter Than Air", 
                "id": "LIGHTER_THAN_AIR", 
                "graphic": "01110500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Airship", 
                "id": "AIRSHIP", 
                "graphic": "01110600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Tethered Lighter Than Air", 
                "id": "TETHERED_LTA", 
                "graphic": "01110700.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "12", 
        "label": "Civilian", 
        "id": "CIVILIAN", 
        "graphic": "01120000.svg", 
        "remarks": "Reserved for hiearchical purposes.", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Fixed Wing", 
                "id": "CIV_FIXED_WING", 
                "graphic": "01120100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Rotary Wing", 
                "id": "CIV_ROTARY_WING", 
                "graphic": "01120200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Unmanned Aircraft (UA) / Unmanned Aerial Vehicle (UAV) / Unmanned Aircraft System (UAS) / Remote Piloted Vehicle (RPV)", 
                "id": "CIV_UAV", 
                "graphic": "01120300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Lighter Than Air", 
                "id": "CIV_LTA", 
                "graphic": "01120400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Airship", 
                "id": "CIV_AIRSHIP", 
                "graphic": "01120500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Tethered Lighter than Air", 
                "id": "CIV_TETHERED_LTA", 
                "graphic": "01120600.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "13", 
        "label": "Weapon", 
        "id": "WEAPON", 
        "graphic": "01130000.svg", 
        "remarks": "Reserved for hiearchical purposes.", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Bomb", 
                "id": "BOMB", 
                "graphic": "01130100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Decoy", 
                "id": "DECOY", 
                "graphic": "01130200.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "14", 
        "label": "Manual Track", 
        "id": "MANUAL_TRACK", 
        "graphic": "01140000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }
];

export const specialEntitySubTypes = <EntitySubType[]>[];

export const sectorOneModifiers = <Modifier[]>[
    {
        "digits": "00", 
        "label": "Not Applicable", 
        "id": "NOT_APPLICABLE_MOD"
    }, 
    {
        "digits": "01", 
        "label": "Attack/Strike", 
        "id": "ATTACK_STRIKE_MOD", 
        "graphic": "01011.svg", 
        "category": "Military Aircraft Type"
    }, 
    {
        "digits": "02", 
        "label": "Bomber", 
        "id": "BOMBER_MOD", 
        "graphic": "01021.svg", 
        "category": "Military Aircraft Type"
    }, 
    {
        "digits": "03", 
        "label": "Cargo", 
        "id": "CARGO_MOD", 
        "graphic": "01031.svg", 
        "category": "Aircraft Type"
    }, 
    {
        "digits": "04", 
        "label": "Fighter", 
        "id": "FIGHTER_MOD", 
        "graphic": "01041.svg", 
        "category": "Military Aircraft Type"
    }, 
    {
        "digits": "05", 
        "label": "Interceptor", 
        "id": "INTERCEPTOR_MOD", 
        "graphic": "01051.svg", 
        "remarks": "APP-6", 
        "category": "Military Aircraft Type"
    }, 
    {
        "digits": "06", 
        "label": "Tanker", 
        "id": "TANKER_MOD", 
        "graphic": "01061.svg", 
        "category": "Aircraft Type"
    }, 
    {
        "digits": "07", 
        "label": "Utility", 
        "id": "UTILITY_MOD", 
        "graphic": "01071.svg", 
        "category": "Aircraft Type"
    }, 
    {
        "digits": "08", 
        "label": "VSTOL/VTOL", 
        "id": "VSTOL_MOD", 
        "graphic": "01081.svg", 
        "category": "Aircraft Type"
    }, 
    {
        "digits": "09", 
        "label": "Passenger", 
        "id": "PASSENGER_MOD", 
        "graphic": "01091.svg", 
        "category": "Aircraft Type"
    }, 
    {
        "digits": "10", 
        "label": "Ultra Light", 
        "id": "ULTRA_LIGHT_MOD", 
        "graphic": "01101.svg", 
        "category": "Aircraft Type"
    }, 
    {
        "digits": "11", 
        "label": "Airborne Command Post (ACP)", 
        "id": "ACP_MOD", 
        "graphic": "01111.svg", 
        "category": "Military Aircraft Type"
    }, 
    {
        "digits": "12", 
        "label": "Airborne Early Warning (AEW)", 
        "id": "AEW_MOD", 
        "graphic": "01121.svg", 
        "category": "Military Aircraft Type"
    }, 
    {
        "digits": "13", 
        "label": "Government", 
        "id": "GOV_MOD", 
        "graphic": "01131.svg", 
        "category": "Aircraft Type"
    }, 
    {
        "digits": "14", 
        "label": "Medical Evacuation (MEDEVAC)", 
        "id": "MEDEVAC_MOD", 
        "graphic": "01141.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "15", 
        "label": "Escort", 
        "id": "ESCORT_MOD", 
        "graphic": "01151.svg", 
        "category": "Military Mission Area"
    }, 
    {
        "digits": "16", 
        "label": "Electronic Combat (EC)/Jammer", 
        "id": "EC_MOD", 
        "graphic": "01161.svg", 
        "category": "Military Mission Area"
    }, 
    {
        "digits": "17", 
        "label": "Patrol", 
        "id": "PATROL_MOD", 
        "graphic": "01171.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "18", 
        "label": "Reconnaissance", 
        "id": "RECON_MOD", 
        "graphic": "01181.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "19", 
        "label": "Trainer", 
        "id": "TRAINER_MOD", 
        "graphic": "01191.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "20", 
        "label": "Photographic (Reconnaissance)", 
        "id": "PHOTO_MOD", 
        "graphic": "01201.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "21", 
        "label": "Personnel Recovery", 
        "id": "PERSONNEL_RECOVERY_MOD", 
        "graphic": "01211.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "22", 
        "label": "Antisubmarine Warfare", 
        "id": "ASW_MOD", 
        "graphic": "01221.svg", 
        "category": "Military Mission Area"
    }, 
    {
        "digits": "23", 
        "label": "Communications", 
        "id": "COMMS_MOD", 
        "graphic": "01231.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "24", 
        "label": "Electronic Support (ES)", 
        "id": "ES_MOD", 
        "graphic": "01241.svg", 
        "category": "Military Mission Area"
    }, 
    {
        "digits": "25", 
        "label": "Mine Countermeasures (MCM)", 
        "id": "MCM_MOD", 
        "graphic": "01251.svg", 
        "category": "Military Mission Area"
    }, 
    {
        "digits": "26", 
        "label": "Search and Rescue", 
        "id": "SAR_MOD", 
        "graphic": "01261.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "27", 
        "label": "Special Operations Forces", 
        "id": "SOF_MOD", 
        "graphic": "01271.svg", 
        "category": "Military Mission Area"
    }, 
    {
        "digits": "28", 
        "label": "Surface Warfare", 
        "id": "SURFACE_WARFARE_MOD", 
        "graphic": "01281.svg", 
        "category": "Military Mission Area"
    }, 
    {
        "digits": "29", 
        "label": "Very Important Person (VIP) Transport", 
        "id": "VIP_MOD", 
        "graphic": "01291.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "30", 
        "label": "Combat Search and Rescue (CSAR)", 
        "id": "CSAR_MOD", 
        "graphic": "01301.svg", 
        "category": "Military Mission Area"
    }, 
    {
        "digits": "31", 
        "label": "Suppression of Enemy Air Defenses", 
        "id": "SUPP_EAD_MOD", 
        "graphic": "01311.svg", 
        "remarks": "APP-6", 
        "category": "Military Mission Area"
    }, 
    {
        "digits": "32", 
        "label": "Antisurface Warfare", 
        "id": "ASUW_MOD", 
        "graphic": "01321.svg", 
        "category": "Military Mission Area"
    }, 
    {
        "digits": "33", 
        "label": "Fighter/Bomber", 
        "id": "FB_MOD", 
        "graphic": "01331.svg", 
        "category": "Military Aircraft Type"
    }, 
    {
        "digits": "34", 
        "label": "Intensive Care", 
        "id": "IC_MOD", 
        "graphic": "01341.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "35", 
        "label": "Electronic Attack (EA)", 
        "id": "EA_MOD", 
        "graphic": "01351.svg", 
        "category": "Military Mission Area"
    }, 
    {
        "digits": "36", 
        "label": "Multimission", 
        "id": "MULTIMISSION_MOD", 
        "graphic": "01361.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "37", 
        "label": "Hijacking", 
        "id": "HIJACKING_MOD", 
        "graphic": "01371.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "38", 
        "label": "ASW Helo - LAMPS", 
        "id": "ASW_HELO_LAMPS_MOD", 
        "graphic": "01381.svg", 
        "limitUseTo": [
            "ROTARY_WING"
        ], 
        "category": "Mission Area"
    }, 
    {
        "digits": "39", 
        "label": "ASW Helo - SH-60R", 
        "id": "ASW_HELO_SH_60R_MOD", 
        "graphic": "01391.svg", 
        "limitUseTo": [
            "ROTARY_WING"
        ], 
        "category": "Mission Area"
    }
];

export const sectorTwoModifiers = <Modifier[]>[
    {
        "digits": "00", 
        "label": "Not Applicable", 
        "id": "NOT_APPLICABLE_2_MOD"
    }, 
    {
        "digits": "01", 
        "label": "Heavy", 
        "id": "HVY_MOD", 
        "graphic": "01012.svg", 
        "category": "Cargo/Transport Capacity"
    }, 
    {
        "digits": "02", 
        "label": "Medium", 
        "id": "MED_MOD", 
        "graphic": "01022.svg", 
        "category": "Cargo/Transport Capacity"
    }, 
    {
        "digits": "03", 
        "label": "Light", 
        "id": "LT_MOD", 
        "graphic": "01032.svg", 
        "category": "Cargo/Transport Capacity"
    }, 
    {
        "digits": "04", 
        "label": "Boom-Only", 
        "id": "BOOM_MOD", 
        "graphic": "01042.svg", 
        "limitUseTo": [
            "TANKER"
        ], 
        "category": "Re-fueling Capability"
    }, 
    {
        "digits": "05", 
        "label": "Drogue-Only", 
        "id": "DROGUE_MOD", 
        "graphic": "01052.svg", 
        "limitUseTo": [
            "TANKER"
        ], 
        "category": "Re-fueling Capability"
    }, 
    {
        "digits": "06", 
        "label": "Boom and Drogue", 
        "id": "BOOM_DROGUE_MOD", 
        "graphic": "01062.svg", 
        "limitUseTo": [
            "TANKER"
        ], 
        "category": "Re-fueling Capability"
    }, 
    {
        "digits": "07", 
        "label": "Close Range", 
        "id": "CLOSE_MOD", 
        "graphic": "01072.svg", 
        "category": "Range"
    }, 
    {
        "digits": "08", 
        "label": "Short Range", 
        "id": "SHORT_MOD", 
        "graphic": "01082.svg", 
        "category": "Range"
    }, 
    {
        "digits": "09", 
        "label": "Medium Range", 
        "id": "MEDIUM_MOD", 
        "graphic": "01092.svg", 
        "category": "Range"
    }, 
    {
        "digits": "10", 
        "label": "Long Range", 
        "id": "LONG_MOD", 
        "graphic": "01102.svg", 
        "category": "Range"
    }, 
    {
        "digits": "11", 
        "label": "Downlinked", 
        "id": "DOWNLINK_MOD", 
        "graphic": "01112.svg", 
        "category": "Track Link Availability"
    }
];

export const graphicFolder = {
    "entities": "Appendices/Air", 
    "modifierTwos": "Appendices/Air/mod2", 
    "modifierOnes": "Appendices/Air/mod1"
};

