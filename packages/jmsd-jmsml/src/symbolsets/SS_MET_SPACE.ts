/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "47";
export const label = "Meteorological - Space";
export const id = "SS_MET_SPACE";
export const dimensionId = "METOC";
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
        "label": "Space", 
        "id": "SPACE", 
        "remarks": "Reserved for hiearchical purposes.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": []
    }
];

export const specialEntitySubTypes = <EntitySubType[]>[];

export const sectorOneModifiers = <Modifier[]>[];

export const sectorTwoModifiers = <Modifier[]>[];

export const graphicFolder = {
    "entities": "Appendices/METOC/Space"
};

