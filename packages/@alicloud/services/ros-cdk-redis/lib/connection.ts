import * as ros from '@alicloud/ros-cdk-core';
import { RosConnection } from './redis.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosConnection as ConnectionProperty };

/**
 * Properties for defining a `Connection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-connection
 */
export interface ConnectionProps {

    /**
     * Property connectionStringPrefix: The prefix of the public endpoint. 
     * The prefix must be 8 to 64 characters in length, 
     * and can contain lowercase letters and digits. 
     * It must start with a lowercase letter.
     */
    readonly connectionStringPrefix: string | ros.IResolvable;

    /**
     * Property connectionType: Allowed values:
     * - Public: Public address.
     * - Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.
     */
    readonly connectionType: string | ros.IResolvable;

    /**
     * Property instanceId: Instance ID (globally unique)
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property port: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
     */
    readonly port: number | ros.IResolvable;
}

/**
 * Represents a `Connection`.
 */
export interface IConnection extends ros.IResource {
    readonly props: ConnectionProps;

    /**
     * Attribute ConnectionString: The allocated connection string.
     */
    readonly attrConnectionString: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::REDIS::Connection`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-connection
 */
export class Connection extends ros.Resource implements IConnection {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ConnectionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConnectionString: The allocated connection string.
     */
    public readonly attrConnectionString: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConnectionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosConnection = new RosConnection(this, id,  {
            connectionType: props.connectionType,
            instanceId: props.instanceId,
            port: props.port,
            connectionStringPrefix: props.connectionStringPrefix,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConnection;
        this.attrConnectionString = rosConnection.attrConnectionString;
    }
}
