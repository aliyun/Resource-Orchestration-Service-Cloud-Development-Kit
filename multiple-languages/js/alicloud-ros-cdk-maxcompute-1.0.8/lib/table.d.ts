import * as ros from '@alicloud/ros-cdk-core';
import { RosTable } from './maxcompute.generated';
export { RosTable as TableProperty };
/**
 * Properties for defining a `ALIYUN::MaxCompute::Table`
 */
export interface TableProps {
    /**
     * Property name: Table name
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property project: Project name, if not provided, will be the default project
     */
    readonly project: string | ros.IResolvable;
    /**
     * Property comment: Table comment
     */
    readonly comment?: string | ros.IResolvable;
    /**
     * Property ifNotExists: If you create a table by using the name of an existing table and
     * the parameter set to false, an error is returned.
     * If you specify the if not exists parameter, a success message
     * is returned when you create a table by using the name of an
     * existing table. The success message is returned even if the
     * schema of the existing table is different from that of the table you want to create.
     * If you create a table by using the name of an existing table,
     * the table is not created and the metadata of the existing table is not changed.
     */
    readonly ifNotExists?: boolean | ros.IResolvable;
    /**
     * Property lifecycle: Table's lifecycle.
     */
    readonly lifecycle?: number | ros.IResolvable;
    /**
     * Property schema: Table schema
     */
    readonly schema?: RosTable.SchemaProperty | ros.IResolvable;
    /**
     * Property stringSchema: Create a table with field names and field type strings.
     * Example: 'num bigint, num2 double', 'pt string'
     */
    readonly stringSchema?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::MaxCompute::Table`
 */
export declare class Table extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Name: Table name
     */
    readonly attrName: ros.IResolvable;
    /**
     * Attribute Project: Project name
     */
    readonly attrProject: ros.IResolvable;
    /**
     * Create a new `ALIYUN::MaxCompute::Table`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TableProps, enableResourcePropertyConstraint?: boolean);
}
