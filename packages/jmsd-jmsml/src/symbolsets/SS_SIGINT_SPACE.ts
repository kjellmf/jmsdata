/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "50";
export const label = "Signals Intelligence - Space";
export const id = "SS_SIGINT_SPACE";
export const dimensionId = "SPACE";
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
        "label": "Signal Intercept", 
        "id": "SIGNAL_INTERCEPT", 
        "remarks": "There is no icon associated with this entity.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Communications", 
                "id": "COMMUNICATIONS", 
                "graphic": "50110100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Jammer", 
                "id": "JAMMER", 
                "graphic": "50110200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Radar", 
                "id": "RADAR", 
                "graphic": "50110300.svg", 
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
        "digits": "14", 
        "label": "Data Transmission", 
        "id": "DATA_TRANSMISSION_MOD", 
        "graphic": "50141.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "15", 
        "label": "Earth Surveillance", 
        "id": "EARTH_SURVEILLANCE_MOD", 
        "graphic": "50151.svg", 
        "category": "Space Radar"
    }, 
    {
        "digits": "21", 
        "label": "Identification Friend or Foe (Interrogator)", 
        "id": "IFF_INTERROGATOR_MOD", 
        "graphic": "50211.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "24", 
        "label": "Identification Friend or Foe (Transponder)", 
        "id": "IFF_TRANSPONDER_MOD", 
        "graphic": "50241.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "25", 
        "label": "Barrage Jammer", 
        "id": "BARRAGE_JAMMER_MOD", 
        "graphic": "50251.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "26", 
        "label": "Click Jammer", 
        "id": "CLICK_JAMMER_MOD", 
        "graphic": "50261.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "27", 
        "label": "Deceptive Jammer", 
        "id": "DECEPTIVE_JAMMER_MOD", 
        "graphic": "50271.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "28", 
        "label": "Frequency Swept Jammer", 
        "id": "FREQUENCY_SWEPT_JAMMER_MOD", 
        "graphic": "50281.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "29", 
        "label": "Jammer (General)", 
        "id": "JAMMER_GENERAL_MOD", 
        "graphic": "50291.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "30", 
        "label": "Noise Jammer", 
        "id": "NOISE_JAMMER_MOD", 
        "graphic": "50301.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "31", 
        "label": "Pulsed Jammer", 
        "id": "PULSED_JAMMER_MOD", 
        "graphic": "50311.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "32", 
        "label": "Repeater Jammer", 
        "id": "REPEATER_JAMMER_MOD", 
        "graphic": "50321.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "33", 
        "label": "Spot Noise Jammer", 
        "id": "SPOT_NOISE_JAMMER_MOD", 
        "graphic": "50331.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "34", 
        "label": "Transponder Jammer", 
        "id": "TRANSPONDER_JAMMER_MOD", 
        "graphic": "50341.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "36", 
        "label": "Missile Control", 
        "id": "MISSILE_CONTROL_MOD", 
        "graphic": "50361.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "39", 
        "label": "Multi-Function", 
        "id": "MULTI_FUNCTION_MOD", 
        "graphic": "50391.svg", 
        "remarks": "Two or more of EW, TA, TT, MG, TI", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "42", 
        "label": "Missile Tracking", 
        "id": "MISSILE_TRACKING_MOD", 
        "graphic": "50421.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "43", 
        "label": "Navigational/General", 
        "id": "NAVIGATIONAL_GENERAL_MOD", 
        "graphic": "50431.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "44", 
        "label": "Navigational/Distance Measuring Equipment", 
        "id": "NAVIGATIONAL_DISTANCE_MEASURING_EQUIPMENT_MOD", 
        "graphic": "50441.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "45", 
        "label": "Navigation/Terrain Following", 
        "id": "NAVIGATION_TERRAIN_FOLLOWING_MOD", 
        "graphic": "50451.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "49", 
        "label": "Point-to-Point Line of Sight (LOS)", 
        "id": "POINT_POINT_LOS_MOD", 
        "graphic": "50491.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Communications"
    }, 
    {
        "digits": "50", 
        "label": "Instrumentation", 
        "id": "INSTRUMENTATION_MOD", 
        "graphic": "50501.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "51", 
        "label": "Range Only", 
        "id": "RANGE_ONLY_MOD", 
        "graphic": "50511.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "53", 
        "label": "Satellite Downlink", 
        "id": "SATELLITE_DOWNLINK_MOD", 
        "graphic": "50531.svg", 
        "category": "Space Communications"
    }, 
    {
        "digits": "54", 
        "label": "Space", 
        "id": "SPACE_MOD", 
        "graphic": "50541.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "55", 
        "label": "Surface Search", 
        "id": "SURFACE_SEARCH_MOD", 
        "graphic": "50551.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "58", 
        "label": "Target Acquisition", 
        "id": "TARGET_ACQUISITION_MOD", 
        "graphic": "50581.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "61", 
        "label": "Target Tracking", 
        "id": "TARGET_TRACKING_MOD", 
        "graphic": "50611.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "62", 
        "label": "Unknown", 
        "id": "UNKNOWN_MOD", 
        "graphic": "50621.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "63", 
        "label": "Video Remoting", 
        "id": "VIDEO_REMOTING_MOD", 
        "graphic": "50631.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "64", 
        "label": "Experimental", 
        "id": "EXPERIMENTAL_MOD", 
        "graphic": "50641.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }
];

export const sectorTwoModifiers = <Modifier[]>[];

export const graphicFolder = {
    "entities": "Appendices/SigInt", 
    "modifierOnes": "Appendices/SigInt/mod1"
};

