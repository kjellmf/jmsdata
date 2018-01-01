/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "53";
export const label = "Signals Intelligence - Surface";
export const id = "SS_SIGINT_SURFACE";
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
                "graphic": "53110100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Jammer", 
                "id": "JAMMER", 
                "graphic": "53110200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Radar", 
                "id": "RADAR", 
                "graphic": "53110300.svg", 
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
        "label": "Anti-Aircraft Fire Control", 
        "id": "ANTI_AIRCRAFT_FIRE_CONTROL_MOD", 
        "graphic": "53011.svg", 
        "category": "Land/Sea Surface Radar"
    }, 
    {
        "digits": "06", 
        "label": "Air Traffic Control", 
        "id": "AIR_TRAFFIC_CONTROL_MOD", 
        "graphic": "53061.svg", 
        "category": "Air/Land/Sea Surface Radar"
    }, 
    {
        "digits": "07", 
        "label": "Beacon Transponder (not IFF)", 
        "id": "BEACON_TRANSPONDER_MOD", 
        "graphic": "53071.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "09", 
        "label": "Controlled Approach", 
        "id": "CONTROLLED_APPROACH_MOD", 
        "graphic": "53091.svg", 
        "category": "Land/Sea Surface Radar"
    }, 
    {
        "digits": "10", 
        "label": "Controlled Intercept", 
        "id": "CONTROLLED_INTERCEPT_MOD", 
        "graphic": "53101.svg", 
        "category": "Air/Land/Sea Surface Radar"
    }, 
    {
        "digits": "11", 
        "label": "Cellular/Mobile", 
        "id": "CELLULAR_MOBILE_MOD", 
        "graphic": "53111.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Communications"
    }, 
    {
        "digits": "13", 
        "label": "Decoy/Mimic", 
        "id": "DECOY_MIMIC_MOD", 
        "graphic": "53131.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "14", 
        "label": "Data Transmission", 
        "id": "DATA_TRANSMISSION_MOD", 
        "graphic": "53141.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "16", 
        "label": "Early Warning", 
        "id": "EARLY_WARNING_MOD", 
        "graphic": "53161.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "17", 
        "label": "Fire Control", 
        "id": "FIRE_CONTROL_MOD", 
        "graphic": "53171.svg", 
        "category": "Air/Land/Sea Surface Radar"
    }, 
    {
        "digits": "19", 
        "label": "Height Finding", 
        "id": "HEIGHT_FINDING_MOD", 
        "graphic": "53191.svg", 
        "category": "Land/Sea Surface Radar"
    }, 
    {
        "digits": "21", 
        "label": "Identification Friend or Foe (Interrogator)", 
        "id": "IFF_INTERROGATOR_MOD", 
        "graphic": "53211.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "22", 
        "label": "Instrument Landing System", 
        "id": "INSTRUMENT_LANDING_SYSTEM_MOD", 
        "graphic": "53221.svg", 
        "category": "Land/Sea Surface Radar"
    }, 
    {
        "digits": "24", 
        "label": "Identification Friend or Foe (Transponder)", 
        "id": "IFF_TRANSPONDER_MOD", 
        "graphic": "53241.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "25", 
        "label": "Barrage Jammer", 
        "id": "BARRAGE_JAMMER_MOD", 
        "graphic": "53251.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "26", 
        "label": "Click Jammer", 
        "id": "CLICK_JAMMER_MOD", 
        "graphic": "53261.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "27", 
        "label": "Deceptive Jammer", 
        "id": "DECEPTIVE_JAMMER_MOD", 
        "graphic": "53271.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "28", 
        "label": "Frequency Swept Jammer", 
        "id": "FREQUENCY_SWEPT_JAMMER_MOD", 
        "graphic": "53281.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "29", 
        "label": "Jammer (General)", 
        "id": "JAMMER_GENERAL_MOD", 
        "graphic": "53291.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "30", 
        "label": "Noise Jammer", 
        "id": "NOISE_JAMMER_MOD", 
        "graphic": "53301.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "31", 
        "label": "Pulsed Jammer", 
        "id": "PULSED_JAMMER_MOD", 
        "graphic": "53311.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "32", 
        "label": "Repeater Jammer", 
        "id": "REPEATER_JAMMER_MOD", 
        "graphic": "53321.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "33", 
        "label": "Spot Noise Jammer", 
        "id": "SPOT_NOISE_JAMMER_MOD", 
        "graphic": "53331.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "34", 
        "label": "Transponder Jammer", 
        "id": "TRANSPONDER_JAMMER_MOD", 
        "graphic": "53341.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "35", 
        "label": "Missile Acquisition", 
        "id": "MISSILE_ACQUISITION_MOD", 
        "graphic": "53351.svg", 
        "category": "Air/Land/Sea Surface Radar"
    }, 
    {
        "digits": "36", 
        "label": "Missile Control", 
        "id": "MISSILE_CONTROL_MOD", 
        "graphic": "53361.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "38", 
        "label": "Meteorological", 
        "id": "METEOROLOGICAL_MOD", 
        "graphic": "53381.svg", 
        "category": "Air/Land/Sea Surface Radar"
    }, 
    {
        "digits": "39", 
        "label": "Multi-Function", 
        "id": "MULTI_FUNCTION_MOD", 
        "graphic": "53391.svg", 
        "remarks": "Two or more of EW, TA, TT, MG, TI", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "40", 
        "label": "Missile Guidance", 
        "id": "MISSILE_GUIDANCE_MOD", 
        "graphic": "53401.svg", 
        "category": "Air/Land/Sea Surface Radar"
    }, 
    {
        "digits": "42", 
        "label": "Missile Tracking", 
        "id": "MISSILE_TRACKING_MOD", 
        "graphic": "53421.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "43", 
        "label": "Navigational/General", 
        "id": "NAVIGATIONAL_GENERAL_MOD", 
        "graphic": "53431.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "44", 
        "label": "Navigational/Distance Measuring Equipment", 
        "id": "NAVIGATIONAL_DISTANCE_MEASURING_EQUIPMENT_MOD", 
        "graphic": "53441.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "45", 
        "label": "Navigation/Terrain Following", 
        "id": "NAVIGATION_TERRAIN_FOLLOWING_MOD", 
        "graphic": "53451.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "46", 
        "label": "Navigational/Weather Avoidance", 
        "id": "NAVIGATIONAL_WEATHER_AVOIDANCE_MOD", 
        "graphic": "53461.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "47", 
        "label": "Omni-Line of Sight (LOS)", 
        "id": "OMNI_LOS_MOD", 
        "graphic": "53471.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Communications"
    }, 
    {
        "digits": "49", 
        "label": "Point-to-Point Line of Sight (LOS)", 
        "id": "POINT_POINT_LOS_MOD", 
        "graphic": "53491.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Communications"
    }, 
    {
        "digits": "50", 
        "label": "Instrumentation", 
        "id": "INSTRUMENTATION_MOD", 
        "graphic": "53501.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "51", 
        "label": "Range Only", 
        "id": "RANGE_ONLY_MOD", 
        "graphic": "53511.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "52", 
        "label": "Sonobuoy", 
        "id": "SONOBUOY_MOD", 
        "graphic": "53521.svg", 
        "category": "Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "54", 
        "label": "Space", 
        "id": "SPACE_MOD", 
        "graphic": "53541.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "55", 
        "label": "Surface Search", 
        "id": "SURFACE_SEARCH_MOD", 
        "graphic": "53551.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "57", 
        "label": "Satellite Uplink", 
        "id": "SATELLITE_UPLINK_MOD", 
        "graphic": "53571.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Communications"
    }, 
    {
        "digits": "58", 
        "label": "Target Acquisition", 
        "id": "TARGET_ACQUISITION_MOD", 
        "graphic": "53581.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "59", 
        "label": "Target Illumination", 
        "id": "TARGET_ILLUMINATION_MOD", 
        "graphic": "53591.svg", 
        "category": "Air/Land/Sea Surface Radar"
    }, 
    {
        "digits": "61", 
        "label": "Target Tracking", 
        "id": "TARGET_TRACKING_MOD", 
        "graphic": "53611.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "62", 
        "label": "Unknown", 
        "id": "UNKNOWN_MOD", 
        "graphic": "53621.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "63", 
        "label": "Video Remoting", 
        "id": "VIDEO_REMOTING_MOD", 
        "graphic": "53631.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "64", 
        "label": "Experimental", 
        "id": "EXPERIMENTAL_MOD", 
        "graphic": "53641.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }
];

export const sectorTwoModifiers = <Modifier[]>[];

export const graphicFolder = {
    "entities": "Appendices/SigInt", 
    "modifierOnes": "Appendices/SigInt/mod1"
};

