let ionic = [
    {
        compound: "H20",
        answer: "Water",
        options: [
            "Water",
            "Chlorine",
            "Dioxide",
            "Chromium",
        ],
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit, magni esse quaerat doloribus ad ex. Dignissimos commodi minima voluptatum?",
        get subscripts() {
            let subscripts = [
                this.compound[1],
            ]
            return subscripts
        }
    },
    {
        compound: "Na2CO3",
        answer: "Water",
        options: [
            "Sodium Hipochlorite",
            "Sodium Carbonate",
            "Sodium Bicarbonate",
            "Sodium Flouride",
        ],
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit, magni esse quaerat doloribus ad ex. Dignissimos commodi minima voluptatum?",
        get subscripts() {
            let subscripts = [
                this.compound[2],
                this.compound[5],
            ]
            return subscripts
        }
    },
    {
        compound: "NaCl",
        answer: "Sodium Chloride",
        options: [
            "Sodium Chloride",
            "Sodium and Chlorine",
            "Sodium Chlorine",
            "Sodium Calcium",
        ],
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit, magni esse quaerat doloribus ad ex. Dignissimos commodi minima voluptatum?",
        get subscripts() {
            let subscripts = [];
            return subscripts;
        }
    },
]
