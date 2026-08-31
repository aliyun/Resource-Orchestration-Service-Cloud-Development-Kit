import * as ros from '@alicloud/ros-cdk-core';
import { RosShardingNetworkPublicAddress } from './mongodb.generated';
export { RosShardingNetworkPublicAddress as ShardingNetworkPublicAddressProperty };
/**
 * Properties for defining a `ShardingNetworkPublicAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
 */
export interface ShardingNetworkPublicAddressProps {
    /**
     * Property dbInstanceId: The ID of the instance.
     * > you must also configure the **NodeId** parameter when configuring a shard cluster instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
     * > This parameter is required when **DBInstanceId** is configured as a sharded cluster instance ID.
     */
    readonly nodeId?: string | ros.IResolvable;
}
/**
 * Represents a `ShardingNetworkPublicAddress`.
 */
export interface IShardingNetworkPublicAddress extends ros.IResource {
    readonly props: ShardingNetworkPublicAddressProps;
    /**
     * Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.
     */
    readonly attrNetworkAddresses: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MONGODB::ShardingNetworkPublicAddress`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosShardingNetworkPublicAddress`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
 */
export declare class ShardingNetworkPublicAddress extends ros.Resource implements IShardingNetworkPublicAddress {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ShardingNetworkPublicAddressProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.
     */
    readonly attrNetworkAddresses: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ShardingNetworkPublicAddressProps, enableResourcePropertyConstraint?: boolean);
}
