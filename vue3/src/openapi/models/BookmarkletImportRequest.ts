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
 * @interface BookmarkletImportRequest
 */
export interface BookmarkletImportRequest {
    /**
     * 
     * @type {string}
     * @memberof BookmarkletImportRequest
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof BookmarkletImportRequest
     */
    html: string;
    /**
     * 
     * @type {number}
     * @memberof BookmarkletImportRequest
     */
    id?: number;
}

/**
 * Check if a given object implements the BookmarkletImportRequest interface.
 */
export function instanceOfBookmarkletImportRequest(value: object): boolean {
    if (!('html' in value)) return false;
    return true;
}

export function BookmarkletImportRequestFromJSON(json: any): BookmarkletImportRequest {
    return BookmarkletImportRequestFromJSONTyped(json, false);
}

export function BookmarkletImportRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookmarkletImportRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'] == null ? undefined : json['url'],
        'html': json['html'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function BookmarkletImportRequestToJSON(value?: BookmarkletImportRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'url': value['url'],
        'html': value['html'],
        'id': value['id'],
    };
}
