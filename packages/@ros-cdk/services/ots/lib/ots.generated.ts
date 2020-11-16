// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::OTS::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property instanceName: The name of the instance.
     */
    readonly instanceName: string;

    /**
     * @Property clusterType: Cluster type, the default is SSD.
     */
    readonly clusterType?: string;

    /**
     * @Property description: Instance description.
     */
    readonly description?: string;

    /**
     * @Property network: Instance network type, default is NORMAL.
     */
    readonly network?: string;

    /**
     * @Property tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if(properties.instanceName && (typeof properties.instanceName) !== 'object') {
        errors.collect(ros.propertyValidator('instanceName', ros.validateAllowedPattern)({
          data: properties.instanceName,
          reg: /[a-zA-Z][-a-zA-Z0-9]{1,14}[a-zA-Z0-9]/
        }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.network && (typeof properties.network) !== 'object') {
        errors.collect(ros.propertyValidator('network', ros.validateAllowedValues)({
          data: properties.network,
          allowedValues: ["NORMAL","VPC","VPC_CONSOLE"],
        }));
    }
    errors.collect(ros.propertyValidator('network', ros.validateString)(properties.network));
    if(properties.clusterType && (typeof properties.clusterType) !== 'object') {
        errors.collect(ros.propertyValidator('clusterType', ros.validateAllowedValues)({
          data: properties.clusterType,
          allowedValues: ["SSD","HYBRID"],
        }));
    }
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      ClusterType: ros.stringToRosTemplate(properties.clusterType),
      Description: ros.stringToRosTemplate(properties.description),
      Network: ros.stringToRosTemplate(properties.network),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::OTS::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceName: Instance name
     */
    public readonly attrInstanceName: any;

    /**
     * @Attribute PrivateEndpoint: Private endpoint
     */
    public readonly attrPrivateEndpoint: any;

    /**
     * @Attribute PublicEndpoint: Public endpoint
     */
    public readonly attrPublicEndpoint: any;

    /**
     * @Attribute VpcEndpoint: Vpc endpoint
     */
    public readonly attrVpcEndpoint: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceName: The name of the instance.
     */
    public instanceName: string;

    /**
     * @Property clusterType: Cluster type, the default is SSD.
     */
    public clusterType: string | undefined;

    /**
     * @Property description: Instance description.
     */
    public description: string | undefined;

    /**
     * @Property network: Instance network type, default is NORMAL.
     */
    public network: string | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * Create a new `ALIYUN::OTS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceName = ros.Token.asString(this.getAtt('InstanceName'));
        this.attrPrivateEndpoint = ros.Token.asString(this.getAtt('PrivateEndpoint'));
        this.attrPublicEndpoint = ros.Token.asString(this.getAtt('PublicEndpoint'));
        this.attrVpcEndpoint = ros.Token.asString(this.getAtt('VpcEndpoint'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceName = props.instanceName;
        this.clusterType = props.clusterType;
        this.description = props.description;
        this.network = props.network;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::OTS::Instance", props.tags, { tagPropertyName: 'tags' });
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceName: this.instanceName,
            clusterType: this.clusterType,
            description: this.description,
            network: this.network,
            tags: this.tags.renderTags(),
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::OTS::Table`
 */
export interface RosTableProps {

    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    readonly instanceName: string;

    /**
     * @Property primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
     */
    readonly primaryKey: Array<RosTable.PrimaryKeyProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tableName: The table name of the OTS instance.
     */
    readonly tableName: string;

    /**
     * @Property columns: Attribute column for table store.
     */
    readonly columns?: Array<RosTable.ColumnsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
     */
    readonly deviationCellVersionInSec?: number;

    /**
     * @Property maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
     */
    readonly maxVersions?: number;

    /**
     * @Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
     */
    readonly reservedThroughput?: RosTable.ReservedThroughputProperty | ros.IResolvable;

