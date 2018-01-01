/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "15";
export const label = "Land Equipment";
export const id = "SS_LAND_EQUIPMENT";
export const dimensionId = "LAND_EQUIPMENT";
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
        "label": "Weapon/Weapon System", 
        "id": "WEAPON_SYSTEM", 
        "graphic": "15110000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Rifle", 
                "id": "RIFLE", 
                "graphic": "15110100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Single Shot Rifle", 
                        "id": "SINGLE_SHOT_RIFLE", 
                        "graphic": "15110101.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Semiautomatic Rifle", 
                        "id": "SEMIAUTOMATIC_RIFLE", 
                        "graphic": "15110102.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Automatic Rifle", 
                        "id": "AUTOMATIC_RIFLE", 
                        "graphic": "15110103.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Machine Gun", 
                "id": "MACHINE_GUN", 
                "graphic": "15110200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "MG_LIGHT", 
                        "graphic": "15110201.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "MG_MEDIUM", 
                        "graphic": "15110202.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "MG_HEAVY", 
                        "graphic": "15110203.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Grenade Launcher", 
                "id": "GRENADE_LAUNCHER", 
                "graphic": "15110300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "GRENADE_LAUNCHER_LIGHT", 
                        "graphic": "15110301.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "GRENADE_LAUNCHER_MEDIUM", 
                        "graphic": "15110302.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "GRENADE_LAUNCHER_HEAVY", 
                        "graphic": "15110303.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Flame Thrower", 
                "id": "FLAME_THROWER", 
                "graphic": "15110400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Air Defense Gun", 
                "id": "AIR_DEFENSE_GUN", 
                "graphic": "15110500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "AIR_DEFENSE_GUN_LIGHT", 
                        "graphic": "15110501.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "AIR_DEFENSE_GUN_MEDIUM", 
                        "graphic": "15110502.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "AIR_DEFENSE_GUN_HEAVY", 
                        "graphic": "15110503.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Antitank Gun", 
                "id": "ANTITANK_GUN", 
                "graphic": "15110600.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "ANTITANK_GUN_LIGHT", 
                        "graphic": "15110601.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "ANTITANK_GUN_MEDIUM", 
                        "graphic": "15110602.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "ANTITANK_GUN_HEAVY", 
                        "graphic": "15110603.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "07", 
                "label": "Direct Fire Gun", 
                "id": "DIRECT_FIRE_GUN", 
                "graphic": "15110700.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "DIRECT_FIRE_GUN_LIGHT", 
                        "graphic": "15110701.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "DIRECT_FIRE_GUN_MEDIUM", 
                        "graphic": "15110702.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "DIRECT_FIRE_GUN_HEAVY", 
                        "graphic": "15110703.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "08", 
                "label": "Recoilless Gun", 
                "id": "RECOILLESS_GUN", 
                "graphic": "15110800.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "RECOILLESS_GUN_LIGHT", 
                        "graphic": "15110801.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "RECOILLESS_GUN_MEDIUM", 
                        "graphic": "15110802.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "RECOILLESS_GUN_HEAVY", 
                        "graphic": "15110803.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "09", 
                "label": "Howitzer", 
                "id": "HOWITZER", 
                "graphic": "15110900.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "HOWITZER_LIGHT", 
                        "graphic": "15110901.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "HOWITZER_MEDIUM", 
                        "graphic": "15110902.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "HOWITZER_HEAVY", 
                        "graphic": "15110903.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "10", 
                "label": "Missile Launcher", 
                "id": "MISSILE_LAUNCHER", 
                "graphic": "15111000.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "MISSILE_LAUNCHER_LIGHT", 
                        "graphic": "15111001.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "MISSILE_LAUNCHER_MEDIUM", 
                        "graphic": "15111002.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "MISSILE_LAUNCHER_HEAVY", 
                        "graphic": "15111003.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "11", 
                "label": "Air Defense Missile Launcher", 
                "id": "AIR_DEFENSE_MISSILE_LAUNCHER", 
                "graphic": "15111100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "AIR_DEFENSE_MISSILE_LIGHT", 
                        "graphic": "15111101.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Light Transporter-Launcher and Radar (TLAR)", 
                        "id": "AIR_DEFENSE_MISSILE_LIGHT_TLAR", 
                        "graphic": "15111102.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Light Tactical Landing Approach Radar (TELAR)", 
                        "id": "AIR_DEFENSE_MISSILE_LIGHT_TELAR", 
                        "graphic": "15111103.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Medium", 
                        "id": "AIR_DEFENSE_MISSILE_MEDIUM", 
                        "graphic": "15111104.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Medium TLAR", 
                        "id": "AIR_DEFENSE_MISSILE_MEDIUM_TLAR", 
                        "graphic": "15111105.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Medium TELAR Air Defense Missile Launcher", 
                        "id": "AIR_DEFENSE_MISSILE_MEDIUM_TELAR", 
                        "graphic": "15111106.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Heavy", 
                        "id": "AIR_DEFENSE_MISSILE_HEAVY", 
                        "graphic": "15111107.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Heavy TLAR", 
                        "id": "AIR_DEFENSE_MISSILE_HEAVY_TLAR", 
                        "graphic": "15111108.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Heavy TELAR", 
                        "id": "AIR_DEFENSE_MISSILE_HEAVY_TELAR", 
                        "graphic": "15111109.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "12", 
                "label": "Antitank Missile Launcher", 
                "id": "ANTITANK_MISSILE_LAUNCHER", 
                "graphic": "15111200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "ANTITANK_MISSILE_LAUNCHER_LIGHT", 
                        "graphic": "15111201.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "ANTITANK_MISSILE_LAUNCHER_MEDIUM", 
                        "graphic": "15111202.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "ANTITANK_MISSILE_LAUNCHER_HEAVY", 
                        "graphic": "15111203.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "13", 
                "label": "Surface-to-Surface Missile Launcher", 
                "id": "SURFACE_TO_SURFACE_MISSILE_LAUNCHER", 
                "graphic": "15111300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "SURFACE_TO_SURFACE_MISSILE_LIGHT", 
                        "graphic": "15111301.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "SURFACE_TO_SURFACE_MISSILE_MEDIUM", 
                        "graphic": "15111302.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "SURFACE_TO_SURFACE_MISSILE_HEAVY", 
                        "graphic": "15111303.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "14", 
                "label": "Mortar", 
                "id": "MORTAR", 
                "graphic": "15111400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "MORTAR_LIGHT", 
                        "graphic": "15111401.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "MORTAR_MEDIUM", 
                        "graphic": "15111402.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "MORTAR_HEAVY", 
                        "graphic": "15111403.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "15", 
                "label": "Single Rocket Launcher", 
                "id": "SINGLE_ROCKET_LAUNCHER", 
                "graphic": "15111500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "SINGLE_ROCKET_LIGHT", 
                        "graphic": "15111501.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "SINGLE_ROCKET_MEDIUM", 
                        "graphic": "15111502.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "SINGLE_ROCKET_HEAVY", 
                        "graphic": "15111503.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "16", 
                "label": "Multiple Rocket Launcher", 
                "id": "MULTIPLE_ROCKET_LAUNCHER", 
                "graphic": "15111600.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "MULTIPLE_ROCKET_LIGHT", 
                        "graphic": "15111601.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "MULTIPLE_ROCKET_MEDIUM", 
                        "graphic": "15111602.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "MULTIPLE_ROCKET_HEAVY", 
                        "graphic": "15111603.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "17", 
                "label": "Antitank Rocket Launcher", 
                "id": "ANTITANK_ROCKET_LAUNCHER", 
                "graphic": "15111700.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "ANTITANK_ROCKET_LIGHT", 
                        "graphic": "15111701.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "ANTITANK_ROCKET_MEDIUM", 
                        "graphic": "15111702.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "ANTITANK_ROCKET_HEAVY", 
                        "graphic": "15111703.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "18", 
                "label": "Nonlethal Weapon", 
                "id": "NONLETHAL_WEAPON", 
                "graphic": "15111800.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "19", 
                "label": "Taser", 
                "id": "TASER", 
                "graphic": "15111900.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "20", 
                "label": "Water Cannon", 
                "id": "WATER_CANNON", 
                "graphic": "15112000.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "12", 
        "label": "Vehicle", 
        "id": "VEHICLE", 
        "graphic": "15120000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Armored Vehicle", 
                "id": "VEHICLE_ARMORED", 
                "graphic": "15120100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Armored Fighting Vehicle", 
                        "id": "ARMORED_FIGHTING_VEHICLE", 
                        "graphic": "15120101.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Armored Fighting Vehicle Command and Control", 
                        "id": "ARMORED_FIGHTING_VEHICLE_C2", 
                        "graphic": "15120102.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Armored Personnel Carrier", 
                        "id": "ARMORED_PERSONNEL_CARRIER", 
                        "graphic": "15120103.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Armored Personnel Carrier Ambulance", 
                        "id": "ARMORED_PERSONNEL_CARRIER_AMBULANCE", 
                        "graphic": "15120104.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Armored Protected Vehicle", 
                        "id": "ARMORED_PROTECTED_VEHICLE", 
                        "graphic": "15120105.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Armored Protected Vehicle Recovery", 
                        "id": "ARMORED_PROTECTED_VEHICLE_RECOVERY", 
                        "graphic": "15120106.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Armored Protected Vehicle Medical Evacuation", 
                        "id": "ARMORED_PROTECTED_VEHICLE_MEDICAL", 
                        "graphic": "15120107.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Armored Personnel Carrier-Recovery", 
                        "id": "ARMORED_PERSONNEL_CARRIER_RECOVERY", 
                        "graphic": "15120108.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Combat Service Support Vehicle", 
                        "id": "COMBAT_SERVICE_SUPPORT_VEHICLE", 
                        "graphic": "15120109.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Light Wheeled Armored Vehicle", 
                        "id": "LIGHT_WHEELED_ARMORED_VEHICLE", 
                        "graphic": "15120110.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Tank", 
                "id": "TANK", 
                "graphic": "15120200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "TANK_LIGHT", 
                        "graphic": "15120201.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "TANK_MEDIUM", 
                        "graphic": "15120202.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "TANK_HEAVY", 
                        "graphic": "15120203.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Tank Recovery Vehicle", 
                "id": "TANK_RECOVERY_VEHICLE", 
                "graphic": "15120300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "TANK_RECOVERY_LIGHT", 
                        "graphic": "15120301.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "TANK_RECOVERY_MEDIUM", 
                        "graphic": "15120302.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "TANK_RECOVERY_HEAVY", 
                        "graphic": "15120303.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "13", 
        "label": "Engineer Vehicles and Equipment", 
        "id": "ENGINEER_VEHICLES_EQUIPMENT", 
        "graphic": "15130000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Bridge", 
                "id": "BRIDGE", 
                "graphic": "15130100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Bridge Mounted on Utility Vehicle", 
                "id": "BRIDGE_MOUNTED_UTILITY_VEHICLE", 
                "graphic": "15130200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Fixed Bridge", 
                "id": "FIXED_BRIDGE", 
                "graphic": "15130300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Floating Bridge", 
                "id": "FLOATING_BRIDGE", 
                "graphic": "15130400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Folding Girder Bridge", 
                "id": "FOLDING_GIRDER_BRIDGE", 
                "graphic": "15130500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Hollow Deck Bridge", 
                "id": "HOLLOW_DECK_BRIDGE", 
                "graphic": "15130600.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Drill", 
                "id": "DRILL", 
                "graphic": "15130700.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Drill Mounted on Utility Vehicle", 
                        "id": "DRILL_MOUNTED_ON_UTILITY_VEHICLE", 
                        "graphic": "15130701.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "08", 
                "label": "Earthmover", 
                "id": "EARTHMOVER", 
                "graphic": "15130800.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Multifunctional Earthmover/Digger", 
                        "id": "EARTHMOVER_DIGGER", 
                        "graphic": "15130801.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "09", 
                "label": "Mine Clearing Equipment", 
                "id": "MINE_CLEARING_EQUIPMENT", 
                "graphic": "15130900.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Trailer Mounted", 
                        "id": "MINE_CLEARING_EQUIPMENT_TRAILER", 
                        "graphic": "15130901.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Mine Clearing Equipment on Tank Chassis", 
                        "id": "MINE_CLEARING_EQUIPMENT_TANK_CHASSIS", 
                        "graphic": "15130902.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "10", 
                "label": "Mine Laying Equipment", 
                "id": "MINE_LAYING_EQUIPMENT", 
                "graphic": "15131000.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Mine Laying Equipment on Utility Vehicle", 
                        "id": "MINE_LAYING_EQUIPMENT_UTILITY_VEHICLE", 
                        "graphic": "15131001.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Armored Carrier with Volcano", 
                        "id": "ARMORED_CARRIER_VOLCANO", 
                        "graphic": "15131002.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Truck Mounted with Volcano", 
                        "id": "TRUCK_VOLCANO", 
                        "graphic": "15131003.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "11", 
                "label": "Dozer", 
                "id": "DOZER", 
                "graphic": "15131100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Dozer-Armored", 
                        "id": "DOZER_ARMORED", 
                        "graphic": "15131101.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "12", 
                "label": "Armored Assault", 
                "id": "ARMORED_ASSAULT", 
                "graphic": "15131200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Armored Engineer Recon Vehicle (AERV)", 
                "id": "ARMORED_ENGINEER_RECON_VEHICLE_AERV", 
                "graphic": "15131300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Backhoe", 
                "id": "BACKHOE", 
                "graphic": "15131400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Construction Vehicle", 
                "id": "CONSTRUCTION_VEHICLE", 
                "graphic": "15131500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Ferry Transporter", 
                "id": "FERRY_TRANSPORTER", 
                "graphic": "15131600.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "14", 
        "label": "Utility Vehicles", 
        "id": "UTILITY_VEHICLES", 
        "remarks": "No icon is associated with this entity. It is for hierachal purposes only.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Utility Vehicle", 
                "id": "UTILITY_VEHICLE", 
                "graphic": "15140100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Medical", 
                "id": "UTILITY_VEHICLE_MEDICAL", 
                "graphic": "15140200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Medical Evacuation", 
                "id": "UTILITY_VEHICLE_MEDEVAC", 
                "graphic": "15140300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Mobile Emergency Physician", 
                "id": "UTILITY_VEHICLE_MOBILE_EMERGENCY_PHYSICIAN", 
                "graphic": "15140400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Bus", 
                "id": "BUS", 
                "graphic": "15140500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Semi-Trailer and Truck", 
                "id": "SEMI_TRAILER_AND_TRUCK", 
                "graphic": "15140600.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "SEMI_LIGHT", 
                        "graphic": "15140601.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "SEMI_MEDIUM", 
                        "graphic": "15140602.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "SEMI_HEAVY", 
                        "graphic": "15140603.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "07", 
                "label": "Limited Cross Country Truck", 
                "id": "LIMITED_CROSS_COUNTRY_TRUCK", 
                "graphic": "15140700.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Cross Country Truck", 
                "id": "CROSS_COUNTRY_TRUCK", 
                "graphic": "15140800.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Petroleum-Oil and Lubricant", 
                "id": "POL_VEHICLE", 
                "graphic": "15140900.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Water", 
                "id": "WATER_VEHICLE", 
                "graphic": "15141000.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Amphibious Utility Wheeled Vehicle", 
                "id": "AMPHIBIOUS_UTILITY_WHEELED_VEHICLE", 
                "graphic": "15141100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Tow Truck", 
                "id": "TOW_TRUCK", 
                "graphic": "15141200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "TOW_TRUCK_LIGHT", 
                        "graphic": "15141201.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Heavy", 
                        "id": "TOW_TRUCK_HEAVY", 
                        "graphic": "15141202.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "15", 
        "label": "Train", 
        "id": "TRAIN", 
        "remarks": "No icon is associated with this entity. It is for hierachal purposes only.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Locomotive", 
                "id": "LOCOMOTIVE", 
                "graphic": "15150100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Railcar", 
                "id": "RAILCAR", 
                "graphic": "15150200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "16", 
        "label": "Civilian Vehicle", 
        "id": "CIVILIAN_VEHICLE", 
        "remarks": "No icon is associated with this entity. It is for hierachal purposes only.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Automobile", 
                "id": "AUTOMOBILE", 
                "graphic": "15160100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Compact", 
                        "id": "COMPACT_AUTO", 
                        "graphic": "15160101.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Midsize", 
                        "id": "MIDSIZE_AUTO", 
                        "graphic": "15160102.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Sedan", 
                        "id": "SEDAN_AUTO", 
                        "graphic": "15160103.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Open-Bed Truck", 
                "id": "OPEN_BED_TRUCK", 
                "graphic": "15160200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Pickup", 
                        "id": "PICKUP_TRUCK", 
                        "graphic": "15160201.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Small", 
                        "id": "SMALL_PICKUP_TRUCK", 
                        "graphic": "15160202.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Large", 
                        "id": "LARGE_PICKUP_TRUCK", 
                        "graphic": "15160203.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Multiple Passenger Vehicle", 
                "id": "MULTIPLE_PASSENGER_VEHICLE", 
                "graphic": "15160300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Van", 
                        "id": "VAN", 
                        "graphic": "15160301.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Small Bus", 
                        "id": "SMALL_BUS", 
                        "graphic": "15160302.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Large Bus", 
                        "id": "LARGE_BUS", 
                        "graphic": "15160303.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Utility Vehicle", 
                "id": "AUTO_UTILITY_VEHICLE", 
                "graphic": "15160400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Sport Utility Vehicle (SUV)", 
                        "id": "SPORT_UTILITY_VEHICLE_SUV", 
                        "graphic": "15160401.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Small Box Truck", 
                        "id": "SMALL_BOX_TRUCK", 
                        "graphic": "15160402.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Large Box Truck", 
                        "id": "LARGE_BOX_TRUCK", 
                        "graphic": "15160403.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "05", 
                "label": "Jeep Type Vehicle", 
                "id": "JEEP_TYPE_VEHICLE", 
                "graphic": "15160500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Small/Light", 
                        "id": "JEEP_LIGHT", 
                        "graphic": "15160501.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "JEEP_MEDIUM", 
                        "graphic": "15160502.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Large/Heavy", 
                        "id": "JEEP_HEAVY", 
                        "graphic": "15160503.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Tractor Trailer Truck with Box", 
                "id": "TRACTOR_TRAILER_BOX", 
                "graphic": "15160600.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Small/Light", 
                        "id": "TRACTOR_TRAILER_BOX_LIGHT", 
                        "graphic": "15160601.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "TRACTOR_TRAILER_BOX_MEDIUM", 
                        "graphic": "15160602.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Large/Heavy", 
                        "id": "TRACTOR_TRAILER_BOX_HEAVY", 
                        "graphic": "15160603.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "07", 
                "label": "Tractor Trailer Truck with Flatbed Trailer", 
                "id": "TRACTOR_TRAILER_FLATBED", 
                "graphic": "15160700.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Small/Light", 
                        "id": "TRACTOR_TRAILER_BED_LIGHT", 
                        "graphic": "15160701.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medium", 
                        "id": "TRACTOR_TRAILER_BED_MEDIUM", 
                        "graphic": "15160702.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Large/Heavy", 
                        "id": "TRACTOR_TRAILER_BED_HEAVY", 
                        "graphic": "15160703.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "08", 
                "label": "Known Insurgent Vehicle", 
                "id": "KNOWN_INSURGENT_VEHICLE", 
                "graphic": "15160800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Drug Vehicle", 
                "id": "DRUG_VEHICLE", 
                "graphic": "15160900.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "17", 
        "label": "Law Enforcement", 
        "id": "LAW_ENFORCEMENT", 
        "graphic": "15170000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Bureau of Alcohol-Tobacco-Firearms and Explosives (ATF) (Department of Justice)", 
                "id": "BUREAU_ALCOHOL_TOBACCO_FIREARMS_EXPLOSIVES_ATF", 
                "graphic": "15170100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Border Patrol", 
                "id": "BORDER_PATROL", 
                "graphic": "15170200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Customs Service", 
                "id": "CUSTOMS_SERVICE", 
                "graphic": "15170300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Drug Enforcement Administration (DEA)", 
                "id": "DRUG_ENFORCEMENT_ADMINISTRATION_DEA", 
                "graphic": "15170400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Department of Justice (DOJ)", 
                "id": "DEPARTMENT_OF_JUSTICE_DOJ", 
                "graphic": "15170500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Federal Bureau of Investigation (FBI)", 
                "id": "FEDERAL_BUREAU_INVESTIGATION_FBI", 
                "graphic": "15170600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Police", 
                "id": "POLICE", 
                "graphic": "15170700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "United States Secret Service (USSS)", 
                "id": "UNITED_STATES_SECRET_SERVICE_USSS", 
                "graphic": "15170800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Transportation Security Administration (TSA)", 
                "id": "TRANSPORTATION_SECURITY_ADMINISTRATION_TSA", 
                "graphic": "15170900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Coast Guard", 
                "id": "COAST_GUARD", 
                "graphic": "15171000.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "US Marshals Service", 
                "id": "US_MARSHALS_SERVICE", 
                "graphic": "15171100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "18", 
        "label": "Pack Animals", 
        "id": "PACK_ANIMALS", 
        "graphic": "15180000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }, 
    {
        "digits": "19", 
        "label": "Missile Support", 
        "id": "MISSILE_SUPPORT", 
        "graphic": "15190000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Transloader", 
                "id": "MISSILE_TRANSLOADER", 
                "graphic": "15190100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Transporter", 
                "id": "MISSILE_TRANSPORTER", 
                "graphic": "15190200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Crane/Loading Device", 
                "id": "MISSILE_CRANE_LOADING_DEVICE", 
                "graphic": "15190300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Propellant Transporter", 
                "id": "MISSILE_PROPELLANT_TRANSPORTER", 
                "graphic": "15190400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Warhead Transporter", 
                "id": "MISSILE_WARHEAD_TRANSPORTER", 
                "graphic": "15190500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "20", 
        "label": "Other Equipment", 
        "id": "OTHER_EQUIPMENT", 
        "remarks": "No icon is associated with this entity. It is for hierachal purposes only.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Antennae", 
                "id": "ANTENNAE", 
                "graphic": "15200100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Bomb", 
                "id": "BOMB", 
                "graphic": "15200200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Booby Trap", 
                "id": "BOOBY_TRAP", 
                "graphic": "15200300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "CBRN Equipment", 
                "id": "CBRN_EQUIPMENT", 
                "graphic": "15200400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Computer System", 
                "id": "COMPUTER_SYSTEM", 
                "graphic": "15200500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Command Launch Equipment (CLE)", 
                "id": "COMMAND_LAUNCH_EQUIPMENT_CLE", 
                "graphic": "15200600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Generator Set", 
                "id": "GENERATOR_SET", 
                "graphic": "15200700.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Ground-based Midcourse Defense (GMD) Fire Control (GFC) Center", 
                "id": "GMD_GFC_CENTER", 
                "graphic": "15200800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "In-Flight Interceptor Communications System (IFICS) Data Terminal (IDT)", 
                "id": "IFICS_IDT", 
                "graphic": "15200900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Laser", 
                "id": "LASER", 
                "graphic": "15201000.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Military Information Support Operations (MISO)", 
                "id": "MILITARY_INFORMATION_SUPPORT_OPERATIONS_MISO", 
                "graphic": "15201100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Sustainment Shipments", 
                "id": "SUSTAINMENT_SHIPMENTS", 
                "graphic": "15201200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Tent", 
                "id": "TENT", 
                "graphic": "15201300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Unit Deployment Shipments", 
                "id": "UNIT_DEPLOYMENT_SHIPMENTS", 
                "graphic": "15201400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Emergency Medical Operation", 
                "id": "EMERGENCY_MEDICAL_OPERATION", 
                "graphic": "15201500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Medical Evacuation Helicopter", 
                        "id": "MEDICAL_EVACUATION_HELICOPTER", 
                        "graphic": "15201501.svg", 
                        "icon": "MAIN_1"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "21", 
        "label": "Land Mines", 
        "id": "LAND_MINES", 
        "remarks": "No icon is associated with this entity. It is for hierachal purposes only.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Land Mine", 
                "id": "LAND_MINE", 
                "graphic": "15210100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Antipersonnel Land Mine (APL)", 
                "id": "ANTIPERSONNEL_LAND_MINE_APL", 
                "graphic": "15210200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Antitank Mine", 
                "id": "ANTITANK_MINE", 
                "graphic": "15210300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Improvised Explosives Device (IED)", 
                "id": "IMPROVISED_EXPLOSIVES_DEVICE_IED", 
                "graphic": "15210400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Less than lethal", 
                "id": "LESS_THAN_LETHAL", 
                "graphic": "15210500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "22", 
        "label": "Sensors", 
        "id": "SENSORS", 
        "remarks": "No icon is associated with this entity. It is for hierachal purposes only.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Sensor", 
                "id": "SENSOR", 
                "graphic": "15220100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Sensor Emplaced", 
                "id": "SENSOR_EMPLACED", 
                "graphic": "15220200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Radar", 
                "id": "RADAR", 
                "graphic": "15220300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "23", 
        "label": "Emergency Operation", 
        "id": "EMERGENCY_OPERATION", 
        "graphic": "15230000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Ambulance", 
                "id": "AMBULANCE", 
                "graphic": "15230100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Fire Fighting/Fire Protection", 
                "id": "FIRE_FIGHTING_FIRE_PROTECTION", 
                "graphic": "15230200.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "24", 
        "label": "Manual Track", 
        "id": "MANUAL_TRACK", 
        "graphic": "15240000.svg", 
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
        "label": "Biological", 
        "id": "BIOLOGICAL_MOD", 
        "graphic": "15011.svg", 
        "category": "Sensor Type"
    }, 
    {
        "digits": "02", 
        "label": "Chemical", 
        "id": "CHEMICAL_MOD", 
        "graphic": "15021.svg", 
        "category": "Sensor Type"
    }, 
    {
        "digits": "03", 
        "label": "Early Warning Radar", 
        "id": "EARLY_WARNING_RADAR_MOD", 
        "graphic": "15031.svg", 
        "category": "Sensor Type"
    }, 
    {
        "digits": "04", 
        "label": "Intrusion", 
        "id": "INTRUSION_MOD", 
        "graphic": "15041.svg", 
        "category": "Sensor Type"
    }, 
    {
        "digits": "05", 
        "label": "Nuclear", 
        "id": "NUCLEAR_MOD", 
        "graphic": "15051.svg", 
        "category": "Sensor Type"
    }, 
    {
        "digits": "06", 
        "label": "Radiological", 
        "id": "RADIOLOGICAL_MOD", 
        "graphic": "15061.svg", 
        "category": "Sensor Type"
    }, 
    {
        "digits": "07", 
        "label": "Upgraded Early Warning Radar", 
        "id": "UPGRADED_EARLY_WARNING_RADAR_MOD", 
        "graphic": "15071.svg", 
        "category": "Sensor Type"
    }, 
    {
        "digits": "08", 
        "label": "Hijacking", 
        "id": "HIJACKING_MOD", 
        "graphic": "15081.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "09", 
        "label": "Civilian", 
        "id": "CIVILIAN_MOD", 
        "graphic": "15091.svg", 
        "category": "Organization"
    }
];

export const sectorTwoModifiers = <Modifier[]>[];

export const graphicFolder = {
    "entities": "Appendices/Land", 
    "modifierTwos": "Appendices/Land/mod2", 
    "modifierOnes": "Appendices/Land/mod1"
};

