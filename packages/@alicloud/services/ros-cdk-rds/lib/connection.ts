import * as ros from '@alicloud/ros-cdk-core';
import { RosConnection } from './rds.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::RDS::Connection`, which is used to apply for a public endpoint.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-connection
 */
export class Connection extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ConnectionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BabelfishPort: The name of the dedicated cluster to which the instance belongs.
     */
    public readonly attrBabelfishPort: ros.IResolvable;

    /**
     * Attribute ConnectionString: Connection string
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * Attribute DBInstanceId: RDS instance ID.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * Attribute Port: The port of the database service.
     */
    public readonly attrPort: ros.IResolvable;

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
            dbInstanceId: props.dbInstanceId,
            port: props.port,
            babelfishPort: props.babelfishPort,
            connectionStringPrefix: props.connectionStringPrefix,
            generalGroupName: props.generalGroupName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConnection;
        this.attrBabelfishPort = rosConnection.attrBabelfishPort;
        this.attrConnectionString = rosConnection.attrConnectionString;
        this.attrDbInstanceId = rosConnection.attrDbInstanceId;
        this.attrPort = rosConnection.attrPort;
    }
}
