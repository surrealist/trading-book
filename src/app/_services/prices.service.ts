import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  private prices = [
    0,
    0.01,
    0.02,
    0.03,
    0.04,
    0.05,
    0.06,
    0.07,
    0.08,
    0.09,
    0.1,
    0.11,
    0.12,
    0.13,
    0.14,
    0.15,
    0.16,
    0.17,
    0.18,
    0.19,
    0.2,
    0.21,
    0.22,
    0.23,
    0.24,
    0.25,
    0.26,
    0.27,
    0.28,
    0.29,
    0.3,
    0.31,
    0.32,
    0.33,
    0.34,
    0.35,
    0.36,
    0.37,
    0.38,
    0.39,
    0.4,
    0.41,
    0.42,
    0.43,
    0.44,
    0.45,
    0.46,
    0.47,
    0.48,
    0.49,
    0.5,
    0.51,
    0.52,
    0.53,
    0.54,
    0.55,
    0.56,
    0.57,
    0.58,
    0.59,
    0.6,
    0.61,
    0.62,
    0.63,
    0.64,
    0.65,
    0.66,
    0.67,
    0.68,
    0.69,
    0.7,
    0.71,
    0.72,
    0.73,
    0.74,
    0.75,
    0.76,
    0.77,
    0.78,
    0.79,
    0.8,
    0.81,
    0.82,
    0.83,
    0.84,
    0.85,
    0.86,
    0.87,
    0.88,
    0.89,
    0.9,
    0.91,
    0.92,
    0.93,
    0.94,
    0.95,
    0.96,
    0.97,
    0.98,
    0.99,
    1,
    1.01,
    1.02,
    1.03,
    1.04,
    1.05,
    1.06,
    1.07,
    1.08,
    1.09,
    1.1,
    1.11,
    1.12,
    1.13,
    1.14,
    1.15,
    1.16,
    1.17,
    1.18,
    1.19,
    1.2,
    1.21,
    1.22,
    1.23,
    1.24,
    1.25,
    1.26,
    1.27,
    1.28,
    1.29,
    1.3,
    1.31,
    1.32,
    1.33,
    1.34,
    1.35,
    1.36,
    1.37,
    1.38,
    1.39,
    1.4,
    1.41,
    1.42,
    1.43,
    1.44,
    1.45,
    1.46,
    1.47,
    1.48,
    1.49,
    1.5,
    1.51,
    1.52,
    1.53,
    1.54,
    1.55,
    1.56,
    1.57,
    1.58,
    1.59,
    1.6,
    1.61,
    1.62,
    1.63,
    1.64,
    1.65,
    1.66,
    1.67,
    1.68,
    1.69,
    1.7,
    1.71,
    1.72,
    1.73,
    1.74,
    1.75,
    1.76,
    1.77,
    1.78,
    1.79,
    1.8,
    1.81,
    1.82,
    1.83,
    1.84,
    1.85,
    1.86,
    1.87,
    1.88,
    1.89,
    1.9,
    1.91,
    1.92,
    1.93,
    1.94,
    1.95,
    1.96,
    1.97,
    1.98,
    1.99,
    2,
    2.02,
    2.04,
    2.06,
    2.08,
    2.1,
    2.12,
    2.14,
    2.16,
    2.18,
    2.2,
    2.22,
    2.24,
    2.26,
    2.28,
    2.3,
    2.32,
    2.34,
    2.36,
    2.38,
    2.4,
    2.42,
    2.44,
    2.46,
    2.48,
    2.5,
    2.52,
    2.54,
    2.56,
    2.58,
    2.6,
    2.62,
    2.64,
    2.66,
    2.68,
    2.7,
    2.72,
    2.74,
    2.76,
    2.78,
    2.8,
    2.82,
    2.84,
    2.86,
    2.88,
    2.9,
    2.92,
    2.94,
    2.96,
    2.98,
    3,
    3.02,
    3.04,
    3.06,
    3.08,
    3.1,
    3.12,
    3.14,
    3.16,
    3.18,
    3.2,
    3.22,
    3.24,
    3.26,
    3.28,
    3.3,
    3.32,
    3.34,
    3.36,
    3.38,
    3.4,
    3.42,
    3.44,
    3.46,
    3.48,
    3.5,
    3.52,
    3.54,
    3.56,
    3.58,
    3.6,
    3.62,
    3.64,
    3.66,
    3.68,
    3.7,
    3.72,
    3.74,
    3.76,
    3.78,
    3.8,
    3.82,
    3.84,
    3.86,
    3.88,
    3.9,
    3.92,
    3.94,
    3.96,
    3.98,
    4,
    4.02,
    4.04,
    4.06,
    4.08,
    4.1,
    4.12,
    4.14,
    4.16,
    4.18,
    4.2,
    4.22,
    4.24,
    4.26,
    4.28,
    4.3,
    4.32,
    4.34,
    4.36,
    4.38,
    4.4,
    4.42,
    4.44,
    4.46,
    4.48,
    4.5,
    4.52,
    4.54,
    4.56,
    4.58,
    4.6,
    4.62,
    4.64,
    4.66,
    4.68,
    4.7,
    4.72,
    4.74,
    4.76,
    4.78,
    4.8,
    4.82,
    4.84,
    4.86,
    4.88,
    4.9,
    4.92,
    4.94,
    4.96,
    4.98,
    5,
    5.05,
    5.1,
    5.15,
    5.2,
    5.25,
    5.3,
    5.35,
    5.4,
    5.45,
    5.5,
    5.55,
    5.6,
    5.65,
    5.7,
    5.75,
    5.8,
    5.85,
    5.9,
    5.95,
    6,
    6.05,
    6.1,
    6.15,
    6.2,
    6.25,
    6.3,
    6.35,
    6.4,
    6.45,
    6.5,
    6.55,
    6.6,
    6.65,
    6.7,
    6.75,
    6.8,
    6.85,
    6.9,
    6.95,
    7,
    7.05,
    7.1,
    7.15,
    7.2,
    7.25,
    7.3,
    7.35,
    7.4,
    7.45,
    7.5,
    7.55,
    7.6,
    7.65,
    7.7,
    7.75,
    7.8,
    7.85,
    7.9,
    7.95,
    8,
    8.05,
    8.1,
    8.15,
    8.2,
    8.25,
    8.3,
    8.35,
    8.4,
    8.45,
    8.5,
    8.55,
    8.6,
    8.65,
    8.7,
    8.75,
    8.8,
    8.85,
    8.9,
    8.95,
    9,
    9.05,
    9.1,
    9.15,
    9.2,
    9.25,
    9.3,
    9.35,
    9.4,
    9.45,
    9.5,
    9.55,
    9.6,
    9.65,
    9.7,
    9.75,
    9.8,
    9.85,
    9.9,
    9.95,
    10,
    10.1,
    10.2,
    10.3,
    10.4,
    10.5,
    10.6,
    10.7,
    10.8,
    10.9,
    11,
    11.1,
    11.2,
    11.3,
    11.4,
    11.5,
    11.6,
    11.7,
    11.8,
    11.9,
    12,
    12.1,
    12.2,
    12.3,
    12.4,
    12.5,
    12.6,
    12.7,
    12.8,
    12.9,
    13,
    13.1,
    13.2,
    13.3,
    13.4,
    13.5,
    13.6,
    13.7,
    13.8,
    13.9,
    14,
    14.1,
    14.2,
    14.3,
    14.4,
    14.5,
    14.6,
    14.7,
    14.8,
    14.9,
    15,
    15.1,
    15.2,
    15.3,
    15.4,
    15.5,
    15.6,
    15.7,
    15.8,
    15.9,
    16,
    16.1,
    16.2,
    16.3,
    16.4,
    16.5,
    16.6,
    16.7,
    16.8,
    16.9,
    17,
    17.1,
    17.2,
    17.3,
    17.4,
    17.5,
    17.6,
    17.7,
    17.8,
    17.9,
    18,
    18.1,
    18.2,
    18.3,
    18.4,
    18.5,
    18.6,
    18.7,
    18.8,
    18.9,
    19,
    19.1,
    19.2,
    19.3,
    19.4,
    19.5,
    19.6,
    19.7,
    19.8,
    19.9,
    20,
    20.1,
    20.2,
    20.3,
    20.4,
    20.5,
    20.6,
    20.7,
    20.8,
    20.9,
    21,
    21.1,
    21.2,
    21.3,
    21.4,
    21.5,
    21.6,
    21.7,
    21.8,
    21.9,
    22,
    22.1,
    22.2,
    22.3,
    22.4,
    22.5,
    22.6,
    22.7,
    22.8,
    22.9,
    23,
    23.1,
    23.2,
    23.3,
    23.4,
    23.5,
    23.6,
    23.7,
    23.8,
    23.9,
    24,
    24.1,
    24.2,
    24.3,
    24.4,
    24.5,
    24.6,
    24.7,
    24.8,
    24.9,
    25,
    25.25,
    25.5,
    25.75,
    26,
    26.25,
    26.5,
    26.75,
    27,
    27.25,
    27.5,
    27.75,
    28,
    28.25,
    28.5,
    28.75,
    29,
    29.25,
    29.5,
    29.75,
    30,
    30.25,
    30.5,
    30.75,
    31,
    31.25,
    31.5,
    31.75,
    32,
    32.25,
    32.5,
    32.75,
    33,
    33.25,
    33.5,
    33.75,
    34,
    34.25,
    34.5,
    34.75,
    35,
    35.25,
    35.5,
    35.75,
    36,
    36.25,
    36.5,
    36.75,
    37,
    37.25,
    37.5,
    37.75,
    38,
    38.25,
    38.5,
    38.75,
    39,
    39.25,
    39.5,
    39.75,
    40,
    40.25,
    40.5,
    40.75,
    41,
    41.25,
    41.5,
    41.75,
    42,
    42.25,
    42.5,
    42.75,
    43,
    43.25,
    43.5,
    43.75,
    44,
    44.25,
    44.5,
    44.75,
    45,
    45.25,
    45.5,
    45.75,
    46,
    46.25,
    46.5,
    46.75,
    47,
    47.25,
    47.5,
    47.75,
    48,
    48.25,
    48.5,
    48.75,
    49,
    49.25,
    49.5,
    49.75,
    50,
    50.25,
    50.5,
    50.75,
    51,
    51.25,
    51.5,
    51.75,
    52,
    52.25,
    52.5,
    52.75,
    53,
    53.25,
    53.5,
    53.75,
    54,
    54.25,
    54.5,
    54.75,
    55,
    55.25,
    55.5,
    55.75,
    56,
    56.25,
    56.5,
    56.75,
    57,
    57.25,
    57.5,
    57.75,
    58,
    58.25,
    58.5,
    58.75,
    59,
    59.25,
    59.5,
    59.75,
    60,
    60.25,
    60.5,
    60.75,
    61,
    61.25,
    61.5,
    61.75,
    62,
    62.25,
    62.5,
    62.75,
    63,
    63.25,
    63.5,
    63.75,
    64,
    64.25,
    64.5,
    64.75,
    65,
    65.25,
    65.5,
    65.75,
    66,
    66.25,
    66.5,
    66.75,
    67,
    67.25,
    67.5,
    67.75,
    68,
    68.25,
    68.5,
    68.75,
    69,
    69.25,
    69.5,
    69.75,
    70,
    70.25,
    70.5,
    70.75,
    71,
    71.25,
    71.5,
    71.75,
    72,
    72.25,
    72.5,
    72.75,
    73,
    73.25,
    73.5,
    73.75,
    74,
    74.25,
    74.5,
    74.75,
    75,
    75.25,
    75.5,
    75.75,
    76,
    76.25,
    76.5,
    76.75,
    77,
    77.25,
    77.5,
    77.75,
    78,
    78.25,
    78.5,
    78.75,
    79,
    79.25,
    79.5,
    79.75,
    80,
    80.25,
    80.5,
    80.75,
    81,
    81.25,
    81.5,
    81.75,
    82,
    82.25,
    82.5,
    82.75,
    83,
    83.25,
    83.5,
    83.75,
    84,
    84.25,
    84.5,
    84.75,
    85,
    85.25,
    85.5,
    85.75,
    86,
    86.25,
    86.5,
    86.75,
    87,
    87.25,
    87.5,
    87.75,
    88,
    88.25,
    88.5,
    88.75,
    89,
    89.25,
    89.5,
    89.75,
    90,
    90.25,
    90.5,
    90.75,
    91,
    91.25,
    91.5,
    91.75,
    92,
    92.25,
    92.5,
    92.75,
    93,
    93.25,
    93.5,
    93.75,
    94,
    94.25,
    94.5,
    94.75,
    95,
    95.25,
    95.5,
    95.75,
    96,
    96.25,
    96.5,
    96.75,
    97,
    97.25,
    97.5,
    97.75,
    98,
    98.25,
    98.5,
    98.75,
    99,
    99.25,
    99.5,
    99.75,
    100,
    100.5,
    101,
    101.5,
    102,
    102.5,
    103,
    103.5,
    104,
    104.5,
    105,
    105.5,
    106,
    106.5,
    107,
    107.5,
    108,
    108.5,
    109,
    109.5,
    110,
    110.5,
    111,
    111.5,
    112,
    112.5,
    113,
    113.5,
    114,
    114.5,
    115,
    115.5,
    116,
    116.5,
    117,
    117.5,
    118,
    118.5,
    119,
    119.5,
    120,
    120.5,
    121,
    121.5,
    122,
    122.5,
    123,
    123.5,
    124,
    124.5,
    125,
    125.5,
    126,
    126.5,
    127,
    127.5,
    128,
    128.5,
    129,
    129.5,
    130,
    130.5,
    131,
    131.5,
    132,
    132.5,
    133,
    133.5,
    134,
    134.5,
    135,
    135.5,
    136,
    136.5,
    137,
    137.5,
    138,
    138.5,
    139,
    139.5,
    140,
    140.5,
    141,
    141.5,
    142,
    142.5,
    143,
    143.5,
    144,
    144.5,
    145,
    145.5,
    146,
    146.5,
    147,
    147.5,
    148,
    148.5,
    149,
    149.5,
    150,
    150.5,
    151,
    151.5,
    152,
    152.5,
    153,
    153.5,
    154,
    154.5,
    155,
    155.5,
    156,
    156.5,
    157,
    157.5,
    158,
    158.5,
    159,
    159.5,
    160,
    160.5,
    161,
    161.5,
    162,
    162.5,
    163,
    163.5,
    164,
    164.5,
    165,
    165.5,
    166,
    166.5,
    167,
    167.5,
    168,
    168.5,
    169,
    169.5,
    170,
    170.5,
    171,
    171.5,
    172,
    172.5,
    173,
    173.5,
    174,
    174.5,
    175,
    175.5,
    176,
    176.5,
    177,
    177.5,
    178,
    178.5,
    179,
    179.5,
    180,
    180.5,
    181,
    181.5,
    182,
    182.5,
    183,
    183.5,
    184,
    184.5,
    185,
    185.5,
    186,
    186.5,
    187,
    187.5,
    188,
    188.5,
    189,
    189.5,
    190,
    190.5,
    191,
    191.5,
    192,
    192.5,
    193,
    193.5,
    194,
    194.5,
    195,
    195.5,
    196,
    196.5,
    197,
    197.5,
    198,
    198.5,
    199,
    199.5,
    200,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    209,
    210,
    211,
    212,
    213,
    214,
    215,
    216,
    217,
    218,
    219,
    220,
    221,
    222,
    223,
    224,
    225,
    226,
    227,
    228,
    229,
    230,
    231,
    232,
    233,
    234,
    235,
    236,
    237,
    238,
    239,
    240,
    241,
    242,
    243,
    244,
    245,
    246,
    247,
    248,
    249,
    250,
    251,
    252,
    253,
    254,
    255,
    256,
    257,
    258,
    259,
    260,
    261,
    262,
    263,
    264,
    265,
    266,
    267,
    268,
    269,
    270,
    271,
    272,
    273,
    274,
    275,
    276,
    277,
    278,
    279,
    280,
    281,
    282,
    283,
    284,
    285,
    286,
    287,
    288,
    289,
    290,
    291,
    292,
    293,
    294,
    295,
    296,
    297,
    298,
    299,
    300,
    301,
    302,
    303,
    304,
    305,
    306,
    307,
    308,
    309,
    310,
    311,
    312,
    313,
    314,
    315,
    316,
    317,
    318,
    319,
    320,
    321,
    322,
    323,
    324,
    325,
    326,
    327,
    328,
    329,
    330,
    331,
    332,
    333,
    334,
    335,
    336,
    337,
    338,
    339,
    340,
    341,
    342,
    343,
    344,
    345,
    346,
    347,
    348,
    349,
    350,
    351,
    352,
    353,
    354,
    355,
    356,
    357,
    358,
    359,
    360,
    361,
    362,
    363,
    364,
    365,
    366,
    367,
    368,
    369,
    370,
    371,
    372,
    373,
    374,
    375,
    376,
    377,
    378,
    379,
    380,
    381,
    382,
    383,
    384,
    385,
    386,
    387,
    388,
    389,
    390,
    391,
    392,
    393,
    394,
    395,
    396,
    397,
    398,
    399,
    400,
    402,
    404,
    406,
    408,
    410,
    412,
    414,
    416,
    418,
    420,
    422,
    424,
    426,
    428,
    430,
    432,
    434,
    436,
    438,
    440,
    442,
    444,
    446,
    448,
    450,
    452,
    454,
    456,
    458,
    460,
    462,
    464,
    466,
    468,
    470,
    472,
    474,
    476,
    478,
    480,
    482,
    484,
    486,
    488,
    490,
    492,
    494,
    496,
    498,
    500,
    502,
    504,
    506,
    508,
    510,
    512,
    514,
    516,
    518,
    520,
    522,
    524,
    526,
    528,
    530,
    532,
    534,
    536,
    538,
    540,
    542,
    544,
    546,
    548,
    550,
    552,
    554,
    556,
    558,
    560,
    562,
    564,
    566,
    568,
    570,
    572,
    574,
    576,
    578,
    580,
    582,
    584,
    586,
    588,
    590,
    592,
    594,
    596,
    598,
    600,
    602,
    604,
    606,
    608,
    610,
    612,
    614,
    616,
    618,
    620,
    622,
    624,
    626,
    628,
    630,
    632,
    634,
    636,
    638,
    640,
    642,
    644,
    646,
    648,
    650,
    652,
    654,
    656,
    658,
    660,
    662,
    664,
    666,
    668,
    670,
    672,
    674,
    676,
    678,
    680,
    682,
    684,
    686,
    688,
    690,
    692,
    694,
    696,
    698,
    700,
    702,
    704,
    706,
    708,
    710,
    712,
    714,
    716,
    718,
    720,
    722,
    724,
    726,
    728,
    730,
    732,
    734,
    736,
    738,
    740,
    742,
    744,
    746,
    748,
    750,
    752,
    754,
    756,
    758,
    760,
    762,
    764,
    766,
    768,
    770,
    772,
    774,
    776,
    778,
    780,
    782,
    784,
    786,
    788,
    790,
    792,
    794,
    796,
    798,
    800,
    802,
    804,
    806,
    808,
    810,
    812,
    814,
    816,
    818,
    820,
    822,
    824,
    826,
    828,
    830,
    832,
    834,
    836,
    838,
    840,
    842,
    844,
    846,
    848,
    850,
    852,
    854,
    856,
    858,
    860,
    862,
    864,
    866,
    868,
    870,
    872,
    874,
    876,
    878,
    880,
    882,
    884,
    886,
    888,
    890,
    892,
    894,
    896,
    898,
    900,
    902,
    904,
    906,
    908,
    910,
    912,
    914,
    916,
    918,
    920,
    922,
    924,
    926,
    928,
    930,
    932,
    934,
    936,
    938,
    940,
    942,
    944,
    946,
    948,
    950,
    952,
    954,
    956,
    958,
    960,
    962,
    964,
    966,
    968,
    970,
    972,
    974,
    976,
    978,
    980,
    982,
    984,
    986,
    988,
    990,
    992,
    994,
    996,
    998,
    1000];

  constructor() { }

  public getPrices(min: number, max: number): number[] {
    const start = this.prices.indexOf(min);
    const end = this.prices.indexOf(max);
    return this.prices.slice(start, end + 1);
  }

  public getAbovePrice(price: number, slots: number) {
    const n = this.prices.indexOf(price);
    return this.prices[n + slots];
  }
  public getBelowPrice(price: number, slots: number) {
    const n = this.prices.indexOf(price);
    return this.prices[n - slots];
  }

  public isValidPrice(price: number): boolean {
    return this.prices.indexOf(price) >= 0;
  }

  // public allPrices(): number[] {
  //   let min = 0;
  //   const max = 1000;
  //   let r = [min];

  //   while (min < max) {
  //     min = this.round2(min + this.getSpan(min));

  //     r = [...r, min]; // r.push(min);
  //   }

  //   return r;
  // }

  public round2(value: number) {
    return Math.round(value * 100) / 100;
  }

  public getSpan(price: number) {
    if (price >= 400) {
      return 2.0;
    } else if (price >= 200) {
      return 1.0;
    } else if (price >= 100) {
      return 0.5;
    } else if (price >= 25) {
      return 0.25;
    } else if (price >= 10) {
      return 0.1;
    } else if (price >= 5) {
      return 0.05;
    } else if (price >= 2) {
      return 0.02;
    }
    return 0.01;
  }
}