/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "54";
export const label = "Signals Intelligence - Subsurface";
export const id = "SS_SIGINT_SUBSURFACE";
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
                "graphic": "54110100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Jammer", 
                "id": "JAMMER", 
                "graphic": "54110200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Radar", 
                "id": "RADAR", 
                "graphic": "54110300.svg", 
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
        "digits": "07", 
        "label": "Beacon Transponder (not IFF)", 
        "id": "BEACON_TRANSPONDER_MOD", 
        "graphic": "54071.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "11", 
        "label": "Cellular/Mobile", 
        "id": "CELLULAR_MOBILE_MOD", 
        "graphic": "54111.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Communications"
    }, 
    {
        "digits": "13", 
        "label": "Decoy/Mimic", 
        "id": "DECOY_MIMIC_MOD", 
        "graphic": "54131.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "14", 
        "label": "Data Transmission", 
        "id": "DATA_TRANSMISSION_MOD", 
        "graphic": "54141.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "16", 
        "label": "Early Warning", 
        "id": "EARLY_WARNING_MOD", 
        "graphic": "54161.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "21", 
        "label": "Identification Friend or Foe (Interrogator)", 
        "id": "IFF_INTERROGATOR_MOD", 
        "graphic": "54211.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "24", 
        "label": "Identification Friend or Foe (Transponder)", 
        "id": "IFF_TRANSPONDER_MOD", 
        "graphic": "54241.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "25", 
        "label": "Barrage Jammer", 
        "id": "BARRAGE_JAMMER_MOD", 
        "graphic": "54251.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "26", 
        "label": "Click Jammer", 
        "id": "CLICK_JAMMER_MOD", 
        "graphic": "54261.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "27", 
        "label": "Deceptive Jammer", 
        "id": "DECEPTIVE_JAMMER_MOD", 
        "graphic": "54271.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "28", 
        "label": "Frequency Swept Jammer", 
        "id": "FREQUENCY_SWEPT_JAMMER_MOD", 
        "graphic": "54281.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "29", 
        "label": "Jammer (General)", 
        "id": "JAMMER_GENERAL_MOD", 
        "graphic": "54291.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "30", 
        "label": "Noise Jammer", 
        "id": "NOISE_JAMMER_MOD", 
        "graphic": "54301.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "31", 
        "label": "Pulsed Jammer", 
        "id": "PULSED_JAMMER_MOD", 
        "graphic": "54311.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "32", 
        "label": "Repeater Jammer", 
        "id": "REPEATER_JAMMER_MOD", 
        "graphic": "54321.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "33", 
        "label": "Spot Noise Jammer", 
        "id": "SPOT_NOISE_JAMMER_MOD", 
        "graphic": "54331.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "34", 
        "label": "Transponder Jammer", 
        "id": "TRANSPONDER_JAMMER_MOD", 
        "graphic": "54341.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "36", 
        "label": "Missile Control", 
        "id": "MISSILE_CONTROL_MOD", 
        "graphic": "54361.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "39", 
        "label": "Multi-Function", 
        "id": "MULTI_FUNCTION_MOD", 
        "graphic": "54391.svg", 
        "remarks": "Two or more of EW, TA, TT, MG, TI", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "42", 
        "label": "Missile Tracking", 
        "id": "MISSILE_TRACKING_MOD", 
        "graphic": "54421.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "43", 
        "label": "Navigational/General", 
        "id": "NAVIGATIONAL_GENERAL_MOD", 
        "graphic": "54431.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "44", 
        "label": "Navigational/Distance Measuring Equipment", 
        "id": "NAVIGATIONAL_DISTANCE_MEASURING_EQUIPMENT_MOD", 
        "graphic": "54441.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "45", 
        "label": "Navigation/Terrain Following", 
        "id": "NAVIGATION_TERRAIN_FOLLOWING_MOD", 
        "graphic": "54451.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "46", 
        "label": "Navigational/Weather Avoidance", 
        "id": "NAVIGATIONAL_WEATHER_AVOIDANCE_MOD", 
        "graphic": "54461.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "47", 
        "label": "Omni-Line of Sight (LOS)", 
        "id": "OMNI_LOS_MOD", 
        "graphic": "54471.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Communications"
    }, 
    {
        "digits": "49", 
        "label": "Point-to-Point Line of Sight (LOS)", 
        "id": "POINT_POINT_LOS_MOD", 
        "graphic": "54491.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Communications"
    }, 
    {
        "digits": "50", 
        "label": "Instrumentation", 
        "id": "INSTRUMENTATION_MOD", 
        "graphic": "54501.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "51", 
        "label": "Range Only", 
        "id": "RANGE_ONLY_MOD", 
        "graphic": "54511.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "52", 
        "label": "Sonobuoy", 
        "id": "SONOBUOY_MOD", 
        "graphic": "54521.svg", 
        "category": "Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "54", 
        "label": "Space", 
        "id": "SPACE_MOD", 
        "graphic": "54541.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "55", 
        "label": "Surface Search", 
        "id": "SURFACE_SEARCH_MOD", 
        "graphic": "54551.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "57", 
        "label": "Satellite Uplink", 
        "id": "SATELLITE_UPLINK_MOD", 
        "graphic": "54571.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Communications"
    }, 
    {
        "digits": "58", 
        "label": "Target Acquisition", 
        "id": "TARGET_ACQUISITION_MOD", 
        "graphic": "54581.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "61", 
        "label": "Target Tracking", 
        "id": "TARGET_TRACKING_MOD", 
        "graphic": "54611.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "62", 
        "label": "Unknown", 
        "id": "UNKNOWN_MOD", 
        "graphic": "54621.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "63", 
        "label": "Video Remoting", 
        "id": "VIDEO_REMOTING_MOD", 
        "graphic": "54631.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "64", 
        "label": "Experimental", 
        "id": "EXPERIMENTAL_MOD", 
        "graphic": "54641.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }
];

export const sectorTwoModifiers = <Modifier[]>[];

export const graphicFolder = {
    "entities": "Appendices/SigInt", 
    "modifierOnes": "Appendices/SigInt/mod1"
};

