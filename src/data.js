const personalities = [
    {
        key: "ds",
        name: "Designer",
        nickname: "The Estetik",
        description: "“Estetik pa more!” Aesthetic is definitely your most Googled word. You love eye-pleasing color schemes and well-balanced art elements! Adobe CC is your best friend and worst enemy. You probably overused Montserrat by now, and you most likely despise Comic Sans."
    },
    {
        key: "pv",
        name: "Photo/Videographer",
        nickname: "The Flash",
        description: "“Lights, camera, action!” You’ve always wanted an iPhone 14 Pro Max 1TB storage fully paid. You light up everyone’s world, literally… because lighting is everything!"
    },
    {
        key: "wr",
        name: "Writer",
        nickname: "The Shakespeare",
        description: "“Shakespeare yarn?!” You’re in love with your own character and that’s probably why you’re single – your standards are so high! If someone’s already taken your heart, then good luck on your next book! You’re probably writing your perfect love story right now. And if you’re heartbroken, let us hear that 10-minute song about how he called you up again just to break you like a promise, so casually cruel in the name of being honest. </3"
    },
    {
        key: "co",
        name: "Communicator",
        nickname: "The youtubetomp3.com",
        description: "“Best in chika goes to…” Do you have gud englis iskels? Because Lynn from Las Vegas will surely hire you! You’re never afraid to speak your thoughts aloud and in perfect tone and diction. Debates are one of your fortes and that’s why you’re untouchable. Nobody wants to mess with someone who can scold them with such eloquence! Like Google, you’re the source of everything…and everyone!"
    },
    {
        key: "il",
        name: "Illustrator",
        nickname: "The \"Drawerist\"",
        description: "“The Modern Leonardo da Vinci” You love watching cartoons/anime and because your ship didn’t sail, you’re on your desk illustrating headcanon stuff to comfort yourself (P.S.: We won’t judge >u0). Whether you are an artist by career or by hobby, putting your imaginations into attractive illustrations is something you’ll always be passionate about – it is who you are!"
    },
    {
        key: "dv",
        name: "Developer",
        nickname: "The Octocat",
        description: "\"print(“This is an overused template!”)”Anonymous”;\" Your favorite coffee? Java. Animal? Python. Gemstone? Ruby. Your best friend is Stackoverflow, and your version of Facebook is Github – where you post everything you do in your everyday life: code! – If you’ve printed your first “hello world” by the time of answering this quiz, congratulations! The next thing you’ll think about is how to build the next Google. Say you can hack Facebook accounts and you’ll be untouchable… but annoyed by many. "
    },
    {
        key: "jt",
        name: "Jack-of-all-trades",
        nickname: "The Unicorn",
        description: "“Edi ikaw na!” God poured every ounce of perfect in you! When Nicki Minaj(?) said, “Yes I do the cooking, yes I do the cleaning,” she’s probably referring to you. You’re always the “hakot awardee” of the year. Knowing everything but mastering none is always a blessing more than a curse. You are versatile, you can do anything. And that’s something to be proud of!"
    }
];

