import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkAcl } from './vpc.generated';
export { RosNetworkAcl as NetworkAclProperty };
/**
 * Properties for defining a `NetworkAcl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkacl
 */
export interface NetworkAclProps {
    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property description: The description of the network ACL.
     * The description must be 2 to 256 characters in length. The description must start
     * with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property egressAclEntries: The list of egress network ACL entries.
     */
    readonly egressAclEntries?: Array<RosNetworkAcl.EgressAclEntriesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ingressAclEntries: The list of ingress network ACL entries.
     */
    readonly ingressAclEntries?: Array<RosNetworkAcl.IngressAclEntriesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property networkAclName: The name of the network ACL.
     * The name must be 2 to 128 characters in length and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
     * start with http:\/\/ or https:\/\/.
     */
    readonly networkAclName?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::NetworkAcl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkAcl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkacl
 */
export declare class NetworkAcl extends ros.Resource {
    /**
     * Attribute NetworkAclEntryName: The name of the inbound rule.
     */
    readonly attrNetworkAclEntryName: ros.IResolvable;
    /**
     * Attribute NetworkAclId: The ID of the network ACL.
     */
    readonly attrNetworkAclId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkAclProps, enableResourcePropertyConstraint?: boolean);
}
