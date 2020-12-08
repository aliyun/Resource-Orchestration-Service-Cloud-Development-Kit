"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosVpcBinder = exports.RosTable = exports.RosSearchIndex = exports.RosInstance = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if (properties.instanceName && (typeof properties.instanceName) !== 'object') {
        errors.collect(ros.propertyValidator('instanceName', ros.validateAllowedPattern)({
            data: properties.instanceName,
            reg: /[a-zA-Z][-a-zA-Z0-9]{1,14}[a-zA-Z0-9]/
        }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.network && (typeof properties.network) !== 'object') {
        errors.collect(ros.propertyValidator('network', ros.validateAllowedValues)({
            data: properties.network,
            allowedValues: ["NORMAL", "VPC", "VPC_CONSOLE"],
        }));
    }
    errors.collect(ros.propertyValidator('network', ros.validateString)(properties.network));
    if (properties.clusterType && (typeof properties.clusterType) !== 'object') {
        errors.collect(ros.propertyValidator('clusterType', ros.validateAllowedValues)({
            data: properties.clusterType,
            allowedValues: ["SSD", "HYBRID"],
        }));
    }
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
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
function rosInstancePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosInstance extends ros.RosResource {
    /**
     * Create a new `ALIYUN::OTS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            instanceName: this.instanceName,
            clusterType: this.clusterType,
            description: this.description,
            network: this.network,
            tags: this.tags.renderTags(),
        };
    }
    renderProperties(props) {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosInstance = RosInstance;
/**
 * The resource type name for this resource class.
 */
RosInstance.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::Instance";
/**
 * Determine whether the given properties match those of a `RosSearchIndexProps`
 *
 * @param properties - the TypeScript properties of a `RosSearchIndexProps`
 *
 * @returns the result of the validation.
 */
function RosSearchIndexPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('indexName', ros.requiredValidator)(properties.indexName));
    errors.collect(ros.propertyValidator('indexName', ros.validateString)(properties.indexName));
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if (properties.instanceName && (typeof properties.instanceName) !== 'object') {
        errors.collect(ros.propertyValidator('instanceName', ros.validateAllowedPattern)({
            data: properties.instanceName,
            reg: /[a-zA-Z][-a-zA-Z0-9]{1,14}[a-zA-Z0-9]/
        }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('tableName', ros.requiredValidator)(properties.tableName));
    if (properties.tableName && (typeof properties.tableName) !== 'object') {
        errors.collect(ros.propertyValidator('tableName', ros.validateAllowedPattern)({
            data: properties.tableName,
            reg: /[_a-zA-Z][_a-zA-Z0-9]{0,254}/
        }));
    }
    errors.collect(ros.propertyValidator('tableName', ros.validateString)(properties.tableName));
    errors.collect(ros.propertyValidator('fieldSchemas', ros.requiredValidator)(properties.fieldSchemas));
    errors.collect(ros.propertyValidator('fieldSchemas', ros.listValidator(ros.validateAny))(properties.fieldSchemas));
    errors.collect(ros.propertyValidator('indexSort', RosSearchIndex_IndexSortPropertyValidator)(properties.indexSort));
    errors.collect(ros.propertyValidator('indexSetting', RosSearchIndex_IndexSettingPropertyValidator)(properties.indexSetting));
    return errors.wrap('supplied properties not correct for "RosSearchIndexProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex` resource
 *
 * @param properties - the TypeScript properties of a `RosSearchIndexProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex` resource.
 */
// @ts-ignore TS6133
function rosSearchIndexPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSearchIndexPropsValidator(properties).assertSuccess();
    }
    return {
        FieldSchemas: ros.listMapper(ros.objectToRosTemplate)(properties.fieldSchemas),
        IndexName: ros.stringToRosTemplate(properties.indexName),
        InstanceName: ros.stringToRosTemplate(properties.instanceName),
        TableName: ros.stringToRosTemplate(properties.tableName),
        IndexSetting: rosSearchIndexIndexSettingPropertyToRosTemplate(properties.indexSetting),
        IndexSort: rosSearchIndexIndexSortPropertyToRosTemplate(properties.indexSort),
    };
}
/**
 * A ROS template type:  `ALIYUN::OTS::SearchIndex`
 */
class RosSearchIndex extends ros.RosResource {
    /**
     * Create a new `ALIYUN::OTS::SearchIndex`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSearchIndex.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIndexName = ros.Token.asString(this.getAtt('IndexName'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.fieldSchemas = props.fieldSchemas;
        this.indexName = props.indexName;
        this.instanceName = props.instanceName;
        this.tableName = props.tableName;
        this.indexSetting = props.indexSetting;
        this.indexSort = props.indexSort;
    }
    get rosProperties() {
        return {
            fieldSchemas: this.fieldSchemas,
            indexName: this.indexName,
            instanceName: this.instanceName,
            tableName: this.tableName,
            indexSetting: this.indexSetting,
            indexSort: this.indexSort,
        };
    }
    renderProperties(props) {
        return rosSearchIndexPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSearchIndex = RosSearchIndex;
/**
 * The resource type name for this resource class.
 */
RosSearchIndex.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::SearchIndex";
/**
 * Determine whether the given properties match those of a `FieldSortProperty`
 *
 * @param properties - the TypeScript properties of a `FieldSortProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_FieldSortPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sortMode', ros.validateString)(properties.sortMode));
    errors.collect(ros.propertyValidator('sortOrder', ros.validateString)(properties.sortOrder));
    errors.collect(ros.propertyValidator('fieldName', ros.requiredValidator)(properties.fieldName));
    errors.collect(ros.propertyValidator('fieldName', ros.validateString)(properties.fieldName));
    return errors.wrap('supplied properties not correct for "FieldSortProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.FieldSort` resource
 *
 * @param properties - the TypeScript properties of a `FieldSortProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.FieldSort` resource.
 */
// @ts-ignore TS6133
function rosSearchIndexFieldSortPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSearchIndex_FieldSortPropertyValidator(properties).assertSuccess();
    return {
        SortMode: ros.stringToRosTemplate(properties.sortMode),
        SortOrder: ros.stringToRosTemplate(properties.sortOrder),
        FieldName: ros.stringToRosTemplate(properties.fieldName),
    };
}
/**
 * Determine whether the given properties match those of a `GeoDistanceSortProperty`
 *
 * @param properties - the TypeScript properties of a `GeoDistanceSortProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_GeoDistanceSortPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('points', ros.requiredValidator)(properties.points));
    errors.collect(ros.propertyValidator('points', ros.listValidator(ros.validateAny))(properties.points));
    errors.collect(ros.propertyValidator('sortMode', ros.validateString)(properties.sortMode));
    errors.collect(ros.propertyValidator('sortOrder', ros.validateString)(properties.sortOrder));
    errors.collect(ros.propertyValidator('fieldName', ros.requiredValidator)(properties.fieldName));
    errors.collect(ros.propertyValidator('fieldName', ros.validateString)(properties.fieldName));
    return errors.wrap('supplied properties not correct for "GeoDistanceSortProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.GeoDistanceSort` resource
 *
 * @param properties - the TypeScript properties of a `GeoDistanceSortProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.GeoDistanceSort` resource.
 */
// @ts-ignore TS6133
function rosSearchIndexGeoDistanceSortPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSearchIndex_GeoDistanceSortPropertyValidator(properties).assertSuccess();
    return {
        Points: ros.listMapper(ros.objectToRosTemplate)(properties.points),
        SortMode: ros.stringToRosTemplate(properties.sortMode),
        SortOrder: ros.stringToRosTemplate(properties.sortOrder),
        FieldName: ros.stringToRosTemplate(properties.fieldName),
    };
}
/**
 * Determine whether the given properties match those of a `IndexSettingProperty`
 *
 * @param properties - the TypeScript properties of a `IndexSettingProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_IndexSettingPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('routingFields', ros.listValidator(ros.validateAny))(properties.routingFields));
    return errors.wrap('supplied properties not correct for "IndexSettingProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.IndexSetting` resource
 *
 * @param properties - the TypeScript properties of a `IndexSettingProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.IndexSetting` resource.
 */
// @ts-ignore TS6133
function rosSearchIndexIndexSettingPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSearchIndex_IndexSettingPropertyValidator(properties).assertSuccess();
    return {
        RoutingFields: ros.listMapper(ros.objectToRosTemplate)(properties.routingFields),
    };
}
/**
 * Determine whether the given properties match those of a `IndexSortProperty`
 *
 * @param properties - the TypeScript properties of a `IndexSortProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_IndexSortPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sorters', ros.requiredValidator)(properties.sorters));
    errors.collect(ros.propertyValidator('sorters', ros.listValidator(RosSearchIndex_SortersPropertyValidator))(properties.sorters));
    return errors.wrap('supplied properties not correct for "IndexSortProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.IndexSort` resource
 *
 * @param properties - the TypeScript properties of a `IndexSortProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.IndexSort` resource.
 */
