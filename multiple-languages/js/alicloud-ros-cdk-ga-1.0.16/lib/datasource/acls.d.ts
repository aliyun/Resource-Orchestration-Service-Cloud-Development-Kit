import * as ros from '@alicloud/ros-cdk-core';
import { RosAcls } from './ga.generated';
export { RosAcls as AclsProperty };
/**
 * Properties for defining a `DATASOURCE::GA::Acls`
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
 * A ROS resource type:  `DATASOURCE::GA::Acls`
 */
export declare class Acls extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AclIds: The list of acl IDs.
     */
    readonly attrAclIds: ros.IResolvable;
    /**
     * Attribute Acls: The list of acls.
     */
    readonly attrAcls: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::GA::Acls`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AclsProps, enableResourcePropertyConstraint?: boolean);
}
