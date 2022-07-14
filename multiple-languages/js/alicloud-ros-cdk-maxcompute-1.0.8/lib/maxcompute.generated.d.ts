import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::MaxCompute::Table`
 */
export interface RosTableProps {
    /**
     * @Property name: Table name
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property project: Project name, if not provided, will be the default project
     */
    readonly project: string | ros.IResolvable;
    /**
     * @Property comment: Table comment
     */
    readonly comment?: string | ros.IResolvable;
    /**
     * @Property ifNotExists: If you create a table by using the name of an existing table and
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
     * @Property lifecycle: Table's lifecycle.
     */
    readonly lifecycle?: number | ros.IResolvable;
    /**
     * @Property schema: Table schema
     */
    readonly schema?: RosTable.SchemaProperty | ros.IResolvable;
    /**
     * @Property stringSchema: Create a table with field names and field type strings.
     * Example: 'num bigint, num2 double', 'pt string'
     */
    readonly stringSchema?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::MaxCompute::Table`
 */
export declare class RosTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Table";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Name: Table name
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute Project: Project name
     */
    readonly attrProject: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: Table name
     */
    name: string | ros.IResolvable;
    /**
     * @Property project: Project name, if not provided, will be the default project
     */
    project: string | ros.IResolvable;
    /**
     * @Property comment: Table comment
     */
    comment: string | ros.IResolvable | undefined;
    /**
     * @Property ifNotExists: If you create a table by using the name of an existing table and
     * the parameter set to false, an error is returned.
     * If you specify the if not exists parameter, a success message
     * is returned when you create a table by using the name of an
     * existing table. The success message is returned even if the
     * schema of the existing table is different from that of the table you want to create.
     * If you create a table by using the name of an existing table,
     * the table is not created and the metadata of the existing table is not changed.
     */
    ifNotExists: boolean | ros.IResolvable | undefined;
    /**
     * @Property lifecycle: Table's lifecycle.
     */
    lifecycle: number | ros.IResolvable | undefined;
    /**
     * @Property schema: Table schema
     */
    schema: RosTable.SchemaProperty | ros.IResolvable | undefined;
    /**
     * @Property stringSchema: Create a table with field names and field type strings.
     * Example: 'num bigint, num2 double', 'pt string'
     */
    stringSchema: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::MaxCompute::Table`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTableProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosTable {
    /**
     * @stability external
     */
    interface ColumnsProperty {
        /**
         * @Property comment: Column comment.
         */
        readonly comment?: string | ros.IResolvable;
        /**
         * @Property type: Column type.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property name: Column name.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosTable {
    /**
     * @stability external
     */
    interface PartitionsProperty {
        /**
         * @Property comment: Partition comment.
         */
        readonly comment?: string | ros.IResolvable;
        /**
         * @Property type: Partition type.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property name: Partition name.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosTable {
    /**
     * @stability external
     */
    interface SchemaProperty {
        /**
         * @Property partitions:
         */
        readonly partitions?: Array<RosTable.PartitionsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property columns:
         */
        readonly columns: Array<RosTable.ColumnsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
