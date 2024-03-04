// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
 */
export interface RosProjectProps {

    /**
     * @Property name: The name of the project.
     * It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property chargeType: Quota payment type, support PayAsYouGo, Subscription.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property comment: The comments of project.
     */
    readonly comment?: string | ros.IResolvable;

    /**
     * @Property defaultQuota: Default Computing Resource Group.
     */
    readonly defaultQuota?: string | ros.IResolvable;

    /**
     * @Property ipWhiteList: IP whitelist.
     */
    readonly ipWhiteList?: RosProject.IpWhiteListProperty | ros.IResolvable;

    /**
     * @Property properties: Project base attributes.
     */
    readonly properties?: RosProject.PropertiesProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the result of the validation.
 */
function RosProjectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('defaultQuota', ros.validateString)(properties.defaultQuota));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('ipWhiteList', RosProject_IpWhiteListPropertyValidator)(properties.ipWhiteList));
    errors.collect(ros.propertyValidator('properties', RosProject_PropertiesPropertyValidator)(properties.properties));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if(properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedPattern)({
          data: properties.name,
          reg: /^[a-z][a-z0-9_]{2,27}$/
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project` resource.
 */
// @ts-ignore TS6133
function rosProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      Comment: ros.stringToRosTemplate(properties.comment),
      DefaultQuota: ros.stringToRosTemplate(properties.defaultQuota),
      IpWhiteList: rosProjectIpWhiteListPropertyToRosTemplate(properties.ipWhiteList),
      Properties: rosProjectPropertiesPropertyToRosTemplate(properties.properties),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MaxCompute::Project`, which is used to create a MaxCompute project.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Project";

    /**
     * @Attribute Name: The name of the project.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the project.
     * It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
     */
    public name: string | ros.IResolvable;

    /**
     * @Property chargeType: Quota payment type, support PayAsYouGo, Subscription.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property comment: The comments of project.
     */
    public comment: string | ros.IResolvable | undefined;

    /**
     * @Property defaultQuota: Default Computing Resource Group.
     */
    public defaultQuota: string | ros.IResolvable | undefined;

    /**
     * @Property ipWhiteList: IP whitelist.
     */
    public ipWhiteList: RosProject.IpWhiteListProperty | ros.IResolvable | undefined;

    /**
     * @Property properties: Project base attributes.
     */
    public properties: RosProject.PropertiesProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.chargeType = props.chargeType;
        this.comment = props.comment;
        this.defaultQuota = props.defaultQuota;
        this.ipWhiteList = props.ipWhiteList;
        this.properties = props.properties;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            chargeType: this.chargeType,
            comment: this.comment,
            defaultQuota: this.defaultQuota,
            ipWhiteList: this.ipWhiteList,
            properties: this.properties,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosProject {
    /**
     * @stability external
     */
    export interface EncryptionProperty {
        /**
         * @Property enable: Whether to open encryption.
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property algorithm: Encryption Algorithm.
         */
        readonly algorithm?: string | ros.IResolvable;
        /**
         * @Property key: Encryption algorithm key.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EncryptionProperty`
 *
 * @param properties - the TypeScript properties of a `EncryptionProperty`
 *
 * @returns the result of the validation.
 */
function RosProject_EncryptionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('algorithm', ros.validateString)(properties.algorithm));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "EncryptionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project.Encryption` resource
 *
 * @param properties - the TypeScript properties of a `EncryptionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project.Encryption` resource.
 */
// @ts-ignore TS6133
function rosProjectEncryptionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosProject_EncryptionPropertyValidator(properties).assertSuccess();
    return {
      Enable: ros.booleanToRosTemplate(properties.enable),
      Algorithm: ros.stringToRosTemplate(properties.algorithm),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosProject {
    /**
     * @stability external
     */
    export interface IpWhiteListProperty {
        /**
         * @Property vpcIpList: VPC network whitelist. Separate multiple items with commas.
         */
        readonly vpcIpList?: string | ros.IResolvable;
        /**
         * @Property ipList: Classic network IP white list. Separate multiple items with commas.
         */
        readonly ipList?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IpWhiteListProperty`
 *
 * @param properties - the TypeScript properties of a `IpWhiteListProperty`
 *
 * @returns the result of the validation.
 */
function RosProject_IpWhiteListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcIpList', ros.validateString)(properties.vpcIpList));
    errors.collect(ros.propertyValidator('ipList', ros.validateString)(properties.ipList));
    return errors.wrap('supplied properties not correct for "IpWhiteListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project.IpWhiteList` resource
 *
 * @param properties - the TypeScript properties of a `IpWhiteListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project.IpWhiteList` resource.
 */
// @ts-ignore TS6133
function rosProjectIpWhiteListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosProject_IpWhiteListPropertyValidator(properties).assertSuccess();
    return {
      VpcIpList: ros.stringToRosTemplate(properties.vpcIpList),
      IpList: ros.stringToRosTemplate(properties.ipList),
    };
}

export namespace RosProject {
    /**
     * @stability external
     */
    export interface PropertiesProperty {
        /**
         * @Property sqlMeteringMax: SQL charge limit.
         */
        readonly sqlMeteringMax?: number | ros.IResolvable;
        /**
         * @Property typeSystem: Type system.
         */
        readonly typeSystem?: string | ros.IResolvable;
        /**
         * @Property retentionDays: Job default retention time.
         */
        readonly retentionDays?: number | ros.IResolvable;
        /**
         * @Property encryption: Whether encryption is turned on.
         */
        readonly encryption?: RosProject.EncryptionProperty | ros.IResolvable;
        /**
         * @Property allowFullScan: Whether to allow full table scan.
         */
        readonly allowFullScan?: boolean | ros.IResolvable;
        /**
         * @Property enableDecimal2: Whether to turn on Decimal2.0.
         */
        readonly enableDecimal2?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PropertiesProperty`
 *
 * @param properties - the TypeScript properties of a `PropertiesProperty`
 *
 * @returns the result of the validation.
 */
function RosProject_PropertiesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sqlMeteringMax', ros.validateNumber)(properties.sqlMeteringMax));
    if(properties.typeSystem && (typeof properties.typeSystem) !== 'object') {
        errors.collect(ros.propertyValidator('typeSystem', ros.validateAllowedValues)({
          data: properties.typeSystem,
          allowedValues: ["1","2","hive"],
        }));
    }
    errors.collect(ros.propertyValidator('typeSystem', ros.validateString)(properties.typeSystem));
    errors.collect(ros.propertyValidator('retentionDays', ros.validateNumber)(properties.retentionDays));
    errors.collect(ros.propertyValidator('encryption', RosProject_EncryptionPropertyValidator)(properties.encryption));
    errors.collect(ros.propertyValidator('allowFullScan', ros.validateBoolean)(properties.allowFullScan));
    errors.collect(ros.propertyValidator('enableDecimal2', ros.validateBoolean)(properties.enableDecimal2));
    return errors.wrap('supplied properties not correct for "PropertiesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project.Properties` resource
 *
 * @param properties - the TypeScript properties of a `PropertiesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project.Properties` resource.
 */
// @ts-ignore TS6133
function rosProjectPropertiesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosProject_PropertiesPropertyValidator(properties).assertSuccess();
    return {
      SqlMeteringMax: ros.numberToRosTemplate(properties.sqlMeteringMax),
      TypeSystem: ros.stringToRosTemplate(properties.typeSystem),
      RetentionDays: ros.numberToRosTemplate(properties.retentionDays),
      Encryption: rosProjectEncryptionPropertyToRosTemplate(properties.encryption),
      AllowFullScan: ros.booleanToRosTemplate(properties.allowFullScan),
      EnableDecimal2: ros.booleanToRosTemplate(properties.enableDecimal2),
    };
}

/**
 * Properties for defining a `RosTable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MaxCompute::Table`, which is used to create a table.
 * @Note This class does not contain additional functions, so it is recommended to use the `Table` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
 */
export class RosTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Table";

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
