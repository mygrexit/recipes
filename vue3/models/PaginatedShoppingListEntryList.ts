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
import type { ShoppingListEntry } from './ShoppingListEntry';
import {
    ShoppingListEntryFromJSON,
    ShoppingListEntryFromJSONTyped,
    ShoppingListEntryToJSON,
} from './ShoppingListEntry';

/**
 * 
 * @export
 * @interface PaginatedShoppingListEntryList
 */
export interface PaginatedShoppingListEntryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedShoppingListEntryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedShoppingListEntryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedShoppingListEntryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<ShoppingListEntry>}
     * @memberof PaginatedShoppingListEntryList
     */
    results?: Array<ShoppingListEntry>;
}

/**
 * Check if a given object implements the PaginatedShoppingListEntryList interface.
 */
export function instanceOfPaginatedShoppingListEntryList(value: object): boolean {
    return true;
}

export function PaginatedShoppingListEntryListFromJSON(json: any): PaginatedShoppingListEntryList {
    return PaginatedShoppingListEntryListFromJSONTyped(json, false);
}

export function PaginatedShoppingListEntryListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedShoppingListEntryList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(ShoppingListEntryFromJSON)),
    };
}

export function PaginatedShoppingListEntryListToJSON(value?: PaginatedShoppingListEntryList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(ShoppingListEntryToJSON)),
    };
}

