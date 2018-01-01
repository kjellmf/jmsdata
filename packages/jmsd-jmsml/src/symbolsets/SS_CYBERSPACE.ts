/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "60";
export const label = "Cyberspace";
export const id = "SS_CYBERSPACE";
export const dimensionId = "AIR SPACE LAND_EQUIPMENT SEA_SURFACE SEA_SUBSURFACE";
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
        "label": "Botnet", 
        "id": "BOTNET", 
        "remarks": "There is no symbol associated with this entity.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Command and Control (C2)", 
                "id": "COMMAND_AND_CONTROL_C2", 
                "graphic": "60110100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Herder", 
                "id": "HERDER", 
                "graphic": "60110200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Callback Domain", 
                "id": "CALLBACK_DOMAIN", 
                "graphic": "60110300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Zombie", 
                "id": "ZOMBIE", 
                "graphic": "60110400.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "12", 
        "label": "Infection", 
        "id": "INFECTION", 
        "remarks": "There is no symbol associated with this entity.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Advanced Persistent Threat (APT)", 
                "id": "ADVANCED_PERSISTENT_THREAT_APT", 
                "graphic": "60120100.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "APT with C2", 
                        "id": "APT_WITH_C2", 
                        "graphic": "60120101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "APT with Self Propagation", 
                        "id": "APT_WITH_SELF_PROPAGATION", 
                        "graphic": "60120102.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "APT with C2 and Self Propagation", 
                        "id": "APT_WITH_C2_AND_SELF_PROPAGATION", 
                        "graphic": "60120103.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "APT Other", 
                        "id": "APT_OTHER", 
                        "graphic": "60120104.svg"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Non-Advanced Persistent Threat (NAPT)", 
                "id": "NON_ADVANCED_PERSISTENT_THREAT_NAPT", 
                "graphic": "60120200.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "NAPT with C2", 
                        "id": "NAPT_WITH_C2", 
                        "graphic": "60120201.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "NAPT with Self Propagation", 
                        "id": "NAPT_WITH_SELF_PROPAGATION", 
                        "graphic": "60120202.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "NAPT with C2 and Self Propagation", 
                        "id": "NAPT_WITH_C2_AND_SELF_PROPAGATION", 
                        "graphic": "60120203.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "NAPT Other", 
                        "id": "NAPT_OTHER", 
                        "graphic": "60120204.svg"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "13", 
        "label": "Health and Status", 
        "id": "HEALTH_AND_STATUS", 
        "remarks": "There is no symbol associated with this entity.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Normal", 
                "id": "NORMAL", 
                "graphic": "60130100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Network Outage", 
                "id": "NETWORK_OUTAGE", 
                "graphic": "60130200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Unknown", 
                "id": "UNKNOWN", 
                "graphic": "60130300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Impaired", 
                "id": "IMPAIRED", 
                "graphic": "60130400.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "14", 
        "label": "Device Type", 
        "id": "DEVICE_TYPE", 
        "remarks": "There is no symbol associated with this entity.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Core Router", 
                "id": "CORE_ROUTER", 
                "graphic": "60140100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Router", 
                "id": "ROUTER", 
                "graphic": "60140200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Cross Domain Solution", 
                "id": "CROSS_DOMAIN_SOLUTION", 
                "graphic": "60140300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Mail Server", 
                "id": "MAIL_SERVER", 
                "graphic": "60140400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Web Server", 
                "id": "WEB_SERVER", 
                "graphic": "60140500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Domain Server", 
                "id": "DOMAIN_SERVER", 
                "graphic": "60140600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "File Server", 
                "id": "FILE_SERVER", 
                "graphic": "60140700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Peer-to-Peer Node", 
                "id": "PEER_TO_PEER_NODE", 
                "graphic": "60140800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Firewall", 
                "id": "FIREWALL", 
                "graphic": "60140900.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Switch", 
                "id": "SWITCH", 
                "graphic": "60141000.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "11", 
                "label": "Host", 
                "id": "HOST", 
                "graphic": "60141100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Virtual Private Network (VPN)", 
                "id": "VIRTUAL_PRIVATE_NETWORK_VPN", 
                "graphic": "60141200.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "15", 
        "label": "Device Domain", 
        "id": "DEVICE_DOMAIN", 
        "remarks": "There is no symbol associated with this entity.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Department of Defense (DoD)", 
                "id": "DEPARTMENT_OF_DEFENSE_DOD", 
                "graphic": "60150100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Government", 
                "id": "GOVERNMENT", 
                "graphic": "60150200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Contractor", 
                "id": "CONTRACTOR", 
                "graphic": "60150300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Supervisory Control and Data Acquisition (SCADA)", 
                "id": "SUPERVISORY_CONTROL_AND_DATA_ACQUISITION_SCADA", 
                "graphic": "60150400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Non-Government", 
                "id": "NON_GOVERNMENT", 
                "graphic": "60150500.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "16", 
        "label": "Effect", 
        "id": "EFFECT", 
        "remarks": "There is no symbol associated with this entity.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Infection", 
                "id": "CYBER_INFECTION", 
                "graphic": "60160100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Degradation", 
                "id": "DEGRADATION", 
                "graphic": "60160200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Data Spoofing", 
                "id": "DATA_SPOOFING", 
                "graphic": "60160300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Data Manipulation", 
                "id": "DATA_MANIPULATION", 
                "graphic": "60160400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Exfiltration", 
                "id": "EXFILTRATION", 
                "graphic": "60160500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Power Outage", 
                "id": "POWER_OUTAGE", 
                "graphic": "60160600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Network Outage", 
                "id": "CYBER_NETWORK_OUTAGE", 
                "graphic": "60160700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Service Outage", 
                "id": "SERVICE_OUTAGE", 
                "graphic": "60160800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Device Outage", 
                "id": "DEVICE_OUTAGE", 
                "graphic": "60160900.svg", 
                "entitySubTypes": []
            }
        ]
    }
];

export const specialEntitySubTypes = <EntitySubType[]>[];

export const sectorOneModifiers = <Modifier[]>[];

export const sectorTwoModifiers = <Modifier[]>[];

export const graphicFolder = {
    "entities": "Appendices/Cyberspace"
};

