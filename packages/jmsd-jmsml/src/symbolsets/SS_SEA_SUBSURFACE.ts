/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity} from "types";

export const digits = "35";
export const label = "Sea Subsurface";
export const id = "SS_SEA_SUBSURFACE";
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
        "label": "Military", 
        "id": "MILITARY", 
        "graphic": "35110000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Submarine", 
                "id": "SUBMARINE", 
                "graphic": "35110100.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Submarine-Surfaced", 
                        "id": "SUBMARINE_SURFACED", 
                        "graphic": "35110101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Submarine-Snorkeling", 
                        "id": "SUBMARINE_SNORKELING", 
                        "graphic": "35110102.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Submarine-Bottomed", 
                        "id": "SUBMARINE_BOTTOMED", 
                        "graphic": "35110103.svg"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Other Submersible", 
                "id": "OTHER_SUBMERSIBLE", 
                "graphic": "35110200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Nonsubmarine", 
                "id": "NONSUBMARINE", 
                "graphic": "35110300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Autonomous Underwater Vehicle (AUV)/Unmanned Underwater Vehicle (UUV)", 
                "id": "AUV_UUV", 
                "graphic": "35110400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Diver", 
                "id": "DIVER", 
                "graphic": "35110500.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "12", 
        "label": "Civilian", 
        "id": "CIVILIAN", 
        "graphic": "35120000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Submersible", 
                "id": "SUBMERSIBLE_CIV", 
                "graphic": "35120100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Autonomous Underwater Vehicle (AUV)/ Underwater Vehicle (UUV)", 
                "id": "AUV_UUV_CIV", 
                "graphic": "35120200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Diver", 
                "id": "DIVER_CIV", 
                "graphic": "35120300.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "13", 
        "label": "Weapon", 
        "id": "WEAPON", 
        "graphic": "35130000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Torpedo", 
                "id": "TORPEDO", 
                "graphic": "35130100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Improvised Explosive Device (IED)", 
                "id": "IMPROVISED_EXPLOSIVE_DEVICE_IED", 
                "graphic": "35130200.svg", 
                "remarks": "Used with hostile standard identity only.", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Decoy", 
                "id": "DECOY", 
                "graphic": "35130300.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "14", 
        "label": "Echo Tracker Classifier (ETC) / Possible Contact (POSCON)", 
        "id": "ECHO_TRACKER_CLASSIFIER_ETC_POSSIBLE_CONTACT_POSCON", 
        "graphic": "35140000.svg", 
        "remarks": "All ETC/POSCON tracks shall have a pending standard identity frame.", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }, 
    {
        "digits": "15", 
        "label": "Fused Track", 
        "id": "FUSED_TRACK", 
        "graphic": "35150000.svg", 
        "remarks": "All fused tracks shall have a pending standard identity frame.", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }, 
    {
        "digits": "16", 
        "label": "Manual Track", 
        "id": "MANUAL_TRACK", 
        "graphic": "35160000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }
];
