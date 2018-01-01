/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "40";
export const label = "Activities";
export const id = "SS_ACTIVITY";
export const dimensionId = "ACTIVITY";
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
        "label": "Incident", 
        "id": "INCIDENT", 
        "remarks": "Reserved for hiearchical purposes.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Criminal Activity Incident", 
                "id": "CRIMINAL_ACTIVITY_INCIDENT", 
                "graphic": "40110100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Arrest", 
                        "id": "ARREST", 
                        "graphic": "40110101.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Arson", 
                        "id": "ARSON", 
                        "graphic": "40110102.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Attempted Criminal Activity", 
                        "id": "ATTEMPTED_CRIMINAL_ACTIVITY", 
                        "graphic": "40110103.svg", 
                        "remarks": "APP-6C"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Drive-by Shooting", 
                        "id": "DRIVE_BY_SHOOTING", 
                        "graphic": "40110104.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Drug Related", 
                        "id": "DRUG_RELATED", 
                        "graphic": "40110105.svg", 
                        "remarks": "APP-6C"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Extortion", 
                        "id": "EXTORTION", 
                        "graphic": "40110106.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Graffiti", 
                        "id": "GRAFFITI", 
                        "graphic": "40110107.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Killing", 
                        "id": "KILLING", 
                        "graphic": "40110108.svg"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Poisoning", 
                        "id": "POISONING", 
                        "graphic": "40110109.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Civil Rioting", 
                        "id": "CIVIL_RIOTING", 
                        "graphic": "40110110.svg"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Booby Trap", 
                        "id": "BOOBY_TRAP", 
                        "graphic": "40110111.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "12", 
                        "label": "Home Eviction", 
                        "id": "HOME_EVICTION", 
                        "graphic": "40110112.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "13", 
                        "label": "Black Marketing", 
                        "id": "BLACK_MARKETING", 
                        "graphic": "40110113.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "14", 
                        "label": "Vandalism / Loot / Ransack / Plunder", 
                        "id": "VANDALISM_LOOT_RANSACK_PLUNDER", 
                        "graphic": "40110114.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "15", 
                        "label": "Jail Break", 
                        "id": "JAIL_BREAK", 
                        "graphic": "40110115.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "16", 
                        "label": "Robbery", 
                        "id": "ROBBERY", 
                        "graphic": "40110116.svg"
                    }, 
                    {
                        "digits": "17", 
                        "label": "Theft", 
                        "id": "THEFT", 
                        "graphic": "40110117.svg"
                    }, 
                    {
                        "digits": "18", 
                        "label": "Burglary", 
                        "id": "BURGLARY", 
                        "graphic": "40110118.svg"
                    }, 
                    {
                        "digits": "19", 
                        "label": "Smuggling", 
                        "id": "SMUGGLING", 
                        "graphic": "40110119.svg"
                    }, 
                    {
                        "digits": "20", 
                        "label": "Rock Throwing", 
                        "id": "ROCK_THROWING", 
                        "graphic": "40110120.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "21", 
                        "label": "Dead Body", 
                        "id": "DEAD_BODY", 
                        "graphic": "40110121.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "22", 
                        "label": "Sabotage", 
                        "id": "SABOTAGE", 
                        "graphic": "40110122.svg"
                    }, 
                    {
                        "digits": "23", 
                        "label": "Suspicious Activity", 
                        "id": "SUSPICIOUS_ACTIVITY", 
                        "graphic": "40110123.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Bomb/Bombing", 
                "id": "BOMB_BOMBING", 
                "graphic": "40110200.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Bomb Threat", 
                        "id": "BOMB_THREAT", 
                        "graphic": "40110201.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "IED Event", 
                "id": "IED_EVENT", 
                "graphic": "40110300.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "IED Explosion", 
                        "id": "IED_EXPLOSION", 
                        "graphic": "40110301.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Premature IED Explosion", 
                        "id": "PREMATURE_IED_EXPLOSION", 
                        "graphic": "40110302.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "IED Cache", 
                        "id": "IED_CACHE", 
                        "cloverGraphic": "40110303_0.svg", 
                        "diamondGraphic": "40110303_3.svg", 
                        "rectangleGraphic": "40110303_1.svg", 
                        "squareGraphic": "40110303_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "04", 
                        "label": "IED Suicide Bomber", 
                        "id": "IED_SUICIDE_BOMBER", 
                        "graphic": "40110304.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Shooting", 
                "id": "SHOOTING", 
                "graphic": "40110400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Sniping", 
                        "id": "SNIPING", 
                        "graphic": "40110401.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "05", 
                "label": "Illegal Drug Operation", 
                "id": "ILLEGAL_DRUG_OPERATION", 
                "graphic": "40110500.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Trafficking", 
                        "id": "TRAFFICKING", 
                        "graphic": "40110501.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Illegal Drug Lab", 
                        "id": "ILLEGAL_DRUG_LAB", 
                        "graphic": "40110502.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Explosion", 
                "id": "EXPLOSION", 
                "graphic": "40110600.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Grenade Explosion", 
                        "id": "GRENADE_EXPLOSION", 
                        "graphic": "40110601.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Incendiary Explosion", 
                        "id": "INCENDIARY_EXPLOSION", 
                        "graphic": "40110602.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Mine Explosion", 
                        "id": "MINE_EXPLOSION", 
                        "graphic": "40110603.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Mortar Fire Explosion", 
                        "id": "MORTAR_FIRE_EXPLOSION", 
                        "graphic": "40110604.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Rocket Explosion", 
                        "id": "ROCKET_EXPLOSION", 
                        "graphic": "40110605.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Bomb Explosion", 
                        "id": "BOMB_EXPLOSION", 
                        "graphic": "40110606.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "12", 
        "label": "Civil Disturbance", 
        "id": "CIVIL_DISTURBANCE", 
        "graphic": "40120000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Demonstration", 
                "id": "DEMONSTRATION", 
                "graphic": "40120100.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "13", 
        "label": "Operation", 
        "id": "OPERATION", 
        "remarks": "Reserved for hiearchical purposes.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Patrolling", 
                "id": "PATROLLING", 
                "graphic": "40130100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Military Information Support Operation (MISO)", 
                "id": "MILITARY_INFORMATION_SUPPORT_OPERATION_MISO", 
                "graphic": "40130200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "TV and Radio Propaganda", 
                        "id": "TV_AND_RADIO_PROPAGANDA", 
                        "cloverGraphic": "40130201_0.svg", 
                        "diamondGraphic": "40130201_3.svg", 
                        "rectangleGraphic": "40130201_1.svg", 
                        "squareGraphic": "40130201_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Foraging/Searching", 
                "id": "FORAGING_SEARCHING", 
                "graphic": "40130300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Recruitment", 
                "id": "RECRUITMENT", 
                "remarks": "Reserved for hiearchical purposes.", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Willing", 
                        "id": "WILLING", 
                        "graphic": "40130401.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Coerced/Impressed", 
                        "id": "COERCED_IMPRESSED", 
                        "graphic": "40130402.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "05", 
                "label": "Mine Laying", 
                "id": "MINE_LAYING", 
                "graphic": "40130500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Spy", 
                "id": "SPY", 
                "graphic": "40130600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Warrant Served", 
                "id": "WARRANT_SERVED", 
                "graphic": "40130700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Exfiltration", 
                "id": "EXFILTRATION", 
                "graphic": "40130800.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Infiltration", 
                "id": "INFILTRATION", 
                "graphic": "40130900.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Meeting", 
                "id": "MEETING", 
                "graphic": "40131000.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Polling Place/Election", 
                        "id": "POLLING_PLACE_ELECTION", 
                        "graphic": "40131001.svg"
                    }
                ]
            }, 
            {
                "digits": "11", 
                "label": "Raid on House", 
                "id": "RAID_ON_HOUSE", 
                "graphic": "40131100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Emergency Operation", 
                "id": "EMERGENCY_OPERATION", 
                "graphic": "40131200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Emergency Collection Evacuation Point", 
                        "id": "EMERGENCY_COLLECTION_EVACUATION_POINT", 
                        "graphic": "40131201.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Emergency Food Distribution", 
                        "id": "EMERGENCY_FOOD_DISTRIBUTION", 
                        "cloverGraphic": "40131202_0.svg", 
                        "diamondGraphic": "40131202_3.svg", 
                        "rectangleGraphic": "40131202_1.svg", 
                        "squareGraphic": "40131202_2.svg", 
                        "icon": "FULL_FRAME"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Emergency Incident Command Center", 
                        "id": "EMERGENCY_INCIDENT_COMMAND_CENTER", 
                        "graphic": "40131203.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Emergency Operations Center", 
                        "id": "EMERGENCY_OPERATIONS_CENTER", 
                        "graphic": "40131204.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Emergency Public Information Center", 
                        "id": "EMERGENCY_PUBLIC_INFORMATION_CENTER", 
                        "graphic": "40131205.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Emergency Shelter", 
                        "id": "EMERGENCY_SHELTER", 
                        "graphic": "40131206.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Emergency Staging Area", 
                        "id": "EMERGENCY_STAGING_AREA", 
                        "graphic": "40131207.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Emergency Water Distribution Center", 
                        "id": "EMERGENCY_WATER_DISTRIBUTION_CENTER", 
                        "cloverGraphic": "40131208_0.svg", 
                        "diamondGraphic": "40131208_3.svg", 
                        "rectangleGraphic": "40131208_1.svg", 
                        "squareGraphic": "40131208_2.svg", 
                        "icon": "FULL_FRAME"
                    }
                ]
            }, 
            {
                "digits": "13", 
                "label": "Emergency Medical Operation", 
                "id": "EMERGENCY_MEDICAL_OPERATION", 
                "graphic": "40131300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "EMT Station Location", 
                        "id": "EMT_STATION_LOCATION", 
                        "graphic": "40131301.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Health Department Facility", 
                        "id": "HEALTH_DEPARTMENT_FACILITY", 
                        "graphic": "40131302.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Medical Facilities Outpatient", 
                        "id": "MEDICAL_FACILITIES_OUTPATIENT", 
                        "graphic": "40131303.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Morgue", 
                        "id": "MORGUE", 
                        "graphic": "40131304.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Pharmacy", 
                        "id": "PHARMACY", 
                        "graphic": "40131305.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Triage", 
                        "id": "TRIAGE", 
                        "graphic": "40131306.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "14", 
                "label": "Fire Fighting Operation", 
                "id": "FIRE_FIGHTING_OPERATION", 
                "graphic": "40131400.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Fire Hydrant", 
                        "id": "FIRE_HYDRANT", 
                        "graphic": "40131401.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Fire Station", 
                        "id": "FIRE_STATION", 
                        "graphic": "40131402.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Other Water Supply Location", 
                        "id": "OTHER_WATER_SUPPLY_LOCATION", 
                        "graphic": "40131403.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "15", 
                "label": "Law Enforcement Operation", 
                "id": "LAW_ENFORCEMENT_OPERATION", 
                "graphic": "40131500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Bureau of Alcohol,Tobacco,Firearms and Explosives (ATF) (Department of Justice)", 
                        "id": "BUREAU_ATF", 
                        "graphic": "40131501.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Border Patrol", 
                        "id": "BORDER_PATROL", 
                        "graphic": "40131502.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Customs Service", 
                        "id": "CUSTOMS_SERVICE", 
                        "graphic": "40131503.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Drug Enforcement Administration (DEA)", 
                        "id": "DRUG_ENFORCEMENT_ADMIN_DEA", 
                        "graphic": "40131504.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Department of Justice (DOJ)", 
                        "id": "JUSTICE_DEPT_DOJ", 
                        "graphic": "40131505.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Federal Bureau of Investigation (FBI)", 
                        "id": "FEDERAL_BUREAU_NVESTIGATION_FBI", 
                        "graphic": "40131506.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Police", 
                        "id": "POLICE", 
                        "graphic": "40131507.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Prison", 
                        "id": "PRISON", 
                        "graphic": "40131508.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "09", 
                        "label": "United States Secret Service (USSS)", 
                        "id": "US_SECRET_SERVICE_USSS", 
                        "graphic": "40131509.svg"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Transportation Security Administration (TSA)", 
                        "id": "TRANS_SECURITY_ADMIN_TSA", 
                        "graphic": "40131510.svg"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Coast Guard", 
                        "id": "COAST_GUARD", 
                        "graphic": "40131511.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "12", 
                        "label": "US Marshals Service", 
                        "id": "US_MARSHALS", 
                        "graphic": "40131512.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "13", 
                        "label": "Internal Security Force", 
                        "id": "INTERNAL_SECURITY_FORCE", 
                        "graphic": "40131513.svg"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "14", 
        "label": "Fire Event", 
        "id": "FIRE_EVENT", 
        "graphic": "40140000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Fire Origin", 
                "id": "FIRE_ORIGIN", 
                "graphic": "40140100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Smoke", 
                "id": "SMOKE", 
                "graphic": "40140200.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Hot Spot", 
                "id": "HOT_SPOT", 
                "graphic": "40140300.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Non-Residential Fire", 
                "id": "NON_RESIDENTIAL_FIRE", 
                "graphic": "40140400.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Residential Fire", 
                "id": "RESIDENTIAL_FIRE", 
                "graphic": "40140500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "School Fire", 
                "id": "SCHOOL_FIRE", 
                "graphic": "40140600.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Special Needs Fire", 
                "id": "SPECIAL_NEEDS_FIRE", 
                "graphic": "40140700.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Wild Fire", 
                "id": "WILD_FIRE", 
                "graphic": "40140800.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "15", 
        "label": "Hazard Materials", 
        "id": "HAZARD_MATERIALS", 
        "remarks": "Reserved for hiearchical purposes.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Hazard Materials Incident", 
                "id": "HAZARD_MATERIALS_INCIDENT", 
                "graphic": "40150100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Chemical Agent", 
                        "id": "CHEMICAL_AGENT", 
                        "graphic": "40150101.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Corrosive Material", 
                        "id": "CORROSIVE_MATERIAL", 
                        "graphic": "40150102.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Hazardous when Wet", 
                        "id": "HAZARDOUS_WHEN_WET", 
                        "graphic": "40150103.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Explosive Material", 
                        "id": "EXPLOSIVE_MATERIAL", 
                        "graphic": "40150104.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Flammable Gas", 
                        "id": "FLAMMABLE_GAS", 
                        "graphic": "40150105.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Flammable Liquid", 
                        "id": "FLAMMABLE_LIQUID", 
                        "graphic": "40150106.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Flammable Solid", 
                        "id": "FLAMMABLE_SOLID", 
                        "graphic": "40150107.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Non-Flammable Gas", 
                        "id": "NON_FLAMMABLE_GAS", 
                        "graphic": "40150108.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Organic Peroxide", 
                        "id": "ORGANIC_PEROXIDE", 
                        "graphic": "40150109.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Oxidizer", 
                        "id": "OXIDIZER", 
                        "graphic": "40150110.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Radioactive Material", 
                        "id": "RADIOACTIVE_MATERIAL", 
                        "graphic": "40150111.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "12", 
                        "label": "Spontaneously Combustible Material", 
                        "id": "SPONTANEOUSLY_COMBUSTIBLE_MATERIAL", 
                        "graphic": "40150112.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "13", 
                        "label": "Toxic Gas", 
                        "id": "TOXIC_GAS", 
                        "graphic": "40150113.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "14", 
                        "label": "Toxic Infectious Material", 
                        "id": "TOXIC_INFECTIOUS_MATERIAL", 
                        "graphic": "40150114.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "15", 
                        "label": "Unexploded Ordnance", 
                        "id": "UNEXPLODED_ORDNANCE", 
                        "graphic": "40150115.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "16", 
        "label": "Transportation Incident", 
        "id": "TRANSPORTATION_INCIDENT", 
        "graphic": "40160000.svg", 
        "icon": "FULL_OCTAGON", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Air", 
                "id": "AIR", 
                "graphic": "40160100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Marine", 
                "id": "MARINE", 
                "graphic": "40160200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Rail", 
                "id": "RAIL", 
                "graphic": "40160300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Vehicle", 
                "id": "VEHICLE", 
                "graphic": "40160400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Wheeled Vehicle Explosion", 
                "id": "WHEELED_VEHICLE_EXPLOSION", 
                "graphic": "40160500.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "17", 
        "label": "Natural Event", 
        "id": "NATURAL_EVENT", 
        "graphic": "40170000.svg", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Geologic", 
                "id": "GEOLOGIC", 
                "graphic": "40170100.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Aftershock", 
                        "id": "AFTERSHOCK", 
                        "graphic": "40170101.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Avalanche", 
                        "id": "AVALANCHE", 
                        "graphic": "40170102.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Earthquake Epicenter", 
                        "id": "EARTHQUAKE_EPICENTER", 
                        "graphic": "40170103.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Landslide", 
                        "id": "LANDSLIDE", 
                        "graphic": "40170104.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Subsidence", 
                        "id": "SUBSIDENCE", 
                        "graphic": "40170105.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Volcanic Eruption", 
                        "id": "VOLCANIC_ERUPTION", 
                        "graphic": "40170106.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Volcanic Threat", 
                        "id": "VOLCANIC_THREAT", 
                        "graphic": "40170107.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Cave Entrance", 
                        "id": "CAVE_ENTRANCE", 
                        "graphic": "40170108.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Hydro-Meteorological", 
                "id": "HYDRO_METEOROLOGICAL", 
                "graphic": "40170200.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Drought", 
                        "id": "DROUGHT", 
                        "graphic": "40170201.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Flood", 
                        "id": "FLOOD", 
                        "graphic": "40170202.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Tsunami", 
                        "id": "TSUNAMI", 
                        "graphic": "40170203.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Infestation", 
                "id": "INFESTATION", 
                "graphic": "40170300.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Bird", 
                        "id": "BIRD", 
                        "graphic": "40170301.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Insect", 
                        "id": "INSECT", 
                        "graphic": "40170302.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Microbial", 
                        "id": "MICROBIAL", 
                        "graphic": "40170303.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Reptile", 
                        "id": "REPTILE", 
                        "graphic": "40170304.svg", 
                        "icon": "FULL_OCTAGON"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Rodent", 
                        "id": "RODENT", 
                        "graphic": "40170305.svg", 
                        "icon": "FULL_OCTAGON"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "18", 
        "label": "Individual", 
        "id": "INDIVIDUAL", 
        "remarks": "Reserved for hiearchical purposes.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Religious Leader", 
                "id": "RELIGIOUS_LEADER", 
                "graphic": "40180100.svg", 
                "icon": "FULL_OCTAGON", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Speaker", 
                "id": "SPEAKER", 
                "graphic": "40180200.svg", 
                "icon": "FULL_OCTAGON", 
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
        "digits": "01", 
        "label": "Assassination", 
        "id": "ASSASSINATION_MOD", 
        "graphic": "40011.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "02", 
        "label": "Execution (Wrongful Killing)", 
        "id": "EXECUTION_WRONGFUL_KILLING_MOD", 
        "graphic": "40021.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "03", 
        "label": "Hijacking/Hijacked", 
        "id": "HIJACKING_MOD", 
        "graphic": "40031.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "04", 
        "label": "House-to-House", 
        "id": "HOUSE_TO_HOUSE_MOD", 
        "graphic": "40041.svg", 
        "category": "Psychological Operations"
    }, 
    {
        "digits": "05", 
        "label": "Kidnapping", 
        "id": "KIDNAPPING_MOD", 
        "graphic": "40051.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "06", 
        "label": "Murder", 
        "id": "MURDER_MOD", 
        "graphic": "40061.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "07", 
        "label": "Piracy", 
        "id": "PIRACY_MOD", 
        "graphic": "40071.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "08", 
        "label": "Rape", 
        "id": "RAPE_MOD", 
        "graphic": "40081.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "09", 
        "label": "Written Psychological Operations", 
        "id": "WRITTEN_PSYCHOLOGICAL_OPERATIONS_MOD", 
        "graphic": "40091.svg", 
        "category": "Psychological Operations"
    }, 
    {
        "digits": "10", 
        "label": "Pirate", 
        "id": "PIRATE_MOD", 
        "graphic": "40101.svg", 
        "category": "Crime"
    }, 
    {
        "digits": "11", 
        "label": "False", 
        "id": "FALSE_MOD", 
        "graphic": "40111.svg", 
        "category": "IED Category"
    }, 
    {
        "digits": "12", 
        "label": "Find", 
        "id": "FIND_MOD", 
        "graphic": "40121.svg", 
        "category": "IED Category"
    }, 
    {
        "digits": "13", 
        "label": "Found and Cleared", 
        "id": "FOUND_AND_CLEARED_MOD", 
        "graphic": "40131.svg", 
        "category": "IED Category"
    }, 
    {
        "digits": "14", 
        "label": "Hoax (Decoy)", 
        "id": "HOAX_DECOY_MOD", 
        "graphic": "40141.svg", 
        "category": "IED Category"
    }, 
    {
        "digits": "15", 
        "label": "Attempted", 
        "id": "ATTEMPTED_MOD", 
        "graphic": "40151.svg", 
        "category": "Incident Qualifier"
    }, 
    {
        "digits": "16", 
        "label": "Accident", 
        "id": "ACCIDENT_MOD", 
        "graphic": "40161.svg", 
        "category": "Incident Qualifier"
    }, 
    {
        "digits": "17", 
        "label": "Incident", 
        "id": "INCIDENT_MOD", 
        "graphic": "40171.svg", 
        "category": "Incident Qualifier"
    }, 
    {
        "digits": "18", 
        "label": "Theft", 
        "id": "THEFT_MOD", 
        "graphic": "40181.svg", 
        "category": "Crime"
    }
];

export const sectorTwoModifiers = <Modifier[]>[];

export const graphicFolder = {
    "entities": "Appendices/Activities", 
    "modifierOnes": "Appendices/Activities/mod1"
};

