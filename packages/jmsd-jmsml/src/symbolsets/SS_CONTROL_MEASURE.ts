/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity} from "types";

export const digits = "25";
export const label = "Control Measure";
export const id = "SS_CONTROL_MEASURE";
export const dimensionId = "CONTROL_MEASURE";
export const geometry = "MIXED";

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
        "label": "Command and Control Lines", 
        "id": "COMMAND_CONTROL_LINES", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Boundary", 
                "id": "BOUNDARY", 
                "graphic": "25110100.a.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Light Line", 
                "id": "LIGHT_LINE", 
                "graphic": "25110200.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "12", 
        "label": "Command and Control Areas", 
        "id": "COMMAND_CONTROL_AREAS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Area of Operations", 
                "id": "AREA_OPERATIONS", 
                "graphic": "25120100.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Named Area of Interest", 
                "id": "NAMED_AREA_INTEREST", 
                "graphic": "25120200.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Targeted Area of Interest", 
                "id": "TARGETED_AREA_INTEREST", 
                "graphic": "25120300.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Airfield Zone", 
                "id": "AIRFIELD_ZONE", 
                "graphic": "25120400.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "13", 
        "label": "Command and Control Points", 
        "id": "COMMAND_CONTROL_POINTS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Action Point (General)", 
                "id": "ACTION_POINT", 
                "graphic": "25130100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Amnesty Point", 
                "id": "AMNESTY_POINT", 
                "graphic": "25130200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Checkpoint", 
                "id": "CHECKPOINT", 
                "graphic": "25130300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Center of Main Effort", 
                "id": "CENTER_MAIN_EFFORT", 
                "graphic": "25130400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Contact Point", 
                "id": "CONTACT_POINT", 
                "graphic": "25130500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Coordinating Point", 
                "id": "COORDINATING_POINT", 
                "graphic": "25130600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Decision Point", 
                "id": "DECISION_POINT", 
                "graphic": "25130700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Distress Call", 
                "id": "DISTRESS_CALL", 
                "graphic": "25130800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Entry Control Point", 
                "id": "ENTRY_CONTROL_POINT", 
                "graphic": "25130900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Fly-To-Point", 
                "id": "FLY_TO_POINT", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Fly-To-Point (Sonobuoy)", 
                        "id": "FLY_TO_POINT_SONOBUOY", 
                        "graphic": "25131001.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Fly-To-Point (Weapon)", 
                        "id": "FLY_TO_POINT_WEAPON", 
                        "graphic": "25131002.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Fly-To-Point (Normal)", 
                        "id": "FLY_TO_POINT_NORMAL", 
                        "graphic": "25131003.svg"
                    }
                ]
            }, 
            {
                "digits": "11", 
                "label": "Linkup Point", 
                "id": "LINKUP_POINT", 
                "graphic": "25131100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Passage Point", 
                "id": "PASSAGE_POINT", 
                "graphic": "25131200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Point of Interest", 
                "id": "POINT_OF_INTEREST", 
                "graphic": "25131300.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Launch Event (Point of Interest)", 
                        "id": "POI_LAUNCH_EVENT", 
                        "graphic": "25131301.svg"
                    }
                ]
            }, 
            {
                "digits": "14", 
                "label": "Rally Point", 
                "id": "RALLY_POINT", 
                "graphic": "25131400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Release Point", 
                "id": "RELEASE_POINT", 
                "graphic": "25131500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Start Point", 
                "id": "START_POINT", 
                "graphic": "25131600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Special Point", 
                "id": "CC_SPECIAL_POINT", 
                "graphic": "25131700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "18", 
                "label": "Waypoint", 
                "id": "CC_WAYPOINT", 
                "graphic": "25131800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "19", 
                "label": "Airfield", 
                "id": "AIRFIELD", 
                "graphic": "25131900.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "14", 
        "label": "Maneuver Lines", 
        "id": "MANEUVER_LINES", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Forward Line of Troops", 
                "id": "FORWARD_LINE_OF_TROOPS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Friendly Present", 
                        "id": "FLOT_FRIENDLY_PRESENT", 
                        "graphic": "25140101.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Friendly Planned or on Order", 
                        "id": "FLOT_FRIENDLY_PLANNED_ON_ORDER", 
                        "graphic": "25140102.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Enemy Known", 
                        "id": "FLOT_ENEMY_KNOWN", 
                        "graphic": "25140103.a.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Enemy Suspected or Templated", 
                        "id": "FLOT_ENEMY_SUSPECTED_TEMPLATED", 
                        "graphic": "25140104.a.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Line of Contact", 
                "id": "LINE_OF_CONTACT", 
                "remarks": "Line of Contact is a doctrinal term and concept for opposing and parallel Forward Lines of Own Troops.  It is not a symbol in its own right.", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Phase Line", 
                "id": "PHASE_LINE", 
                "graphic": "25140300.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Forward Edge of the Battle Area", 
                "id": "FORWARD_EDGE_BATTLE_AREA", 
                "graphic": "25140400.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Proposed or On Order", 
                        "id": "FEBA_PROPOSED_ON_ORDER", 
                        "graphic": "25140401.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "05", 
                "label": "Principal Direction of Fire", 
                "id": "PRINCIPAL_DIRECTION_OF_FIRE", 
                "graphic": "25140500.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Direction of Attack", 
                "id": "DIRECTION_OF_ATTACK", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Friendly Aviation", 
                        "id": "FRIENDLY_AVIATION", 
                        "graphic": "25140601.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Friendly Direction of Main Attack", 
                        "id": "FRIENDLY_MAIN_ATTACK_DECISIVE", 
                        "graphic": "25140602.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Friendly Direction of Supporting Attack", 
                        "id": "FRIENDLY_SUPPORTING_ATTACK", 
                        "graphic": "25140603.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Friendly Planned or On Order", 
                        "id": "FRIENDLY_PLANNED_ON_ORDER", 
                        "graphic": "25140604.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Feint", 
                        "id": "FEINT", 
                        "graphic": "25140605.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Enemy Confirmed", 
                        "id": "ENEMY_CONFIRMED", 
                        "graphic": "25140606.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Enemy Templated or Suspected", 
                        "id": "ENEMY_TEMPLATED_OR_SUSPECTED", 
                        "graphic": "25140607.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "07", 
                "label": "Final Coordination Line", 
                "id": "FINAL_COORDINATION_LINE", 
                "graphic": "25140700.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Infiltration Lane", 
                "id": "INFILTRATION_LANE", 
                "graphic": "25140800.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Limit of Advance", 
                "id": "LIMIT_OF_ADVANCE", 
                "graphic": "25140900.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Line of Departure", 
                "id": "LINE_OF_DEPARTURE", 
                "graphic": "25141000.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Line of Departure/Line of Contact", 
                "id": "LINE_OF_DEPARTURE_LINE_OF_CONTACT", 
                "graphic": "25141100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Probable Line of Deployment", 
                "id": "PROBABLE_LINE_OF_DEPLOYMENT", 
                "graphic": "25141200.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Airhead Line", 
                "id": "AIRHEAD_LINE", 
                "graphic": "25141300.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Bridgehead Line", 
                "id": "BRIDGEHEAD_LINE", 
                "graphic": "25141400.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Holding Line", 
                "id": "HOLDING_LINE", 
                "graphic": "25141500.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Release Line", 
                "id": "RELEASE_LINE", 
                "graphic": "25141600.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Ambush", 
                "id": "AMBUSH", 
                "graphic": "25141700.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "15", 
        "label": "Maneuver Areas", 
        "id": "MANEUVER_AREAS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Area", 
                "id": "AREA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Friendly", 
                        "id": "AREA_FRIENDLY", 
                        "graphic": "25150101.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Friendly Planned or On Order", 
                        "id": "AREA_FRIENDLY_PLANNED_OR_ON_ORDER", 
                        "graphic": "25150102.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Enemy Known or Confirmed", 
                        "id": "AREA_ENEMY_KNOWN_OR_CONFIRMED", 
                        "graphic": "25150103.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Enemy Suspected", 
                        "id": "AREA_ENEMY_SUSPECTED", 
                        "graphic": "25150104.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Assembly Area", 
                "id": "ASSEMBLY_AREA", 
                "graphic": "25150200.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Occupied Assembly Area", 
                "id": "OCCUPIED_ASSEMBLY_AREA", 
                "graphic": "25150300.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Occupied Assembly Area w/ Offset Unit", 
                        "id": "OCCUPIED_AA_OFFSET_UNIT", 
                        "icon": "NA", 
                        "geometryType": "NA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Occupied Assembly Area w/ Offset Units", 
                        "id": "OCCUPIED_AA_OFFSET_UNITS", 
                        "icon": "NA", 
                        "geometryType": "NA"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Proposed or On Order Assembly Area", 
                "id": "AA_PROPOSED_ON_ORDER", 
                "graphic": "25150400.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Action Area", 
                "id": "ACTION_AREA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Joint Tactical Action Area (JTAA)", 
                        "id": "JTAA", 
                        "graphic": "25150501.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Submarine Action Area (SAA)", 
                        "id": "SAA", 
                        "graphic": "25150502.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Submarine-Generated Action Area (SGAA)", 
                        "id": "SGAA", 
                        "graphic": "25150503.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Drop Zone", 
                "id": "DROP_ZONE", 
                "graphic": "25150600.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Extraction Zone", 
                "id": "EXTRACTION_ZONE", 
                "graphic": "25150700.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Landing Zone", 
                "id": "LANDING_ZONE", 
                "graphic": "25150800.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Pick-Up Zone", 
                "id": "PICK_UP_ZONE", 
                "graphic": "25150900.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Fortified Area", 
                "id": "FORTIFIED_AREA", 
                "graphic": "25151000.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Limited Access Area", 
                "id": "LIMITED_ACCESS_AREA", 
                "graphic": "25151100.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Battle Position", 
                "id": "BATTLE_POSITION", 
                "graphic": "25151200.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Battle Position - Planned", 
                        "id": "BP_PLANNED", 
                        "graphic": "25151201.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Battle Position - Prepared (P) but not Occupied", 
                        "id": "PREPARED_BUT_NOT_OCCUPIED", 
                        "graphic": "25151202.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Strong Point", 
                        "id": "STRONG_POINT", 
                        "graphic": "25151203.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Contain", 
                        "id": "CONTAIN", 
                        "graphic": "25151204.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Retain", 
                        "id": "RETAIN", 
                        "graphic": "25151205.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "13", 
                "label": "Engagement Area (EA)", 
                "id": "ENGAGEMENT_AREA_EA", 
                "graphic": "25151300.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Axis of Advance", 
                "id": "AXIS_ADVANCE", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Friendly Airborne/Aviation", 
                        "id": "AXIS_ADVANCE_FRIENDLY_AIRBORNE_AVIATION", 
                        "graphic": "25151401.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Attack Helicopter", 
                        "id": "AXIS_ADVANCE_ATTACK_HELICOPTER", 
                        "graphic": "25151402.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Main Attack", 
                        "id": "AXIS_ADVANCE_MAIN_ATTACK", 
                        "graphic": "25151403.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Supporting Attack", 
                        "id": "AXIS_ADVANCE_SUPPORTING_ATTACK", 
                        "graphic": "25151404.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Supporting Attack Planned or On Order", 
                        "id": "AXIS_ADVANCE_SUPPORTING_ATTACK_PLANNED_ON_ORDER", 
                        "graphic": "25151405.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Feint", 
                        "id": "AXIS_ADVANCE_FEINT", 
                        "graphic": "25151406.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Enemy Confirmed", 
                        "id": "AXIS_ADVANCE_ENEMY_CONFIRMED", 
                        "graphic": "25151407.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Enemy Templated or Suspected", 
                        "id": "AXIS_ADVANCE_ENEMY_TEMPLATED_SUSPECTED", 
                        "graphic": "25151408.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "15", 
                "label": "Assault Position", 
                "id": "ASSAULT_POSITION", 
                "graphic": "25151500.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Attack Position", 
                "id": "ATTACK_POSITION", 
                "graphic": "25151600.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Objective", 
                "id": "OBJECTIVE", 
                "graphic": "25151700.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "18", 
                "label": "Encirclement", 
                "id": "ENCIRCLEMENT", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Friendly", 
                        "id": "FRIENDLY", 
                        "graphic": "25151801.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Enemy", 
                        "id": "ENEMY", 
                        "graphic": "25151802.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "19", 
                "label": "Penetration Box", 
                "id": "PENETRATION_BOX", 
                "graphic": "25151900.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "20", 
                "label": "Attack by Fire Position", 
                "id": "ATTACK_BY_FIRE_POSITION", 
                "graphic": "25152000.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "21", 
                "label": "Support by Fire", 
                "id": "SUPPORT_BY_FIRE", 
                "graphic": "25152100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "22", 
                "label": "Search Area/Reconnaissance Area", 
                "id": "SEARCH_AREA_RECONNAISSANCE_AREA", 
                "graphic": "25152200.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "16", 
        "label": "Maneuver Points", 
        "id": "MANEUVER_POINTS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Observation Post/Outpost (Unspecified)", 
                "id": "OBSERVATION_POST_OUTPOST_UNSPECIFIED", 
                "graphic": "25160100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Observation Post/Outpost (Specified)", 
                "id": "OBSERVATION_POST_OUTPOST_SPECIFIED", 
                "graphic": "25160200.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Reconnaissance Outpost", 
                        "id": "RECONNAISSANCE_OUTPOST", 
                        "graphic": "25160201.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Forward Observer Outpost", 
                        "id": "FORWARD_OBSERVER_OUTPOST", 
                        "graphic": "25160202.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "CBRN Observation Outpost", 
                        "id": "CBRN_OBSERVATION_OUTPOST", 
                        "graphic": "25160203.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Sensor Outpost/Listening Post", 
                        "id": "SENSOR_OUTPOST_LISTENING_POST", 
                        "graphic": "25160204.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Combat Outpost", 
                        "id": "COMBAT_OUTPOST", 
                        "graphic": "25160205.svg"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Target Reference Point", 
                "id": "TARGET_REFERENCE_POINT", 
                "graphic": "25160300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Point of Departure", 
                "id": "POINT_OF_DEPARTURE", 
                "graphic": "25160400.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "17", 
        "label": "Airspace Control (Corridors) Areas", 
        "id": "AIRSPACE_CONTROL_CORRIDORS_AREAS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Air Corridor", 
                "id": "AIR_CORRIDOR", 
                "graphic": "25170100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Low Level Transit Route", 
                "id": "LOW_LEVEL_TRANSIT_ROUTE", 
                "graphic": "25170200.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Minimum-Risk Route", 
                "id": "MINIMUM_RISK_ROUTE", 
                "graphic": "25170300.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Safe Lane", 
                "id": "SAFE_LANE", 
                "graphic": "25170400.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Standard Use Army Aircraft Flight Route", 
                "id": "STANDARD_USE_ARMY_AIRCRAFT_FLIGHT_ROUTE", 
                "graphic": "25170500.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Transit Corridor", 
                "id": "TRANSIT_CORRIDOR", 
                "graphic": "25170600.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Unmanned Aircraft (UA) Route", 
                "id": "UA_ROUTE", 
                "graphic": "25170700.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Base Defense Zone", 
                "id": "BASE_DEFENSE_ZONE", 
                "graphic": "25170800.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "High-Density Airspace Control Zone", 
                "id": "HIGH_DENSITY_AIRSPACE_CONTROL_ZONE", 
                "graphic": "25170900.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Restricted Operations Zone", 
                "id": "RESTRICTED_OPERATIONS_ZONE", 
                "graphic": "25171000.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Air-to-Air Restricted Operating Zone", 
                "id": "AIR_TO_AIR_RESTRICTED_OPERATING_ZONE", 
                "graphic": "25171100.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Unmanned Aircraft Restricted Operating Zone", 
                "id": "UNMANNED_AIRCRAFT_RESTRICTED_OPERATING_ZONE", 
                "graphic": "25171200.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Weapon Engagement Zone", 
                "id": "WEAPON_ENGAGEMENT_ZONE", 
                "graphic": "25171300.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Fighter Engagement Zone", 
                "id": "FIGHTER_ENGAGEMENT_ZONE", 
                "graphic": "25171400.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Joint Engagement Zone", 
                "id": "JOINT_ENGAGEMENT_ZONE", 
                "graphic": "25171500.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Missile Engagement Zone", 
                "id": "MISSILE_ENGAGEMENT_ZONE", 
                "graphic": "25171600.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Low Altitude Missile Engagement Zone", 
                "id": "LOW_ALTITUDE_MISSILE_ENGAGEMENT_ZONE", 
                "graphic": "25171700.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "18", 
                "label": "High Altitude Missile Engagement Zone", 
                "id": "HIGH_ALTITUDE_MISSILE_ENGAGEMENT_ZONE", 
                "graphic": "25171800.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "19", 
                "label": "Short Range Air Defense Engagement Zone", 
                "id": "SHORT_RANGE_AIR_DEFENSE_ENGAGEMENT_ZONE", 
                "graphic": "25171900.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "20", 
                "label": "Weapons Free Zone", 
                "id": "WEAPONS_FREE_ZONE", 
                "graphic": "25172000.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "18", 
        "label": "Airspace Control Points", 
        "id": "AIRSPACE_CONTROL_POINTS", 
        "graphic": "25180000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Air Control Point", 
                "id": "AIR_CONTROL_POINT", 
                "graphic": "25180100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Communications Checkpoint", 
                "id": "COMMUNICATIONS_CHECKPOINT", 
                "graphic": "25180200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Downed Aircrew Pick-Up Point", 
                "id": "DOWNED_AIRCREW_PICK_UP_POINT", 
                "graphic": "25180300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Pop-up Point", 
                "id": "POP_UP_POINT", 
                "graphic": "25180400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Air Control Rendezvous", 
                "id": "AIR_CONTROL_RENDEZVOUS", 
                "graphic": "25180500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "TACAN", 
                "id": "TACAN", 
                "graphic": "25180600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "CAP Station", 
                "id": "CAP_STATION", 
                "graphic": "25180700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "AEW Station", 
                "id": "AEW_STATION", 
                "graphic": "25180800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "ASW (Helo and F/W) Station", 
                "id": "ASW_HELO_FW_STATION", 
                "graphic": "25180900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Strike Initial Point", 
                "id": "STRIKE_INITIAL_POINT", 
                "graphic": "25181000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Replenishment Station", 
                "id": "REPLENISHMENT_STATION", 
                "graphic": "25181100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Tanking", 
                "id": "TANKING", 
                "graphic": "25181200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Antisubmarine Warfare, Rotary Wing", 
                "id": "ANTISUBMARINE_WARFARE_ROTARY_WING", 
                "graphic": "25181300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "SUCAP - Fixed Wing", 
                "id": "SUCAP_FIXED_WING", 
                "graphic": "25181400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "SUCAP - Rotary Wing", 
                "id": "SUCAP_ROTARY_WING", 
                "graphic": "25181500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "MIW - Fixed Wing", 
                "id": "MIW_FIXED_WING", 
                "graphic": "25181600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "MIW - Rotary Wing", 
                "id": "MIW_ROTARY_WING", 
                "graphic": "25181700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "18", 
                "label": "Tomcat", 
                "id": "TOMCAT", 
                "graphic": "25181800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "19", 
                "label": "Rescue", 
                "id": "RESCUE", 
                "graphic": "25181900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "20", 
                "label": "Unmanned Aerial System (UAS/UA)", 
                "id": "UAS_UA", 
                "graphic": "25182000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "21", 
                "label": "VTUA", 
                "id": "VTUA", 
                "graphic": "25182100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "22", 
                "label": "Orbit", 
                "id": "ORBIT", 
                "graphic": "25182200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "23", 
                "label": "Orbit - Figure Eight", 
                "id": "ORBIT_FIGURE_EIGHT", 
                "graphic": "25182300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "24", 
                "label": "Orbit - Race Track", 
                "id": "ORBIT_RACE_TRACK", 
                "graphic": "25182400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "25", 
                "label": "Orbit - Random Closed", 
                "id": "ORBIT_RANDOM_CLOSED", 
                "graphic": "25182500.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "19", 
        "label": "Airspace Control Lines", 
        "id": "AIRSPACE_CONTROL_LINES", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Identification Friend or Foe Off Line", 
                "id": "IFF_OFF_LINE", 
                "graphic": "25190100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Identification Friend or Foe On Line", 
                "id": "IFF_ON_LINE", 
                "graphic": "25190200.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "20", 
        "label": "Maritime Control Areas", 
        "id": "MARITIME_CONTROL_AREAS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Launch Area", 
                "id": "LAUNCH_AREA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Ellipse/Circle", 
                        "id": "LAUNCH_ELLIPSE_CIRCLE", 
                        "graphic": "25200101.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Defended Area", 
                "id": "DEFENDED_AREA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Ellipse/Circle", 
                        "id": "DEFEND_ELLIPSE_CIRCLE", 
                        "graphic": "25200201.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangle", 
                        "id": "DEFEND_RECTANGLE", 
                        "graphic": "25200202.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "No Attack (NOTACK) Zone", 
                "id": "NOTACK_ZONE", 
                "graphic": "25200300.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Ship Area of Interest", 
                "id": "SHIP_AREA_OF_INTEREST", 
                "graphic": "25200400.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Ellipse/Circle", 
                        "id": "SHIP_AOI_ELLIPSE_CIRCLE", 
                        "graphic": "25200401.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangle", 
                        "id": "SHIP_AOI_RECTANGLE", 
                        "graphic": "25200402.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "05", 
                "label": "Active Maneuver Area", 
                "id": "ACTIVE_MANEUVER_AREA", 
                "graphic": "25200500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Cued Acquisition Doctrine", 
                "id": "CUED_ACQUISITION_DOCTRINE", 
                "graphic": "25200600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Radar Search Doctrine", 
                "id": "RADAR_SEARCH_DOCTRINE", 
                "graphic": "25200700.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "21", 
        "label": "Maritime Control Points", 
        "id": "MARITIME_CONTROL_POINTS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Plan Ship", 
                "id": "PLAN_SHIP", 
                "graphic": "25210100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Aim Point", 
                "id": "AIM_POINT", 
                "graphic": "25210200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Defended Asset", 
                "id": "DEFENDED_ASSET", 
                "graphic": "25210300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Drop Point", 
                "id": "DROP_POINT", 
                "graphic": "25210400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Entry Point", 
                "id": "ENTRY_POINT", 
                "graphic": "25210500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Air Detonation", 
                "id": "AIR_DETONATION", 
                "graphic": "25210600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Ground Zero", 
                "id": "GROUND_ZERO", 
                "graphic": "25210700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Impact Point", 
                "id": "IMPACT_POINT", 
                "graphic": "25210800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Predicted Impact Point", 
                "id": "PREDICTED_IMPACT_POINT", 
                "graphic": "25210900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Launched Torpedo", 
                "id": "LAUNCHED_TORPEDO", 
                "graphic": "25211000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Missile Detection Point", 
                "id": "MISSILE_DETECTION_POINT", 
                "graphic": "25211100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Acoustic Countermeasure (Decoy)", 
                "id": "ACOUSTIC_COUNTERMEASURE_DECOY", 
                "graphic": "25211200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Electronic Countermeasures (ECM) Decoy", 
                "id": "ECM_DECOY", 
                "graphic": "25211300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Brief Contact", 
                "id": "BRIEF_CONTACT", 
                "graphic": "25211400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Datum Lost Contact", 
                "id": "DATUM_LOST_CONTACT", 
                "graphic": "25211500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "BT Buoy Drop", 
                "id": "BT_BUOY_DROP", 
                "graphic": "25211600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Reported Bottom Sub", 
                "id": "REPORTED_BOTTOM_SUB", 
                "graphic": "25211700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "18", 
                "label": "Moving Haven", 
                "id": "MOVING_HAVEN", 
                "graphic": "25211800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "19", 
                "label": "Screen Center", 
                "id": "SCREEN_CENTER", 
                "graphic": "25211900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "20", 
                "label": "Lost Contact", 
                "id": "LOST_CONTACT", 
                "graphic": "25212000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "21", 
                "label": "Sinker", 
                "id": "SINKER", 
                "graphic": "25212100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "22", 
                "label": "Trial Track", 
                "id": "TRIAL_TRACK", 
                "graphic": "25212200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "23", 
                "label": "Acoustic Fix", 
                "id": "ACOUSTIC_FIX", 
                "graphic": "25212300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "24", 
                "label": "Electromagnetic Fix", 
                "id": "ELECTROMAGNETIC_FIX", 
                "graphic": "25212400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "25", 
                "label": "Electromagnetic - Magnetic Anomaly Detection (MAD)", 
                "id": "ELECTROMAGNETIC_MAD", 
                "graphic": "25212500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "26", 
                "label": "Optical Fix", 
                "id": "OPTICAL_FIX", 
                "graphic": "25212600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "27", 
                "label": "Formation", 
                "id": "FORMATION", 
                "graphic": "25212700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "28", 
                "label": "Harbor", 
                "id": "HARBOR", 
                "graphic": "25212800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "29", 
                "label": "Harbor Entrance Point", 
                "id": "HARBOR_ENTRANCE_POINT", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "A", 
                        "id": "A", 
                        "graphic": "25212901.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Q", 
                        "id": "Q", 
                        "graphic": "25212902.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "X", 
                        "id": "X", 
                        "graphic": "25212903.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Y", 
                        "id": "Y", 
                        "graphic": "25212904.svg"
                    }
                ]
            }, 
            {
                "digits": "30", 
                "label": "Dip Position", 
                "id": "DIP_POSITION", 
                "graphic": "25213000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "31", 
                "label": "Search", 
                "id": "SEARCH", 
                "graphic": "25213100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "32", 
                "label": "Search Area", 
                "id": "SEARCH_AREA", 
                "graphic": "25213200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "33", 
                "label": "Search Center", 
                "id": "SEARCH_CENTER", 
                "graphic": "25213300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "34", 
                "label": "Navigational Reference Point", 
                "id": "SEARCH_NAVIGATIONAL_REFERENCE_POINT", 
                "graphic": "25213400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "35", 
                "label": "Sonobuoy", 
                "id": "SONOBUOY", 
                "graphic": "25213500.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Ambient Noise", 
                        "id": "AMBIENT_NOISE", 
                        "graphic": "25213501.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Air Transportable Communication", 
                        "id": "AIR_TRANSPORTABLE_COMMUNICATION", 
                        "graphic": "25213502.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Barra", 
                        "id": "BARRA", 
                        "graphic": "25213503.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Bathythermograph Transmitting", 
                        "id": "BATHYTHERMOGRAPH_TRANSMITTING", 
                        "graphic": "25213504.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Command Active Multi-Beam (CAMBS)", 
                        "id": "CAMBS", 
                        "graphic": "25213505.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Command Active Sonobuoy Directional Command Active Sonobuoy System (CASS)", 
                        "id": "CASS", 
                        "graphic": "25213506.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Digital Frequency Analysis and Recording (DIFAR)", 
                        "id": "DIFAR", 
                        "graphic": "25213507.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Directional Command Active Sonobuoy System (DICASS)", 
                        "id": "DICASS", 
                        "graphic": "25213508.svg"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Expendable Reliable Acoustic Path Sonobuoy (ERAPS)", 
                        "id": "ERAPS", 
                        "graphic": "25213509.svg"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Expired", 
                        "id": "EXPIRED", 
                        "graphic": "25213510.svg"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Kingpin", 
                        "id": "KINGPIN", 
                        "graphic": "25213511.svg"
                    }, 
                    {
                        "digits": "12", 
                        "label": "Low Frequency Analysis and Recording (LOFAR)", 
                        "id": "LOFAR", 
                        "graphic": "25213512.svg"
                    }, 
                    {
                        "digits": "13", 
                        "label": "Pattern Center", 
                        "id": "PATTERN_CENTER", 
                        "graphic": "25213513.svg"
                    }, 
                    {
                        "digits": "14", 
                        "label": "Range Only", 
                        "id": "RANGE_ONLY", 
                        "graphic": "25213514.svg"
                    }, 
                    {
                        "digits": "15", 
                        "label": "Vertical Line Array Directional Frequency Analysis and Recording (DIFAR)", 
                        "id": "VERTICAL_LINE_ARRAY_DIRECTIONAL_FREQUENCY_ANALYSIS_RECORDING_DIFAR", 
                        "graphic": "25213515.svg"
                    }
                ]
            }, 
            {
                "digits": "36", 
                "label": "Reference Point", 
                "id": "REFERENCE_POINT", 
                "graphic": "25213600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "37", 
                "label": "Special Point", 
                "id": "MARITIME_SPECIAL_POINT", 
                "graphic": "25213700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "38", 
                "label": "Navigational Reference Point", 
                "id": "NAVIGATIONAL_REFERENCE_POINT", 
                "graphic": "25213800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "39", 
                "label": "Data Link Reference Point", 
                "id": "DATA_LINK_REFERENCE_POINT", 
                "graphic": "25213900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "40", 
                "label": "Forward Observer / Spotter Position", 
                "id": "FORWARD_OBSERVER_SPOTTER_POSITION", 
                "graphic": "25214000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "41", 
                "label": "Vital Area Center", 
                "id": "VITAL_AREA_CENTER", 
                "graphic": "25214100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "42", 
                "label": "Corridor Tab Point", 
                "id": "CORRIDOR_TAB_POINT", 
                "graphic": "25214200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "43", 
                "label": "Enemy Point", 
                "id": "ENEMY_POINT", 
                "graphic": "25214300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "44", 
                "label": "Marshall Point", 
                "id": "MARSHALL_POINT", 
                "graphic": "25214400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "45", 
                "label": "Position and Intended Movement (PIM)", 
                "id": "POSITION_INTENDED_MOVEMENT_PIM", 
                "graphic": "25214500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "46", 
                "label": "Pre-Landfall Waypoint", 
                "id": "PRE_LANDFALL_WAYPOINT", 
                "graphic": "25214600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "47", 
                "label": "Estimated Position (EP)", 
                "id": "ESTIMATED_POSITION_EP", 
                "graphic": "25214700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "48", 
                "label": "Waypoint", 
                "id": "MARITIME_WAYPOINT", 
                "graphic": "25214800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "49", 
                "label": "General Subsurface Station", 
                "id": "GENERAL_SUBSURFACE_STATION", 
                "graphic": "25214900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "50", 
                "label": "Submarine Subsurface Station", 
                "id": "SUBMARINE_SUBSURFACE_STATION", 
                "graphic": "25215000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "51", 
                "label": "Submarine Antisubmarine Warfare Subsurface Station", 
                "id": "SUBMARINE_ANTISUBMARINE_WARFARE_SUBSURFACE_STATION", 
                "graphic": "25215100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "52", 
                "label": "Unmanned Underwater Vehicle Subsurface Station", 
                "id": "UNMANNED_UNDERWATER_VEHICLE_SUBSURFACE_STATION", 
                "graphic": "25215200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "53", 
                "label": "Antisubmarine Warfare (ASW) Unmanned Underwater Vehicle Subsurface Station", 
                "id": "ASW_UNMANNED_UNDERWATER_VEHICLE_SUBSURFACE_STATION", 
                "graphic": "25215300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "54", 
                "label": "Mine Warfare Unmanned Underwater Vehicle Subsurface Station", 
                "id": "MINE_WARFARE_UNMANNED_UNDERWATER_VEHICLE_SUBSURFACE_STATION", 
                "graphic": "25215400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "55", 
                "label": "Surface Warfare Unmanned Underwater Vehicle Subsurface Station", 
                "id": "SURFACE_WARFARE_UNMANNED_UNDERWATER_VEHICLE_SUBSURFACE_STATION", 
                "graphic": "25215500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "56", 
                "label": "General Surface Station", 
                "id": "GENERAL_SURFACE_STATION", 
                "graphic": "25215600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "57", 
                "label": "Antisubmarine Warfare (ASW) Surface Station", 
                "id": "ASW_SURFACE_STATION", 
                "graphic": "25215700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "58", 
                "label": "Mine Warfare Surface Station", 
                "id": "MINE_WARFARE_SURFACE_STATION", 
                "graphic": "25215800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "59", 
                "label": "Non-Combatant Surface Station", 
                "id": "NON_COMBATANT_SURFACE_STATION", 
                "graphic": "25215900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "60", 
                "label": "Picket Surface Station", 
                "id": "PICKET_SURFACE_STATION", 
                "graphic": "25216000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "61", 
                "label": "Rendezvous Surface Station", 
                "id": "RENDEZVOUS_SURFACE_STATION", 
                "graphic": "25216100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "62", 
                "label": "Replenishment at Sea Surface Station", 
                "id": "REPLENISHMENT_SEA_SURFACE_STATION", 
                "graphic": "25216200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "63", 
                "label": "Rescue Surface Station", 
                "id": "RESCUE_SURFACE_STATION", 
                "graphic": "25216300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "64", 
                "label": "Surface Warfare Surface Station", 
                "id": "SURFACE_WARFARE_SURFACE_STATION", 
                "graphic": "25216400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "65", 
                "label": "Unmanned Underwater Vehicle Surface Station", 
                "id": "UNMANNED_UNDERWATER_VEHICLE_SURFACE_STATION", 
                "graphic": "25216500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "66", 
                "label": "Antisubmarine Warfare (ASW) Unmanned Underwater Vehicle Surface Station", 
                "id": "ASW_UNMANNED_UNDERWATER_VEHICLE_SURFACE_STATION", 
                "graphic": "25216600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "67", 
                "label": "Mine Warfare Unmanned Underwater Vehicle Surface Station", 
                "id": "MINE_WARFARE_UNMANNED_UNDERWATER_VEHICLE_SURFACE_STATION", 
                "graphic": "25216700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "68", 
                "label": "Remote Multi-Mission Vehicle Mine Warfare Unmanned Underwater", 
                "id": "REMOTE_MULTI_MISSION_VEHICLE_MINE_WARFARE_UNMANNED_UNDERWATER", 
                "graphic": "25216800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "69", 
                "label": "Surface Warfare Mine Warfare Unmanned Underwater Vehicle", 
                "id": "SURFACE_WARFARE_MINE_WARFARE_UNMANNED_UNDERWATER_VEHICLE", 
                "graphic": "25216900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "70", 
                "label": "Shore Control Station", 
                "id": "SHORE_CONTROL_STATION", 
                "graphic": "25217000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "71", 
                "label": "General Route", 
                "id": "GENERAL_ROUTE", 
                "graphic": "25217100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "72", 
                "label": "Diversion Route", 
                "id": "DIVERSION_ROUTE", 
                "graphic": "25217200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "73", 
                "label": "Position and Intended Movement (PIM) Route", 
                "id": "PIM_ROUTE", 
                "graphic": "25217300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "74", 
                "label": "Picket Route", 
                "id": "PICKET_ROUTE", 
                "graphic": "25217400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "75", 
                "label": "Point R Route", 
                "id": "POINT_R_ROUTE", 
                "graphic": "25217500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "76", 
                "label": "Rendezvous Route", 
                "id": "RENDEZVOUS_ROUTE", 
                "graphic": "25217600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "77", 
                "label": "Waypoint Route", 
                "id": "WAYPOINT_ROUTE", 
                "graphic": "25217700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "78", 
                "label": "Clutter-Stationary or Cease Reporting", 
                "id": "CLUTTER_STATIONARY_CEASE_REPORTING", 
                "graphic": "25217800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "79", 
                "label": "Tentative or Provisional Track", 
                "id": "TENTATIVE_PROVISIONAL_TRACK", 
                "graphic": "25217900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "80", 
                "label": "Distressed Vessel", 
                "id": "DISTRESSED_VESSEL", 
                "graphic": "25218000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "81", 
                "label": "Ditched Aircraft/Downed Aircraft", 
                "id": "DITCHED_AIRCRAFT_DOWNED_AIRCRAFT", 
                "graphic": "25218100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "82", 
                "label": "Person in Water/Bailout", 
                "id": "PERSON_IN_WATER_BAILOUT", 
                "graphic": "25218200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "83", 
                "label": "Iceberg", 
                "id": "ICEBERG", 
                "graphic": "25218300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "84", 
                "label": "Navigational", 
                "id": "NAVIGATIONAL", 
                "graphic": "25218400.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "85", 
                "label": "Oil Rig", 
                "id": "OIL_RIG", 
                "graphic": "25218500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "86", 
                "label": "Sea Mine-Like", 
                "id": "SEA_MINE_LIKE", 
                "graphic": "25218600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "87", 
                "label": "Bottom Return/Non-Mine Like Bottom Object (NOMBO)", 
                "id": "BOTTOM_RETURN_NOMBO", 
                "graphic": "25218700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "88", 
                "label": "Bottom Return/Non-Mine Like Bottom Object (NOMBO)/Installation Manmade", 
                "id": "BOTTOM_RETURN_NOMBO_INSTALLATION_MANMADE", 
                "graphic": "25218800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "89", 
                "label": "Marine Life", 
                "id": "MARINE_LIFE", 
                "graphic": "25218900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "90", 
                "label": "Sea Anomaly (Wake-Current-Knuckle)", 
                "id": "SEA_ANOMALY_WAKE_CURRENT_KNUCKLE", 
                "graphic": "25219000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "91", 
                "label": "Bottom Return/Non-MILCO-Wreck-Dangerous", 
                "id": "BOTTOM_RETURN_NON_MILCO_WRECK_DANGEROUS", 
                "graphic": "25219100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "92", 
                "label": "Bottom Return/Non-MILCO-Wreck-Non Dangerous", 
                "id": "BOTTOM_RETURN_NON_MILCO_WRECK_NON_DANGEROUS", 
                "graphic": "25219200.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "22", 
        "label": "Maritime Control Lines", 
        "id": "MARITIME_CONTROL_LINES", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Bearing Line", 
                "id": "BEARING_LINE", 
                "graphic": "25220100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Electronic", 
                        "id": "ELECTRONIC", 
                        "graphic": "25220101.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Electronic Warfare (EW)", 
                        "id": "ELECTRONIC_WARFARE_EW", 
                        "graphic": "25220102.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Acoustic", 
                        "id": "ACOUSTIC", 
                        "graphic": "25220103.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Acoustic (Ambiguous)", 
                        "id": "ACOUSTIC_AMBIGUOUS", 
                        "graphic": "25220104.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Torpedo", 
                        "id": "TORPEDO", 
                        "graphic": "25220105.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Electro-Optical Intercept", 
                        "id": "ELECTRO_OPTICAL_INTERCEPT", 
                        "graphic": "25220106.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Jammer", 
                        "id": "JAMMER", 
                        "graphic": "25220107.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Radio Direction Finder (RDF)", 
                        "id": "RADIO_DIRECTION_FINDER_RDF", 
                        "graphic": "25220108.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "23", 
        "label": "Deception", 
        "id": "DECEPTION", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Decoy/Dummy", 
                "id": "DECOY_DUMMY", 
                "graphic": "25230100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Decoy/Dummy/Feint", 
                "id": "DECOY_DUMMY_FEINT", 
                "graphic": "25230200.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "24", 
        "label": "Fires Areas", 
        "id": "FIRES_AREAS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Airspace Coordination Area", 
                "id": "AIRSPACE_COORDINATION_AREA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "ACA_IRREGULAR", 
                        "graphic": "25240101.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "ACA_RECTANGULAR", 
                        "graphic": "25240102.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "ACA_CIRCULAR", 
                        "graphic": "25240103.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Free Fire Area", 
                "id": "FREE_FIRE_AREA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "FFA_IRREGULAR", 
                        "graphic": "25240201.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "FFA_RECTANGULAR", 
                        "graphic": "25240202.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "FFA_CIRCULAR", 
                        "graphic": "25240203.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "No Fire Area", 
                "id": "NO_FIRE_AREA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "NFA_IRREGULAR", 
                        "graphic": "25240301.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "NFA_RECTANGULAR", 
                        "graphic": "25240302.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "NFA_CIRCULAR", 
                        "graphic": "25240303.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Restricted Fire Area", 
                "id": "RESTRICTED_FIRE_AREA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "RFA_IRREGULAR", 
                        "graphic": "25240401.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "RFA_RECTANGULAR", 
                        "graphic": "25240402.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "RFA_CIRCULAR", 
                        "graphic": "25240403.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "05", 
                "label": "Position Area For Artillery (PAA)", 
                "id": "POSITION_AREA_FOR_ARTILLERY_PAA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Rectangular", 
                        "id": "PAA_RECTANGULAR", 
                        "graphic": "25240501.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Circular", 
                        "id": "PAA_CIRCULAR", 
                        "graphic": "25240502.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Point Targets", 
                "id": "POINT_TARGETS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Point or Single Target", 
                        "id": "POINT_SINGLE_TARGET", 
                        "graphic": "25240601.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Nuclear Target", 
                        "id": "NUCLEAR_TARGET", 
                        "graphic": "25240602.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Target-Recorded", 
                        "id": "TARGET_RECORDED", 
                        "graphic": "25240603.svg"
                    }
                ]
            }, 
            {
                "digits": "07", 
                "label": "Linear Targets", 
                "id": "LINEAR_TARGETS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Linear Target", 
                        "id": "LINEAR_TARGET", 
                        "graphic": "25240701.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Linear Smoke Target", 
                        "id": "LINEAR_SMOKE_TARGET", 
                        "graphic": "25240702.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Final Protective Fire (FPF)", 
                        "id": "FINAL_PROTECTIVE_FIRE_FPF", 
                        "graphic": "25240703.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "08", 
                "label": "Area Targets", 
                "id": "AREA_TARGETS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Area Target", 
                        "id": "AREA_TARGET", 
                        "graphic": "25240801.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular Target", 
                        "id": "RECTANGULAR_TARGET", 
                        "graphic": "25240802.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular Target", 
                        "id": "CIRCULAR_TARGET", 
                        "graphic": "25240803.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Rectangular Target - Single Target", 
                        "id": "RECTANGULAR_TARGET_SINGLE_TARGET", 
                        "graphic": "25240804.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Series of Targets", 
                        "id": "SERIES_GROUP_TARGETS", 
                        "graphic": "25240805.a.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Smoke Target", 
                        "id": "SMOKE_TARGET", 
                        "graphic": "25240806.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Smoke Planned or On Order", 
                        "id": "SMOKE_PLANNED_ON_ORDER", 
                        "graphic": "25240807.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Bomb Area", 
                        "id": "BOMB_AREA", 
                        "graphic": "25240808.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "09", 
                "label": "Fire Support Station", 
                "id": "FIRE_SUPPORT_STATION", 
                "graphic": "25240900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Fire Support Area", 
                "id": "FIRE_SUPPORT_AREA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "FSA_IRREGULAR", 
                        "graphic": "25241001.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "FSA_RECTANGULAR", 
                        "graphic": "25241002.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "FSA_CIRCULAR", 
                        "graphic": "25241003.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "11", 
                "label": "Artillery Target Intelligence Zone", 
                "id": "ARTILLERY_TARGET_INTELLIGENCE_ZONE", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "ATI_IRREGULAR", 
                        "graphic": "25241101.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "ATI_RECTANGULAR", 
                        "graphic": "25241102.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "ATI_CIRCULAR", 
                        "graphic": "25241103.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "12", 
                "label": "Call for Fire Zone (CFFZ)", 
                "id": "CALL_FOR_FIRE_AREA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "CFFZ_IRREGULAR", 
                        "graphic": "25241201.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "CFFZ_RECTANGULAR", 
                        "graphic": "25241202.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "CFFZ_CIRCULAR", 
                        "graphic": "25241203.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "13", 
                "label": "Censor Zone", 
                "id": "CENSOR_ZONE", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "CENSOR_IRREGULAR", 
                        "graphic": "25241301.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "CENSOR_RECTANGULAR", 
                        "graphic": "25241302.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "CENSOR_CIRCULAR", 
                        "graphic": "25241303.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "14", 
                "label": "Critical Friendly Zone", 
                "id": "CRITICAL_FRIENDLY_ZONE", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "CFZ_IRREGULAR", 
                        "graphic": "25241401.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "CFZ_RECTANGULAR", 
                        "graphic": "25241402.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "CFZ_CIRCULAR", 
                        "graphic": "25241403.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "15", 
                "label": "Dead Space Area", 
                "id": "DEAD_SPACE_AREA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "DA_IRREGULAR", 
                        "graphic": "25241501.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "DA_RECTANGULAR", 
                        "graphic": "25241502.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "DA_CIRCULAR", 
                        "graphic": "25241503.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "16", 
                "label": "Sensor Zone", 
                "id": "SENSOR_ZONE", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "SENSOR_ZONE_IRREGULAR", 
                        "graphic": "25241601.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "SENSOR_ZONE_RECTANGULAR", 
                        "graphic": "25241602.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "SENSOR_ZONE_CIRCULAR", 
                        "graphic": "25241603.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "17", 
                "label": "Target Build-up Area", 
                "id": "TARGET_BUILD_UP_AREA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "TBA_IRREGULAR", 
                        "graphic": "25241701.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "TBA_RECTANGULAR", 
                        "graphic": "25241702.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "TBA_CIRCULAR", 
                        "graphic": "25241703.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "18", 
                "label": "Target Value Area", 
                "id": "TARGET_VALUE_AREA", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "TVAR_IRREGULAR", 
                        "graphic": "25241801.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "TVAR_RECTANGULAR", 
                        "graphic": "25241802.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "TVAR_CIRCULAR", 
                        "graphic": "25241803.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "19", 
                "label": "Zone of Responsibility", 
                "id": "ZONE_OF_RESPONSIBILITY", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular", 
                        "id": "ZOR_IRREGULAR", 
                        "graphic": "25241901.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular", 
                        "id": "ZOR_RECTANGULAR", 
                        "graphic": "25241902.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular", 
                        "id": "ZOR_CIRCULAR", 
                        "graphic": "25241903.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "20", 
                "label": "Terminally Guided Munition Footprint (TGMF)", 
                "id": "TERMINALLY_GUIDED_MUNITION_FOOTPRINT_TGMF", 
                "graphic": "25242000.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "21", 
                "label": "Weapon/Sensor Range fan-Circular", 
                "id": "WEAPON_SENSOR_RANGE_FAN_CIRCULAR", 
                "graphic": "25242100.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "22", 
                "label": "Weapon/Sensor Range fan-Sector", 
                "id": "WEAPON_SENSOR_RANGE_FAN_SECTOR", 
                "graphic": "25242200.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "23", 
                "label": "Kill Box", 
                "id": "KILL_BOX", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Irregular-Blue", 
                        "id": "BKB_IRREGULAR_BLUE", 
                        "graphic": "25242301.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rectangular-Blue", 
                        "id": "BKB_RECTANGULAR_BLUE", 
                        "graphic": "25242302.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Circular-Blue", 
                        "id": "BKB_CIRCULAR_BLUE", 
                        "graphic": "25242303.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Irregular-Purple", 
                        "id": "PKB_IRREGULAR_PURPLE", 
                        "graphic": "25242304.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Rectangular-Purple", 
                        "id": "PKB_RECTANGULAR_PURPLE", 
                        "graphic": "25242305.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Circular-Purple", 
                        "id": "PKB_CIRCULAR_PURPLE", 
                        "graphic": "25242306.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "25", 
        "label": "Fires Points", 
        "id": "FIRES_POINTS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Firing Point", 
                "id": "FIRING_POINT", 
                "graphic": "25250100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Hide Point", 
                "id": "HIDE_POINT", 
                "graphic": "25250200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Launch Point", 
                "id": "LAUNCH_POINT", 
                "graphic": "25250300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Reload Point", 
                "id": "RELOAD_POINT", 
                "graphic": "25250400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Survey Control Point", 
                "id": "SURVEY_CONTROL_POINT", 
                "graphic": "25250500.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "26", 
        "label": "Fire Lines", 
        "id": "FIRE_LINES", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Fire Support Coordination Line (FSCL)", 
                "id": "FIRE_SUPPORT_COORDINATION_LINE_FSCL", 
                "graphic": "25260100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Coordinated Fire Line (CFL)", 
                "id": "COORDINATED_FIRE_LINE_CFL", 
                "graphic": "25260200.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "No Fire Line", 
                "id": "NO_FIRE_LINE", 
                "graphic": "25260300.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Battlefield Coordination Line", 
                "id": "BATTLEFIELD_COORDINATION_LINE", 
                "graphic": "25260400.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Restrictive Fire Line", 
                "id": "RESTRICTIVE_FIRE_LINE", 
                "graphic": "25260500.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Munition Flight Path", 
                "id": "MUNITION_FLIGHT_PATH", 
                "graphic": "25260600.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "27", 
        "label": "Protection Areas", 
        "id": "PROTECTION_AREAS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Obstacle Belt", 
                "id": "OBSTACLE_BELT", 
                "graphic": "25270100.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Obstacle Zone", 
                "id": "OBSTACLE_ZONE", 
                "graphic": "25270200.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Obstacle Free Zone", 
                "id": "OBSTACLE_FREE_ZONE", 
                "graphic": "25270300.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Obstacle Restricted Zone", 
                "id": "OBSTACLE_RESTRICTED_ZONE", 
                "graphic": "25270400.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Obstacle Effects", 
                "id": "OBSTACLE_EFFECTS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Block", 
                        "id": "BLOCK", 
                        "graphic": "25270501.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Disrupt", 
                        "id": "DISRUPT", 
                        "graphic": "25270502.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Fix", 
                        "id": "FIX", 
                        "graphic": "25270503.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Turn", 
                        "id": "TURN", 
                        "graphic": "25270504.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Obstacle Bypass", 
                "id": "OBSTACLE_BYPASS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Easy", 
                        "id": "OBSTACLE_BYPASS_EASY", 
                        "graphic": "25270601.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Difficult", 
                        "id": "OBSTACLE_BYPASS_DIFFICULT", 
                        "graphic": "25270602.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Impossible", 
                        "id": "OBSTACLE_BYPASS_IMPOSSIBLE", 
                        "graphic": "25270603.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "07", 
                "label": "Minefield", 
                "id": "MINEFIELD", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Completed", 
                        "id": "MINEFIELD_COMPLETED", 
                        "graphic": "25270701.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Planned", 
                        "id": "MINEFIELD_PLANNED", 
                        "graphic": "25270702.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Known Enemy", 
                        "id": "MINEFIELD_KNOWN_ENEMY", 
                        "graphic": "25270703.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Suspected or Templated Enemy", 
                        "id": "MINEFIELD_SUSPECTED_OR_TEMPLATED_ENEMY", 
                        "graphic": "25270704.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Dummy", 
                        "id": "MINEFIELD_DUMMY", 
                        "graphic": "25270705.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Dummy Minefield, Dymanic", 
                        "id": "MINEFIELD_DUMMY_DYMANIC", 
                        "graphic": "25270706.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Dynamic Depiction", 
                        "id": "MINEFIELD_DYNAMIC_DEPICTION", 
                        "graphic": "25270707.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "08", 
                "label": "Mined Area", 
                "id": "MINED_AREA", 
                "graphic": "25270800.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Decoy Mined Area", 
                "id": "DECOY_MINED_AREA", 
                "graphic": "25270900.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Fenced", 
                        "id": "FENCED", 
                        "graphic": "25270901.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "10", 
                "label": "Unexploded Explosive Ordnance (UXO) Area", 
                "id": "UXO_AREA", 
                "graphic": "25271000.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Bridge or Gap", 
                "id": "BRIDGE_OR_GAP", 
                "graphic": "25271100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Roadblocks, Craters and Blown Bridges", 
                "id": "ROADBLOCKS_CRATERS_BLOWN_BRIDGES", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Planned", 
                        "id": "PLANNED", 
                        "graphic": "25271201.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Explosives-State of Readiness 1 (Safe)", 
                        "id": "EXPLOSIVES_STATE_OF_READINESS_1", 
                        "graphic": "25271202.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Explosives-State of Readiness 2 (armed but passable)", 
                        "id": "EXPLOSIVES_STATE_OF_READINESS_2", 
                        "graphic": "25271203.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Roadblock Complete (Executed)", 
                        "id": "ROADBLOCK_COMPLETE_EXECUTED", 
                        "graphic": "25271204.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "13", 
                "label": "Assault Crossing", 
                "id": "ASSAULT_CROSSING", 
                "graphic": "25271300.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Bridge", 
                "id": "BRIDGE", 
                "graphic": "25271400.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Ford Easy", 
                "id": "FORD_EASY", 
                "graphic": "25271500.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Ford Difficult", 
                "id": "FORD_DIFFICULT", 
                "graphic": "25271600.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Biological Contaminated Area", 
                "id": "BIOLOGICAL_CONTAMINATED_AREA", 
                "graphic": "25271700.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Toxic Industrial Material", 
                        "id": "BIO_TOXIC_INDUSTRIAL_MATERIAL", 
                        "graphic": "25271701.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "18", 
                "label": "Chemical Contaminated Area", 
                "id": "CHEMICAL_CONTAMINATED_AREA", 
                "graphic": "25271800.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Toxic Industrial Material", 
                        "id": "CHEM_TOXIC_INDUSTRIAL_MATERIAL", 
                        "graphic": "25271801.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "19", 
                "label": "Nuclear Contaminated Area", 
                "id": "NUCLEAR_CONTAMINATED_AREA", 
                "graphic": "25271900.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "20", 
                "label": "Radiological Contaminated Area", 
                "id": "RADIOLOGICAL_CONTAMINATED_AREA", 
                "graphic": "25272000.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Toxic Industrial Material", 
                        "id": "RAD_TOXIC_INDUSTRIAL_MATERIAL", 
                        "graphic": "25272001.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "21", 
                "label": "Minimum Safe Distance Zone", 
                "id": "MINIMUM_SAFE_DISTANCE_ZONE", 
                "graphic": "25272100.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "22", 
                "label": "Radiation Dose Rate Contour Lines", 
                "id": "RADIATION_DOSE_RATE_CONTOUR_LINES", 
                "graphic": "25272200.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "28", 
        "label": "Protection Points", 
        "id": "PROTECTION_POINTS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Abatis", 
                "id": "ABATIS", 
                "graphic": "25280100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Antipersonnel Mine", 
                "id": "ANTIPERSONNEL_MINE", 
                "graphic": "25280200.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Antipersonnel Mine with Directional Effects", 
                        "id": "ANTIPERSONNEL_MINE_WITH_DIRECTIONAL_EFFECTS", 
                        "graphic": "25280201.svg"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Antitank Mine", 
                "id": "ANTITANK_MINE", 
                "graphic": "25280300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Antitank Mine with Anti-handling Device", 
                "id": "ANTITANK_MINE_ANTIHANDLING", 
                "graphic": "25280400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Wide Area Antitank Mine", 
                "id": "WIDE_AREA_ANTITANK_MINE", 
                "graphic": "25280500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Unspecified Mine", 
                "id": "UNSPECIFIED_MINE", 
                "graphic": "25280600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Booby Trap", 
                "id": "BOOBY_TRAP", 
                "graphic": "25280700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Engineer Regulating Point", 
                "id": "ENGINEER_REGULATING_POINT", 
                "graphic": "25280800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Shelter", 
                "id": "SHELTER", 
                "graphic": "25280900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Shelter Above Ground", 
                "id": "SHELTER_ABOVE_GROUND", 
                "graphic": "25281000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Below Ground Shelter", 
                "id": "BELOW_GROUND_SHELTER", 
                "graphic": "25281100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Fort", 
                "id": "FORT", 
                "graphic": "25281200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Chemical Event", 
                "id": "CHEMICAL_EVENT", 
                "graphic": "25281300.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Toxic Industrial Material", 
                        "id": "CHEM_TOXIC_INDUSTRIAL_MATERIAL_POINT", 
                        "graphic": "25281301.svg"
                    }
                ]
            }, 
            {
                "digits": "14", 
                "label": "Biological Event", 
                "id": "BIOLOGICAL_EVENT", 
                "graphic": "25281400.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Toxic Industrial Material", 
                        "id": "BIO_TOXIC_INDUSTRIAL_MATERIAL_POINT", 
                        "graphic": "25281401.svg"
                    }
                ]
            }, 
            {
                "digits": "15", 
                "label": "Nuclear Event", 
                "id": "NUCLEAR_EVENT", 
                "graphic": "25281500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Nuclear Fallout Producing Event", 
                "id": "NUCLEAR_FALLOUT_PRODUCING_EVENT", 
                "graphic": "25281600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Radiological", 
                "id": "RADIOLOGICAL", 
                "graphic": "25281700.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Toxic Industrial Material", 
                        "id": "RAD_TOXIC_INDUSTRIAL_MATERIAL_POINT", 
                        "graphic": "25281701.svg"
                    }
                ]
            }, 
            {
                "digits": "18", 
                "label": "General Decontamination Point/Site", 
                "id": "GENERAL_DECONTAMINATION_POINT_SITE", 
                "graphic": "25281800.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Alternate", 
                        "id": "DECON_ALTERNATE", 
                        "graphic": "25281801.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Equipment", 
                        "id": "DECON_EQUIPMENT", 
                        "graphic": "25281802.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Troop", 
                        "id": "DECON_TROOP", 
                        "graphic": "25281803.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Equipment/Troop", 
                        "id": "DECON_EQUIPMENT_TROOP", 
                        "graphic": "25281804.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Operational", 
                        "id": "DECON_OPERATIONAL", 
                        "graphic": "25281805.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Thorough", 
                        "id": "DECON_THOROUGH", 
                        "graphic": "25281806.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Main Equipment", 
                        "id": "DECON_MAIN_EQUIPMENT", 
                        "graphic": "25281807.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Forward Troop", 
                        "id": "DECON_FORWARD_TROOP", 
                        "graphic": "25281808.svg"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Wounded Personnel", 
                        "id": "DECON_WOUNDED_PERSONNEL", 
                        "graphic": "25281809.svg"
                    }
                ]
            }, 
            {
                "digits": "19", 
                "label": "Tetrahedrons, Dragons Teeth, and Other Similar Obstacles", 
                "id": "OTHER_SIMILAR_OBSTACLES", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Fixed and Prefabricated", 
                        "id": "FIXED_PREFABRICATED", 
                        "graphic": "25281901.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Movable", 
                        "id": "MOVABLE", 
                        "graphic": "25281902.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Movable and Prefabricated", 
                        "id": "MOVABLE_PREFABRICATED", 
                        "graphic": "25281903.svg"
                    }
                ]
            }, 
            {
                "digits": "20", 
                "label": "Vertical Obstructions", 
                "id": "VERTICAL_OBSTRUCTIONS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Tower-Low", 
                        "id": "TOWER_LOW", 
                        "graphic": "25282001.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Tower-High", 
                        "id": "TOWER_HIGH", 
                        "graphic": "25282002.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Overhead Wire", 
                        "id": "OVERHEAD_WIRE", 
                        "graphic": "25282003.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "29", 
        "label": "Protection Lines", 
        "id": "PROTECTION_LINES", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Obstacle Line", 
                "id": "OBSTACLE_LINE", 
                "graphic": "25290100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Antitank Obstacles", 
                "id": "ANTITANK_OBSTACLES", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Under Construction", 
                        "id": "AT_UNDER_CONSTRUCTION", 
                        "graphic": "25290201.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Completed", 
                        "id": "AT_COMPLETED", 
                        "graphic": "25290202.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Reinforced-with Antitank Mines", 
                        "id": "AT_REINFORCED_WITH_MINES", 
                        "graphic": "25290203.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Antitank Wall", 
                        "id": "AT_ANTITANK_WALL", 
                        "graphic": "25290204.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Wire Obstacles", 
                "id": "WIRE_OBSTACLES", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Unspecified Wire", 
                        "id": "UNSPECIFIED_WIRE", 
                        "graphic": "25290301.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Single Fence Wire", 
                        "id": "SINGLE_FENCE_WIRE", 
                        "graphic": "25290302.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Double Fence Wire", 
                        "id": "DOUBLE_FENCE_WIRE", 
                        "graphic": "25290303.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Double Apron Fence", 
                        "id": "DOUBLE_APRON_FENCE", 
                        "graphic": "25290304.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Low Wire Fence", 
                        "id": "LOW_WIRE_FENCE", 
                        "graphic": "25290305.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "06", 
                        "label": "High Wire Fence", 
                        "id": "HIGH_WIRE_FENCE", 
                        "graphic": "25290306.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Single Concertina", 
                        "id": "SINGLE_CONCERTINA", 
                        "graphic": "25290307.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Double Strand Concertina", 
                        "id": "DOUBLE_STRAND_CONCERTINA", 
                        "graphic": "25290308.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Triple Strand Concertina", 
                        "id": "TRIPLE_STRAND_CONCERTINA", 
                        "graphic": "25290309.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Mine Cluster", 
                "id": "MINE_CLUSTER", 
                "graphic": "25290400.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Trip Wire", 
                "id": "TRIP_WIRE", 
                "graphic": "25290500.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Lane", 
                "id": "LANE", 
                "graphic": "25290600.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Ferry", 
                "id": "FERRY", 
                "graphic": "25290700.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Raft Site", 
                "id": "RAFT_SITE", 
                "graphic": "25290800.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Fortified Line", 
                "id": "FORTIFIED_LINE", 
                "graphic": "25290900.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Fortified Position", 
                "id": "FORTIFIED_POSITION", 
                "graphic": "25291000.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "30", 
        "label": "Intelligence Lines", 
        "id": "INTELLIGENCE_LINES", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Intelligence Coordination Line", 
                "id": "INTELLIGENCE_COORDINATION_LINE", 
                "graphic": "25300100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "31", 
        "label": "Sustainment Areas", 
        "id": "SUSTAINMENT_AREAS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Detainee Holding Area", 
                "id": "DETAINEE_HOLDING_AREA", 
                "graphic": "25310100.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Enemy Prisoner of War Holding Area", 
                "id": "EPW_HOLDING_AREA", 
                "graphic": "25310200.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Forward Arming and Refueling Point", 
                "id": "FARP", 
                "graphic": "25310300.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Refugee Holding Area", 
                "id": "REFUGEE_HOLDING_AREA", 
                "graphic": "25310400.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Regimental Support Area", 
                "id": "REGIMENTAL_SUPPORT_AREA", 
                "graphic": "25310500.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Brigade Support Area", 
                "id": "BRIGADE_SUPPORT_AREA", 
                "graphic": "25310600.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Division Support Area", 
                "id": "DIVISION_SUPPORT_AREA", 
                "graphic": "25310700.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "32", 
        "label": "Sustainment Points", 
        "id": "SUSTAINMENT_POINTS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Ambulance Exchange Point", 
                "id": "AMBULANCE_EXCHANGE_POINT", 
                "graphic": "25320100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Ammunition Supply Point", 
                "id": "AMMUNITION_SUPPLY_POINT", 
                "graphic": "25320200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Ammunition Transfer Point", 
                "id": "AMMUNITION_TRANSFER_POINT", 
                "graphic": "25320300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Cannibalization Point", 
                "id": "CANNIBALIZATION_POINT", 
                "graphic": "25320400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Casualty Collection Point", 
                "id": "CASUALTY_COLLECTION_POINT", 
                "graphic": "25320500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Civilian Collection Point", 
                "id": "CIVILIAN_COLLECTION_POINT", 
                "graphic": "25320600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Detainee Collection Point", 
                "id": "DETAINEE_COLLECTION_POINT", 
                "graphic": "25320700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Enemy Prisoner of War Collection Point", 
                "id": "EPW_COLLECTION_POINT", 
                "graphic": "25320800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Logistics Release Point", 
                "id": "LOGISTICS_RELEASE_POINT", 
                "graphic": "25320900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Maintenance Collection Point (MCP)", 
                "id": "MAINTENANCE_COLLECTION_POINT_MCP", 
                "graphic": "25321000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Medical Evacuation (MEDEVAC) Pick-up Point", 
                "id": "MEDEVAC_PICKUP_POINT", 
                "graphic": "25321100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Rearm-Refuel and Resupply Point (R3P)", 
                "id": "REARM_REFUEL_RESUPPLY_POINT_R3P", 
                "graphic": "25321200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Refuel on the Move (ROM) Point", 
                "id": "REFUEL_ON_THE_MOVE_ROM_POINT", 
                "graphic": "25321300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Traffic Control Post (TCP)", 
                "id": "TRAFFIC_CONTROL_POST_TCP", 
                "graphic": "25321400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Trailer Transfer Point (TTP)", 
                "id": "TRAILER_TRANSFER_POINT_TTP", 
                "graphic": "25321500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Unit Maintenance Collection Point (UMCP)", 
                "id": "UNIT_MAINTENANCE_COLLECTION_POINT_UMCP", 
                "graphic": "25321600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "General Supply Point", 
                "id": "GENERAL_SUPPLY_POINT", 
                "graphic": "25321700.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "NATO Class I Supply Point", 
                        "id": "NATO_CLASS_1_SUPPLY_POINT", 
                        "graphic": "25321701.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "NATO Class II Supply Point", 
                        "id": "NATO_CLASS_2_SUPPLY_POINT", 
                        "graphic": "25321702.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "NATO Class III Supply Point", 
                        "id": "NATO_CLASS_3_SUPPLY_POINT", 
                        "graphic": "25321703.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "NATO Class IV Supply Point", 
                        "id": "NATO_CLASS_4_SUPPLY_POINT", 
                        "graphic": "25321704.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "NATO Class V Supply Point", 
                        "id": "NATO_CLASS_5_SUPPLY_POINT", 
                        "graphic": "25321705.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "NATO Multiple Class Supply Point", 
                        "id": "NATO_MULTIPLE_CLASS_SUPPLY_POINT", 
                        "graphic": "25321706.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "US Class I Supply Point", 
                        "id": "US_CLASS_01_SUPPLY_POINT", 
                        "graphic": "25321707.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "US Class II Supply Point", 
                        "id": "US_CLASS_02_SUPPLY_POINT", 
                        "graphic": "25321708.svg"
                    }, 
                    {
                        "digits": "09", 
                        "label": "US Class III Supply Point", 
                        "id": "US_CLASS_03_SUPPLY_POINT", 
                        "graphic": "25321709.svg"
                    }, 
                    {
                        "digits": "10", 
                        "label": "US Class IV Supply Point", 
                        "id": "US_CLASS_04_SUPPLY_POINT", 
                        "graphic": "25321710.svg"
                    }, 
                    {
                        "digits": "11", 
                        "label": "US Class V Supply Point", 
                        "id": "US_CLASS_05_SUPPLY_POINT", 
                        "graphic": "25321711.svg"
                    }, 
                    {
                        "digits": "12", 
                        "label": "US Class VI Supply Point", 
                        "id": "US_CLASS_06_SUPPLY_POINT", 
                        "graphic": "25321712.svg"
                    }, 
                    {
                        "digits": "13", 
                        "label": "US Class VII Supply Point", 
                        "id": "US_CLASS_07_SUPPLY_POINT", 
                        "graphic": "25321713.svg"
                    }, 
                    {
                        "digits": "14", 
                        "label": "US Class VIII Supply Point", 
                        "id": "US_CLASS_08_SUPPLY_POINT", 
                        "graphic": "25321714.svg"
                    }, 
                    {
                        "digits": "15", 
                        "label": "US Class IX Supply Point", 
                        "id": "US_CLASS_09_SUPPLY_POINT", 
                        "graphic": "25321715.svg"
                    }, 
                    {
                        "digits": "16", 
                        "label": "US Class X Supply Point", 
                        "id": "US_CLASS_10_SUPPLY_POINT", 
                        "graphic": "25321716.svg"
                    }
                ]
            }, 
            {
                "digits": "18", 
                "label": "Medical Supply Point", 
                "id": "MEDICAL_SUPPLY_POINT", 
                "graphic": "25321800.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "33", 
        "label": "Sustainment Lines", 
        "id": "SUSTAINMENT_LINES", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Moving Convoy", 
                "id": "MOVING_CONVOY", 
                "graphic": "25330100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Halted Convoy", 
                "id": "HALTED_CONVOY", 
                "graphic": "25330200.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Main Supply Route", 
                "id": "MAIN_SUPPLY_ROUTE", 
                "graphic": "25330300.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "One Way Traffic", 
                        "id": "MSR_ONE_WAY_TRAFFIC", 
                        "graphic": "25330301.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Two Way Traffic", 
                        "id": "MSR_TWO_WAY_TRAFFIC", 
                        "graphic": "25330302.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Alternating Traffic", 
                        "id": "MSR_ALTERNATING_TRAFFIC", 
                        "graphic": "25330303.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Alternate Supply Route", 
                "id": "ALTERNATE_SUPPLY_ROUTE", 
                "graphic": "25330400.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "One Way Traffic", 
                        "id": "ASR_ONE_WAY_TRAFFIC", 
                        "graphic": "25330401.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Two Way Traffic", 
                        "id": "ASR_TWO_WAY_TRAFFIC", 
                        "graphic": "25330402.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Alternating Traffic", 
                        "id": "ASR_ALTERNATING_TRAFFIC", 
                        "graphic": "25330403.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "34", 
        "label": "Mission Tasks", 
        "id": "MISSION_TASKS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Block", 
                "id": "TMT_BLOCK", 
                "graphic": "25340100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Breach", 
                "id": "TMT_BREACH", 
                "graphic": "25340200.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Bypass", 
                "id": "TMT_BYPASS", 
                "graphic": "25340300.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Canalize", 
                "id": "TMT_CANALIZE", 
                "graphic": "25340400.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Clear", 
                "id": "TMT_CLEAR", 
                "graphic": "25340500.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Counterattack", 
                "id": "TMT_COUNTERATTACK", 
                "graphic": "25340600.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Counterattack by Fire", 
                "id": "TMT_COUNTERATTACK_BY_FIRE", 
                "graphic": "25340700.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Delay", 
                "id": "TMT_DELAY", 
                "graphic": "25340800.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Destroy", 
                "id": "TMT_DESTROY", 
                "graphic": "25340900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Disrupt", 
                "id": "TMT_DISTRUPT", 
                "graphic": "25341000.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Fix", 
                "id": "TMT_FIX", 
                "graphic": "25341100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Follow and Assume", 
                "id": "TMT_FOLLOW_AND_ASSUME", 
                "graphic": "25341200.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Follow and Support", 
                "id": "TMT_FOLLOW_AND_SUPPORT", 
                "graphic": "25341300.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Interdict", 
                "id": "TMT_INTERDICT", 
                "graphic": "25341400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Isolate", 
                "id": "TMT_ISOLATE", 
                "graphic": "25341500.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Neutralize", 
                "id": "TMT_NEUTRALIZE", 
                "graphic": "25341600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Occupy", 
                "id": "TMT_OCCUPY", 
                "graphic": "25341700.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "18", 
                "label": "Penetrate", 
                "id": "TMT_PENETRATE", 
                "graphic": "25341800.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "19", 
                "label": "Relief in Place (RIP)", 
                "id": "TMT_RELIEF_IN_PLACE_RIP", 
                "graphic": "25341900.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "20", 
                "label": "Retire/Retirement", 
                "id": "TMT_RETIRE_RETIREMENT", 
                "graphic": "25342000.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "21", 
                "label": "Secure", 
                "id": "TMT_SECURE", 
                "graphic": "25342100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "22", 
                "label": "Security", 
                "id": "SECURITY", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Cover", 
                        "id": "TMT_COVER", 
                        "graphic": "25342201.b.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Guard", 
                        "id": "TMT_GUARD", 
                        "graphic": "25342202.b.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Screen", 
                        "id": "TMT_SCREEN", 
                        "graphic": "25342203.b.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "23", 
                "label": "Seize", 
                "id": "TMT_SEIZE", 
                "graphic": "25342300.b.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "24", 
                "label": "Withdraw", 
                "id": "TMT_WITHDRAW", 
                "graphic": "25342400.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "25", 
                "label": "Withdraw Under Pressure", 
                "id": "TMT_WITHDRAW_UNDER_PRESSURE", 
                "graphic": "25342500.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }
        ]
    }
];
