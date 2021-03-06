/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "05";
export const label = "Space";
export const id = "SS_SPACE";
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
        "label": "Military", 
        "id": "MILITARY", 
        "graphic": "05110000.svg", 
        "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchical explanation purposes.", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Space Vehicle", 
                "id": "SPACE_VEHICLE", 
                "graphic": "05110100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Re-Entry Vehicle", 
                "id": "RE_ENTRY_VEHICLE", 
                "graphic": "05110200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Planet Lander", 
                "id": "PLANET_LANDER", 
                "graphic": "05110300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Orbiter Shuttle", 
                "id": "ORBITER_SHUTTLE", 
                "graphic": "05110400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Capsule", 
                "id": "CAPSULE", 
                "graphic": "05110500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Satellite, General", 
                "id": "GENERAL_SATELLITE", 
                "graphic": "05110600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Satellite", 
                "id": "SATELLITE", 
                "graphic": "05110700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Antisatellite Weapon", 
                "id": "ANTISATELLITE_WEAPON", 
                "graphic": "05110800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Astronomical Satellite", 
                "id": "ASTRONOMICAL_SATELLITE", 
                "graphic": "05110900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Biosatellite", 
                "id": "BIOSATELLITE", 
                "graphic": "05111000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Communications Satellite", 
                "id": "COMMUNICATIONS_SATELLITE", 
                "graphic": "05111100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Earth Observation Satellite", 
                "id": "EARTH_OBSERVATION_SATELLITE", 
                "graphic": "05111200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Miniaturized Satellite", 
                "id": "MINIATURIZED_SATELLITE", 
                "graphic": "05111300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Navigational Satellite", 
                "id": "NAVIGATIONAL_SATELLITE", 
                "graphic": "05111400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Reconnaissance Satellite", 
                "id": "RECONNAISSANCE_SATELLITE", 
                "graphic": "05111500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Space Station", 
                "id": "SPACE_STATION", 
                "graphic": "05111600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Tethered Satellite", 
                "id": "TETHERED_SATELLITE", 
                "graphic": "05111700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "18", 
                "label": "Weather Satellite", 
                "id": "WEATHER_SATELLITE", 
                "graphic": "05111800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "19", 
                "label": "Space Launched Vehicle (SLV)", 
                "id": "SPACE_LAUNCHED_VEHICLE", 
                "graphic": "05111900.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "12", 
        "label": "Civilian", 
        "id": "CIVILIAN", 
        "graphic": "05120000.svg", 
        "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchical explanation purposes.", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Orbiter Shuttle", 
                "id": "CIV_ORBITER_SHUTTLE", 
                "graphic": "05120100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Capsule", 
                "id": "CIV_CAPSULE", 
                "graphic": "05120200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Satellite", 
                "id": "CIV_SATELLITE", 
                "graphic": "05120300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Astronomical Satellite", 
                "id": "CIV_ASTRONOMICAL_SATELLITE", 
                "graphic": "05120400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Biosatellite", 
                "id": "CIV_BIOSATELLITE", 
                "graphic": "05120500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Communications Satellite", 
                "id": "CIV_COMMUNICATIONS_SATELLITE", 
                "graphic": "05120600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Earth Observation Satellite", 
                "id": "CIV_EARTH_OBSERVATION_SATELLITE", 
                "graphic": "05120700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Miniaturized Satellite", 
                "id": "CIV_MINIATURIZED_SATELLITE", 
                "graphic": "05120800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Navigational Satellite", 
                "id": "CIV_NAVIGATIONAL_SATELLITE", 
                "graphic": "05120900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Space Station", 
                "id": "CIV_SPACE_STATION", 
                "graphic": "05121000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Tethered Satellite", 
                "id": "CIV_TETHERED_SATELLITE", 
                "graphic": "05121100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Weather Satellite", 
                "id": "CIV_WEATHER_SATELLITE", 
                "graphic": "05121200.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "13", 
        "label": "Manual Track", 
        "id": "MANUAL_TRACK", 
        "graphic": "05130000.svg", 
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
        "label": "Low Earth Orbit (LEO)", 
        "id": "LEO_MOD", 
        "graphic": "05011.svg", 
        "category": "Orbit"
    }, 
    {
        "digits": "02", 
        "label": "Medium Earth Orbit (MEO)", 
        "id": "MEO_MOD", 
        "graphic": "05021.svg", 
        "category": "Orbit"
    }, 
    {
        "digits": "03", 
        "label": "High Earth Orbit (HEO)", 
        "id": "HEO_MOD", 
        "graphic": "05031.svg", 
        "category": "Orbit"
    }, 
    {
        "digits": "04", 
        "label": "Geosynchronous Orbit (GSO)", 
        "id": "GSO_MOD", 
        "graphic": "05041.svg", 
        "category": "Orbit"
    }, 
    {
        "digits": "05", 
        "label": "Geostationary Orbit (GO)", 
        "id": "GO_MOD", 
        "graphic": "05051.svg", 
        "category": "Orbit"
    }, 
    {
        "digits": "06", 
        "label": "Molniya Orbit (MO)", 
        "id": "MO_MOD", 
        "graphic": "05061.svg", 
        "category": "Orbit"
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
        "label": "Optical", 
        "id": "OPTICAL_MOD", 
        "graphic": "05012.svg", 
        "limitUseTo": [
            "ANTISATELLITEWEAPON", 
            "ASTRONOMICAL_SATELLITE", 
            "BIOSATELLITE", 
            "CIV_ASTRONOMICAL_SATELLITE", 
            "CIV_BIOSATELLITE", 
            "CIV_COMMUNICATIONS_SATELLITE", 
            "CIV_EARTH_OBSERVATION_SATELLITE", 
            "CIV_MINIATURIZED_SATELLITE", 
            "CIV_NAVIGATIONAL_SATELLITE", 
            "CIV_SATELLITE", 
            "CIV_TETHERED_SATELLITE", 
            "CIV_WEATHER_SATELLITE", 
            "COMMUNICATIONS_SATELLITE", 
            "EARTH_OBSERVATION_SATELLITE", 
            "GENERAL_SATELLITE", 
            "MINIATURIZED_SATELLITE", 
            "NAVIGATIONAL_SATELLITE", 
            "RECONNAISSANCE_SATELLITE", 
            "SATELLITE", 
            "TETHERED_SATELLITE", 
            "WEATHER_SATELLITE"
        ], 
        "category": "Sensor"
    }, 
    {
        "digits": "02", 
        "label": "Infrared", 
        "id": "INFRARED_MOD", 
        "graphic": "05022.svg", 
        "limitUseTo": [
            "ANTISATELLITEWEAPON", 
            "ASTRONOMICAL_SATELLITE", 
            "BIOSATELLITE", 
            "CIV_ASTRONOMICAL_SATELLITE", 
            "CIV_BIOSATELLITE", 
            "CIV_COMMUNICATIONS_SATELLITE", 
            "CIV_EARTH_OBSERVATION_SATELLITE", 
            "CIV_MINIATURIZED_SATELLITE", 
            "CIV_NAVIGATIONAL_SATELLITE", 
            "CIV_SATELLITE", 
            "CIV_TETHERED_SATELLITE", 
            "CIV_WEATHER_SATELLITE", 
            "COMMUNICATIONS_SATELLITE", 
            "EARTH_OBSERVATION_SATELLITE", 
            "GENERAL_SATELLITE", 
            "MINIATURIZED_SATELLITE", 
            "NAVIGATIONAL_SATELLITE", 
            "RECONNAISSANCE_SATELLITE", 
            "SATELLITE", 
            "TETHERED_SATELLITE", 
            "WEATHER_SATELLITE"
        ], 
        "category": "Sensor"
    }, 
    {
        "digits": "03", 
        "label": "Radar", 
        "id": "RADAR_MOD", 
        "graphic": "05032.svg", 
        "limitUseTo": [
            "ANTISATELLITEWEAPON", 
            "ASTRONOMICAL_SATELLITE", 
            "BIOSATELLITE", 
            "CIV_ASTRONOMICAL_SATELLITE", 
            "CIV_BIOSATELLITE", 
            "CIV_COMMUNICATIONS_SATELLITE", 
            "CIV_EARTH_OBSERVATION_SATELLITE", 
            "CIV_MINIATURIZED_SATELLITE", 
            "CIV_NAVIGATIONAL_SATELLITE", 
            "CIV_SATELLITE", 
            "CIV_TETHERED_SATELLITE", 
            "CIV_WEATHER_SATELLITE", 
            "COMMUNICATIONS_SATELLITE", 
            "EARTH_OBSERVATION_SATELLITE", 
            "GENERAL_SATELLITE", 
            "MINIATURIZED_SATELLITE", 
            "NAVIGATIONAL_SATELLITE", 
            "RECONNAISSANCE_SATELLITE", 
            "SATELLITE", 
            "TETHERED_SATELLITE", 
            "WEATHER_SATELLITE"
        ], 
        "category": "Sensor"
    }, 
    {
        "digits": "04", 
        "label": "Signals Intelligence (SIGINT)", 
        "id": "SIGINT_MOD", 
        "graphic": "05042.svg", 
        "limitUseTo": [
            "ANTISATELLITEWEAPON", 
            "ASTRONOMICAL_SATELLITE", 
            "BIOSATELLITE", 
            "CIV_ASTRONOMICAL_SATELLITE", 
            "CIV_BIOSATELLITE", 
            "CIV_COMMUNICATIONS_SATELLITE", 
            "CIV_EARTH_OBSERVATION_SATELLITE", 
            "CIV_MINIATURIZED_SATELLITE", 
            "CIV_NAVIGATIONAL_SATELLITE", 
            "CIV_SATELLITE", 
            "CIV_TETHERED_SATELLITE", 
            "CIV_WEATHER_SATELLITE", 
            "COMMUNICATIONS_SATELLITE", 
            "EARTH_OBSERVATION_SATELLITE", 
            "GENERAL_SATELLITE", 
            "MINIATURIZED_SATELLITE", 
            "NAVIGATIONAL_SATELLITE", 
            "RECONNAISSANCE_SATELLITE", 
            "SATELLITE", 
            "TETHERED_SATELLITE", 
            "WEATHER_SATELLITE"
        ], 
        "category": "Sensor"
    }
];

export const graphicFolder = {
    "entities": "Appendices/Space", 
    "modifierTwos": "Appendices/Space/mod2", 
    "modifierOnes": "Appendices/Space/mod1"
};

