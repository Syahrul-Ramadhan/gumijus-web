const productData = [
  {
    id: 1,
    category: "Produk Terlaris",

    name: "Extra Orange",
    description: "Orange, Lemon, Pineapple, Carrot",

    price: 26000,

    image: "/photos/product/extra-orange.jpeg",

    ingredients: [
      "Orange",
      "Lemon",
      "Pineapple",
      "Carrot",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },

  {
    id: 2,
    category: "Produk Terlaris",

    name: "Summertime Punch",
    description: "Orange, Lemon, Pineapple, Apple",

    price: 26000,

    image: "/photos/product/summertime-punch.jpeg",

    ingredients: [
      "Orange",
      "Lemon",
      "Pineapple",
      "Apple",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },

  {
    id: 3,
    category: "Produk Terlaris",

    name: "Strawberry Smoothie",
    description: "Strawberry, Banana, Fresh Milk",

    price: 27500,

    image: "/photos/product/strawberry-smoothie.jpeg",

    ingredients: [
      "Strawberry",
      "Banana",
      "Fresh Milk",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },

  {
    id: 4,
    category: "Produk Terlaris",

    name: "Green Booster",
    description: "Spinach, Apple, Pineapple",

    price: 26000,

    image: "/photos/product/green-booster.jpeg",

    ingredients: [
      "Spinach",
      "Apple",
      "Pineapple",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },

  {
    id: 5,
    category: "Gumijus Blend",

    name: "Green Booster",
    description: "Spinach, Apple, Pineapple",

    price: 26000,

    image: "/photos/product/green-booster.jpeg",

    ingredients: [
      "Spinach",
      "Apple",
      "Pineapple",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },

  {
    id: 6,
    category: "Gumijus Blend",

    name: "Peachee Berry",
    description: "Peach, Lychee, Blackberry",

    price: 26000,

    image: "/photos/product/peachee-berry.jpeg",

    ingredients: [
      "Peach",
      "Lychee",
      "Blackberry",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 7,
    category: "Gumijus Blend",

    name: "Extra Orange",
    description: "Orange, Lemon, Pineapple, Carrot",

    price: 26000,

    image: "/photos/product/extra-orange.jpeg",

    ingredients: [
      "Orange",
      "Lemon",
      "Pineapple",
      "Carrot",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 8,
    category: "Gumijus Blend",

    name: "Balance Madness",
    description: "Peach, Lychee, Apple",

    price: 26000,

    image: "/photos/product/balance-madness.jpeg",

    ingredients: [
      "Peach",
      "Lychee",
      "Apple",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 9,
    category: "Gumijus Blend",

    name: "Tropical Slushie",
    description: "Watermelon, Pineapple, Raspberries, Apple",

    price: 27500,

    image: "/photos/product/tropical-slushie.jpeg",

    ingredients: [
      "Watermelon",
      "Pineapple",
      "Raspberries",
      "Apple",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 10,
    category: "Gumijus Blend",

    name: "Summertime Punch",
    description: "Orange, Lemon, Pineapple, Apple",

    price: 27500,

    image: "/photos/product/summertime-punch.jpeg",

    ingredients: [
      "Orange",
      "Lemon",
      "Pineapple",
      "Apple",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 11,
    category: "Gumijus Blend",

    name: "Wonder Berry",
    description: "Watermelon, Raspberry, Lemon",

    price: 26000,

    image: "/photos/product/wonder-berry.jpeg",

    ingredients: [
      "Watermelon",
      "Raspberry",
      "Lemon",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 12,
    category: "Gumijus Blend",

    name: "Dragon Berry",
    description: "Dragon Fruit, Raspberry, Lychee",

    price: 26000,

    image: "/photos/product/dragon-berry.jpeg",

    ingredients: [
      "Dragon Fruit",
      "Raspberry",
      "Lychee",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 13,
    category: "Gumijus Blend",

    name: "Sunny Sunkist",
    description: "Whole sunkist, Squeezed orange, Lemon",

    price: 28000,

    image: "/photos/product/sunny-sunkist.jpeg",

    ingredients: [
      "Whole sunkist",
      "Squeezed orange",
      "Lemon",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 14,
    category: "Gumijus Blend",

    name: "Mango Tango",
    description: "Mango, Strawberry, Lychee",

    price: 28000,

    image: "/photos/product/mango-tango.jpeg",

    ingredients: [
      "Mango",
      "Strawberry",
      "Lychee",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 15,
    category: "Gumijus Blend",

    name: "Dragon Mango",
    description: "Dragon Fruit, Mango, Peach",

    price: 28000,

    image: "/photos/product/dragon-mango.jpeg",

    ingredients: [
      "Dragon Fruit",
      "Mango",
      "Peach",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 16,
    category: "Gumijus Blend",

    name: "Wondermelon Slushie",
    description: "Watermelon, Melon, Starfruit",

    price: 25000,

    image: "/photos/product/wondermelon-slushie.jpeg",

    ingredients: [
      "Watermelon",
      "Melon",
      "Starfruit",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 17,
    category: "Milk-Based Blend",

    name: "Dragon Minana",
    description: "Dragoon Fruit, Banana, Fresh Milk",

    price: 27500,

    image: "/photos/product/dragon-minana.jpeg",

    ingredients: [
      "Dragon Fruit",
      "Banana",
      "Fresh Milk",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 18,
    category: "Milk-Based Blend",

    name: "Apple Crumble",
    description: "Banana, Apple, Cinnamon, Fresh Milk",

    price: 27500,

    image: "/photos/product/apple-crumble.jpeg",

    ingredients: [
      "Banana",
      "Apple",
      "Cinnamon",
      "Fresh Milk",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 19,
    category: "Milk-Based Blend",

    name: "Blackberry Smoothie",
    description: "Blackberry, Banana, Fresh Milk",

    price: 27500,

    image: "/photos/product/blackberry-smoothie.jpeg",

    ingredients: [
      "Blackberry",
      "Banana",
      "Fresh Milk",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 20,
    category: "Milk-Based Blend",

    name: "Strawberry Smoothie",
    description: "Strawberry, Banana, Fresh Milk",

    price: 27500,

    image: "/photos/product/strawberry-smoothie.jpeg",

    ingredients: [
      "Strawberry",
      "Banana",
      "Fresh Milk",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 21,
    category: "Milk-Based Blend",

    name: "Raspberry Smoothie",
    description: "Raspberry, Banana, Fresh Milk",

    price: 27500,

    image: "/photos/product/raspberry-smoothie.jpeg",

    ingredients: [
      "Raspberry",
      "Banana",
      "Fresh Milk",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 22,
    category: "Milk-Based Blend",

    name: "Double Berry Smoothie",
    description: "Blackberry, Raspberry, Banana, Fresh Milk",

    price: 28000,

    image: "/photos/product/double-berry-smoothie.jpeg",

    ingredients: [
      "Blackberry",
      "Raspberry",
      "Banana",
      "Fresh Milk",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 23,
    category: "Milk-Based Blend",

    name: "Triple Berry Smoothie",
    description: "Strawberry, Blackberry, Raspberry, Banana, Fresh Milk",

    price: 28000,

    image: "/photos/product/triple-berry-smoothie.jpeg",

    ingredients: [
      "Strawberry",
      "Blackberry",
      "Raspberry",
      "Banana",
      "Fresh Milk",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 24,
    category: "Milk-Based Blend",

    name: "Banana Smoothie",
    description: "Banana, Fresh Milk",

    price: 24000,

    image: "/photos/product/banana-smoothie.jpeg",

    ingredients: [
      "Banana",
      "Fresh Milk",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 25,
    category: "Milk-Based Blend",

    name: "Guava Berry",
    description: "Guava, Strawberry, Fresh Milk",

    price: 24000,

    image: "/photos/product/guava-berry.jpeg",

    ingredients: [
      "Guava",
      "Strawberry",
      "Fresh Milk",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 26,
    category: "Yogurt Blend",

    name: "Strawberry Yogurt",
    description: "Strawberry, Yogurt",

    price: 28500,

    image: "/photos/product/strawberry-yogurt.jpeg",

    ingredients: [
      "Strawberry",
      "Yogurt",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 27,
    category: "Yogurt Blend",

    name: "Horenzo Yogurt",
    description: "Horenzo Spinach, Yogurt, Lychee, Apple",

    price: 29500,

    image: "/photos/product/horenzo-yogurt.jpeg",

    ingredients: [
      "Horenzo Spinach",
      "Yogurt",
      "Lychee",
      "Apple",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 28,
    category: "Yogurt Blend",

    name: "Blackberry Yogurt",
    description: "Blackberry, Yogurt",

    price: 28500,

    image: "/photos/product/blackberry-yogurt.jpeg",

    ingredients: [
      "Blackberry",
      "Yogurt",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 29,
    category: "Yogurt Blend",

    name: "Triple Berry Yogurt",
    description: "Blackberry, Raspberry, Strawberry, Yogurt",

    price: 29500,

    image: "/photos/product/triple-berry-yogurt.jpeg",

    ingredients: [
      "Blackberry",
      "Raspberry",
      "Strawberry",
      "Yogurt",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 30,
    category: "Yogurt Blend",

    name: "Mango Horenzo Yogurt",
    description: "Mango, Horenzo Spinach, Yogurt, Mint",

    price: 28000,

    image: "/photos/product/mango-horenzo-yogurt.jpeg",

    ingredients: [
      "Mango",
      "Horenzo Spinach",
      "Yogurt",
      "Mint",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 31,
    category: "Yogurt Blend",

    name: "Mango Yogurt",
    description: "Mango, Yogurt, Mint",

    price: 27000,

    image: "/photos/product/mango-yogurt.jpeg",

    ingredients: [
      "Mango",
      "Yogurt",
      "Mint",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 32,
    category: "Yakult Blend",

    name: "Lychee Yakult",
    description: "Lychee, Yakult",

    price: 22000,

    image: "/photos/product/lychee-yakult.jpeg",

    ingredients: [
      "Lychee",
      "Yakult",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 33,
    category: "Yakult Blend",

    name: "Peach Yakult",
    description: "Peach, Yakult",

    price: 22000,

    image: "/photos/product/peach-yakult.jpeg",

    ingredients: [
      "Peach",
      "Yakult",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 34,
    category: "Yakult Blend",

    name: "Peach Lychee Yakult",
    description: "Peach, Lychee, Yakult",

    price: 24000,

    image: "/photos/product/peach-lychee-yakult.jpeg",

    ingredients: [
      "Peach",
      "Lychee",
      "Yakult",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 35,
    category: "Yakult Blend",

    name: "Melon Lychee Yakult",
    description: "Red Melon, Lychee, Yakult",

    price: 24000,

    image: "/photos/product/melon-lychee-yakult.jpeg",

    ingredients: [
      "Red Melon",
      "Lychee",
      "Yakult",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 36,
    category: "Yakult Blend",

    name: "Mango Yakult",
    description: "Mango, Yakult",

    price: 27000,

    image: "/photos/product/mango-yakult.jpeg",

    ingredients: [
      "Mango",
      "Yakult",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 37,
    category: "Simple Juice",

    name: "Simple Watermelon",
    description: "Watermelon Juice",

    price: 19000,

    image: "/photos/product/watermelon-juice.jpeg",

    ingredients: [
      "Watermelon",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 38,
    category: "Simple Juice",

    name: "Simple Pineapple",
    description: "Pineapple Juice",

    price: 18500,

    image: "/photos/product/pineapple-juice.jpeg",

    ingredients: [
      "Pineapple",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 39,
    category: "Simple Juice",

    name: "Simple Lychee",
    description: "Lychee Juice",

    price: 19000,

    image: "/photos/product/lychee-juice.jpeg",

    ingredients: [
      "Lychee",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 40,
    category: "Simple Juice",

    name: "Simple Avocado",
    description: "Avocado Juice",

    price: 23500,

    image: "/photos/product/avocado-juice.jpeg",

    ingredients: [
      "Avocado",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 41,
    category: "Simple Juice",

    name: "Simple Guava",
    description: "Guava Juice",

    price: 19500,

    image: "/photos/product/guava-juice.jpeg",

    ingredients: [
      "Guava",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 42,
    category: "Simple Juice",

    name: "Simple Red Melon",
    description: "Red Melon Juice",

    price: 19000,

    image: "/photos/product/red-melon-juice.jpeg",

    ingredients: [
      "Red Melon",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 43,
    category: "Simple Juice",

    name: "Simple Starfruit",
    description: "Starfruit Juice",

    price: 19000,

    image: "/photos/product/starfruit-juice.jpeg",

    ingredients: [
      "Starfruit",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
  {
    id: 44,
    category: "Simple Juice",

    name: "Lemonade",
    description: "Freshly Squeezed Lemonade!",

    price: 19000,

    image: "/photos/product/lemonade.jpg",

    ingredients: [
      "Lemon",
    ],

    availableAt: [
      "Tubagus",
      "Gegerkalong",
    ],
  },
];

export default productData;