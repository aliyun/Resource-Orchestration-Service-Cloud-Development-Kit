import * as ros from '@alicloud/ros-cdk-core';
import { RosTable } from './maxcompute.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTable as TableProperty };

/**
 * Properties for defining a `Table`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
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
 * Represents a `Table`.
 */
export interface ITable extends ros.IResource {
    readonly props: TableProps;

    /**
     * Attribute Name: Table name
     */
    readonly attrName: ros.IResolvable | string;

    /**
     * Attribute Project: Project name
     */
    readonly attrProject: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MaxCompute::Table`, which is used to create a table.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTable`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
 */
export class Table extends ros.Resource implements ITable {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TableProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Name: Table name
     */
    public readonly attrName: ros.IResolvable | string;

    /**
     * Attribute Project: Project name
     */
    public readonly attrProject: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TableProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTable = new RosTable(this, id,  {
            comment: props.comment,
            project: props.project,
            ifNotExists: props.ifNotExists,
            lifecycle: props.lifecycle,
            schema: props.schema,
            stringSchema: props.stringSchema,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTable;
        this.attrName = rosTable.attrName;
        this.attrProject = rosTable.attrProject;
    }
}
