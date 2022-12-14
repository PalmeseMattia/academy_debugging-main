//TODO (CONSTRUCTORS EXERCISE)
//2. Delete the name and foodGroups properties from the RecipeCategory class.
//1. Add code so make RecipeCategory inherit from BaseRecipeCategory
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//TODO (INTERFACES EXERCISE)
//1. Implement the IRecipeCategory interface
var RecipeCategory = /** @class */ (function (_super) {
    __extends(RecipeCategory, _super);
    //name: string;
    //foodGroups: FoodGroup[];
    /*
      TODO (Constructors exercise)
      2. Create a constructor that accepts a recipeCategory parameter of type IRecipeCategory
      3. Perform the following tasks inside of the constructor:
         a. Pass the "name" and "foodGroups"" values from the recipeCategory constructor
            parameter to the BaseRecipeCategory class (the base class or "super") by calling super().
         b. Assign the recipeCategory parameter's description property to the description property in this class.
         c. Assign the recipeCategory parameter's examples property to the examples property in this class.
    
    */
    //TODO (INTERFACES EXERCISE)
    //1. Change the parameter type to IRecipeCategory
    function RecipeCategory(recipeCategory) {
        var _this = _super.call(this, recipeCategory.name, recipeCategory.foodGroups) || this;
        _this.description = recipeCategory.description;
        _this.examples = recipeCategory.examples;
        return _this;
    }
    return RecipeCategory;
}(BaseRecipeCategory));
