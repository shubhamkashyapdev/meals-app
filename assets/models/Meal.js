class Meal {
  consturctor(
    id,
    categoryId,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegitarian,
    isLactosFree
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.affordability = affordability;
    this.complexity = complexity;
    this.duration = duration;
    this.steps = steps;
    this.ingredients = ingredients;
    this.isVegitarian = isVegitarian;
    this.isLactosFree = isLactosFree;
  }
}

export default Meal;
