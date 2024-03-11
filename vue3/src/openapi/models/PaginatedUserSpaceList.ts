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
import type { UserSpace } from './UserSpace';
import {
    UserSpaceFromJSON,
    UserSpaceFromJSONTyped,
    UserSpaceToJSON,
} from './UserSpace';

/**
 * 
 * @export
 * @interface PaginatedUserSpaceList
 */
export interface PaginatedUserSpaceList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedUserSpaceList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedUserSpaceList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedUserSpaceList
     */
    previous?: string;
    /**
     * 
     * @type {Array<UserSpace>}
     * @memberof PaginatedUserSpaceList
     */
    results?: Array<UserSpace>;
}

/**
 * Check if a given object implements the PaginatedUserSpaceList interface.
 */
export function instanceOfPaginatedUserSpaceList(value: object): boolean {
    return true;
}

export function PaginatedUserSpaceListFromJSON(json: any): PaginatedUserSpaceList {
    return PaginatedUserSpaceListFromJSONTyped(json, false);
}

export function PaginatedUserSpaceListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedUserSpaceList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(UserSpaceFromJSON)),
    };
}

export function PaginatedUserSpaceListToJSON(value?: PaginatedUserSpaceList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(UserSpaceToJSON)),
    };
}

