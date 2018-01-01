/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "10";
export const label = "Land Units";
export const id = "SS_LAND_UNIT";
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
        "label": "Command and Control", 
        "id": "COMMAND_AND_CONTROL", 
        "graphic": "10110000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Broadcast Transmitter Antennae", 
                "id": "BROADCAST_TRANSMITTER_ANTENNAE", 
                "graphic": "10110100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Civil Affairs", 
                "id": "CIVIL_AFFAIRS", 
                "graphic": "10110200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Civil-Military Cooperation", 
                "id": "CIVIL_MILITARY_COOPERATION", 
                "graphic": "10110300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Information Operations", 
                "id": "INFORMATION_OPERATIONS", 
                "graphic": "10110400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Liaison", 
                "id": "LIAISON", 
                "graphic": "10110500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Military Information Support Operations (MISO)", 
                "id": "MILITARY_INFORMATION_SUPPORT_OPERATIONS_MISO", 
                "graphic": "10110600.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Broadcast Transmitter Antennae", 
                        "id": "BROADCAST_TRANSMITTER_ANTENNAE_MISO", 
                        "graphic": "10110601.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "07", 
                "label": "Radio", 
                "id": "RADIO", 
                "graphic": "10110700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Radio Relay", 
                "id": "RADIO_RELAY", 
                "graphic": "10110800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Radio Teletype Center", 
                "id": "RADIO_TELETYPE_CENTER", 
                "graphic": "10110900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Signal", 
                "id": "SIGNAL", 
                "cloverGraphic": "10111000_0.svg", 
                "diamondGraphic": "10111000_3.svg", 
                "rectangleGraphic": "10111000_1.svg", 
                "squareGraphic": "10111000_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Radio", 
                        "id": "SIGNAL_RADIO", 
                        "cloverGraphic": "10111001_0.svg", 
                        "diamondGraphic": "10111001_3.svg", 
                        "rectangleGraphic": "10111001_1.svg", 
                        "squareGraphic": "10111001_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Radio Relay", 
                        "id": "SIGNAL_RADIO_RELAY", 
                        "cloverGraphic": "10111002_0.svg", 
                        "diamondGraphic": "10111002_3.svg", 
                        "rectangleGraphic": "10111002_1.svg", 
                        "squareGraphic": "10111002_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Teletype", 
                        "id": "SIGNAL_TELETYPE", 
                        "cloverGraphic": "10111003_0.svg", 
                        "diamondGraphic": "10111003_3.svg", 
                        "rectangleGraphic": "10111003_1.svg", 
                        "squareGraphic": "10111003_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Tactical Satellite", 
                        "id": "SIGNAL_TACTICAL_SATELLITE", 
                        "cloverGraphic": "10111004_0.svg", 
                        "diamondGraphic": "10111004_3.svg", 
                        "rectangleGraphic": "10111004_1.svg", 
                        "squareGraphic": "10111004_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Video Imagery (Combat Camera)", 
                        "id": "SIGNAL_VIDEO_IMAGERY_COMBAT_CAMERA", 
                        "cloverGraphic": "10111005_0.svg", 
                        "diamondGraphic": "10111005_3.svg", 
                        "rectangleGraphic": "10111005_1.svg", 
                        "squareGraphic": "10111005_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "11", 
                "label": "Tactical Satellite", 
                "id": "TACTICAL_SATELLITE", 
                "graphic": "10111100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Video Imagery (Combat Camera)", 
                "id": "VIDEO_IMAGERY_COMBAT_CAMERA", 
                "graphic": "10111200.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "12", 
        "label": "Movement and Maneuver", 
        "id": "MOVEMENT_AND_MANEUVER", 
        "remarks": "Reserved for hiearchical purposes.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Air Assault with Organic Lift", 
                "id": "AIR_ASSAULT_WITH_ORGANIC_LIFT", 
                "cloverGraphic": "10120100_0.svg", 
                "diamondGraphic": "10120100_3.svg", 
                "rectangleGraphic": "10120100_1.svg", 
                "squareGraphic": "10120100_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Air Traffic Services/Airfield Operations", 
                "id": "AIR_TRAFFIC_SERVICES_AIRFIELD_OPERATIONS", 
                "graphic": "10120200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Amphibious", 
                "id": "AMPHIBIOUS", 
                "cloverGraphic": "10120300_0.svg", 
                "diamondGraphic": "10120300_3.svg", 
                "rectangleGraphic": "10120300_1.svg", 
                "squareGraphic": "10120300_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Antitank/Antiarmor", 
                "id": "ANTITANK_ANTIARMOR", 
                "cloverGraphic": "10120400_0.svg", 
                "diamondGraphic": "10120400_3.svg", 
                "rectangleGraphic": "10120400_1.svg", 
                "squareGraphic": "10120400_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Armored", 
                        "id": "ARMORED", 
                        "cloverGraphic": "10120401_0.svg", 
                        "diamondGraphic": "10120401_3.svg", 
                        "rectangleGraphic": "10120401_1.svg", 
                        "squareGraphic": "10120401_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Motorized", 
                        "id": "MOTORIZED", 
                        "cloverGraphic": "10120402_0.svg", 
                        "diamondGraphic": "10120402_3.svg", 
                        "rectangleGraphic": "10120402_1.svg", 
                        "squareGraphic": "10120402_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "05", 
                "label": "Armor/Armored/Mechanized/Self-Propelled/Tracked", 
                "id": "ARMOR_ARMORED_MECHANIZED_SELF_PROPELLED_TRACKED", 
                "graphic": "10120500.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Reconnaissance/Cavalry/Scout", 
                        "id": "RECONNAISSANCE_CAVALRY_SCOUT", 
                        "cloverGraphic": "10120501_0.svg", 
                        "diamondGraphic": "10120501_3.svg", 
                        "rectangleGraphic": "10120501_1.svg", 
                        "squareGraphic": "10120501_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Amphibious", 
                        "id": "ARMORED_AMPHIBIOUS", 
                        "cloverGraphic": "10120502_0.svg", 
                        "diamondGraphic": "10120502_3.svg", 
                        "rectangleGraphic": "10120502_1.svg", 
                        "squareGraphic": "10120502_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Army Aviation/Aviation Rotary Wing", 
                "id": "ARMY_AVIATION_AVIATION_ROTARY_WING", 
                "graphic": "10120600.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Reconnaissance", 
                        "id": "AVIATION_RECONNAISSANCE", 
                        "cloverGraphic": "10120601_0.svg", 
                        "diamondGraphic": "10120601_3.svg", 
                        "rectangleGraphic": "10120601_1.svg", 
                        "squareGraphic": "10120601_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "07", 
                "label": "Aviation Composite", 
                "id": "AVIATION_COMPOSITE", 
                "graphic": "10120700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Aviation Fixed Wing", 
                "id": "AVIATION_FIXED_WING", 
                "graphic": "10120800.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Reconnaissance", 
                        "id": "AVIATION_FIXED_WING_RECONNAISSANCE", 
                        "cloverGraphic": "10120801_0.svg", 
                        "diamondGraphic": "10120801_3.svg", 
                        "rectangleGraphic": "10120801_1.svg", 
                        "squareGraphic": "10120801_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "09", 
                "label": "Combat", 
                "id": "COMBAT", 
                "graphic": "10120900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Combined Arms", 
                "id": "COMBINED_ARMS", 
                "graphic": "10121000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Infantry", 
                "id": "INFANTRY", 
                "cloverGraphic": "10121100_0.svg", 
                "diamondGraphic": "10121100_3.svg", 
                "rectangleGraphic": "10121100_1.svg", 
                "squareGraphic": "10121100_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Amphibious", 
                        "id": "INFANTRY_AMPHIBIOUS", 
                        "cloverGraphic": "10121101_0.svg", 
                        "diamondGraphic": "10121101_3.svg", 
                        "rectangleGraphic": "10121101_1.svg", 
                        "squareGraphic": "10121101_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Armored/Mechanized/Tracked", 
                        "id": "INFANTRY_ARMORED_MECHANIZED_TRACKED", 
                        "cloverGraphic": "10121102_0.svg", 
                        "diamondGraphic": "10121102_3.svg", 
                        "rectangleGraphic": "10121102_1.svg", 
                        "squareGraphic": "10121102_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Main Gun System", 
                        "id": "INFANTRY_MAIN_GUN_SYSTEM", 
                        "cloverGraphic": "10121103_0.svg", 
                        "diamondGraphic": "10121103_3.svg", 
                        "rectangleGraphic": "10121103_1.svg", 
                        "squareGraphic": "10121103_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Motorized", 
                        "id": "INFANTRY_MOTORIZED", 
                        "cloverGraphic": "10121104_0.svg", 
                        "diamondGraphic": "10121104_3.svg", 
                        "rectangleGraphic": "10121104_1.svg", 
                        "squareGraphic": "10121104_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Infantry Fighting Vehicle", 
                        "id": "INFANTRY_FIGHTING_VEHICLE", 
                        "cloverGraphic": "10121105_0.svg", 
                        "diamondGraphic": "10121105_3.svg", 
                        "rectangleGraphic": "10121105_1.svg", 
                        "squareGraphic": "10121105_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "12", 
                "label": "Observer", 
                "id": "OBSERVER", 
                "graphic": "10121200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Reconnaissance/Cavalry/Scout", 
                "id": "RECON_CAVALRY_SCOUT", 
                "cloverGraphic": "10121300_0.svg", 
                "diamondGraphic": "10121300_3.svg", 
                "rectangleGraphic": "10121300_1.svg", 
                "squareGraphic": "10121300_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Reconnaissance and Surveillance", 
                        "id": "RECONNAISSANCE_AND_SURVEILLANCE", 
                        "cloverGraphic": "10121301_0.svg", 
                        "diamondGraphic": "10121301_3.svg", 
                        "rectangleGraphic": "10121301_1.svg", 
                        "squareGraphic": "10121301_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Marine", 
                        "id": "RECON_MARINE", 
                        "cloverGraphic": "10121302_0.svg", 
                        "diamondGraphic": "10121302_3.svg", 
                        "rectangleGraphic": "10121302_1.svg", 
                        "squareGraphic": "10121302_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Motorized", 
                        "id": "RECON_MOTORIZED", 
                        "cloverGraphic": "10121303_0.svg", 
                        "diamondGraphic": "10121303_3.svg", 
                        "rectangleGraphic": "10121303_1.svg", 
                        "squareGraphic": "10121303_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "14", 
                "label": "Sea Air Land (SEAL)", 
                "id": "SEA_AIR_LAND_SEAL", 
                "graphic": "10121400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Sniper", 
                "id": "SNIPER", 
                "graphic": "10121500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Surveillance", 
                "id": "SURVEILLANCE", 
                "graphic": "10121600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Special Forces", 
                "id": "SPECIAL_FORCES", 
                "graphic": "10121700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "18", 
                "label": "Special Operations Forces (SOF)", 
                "id": "SPECIAL_OPERATIONS_FORCES_SOF", 
                "graphic": "10121800.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Fixed Wing MISO", 
                        "id": "FIXED_WING_MISO", 
                        "graphic": "10121801.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Ground", 
                        "id": "GROUND", 
                        "cloverGraphic": "10121802_0.svg", 
                        "diamondGraphic": "10121802_3.svg", 
                        "rectangleGraphic": "10121802_1.svg", 
                        "squareGraphic": "10121802_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Special Boat", 
                        "id": "SPECIAL_BOAT", 
                        "graphic": "10121803.svg", 
                        "icon": "MAIN_1"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Special SSNR", 
                        "id": "SPECIAL_SSNR", 
                        "graphic": "10121804.svg", 
                        "icon": "MAIN_1"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Underwater Demolition Team", 
                        "id": "UNDERWATER_DEMOLITION_TEAM", 
                        "graphic": "10121805.svg"
                    }
                ]
            }, 
            {
                "digits": "19", 
                "label": "Unmanned Aerial Systems", 
                "id": "UNMANNED_AERIAL_SYSTEMS", 
                "graphic": "10121900.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "13", 
        "label": "Fires", 
        "id": "FIRES", 
        "remarks": "Reserved for hiearchical purposes.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Air Defense", 
                "id": "AIR_DEFENSE", 
                "cloverGraphic": "10130100_0.svg", 
                "diamondGraphic": "10130100_3.svg", 
                "rectangleGraphic": "10130100_1.svg", 
                "squareGraphic": "10130100_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Main Gun System", 
                        "id": "AD_MAIN_GUN_SYSTEM", 
                        "cloverGraphic": "10130101_0.svg", 
                        "diamondGraphic": "10130101_3.svg", 
                        "rectangleGraphic": "10130101_1.svg", 
                        "squareGraphic": "10130101_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Missile", 
                        "id": "AD_MISSILE", 
                        "cloverGraphic": "10130102_0.svg", 
                        "diamondGraphic": "10130102_3.svg", 
                        "rectangleGraphic": "10130102_1.svg", 
                        "squareGraphic": "10130102_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Air/Land Naval Gunfire Liaison", 
                "id": "AIR_LAND_NAVAL_GUNFIRE_LIAISON", 
                "cloverGraphic": "10130200_0.svg", 
                "diamondGraphic": "10130200_3.svg", 
                "rectangleGraphic": "10130200_1.svg", 
                "squareGraphic": "10130200_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Field Artillery", 
                "id": "FIELD_ARTILLERY", 
                "graphic": "10130300.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Self-propelled", 
                        "id": "FA_SELF_PROPELLED", 
                        "graphic": "10130301.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Target Acquisition", 
                        "id": "FA_TARGET_ACQUISITION", 
                        "cloverGraphic": "10130302_0.svg", 
                        "diamondGraphic": "10130302_3.svg", 
                        "rectangleGraphic": "10130302_1.svg", 
                        "squareGraphic": "10130302_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Field Artillery Observer", 
                "id": "FIELD_ARTILLERY_OBSERVER", 
                "graphic": "10130400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Joint Fire Support", 
                "id": "JOINT_FIRE_SUPPORT", 
                "graphic": "10130500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Meteorological", 
                "id": "METEOROLOGICAL", 
                "graphic": "10130600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Missile", 
                "id": "MISSILE", 
                "graphic": "10130700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Mortar", 
                "id": "MORTAR", 
                "graphic": "10130800.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Armored/Mechanized/Tracked", 
                        "id": "ARMORED_MECHANIZED_TRACKED", 
                        "graphic": "10130801.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Self-Propelled Wheeled", 
                        "id": "SELF_PROPELLED_WHEELED", 
                        "graphic": "10130802.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Towed", 
                        "id": "TOWED", 
                        "graphic": "10130803.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "09", 
                "label": "Survey", 
                "id": "SURVEY", 
                "graphic": "10130900.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "14", 
        "label": "Protection", 
        "id": "PROTECTION", 
        "remarks": "Reserved for hiearchical purposes.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Chemical Biological Radiological Nuclear Defense", 
                "id": "CHEMICAL_BIOLOGICAL_RADIOLOGICAL_NUCLEAR_DEFENSE", 
                "graphic": "10140100.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Mechanized", 
                        "id": "CBRN_MECHANIZED", 
                        "graphic": "10140101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Motorized", 
                        "id": "CBRN_MOTORIZED", 
                        "cloverGraphic": "10140102_0.svg", 
                        "diamondGraphic": "10140102_3.svg", 
                        "rectangleGraphic": "10140102_1.svg", 
                        "squareGraphic": "10140102_2.svg", 
                        "remarks": "DISA changed this to full frame as a result of a telecon discussion with the Army, but not reflected that way in the final PDF.", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Reconnaissance", 
                        "id": "CBRN_RECONNAISSANCE", 
                        "cloverGraphic": "10140103_0.svg", 
                        "diamondGraphic": "10140103_3.svg", 
                        "rectangleGraphic": "10140103_1.svg", 
                        "squareGraphic": "10140103_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Reconnaissance Armored", 
                        "id": "CBRN_RECONNAISSANCE_ARMORED", 
                        "cloverGraphic": "10140104_0.svg", 
                        "diamondGraphic": "10140104_3.svg", 
                        "rectangleGraphic": "10140104_1.svg", 
                        "squareGraphic": "10140104_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Reconnaissance Equipped", 
                        "id": "CBRN_RECONNAISSANCE_EQUIPPED", 
                        "cloverGraphic": "10140105_0.svg", 
                        "diamondGraphic": "10140105_3.svg", 
                        "rectangleGraphic": "10140105_1.svg", 
                        "squareGraphic": "10140105_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Combat Support (Maneuver Enhancement)", 
                "id": "COMBAT_SUPPORT_MANEUVER_ENHANCEMENT", 
                "graphic": "10140200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Criminal Investigation Division", 
                "id": "CRIMINAL_INVESTIGATION_DIVISION", 
                "graphic": "10140300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Diving", 
                "id": "DIVING", 
                "graphic": "10140400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Dog", 
                "id": "DOG", 
                "graphic": "10140500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Drilling", 
                "id": "DRILLING", 
                "graphic": "10140600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Engineer", 
                "id": "ENGINEER", 
                "graphic": "10140700.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Mechanized", 
                        "id": "ENG_MECHANIZED", 
                        "graphic": "10140701.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Motorized", 
                        "id": "ENG_MOTORIZED", 
                        "cloverGraphic": "10140702_0.svg", 
                        "diamondGraphic": "10140702_3.svg", 
                        "rectangleGraphic": "10140702_1.svg", 
                        "squareGraphic": "10140702_2.svg", 
                        "remarks": "DISA changed this to full frame as a result of a telecon discussion with the Army, but not reflected that way in the final PDF.", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Reconnaissance", 
                        "id": "ENG_RECONNAISSANCE", 
                        "cloverGraphic": "10140703_0.svg", 
                        "diamondGraphic": "10140703_3.svg", 
                        "rectangleGraphic": "10140703_1.svg", 
                        "squareGraphic": "10140703_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "08", 
                "label": "Explosive Ordnance Disposal (EOD)", 
                "id": "EXPLOSIVE_ORDNANCE_DISPOSAL_EOD", 
                "graphic": "10140800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Field Camp Construction", 
                "id": "FIELD_CAMP_CONSTRUCTION", 
                "graphic": "10140900.svg", 
                "icon": "MAIN_1", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Fire Fighting/Fire Protection", 
                "id": "FIRE_FIGHTING_FIRE_PROTECTION", 
                "graphic": "10141000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Geospatial Support/Geospatial Information Support", 
                "id": "GEOSPATIAL_SUPPORT_GEOSPATIAL_INFORMATION_SUPPORT", 
                "graphic": "10141100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Military Police", 
                "id": "MILITARY_POLICE", 
                "graphic": "10141200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Mine", 
                "id": "MINE", 
                "graphic": "10141300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Mine Clearing", 
                "id": "MINE_CLEARING", 
                "graphic": "10141400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Mine Launching", 
                "id": "MINE_LAUNCHING", 
                "graphic": "10141500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Mine Laying", 
                "id": "MINE_LAYING", 
                "graphic": "10141600.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Security", 
                "id": "SECURITY", 
                "graphic": "10141700.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Mechanized", 
                        "id": "SEC_MECHANIZED", 
                        "graphic": "10141701.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Motorized", 
                        "id": "SEC_MOTORIZED", 
                        "cloverGraphic": "10141702_0.svg", 
                        "diamondGraphic": "10141702_3.svg", 
                        "rectangleGraphic": "10141702_1.svg", 
                        "squareGraphic": "10141702_2.svg", 
                        "remarks": "DISA changed this to full frame as a result of a telecon discussion with the Army, but not reflected that way in the final PDF.", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "18", 
                "label": "Search and Rescue", 
                "id": "SEARCH_AND_RESCUE", 
                "graphic": "10141800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "19", 
                "label": "Security Police (Air)", 
                "id": "SECURITY_POLICE_AIR", 
                "graphic": "10141900.svg", 
                "icon": "MAIN_2", 
                "entitySubTypes": []
            }, 
            {
                "digits": "20", 
                "label": "Shore Patrol", 
                "id": "SHORE_PATROL", 
                "graphic": "10142000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "21", 
                "label": "Topographic", 
                "id": "TOPOGRAPHIC", 
                "graphic": "10142100.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "15", 
        "label": "Intelligence", 
        "id": "INTELLIGENCE", 
        "remarks": "Reserved for hiearchical purposes.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Analysis", 
                "id": "ANALYSIS", 
                "graphic": "10150100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Counterintelligence", 
                "id": "COUNTERINTELLIGENCE", 
                "graphic": "10150200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Direction Finding", 
                "id": "DIRECTION_FINDING", 
                "graphic": "10150300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Electronic Ranging", 
                "id": "ELECTRONIC_RANGING", 
                "graphic": "10150400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Electronic Warfare", 
                "id": "ELECTRONIC_WARFARE", 
                "graphic": "10150500.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Analysis", 
                        "id": "EW_ANALYSIS", 
                        "graphic": "10150501.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Direction Finding", 
                        "id": "EW_DIRECTION_FINDING", 
                        "graphic": "10150502.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Intercept", 
                        "id": "EW_INTERCEPT", 
                        "graphic": "10150503.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Jamming", 
                        "id": "EW_JAMMING", 
                        "cloverGraphic": "10150504_0.svg", 
                        "diamondGraphic": "10150504_3.svg", 
                        "rectangleGraphic": "10150504_1.svg", 
                        "squareGraphic": "10150504_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Search", 
                        "id": "EW_SEARCH", 
                        "graphic": "10150505.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Intercept (Search and Recording)", 
                "id": "INTERCEPT_SEARCH_RECORDING", 
                "graphic": "10150600.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Interrogation", 
                "id": "INTERROGATION", 
                "graphic": "10150700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Jamming", 
                "id": "JAMMING", 
                "cloverGraphic": "10150800_0.svg", 
                "diamondGraphic": "10150800_3.svg", 
                "rectangleGraphic": "10150800_1.svg", 
                "squareGraphic": "10150800_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Joint Intelligence Center", 
                "id": "JOINT_INTELLIGENCE_CENTER", 
                "graphic": "10150900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Military Intelligence", 
                "id": "MILITARY_INTELLIGENCE", 
                "graphic": "10151000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Search", 
                "id": "SEARCH", 
                "graphic": "10151100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Sensor", 
                "id": "SENSOR", 
                "graphic": "10151200.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "16", 
        "label": "Sustainment", 
        "id": "SUSTAINMENT", 
        "graphic": "10160000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Administrative", 
                "id": "ADMINISTRATIVE", 
                "graphic": "10160100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "All Classes of Supply", 
                "id": "ALL_CLASSES_SUPPLY", 
                "cloverGraphic": "10160200_0.svg", 
                "diamondGraphic": "10160200_3.svg", 
                "rectangleGraphic": "10160200_1.svg", 
                "squareGraphic": "10160200_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Airport of Debarkation/Airport of Embarkation", 
                "id": "AIRPORT_DEBARKATION_AIRPORT_EMBARKATION", 
                "graphic": "10160300.svg", 
                "icon": "MAIN_1", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Ammunition", 
                "id": "AMMUNITION", 
                "graphic": "10160400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Band", 
                "id": "BAND", 
                "graphic": "10160500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Combat Service Support", 
                "id": "COMBAT_SERVICE_SUPPORT", 
                "graphic": "10160600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Finance", 
                "id": "FINANCE", 
                "graphic": "10160700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Judge Advocate General", 
                "id": "JUDGE_ADVOCATE_GENERAL", 
                "graphic": "10160800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Labor", 
                "id": "LABOR", 
                "graphic": "10160900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Laundry/Bath", 
                "id": "LAUNDRY_BATH", 
                "graphic": "10161000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Maintenance", 
                "id": "MAINTENANCE", 
                "graphic": "10161100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Material", 
                "id": "MATERIAL", 
                "cloverGraphic": "10161200_0.svg", 
                "diamondGraphic": "10161200_3.svg", 
                "rectangleGraphic": "10161200_1.svg", 
                "squareGraphic": "10161200_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Medical", 
                "id": "MEDICAL", 
                "cloverGraphic": "10161300_0.svg", 
                "diamondGraphic": "10161300_3.svg", 
                "rectangleGraphic": "10161300_1.svg", 
                "squareGraphic": "10161300_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Medical Treatment Facility", 
                "id": "MEDICAL_TREATMENT_FACILITY", 
                "cloverGraphic": "10161400_0.svg", 
                "diamondGraphic": "10161400_3.svg", 
                "rectangleGraphic": "10161400_1.svg", 
                "squareGraphic": "10161400_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Morale Welfare and Recreation", 
                "id": "MORALE_WELFARE_AND_RECREATION", 
                "graphic": "10161500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Mortuary Affairs/Graves Registration", 
                "id": "MORTUARY_AFFAIRS_GRAVES_REGISTRATION", 
                "graphic": "10161600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Multiple Classes of Supply", 
                "id": "MULTIPLE_CLASSES_OF_SUPPLY", 
                "cloverGraphic": "10161700_0.svg", 
                "diamondGraphic": "10161700_3.svg", 
                "rectangleGraphic": "10161700_1.svg", 
                "squareGraphic": "10161700_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "18", 
                "label": "NATO Supply Class I", 
                "id": "NATO_SUPPLY_CLASS_I", 
                "cloverGraphic": "10161800_0.svg", 
                "diamondGraphic": "10161800_3.svg", 
                "rectangleGraphic": "10161800_1.svg", 
                "squareGraphic": "10161800_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "19", 
                "label": "NATO Supply Class II", 
                "id": "NATO_SUPPLY_CLASS_II", 
                "cloverGraphic": "10161900_0.svg", 
                "diamondGraphic": "10161900_3.svg", 
                "rectangleGraphic": "10161900_1.svg", 
                "squareGraphic": "10161900_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "20", 
                "label": "NATO Supply Class III", 
                "id": "NATO_SUPPLY_CLASS_III", 
                "cloverGraphic": "10162000_0.svg", 
                "diamondGraphic": "10162000_3.svg", 
                "rectangleGraphic": "10162000_1.svg", 
                "squareGraphic": "10162000_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "21", 
                "label": "NATO Supply Class IV", 
                "id": "NATO_SUPPLY_CLASS_IV", 
                "cloverGraphic": "10162100_0.svg", 
                "diamondGraphic": "10162100_3.svg", 
                "rectangleGraphic": "10162100_1.svg", 
                "squareGraphic": "10162100_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "22", 
                "label": "NATO Supply Class V", 
                "id": "NATO_SUPPLY_CLASS_V", 
                "cloverGraphic": "10162200_0.svg", 
                "diamondGraphic": "10162200_3.svg", 
                "rectangleGraphic": "10162200_1.svg", 
                "squareGraphic": "10162200_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "23", 
                "label": "Ordnance", 
                "id": "ORDNANCE", 
                "graphic": "10162300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "24", 
                "label": "Personnel Services", 
                "id": "PERSONNEL_SERVICES", 
                "graphic": "10162400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "25", 
                "label": "Petroleum Oil and Lubricants", 
                "id": "PETROLEUM_OIL_LUBRICANTS", 
                "graphic": "10162500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "26", 
                "label": "Pipeline", 
                "id": "PIPELINE", 
                "graphic": "10162600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "27", 
                "label": "Postal", 
                "id": "POSTAL", 
                "graphic": "10162700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "28", 
                "label": "Public Affairs/Public Information", 
                "id": "PUBLIC_AFFAIRS_PUBLIC_INFORMATION", 
                "graphic": "10162800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "29", 
                "label": "Quartermaster", 
                "id": "QUARTERMASTER", 
                "graphic": "10162900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "30", 
                "label": "Railhead", 
                "id": "RAILHEAD", 
                "graphic": "10163000.svg", 
                "icon": "MAIN_1", 
                "entitySubTypes": []
            }, 
            {
                "digits": "31", 
                "label": "Religious Support", 
                "id": "RELIGIOUS_SUPPORT", 
                "graphic": "10163100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "32", 
                "label": "Replacement Holding Unit", 
                "id": "REPLACEMENT_HOLDING_UNIT", 
                "graphic": "10163200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "33", 
                "label": "Sea Port of Debarkation/Sea Port of Embarkation", 
                "id": "SEA_PORT_DEBARKATION_SEA_PORT_EMBARKATION", 
                "graphic": "10163300.svg", 
                "icon": "MAIN_1", 
                "entitySubTypes": []
            }, 
            {
                "digits": "34", 
                "label": "Supply", 
                "id": "SUPPLY", 
                "cloverGraphic": "10163400_0.svg", 
                "diamondGraphic": "10163400_3.svg", 
                "rectangleGraphic": "10163400_1.svg", 
                "squareGraphic": "10163400_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "35", 
                "label": "Joint Information Bureau", 
                "id": "JOINT_INFORMATION_BUREAU", 
                "graphic": "10163500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "36", 
                "label": "Transportation", 
                "id": "TRANSPORTATION", 
                "graphic": "10163600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "37", 
                "label": "US Supply Class I", 
                "id": "US_SUPPLY_CLASS_I", 
                "cloverGraphic": "10163700_0.svg", 
                "diamondGraphic": "10163700_3.svg", 
                "rectangleGraphic": "10163700_1.svg", 
                "squareGraphic": "10163700_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "38", 
                "label": "US Supply Class II", 
                "id": "US_SUPPLY_CLASS_II", 
                "cloverGraphic": "10163800_0.svg", 
                "diamondGraphic": "10163800_3.svg", 
                "rectangleGraphic": "10163800_1.svg", 
                "squareGraphic": "10163800_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "39", 
                "label": "US Supply Class III", 
                "id": "US_SUPPLY_CLASS_III", 
                "cloverGraphic": "10163900_0.svg", 
                "diamondGraphic": "10163900_3.svg", 
                "rectangleGraphic": "10163900_1.svg", 
                "squareGraphic": "10163900_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "40", 
                "label": "US Supply Class IV", 
                "id": "US_SUPPLY_CLASS_IV", 
                "cloverGraphic": "10164000_0.svg", 
                "diamondGraphic": "10164000_3.svg", 
                "rectangleGraphic": "10164000_1.svg", 
                "squareGraphic": "10164000_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "41", 
                "label": "US Supply Class V", 
                "id": "US_SUPPLY_CLASS_V", 
                "cloverGraphic": "10164100_0.svg", 
                "diamondGraphic": "10164100_3.svg", 
                "rectangleGraphic": "10164100_1.svg", 
                "squareGraphic": "10164100_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "42", 
                "label": "US Supply Class VI", 
                "id": "US_SUPPLY_CLASS_VI", 
                "cloverGraphic": "10164200_0.svg", 
                "diamondGraphic": "10164200_3.svg", 
                "rectangleGraphic": "10164200_1.svg", 
                "squareGraphic": "10164200_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "43", 
                "label": "US Supply Class VII", 
                "id": "US_SUPPLY_CLASS_VII", 
                "cloverGraphic": "10164300_0.svg", 
                "diamondGraphic": "10164300_3.svg", 
                "rectangleGraphic": "10164300_1.svg", 
                "squareGraphic": "10164300_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "44", 
                "label": "US Supply Class VIII", 
                "id": "US_SUPPLY_CLASS_VIII", 
                "cloverGraphic": "10164400_0.svg", 
                "diamondGraphic": "10164400_3.svg", 
                "rectangleGraphic": "10164400_1.svg", 
                "squareGraphic": "10164400_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "45", 
                "label": "US Supply Class IX", 
                "id": "US_SUPPLY_CLASS_IX", 
                "cloverGraphic": "10164500_0.svg", 
                "diamondGraphic": "10164500_3.svg", 
                "rectangleGraphic": "10164500_1.svg", 
                "squareGraphic": "10164500_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "46", 
                "label": "US Supply Class X", 
                "id": "US_SUPPLY_CLASS_X", 
                "cloverGraphic": "10164600_0.svg", 
                "diamondGraphic": "10164600_3.svg", 
                "rectangleGraphic": "10164600_1.svg", 
                "squareGraphic": "10164600_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "47", 
                "label": "Water", 
                "id": "WATER", 
                "graphic": "10164700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "48", 
                "label": "Water Purification", 
                "id": "WATER_PURIFICATION", 
                "graphic": "10164800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "49", 
                "label": "Broadcast", 
                "id": "BROADCAST", 
                "graphic": "10164900.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "17", 
        "label": "Naval", 
        "id": "NAVAL", 
        "remarks": "Reserved for hiearchical purposes.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Naval", 
                "id": "NAVAL_ET", 
                "graphic": "10170100.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "18", 
        "label": "Named Headquarters", 
        "id": "NAMED_HEADQUARTERS", 
        "remarks": "Reserved for hiearchical purposes.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Allied Command Europe Rapid Reaction Corps (ARRC)", 
                "id": "ALLIED_COMMAND_EUROPE_RAPID_REACTION_CORPS_ARRC", 
                "graphic": "10180100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Allied Command Operations", 
                "id": "ALLIED_COMMAND_OPERATIONS", 
                "graphic": "10180200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "International Security Assistance Force (ISAF)", 
                "id": "INTERNATIONAL_SECURITY_ASSISTANCE_FORCE_ISAF", 
                "graphic": "10180300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Multinational (MN)", 
                "id": "MULTINATIONAL_MN", 
                "graphic": "10180400.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "19", 
        "label": "Emergency Operation", 
        "id": "EMERGENCY_OPERATION", 
        "graphic": "10190000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }, 
    {
        "digits": "20", 
        "label": "Law Enforcement", 
        "id": "LAW_ENFORCEMENT", 
        "graphic": "10200000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Bureau of Alcohol Tobacco Firearms and Explosives (ATF) (Department of Justice)", 
                "id": "BUREAU_ATF", 
                "graphic": "10200100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Border Patrol", 
                "id": "BORDER_PATROL", 
                "graphic": "10200200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Customs Service", 
                "id": "CUSTOMS_SERVICE", 
                "graphic": "10200300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Drug Enforcement Administration (DEA)", 
                "id": "DRUG_ENFORCEMENT_ADMINISTRATION_DEA", 
                "graphic": "10200400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Department of Justice (DOJ)", 
                "id": "DEPARTMENT_JUSTICE_DOJ", 
                "graphic": "10200500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Federal Bureau of Investigation (FBI)", 
                "id": "FEDERAL_BUREAU_INVESTIGATION_FBI", 
                "graphic": "10200600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Police", 
                "id": "POLICE", 
                "graphic": "10200700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Prison", 
                "id": "PRISON", 
                "graphic": "10200800.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "United States Secret Service (USSS)", 
                "id": "UNITED_STATES_SECRET_SERVICE_USSS", 
                "graphic": "10200900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Transportation Security Administration (TSA)", 
                "id": "TRANSPORTATION_SECURITY_ADMINISTRATION_TSA", 
                "graphic": "10201000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Coast Guard", 
                "id": "COAST_GUARD", 
                "graphic": "10201100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "US Marshals Service", 
                "id": "US_MARSHALS_SERVICE", 
                "graphic": "10201200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Internal Security Force", 
                "id": "INTERNAL_SECURITY_FORCE", 
                "graphic": "10201300.svg", 
                "entitySubTypes": []
            }
        ]
    }
];

