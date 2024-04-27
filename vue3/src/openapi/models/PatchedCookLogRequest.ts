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
 * @interface PatchedCookLogRequest
 */
export interface PatchedCookLogRequest {
    /**
     * 
     * @type {number}
     * @memberof PatchedCookLogRequest
     */
    recipe?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedCookLogRequest
     */
    servings?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedCookLogRequest
     */
    rating?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedCookLogRequest
     */
    comment?: string;
    /**
     * 
     * @type {Date}
     * @memberof PatchedCookLogRequest
     */
    createdAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof PatchedCookLogRequest
     */
    id?: number;
}

/**
 * Check if a given object implements the PatchedCookLogRequest interface.
 */
export function instanceOfPatchedCookLogRequest(value: object): boolean {
    return true;
}

export function PatchedCookLogRequestFromJSON(json: any): PatchedCookLogRequest {
    return PatchedCookLogRequestFromJSONTyped(json, false);
}

export function PatchedCookLogRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedCookLogRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'recipe': json['recipe'] == null ? undefined : json['recipe'],
        'servings': json['servings'] == null ? undefined : json['servings'],
        'rating': json['rating'] == null ? undefined : json['rating'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function PatchedCookLogRequestToJSON(value?: PatchedCookLogRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'recipe': value['recipe'],
        'servings': value['servings'],
        'rating': value['rating'],
        'comment': value['comment'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'id': value['id'],
    };
}
