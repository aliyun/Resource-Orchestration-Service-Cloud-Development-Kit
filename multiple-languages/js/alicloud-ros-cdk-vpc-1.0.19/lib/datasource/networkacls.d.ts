import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkAcls } from './vpc.generated';
export { RosNetworkAcls as NetworkAclsProperty };
/**
 * Properties for defining a `DATASOURCE::VPC::NetworkAcls`
 */
export interface NetworkAclsProps {
    /**
     * Property networkAclId: The ID of the network ACL.
     */
    readonly networkAclId?: string | ros.IResolvable;
    /**
     * Property networkAclName: The name of the network ACL.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
     */
    readonly networkAclName?: string | ros.IResolvable;
    /**
     * Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
     */
    readonly resourceId?: string | ros.IResolvable;
    /**
     * Property resourceType: The type of the associated instance. Set the value to VSwitch.
     * This parameter is valid only if ResourceType and ResourceId are both set.
     */
    readonly resourceType?: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::VPC::NetworkAcls`
 */
export declare class NetworkAcls extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute NetworkAclIds: The list of The network acl ids.
     */
    readonly attrNetworkAclIds: ros.IResolvable;
    /**
     * Attribute NetworkAcls: The list of The network acls.
     */
    readonly attrNetworkAcls: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::VPC::NetworkAcls`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: NetworkAclsProps, enableResourcePropertyConstraint?: boolean);
}
