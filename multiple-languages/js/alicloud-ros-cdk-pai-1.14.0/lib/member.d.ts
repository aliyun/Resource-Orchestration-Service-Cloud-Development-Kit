import * as ros from '@alicloud/ros-cdk-core';
import { RosMember } from './pai.generated';
export { RosMember as MemberProperty };
/**
 * Properties for defining a `Member`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-member
 */
export interface MemberProps {
    /**
     * Property roles: The list of roles.
     */
    readonly roles: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property userId: User ID.
     */
    readonly userId: string | ros.IResolvable;
    /**
     * Property workspaceId: Workspace ID.
     */
    readonly workspaceId: string | ros.IResolvable;
}
/**
 * Represents a `Member`.
 */
export interface IMember extends ros.IResource {
    readonly props: MemberProps;
    /**
     * Attribute CreateTime: Create UTC time in ISO8601 format.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DisplayName: Member display name.
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Attribute MemberId: The member ID.
     */
    readonly attrMemberId: ros.IResolvable | string;
    /**
     * Attribute MemberName: The name of user.
     */
    readonly attrMemberName: ros.IResolvable | string;
    /**
     * Attribute Roles: The list of roles.
     */
    readonly attrRoles: ros.IResolvable | string;
    /**
     * Attribute UserId: The first ID of the resource.
     */
    readonly attrUserId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::Member`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMember`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-member
 */
export declare class Member extends ros.Resource implements IMember {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MemberProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: Create UTC time in ISO8601 format.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DisplayName: Member display name.
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Attribute MemberId: The member ID.
     */
    readonly attrMemberId: ros.IResolvable | string;
    /**
     * Attribute MemberName: The name of user.
     */
    readonly attrMemberName: ros.IResolvable | string;
    /**
     * Attribute Roles: The list of roles.
     */
    readonly attrRoles: ros.IResolvable | string;
    /**
     * Attribute UserId: The first ID of the resource.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MemberProps, enableResourcePropertyConstraint?: boolean);
}
