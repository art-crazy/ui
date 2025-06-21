import {Recipe, Unit} from "@/data/recipes";

export const recipes: Record<number, Recipe> = {
    359: {
        id: 359,
        name: 'shashlyk-iz-utki-v-souse-teriyaki',
        title: 'Шашлык из утки в соусе терияки',
        description: 'Нежный шашлык из утки, замаринованный в соусе терияки с имбирем и чесноком. Азиатский вкус в классическом формате шашлыка.',
        cookTime: '3 часа',
        difficulty: '2/5',
        nutrition: {
            calories: { value: 220, unit: Unit.kcal },
            protein: { value: 28, unit: Unit.g },
            fat: { value: 12, unit: Unit.g },
            carbs: { value: 5, unit: Unit.g },
        },
        cuisine: 'Азиатская',
        servings: 4,
        ingredients: [
            { name: 'Утиная грудка', amount: 800, unit: Unit.g },
            { name: 'Соус терияки', amount: 100, unit: Unit.ml },
            { name: 'Имбирь свежий', amount: 30, unit: Unit.g },
            { name: 'Чеснок', amount: 4, unit: Unit.pcs },
            { name: 'Кунжутное масло', amount: 2, unit: Unit.tbsp },
            { name: 'Соль', amount: 1, unit: Unit.to_taste },
            { name: 'Перец чёрный молотый', amount: 1, unit: Unit.to_taste }
        ],
        steps: [
            { title: 'Шаг 1.', text: 'Утиную грудку нарежьте крупными кусками.' },
            { title: 'Шаг 2.', text: 'Приготовьте маринад: смешайте соус терияки, натёртый имбирь, измельчённый чеснок и кунжутное масло.' },
            { title: 'Шаг 3.', text: 'Замаринуйте мясо на 2 часа в холодильнике.' },
            { title: 'Шаг 4.', text: 'Нанизайте мясо на шампуры.' },
            { title: 'Шаг 5.', text: 'Жарьте на гриле 20-25 минут до готовности.' }
        ],
        imageMain: '',
        categories: ['шашлык', 'утка', 'терияки', 'азиатская кухня', 'гриль', 'праздничные блюда'],
        rating: 4.8,
        reviews: 42,
        dishCategoriesList: { 'main-dishes': { id: 'main-dishes', title: 'Основные блюда' } },
        dishCategoriesSubList: { shashlik: { id: 'shashlik', title: 'Шашлыки' } },
        cuisineCategoriesList: { asian: { id: 'asian', title: 'Азиатская кухня' } },
        dietCategoriesList: { 'low-carb': { id: 'low-carb', title: 'Низкоуглеводная диета' } }
    },
    // ... остальные рецепты с ID от 360 до 435
};
