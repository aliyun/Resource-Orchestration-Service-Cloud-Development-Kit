import * as ros from '@alicloud/ros-cdk-core';
import { RosInfluxDBUser } from './tsdb.generated';
export { RosInfluxDBUser as InfluxDBUserProperty };
/**
 * Properties for defining a `InfluxDBUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbuser
 */
export interface InfluxDBUserProps {
    /**
     * Property instanceId: The ID of TSDB for InfluxDB.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^&*()_+-=
     */
    readonly password: string | ros.IResolvable;
    /**
     * Property userName: The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
     */
    readonly userName: string | ros.IResolvable;
    /**
     * Property userType: The type of user. Valid values:
     * normal: normal user
     * admin: administrator user.
     */
    readonly userType: string | ros.IResolvable;
    /**
     * Property databasePermissions: The list of databases that the user can access. If the user type is admin, do not specify this parameter.
     */
    readonly databasePermissions?: Array<RosInfluxDBUser.DatabasePermissionsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `InfluxDBUser`.
 */
export interface IInfluxDBUser extends ros.IResource {
    readonly props: InfluxDBUserProps;
    /**
     * Attribute InstanceId: The ID of TSDB for InfluxDB.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute UserName: The name of user.
     */
    readonly attrUserName: ros.IResolvable | string;
    /**
     * Attribute UserType: The type of user.
     */
    readonly attrUserType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::TSDB::InfluxDBUser`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInfluxDBUser`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbuser
 */
export declare class InfluxDBUser extends ros.Resource implements IInfluxDBUser {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InfluxDBUserProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceId: The ID of TSDB for InfluxDB.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute UserName: The name of user.
     */
    readonly attrUserName: ros.IResolvable | string;
    /**
     * Attribute UserType: The type of user.
     */
    readonly attrUserType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InfluxDBUserProps, enableResourcePropertyConstraint?: boolean);
}
