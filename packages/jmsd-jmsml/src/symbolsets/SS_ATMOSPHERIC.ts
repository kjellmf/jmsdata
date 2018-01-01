/*
Joint Military Symbology base data

Generated from data provided by the Joint Military Symbology Markup Language project:
https://github.com/Esri/joint-military-symbology-xml

Copyright 2014 Esri
*/

import {Entity, EntitySubType, Modifier} from "types";

export const digits = "45";
export const label = "Meteorological - Atmospheric";
export const id = "SS_ATMOSPHERIC";
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
        "label": "Pressure Systems", 
        "id": "PRESSURE_SYSTEMS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Low Pressure Center", 
                "id": "LOW_PRESSURE_CENTER", 
                "graphic": "45110100.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Cyclone Center", 
                        "id": "CYCLONE_CENTER", 
                        "graphic": "45110101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Tropopause Low", 
                        "id": "TROPOPAUSE_LOW", 
                        "graphic": "45110102.svg"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "High Pressure Center", 
                "id": "HIGH_PRESSURE_CENTER", 
                "graphic": "45110200.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Anticyclone Center", 
                        "id": "ANTICYCLONE_CENTER", 
                        "graphic": "45110201.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Tropopause High", 
                        "id": "TROPOPAUSE_HIGH", 
                        "graphic": "45110202.svg"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Frontal Systems", 
                "id": "FRONTAL_SYSTEMS", 
                "remarks": "For special lines that are not symmetrical, such as Fronts, the sequence of anchor points determines the proper alighment of the line.", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Cold Front", 
                        "id": "COLD_FRONT", 
                        "graphic": "45110301.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Upper Cold Front", 
                        "id": "UPPER_COLD_FRONT", 
                        "graphic": "45110302.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Cold Frontogenesis", 
                        "id": "COLD_FRONTOGENESIS", 
                        "graphic": "45110303.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Cold Frontolysis", 
                        "id": "COLD_FRONTOLYSIS", 
                        "graphic": "45110304.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Warm Front", 
                        "id": "WARM_FRONT", 
                        "graphic": "45110305.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Upper Warm Front", 
                        "id": "UPPER_WARM_FRONT", 
                        "graphic": "45110306.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Warm Frontogenesis", 
                        "id": "WARM_FRONTOGENESIS", 
                        "graphic": "45110307.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Warm Frontolysis", 
                        "id": "WARM_FRONTOLYSIS", 
                        "graphic": "45110308.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Occluded Front", 
                        "id": "OCCLUDED_FRONT", 
                        "graphic": "45110309.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Upper Occluded Front", 
                        "id": "UPPER_OCCLUDED_FRONT", 
                        "graphic": "45110310.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "11", 
                        "label": "Occluded Frontolysis", 
                        "id": "OCCLUDED_FRONTOLYSIS", 
                        "graphic": "45110311.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "12", 
                        "label": "Stationary Front", 
                        "id": "STATIONARY_FRONT", 
                        "graphic": "45110312.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "13", 
                        "label": "Upper Stationary Front", 
                        "id": "UPPER_STATIONARY_FRONT", 
                        "graphic": "45110313.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "14", 
                        "label": "Stationary Frontogenesis", 
                        "id": "STATIONARY_FRONTOGENESIS", 
                        "graphic": "45110314.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "15", 
                        "label": "Stationary Frontolysis", 
                        "id": "STATIONARY_FRONTOLYSIS", 
                        "graphic": "45110315.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Lines", 
                "id": "LINES", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Trough Axis", 
                        "id": "TROUGH_AXIS", 
                        "graphic": "45110401.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Upper Trough Axis", 
                        "id": "UPPER_TROUGH_AXIS", 
                        "graphic": "45110402.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Ridge Axis", 
                        "id": "RIDGE_AXIS", 
                        "graphic": "45110403.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Severe Squall Line", 
                        "id": "SEVERE_SQUALL_LINE", 
                        "graphic": "45110404.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Instability Line", 
                        "id": "INSTABILITY_LINE", 
                        "graphic": "45110405.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Shear Line", 
                        "id": "SHEAR_LINE", 
                        "graphic": "45110406.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Inter-Tropical Convergence Zone", 
                        "id": "INTER_TROPICAL_CONVERGENCE_ZONE", 
                        "graphic": "45110407.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Convergence Line", 
                        "id": "CONVERGENCE_LINE", 
                        "graphic": "45110408.svg", 
                        "geometryType": "LINE"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Inter-Tropical Discontinuity", 
                        "id": "INTER_TROPICAL_DISCONTINUITY", 
                        "graphic": "45110409.svg", 
                        "geometryType": "LINE"
                    }
                ]
            }, 
            {
                "digits": "05", 
                "label": "Pressure Tendency", 
                "id": "PRESSURE_TENDENCY", 
                "remarks": "Each symbols within the pressure tendency group is static, but only one can be applied to a particular station plot, dependent upon the pressure tendency at that location. As such, the group of symbols is dynamic.", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Rise Then Fall Higher", 
                        "id": "RISE_THEN_FALL_HIGHER", 
                        "graphic": "45110501.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rise Then Steady", 
                        "id": "RISE_THEN_STEADY", 
                        "graphic": "45110502.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Rise", 
                        "id": "RISE", 
                        "graphic": "45110503.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Rise Then Rise Higher", 
                        "id": "RISE_THEN_RISE_HIGHER", 
                        "graphic": "45110504.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Steady", 
                        "id": "STEADY", 
                        "graphic": "45110505.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Fall Then Rise Lower", 
                        "id": "FALL_THEN_RISE_LOWER", 
                        "graphic": "45110506.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Fall Then Steady", 
                        "id": "FALL_THEN_STEADY", 
                        "graphic": "45110507.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Fall", 
                        "id": "FALL", 
                        "graphic": "45110508.svg"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Rise Then Fall Lower", 
                        "id": "RISE_THEN_FALL_LOWER", 
                        "graphic": "45110509.svg"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "12", 
        "label": "Turbulence", 
        "id": "TURBULENCE", 
        "remarks": "USAF turbulence forecasts are based on Category II type aircraft.", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Light", 
                "id": "LIGHT", 
                "graphic": "45120100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Moderate", 
                "id": "MODERATE", 
                "graphic": "45120200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Severe", 
                "id": "SEVERE", 
                "graphic": "45120300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Extreme", 
                "id": "EXTREME", 
                "graphic": "45120400.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Mountain Waves", 
                "id": "MOUNTAIN_WAVES", 
                "graphic": "45120500.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "13", 
        "label": "Icing", 
        "id": "ICING", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Clear Icing", 
                "id": "CLEAR_ICING", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "CLEAR_ICING_LIGHT", 
                        "graphic": "45130101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Moderate", 
                        "id": "CLEAR_ICING_MODERATE", 
                        "graphic": "45130102.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Severe", 
                        "id": "CLEAR_ICING_SEVERE", 
                        "graphic": "45130103.svg"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Rime Icing", 
                "id": "RIME_ICING", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "RIME_ICING_LIGHT", 
                        "graphic": "45130201.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Moderate", 
                        "id": "RIME_ICING_MODERATE", 
                        "graphic": "45130202.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Severe", 
                        "id": "RIME_ICING_SEVERE", 
                        "graphic": "45130203.svg"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Mixed Icing", 
                "id": "MIXED_ICING", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "MIXED_ICING_LIGHT", 
                        "graphic": "45130301.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Moderate", 
                        "id": "MIXED_ICING_MODERATE", 
                        "graphic": "45130302.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Severe", 
                        "id": "MIXED_ICING_SEVERE", 
                        "graphic": "45130303.svg"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "14", 
        "label": "Winds", 
        "id": "WINDS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Calm Winds", 
                "id": "CALM_WINDS", 
                "graphic": "45140100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Wind Plot", 
                "id": "WIND_PLOT", 
                "graphic": "45140200.3.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Jet Stream", 
                "id": "JET_STREAM", 
                "graphic": "45140300.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Stream Line", 
                "id": "STREAM_LINE", 
                "graphic": "45140400.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "15", 
        "label": "Cloud Cover", 
        "id": "CLOUD_COVER", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Cloud Coverage Symbols", 
                "id": "CLOUD_COVERAGE_SYMBOLS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Clear Sky", 
                        "id": "CLEAR_SKY", 
                        "graphic": "45150101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Few Coverage", 
                        "id": "FEW_COVERAGE", 
                        "graphic": "45150102.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Scattered Coverage", 
                        "id": "SCATTERED_COVERAGE", 
                        "graphic": "45150103.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Broken Coverage", 
                        "id": "BROKEN_COVERAGE", 
                        "graphic": "45150104.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Overcast Coverage", 
                        "id": "OVERCAST_COVERAGE", 
                        "graphic": "45150105.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Sky Totally or Partially Obscured", 
                        "id": "SKY_TOTALLY_OR_PARTIALLY_OBSCURED", 
                        "graphic": "45150106.svg"
                    }
                ]
            }
        ]
    }, 
    {
        "digits": "16", 
        "label": "Weather Symbols", 
        "id": "WEATHER_SYMBOLS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Rain", 
                "id": "RAIN", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Intermittent Light", 
                        "id": "RAIN_INTERMITTENT_LIGHT", 
                        "graphic": "45160101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Continuous Light", 
                        "id": "RAIN_CONTINUOUS_LIGHT", 
                        "graphic": "45160102.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Intermittent Moderate", 
                        "id": "RAIN_INTERMITTENT_MODERATE", 
                        "graphic": "45160103.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Intermittent Moderate/Continuous Moderate", 
                        "id": "RAIN_INTERMITTENT_CONTINUOUS_MODERATE", 
                        "graphic": "45160104.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Intermittent Heavy", 
                        "id": "RAIN_INTERMITTENT_HEAVY", 
                        "graphic": "45160105.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Intermittent Heavy/Continuous Heavy", 
                        "id": "RAIN_INTERMITTENT_CONTINUOUS_HEAVY", 
                        "graphic": "45160106.svg"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "Freezing Rain", 
                "id": "FREEZING_RAIN", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "FREEZING_RAIN_LIGHT", 
                        "graphic": "45160201.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Moderate/Heavy", 
                        "id": "FREEZING_RAIN_MODERATE_HEAVY", 
                        "graphic": "45160202.svg"
                    }
                ]
            }, 
            {
                "digits": "03", 
                "label": "Rain Showers", 
                "id": "RAIN_SHOWERS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "RAIN_SHOWERS_LIGHT", 
                        "graphic": "45160301.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Moderate/Heavy", 
                        "id": "RAIN_SHOWERS_MODERATE_HEAVY", 
                        "graphic": "45160302.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Torrential", 
                        "id": "RAIN_SHOWERS_TORRENTIAL", 
                        "graphic": "45160303.svg"
                    }
                ]
            }, 
            {
                "digits": "04", 
                "label": "Drizzle", 
                "id": "DRIZZLE", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Intermittent Light", 
                        "id": "DRIZZLE_INTERMITTENT_LIGHT", 
                        "graphic": "45160401.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Intermittent Light/Continuous Light", 
                        "id": "DRIZZLE_INTERMITTENT_CONTINUOUS_LIGHT", 
                        "graphic": "45160402.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Intermittent Moderate", 
                        "id": "DRIZZLE_INTERMITTENT_MODERATE", 
                        "graphic": "45160403.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Intermittent Moderate/Continuous Moderate", 
                        "id": "DRIZZLE_INTERMITTENT_CONTINUOUS_MODERATE", 
                        "graphic": "45160404.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Intermittent Heavy", 
                        "id": "DRIZZLE_INTERMITTENT_HEAVY", 
                        "graphic": "45160405.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Intermittent Heavy/Continuous Heavy", 
                        "id": "DRIZZLE_INTERMITTENT_CONTINUOUS_HEAVY", 
                        "graphic": "45160406.svg"
                    }
                ]
            }, 
            {
                "digits": "05", 
                "label": "Freezing Drizzle", 
                "id": "FREEZING_DRIZZLE", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "FREEZING_DRIZZLE_LIGHT", 
                        "graphic": "45160501.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Moderate/Heavy", 
                        "id": "FREEZING_DRIZZLE_MODERATE_HEAVY", 
                        "graphic": "45160502.svg"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Rain and Snow Mixed", 
                "id": "RAIN_SNOW_MIXED", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Rain or Drizzle and Snow - Light", 
                        "id": "RAIN_DRIZZLE_SNOW_LIGHT", 
                        "graphic": "45160601.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Rain or Drizzle and Snow - Moderate/Heavy", 
                        "id": "RAIN_DRIZZLE_SNOW_MODERATE_HEAVY", 
                        "graphic": "45160602.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Rain and Snow Showers - Light", 
                        "id": "RAIN_SNOW_SHOWERS_LIGHT", 
                        "graphic": "45160603.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Rain and Snow Showers - Moderate/Heavy", 
                        "id": "RAIN_SNOW_SHOWERS_MODERATE_HEAVY", 
                        "graphic": "45160604.svg"
                    }
                ]
            }, 
            {
                "digits": "07", 
                "label": "Snow", 
                "id": "SNOW", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Intermittent Light", 
                        "id": "SNOW_INTERMITTENT_LIGHT", 
                        "graphic": "45160701.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Intermittent Light/Continuous Light", 
                        "id": "SNOW_INTERMITTENT_CONTINUOUS_LIGHT", 
                        "graphic": "45160702.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Intermittent Moderate", 
                        "id": "SNOW_INTERMITTENT_MODERATE", 
                        "graphic": "45160703.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Intermittent Moderate/Continuous Moderate", 
                        "id": "SNOW_INTERMITTENT_CONTINUOUS_MODERATE", 
                        "graphic": "45160704.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Intermittent Heavy", 
                        "id": "SNOW_INTERMITTENT_HEAVY", 
                        "graphic": "45160705.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Intermittent Heavy/Continuous Heavy", 
                        "id": "SNOW_INTERMITTENT_CONTINUOUS_HEAVY", 
                        "graphic": "45160706.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Blowing Snow - Light/Moderate", 
                        "id": "BLOWING_SNOW_LIGHT_MODERATE", 
                        "graphic": "45160707.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Blowing Snow - Heavy", 
                        "id": "BLOWING_SNOW_HEAVY", 
                        "graphic": "45160708.svg"
                    }
                ]
            }, 
            {
                "digits": "08", 
                "label": "Snow Grains", 
                "id": "SNOW_GRAINS", 
                "graphic": "45160800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Snow Showers", 
                "id": "SNOW_SHOWERS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "SNOW_SHOWERS_LIGHT", 
                        "graphic": "45160901.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Moderate/Heavy", 
                        "id": "SNOW_SHOWERS_MODERATE_HEAVY", 
                        "graphic": "45160902.svg"
                    }
                ]
            }, 
            {
                "digits": "10", 
                "label": "Hail", 
                "id": "HAIL", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light not Associated with Thunder", 
                        "id": "HAIL_LIGHT_NOT_THUNDER", 
                        "graphic": "45161001.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Moderate/Heavy not Associated with Thunder", 
                        "id": "HAIL_MODERATE_HEAVY_NOT_THUNDER", 
                        "graphic": "45161002.svg"
                    }
                ]
            }, 
            {
                "digits": "11", 
                "label": "Ice Crystals (Diamond Dust)", 
                "id": "ICE_CRYSTALS_DIAMOND_DUST", 
                "graphic": "45161100.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "12", 
                "label": "Ice Pellets (Sleet)", 
                "id": "ICE_PELLETS_SLEET", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light", 
                        "id": "SLEET_LIGHT", 
                        "graphic": "45161201.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Moderate", 
                        "id": "SLEET_MODERATE", 
                        "graphic": "45161202.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Heavy", 
                        "id": "SLEET_HEAVY", 
                        "graphic": "45161203.svg"
                    }
                ]
            }, 
            {
                "digits": "13", 
                "label": "Inversion", 
                "id": "INVERSION", 
                "graphic": "45161300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "14", 
                "label": "Storms", 
                "id": "STORMS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Thunderstorm - No Precipitation", 
                        "id": "THUNDERSTORM_NO_PRECIPITATION", 
                        "graphic": "45161401.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Thunderstorm Light to Moderate with Rain/Snow - No Hail", 
                        "id": "THUNDERSTORM_LIGHT_MODERATE_RAIN_SNOW_NO_HAIL", 
                        "graphic": "45161402.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Thunderstorm Heavy with Rain/Snow - No Hail", 
                        "id": "THUNDERSTORM_HEAVY_RAIN_SNOW_NO_HAIL", 
                        "graphic": "45161403.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Thunderstorm Light to Moderate - With Hail", 
                        "id": "THUNDERSTORM_LIGHT_MODERATE_WITH_HAIL", 
                        "graphic": "45161404.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Thunderstorm Heavy - With Hail", 
                        "id": "THUNDERSTORM_HEAVY_WITH_HAIL", 
                        "graphic": "45161405.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Funnel Cloud (Tornado/Waterspout)", 
                        "id": "FUNNEL_CLOUD_TORNADO_WATERSPOUT", 
                        "graphic": "45161406.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Squall", 
                        "id": "SQUALL", 
                        "graphic": "45161407.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Lightning", 
                        "id": "LIGHTNING", 
                        "graphic": "45161408.svg"
                    }
                ]
            }, 
            {
                "digits": "15", 
                "label": "Fog", 
                "id": "FOG", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Shallow Patches", 
                        "id": "FOG_SHALLOW_PATCHES", 
                        "graphic": "45161501.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Shallow Continuous", 
                        "id": "FOG_SHALLOW_CONTINUOUS", 
                        "graphic": "45161502.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Patchy", 
                        "id": "FOG_PATCHY", 
                        "graphic": "45161503.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Sky Visible", 
                        "id": "FOG_SKY_VISIBLE", 
                        "graphic": "45161504.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Sky Obscured", 
                        "id": "FOG_SKY_OBSCURED", 
                        "graphic": "45161505.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Freezing-Sky Visible", 
                        "id": "FOG_FREEZING_SKY_VISIBLE", 
                        "graphic": "45161506.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Freezing-Sky Obscured", 
                        "id": "FOG_FREEZING_SKY_OBSCURED", 
                        "graphic": "45161507.svg"
                    }
                ]
            }, 
            {
                "digits": "16", 
                "label": "Mist", 
                "id": "MIST", 
                "graphic": "45161600.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "17", 
                "label": "Smoke", 
                "id": "SMOKE", 
                "graphic": "45161700.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "18", 
                "label": "Haze", 
                "id": "HAZE", 
                "graphic": "45161800.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "19", 
                "label": "Dust or Sand", 
                "id": "DUST_SAND", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Light to Moderate", 
                        "id": "DUST_SAND_LIGHT_TO_MODERATE", 
                        "graphic": "45161901.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Severe", 
                        "id": "DUST_SAND_SEVERE", 
                        "graphic": "45161902.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Dust Devil", 
                        "id": "DUST_DEVIL", 
                        "graphic": "45161903.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Blowing Dust or Sand", 
                        "id": "BLOWING_DUST_SAND", 
                        "graphic": "45161904.svg"
                    }
                ]
            }, 
            {
                "digits": "20", 
                "label": "Tropical Storm Systems", 
                "id": "TROPICAL_STORM_SYSTEMS", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Tropical Depression", 
                        "id": "TROPICAL_DEPRESSION", 
                        "graphic": "45162001.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Tropical Storm", 
                        "id": "TROPICAL_STORM", 
                        "graphic": "45162002.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Hurricane/Typhoon", 
                        "id": "HURRICANE_TYPHOON", 
                        "graphic": "45162003.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Tropical Storm Wind Areas and Date/Time Labels", 
                        "id": "TROPICAL_STORM_WIND_AREAS_DATE_TIME_LABELS", 
                        "graphic": "45162004.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "21", 
                "label": "Volcanic Eruption", 
                "id": "VOLCANIC_ERUPTION", 
                "graphic": "45162100.svg", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Volcanic Ash", 
                        "id": "VOLCANIC_ASH", 
                        "graphic": "45162101.svg"
                    }
                ]
            }, 
            {
                "digits": "22", 
                "label": "Tropopause Level", 
                "id": "TROPOPAUSE_LEVEL", 
                "graphic": "45162200.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "23", 
                "label": "Freezing Level", 
                "id": "FREEZING_LEVEL", 
                "graphic": "45162300.svg", 
                "entitySubTypes": []
            }, 
            {
                "digits": "24", 
                "label": "Precipitation of Unknown Type and Intensity", 
                "id": "PRECIPITATION_UNKNOWN_TYPE_INTENSITY", 
                "graphic": "45162400.svg", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "17", 
        "label": "Bounded Areas of Weather", 
        "id": "BOUNDED_AREAS_WEATHER", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Instrument Flight Rule (IFR)", 
                "id": "INSTRUMENT_FLIGHT_RULE_IFR", 
                "graphic": "45170100.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Marginal Visual Flight Rule (MVFR)", 
                "id": "MARGINAL_VISUAL_FLIGHT_RULE_MVFR", 
                "graphic": "45170200.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Turbulence", 
                "id": "TURBULENCE_BOUNDED", 
                "graphic": "45170300.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Icing", 
                "id": "ICING_BOUNDED", 
                "graphic": "45170400.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Liquid Precipitation - Non-Convective Continuous or Intermittent", 
                "id": "LIQUID_PRECIPITATION_NON_CONVECTIVE", 
                "graphic": "45170500.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Liquid Precipitation - Convective", 
                        "id": "LIQUID_PRECIPITATION_CONVECTIVE", 
                        "graphic": "45170501.svg", 
                        "geometryType": "AREA"
                    }
                ]
            }, 
            {
                "digits": "06", 
                "label": "Freezing /Frozen Precipitation", 
                "id": "FREEZING_PRECIPITATION", 
                "graphic": "45170600.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Thunderstorm", 
                "id": "THUNDERSTORM_BOUNDED", 
                "graphic": "45170700.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "08", 
                "label": "Fog", 
                "id": "FOG_BOUNDED", 
                "graphic": "45170800.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "09", 
                "label": "Dust or Sand", 
                "id": "DUST_SAND_BOUNDED", 
                "graphic": "45170900.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }, 
            {
                "digits": "10", 
                "label": "Operator-Defined Freeform", 
                "id": "OPERATOR_DEFINED_FREEFORM_BOUNDED", 
                "graphic": "45171000.svg", 
                "geometryType": "AREA", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "18", 
        "label": "Isopleths", 
        "id": "ISOPLETHS", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Isobar - Surface", 
                "id": "ISOBAR_SURFACE", 
                "graphic": "45180100.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "02", 
                "label": "Contour - Upper Air", 
                "id": "CONTOUR_UPPER_AIR", 
                "graphic": "45180200.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "03", 
                "label": "Isotherm", 
                "id": "ISOTHERM", 
                "graphic": "45180300.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "04", 
                "label": "Isotach", 
                "id": "ISOTACH", 
                "graphic": "45180400.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "05", 
                "label": "Isodrosotherm", 
                "id": "ISODROSOTHERM", 
                "graphic": "45180500.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "06", 
                "label": "Thickness", 
                "id": "THICKNESS", 
                "graphic": "45180600.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }, 
            {
                "digits": "07", 
                "label": "Operator-Defined Freeform", 
                "id": "OPERATOR_DEFINED_FREEFORM", 
                "graphic": "45180700.svg", 
                "geometryType": "LINE", 
                "entitySubTypes": []
            }
        ]
    }, 
    {
        "digits": "19", 
        "label": "State of the Ground", 
        "id": "STATE_GROUND", 
        "icon": "NA", 
        "geometryType": "NA", 
        "entityTypes": [
            {
                "digits": "01", 
                "label": "Without Snow or Measurable Ice Cover", 
                "id": "WITHOUT_SNOW_MEASURABLE_ICE_COVER", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Surface Dry Without Cracks or Appreciable Dust or Loose Sand", 
                        "id": "SURFACE_DRY", 
                        "graphic": "45190101.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Surface Moist", 
                        "id": "SURFACE_MOIST", 
                        "graphic": "45190102.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Surface Wet-Standing Water in Small or Large Pools", 
                        "id": "SURFACE_WET", 
                        "graphic": "45190103.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Surface Flooded", 
                        "id": "SURFACE_FLOODED", 
                        "graphic": "45190104.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Surface Frozen", 
                        "id": "SURFACE_FROZEN", 
                        "graphic": "45190105.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Glaze (Thin Ice) on Ground", 
                        "id": "GLAZE_THIN_ICE_ON_GROUND", 
                        "graphic": "45190106.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Loose Dry Dust or Sand not Covering Ground Completely", 
                        "id": "LOOSE_DUST_SAND_NOT_COVERING", 
                        "graphic": "45190107.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Thin Loose Dry Dust or Sand Covering Ground Completely", 
                        "id": "THIN_LOOSE_DUST_SAND_COVERING", 
                        "graphic": "45190108.svg"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Moderate/Thick Loose Dry Dust or Sand Covering Ground Completely", 
                        "id": "MODERATE_THICK_LOOSE_DUST_SAND_COVERING", 
                        "graphic": "45190109.svg"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Extremely Dry with Cracks", 
                        "id": "EXTREMELY_DRY_CRACKS", 
                        "graphic": "45190110.svg"
                    }
                ]
            }, 
            {
                "digits": "02", 
                "label": "With Snow or Measurable Ice Cover", 
                "id": "WITH_SNOW_MEASURABLE_ICE_COVER", 
                "icon": "NA", 
                "geometryType": "NA", 
                "entitySubTypes": [
                    {
                        "digits": "01", 
                        "label": "Predominately Ice Covered", 
                        "id": "PREDOMINATELY_ICE_COVERED", 
                        "graphic": "45190201.svg"
                    }, 
                    {
                        "digits": "02", 
                        "label": "Compact or Wet Snow (with or without Ice) Covering Less Than One-Half of Ground", 
                        "id": "COMPACT_WET_SNOW_COVERING_LESS_THAN_HALF", 
                        "graphic": "45190202.svg"
                    }, 
                    {
                        "digits": "03", 
                        "label": "Compact or Wet Snow (with or without Ice) Covering  at Least One-Half of Ground-but Ground not Completely Covered", 
                        "id": "COMPACT_WET_SNOW_COVERING_HALF", 
                        "graphic": "45190203.svg"
                    }, 
                    {
                        "digits": "04", 
                        "label": "Even Layer of Compact or Wet Snow Covering Ground Completely", 
                        "id": "EVEN_COMPACT_WET_SNOW_COVERING", 
                        "graphic": "45190204.svg"
                    }, 
                    {
                        "digits": "05", 
                        "label": "Uneven Layer of Compact or Wet Snow Covering Ground Completely", 
                        "id": "UNEVEN_COMPACT_WET_SNOW_COVERING", 
                        "graphic": "45190205.svg"
                    }, 
                    {
                        "digits": "06", 
                        "label": "Loose Dry Snow Covering Less Than One-Half of Ground", 
                        "id": "LOOSE_DRY_SNOW_COVERING_LESS_THAN_HALF", 
                        "graphic": "45190206.svg"
                    }, 
                    {
                        "digits": "07", 
                        "label": "Loose Dry Snow Covering at Least One-Half of Ground-but Ground not Completely Covered", 
                        "id": "LOOSE_DRY_SNOW_COVERING_HALF", 
                        "graphic": "45190207.svg"
                    }, 
                    {
                        "digits": "08", 
                        "label": "Even Layer of Loose Dry Snow Covering Ground Completely", 
                        "id": "EVEN_LOOSE_DRY_SNOW_COVERING", 
                        "graphic": "45190208.svg"
                    }, 
                    {
                        "digits": "09", 
                        "label": "Uneven Layer of Loose Dry Snow Covering Ground Completely", 
                        "id": "UNEVEN_LOOSE_DRY_SNOW_COVERING", 
                        "graphic": "45190209.svg"
                    }, 
                    {
                        "digits": "10", 
                        "label": "Snow Covering Ground Completely-Deep Drifts", 
                        "id": "SNOW_DEEP_DRIFTS", 
                        "graphic": "45190210.svg"
                    }
                ]
            }
        ]
    }
];

export const specialEntitySubTypes = <EntitySubType[]>[];

export const sectorOneModifiers = <Modifier[]>[];

export const sectorTwoModifiers = <Modifier[]>[];

export const graphicFolder = {
    "entities": "Appendices/METOC/Atmospheric"
};

