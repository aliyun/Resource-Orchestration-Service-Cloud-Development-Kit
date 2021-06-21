// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosTableProps`
 *
 * @param properties - the TypeScript properties of a `RosTableProps`
 *
 * @returns the result of the validation.
 */
function RosTablePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('project', ros.requiredValidator)(properties.project));
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('ifNotExists', ros.validateBoolean)(properties.ifNotExists));
    errors.collect(ros.propertyValidator('lifecycle', ros.validateNumber)(properties.lifecycle));
    errors.collect(ros.propertyValidator('schema', RosTable_SchemaPropertyValidator)(properties.schema));
    errors.collect(ros.propertyValidator('stringSchema', ros.validateString)(properties.stringSchema));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if(properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedPattern)({
          data: properties.name,
          reg: /[A-Za-z0-9_]{1,128}/
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosTableProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table` resource
 *
 * @param properties - the TypeScript properties of a `RosTableProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table` resource.
 */
// @ts-ignore TS6133
function rosTablePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTablePropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      Project: ros.stringToRosTemplate(properties.project),
      Comment: ros.stringToRosTemplate(properties.comment),
      IfNotExists: ros.booleanToRosTemplate(properties.ifNotExists),
      Lifecycle: ros.numberToRosTemplate(properties.lifecycle),
      Schema: rosTableSchemaPropertyToRosTemplate(properties.schema),
      StringSchema: ros.stringToRosTemplate(properties.stringSchema),
    };
}

/**
 * A ROS template type:  `ALIYUN::MaxCompute::Table`
 */
export class RosTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Table";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Name: Table name
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute Project: Project name
     */
    public readonly attrProject: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: Table name
     */
    public name: string | ros.IResolvable;

    /**
     * @Property project: Project name, if not provided, will be the default project
     */
    public project: string | ros.IResolvable;

    /**
     * @Property comment: Table comment
     */
    public comment: string | ros.IResolvable | undefined;

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
    public ifNotExists: boolean | ros.IResolvable | undefined;

    /**
     * @Property lifecycle: Table's lifecycle.
     */
    public lifecycle: number | ros.IResolvable | undefined;

    /**
     * @Property schema: Table schema
     */
    public schema: RosTable.SchemaProperty | ros.IResolvable | undefined;

    /**
     * @Property stringSchema: Create a table with field names and field type strings.
     * Example: 'num bigint, num2 double', 'pt string'
     */
    public stringSchema: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::MaxCompute::Table`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTableProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTable.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');
        this.attrProject = this.getAtt('Project');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.project = props.project;
        this.comment = props.comment;
        this.ifNotExists = props.ifNotExists;
        this.lifecycle = props.lifecycle;
        this.schema = props.schema;
        this.stringSchema = props.stringSchema;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            project: this.project,
            comment: this.comment,
            ifNotExists: this.ifNotExists,
            lifecycle: this.lifecycle,
            schema: this.schema,
            stringSchema: this.stringSchema,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTablePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosTable {
    /**
     * @stability external
     */
    export interface ColumnsProperty {
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
/**
 * Determine whether the given properties match those of a `ColumnsProperty`
 *
 * @param properties - the TypeScript properties of a `ColumnsProperty`
 *
 * @returns the result of the validation.
 */
function RosTable_ColumnsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "ColumnsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table.Columns` resource
 *
 * @param properties - the TypeScript properties of a `ColumnsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table.Columns` resource.
 */
// @ts-ignore TS6133
function rosTableColumnsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTable_ColumnsPropertyValidator(properties).assertSuccess();
    return {
      Comment: ros.stringToRosTemplate(properties.comment),
      Type: ros.stringToRosTemplate(properties.type),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosTable {
    /**
     * @stability external
     */
    export interface PartitionsProperty {
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
/**
 * Determine whether the given properties match those of a `PartitionsProperty`
 *
 * @param properties - the TypeScript properties of a `PartitionsProperty`
 *
 * @returns the result of the validation.
 */
function RosTable_PartitionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "PartitionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table.Partitions` resource
 *
 * @param properties - the TypeScript properties of a `PartitionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table.Partitions` resource.
 */
// @ts-ignore TS6133
function rosTablePartitionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTable_PartitionsPropertyValidator(properties).assertSuccess();
    return {
      Comment: ros.stringToRosTemplate(properties.comment),
      Type: ros.stringToRosTemplate(properties.type),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosTable {
    /**
     * @stability external
     */
    export interface SchemaProperty {
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
/**
 * Determine whether the given properties match those of a `SchemaProperty`
 *
 * @param properties - the TypeScript properties of a `SchemaProperty`
 *
 * @returns the result of the validation.
 */
function RosTable_SchemaPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('partitions', ros.listValidator(RosTable_PartitionsPropertyValidator))(properties.partitions));
    errors.collect(ros.propertyValidator('columns', ros.requiredValidator)(properties.columns));
    errors.collect(ros.propertyValidator('columns', ros.listValidator(RosTable_ColumnsPropertyValidator))(properties.columns));
    return errors.wrap('supplied properties not correct for "SchemaProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table.Schema` resource
 *
 * @param properties - the TypeScript properties of a `SchemaProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table.Schema` resource.
 */
// @ts-ignore TS6133
function rosTableSchemaPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTable_SchemaPropertyValidator(properties).assertSuccess();
    return {
      Partitions: ros.listMapper(rosTablePartitionsPropertyToRosTemplate)(properties.partitions),
      Columns: ros.listMapper(rosTableColumnsPropertyToRosTemplate)(properties.columns),
    };
}