    /**
     * @Property secondaryIndices: The secondary indices of the table.
     */
    readonly secondaryIndices?: Array<RosTable.SecondaryIndicesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
     */
    readonly timeToLive?: number;
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
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if(properties.instanceName && (typeof properties.instanceName) !== 'object') {
        errors.collect(ros.propertyValidator('instanceName', ros.validateAllowedPattern)({
          data: properties.instanceName,
          reg: /[a-zA-Z][-a-zA-Z0-9]{1,14}[a-zA-Z0-9]/
        }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('tableName', ros.requiredValidator)(properties.tableName));
    if(properties.tableName && (typeof properties.tableName) !== 'object') {
        errors.collect(ros.propertyValidator('tableName', ros.validateAllowedPattern)({
          data: properties.tableName,
          reg: /[_a-zA-Z][_a-zA-Z0-9]{0,254}/
        }));
    }
    errors.collect(ros.propertyValidator('tableName', ros.validateString)(properties.tableName));
    if(properties.timeToLive && (typeof properties.timeToLive) !== 'object') {
        errors.collect(ros.propertyValidator('timeToLive', ros.validateRange)({
            data: properties.timeToLive,
            min: -1,
            max: 2147483647,
          }));
    }
    errors.collect(ros.propertyValidator('timeToLive', ros.validateNumber)(properties.timeToLive));
    if(properties.maxVersions && (typeof properties.maxVersions) !== 'object') {
        errors.collect(ros.propertyValidator('maxVersions', ros.validateRange)({
            data: properties.maxVersions,
            min: 1,
            max: 2147483647,
          }));
    }
    errors.collect(ros.propertyValidator('maxVersions', ros.validateNumber)(properties.maxVersions));
    errors.collect(ros.propertyValidator('secondaryIndices', ros.listValidator(RosTable_SecondaryIndicesPropertyValidator))(properties.secondaryIndices));
    if(properties.deviationCellVersionInSec && (typeof properties.deviationCellVersionInSec) !== 'object') {
        errors.collect(ros.propertyValidator('deviationCellVersionInSec', ros.validateRange)({
            data: properties.deviationCellVersionInSec,
            min: 1,
            max: 9223372036854775807,
          }));
    }
    errors.collect(ros.propertyValidator('deviationCellVersionInSec', ros.validateNumber)(properties.deviationCellVersionInSec));
    errors.collect(ros.propertyValidator('primaryKey', ros.requiredValidator)(properties.primaryKey));
    if(properties.primaryKey && (Array.isArray(properties.primaryKey) || (typeof properties.primaryKey) === 'string')) {
        errors.collect(ros.propertyValidator('primaryKey', ros.validateLength)({
            data: properties.primaryKey.length,
            min: 1,
            max: 4,
          }));
    }
    errors.collect(ros.propertyValidator('primaryKey', ros.listValidator(RosTable_PrimaryKeyPropertyValidator))(properties.primaryKey));
    errors.collect(ros.propertyValidator('columns', ros.listValidator(RosTable_ColumnsPropertyValidator))(properties.columns));
    errors.collect(ros.propertyValidator('reservedThroughput', RosTable_ReservedThroughputPropertyValidator)(properties.reservedThroughput));
    return errors.wrap('supplied properties not correct for "RosTableProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::Table` resource
 *
 * @param properties - the TypeScript properties of a `RosTableProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::Table` resource.
 */
// @ts-ignore TS6133
function rosTablePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTablePropsValidator(properties).assertSuccess();
    }
    return {
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      PrimaryKey: ros.listMapper(rosTablePrimaryKeyPropertyToRosTemplate)(properties.primaryKey),
      TableName: ros.stringToRosTemplate(properties.tableName),
      Columns: ros.listMapper(rosTableColumnsPropertyToRosTemplate)(properties.columns),
      DeviationCellVersionInSec: ros.numberToRosTemplate(properties.deviationCellVersionInSec),
      MaxVersions: ros.numberToRosTemplate(properties.maxVersions),
      ReservedThroughput: rosTableReservedThroughputPropertyToRosTemplate(properties.reservedThroughput),
      SecondaryIndices: ros.listMapper(rosTableSecondaryIndicesPropertyToRosTemplate)(properties.secondaryIndices),
      TimeToLive: ros.numberToRosTemplate(properties.timeToLive),
    };
}

/**
 * A ROS template type:  `ALIYUN::OTS::Table`
 */
export class RosTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::Table";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute TableName: Table name
     */
    public readonly attrTableName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    public instanceName: string;

    /**
     * @Property primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
     */
    public primaryKey: Array<RosTable.PrimaryKeyProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tableName: The table name of the OTS instance.
     */
    public tableName: string;

    /**
     * @Property columns: Attribute column for table store.
     */
    public columns: Array<RosTable.ColumnsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
     */
    public deviationCellVersionInSec: number | undefined;

    /**
     * @Property maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
     */
    public maxVersions: number | undefined;

    /**
     * @Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
     */
    public reservedThroughput: RosTable.ReservedThroughputProperty | ros.IResolvable | undefined;

    /**
     * @Property secondaryIndices: The secondary indices of the table.
     */
    public secondaryIndices: Array<RosTable.SecondaryIndicesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
     */
    public timeToLive: number | undefined;

    /**
     * Create a new `ALIYUN::OTS::Table`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTableProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTable.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTableName = ros.Token.asString(this.getAtt('TableName'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceName = props.instanceName;
        this.primaryKey = props.primaryKey;
        this.tableName = props.tableName;
        this.columns = props.columns;
        this.deviationCellVersionInSec = props.deviationCellVersionInSec;
        this.maxVersions = props.maxVersions;
        this.reservedThroughput = props.reservedThroughput;
        this.secondaryIndices = props.secondaryIndices;
        this.timeToLive = props.timeToLive;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceName: this.instanceName,
            primaryKey: this.primaryKey,
            tableName: this.tableName,
            columns: this.columns,
            deviationCellVersionInSec: this.deviationCellVersionInSec,
            maxVersions: this.maxVersions,
            reservedThroughput: this.reservedThroughput,
            secondaryIndices: this.secondaryIndices,
            timeToLive: this.timeToLive,
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
         * @Property type: The type of the column.
         */
        readonly type: string;
        /**
         * @Property name: The column name of the column.
         */
        readonly name: string;
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
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["INTEGER","STRING","BINARY","BOOLEAN","DOUBLE"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if(properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedPattern)({
          data: properties.name,
          reg: /[_a-zA-Z][_a-zA-Z0-9]{0,254}/
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "ColumnsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::Table.Columns` resource
 *
 * @param properties - the TypeScript properties of a `ColumnsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::Table.Columns` resource.
 */
// @ts-ignore TS6133
function rosTableColumnsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTable_ColumnsPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosTable {
    /**
     * @stability external
     */
    export interface PrimaryKeyProperty {
        /**
         * @Property type: Type for primary key. Only INTEGER, STRING or BINARY is allowed.
         */
        readonly type: string;
        /**
         * @Property name: Name for primary key.
         */
        readonly name: string;
    }
}
/**
 * Determine whether the given properties match those of a `PrimaryKeyProperty`
 *
 * @param properties - the TypeScript properties of a `PrimaryKeyProperty`
 *
 * @returns the result of the validation.
 */
function RosTable_PrimaryKeyPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["INTEGER","STRING","BINARY"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if(properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedPattern)({
          data: properties.name,
          reg: /[_a-zA-Z][_a-zA-Z0-9]{0,254}/
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "PrimaryKeyProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::Table.PrimaryKey` resource
 *
 * @param properties - the TypeScript properties of a `PrimaryKeyProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::Table.PrimaryKey` resource.
 */
// @ts-ignore TS6133
function rosTablePrimaryKeyPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTable_PrimaryKeyPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosTable {
    /**
     * @stability external
     */
    export interface ReservedThroughputProperty {
        /**
         * @Property read: The read service capability unit consumed by this operation or the reserved read throughput of the table. Default to 0.
         */
        readonly read: number;
        /**
         * @Property write: The write service capability unit consumed by this operation or the reserved write throughput of the table. Default to 0.
         */
        readonly write: number;
    }
}
/**
 * Determine whether the given properties match those of a `ReservedThroughputProperty`
 *
 * @param properties - the TypeScript properties of a `ReservedThroughputProperty`
 *
 * @returns the result of the validation.
 */
function RosTable_ReservedThroughputPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('read', ros.requiredValidator)(properties.read));
    if(properties.read && (typeof properties.read) !== 'object') {
        errors.collect(ros.propertyValidator('read', ros.validateRange)({
            data: properties.read,
            min: 0,
            max: 5000,
          }));
    }
    errors.collect(ros.propertyValidator('read', ros.validateNumber)(properties.read));
    errors.collect(ros.propertyValidator('write', ros.requiredValidator)(properties.write));
    if(properties.write && (typeof properties.write) !== 'object') {
        errors.collect(ros.propertyValidator('write', ros.validateRange)({
            data: properties.write,
            min: 0,
            max: 5000,
          }));
    }
    errors.collect(ros.propertyValidator('write', ros.validateNumber)(properties.write));
    return errors.wrap('supplied properties not correct for "ReservedThroughputProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::Table.ReservedThroughput` resource
 *
 * @param properties - the TypeScript properties of a `ReservedThroughputProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::Table.ReservedThroughput` resource.
 */
// @ts-ignore TS6133
function rosTableReservedThroughputPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTable_ReservedThroughputPropertyValidator(properties).assertSuccess();
    return {
      Read: ros.numberToRosTemplate(properties.read),
      Write: ros.numberToRosTemplate(properties.write),
    };
}

export namespace RosTable {
    /**
     * @stability external
     */
    export interface SecondaryIndicesProperty {
        /**
         * @Property indexName: The index name.
         */
        readonly indexName: string;
        /**
         * @Property columns: The columns of the index.
         */
        readonly columns: string[];
        /**
         * @Property primaryKeys: The primary keys of the index.
         */
        readonly primaryKeys: string[];
        /**
         * @Property indexType: The index type
         */
        readonly indexType?: string;
    }
}
/**
 * Determine whether the given properties match those of a `SecondaryIndicesProperty`
 *
 * @param properties - the TypeScript properties of a `SecondaryIndicesProperty`
 *
 * @returns the result of the validation.
 */
function RosTable_SecondaryIndicesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('indexName', ros.requiredValidator)(properties.indexName));
    errors.collect(ros.propertyValidator('indexName', ros.validateString)(properties.indexName));
    errors.collect(ros.propertyValidator('columns', ros.requiredValidator)(properties.columns));
    errors.collect(ros.propertyValidator('columns', ros.listValidator(ros.validateString))(properties.columns));
    errors.collect(ros.propertyValidator('primaryKeys', ros.requiredValidator)(properties.primaryKeys));
    errors.collect(ros.propertyValidator('primaryKeys', ros.listValidator(ros.validateString))(properties.primaryKeys));
    if(properties.indexType && (typeof properties.indexType) !== 'object') {
        errors.collect(ros.propertyValidator('indexType', ros.validateAllowedValues)({
          data: properties.indexType,
          allowedValues: ["Global","Local"],
        }));
    }
    errors.collect(ros.propertyValidator('indexType', ros.validateString)(properties.indexType));
    return errors.wrap('supplied properties not correct for "SecondaryIndicesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::Table.SecondaryIndices` resource
 *
 * @param properties - the TypeScript properties of a `SecondaryIndicesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::Table.SecondaryIndices` resource.
 */
// @ts-ignore TS6133
function rosTableSecondaryIndicesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTable_SecondaryIndicesPropertyValidator(properties).assertSuccess();
    return {
      IndexName: ros.stringToRosTemplate(properties.indexName),
      Columns: ros.listMapper(ros.stringToRosTemplate)(properties.columns),
      PrimaryKeys: ros.listMapper(ros.stringToRosTemplate)(properties.primaryKeys),
      IndexType: ros.stringToRosTemplate(properties.indexType),
    };
}

/**
 * Properties for defining a `ALIYUN::OTS::VpcBinder`
 */
export interface RosVpcBinderProps {

    /**
     * @Property instanceName: Instance name
     */
    readonly instanceName: string;

    /**
     * @Property vpcs: Vpc binding configuration.
     */
    readonly vpcs: Array<RosVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVpcBinderProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcBinderProps`
 *
 * @returns the result of the validation.
 */
function RosVpcBinderPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('vpcs', ros.requiredValidator)(properties.vpcs));
    if(properties.vpcs && (Array.isArray(properties.vpcs) || (typeof properties.vpcs) === 'string')) {
        errors.collect(ros.propertyValidator('vpcs', ros.validateLength)({
            data: properties.vpcs.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('vpcs', ros.listValidator(RosVpcBinder_VpcsPropertyValidator))(properties.vpcs));
    return errors.wrap('supplied properties not correct for "RosVpcBinderProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::VpcBinder` resource
 *
 * @param properties - the TypeScript properties of a `RosVpcBinderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::VpcBinder` resource.
 */
// @ts-ignore TS6133
function rosVpcBinderPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpcBinderPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      Vpcs: ros.listMapper(rosVpcBinderVpcsPropertyToRosTemplate)(properties.vpcs),
    };
}

/**
 * A ROS template type:  `ALIYUN::OTS::VpcBinder`
 */
export class RosVpcBinder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::VpcBinder";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Domains: The domain names used to access the OTS instance in the VPC.
     */
    public readonly attrDomains: any;

    /**
     * @Attribute Endpoints: Private network addresses used to access the OTS instance in the VPC.
     */
    public readonly attrEndpoints: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceName: Instance name
     */
    public instanceName: string;

    /**
     * @Property vpcs: Vpc binding configuration.
     */
    public vpcs: Array<RosVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Create a new `ALIYUN::OTS::VpcBinder`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcBinderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpcBinder.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomains = ros.Token.asString(this.getAtt('Domains'));
        this.attrEndpoints = ros.Token.asString(this.getAtt('Endpoints'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceName = props.instanceName;
        this.vpcs = props.vpcs;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceName: this.instanceName,
            vpcs: this.vpcs,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpcBinderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosVpcBinder {
    /**
     * @stability external
     */
    export interface VpcsProperty {
        /**
         * @Property vpcId: Vpc Id.
         */
        readonly vpcId: string;
        /**
         * @Property instanceVpcName: Custom name, need to be unique under the OTS instance.
         */
        readonly instanceVpcName: string;
        /**
         * @Property network: Instance network type. The values are as follows:
     * 1, the NORMAL instance does not limit the source of the request. (Defaults)
     * 2. A VPC instance only allows requests from all VPCs it is bound to.
     * 3, VPC_CONSOLE instance only allows requests from the console and all VPCs it is bound to
         */
        readonly network: string;
        /**
         * @Property virtualSwitchId: vSwitch Id.
         */
        readonly virtualSwitchId: string;
    }
}
/**
 * Determine whether the given properties match those of a `VpcsProperty`
 *
 * @param properties - the TypeScript properties of a `VpcsProperty`
 *
 * @returns the result of the validation.
 */
function RosVpcBinder_VpcsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('instanceVpcName', ros.requiredValidator)(properties.instanceVpcName));
    if(properties.instanceVpcName && (typeof properties.instanceVpcName) !== 'object') {
        errors.collect(ros.propertyValidator('instanceVpcName', ros.validateAllowedPattern)({
          data: properties.instanceVpcName,
          reg: /[a-zA-Z][a-zA-Z0-9]{2,15}/
        }));
    }
    errors.collect(ros.propertyValidator('instanceVpcName', ros.validateString)(properties.instanceVpcName));
    errors.collect(ros.propertyValidator('network', ros.requiredValidator)(properties.network));
    if(properties.network && (typeof properties.network) !== 'object') {
        errors.collect(ros.propertyValidator('network', ros.validateAllowedValues)({
          data: properties.network,
          allowedValues: ["NORMAL","VPC","VPC_CONSOLE"],
        }));
    }
    errors.collect(ros.propertyValidator('network', ros.validateString)(properties.network));
    errors.collect(ros.propertyValidator('virtualSwitchId', ros.requiredValidator)(properties.virtualSwitchId));
    errors.collect(ros.propertyValidator('virtualSwitchId', ros.validateString)(properties.virtualSwitchId));
    return errors.wrap('supplied properties not correct for "VpcsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::VpcBinder.Vpcs` resource
 *
 * @param properties - the TypeScript properties of a `VpcsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::VpcBinder.Vpcs` resource.
 */
// @ts-ignore TS6133
function rosVpcBinderVpcsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVpcBinder_VpcsPropertyValidator(properties).assertSuccess();
    return {
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      InstanceVpcName: ros.stringToRosTemplate(properties.instanceVpcName),
      Network: ros.stringToRosTemplate(properties.network),
      VirtualSwitchId: ros.stringToRosTemplate(properties.virtualSwitchId),
    };
}