let items = [
    {
        question: "Which of the following apps would spark your creativity the most?",
        answers: [
            {
                answer: "Tiktok",
                personalityKeys: ["co"]
            },
            {
                answer: "Canva",
                personalityKeys: ["ds"]
            },
            {
                answer: "Adobe Illustrator",
                personalityKeys: ["il"]
            },
            {
                answer: "Adobe Photoshop/Premiere Pro",
                personalityKeys: ["pv"]
            },
            {
                answer: "Microsoft Word",
                personalityKeys: ["wr"]
            },
            {
                answer: "Visual Studio",
                personalityKeys: ["dv"]
            }
        ]
    },
    {
        question: "Uy! May shopee sale! Which item would tempt you the most if it was on sale?",
        answers: [
            {
                answer: "A camera",
                personalityKeys: ["pv"]
            },
            {
                answer: "A drawing tablet",
                personalityKeys: ["il"]
            },
            {
                answer: "A 4k monitor",
                personalityKeys: ["ds"]
            },
            {
                answer: "A gaming laptop",
                personalityKeys: ["dv"]
            },
            {
                answer: "A luxury pen",
                personalityKeys: ["wr"]
            },
            {
                answer: "A microphone",
                personalityKeys: ["co"]
            }
        ]
    },
    {
        question: "Which app would you find yourself scrolling for hours?",
        answers: [
            {
                answer: "Facebook",
                personalityKeys: ["wr", "co"]
            },
            {
                answer: "Twitter",
                personalityKeys: ["wr"]
            },
            {
                answer: "Instagram",
                personalityKeys: ["pv"]
            },
            {
                answer: "Pinterest",
                personalityKeys: ["ds", "il"]
            },
            {
                answer: "Tiktok",
                personalityKeys: ["co"]
            },
            {
                answer: "Reddit",
                personalityKeys: ["dv"]
            }
        ]
    },
    {
        question: "Which type of communication do you prefer the most?",
        answers: [
            {
                answer: "Verbal",
                personalityKeys: ["co"]
            },
            {
                answer: "Nonverbal",
                personalityKeys: ["pv"]
            },
            {
                answer: "Visual",
                personalityKeys: ["ds", "il"]
            },
            {
                answer: "Written",
                personalityKeys: ["wr", "dv"]
            }
        ]
    },
    {
        question: "Which would be your ideal type of date?",
        answers: [
            {
                answer: "Movie date",
                personalityKeys: ["pv"]
            },
            {
                answer: "Arcade date",
                personalityKeys: ["dv"]
            },
            {
                answer: "Picnic date",
                personalityKeys: ["co"]
            },
            {
                answer: "Library date",
                personalityKeys: ["wr"]
            },
            {
                answer: "Art Museum date",
                personalityKeys: ["ds", "il"]
            }
        ]
    },
    {
        question: "In a mood for netflix and chill, what movie/series do you prefer?",
        answers: [
            {
                answer: "Parasite",
                personalityKeys: ["pv"]
            },
            {
                answer: "Ready Player One",
                personalityKeys: ["dv"]
            },
            {
                answer: "How to Get Away with Murder",
                personalityKeys: ["co"]
            },
            {
                answer: "Call Me by Your Name",
                personalityKeys: ["wr"]
            },
            {
                answer: "Rick and Morty",
                personalityKeys: ["ds", "il"]
            }
        ]
    },
    {
        question: "Tara TikTok! What is your personal fave 2022 famous TikTok song in the list?",
        answers: [
            {
                answer: "Super Freaky Girl - Nicki Minaj",
                personalityKeys: ["ds"]
            },
            {
                answer: "As it Was - Harry Styles",
                personalityKeys: ["wr"]
            },
            {
                answer: "A Glimpse of Us",
                personalityKeys: ["pv"]
            },
            {
                answer: "Until I Found You - Stephen Sanchez",
                personalityKeys: ["co"]
            },
            {
                answer: "About Damn Time - Lizzo",
                personalityKeys: ["dv"]
            },
            {
                answer: "Running Up that Hill (A Deal with God) - Kate Bush",
                personalityKeys: ["il"]
            }
        ]
    },
    {
        question: "What hobby do you much prefer?",
        answers: [
            {
                answer: "Reading books",
                personalityKeys: ["wr"]
            },
            {
                answer: "Doing educational debate",
                personalityKeys: ["co"]
            },
            {
                answer: "Having dress up",
                personalityKeys: ["ds"]
            },
            {
                answer: "Capturing scenery",
                personalityKeys: ["pv"]
            },
            {
                answer: "Sketching or painting",
                personalityKeys: ["il"]
            },
            {
                answer: "Sleeping",
                personalityKeys: ["dv"]
            },
        ]
    },
    {
        question: "Which among Taylor Swift’s famous songs do you personally like?",
        answers: [
            {
                answer: "You belong with me",
                personalityKeys: ["co"]
            },
            {
                answer: "Style",
                personalityKeys: ["ds", "il"]
            },
            {
                answer: "Bad Blood",
                personalityKeys: ["dv"]
            },
            {
                answer: "All Too Well (10 minute version)",
                personalityKeys: ["wr"]
            },
            {
                answer: "Blank Space",
                personalityKeys: ["pv"]
            }
        ]
    },
    {
        question: "Arat gaming! Which online game do you mostly play?",
        answers: [
            {
                answer: "Mobile Legends",
                personalityKeys: ["dv"]
            },
            {
                answer: "Dota 2",
                personalityKeys: ["wr", "co"]
            },
            {
                answer: "Valorant",
                personalityKeys: ["pv"]
            },
            {
                answer: "Mortal Kombat",
                personalityKeys: ["ds", "il"]
            },
        ]
    },
];

export { personalities, items };