/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Adds nested create feature
 * @export
 * @interface RecipeFlat
 */
export interface RecipeFlat {
    /**
     * 
     * @type {number}
     * @memberof RecipeFlat
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RecipeFlat
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RecipeFlat
     */
    image?: string;
}

/**
 * Check if a given object implements the RecipeFlat interface.
 */
export function instanceOfRecipeFlat(value: object): boolean {
    if (!('name' in value)) return false;
    return true;
}

export function RecipeFlatFromJSON(json: any): RecipeFlat {
    return RecipeFlatFromJSONTyped(json, false);
}

export function RecipeFlatFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipeFlat {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'image': json['image'] == null ? undefined : json['image'],
    };
}

export function RecipeFlatToJSON(value?: RecipeFlat | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'image': value['image'],
    };
}
