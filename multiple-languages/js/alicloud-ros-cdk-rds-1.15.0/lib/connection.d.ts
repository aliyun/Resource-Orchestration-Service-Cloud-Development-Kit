import * as ros from '@alicloud/ros-cdk-core';
import { RosConnection } from './rds.generated';
export { RosConnection as ConnectionProperty };
/**
 * Properties for defining a `Connection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-connection
 */
export interface ConnectionProps {
    /**
     * Property dbInstanceId: RDS instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property port: The port of the database service.
     */
    readonly port: number | ros.IResolvable;
    /**
     * Property babelfishPort: The Tabular Data Stream (TDS) port of the instance for which Babelfish is enabled.
     * Note This parameter applies only to ApsaraDB RDS for PostgreSQL instances.
     * For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see Introduction to Babelfish.
     */
    readonly babelfishPort?: string | ros.IResolvable;
    /**
     * Property connectionStringPrefix: The prefix of the endpoint.
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 5 to 40 characters in length and can contain letters, digits, and hyphens (-).
     */
    readonly connectionStringPrefix?: string | ros.IResolvable;
    /**
     * Property generalGroupName: The name of the dedicated cluster to which the instance belongs.
     * This parameter takes effect only when the instance runs MySQL on RDS
     * Standard Edition and is created in a dedicated cluster.
     */
    readonly generalGroupName?: string | ros.IResolvable;
}
/**
 * Represents a `Connection`.
 */
export interface IConnection extends ros.IResource {
    readonly props: ConnectionProps;
    /**
     * Attribute BabelfishPort: The name of the dedicated cluster to which the instance belongs.
     */
    readonly attrBabelfishPort: ros.IResolvable | string;
    /**
     * Attribute ConnectionString: Connection string
     */
    readonly attrConnectionString: ros.IResolvable | string;
    /**
     * Attribute DBInstanceId: RDS instance ID.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute Port: The port of the database service.
     */
    readonly attrPort: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RDS::Connection`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-connection
 */
export declare class Connection extends ros.Resource implements IConnection {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ConnectionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BabelfishPort: The name of the dedicated cluster to which the instance belongs.
     */
    readonly attrBabelfishPort: ros.IResolvable | string;
    /**
     * Attribute ConnectionString: Connection string
     */
    readonly attrConnectionString: ros.IResolvable | string;
    /**
     * Attribute DBInstanceId: RDS instance ID.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute Port: The port of the database service.
     */
    readonly attrPort: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConnectionProps, enableResourcePropertyConstraint?: boolean);
}
