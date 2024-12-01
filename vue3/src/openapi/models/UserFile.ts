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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
    UserToJSONTyped,
} from './User';

/**
 * 
 * @export
 * @interface UserFile
 */
export interface UserFile {
    /**
     * 
     * @type {number}
     * @memberof UserFile
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UserFile
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UserFile
     */
    file: string;
    /**
     * 
     * @type {string}
     * @memberof UserFile
     */
    readonly fileDownload: string;
    /**
     * 
     * @type {string}
     * @memberof UserFile
     */
    readonly preview: string;
    /**
     * 
     * @type {number}
     * @memberof UserFile
     */
    readonly fileSizeKb: number;
    /**
     * 
     * @type {User}
     * @memberof UserFile
     */
    readonly createdBy: User;
    /**
     * 
     * @type {Date}
     * @memberof UserFile
     */
    readonly createdAt: Date;
}

/**
 * Check if a given object implements the UserFile interface.
 */
export function instanceOfUserFile(value: object): value is UserFile {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('file' in value) || value['file'] === undefined) return false;
    if (!('fileDownload' in value) || value['fileDownload'] === undefined) return false;
    if (!('preview' in value) || value['preview'] === undefined) return false;
    if (!('fileSizeKb' in value) || value['fileSizeKb'] === undefined) return false;
    if (!('createdBy' in value) || value['createdBy'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    return true;
}

export function UserFileFromJSON(json: any): UserFile {
    return UserFileFromJSONTyped(json, false);
}

export function UserFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserFile {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'file': json['file'],
        'fileDownload': json['file_download'],
        'preview': json['preview'],
        'fileSizeKb': json['file_size_kb'],
        'createdBy': UserFromJSON(json['created_by']),
        'createdAt': (new Date(json['created_at'])),
    };
}

export function UserFileToJSON(json: any): UserFile {
    return UserFileToJSONTyped(json, false);
}

export function UserFileToJSONTyped(value?: Omit<UserFile, 'file_download'|'preview'|'file_size_kb'|'created_by'|'created_at'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'file': value['file'],
    };
}

