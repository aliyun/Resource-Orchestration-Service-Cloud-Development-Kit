import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkAclAssociation } from './vpc.generated';
export { RosNetworkAclAssociation as NetworkAclAssociationProperty };
/**
 * Properties for defining a `ALIYUN::VPC::NetworkAclAssociation`
 */
export interface NetworkAclAssociationProps {
    /**
     * Property networkAclId: The ID of the network ACL.
     */
    readonly networkAclId: string | ros.IResolvable;
    /**
     * Property resources: The list of resources that need to be associated with network ACL.
     */
    readonly resources: Array<RosNetworkAclAssociation.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::NetworkAclAssociation`
 */
export declare class NetworkAclAssociation extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute NetworkAclId: The ID of the network ACL.
     */
    readonly attrNetworkAclId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::NetworkAclAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkAclAssociationProps, enableResourcePropertyConstraint?: boolean);
}
