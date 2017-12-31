/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity} from "types";

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
