import * as ros from '@alicloud/ros-cdk-core';
import { RosInfluxDBDatabase } from './tsdb.generated';
export { RosInfluxDBDatabase as InfluxDBDatabaseProperty };
/**
 * Properties for defining a `InfluxDBDatabase`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbdatabase
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
 * Represents a `InfluxDBDatabase`.
 */
export interface IInfluxDBDatabase extends ros.IResource {
    readonly props: InfluxDBDatabaseProps;
    /**
     * Attribute DBName: The name of database.
     */
    readonly attrDbName: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of TSDB for InfluxDB.
     */
    readonly attrInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::TSDB::InfluxDBDatabase`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInfluxDBDatabase`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbdatabase
 */
export declare class InfluxDBDatabase extends ros.Resource implements IInfluxDBDatabase {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InfluxDBDatabaseProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DBName: The name of database.
     */
    readonly attrDbName: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of TSDB for InfluxDB.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InfluxDBDatabaseProps, enableResourcePropertyConstraint?: boolean);
}
