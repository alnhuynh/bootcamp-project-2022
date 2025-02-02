export interface Recipe {
    name: string;
    image: string;
    description: string;
    ingredients: string[];
    instructions: string[];
}
  
const recipes: Recipe[] = [
{
    name: "White Chocolate Matcha Cookies",
    image: "https://github.com/alnhuynh/bootcamp-project-2022/blob/main/milestone-3/frontend/src/images/cookie.jpg?raw=true",
    description: "Love baked goods that aren't too sweet or love green tea flavors?\nThese white chocolate chip matcha cookies are perfect for you!",
    ingredients: [
        "1⅓ cup (167 g) all purpose flour",
        "2 tablespoon (16 g) cornstarch",
        "1 tablespoon (15 g) matcha powder",
        "½ teaspoon (2 g) baking soda", 
        "½ cup (114 g) salted butter - melted",
        "⅔ cup (133 g) granulated sugar",
        "½ cup (110 g) light brown sugar - packed",
        "1 large egg - room temperature",
        "1½ teaspoon (7 ml) pure vanilla extract",
        "¾ cup (177 g) white chocolate chips"
    ],
    instructions: [
        "In a medium bowl, whisk together flour, cornstarch, baking soda, and matcha until well combined. Set aside.",
        "In a large bowl, whisk together melted butter, sugars, egg, and vanilla until smooth.",
        "Gradually mix dry ingredients into wet ingredients until combined into a dough. Fold in chocolate chips.",
        "Cover bowl with plastic wrap and place in the refrigerator to chill at least 30 minutes.",
        "When ready to bake, preheat oven to 350°F and line a large baking sheet with a silicone baking liner or parchment paper.",
        "Use a small cookie scoop to scoop dough out onto lined cookie sheet, 2 inches apart.",
        "Bake in preheated oven for 10-12 minutes, or until edges of cookies are golden brown."
    ]
},
{
    name: "Fruit or Paste Filled Mochi",
    image: "https://github.com/alnhuynh/bootcamp-project-2022/blob/main/milestone-3/frontend/src/images/mochi.PNG?raw=true",
    description: "This mochi recipe is simple and customizable!\nChoose any fruit or paste to put in the center and have fun with it!",
    ingredients: [
        "1 cup glutinous rice flour",
        "2 tablespoons powdered sugar",
        "¾ cup water",
        "2 tablespoons cornstarch",
        "Choose your filling: red bean paste, strawberries, banana slices, anything!"
      ],
    instructions: [
        "Prepare your fillings: Cut the tops off the strawberries. Divide the red bean paste into 6 equal portions and cover each strawberry with one portion of the red bean paste. Set the berries aside.",
        "In a microwave-safe bowl, whisk together the glutinous rice flour and the powdered sugar. Then, whisk in the water until a batter forms.",
        "Cover the bowl with a plate and microwave the mochi batter on high heat for 1 minute. Take the bowl out and stir the dough using a wet spatula.",
        "Place the bowl back in the microwave and cook the dough for another minute. Take it out and stir it again. The dough should be almost translucent, and much more firm and sticky.",
        "Place the bowl back in the microwave and microwave the dough for another 30 seconds. Once done, the Mochi dough should be translucent and very sticky. If it hasn't quite reached that stage, microwave the dough for a final 30 seconds.",
        "Place a large square of parchment paper on the counter and sprinkle 1 tablespoon cornstarch on top. Place the mochi dough on the cornstarch, then sprinkle the other tablespoon cornstarch on top of the mochi dough. Roll the dough out, until it's roughly ¼-inch thick. Use a 3-3 ½-inch diameter cookie cutter to cut 6 circles from the dough. These should be large enough to completely wrap around the berries.",
        "Place the dough circles in the fridge for 5 minutes to chill. Take them out, then one at a time, place a strawberry in the center of the circle. Wrap the circle around the berry and pinch the ends together to seal the berry within the mochi dough.",
        "Serve the mochi fresh, and store at room temperature in a sealed box for up to 2 days."
    ]
},
{
    name: "Che Thai",
    image: "https://github.com/alnhuynh/bootcamp-project-2022/blob/main/milestone-3/frontend/src/images/chethai.jpg?raw=true",
    description: "A recipe that has a special plate in my heart.\nSuper easy preparation and lots to share!",
    ingredients: [
        "1/2 can water chestnuts 20 oz (Red Rubies)",
        "3/4 cup tapioca starch (Red Rubies)",
        "20 drops food coloring red (Red Rubies)",
        "1 can toddy palm's seed 20 oz",
        "1 can lychee 20 oz",
        "1 can jackfruit 20 oz",
        "1 can longan 20 oz",
        "1 can young coconut meat 15 oz",
        "1 can ai-yu jelly 19 oz",
        "1 can coconut milk 14 oz"
    ],
    instructions: [
        "Pour tapioca starch and mix until all pieces are coated. Using a strainer, sift the water chestnuts to ensure to get rid of extra tapioca starch.",
        "Boil around 4 cups of water in a pot. Put in your red rubies and stir to prevent sticking.",
        "Cook for around 60-120 seconds or until the pieces start to float. Drain water and immediately transfer the red rubies to a bowl of ice cold water.",
        "Let sit in cold water for 10 minutes.",
        "Open all your canned fruits and save the juice from the young coconut meat and your preferred canned fruit.",
        "Slice lychee and jackfruit in thin 1 inch pieces, longan in halves, and toddy palm seeds and young coconut meat in larger slices. Cut ai-yu jelly in 1 inch cubes.",
        "In a large bowl, pour coconut milk and the juice from the young coconut meat can. Taste the mixture, and add juice from your preferred canned fruit if you like a sweeter taste. We personally prefer lychee and add 1/4 cup at a time to adjust sweetness.",
        "Pour in your prepared fruits in your large bowl and mix. Refrigerate for 2 hours, or add ice before serving."
    ]
}
];

export default recipes;