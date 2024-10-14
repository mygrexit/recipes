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
 * @interface ParsedIngredient
 */
export interface ParsedIngredient {
    /**
     * 
     * @type {number}
     * @memberof ParsedIngredient
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof ParsedIngredient
     */
    unit: string;
    /**
     * 
     * @type {string}
     * @memberof ParsedIngredient
     */
    food: string;
    /**
     * 
     * @type {string}
     * @memberof ParsedIngredient
     */
    note: string;
}

/**
 * Check if a given object implements the ParsedIngredient interface.
 */
export function instanceOfParsedIngredient(value: object): value is ParsedIngredient {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('unit' in value) || value['unit'] === undefined) return false;
    if (!('food' in value) || value['food'] === undefined) return false;
    if (!('note' in value) || value['note'] === undefined) return false;
    return true;
}

export function ParsedIngredientFromJSON(json: any): ParsedIngredient {
    return ParsedIngredientFromJSONTyped(json, false);
}

export function ParsedIngredientFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParsedIngredient {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'unit': json['unit'],
        'food': json['food'],
        'note': json['note'],
    };
}

export function ParsedIngredientToJSON(value?: ParsedIngredient | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'unit': value['unit'],
        'food': value['food'],
        'note': value['note'],
    };
}
