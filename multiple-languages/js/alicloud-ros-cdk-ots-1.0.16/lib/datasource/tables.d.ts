import * as ros from '@alicloud/ros-cdk-core';
import { RosTables } from './ots.generated';
export { RosTables as TablesProperty };
/**
 * Properties for defining a `DATASOURCE::OTS::Tables`
 */
export interface TablesProps {
    /**
     * Property instanceName: The name of the instance to which the table belongs.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * Property tableName: The name of table.
     */
    readonly tableName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::OTS::Tables`
 */
export declare class Tables extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute TableNames: The list of table names.
     */
    readonly attrTableNames: ros.IResolvable;
    /**
     * Attribute Tables: The list of tables.
     */
    readonly attrTables: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::OTS::Tables`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TablesProps, enableResourcePropertyConstraint?: boolean);
}
