import * as ros from '@alicloud/ros-cdk-core';
import { RosDBNodeClasses } from './polardb.generated';
export { RosDBNodeClasses as DBNodeClassesProperty };
/**
 * Properties for defining a `DATASOURCE::POLARDB::DBNodeClasses`
 */
export interface DBNodeClassesProps {
    /**
     * Property payType: The billing method. Valid values:
     * Postpaid: the pay-as-you-go billing method
     * Prepaid: the subscription billing method
     */
    readonly payType: string | ros.IResolvable;
    /**
     * Property dbNodeClass: The node type. For more information, see Specifications of compute nodes.
     */
    readonly dbNodeClass?: string | ros.IResolvable;
    /**
     * Property dbType: The database engine. Valid values:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    readonly dbType?: string | ros.IResolvable;
    /**
     * Property dbVersion: The version number of the database engine
     * Valid values for the MySQL database engine:
     * 5.6
     * 5.7
     * 8
     * Valid value for the PostgreSQL database engine: 11
     * Valid value for the Oracle database engine: 11
     * Note If you specify the DBType parameter, you must specify this parameter
     */
    readonly dbVersion?: string | ros.IResolvable;
    /**
     * Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::POLARDB::DBNodeClasses`
 */
export declare class DBNodeClasses extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DBNodeClassIds: The list of db node class ids.
     */
    readonly attrDbNodeClassIds: ros.IResolvable;
    /**
     * Attribute DBNodeClasses: The list of db node classes.
     */
    readonly attrDbNodeClasses: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::POLARDB::DBNodeClasses`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBNodeClassesProps, enableResourcePropertyConstraint?: boolean);
}
