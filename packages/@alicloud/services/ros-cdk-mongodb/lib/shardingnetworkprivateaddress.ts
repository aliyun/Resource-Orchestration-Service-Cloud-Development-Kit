import * as ros from '@alicloud/ros-cdk-core';
import { RosShardingNetworkPrivateAddress } from './mongodb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosShardingNetworkPrivateAddress as ShardingNetworkPrivateAddressProperty };

/**
 * Properties for defining a `ShardingNetworkPrivateAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
 */
export interface ShardingNetworkPrivateAddressProps {

    /**
     * Property dbInstanceId: The ID of the Shard cluster instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.
     * > You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
     */
    readonly nodeId: string | ros.IResolvable;

    /**
     * Property accountName: Account name.
     * >- starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.
     * - Only when you apply for the Shard\/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.
     * - The permissions of this account are fixed to read-only.
     */
    readonly accountName?: string | ros.IResolvable;

    /**
     * Property accountPassword: Account password.
     * - The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^& *()_+-='
     * - The password length is 8-32 bits.
     */
    readonly accountPassword?: string | ros.IResolvable;

    /**
     * Property zoneId: The ID of the zone to which the instance belongs.
     * > You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Represents a `ShardingNetworkPrivateAddress`.
 */
export interface IShardingNetworkPrivateAddress extends ros.IResource {
    readonly props: ShardingNetworkPrivateAddressProps;

    /**
     * Attribute CompatibleConnections: The list of connection addresses of the DynamoDB protocol instance.
     */
    readonly attrCompatibleConnections: ros.IResolvable | string;

    /**
     * Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.
     */
    readonly attrNetworkAddresses: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MONGODB::ShardingNetworkPrivateAddress`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosShardingNetworkPrivateAddress`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
 */
export class ShardingNetworkPrivateAddress extends ros.Resource implements IShardingNetworkPrivateAddress {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ShardingNetworkPrivateAddressProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CompatibleConnections: The list of connection addresses of the DynamoDB protocol instance.
     */
    public readonly attrCompatibleConnections: ros.IResolvable | string;

    /**
     * Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.
     */
    public readonly attrNetworkAddresses: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ShardingNetworkPrivateAddressProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosShardingNetworkPrivateAddress = new RosShardingNetworkPrivateAddress(this, id,  {
            zoneId: props.zoneId,
            dbInstanceId: props.dbInstanceId,
            nodeId: props.nodeId,
            accountPassword: props.accountPassword,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosShardingNetworkPrivateAddress;
        this.attrCompatibleConnections = rosShardingNetworkPrivateAddress.attrCompatibleConnections;
        this.attrNetworkAddresses = rosShardingNetworkPrivateAddress.attrNetworkAddresses;
    }
}
