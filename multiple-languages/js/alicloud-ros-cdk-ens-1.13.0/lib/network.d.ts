import * as ros from '@alicloud/ros-cdk-core';
import { RosNetwork } from './ens.generated';
export { RosNetwork as NetworkProperty };
/**
 * Properties for defining a `Network`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-network
 */
export interface NetworkProps {
    /**
     * Property cidrBlock: The CIDR block of the network. You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
     * 10.0.0.0\/8 (default)
     * 172.16.0.0\/12
     * 192.168.0.0\/16
     */
    readonly cidrBlock: string | ros.IResolvable;
    /**
     * Property ensRegionId: The ID of the edge node.
     */
    readonly ensRegionId: string | ros.IResolvable;
    /**
     * Property description: The description of the network.
     * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property networkName: The name of the network. The name must meet the following requirements:
     * The name must be 2 to 128 characters in length.
     * The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     * The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly networkName?: string | ros.IResolvable;
}
/**
 * Represents a `Network`.
 */
export interface INetwork extends ros.IResource {
    readonly props: NetworkProps;
    /**
     * Attribute NetworkId: The ID of the network.
     */
    readonly attrNetworkId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::Network`, which is used to create a virtual private cloud (VPC).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetwork`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-network
 */
export declare class Network extends ros.Resource implements INetwork {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: NetworkProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NetworkId: The ID of the network.
     */
    readonly attrNetworkId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkProps, enableResourcePropertyConstraint?: boolean);
}
