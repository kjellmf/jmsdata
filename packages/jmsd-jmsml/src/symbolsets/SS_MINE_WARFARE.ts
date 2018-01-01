/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "36";
export const label = "Mine Warfare";
export const id = "SS_MINE_WARFARE";
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
        "label": "Sea Mine-General", 
        "id": "SEA_MINE_GENERAL", 
        "graphic": "36110000.svg", 
        "alternativeGraphic": "36110000_a.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Sea Mine-Bottom", 
                "id": "SEA_MINE_BOTTOM", 
                "graphic": "36110100.svg", 
                "alternativeGraphic": "36110100_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Sea Mine-Moored", 
                "id": "SEA_MINE_MOORED", 
                "graphic": "36110200.svg", 
                "alternativeGraphic": "36110200_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Sea Mine-Floating", 
                "id": "SEA_MINE_FLOATING", 
                "graphic": "36110300.svg", 
                "alternativeGraphic": "36110300_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Sea Mine-Rising", 
                "id": "SEA_MINE_RISING", 
                "graphic": "36110400.svg", 
                "alternativeGraphic": "36110400_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Sea Mine-Other Position", 
                "id": "SEA_MINE_OTHER_POSITION", 
                "graphic": "36110500.svg", 
                "alternativeGraphic": "36110500_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Kingfisher", 
                "id": "KINGFISHER", 
                "alternativeGraphic": "36110600_a.svg", 
                "remarks": "There is no MEDAL icon associated with this symbol.", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Small Object-Mine-Like", 
                "id": "SMALL_OBJECT_MINE_LIKE", 
                "alternativeGraphic": "36110700_a.svg", 
                "remarks": "There is no MEDAL icon associated with this symbol.", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Exercise Mine-General", 
                "id": "EXERCISE_MINE_GENERAL", 
                "graphic": "36110800.svg", 
                "alternativeGraphic": "36110800_a.svg", 
                "remarks": "Used with exercise frame only", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Exercise Mine-Bottom", 
                        "id": "EXERCISE_MINE_BOTTOM", 
                        "graphic": "36110801.svg", 
                        "alternativeGraphic": "36110801_a.svg", 
                        "remarks": "Used with exercise frame only", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Exercise Mine-Moored", 
                        "id": "EXERCISE_MINE_MOORED", 
                        "graphic": "36110802.svg", 
                        "alternativeGraphic": "36110802_a.svg", 
                        "remarks": "Used with exercise frame only", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Exercise Mine-Floating", 
                        "id": "EXERCISE_MINE_FLOATING", 
                        "graphic": "36110803.svg", 
                        "alternativeGraphic": "36110803_a.svg", 
                        "remarks": "Used with exercise frame only", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Exercise Mine-Rising", 
                        "id": "EXERCISE_MINE_RISING", 
                        "graphic": "36110804.svg", 
                        "alternativeGraphic": "36110804_a.svg", 
                        "remarks": "Used with exercise frame only", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "09", 
                "label": "Neutralized Mine-General", 
                "id": "NEUTRALIZED_MINE_GENERAL", 
                "graphic": "36110900.svg", 
                "alternativeGraphic": "36110900_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Neutralized Mine-Bottom", 
                        "id": "NEUTRALIZED_MINE_BOTTOM", 
                        "graphic": "36110901.svg", 
                        "alternativeGraphic": "36110901_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Neutralized Mine-Moored", 
                        "id": "NEUTRALIZED_MINE_MOORED", 
                        "graphic": "36110902.svg", 
                        "alternativeGraphic": "36110902_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Neutralized Mine-Floating", 
                        "id": "NEUTRALIZED_MINE_FLOATING", 
                        "graphic": "36110903.svg", 
                        "alternativeGraphic": "36110903_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Neutralized Mine-Rising", 
                        "id": "NEUTRALIZED_MINE_RISING", 
                        "graphic": "36110904.svg", 
                        "alternativeGraphic": "36110904_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Neutralized Mine-Other Position", 
                        "id": "NEUTRALIZED_MINE_OTHER_POSITION", 
                        "graphic": "36110905.svg", 
                        "alternativeGraphic": "36110905_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "12", 
        "label": "Unexploded Ordnance", 
        "id": "UNEXPLODED_ORDNANCE", 
        "graphic": "36120000.svg", 
        "alternativeGraphic": "36120000_a.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }, 
    {
        "digits": "13", 
        "label": "Sea Mine Decoy", 
        "id": "SEA_MINE_DECOY", 
        "graphic": "36130000.svg", 
        "alternativeGraphic": "36130000_a.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Sea Mine Decoy-Bottom", 
                "id": "SEA_MINE_DECOY_BOTTOM", 
                "graphic": "36130100.svg", 
                "alternativeGraphic": "36130100_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Sea Mine Decoy-Moored", 
                "id": "SEA_MINE_DECOY_MOORED", 
                "graphic": "36130200.svg", 
                "alternativeGraphic": "36130200_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "14", 
        "label": "Mine-Like Contact (MILCO)", 
        "id": "MINE_LIKE_CONTACT_MILCO", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "MILCO - General", 
                "id": "MILCO_GENERAL", 
                "graphic": "36140100.svg", 
                "alternativeGraphic": "36140100_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "MILCO - General-Confidence-Level 1", 
                        "id": "MILCO_GENERAL_CONFIDENCE_LEVEL_1", 
                        "graphic": "36140101.svg", 
                        "alternativeGraphic": "36140101_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "MILCO - General-Confidence-Level 2", 
                        "id": "MILCO_GENERAL_CONFIDENCE_LEVEL_2", 
                        "graphic": "36140102.svg", 
                        "alternativeGraphic": "36140102_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "MILCO - General-Confidence-Level 3", 
                        "id": "MILCO_GENERAL_CONFIDENCE_LEVEL_3", 
                        "graphic": "36140103.svg", 
                        "alternativeGraphic": "36140103_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "MILCO - General-Confidence-Level 4", 
                        "id": "MILCO_GENERAL_CONFIDENCE_LEVEL_4", 
                        "graphic": "36140104.svg", 
                        "alternativeGraphic": "36140104_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "MILCO - General-Confidence-Level 5", 
                        "id": "MILCO_GENERAL_CONFIDENCE_LEVEL_5", 
                        "graphic": "36140105.svg", 
                        "alternativeGraphic": "36140105_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "MILCO - Bottom", 
                "id": "MILCO_BOTTOM", 
                "graphic": "36140200.svg", 
                "alternativeGraphic": "36140200_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "MILCO - Bottom-Confidence-Level 1", 
                        "id": "MILCO_BOTTOM_CONFIDENCE_LEVEL_1", 
                        "graphic": "36140201.svg", 
                        "alternativeGraphic": "36140201_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "MILCO - Bottom-Confidence-Level 2", 
                        "id": "MILCO_BOTTOM_CONFIDENCE_LEVEL_2", 
                        "graphic": "36140202.svg", 
                        "alternativeGraphic": "36140202_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "MILCO - Bottom-Confidence-Level 3", 
                        "id": "MILCO_BOTTOM_CONFIDENCE_LEVEL_3", 
                        "graphic": "36140203.svg", 
                        "alternativeGraphic": "36140203_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "MILCO - Bottom-Confidence-Level 4", 
                        "id": "MILCO_BOTTOM_CONFIDENCE_LEVEL_4", 
                        "graphic": "36140204.svg", 
                        "alternativeGraphic": "36140204_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "MILCO - Bottom-Confidence-Level 5", 
                        "id": "MILCO_BOTTOM_CONFIDENCE_LEVEL_5", 
                        "graphic": "36140205.svg", 
                        "alternativeGraphic": "36140205_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "MILCO - Moored", 
                "id": "MILCO_MOORED", 
                "graphic": "36140300.svg", 
                "alternativeGraphic": "36140300_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "MILCO - Moored-Confidence-Level 1", 
                        "id": "MILCO_MOORED_CONFIDENCE_LEVEL_1", 
                        "graphic": "36140301.svg", 
                        "alternativeGraphic": "36140301_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "MILCO - Moored-Confidence-Level 2", 
                        "id": "MILCO_MOORED_CONFIDENCE_LEVEL_2", 
                        "graphic": "36140302.svg", 
                        "alternativeGraphic": "36140302_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "MILCO - Moored-Confidence-Level 3", 
                        "id": "MILCO_MOORED_CONFIDENCE_LEVEL_3", 
                        "graphic": "36140303.svg", 
                        "alternativeGraphic": "36140303_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "MILCO - Moored-Confidence-Level 4", 
                        "id": "MILCO_MOORED_CONFIDENCE_LEVEL_4", 
                        "graphic": "36140304.svg", 
                        "alternativeGraphic": "36140304_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "MILCO - Moored-Confidence-Level 5", 
                        "id": "MILCO_MOORED_CONFIDENCE_LEVEL_5", 
                        "graphic": "36140305.svg", 
                        "alternativeGraphic": "36140305_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "MILCO - Floating", 
                "id": "MILCO_FLOATING", 
                "graphic": "36140400.svg", 
                "alternativeGraphic": "36140400_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "MILCO - Floating-Confidence-Level 1", 
                        "id": "MILCO_FLOATING_CONFIDENCE_LEVEL_1", 
                        "graphic": "36140401.svg", 
                        "alternativeGraphic": "36140401_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "MILCO - Floating-Confidence-Level 2", 
                        "id": "MILCO_FLOATING_CONFIDENCE_LEVEL_2", 
                        "graphic": "36140402.svg", 
                        "alternativeGraphic": "36140402_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "MILCO - Floating-Confidence-Level 3", 
                        "id": "MILCO_FLOATING_CONFIDENCE_LEVEL_3", 
                        "graphic": "36140403.svg", 
                        "alternativeGraphic": "36140403_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "MILCO - Floating-Confidence-Level 4", 
                        "id": "MILCO_FLOATING_CONFIDENCE_LEVEL_4", 
                        "graphic": "36140404.svg", 
                        "alternativeGraphic": "36140404_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "MILCO - Floating-Confidence-Level 5", 
                        "id": "MILCO_FLOATING_CONFIDENCE_LEVEL_5", 
                        "graphic": "36140405.svg", 
                        "alternativeGraphic": "36140405_a.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "15", 
        "label": "Mine-Like Echo (MILEC)-General", 
        "id": "MINE_LIKE_ECHO_MILEC_GENERAL", 
        "graphic": "36150000.svg", 
        "alternativeGraphic": "36150000_a.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Mine-Like Echo-Bottom", 
                "id": "MINE_LIKE_ECHO_BOTTOM", 
                "graphic": "36150100.svg", 
                "alternativeGraphic": "36150100_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Mine-Like Echo-Moored", 
                "id": "MINE_LIKE_ECHO_MOORED", 
                "graphic": "36150200.svg", 
                "alternativeGraphic": "36150200_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Mine-Like Echo-Floating", 
                "id": "MINE_LIKE_ECHO_FLOATING", 
                "graphic": "36150300.svg", 
                "alternativeGraphic": "36150300_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "16", 
        "label": "Negative Reacquisition-General", 
        "id": "NEGATIVE_REACQUISITION_GENERAL", 
        "graphic": "36160000.svg", 
        "alternativeGraphic": "36160000_a.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Negative Reacquisition-Bottom", 
                "id": "NEGATIVE_REACQUISITION_BOTTOM", 
                "graphic": "36160100.svg", 
                "alternativeGraphic": "36160100_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Negative Reacquisition-Moored", 
                "id": "NEGATIVE_REACQUISITION_MOORED", 
                "graphic": "36160200.svg", 
                "alternativeGraphic": "36160200_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Negative Reacquisition-Floating", 
                "id": "NEGATIVE_REACQUISITION_FLOATING", 
                "graphic": "36160300.svg", 
                "alternativeGraphic": "36160300_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "17", 
        "label": "Obstructor", 
        "id": "OBSTRUCTOR", 
        "graphic": "36170000.svg", 
        "alternativeGraphic": "36170000_a.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Neutralized Obstructor", 
                "id": "NEUTRALIZED_OBSTRUCTOR", 
                "graphic": "36170100.svg", 
                "alternativeGraphic": "36170100_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "18", 
        "label": "General Mine Anchor", 
        "id": "GENERAL_MINE_ANCHOR", 
        "graphic": "36180000.svg", 
        "alternativeGraphic": "36180000_a.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }, 
    {
        "digits": "19", 
        "label": "Non-Mine Mine-Like Object (NMLO)-General", 
        "id": "NON_MINE_MINE_LIKE_NMLO_GENERAL", 
        "graphic": "36190000.svg", 
        "alternativeGraphic": "36190000_a.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Non-Mine Mine-Like Object-Bottom", 
                "id": "NON_MINE_MINE_LIKE_BOTTOM", 
                "graphic": "36190100.svg", 
                "alternativeGraphic": "36190100_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Non-Mine Mine-Like Object-Moored", 
                "id": "NON_MINE_MINE_LIKE_MOORED", 
                "graphic": "36190200.svg", 
                "alternativeGraphic": "36190200_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Non-Mine Mine-Like Object-Floating", 
                "id": "NON_MINE_MINE_LIKE_FLOATING", 
                "graphic": "36190300.svg", 
                "alternativeGraphic": "36190300_a.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "20", 
        "label": "Environmental Report Location", 
        "id": "ENVIRONMENTAL_REPORT_LOCATION", 
        "graphic": "36200000.svg", 
        "alternativeGraphic": "36200000_a.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }, 
    {
        "digits": "21", 
        "label": "Dive Report Location", 
        "id": "DIVE_REPORT_LOCATION", 
        "graphic": "36210000.svg", 
        "alternativeGraphic": "36210000_a.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": []
    }
];

export const specialEntitySubTypes = <EntitySubType[]>[];

export const sectorOneModifiers = <Modifier[]>[];

export const sectorTwoModifiers = <Modifier[]>[];

export const graphicFolder = {
    "entities": "Appendices/SeaSubsurface", 
    "modifierTwos": "Appendices/SeaSubsurface/mod2", 
    "modifierOnes": "Appendices/SeaSubsurface/mod1"
};

