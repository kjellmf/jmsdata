import {SymbolSet} from "types";
import * as SS_UNKNOWN from "./SS_UNKNOWN"
import * as SS_AIR from "./SS_AIR"
import * as SS_AIR_MISSILE from "./SS_AIR_MISSILE"
import * as SS_SPACE from "./SS_SPACE"
import * as SS_SPACE_MISSILE from "./SS_SPACE_MISSILE"
import * as SS_LAND_UNIT from "./SS_LAND_UNIT"
import * as SS_LAND_CIVILIAN from "./SS_LAND_CIVILIAN"
import * as SS_LAND_EQUIPMENT from "./SS_LAND_EQUIPMENT"
import * as SS_LAND_INSTALLATION from "./SS_LAND_INSTALLATION"
import * as SS_CONTROL_MEASURE from "./SS_CONTROL_MEASURE"
import * as SS_SEA_SURFACE from "./SS_SEA_SURFACE"
import * as SS_SEA_SUBSURFACE from "./SS_SEA_SUBSURFACE"
import * as SS_MINE_WARFARE from "./SS_MINE_WARFARE"
import * as SS_ACTIVITY from "./SS_ACTIVITY"
import * as SS_ATMOSPHERIC from "./SS_ATMOSPHERIC"
import * as SS_OCEANIC from "./SS_OCEANIC"
import * as SS_MET_SPACE from "./SS_MET_SPACE"
import * as SS_SIGINT_SPACE from "./SS_SIGINT_SPACE"
import * as SS_SIGINT_AIR from "./SS_SIGINT_AIR"
import * as SS_SIGINT_LAND from "./SS_SIGINT_LAND"
import * as SS_SIGINT_SURFACE from "./SS_SIGINT_SURFACE"
import * as SS_SIGINT_SUBSURFACE from "./SS_SIGINT_SUBSURFACE"
import * as SS_CYBERSPACE from "./SS_CYBERSPACE"

export const symbolSets = <SymbolSet[]>[
    SS_UNKNOWN,
    SS_AIR,
    SS_AIR_MISSILE,
    SS_SPACE,
    SS_SPACE_MISSILE,
    SS_LAND_UNIT,
    SS_LAND_CIVILIAN,
    SS_LAND_EQUIPMENT,
    SS_LAND_INSTALLATION,
    SS_CONTROL_MEASURE,
    SS_SEA_SURFACE,
    SS_SEA_SUBSURFACE,
    SS_MINE_WARFARE,
    SS_ACTIVITY,
    SS_ATMOSPHERIC,
    SS_OCEANIC,
    SS_MET_SPACE,
    SS_SIGINT_SPACE,
    SS_SIGINT_AIR,
    SS_SIGINT_LAND,
    SS_SIGINT_SURFACE,
    SS_SIGINT_SUBSURFACE,
    SS_CYBERSPACE
];