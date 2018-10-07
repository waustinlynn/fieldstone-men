//Data constants
export const NotPlayed = 'NP';

//Teams
export const LynnConway = 'Lynn/Conway';
export const MurphyYoung = 'Muphy/Young';
export const BradyRosenburg = 'Brady/Rosenburg';
export const ReedSmith = 'Reed/Smith';

export const data = {
    north: {
        lynnConway: {
            label: LynnConway,
            week1: {
                opponent: MurphyYoung,
                match: '3-6,6-4,7-5'
            },
            week2: {
                opponent: ReedSmith,
                match: '6-4,6-2'
            },
            week3: {
                opponent: BradyRosenburg,
                match: '3-6,6-0,3-6'
            }
        },
        murphyYoung: {
            label: MurphyYoung,
            week1: {
                opponent: LynnConway,
                match: '6-3,4-6,5-7'
            },
            week2: {
                opponent: BradyRosenburg,
                match: '6-0,7-6'
            },
            week3: {
                opponent: ReedSmith,
                match: '4-6,7-6,7-6'
            }
        },
        bradyRosenburg: {
            label: BradyRosenburg,
            week1: {
                opponent: ReedSmith,
                match: '5-7,4-6'
            },
            week2: {
                opponent: MurphyYoung,
                match: '0-6,6-7'
            },
            week3: {
                opponent: LynnConway,
                match: '6-3,0-6,6-3'
            }
        }
    }
}