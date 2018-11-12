//Data constants
export const NotPlayed = 'NP';

//Teams

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

//Stone
//1
export const RigelskyYarnall = 'RigelskyYarnall';
//2
export const BoydGreenwood = 'Boyd/Greenwood';
//3
export const BoskerIkerd = 'Bosker/Ikerd';
//4
export const NeshiemMullins = 'Neshien/Mullins';
//5
export const RosenburgThurman = 'Rosenburg/Thurman';
//6
export const BennettWest = 'Bennett/West';
//7
export const YoungFriedman = 'Young/Friedman';
//8
export const ZilliakConway = 'Zilliak/Conway';

//Schedule
// Week	    1	    2	    3	    4	    5	    6	    7
// H vs. A	2 v 1	3 v 4	6 v 2	7 v 5	1 v 3	4 v 5	7 v 3
// H vs. A	3 v 8	1 v 7	7 v 8	8 v 4	4 v 2	8 v 1	8 v 2
// H vs. A	4 v 7	8 v 6	4 v 1	2 v 3	5 v 8	2 v 7	1 v 5
// H vs. A	5 v 6	2 v 5	5 v 3	6 v 1	6 v 7	3 v 6	6 v 4


export const data = {
    field: {
        GoldbergerDavis: {
            week1: {
                opponent: LepineLaliberte,
                match: '6-2,6-3'
            },
            week2: {
                opponent: EichlerHoward,
                match: '7-6,6-1',
                home: true
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
                match: 'NP',
                home: true
            },
            week6: {
                opponent: WilhelmAustreng,
                match: 'NP'
            },
            week7: {
                opponent: LynnSaracki,
                match: 'NP',
                home: true
            }
        },
        LepineLaliberte: {
            week1: {
                opponent: GoldbergerDavis,
                match: '2-6,3-6',
                home: true
            },
            week2: {
                opponent: LynnSaracki,
                match: 'NP',
                home: true
            },
            week3: {
                opponent: VoylesFord,
                match: 'NP'
            },
            week4: {
                opponent: MaiconErnissee,
                match: 'NP',
                home: true
            },
            week5: {
                opponent: MurphyBrady,
                match: 'NP'
            },
            week6: {
                opponent: EichlerHoward,
                match: 'NP',
                home: true
            },
            week7: {
                opponent: WilhelmAustreng,
                match: 'NP'
            }
        },
        MaiconErnissee: {
            week1: {
                opponent: WilhelmAustreng,
                match: '5-7,4-6',
                home: true
            },
            week2: {
                opponent: MurphyBrady,
                match: '1-6,1-6',
                home: true
            },
            week3: {
                opponent: LynnSaracki,
                match: '2-6,5-7'
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
                match: 'NP',
                home: true
            },
            week7: {
                opponent: EichlerHoward,
                match: 'NP'
            }
        },
        MurphyBrady: {
            week1: {
                opponent: EichlerHoward,
                match: '6-1,6-0',
                home: true
            },
            week2: {
                opponent: MaiconErnissee,
                match: '6-1,6-1'
            },
            week3: {
                opponent: GoldbergerDavis,
                match: 'NP',
                home: true
            },
            week4: {
                opponent: WilhelmAustreng,
                match: 'NP'
            },
            week5: {
                opponent: LepineLaliberte,
                match: 'NP',
                home: true
            },
            week6: {
                opponent: LynnSaracki,
                match: 'NP',
                home: true
            },
            week7: {
                opponent: VoylesFord,
                match: 'NP'
            }
        },
        LynnSaracki: {
            week1: {
                opponent: VoylesFord,
                match: '6-1,6-3',
                home: true
            },
            week2: {
                opponent: LepineLaliberte,
                match: 'NP'
            },
            week3: {
                opponent: MaiconErnissee,
                match: '6-2,7-5',
                home: true
            },
            week4: {
                opponent: EichlerHoward,
                match: 'NP'
            },
            week5: {
                opponent: WilhelmAustreng,
                match: 'NP',
                home: true
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
                match: '1-6,3-6'
            },
            week2: {
                opponent: WilhelmAustreng,
                match: '3-6,5-7'
            },
            week3: {
                opponent: LepineLaliberte,
                match: 'NP',
                home: true
            },
            week4: {
                opponent: GoldbergerDavis,
                match: 'NP',
                home: true
            },
            week5: {
                opponent: EichlerHoward,
                match: 'NP',
                home: true
            },
            week6: {
                opponent: MaiconErnissee,
                match: 'NP'
            },
            week7: {
                opponent: MurphyBrady,
                match: 'NP',
                home: true
            }
        },
        EichlerHoward: {
            week1: {
                opponent: MurphyBrady,
                match: '1-6,0-6'
            },
            week2: {
                opponent: GoldbergerDavis,
                match: '6-7,1-6'
            },
            week3: {
                opponent: WilhelmAustreng,
                match: 'NP',
                home: true
            },
            week4: {
                opponent: LynnSaracki,
                match: 'NP',
                home: true
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
                match: 'NP',
                home: true
            }
        },
        WilhelmAustreng: {
            week1: {
                opponent: MaiconErnissee,
                match: '7-5,6-4'
            },
            week2: {
                opponent: VoylesFord,
                match: '6-3,7-5',
                home: true
            },
            week3: {
                opponent: EichlerHoward,
                match: 'NP'
            },
            week4: {
                opponent: MurphyBrady,
                match: 'NP',
                home: true
            },
            week5: {
                opponent: LynnSaracki,
                match: 'NP'
            },
            week6: {
                opponent: GoldbergerDavis,
                match: 'NP',
                home: true
            },
            week7: {
                opponent: LepineLaliberte,
                match: 'NP',
                home: true
            }
        }
    },
    stone: {
        RigelskyYarnall: {
            week1: {
                opponent: BoydGreenwood,
                match: '2-6,2-6'
            },
            week2: {
                opponent: YoungFriedman,
                match: '6-1,6-7,6-4',
                home: true
            },
            week3: {
                opponent: NeshiemMullins,
                match: '3-6,4-6'
            },
            week4: {
                opponent: BennettWest,
                match: 'NP'
            },
            week5: {
                opponent: BoskerIkerd,
                match: 'NP',
                home: true
            },
            week6: {
                opponent: ZilliakConway,
                match: 'NP'
            },
            week7: {
                opponent: RosenburgThurman,
                match: 'NP',
                home: true
            }
        },
        BoydGreenwood: {
            week1: {
                opponent: RigelskyYarnall,
                match: '6-2,6-2',
                home: true
            },
            week2: {
                opponent: RosenburgThurman,
                match: '6-1,6-1',
                home: true
            },
            week3: {
                opponent: BennettWest,
                match: 'NP'
            },
            week4: {
                opponent: BoskerIkerd,
                match: 'NP',
                home: true
            },
            week5: {
                opponent: NeshiemMullins,
                match: 'NP'
            },
            week6: {
                opponent: YoungFriedman,
                match: 'NP',
                home: true
            },
            week7: {
                opponent: ZilliakConway,
                match: 'NP'
            }
        },
        BoskerIkerd: {
            week1: {
                opponent: ZilliakConway,
                match: '0-6,1-6',
                home: true
            },
            week2: {
                opponent: NeshiemMullins,
                match: '6-4,4-6,6-4',
                home: true
            },
            week3: {
                opponent: RosenburgThurman,
                match: '7-6,6-7,6-4'
            },
            week4: {
                opponent: BoydGreenwood,
                match: 'NP'
            },
            week5: {
                opponent: RigelskyYarnall,
                match: 'NP'
            },
            week6: {
                opponent: BennettWest,
                match: 'NP',
                home: true
            },
            week7: {
                opponent: YoungFriedman,
                match: 'NP'
            }
        },
        NeshiemMullins: {
            week1: {
                opponent: YoungFriedman,
                match: '6-4,6-1',
                home: true
            },
            week2: {
                opponent: BoskerIkerd,
                match: '4-6,6-4,4-6'
            },
            week3: {
                opponent: RigelskyYarnall,
                match: '6-3,6-4',
                home: true
            },
            week4: {
                opponent: ZilliakConway,
                match: 'NP'
            },
            week5: {
                opponent: BoydGreenwood,
                match: 'NP',
                home: true
            },
            week6: {
                opponent: RosenburgThurman,
                match: 'NP',
                home: true
            },
            week7: {
                opponent: BennettWest,
                match: 'NP'
            }
        },
        RosenburgThurman: {
            week1: {
                opponent: BennettWest,
                match: '6-4,6-7,7-5',
                home: true
            },
            week2: {
                opponent: BoydGreenwood,
                match: '1-6,1-6'
            },
            week3: {
                opponent: BoskerIkerd,
                match: '6-7,7-6,4-6',
                home: true
            },
            week4: {
                opponent: YoungFriedman,
                match: 'NP'
            },
            week5: {
                opponent: ZilliakConway,
                match: 'NP',
                home: true
            },
            week6: {
                opponent: NeshiemMullins,
                match: 'NP'
            },
            week7: {
                opponent: RigelskyYarnall,
                match: 'NP'
            }
        },
        BennettWest: {
            week1: {
                opponent: RosenburgThurman,
                match: '4-6,7-6,5-7'
            },
            week2: {
                opponent: ZilliakConway,
                match: '2-6,2-6'
            },
            week3: {
                opponent: BoydGreenwood,
                match: 'NP',
                home: true
            },
            week4: {
                opponent: RigelskyYarnall,
                match: 'NP',
                home: true
            },
            week5: {
                opponent: YoungFriedman,
                match: 'NP',
                home: true
            },
            week6: {
                opponent: BoskerIkerd,
                match: 'NP'
            },
            week7: {
                opponent: NeshiemMullins,
                match: 'NP',
                home: true
            }
        },
        YoungFriedman: {
            week1: {
                opponent: NeshiemMullins,
                match: '4-6,1-6'
            },
            week2: {
                opponent: RigelskyYarnall,
                match: '1-6,7-6,4-6'
            },
            week3: {
                opponent: ZilliakConway,
                match: '1-6,3-6',
                home: true
            },
            week4: {
                opponent: RosenburgThurman,
                match: 'NP',
                home: true
            },
            week5: {
                opponent: BennettWest,
                match: 'NP'
            },
            week6: {
                opponent: BoydGreenwood,
                match: 'NP'
            },
            week7: {
                opponent: BoskerIkerd,
                match: 'NP',
                home: true
            }
        },
        ZilliakConway: {
            week1: {
                opponent: BoskerIkerd,
                match: '6-0,6-1'
            },
            week2: {
                opponent: BennettWest,
                match: '6-2,6-2',
                home: true
            },
            week3: {
                opponent: YoungFriedman,
                match: '6-1,6-3'
            },
            week4: {
                opponent: NeshiemMullins,
                match: 'NP',
                home: true
            },
            week5: {
                opponent: RosenburgThurman,
                match: 'NP'
            },
            week6: {
                opponent: RigelskyYarnall,
                match: 'NP',
                home: true
            },
            week7: {
                opponent: BoydGreenwood,
                match: 'NP',
                home: true
            }
        }
    }
}