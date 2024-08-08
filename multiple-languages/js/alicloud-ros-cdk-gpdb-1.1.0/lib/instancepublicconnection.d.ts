import * as ros from '@alicloud/ros-cdk-core';
import { RosInstancePublicConnection } from './gpdb.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::GPDB::InstancePublicConnection`, which is used to allocate a public connection string to an instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstancePublicConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-instancepublicconnection
 */
export declare class InstancePublicConnection extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstancePublicConnectionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConnectionString: The connection string of the instance.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstancePublicConnectionProps, enableResourcePropertyConstraint?: boolean);
}
