import {
    ApiApi,
    Keyword as IKeyword,
    Food as IFood,
    RecipeOverview as IRecipeOverview,
    Recipe as IRecipe,
    Unit as IUnit,
    MealType as IMealType,
    User as IUser,
    FoodInheritField as IFoodInheritField,
    SupermarketCategory as ISupermarketCategory,
    PropertyType as IPropertyType, ApiFoodListRequest, ApiUnitListRequest,
} from "@/openapi";


/**
 * returns a GenericModel instance with the given model type
 * throws and error if no model with the given name exist
 * @param modelName name of the model
 * @return instance of GenericModel
 */
export function getModelFromStr(modelName: String) {
    if (SUPPORTED_MODELS.has(modelName)) {
        return new GenericModel(SUPPORTED_MODELS.get(modelName))
    } else {
        throw Error(`Model ${modelName} not in SUPPORTED_MODELS`)
    }
}

/**
 * common list parameters shared by all generic models
 */
type GenericListRequestParameter = {
    page: number,
    pageSize: number,
    query: string,
}

/**
 * custom type containing all attributes needed by the generic model system to properly handle all functions
 */
type Model = {
    name: string,
    localizationKey: string,
    icon: string,

    disableList: boolean | undefined,
    disableRetrieve: boolean | undefined,
    disableCreate: boolean | undefined,
    disableDelete: boolean | undefined,

    // table headers
    // canCreate
    // canDelete
}
export let SUPPORTED_MODELS = new Map<string, Model>()

export const TFood = {
    name: 'Food',
    localizationKey: 'Food',
    icon: 'fa-solid fa-carrot'
} as Model
SUPPORTED_MODELS.set(TFood.name, TFood)

export const TUnit = {
    name: 'Unit',
    localizationKey: 'Unit',
    icon: 'fa-solid fa-scale-balanced',
} as Model
SUPPORTED_MODELS.set(TUnit.name, TUnit)

export const TKeyword = {
    name: 'Keyword',
    localizationKey: 'Keyword',
    icon: 'fa-solid fa-tags',
} as Model
SUPPORTED_MODELS.set(TKeyword.name, TKeyword)

export const TRecipe = {
    name: 'Recipe',
    localizationKey: 'Recipe',
    icon: 'fa-solid fa-book',
} as Model
SUPPORTED_MODELS.set(TRecipe.name, TRecipe)

export const TMealType = {
    name: 'MealType',
    localizationKey: 'Meal_Type',
    icon: 'fa-solid fa-utensils',
} as Model
SUPPORTED_MODELS.set(TMealType.name, TMealType)

export const TUser = {
    name: 'User',
    localizationKey: 'User',
    icon: 'fa-solid fa-users',

    disableCreate: true,
    disableDelete: true,
} as Model
SUPPORTED_MODELS.set(TUser.name, TUser)

export const TSupermarketCategory = {
    name: 'SupermarketCategory',
    localizationKey: 'Category',
    icon: 'fa-solid fa-boxes-stacked',
} as Model
SUPPORTED_MODELS.set(TSupermarketCategory.name, TSupermarketCategory)

export const TPropertyType = {
    name: 'PropertyType',
    localizationKey: 'Property',
    icon: 'fa-solid fa-database',
} as Model
SUPPORTED_MODELS.set(TPropertyType.name, TPropertyType)

export const TFoodInheritField = {
    name: 'FoodInheritField',
    localizationKey: 'FoodInherit',
    icon: 'fa-solid fa-list',

    disableCreate: true,
    disableDelete: true,
    disableRetrieve: true,
} as Model
SUPPORTED_MODELS.set(TFoodInheritField.name, TFoodInheritField)


/**
 * Many of Tandoors models and model API endpoints share the same interfaces
 * The GenericModel class allows interaction with these models in a standardized manner
 */
export class GenericModel {

    api: Object
    model: Model

    constructor(model: Model) {
        this.model = model
        this.api = new ApiApi()
    }

    /**
     * query the models list endpoint using the given generic parameters
     * @param genericListRequestParameter parameters
     * @return promise of request
     */
    list(genericListRequestParameter: GenericListRequestParameter) {
        if (this.model.disableList) {
            throw new Error('Cannot list on this model!')
        } else {
            return this.api[`api${this.model.name}List`](genericListRequestParameter)
        }
    };

    /**
     * create a new instance of the given model
     * throws error if creation is not supported for given model
     * @param obj object to create
     * @return promise of request
     */
    create(obj: any) {
        if (this.model.disableCreate) {
            throw new Error('Cannot create on this model!')
        } else {
            let createRequestParams = {}
            createRequestParams[this.model.name.toLowerCase()] = obj
            return this.api[`api${this.model.name}Create`](createRequestParams)
        }
    }

    /**
     * update a model instance with the given value
     * throws error if updating is not supported for given model
     * @param id id of object to update
     * @param obj object to update
     * @return promise of request
     */
    update(id: number, obj: any) {
        if (this.model.disableCreate) {
            throw new Error('Cannot update on this model!')
        } else {
            let updateRequestParams = {}
            updateRequestParams['id'] = id
            updateRequestParams[this.model.name.toLowerCase()] = obj
            return this.api[`api${this.model.name}Update`](updateRequestParams)
        }
    }

    /**
     * deletes the given model instance
     * throws error if creation is not supported for given model
     * @param id object id to delete
     * @return promise of request
     */
    destroy(id: number) {
        if (this.model.disableDelete) {
            throw new Error('Cannot delete on this model!')
        } else {
            let destroyRequestParams = {}
            destroyRequestParams['id'] = id
            return this.api[`api${this.model.name}Destroy`](createRequestParams)
        }
    }

}




export class PropertyType extends GenericModel<IPropertyType> {

    create(name: string) {
        const api = new ApiApi()
        return api.apiPropertyTypeCreate({propertyType: {name: name} as IPropertyType}).then(r => {
            return r as unknown as IPropertyType
        })
    }

    list(query: string) {
        const api = new ApiApi()
        return api.apiPropertyTypeList({query: query}).then(r => {
            if (r.results) {
                return r.results
            } else {
                return []
            }
        })
    }
}