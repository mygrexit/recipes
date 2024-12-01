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
import type { Group } from './Group';
import {
    GroupFromJSON,
    GroupFromJSONTyped,
    GroupToJSON,
    GroupToJSONTyped,
} from './Group';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
    UserToJSONTyped,
} from './User';

/**
 * Adds nested create feature
 * @export
 * @interface UserSpace
 */
export interface UserSpace {
    /**
     * 
     * @type {number}
     * @memberof UserSpace
     */
    id?: number;
    /**
     * 
     * @type {User}
     * @memberof UserSpace
     */
    readonly user: User;
    /**
     * 
     * @type {number}
     * @memberof UserSpace
     */
    readonly space: number;
    /**
     * 
     * @type {Array<Group>}
     * @memberof UserSpace
     */
    groups: Array<Group>;
    /**
     * 
     * @type {boolean}
     * @memberof UserSpace
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserSpace
     */
    internalNote?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UserSpace
     */
    readonly inviteLink: number | null;
    /**
     * 
     * @type {Date}
     * @memberof UserSpace
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserSpace
     */
    readonly updatedAt: Date;
}

/**
 * Check if a given object implements the UserSpace interface.
 */
export function instanceOfUserSpace(value: object): value is UserSpace {
    if (!('user' in value) || value['user'] === undefined) return false;
    if (!('space' in value) || value['space'] === undefined) return false;
    if (!('groups' in value) || value['groups'] === undefined) return false;
    if (!('inviteLink' in value) || value['inviteLink'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function UserSpaceFromJSON(json: any): UserSpace {
    return UserSpaceFromJSONTyped(json, false);
}

export function UserSpaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSpace {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'user': UserFromJSON(json['user']),
        'space': json['space'],
        'groups': ((json['groups'] as Array<any>).map(GroupFromJSON)),
        'active': json['active'] == null ? undefined : json['active'],
        'internalNote': json['internal_note'] == null ? undefined : json['internal_note'],
        'inviteLink': json['invite_link'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function UserSpaceToJSON(json: any): UserSpace {
    return UserSpaceToJSONTyped(json, false);
}

export function UserSpaceToJSONTyped(value?: Omit<UserSpace, 'user'|'space'|'invite_link'|'created_at'|'updated_at'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'groups': ((value['groups'] as Array<any>).map(GroupToJSON)),
        'active': value['active'],
        'internal_note': value['internalNote'],
    };
}

