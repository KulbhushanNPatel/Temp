export interface NutritionStats {
  calories: number;
  protein: number; // grams
  fats: number; // grams
  carbohydrates: number; // grams
  fiber: number; // grams
  cholesterol: number; // mg
  sodium: number; // mg
  potassium: number; // mg
  calcium: number; // mg
  iron: number; // mg
  vitaminC: number; // mg
  vitaminA: number; // IU
}

export interface AyurvedicProperties {
  dosha: {
    vata: 'increase' | 'decrease' | 'neutral';
    pitta: 'increase' | 'decrease' | 'neutral';
    kapha: 'increase' | 'decrease' | 'neutral';
  };
  tastes: Array<'sweet' | 'sour' | 'salty' | 'bitter' | 'pungent' | 'astringent'>;
  qualities: {
    temperature: 'hot' | 'cold' | 'neutral';
    weight: 'heavy' | 'light' | 'neutral';
    moisture: 'oily' | 'dry' | 'neutral';
  };
  agni: 'strengthens' | 'weakens' | 'neutral';
  season: Array<'spring' | 'summer' | 'monsoon' | 'autumn' | 'winter'>;
  timeOfDay: Array<'morning' | 'midday' | 'evening' | 'night'>;
}

export interface FoodItem {
  id: string;
  name: string;
  category: 'grains' | 'legumes' | 'vegetables' | 'fruits' | 'roots' | 'spices' | 'nuts' | 'dairy' | 'eggs' | 'meat' | 'fish' | 'oils' | 'mushrooms' | 'beverages';
  mealType: Array<'breakfast' | 'lunch' | 'dinner' | 'snack'>;
  allergens: Array<'gluten' | 'dairy' | 'nuts' | 'eggs' | 'soy' | 'fish' | 'shellfish'>;
  nutrition: NutritionStats;
  ayurvedic: AyurvedicProperties;
  image: string;
  description: string;
}

