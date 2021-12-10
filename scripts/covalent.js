let covalent = [
   {
      compound: "Covalent",
      answer: "Covalent",
      options: [
         "Covalent",
         "Covalent",
         "Covalent",
         "Covalent",
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
      compound: "Covalent",
      answer: "Covalent",
      options: [
         "Sodium Covalent",
         "Sodium Covalent",
         "Sodium Covalent",
         "Sodium Covalent",
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
      compound: "Covalent",
      answer: "Covalent",
      options: [
         "Covalent Chloride",
         "Covalent and Chlorine",
         "Covalent Chlorine",
         "Covalent Calcium",
      ],
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit, magni esse quaerat doloribus ad ex. Dignissimos commodi minima voluptatum?",
      get subscripts() {
         let subscripts = [];
         return subscripts;
      }
   },
]