export const specialEntitySubTypes = <EntitySubType[]>[
    {
        "digits": "95", 
        "label": "Headquarters Element", 
        "id": "HQ_ELEMENT", 
        "cloverGraphic": "10xxxx95_0.svg", 
        "diamondGraphic": "10xxxx95_3.svg", 
        "rectangleGraphic": "10xxxx95_1.svg", 
        "squareGraphic": "10xxxx95_2.svg", 
        "icon": "SPECIAL"
    }, 
    {
        "digits": "96", 
        "label": "Division and Below Support", 
        "id": "DIVISION_AND_BELOW_SUPPORT", 
        "cloverGraphic": "10xxxx96_0.svg", 
        "diamondGraphic": "10xxxx96_3.svg", 
        "rectangleGraphic": "10xxxx96_1.svg", 
        "squareGraphic": "10xxxx96_2.svg", 
        "icon": "SPECIAL"
    }, 
    {
        "digits": "97", 
        "label": "Corps Support", 
        "id": "CORPS_SUPPORT", 
        "cloverGraphic": "10xxxx97_0.svg", 
        "diamondGraphic": "10xxxx97_3.svg", 
        "rectangleGraphic": "10xxxx97_1.svg", 
        "squareGraphic": "10xxxx97_2.svg", 
        "icon": "SPECIAL"
    }, 
    {
        "digits": "98", 
        "label": "Theater/Echelons Above Corps Support", 
        "id": "ECHELONS_ABOVE_CORPS_SUPPORT", 
        "cloverGraphic": "10xxxx98_0.svg", 
        "diamondGraphic": "10xxxx98_3.svg", 
        "rectangleGraphic": "10xxxx98_1.svg", 
        "squareGraphic": "10xxxx98_2.svg", 
        "icon": "SPECIAL"
    }
];

