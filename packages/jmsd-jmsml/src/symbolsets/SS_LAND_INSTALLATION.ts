/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity} from "types";

export const digits = "20";
export const label = "Land Installation";
export const id = "SS_LAND_INSTALLATION";
export const dimensionId = "LAND_INSTALLATION";
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
        "label": "Installation", 
        "id": "INSTALLATION", 
        "graphic": "20110000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Aircraft Production/Assembly", 
                "id": "AIRCRAFT_PRODUCTION_ASSEMBLY", 
                "graphic": "20110100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Ammunition and Explosives/Assembly", 
                "id": "AMMUNITION_EXPLOSIVES_ASSEMBLY", 
                "graphic": "20110200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Ammunition Cache", 
                "id": "AMMUNITION_CACHE", 
                "cloverGraphic": "20110300_0.svg", 
                "diamondGraphic": "20110300_3.svg", 
                "rectangleGraphic": "20110300_1.svg", 
                "squareGraphic": "20110300_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Armament Production", 
                "id": "ARMAMENT_PRODUCTION", 
                "graphic": "20110400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Black List Location", 
                "id": "BLACK_LIST_LOCATION", 
                "graphic": "20110500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Chemical-Biological-Radiological and Nuclear (CBRN)", 
                "id": "CBRN", 
                "graphic": "20110600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Engineering Equipment Production", 
                "id": "ENGINEERING_EQUIPMENT_PRODUCTION", 
                "graphic": "20110700.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Bridge", 
                        "id": "BRIDGE", 
                        "graphic": "20110701.svg"
                    }
                ]
            }, 
            {
                "digits": "08", 
                "label": "Equipment Manufacture", 
                "id": "EQUIPMENT_MANUFACTURE", 
                "graphic": "20110800.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Government Leadership", 
                "id": "GOVERNMENT_LEADERSHIP", 
                "graphic": "20110900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Gray List Location", 
                "id": "GRAY_LIST_LOCATION", 
                "graphic": "20111000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Mass Grave Site", 
                "id": "MASS_GRAVE_SITE", 
                "graphic": "20111100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Materiel", 
                "id": "MATERIEL", 
                "cloverGraphic": "20111200_0.svg", 
                "diamondGraphic": "20111200_3.svg", 
                "rectangleGraphic": "20111200_1.svg", 
                "squareGraphic": "20111200_2.svg", 
                "icon": "FULL_FRAME", 
                "entitySubTypes": []
            }, 
            {
                "digits": "13", 
                "label": "Mine", 
                "id": "MINE", 
                "graphic": "20111300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Missile and Space System Production", 
                "id": "MISSILE_SPACE_SYSTEM_PRODUCTION", 
                "graphic": "20111400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "15", 
                "label": "Nuclear (Non CBRN Defense)", 
                "id": "NUCLEAR_DEFENSE", 
                "graphic": "20111500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "16", 
                "label": "Printed Media", 
                "id": "PRINTED_MEDIA", 
                "graphic": "20111600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Safe House", 
                "id": "SAFE_HOUSE", 
                "graphic": "20111700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "18", 
                "label": "White List Location", 
                "id": "WHITE_LIST_LOCATION", 
                "graphic": "20111800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "19", 
                "label": "Tented Camp", 
                "id": "TENTED_CAMP", 
                "graphic": "20111900.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Displaced Persons / Refugee / Evacuees Camp", 
                        "id": "DISPLACED_PERSONS_CAMP", 
                        "graphic": "20111901.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Training Camp", 
                        "id": "TRAINING_CAMP", 
                        "graphic": "20111902.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "20", 
                "label": "Warehouse/Storage Facility", 
                "id": "WAREHOUSE_STORAGE_FACILITY", 
                "graphic": "20112000.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "21", 
                "label": "Law Enforcement", 
                "id": "LAW_ENFORCEMENT", 
                "graphic": "20112100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Bureau of Alcohol-Tobacco-Firearms and Explosives (ATF) (Department of Justice)", 
                        "id": "BUREAU_ATF", 
                        "graphic": "20112101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Border Patrol", 
                        "id": "BORDER_PATROL", 
                        "graphic": "20112102.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Customs Service", 
                        "id": "CUSTOMS_SERVICE", 
                        "graphic": "20112103.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Drug Enforcement Administration (DEA)", 
                        "id": "DRUG_ENFORCEMENT_ADMINISTRATION_DEA", 
                        "graphic": "20112104.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Department of Justice (DOJ)", 
                        "id": "DEPARTMENT_JUSTICE_DOJ", 
                        "graphic": "20112105.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Federal Bureau of Investigation (FBI)", 
                        "id": "FEDERAL_BUREAU_INVESTIGATION_FBI", 
                        "graphic": "20112106.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Police", 
                        "id": "POLICE", 
                        "graphic": "20112107.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Prison", 
                        "id": "PRISON", 
                        "graphic": "20112108.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "09", 
                        "label": "United States Secret Service (USSS)", 
                        "id": "UNITED_STATES_SECRET_SERVICE_USSS", 
                        "graphic": "20112109.svg"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Transportation Security Administration (TSA)", 
                        "id": "TRANSPORTATION_SECURITY_ADMINISTRATION_TSA", 
                        "graphic": "20112110.svg"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Coast Guard", 
                        "id": "COAST_GUARD", 
                        "graphic": "20112111.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "12", 
                        "label": "US Marshals Service", 
                        "id": "US_MARSHALS_SERVICE", 
                        "graphic": "20112112.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "22", 
                "label": "Emergency Operation", 
                "id": "EMERGENCY_OPERATION", 
                "graphic": "20112200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Fire Station", 
                        "id": "FIRE_STATION", 
                        "graphic": "20112201.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Emergency Medical Operation", 
                        "id": "EMERGENCY_MEDICAL_OPERATION", 
                        "graphic": "20112202.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "12", 
        "label": "Infrastructure", 
        "id": "INFRASTRUCTURE", 
        "remarks": "Reserved for hiearchical purposes.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Agriculture and Food Infrastructure", 
                "id": "AGRICULTURE_FOOD_INFRASTRUCTURE", 
                "graphic": "20120100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Agriculture Laboratory", 
                        "id": "AGRICULTURE_LABORATORY", 
                        "graphic": "20120101.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Animal Feedlot", 
                        "id": "ANIMAL_FEEDLOT", 
                        "graphic": "20120102.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Commercial Food Distribution Center", 
                        "id": "COMMERCIAL_FOOD_DISTRIBUTION", 
                        "cloverGraphic": "20120103_0.svg", 
                        "diamondGraphic": "20120103_3.svg", 
                        "rectangleGraphic": "20120103_1.svg", 
                        "squareGraphic": "20120103_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Farm/Ranch", 
                        "id": "FARM_RANCH", 
                        "graphic": "20120104.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Food Distribution", 
                        "id": "FOOD_DISTRIBUTION", 
                        "cloverGraphic": "20120105_0.svg", 
                        "diamondGraphic": "20120105_3.svg", 
                        "rectangleGraphic": "20120105_1.svg", 
                        "squareGraphic": "20120105_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Food Production Center", 
                        "id": "FOOD_PRODUCTION_CENTER", 
                        "cloverGraphic": "20120106_0.svg", 
                        "diamondGraphic": "20120106_3.svg", 
                        "rectangleGraphic": "20120106_1.svg", 
                        "squareGraphic": "20120106_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Food Retail", 
                        "id": "FOOD_RETAIL", 
                        "cloverGraphic": "20120107_0.svg", 
                        "diamondGraphic": "20120107_3.svg", 
                        "rectangleGraphic": "20120107_1.svg", 
                        "squareGraphic": "20120107_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Grain Storage", 
                        "id": "GRAIN_STORAGE", 
                        "graphic": "20120108.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Banking, Finance, and Insurance Infrastructure", 
                "id": "BANKING_INFRASTRUCTURE", 
                "graphic": "20120200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "ATM", 
                        "id": "ATM", 
                        "graphic": "20120201.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Bank", 
                        "id": "BANK", 
                        "graphic": "20120202.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Bullion Storage", 
                        "id": "BULLION_STORAGE", 
                        "graphic": "20120203.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Economic Infrastructure Asset", 
                        "id": "ECONOMIC_INFRASTRUCTURE_ASSET", 
                        "graphic": "20120204.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Federal Reserve Bank", 
                        "id": "FEDERAL_RESERVE_BANK", 
                        "graphic": "20120205.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Financial Exchange", 
                        "id": "FINANCIAL_EXCHANGE", 
                        "graphic": "20120206.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Financial Services-Other", 
                        "id": "FINANCIAL_SERVICES_OTHER", 
                        "graphic": "20120207.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Commercial Infrastructure", 
                "id": "COMMERCIAL_INFRASTRUCTURE", 
                "graphic": "20120300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Chemical Plant", 
                        "id": "CHEMICAL_PLANT", 
                        "graphic": "20120301.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Firearms Manufacturer", 
                        "id": "FIREARMS_MANUFACTURER", 
                        "graphic": "20120302.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Firearms Retailer", 
                        "id": "FIREARMS_RETAILER", 
                        "graphic": "20120303.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Hazardous Material Production", 
                        "id": "HAZARDOUS_MATERIAL_PRODUCTION", 
                        "graphic": "20120304.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Hazardous Material Storage", 
                        "id": "HAZARDOUS_MATERIAL_STORAGE", 
                        "graphic": "20120305.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Industrial Site", 
                        "id": "INDUSTRIAL_SITE", 
                        "graphic": "20120306.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Landfill", 
                        "id": "LANDFILL", 
                        "graphic": "20120307.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Pharmaceutical Manufacturer", 
                        "id": "PHARMACEUTICAL_MANUFACTURER", 
                        "graphic": "20120308.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Contaminated Hazardous Waste Site", 
                        "id": "CONTAMINATED_HAZARDOUS_WASTE_SITE", 
                        "graphic": "20120309.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Toxic Release Inventory", 
                        "id": "TOXIC_RELEASE_INVENTORY", 
                        "graphic": "20120310.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Educational Facilities Infrastructure", 
                "id": "EDUCATIONAL_FACILITIES_INFRASTRUCTURE", 
                "graphic": "20120400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "College/University", 
                        "id": "COLLEGE_UNIVERSITY", 
                        "graphic": "20120401.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "School", 
                        "id": "SCHOOL", 
                        "graphic": "20120402.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "05", 
                "label": "Energy Facility Infrastructure", 
                "id": "ENERGY_FACILITY_INFRASTRUCTURE", 
                "graphic": "20120500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Electric Power", 
                        "id": "ELECTRIC_POWER", 
                        "graphic": "20120501.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Generation Station", 
                        "id": "GENERATION_STATION", 
                        "graphic": "20120502.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Natural Gas Facility", 
                        "id": "NATURAL_GAS_FACILITY", 
                        "graphic": "20120503.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Petroleum Facility", 
                        "id": "PETROLEUM_FACILITY", 
                        "graphic": "20120504.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Petroleum/Gas/Oil", 
                        "id": "PETROLEUM_GAS_OIL", 
                        "graphic": "20120505.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Propane Facility", 
                        "id": "PROPANE_FACILITY", 
                        "graphic": "20120506.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Government Site Infrastructure", 
                "id": "GOVERNMENT_SITE_INFRASTRUCTURE", 
                "graphic": "20120600.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Medical Infrastructure", 
                "id": "MEDICAL_INFRASTRUCTURE", 
                "remarks": "No icon is assoicated with this entity. It is for hierarchal purposes only.", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Medical", 
                        "id": "MEDICAL", 
                        "cloverGraphic": "20120701_0.svg", 
                        "diamondGraphic": "20120701_3.svg", 
                        "rectangleGraphic": "20120701_1.svg", 
                        "squareGraphic": "20120701_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Medical Treatment Facility (Hospital)", 
                        "id": "MTF_HOSPITAL", 
                        "cloverGraphic": "20120702_0.svg", 
                        "diamondGraphic": "20120702_3.svg", 
                        "rectangleGraphic": "20120702_1.svg", 
                        "squareGraphic": "20120702_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "08", 
                "label": "Military Infrastructure", 
                "id": "MILITARY_INFRASTRUCTURE", 
                "graphic": "20120800.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Military Armory", 
                        "id": "MILITARY_ARMORY", 
                        "graphic": "20120801.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Military Base", 
                        "id": "MILITARY_BASE", 
                        "graphic": "20120802.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "09", 
                "label": "Postal Services Infrastructure", 
                "id": "POSTAL_SERVICES_INFRASTRUCTURE", 
                "graphic": "20120900.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Postal Distribution Center", 
                        "id": "POSTAL_DISTRIBUTION_CENTER", 
                        "graphic": "20120901.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Post Office", 
                        "id": "POST_OFFICE", 
                        "graphic": "20120902.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "10", 
                "label": "Public Venues Infrastructure", 
                "id": "PUBLIC_VENUES_INFRASTRUCTURE", 
                "graphic": "20121000.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Enclosed Facility", 
                        "id": "ENCLOSED_FACILITY", 
                        "graphic": "20121001.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Open Facility", 
                        "id": "OPEN_FACILITY", 
                        "graphic": "20121002.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Recreational Area", 
                        "id": "RECREATIONAL_AREA", 
                        "graphic": "20121003.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Religious Institution", 
                        "id": "RELIGIOUS_INSTITUTION", 
                        "graphic": "20121004.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "11", 
                "label": "Special Needs Infrastructure", 
                "id": "SPECIAL_NEEDS_INFRASTRUCTURE", 
                "graphic": "20121100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Adult Day Care", 
                        "id": "ADULT_DAY_CARE", 
                        "graphic": "20121101.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Child Day Care", 
                        "id": "CHILD_DAY_CARE", 
                        "graphic": "20121102.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Elder Care", 
                        "id": "ELDER_CARE", 
                        "graphic": "20121103.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "12", 
                "label": "Telecommunications Infrastructure", 
                "id": "TELECOMMUNICATIONS_INFRASTRUCTURE", 
                "graphic": "20121200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Broadcast Transmitter Antennae", 
                        "id": "BROADCAST_TRANSMITTER_ANTENNAE", 
                        "graphic": "20121201.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Telecommunications", 
                        "id": "TELECOMMUNICATIONS", 
                        "graphic": "20121202.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Telecommunications Tower", 
                        "id": "TELECOMMUNICATIONS_TOWER", 
                        "graphic": "20121203.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "13", 
                "label": "Transportation Infrastructure", 
                "id": "TRANSPORTATION_INFRASTRUCTURE", 
                "graphic": "20121300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Airport/Air Base", 
                        "id": "AIRPORT_AIR_BASE", 
                        "graphic": "20121301.svg", 
                        "icon": "MAIN_1"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Air Traffic Control Facility", 
                        "id": "ATC_FACILITY", 
                        "graphic": "20121302.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Bus Station", 
                        "id": "BUS_STATION", 
                        "graphic": "20121303.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Ferry Terminal", 
                        "id": "FERRY_TERMINAL", 
                        "graphic": "20121304.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Helicopter Landing Site", 
                        "id": "HELICOPTER_LANDING_SITE", 
                        "graphic": "20121305.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Maintenance Facility", 
                        "id": "MAINTENANCE_FACILITY", 
                        "graphic": "20121306.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Railhead/Railroad Station", 
                        "id": "RAILHEAD_RAILROAD_STATION", 
                        "graphic": "20121307.svg", 
                        "icon": "MAIN_1"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Rest Stop", 
                        "id": "REST_STOP", 
                        "graphic": "20121308.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Sea Port/Naval Base", 
                        "id": "SEA_PORT_NAVAL_BASE", 
                        "graphic": "20121309.svg", 
                        "icon": "MAIN_1"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Ship Yard", 
                        "id": "SHIP_YARD", 
                        "graphic": "20121310.svg", 
                        "icon": "MAIN_1"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Toll Facility", 
                        "id": "TOLL_FACILITY", 
                        "graphic": "20121311.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "12", 
                        "label": "Traffic Inspection Facility", 
                        "id": "TRAFFIC_INSPECTION_FACILITY", 
                        "graphic": "20121312.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "13", 
                        "label": "Tunnel", 
                        "id": "TUNNEL", 
                        "graphic": "20121313.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "14", 
                "label": "Water Supply Infrastructure", 
                "id": "WATER_SUPPLY_INFRASTRUCTURE", 
                "graphic": "20121400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Control Valve", 
                        "id": "CONTROL_VALVE", 
                        "graphic": "20121401.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Dam", 
                        "id": "DAM", 
                        "graphic": "20121402.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Discharge Outfall", 
                        "id": "DISCHARGE_OUTFALL", 
                        "graphic": "20121403.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Ground Water Well", 
                        "id": "GROUND_WATER_WELL", 
                        "graphic": "20121404.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Pumping Station", 
                        "id": "PUMPING_STATION", 
                        "graphic": "20121405.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Reservoir", 
                        "id": "RESERVOIR", 
                        "graphic": "20121406.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Storage Tower", 
                        "id": "STORAGE_TOWER", 
                        "graphic": "20121407.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Surface Water Intake", 
                        "id": "SURFACE_WATER_INTAKE", 
                        "graphic": "20121408.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Wastewater Treatment Facility", 
                        "id": "WASTEWATER_TREATMENT_FACILITY", 
                        "graphic": "20121409.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Water", 
                        "id": "WATER", 
                        "graphic": "20121410.svg"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Water Treatment", 
                        "id": "WATER_TREATMENT", 
                        "graphic": "20121411.svg"
                    }
                ]
            }
        ]
    }
];
