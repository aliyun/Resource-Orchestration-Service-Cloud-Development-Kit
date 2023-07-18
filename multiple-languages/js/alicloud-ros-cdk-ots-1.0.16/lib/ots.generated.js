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
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstance_TagsPropertyValidator))(properties.tags));
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
        Tags: ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
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
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrPrivateEndpoint = this.getAtt('PrivateEndpoint');
        this.attrPublicEndpoint = this.getAtt('PublicEndpoint');
        this.attrVpcEndpoint = this.getAtt('VpcEndpoint');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceName = props.instanceName;
        this.clusterType = props.clusterType;
        this.description = props.description;
        this.network = props.network;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            instanceName: this.instanceName,
            clusterType: this.clusterType,
            description: this.description,
            network: this.network,
            tags: this.tags,
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
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::Instance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::Instance.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
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
    errors.collect(ros.propertyValidator('fieldSchemas', ros.listValidator(RosSearchIndex_FieldSchemasPropertyValidator))(properties.fieldSchemas));
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
        FieldSchemas: ros.listMapper(rosSearchIndexFieldSchemasPropertyToRosTemplate)(properties.fieldSchemas),
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
        this.attrIndexName = this.getAtt('IndexName');
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
 * Determine whether the given properties match those of a `FieldSchemasProperty`
 *
 * @param properties - the TypeScript properties of a `FieldSchemasProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_FieldSchemasPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isArray', ros.validateBoolean)(properties.isArray));
    errors.collect(ros.propertyValidator('enableSortAndAgg', ros.validateBoolean)(properties.enableSortAndAgg));
    errors.collect(ros.propertyValidator('store', ros.validateBoolean)(properties.store));
    errors.collect(ros.propertyValidator('index', ros.validateBoolean)(properties.index));
    errors.collect(ros.propertyValidator('analyzer', ros.validateString)(properties.analyzer));
    errors.collect(ros.propertyValidator('subFieldSchemas', ros.listValidator(RosSearchIndex_SubFieldSchemasPropertyValidator))(properties.subFieldSchemas));
    errors.collect(ros.propertyValidator('fieldName', ros.requiredValidator)(properties.fieldName));
    errors.collect(ros.propertyValidator('fieldName', ros.validateString)(properties.fieldName));
    errors.collect(ros.propertyValidator('fieldType', ros.requiredValidator)(properties.fieldType));
    errors.collect(ros.propertyValidator('fieldType', ros.validateString)(properties.fieldType));
    return errors.wrap('supplied properties not correct for "FieldSchemasProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.FieldSchemas` resource
 *
 * @param properties - the TypeScript properties of a `FieldSchemasProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.FieldSchemas` resource.
 */
// @ts-ignore TS6133
function rosSearchIndexFieldSchemasPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSearchIndex_FieldSchemasPropertyValidator(properties).assertSuccess();
    return {
        IsArray: ros.booleanToRosTemplate(properties.isArray),
        EnableSortAndAgg: ros.booleanToRosTemplate(properties.enableSortAndAgg),
        Store: ros.booleanToRosTemplate(properties.store),
        Index: ros.booleanToRosTemplate(properties.index),
        Analyzer: ros.stringToRosTemplate(properties.analyzer),
        SubFieldSchemas: ros.listMapper(rosSearchIndexSubFieldSchemasPropertyToRosTemplate)(properties.subFieldSchemas),
        FieldName: ros.stringToRosTemplate(properties.fieldName),
        FieldType: ros.stringToRosTemplate(properties.fieldType),
    };
}
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
 * Determine whether the given properties match those of a `SubFieldSchemasProperty`
 *
 * @param properties - the TypeScript properties of a `SubFieldSchemasProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_SubFieldSchemasPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isArray', ros.validateBoolean)(properties.isArray));
    errors.collect(ros.propertyValidator('enableSortAndAgg', ros.validateBoolean)(properties.enableSortAndAgg));
    errors.collect(ros.propertyValidator('store', ros.validateBoolean)(properties.store));
    errors.collect(ros.propertyValidator('index', ros.validateBoolean)(properties.index));
    errors.collect(ros.propertyValidator('analyzer', ros.validateString)(properties.analyzer));
    errors.collect(ros.propertyValidator('fieldName', ros.requiredValidator)(properties.fieldName));
    errors.collect(ros.propertyValidator('fieldName', ros.validateString)(properties.fieldName));
    errors.collect(ros.propertyValidator('fieldType', ros.requiredValidator)(properties.fieldType));
    errors.collect(ros.propertyValidator('fieldType', ros.validateString)(properties.fieldType));
    return errors.wrap('supplied properties not correct for "SubFieldSchemasProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.SubFieldSchemas` resource
 *
 * @param properties - the TypeScript properties of a `SubFieldSchemasProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::SearchIndex.SubFieldSchemas` resource.
 */
