import * as ros from '@alicloud/ros-cdk-core';
import { RosInfluxDBDatabase } from './tsdb.generated';
export { RosInfluxDBDatabase as InfluxDBDatabaseProperty };
/**
 * Properties for defining a `ALIYUN::TSDB::InfluxDBDatabase`
 */
export interface InfluxDBDatabaseProps {
    /**
     * Property dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
     */
    readonly dbName: string | ros.IResolvable;
    /**
     * Property instanceId: The ID of TSDB for InfluxDB.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::TSDB::InfluxDBDatabase`
 */
export declare class InfluxDBDatabase extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DBName: The name of database.
     */
    readonly attrDbName: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of TSDB for InfluxDB.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::TSDB::InfluxDBDatabase`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InfluxDBDatabaseProps, enableResourcePropertyConstraint?: boolean);
}