export const sectorOneModifiers = <Modifier[]>[
    {
        "digits": "00", 
        "label": "Unspecified", 
        "id": "UNSPECIFIED_MOD"
    }, 
    {
        "digits": "01", 
        "label": "Air Mobile/Air Assault (US Only)", 
        "id": "AIR_MOBILE_AIR_ASSAULT_MOD", 
        "graphic": "10011.svg", 
        "category": "Mobility"
    }, 
    {
        "digits": "02", 
        "label": "Area", 
        "id": "AREA_MOD", 
        "graphic": "10021.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "03", 
        "label": "Attack", 
        "id": "ATTACK_MOD", 
        "graphic": "10031.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "04", 
        "label": "Biological", 
        "id": "BIOLOGICAL_MOD", 
        "graphic": "10041.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "05", 
        "label": "Border", 
        "id": "BORDER_MOD", 
        "graphic": "10051.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "06", 
        "label": "Bridging", 
        "id": "BRIDGING_MOD", 
        "graphic": "10061.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "07", 
        "label": "Chemical", 
        "id": "CHEMICAL_MOD", 
        "graphic": "10071.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "08", 
        "label": "Close Protection", 
        "id": "CLOSE_PROTECTION_MOD", 
        "graphic": "10081.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "09", 
        "label": "Combat", 
        "id": "COMBAT_MOD", 
        "graphic": "10091.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "10", 
        "label": "Command and Control", 
        "id": "COMMAND_CONTROL_MOD", 
        "graphic": "10101.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "11", 
        "label": "Communications Contingency Package", 
        "id": "COMMUNICATIONS_CONTINGENCY_PACKAGE_MOD", 
        "graphic": "10111.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "12", 
        "label": "Construction", 
        "id": "CONSTRUCTION_MOD", 
        "graphic": "10121.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "13", 
        "label": "Cross Cultural Communication", 
        "id": "CROSS_CULTURAL_COMMUNICATION_MOD", 
        "graphic": "10131.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "14", 
        "label": "Crowd and Riot Control", 
        "id": "CROWD_RIOT_CONTROL_MOD", 
        "graphic": "10141.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "15", 
        "label": "Decontamination", 
        "id": "DECONTAMINATION_MOD", 
        "graphic": "10151.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "16", 
        "label": "Detention", 
        "id": "DETENTION_MOD", 
        "graphic": "10161.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "17", 
        "label": "Direct Communications", 
        "id": "DIRECT_COMMUNICATIONS_MOD", 
        "graphic": "10171.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "18", 
        "label": "Diving", 
        "id": "DIVING_MOD", 
        "graphic": "10181.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "19", 
        "label": "Division", 
        "id": "DIVISION_MOD", 
        "graphic": "10191.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "20", 
        "label": "Dog", 
        "id": "DOG_MOD", 
        "graphic": "10201.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "21", 
        "label": "Drilling", 
        "id": "DRILLING_MOD", 
        "graphic": "10211.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "22", 
        "label": "Electro-Optical", 
        "id": "ELECTRO_OPTICAL_MOD", 
        "graphic": "10221.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "23", 
        "label": "Enhanced", 
        "id": "ENHANCED_MOD", 
        "graphic": "10231.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "24", 
        "label": "Explosive Ordnance Disposal (EOD)", 
        "id": "EXPLOSIVE_ORDNANCE_DISPOSAL_EOD_MOD", 
        "graphic": "10241.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "25", 
        "label": "Fire Direction Center", 
        "id": "FIRE_DIRECTION_CENTER_MOD", 
        "graphic": "10251.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "26", 
        "label": "Force", 
        "id": "FORCE_MOD", 
        "graphic": "10261.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "27", 
        "label": "Forward", 
        "id": "FORWARD_MOD", 
        "graphic": "10271.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "28", 
        "label": "Ground Station Module", 
        "id": "GROUND_STATION_MODULE_MOD", 
        "graphic": "10281.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "29", 
        "label": "Landing Support", 
        "id": "LANDING_SUPPORT_MOD", 
        "graphic": "10291.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "30", 
        "label": "Large Extension Node", 
        "id": "LARGE_EXTENSION_NODE_MOD", 
        "graphic": "10301.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "31", 
        "label": "Maintenance", 
        "id": "MAINTENANCE_MOD", 
        "graphic": "10311.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "32", 
        "label": "Meteorological", 
        "id": "METEOROLOGICAL_MOD", 
        "graphic": "10321.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "33", 
        "label": "Mine Countermeasure", 
        "id": "MINE_COUNTERMEASURE_MOD", 
        "graphic": "10331.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "34", 
        "label": "Missile", 
        "id": "MISSILE_MOD", 
        "graphic": "10341.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "35", 
        "label": "Mobile Advisor and Support", 
        "id": "MOBILE_ADVISOR_SUPPORT_MOD", 
        "graphic": "10351.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "36", 
        "label": "Mobile Subscriber Equipment", 
        "id": "MOBILE_SUBSCRIBER_EQUIPMENT_MOD", 
        "graphic": "10361.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "37", 
        "label": "Mobility Support", 
        "id": "MOBILITY_SUPPORT_MOD", 
        "graphic": "10371.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "38", 
        "label": "Movement Control Center", 
        "id": "MOVEMENT_CONTROL_CENTER_MOD", 
        "graphic": "10381.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "39", 
        "label": "Multinational", 
        "id": "MULTINATIONAL_MOD", 
        "graphic": "10391.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "40", 
        "label": "Multinational Specialized Unit", 
        "id": "MULTINATIONAL_SPECIALIZED_UNIT_MOD", 
        "graphic": "10401.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "41", 
        "label": "Multiple Rocket Launcher", 
        "id": "MULTIPLE_ROCKET_LAUNCHER_MOD", 
        "graphic": "10411.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "42", 
        "label": "NATO Medical Role 1", 
        "id": "NATO_MEDICAL_ROLE_1_MOD", 
        "graphic": "10421.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "43", 
        "label": "NATO Medical Role 2", 
        "id": "NATO_MEDICAL_ROLE_2_MOD", 
        "graphic": "10431.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "44", 
        "label": "NATO Medical Role 3", 
        "id": "NATO_MEDICAL_ROLE_3_MOD", 
        "graphic": "10441.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "45", 
        "label": "NATO Medical Role 4", 
        "id": "NATO_MEDICAL_ROLE_4_MOD", 
        "graphic": "10451.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "46", 
        "label": "Naval", 
        "id": "NAVAL_MOD", 
        "graphic": "10461.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "47", 
        "label": "Node Center", 
        "id": "NODE_CENTER_MOD", 
        "graphic": "10471.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "48", 
        "label": "Nuclear", 
        "id": "NUCLEAR_MOD", 
        "graphic": "10481.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "49", 
        "label": "Operations", 
        "id": "OPERATIONS_MOD", 
        "graphic": "10491.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "50", 
        "label": "Radar", 
        "id": "RADAR_MOD", 
        "graphic": "10501.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "51", 
        "label": "Radio Frequency Identification (RFID) Interrogator / Sensor", 
        "id": "RFID_INTERROGATOR_SENSOR_MOD", 
        "graphic": "10511.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "52", 
        "label": "Radiological", 
        "id": "RADIOLOGICAL_MOD", 
        "graphic": "10521.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "53", 
        "label": "Search and Rescue", 
        "id": "SEARCH_RESCUE_MOD", 
        "graphic": "10531.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "54", 
        "label": "Security", 
        "id": "SECURITY_MOD", 
        "graphic": "10541.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "55", 
        "label": "Sensor", 
        "id": "SENSOR_MOD", 
        "graphic": "10551.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "56", 
        "label": "Sensor Control Module (SCM)", 
        "id": "SENSOR_CONTROL_MODULE_SCM_MOD", 
        "graphic": "10561.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "57", 
        "label": "Signals Intelligence", 
        "id": "SIGNALS_INTELLIGENCE_MOD", 
        "graphic": "10571.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "58", 
        "label": "Single Shelter Switch", 
        "id": "SINGLE_SHELTER_SWITCH_MOD", 
        "graphic": "10581.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "59", 
        "label": "Single Rocket Launcher", 
        "id": "SINGLE_ROCKET_LAUNCHER_MOD", 
        "graphic": "10591.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "60", 
        "label": "Smoke", 
        "id": "SMOKE_MOD", 
        "graphic": "10601.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "61", 
        "label": "Sniper", 
        "id": "SNIPER_MOD", 
        "graphic": "10611.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "62", 
        "label": "Sound Ranging", 
        "id": "SOUND_RANGING_MOD", 
        "graphic": "10621.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "63", 
        "label": "Special Operations Forces (SOF)", 
        "id": "SPEC_OPS_SOF_MOD", 
        "graphic": "10631.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "64", 
        "label": "Special Weapons and Tactics", 
        "id": "SPECIAL_WEAPONS_TACTICS_MOD", 
        "graphic": "10641.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "65", 
        "label": "Survey", 
        "id": "SURVEY_MOD", 
        "graphic": "10651.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "66", 
        "label": "Tactical Exploitation", 
        "id": "TACTICAL_EXPLOITATION_MOD", 
        "graphic": "10661.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "67", 
        "label": "Target Acquisition", 
        "id": "TARGET_ACQUISITION_MOD", 
        "graphic": "10671.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "68", 
        "label": "Topographic", 
        "id": "TOPOGRAPHIC_MOD", 
        "graphic": "10681.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "69", 
        "label": "Utility", 
        "id": "UTILITY_MOD", 
        "graphic": "10691.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "70", 
        "label": "Video Imagery (Combat Camera)", 
        "id": "VIDEO_IMAGERY_MOD", 
        "graphic": "10701.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "71", 
        "label": "Accident", 
        "id": "ACCIDENT_MOD", 
        "graphic": "10711.svg", 
        "category": "Composite Loss"
    }, 
    {
        "digits": "72", 
        "label": "Other", 
        "id": "OTHER_MOD", 
        "graphic": "10721.svg", 
        "category": "Composite Loss"
    }, 
    {
        "digits": "73", 
        "label": "Civilian", 
        "id": "CIVILIAN_MOD", 
        "graphic": "10731.svg", 
        "category": "Operation"
    }, 
    {
        "digits": "74", 
        "label": "Antisubmarine Warfare", 
        "id": "ANTISUBMARINE_WARFARE_MOD", 
        "graphic": "10741.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "75", 
        "label": "Medevac", 
        "id": "MEDEVAC_MOD", 
        "graphic": "10751.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "76", 
        "label": "Ranger", 
        "id": "RANGER_MOD", 
        "graphic": "10761.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "77", 
        "label": "Support", 
        "id": "SUPPORT_MOD", 
        "graphic": "10771.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "78", 
        "label": "Aviation", 
        "id": "AVIATION_MOD", 
        "graphic": "10781.svg", 
        "category": "Capability"
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
        "label": "Airborne", 
        "id": "AIRBORNE_MOD", 
        "graphic": "10012.svg", 
        "category": "Mobility"
    }, 
    {
        "digits": "02", 
        "label": "Arctic", 
        "id": "ARCTIC_MOD", 
        "graphic": "10022.svg", 
        "category": "Mobility"
    }, 
    {
        "digits": "03", 
        "label": "Battle Damage Repair", 
        "id": "BATTLE_DAMAGE_REPAIR_MOD", 
        "graphic": "10032.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "04", 
        "label": "Bicycle Equipped", 
        "id": "BICYCLE_EQUIPPED_MOD", 
        "graphic": "10042.svg", 
        "category": "Mobility"
    }, 
    {
        "digits": "05", 
        "label": "Casualty Staging", 
        "id": "CASUALTY_STAGING_MOD", 
        "graphic": "10052.svg", 
        "category": "Close Range and Support"
    }, 
    {
        "digits": "06", 
        "label": "Clearing", 
        "id": "CLEARING_MOD", 
        "graphic": "10062.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "07", 
        "label": "Close Range", 
        "id": "CLOSE_RANGE_MOD", 
        "graphic": "10072.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "08", 
        "label": "Control", 
        "id": "CONTROL_MOD", 
        "graphic": "10082.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "09", 
        "label": "Decontamination", 
        "id": "DECONTAMINATION_2_MOD", 
        "graphic": "10092.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "10", 
        "label": "Demolition", 
        "id": "DEMOLITION_MOD", 
        "graphic": "10102.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "11", 
        "label": "Dental", 
        "id": "DENTAL_MOD", 
        "graphic": "10112.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "12", 
        "label": "Digital", 
        "id": "DIGITAL_MOD", 
        "graphic": "10122.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "13", 
        "label": "Enhanced Position Location Reporting System (EPLRS)", 
        "id": "ENHANCED_POSITION_LOCATION_REPORTING_SYSTEM_EPLRS_MOD", 
        "graphic": "10132.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "14", 
        "label": "Equipment", 
        "id": "EQUIPMENT_MOD", 
        "graphic": "10142.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "15", 
        "label": "Heavy", 
        "id": "HEAVY_MOD", 
        "graphic": "10152.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "16", 
        "label": "High Altitude", 
        "id": "HIGH_ALTITUDE_MOD", 
        "graphic": "10162.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "17", 
        "label": "Intermodal", 
        "id": "INTERMODAL_MOD", 
        "graphic": "10172.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "18", 
        "label": "Intensive Care", 
        "id": "INTENSIVE_CARE_MOD", 
        "graphic": "10182.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "19", 
        "label": "Light", 
        "id": "LIGHT_MOD", 
        "graphic": "10192.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "20", 
        "label": "Laboratory", 
        "id": "LABORATORY_MOD", 
        "graphic": "10202.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "21", 
        "label": "Launcher", 
        "id": "LAUNCHER_MOD", 
        "graphic": "10212.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "22", 
        "label": "Long Range", 
        "id": "LONG_RANGE_MOD", 
        "graphic": "10222.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "23", 
        "label": "Low Altitude", 
        "id": "LOW_ALTITUDE_MOD", 
        "graphic": "10232.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "24", 
        "label": "Medium", 
        "id": "MEDIUM_MOD", 
        "graphic": "10242.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "25", 
        "label": "Medium Altitude", 
        "id": "MEDIUM_ALTITUDE_MOD", 
        "graphic": "10252.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "26", 
        "label": "Medium Range", 
        "id": "MEDIUM_RANGE_MOD", 
        "graphic": "10262.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "27", 
        "label": "Mountain", 
        "id": "MOUNTAIN_MOD", 
        "graphic": "10272.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "28", 
        "label": "High to Medium Altitude", 
        "id": "HIGH_MEDIUM_ALTITUDE_MOD", 
        "graphic": "10282.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "29", 
        "label": "Multi-Channel", 
        "id": "MULTI_CHANNEL_MOD", 
        "graphic": "10292.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "30", 
        "label": "Optical (Flash)", 
        "id": "OPTICAL_FLASH_MOD", 
        "graphic": "10302.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "31", 
        "label": "Pack Animal", 
        "id": "PACK_ANIMAL_MOD", 
        "graphic": "10312.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "32", 
        "label": "Patient Evacuation Coordination", 
        "id": "PATIENT_EVACUATION_COORDINATION_MOD", 
        "graphic": "10322.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "33", 
        "label": "Preventive Maintenance", 
        "id": "PREVENTIVE_MAINTENANCE_MOD", 
        "graphic": "10332.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "34", 
        "label": "Psychological", 
        "id": "PSYCHOLOGICAL_MOD", 
        "graphic": "10342.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "35", 
        "label": "Radio Relay Line of Sight", 
        "id": "RADIO_RELAY_LOS_MOD", 
        "graphic": "10352.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "36", 
        "label": "Railroad", 
        "id": "RAILROAD_MOD", 
        "graphic": "10362.svg", 
        "category": "Mobility"
    }, 
    {
        "digits": "37", 
        "label": "Recovery (Unmanned Systems)", 
        "id": "RECOVERY_UNMANNED_SYSTEMS_MOD", 
        "graphic": "10372.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "38", 
        "label": "Recovery (Maintenance)", 
        "id": "RECOVERY_MAINTENANCE_MOD", 
        "graphic": "10382.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "39", 
        "label": "Rescue Coordination Center", 
        "id": "RESCUE_COORDINATION_CENTER_MOD", 
        "graphic": "10392.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "40", 
        "label": "Riverine", 
        "id": "RIVERINE_MOD", 
        "graphic": "10402.svg", 
        "category": "Mobility"
    }, 
    {
        "digits": "41", 
        "label": "Single Channel", 
        "id": "SINGLE_CHANNEL_MOD", 
        "graphic": "10412.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "42", 
        "label": "Ski", 
        "id": "SKI_MOD", 
        "graphic": "10422.svg", 
        "category": "Mobility"
    }, 
    {
        "digits": "43", 
        "label": "Short Range", 
        "id": "SHORT_RANGE_MOD", 
        "graphic": "10432.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "44", 
        "label": "Strategic", 
        "id": "STRATEGIC_MOD", 
        "graphic": "10442.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "45", 
        "label": "Support", 
        "id": "SUPPORT_2_MOD", 
        "graphic": "10452.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "46", 
        "label": "Tactical", 
        "id": "TACTICAL_MOD", 
        "graphic": "10462.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "47", 
        "label": "Towed", 
        "id": "TOWED_MOD", 
        "graphic": "10472.svg", 
        "category": "Mobility"
    }, 
    {
        "digits": "48", 
        "label": "Troop", 
        "id": "TROOP_MOD", 
        "graphic": "10482.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "49", 
        "label": "Vertical or Short Take-Off and Landing (VTOL/VSTOL)", 
        "id": "VERTICAL_TAKE_OFF_LANDING_VTOL_MOD", 
        "graphic": "10492.svg", 
        "category": "Mobility"
    }, 
    {
        "digits": "50", 
        "label": "Veterinary", 
        "id": "VETERINARY_MOD", 
        "graphic": "10502.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "51", 
        "label": "Wheeled", 
        "id": "WHEELED_MOD", 
        "graphic": "10512.svg", 
        "category": "Mobility"
    }, 
    {
        "digits": "52", 
        "label": "High to Low Altitude", 
        "id": "HIGH_LOW_ALTITUDE_MOD", 
        "graphic": "10522.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "53", 
        "label": "Medium to Low Altitude", 
        "id": "MEDIUM_LOW_ALTITUDE_MOD", 
        "graphic": "10532.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "54", 
        "label": "Attack", 
        "id": "ATTACK_2_MOD", 
        "graphic": "10542.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "55", 
        "label": "Refuel", 
        "id": "REFUEL_MOD", 
        "graphic": "10552.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "56", 
        "label": "Utility", 
        "id": "UTILITY_2_MOD", 
        "graphic": "10562.svg", 
        "category": "Capability"
    }, 
    {
        "digits": "57", 
        "label": "Combat Search and Rescue", 
        "id": "COMBAT_SEARCH_RESCUE_MOD", 
        "graphic": "10572.svg", 
        "category": "Capability"
    }
];

export const graphicFolder = {
    "entities": "Appendices/Land", 
    "modifierTwos": "Appendices/Land/mod2", 
    "modifierOnes": "Appendices/Land/mod1"
};

