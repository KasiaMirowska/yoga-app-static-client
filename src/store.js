const STORE = {
    flows: [
        {
            id: 1,
            name: 'kasia',
            savedPosesIds: [2, 5, 7, 8, 3, 12, 14],
            peakPose: '',
            warmUp: [2, 5],
            midFlow: [],
            breakPoses: [],
            afterPeak: [5, 6, 7, 2],
            notes: 'ewargxthfcjghvbkn.l'
        },
        {
            id: 2,
            name: 'sasia',
            savedPosesIds: [2, 5, 7, 8, 3, 12, 14],
            /* savedPoses: [
            {
                poseId: 2,
                attributes: [1,3,4],
                notes: 'i like this thing'
            }
            ]
            */
            peakPose: '',
            warmUp: [2, 5],
            midFlow: [],
            breakPoses: [],
            afterPeak: [5, 6, 7, 2],

        }

    ],

    attributes: [
        {
            id: 1,
            poseId: 2,
            assignedFlowId: [1],
            attributesList: [],
            notes: 'ewargxthfcjghvbkn.l'
        },
        {
            id: "ck4brfoeh00003g5q82dd4719",
            poseId: 7,
            assignedFlowId: 1,
            attributesList: ["grounding-pose", "energizing-pose", "strengthening-pose"],
            notes: "",
        }
    ],

    poses: [
        {
            id: 1,
            nameEng: 'Fierce Pose',
            alias: 'Chair',
            nameSan: 'Utkatasana',
            benefits: 'Improves balance, mobility, posture, strengthens legs, glutes and ankles, opens chest and shoulders',
            img: "https://previews.dropbox.com/p/thumb/AAqU4XrQQG7DYUlbRYGaaWgf4KiJQtRo4GsTaD0D3FfYxtF-TohpmCzbqz7cM60ogj8UQCK3AbhRAQVW_lIkL_HUplis-d641OC4hVM4KHqP8rfRf0B2PTbt7RZZDBcSXUuNedLTkYSOMrgbwiF2xWUV5hBY1Pb8N4nFt4f_6uTFyDc-CzlTFYtraqSexdITlqv0dTGJPIXpLGb8gSu33rTXvl-9m5SYkpIOS5V0yfBjtv0rsO9EWdMkY8MXKekEsFCTkivVZSWydztmnzL-jJP2PHPlduyV6iIWB4X-3gplJ37UZMHWOHFOX_Lq6zCaoOXxyEc6_W2NL9zqhI5ETp_E/p.png?fv_content=true&size_mode=5",
            utube: "https://www.youtube.com/embed/Kp7XJkG9ubc",
            level: 'beginner',
            poseType: 'balansing, standing pose'
        },
        {
            id: 2,
            nameEng: 'Half Lord of the Fishes Pose',
            alias: 'Sitting Half Spinal Twist',
            nameSan: 'Matsyendrasana',
            benefits: 'Strengthens and lengthens the spine, cleanses internal organs, activates digestive tract, opens the chest and heart space',
            img: 'https://www.dropbox.com/s/u9joi8lbntxumyh/seatedspinaltwist.svg?raw=1',
            utube: 'https://www.youtube.com/embed/OMGUMuUbK4Q',
            level: 'intermediate',
            poseType: 'seated, twist',
        },
        {
            id: 3,
            nameEng: 'Revolving Side Angle Pose',
            alias: '',
            nameSan: 'Parivrtta Parsvakonasana',
            benefits: 'Improves flexibility, strengthens legs and core, opens the hips, chest, and shoulders, massages internal organs, improves digestion',
            img: 'https://previews.dropbox.com/p/thumb/AAqilzBSzq1bsZh0ckFwihgOXHNsBPGuQw3lrKycf8zMuwzRnV-34xM-CB1ceu4lDOxe_R2tRl1XJWQhwEgIi5EwSf9kj0cGFKkVLuw7BvTixWEWjc5Qet6Fz1rGo-Q2m5BYHxKE_gMpeKZevhKgfEFpHg3Ae6c6__jxwFhmM72Am7f23Wt4tu0XznVX3tIgewNisARi5ni_lvef63w90xF4NldCqc2UoJYMmNd-y4Y0afBHPq8GBhkWdPiFMEidrz4x7yxQk9FzEa_ab5wm3oJPsPwEDgzcMN5H-O0L_TmbmyePrR63ZyRLPGnaIMzCBrLEqN6Zh07bmXkMCDd4ak8Wpl1Z2adHqOfJ8GB56FT5fg/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/XRfxkioaG-Q',
            level: 'intermediate',
            poseType: 'balansing, twist, standing',
        },
        {
            id: 4,
            nameEng: 'Side Angle Pose',
            alias: '',
            nameSan: 'Parsvakonasana',
            benefits: 'Stretches the inner thighs, groins, and side body, Strengthens the quadriceps and hamstrings, as well as the hips, knees, and ankles, Improves stamina, Relieves low back pain, menstrual pain, and sciatica, Massages the abdominal organs, Opens the chest and shoulders',
            img: 'https://previews.dropbox.com/p/thumb/AAo0giZU630PLfZxRKFafv0gm_Ro7sGhUjzMa8AnXJhf5ypla9NbNY1v_0RNGG_4MgVs6fXojuh0d434ONrgUfJ_SPAysxx6RqofLI1iDns3Vi9px0ez3DjBKPZNSYZDAbJOIXlYkV7LLXXiYqG5sD7xayrdXhQ1BPd8NZJlSDAA5XXzuQpcHdTtkX-rk_57HkezA7hr6k8r7IWqwbnpicVSgovJoRcOfs-v2T5o6PownL8SPkqLNYbHVHJi0NCoVhCAOR34JPy3cg-C9SvMmhEtKetg3Imlu12c5kN5skBCxq_-_TuTnqAZFyd-q4t2Ti_SqLq7lVx0Rg7bhEhQzy3NpJ_0OYefMM3qy8cw6J38mA/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/7fFWy2IT9FE',
            level: 'beginner',
            poseType: 'balansing, standing',
        },
        {
            id: 5,
            nameEng: 'Reverse Tabletop Pose',
            alias: '',
            nameSan: 'Ardha Purvottanasana',
            benefits: 'Opens the heart space, opens the frontline of body, engages the core and quadriceps',
            img: 'https://previews.dropbox.com/p/thumb/AApL9m_ZLD9JRSXoz_BXlhRlua-aIQpCpaUuE-R4h6aGFmsyx740Sf3oELO8NV3EeDxjLKTVQFlY1WDUHaXgXUSE_P8nf1QcKXsX6QQFNCVblCbHxK1s-h8XPgcfTmP7UN65E8Z4yPribqXfhZekTEvIhPRIzCmmEQ3azkfhTFEZHLKnWF9qvnzOwa2cv-kdKYb_E-8FZo1FZ2bshNGgEl2HkFioelPxKgVHuRh6CmqCa4zwBe-0aeb5adU-LRp7qUfCoaaO3pZlZyA1nyEHGJVjU8oD_dlEmkrNrH_cGRsIkibdmOvWq53l0OAYgZ_rBF6QDhV5nr_mvnOB-3of2t8vdId9swxSYxYWvJLGJ8dkcA/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/nWaOi23tXeA',
            level: 'beginner',
            poseType: 'strengthening, seated, backbend',
        },
        {
            id: 6,
            nameEng: 'Tabletop Pose',
            alias: '',
            nameSan: 'Bharmanasana',
            benefits: 'Strengthens arms, shoulders, and knees, offers space to open your spine, grounds your energy and calms your nervous system',
            img: 'https://previews.dropbox.com/p/thumb/AAqYld7nN1Cx3cfcI4By7Wx6EATw0Xsa8qyMO5I9AvqFKTe79_a6nhYWy_RTEc7UK9PD0Ru6_UG1O6C8eM8zCQoZsFHmR_snz9u3Be4vlsSWyJf8ggQ009UCTl2_QAOBq11OB7fDbva-950yea2k8Z_Tvj9WqQ8gA6PnGHthEjOFq7fg2KgztoFGad8E9XQezVUfmmjhiw6TfJOqn2mnOLZLTC4Elt89GeLPhGIWHlK6NJBrUGrhSOmIgH-4e5B5Cygfev3KXz8lyFjcbvRBs5-VFf1X-VzZkun4VUppZZ-4OFxlvdstmi9oefbQgbvLrJp-TE7QWWlNuZ-nwknmPki-lGjEYPCPhFNOI744SxlONg/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/MeNKrcLDexA',
            level: 'beginner',
            poseType: 'seated',
        },
        {
            id: 7,
            nameEng: 'Tree pose',
            alias: '',
            nameSan: 'Vrksasana',
            benefits: 'Tones leg muscles, engages core muscles, enhances balancing abilities, aids in the alignment of the spine, lessens stress by improving focus and alertness',
            img: 'https://previews.dropbox.com/p/thumb/AAq9g4rp2Ewx2oYDMtOUkw9rTp_oYinYcm5B4vCwa9wasjnysntuvzHVAFaT8TQbagBGY5CBMhRwF0vDRxmv77vtyBksAt3dwjTv4pmGwzuItp6pfixT7fTKfcfVez_ADrum8aLtUPm40MNtK_cNjhYn1Te2iM5G9JI90BzW3T_TmXaFYDUak6K3GHY6oF9WFnbBL2tRXSsx71R_okgxralj9BmVUNbMQRF8tpcwAdqyIOKJ3AnTgXu042wShar1tuoYkotE3L-WTBnxq0JKXFC7bKVjd_wiR7LEgSo5jd_rHtjEB1bRv4H1dhIz43J1jdKvdXjig__gY0X5lEdlB3i5Xx30jEfGX50qh8c7SsPuwQ/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/wdln9qWYloU',
            level: 'beginner',
            poseType: 'standing, balancing',
        },
        {
            id: 8,
            nameEng: 'Warrior 3',
            alias: '',
            nameSan: 'Virabhadrasana III',
            benefits: 'Strengthens the entire body, improves balance, improves posture, aids in increasing energy and boosting concentration',
            img: 'https://previews.dropbox.com/p/thumb/AAp1Flnh-4WPwjfqAYGiAUSVa5sJrC-oaSuMfjTX6jEhf9uaqO5zjczksqXCN4YljHVOovUN8AswdNYPbGM5kvGb0Vtiu7q0sOq-3lhJoOxzI1LquJNmB2zU6MwzvQfguS0mmEDmmtmCaYYa7LnW6jE8U6kF8LmIyNoRTJTDWfkI3YLlVPFPSRGOGyPv2f2tNkwTlZygtKkeu6RzoSWprbuueB2y9IlXc3RwptIK-lT3J2Vsz0LAfwsuEr_v_HMnMBRnQALBHnqyXN44tJKf40QqNNSZxUMiiUlag_B-3nnwUqWl22f0dNKTtUdtj0a5YwfurxFwYuNAYt1hVGAA9u0KmkeoHkkQmpvKkdQxG9U5lw/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/S74efRiLo6k',
            level: 'intermediate',
            poseType: 'standing, balancing',
        },
        {
            id: 9,
            nameEng: 'Warrior 2',
            alias: '',
            nameSan: 'Virabhadrasana II',
            benefits: 'Strengthens the entire body, improves mobility in hips',
            img: 'https://previews.dropbox.com/p/thumb/AArvgiQnjZKPYSpCvUGmC3m_CRotb9Y29dTZqMMSGesEuFP2177IGKPrnf6wQvGLkzn8Uug0WMnvkD129zflk3J72Bwrhy9LfKJ9XoOPTgVVUHJC2z1FJo6OZMh1FpVR9A-mBhZRZfuQvKDwn8avhlw1J-xtcfELW2zxfIC0Xvy5214iHNNBn2Rv7boP9Fom4JD55jnjMtEkEe7VcGZnjjkoCBlp-C0b8U0_mnf_4NJxZy8ok9nd8FJDYZ21y-rSoW7N0twI3BInoLBUdXdo7fhWCwsbTE_2UbYPtyDwpE9Hic_STIp9q6rCZgzwaPoJdlwVVN0h-oXKq_Da2ofMJjIRC-LWLOlLnzg4x9eVUurskw/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/PZcp3Lz7WJs',
            level: 'beginner',
            poseType: 'standing, balancing',
        },
        {
            id: 10,
            nameEng: 'Warrior 1',
            alias: '',
            nameSan: 'Virabhadrasana I',
            benefits: 'Strengthens the entire body, improves mobility in hips, stretches back foot, chest',
            img: 'https://previews.dropbox.com/p/thumb/AArWScbFiU0Xn0JRw6vl-8It3eyj5TUB7ELF3calCMQ3OEvIUBI00zcw9L-tVbDYDdbrhhI9SCmt3aod9NWVIjcKu8AOk4x7_JORlYrX6w8MDFo7DVcqg6Iq6W4rnShRwe9Jg_N_s7pAHufJypm2V6oRdYo48GnQOWi3caVNPiJQ__KzRHuuh7cEFfMdTGEFyVqTgxwSjt51FmUY1kFwdRERDeM-cnU886EEEJvMbya95AWbz9rd1QSXDUpeP2LP_YW4th-vA7ixBs5syO8NXs3Wx9lUfn5eJFJWw-D9v4x-PVNgU5nlNdFv5_GqKZFFYA9Cq3J3W1M4lEVHHVKBBx2R9luF-VPLrHNPNoUa8hiO4Q/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/4hqmLOpkHrw',
            level: 'beginner',
            poseType: 'standing, balancing',
        },
        {
            id: 11,
            nameEng: 'Rested Half Pigeon Pose',
            alias: 'Pigeon',
            nameSan: 'Ardha Kapotasana',
            benefits: 'Cleanses the liver, restorative energy, opens the hips deeply, releases stored emotions',
            img: 'https://www.dropbox.com/s/77peru289zm446u/pigeon.svg?raw=1',
            utube: 'https://www.youtube.com/embed/jkJwvzt12dA',
            level: 'intermediate',
            poseType: 'forward fold, Hip Opener, Seated',
        },
        {
            id: 12,
            nameEng: 'Cobra',
            alias: '',
            nameSan: 'Bhujangasana',
            benefits: 'Improves spinal flexibility and mobility, deepens breathing, strengthens shoulders and chest, opens heart space, energizes entire body, Lessens stress ',
            img: 'https://previews.dropbox.com/p/thumb/AAr02QgW3UXAl4EVXFgWChgmq0_HNJCFOy811OqEWSEs0snDN9L_FM2IVlfqKcCSqnEEUYwPRWK87hL3xN-OD2tSs-yLYvp6sGC-LB--aFDIgc1RHxacjPpzO43Hx7WeLMazO8WTdDsvV15bxaMCRpIfetRxmJ_W1uzoFPAJLMSHM7oTb2DdnVj_NJwZ3JeFtPARVvlYSqyGjLmZs4qbC_-rIMtK6Wlq3YpcO-fsENnknjgvU80eunDgWsRLWluXdRSrsW_eV_H31Qo6Au-w-3XcsT3zqF_AaUYoQQxZSLbL5sXhEk95kjsAzrcdA0I_5p-qH27nTNU8eDs-EEU0FYcwJDmGT_gnIrnPqCDWNrAMcg/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/ZqnbaBx09-E',
            level: 'beginner',
            poseType: 'backbend, heart opener',
        },
        {
            id: 13,
            nameEng: "Bharadvaja's Twist",
            alias: '',
            nameSan: 'Bharadvajasana',
            benefits: 'Massages the abdominal organs Improves digestion Stretches the spine and shoulders Increases spinal flexibility Relieves stress',
            img: 'https://previews.dropbox.com/p/thumb/AAoqu7C529GGUJmgjfnQPWf9fkpTVCcSI1aQFGmQHLfKmFJqs4WMsETgJ1ssuB3EkxFgcQrrZ0BcAYYwk0cnol4qMpFBPbcn5d7MDV-eqp6G8YTCgOIVgmPoEqiqNuLPHzCntXd2GBgkPMyMs6_FK8opkMyVFLu1AtqNfsa4WVfo315oXUoxeiwSSg4FqewNXXqse04TpMD-ZJRDtwQ3j5zeyfM_JaDbgcjJazXLO1vOEdTUc1D0GdtevHfandmMEeHee6L0-jSDecPjuTMlyer5aUxlISelrWtrI_bygqMh3fZIT1-2pKvqnaM50JmDZYBFgFm6vZeOD_UHa8lJrHuq1XSJV-qjwJCpngx-Lky_tQ/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/Z43c1aeAMeM',
            level: 'intermediate',
            poseType: 'Hip Opener,  Seated, Twist',
        },
        {
            id: 14,
            nameEng: 'Boat',
            alias: '',
            nameSan: 'Paripurna Navasana',
            benefits: 'Strengthens the hips flexors, abdominals, and low spine, Focuses the mind, Improves overall core strength, Strengthens the quadriceps, Improves coordination and balance, Stimulates the abdominal organs and improves digestion, Stimulates the kidneys, thyroid, and prostate glands',
            img: 'https://previews.dropbox.com/p/thumb/AAr_Wtx4kvai5MIv2C1lb_VnN1J3ckZCNuN3Ibiv3SEQMWKGAmoR45eEoWOUYB335zDTeGTkX3LEjqFJ3UWHL4uHVci7xC_sy6rcOcwfwTPL49vl0ZaSTNc_PzhgDtcQspyZfu8p5DafvRlXgfPRy9buIhDk455JZRm9WnLpGr-XhRWHdxWzuyYYjXe-IhW1W_ZMrwDDiB9B63IltUHHvGGDrE-qDCwun-ktXQ8Pqx1GzXh3c1jFcANJG3mFoplmZI1fau5o4MBN9NeJppvX4rD6AztSLmNdSmqfarCUTzobALd_jsmKTAadcZkmQCSSX4U_-0F9uyYnyFvIUyFlSjThDXAfQs3ykto_amdlz1PYMg/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/UHSqdPl2R4Q',
            level: 'beginner',
            poseType: 'Balance, Seated, Strenghening',
        },
        {
            id: 15,
            nameEng: 'Bound Angle Pose',
            alias: '',
            nameSan: 'Baddha Konasana',
            benefits: 'Lengthens and releases adductor muscles of the groin, Stretches the low back and thighs, Improves external rotation of the hips, Strengthens the hip flexors and abdominals, Stimulates the abdominal organs and digestive system, Relieves symptoms of menstruation and menopause',
            img: 'https://previews.dropbox.com/p/thumb/AAqvuUNulMi_esQ6agPbhEHfMVWDcKKlnmBDHusFZfB4qSEcKM_yRezF1_AQ_93z4b5K0FWxuHvkeaXFVVx2v9C0zDwMKBK6SmpfHZA735yFtPkrYhDwA12RfUVg0FUMm4cCpLhuFx4cKlGSWtM2RznOUkI4ioxS0SZDOGhQXd49vJzIerGiSgZZk0BTLRVCDrB5NHuWNXF3gPEk_Zi_0mmBf7RKj_MucgpsTzs7yR7hX-Yi14o6LBKRK2PNj7mcm8YAwJd_EUi7PDQsyBmdvrH0EBScALZLOfFV31nwEwSaoAYhE5errV9_uB2Ozv3z1k9lnouYsLBrm3ABe_mE0mRF-L0cos0D9Ivk7DCM8mZzOg/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/RWvNyJyasiI',
            level: 'beginner',
            poseType: 'Forward Fold, Hip Opener, Seated',
        },
        {
            id: 16,
            nameEng: 'Bow pose',
            alias: '',
            nameSan: 'Dhanurasana',
            benefits: 'Lengthens the hip flexors and strengthens the hamstrings, Detoxes the kidneys and adrenal glands, Strengthens the shoulders and spine extensors, Opens the chest and throat',
            img: 'https://previews.dropbox.com/p/thumb/AAoWqHZUg7L2-XLzdbrPvVpIpfgMqYfPndgWZFGA-qC-AJtFpOLp5rS3y3uJXnIXvSGF1So6M9F_niACA_UaA_oYcezHivvqDxBszsfJ3zklpOaY9f3qxfGHha8oQgFqcVdlz1C8y6EW3XSpddYYdVKXwcJ_vC4lZVVKeE8ue84gsItRivH7vob8PP3z7Pdig3qKZ7igPjBQcVohcK97_QpI23Jnw8nP0Bsnbeur_TxUf0yGOy3b30p_cnn4ZFcI4jzEzO4EUbHxPHRr8fIWHoc0KinOMf52KA5JVh3fMuyW80YI2abr9g3A-nlNbOYa1hRcsQQNY6yXUf7A7Ung7IfRZJSmRDR4E5aqt3fd9hXL6g/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/4P2mYcOGxbU',
            level: 'intermediate',
            poseType: 'Backbend, Heart Opener',
        },
        {
            id: 17,
            nameEng: 'Bridge pose',
            alias: '',
            nameSan: 'Setu Bandha Sarvangasana',
            benefits: 'Stimulates the thyroid, Improves posture and opens rounded shoulders, Stretches the abdominal organs and improves digestion, Tones the female reproductive organs, Relieves anxiety, fatigue, and insomnia',
            img: 'https://previews.dropbox.com/p/thumb/AApluFsgnIO1VDv7DYDUrEB3d_hQjfA9kltCn_hPeMZz5nhR3ShLDE-A2eYuD7c_rs5WuLu-FAGsAhRxec6ZY69VU2DK13kxneV4Fs6Li9nUDM9JdPbRslxGkgqJm8_gzopL6Wa_IweJIqpwPQfovmnQxkGyqhiLCrPIBcTv0UQ6RbjnkJJkYhoui_IW9xhTkx4ViPM5IWlkek5Ktdw0WUAXKeTGUV1Y7sQ9QBULvZjNHUVzKe8flXiN-zAC0NUVtibIqDlRh2Nge3CFKBj4Aztu1N72V1QJsa-mrMhUMHWBQHGEvgRB7qKwPYBiX88p4L-8UttVOozan7irauHsHNck3UuvEEjH42iQHKHowscIpg/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/JY9TLhKIQdE',
            level: 'beginner',
            poseType: 'Backbend, Heart Opener',
        },
        {
            id: 18,
            nameEng: 'Camel pose',
            alias: '',
            nameSan: 'Ustrasana',
            benefits: 'Stretches the vertebrae, Massages the abdominal organs and stimulates digestion, Stretches the neck, chest, abs, hips, and thighs, Stimulates the spinal nerves, Strengthens the back muscles and core, Improves posture, Regulates the thyroid',
            img: 'https://previews.dropbox.com/p/thumb/AAqGCpsjCZfp_OG3ubPJ5CzqvsuqtsY_GyS9MyHX58gH-__e1a_ISoUgB4UULiD3rly80IbfcOyg8tFCR5YKmvdPi34ciG04bmqb3bYtof2aGGexknOOPc4sAMCSzD_ogyHSL2trANGVk80iKsBgLXKUgktYgyg8ki1W60DlfKQoWaqEjx6yzWSFNg8VJKx_X4693flZQAjlEEK12twjoCReChQmKvniZz_CqJjXrSiY2ariQ_msD26HbF6reQDrQSN9eBJybncVfe8yw77oUiL8_4s9bmoJN5WnxCHkstvQMdJDhvQvZ_YuyDfhOl47ljn8FmExf_i-qkAT3vgYyt01STq_jrhpxyjC-IMzWLjmRA/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/8q7GxnIFsQo',
            level: 'intermediate',
            poseType: 'Backbend, Heart Opener',
        },
        {
            id: 19,
            nameEng: 'Cat',
            alias: '',
            nameSan: 'Marjaryasana',
            benefits: 'Strengthens the arms, wrists, and shoulders, Relieves tension in the thoracic, cervical, and lumbar spine; warming up the back for practice, Gently massages the abdominal organs and improves digestion, Strengthens and tones the abdominal muscles, Increases spinal flexibility',
            img: 'https://previews.dropbox.com/p/thumb/AAokCEJ5ZnkU9tjDYPoaialYNpKGOWg7Ywoqq6QZcFZwwthsRGj2mcHtfCzF5uch5Cl78bslBZRZI6rUxWOqMNkAUp7aZpmhIPr4V21bZwcRsXzvJICJcCaLbTW8JwhK5Dxy3-nbPkaN190B4iF6STJLt3N6gnwjkkXkCg_QgfLBTsEgoUfOz13-abz58iMIkap2bmeEW5KSN8xHhyUzF99wkS9EAgvO__Ui5d6SXNqKNA3Ku1hGabpHvqIB7UGJPwzSqL5u_4WI7ykctQol3_SBtx-iDRq9lyzsBBtzDRd5E-pfNDo8fcr8EU9coLhZJyHUIeyxW_fy7tE7pHfkmu05cLz7GCm1gn0qouPigo53kw/p.png?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/Ov65nNSWrfw',
            level: 'beginner',
            poseType: 'Backbend, Core',
        },
        {
            id: 20,
            nameEng: 'Low lundge with backbend B',
            alias: '',
            nameSan: 'Anjaneyasana',
            benefits: 'Strenghens gluteus and quadriceps,opens hips and hip flexors, shoulders, lungs,and chest, improves balance and concentration, relieves sciatica, stimulates digestive and reproductive organs',
            img: 'https://previews.dropbox.com/p/thumb/AAptbtT0STcaDysZScJBaziuoKkzlUo4Da8TowwRPuNJNhEQyYglb9yEOLVYXUpzJO3N8tGWf7ZzoAS1J_cYT0DbCiCeQosMJ0yW9_W8gHhhfna3LVuarO8KfraO6BO2Claz-dWclrjCLTfkJHv7W4Ng79bru9iXbiQV9tHRvNsv6Ou9VmJ5HIQG1W8xCtXrvAIiw62ZQ_V992DhAaM3x7jYgHlyStXrQqSCax0dAIHBZtWchTmqeaE_f6E84H30KRsXOjDL_mO0OQY3wVouOimykVWKr64M6OqbSz0DZdvFS4X8k6wbwrWhtJuVUuxie1jtgtV6ZPpx5guj-93dK01m/p.jpeg?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/oNNVpM8sJvc',
            level: 'intermediate',
            poseType: 'Backbend, Core, standing, balancing',
        },

        {
            id: 21,
            nameEng: 'Sun salutation A & B',
            alias: '',
            nameSan: 'Surya Nmaskar A & B',
            benefits: 'Prepares for practice, warms up the whole body, stretches leg and back muscles, opens the chest, stimulates and energizes ',
            img: 'https://previews.dropbox.com/p/thumb/AArOzSge5XoYQg8u-FbEmX1vDyb57OVODtwiDUoKT8XPdxyb8y7H131ZMnap2uzy9-UFXFnhy4JBL0U_eSwfI16p7nlSp5oLux9dQ277ArhnBT_SxmbtezIMmNbojTeHtVr4RmR4M1uh71nIXdjwZwInEB1UQQO6Pqwzh3nWa52WdL9vdK1hRSkkFvoPO92FXiaH52OKxFh-uvIUrglOB_h6SrBZNZlgfcJQPtc8IyTkkpQKQQcKgWaXpJfoigfYfgEC_tdHQJVzkfDO3I2eZCBJsvXH_RZQwwYlpzZ8FXqLqhzGR2U_kaB1X1bLyw1ABubwDACDQRq7d_lDQFY6F_x9/p.jpeg?fv_content=true&size_mode=5?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/aWE7XenIWlc',
            level: 'beginner',
            poseType: 'Seated, Forward Bend',
        },
        {
            id: 22,
            nameEng: 'Forearm wheel',
            alias: '',
            nameSan: 'Dwi Pada Viparita Dandasana',
            benefits: 'Deep chest and shoulder openner as well as front body, abdominals and hip abductors, strengthens back, sholders, legs and core muscle',
            img: 'https://previews.dropbox.com/p/thumb/AAqKFTbg-b2NZ5p4YhwdNB-yPnuFq7uAuOELvnKf2K09-IhXojJX_Kyvw4WnPdZWcuYKEbruOTTzq0opGeyw8QBC2IxghGQvFRl_sz10LZ7ekhnhk7u8UmRol6Yxf1WRe3I3TPJD5oAW-Gq5Lgfe9VE_Db9OB02Y2ASCEOzY9wuahA-iNO8VrlEfZMmbtRwlyxc9UARjpiMeeMEF6CRDo0qb9u3MPoFt8Iu10zJhFHl7qC_Wp2_d_Z66errluNDwRpgUihkKtKE_W2G8ugV2s05bmbeTFHu6RqqpRA8NoaUsrbWFjTrI7jQglW8I_T7rE86w4NkvJLpg8A3AVE_RCnyXEUIwTMqHUFMbREQEm-Fy8Q/p.jpeg?fv_content=true&size_mode=5',
            utube: 'https://www.youtube.com/embed/-5inRni3sQY',
            level: 'advanced',
            poseType: 'Backbend, core',
        },
    ]

}



export default STORE;