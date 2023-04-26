import * as ros from '@alicloud/ros-cdk-core';
import { RosConnection } from './redis.generated';
export { RosConnection as ConnectionProperty };
/**
 * Properties for defining a `ALIYUN::REDIS::Connection`
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
 * A ROS resource type:  `ALIYUN::REDIS::Connection`
 */
export declare class Connection extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ConnectionString: The allocated connection string.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * Create a new `ALIYUN::REDIS::Connection`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConnectionProps, enableResourcePropertyConstraint?: boolean);
}
