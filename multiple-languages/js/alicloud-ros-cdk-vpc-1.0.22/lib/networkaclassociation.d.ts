import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkAclAssociation } from './vpc.generated';
export { RosNetworkAclAssociation as NetworkAclAssociationProperty };
/**
 * Properties for defining a `NetworkAclAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkaclassociation
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::NetworkAclAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkAclAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkaclassociation
 */
export declare class NetworkAclAssociation extends ros.Resource {
    /**
     * Attribute NetworkAclId: The ID of the network ACL.
     */
    readonly attrNetworkAclId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkAclAssociationProps, enableResourcePropertyConstraint?: boolean);
}
