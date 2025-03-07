import * as ros from '@alicloud/ros-cdk-core';
import { RosAcls } from './ga.generated';
export { RosAcls as AclsProperty };
/**
 * Properties for defining a `Acls`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
 */
export interface AclsProps {
    /**
     * Property aclId: The  ID of the Acl.
     */
    readonly aclId?: string | ros.IResolvable;
    /**
     * Property aclName: The name of the acl.
     */
    readonly aclName?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `Acls`.
 */
export interface IAcls extends ros.IResource {
    readonly props: AclsProps;
    /**
     * Attribute AclIds: The list of acl IDs.
     */
    readonly attrAclIds: ros.IResolvable | string;
    /**
     * Attribute Acls: The list of acls.
     */
    readonly attrAcls: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::GA::Acls`, which is used to query access control lists (ACLs).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAcls`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
 */
export declare class Acls extends ros.Resource implements IAcls {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AclsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AclIds: The list of acl IDs.
     */
    readonly attrAclIds: ros.IResolvable | string;
    /**
     * Attribute Acls: The list of acls.
     */
    readonly attrAcls: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AclsProps, enableResourcePropertyConstraint?: boolean);
}
