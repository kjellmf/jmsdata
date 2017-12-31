/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity} from "types";

export const digits = "11";
export const label = "Land Civilian";
export const id = "SS_LAND_CIVILIAN";
export const dimensionId = "LAND_UNIT";
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
        "label": "Civilian", 
        "id": "CIVILIAN", 
        "graphic": "11110000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Environmental Protection", 
                "id": "ENVIRONMENTAL_PROTECTION", 
                "graphic": "11110100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Government Organization", 
                "id": "GOVERNMENT_ORGANIZATION", 
                "graphic": "11110200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Individual", 
                "id": "INDIVIDUAL", 
                "graphic": "11110300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Organization or Group", 
                "id": "ORGANIZATION", 
                "graphic": "11110400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Killing Victim", 
                "id": "KILLING_VICTIM", 
                "graphic": "11110500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Killing Victims", 
                "id": "KILLING_VICTIMS", 
                "graphic": "11110600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Victim of an Attempted Crime", 
                "id": "VICTIM_ATTEMPTED_CRIME", 
                "graphic": "11110700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Spy", 
                "id": "SPY", 
                "graphic": "11110800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Composite Loss", 
                "id": "COMPOSITE_LOSS", 
                "graphic": "11110900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Emergency Medical Operation", 
                "id": "EMERGENCY_MEDICAL_OPERATION", 
                "graphic": "11111000.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }
];
