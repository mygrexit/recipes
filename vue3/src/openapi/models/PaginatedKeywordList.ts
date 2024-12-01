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
import type { Keyword } from './Keyword';
import {
    KeywordFromJSON,
    KeywordFromJSONTyped,
    KeywordToJSON,
    KeywordToJSONTyped,
} from './Keyword';

/**
 * 
 * @export
 * @interface PaginatedKeywordList
 */
export interface PaginatedKeywordList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedKeywordList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedKeywordList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedKeywordList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Keyword>}
     * @memberof PaginatedKeywordList
     */
    results: Array<Keyword>;
    /**
     * 
     * @type {Date}
     * @memberof PaginatedKeywordList
     */
    timestamp?: Date;
}

/**
 * Check if a given object implements the PaginatedKeywordList interface.
 */
export function instanceOfPaginatedKeywordList(value: object): value is PaginatedKeywordList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedKeywordListFromJSON(json: any): PaginatedKeywordList {
    return PaginatedKeywordListFromJSONTyped(json, false);
}

export function PaginatedKeywordListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedKeywordList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(KeywordFromJSON)),
        'timestamp': json['timestamp'] == null ? undefined : (new Date(json['timestamp'])),
    };
}

export function PaginatedKeywordListToJSON(json: any): PaginatedKeywordList {
    return PaginatedKeywordListToJSONTyped(json, false);
}

export function PaginatedKeywordListToJSONTyped(value?: PaginatedKeywordList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(KeywordToJSON)),
        'timestamp': value['timestamp'] == null ? undefined : ((value['timestamp']).toISOString()),
    };
}