// @ts-ignore TS6133
function rosSearchIndexIndexSortPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSearchIndex_IndexSortPropertyValidator(properties).assertSuccess();
    return {
        Sorters: ros.listMapper(rosSearchIndexSortersPropertyToRosTemplate)(properties.sorters),
    };
}
/**
 * Determine whether the given properties match those of a `PrimaryKeySortProperty`
 *
 * @param properties - the TypeScript properties of a `PrimaryKeySortProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_PrimaryKeySortPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sortOrder', ros.validateString)(properties.sortOrder));
    return errors.wrap('supplied properties not correct for "PrimaryKeySortProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.PrimaryKeySort` resource
 *
 * @param properties - the TypeScript properties of a `PrimaryKeySortProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.PrimaryKeySort` resource.
 */
// @ts-ignore TS6133
function rosSearchIndexPrimaryKeySortPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSearchIndex_PrimaryKeySortPropertyValidator(properties).assertSuccess();
    return {
        SortOrder: ros.stringToRosTemplate(properties.sortOrder),
    };
}
/**
 * Determine whether the given properties match those of a `ScoreSortProperty`
 *
 * @param properties - the TypeScript properties of a `ScoreSortProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_ScoreSortPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sortOrder', ros.validateString)(properties.sortOrder));
    return errors.wrap('supplied properties not correct for "ScoreSortProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.ScoreSort` resource
 *
 * @param properties - the TypeScript properties of a `ScoreSortProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.ScoreSort` resource.
 */
// @ts-ignore TS6133
function rosSearchIndexScoreSortPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSearchIndex_ScoreSortPropertyValidator(properties).assertSuccess();
    return {
        SortOrder: ros.stringToRosTemplate(properties.sortOrder),
    };
}
/**
 * Determine whether the given properties match those of a `SortersProperty`
 *
 * @param properties - the TypeScript properties of a `SortersProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_SortersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('fieldSort', RosSearchIndex_FieldSortPropertyValidator)(properties.fieldSort));
    errors.collect(ros.propertyValidator('primaryKeySort', RosSearchIndex_PrimaryKeySortPropertyValidator)(properties.primaryKeySort));
    errors.collect(ros.propertyValidator('scoreSort', RosSearchIndex_ScoreSortPropertyValidator)(properties.scoreSort));
    errors.collect(ros.propertyValidator('geoDistanceSort', RosSearchIndex_GeoDistanceSortPropertyValidator)(properties.geoDistanceSort));
    return errors.wrap('supplied properties not correct for "SortersProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.Sorters` resource
 *
 * @param properties - the TypeScript properties of a `SortersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.Sorters` resource.
 */
// @ts-ignore TS6133
function rosSearchIndexSortersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSearchIndex_SortersPropertyValidator(properties).assertSuccess();
    return {
        FieldSort: rosSearchIndexFieldSortPropertyToRosTemplate(properties.fieldSort),
        PrimaryKeySort: rosSearchIndexPrimaryKeySortPropertyToRosTemplate(properties.primaryKeySort),
        ScoreSort: rosSearchIndexScoreSortPropertyToRosTemplate(properties.scoreSort),
        GeoDistanceSort: rosSearchIndexGeoDistanceSortPropertyToRosTemplate(properties.geoDistanceSort),
    };
}
/**
 * Determine whether the given properties match those of a `RosTableProps`
 *
 * @param properties - the TypeScript properties of a `RosTableProps`
 *
 * @returns the result of the validation.
 */
function RosTablePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if (properties.instanceName && (typeof properties.instanceName) !== 'object') {
        errors.collect(ros.propertyValidator('instanceName', ros.validateAllowedPattern)({
            data: properties.instanceName,
            reg: /[a-zA-Z][-a-zA-Z0-9]{1,14}[a-zA-Z0-9]/
        }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('tableName', ros.requiredValidator)(properties.tableName));
    if (properties.tableName && (typeof properties.tableName) !== 'object') {
        errors.collect(ros.propertyValidator('tableName', ros.validateAllowedPattern)({
            data: properties.tableName,
            reg: /[_a-zA-Z][_a-zA-Z0-9]{0,254}/
        }));
    }
    errors.collect(ros.propertyValidator('tableName', ros.validateString)(properties.tableName));
    if (properties.timeToLive && (typeof properties.timeToLive) !== 'object') {
        errors.collect(ros.propertyValidator('timeToLive', ros.validateRange)({
            data: properties.timeToLive,
            min: -1,
            max: 2147483647,
        }));
    }
    errors.collect(ros.propertyValidator('timeToLive', ros.validateNumber)(properties.timeToLive));
    if (properties.maxVersions && (typeof properties.maxVersions) !== 'object') {
        errors.collect(ros.propertyValidator('maxVersions', ros.validateRange)({
            data: properties.maxVersions,
            min: 1,
            max: 2147483647,
        }));
    }
    errors.collect(ros.propertyValidator('maxVersions', ros.validateNumber)(properties.maxVersions));
    errors.collect(ros.propertyValidator('secondaryIndices', ros.listValidator(RosTable_SecondaryIndicesPropertyValidator))(properties.secondaryIndices));
    if (properties.deviationCellVersionInSec && (typeof properties.deviationCellVersionInSec) !== 'object') {
        errors.collect(ros.propertyValidator('deviationCellVersionInSec', ros.validateRange)({
            data: properties.deviationCellVersionInSec,
            min: 1,
            max: 9223372036854775807,
        }));
    }
    errors.collect(ros.propertyValidator('deviationCellVersionInSec', ros.validateNumber)(properties.deviationCellVersionInSec));
    errors.collect(ros.propertyValidator('primaryKey', ros.requiredValidator)(properties.primaryKey));
    if (properties.primaryKey && (Array.isArray(properties.primaryKey) || (typeof properties.primaryKey) === 'string')) {
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
function rosTablePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosTable extends ros.RosResource {
    /**
     * Create a new `ALIYUN::OTS::Table`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosTablePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTable = RosTable;
/**
 * The resource type name for this resource class.
 */
RosTable.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::Table";
/**
 * Determine whether the given properties match those of a `ColumnsProperty`
 *
 * @param properties - the TypeScript properties of a `ColumnsProperty`
 *
 * @returns the result of the validation.
 */
function RosTable_ColumnsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if (properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
            data: properties.type,
            allowedValues: ["INTEGER", "STRING", "BINARY", "BOOLEAN", "DOUBLE"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if (properties.name && (typeof properties.name) !== 'object') {
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
function rosTableColumnsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosTable_ColumnsPropertyValidator(properties).assertSuccess();
    return {
        Type: ros.stringToRosTemplate(properties.type),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * Determine whether the given properties match those of a `PrimaryKeyProperty`
 *
 * @param properties - the TypeScript properties of a `PrimaryKeyProperty`
 *
 * @returns the result of the validation.
 */
function RosTable_PrimaryKeyPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if (properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
            data: properties.type,
            allowedValues: ["INTEGER", "STRING", "BINARY"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if (properties.name && (typeof properties.name) !== 'object') {
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
function rosTablePrimaryKeyPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosTable_PrimaryKeyPropertyValidator(properties).assertSuccess();
    return {
        Type: ros.stringToRosTemplate(properties.type),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * Determine whether the given properties match those of a `ReservedThroughputProperty`
 *
 * @param properties - the TypeScript properties of a `ReservedThroughputProperty`
 *
 * @returns the result of the validation.
 */
function RosTable_ReservedThroughputPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('read', ros.requiredValidator)(properties.read));
    if (properties.read && (typeof properties.read) !== 'object') {
        errors.collect(ros.propertyValidator('read', ros.validateRange)({
            data: properties.read,
            min: 0,
            max: 5000,
        }));
    }
    errors.collect(ros.propertyValidator('read', ros.validateNumber)(properties.read));
    errors.collect(ros.propertyValidator('write', ros.requiredValidator)(properties.write));
    if (properties.write && (typeof properties.write) !== 'object') {
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
function rosTableReservedThroughputPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosTable_ReservedThroughputPropertyValidator(properties).assertSuccess();
    return {
        Read: ros.numberToRosTemplate(properties.read),
        Write: ros.numberToRosTemplate(properties.write),
    };
}
/**
 * Determine whether the given properties match those of a `SecondaryIndicesProperty`
 *
 * @param properties - the TypeScript properties of a `SecondaryIndicesProperty`
 *
 * @returns the result of the validation.
 */
function RosTable_SecondaryIndicesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('indexName', ros.requiredValidator)(properties.indexName));
    errors.collect(ros.propertyValidator('indexName', ros.validateString)(properties.indexName));
    errors.collect(ros.propertyValidator('columns', ros.requiredValidator)(properties.columns));
    errors.collect(ros.propertyValidator('columns', ros.listValidator(ros.validateString))(properties.columns));
    errors.collect(ros.propertyValidator('primaryKeys', ros.requiredValidator)(properties.primaryKeys));
    errors.collect(ros.propertyValidator('primaryKeys', ros.listValidator(ros.validateString))(properties.primaryKeys));
    if (properties.indexType && (typeof properties.indexType) !== 'object') {
        errors.collect(ros.propertyValidator('indexType', ros.validateAllowedValues)({
            data: properties.indexType,
            allowedValues: ["Global", "Local"],
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
function rosTableSecondaryIndicesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosTable_SecondaryIndicesPropertyValidator(properties).assertSuccess();
    return {
        IndexName: ros.stringToRosTemplate(properties.indexName),
        Columns: ros.listMapper(ros.stringToRosTemplate)(properties.columns),
        PrimaryKeys: ros.listMapper(ros.stringToRosTemplate)(properties.primaryKeys),
        IndexType: ros.stringToRosTemplate(properties.indexType),
    };
}
/**
 * Determine whether the given properties match those of a `RosVpcBinderProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcBinderProps`
 *
 * @returns the result of the validation.
 */
function RosVpcBinderPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('vpcs', ros.requiredValidator)(properties.vpcs));
    if (properties.vpcs && (Array.isArray(properties.vpcs) || (typeof properties.vpcs) === 'string')) {
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
function rosVpcBinderPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosVpcBinder extends ros.RosResource {
    /**
     * Create a new `ALIYUN::OTS::VpcBinder`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVpcBinder.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomains = ros.Token.asString(this.getAtt('Domains'));
        this.attrEndpoints = ros.Token.asString(this.getAtt('Endpoints'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceName = props.instanceName;
        this.vpcs = props.vpcs;
    }
    get rosProperties() {
        return {
            instanceName: this.instanceName,
            vpcs: this.vpcs,
        };
    }
    renderProperties(props) {
        return rosVpcBinderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVpcBinder = RosVpcBinder;
/**
 * The resource type name for this resource class.
 */
RosVpcBinder.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::VpcBinder";
/**
 * Determine whether the given properties match those of a `VpcsProperty`
 *
 * @param properties - the TypeScript properties of a `VpcsProperty`
 *
 * @returns the result of the validation.
 */
function RosVpcBinder_VpcsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('instanceVpcName', ros.requiredValidator)(properties.instanceVpcName));
    if (properties.instanceVpcName && (typeof properties.instanceVpcName) !== 'object') {
        errors.collect(ros.propertyValidator('instanceVpcName', ros.validateAllowedPattern)({
            data: properties.instanceVpcName,
            reg: /[a-zA-Z][a-zA-Z0-9]{2,15}/
        }));
    }
    errors.collect(ros.propertyValidator('instanceVpcName', ros.validateString)(properties.instanceVpcName));
    errors.collect(ros.propertyValidator('network', ros.requiredValidator)(properties.network));
    if (properties.network && (typeof properties.network) !== 'object') {
        errors.collect(ros.propertyValidator('network', ros.validateAllowedValues)({
            data: properties.network,
            allowedValues: ["NORMAL", "VPC", "VPC_CONSOLE"],
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
function rosVpcBinderVpcsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpcBinder_VpcsPropertyValidator(properties).assertSuccess();
    return {
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        InstanceVpcName: ros.stringToRosTemplate(properties.instanceVpcName),
        Network: ros.stringToRosTemplate(properties.network),
        VirtualSwitchId: ros.stringToRosTemplate(properties.virtualSwitchId),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm90cy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQWlDOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx5QkFBeUIsQ0FBQyxVQUFlO0lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN0RyxJQUFHLFVBQVUsQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDekUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQy9FLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWTtZQUM3QixHQUFHLEVBQUUsdUNBQXVDO1NBQzdDLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25HLElBQUcsVUFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFD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TSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyxxQ0FBcUMsQ0FBQyxVQUFlO0lBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxrQ0FBa0MsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMvRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2hELGVBQWUsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztRQUNwRSxPQUFPLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDcEQsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO0tBQ3JFLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46Ok9UUzo6SW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlclR5cGU6IENsdXN0ZXIgdHlwZSwgdGhlIGRlZmF1bHQgaXMgU1NELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBJbnN0YW5jZSBkZXNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuZXR3b3JrOiBJbnN0YW5jZSBuZXR3b3JrIHR5cGUsIGRlZmF1bHQgaXMgTk9STUFMLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldHdvcms/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDUgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiByb3MuUm9zVGFnW107XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zSW5zdGFuY2VQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSW5zdGFuY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NJbnN0YW5jZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnN0YW5jZU5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlTmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgcmVnOiAvW2EtekEtWl1bLWEtekEtWjAtOV17MSwxNH1bYS16QS1aMC05XS9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZGVzY3JpcHRpb24pIHx8ICh0eXBlb2YgcHJvcGVydGllcy5kZXNjcmlwdGlvbikgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyNTYsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5uZXR3b3JrICYmICh0eXBlb2YgcHJvcGVydGllcy5uZXR3b3JrKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubmV0d29yayxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJOT1JNQUxcIixcIlZQQ1wiLFwiVlBDX0NPTlNPTEVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5ldHdvcmspKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNsdXN0ZXJUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5jbHVzdGVyVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3RlclR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jbHVzdGVyVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJTU0RcIixcIkhZQlJJRFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNsdXN0ZXJUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy50YWdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVSb3NUYWcpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSW5zdGFuY2VQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpJbnN0YW5jZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSW5zdGFuY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpJbnN0YW5jZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NJbnN0YW5jZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zSW5zdGFuY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBJbnN0YW5jZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSxcbiAgICAgIENsdXN0ZXJUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNsdXN0ZXJUeXBlKSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIE5ldHdvcms6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV0d29yayksXG4gICAgICBUYWdzOiByb3MubGlzdE1hcHBlcihyb3Mucm9zVGFnVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpPVFM6Okluc3RhbmNlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zSW5zdGFuY2UgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9UUzo6SW5zdGFuY2VcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnN0YW5jZU5hbWU6IEluc3RhbmNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlTmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQcml2YXRlRW5kcG9pbnQ6IFByaXZhdGUgZW5kcG9pbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByaXZhdGVFbmRwb2ludDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQdWJsaWNFbmRwb2ludDogUHVibGljIGVuZHBvaW50XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJsaWNFbmRwb2ludDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWcGNFbmRwb2ludDogVnBjIGVuZHBvaW50XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNFbmRwb2ludDogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJUeXBlOiBDbHVzdGVyIHR5cGUsIHRoZSBkZWZhdWx0IGlzIFNTRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2x1c3RlclR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogSW5zdGFuY2UgZGVzY3JpcHRpb24uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29yazogSW5zdGFuY2UgbmV0d29yayB0eXBlLCBkZWZhdWx0IGlzIE5PUk1BTC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmV0d29yazogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCA1IHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFnczogcm9zLlRhZ01hbmFnZXI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6T1RTOjpJbnN0YW5jZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zSW5zdGFuY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0luc3RhbmNlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZU5hbWUgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0luc3RhbmNlTmFtZScpKTtcbiAgICAgICAgdGhpcy5hdHRyUHJpdmF0ZUVuZHBvaW50ID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdQcml2YXRlRW5kcG9pbnQnKSk7XG4gICAgICAgIHRoaXMuYXR0clB1YmxpY0VuZHBvaW50ID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdQdWJsaWNFbmRwb2ludCcpKTtcbiAgICAgICAgdGhpcy5hdHRyVnBjRW5kcG9pbnQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1ZwY0VuZHBvaW50JykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5pbnN0YW5jZU5hbWUgPSBwcm9wcy5pbnN0YW5jZU5hbWU7XG4gICAgICAgIHRoaXMuY2x1c3RlclR5cGUgPSBwcm9wcy5jbHVzdGVyVHlwZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLm5ldHdvcmsgPSBwcm9wcy5uZXR3b3JrO1xuICAgICAgICB0aGlzLnRhZ3MgPSBuZXcgcm9zLlRhZ01hbmFnZXIocm9zLlRhZ1R5cGUuU1RBTkRBUkQsIFwiQUxJWVVOOjpPVFM6Okluc3RhbmNlXCIsIHByb3BzLnRhZ3MsIHsgdGFnUHJvcGVydHlOYW1lOiAndGFncycgfSk7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiB0aGlzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICAgIGNsdXN0ZXJUeXBlOiB0aGlzLmNsdXN0ZXJUeXBlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBuZXR3b3JrOiB0aGlzLm5ldHdvcmssXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MucmVuZGVyVGFncygpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NJbnN0YW5jZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NTZWFyY2hJbmRleFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmaWVsZFNjaGVtYXM6IGxpc3Qgb2YgZmllbGRfc2NoZW1hLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZpZWxkU2NoZW1hczogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbmRleE5hbWU6IFRoZSBpbmRleCBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluZGV4TmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlTmFtZTogVGhlIG5hbWUgb2YgdGhlIE9UUyBpbnN0YW5jZSBpbiB3aGljaCB0YWJsZSB3aWxsIGxvY2F0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWJsZU5hbWU6IFRoZSB0YWJsZSBuYW1lIG9mIHRoZSBPVFMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFibGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5kZXhTZXR0aW5nOiBJbmRleCBzZXR0aW5nc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGluZGV4U2V0dGluZz86IFJvc1NlYXJjaEluZGV4LkluZGV4U2V0dGluZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluZGV4U29ydDogVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIGhvdyBkYXRhIGlzIHNvcnRlZC4gXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIGRhdGEgaXMgc29ydGVkIGluIHRoZSBzYW1lIHdheSBhcyB0aGUgcHJpbWFyeSBrZXkgb2YgdGhlIHRhYmxlLiBcbiAgICAgKiBJZiB0aGUgc2VhcmNoIGluZGV4IGNvbnRhaW5zIE5FU1RFRCBmaWVsZHMsIGRhdGEgaXMgbm90IHNvcnRlZCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluZGV4U29ydD86IFJvc1NlYXJjaEluZGV4LkluZGV4U29ydFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1NlYXJjaEluZGV4UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NlYXJjaEluZGV4UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2VhcmNoSW5kZXhQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luZGV4TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbmRleE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luZGV4TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbmRleE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lLFxuICAgICAgICAgIHJlZzogL1thLXpBLVpdWy1hLXpBLVowLTldezEsMTR9W2EtekEtWjAtOV0vXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWJsZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGFibGVOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy50YWJsZU5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhYmxlTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFibGVOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhYmxlTmFtZSxcbiAgICAgICAgICByZWc6IC9bX2EtekEtWl1bX2EtekEtWjAtOV17MCwyNTR9L1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFibGVOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhYmxlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmllbGRTY2hlbWFzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZpZWxkU2NoZW1hcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmllbGRTY2hlbWFzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5maWVsZFNjaGVtYXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luZGV4U29ydCcsIFJvc1NlYXJjaEluZGV4X0luZGV4U29ydFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluZGV4U29ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5kZXhTZXR0aW5nJywgUm9zU2VhcmNoSW5kZXhfSW5kZXhTZXR0aW5nUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5kZXhTZXR0aW5nKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NlYXJjaEluZGV4UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXhgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NlYXJjaEluZGV4UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXhgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VhcmNoSW5kZXhQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NlYXJjaEluZGV4UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRmllbGRTY2hlbWFzOiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5maWVsZFNjaGVtYXMpLFxuICAgICAgSW5kZXhOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluZGV4TmFtZSksXG4gICAgICBJbnN0YW5jZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSxcbiAgICAgIFRhYmxlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YWJsZU5hbWUpLFxuICAgICAgSW5kZXhTZXR0aW5nOiByb3NTZWFyY2hJbmRleEluZGV4U2V0dGluZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluZGV4U2V0dGluZyksXG4gICAgICBJbmRleFNvcnQ6IHJvc1NlYXJjaEluZGV4SW5kZXhTb3J0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5kZXhTb3J0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpPVFM6OlNlYXJjaEluZGV4YFxuICovXG5leHBvcnQgY2xhc3MgUm9zU2VhcmNoSW5kZXggZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXhcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbmRleE5hbWU6IEluZGV4IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbmRleE5hbWU6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZpZWxkU2NoZW1hczogbGlzdCBvZiBmaWVsZF9zY2hlbWEuXG4gICAgICovXG4gICAgcHVibGljIGZpZWxkU2NoZW1hczogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbmRleE5hbWU6IFRoZSBpbmRleCBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbmRleE5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBPVFMgaW5zdGFuY2UgaW4gd2hpY2ggdGFibGUgd2lsbCBsb2NhdGUuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhYmxlTmFtZTogVGhlIHRhYmxlIG5hbWUgb2YgdGhlIE9UUyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFibGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5kZXhTZXR0aW5nOiBJbmRleCBzZXR0aW5nc1xuICAgICAqL1xuICAgIHB1YmxpYyBpbmRleFNldHRpbmc6IFJvc1NlYXJjaEluZGV4LkluZGV4U2V0dGluZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluZGV4U29ydDogVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIGhvdyBkYXRhIGlzIHNvcnRlZC4gXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIGRhdGEgaXMgc29ydGVkIGluIHRoZSBzYW1lIHdheSBhcyB0aGUgcHJpbWFyeSBrZXkgb2YgdGhlIHRhYmxlLiBcbiAgICAgKiBJZiB0aGUgc2VhcmNoIGluZGV4IGNvbnRhaW5zIE5FU1RFRCBmaWVsZHMsIGRhdGEgaXMgbm90IHNvcnRlZCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbmRleFNvcnQ6IFJvc1NlYXJjaEluZGV4LkluZGV4U29ydFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXhgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1NlYXJjaEluZGV4UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTZWFyY2hJbmRleC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySW5kZXhOYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdJbmRleE5hbWUnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZpZWxkU2NoZW1hcyA9IHByb3BzLmZpZWxkU2NoZW1hcztcbiAgICAgICAgdGhpcy5pbmRleE5hbWUgPSBwcm9wcy5pbmRleE5hbWU7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VOYW1lID0gcHJvcHMuaW5zdGFuY2VOYW1lO1xuICAgICAgICB0aGlzLnRhYmxlTmFtZSA9IHByb3BzLnRhYmxlTmFtZTtcbiAgICAgICAgdGhpcy5pbmRleFNldHRpbmcgPSBwcm9wcy5pbmRleFNldHRpbmc7XG4gICAgICAgIHRoaXMuaW5kZXhTb3J0ID0gcHJvcHMuaW5kZXhTb3J0O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpZWxkU2NoZW1hczogdGhpcy5maWVsZFNjaGVtYXMsXG4gICAgICAgICAgICBpbmRleE5hbWU6IHRoaXMuaW5kZXhOYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiB0aGlzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICAgIHRhYmxlTmFtZTogdGhpcy50YWJsZU5hbWUsXG4gICAgICAgICAgICBpbmRleFNldHRpbmc6IHRoaXMuaW5kZXhTZXR0aW5nLFxuICAgICAgICAgICAgaW5kZXhTb3J0OiB0aGlzLmluZGV4U29ydCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zU2VhcmNoSW5kZXhQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NTZWFyY2hJbmRleCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRmllbGRTb3J0UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNvcnRNb2RlOiBTb3J0aW5nIG1ldGhvZCB3aGVuIHRoZXJlIGFyZSBtdWx0aXBsZSB2YWx1ZXMgaW4gdGhlIGZpZWxkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc29ydE1vZGU/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc29ydE9yZGVyOiBUaGUgc29ydCBvcmRlciBjYW4gYmUgc29ydGVkIGluIGFzY2VuZGluZyBvciBkZXNjZW5kaW5nIG9yZGVyLCB0aGUgZGVmYXVsdCBpcyBhc2NlbmRpbmcoU29ydE9yZGVyLkFTQykuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzb3J0T3JkZXI/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZmllbGROYW1lOiBTb3J0ZWQgZmllbGQgbmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZpZWxkTmFtZTogc3RyaW5nO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRmllbGRTb3J0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEZpZWxkU29ydFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlYXJjaEluZGV4X0ZpZWxkU29ydFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc29ydE1vZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc29ydE1vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvcnRPcmRlcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zb3J0T3JkZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpZWxkTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5maWVsZE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpZWxkTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5maWVsZE5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRmllbGRTb3J0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXguRmllbGRTb3J0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBGaWVsZFNvcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5GaWVsZFNvcnRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VhcmNoSW5kZXhGaWVsZFNvcnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zU2VhcmNoSW5kZXhfRmllbGRTb3J0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBTb3J0TW9kZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3J0TW9kZSksXG4gICAgICBTb3J0T3JkZXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc29ydE9yZGVyKSxcbiAgICAgIEZpZWxkTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5maWVsZE5hbWUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zU2VhcmNoSW5kZXgge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEdlb0Rpc3RhbmNlU29ydFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb2ludHM6IFRoZSBwYXJhbWV0ZXIgb2YgR2VvRGlzdGFuY2VTb3J0XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwb2ludHM6IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc29ydE1vZGU6IFNvcnRpbmcgbWV0aG9kIHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIHZhbHVlcyBpbiB0aGUgZmllbGQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzb3J0TW9kZT86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzb3J0T3JkZXI6IFRoZSBzb3J0IG9yZGVyIGNhbiBiZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcgb3JkZXJcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNvcnRPcmRlcj86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmaWVsZE5hbWU6IFNvcnRlZCBmaWVsZCBuYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZmllbGROYW1lOiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBHZW9EaXN0YW5jZVNvcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgR2VvRGlzdGFuY2VTb3J0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2VhcmNoSW5kZXhfR2VvRGlzdGFuY2VTb3J0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2ludHMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9pbnRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2ludHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnBvaW50cykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc29ydE1vZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc29ydE1vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvcnRPcmRlcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zb3J0T3JkZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpZWxkTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5maWVsZE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpZWxkTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5maWVsZE5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiR2VvRGlzdGFuY2VTb3J0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXguR2VvRGlzdGFuY2VTb3J0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBHZW9EaXN0YW5jZVNvcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5HZW9EaXN0YW5jZVNvcnRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VhcmNoSW5kZXhHZW9EaXN0YW5jZVNvcnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zU2VhcmNoSW5kZXhfR2VvRGlzdGFuY2VTb3J0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBQb2ludHM6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnBvaW50cyksXG4gICAgICBTb3J0TW9kZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3J0TW9kZSksXG4gICAgICBTb3J0T3JkZXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc29ydE9yZGVyKSxcbiAgICAgIEZpZWxkTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5maWVsZE5hbWUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zU2VhcmNoSW5kZXgge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEluZGV4U2V0dGluZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByb3V0aW5nRmllbGRzOiBZb3UgY2FuIHVzZSB0aGlzIGFkdmFuY2VkIGZlYXR1cmUgdG8gY3VzdG9taXplIHJvdXRpbmcgZmllbGRzLiBcbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgc29tZSBwcmltYXJ5IGtleSBjb2x1bW5zIGFzIHJvdXRpbmcgZmllbGRzLiBcbiAgICAgKiBUYWJsZXN0b3JlIGRpc3RyaWJ1dGVzIGRhdGEgdGhhdCBpcyB3cml0dGVuIHRvIGEgc2VhcmNoIGluZGV4IHRvIGRpZmZlcmVudCBwYXJ0aXRpb25zIGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgcm91dGluZyBmaWVsZHMuIFxuICAgICAqIFRoZSBkYXRhIHdpdGggdGhlIHNhbWUgcm91dGluZyBmaWVsZCB2YWx1ZXMgaXMgZGlzdHJpYnV0ZWQgdG8gdGhlIHNhbWUgZGF0YSBwYXJ0aXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByb3V0aW5nRmllbGRzPzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEluZGV4U2V0dGluZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmRleFNldHRpbmdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZWFyY2hJbmRleF9JbmRleFNldHRpbmdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRpbmdGaWVsZHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnJvdXRpbmdGaWVsZHMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSW5kZXhTZXR0aW5nUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXguSW5kZXhTZXR0aW5nYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmRleFNldHRpbmdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5JbmRleFNldHRpbmdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VhcmNoSW5kZXhJbmRleFNldHRpbmdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zU2VhcmNoSW5kZXhfSW5kZXhTZXR0aW5nUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBSb3V0aW5nRmllbGRzOiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yb3V0aW5nRmllbGRzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1NlYXJjaEluZGV4IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbmRleFNvcnRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc29ydGVyczogVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoZSBzb3J0aW5nIG1ldGhvZHMuICBWYWxpZCB2YWx1ZXM6IFxuICAgICAqIC0gUHJpbWFyeUtleVNvcnQ6IFRoZSBpbmRleCBpcyBzb3J0ZWQgYnkgcHJpbWFyeSBrZXkgaW4gYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcgb3JkZXIuXG4gICAgICogLSBGaWVsZFNvcnQ6IFRoZSBpbmRleCBpcyBzb3J0ZWQgYnkgYSBzcGVjaWZpZWQgY29sdW1uIGluIGFzY2VuZGluZyBvciBkZXNjZW5kaW5nIG9yZGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc29ydGVyczogQXJyYXk8Um9zU2VhcmNoSW5kZXguU29ydGVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEluZGV4U29ydFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmRleFNvcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZWFyY2hJbmRleF9JbmRleFNvcnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvcnRlcnMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc29ydGVycykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc29ydGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc1NlYXJjaEluZGV4X1NvcnRlcnNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuc29ydGVycykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJJbmRleFNvcnRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5JbmRleFNvcnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluZGV4U29ydFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlNlYXJjaEluZGV4LkluZGV4U29ydGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZWFyY2hJbmRleEluZGV4U29ydFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTZWFyY2hJbmRleF9JbmRleFNvcnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNvcnRlcnM6IHJvcy5saXN0TWFwcGVyKHJvc1NlYXJjaEluZGV4U29ydGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zb3J0ZXJzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1NlYXJjaEluZGV4IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcmltYXJ5S2V5U29ydFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzb3J0T3JkZXI6IFRoZSBzb3J0IG9yZGVyIGNhbiBiZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcgb3JkZXIsIHRoZSBkZWZhdWx0IGlzIGFzY2VuZGluZyhTb3J0T3JkZXIuQVNDKS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNvcnRPcmRlcj86IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFByaW1hcnlLZXlTb3J0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByaW1hcnlLZXlTb3J0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2VhcmNoSW5kZXhfUHJpbWFyeUtleVNvcnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvcnRPcmRlcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zb3J0T3JkZXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUHJpbWFyeUtleVNvcnRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5QcmltYXJ5S2V5U29ydGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJpbWFyeUtleVNvcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5QcmltYXJ5S2V5U29ydGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZWFyY2hJbmRleFByaW1hcnlLZXlTb3J0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1NlYXJjaEluZGV4X1ByaW1hcnlLZXlTb3J0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBTb3J0T3JkZXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc29ydE9yZGVyKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1NlYXJjaEluZGV4IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY29yZVNvcnRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc29ydE9yZGVyOiBUaGUgc29ydCBvcmRlciBjYW4gYmUgc29ydGVkIGluIGFzY2VuZGluZyBvciBkZXNjZW5kaW5nIG9yZGVyXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzb3J0T3JkZXI/OiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTY29yZVNvcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2NvcmVTb3J0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2VhcmNoSW5kZXhfU2NvcmVTb3J0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3J0T3JkZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc29ydE9yZGVyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlNjb3JlU29ydFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlNlYXJjaEluZGV4LlNjb3JlU29ydGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2NvcmVTb3J0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXguU2NvcmVTb3J0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlYXJjaEluZGV4U2NvcmVTb3J0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1NlYXJjaEluZGV4X1Njb3JlU29ydFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgU29ydE9yZGVyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNvcnRPcmRlciksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NTZWFyY2hJbmRleCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU29ydGVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmaWVsZFNvcnQ6IFNvcnQgYnkgZmllbGQgdmFsdWUuIFxuICAgICAqIE9ubHkgZmllbGRzIHRoYXQgYXJlIGluZGV4ZWQgYW5kIGhhdmUgc29ydGluZyBhbmQgc3RhdGlzdGljYWwgYWdncmVnYXRpb24gZnVuY3Rpb25zIGVuYWJsZWQgY2FuIGJlIHByZS1zb3J0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZpZWxkU29ydD86IFJvc1NlYXJjaEluZGV4LkZpZWxkU29ydFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByaW1hcnlLZXlTb3J0OiBZb3UgY2FuIHVzZSBQcmltYXJ5S2V5U29ydCB0byBzb3J0IHRoZSBxdWVyeSByZXN1bHQgYmFzZWQgb24gdGhlIG9yZGVyIG9mIHByaW1hcnkga2V5IGNvbHVtbnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcmltYXJ5S2V5U29ydD86IFJvc1NlYXJjaEluZGV4LlByaW1hcnlLZXlTb3J0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2NvcmVTb3J0OiBZb3UgY2FuIHVzZSBTY29yZVNvcnQgdG8gc29ydCB0aGUgcXVlcnkgcmVzdWx0IGJ5IGtleXdvcmQgcmVsZXZhbmNlIHNjb3JlLiBcbiAgICAgKiBTY29yZVNvcnQgaXMgYXBwbGljYWJsZSB0byBzY2VuYXJpb3Mgc3VjaCBhcyBmdWxsLXRleHQgaW5kZXhpbmcuIFxuICAgICAqIE5vdGUgTm90ZSB0aGF0IHlvdSBtdXN0IHNldCBTY29yZVNvcnQgdG8gc29ydCB0aGUgcXVlcnkgcmVzdWx0IGJ5IGtleXdvcmQgcmVsZXZhbmNlIHNjb3JlLiBPdGhlcndpc2UsIHRoZSBxdWVyeSByZXN1bHQgaXMgc29ydGVkIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgSW5kZXhTb3J0IGZpZWxkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2NvcmVTb3J0PzogUm9zU2VhcmNoSW5kZXguU2NvcmVTb3J0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZ2VvRGlzdGFuY2VTb3J0OiBZb3UgY2FuIHVzZSBHZW9EaXN0YW5jZVNvcnQgdG8gc29ydCB0aGUgcXVlcnkgcmVzdWx0IGJhc2VkIG9uIGRpc3RhbmNlcyBvZiBnZW9ncmFwaGljYWwgbG9jYXRpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZ2VvRGlzdGFuY2VTb3J0PzogUm9zU2VhcmNoSW5kZXguR2VvRGlzdGFuY2VTb3J0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTb3J0ZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNvcnRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZWFyY2hJbmRleF9Tb3J0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmaWVsZFNvcnQnLCBSb3NTZWFyY2hJbmRleF9GaWVsZFNvcnRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5maWVsZFNvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW1hcnlLZXlTb3J0JywgUm9zU2VhcmNoSW5kZXhfUHJpbWFyeUtleVNvcnRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5wcmltYXJ5S2V5U29ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NvcmVTb3J0JywgUm9zU2VhcmNoSW5kZXhfU2NvcmVTb3J0UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2NvcmVTb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdnZW9EaXN0YW5jZVNvcnQnLCBSb3NTZWFyY2hJbmRleF9HZW9EaXN0YW5jZVNvcnRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5nZW9EaXN0YW5jZVNvcnQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU29ydGVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlNlYXJjaEluZGV4LlNvcnRlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNvcnRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5Tb3J0ZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlYXJjaEluZGV4U29ydGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTZWFyY2hJbmRleF9Tb3J0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBGaWVsZFNvcnQ6IHJvc1NlYXJjaEluZGV4RmllbGRTb3J0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmllbGRTb3J0KSxcbiAgICAgIFByaW1hcnlLZXlTb3J0OiByb3NTZWFyY2hJbmRleFByaW1hcnlLZXlTb3J0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpbWFyeUtleVNvcnQpLFxuICAgICAgU2NvcmVTb3J0OiByb3NTZWFyY2hJbmRleFNjb3JlU29ydFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNjb3JlU29ydCksXG4gICAgICBHZW9EaXN0YW5jZVNvcnQ6IHJvc1NlYXJjaEluZGV4R2VvRGlzdGFuY2VTb3J0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ2VvRGlzdGFuY2VTb3J0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6T1RTOjpUYWJsZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NUYWJsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBPVFMgaW5zdGFuY2UgaW4gd2hpY2ggdGFibGUgd2lsbCBsb2NhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpbWFyeUtleTogSXQgZGVzY3JpYmVzIHRoZSBhdHRyaWJ1dGUgdmFsdWUgb2YgcHJpbWFyeSBrZXkuIFRoZSBudW1iZXIgb2YgcHJpbWFyeV9rZXkgc2hvdWxkIG5vdCBiZSBsZXNzIHRoYW4gb25lIGFuZCBub3QgYmUgbW9yZSB0aGFuIGZvdXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpbWFyeUtleTogQXJyYXk8Um9zVGFibGUuUHJpbWFyeUtleVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWJsZU5hbWU6IFRoZSB0YWJsZSBuYW1lIG9mIHRoZSBPVFMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFibGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29sdW1uczogQXR0cmlidXRlIGNvbHVtbiBmb3IgdGFibGUgc3RvcmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29sdW1ucz86IEFycmF5PFJvc1RhYmxlLkNvbHVtbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGV2aWF0aW9uQ2VsbFZlcnNpb25JblNlYzogTWF4aW11bSB2ZXJzaW9uIGRldmlhdGlvbi4gVGhlIHB1cnBvc2UgaXMgbWFpbmx5IHRvIHByb2hpYml0IHdyaXRpbmcgYW5kIGV4cGVjdGVkIGxhcmdlIGRhdGEsIHN1Y2ggYXMgc2V0dGluZyB0aGUgZGV2aWF0aW9uX2NlbGxfdmVyc2lvbl9pbl9zZWMgdG8gMTAwMCwgYW5kIGlmIHRoZSBjdXJyZW50IHRpbWVzdGFtcCBpcyAxMDAwMCwgdGhlIHRpbWVzdGFtcCByYW5nZSBhbGxvd2VkIHRvIGJlIHdyaXR0ZW4gaXMgWzEwMDAwIC0gMTAwMCwgMTAwMDAgKyAxMDAwXS4gVGhlIHZhbGlkIHZhbHVlIGlzIDEtOTIyMzM3MjAzNjg1NDc3NTgwNy4gRGVmYXVsdHMgdG8gODY0MDAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGV2aWF0aW9uQ2VsbFZlcnNpb25JblNlYz86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXhWZXJzaW9uczogVGhlIG1heGltdW0gbnVtYmVyIG9mIHZlcnNpb25zIHN0b3JlZCBpbiB0aGlzIHRhYmxlLiBUaGUgdmFsaWQgdmFsdWUgaXMgMS0yMTQ3NDgzNjQ3LiBEZWZhdWx0IHRvIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWF4VmVyc2lvbnM/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzZXJ2ZWRUaHJvdWdocHV0OiBUaGUgaW5pdGlhbCByZXNlcnZlZCByZWFkL3dyaXRlIHRocm91Z2hwdXQgc2V0dGluZyBvZiB0aGUgdGFibGUgdG8gYmUgY3JlYXRlZCwgdGhlIHJlc2VydmVkIHJlYWQgdGhyb3VnaHB1dCBhbmQgcmVzZXJ2ZWQgd3JpdGUgdGhyb3VnaHB1dCBvZiBhbnkgdGFibGUgY2Fubm90IGV4Y2VlZCA1MDAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc2VydmVkVGhyb3VnaHB1dD86IFJvc1RhYmxlLlJlc2VydmVkVGhyb3VnaHB1dFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlY29uZGFyeUluZGljZXM6IFRoZSBzZWNvbmRhcnkgaW5kaWNlcyBvZiB0aGUgdGFibGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2Vjb25kYXJ5SW5kaWNlcz86IEFycmF5PFJvc1RhYmxlLlNlY29uZGFyeUluZGljZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZVRvTGl2ZTogVGhlIHJldGVudGlvbiB0aW1lIG9mIGRhdGEgc3RvcmVkIGluIHRoaXMgdGFibGUgKHVuaXQ6IHNlY29uZCkuIFRoZSB2YWx1ZSBtYXhpbXVtIGlzIDIxNDc0ODM2NDcgYW5kIC0xIG1lYW5zIG5ldmVyIGV4cGlyZWQuIERlZmF1bHQgdG8gLTEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZVRvTGl2ZT86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NUYWJsZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NUYWJsZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1RhYmxlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZU5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICByZWc6IC9bYS16QS1aXVstYS16QS1aMC05XXsxLDE0fVthLXpBLVowLTldL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFibGVOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhYmxlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFibGVOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy50YWJsZU5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhYmxlTmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWJsZU5hbWUsXG4gICAgICAgICAgcmVnOiAvW19hLXpBLVpdW19hLXpBLVowLTldezAsMjU0fS9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhYmxlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YWJsZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRpbWVUb0xpdmUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRpbWVUb0xpdmUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVUb0xpdmUnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50aW1lVG9MaXZlLFxuICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgIG1heDogMjE0NzQ4MzY0NyxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZVRvTGl2ZScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lVG9MaXZlKSk7XG4gICAgaWYocHJvcGVydGllcy5tYXhWZXJzaW9ucyAmJiAodHlwZW9mIHByb3BlcnRpZXMubWF4VmVyc2lvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heFZlcnNpb25zJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWF4VmVyc2lvbnMsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDIxNDc0ODM2NDcsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heFZlcnNpb25zJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1heFZlcnNpb25zKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZWNvbmRhcnlJbmRpY2VzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zVGFibGVfU2Vjb25kYXJ5SW5kaWNlc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5zZWNvbmRhcnlJbmRpY2VzKSk7XG4gICAgaWYocHJvcGVydGllcy5kZXZpYXRpb25DZWxsVmVyc2lvbkluU2VjICYmICh0eXBlb2YgcHJvcGVydGllcy5kZXZpYXRpb25DZWxsVmVyc2lvbkluU2VjKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXZpYXRpb25DZWxsVmVyc2lvbkluU2VjJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGV2aWF0aW9uQ2VsbFZlcnNpb25JblNlYyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogOTIyMzM3MjAzNjg1NDc3NTgwNyxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGV2aWF0aW9uQ2VsbFZlcnNpb25JblNlYycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5kZXZpYXRpb25DZWxsVmVyc2lvbkluU2VjKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmltYXJ5S2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByaW1hcnlLZXkpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByaW1hcnlLZXkgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5wcmltYXJ5S2V5KSB8fCAodHlwZW9mIHByb3BlcnRpZXMucHJpbWFyeUtleSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW1hcnlLZXknLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHJpbWFyeUtleS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW1hcnlLZXknLCByb3MubGlzdFZhbGlkYXRvcihSb3NUYWJsZV9QcmltYXJ5S2V5UHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnByaW1hcnlLZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbHVtbnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NUYWJsZV9Db2x1bW5zUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmNvbHVtbnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc2VydmVkVGhyb3VnaHB1dCcsIFJvc1RhYmxlX1Jlc2VydmVkVGhyb3VnaHB1dFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlc2VydmVkVGhyb3VnaHB1dCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NUYWJsZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlRhYmxlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NUYWJsZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlRhYmxlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1RhYmxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NUYWJsZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEluc3RhbmNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpLFxuICAgICAgUHJpbWFyeUtleTogcm9zLmxpc3RNYXBwZXIocm9zVGFibGVQcmltYXJ5S2V5UHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnByaW1hcnlLZXkpLFxuICAgICAgVGFibGVOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhYmxlTmFtZSksXG4gICAgICBDb2x1bW5zOiByb3MubGlzdE1hcHBlcihyb3NUYWJsZUNvbHVtbnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29sdW1ucyksXG4gICAgICBEZXZpYXRpb25DZWxsVmVyc2lvbkluU2VjOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRldmlhdGlvbkNlbGxWZXJzaW9uSW5TZWMpLFxuICAgICAgTWF4VmVyc2lvbnM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4VmVyc2lvbnMpLFxuICAgICAgUmVzZXJ2ZWRUaHJvdWdocHV0OiByb3NUYWJsZVJlc2VydmVkVGhyb3VnaHB1dFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc2VydmVkVGhyb3VnaHB1dCksXG4gICAgICBTZWNvbmRhcnlJbmRpY2VzOiByb3MubGlzdE1hcHBlcihyb3NUYWJsZVNlY29uZGFyeUluZGljZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc2Vjb25kYXJ5SW5kaWNlcyksXG4gICAgICBUaW1lVG9MaXZlOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVUb0xpdmUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46Ok9UUzo6VGFibGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NUYWJsZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6T1RTOjpUYWJsZVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRhYmxlTmFtZTogVGFibGUgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFibGVOYW1lOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBPVFMgaW5zdGFuY2UgaW4gd2hpY2ggdGFibGUgd2lsbCBsb2NhdGUuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaW1hcnlLZXk6IEl0IGRlc2NyaWJlcyB0aGUgYXR0cmlidXRlIHZhbHVlIG9mIHByaW1hcnkga2V5LiBUaGUgbnVtYmVyIG9mIHByaW1hcnlfa2V5IHNob3VsZCBub3QgYmUgbGVzcyB0aGFuIG9uZSBhbmQgbm90IGJlIG1vcmUgdGhhbiBmb3VyLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcmltYXJ5S2V5OiBBcnJheTxSb3NUYWJsZS5QcmltYXJ5S2V5UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhYmxlTmFtZTogVGhlIHRhYmxlIG5hbWUgb2YgdGhlIE9UUyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFibGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29sdW1uczogQXR0cmlidXRlIGNvbHVtbiBmb3IgdGFibGUgc3RvcmUuXG4gICAgICovXG4gICAgcHVibGljIGNvbHVtbnM6IEFycmF5PFJvc1RhYmxlLkNvbHVtbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGV2aWF0aW9uQ2VsbFZlcnNpb25JblNlYzogTWF4aW11bSB2ZXJzaW9uIGRldmlhdGlvbi4gVGhlIHB1cnBvc2UgaXMgbWFpbmx5IHRvIHByb2hpYml0IHdyaXRpbmcgYW5kIGV4cGVjdGVkIGxhcmdlIGRhdGEsIHN1Y2ggYXMgc2V0dGluZyB0aGUgZGV2aWF0aW9uX2NlbGxfdmVyc2lvbl9pbl9zZWMgdG8gMTAwMCwgYW5kIGlmIHRoZSBjdXJyZW50IHRpbWVzdGFtcCBpcyAxMDAwMCwgdGhlIHRpbWVzdGFtcCByYW5nZSBhbGxvd2VkIHRvIGJlIHdyaXR0ZW4gaXMgWzEwMDAwIC0gMTAwMCwgMTAwMDAgKyAxMDAwXS4gVGhlIHZhbGlkIHZhbHVlIGlzIDEtOTIyMzM3MjAzNjg1NDc3NTgwNy4gRGVmYXVsdHMgdG8gODY0MDAuXG4gICAgICovXG4gICAgcHVibGljIGRldmlhdGlvbkNlbGxWZXJzaW9uSW5TZWM6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXhWZXJzaW9uczogVGhlIG1heGltdW0gbnVtYmVyIG9mIHZlcnNpb25zIHN0b3JlZCBpbiB0aGlzIHRhYmxlLiBUaGUgdmFsaWQgdmFsdWUgaXMgMS0yMTQ3NDgzNjQ3LiBEZWZhdWx0IHRvIDEuXG4gICAgICovXG4gICAgcHVibGljIG1heFZlcnNpb25zOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzZXJ2ZWRUaHJvdWdocHV0OiBUaGUgaW5pdGlhbCByZXNlcnZlZCByZWFkL3dyaXRlIHRocm91Z2hwdXQgc2V0dGluZyBvZiB0aGUgdGFibGUgdG8gYmUgY3JlYXRlZCwgdGhlIHJlc2VydmVkIHJlYWQgdGhyb3VnaHB1dCBhbmQgcmVzZXJ2ZWQgd3JpdGUgdGhyb3VnaHB1dCBvZiBhbnkgdGFibGUgY2Fubm90IGV4Y2VlZCA1MDAwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNlcnZlZFRocm91Z2hwdXQ6IFJvc1RhYmxlLlJlc2VydmVkVGhyb3VnaHB1dFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlY29uZGFyeUluZGljZXM6IFRoZSBzZWNvbmRhcnkgaW5kaWNlcyBvZiB0aGUgdGFibGUuXG4gICAgICovXG4gICAgcHVibGljIHNlY29uZGFyeUluZGljZXM6IEFycmF5PFJvc1RhYmxlLlNlY29uZGFyeUluZGljZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZVRvTGl2ZTogVGhlIHJldGVudGlvbiB0aW1lIG9mIGRhdGEgc3RvcmVkIGluIHRoaXMgdGFibGUgKHVuaXQ6IHNlY29uZCkuIFRoZSB2YWx1ZSBtYXhpbXVtIGlzIDIxNDc0ODM2NDcgYW5kIC0xIG1lYW5zIG5ldmVyIGV4cGlyZWQuIERlZmF1bHQgdG8gLTEuXG4gICAgICovXG4gICAgcHVibGljIHRpbWVUb0xpdmU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpPVFM6OlRhYmxlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NUYWJsZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVGFibGUuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clRhYmxlTmFtZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnVGFibGVOYW1lJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5pbnN0YW5jZU5hbWUgPSBwcm9wcy5pbnN0YW5jZU5hbWU7XG4gICAgICAgIHRoaXMucHJpbWFyeUtleSA9IHByb3BzLnByaW1hcnlLZXk7XG4gICAgICAgIHRoaXMudGFibGVOYW1lID0gcHJvcHMudGFibGVOYW1lO1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBwcm9wcy5jb2x1bW5zO1xuICAgICAgICB0aGlzLmRldmlhdGlvbkNlbGxWZXJzaW9uSW5TZWMgPSBwcm9wcy5kZXZpYXRpb25DZWxsVmVyc2lvbkluU2VjO1xuICAgICAgICB0aGlzLm1heFZlcnNpb25zID0gcHJvcHMubWF4VmVyc2lvbnM7XG4gICAgICAgIHRoaXMucmVzZXJ2ZWRUaHJvdWdocHV0ID0gcHJvcHMucmVzZXJ2ZWRUaHJvdWdocHV0O1xuICAgICAgICB0aGlzLnNlY29uZGFyeUluZGljZXMgPSBwcm9wcy5zZWNvbmRhcnlJbmRpY2VzO1xuICAgICAgICB0aGlzLnRpbWVUb0xpdmUgPSBwcm9wcy50aW1lVG9MaXZlO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluc3RhbmNlTmFtZTogdGhpcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgICBwcmltYXJ5S2V5OiB0aGlzLnByaW1hcnlLZXksXG4gICAgICAgICAgICB0YWJsZU5hbWU6IHRoaXMudGFibGVOYW1lLFxuICAgICAgICAgICAgY29sdW1uczogdGhpcy5jb2x1bW5zLFxuICAgICAgICAgICAgZGV2aWF0aW9uQ2VsbFZlcnNpb25JblNlYzogdGhpcy5kZXZpYXRpb25DZWxsVmVyc2lvbkluU2VjLFxuICAgICAgICAgICAgbWF4VmVyc2lvbnM6IHRoaXMubWF4VmVyc2lvbnMsXG4gICAgICAgICAgICByZXNlcnZlZFRocm91Z2hwdXQ6IHRoaXMucmVzZXJ2ZWRUaHJvdWdocHV0LFxuICAgICAgICAgICAgc2Vjb25kYXJ5SW5kaWNlczogdGhpcy5zZWNvbmRhcnlJbmRpY2VzLFxuICAgICAgICAgICAgdGltZVRvTGl2ZTogdGhpcy50aW1lVG9MaXZlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NUYWJsZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1RhYmxlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBDb2x1bW5zUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHR5cGU6IFRoZSB0eXBlIG9mIHRoZSBjb2x1bW4uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIGNvbHVtbiBuYW1lIG9mIHRoZSBjb2x1bW4uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDb2x1bW5zUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvbHVtbnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NUYWJsZV9Db2x1bW5zUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50eXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIklOVEVHRVJcIixcIlNUUklOR1wiLFwiQklOQVJZXCIsXCJCT09MRUFOXCIsXCJET1VCTEVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMubmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5uYW1lLFxuICAgICAgICAgIHJlZzogL1tfYS16QS1aXVtfYS16QS1aMC05XXswLDI1NH0vXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ29sdW1uc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlRhYmxlLkNvbHVtbnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvbHVtbnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpUYWJsZS5Db2x1bW5zYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1RhYmxlQ29sdW1uc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NUYWJsZV9Db2x1bW5zUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnR5cGUpLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1RhYmxlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcmltYXJ5S2V5UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHR5cGU6IFR5cGUgZm9yIHByaW1hcnkga2V5LiBPbmx5IElOVEVHRVIsIFNUUklORyBvciBCSU5BUlkgaXMgYWxsb3dlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBOYW1lIGZvciBwcmltYXJ5IGtleS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFByaW1hcnlLZXlQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJpbWFyeUtleVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1RhYmxlX1ByaW1hcnlLZXlQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMudHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSU5URUdFUlwiLFwiU1RSSU5HXCIsXCJCSU5BUllcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMubmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5uYW1lLFxuICAgICAgICAgIHJlZzogL1tfYS16QS1aXVtfYS16QS1aMC05XXswLDI1NH0vXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUHJpbWFyeUtleVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlRhYmxlLlByaW1hcnlLZXlgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByaW1hcnlLZXlQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpUYWJsZS5QcmltYXJ5S2V5YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1RhYmxlUHJpbWFyeUtleVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NUYWJsZV9QcmltYXJ5S2V5UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnR5cGUpLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1RhYmxlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNlcnZlZFRocm91Z2hwdXRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVhZDogVGhlIHJlYWQgc2VydmljZSBjYXBhYmlsaXR5IHVuaXQgY29uc3VtZWQgYnkgdGhpcyBvcGVyYXRpb24gb3IgdGhlIHJlc2VydmVkIHJlYWQgdGhyb3VnaHB1dCBvZiB0aGUgdGFibGUuIERlZmF1bHQgdG8gMC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlYWQ6IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB3cml0ZTogVGhlIHdyaXRlIHNlcnZpY2UgY2FwYWJpbGl0eSB1bml0IGNvbnN1bWVkIGJ5IHRoaXMgb3BlcmF0aW9uIG9yIHRoZSByZXNlcnZlZCB3cml0ZSB0aHJvdWdocHV0IG9mIHRoZSB0YWJsZS4gRGVmYXVsdCB0byAwLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgd3JpdGU6IG51bWJlcjtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJlc2VydmVkVGhyb3VnaHB1dFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZXNlcnZlZFRocm91Z2hwdXRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NUYWJsZV9SZXNlcnZlZFRocm91Z2hwdXRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlYWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVhZCkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVhZCAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVhZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVhZCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlYWQsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDUwMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlYWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucmVhZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd3JpdGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMud3JpdGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLndyaXRlICYmICh0eXBlb2YgcHJvcGVydGllcy53cml0ZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd3JpdGUnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy53cml0ZSxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogNTAwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd3JpdGUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMud3JpdGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVzZXJ2ZWRUaHJvdWdocHV0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6VGFibGUuUmVzZXJ2ZWRUaHJvdWdocHV0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZXNlcnZlZFRocm91Z2hwdXRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpUYWJsZS5SZXNlcnZlZFRocm91Z2hwdXRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVGFibGVSZXNlcnZlZFRocm91Z2hwdXRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zVGFibGVfUmVzZXJ2ZWRUaHJvdWdocHV0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBSZWFkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlYWQpLFxuICAgICAgV3JpdGU6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud3JpdGUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zVGFibGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlY29uZGFyeUluZGljZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5kZXhOYW1lOiBUaGUgaW5kZXggbmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGluZGV4TmFtZTogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbHVtbnM6IFRoZSBjb2x1bW5zIG9mIHRoZSBpbmRleC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbHVtbnM6IHN0cmluZ1tdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByaW1hcnlLZXlzOiBUaGUgcHJpbWFyeSBrZXlzIG9mIHRoZSBpbmRleC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByaW1hcnlLZXlzOiBzdHJpbmdbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpbmRleFR5cGU6IFRoZSBpbmRleCB0eXBlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmRleFR5cGU/OiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTZWNvbmRhcnlJbmRpY2VzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNlY29uZGFyeUluZGljZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NUYWJsZV9TZWNvbmRhcnlJbmRpY2VzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmRleE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5kZXhOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmRleE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5kZXhOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb2x1bW5zJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvbHVtbnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbHVtbnMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmNvbHVtbnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW1hcnlLZXlzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByaW1hcnlLZXlzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmltYXJ5S2V5cycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMucHJpbWFyeUtleXMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluZGV4VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW5kZXhUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmRleFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbmRleFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiR2xvYmFsXCIsXCJMb2NhbFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luZGV4VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbmRleFR5cGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU2Vjb25kYXJ5SW5kaWNlc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlRhYmxlLlNlY29uZGFyeUluZGljZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNlY29uZGFyeUluZGljZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpUYWJsZS5TZWNvbmRhcnlJbmRpY2VzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1RhYmxlU2Vjb25kYXJ5SW5kaWNlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NUYWJsZV9TZWNvbmRhcnlJbmRpY2VzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBJbmRleE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5kZXhOYW1lKSxcbiAgICAgIENvbHVtbnM6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmNvbHVtbnMpLFxuICAgICAgUHJpbWFyeUtleXM6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnByaW1hcnlLZXlzKSxcbiAgICAgIEluZGV4VHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbmRleFR5cGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpPVFM6OlZwY0JpbmRlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NWcGNCaW5kZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBJbnN0YW5jZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjczogVnBjIGJpbmRpbmcgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNzOiBBcnJheTxSb3NWcGNCaW5kZXIuVnBjc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NWcGNCaW5kZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVnBjQmluZGVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVnBjQmluZGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZwY3MpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnZwY3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy52cGNzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudnBjcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudnBjcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zVnBjQmluZGVyX1ZwY3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMudnBjcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NWcGNCaW5kZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpWcGNCaW5kZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZwY0JpbmRlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlZwY0JpbmRlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NWcGNCaW5kZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1ZwY0JpbmRlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEluc3RhbmNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpLFxuICAgICAgVnBjczogcm9zLmxpc3RNYXBwZXIocm9zVnBjQmluZGVyVnBjc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy52cGNzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpPVFM6OlZwY0JpbmRlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1ZwY0JpbmRlciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6T1RTOjpWcGNCaW5kZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEb21haW5zOiBUaGUgZG9tYWluIG5hbWVzIHVzZWQgdG8gYWNjZXNzIHRoZSBPVFMgaW5zdGFuY2UgaW4gdGhlIFZQQy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRvbWFpbnM6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRW5kcG9pbnRzOiBQcml2YXRlIG5ldHdvcmsgYWRkcmVzc2VzIHVzZWQgdG8gYWNjZXNzIHRoZSBPVFMgaW5zdGFuY2UgaW4gdGhlIFZQQy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuZHBvaW50czogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBJbnN0YW5jZSBuYW1lXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY3M6IFZwYyBiaW5kaW5nIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHZwY3M6IEFycmF5PFJvc1ZwY0JpbmRlci5WcGNzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46Ok9UUzo6VnBjQmluZGVyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NWcGNCaW5kZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1ZwY0JpbmRlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRG9tYWlucyA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnRG9tYWlucycpKTtcbiAgICAgICAgdGhpcy5hdHRyRW5kcG9pbnRzID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdFbmRwb2ludHMnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmluc3RhbmNlTmFtZSA9IHByb3BzLmluc3RhbmNlTmFtZTtcbiAgICAgICAgdGhpcy52cGNzID0gcHJvcHMudnBjcztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnN0YW5jZU5hbWU6IHRoaXMuaW5zdGFuY2VOYW1lLFxuICAgICAgICAgICAgdnBjczogdGhpcy52cGNzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NWcGNCaW5kZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NWcGNCaW5kZXIge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFZwY3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFZwYyBJZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VWcGNOYW1lOiBDdXN0b20gbmFtZSwgbmVlZCB0byBiZSB1bmlxdWUgdW5kZXIgdGhlIE9UUyBpbnN0YW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGluc3RhbmNlVnBjTmFtZTogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5ldHdvcms6IEluc3RhbmNlIG5ldHdvcmsgdHlwZS4gVGhlIHZhbHVlcyBhcmUgYXMgZm9sbG93czpcbiAgICAgKiAxLCB0aGUgTk9STUFMIGluc3RhbmNlIGRvZXMgbm90IGxpbWl0IHRoZSBzb3VyY2Ugb2YgdGhlIHJlcXVlc3QuIChEZWZhdWx0cylcbiAgICAgKiAyLiBBIFZQQyBpbnN0YW5jZSBvbmx5IGFsbG93cyByZXF1ZXN0cyBmcm9tIGFsbCBWUENzIGl0IGlzIGJvdW5kIHRvLlxuICAgICAqIDMsIFZQQ19DT05TT0xFIGluc3RhbmNlIG9ubHkgYWxsb3dzIHJlcXVlc3RzIGZyb20gdGhlIGNvbnNvbGUgYW5kIGFsbCBWUENzIGl0IGlzIGJvdW5kIHRvXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuZXR3b3JrOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmlydHVhbFN3aXRjaElkOiB2U3dpdGNoIElkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmlydHVhbFN3aXRjaElkOiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBWcGNzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFZwY3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NWcGNCaW5kZXJfVnBjc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZVZwY05hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VWcGNOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZVZwY05hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlVnBjTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VWcGNOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluc3RhbmNlVnBjTmFtZSxcbiAgICAgICAgICByZWc6IC9bYS16QS1aXVthLXpBLVowLTldezIsMTV9L1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VWcGNOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlVnBjTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV0d29yaycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uZXR3b3JrKSk7XG4gICAgaWYocHJvcGVydGllcy5uZXR3b3JrICYmICh0eXBlb2YgcHJvcGVydGllcy5uZXR3b3JrKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubmV0d29yayxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJOT1JNQUxcIixcIlZQQ1wiLFwiVlBDX0NPTlNPTEVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5ldHdvcmspKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZpcnR1YWxTd2l0Y2hJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52aXJ0dWFsU3dpdGNoSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZpcnR1YWxTd2l0Y2hJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52aXJ0dWFsU3dpdGNoSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVnBjc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlZwY0JpbmRlci5WcGNzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBWcGNzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6VnBjQmluZGVyLlZwY3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVnBjQmluZGVyVnBjc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NWcGNCaW5kZXJfVnBjc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVnBjSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjSWQpLFxuICAgICAgSW5zdGFuY2VWcGNOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlVnBjTmFtZSksXG4gICAgICBOZXR3b3JrOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5ldHdvcmspLFxuICAgICAgVmlydHVhbFN3aXRjaElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZpcnR1YWxTd2l0Y2hJZCksXG4gICAgfTtcbn1cbiJdfQ==