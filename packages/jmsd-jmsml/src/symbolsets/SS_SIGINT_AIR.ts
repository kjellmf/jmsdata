/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "51";
export const label = "Signals Intelligence - Air";
export const id = "SS_SIGINT_AIR";
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
                "graphic": "51110100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Jammer", 
                "id": "JAMMER", 
                "graphic": "51110200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Radar", 
                "id": "RADAR", 
                "graphic": "51110300.svg", 
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
        "digits": "02", 
        "label": "Airborne Search and Bombing", 
        "id": "AIRBORNE_SEARCH_AND_BOMBING_MOD", 
        "graphic": "51021.svg", 
        "category": "Air Radar"
    }, 
    {
        "digits": "03", 
        "label": "Airborne Intercept", 
        "id": "AIRBORNE_INTERCEPT_MOD", 
        "graphic": "51031.svg", 
        "category": "Air Radar"
    }, 
    {
        "digits": "04", 
        "label": "Altimeter", 
        "id": "ALTIMETER_MOD", 
        "graphic": "51041.svg", 
        "category": "Air Radar"
    }, 
    {
        "digits": "05", 
        "label": "Airborne Reconnaissance and Mapping", 
        "id": "AIRBORNE_RECONNAISSANCE_AND_MAPPING_MOD", 
        "graphic": "51051.svg", 
        "category": "Air Radar"
    }, 
    {
        "digits": "06", 
        "label": "Air Traffic Control", 
        "id": "AIR_TRAFFIC_CONTROL_MOD", 
        "graphic": "51061.svg", 
        "category": "Air/Land/Sea Surface Radar"
    }, 
    {
        "digits": "07", 
        "label": "Beacon Transponder (not IFF)", 
        "id": "BEACON_TRANSPONDER_MOD", 
        "graphic": "51071.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "08", 
        "label": "Battlefield Surveillance", 
        "id": "BATTLEFIELD_SURVEILLANCE_MOD", 
        "graphic": "51081.svg", 
        "category": "Air/Land Radar"
    }, 
    {
        "digits": "10", 
        "label": "Controlled Intercept", 
        "id": "CONTROLLED_INTERCEPT_MOD", 
        "graphic": "51101.svg", 
        "category": "Air/Land/Sea Surface Radar"
    }, 
    {
        "digits": "11", 
        "label": "Cellular/Mobile", 
        "id": "CELLULAR_MOBILE_MOD", 
        "graphic": "51111.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Communications"
    }, 
    {
        "digits": "12", 
        "label": "Coastal Surveillance", 
        "id": "COASTAL_SURVEILLANCE_MOD", 
        "graphic": "51121.svg", 
        "category": "Land Radar"
    }, 
    {
        "digits": "13", 
        "label": "Decoy/Mimic", 
        "id": "DECOY_MIMIC_MOD", 
        "graphic": "51131.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "14", 
        "label": "Data Transmission", 
        "id": "DATA_TRANSMISSION_MOD", 
        "graphic": "51141.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "16", 
        "label": "Early Warning", 
        "id": "EARLY_WARNING_MOD", 
        "graphic": "51161.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "17", 
        "label": "Fire Control", 
        "id": "FIRE_CONTROL_MOD", 
        "graphic": "51171.svg", 
        "category": "Air/Land/Sea Surface Radar"
    }, 
    {
        "digits": "18", 
        "label": "Ground Mapping", 
        "id": "GROUND_MAPPING_MOD", 
        "graphic": "51181.svg", 
        "category": "Air Radar"
    }, 
    {
        "digits": "21", 
        "label": "Identification Friend or Foe (Interrogator)", 
        "id": "IFF_INTERROGATOR_MOD", 
        "graphic": "51211.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "23", 
        "label": "Ionospheric Sounding", 
        "id": "IONOSPHERIC_SOUNDING_MOD", 
        "graphic": "51231.svg", 
        "category": "Air/Land Radar"
    }, 
    {
        "digits": "24", 
        "label": "Identification Friend or Foe (Transponder)", 
        "id": "IFF_TRANSPONDER_MOD", 
        "graphic": "51241.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "25", 
        "label": "Barrage Jammer", 
        "id": "BARRAGE_JAMMER_MOD", 
        "graphic": "51251.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "26", 
        "label": "Click Jammer", 
        "id": "CLICK_JAMMER_MOD", 
        "graphic": "51261.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "27", 
        "label": "Deceptive Jammer", 
        "id": "DECEPTIVE_JAMMER_MOD", 
        "graphic": "51271.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "28", 
        "label": "Frequency Swept Jammer", 
        "id": "FREQUENCY_SWEPT_JAMMER_MOD", 
        "graphic": "51281.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "29", 
        "label": "Jammer (General)", 
        "id": "JAMMER_GENERAL_MOD", 
        "graphic": "51291.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "30", 
        "label": "Noise Jammer", 
        "id": "NOISE_JAMMER_MOD", 
        "graphic": "51301.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "31", 
        "label": "Pulsed Jammer", 
        "id": "PULSED_JAMMER_MOD", 
        "graphic": "51311.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "32", 
        "label": "Repeater Jammer", 
        "id": "REPEATER_JAMMER_MOD", 
        "graphic": "51321.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "33", 
        "label": "Spot Noise Jammer", 
        "id": "SPOT_NOISE_JAMMER_MOD", 
        "graphic": "51331.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "34", 
        "label": "Transponder Jammer", 
        "id": "TRANSPONDER_JAMMER_MOD", 
        "graphic": "51341.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "35", 
        "label": "Missile Acquisition", 
        "id": "MISSILE_ACQUISITION_MOD", 
        "graphic": "51351.svg", 
        "category": "Air/Land/Sea Surface Radar"
    }, 
    {
        "digits": "36", 
        "label": "Missile Control", 
        "id": "MISSILE_CONTROL_MOD", 
        "graphic": "51361.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "37", 
        "label": "Missile Downlink", 
        "id": "MISSILE_DOWNLINK_MOD", 
        "graphic": "51371.svg", 
        "category": "Air Radar"
    }, 
    {
        "digits": "38", 
        "label": "Meteorological", 
        "id": "METEOROLOGICAL_MOD", 
        "graphic": "51381.svg", 
        "category": "Air/Land/Sea Surface Radar"
    }, 
    {
        "digits": "39", 
        "label": "Multi-Function", 
        "id": "MULTI_FUNCTION_MOD", 
        "graphic": "51391.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "40", 
        "label": "Missile Guidance", 
        "id": "MISSILE_GUIDANCE_MOD", 
        "graphic": "51401.svg", 
        "category": "Air/Land/Sea Surface Radar"
    }, 
    {
        "digits": "41", 
        "label": "Missile Homing", 
        "id": "MISSILE_HOMING_MOD", 
        "graphic": "51411.svg", 
        "category": "Air Radar"
    }, 
    {
        "digits": "42", 
        "label": "Missile Tracking", 
        "id": "MISSILE_TRACKING_MOD", 
        "graphic": "51421.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "43", 
        "label": "Navigational/General", 
        "id": "NAVIGATIONAL_GENERAL_MOD", 
        "graphic": "51431.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "44", 
        "label": "Navigational/Distance Measuring Equipment", 
        "id": "NAVIGATIONAL_DISTANCE_MEASURING_EQUIPMENT_MOD", 
        "graphic": "51441.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "45", 
        "label": "Navigation/Terrain Following", 
        "id": "NAVIGATION_TERRAIN_FOLLOWING_MOD", 
        "graphic": "51451.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "46", 
        "label": "Navigational/Weather Avoidance", 
        "id": "NAVIGATIONAL_WEATHER_AVOIDANCE_MOD", 
        "graphic": "51461.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Jammer"
    }, 
    {
        "digits": "47", 
        "label": "Omni-Line of Sight (LOS)", 
        "id": "OMNI_LOS_MOD", 
        "graphic": "51471.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Communications"
    }, 
    {
        "digits": "48", 
        "label": "Proximity Use", 
        "id": "PROXIMITY_FUSE_MOD", 
        "graphic": "51481.svg", 
        "category": "Air Radar"
    }, 
    {
        "digits": "49", 
        "label": "Point-to-Point Line of Sight (LOS)", 
        "id": "POINT_POINT_LOS_MOD", 
        "graphic": "51491.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Communications"
    }, 
    {
        "digits": "50", 
        "label": "Instrumentation", 
        "id": "INSTRUMENTATION_MOD", 
        "graphic": "51501.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "51", 
        "label": "Range Only", 
        "id": "RANGE_ONLY_MOD", 
        "graphic": "51511.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "54", 
        "label": "Space", 
        "id": "SPACE_MOD", 
        "graphic": "51541.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "55", 
        "label": "Surface Search", 
        "id": "SURFACE_SEARCH_MOD", 
        "graphic": "51551.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "57", 
        "label": "Satellite Uplink", 
        "id": "SATELLITE_UPLINK_MOD", 
        "graphic": "51571.svg", 
        "category": "Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "58", 
        "label": "Target Acquisition", 
        "id": "TARGET_ACQUISITION_MOD", 
        "graphic": "51581.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "59", 
        "label": "Target Illumination", 
        "id": "TARGET_ILLUMINATION_MOD", 
        "graphic": "51591.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "61", 
        "label": "Target Tracking", 
        "id": "TARGET_TRACKING_MOD", 
        "graphic": "51611.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "62", 
        "label": "Unknown", 
        "id": "UNKNOWN_MOD", 
        "graphic": "51621.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "63", 
        "label": "Video Remoting", 
        "id": "VIDEO_REMOTING_MOD", 
        "graphic": "51631.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }, 
    {
        "digits": "64", 
        "label": "Experimental", 
        "id": "EXPERIMENTAL_MOD", 
        "graphic": "51641.svg", 
        "category": "Space/Air/Land/Sea Surface/Subsurface Radar"
    }
];

export const sectorTwoModifiers = <Modifier[]>[];

export const graphicFolder = {
    "entities": "Appendices/SigInt", 
    "modifierOnes": "Appendices/SigInt/mod1"
};

