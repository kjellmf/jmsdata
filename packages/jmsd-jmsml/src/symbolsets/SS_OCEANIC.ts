/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "46";
export const label = "Meteorological - Oceanographic";
export const id = "SS_OCEANIC";
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
        "label": "Ice Systems", 
        "id": "ICE_SYSTEMS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Icebergs", 
                "id": "ICEBERGS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Many Icebergs", 
                        "id": "MANY_ICEBERGS", 
                        "graphic": "46110101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Belts and Strips", 
                        "id": "ICEBERGS_BELTS_STRIPS", 
                        "graphic": "46110102.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "General", 
                        "id": "ICEBERGS_GENERAL", 
                        "graphic": "46110103.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Many Icebergs - General", 
                        "id": "MANY_ICEBERGS_GENERAL", 
                        "graphic": "46110104.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Bergy Bit", 
                        "id": "BERGY_BIT", 
                        "graphic": "46110105.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Many Bergy Bits", 
                        "id": "MANY_BERGY_BITS", 
                        "graphic": "46110106.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Growler", 
                        "id": "GROWLER", 
                        "graphic": "46110107.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Many Growlers", 
                        "id": "MANY_GROWLERS", 
                        "graphic": "46110108.svg"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Floeberg", 
                        "id": "FLOEBERG", 
                        "graphic": "46110109.svg"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Ice Island", 
                        "id": "ICE_ISLAND", 
                        "graphic": "46110110.svg"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Ice Concentration", 
                "id": "ICE_CONCENTRATION", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Bergy Water", 
                        "id": "BERGY_WATER", 
                        "graphic": "46110201.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Water with Radar Targets", 
                        "id": "WATER_WITH_RADAR_TARGETS", 
                        "graphic": "46110202.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Ice Free", 
                        "id": "ICE_FREE", 
                        "graphic": "46110203.svg"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Dynamic Processes", 
                "id": "DYNAMIC_PROCESSES", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Convergence", 
                        "id": "CONVERGENCE", 
                        "graphic": "46110301.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Divergence", 
                        "id": "DIVERGENCE", 
                        "graphic": "46110302.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Shearing or Shear Zone", 
                        "id": "SHEARING_SHEAR_ZONE", 
                        "graphic": "46110303.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Ice Drift (Direction)", 
                        "id": "ICE_DRIFT_DIRECTION", 
                        "graphic": "46110304.svg"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Sea Ice", 
                "id": "SEA_ICE", 
                "graphic": "46110400.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Ice Thickness (Observed)", 
                        "id": "ICE_THICKNESS_OBSERVED", 
                        "graphic": "46110401.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Ice Thickness (Estimated)", 
                        "id": "ICE_THICKNESS_ESTIMATED", 
                        "graphic": "46110402.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Melt Puddles or Flooded Ice", 
                        "id": "MELT_PUDDLES_FLOODED_ICE", 
                        "graphic": "46110403.svg"
                    }
                ]
            }, 
            {
                "digits": "05", 
                "label": "Limits", 
                "id": "ICE_LIMITS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Limits of Visual Observation", 
                        "id": "LIMITS_VISUAL_OBSERVATION", 
                        "graphic": "46110501.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Limits of Under Cast", 
                        "id": "LIMITS_UNDER_CAST", 
                        "graphic": "46110502.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Limits of Radar Observation", 
                        "id": "LIMITS_RADAR_OBSERVATION", 
                        "graphic": "46110503.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Observed Ice Edge or Boundary", 
                        "id": "OBSERVED_ICE_EDGE_BOUNDARY", 
                        "graphic": "46110504.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Estimated Ice Edge or Boundary", 
                        "id": "ESTIMATED_ICE_EDGE_BOUNDARY", 
                        "graphic": "46110505.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Ice Edge or Boundary From Radar", 
                        "id": "ICE_EDGE_BOUNDARY_FROM_RADAR", 
                        "graphic": "46110506.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Openings in the Ice", 
                "id": "OPENINGS_IN_THE_ICE", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Cracks", 
                        "id": "CRACKS", 
                        "graphic": "46110601.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Cracks at a Specific Location", 
                        "id": "CRACKS_SPECIFIC_LOCATION", 
                        "graphic": "46110602.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Lead", 
                        "id": "LEAD", 
                        "graphic": "46110603.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Frozen Lead", 
                        "id": "FROZEN_LEAD", 
                        "graphic": "46110604.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "07", 
                "label": "Snow Cover", 
                "id": "SNOW_COVER", 
                "graphic": "46110700.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Sastrugi (with Orientation)", 
                        "id": "SASTRUGI_WITH_ORIENTATION", 
                        "graphic": "46110701.svg"
                    }
                ]
            }, 
            {
                "digits": "08", 
                "label": "Topographical Features", 
                "id": "TOPOGRAPHICAL_FEATURES", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Ridges or Hummocks", 
                        "id": "RIDGES_HUMMOCKS", 
                        "graphic": "46110801.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rafting", 
                        "id": "RAFTING", 
                        "graphic": "46110802.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Jammed Brash Barrier", 
                        "id": "JAMMED_BRASH_BARRIER", 
                        "graphic": "46110803.svg"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "12", 
        "label": "Hydrography", 
        "id": "HYDROGRAPHY", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Depth", 
                "id": "DEPTH", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Soundings", 
                        "id": "SOUNDINGS", 
                        "graphic": "46120101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Depth Curve", 
                        "id": "DEPTH_CURVE", 
                        "graphic": "46120102.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Depth Contour", 
                        "id": "DEPTH_CONTOUR", 
                        "graphic": "46120103.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Depth Area", 
                        "id": "DEPTH_AREA", 
                        "graphic": "46120104.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Coastal Hydrography", 
                "id": "COASTAL_HYDROGRAPHY", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Coastline", 
                        "id": "COASTLINE", 
                        "graphic": "46120201.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Island", 
                        "id": "ISLAND", 
                        "graphic": "46120202.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Beach", 
                        "id": "BEACH", 
                        "graphic": "46120203.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Water", 
                        "id": "WATER", 
                        "graphic": "46120204.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Foreshore - Line", 
                        "id": "FORESHORE_LINE", 
                        "graphic": "46120205.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Foreshore - Area", 
                        "id": "FORESHORE_AREA", 
                        "graphic": "46120206.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Ports and Harbors", 
                "id": "PORTS_HARBORS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Ports", 
                        "id": "PORTS", 
                        "icon": "NA", 
                        "geometryType": "NA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Berths (Onshore)", 
                        "id": "BERTHS_ONSHORE", 
                        "graphic": "46120302.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Berths (Anchor)", 
                        "id": "BERTHS_ANCHOR", 
                        "graphic": "46120303.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Anchorage - Point", 
                        "id": "ANCHORAGE_POINT", 
                        "graphic": "46120304.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Anchorage - Line", 
                        "id": "ANCHORAGE_LINE", 
                        "graphic": "46120305.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Anchorage - Area", 
                        "id": "ANCHORAGE_AREA", 
                        "graphic": "46120306.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Call in Point", 
                        "id": "CALL_IN_POINT", 
                        "graphic": "46120307.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Pier/Wharf/Quay", 
                        "id": "PIER_WHARF_QUAY", 
                        "graphic": "46120308.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Fishing Harbor - Point", 
                        "id": "FISHING_HARBOR_POINT", 
                        "graphic": "46120309.svg"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Fish Weirs - Point", 
                        "id": "FISH_WEIRS_POINT", 
                        "graphic": "46120310.svg"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Fish Stakes - Point", 
                        "id": "FISH_STAKES_POINT", 
                        "graphic": "46120311.svg"
                    }, 
                    {
                        "digits": "12", 
                        "label": "Fish Traps - Area", 
                        "id": "FISH_TRAPS_AREA", 
                        "graphic": "46120312.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "13", 
                        "label": "Facilities", 
                        "id": "FACILITIES", 
                        "icon": "NA", 
                        "geometryType": "NA"
                    }, 
                    {
                        "digits": "14", 
                        "label": "Drydock", 
                        "id": "DRYDOCK", 
                        "graphic": "46120314.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "15", 
                        "label": "Landing Place", 
                        "id": "LANDING_PLACE", 
                        "graphic": "46120315.svg"
                    }, 
                    {
                        "digits": "16", 
                        "label": "Offshore Loading Facility - Point", 
                        "id": "OFFSHORE_LOADING_FACILITY_POINT", 
                        "graphic": "46120316.svg"
                    }, 
                    {
                        "digits": "17", 
                        "label": "Offshore Loading Facility - Line", 
                        "id": "OFFSHORE_LOADING_FACILITY_LINE", 
                        "graphic": "46120317.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "18", 
                        "label": "Offshore Loading Facility - Area", 
                        "id": "OFFSHORE_LOADING_FACILITY_AREA", 
                        "graphic": "46120318.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "19", 
                        "label": "Ramp - Above Water", 
                        "id": "RAMP_ABOVE_WATER", 
                        "graphic": "46120319.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "20", 
                        "label": "Ramp - Below Water", 
                        "id": "RAMP_BELOW_WATER", 
                        "graphic": "46120320.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "21", 
                        "label": "Landing Ring", 
                        "id": "LANDING_RING", 
                        "graphic": "46120321.svg"
                    }, 
                    {
                        "digits": "22", 
                        "label": "Ferry Crossing", 
                        "id": "FERRY_CROSSING", 
                        "graphic": "46120322.svg"
                    }, 
                    {
                        "digits": "23", 
                        "label": "Cable Ferry Crossing", 
                        "id": "CABLE_FERRY_CROSSING", 
                        "graphic": "46120323.svg"
                    }, 
                    {
                        "digits": "24", 
                        "label": "Dolphin", 
                        "id": "DOLPHIN", 
                        "graphic": "46120324.svg"
                    }, 
                    {
                        "digits": "25", 
                        "label": "Shoreline Protection", 
                        "id": "SHORELINE_PROTECTION", 
                        "icon": "NA", 
                        "geometryType": "NA"
                    }, 
                    {
                        "digits": "26", 
                        "label": "Breakwater/Groin/Jetty - Above Water", 
                        "id": "BREAKWATER_GROIN_JETTY_ABOVE_WATER", 
                        "graphic": "46120326.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "27", 
                        "label": "Breakwater/Groin/Jetty - Below Water", 
                        "id": "BREAKWATER_GROIN_JETTY_BELOW_WATER", 
                        "graphic": "46120327.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "28", 
                        "label": "Seawall", 
                        "id": "SEAWALL", 
                        "graphic": "46120328.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Aids to Navigation", 
                "id": "AIDS_NAVIGATION", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Beacon", 
                        "id": "BEACON", 
                        "graphic": "46120401.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Buoy Default", 
                        "id": "BUOY_DEFAULT", 
                        "graphic": "46120402.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Marker", 
                        "id": "MARKER", 
                        "graphic": "46120403.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Perches/Stakes - Point", 
                        "id": "PERCHES_STAKES_POINT", 
                        "graphic": "46120404.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Perches/Stakes - Area", 
                        "id": "PERCHES_STAKES_AREA", 
                        "graphic": "46120405.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Light", 
                        "id": "LIGHT", 
                        "graphic": "46120406.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Leading Line", 
                        "id": "LEADING_LINE", 
                        "graphic": "46120407.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Light Vessel/Light Ship", 
                        "id": "LIGHT_VESSEL_LIGHT_SHIP", 
                        "graphic": "46120408.svg"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Lighthouse", 
                        "id": "LIGHTHOUSE", 
                        "graphic": "46120409.svg"
                    }
                ]
            }, 
            {
                "digits": "05", 
                "label": "Dangers/Hazards", 
                "id": "DANGERS_HAZARDS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Rock Submerged", 
                        "id": "ROCK_SUBMERGED", 
                        "graphic": "46120501.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rock Awashed", 
                        "id": "ROCK_AWASHED", 
                        "graphic": "46120502.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Underwater Danger/Hazard", 
                        "id": "UNDERWATER_DANGER_HAZARD", 
                        "graphic": "46120503.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Foul Ground - Point", 
                        "id": "FOUL_GROUND_POINT", 
                        "graphic": "46120504.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Foul Ground - Area", 
                        "id": "FOUL_GROUND_AREA", 
                        "graphic": "46120505.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Kelp/Seaweed - Point", 
                        "id": "KELP_SEAWEED_POINT", 
                        "graphic": "46120506.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Kelp/Seaweed - Area", 
                        "id": "KELP_SEAWEED_AREA", 
                        "graphic": "46120507.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Snags/Stumps", 
                        "id": "SNAGS_STUMPS", 
                        "graphic": "46120508.svg"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Wreck (Uncovers)", 
                        "id": "WRECK_UNCOVERS", 
                        "graphic": "46120509.svg"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Wreck (Submerged)", 
                        "id": "WRECK_SUBMERGED", 
                        "graphic": "46120510.svg"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Breakers", 
                        "id": "BREAKERS", 
                        "graphic": "46120511.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "12", 
                        "label": "Reef", 
                        "id": "REEF", 
                        "graphic": "46120512.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "13", 
                        "label": "Eddies/Overfalls/Tide Rips", 
                        "id": "EDDIES_OVERFALLS_TIDE_RIPS", 
                        "graphic": "46120513.svg"
                    }, 
                    {
                        "digits": "14", 
                        "label": "Discolored Water", 
                        "id": "DISCOLORED_WATER", 
                        "graphic": "46120514.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Bottom Features", 
                "id": "BOTTOM_FEATURES", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Bottom Characteristics - Sand", 
                        "id": "BOTTOM_CHARACTERISTICS_SAND", 
                        "graphic": "46120601.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Bottom Characteristics - Mud", 
                        "id": "BOTTOM_CHARACTERISTICS_MUD", 
                        "graphic": "46120602.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Bottom Characteristics - Clay", 
                        "id": "BOTTOM_CHARACTERISTICS_CLAY", 
                        "graphic": "46120603.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Bottom Characteristics - Silt", 
                        "id": "BOTTOM_CHARACTERISTICS_SILT", 
                        "graphic": "46120604.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Bottom Characteristics - Stones", 
                        "id": "BOTTOM_CHARACTERISTICS_STONES", 
                        "graphic": "46120605.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Bottom Characteristics - Gravel", 
                        "id": "BOTTOM_CHARACTERISTICS_GRAVEL", 
                        "graphic": "46120606.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Bottom Characteristics - Pebbles", 
                        "id": "BOTTOM_CHARACTERISTICS_PEBBLES", 
                        "graphic": "46120607.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Bottom Characteristics - Cobbles", 
                        "id": "BOTTOM_CHARACTERISTICS_COBBLES", 
                        "graphic": "46120608.svg"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Bottom Characteristics - Rock", 
                        "id": "BOTTOM_CHARACTERISTICS_ROCK", 
                        "graphic": "46120609.svg"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Bottom Characteristics - Coral", 
                        "id": "BOTTOM_CHARACTERISTICS_CORAL", 
                        "graphic": "46120610.svg"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Bottom Characteristics - Shell", 
                        "id": "BOTTOM_CHARACTERISTICS_SHELL", 
                        "graphic": "46120611.svg"
                    }, 
                    {
                        "digits": "12", 
                        "label": "Qualifying Terms - Fine", 
                        "id": "QUALIFYING_TERMS_FINE", 
                        "graphic": "46120612.svg"
                    }, 
                    {
                        "digits": "13", 
                        "label": "Qualifying Terms - Medium", 
                        "id": "QUALIFYING_TERMS_MEDIUM", 
                        "graphic": "46120613.svg"
                    }, 
                    {
                        "digits": "14", 
                        "label": "Qualifying Terms - Coarse", 
                        "id": "QUALIFYING_TERMS_COARSE", 
                        "graphic": "46120614.svg"
                    }
                ]
            }, 
            {
                "digits": "07", 
                "label": "Tide and Current", 
                "id": "TIDE_AND_CURRENT", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Water Turbulence", 
                        "id": "WATER_TURBULENCE", 
                        "graphic": "46120701.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Current Flow - Ebb", 
                        "id": "CURRENT_FLOW_EBB", 
                        "graphic": "46120702.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Current Flow - Flood", 
                        "id": "CURRENT_FLOW_FLOOD", 
                        "graphic": "46120703.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Tide Data Point", 
                        "id": "TIDE_DATA_POINT", 
                        "graphic": "46120704.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Tide Gauge", 
                        "id": "TIDE_GAUGE", 
                        "graphic": "46120705.svg"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "13", 
        "label": "Oceanography", 
        "id": "OCEANOGRAPHY", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Bioluminescence", 
                "id": "BIOLUMINESCENCE", 
                "remarks": "Measured by Visual Detection Ratio (VDR)", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Visual Detection Ratio (VDR) Level 1-2", 
                        "id": "VDR_LEVEL_1_2", 
                        "graphic": "46130101.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "VDR Level 2-3", 
                        "id": "VDR_LEVEL_2_3", 
                        "graphic": "46130102.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "VDR Level 3-4", 
                        "id": "VDR_LEVEL_3_4", 
                        "graphic": "46130103.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "04", 
                        "label": "VDR Level 4-5", 
                        "id": "VDR_LEVEL_4_5", 
                        "graphic": "46130104.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "05", 
                        "label": "VDR Level 5-6", 
                        "id": "VDR_LEVEL_5_6", 
                        "graphic": "46130105.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "06", 
                        "label": "VDR Level 6-7", 
                        "id": "VDR_LEVEL_6_7", 
                        "graphic": "46130106.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "07", 
                        "label": "VDR Level 7-8", 
                        "id": "VDR_LEVEL_7_8", 
                        "graphic": "46130107.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "08", 
                        "label": "VDR Level 8-9", 
                        "id": "VDR_LEVEL_8_9", 
                        "graphic": "46130108.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "09", 
                        "label": "VDR Level 9-10", 
                        "id": "VDR_LEVEL_9_10", 
                        "graphic": "46130109.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Beach Slope", 
                "id": "BEACH_SLOPE", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Flat", 
                        "id": "BEACH_SLOPE_FLAT", 
                        "graphic": "46130201.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Gentle", 
                        "id": "BEACH_SLOPE_GENTLE", 
                        "graphic": "46130202.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Moderate", 
                        "id": "BEACH_SLOPE_MODERATE", 
                        "graphic": "46130203.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Steep", 
                        "id": "BEACH_SLOPE_STEEP", 
                        "graphic": "46130204.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "14", 
        "label": "Geophysics/Acoustics", 
        "id": "GEOPHYSICS_ACOUSTICS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Mine Warfare (MIW) Bottom Descriptors", 
                "id": "MINE_WARFARE_MIW_BOTTOM_DESCRIPTORS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "MIW Bottom Sediments - Solid Rock", 
                        "id": "MIW_BOTTOM_SEDIMENTS_SOLID_ROCK", 
                        "graphic": "46140101.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "02", 
                        "label": "MIW Bottom Sediments - Clay", 
                        "id": "MIW_BOTTOM_SEDIMENTS_CLAY", 
                        "graphic": "46140102.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "03", 
                        "label": "MIW Bottom Sediments - Very Coarse Sand", 
                        "id": "MIW_BOTTOM_SEDIMENTS_VERY_COARSE_SAND", 
                        "graphic": "46140103.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "04", 
                        "label": "MIW Bottom Sediments - Coarse Sand", 
                        "id": "MIW_BOTTOM_SEDIMENTS_COARSE_SAND", 
                        "graphic": "46140104.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "05", 
                        "label": "MIW Bottom Sediments - Medium Sand", 
                        "id": "MIW_BOTTOM_SEDIMENTS_MEDIUM_SAND", 
                        "graphic": "46140105.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "06", 
                        "label": "MIW Bottom Sediments - Fine Sand", 
                        "id": "MIW_BOTTOM_SEDIMENTS_FINE_SAND", 
                        "graphic": "46140106.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "07", 
                        "label": "MIW Bottom Sediments - Very Fine Sand", 
                        "id": "MIW_BOTTOM_SEDIMENTS_VERY_FINE_SAND", 
                        "graphic": "46140107.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "08", 
                        "label": "MIW Bottom Sediments - Very Fine Silt", 
                        "id": "MIW_BOTTOM_SEDIMENTS_VERY_FINE_SILT", 
                        "graphic": "46140108.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "09", 
                        "label": "MIW Bottom Sediments - Fine Silt", 
                        "id": "MIW_BOTTOM_SEDIMENTS_FINE_SILT", 
                        "graphic": "46140109.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "10", 
                        "label": "MIW Bottom Sediments - Medium Silt", 
                        "id": "MIW_BOTTOM_SEDIMENTS_MEDIUM_SILT", 
                        "graphic": "46140110.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "11", 
                        "label": "MIW Bottom Sediments - Coarse Silt", 
                        "id": "MIW_BOTTOM_SEDIMENTS_COARSE_SILT", 
                        "graphic": "46140111.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "12", 
                        "label": "MIW Bottom Sediments - Boulders", 
                        "id": "MIW_BOTTOM_SEDIMENTS_BOULDERS", 
                        "graphic": "46140112.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "13", 
                        "label": "MIW Bottom Sediments - Cobbles-Oyster Shells", 
                        "id": "MIW_BOTTOM_SEDIMENTS_COBBLES_OYSTER_SHELLS", 
                        "graphic": "46140113.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "14", 
                        "label": "MIW Bottom Sediments - Pebbles-Shells", 
                        "id": "MIW_BOTTOM_SEDIMENTS_PEBBLES_SHELLS", 
                        "graphic": "46140114.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "15", 
                        "label": "MIW Bottom Sediments - Sand and Shells", 
                        "id": "MIW_BOTTOM_SEDIMENTS_SAND_AND_SHELLS", 
                        "graphic": "46140115.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "16", 
                        "label": "MIW Bottom Sediment - Land", 
                        "id": "MIW_BOTTOM_SEDIMENT_LAND", 
                        "graphic": "46140116.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "17", 
                        "label": "MIW Bottom Sediment - No Data", 
                        "id": "MIW_BOTTOM_SEDIMENT_NO_DATA", 
                        "graphic": "46140117.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "18", 
                        "label": "Bottom Roughness - Smooth", 
                        "id": "BOTTOM_ROUGHNESS_SMOOTH", 
                        "graphic": "46140118.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "19", 
                        "label": "Bottom Roughness - Moderate", 
                        "id": "BOTTOM_ROUGHNESS_MODERATE", 
                        "graphic": "46140119.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "20", 
                        "label": "Bottom Roughness - Rough", 
                        "id": "BOTTOM_ROUGHNESS_ROUGH", 
                        "graphic": "46140120.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "21", 
                        "label": "Clutter (Bottom) - Low", 
                        "id": "CLUTTER_BOTTOM_LOW", 
                        "graphic": "46140121.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "22", 
                        "label": "Clutter (Bottom) - Medium", 
                        "id": "CLUTTER_BOTTOM_MEDIUM", 
                        "graphic": "46140122.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "23", 
                        "label": "Clutter (Bottom) - High", 
                        "id": "CLUTTER_BOTTOM_HIGH", 
                        "graphic": "46140123.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "24", 
                        "label": "Impact Burial - 0%", 
                        "id": "IMPACT_BURIAL_0", 
                        "graphic": "46140124.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "25", 
                        "label": "Impact Burial - 0-10%", 
                        "id": "IMPACT_BURIAL_0_10", 
                        "graphic": "46140125.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "26", 
                        "label": "Impact Burial - 10-20%", 
                        "id": "IMPACT_BURIAL_10_20", 
                        "graphic": "46140126.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "27", 
                        "label": "Impact Burial - 20-75%", 
                        "id": "IMPACT_BURIAL_20_75", 
                        "graphic": "46140127.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "28", 
                        "label": "Impact Burial - >75%", 
                        "id": "IMPACT_BURIAL_75", 
                        "graphic": "46140128.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "29", 
                        "label": "MIW Bottom Category A", 
                        "id": "MIW_BOTTOM_CATEGORY_A", 
                        "graphic": "46140129.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "30", 
                        "label": "MIW Bottom Category B", 
                        "id": "MIW_BOTTOM_CATEGORY_B", 
                        "graphic": "46140130.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "31", 
                        "label": "MIW Bottom Category C", 
                        "id": "MIW_BOTTOM_CATEGORY_C", 
                        "graphic": "46140131.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "32", 
                        "label": "MIW Bottom Type A1", 
                        "id": "MIW_BOTTOM_TYPE_A1", 
                        "graphic": "46140132.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "33", 
                        "label": "MIW Bottom Type A2", 
                        "id": "MIW_BOTTOM_TYPE_A2", 
                        "graphic": "46140133.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "34", 
                        "label": "MIW Bottom Type A3", 
                        "id": "MIW_BOTTOM_TYPE_A3", 
                        "graphic": "46140134.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "35", 
                        "label": "MIW Bottom Type B1", 
                        "id": "MIW_BOTTOM_TYPE_B1", 
                        "graphic": "46140135.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "36", 
                        "label": "MIW Bottom Type B2", 
                        "id": "MIW_BOTTOM_TYPE_B2", 
                        "graphic": "46140136.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "37", 
                        "label": "MIW Bottom Type B3", 
                        "id": "MIW_BOTTOM_TYPE_B3", 
                        "graphic": "46140137.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "38", 
                        "label": "MIW Bottom Type C1", 
                        "id": "MIW_BOTTOM_TYPE_C1", 
                        "graphic": "46140138.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "39", 
                        "label": "MIW Bottom Type C2", 
                        "id": "MIW_BOTTOM_TYPE_C2", 
                        "graphic": "46140139.svg", 
                        "geometryType": "AREA"
                    }, 
                    {
                        "digits": "40", 
                        "label": "MIW Bottom Type C3", 
                        "id": "MIW_BOTTOM_TYPE_C3", 
                        "graphic": "46140140.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "15", 
        "label": "Limits", 
        "id": "MARITIME_LIMITS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Maritime Limit Boundary", 
                "id": "MARITIME_LIMIT_BOUNDARY", 
                "graphic": "46150100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Maritime Area", 
                "id": "MARITIME_AREA", 
                "graphic": "46150200.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Restricted Area", 
                "id": "RESTRICTED_AREA", 
                "graphic": "46150300.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Swept Area", 
                "id": "SWEPT_AREA", 
                "graphic": "46150400.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Training Area", 
                "id": "TRAINING_AREA", 
                "graphic": "46150500.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Operator-Defined", 
                "id": "LIMITS_OPERATOR_DEFINED", 
                "graphic": "46150600.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "16", 
        "label": "Man-Made Structures", 
        "id": "MAN_MADE_STRUCTURES", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Submarine Cable", 
                "id": "SUBMARINE_CABLE", 
                "graphic": "46160100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Submerged Crib", 
                "id": "SUBMERGED_CRIB", 
                "graphic": "46160200.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Canal", 
                "id": "CANAL", 
                "graphic": "46160300.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Ford", 
                "id": "FORD", 
                "graphic": "46160400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Lock", 
                "id": "LOCK", 
                "graphic": "46160500.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Oil/Gas Rig", 
                "id": "OIL_GAS_RIG", 
                "graphic": "46160600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Oil/Gas Rig Field", 
                "id": "OIL_GAS_RIG_FIELD", 
                "graphic": "46160700.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Pipelines/Pipe", 
                "id": "PIPELINES_PIPE", 
                "graphic": "46160800.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Pile/Piling/Post", 
                "id": "PILE_PILING_POST", 
                "graphic": "46160900.svg", 
                "entitySubTypes": []
            }
        ]
    }
];

export const specialEntitySubTypes = <EntitySubType[]>[];

export const sectorOneModifiers = <Modifier[]>[];

export const sectorTwoModifiers = <Modifier[]>[];

export const graphicFolder = {
    "entities": "Appendices/METOC/Oceanographic"
};