// @ts-ignore TS6133
function rosSearchIndexSubFieldSchemasPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSearchIndex_SubFieldSchemasPropertyValidator(properties).assertSuccess();
    return {
        IsArray: ros.booleanToRosTemplate(properties.isArray),
        EnableSortAndAgg: ros.booleanToRosTemplate(properties.enableSortAndAgg),
        Store: ros.booleanToRosTemplate(properties.store),
        Index: ros.booleanToRosTemplate(properties.index),
        Analyzer: ros.stringToRosTemplate(properties.analyzer),
        FieldName: ros.stringToRosTemplate(properties.fieldName),
        FieldType: ros.stringToRosTemplate(properties.fieldType),
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
        this.attrTableName = this.getAtt('TableName');
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
        this.attrDomains = this.getAtt('Domains');
        this.attrEndpoints = this.getAtt('Endpoints');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm90cy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQW9DOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx5QkFBeUIsQ0FBQyxVQUFlO0lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN0RyxJQUFHLFVBQVUsQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDekUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQy9FLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWTtZQUM3QixHQUFHLEVBQUUsdUNBQXVDO1NBQzdDLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25HLElBQUcsVUFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFD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QWlCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyxxQ0FBcUMsQ0FBQyxVQUFlO0lBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxrQ0FBa0MsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMvRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2hELGVBQWUsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztRQUNwRSxPQUFPLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDcEQsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO0tBQ3JFLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46Ok9UUzo6SW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlclR5cGU6IENsdXN0ZXIgdHlwZSwgdGhlIGRlZmF1bHQgaXMgU1NELiBcbiAgICAgKiBUaGlzIHBhcmFtZXRlciBzcGVjaWZpZXMgdGhlIHNwZWNpZmljYXRpb24gb2YgdGhlIG90cyBpbnN0YW5jZS5cbiAgICAgKiAgV2hlbiB0aGUgdmFsdWUgaXMgU1NELCB0aGUgb3RzIGluc3RhbmNlIGlzIGEgaGlnaC1wZXJmb3JtYW5jZSBpbnN0YW5jZS5cbiAgICAgKiAgV2hlbiB0aGUgdmFsdWUgaXMgSHliaWQsIHRoZSBvdHMgaW5zdGFuY2UgaXMgYSBjYXBhY2l0eSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBJbnN0YW5jZSBkZXNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuZXR3b3JrOiBJbnN0YW5jZSBuZXR3b3JrIHR5cGUsIGRlZmF1bHQgaXMgTk9STUFMLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldHdvcms/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDUgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NJbnN0YW5jZS5UYWdzUHJvcGVydHlbXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NJbnN0YW5jZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NJbnN0YW5jZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0luc3RhbmNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZU5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICByZWc6IC9bYS16QS1aXVstYS16QS1aMC05XXsxLDE0fVthLXpBLVowLTldL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVzY3JpcHRpb24gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5kZXNjcmlwdGlvbikgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGVzY3JpcHRpb24ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDI1NixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBpZihwcm9wZXJ0aWVzLm5ldHdvcmsgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm5ldHdvcmspICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ldHdvcmsnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5uZXR3b3JrLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIk5PUk1BTFwiLFwiVlBDXCIsXCJWUENfQ09OU09MRVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ldHdvcmsnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmV0d29yaykpO1xuICAgIGlmKHByb3BlcnRpZXMuY2x1c3RlclR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNsdXN0ZXJUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVyVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNsdXN0ZXJUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlNTRFwiLFwiSFlCUklEXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2x1c3RlclR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2x1c3RlclR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZ3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YWdzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFncykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFncy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0luc3RhbmNlX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMudGFncykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NJbnN0YW5jZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6Okluc3RhbmNlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NJbnN0YW5jZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6Okluc3RhbmNlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0luc3RhbmNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NJbnN0YW5jZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEluc3RhbmNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpLFxuICAgICAgQ2x1c3RlclR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2x1c3RlclR5cGUpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgTmV0d29yazogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uZXR3b3JrKSxcbiAgICAgIFRhZ3M6IHJvcy5saXN0TWFwcGVyKHJvc0luc3RhbmNlVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpPVFM6Okluc3RhbmNlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zSW5zdGFuY2UgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9UUzo6SW5zdGFuY2VcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnN0YW5jZU5hbWU6IEluc3RhbmNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQcml2YXRlRW5kcG9pbnQ6IFByaXZhdGUgZW5kcG9pbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByaXZhdGVFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQdWJsaWNFbmRwb2ludDogUHVibGljIGVuZHBvaW50XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJsaWNFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWcGNFbmRwb2ludDogVnBjIGVuZHBvaW50XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJUeXBlOiBDbHVzdGVyIHR5cGUsIHRoZSBkZWZhdWx0IGlzIFNTRC4gXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoZSBzcGVjaWZpY2F0aW9uIG9mIHRoZSBvdHMgaW5zdGFuY2UuXG4gICAgICogIFdoZW4gdGhlIHZhbHVlIGlzIFNTRCwgdGhlIG90cyBpbnN0YW5jZSBpcyBhIGhpZ2gtcGVyZm9ybWFuY2UgaW5zdGFuY2UuXG4gICAgICogIFdoZW4gdGhlIHZhbHVlIGlzIEh5YmlkLCB0aGUgb3RzIGluc3RhbmNlIGlzIGEgY2FwYWNpdHkgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgY2x1c3RlclR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogSW5zdGFuY2UgZGVzY3JpcHRpb24uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29yazogSW5zdGFuY2UgbmV0d29yayB0eXBlLCBkZWZhdWx0IGlzIE5PUk1BTC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmV0d29yazogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCA1IHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnczogUm9zSW5zdGFuY2UuVGFnc1Byb3BlcnR5W10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6T1RTOjpJbnN0YW5jZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zSW5zdGFuY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0luc3RhbmNlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZU5hbWUgPSB0aGlzLmdldEF0dCgnSW5zdGFuY2VOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clByaXZhdGVFbmRwb2ludCA9IHRoaXMuZ2V0QXR0KCdQcml2YXRlRW5kcG9pbnQnKTtcbiAgICAgICAgdGhpcy5hdHRyUHVibGljRW5kcG9pbnQgPSB0aGlzLmdldEF0dCgnUHVibGljRW5kcG9pbnQnKTtcbiAgICAgICAgdGhpcy5hdHRyVnBjRW5kcG9pbnQgPSB0aGlzLmdldEF0dCgnVnBjRW5kcG9pbnQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VOYW1lID0gcHJvcHMuaW5zdGFuY2VOYW1lO1xuICAgICAgICB0aGlzLmNsdXN0ZXJUeXBlID0gcHJvcHMuY2x1c3RlclR5cGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5uZXR3b3JrID0gcHJvcHMubmV0d29yaztcbiAgICAgICAgdGhpcy50YWdzID0gcHJvcHMudGFncztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnN0YW5jZU5hbWU6IHRoaXMuaW5zdGFuY2VOYW1lLFxuICAgICAgICAgICAgY2x1c3RlclR5cGU6IHRoaXMuY2x1c3RlclR5cGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG5ldHdvcms6IHRoaXMubmV0d29yayxcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zSW5zdGFuY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NJbnN0YW5jZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGFnc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXk6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NJbnN0YW5jZV9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUYWdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6SW5zdGFuY2UuVGFnc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6Okluc3RhbmNlLlRhZ3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSW5zdGFuY2VUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0luc3RhbmNlX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFZhbHVlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgIEtleTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpPVFM6OlNlYXJjaEluZGV4YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1NlYXJjaEluZGV4UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZpZWxkU2NoZW1hczogbGlzdCBvZiBmaWVsZF9zY2hlbWEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmllbGRTY2hlbWFzOiBBcnJheTxSb3NTZWFyY2hJbmRleC5GaWVsZFNjaGVtYXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5kZXhOYW1lOiBUaGUgaW5kZXggbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbmRleE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBPVFMgaW5zdGFuY2UgaW4gd2hpY2ggdGFibGUgd2lsbCBsb2NhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFibGVOYW1lOiBUaGUgdGFibGUgbmFtZSBvZiB0aGUgT1RTIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhYmxlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluZGV4U2V0dGluZzogSW5kZXggc2V0dGluZ3NcbiAgICAgKi9cbiAgICByZWFkb25seSBpbmRleFNldHRpbmc/OiBSb3NTZWFyY2hJbmRleC5JbmRleFNldHRpbmdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbmRleFNvcnQ6IFRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyBob3cgZGF0YSBpcyBzb3J0ZWQuIFxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBkYXRhIGlzIHNvcnRlZCBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlIHByaW1hcnkga2V5IG9mIHRoZSB0YWJsZS4gXG4gICAgICogSWYgdGhlIHNlYXJjaCBpbmRleCBjb250YWlucyBORVNURUQgZmllbGRzLCBkYXRhIGlzIG5vdCBzb3J0ZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbmRleFNvcnQ/OiBSb3NTZWFyY2hJbmRleC5JbmRleFNvcnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTZWFyY2hJbmRleFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTZWFyY2hJbmRleFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlYXJjaEluZGV4UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmRleE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5kZXhOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmRleE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5kZXhOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZU5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICByZWc6IC9bYS16QS1aXVstYS16QS1aMC05XXsxLDE0fVthLXpBLVowLTldL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFibGVOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhYmxlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFibGVOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy50YWJsZU5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhYmxlTmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWJsZU5hbWUsXG4gICAgICAgICAgcmVnOiAvW19hLXpBLVpdW19hLXpBLVowLTldezAsMjU0fS9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhYmxlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YWJsZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpZWxkU2NoZW1hcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5maWVsZFNjaGVtYXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpZWxkU2NoZW1hcycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc1NlYXJjaEluZGV4X0ZpZWxkU2NoZW1hc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5maWVsZFNjaGVtYXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luZGV4U29ydCcsIFJvc1NlYXJjaEluZGV4X0luZGV4U29ydFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluZGV4U29ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5kZXhTZXR0aW5nJywgUm9zU2VhcmNoSW5kZXhfSW5kZXhTZXR0aW5nUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5kZXhTZXR0aW5nKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NlYXJjaEluZGV4UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXhgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NlYXJjaEluZGV4UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXhgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VhcmNoSW5kZXhQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NlYXJjaEluZGV4UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRmllbGRTY2hlbWFzOiByb3MubGlzdE1hcHBlcihyb3NTZWFyY2hJbmRleEZpZWxkU2NoZW1hc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5maWVsZFNjaGVtYXMpLFxuICAgICAgSW5kZXhOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluZGV4TmFtZSksXG4gICAgICBJbnN0YW5jZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSxcbiAgICAgIFRhYmxlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YWJsZU5hbWUpLFxuICAgICAgSW5kZXhTZXR0aW5nOiByb3NTZWFyY2hJbmRleEluZGV4U2V0dGluZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluZGV4U2V0dGluZyksXG4gICAgICBJbmRleFNvcnQ6IHJvc1NlYXJjaEluZGV4SW5kZXhTb3J0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5kZXhTb3J0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpPVFM6OlNlYXJjaEluZGV4YFxuICovXG5leHBvcnQgY2xhc3MgUm9zU2VhcmNoSW5kZXggZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXhcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbmRleE5hbWU6IEluZGV4IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbmRleE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZpZWxkU2NoZW1hczogbGlzdCBvZiBmaWVsZF9zY2hlbWEuXG4gICAgICovXG4gICAgcHVibGljIGZpZWxkU2NoZW1hczogQXJyYXk8Um9zU2VhcmNoSW5kZXguRmllbGRTY2hlbWFzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluZGV4TmFtZTogVGhlIGluZGV4IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGluZGV4TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlTmFtZTogVGhlIG5hbWUgb2YgdGhlIE9UUyBpbnN0YW5jZSBpbiB3aGljaCB0YWJsZSB3aWxsIGxvY2F0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFibGVOYW1lOiBUaGUgdGFibGUgbmFtZSBvZiB0aGUgT1RTIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YWJsZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbmRleFNldHRpbmc6IEluZGV4IHNldHRpbmdzXG4gICAgICovXG4gICAgcHVibGljIGluZGV4U2V0dGluZzogUm9zU2VhcmNoSW5kZXguSW5kZXhTZXR0aW5nUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5kZXhTb3J0OiBUaGlzIHBhcmFtZXRlciBzcGVjaWZpZXMgaG93IGRhdGEgaXMgc29ydGVkLiBcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGUgZGF0YSBpcyBzb3J0ZWQgaW4gdGhlIHNhbWUgd2F5IGFzIHRoZSBwcmltYXJ5IGtleSBvZiB0aGUgdGFibGUuIFxuICAgICAqIElmIHRoZSBzZWFyY2ggaW5kZXggY29udGFpbnMgTkVTVEVEIGZpZWxkcywgZGF0YSBpcyBub3Qgc29ydGVkIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcHVibGljIGluZGV4U29ydDogUm9zU2VhcmNoSW5kZXguSW5kZXhTb3J0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU2VhcmNoSW5kZXhQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1NlYXJjaEluZGV4LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJJbmRleE5hbWUgPSB0aGlzLmdldEF0dCgnSW5kZXhOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZpZWxkU2NoZW1hcyA9IHByb3BzLmZpZWxkU2NoZW1hcztcbiAgICAgICAgdGhpcy5pbmRleE5hbWUgPSBwcm9wcy5pbmRleE5hbWU7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VOYW1lID0gcHJvcHMuaW5zdGFuY2VOYW1lO1xuICAgICAgICB0aGlzLnRhYmxlTmFtZSA9IHByb3BzLnRhYmxlTmFtZTtcbiAgICAgICAgdGhpcy5pbmRleFNldHRpbmcgPSBwcm9wcy5pbmRleFNldHRpbmc7XG4gICAgICAgIHRoaXMuaW5kZXhTb3J0ID0gcHJvcHMuaW5kZXhTb3J0O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpZWxkU2NoZW1hczogdGhpcy5maWVsZFNjaGVtYXMsXG4gICAgICAgICAgICBpbmRleE5hbWU6IHRoaXMuaW5kZXhOYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiB0aGlzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICAgIHRhYmxlTmFtZTogdGhpcy50YWJsZU5hbWUsXG4gICAgICAgICAgICBpbmRleFNldHRpbmc6IHRoaXMuaW5kZXhTZXR0aW5nLFxuICAgICAgICAgICAgaW5kZXhTb3J0OiB0aGlzLmluZGV4U29ydCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zU2VhcmNoSW5kZXhQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NTZWFyY2hJbmRleCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRmllbGRTY2hlbWFzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlzQXJyYXk6IFRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyB3aGV0aGVyIHRoZSBjb2x1bW4gaXMgYW4gYXJyYXkuIFxuICAgICAqIEEgdmFsdWUgb2YgdHJ1ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY29sdW1uIGlzIGFuIGFycmF5LiBEYXRhIHdyaXR0ZW4gdG8gdGhlIGNvbHVtbiBtdXN0IGJlIGEgSlNPTiBhcnJheS4gXG4gICAgICogRXhhbXBsZTogW1wiYVwiLFwiYlwiLFwiY1wiXS4gWW91IGRvIG5vdCBuZWVkIHRvIGV4cGxpY2l0bHkgc3BlY2lmeSB0aGlzIHBhcmFtZXRlciBmb3IgTkVTVEVEIGNvbHVtbnMgYmVjYXVzZSB0aGV5IGFyZSBhcnJheXMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpc0FycmF5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBlbmFibGVTb3J0QW5kQWdnOiBUaGlzIHBhcmFtZXRlciBzcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgc29ydGluZyBhbmQgYWdncmVnYXRpb24gZm9yIHRoZSBjb2x1bW4uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlbmFibGVTb3J0QW5kQWdnPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdG9yZTogVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHdoZXRoZXIgdG8gc3RvcmUgdGhlIHZhbHVlcyBvZiB0aGUgZmllbGQgaW4gdGhlIHNlYXJjaCBpbmRleC4gXG4gICAgICogQSB2YWx1ZSBvZiB0cnVlIGluZGljYXRlcyB0aGF0IHlvdSBjYW4gcmVhZCB0aGUgdmFsdWVzIG9mIHRoZSBmaWVsZCBkaXJlY3RseSBmcm9tIHRoZSBzZWFyY2ggaW5kZXggd2l0aG91dCB0aGUgbmVlZCB0byBxdWVyeSB0aGUgdGFibGUuIFxuICAgICAqIFRoaXMgY29uZmlndXJhdGlvbiBvcHRpbWl6ZXMgcXVlcnkgcGVyZm9ybWFuY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdG9yZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5kZXg6IFRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyB3aGV0aGVyIHRvIGluZGV4IHRoZSBjb2x1bW4uIFxuICAgICAqIFRoZSBkZWZhdWx0IGlzIHRydWUsIHdoaWNoIG1lYW5zIHRvIGJ1aWxkIGFuIGludmVydGVkIGluZGV4IG9yIGEgc3BhdGlhbCBpbmRleCBmb3IgdGhlIGNvbHVtbjsgaWYgaXQgaXMgc2V0IHRvIGZhbHNlLCB0aGUgY29sdW1uIHdpbGwgbm90IGJlIGluZGV4ZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmRleD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYW5hbHl6ZXI6IFRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyB0aGUgdG9rZW5pemVyLiBcbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIgaWYgdGhlIGNvbHVtbiBpcyBhIFRFWFQgY29sdW1uLiBUeXBlOiBBbmFseXplclR5cGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhbmFseXplcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdWJGaWVsZFNjaGVtYXM6IFRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyB0aGUgbGlzdCBvZiBmaWVsZCBzY2hlbWFzIGZvciBzdWJmaWVsZHMuIFxuICAgICAqIElmIHRoZSBjb2x1bW4gaXMgYSBORVNURUQgY29sdW1uLCB5b3UgbXVzdCBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyIHRvIGNvbmZpZ3VyZSB0aGUgaW5kZXggdHlwZXMgb2Ygc3ViY29sdW1ucyBpbiB0aGUgTkVTVEVEIGNvbHVtbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN1YkZpZWxkU2NoZW1hcz86IEFycmF5PFJvc1NlYXJjaEluZGV4LlN1YkZpZWxkU2NoZW1hc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmaWVsZE5hbWU6IFRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZmllbGQgKGNvbHVtbikgdG8gaW5kZXguIFxuICAgICAqIFRoZSBmaWVsZCBjYW4gYmUgYSBwcmltYXJ5IGtleSBjb2x1bW4gb3IgYW4gYXR0cmlidXRlIGNvbHVtbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZpZWxkTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGZpZWxkVHlwZTogVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoZSB0eXBlIG9mIHRoZSBmaWVsZC4gVHlwZTogRmllbGRUeXBlLiBcbiAgICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBkZXNjcmlwdGlvbiBvZiBmaWVsZCB0eXBlcyBmb3IgYSBzZWFyY2ggaW5kZXguXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBmaWVsZFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEZpZWxkU2NoZW1hc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBGaWVsZFNjaGVtYXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZWFyY2hJbmRleF9GaWVsZFNjaGVtYXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lzQXJyYXknLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlzQXJyYXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZVNvcnRBbmRBZ2cnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmVuYWJsZVNvcnRBbmRBZ2cpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0b3JlJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5zdG9yZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5kZXgnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmluZGV4KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbmFseXplcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hbmFseXplcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3ViRmllbGRTY2hlbWFzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zU2VhcmNoSW5kZXhfU3ViRmllbGRTY2hlbWFzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnN1YkZpZWxkU2NoZW1hcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmllbGROYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZpZWxkTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmllbGROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZpZWxkTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmllbGRUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZpZWxkVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmllbGRUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZpZWxkVHlwZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJGaWVsZFNjaGVtYXNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5GaWVsZFNjaGVtYXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEZpZWxkU2NoZW1hc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlNlYXJjaEluZGV4LkZpZWxkU2NoZW1hc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZWFyY2hJbmRleEZpZWxkU2NoZW1hc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTZWFyY2hJbmRleF9GaWVsZFNjaGVtYXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIElzQXJyYXk6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlzQXJyYXkpLFxuICAgICAgRW5hYmxlU29ydEFuZEFnZzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5hYmxlU29ydEFuZEFnZyksXG4gICAgICBTdG9yZTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RvcmUpLFxuICAgICAgSW5kZXg6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluZGV4KSxcbiAgICAgIEFuYWx5emVyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFuYWx5emVyKSxcbiAgICAgIFN1YkZpZWxkU2NoZW1hczogcm9zLmxpc3RNYXBwZXIocm9zU2VhcmNoSW5kZXhTdWJGaWVsZFNjaGVtYXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc3ViRmllbGRTY2hlbWFzKSxcbiAgICAgIEZpZWxkTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5maWVsZE5hbWUpLFxuICAgICAgRmllbGRUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZpZWxkVHlwZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NTZWFyY2hJbmRleCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRmllbGRTb3J0UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNvcnRNb2RlOiBTb3J0aW5nIG1ldGhvZCB3aGVuIHRoZXJlIGFyZSBtdWx0aXBsZSB2YWx1ZXMgaW4gdGhlIGZpZWxkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc29ydE1vZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc29ydE9yZGVyOiBUaGUgc29ydCBvcmRlciBjYW4gYmUgc29ydGVkIGluIGFzY2VuZGluZyBvciBkZXNjZW5kaW5nIG9yZGVyLCB0aGUgZGVmYXVsdCBpcyBhc2NlbmRpbmcoU29ydE9yZGVyLkFTQykuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzb3J0T3JkZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZmllbGROYW1lOiBTb3J0ZWQgZmllbGQgbmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZpZWxkTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRmllbGRTb3J0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEZpZWxkU29ydFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlYXJjaEluZGV4X0ZpZWxkU29ydFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc29ydE1vZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc29ydE1vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvcnRPcmRlcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zb3J0T3JkZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpZWxkTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5maWVsZE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpZWxkTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5maWVsZE5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRmllbGRTb3J0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXguRmllbGRTb3J0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBGaWVsZFNvcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5GaWVsZFNvcnRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VhcmNoSW5kZXhGaWVsZFNvcnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zU2VhcmNoSW5kZXhfRmllbGRTb3J0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBTb3J0TW9kZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3J0TW9kZSksXG4gICAgICBTb3J0T3JkZXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc29ydE9yZGVyKSxcbiAgICAgIEZpZWxkTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5maWVsZE5hbWUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zU2VhcmNoSW5kZXgge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEdlb0Rpc3RhbmNlU29ydFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb2ludHM6IFRoZSBwYXJhbWV0ZXIgb2YgR2VvRGlzdGFuY2VTb3J0XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwb2ludHM6IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc29ydE1vZGU6IFNvcnRpbmcgbWV0aG9kIHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIHZhbHVlcyBpbiB0aGUgZmllbGQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzb3J0TW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzb3J0T3JkZXI6IFRoZSBzb3J0IG9yZGVyIGNhbiBiZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcgb3JkZXJcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNvcnRPcmRlcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmaWVsZE5hbWU6IFNvcnRlZCBmaWVsZCBuYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZmllbGROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBHZW9EaXN0YW5jZVNvcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgR2VvRGlzdGFuY2VTb3J0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2VhcmNoSW5kZXhfR2VvRGlzdGFuY2VTb3J0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2ludHMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9pbnRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2ludHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnBvaW50cykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc29ydE1vZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc29ydE1vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvcnRPcmRlcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zb3J0T3JkZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpZWxkTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5maWVsZE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpZWxkTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5maWVsZE5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiR2VvRGlzdGFuY2VTb3J0UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXguR2VvRGlzdGFuY2VTb3J0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBHZW9EaXN0YW5jZVNvcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5HZW9EaXN0YW5jZVNvcnRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VhcmNoSW5kZXhHZW9EaXN0YW5jZVNvcnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zU2VhcmNoSW5kZXhfR2VvRGlzdGFuY2VTb3J0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBQb2ludHM6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnBvaW50cyksXG4gICAgICBTb3J0TW9kZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3J0TW9kZSksXG4gICAgICBTb3J0T3JkZXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc29ydE9yZGVyKSxcbiAgICAgIEZpZWxkTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5maWVsZE5hbWUpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zU2VhcmNoSW5kZXgge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEluZGV4U2V0dGluZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByb3V0aW5nRmllbGRzOiBZb3UgY2FuIHVzZSB0aGlzIGFkdmFuY2VkIGZlYXR1cmUgdG8gY3VzdG9taXplIHJvdXRpbmcgZmllbGRzLiBcbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgc29tZSBwcmltYXJ5IGtleSBjb2x1bW5zIGFzIHJvdXRpbmcgZmllbGRzLiBcbiAgICAgKiBUYWJsZXN0b3JlIGRpc3RyaWJ1dGVzIGRhdGEgdGhhdCBpcyB3cml0dGVuIHRvIGEgc2VhcmNoIGluZGV4IHRvIGRpZmZlcmVudCBwYXJ0aXRpb25zIGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgcm91dGluZyBmaWVsZHMuIFxuICAgICAqIFRoZSBkYXRhIHdpdGggdGhlIHNhbWUgcm91dGluZyBmaWVsZCB2YWx1ZXMgaXMgZGlzdHJpYnV0ZWQgdG8gdGhlIHNhbWUgZGF0YSBwYXJ0aXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByb3V0aW5nRmllbGRzPzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEluZGV4U2V0dGluZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmRleFNldHRpbmdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZWFyY2hJbmRleF9JbmRleFNldHRpbmdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRpbmdGaWVsZHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnJvdXRpbmdGaWVsZHMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSW5kZXhTZXR0aW5nUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXguSW5kZXhTZXR0aW5nYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmRleFNldHRpbmdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5JbmRleFNldHRpbmdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2VhcmNoSW5kZXhJbmRleFNldHRpbmdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zU2VhcmNoSW5kZXhfSW5kZXhTZXR0aW5nUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBSb3V0aW5nRmllbGRzOiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yb3V0aW5nRmllbGRzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1NlYXJjaEluZGV4IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbmRleFNvcnRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc29ydGVyczogVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoZSBzb3J0aW5nIG1ldGhvZHMuICBWYWxpZCB2YWx1ZXM6IFxuICAgICAqIC0gUHJpbWFyeUtleVNvcnQ6IFRoZSBpbmRleCBpcyBzb3J0ZWQgYnkgcHJpbWFyeSBrZXkgaW4gYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcgb3JkZXIuXG4gICAgICogLSBGaWVsZFNvcnQ6IFRoZSBpbmRleCBpcyBzb3J0ZWQgYnkgYSBzcGVjaWZpZWQgY29sdW1uIGluIGFzY2VuZGluZyBvciBkZXNjZW5kaW5nIG9yZGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc29ydGVyczogQXJyYXk8Um9zU2VhcmNoSW5kZXguU29ydGVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEluZGV4U29ydFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmRleFNvcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZWFyY2hJbmRleF9JbmRleFNvcnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvcnRlcnMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc29ydGVycykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc29ydGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc1NlYXJjaEluZGV4X1NvcnRlcnNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuc29ydGVycykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJJbmRleFNvcnRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5JbmRleFNvcnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluZGV4U29ydFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlNlYXJjaEluZGV4LkluZGV4U29ydGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZWFyY2hJbmRleEluZGV4U29ydFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTZWFyY2hJbmRleF9JbmRleFNvcnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNvcnRlcnM6IHJvcy5saXN0TWFwcGVyKHJvc1NlYXJjaEluZGV4U29ydGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zb3J0ZXJzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1NlYXJjaEluZGV4IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcmltYXJ5S2V5U29ydFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzb3J0T3JkZXI6IFRoZSBzb3J0IG9yZGVyIGNhbiBiZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcgb3JkZXIsIHRoZSBkZWZhdWx0IGlzIGFzY2VuZGluZyhTb3J0T3JkZXIuQVNDKS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNvcnRPcmRlcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFByaW1hcnlLZXlTb3J0UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByaW1hcnlLZXlTb3J0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2VhcmNoSW5kZXhfUHJpbWFyeUtleVNvcnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvcnRPcmRlcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zb3J0T3JkZXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUHJpbWFyeUtleVNvcnRQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5QcmltYXJ5S2V5U29ydGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUHJpbWFyeUtleVNvcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5QcmltYXJ5S2V5U29ydGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZWFyY2hJbmRleFByaW1hcnlLZXlTb3J0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1NlYXJjaEluZGV4X1ByaW1hcnlLZXlTb3J0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBTb3J0T3JkZXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc29ydE9yZGVyKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1NlYXJjaEluZGV4IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY29yZVNvcnRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc29ydE9yZGVyOiBUaGUgc29ydCBvcmRlciBjYW4gYmUgc29ydGVkIGluIGFzY2VuZGluZyBvciBkZXNjZW5kaW5nIG9yZGVyXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzb3J0T3JkZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTY29yZVNvcnRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2NvcmVTb3J0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2VhcmNoSW5kZXhfU2NvcmVTb3J0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3J0T3JkZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc29ydE9yZGVyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlNjb3JlU29ydFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlNlYXJjaEluZGV4LlNjb3JlU29ydGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2NvcmVTb3J0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXguU2NvcmVTb3J0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlYXJjaEluZGV4U2NvcmVTb3J0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1NlYXJjaEluZGV4X1Njb3JlU29ydFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgU29ydE9yZGVyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNvcnRPcmRlciksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NTZWFyY2hJbmRleCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU29ydGVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmaWVsZFNvcnQ6IFNvcnQgYnkgZmllbGQgdmFsdWUuIFxuICAgICAqIE9ubHkgZmllbGRzIHRoYXQgYXJlIGluZGV4ZWQgYW5kIGhhdmUgc29ydGluZyBhbmQgc3RhdGlzdGljYWwgYWdncmVnYXRpb24gZnVuY3Rpb25zIGVuYWJsZWQgY2FuIGJlIHByZS1zb3J0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZpZWxkU29ydD86IFJvc1NlYXJjaEluZGV4LkZpZWxkU29ydFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByaW1hcnlLZXlTb3J0OiBZb3UgY2FuIHVzZSBQcmltYXJ5S2V5U29ydCB0byBzb3J0IHRoZSBxdWVyeSByZXN1bHQgYmFzZWQgb24gdGhlIG9yZGVyIG9mIHByaW1hcnkga2V5IGNvbHVtbnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcmltYXJ5S2V5U29ydD86IFJvc1NlYXJjaEluZGV4LlByaW1hcnlLZXlTb3J0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2NvcmVTb3J0OiBZb3UgY2FuIHVzZSBTY29yZVNvcnQgdG8gc29ydCB0aGUgcXVlcnkgcmVzdWx0IGJ5IGtleXdvcmQgcmVsZXZhbmNlIHNjb3JlLiBcbiAgICAgKiBTY29yZVNvcnQgaXMgYXBwbGljYWJsZSB0byBzY2VuYXJpb3Mgc3VjaCBhcyBmdWxsLXRleHQgaW5kZXhpbmcuIFxuICAgICAqIE5vdGUgTm90ZSB0aGF0IHlvdSBtdXN0IHNldCBTY29yZVNvcnQgdG8gc29ydCB0aGUgcXVlcnkgcmVzdWx0IGJ5IGtleXdvcmQgcmVsZXZhbmNlIHNjb3JlLiBPdGhlcndpc2UsIHRoZSBxdWVyeSByZXN1bHQgaXMgc29ydGVkIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgSW5kZXhTb3J0IGZpZWxkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2NvcmVTb3J0PzogUm9zU2VhcmNoSW5kZXguU2NvcmVTb3J0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZ2VvRGlzdGFuY2VTb3J0OiBZb3UgY2FuIHVzZSBHZW9EaXN0YW5jZVNvcnQgdG8gc29ydCB0aGUgcXVlcnkgcmVzdWx0IGJhc2VkIG9uIGRpc3RhbmNlcyBvZiBnZW9ncmFwaGljYWwgbG9jYXRpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZ2VvRGlzdGFuY2VTb3J0PzogUm9zU2VhcmNoSW5kZXguR2VvRGlzdGFuY2VTb3J0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTb3J0ZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNvcnRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZWFyY2hJbmRleF9Tb3J0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmaWVsZFNvcnQnLCBSb3NTZWFyY2hJbmRleF9GaWVsZFNvcnRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5maWVsZFNvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW1hcnlLZXlTb3J0JywgUm9zU2VhcmNoSW5kZXhfUHJpbWFyeUtleVNvcnRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5wcmltYXJ5S2V5U29ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NvcmVTb3J0JywgUm9zU2VhcmNoSW5kZXhfU2NvcmVTb3J0UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2NvcmVTb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdnZW9EaXN0YW5jZVNvcnQnLCBSb3NTZWFyY2hJbmRleF9HZW9EaXN0YW5jZVNvcnRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5nZW9EaXN0YW5jZVNvcnQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU29ydGVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlNlYXJjaEluZGV4LlNvcnRlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNvcnRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpTZWFyY2hJbmRleC5Tb3J0ZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlYXJjaEluZGV4U29ydGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTZWFyY2hJbmRleF9Tb3J0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBGaWVsZFNvcnQ6IHJvc1NlYXJjaEluZGV4RmllbGRTb3J0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmllbGRTb3J0KSxcbiAgICAgIFByaW1hcnlLZXlTb3J0OiByb3NTZWFyY2hJbmRleFByaW1hcnlLZXlTb3J0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpbWFyeUtleVNvcnQpLFxuICAgICAgU2NvcmVTb3J0OiByb3NTZWFyY2hJbmRleFNjb3JlU29ydFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNjb3JlU29ydCksXG4gICAgICBHZW9EaXN0YW5jZVNvcnQ6IHJvc1NlYXJjaEluZGV4R2VvRGlzdGFuY2VTb3J0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ2VvRGlzdGFuY2VTb3J0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1NlYXJjaEluZGV4IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTdWJGaWVsZFNjaGVtYXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaXNBcnJheTogVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIGNvbHVtbiBpcyBhbiBhcnJheS4gXG4gICAgICogQSB2YWx1ZSBvZiB0cnVlIGluZGljYXRlcyB0aGF0IHRoZSBjb2x1bW4gaXMgYW4gYXJyYXkuIERhdGEgd3JpdHRlbiB0byB0aGUgY29sdW1uIG11c3QgYmUgYSBKU09OIGFycmF5LiBcbiAgICAgKiBFeGFtcGxlOiBbXCJhXCIsXCJiXCIsXCJjXCJdLiBZb3UgZG8gbm90IG5lZWQgdG8gZXhwbGljaXRseSBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyIGZvciBORVNURUQgY29sdW1ucyBiZWNhdXNlIHRoZXkgYXJlIGFycmF5cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlzQXJyYXk/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVuYWJsZVNvcnRBbmRBZ2c6IFRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSBzb3J0aW5nIGFuZCBhZ2dyZWdhdGlvbiBmb3IgdGhlIGNvbHVtbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVuYWJsZVNvcnRBbmRBZ2c/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0b3JlOiBUaGlzIHBhcmFtZXRlciBzcGVjaWZpZXMgd2hldGhlciB0byBzdG9yZSB0aGUgdmFsdWVzIG9mIHRoZSBmaWVsZCBpbiB0aGUgc2VhcmNoIGluZGV4LiBcbiAgICAgKiBBIHZhbHVlIG9mIHRydWUgaW5kaWNhdGVzIHRoYXQgeW91IGNhbiByZWFkIHRoZSB2YWx1ZXMgb2YgdGhlIGZpZWxkIGRpcmVjdGx5IGZyb20gdGhlIHNlYXJjaCBpbmRleCB3aXRob3V0IHRoZSBuZWVkIHRvIHF1ZXJ5IHRoZSB0YWJsZS4gXG4gICAgICogVGhpcyBjb25maWd1cmF0aW9uIG9wdGltaXplcyBxdWVyeSBwZXJmb3JtYW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0b3JlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpbmRleDogVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHdoZXRoZXIgdG8gaW5kZXggdGhlIGNvbHVtbi4gXG4gICAgICogVGhlIGRlZmF1bHQgaXMgdHJ1ZSwgd2hpY2ggbWVhbnMgdG8gYnVpbGQgYW4gaW52ZXJ0ZWQgaW5kZXggb3IgYSBzcGF0aWFsIGluZGV4IGZvciB0aGUgY29sdW1uOyBpZiBpdCBpcyBzZXQgdG8gZmFsc2UsIHRoZSBjb2x1bW4gd2lsbCBub3QgYmUgaW5kZXhlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGluZGV4PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhbmFseXplcjogVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoZSB0b2tlbml6ZXIuIFxuICAgICAqIFlvdSBjYW4gc3BlY2lmeSB0aGlzIHBhcmFtZXRlciBpZiB0aGUgY29sdW1uIGlzIGEgVEVYVCBjb2x1bW4uIFR5cGU6IEFuYWx5emVyVHlwZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFuYWx5emVyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGZpZWxkTmFtZTogVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBmaWVsZCAoY29sdW1uKSB0byBpbmRleC4gXG4gICAgICogVGhlIGZpZWxkIGNhbiBiZSBhIHByaW1hcnkga2V5IGNvbHVtbiBvciBhbiBhdHRyaWJ1dGUgY29sdW1uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZmllbGROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZmllbGRUeXBlOiBUaGlzIHBhcmFtZXRlciBzcGVjaWZpZXMgdGhlIHR5cGUgb2YgdGhlIGZpZWxkLiBUeXBlOiBGaWVsZFR5cGUuIFxuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIGRlc2NyaXB0aW9uIG9mIGZpZWxkIHR5cGVzIGZvciBhIHNlYXJjaCBpbmRleC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGZpZWxkVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgU3ViRmllbGRTY2hlbWFzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFN1YkZpZWxkU2NoZW1hc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlYXJjaEluZGV4X1N1YkZpZWxkU2NoZW1hc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNBcnJheScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuaXNBcnJheSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlU29ydEFuZEFnZycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZW5hYmxlU29ydEFuZEFnZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RvcmUnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLnN0b3JlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmRleCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuaW5kZXgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FuYWx5emVyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFuYWx5emVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmaWVsZE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZmllbGROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmaWVsZE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZmllbGROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmaWVsZFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZmllbGRUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmaWVsZFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZmllbGRUeXBlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlN1YkZpZWxkU2NoZW1hc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlNlYXJjaEluZGV4LlN1YkZpZWxkU2NoZW1hc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU3ViRmllbGRTY2hlbWFzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6U2VhcmNoSW5kZXguU3ViRmllbGRTY2hlbWFzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlYXJjaEluZGV4U3ViRmllbGRTY2hlbWFzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1NlYXJjaEluZGV4X1N1YkZpZWxkU2NoZW1hc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgSXNBcnJheTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXNBcnJheSksXG4gICAgICBFbmFibGVTb3J0QW5kQWdnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVTb3J0QW5kQWdnKSxcbiAgICAgIFN0b3JlOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdG9yZSksXG4gICAgICBJbmRleDogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5kZXgpLFxuICAgICAgQW5hbHl6ZXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYW5hbHl6ZXIpLFxuICAgICAgRmllbGROYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZpZWxkTmFtZSksXG4gICAgICBGaWVsZFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmllbGRUeXBlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6T1RTOjpUYWJsZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NUYWJsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBPVFMgaW5zdGFuY2UgaW4gd2hpY2ggdGFibGUgd2lsbCBsb2NhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpbWFyeUtleTogSXQgZGVzY3JpYmVzIHRoZSBhdHRyaWJ1dGUgdmFsdWUgb2YgcHJpbWFyeSBrZXkuIFRoZSBudW1iZXIgb2YgcHJpbWFyeV9rZXkgc2hvdWxkIG5vdCBiZSBsZXNzIHRoYW4gb25lIGFuZCBub3QgYmUgbW9yZSB0aGFuIGZvdXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpbWFyeUtleTogQXJyYXk8Um9zVGFibGUuUHJpbWFyeUtleVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWJsZU5hbWU6IFRoZSB0YWJsZSBuYW1lIG9mIHRoZSBPVFMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFibGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29sdW1uczogQXR0cmlidXRlIGNvbHVtbiBmb3IgdGFibGUgc3RvcmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29sdW1ucz86IEFycmF5PFJvc1RhYmxlLkNvbHVtbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGV2aWF0aW9uQ2VsbFZlcnNpb25JblNlYzogTWF4aW11bSB2ZXJzaW9uIGRldmlhdGlvbi4gVGhlIHB1cnBvc2UgaXMgbWFpbmx5IHRvIHByb2hpYml0IHdyaXRpbmcgYW5kIGV4cGVjdGVkIGxhcmdlIGRhdGEsIHN1Y2ggYXMgc2V0dGluZyB0aGUgZGV2aWF0aW9uX2NlbGxfdmVyc2lvbl9pbl9zZWMgdG8gMTAwMCwgYW5kIGlmIHRoZSBjdXJyZW50IHRpbWVzdGFtcCBpcyAxMDAwMCwgdGhlIHRpbWVzdGFtcCByYW5nZSBhbGxvd2VkIHRvIGJlIHdyaXR0ZW4gaXMgWzEwMDAwIC0gMTAwMCwgMTAwMDAgKyAxMDAwXS4gVGhlIHZhbGlkIHZhbHVlIGlzIDEtOTIyMzM3MjAzNjg1NDc3NTgwNy4gRGVmYXVsdHMgdG8gODY0MDAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGV2aWF0aW9uQ2VsbFZlcnNpb25JblNlYz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXhWZXJzaW9uczogVGhlIG1heGltdW0gbnVtYmVyIG9mIHZlcnNpb25zIHN0b3JlZCBpbiB0aGlzIHRhYmxlLiBUaGUgdmFsaWQgdmFsdWUgaXMgMS0yMTQ3NDgzNjQ3LiBEZWZhdWx0IHRvIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWF4VmVyc2lvbnM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzZXJ2ZWRUaHJvdWdocHV0OiBUaGUgaW5pdGlhbCByZXNlcnZlZCByZWFkL3dyaXRlIHRocm91Z2hwdXQgc2V0dGluZyBvZiB0aGUgdGFibGUgdG8gYmUgY3JlYXRlZCwgdGhlIHJlc2VydmVkIHJlYWQgdGhyb3VnaHB1dCBhbmQgcmVzZXJ2ZWQgd3JpdGUgdGhyb3VnaHB1dCBvZiBhbnkgdGFibGUgY2Fubm90IGV4Y2VlZCA1MDAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc2VydmVkVGhyb3VnaHB1dD86IFJvc1RhYmxlLlJlc2VydmVkVGhyb3VnaHB1dFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlY29uZGFyeUluZGljZXM6IFRoZSBzZWNvbmRhcnkgaW5kaWNlcyBvZiB0aGUgdGFibGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2Vjb25kYXJ5SW5kaWNlcz86IEFycmF5PFJvc1RhYmxlLlNlY29uZGFyeUluZGljZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZVRvTGl2ZTogVGhlIHJldGVudGlvbiB0aW1lIG9mIGRhdGEgc3RvcmVkIGluIHRoaXMgdGFibGUgKHVuaXQ6IHNlY29uZCkuIFRoZSB2YWx1ZSBtYXhpbXVtIGlzIDIxNDc0ODM2NDcgYW5kIC0xIG1lYW5zIG5ldmVyIGV4cGlyZWQuIERlZmF1bHQgdG8gLTEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZVRvTGl2ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NUYWJsZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NUYWJsZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1RhYmxlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZU5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICByZWc6IC9bYS16QS1aXVstYS16QS1aMC05XXsxLDE0fVthLXpBLVowLTldL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFibGVOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhYmxlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFibGVOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy50YWJsZU5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhYmxlTmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWJsZU5hbWUsXG4gICAgICAgICAgcmVnOiAvW19hLXpBLVpdW19hLXpBLVowLTldezAsMjU0fS9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhYmxlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YWJsZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRpbWVUb0xpdmUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRpbWVUb0xpdmUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVUb0xpdmUnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50aW1lVG9MaXZlLFxuICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgIG1heDogMjE0NzQ4MzY0NyxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZVRvTGl2ZScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lVG9MaXZlKSk7XG4gICAgaWYocHJvcGVydGllcy5tYXhWZXJzaW9ucyAmJiAodHlwZW9mIHByb3BlcnRpZXMubWF4VmVyc2lvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heFZlcnNpb25zJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWF4VmVyc2lvbnMsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDIxNDc0ODM2NDcsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heFZlcnNpb25zJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1heFZlcnNpb25zKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZWNvbmRhcnlJbmRpY2VzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zVGFibGVfU2Vjb25kYXJ5SW5kaWNlc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5zZWNvbmRhcnlJbmRpY2VzKSk7XG4gICAgaWYocHJvcGVydGllcy5kZXZpYXRpb25DZWxsVmVyc2lvbkluU2VjICYmICh0eXBlb2YgcHJvcGVydGllcy5kZXZpYXRpb25DZWxsVmVyc2lvbkluU2VjKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXZpYXRpb25DZWxsVmVyc2lvbkluU2VjJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGV2aWF0aW9uQ2VsbFZlcnNpb25JblNlYyxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogOTIyMzM3MjAzNjg1NDc3NTgwNyxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGV2aWF0aW9uQ2VsbFZlcnNpb25JblNlYycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5kZXZpYXRpb25DZWxsVmVyc2lvbkluU2VjKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmltYXJ5S2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByaW1hcnlLZXkpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByaW1hcnlLZXkgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5wcmltYXJ5S2V5KSB8fCAodHlwZW9mIHByb3BlcnRpZXMucHJpbWFyeUtleSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW1hcnlLZXknLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHJpbWFyeUtleS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW1hcnlLZXknLCByb3MubGlzdFZhbGlkYXRvcihSb3NUYWJsZV9QcmltYXJ5S2V5UHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnByaW1hcnlLZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbHVtbnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NUYWJsZV9Db2x1bW5zUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmNvbHVtbnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc2VydmVkVGhyb3VnaHB1dCcsIFJvc1RhYmxlX1Jlc2VydmVkVGhyb3VnaHB1dFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlc2VydmVkVGhyb3VnaHB1dCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NUYWJsZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlRhYmxlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NUYWJsZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlRhYmxlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1RhYmxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NUYWJsZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEluc3RhbmNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpLFxuICAgICAgUHJpbWFyeUtleTogcm9zLmxpc3RNYXBwZXIocm9zVGFibGVQcmltYXJ5S2V5UHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnByaW1hcnlLZXkpLFxuICAgICAgVGFibGVOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhYmxlTmFtZSksXG4gICAgICBDb2x1bW5zOiByb3MubGlzdE1hcHBlcihyb3NUYWJsZUNvbHVtbnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29sdW1ucyksXG4gICAgICBEZXZpYXRpb25DZWxsVmVyc2lvbkluU2VjOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRldmlhdGlvbkNlbGxWZXJzaW9uSW5TZWMpLFxuICAgICAgTWF4VmVyc2lvbnM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4VmVyc2lvbnMpLFxuICAgICAgUmVzZXJ2ZWRUaHJvdWdocHV0OiByb3NUYWJsZVJlc2VydmVkVGhyb3VnaHB1dFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc2VydmVkVGhyb3VnaHB1dCksXG4gICAgICBTZWNvbmRhcnlJbmRpY2VzOiByb3MubGlzdE1hcHBlcihyb3NUYWJsZVNlY29uZGFyeUluZGljZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc2Vjb25kYXJ5SW5kaWNlcyksXG4gICAgICBUaW1lVG9MaXZlOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVUb0xpdmUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46Ok9UUzo6VGFibGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NUYWJsZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6T1RTOjpUYWJsZVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRhYmxlTmFtZTogVGFibGUgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFibGVOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBPVFMgaW5zdGFuY2UgaW4gd2hpY2ggdGFibGUgd2lsbCBsb2NhdGUuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaW1hcnlLZXk6IEl0IGRlc2NyaWJlcyB0aGUgYXR0cmlidXRlIHZhbHVlIG9mIHByaW1hcnkga2V5LiBUaGUgbnVtYmVyIG9mIHByaW1hcnlfa2V5IHNob3VsZCBub3QgYmUgbGVzcyB0aGFuIG9uZSBhbmQgbm90IGJlIG1vcmUgdGhhbiBmb3VyLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcmltYXJ5S2V5OiBBcnJheTxSb3NUYWJsZS5QcmltYXJ5S2V5UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhYmxlTmFtZTogVGhlIHRhYmxlIG5hbWUgb2YgdGhlIE9UUyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFibGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29sdW1uczogQXR0cmlidXRlIGNvbHVtbiBmb3IgdGFibGUgc3RvcmUuXG4gICAgICovXG4gICAgcHVibGljIGNvbHVtbnM6IEFycmF5PFJvc1RhYmxlLkNvbHVtbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGV2aWF0aW9uQ2VsbFZlcnNpb25JblNlYzogTWF4aW11bSB2ZXJzaW9uIGRldmlhdGlvbi4gVGhlIHB1cnBvc2UgaXMgbWFpbmx5IHRvIHByb2hpYml0IHdyaXRpbmcgYW5kIGV4cGVjdGVkIGxhcmdlIGRhdGEsIHN1Y2ggYXMgc2V0dGluZyB0aGUgZGV2aWF0aW9uX2NlbGxfdmVyc2lvbl9pbl9zZWMgdG8gMTAwMCwgYW5kIGlmIHRoZSBjdXJyZW50IHRpbWVzdGFtcCBpcyAxMDAwMCwgdGhlIHRpbWVzdGFtcCByYW5nZSBhbGxvd2VkIHRvIGJlIHdyaXR0ZW4gaXMgWzEwMDAwIC0gMTAwMCwgMTAwMDAgKyAxMDAwXS4gVGhlIHZhbGlkIHZhbHVlIGlzIDEtOTIyMzM3MjAzNjg1NDc3NTgwNy4gRGVmYXVsdHMgdG8gODY0MDAuXG4gICAgICovXG4gICAgcHVibGljIGRldmlhdGlvbkNlbGxWZXJzaW9uSW5TZWM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXhWZXJzaW9uczogVGhlIG1heGltdW0gbnVtYmVyIG9mIHZlcnNpb25zIHN0b3JlZCBpbiB0aGlzIHRhYmxlLiBUaGUgdmFsaWQgdmFsdWUgaXMgMS0yMTQ3NDgzNjQ3LiBEZWZhdWx0IHRvIDEuXG4gICAgICovXG4gICAgcHVibGljIG1heFZlcnNpb25zOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzZXJ2ZWRUaHJvdWdocHV0OiBUaGUgaW5pdGlhbCByZXNlcnZlZCByZWFkL3dyaXRlIHRocm91Z2hwdXQgc2V0dGluZyBvZiB0aGUgdGFibGUgdG8gYmUgY3JlYXRlZCwgdGhlIHJlc2VydmVkIHJlYWQgdGhyb3VnaHB1dCBhbmQgcmVzZXJ2ZWQgd3JpdGUgdGhyb3VnaHB1dCBvZiBhbnkgdGFibGUgY2Fubm90IGV4Y2VlZCA1MDAwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNlcnZlZFRocm91Z2hwdXQ6IFJvc1RhYmxlLlJlc2VydmVkVGhyb3VnaHB1dFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlY29uZGFyeUluZGljZXM6IFRoZSBzZWNvbmRhcnkgaW5kaWNlcyBvZiB0aGUgdGFibGUuXG4gICAgICovXG4gICAgcHVibGljIHNlY29uZGFyeUluZGljZXM6IEFycmF5PFJvc1RhYmxlLlNlY29uZGFyeUluZGljZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZVRvTGl2ZTogVGhlIHJldGVudGlvbiB0aW1lIG9mIGRhdGEgc3RvcmVkIGluIHRoaXMgdGFibGUgKHVuaXQ6IHNlY29uZCkuIFRoZSB2YWx1ZSBtYXhpbXVtIGlzIDIxNDc0ODM2NDcgYW5kIC0xIG1lYW5zIG5ldmVyIGV4cGlyZWQuIERlZmF1bHQgdG8gLTEuXG4gICAgICovXG4gICAgcHVibGljIHRpbWVUb0xpdmU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpPVFM6OlRhYmxlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NUYWJsZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVGFibGUuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clRhYmxlTmFtZSA9IHRoaXMuZ2V0QXR0KCdUYWJsZU5hbWUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VOYW1lID0gcHJvcHMuaW5zdGFuY2VOYW1lO1xuICAgICAgICB0aGlzLnByaW1hcnlLZXkgPSBwcm9wcy5wcmltYXJ5S2V5O1xuICAgICAgICB0aGlzLnRhYmxlTmFtZSA9IHByb3BzLnRhYmxlTmFtZTtcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gcHJvcHMuY29sdW1ucztcbiAgICAgICAgdGhpcy5kZXZpYXRpb25DZWxsVmVyc2lvbkluU2VjID0gcHJvcHMuZGV2aWF0aW9uQ2VsbFZlcnNpb25JblNlYztcbiAgICAgICAgdGhpcy5tYXhWZXJzaW9ucyA9IHByb3BzLm1heFZlcnNpb25zO1xuICAgICAgICB0aGlzLnJlc2VydmVkVGhyb3VnaHB1dCA9IHByb3BzLnJlc2VydmVkVGhyb3VnaHB1dDtcbiAgICAgICAgdGhpcy5zZWNvbmRhcnlJbmRpY2VzID0gcHJvcHMuc2Vjb25kYXJ5SW5kaWNlcztcbiAgICAgICAgdGhpcy50aW1lVG9MaXZlID0gcHJvcHMudGltZVRvTGl2ZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnN0YW5jZU5hbWU6IHRoaXMuaW5zdGFuY2VOYW1lLFxuICAgICAgICAgICAgcHJpbWFyeUtleTogdGhpcy5wcmltYXJ5S2V5LFxuICAgICAgICAgICAgdGFibGVOYW1lOiB0aGlzLnRhYmxlTmFtZSxcbiAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuY29sdW1ucyxcbiAgICAgICAgICAgIGRldmlhdGlvbkNlbGxWZXJzaW9uSW5TZWM6IHRoaXMuZGV2aWF0aW9uQ2VsbFZlcnNpb25JblNlYyxcbiAgICAgICAgICAgIG1heFZlcnNpb25zOiB0aGlzLm1heFZlcnNpb25zLFxuICAgICAgICAgICAgcmVzZXJ2ZWRUaHJvdWdocHV0OiB0aGlzLnJlc2VydmVkVGhyb3VnaHB1dCxcbiAgICAgICAgICAgIHNlY29uZGFyeUluZGljZXM6IHRoaXMuc2Vjb25kYXJ5SW5kaWNlcyxcbiAgICAgICAgICAgIHRpbWVUb0xpdmU6IHRoaXMudGltZVRvTGl2ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVGFibGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NUYWJsZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ29sdW1uc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBUaGUgdHlwZSBvZiB0aGUgY29sdW1uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBjb2x1bW4gbmFtZSBvZiB0aGUgY29sdW1uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ29sdW1uc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb2x1bW5zUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVGFibGVfQ29sdW1uc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50eXBlKSk7XG4gICAgaWYocHJvcGVydGllcy50eXBlICYmICh0eXBlb2YgcHJvcGVydGllcy50eXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJJTlRFR0VSXCIsXCJTVFJJTkdcIixcIkJJTkFSWVwiLFwiQk9PTEVBTlwiLFwiRE9VQkxFXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubmFtZSxcbiAgICAgICAgICByZWc6IC9bX2EtekEtWl1bX2EtekEtWjAtOV17MCwyNTR9L1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNvbHVtbnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpUYWJsZS5Db2x1bW5zYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb2x1bW5zUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6VGFibGUuQ29sdW1uc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NUYWJsZUNvbHVtbnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zVGFibGVfQ29sdW1uc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50eXBlKSxcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NUYWJsZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJpbWFyeUtleVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBUeXBlIGZvciBwcmltYXJ5IGtleS4gT25seSBJTlRFR0VSLCBTVFJJTkcgb3IgQklOQVJZIGlzIGFsbG93ZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0eXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZTogTmFtZSBmb3IgcHJpbWFyeSBrZXkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQcmltYXJ5S2V5UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByaW1hcnlLZXlQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NUYWJsZV9QcmltYXJ5S2V5UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50eXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIklOVEVHRVJcIixcIlNUUklOR1wiLFwiQklOQVJZXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubmFtZSxcbiAgICAgICAgICByZWc6IC9bX2EtekEtWl1bX2EtekEtWjAtOV17MCwyNTR9L1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlByaW1hcnlLZXlQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpUYWJsZS5QcmltYXJ5S2V5YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQcmltYXJ5S2V5UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6VGFibGUuUHJpbWFyeUtleWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NUYWJsZVByaW1hcnlLZXlQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zVGFibGVfUHJpbWFyeUtleVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50eXBlKSxcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NUYWJsZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVzZXJ2ZWRUaHJvdWdocHV0UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlYWQ6IFRoZSByZWFkIHNlcnZpY2UgY2FwYWJpbGl0eSB1bml0IGNvbnN1bWVkIGJ5IHRoaXMgb3BlcmF0aW9uIG9yIHRoZSByZXNlcnZlZCByZWFkIHRocm91Z2hwdXQgb2YgdGhlIHRhYmxlLiBEZWZhdWx0IHRvIDAuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZWFkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgd3JpdGU6IFRoZSB3cml0ZSBzZXJ2aWNlIGNhcGFiaWxpdHkgdW5pdCBjb25zdW1lZCBieSB0aGlzIG9wZXJhdGlvbiBvciB0aGUgcmVzZXJ2ZWQgd3JpdGUgdGhyb3VnaHB1dCBvZiB0aGUgdGFibGUuIERlZmF1bHQgdG8gMC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHdyaXRlOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZXNlcnZlZFRocm91Z2hwdXRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVzZXJ2ZWRUaHJvdWdocHV0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVGFibGVfUmVzZXJ2ZWRUaHJvdWdocHV0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWFkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlYWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlYWQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlYWQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlYWQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWFkLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiA1MDAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWFkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnJlYWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dyaXRlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLndyaXRlKSk7XG4gICAgaWYocHJvcGVydGllcy53cml0ZSAmJiAodHlwZW9mIHByb3BlcnRpZXMud3JpdGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dyaXRlJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMud3JpdGUsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDUwMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dyaXRlJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLndyaXRlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJlc2VydmVkVGhyb3VnaHB1dFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlRhYmxlLlJlc2VydmVkVGhyb3VnaHB1dGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVzZXJ2ZWRUaHJvdWdocHV0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6VGFibGUuUmVzZXJ2ZWRUaHJvdWdocHV0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1RhYmxlUmVzZXJ2ZWRUaHJvdWdocHV0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1RhYmxlX1Jlc2VydmVkVGhyb3VnaHB1dFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgUmVhZDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWFkKSxcbiAgICAgIFdyaXRlOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndyaXRlKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1RhYmxlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZWNvbmRhcnlJbmRpY2VzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluZGV4TmFtZTogVGhlIGluZGV4IG5hbWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmRleE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb2x1bW5zOiBUaGUgY29sdW1ucyBvZiB0aGUgaW5kZXguXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb2x1bW5zOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByaW1hcnlLZXlzOiBUaGUgcHJpbWFyeSBrZXlzIG9mIHRoZSBpbmRleC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByaW1hcnlLZXlzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluZGV4VHlwZTogVGhlIGluZGV4IHR5cGVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGluZGV4VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFNlY29uZGFyeUluZGljZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2Vjb25kYXJ5SW5kaWNlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1RhYmxlX1NlY29uZGFyeUluZGljZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luZGV4TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbmRleE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luZGV4TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbmRleE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbHVtbnMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29sdW1ucykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29sdW1ucycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuY29sdW1ucykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpbWFyeUtleXMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJpbWFyeUtleXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW1hcnlLZXlzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5wcmltYXJ5S2V5cykpO1xuICAgIGlmKHByb3BlcnRpZXMuaW5kZXhUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5pbmRleFR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luZGV4VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluZGV4VHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJHbG9iYWxcIixcIkxvY2FsXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5kZXhUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluZGV4VHlwZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJTZWNvbmRhcnlJbmRpY2VzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6VGFibGUuU2Vjb25kYXJ5SW5kaWNlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2Vjb25kYXJ5SW5kaWNlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlRhYmxlLlNlY29uZGFyeUluZGljZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVGFibGVTZWNvbmRhcnlJbmRpY2VzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1RhYmxlX1NlY29uZGFyeUluZGljZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIEluZGV4TmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbmRleE5hbWUpLFxuICAgICAgQ29sdW1uczogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29sdW1ucyksXG4gICAgICBQcmltYXJ5S2V5czogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucHJpbWFyeUtleXMpLFxuICAgICAgSW5kZXhUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluZGV4VHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46Ok9UUzo6VnBjQmluZGVyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1ZwY0JpbmRlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IEluc3RhbmNlIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNzOiBWcGMgYmluZGluZyBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY3M6IEFycmF5PFJvc1ZwY0JpbmRlci5WcGNzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1ZwY0JpbmRlclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NWcGNCaW5kZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NWcGNCaW5kZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY3MnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudnBjcykpO1xuICAgIGlmKHByb3BlcnRpZXMudnBjcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnZwY3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy52cGNzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy52cGNzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY3MnLCByb3MubGlzdFZhbGlkYXRvcihSb3NWcGNCaW5kZXJfVnBjc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy52cGNzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1ZwY0JpbmRlclByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlZwY0JpbmRlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVnBjQmluZGVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9UUzo6VnBjQmluZGVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1ZwY0JpbmRlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVnBjQmluZGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgSW5zdGFuY2VOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSksXG4gICAgICBWcGNzOiByb3MubGlzdE1hcHBlcihyb3NWcGNCaW5kZXJWcGNzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnZwY3MpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46Ok9UUzo6VnBjQmluZGVyYFxuICovXG5leHBvcnQgY2xhc3MgUm9zVnBjQmluZGVyIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpPVFM6OlZwY0JpbmRlclwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERvbWFpbnM6IFRoZSBkb21haW4gbmFtZXMgdXNlZCB0byBhY2Nlc3MgdGhlIE9UUyBpbnN0YW5jZSBpbiB0aGUgVlBDLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRG9tYWluczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBFbmRwb2ludHM6IFByaXZhdGUgbmV0d29yayBhZGRyZXNzZXMgdXNlZCB0byBhY2Nlc3MgdGhlIE9UUyBpbnN0YW5jZSBpbiB0aGUgVlBDLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRW5kcG9pbnRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IEluc3RhbmNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjczogVnBjIGJpbmRpbmcgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgdnBjczogQXJyYXk8Um9zVnBjQmluZGVyLlZwY3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6T1RTOjpWcGNCaW5kZXJgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1ZwY0JpbmRlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVnBjQmluZGVyLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJEb21haW5zID0gdGhpcy5nZXRBdHQoJ0RvbWFpbnMnKTtcbiAgICAgICAgdGhpcy5hdHRyRW5kcG9pbnRzID0gdGhpcy5nZXRBdHQoJ0VuZHBvaW50cycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5pbnN0YW5jZU5hbWUgPSBwcm9wcy5pbnN0YW5jZU5hbWU7XG4gICAgICAgIHRoaXMudnBjcyA9IHByb3BzLnZwY3M7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiB0aGlzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICAgIHZwY3M6IHRoaXMudnBjcyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVnBjQmluZGVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zVnBjQmluZGVyIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBWcGNzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZwY0lkOiBWcGMgSWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluc3RhbmNlVnBjTmFtZTogQ3VzdG9tIG5hbWUsIG5lZWQgdG8gYmUgdW5pcXVlIHVuZGVyIHRoZSBPVFMgaW5zdGFuY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbnN0YW5jZVZwY05hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuZXR3b3JrOiBJbnN0YW5jZSBuZXR3b3JrIHR5cGUuIFRoZSB2YWx1ZXMgYXJlIGFzIGZvbGxvd3M6XG4gICAgICogMSwgdGhlIE5PUk1BTCBpbnN0YW5jZSBkb2VzIG5vdCBsaW1pdCB0aGUgc291cmNlIG9mIHRoZSByZXF1ZXN0LiAoRGVmYXVsdHMpXG4gICAgICogMi4gQSBWUEMgaW5zdGFuY2Ugb25seSBhbGxvd3MgcmVxdWVzdHMgZnJvbSBhbGwgVlBDcyBpdCBpcyBib3VuZCB0by5cbiAgICAgKiAzLCBWUENfQ09OU09MRSBpbnN0YW5jZSBvbmx5IGFsbG93cyByZXF1ZXN0cyBmcm9tIHRoZSBjb25zb2xlIGFuZCBhbGwgVlBDcyBpdCBpcyBib3VuZCB0b1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmV0d29yazogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZpcnR1YWxTd2l0Y2hJZDogdlN3aXRjaCBJZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZpcnR1YWxTd2l0Y2hJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVnBjc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBWcGNzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVnBjQmluZGVyX1ZwY3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VWcGNOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluc3RhbmNlVnBjTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuaW5zdGFuY2VWcGNOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnN0YW5jZVZwY05hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlVnBjTmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZVZwY05hbWUsXG4gICAgICAgICAgcmVnOiAvW2EtekEtWl1bYS16QS1aMC05XXsyLDE1fS9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlVnBjTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZVZwY05hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ldHdvcmsnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmV0d29yaykpO1xuICAgIGlmKHByb3BlcnRpZXMubmV0d29yayAmJiAodHlwZW9mIHByb3BlcnRpZXMubmV0d29yaykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV0d29yaycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm5ldHdvcmssXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiTk9STUFMXCIsXCJWUENcIixcIlZQQ19DT05TT0xFXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV0d29yaycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uZXR3b3JrKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2aXJ0dWFsU3dpdGNoSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudmlydHVhbFN3aXRjaElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2aXJ0dWFsU3dpdGNoSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmlydHVhbFN3aXRjaElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlZwY3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6T1RTOjpWcGNCaW5kZXIuVnBjc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVnBjc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPVFM6OlZwY0JpbmRlci5WcGNzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1ZwY0JpbmRlclZwY3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zVnBjQmluZGVyX1ZwY3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFZwY0lkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZwY0lkKSxcbiAgICAgIEluc3RhbmNlVnBjTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZVZwY05hbWUpLFxuICAgICAgTmV0d29yazogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uZXR3b3JrKSxcbiAgICAgIFZpcnR1YWxTd2l0Y2hJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52aXJ0dWFsU3dpdGNoSWQpLFxuICAgIH07XG59XG4iXX0=