export const foodDatabase: FoodItem[] = [
  // GRAINS & CEREALS
  {
    id: 'amaranth-black',
    name: 'Amaranth seed, black',
    category: 'grains',
    mealType: ['breakfast', 'lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 371,
      protein: 13.6,
      fats: 7.0,
      carbohydrates: 65.0,
      fiber: 6.7,
      cholesterol: 0,
      sodium: 4,
      potassium: 508,
      calcium: 159,
      iron: 7.6,
      vitaminC: 4.2,
      vitaminA: 2
    },
    ayurvedic: {
      dosha: { vata: 'neutral', pitta: 'decrease', kapha: 'increase' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'neutral', weight: 'heavy', moisture: 'neutral' },
      agni: 'strengthens',
      season: ['autumn', 'winter'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Ancient superfood grain rich in protein and minerals'
  },
  {
    id: 'amaranth-pale-brown',
    name: 'Amaranth seed, pale brown',
    category: 'grains',
    mealType: ['breakfast', 'lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 365,
      protein: 13.2,
      fats: 6.8,
      carbohydrates: 64.5,
      fiber: 6.5,
      cholesterol: 0,
      sodium: 4,
      potassium: 495,
      calcium: 155,
      iron: 7.4,
      vitaminC: 4.0,
      vitaminA: 2
    },
    ayurvedic: {
      dosha: { vata: 'neutral', pitta: 'decrease', kapha: 'increase' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'neutral', weight: 'heavy', moisture: 'neutral' },
      agni: 'strengthens',
      season: ['autumn', 'winter'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Nutritious grain with complete amino acid profile'
  },
  {
    id: 'bajra',
    name: 'Bajra',
    category: 'grains',
    mealType: ['breakfast', 'lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 378,
      protein: 11.6,
      fats: 5.0,
      carbohydrates: 67.5,
      fiber: 8.5,
      cholesterol: 0,
      sodium: 5,
      potassium: 307,
      calcium: 42,
      iron: 8.0,
      vitaminC: 0,
      vitaminA: 132
    },
    ayurvedic: {
      dosha: { vata: 'increase', pitta: 'neutral', kapha: 'decrease' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'hot', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['winter', 'spring'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Pearl millet, excellent for winter warmth and strength'
  },
  {
    id: 'barley',
    name: 'Barley',
    category: 'grains',
    mealType: ['lunch', 'dinner'],
    allergens: ['gluten'],
    nutrition: {
      calories: 354,
      protein: 12.5,
      fats: 2.3,
      carbohydrates: 73.5,
      fiber: 17.3,
      cholesterol: 0,
      sodium: 12,
      potassium: 452,
      calcium: 33,
      iron: 3.6,
      vitaminC: 0,
      vitaminA: 22
    },
    ayurvedic: {
      dosha: { vata: 'increase', pitta: 'decrease', kapha: 'decrease' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'cold', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['summer', 'monsoon'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Cooling grain, excellent for reducing heat and weight'
  },
  {
    id: 'jowar',
    name: 'Jowar',
    category: 'grains',
    mealType: ['breakfast', 'lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 349,
      protein: 10.4,
      fats: 1.9,
      carbohydrates: 72.6,
      fiber: 9.7,
      cholesterol: 0,
      sodium: 7,
      potassium: 350,
      calcium: 25,
      iron: 4.1,
      vitaminC: 0,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'increase', pitta: 'neutral', kapha: 'decrease' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'neutral', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['monsoon', 'autumn', 'winter'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Sorghum grain, gluten-free and easily digestible'
  },
  {
    id: 'quinoa',
    name: 'Quinoa',
    category: 'grains',
    mealType: ['breakfast', 'lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 368,
      protein: 14.1,
      fats: 6.1,
      carbohydrates: 64.2,
      fiber: 7.0,
      cholesterol: 0,
      sodium: 5,
      potassium: 563,
      calcium: 47,
      iron: 4.6,
      vitaminC: 0,
      vitaminA: 14
    },
    ayurvedic: {
      dosha: { vata: 'neutral', pitta: 'decrease', kapha: 'neutral' },
      tastes: ['sweet', 'bitter'],
      qualities: { temperature: 'neutral', weight: 'light', moisture: 'neutral' },
      agni: 'strengthens',
      season: ['spring', 'summer', 'autumn'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Complete protein grain from the Andes'
  },
  {
    id: 'ragi',
    name: 'Ragi',
    category: 'grains',
    mealType: ['breakfast', 'lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 328,
      protein: 7.3,
      fats: 1.3,
      carbohydrates: 72.0,
      fiber: 3.6,
      cholesterol: 0,
      sodium: 11,
      potassium: 408,
      calcium: 344,
      iron: 3.9,
      vitaminC: 0,
      vitaminA: 42
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'neutral', kapha: 'increase' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'neutral', weight: 'heavy', moisture: 'oily' },
      agni: 'neutral',
      season: ['winter', 'spring'],
      timeOfDay: ['morning', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Finger millet, exceptional calcium source for bones'
  },
  {
    id: 'rice-brown',
    name: 'Rice, raw, brown',
    category: 'grains',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 370,
      protein: 7.9,
      fats: 2.9,
      carbohydrates: 77.2,
      fiber: 3.5,
      cholesterol: 0,
      sodium: 7,
      potassium: 223,
      calcium: 23,
      iron: 1.5,
      vitaminC: 0,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'decrease', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'neutral', weight: 'heavy', moisture: 'oily' },
      agni: 'neutral',
      season: ['monsoon', 'autumn', 'winter'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Whole grain rice with fiber and nutrients'
  },
  {
    id: 'wheat-whole',
    name: 'Wheat, whole',
    category: 'grains',
    mealType: ['breakfast', 'lunch'],
    allergens: ['gluten'],
    nutrition: {
      calories: 347,
      protein: 12.8,
      fats: 2.0,
      carbohydrates: 71.2,
      fiber: 12.2,
      cholesterol: 0,
      sodium: 2,
      potassium: 431,
      calcium: 41,
      iron: 5.3,
      vitaminC: 0,
      vitaminA: 9
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'neutral',
      season: ['winter', 'spring'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Wholesome grain, builds strength and vitality'
  },

  // LEGUMES & PULSES
  {
    id: 'bengal-gram-dal',
    name: 'Bengal gram, dal',
    category: 'legumes',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 372,
      protein: 17.1,
      fats: 5.3,
      carbohydrates: 61.5,
      fiber: 30.2,
      cholesterol: 0,
      sodium: 30,
      potassium: 875,
      calcium: 56,
      iron: 5.3,
      vitaminC: 3,
      vitaminA: 192
    },
    ayurvedic: {
      dosha: { vata: 'increase', pitta: 'neutral', kapha: 'decrease' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'neutral', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['autumn', 'winter', 'spring'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Protein-rich split chickpeas, staple legume'
  },
  {
    id: 'black-gram-dal',
    name: 'Black gram, dal',
    category: 'legumes',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 347,
      protein: 25.2,
      fats: 1.4,
      carbohydrates: 59.6,
      fiber: 18.3,
      cholesterol: 0,
      sodium: 38,
      potassium: 983,
      calcium: 154,
      iron: 7.6,
      vitaminC: 0,
      vitaminA: 33
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'weakens',
      season: ['winter'],
      timeOfDay: ['midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Nourishing lentil, builds strength but heavy to digest'
  },
  {
    id: 'green-gram-dal',
    name: 'Green gram, dal',
    category: 'legumes',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 348,
      protein: 24.5,
      fats: 1.2,
      carbohydrates: 59.9,
      fiber: 16.3,
      cholesterol: 0,
      sodium: 15,
      potassium: 1246,
      calcium: 124,
      iron: 6.7,
      vitaminC: 4.8,
      vitaminA: 114
    },
    ayurvedic: {
      dosha: { vata: 'neutral', pitta: 'decrease', kapha: 'neutral' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'cold', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['summer', 'monsoon', 'autumn'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Cooling mung dal, easiest to digest among legumes'
  },
  {
    id: 'lentil-dal',
    name: 'Lentil dal',
    category: 'legumes',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 353,
      protein: 25.8,
      fats: 1.1,
      carbohydrates: 60.1,
      fiber: 11.5,
      cholesterol: 0,
      sodium: 6,
      potassium: 677,
      calcium: 69,
      iron: 7.6,
      vitaminC: 4.5,
      vitaminA: 74
    },
    ayurvedic: {
      dosha: { vata: 'increase', pitta: 'neutral', kapha: 'decrease' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'neutral', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['autumn', 'winter', 'spring'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Common red lentils, good protein source'
  },
  {
    id: 'red-gram-dal',
    name: 'Red gram, dal',
    category: 'legumes',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 335,
      protein: 22.3,
      fats: 1.7,
      carbohydrates: 57.6,
      fiber: 15.5,
      cholesterol: 0,
      sodium: 17,
      potassium: 1392,
      calcium: 73,
      iron: 2.7,
      vitaminC: 0,
      vitaminA: 28
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'neutral', kapha: 'increase' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'neutral', weight: 'heavy', moisture: 'oily' },
      agni: 'neutral',
      season: ['monsoon', 'autumn', 'winter'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Toor dal, staple protein in South Indian cuisine'
  },
  {
    id: 'soya-bean-brown',
    name: 'Soya bean, brown',
    category: 'legumes',
    mealType: ['lunch', 'dinner'],
    allergens: ['soy'],
    nutrition: {
      calories: 432,
      protein: 43.2,
      fats: 19.5,
      carbohydrates: 20.9,
      fiber: 9.3,
      cholesterol: 0,
      sodium: 15,
      potassium: 1797,
      calcium: 240,
      iron: 15.7,
      vitaminC: 29.0,
      vitaminA: 180
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'weakens',
      season: ['winter'],
      timeOfDay: ['midday']
    },
    image: '/api/placeholder/200/150',
    description: 'High protein legume, requires proper preparation'
  },

  // LEAFY VEGETABLES
  {
    id: 'spinach',
    name: 'Spinach',
    category: 'vegetables',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 23,
      protein: 2.9,
      fats: 0.4,
      carbohydrates: 3.6,
      fiber: 2.2,
      cholesterol: 0,
      sodium: 79,
      potassium: 558,
      calcium: 99,
      iron: 2.7,
      vitaminC: 28.1,
      vitaminA: 9377
    },
    ayurvedic: {
      dosha: { vata: 'increase', pitta: 'decrease', kapha: 'neutral' },
      tastes: ['bitter', 'astringent'],
      qualities: { temperature: 'cold', weight: 'light', moisture: 'dry' },
      agni: 'neutral',
      season: ['winter', 'spring'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Iron-rich leafy green vegetable'
  },
  {
    id: 'amaranth-leaves-green',
    name: 'Amaranth leaves, green',
    category: 'vegetables',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 23,
      protein: 4.6,
      fats: 0.5,
      carbohydrates: 2.5,
      fiber: 3.0,
      cholesterol: 0,
      sodium: 24,
      potassium: 611,
      calcium: 215,
      iron: 2.3,
      vitaminC: 43.3,
      vitaminA: 5716
    },
    ayurvedic: {
      dosha: { vata: 'increase', pitta: 'decrease', kapha: 'neutral' },
      tastes: ['bitter', 'astringent'],
      qualities: { temperature: 'cold', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['summer', 'monsoon'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Nutritious leafy green with high calcium content'
  },
  {
    id: 'fenugreek-leaves',
    name: 'Fenugreek leaves',
    category: 'vegetables',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 49,
      protein: 4.4,
      fats: 0.9,
      carbohydrates: 6.0,
      fiber: 5.8,
      cholesterol: 0,
      sodium: 76,
      potassium: 770,
      calcium: 395,
      iron: 1.9,
      vitaminC: 52.0,
      vitaminA: 2463
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'decrease' },
      tastes: ['bitter', 'pungent'],
      qualities: { temperature: 'hot', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['winter', 'spring'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Medicinal leafy green, balances blood sugar'
  },
  {
    id: 'drumstick-leaves',
    name: 'Drumstick leaves',
    category: 'vegetables',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 92,
      protein: 6.7,
      fats: 1.7,
      carbohydrates: 12.5,
      fiber: 0.9,
      cholesterol: 0,
      sodium: 70,
      potassium: 461,
      calcium: 440,
      iron: 0.8,
      vitaminC: 220,
      vitaminA: 6780
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'decrease' },
      tastes: ['bitter', 'pungent'],
      qualities: { temperature: 'hot', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['winter', 'spring'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Moringa leaves, superfood with exceptional nutrition'
  },

  // VEGETABLES - GOURDS & OTHERS
  {
    id: 'bitter-gourd',
    name: 'Bitter gourd, jagged, teeth ridges, elongate',
    category: 'vegetables',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 17,
      protein: 1.0,
      fats: 0.2,
      carbohydrates: 3.7,
      fiber: 2.8,
      cholesterol: 0,
      sodium: 5,
      potassium: 296,
      calcium: 19,
      iron: 0.4,
      vitaminC: 84.0,
      vitaminA: 471
    },
    ayurvedic: {
      dosha: { vata: 'increase', pitta: 'decrease', kapha: 'decrease' },
      tastes: ['bitter'],
      qualities: { temperature: 'cold', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['summer', 'monsoon'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Powerful bitter vegetable, excellent for blood purification'
  },
  {
    id: 'bottle-gourd',
    name: 'Bottle gourd, elongate, pale green',
    category: 'vegetables',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 14,
      protein: 0.6,
      fats: 0.1,
      carbohydrates: 3.4,
      fiber: 0.5,
      cholesterol: 0,
      sodium: 2,
      potassium: 87,
      calcium: 26,
      iron: 0.2,
      vitaminC: 6.1,
      vitaminA: 16
    },
    ayurvedic: {
      dosha: { vata: 'neutral', pitta: 'decrease', kapha: 'neutral' },
      tastes: ['sweet', 'bitter'],
      qualities: { temperature: 'cold', weight: 'light', moisture: 'neutral' },
      agni: 'neutral',
      season: ['summer', 'monsoon'],
      timeOfDay: ['evening', 'night']
    },
    image: '/api/placeholder/200/150',
    description: 'Cooling vegetable, easy to digest and hydrating'
  },
  {
    id: 'pumpkin-orange',
    name: 'Pumpkin, orange, round',
    category: 'vegetables',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 26,
      protein: 1.0,
      fats: 0.1,
      carbohydrates: 6.5,
      fiber: 0.5,
      cholesterol: 0,
      sodium: 1,
      potassium: 340,
      calcium: 21,
      iron: 0.8,
      vitaminC: 9.0,
      vitaminA: 7384
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'decrease', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'neutral', weight: 'heavy', moisture: 'oily' },
      agni: 'neutral',
      season: ['autumn', 'winter'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Nourishing orange vegetable, rich in beta-carotene'
  },
  {
    id: 'ladies-finger',
    name: 'Ladies finger',
    category: 'vegetables',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 35,
      protein: 1.9,
      fats: 0.2,
      carbohydrates: 6.4,
      fiber: 4.3,
      cholesterol: 0,
      sodium: 6,
      potassium: 299,
      calcium: 66,
      iron: 0.4,
      vitaminC: 13.0,
      vitaminA: 375
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'neutral', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'neutral', weight: 'heavy', moisture: 'oily' },
      agni: 'neutral',
      season: ['monsoon', 'autumn'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Okra, slimy texture helps lubricate joints'
  },
  {
    id: 'tomato-ripe',
    name: 'Tomato, ripe, hybrid',
    category: 'vegetables',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 18,
      protein: 0.9,
      fats: 0.2,
      carbohydrates: 3.9,
      fiber: 1.2,
      cholesterol: 0,
      sodium: 5,
      potassium: 237,
      calcium: 10,
      iron: 0.3,
      vitaminC: 23.0,
      vitaminA: 833
    },
    ayurvedic: {
      dosha: { vata: 'increase', pitta: 'increase', kapha: 'decrease' },
      tastes: ['sour', 'sweet'],
      qualities: { temperature: 'hot', weight: 'light', moisture: 'oily' },
      agni: 'strengthens',
      season: ['winter', 'spring'],
      timeOfDay: ['midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Tangy fruit-vegetable, rich in lycopene'
  },

  // FRUITS
  {
    id: 'mango-ripe-totapari',
    name: 'Mango, ripe, totapari',
    category: 'fruits',
    mealType: ['breakfast', 'snack'],
    allergens: [],
    nutrition: {
      calories: 60,
      protein: 0.8,
      fats: 0.4,
      carbohydrates: 15.0,
      fiber: 1.6,
      cholesterol: 0,
      sodium: 1,
      potassium: 168,
      calcium: 11,
      iron: 0.3,
      vitaminC: 36.4,
      vitaminA: 1082
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'increase' },
      tastes: ['sweet', 'sour'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'neutral',
      season: ['summer'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'King of fruits, rich in vitamins and antioxidants'
  },
  {
    id: 'banana-ripe-robusta',
    name: 'Banana, ripe, robusta',
    category: 'fruits',
    mealType: ['breakfast', 'snack'],
    allergens: [],
    nutrition: {
      calories: 89,
      protein: 1.1,
      fats: 0.3,
      carbohydrates: 22.8,
      fiber: 2.6,
      cholesterol: 0,
      sodium: 1,
      potassium: 358,
      calcium: 5,
      iron: 0.3,
      vitaminC: 8.7,
      vitaminA: 64
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'decrease', kapha: 'increase' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'cold', weight: 'heavy', moisture: 'oily' },
      agni: 'weakens',
      season: ['summer', 'monsoon'],
      timeOfDay: ['morning', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Energy-rich fruit, excellent for building strength'
  },
  {
    id: 'apple-big',
    name: 'Apple, big',
    category: 'fruits',
    mealType: ['breakfast', 'snack'],
    allergens: [],
    nutrition: {
      calories: 52,
      protein: 0.3,
      fats: 0.2,
      carbohydrates: 13.8,
      fiber: 2.4,
      cholesterol: 0,
      sodium: 1,
      potassium: 107,
      calcium: 6,
      iron: 0.1,
      vitaminC: 4.6,
      vitaminA: 54
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'decrease', kapha: 'neutral' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'cold', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['autumn', 'winter'],
      timeOfDay: ['morning', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Cooling fruit, aids digestion and heart health'
  },
  {
    id: 'pomegranate',
    name: 'Pomegranate, maroon seeds',
    category: 'fruits',
    mealType: ['breakfast', 'snack'],
    allergens: [],
    nutrition: {
      calories: 83,
      protein: 1.7,
      fats: 1.2,
      carbohydrates: 18.7,
      fiber: 4.0,
      cholesterol: 0,
      sodium: 3,
      potassium: 236,
      calcium: 10,
      iron: 0.3,
      vitaminC: 10.2,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'neutral', pitta: 'decrease', kapha: 'neutral' },
      tastes: ['sweet', 'sour', 'astringent'],
      qualities: { temperature: 'cold', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['autumn', 'winter'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Antioxidant-rich fruit, excellent for blood and heart'
  },
  {
    id: 'grapes-black-round',
    name: 'Grapes, seeded, round, black',
    category: 'fruits',
    mealType: ['breakfast', 'snack'],
    allergens: [],
    nutrition: {
      calories: 62,
      protein: 0.6,
      fats: 0.2,
      carbohydrates: 16.3,
      fiber: 0.9,
      cholesterol: 0,
      sodium: 2,
      potassium: 191,
      calcium: 10,
      iron: 0.4,
      vitaminC: 3.2,
      vitaminA: 66
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'decrease', kapha: 'increase' },
      tastes: ['sweet', 'sour'],
      qualities: { temperature: 'cold', weight: 'heavy', moisture: 'oily' },
      agni: 'weakens',
      season: ['summer', 'monsoon'],
      timeOfDay: ['morning', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Cooling fruit, rich in antioxidants and natural sugars'
  },

  // ROOT VEGETABLES
  {
    id: 'potato-brown-big',
    name: 'Potato, brown skin, big',
    category: 'roots',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 77,
      protein: 2.0,
      fats: 0.1,
      carbohydrates: 17.5,
      fiber: 2.2,
      cholesterol: 0,
      sodium: 6,
      potassium: 421,
      calcium: 12,
      iron: 0.8,
      vitaminC: 19.7,
      vitaminA: 2
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'neutral', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'neutral', weight: 'heavy', moisture: 'dry' },
      agni: 'weakens',
      season: ['winter', 'spring'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Starchy tuber, provides sustained energy'
  },
  {
    id: 'sweet-potato-brown',
    name: 'Sweet potato, brown skin',
    category: 'roots',
    mealType: ['breakfast', 'lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 86,
      protein: 1.6,
      fats: 0.1,
      carbohydrates: 20.1,
      fiber: 3.0,
      cholesterol: 0,
      sodium: 6,
      potassium: 337,
      calcium: 30,
      iron: 0.6,
      vitaminC: 2.4,
      vitaminA: 14187
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'neutral', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'neutral', weight: 'heavy', moisture: 'oily' },
      agni: 'neutral',
      season: ['autumn', 'winter'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Nutritious root vegetable, rich in beta-carotene'
  },
  {
    id: 'carrot-orange',
    name: 'Carrot, orange',
    category: 'roots',
    mealType: ['lunch', 'dinner', 'snack'],
    allergens: [],
    nutrition: {
      calories: 41,
      protein: 0.9,
      fats: 0.2,
      carbohydrates: 9.6,
      fiber: 2.8,
      cholesterol: 0,
      sodium: 69,
      potassium: 320,
      calcium: 33,
      iron: 0.3,
      vitaminC: 5.9,
      vitaminA: 16706
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'neutral', kapha: 'neutral' },
      tastes: ['sweet'],
      qualities: { temperature: 'neutral', weight: 'light', moisture: 'oily' },
      agni: 'strengthens',
      season: ['winter', 'spring'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Eye-healthy root vegetable, excellent for vision'
  },
  {
    id: 'beetroot',
    name: 'Beet root',
    category: 'roots',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 43,
      protein: 1.6,
      fats: 0.2,
      carbohydrates: 9.6,
      fiber: 2.8,
      cholesterol: 0,
      sodium: 78,
      potassium: 325,
      calcium: 16,
      iron: 0.8,
      vitaminC: 4.9,
      vitaminA: 33
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'neutral' },
      tastes: ['sweet', 'bitter'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'strengthens',
      season: ['winter', 'spring'],
      timeOfDay: ['midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Blood-building root vegetable, rich in nitrates'
  },

  // SPICES & HERBS
  {
    id: 'turmeric-powder',
    name: 'Turmeric powder',
    category: 'spices',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 354,
      protein: 7.8,
      fats: 9.9,
      carbohydrates: 64.9,
      fiber: 21.1,
      cholesterol: 0,
      sodium: 38,
      potassium: 2525,
      calcium: 183,
      iron: 41.4,
      vitaminC: 25.9,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'neutral', pitta: 'decrease', kapha: 'decrease' },
      tastes: ['bitter', 'pungent', 'astringent'],
      qualities: { temperature: 'hot', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['monsoon', 'autumn', 'winter'],
      timeOfDay: ['morning', 'midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Golden spice with powerful anti-inflammatory properties'
  },
  {
    id: 'ginger-fresh',
    name: 'Ginger, fresh',
    category: 'spices',
    mealType: ['breakfast', 'lunch', 'dinner', 'snack'],
    allergens: [],
    nutrition: {
      calories: 80,
      protein: 1.8,
      fats: 0.8,
      carbohydrates: 17.8,
      fiber: 2.0,
      cholesterol: 0,
      sodium: 13,
      potassium: 415,
      calcium: 16,
      iron: 0.6,
      vitaminC: 5.0,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'decrease' },
      tastes: ['pungent', 'sweet'],
      qualities: { temperature: 'hot', weight: 'light', moisture: 'oily' },
      agni: 'strengthens',
      season: ['monsoon', 'autumn', 'winter'],
      timeOfDay: ['morning', 'midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Universal medicine, digestive fire enhancer'
  },
  {
    id: 'garlic-big-clove',
    name: 'Garlic, big clove',
    category: 'spices',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 149,
      protein: 6.4,
      fats: 0.5,
      carbohydrates: 33.1,
      fiber: 2.1,
      cholesterol: 0,
      sodium: 17,
      potassium: 401,
      calcium: 181,
      iron: 1.7,
      vitaminC: 31.2,
      vitaminA: 9
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'decrease' },
      tastes: ['pungent'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'strengthens',
      season: ['monsoon', 'autumn', 'winter'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Powerful antibacterial and antiviral herb'
  },
  {
    id: 'coriander-seeds',
    name: 'Coriander seeds',
    category: 'spices',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 298,
      protein: 12.4,
      fats: 17.8,
      carbohydrates: 54.9,
      fiber: 41.9,
      cholesterol: 0,
      sodium: 35,
      potassium: 1267,
      calcium: 709,
      iron: 16.3,
      vitaminC: 21.0,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'neutral', pitta: 'decrease', kapha: 'neutral' },
      tastes: ['sweet', 'bitter', 'pungent'],
      qualities: { temperature: 'cold', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['summer', 'monsoon'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Cooling spice, aids digestion and reduces heat'
  },
  {
    id: 'cumin-seeds',
    name: 'Cumin seeds',
    category: 'spices',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 375,
      protein: 17.8,
      fats: 22.3,
      carbohydrates: 44.2,
      fiber: 10.5,
      cholesterol: 0,
      sodium: 168,
      potassium: 1788,
      calcium: 931,
      iron: 66.4,
      vitaminC: 7.7,
      vitaminA: 1270
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'decrease' },
      tastes: ['pungent', 'bitter'],
      qualities: { temperature: 'hot', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['monsoon', 'autumn', 'winter'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Warming spice, excellent for digestion and metabolism'
  },
  {
    id: 'pepper-black',
    name: 'Pepper, black',
    category: 'spices',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 251,
      protein: 10.4,
      fats: 3.3,
      carbohydrates: 63.9,
      fiber: 25.3,
      cholesterol: 0,
      sodium: 20,
      potassium: 1329,
      calcium: 443,
      iron: 9.7,
      vitaminC: 0,
      vitaminA: 547
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'decrease' },
      tastes: ['pungent'],
      qualities: { temperature: 'hot', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['monsoon', 'autumn', 'winter'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'King of spices, enhances bioavailability of nutrients'
  },

  // NUTS & SEEDS
  {
    id: 'almonds',
    name: 'Almond',
    category: 'nuts',
    mealType: ['breakfast', 'snack'],
    allergens: ['nuts'],
    nutrition: {
      calories: 579,
      protein: 21.2,
      fats: 50.6,
      carbohydrates: 21.7,
      fiber: 12.2,
      cholesterol: 0,
      sodium: 1,
      potassium: 705,
      calcium: 264,
      iron: 3.7,
      vitaminC: 0,
      vitaminA: 2
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'increase' },
      tastes: ['sweet', 'bitter'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'neutral',
      season: ['winter', 'spring'],
      timeOfDay: ['morning']
    },
    image: '/api/placeholder/200/150',
    description: 'Brain food, rich in healthy fats and vitamin E'
  },
  {
    id: 'cashew-nut',
    name: 'Cashew nut',
    category: 'nuts',
    mealType: ['breakfast', 'snack'],
    allergens: ['nuts'],
    nutrition: {
      calories: 553,
      protein: 18.2,
      fats: 43.9,
      carbohydrates: 30.2,
      fiber: 3.3,
      cholesterol: 0,
      sodium: 12,
      potassium: 660,
      calcium: 37,
      iron: 6.7,
      vitaminC: 0.5,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'weakens',
      season: ['winter'],
      timeOfDay: ['morning']
    },
    image: '/api/placeholder/200/150',
    description: 'Creamy nut, builds strength and vitality'
  },
  {
    id: 'walnut',
    name: 'Walnut',
    category: 'nuts',
    mealType: ['breakfast', 'snack'],
    allergens: ['nuts'],
    nutrition: {
      calories: 654,
      protein: 15.2,
      fats: 65.2,
      carbohydrates: 13.7,
      fiber: 6.7,
      cholesterol: 0,
      sodium: 2,
      potassium: 441,
      calcium: 98,
      iron: 2.9,
      vitaminC: 1.3,
      vitaminA: 20
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'increase' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'weakens',
      season: ['winter'],
      timeOfDay: ['morning']
    },
    image: '/api/placeholder/200/150',
    description: 'Brain-shaped nut, excellent for cognitive function'
  },
  {
    id: 'coconut-fresh',
    name: 'Coconut, kernel, fresh',
    category: 'nuts',
    mealType: ['breakfast', 'snack'],
    allergens: [],
    nutrition: {
      calories: 354,
      protein: 3.3,
      fats: 33.5,
      carbohydrates: 15.2,
      fiber: 9.0,
      cholesterol: 0,
      sodium: 20,
      potassium: 356,
      calcium: 14,
      iron: 2.4,
      vitaminC: 3.3,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'decrease', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'cold', weight: 'heavy', moisture: 'oily' },
      agni: 'weakens',
      season: ['summer', 'monsoon'],
      timeOfDay: ['morning', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Cooling fruit-nut, sacred in Ayurveda'
  },
  {
    id: 'sunflower-seeds',
    name: 'Sunflower seeds',
    category: 'nuts',
    mealType: ['breakfast', 'snack'],
    allergens: [],
    nutrition: {
      calories: 584,
      protein: 20.8,
      fats: 51.5,
      carbohydrates: 20.0,
      fiber: 8.6,
      cholesterol: 0,
      sodium: 9,
      potassium: 645,
      calcium: 78,
      iron: 5.2,
      vitaminC: 1.4,
      vitaminA: 50
    },
    ayurvedic: {
      dosha: { vata: 'neutral', pitta: 'increase', kapha: 'increase' },
      tastes: ['sweet', 'bitter'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'neutral',
      season: ['winter', 'spring'],
      timeOfDay: ['morning']
    },
    image: '/api/placeholder/200/150',
    description: 'Vitamin E rich seeds, good for skin health'
  },

  // DAIRY PRODUCTS
  {
    id: 'milk-cow',
    name: 'Milk, whole, Cow',
    category: 'dairy',
    mealType: ['breakfast', 'snack'],
    allergens: ['dairy'],
    nutrition: {
      calories: 42,
      protein: 3.2,
      fats: 4.1,
      carbohydrates: 4.4,
      fiber: 0,
      cholesterol: 17,
      sodium: 44,
      potassium: 149,
      calcium: 120,
      iron: 0.2,
      vitaminC: 2,
      vitaminA: 126
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'decrease', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'cold', weight: 'heavy', moisture: 'oily' },
      agni: 'weakens',
      season: ['autumn', 'winter'],
      timeOfDay: ['morning', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Complete protein source, builds ojas (vitality)'
  },
  {
    id: 'milk-buffalo',
    name: 'Milk, whole, Buffalo',
    category: 'dairy',
    mealType: ['breakfast', 'snack'],
    allergens: ['dairy'],
    nutrition: {
      calories: 117,
      protein: 4.3,
      fats: 6.9,
      carbohydrates: 5.2,
      fiber: 0,
      cholesterol: 19,
      sodium: 52,
      potassium: 178,
      calcium: 210,
      iron: 0.2,
      vitaminC: 2.3,
      vitaminA: 178
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'decrease', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'cold', weight: 'heavy', moisture: 'oily' },
      agni: 'weakens',
      season: ['autumn', 'winter'],
      timeOfDay: ['morning', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Rich milk, higher in fat and protein than cow milk'
  },
  {
    id: 'paneer',
    name: 'Paneer',
    category: 'dairy',
    mealType: ['lunch', 'dinner'],
    allergens: ['dairy'],
    nutrition: {
      calories: 265,
      protein: 18.3,
      fats: 20.8,
      carbohydrates: 1.2,
      fiber: 0,
      cholesterol: 56,
      sodium: 18,
      potassium: 104,
      calcium: 208,
      iron: 0.2,
      vitaminC: 0,
      vitaminA: 195
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'neutral', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'cold', weight: 'heavy', moisture: 'oily' },
      agni: 'weakens',
      season: ['winter'],
      timeOfDay: ['midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Fresh cottage cheese, excellent protein source'
  },
  {
    id: 'ghee',
    name: 'Ghee',
    category: 'oils',
    mealType: ['breakfast', 'lunch', 'dinner'],
    allergens: ['dairy'],
    nutrition: {
      calories: 900,
      protein: 0.3,
      fats: 99.5,
      carbohydrates: 0.1,
      fiber: 0,
      cholesterol: 256,
      sodium: 0,
      potassium: 5,
      calcium: 4,
      iron: 0.02,
      vitaminC: 0,
      vitaminA: 3069
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'decrease', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'neutral', weight: 'heavy', moisture: 'oily' },
      agni: 'strengthens',
      season: ['monsoon', 'autumn', 'winter'],
      timeOfDay: ['morning', 'midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Sacred clarified butter, enhances digestion and ojas'
  },

  // EGGS
  {
    id: 'egg-chicken-whole-raw',
    name: 'Egg, poultry, whole, raw',
    category: 'eggs',
    mealType: ['breakfast', 'lunch'],
    allergens: ['eggs'],
    nutrition: {
      calories: 155,
      protein: 13.3,
      fats: 10.8,
      carbohydrates: 0.7,
      fiber: 0,
      cholesterol: 424,
      sodium: 124,
      potassium: 138,
      calcium: 60,
      iron: 2.1,
      vitaminC: 0,
      vitaminA: 520
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'neutral',
      season: ['winter', 'spring'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Complete protein source, builds strength and vitality'
  },
  {
    id: 'egg-chicken-boiled',
    name: 'Egg, poultry, whole, boiled',
    category: 'eggs',
    mealType: ['breakfast', 'lunch'],
    allergens: ['eggs'],
    nutrition: {
      calories: 155,
      protein: 12.6,
      fats: 10.6,
      carbohydrates: 0.6,
      fiber: 0,
      cholesterol: 373,
      sodium: 124,
      potassium: 126,
      calcium: 50,
      iron: 1.9,
      vitaminC: 0,
      vitaminA: 487
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'strengthens',
      season: ['winter', 'spring'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Easily digestible protein, better than raw'
  },

  // FISH & SEAFOOD
  {
    id: 'salmon',
    name: 'Salmon',
    category: 'fish',
    mealType: ['lunch', 'dinner'],
    allergens: ['fish'],
    nutrition: {
      calories: 208,
      protein: 25.4,
      fats: 12.4,
      carbohydrates: 0,
      fiber: 0,
      cholesterol: 59,
      sodium: 59,
      potassium: 628,
      calcium: 12,
      iron: 0.8,
      vitaminC: 0,
      vitaminA: 149
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'increase' },
      tastes: ['sweet', 'salty'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'strengthens',
      season: ['winter', 'spring'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Omega-3 rich fish, excellent protein source'
  },
  {
    id: 'mackerel',
    name: 'Mackerel',
    category: 'fish',
    mealType: ['lunch', 'dinner'],
    allergens: ['fish'],
    nutrition: {
      calories: 262,
      protein: 18.6,
      fats: 17.8,
      carbohydrates: 0,
      fiber: 0,
      cholesterol: 95,
      sodium: 83,
      potassium: 314,
      calcium: 12,
      iron: 1.6,
      vitaminC: 0.4,
      vitaminA: 167
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'increase' },
      tastes: ['sweet', 'salty'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'strengthens',
      season: ['winter'],
      timeOfDay: ['midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Oily fish rich in omega-3 fatty acids'
  },
  {
    id: 'prawns-tiger',
    name: 'Tiger prawns, brown',
    category: 'fish',
    mealType: ['lunch', 'dinner'],
    allergens: ['shellfish'],
    nutrition: {
      calories: 99,
      protein: 18.1,
      fats: 1.7,
      carbohydrates: 0.9,
      fiber: 0,
      cholesterol: 195,
      sodium: 111,
      potassium: 259,
      calcium: 70,
      iron: 3.1,
      vitaminC: 0,
      vitaminA: 180
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'increase' },
      tastes: ['sweet', 'salty'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'strengthens',
      season: ['winter'],
      timeOfDay: ['midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Low-fat seafood, high in protein and minerals'
  },

  // OILS & FATS
  {
    id: 'coconut-oil',
    name: 'Coconut oil',
    category: 'oils',
    mealType: ['breakfast', 'lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 862,
      protein: 0,
      fats: 100,
      carbohydrates: 0,
      fiber: 0,
      cholesterol: 0,
      sodium: 0,
      potassium: 0,
      calcium: 0,
      iron: 0.05,
      vitaminC: 0,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'decrease', kapha: 'increase' },
      tastes: ['sweet'],
      qualities: { temperature: 'cold', weight: 'heavy', moisture: 'oily' },
      agni: 'neutral',
      season: ['summer', 'monsoon'],
      timeOfDay: ['morning', 'midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Sattvic oil with cooling properties'
  },
  {
    id: 'mustard-oil',
    name: 'Mustard oil',
    category: 'oils',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 884,
      protein: 0,
      fats: 100,
      carbohydrates: 0,
      fiber: 0,
      cholesterol: 0,
      sodium: 0,
      potassium: 0,
      calcium: 0,
      iron: 0,
      vitaminC: 0,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'increase', kapha: 'decrease' },
      tastes: ['pungent'],
      qualities: { temperature: 'hot', weight: 'light', moisture: 'oily' },
      agni: 'strengthens',
      season: ['winter', 'spring'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Warming oil, excellent for massage and cooking'
  },
  {
    id: 'sesame-oil',
    name: 'Gingelly oil',
    category: 'oils',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 884,
      protein: 0,
      fats: 100,
      carbohydrates: 0,
      fiber: 0,
      cholesterol: 0,
      sodium: 0,
      potassium: 0,
      calcium: 0,
      iron: 0,
      vitaminC: 0,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'decrease', pitta: 'neutral', kapha: 'increase' },
      tastes: ['sweet', 'bitter'],
      qualities: { temperature: 'hot', weight: 'heavy', moisture: 'oily' },
      agni: 'neutral',
      season: ['winter', 'spring'],
      timeOfDay: ['morning', 'midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Traditional oil, excellent for Vata balance'
  },

  // MUSHROOMS
  {
    id: 'button-mushroom',
    name: 'Button mushroom, fresh',
    category: 'mushrooms',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 22,
      protein: 3.1,
      fats: 0.3,
      carbohydrates: 3.3,
      fiber: 1.0,
      cholesterol: 0,
      sodium: 5,
      potassium: 318,
      calcium: 3,
      iron: 0.5,
      vitaminC: 2.1,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'increase', pitta: 'neutral', kapha: 'decrease' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'cold', weight: 'light', moisture: 'dry' },
      agni: 'neutral',
      season: ['monsoon', 'autumn'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Low-calorie protein source with umami flavor'
  },
  {
    id: 'shiitake-mushroom',
    name: 'Shiitake mushroom, fresh',
    category: 'mushrooms',
    mealType: ['lunch', 'dinner'],
    allergens: [],
    nutrition: {
      calories: 34,
      protein: 2.2,
      fats: 0.5,
      carbohydrates: 6.8,
      fiber: 2.5,
      cholesterol: 0,
      sodium: 9,
      potassium: 304,
      calcium: 2,
      iron: 0.4,
      vitaminC: 0.2,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'increase', pitta: 'neutral', kapha: 'decrease' },
      tastes: ['sweet', 'astringent'],
      qualities: { temperature: 'neutral', weight: 'light', moisture: 'dry' },
      agni: 'strengthens',
      season: ['monsoon', 'autumn'],
      timeOfDay: ['midday', 'evening']
    },
    image: '/api/placeholder/200/150',
    description: 'Medicinal mushroom with immune-boosting properties'
  },

  // BEVERAGES
  {
    id: 'coconut-water',
    name: 'Coconut Water',
    category: 'beverages',
    mealType: ['breakfast', 'snack'],
    allergens: [],
    nutrition: {
      calories: 19,
      protein: 0.7,
      fats: 0.2,
      carbohydrates: 3.7,
      fiber: 1.1,
      cholesterol: 0,
      sodium: 105,
      potassium: 250,
      calcium: 24,
      iron: 0.3,
      vitaminC: 2.4,
      vitaminA: 0
    },
    ayurvedic: {
      dosha: { vata: 'neutral', pitta: 'decrease', kapha: 'neutral' },
      tastes: ['sweet'],
      qualities: { temperature: 'cold', weight: 'light', moisture: 'neutral' },
      agni: 'neutral',
      season: ['summer', 'monsoon'],
      timeOfDay: ['morning', 'midday']
    },
    image: '/api/placeholder/200/150',
    description: 'Natural electrolyte drink, cooling and hydrating'
  }
];

// Helper functions for filtering and sorting
export const getUniqueCategories = () => {
  return Array.from(new Set(foodDatabase.map(food => food.category)));
};

export const getUniqueTastes = () => {
  const tastes = new Set<string>();
  foodDatabase.forEach(food => {
    food.ayurvedic.tastes.forEach(taste => tastes.add(taste));
  });
  return Array.from(tastes);
};

export const getUniqueAllergens = () => {
  const allergens = new Set<string>();
  foodDatabase.forEach(food => {
    food.allergens.forEach(allergen => allergens.add(allergen));
  });
  return Array.from(allergens);
};

export const searchFoods = (query: string) => {
  if (!query.trim()) return foodDatabase;
  
  const lowercaseQuery = query.toLowerCase();
  return foodDatabase.filter(food =>
    food.name.toLowerCase().includes(lowercaseQuery) ||
    food.description.toLowerCase().includes(lowercaseQuery) ||
    food.category.toLowerCase().includes(lowercaseQuery) ||
    food.ayurvedic.tastes.some(taste => taste.toLowerCase().includes(lowercaseQuery))
  );
};

export const filterFoods = (filters: {
  category?: string;
  mealType?: string;
  allergens?: string[];
  cholesterolFree?: boolean;
  tastes?: string[];
  dosha?: 'vata' | 'pitta' | 'kapha';
  temperature?: 'hot' | 'cold' | 'neutral';
}) => {
  return foodDatabase.filter(food => {
    if (filters.category && food.category !== filters.category) return false;
    if (filters.mealType && !food.mealType.includes(filters.mealType as any)) return false;
    if (filters.cholesterolFree && food.nutrition.cholesterol > 0) return false;
    if (filters.allergens && filters.allergens.length > 0) {
      const hasAllergen = filters.allergens.some(allergen => food.allergens.includes(allergen as any));
      if (hasAllergen) return false;
    }
    if (filters.tastes && filters.tastes.length > 0) {
      const hasTaste = filters.tastes.some(taste => food.ayurvedic.tastes.includes(taste as any));
      if (!hasTaste) return false;
    }
    if (filters.dosha) {
      if (food.ayurvedic.dosha[filters.dosha] === 'increase') return false;
    }
    if (filters.temperature && food.ayurvedic.qualities.temperature !== filters.temperature) return false;
    
    return true;
  });
};

export const sortFoods = (foods: FoodItem[], sortBy: string) => {
  const sorted = [...foods];
  
  switch (sortBy) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'calories':
      return sorted.sort((a, b) => a.nutrition.calories - b.nutrition.calories);
    case 'protein':
      return sorted.sort((a, b) => b.nutrition.protein - a.nutrition.protein);
    case 'category':
      return sorted.sort((a, b) => a.category.localeCompare(b.category));
    case 'cholesterol':
      return sorted.sort((a, b) => a.nutrition.cholesterol - b.nutrition.cholesterol);
    default:
      return sorted;
  }
};