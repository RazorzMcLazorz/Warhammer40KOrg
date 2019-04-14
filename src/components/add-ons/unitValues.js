// Each Necron has 2 Respawns
//                            : Range   Type    Str     AP    Dmg   Special
// Ranger 7points
// Plasma Caliver 14points    : 18"   Assault 2  7      -3    1    no 
// Plasma Caliver SuperCharged: 18"   Assault 2  8      -3    2    On a hit of 1, the bearer is slain after all of this weapons shots have been resolved

// Vanguard 8points x2        :
// Radium Carbine 0points     : 18"   Assault 3  3      0     1   Each time you make a wound roll of 6+ fot this weapon that hit inflicts 2 dmg instead of 1

// Vanguard 8points
// Radium Carbine 0points     : /\
// Omnispex 7points           : NA

// Vanguard 8points
// Arc Rifle 4points          : 24" Rapid Fire1 6       -1    1   When Attacking a Vehicle, this, weapon has a damage of D3

//Vanguard 8points --Name--> Glitch : G̵̛̻̞͘͜ḽ̵̊i̷̟̖̦̐̓͝t̷̹͝ċ̸̜̖̬͗́h̸̨͛
//transuranic arquebus 25p    : 60" Heavy 1     7       -2    D3  This weapon cannot be fired if the firing model moved during the Movement phase. This Weapon may target a Character even if it is not the closest enemy unit. Each time you make a wound roll of 6+ for this weapon, it inflicts a mortal wound in addition to its normal dmg

export const unitNames = ['SkitariiRanger', 'SkitariiRangerAlpha', 'SkitariiVanguard', 'SkitariiVanguardAlpha', 'TechPriestDominus', 'OnagerDunecrawler']

export const unitValues = {
  'SkitariiRanger' : {
    'points' : 7,
    'M' : '6"',
    'WS' : '4+',
    'BS' : '3+',
    'S' : '3',
    'T' : '3',
    'W' : '1',
    'A' : '1',
    'LD' : '6',
    'SV' : '4+'
  },
  'SkitariiRangerAlpha' : {
    'points' : 7,
    'M' : '6"',
    'WS' : '4+',
    'BS' : '3+',
    'S' : '3',
    'T' : '3',
    'W' : '1',
    'A' : '2',
    'LD' : '7',
    'SV' : '4+'
  },
  'SkitariiVanguard' : {
    'points' : 8,
    'M' : '6"',
    'WS' : '4+',
    'BS' : '3+',
    'S' : '3',
    'T' : '3',
    'W' : '1',
    'A' : '1',
    'LD' : '6',
    'SV' : '4+'
  },
  'SkitariiVanguardAlpha' : {
    'points' : 8,
    'M' : '6"',
    'WS' : '4+',
    'BS' : '3+',
    'S' : '3',
    'T' : '3',
    'W' : '1',
    'A' : '2',
    'LD' : '7',
    'SV' : '4+'
  },
  'TechPriestDominus' : {
    'points' : 125,
    'M' : '6"',
    'WS' : '3+',
    'BS' : '2+',
    'S' : '4',
    'T' : '4',
    'W' : '5',
    'A' : '3',
    'LD' : '8',
    'SV' : '2+'
  },
  'OnagerDunecrawler' : {
    'points' : 90,
    'M' : 'Remaining W 7-11+ = 8", Remaining W 3-5 = 6", Remaining W 1-2 = 4"',
    'WS' : '4+',
    'BS' : 'Remaining W 7-11+ : 3+, Remaining W 3-5 : 4+, Remaining W 1-2 : 5+',
    'S' : '3',
    'T' : '3',
    'W' : '1',
    'A' : 'Remaining W 7-11+ : 3, Remaining W 3-5 : D3, Remaining W 1-2 : 1',
    'LD' : '7',
    'SV' : '4+'
  },
}