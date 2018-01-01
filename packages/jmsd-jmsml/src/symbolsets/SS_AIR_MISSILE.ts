/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "02";
export const label = "Air Missile";
export const id = "SS_AIR_MISSILE";
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
        "label": "Missile", 
        "id": "MISSILE", 
        "graphic": "02110000.svg", 
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
        "label": "Air", 
        "id": "AIR_MOD", 
        "graphic": "02011.svg", 
        "category": "Launch Origin"
    }, 
    {
        "digits": "02", 
        "label": "Surface", 
        "id": "SURFACE_MOD", 
        "graphic": "02021.svg", 
        "category": "Launch Origin"
    }, 
    {
        "digits": "03", 
        "label": "Subsurface", 
        "id": "SUB_MOD", 
        "graphic": "02031.svg", 
        "category": "Launch Origin"
    }, 
    {
        "digits": "04", 
        "label": "Space", 
        "id": "SPACE_MOD", 
        "graphic": "02041.svg", 
        "category": "Launch Origin"
    }, 
    {
        "digits": "05", 
        "label": "Anti-Ballistic", 
        "id": "AB_MOD", 
        "graphic": "02051.svg", 
        "category": "Missile Class"
    }, 
    {
        "digits": "06", 
        "label": "Ballistic", 
        "id": "BALLISTIC_MOD", 
        "graphic": "02061.svg", 
        "category": "Missile Class"
    }, 
    {
        "digits": "07", 
        "label": "Cruise", 
        "id": "CRUISE_MOD", 
        "graphic": "02071.svg", 
        "category": "Missile Class"
    }, 
    {
        "digits": "08", 
        "label": "Interceptor", 
        "id": "INTERCEPTOR_MOD", 
        "graphic": "02081.svg", 
        "category": "Missile Class"
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
        "label": "Air", 
        "id": "AIR_DEST_MOD", 
        "graphic": "02012.svg", 
        "category": "Missile Destination"
    }, 
    {
        "digits": "02", 
        "label": "Surface", 
        "id": "SURFACE_DEST_MOD", 
        "graphic": "02022.svg", 
        "category": "Missile Destination"
    }, 
    {
        "digits": "03", 
        "label": "Subsurface", 
        "id": "SUB_DEST_MOD", 
        "graphic": "02032.svg", 
        "category": "Missile Destination"
    }, 
    {
        "digits": "04", 
        "label": "Space", 
        "id": "SPACE_DEST_MOD", 
        "graphic": "02042.svg", 
        "category": "Missile Destination"
    }, 
    {
        "digits": "05", 
        "label": "Launched", 
        "id": "LAUNCHED_MOD", 
        "graphic": "02052.svg", 
        "category": "Missile Status"
    }, 
    {
        "digits": "06", 
        "label": "Missile", 
        "id": "MISSILE_MOD", 
        "graphic": "02062.svg", 
        "remarks": "APP-6", 
        "category": "Missile Status"
    }, 
    {
        "digits": "07", 
        "label": "Patriot", 
        "id": "PATRIOT_MOD", 
        "graphic": "02072.svg", 
        "limitUseTo": [
            "INTERCEPTOR_MOD"
        ], 
        "category": "Missile Type-BMD"
    }, 
    {
        "digits": "08", 
        "label": "Standard Missile-2 (SM-2)", 
        "id": "SM2_MOD", 
        "graphic": "02082.svg", 
        "limitUseTo": [
            "INTERCEPTOR_MOD"
        ], 
        "category": "Missile Type-AAW"
    }, 
    {
        "digits": "09", 
        "label": "Standard Missile-6 (SM-6)", 
        "id": "SM6_MOD", 
        "graphic": "02092.svg", 
        "limitUseTo": [
            "INTERCEPTOR_MOD"
        ], 
        "category": "Missile Type-AAW"
    }, 
    {
        "digits": "10", 
        "label": "Evolved Sea Sparrow Missile (ESSM)", 
        "id": "ESSM_MOD", 
        "graphic": "02102.svg", 
        "limitUseTo": [
            "INTERCEPTOR_MOD"
        ], 
        "category": "Missile Type-AAW"
    }, 
    {
        "digits": "11", 
        "label": "Rolling Airframe Missile (RAM)", 
        "id": "RAM_MOD", 
        "graphic": "02112.svg", 
        "limitUseTo": [
            "INTERCEPTOR_MOD"
        ], 
        "category": "Missile Type-AAW"
    }, 
    {
        "digits": "12", 
        "label": "Short Range", 
        "id": "SHORT_MOD", 
        "graphic": "02122.svg", 
        "remarks": "1000km or less.", 
        "category": "Missile Range"
    }, 
    {
        "digits": "13", 
        "label": "Medium Range", 
        "id": "MED_MOD", 
        "graphic": "02132.svg", 
        "remarks": "1000km to 3500km. Typically used in reference to surface-to-air missiles.", 
        "category": "Missile Range"
    }, 
    {
        "digits": "14", 
        "label": "Intermediate Range", 
        "id": "INTER_MOD", 
        "graphic": "02142.svg", 
        "remarks": "1000km to 3500km. Typically used in reference to ballistic missiles.", 
        "category": "Missile Range"
    }, 
    {
        "digits": "15", 
        "label": "Long Range", 
        "id": "LONG_MOD", 
        "graphic": "02152.svg", 
        "remarks": "3500km to 5500km.", 
        "category": "Missile Range"
    }, 
    {
        "digits": "16", 
        "label": "Intercontinental", 
        "id": "INTERCONT_MOD", 
        "graphic": "02162.svg", 
        "remarks": "5500km or greater.", 
        "category": "Missile Range"
    }
];

export const graphicFolder = {
    "entities": "Appendices/Air", 
    "modifierTwos": "Appendices/Air/mod2", 
    "modifierOnes": "Appendices/Air/mod1"
};

