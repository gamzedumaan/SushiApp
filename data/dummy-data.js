import color from '../constant/color';
import Category from '../models/category';
import Meals from '../models/sushi-Meals';

export const CATEGORIES = [
  new Category('a1', color.white, 'Avocado', require('../assets/image/Avocado.png', )),
  new Category('a2', color.white, 'Salmon', require('./../assets/image/Salmon.png')),
  new Category('a2', color.white, 'Sushi',require('./../assets/image/sushi.png')),
  new Category('a2', color.white, 'Susi Salmon',require('./../assets/image/sushiOrder.png')),
  new Category('a1', color.white, 'Avocado', require('./../assets/image/Avocado.png')),
  new Category('a2', color.white, 'Salmon', require('./../assets/image/Salmon.png')),
  new Category('a2', color.white, 'Sushi',require('./../assets/image/sushi.png')),
  new Category('a2', color.white, 'Susi Salmon',require('./../assets/image/sushiOrder.png')),
];

export const MEALS = [
  new Meals('a1', ['Avocado', require('./../assets/image/Avocado.png')]),
  new Meals('a2', ['Salmon', require('./../assets/image/Salmon.png')]),
];
