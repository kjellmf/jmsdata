/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "06";
export const label = "Space Missile";
export const id = "SS_SPACE_MISSILE";
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
        "label": "Missile", 
        "id": "MISSILE", 
        "graphic": "06110000.svg", 
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
        "label": "Ballistic", 
        "id": "BALLISTIC_MOD", 
        "graphic": "06011.svg", 
        "category": "Missile Class"
    }, 
    {
        "digits": "02", 
        "label": "Space", 
        "id": "SPACE_1_MOD", 
        "graphic": "06021.svg", 
        "category": "Launch Origin"
    }, 
    {
        "digits": "03", 
        "label": "Interceptor", 
        "id": "INTERCEPTOR_MOD", 
        "graphic": "06031.svg", 
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
        "label": "Short Range", 
        "id": "SHORT_MOD", 
        "graphic": "06012.svg", 
        "remarks": "1000km or less", 
        "category": "Missile Range"
    }, 
    {
        "digits": "02", 
        "label": "Medium Range", 
        "id": "MEDIUM_MOD", 
        "graphic": "06022.svg", 
        "remarks": "1000km to 3500km", 
        "category": "Missile Range"
    }, 
    {
        "digits": "03", 
        "label": "Intermediate Range", 
        "id": "INTERMEDIATE_MOD", 
        "graphic": "06032.svg", 
        "remarks": "1000km to 3500km", 
        "category": "Missile Range"
    }, 
    {
        "digits": "04", 
        "label": "Long Range", 
        "id": "LONG_MOD", 
        "graphic": "06042.svg", 
        "remarks": "3500km to 5500km", 
        "category": "Missile Range"
    }, 
    {
        "digits": "05", 
        "label": "Intercontinental", 
        "id": "INTERCONTINENTAL_MOD", 
        "graphic": "06052.svg", 
        "remarks": "5500km or greater", 
        "category": "Missile Range"
    }, 
    {
        "digits": "06", 
        "label": "Arrow", 
        "id": "ARROW_MOD", 
        "graphic": "06062.svg", 
        "limitUseTo": [
            "INTERCEPTOR_MOD"
        ], 
        "category": "Missile Type - BMD"
    }, 
    {
        "digits": "07", 
        "label": "Ground-Based Interceptor (GBI)", 
        "id": "GBI_MOD", 
        "graphic": "06072.svg", 
        "limitUseTo": [
            "INTERCEPTOR_MOD"
        ], 
        "category": "Missile Type - BMD"
    }, 
    {
        "digits": "08", 
        "label": "Patriot", 
        "id": "PATRIOT_MOD", 
        "graphic": "06082.svg", 
        "limitUseTo": [
            "INTERCEPTOR_MOD"
        ], 
        "category": "Missile Type - BMD"
    }, 
    {
        "digits": "09", 
        "label": "Standard Missile - Terminal Phase (SM-T)", 
        "id": "SMT_MOD", 
        "graphic": "06092.svg", 
        "limitUseTo": [
            "INTERCEPTOR_MOD"
        ], 
        "category": "Missile Type - BMD"
    }, 
    {
        "digits": "10", 
        "label": "Standard Missile - 3 (SM-3)", 
        "id": "SM3_MOD", 
        "graphic": "06102.svg", 
        "limitUseTo": [
            "INTERCEPTOR_MOD"
        ], 
        "category": "Missile Type - BMD"
    }, 
    {
        "digits": "11", 
        "label": "Terminal High-Altitude Area Defense (THAAD)", 
        "id": "THAAD_MOD", 
        "graphic": "06112.svg", 
        "limitUseTo": [
            "INTERCEPTOR_MOD"
        ], 
        "category": "Missile Type - BMD"
    }, 
    {
        "digits": "12", 
        "label": "Space", 
        "id": "SPACE_2_MOD", 
        "graphic": "06122.svg", 
        "category": "Launch Origin"
    }
];

export const graphicFolder = {
    "entities": "Appendices/Space", 
    "modifierTwos": "Appendices/Space/mod2", 
    "modifierOnes": "Appendices/Space/mod1"
};

