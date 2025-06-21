import { Recipe } from './recipes';
import { summerRecipes } from './summer-recipes';

export const recipes: Record<number, Recipe> = {
    ...summerRecipes
}; 