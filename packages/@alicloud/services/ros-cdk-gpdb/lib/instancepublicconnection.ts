import * as ros from '@alicloud/ros-cdk-core';
import { RosInstancePublicConnection } from './gpdb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstancePublicConnection as InstancePublicConnectionProperty };

/**
 * Properties for defining a `InstancePublicConnection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-instancepublicconnection
 */
export interface InstancePublicConnectionProps {

    /**
     * Property connectionStringPrefix: The endpoint that is used to connect to the specified database.
     */
    readonly connectionStringPrefix: string | ros.IResolvable;

    /**
     * Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property port: The port number of the instance.
     */
    readonly port: number | ros.IResolvable;
}

/**
 * Represents a `InstancePublicConnection`.
 */
export interface IInstancePublicConnection extends ros.IResource {
    readonly props: InstancePublicConnectionProps;

    /**
     * Attribute ConnectionString: The connection string of the instance.
     */
    readonly attrConnectionString: ros.IResolvable | string;

    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GPDB::InstancePublicConnection`, which is used to allocate a public connection string to an instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstancePublicConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-instancepublicconnection
 */
export class InstancePublicConnection extends ros.Resource implements IInstancePublicConnection {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstancePublicConnectionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConnectionString: The connection string of the instance.
     */
    public readonly attrConnectionString: ros.IResolvable | string;

    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstancePublicConnectionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstancePublicConnection = new RosInstancePublicConnection(this, id,  {
            dbInstanceId: props.dbInstanceId,
            port: props.port,
            connectionStringPrefix: props.connectionStringPrefix,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstancePublicConnection;
        this.attrConnectionString = rosInstancePublicConnection.attrConnectionString;
        this.attrDbInstanceId = rosInstancePublicConnection.attrDbInstanceId;
    }
}
