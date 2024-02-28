/* tslint:disable */
/* eslint-disable */
/**
 * Django Recipes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FoodInheritField
 */
export interface FoodInheritField {
    /**
     * 
     * @type {number}
     * @memberof FoodInheritField
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof FoodInheritField
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FoodInheritField
     */
    field?: string | null;
}

/**
 * Check if a given object implements the FoodInheritField interface.
 */
export function instanceOfFoodInheritField(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FoodInheritFieldFromJSON(json: any): FoodInheritField {
    return FoodInheritFieldFromJSONTyped(json, false);
}

export function FoodInheritFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): FoodInheritField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'field': !exists(json, 'field') ? undefined : json['field'],
    };
}

export function FoodInheritFieldToJSON(value?: FoodInheritField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'field': value.field,
    };
}
