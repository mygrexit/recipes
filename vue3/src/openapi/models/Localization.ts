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
 * @interface Localization
 */
export interface Localization {
    /**
     * 
     * @type {string}
     * @memberof Localization
     */
    readonly code: string;
    /**
     * 
     * @type {string}
     * @memberof Localization
     */
    readonly language: string;
}

/**
 * Check if a given object implements the Localization interface.
 */
export function instanceOfLocalization(value: object): value is Localization {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('language' in value) || value['language'] === undefined) return false;
    return true;
}

export function LocalizationFromJSON(json: any): Localization {
    return LocalizationFromJSONTyped(json, false);
}

export function LocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Localization {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'language': json['language'],
    };
}

export function LocalizationToJSON(json: any): Localization {
    return LocalizationToJSONTyped(json, false);
}

export function LocalizationToJSONTyped(value?: Omit<Localization, 'code'|'language'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

