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
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::GA::Acls`, which is used to query access control lists (ACLs).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAcls`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
 */
export declare class Acls extends ros.Resource {
    /**
     * Attribute AclIds: The list of acl IDs.
     */
    readonly attrAclIds: ros.IResolvable;
    /**
     * Attribute Acls: The list of acls.
     */
    readonly attrAcls: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AclsProps, enableResourcePropertyConstraint?: boolean);
}
