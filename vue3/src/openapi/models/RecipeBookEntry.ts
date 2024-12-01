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
import type { RecipeBook } from './RecipeBook';
import {
    RecipeBookFromJSON,
    RecipeBookFromJSONTyped,
    RecipeBookToJSON,
    RecipeBookToJSONTyped,
} from './RecipeBook';
import type { RecipeOverview } from './RecipeOverview';
import {
    RecipeOverviewFromJSON,
    RecipeOverviewFromJSONTyped,
    RecipeOverviewToJSON,
    RecipeOverviewToJSONTyped,
} from './RecipeOverview';

/**
 * 
 * @export
 * @interface RecipeBookEntry
 */
export interface RecipeBookEntry {
    /**
     * 
     * @type {number}
     * @memberof RecipeBookEntry
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof RecipeBookEntry
     */
    book: number;
    /**
     * 
     * @type {RecipeBook}
     * @memberof RecipeBookEntry
     */
    readonly bookContent: RecipeBook;
    /**
     * 
     * @type {number}
     * @memberof RecipeBookEntry
     */
    recipe: number;
    /**
     * 
     * @type {RecipeOverview}
     * @memberof RecipeBookEntry
     */
    readonly recipeContent: RecipeOverview;
}

/**
 * Check if a given object implements the RecipeBookEntry interface.
 */
export function instanceOfRecipeBookEntry(value: object): value is RecipeBookEntry {
    if (!('book' in value) || value['book'] === undefined) return false;
    if (!('bookContent' in value) || value['bookContent'] === undefined) return false;
    if (!('recipe' in value) || value['recipe'] === undefined) return false;
    if (!('recipeContent' in value) || value['recipeContent'] === undefined) return false;
    return true;
}

export function RecipeBookEntryFromJSON(json: any): RecipeBookEntry {
    return RecipeBookEntryFromJSONTyped(json, false);
}

export function RecipeBookEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipeBookEntry {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'book': json['book'],
        'bookContent': RecipeBookFromJSON(json['book_content']),
        'recipe': json['recipe'],
        'recipeContent': RecipeOverviewFromJSON(json['recipe_content']),
    };
}

export function RecipeBookEntryToJSON(json: any): RecipeBookEntry {
    return RecipeBookEntryToJSONTyped(json, false);
}

export function RecipeBookEntryToJSONTyped(value?: Omit<RecipeBookEntry, 'book_content'|'recipe_content'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'book': value['book'],
        'recipe': value['recipe'],
    };
}

