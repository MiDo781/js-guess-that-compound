let ionic = [
    {
        compound: "H20",
        answer: "Water",
        choices: [
            "Water",
            "Chlorine",
            "Dioxide",
            "Chromium",
        ],
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
        choices: [
            "Sodium Hipochlorite",
            "Sodium Carbonate",
            "Sodium Bicarbonate",
            "Sodium Flouride",
        ],
        get subscripts() {
            let subscripts = [
                this.compound[2],
                this.compound[5],
            ]
            return subscripts
        }
    },
    {
        compound: "H20",
        answer: "Water",
        choices: [
            "Water",
            "Chlorine",
            "Dioxide",
            "Chromium",
        ],
        get subscripts() {
            let subscripts = [
                this.compound[1],
            ]
            return subscripts
        }
    },
]
