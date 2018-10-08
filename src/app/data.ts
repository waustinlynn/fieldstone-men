//Data constants
export const NotPlayed = 'NP';

//Teams

//Stone
//1
export const RigelskyYarnall = 'RigelskyYarnall';
//2
export const BoydGreenwood = 'Boyd/Greenwood';
//3
export const BoskerIkerd = 'Bosker/Ikerd';
//4
export const NeshiemMullins = 'Meshien/Mullins';
//5
export const RosenburgThurman = 'Rosenburg/Thurman';
//6
export const BennettWest = 'Bennett/West';
//7
export const YoungFriedman = 'Young/Friedman';
//8
export const ZilliakConway = 'Zilliak/Conway';

//Field
//1
export const GoldbergerDavis = 'Goldberger/Davis';
//2
export const LepineLaliberte = 'Lepine/Laliberte';
//3
export const MaiconErnissee = 'Maicon/Ernissee';
//4
export const MurphyBrady = 'Murphy/Brady';
//5
export const LynnSaracki = 'Lynn/Saracki';
//6
export const VoylesFord = 'Voyles/Ford';
//7
export const EichlerHoward = 'Eichler/Howard';
//8
export const WilhelmAustreng = 'Wilhelm/Austreng';

export const data = {
    field: {
        GoldbergerDavis: {
            week1: {
                opponent: LepineLaliberte,
                match: 'NP'
            },
            week2: {
                opponent: EichlerHoward,
                match: 'NP'
            },
            week3: {
                opponent: MurphyBrady,
                match: 'NP'
            },
            week4: {
                opponent: VoylesFord,
                match: 'NP'
            },
            week5: {
                opponent: MaiconErnissee,
                match: 'NP'
            },
            week6: {
                opponent: WilhelmAustreng,
                match: 'NP'
            },
            week7: {
                opponent: LynnSaracki,
                match: 'NP'
            }
        },
        LepineLaliberte: {
            week1: {
                opponent: GoldbergerDavis,
                match: 'NP'
            },
            week2: {
                opponent: LynnSaracki,
                match: 'NP'
            },
            week3: {
                opponent: VoylesFord,
                match: 'NP'
            },
            week4: {
                opponent: MaiconErnissee,
                match: 'NP'
            },
            week5: {
                opponent: MurphyBrady,
                match: 'NP'
            },
            week6: {
                opponent: EichlerHoward,
                match: 'NP'
            },
            week7: {
                opponent: WilhelmAustreng,
                match: 'NP'
            }
        },
        MaiconErnissee: {
            week1: {
                opponent: WilhelmAustreng,
                match: 'NP'
            },
            week2: {
                opponent: MurphyBrady,
                match: 'NP'
            },
            week3: {
                opponent: LynnSaracki,
                match: 'NP'
            },
            week4: {
                opponent: LepineLaliberte,
                match: 'NP'
            },
            week5: {
                opponent: GoldbergerDavis,
                match: 'NP'
            },
            week6: {
                opponent: VoylesFord,
                match: 'NP'
            },
            week7: {
                opponent: EichlerHoward,
                match: 'NP'
            }
        },
        MurphyBrady: {
            week1: {
                opponent: EichlerHoward,
                match: 'NP'
            },
            week2: {
                opponent: MaiconErnissee,
                match: 'NP'
            },
            week3: {
                opponent: GoldbergerDavis,
                match: 'NP'
            },
            week4: {
                opponent: WilhelmAustreng,
                match: 'NP'
            },
            week5: {
                opponent: LepineLaliberte,
                match: 'NP'
            },
            week6: {
                opponent: LynnSaracki,
                match: 'NP'
            },
            week7: {
                opponent: VoylesFord,
                match: 'NP'
            }
        },
        LynnSaracki: {
            week1: {
                opponent: VoylesFord,
                match: 'NP'
            },
            week2: {
                opponent: LepineLaliberte,
                match: 'NP'
            },
            week3: {
                opponent: MaiconErnissee,
                match: 'NP'
            },
            week4: {
                opponent: EichlerHoward,
                match: 'NP'
            },
            week5: {
                opponent: WilhelmAustreng,
                match: 'NP'
            },
            week6: {
                opponent: MurphyBrady,
                match: 'NP'
            },
            week7: {
                opponent: GoldbergerDavis,
                match: 'NP'
            }
        },
        VoylesFord: {
            week1: {
                opponent: LynnSaracki,
                match: 'NP'
            },
            week2: {
                opponent: WilhelmAustreng,
                match: 'NP'
            },
            week3: {
                opponent: LepineLaliberte,
                match: 'NP'
            },
            week4: {
                opponent: GoldbergerDavis,
                match: 'NP'
            },
            week5: {
                opponent: EichlerHoward,
                match: 'NP'
            },
            week6: {
                opponent: MaiconErnissee,
                match: 'NP'
            },
            week7: {
                opponent: MurphyBrady,
                match: 'NP'
            }
        },
        EichlerHoward: {
            week1: {
                opponent: MurphyBrady,
                match: 'NP'
            },
            week2: {
                opponent: GoldbergerDavis,
                match: 'NP'
            },
            week3: {
                opponent: WilhelmAustreng,
                match: 'NP'
            },
            week4: {
                opponent: LynnSaracki,
                match: 'NP'
            },
            week5: {
                opponent: VoylesFord,
                match: 'NP'
            },
            week6: {
                opponent: LepineLaliberte,
                match: 'NP'
            },
            week7: {
                opponent: MaiconErnissee,
                match: 'NP'
            }
        },
        WilhelmAustreng: {
            week1: {
                opponent: MaiconErnissee,
                match: 'NP'
            },
            week2: {
                opponent: VoylesFord,
                match: 'NP'
            },
            week3: {
                opponent: EichlerHoward,
                match: 'NP'
            },
            week4: {
                opponent: MurphyBrady,
                match: 'NP'
            },
            week5: {
                opponent: LynnSaracki,
                match: 'NP'
            },
            week6: {
                opponent: GoldbergerDavis,
                match: 'NP'
            },
            week7: {
                opponent: LepineLaliberte,
                match: 'NP'
            }
        }
    },
    stone: {

    }
}