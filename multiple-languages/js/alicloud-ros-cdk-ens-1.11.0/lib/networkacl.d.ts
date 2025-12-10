import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkAcl } from './ens.generated';
export { RosNetworkAcl as NetworkAclProperty };
/**
 * Properties for defining a `NetworkAcl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkacl
 */
export interface NetworkAclProps {
    /**
     * Property aclEntries: The entry of Network ACL.
     */
    readonly aclEntries?: Array<RosNetworkAcl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property description: The description of the network ACL.
     * The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property networkAclName: Enter a name for the network ACL.
     * The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly networkAclName?: string | ros.IResolvable;
}
/**
 * Represents a `NetworkAcl`.
 */
export interface INetworkAcl extends ros.IResource {
    readonly props: NetworkAclProps;
    /**
     * Attribute NetworkAclId: The ID of the network ACL.
     */
    readonly attrNetworkAclId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::NetworkAcl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkAcl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkacl
 */
export declare class NetworkAcl extends ros.Resource implements INetworkAcl {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: NetworkAclProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NetworkAclId: The ID of the network ACL.
     */
    readonly attrNetworkAclId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: NetworkAclProps, enableResourcePropertyConstraint?: boolean);
}
