/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "30";
export const label = "Sea Surface";
export const id = "SS_SEA_SURFACE";
export const dimensionId = "SEA_SURFACE";
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
        "graphic": "30110000.svg", 
        "entityTypes": []
    }, 
    {
        "digits": "12", 
        "label": "Military Combatant", 
        "id": "MILITARY_COMBAT", 
        "graphic": "30120000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Carrier", 
                "id": "CARRIER", 
                "graphic": "30120100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Surface Combatant, Line", 
                "id": "SURF_COMBAT_LINE", 
                "graphic": "30120200.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Battleship", 
                        "id": "BB", 
                        "graphic": "30120201.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Cruiser", 
                        "id": "CA", 
                        "graphic": "30120202.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Destroyer", 
                        "id": "DD", 
                        "graphic": "30120203.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Frigate", 
                        "id": "FF", 
                        "graphic": "30120204.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Corvette", 
                        "id": "CORVETTE", 
                        "graphic": "30120205.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Littoral Combatant Ship", 
                        "id": "LCS", 
                        "graphic": "30120206.svg"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Amphibious Warfare Ship", 
                "id": "AMPHIB_WAR_SHIP", 
                "graphic": "30120300.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Amphibious Command Ship", 
                        "id": "ACS", 
                        "graphic": "30120301.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Amphibious Assault, Non-specified", 
                        "id": "AMPHIB_ASSAULT_NON", 
                        "graphic": "30120302.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Amphibious Assault Ship, General", 
                        "id": "AMPHIB_ASSAULT_GENERAL", 
                        "graphic": "30120303.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Amphibious Assault Ship, Multipurpose", 
                        "id": "AMPHIB_ASSAULT_MULT", 
                        "graphic": "30120304.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Amphibious Assault Ship, Helicopter", 
                        "id": "AMPHIB_ASSAULT_HELO", 
                        "graphic": "30120305.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Amphibious Transport Dock", 
                        "id": "AMPHIB_TRANS_DOCK", 
                        "graphic": "30120306.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Landing Ship", 
                        "id": "LANDING_SHIP", 
                        "graphic": "30120307.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Landing Craft", 
                        "id": "LANDING_CRAFT", 
                        "graphic": "30120308.svg"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Mine Warfare Ship", 
                "id": "MINE_WARFARE", 
                "graphic": "30120400.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Mine Layer", 
                        "id": "MINE_LAYER", 
                        "graphic": "30120401.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Mine Sweeper", 
                        "id": "MINE_SWEEPER", 
                        "graphic": "30120402.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Mine Sweeper, Drone", 
                        "id": "MINE_SWEEPER_DRONE", 
                        "graphic": "30120403.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Mine Hunter", 
                        "id": "MINE_HUNTER", 
                        "graphic": "30120404.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Mine Countermeasures", 
                        "id": "MINE_COUNTER", 
                        "graphic": "30120405.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Mine Countermeasures, Support Ship", 
                        "id": "MINE_COUNTER_SUPPORT", 
                        "graphic": "30120406.svg"
                    }
                ]
            }, 
            {
                "digits": "05", 
                "label": "Patrol Boat", 
                "id": "PATROL_BOAT", 
                "graphic": "30120500.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Patrol Craft, Submarine Chaser/Escort, General", 
                        "id": "PATROL_CHASER", 
                        "graphic": "30120501.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Patrol Ship, General", 
                        "id": "PATROL_SHIP", 
                        "graphic": "30120502.svg"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Decoy", 
                "id": "DECOY", 
                "graphic": "30120600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Unmanned Surface Water Vehicle (USV)", 
                "id": "USV", 
                "graphic": "30120700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Speedboat", 
                "id": "SPEEDBOAT", 
                "graphic": "30120800.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Rigid-Hull Inflatable Boat (RHIB)", 
                        "id": "RHIB", 
                        "graphic": "30120801.svg"
                    }
                ]
            }, 
            {
                "digits": "09", 
                "label": "Jet Ski", 
                "id": "JET_SKI", 
                "graphic": "30120900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Navy Task Organization", 
                "id": "NAVY_TASK", 
                "graphic": "30121000.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Navy Task Element", 
                        "id": "NAVY_TASK_ELEMENT", 
                        "graphic": "30121001.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Navy Task Force", 
                        "id": "NAVY_TASK_FORCE", 
                        "graphic": "30121002.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Navy Task Group", 
                        "id": "NAVY_TASK_GROUP", 
                        "graphic": "30121003.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Navy Task Unit", 
                        "id": "NAVY_TASK_UNIT", 
                        "graphic": "30121004.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Convoy", 
                        "id": "CONVOY", 
                        "graphic": "30121005.svg"
                    }
                ]
            }, 
            {
                "digits": "11", 
                "label": "Sea-Based X-Band (SBX) Radar", 
                "id": "SEA_BASED_X", 
                "graphic": "30121100.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "13", 
        "label": "Military Noncombatant", 
        "id": "MILITARY_NON_COMBAT", 
        "graphic": "30130000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Auxiliary Ship", 
                "id": "AUX", 
                "graphic": "30130100.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Ammunition Ship", 
                        "id": "AMMO_SHIP", 
                        "graphic": "30130101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Naval Stores Ship", 
                        "id": "NAVAL_STORES", 
                        "graphic": "30130102.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Auxiliary Flag Ship", 
                        "id": "AUX_FLAG", 
                        "graphic": "30130103.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Intelligence Collector", 
                        "id": "INTEL_COLLECTOR", 
                        "graphic": "30130104.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Oceanographic Research Ship", 
                        "id": "OCEANO_RESEARCH", 
                        "graphic": "30130105.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Survey Ship", 
                        "id": "SURVEY", 
                        "graphic": "30130106.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Hospital Ship", 
                        "id": "HOSPITAL", 
                        "graphic": "30130107.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Naval Cargo Ship", 
                        "id": "NAVAL_CARGO", 
                        "graphic": "30130108.svg"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Combat Support Ship, Fast", 
                        "id": "COMBAT_SUPPORT_FAST", 
                        "graphic": "30130109.svg"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Oiler, Replenishment", 
                        "id": "OILER", 
                        "graphic": "30130110.svg"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Repair Ship", 
                        "id": "REPAIR", 
                        "graphic": "30130111.svg"
                    }, 
                    {
                        "digits": "12", 
                        "label": "Submarine Tender", 
                        "id": "SUB_TENDER", 
                        "graphic": "30130112.svg"
                    }, 
                    {
                        "digits": "13", 
                        "label": "Tug, Ocean Going", 
                        "id": "TUG", 
                        "graphic": "30130113.svg"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Service Craft/Yard", 
                "id": "SERVICE_CRAFT", 
                "graphic": "30130200.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Barge, Not Self-Propelled", 
                        "id": "BARGE_NON_SELF", 
                        "graphic": "30130201.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Barge, Self-Propelled", 
                        "id": "BARGE_SELF", 
                        "graphic": "30130202.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Tug, Harbor", 
                        "id": "TUG_HARBOR", 
                        "graphic": "30130203.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Launch", 
                        "id": "LAUNCH", 
                        "graphic": "30130204.svg"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "14", 
        "label": "Civilian", 
        "id": "CIVILIAN", 
        "graphic": "30140000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Merchant Ship", 
                "id": "CIV_MERCHANT", 
                "graphic": "30140100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Cargo, General", 
                        "id": "CIV_CARGO", 
                        "graphic": "30140101.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Container Ship", 
                        "id": "CIV_CONTAINER", 
                        "graphic": "30140102.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Dredge", 
                        "id": "CIV_DREDGE", 
                        "graphic": "30140103.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Roll On/Roll Off", 
                        "id": "CIV_RORO", 
                        "graphic": "30140104.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Ferry", 
                        "id": "CIV_FERRY", 
                        "graphic": "30140105.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Heavy Lift", 
                        "id": "CIV_HEAVY_LIFT", 
                        "graphic": "30140106.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Hovercraft", 
                        "id": "CIV_HOVERCRAFT", 
                        "graphic": "30140107.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Lash Carrier (with Barges)", 
                        "id": "CIV_LASH_CARRIER", 
                        "graphic": "30140108.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Oiler/Tanker", 
                        "id": "CIV_OILER_TANKER", 
                        "graphic": "30140109.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Passenger", 
                        "id": "CIV_PASSENGER", 
                        "graphic": "30140110.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Tug, Ocean Going", 
                        "id": "CIV_TUG", 
                        "graphic": "30140111.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "12", 
                        "label": "Tow", 
                        "id": "CIV_TOW", 
                        "graphic": "30140112.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "13", 
                        "label": "Transport Ship, Hazardous Material", 
                        "id": "CIV_HAZMAT", 
                        "graphic": "30140113.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "14", 
                        "label": "Junk/Dhow", 
                        "id": "CIV_JUNK", 
                        "graphic": "30140114.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "15", 
                        "label": "Barge, Not Self-Propelled", 
                        "id": "CIV_BARGE", 
                        "graphic": "30140115.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "16", 
                        "label": "Hospital Ship", 
                        "id": "CIV_HOSPITAL", 
                        "graphic": "30140116.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Fishing Vessel", 
                "id": "CIV_FISHING", 
                "graphic": "30140200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Drifter", 
                        "id": "CIV_DRIFTER", 
                        "graphic": "30140201.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Trawler", 
                        "id": "CIV_TRAWLER", 
                        "graphic": "30140202.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Dredger", 
                        "id": "CIV_DREDGER", 
                        "graphic": "30140203.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Law Enforcement Vessel", 
                "id": "CIV_LAW", 
                "graphic": "30140300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Leisure Craft, Sailing", 
                "id": "CIV_LEISURE_SAIL", 
                "graphic": "30140400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Leisure Craft, Motorized", 
                "id": "CIV_LEISURE_MOTOR", 
                "graphic": "30140500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Rigid-Hull Inflatable Boat (RHIB)", 
                        "id": "CIV_RHIB", 
                        "graphic": "30140501.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Speedboat", 
                        "id": "CIV_SPEED", 
                        "graphic": "30140502.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Jet Ski", 
                "id": "CIV_JET_SKI", 
                "graphic": "30140600.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Unmanned Surface Water Vehicle (USV)", 
                "id": "CIV_USV", 
                "graphic": "30140700.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "15", 
        "label": "Own Ship", 
        "id": "OWN_SHIP", 
        "graphic": "30150000.svg", 
        "remarks": "The diameter of the icon shall be 1L. This icon shall be used with a friend standard identity only.", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }, 
    {
        "digits": "16", 
        "label": "Fused Track", 
        "id": "FUSED_TRACK", 
        "graphic": "30160000.svg", 
        "remarks": "All fused tracks shall have a pending standard identity frame.", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }, 
    {
        "digits": "17", 
        "label": "Manual Track", 
        "id": "MANUAL_TRACK", 
        "graphic": "30170000.svg", 
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
        "label": "Own Ship", 
        "id": "OWN_MOD", 
        "graphic": "30011.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "02", 
        "label": "Antiair Warfare", 
        "id": "AA_MOD", 
        "graphic": "30021.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "03", 
        "label": "Antisubmarine Warfare", 
        "id": "ASW_MOD", 
        "graphic": "30031.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "04", 
        "label": "Escort", 
        "id": "ESCORT_MOD", 
        "graphic": "30041.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "05", 
        "label": "Electronic Warfare", 
        "id": "EW_MOD", 
        "graphic": "30051.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "06", 
        "label": "Intelligence, Surveillance, Reconnaissance", 
        "id": "ISR_MOD", 
        "graphic": "30061.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "07", 
        "label": "Mine Countermeasures", 
        "id": "MCM_MOD", 
        "graphic": "30071.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "08", 
        "label": "Missile Defense", 
        "id": "MD_MOD", 
        "graphic": "30081.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "09", 
        "label": "Medical", 
        "id": "MED_MOD", 
        "graphic": "30091.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "10", 
        "label": "Mine Warfare", 
        "id": "MIW_MOD", 
        "graphic": "30101.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "11", 
        "label": "Remote Multi-Mission Vehicle (USV-only)", 
        "id": "RMV_MOD", 
        "graphic": "30111.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "12", 
        "label": "Special Operations Forces (SOF)", 
        "id": "SOF_MOD", 
        "graphic": "30121.svg", 
        "category": "Asset Capability"
    }, 
    {
        "digits": "13", 
        "label": "Surface Warfare", 
        "id": "SUW_MOD", 
        "graphic": "30131.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "14", 
        "label": "Ballistic Missile", 
        "id": "BALLISTIC_MOD", 
        "graphic": "30141.svg", 
        "category": "Weapons Capability"
    }, 
    {
        "digits": "15", 
        "label": "Guided Missile", 
        "id": "GUIDED_MOD", 
        "graphic": "30151.svg", 
        "category": "Weapons Capability"
    }, 
    {
        "digits": "16", 
        "label": "Other Guided Missile", 
        "id": "OTHER_GUIDED_MOD", 
        "graphic": "30161.svg", 
        "category": "Weapons Capability"
    }, 
    {
        "digits": "17", 
        "label": "Torpedo", 
        "id": "TORPEDO_MOD", 
        "graphic": "30171.svg", 
        "category": "Weapons Capability"
    }, 
    {
        "digits": "18", 
        "label": "Drone-Equipped", 
        "id": "DRONE_EQUIP_MOD", 
        "graphic": "30181.svg", 
        "category": "Asset Capability"
    }, 
    {
        "digits": "19", 
        "label": "Helicopter-Equipped/VSTOL", 
        "id": "HELO_EQUIP_MOD", 
        "graphic": "30191.svg", 
        "category": "Asset Capability"
    }, 
    {
        "digits": "20", 
        "label": "Ballistic Missile Defense, Shooter", 
        "id": "BALLISTIC_DEFENSE_MOD", 
        "graphic": "30201.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "21", 
        "label": "Ballistic Missile Defense, Long-Range Surveillance and Track (LRST)", 
        "id": "LRST_MOD", 
        "graphic": "30211.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "22", 
        "label": "Sea-Base X-Band", 
        "id": "SEA_BASED_X_MOD", 
        "graphic": "30221.svg", 
        "category": "Mission Area"
    }, 
    {
        "digits": "23", 
        "label": "Hijacking/Hijacked", 
        "id": "HIJACK_MOD", 
        "graphic": "30231.svg", 
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
        "label": "Nuclear Powered", 
        "id": "NUCLEAR_MOD", 
        "graphic": "30012.svg", 
        "category": "Ship Propulsion"
    }, 
    {
        "digits": "02", 
        "label": "Heavy", 
        "id": "HEAVY_MOD", 
        "graphic": "30022.svg", 
        "category": "Ship Capacity"
    }, 
    {
        "digits": "03", 
        "label": "Light", 
        "id": "LIGHT_MOD", 
        "graphic": "30032.svg", 
        "category": "Ship Capacity"
    }, 
    {
        "digits": "04", 
        "label": "Medium", 
        "id": "MEDIUM_MOD", 
        "graphic": "30042.svg", 
        "category": "Ship Capacity"
    }, 
    {
        "digits": "05", 
        "label": "Dock", 
        "id": "DOCK_MOD", 
        "graphic": "30052.svg", 
        "category": "Cargo Capacity"
    }, 
    {
        "digits": "06", 
        "label": "Logistics", 
        "id": "LOGISTICS_MOD", 
        "graphic": "30062.svg", 
        "category": "Cargo Capacity"
    }, 
    {
        "digits": "07", 
        "label": "Tank", 
        "id": "TANK_MOD", 
        "graphic": "30072.svg", 
        "category": "Cargo Capacity"
    }, 
    {
        "digits": "08", 
        "label": "Vehicle", 
        "id": "VEHICLE_MOD", 
        "graphic": "30082.svg", 
        "category": "Cargo Capacity"
    }, 
    {
        "digits": "09", 
        "label": "Fast", 
        "id": "FAST_MOD", 
        "graphic": "30092.svg", 
        "category": "Ship Mobility"
    }, 
    {
        "digits": "10", 
        "label": "Air-Cushioned (US)", 
        "id": "COMBINE_GEV_MOD", 
        "graphic": "30102.svg", 
        "category": "Ship Mobility"
    }, 
    {
        "digits": "11", 
        "label": "Air-Cushioned (NATO)", 
        "id": "PANEURO_GEV_MOD", 
        "graphic": "30112.svg", 
        "category": "Ship Mobility"
    }, 
    {
        "digits": "12", 
        "label": "Hydrofoil", 
        "id": "HYDROFOIL_MOD", 
        "graphic": "30122.svg", 
        "category": "Ship Mobility"
    }, 
    {
        "digits": "13", 
        "label": "Autonomous Control", 
        "id": "AUTONOMOUS_MOD", 
        "graphic": "30132.svg", 
        "limitUseTo": [
            "CIV_USV"
        ], 
        "category": "USV Control"
    }, 
    {
        "digits": "14", 
        "label": "Remotely Piloted", 
        "id": "RPV_MOD", 
        "graphic": "30142.svg", 
        "limitUseTo": [
            "CIV_USV"
        ], 
        "category": "USV Control"
    }, 
    {
        "digits": "15", 
        "label": "Expendable", 
        "id": "EXPENDABLE_MOD", 
        "graphic": "30152.svg", 
        "limitUseTo": [
            "CIV_USV"
        ], 
        "category": "USV Control"
    }
];

export const graphicFolder = {
    "entities": "Appendices/SeaSurface", 
    "modifierTwos": "Appendices/SeaSurface/mod2", 
    "modifierOnes": "Appendices/SeaSurface/mod1"
};

