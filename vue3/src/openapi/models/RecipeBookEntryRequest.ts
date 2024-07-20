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
 * 
 * @export
 * @interface RecipeBookEntryRequest
 */
export interface RecipeBookEntryRequest {
    /**
     * 
     * @type {number}
     * @memberof RecipeBookEntryRequest
     */
    book: number;
    /**
     * 
     * @type {number}
     * @memberof RecipeBookEntryRequest
     */
    recipe: number;
    /**
     * 
     * @type {number}
     * @memberof RecipeBookEntryRequest
     */
    id?: number;
}

/**
 * Check if a given object implements the RecipeBookEntryRequest interface.
 */
export function instanceOfRecipeBookEntryRequest(value: object): boolean {
    if (!('book' in value)) return false;
    if (!('recipe' in value)) return false;
    return true;
}

export function RecipeBookEntryRequestFromJSON(json: any): RecipeBookEntryRequest {
    return RecipeBookEntryRequestFromJSONTyped(json, false);
}

export function RecipeBookEntryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipeBookEntryRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'book': json['book'],
        'recipe': json['recipe'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function RecipeBookEntryRequestToJSON(value?: RecipeBookEntryRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'book': value['book'],
        'recipe': value['recipe'],
        'id': value['id'],
    };
}
