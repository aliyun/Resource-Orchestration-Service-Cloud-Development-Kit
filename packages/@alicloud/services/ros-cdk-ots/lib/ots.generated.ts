// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instance
 */
export interface RosInstanceProps {

    /**
     * @Property instanceName: The name of the instance.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * @Property clusterType: Cluster type, the default is SSD. 
     * This parameter specifies the specification of the ots instance.
     *  When the value is SSD, the ots instance is a high-performance instance.
     *  When the value is Hybid, the ots instance is a capacity instance
     */
    readonly clusterType?: string | ros.IResolvable;

    /**
     * @Property description: Instance description.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property network: Instance network type, default is NORMAL.
     */
    readonly network?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
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
          reg: /^[a-zA-Z][-a-zA-Z0-9]{1,14}[a-zA-Z0-9]$/
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
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'ClusterType': ros.stringToRosTemplate(properties.clusterType),
      'Description': ros.stringToRosTemplate(properties.description),
      'Network': ros.stringToRosTemplate(properties.network),
      'Tags': ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OTS::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::Instance";

    /**
     * @Attribute InstanceName: Instance name
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute PrivateEndpoint: Private endpoint
     */
    public readonly attrPrivateEndpoint: ros.IResolvable;

    /**
     * @Attribute PublicEndpoint: Public endpoint
     */
    public readonly attrPublicEndpoint: ros.IResolvable;

    /**
     * @Attribute VpcEndpoint: Vpc endpoint
     */
    public readonly attrVpcEndpoint: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceName: The name of the instance.
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property clusterType: Cluster type, the default is SSD. 
     * This parameter specifies the specification of the ots instance.
     *  When the value is SSD, the ots instance is a high-performance instance.
     *  When the value is Hybid, the ots instance is a capacity instance
     */
    public clusterType: string | ros.IResolvable | undefined;

    /**
     * @Property description: Instance description.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property network: Instance network type, default is NORMAL.
     */
    public network: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosInstance.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceName: this.instanceName,
            clusterType: this.clusterType,
            description: this.description,
            network: this.network,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosInstanceV2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instancev2
 */
export interface RosInstanceV2Props {

    /**
     * @Property clusterType: Cluster type (i.e. instance specification).
     * Enumeration values:
     * SSD: High performance.
     * HYBRID: Capacity type.
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * @Property instanceName: Instance name.The naming specifications for instances are as follows:
     * Must consist of English letters, numbers or dash lines (-).
     * The first character must be in English letters.
     * The end character cannot be a dash (-).
     * Insensitive case.
     * The length is between 3 and 16 characters.
     *
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * @Property instanceDescription: Example description. The length is limited to between 3-256 characters.
     */
    readonly instanceDescription?: string | ros.IResolvable;

    /**
     * @Property networkSourceAcl: The allowed-network source list. All networks are allowed by default.
     */
    readonly networkSourceAcl?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property networkTypeAcl: The instance allows the network type list, which is allowed by default.
     */
    readonly networkTypeAcl?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: The list of instance tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for instance.
     */
    readonly tags?: RosInstanceV2.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosInstanceV2Props`
 *
 * @param properties - the TypeScript properties of a `RosInstanceV2Props`
 *
 * @returns the result of the validation.
 */
function RosInstanceV2PropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if(properties.instanceName && (typeof properties.instanceName) !== 'object') {
        errors.collect(ros.propertyValidator('instanceName', ros.validateAllowedPattern)({
          data: properties.instanceName,
          reg: /[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9]$/
        }));
    }
    if(properties.instanceName && (Array.isArray(properties.instanceName) || (typeof properties.instanceName) === 'string')) {
        errors.collect(ros.propertyValidator('instanceName', ros.validateLength)({
            data: properties.instanceName.length,
            min: 3,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    if(properties.networkSourceAcl && (Array.isArray(properties.networkSourceAcl) || (typeof properties.networkSourceAcl) === 'string')) {
        errors.collect(ros.propertyValidator('networkSourceAcl', ros.validateLength)({
            data: properties.networkSourceAcl.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('networkSourceAcl', ros.listValidator(ros.validateString))(properties.networkSourceAcl));
    if(properties.networkTypeAcl && (Array.isArray(properties.networkTypeAcl) || (typeof properties.networkTypeAcl) === 'string')) {
        errors.collect(ros.propertyValidator('networkTypeAcl', ros.validateLength)({
            data: properties.networkTypeAcl.length,
            min: undefined,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('networkTypeAcl', ros.listValidator(ros.validateString))(properties.networkTypeAcl));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.instanceDescription && (Array.isArray(properties.instanceDescription) || (typeof properties.instanceDescription) === 'string')) {
        errors.collect(ros.propertyValidator('instanceDescription', ros.validateLength)({
            data: properties.instanceDescription.length,
            min: 3,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('instanceDescription', ros.validateString)(properties.instanceDescription));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
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
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstanceV2_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosInstanceV2Props"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::InstanceV2` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceV2Props`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::InstanceV2` resource.
 */
// @ts-ignore TS6133
function rosInstanceV2PropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstanceV2PropsValidator(properties).assertSuccess();
    }
    return {
      'ClusterType': ros.stringToRosTemplate(properties.clusterType),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'InstanceDescription': ros.stringToRosTemplate(properties.instanceDescription),
      'NetworkSourceACL': ros.listMapper(ros.stringToRosTemplate)(properties.networkSourceAcl),
      'NetworkTypeACL': ros.listMapper(ros.stringToRosTemplate)(properties.networkTypeAcl),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosInstanceV2TagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OTS::InstanceV2`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceV2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instancev2
 */
export class RosInstanceV2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::InstanceV2";

    /**
     * @Attribute InstanceName: Name of the tablestore instance.
     */
    public readonly attrInstanceName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterType: Cluster type (i.e. instance specification).
     * Enumeration values:
     * SSD: High performance.
     * HYBRID: Capacity type.
     */
    public clusterType: string | ros.IResolvable;

    /**
     * @Property instanceName: Instance name.The naming specifications for instances are as follows:
     * Must consist of English letters, numbers or dash lines (-).
     * The first character must be in English letters.
     * The end character cannot be a dash (-).
     * Insensitive case.
     * The length is between 3 and 16 characters.
     *
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property instanceDescription: Example description. The length is limited to between 3-256 characters.
     */
    public instanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property networkSourceAcl: The allowed-network source list. All networks are allowed by default.
     */
    public networkSourceAcl: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property networkTypeAcl: The instance allows the network type list, which is allowed by default.
     */
    public networkTypeAcl: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: The list of instance tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for instance.
     */
    public tags: RosInstanceV2.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceV2Props, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceV2.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceName = this.getAtt('InstanceName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterType = props.clusterType;
        this.instanceName = props.instanceName;
        this.instanceDescription = props.instanceDescription;
        this.networkSourceAcl = props.networkSourceAcl;
        this.networkTypeAcl = props.networkTypeAcl;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterType: this.clusterType,
            instanceName: this.instanceName,
            instanceDescription: this.instanceDescription,
            networkSourceAcl: this.networkSourceAcl,
            networkTypeAcl: this.networkTypeAcl,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstanceV2PropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstanceV2 {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: The value of the tag.
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: The keyword of the tag.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceV2_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OTS::InstanceV2.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OTS::InstanceV2.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceV2TagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstanceV2_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosSearchIndex`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-searchindex
 */
export interface RosSearchIndexProps {

    /**
     * @Property fieldSchemas: list of field_schema.
     */
    readonly fieldSchemas: Array<RosSearchIndex.FieldSchemasProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property indexName: The index name.
     */
    readonly indexName: string | ros.IResolvable;

    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * @Property tableName: The table name of the OTS instance.
     */
    readonly tableName: string | ros.IResolvable;

    /**
     * @Property indexSetting: Index settings
     */
    readonly indexSetting?: RosSearchIndex.IndexSettingProperty | ros.IResolvable;

    /**
     * @Property indexSort: This parameter specifies how data is sorted. 
     * By default, the data is sorted in the same way as the primary key of the table. 
     * If the search index contains NESTED fields, data is not sorted by default.
     */
    readonly indexSort?: RosSearchIndex.IndexSortProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSearchIndexProps`
 *
 * @param properties - the TypeScript properties of a `RosSearchIndexProps`
 *
 * @returns the result of the validation.
 */
function RosSearchIndexPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('indexName', ros.requiredValidator)(properties.indexName));
    errors.collect(ros.propertyValidator('indexName', ros.validateString)(properties.indexName));
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if(properties.instanceName && (typeof properties.instanceName) !== 'object') {
        errors.collect(ros.propertyValidator('instanceName', ros.validateAllowedPattern)({
          data: properties.instanceName,
          reg: /^[a-zA-Z][-a-zA-Z0-9]{1,14}[a-zA-Z0-9]$/
        }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('tableName', ros.requiredValidator)(properties.tableName));
    if(properties.tableName && (typeof properties.tableName) !== 'object') {
        errors.collect(ros.propertyValidator('tableName', ros.validateAllowedPattern)({
          data: properties.tableName,
          reg: /^[_a-zA-Z][_a-zA-Z0-9]{0,254}$/
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
function rosSearchIndexPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSearchIndexPropsValidator(properties).assertSuccess();
    }
    return {
      'FieldSchemas': ros.listMapper(rosSearchIndexFieldSchemasPropertyToRosTemplate)(properties.fieldSchemas),
      'IndexName': ros.stringToRosTemplate(properties.indexName),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'TableName': ros.stringToRosTemplate(properties.tableName),
      'IndexSetting': rosSearchIndexIndexSettingPropertyToRosTemplate(properties.indexSetting),
      'IndexSort': rosSearchIndexIndexSortPropertyToRosTemplate(properties.indexSort),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OTS::SearchIndex`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SearchIndex` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-searchindex
 */
export class RosSearchIndex extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::SearchIndex";

    /**
     * @Attribute IndexName: Index name.
     */
    public readonly attrIndexName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property fieldSchemas: list of field_schema.
     */
    public fieldSchemas: Array<RosSearchIndex.FieldSchemasProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property indexName: The index name.
     */
    public indexName: string | ros.IResolvable;

    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property tableName: The table name of the OTS instance.
     */
    public tableName: string | ros.IResolvable;

    /**
     * @Property indexSetting: Index settings
     */
    public indexSetting: RosSearchIndex.IndexSettingProperty | ros.IResolvable | undefined;

    /**
     * @Property indexSort: This parameter specifies how data is sorted. 
     * By default, the data is sorted in the same way as the primary key of the table. 
     * If the search index contains NESTED fields, data is not sorted by default.
     */
    public indexSort: RosSearchIndex.IndexSortProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSearchIndexProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
        return {
            fieldSchemas: this.fieldSchemas,
            indexName: this.indexName,
            instanceName: this.instanceName,
            tableName: this.tableName,
            indexSetting: this.indexSetting,
            indexSort: this.indexSort,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSearchIndexPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSearchIndex {
    /**
     * @stability external
     */
    export interface FieldSchemasProperty {
        /**
         * @Property isArray: This parameter specifies whether the column is an array. 
     * A value of true indicates that the column is an array. Data written to the column must be a JSON array. 
     * Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
         */
        readonly isArray?: boolean | ros.IResolvable;
        /**
         * @Property enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
         */
        readonly enableSortAndAgg?: boolean | ros.IResolvable;
        /**
         * @Property store: This parameter specifies whether to store the values of the field in the search index. 
     * A value of true indicates that you can read the values of the field directly from the search index without the need to query the table. 
     * This configuration optimizes query performance.
         */
        readonly store?: boolean | ros.IResolvable;
        /**
         * @Property index: This parameter specifies whether to index the column. 
     * The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
         */
        readonly index?: boolean | ros.IResolvable;
        /**
         * @Property analyzer: This parameter specifies the tokenizer. 
     * You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
         */
        readonly analyzer?: string | ros.IResolvable;
        /**
         * @Property subFieldSchemas: This parameter specifies the list of field schemas for subfields. 
     * If the column is a NESTED column, you must specify this parameter to configure the index types of subcolumns in the NESTED column.
         */
        readonly subFieldSchemas?: Array<RosSearchIndex.SubFieldSchemasProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property fieldName: This parameter specifies the name of the field (column) to index. 
     * The field can be a primary key column or an attribute column.
         */
        readonly fieldName: string | ros.IResolvable;
        /**
         * @Property fieldType: This parameter specifies the type of the field. Type: FieldType. 
     * For more information, see the description of field types for a search index.
         */
        readonly fieldType: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FieldSchemasProperty`
 *
 * @param properties - the TypeScript properties of a `FieldSchemasProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_FieldSchemasPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
    if(properties.fieldType && (typeof properties.fieldType) !== 'object') {
        errors.collect(ros.propertyValidator('fieldType', ros.validateAllowedValues)({
          data: properties.fieldType,
          allowedValues: ["FieldType.LONG","FieldType.DOUBLE","FieldType.BOOLEAN","FieldType.KEYWORD","FieldType.TEXT","FieldType.GEOPOINT","FieldType.NESTED"],
        }));
    }
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
function rosSearchIndexFieldSchemasPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSearchIndex_FieldSchemasPropertyValidator(properties).assertSuccess();
    return {
      'IsArray': ros.booleanToRosTemplate(properties.isArray),
      'EnableSortAndAgg': ros.booleanToRosTemplate(properties.enableSortAndAgg),
      'Store': ros.booleanToRosTemplate(properties.store),
      'Index': ros.booleanToRosTemplate(properties.index),
      'Analyzer': ros.stringToRosTemplate(properties.analyzer),
      'SubFieldSchemas': ros.listMapper(rosSearchIndexSubFieldSchemasPropertyToRosTemplate)(properties.subFieldSchemas),
      'FieldName': ros.stringToRosTemplate(properties.fieldName),
      'FieldType': ros.stringToRosTemplate(properties.fieldType),
    };
}

export namespace RosSearchIndex {
    /**
     * @stability external
     */
    export interface FieldSortProperty {
        /**
         * @Property sortMode: Sorting method when there are multiple values in the field.
         */
        readonly sortMode?: string | ros.IResolvable;
        /**
         * @Property sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
         */
        readonly sortOrder?: string | ros.IResolvable;
        /**
         * @Property fieldName: Sorted field name.
         */
        readonly fieldName: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FieldSortProperty`
 *
 * @param properties - the TypeScript properties of a `FieldSortProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_FieldSortPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosSearchIndexFieldSortPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSearchIndex_FieldSortPropertyValidator(properties).assertSuccess();
    return {
      'SortMode': ros.stringToRosTemplate(properties.sortMode),
      'SortOrder': ros.stringToRosTemplate(properties.sortOrder),
      'FieldName': ros.stringToRosTemplate(properties.fieldName),
    };
}

export namespace RosSearchIndex {
    /**
     * @stability external
     */
    export interface GeoDistanceSortProperty {
        /**
         * @Property points: The parameter of GeoDistanceSort
         */
        readonly points: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property sortMode: Sorting method when there are multiple values in the field.
         */
        readonly sortMode?: string | ros.IResolvable;
        /**
         * @Property sortOrder: The sort order can be sorted in ascending or descending order
         */
        readonly sortOrder?: string | ros.IResolvable;
        /**
         * @Property fieldName: Sorted field name.
         */
        readonly fieldName: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `GeoDistanceSortProperty`
 *
 * @param properties - the TypeScript properties of a `GeoDistanceSortProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_GeoDistanceSortPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosSearchIndexGeoDistanceSortPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSearchIndex_GeoDistanceSortPropertyValidator(properties).assertSuccess();
    return {
      'Points': ros.listMapper(ros.objectToRosTemplate)(properties.points),
      'SortMode': ros.stringToRosTemplate(properties.sortMode),
      'SortOrder': ros.stringToRosTemplate(properties.sortOrder),
      'FieldName': ros.stringToRosTemplate(properties.fieldName),
    };
}

export namespace RosSearchIndex {
    /**
     * @stability external
     */
    export interface IndexSettingProperty {
        /**
         * @Property routingFields: You can use this advanced feature to customize routing fields. 
     * You can specify some primary key columns as routing fields. 
     * Tablestore distributes data that is written to a search index to different partitions based on the specified routing fields. 
     * The data with the same routing field values is distributed to the same data partition.
         */
        readonly routingFields?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IndexSettingProperty`
 *
 * @param properties - the TypeScript properties of a `IndexSettingProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_IndexSettingPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosSearchIndexIndexSettingPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSearchIndex_IndexSettingPropertyValidator(properties).assertSuccess();
    return {
      'RoutingFields': ros.listMapper(ros.objectToRosTemplate)(properties.routingFields),
    };
}

export namespace RosSearchIndex {
    /**
     * @stability external
     */
    export interface IndexSortProperty {
        /**
         * @Property sorters: This parameter specifies the sorting methods.  Valid values: 
     * - PrimaryKeySort: The index is sorted by primary key in ascending or descending order.
     * - FieldSort: The index is sorted by a specified column in ascending or descending order.
         */
        readonly sorters: Array<RosSearchIndex.SortersProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IndexSortProperty`
 *
 * @param properties - the TypeScript properties of a `IndexSortProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_IndexSortPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosSearchIndexIndexSortPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSearchIndex_IndexSortPropertyValidator(properties).assertSuccess();
    return {
      'Sorters': ros.listMapper(rosSearchIndexSortersPropertyToRosTemplate)(properties.sorters),
    };
}

export namespace RosSearchIndex {
    /**
     * @stability external
     */
    export interface PrimaryKeySortProperty {
        /**
         * @Property sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
         */
        readonly sortOrder?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PrimaryKeySortProperty`
 *
 * @param properties - the TypeScript properties of a `PrimaryKeySortProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_PrimaryKeySortPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosSearchIndexPrimaryKeySortPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSearchIndex_PrimaryKeySortPropertyValidator(properties).assertSuccess();
    return {
      'SortOrder': ros.stringToRosTemplate(properties.sortOrder),
    };
}

export namespace RosSearchIndex {
    /**
     * @stability external
     */
    export interface ScoreSortProperty {
        /**
         * @Property sortOrder: The sort order can be sorted in ascending or descending order
         */
        readonly sortOrder?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ScoreSortProperty`
 *
 * @param properties - the TypeScript properties of a `ScoreSortProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_ScoreSortPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosSearchIndexScoreSortPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSearchIndex_ScoreSortPropertyValidator(properties).assertSuccess();
    return {
      'SortOrder': ros.stringToRosTemplate(properties.sortOrder),
    };
}

export namespace RosSearchIndex {
    /**
     * @stability external
     */
    export interface SortersProperty {
        /**
         * @Property fieldSort: Sort by field value. 
     * Only fields that are indexed and have sorting and statistical aggregation functions enabled can be pre-sorted
         */
        readonly fieldSort?: RosSearchIndex.FieldSortProperty | ros.IResolvable;
        /**
         * @Property primaryKeySort: You can use PrimaryKeySort to sort the query result based on the order of primary key columns.
         */
        readonly primaryKeySort?: RosSearchIndex.PrimaryKeySortProperty | ros.IResolvable;
        /**
         * @Property scoreSort: You can use ScoreSort to sort the query result by keyword relevance score. 
     * ScoreSort is applicable to scenarios such as full-text indexing. 
     * Note Note that you must set ScoreSort to sort the query result by keyword relevance score. Otherwise, the query result is sorted based on the value of the IndexSort field.
         */
        readonly scoreSort?: RosSearchIndex.ScoreSortProperty | ros.IResolvable;
        /**
         * @Property geoDistanceSort: You can use GeoDistanceSort to sort the query result based on distances of geographical locations.
         */
        readonly geoDistanceSort?: RosSearchIndex.GeoDistanceSortProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SortersProperty`
 *
 * @param properties - the TypeScript properties of a `SortersProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_SortersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosSearchIndexSortersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSearchIndex_SortersPropertyValidator(properties).assertSuccess();
    return {
      'FieldSort': rosSearchIndexFieldSortPropertyToRosTemplate(properties.fieldSort),
      'PrimaryKeySort': rosSearchIndexPrimaryKeySortPropertyToRosTemplate(properties.primaryKeySort),
      'ScoreSort': rosSearchIndexScoreSortPropertyToRosTemplate(properties.scoreSort),
      'GeoDistanceSort': rosSearchIndexGeoDistanceSortPropertyToRosTemplate(properties.geoDistanceSort),
    };
}

export namespace RosSearchIndex {
    /**
     * @stability external
     */
    export interface SubFieldSchemasProperty {
        /**
         * @Property isArray: This parameter specifies whether the column is an array. 
     * A value of true indicates that the column is an array. Data written to the column must be a JSON array. 
     * Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
         */
        readonly isArray?: boolean | ros.IResolvable;
        /**
         * @Property enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
         */
        readonly enableSortAndAgg?: boolean | ros.IResolvable;
        /**
         * @Property store: This parameter specifies whether to store the values of the field in the search index. 
     * A value of true indicates that you can read the values of the field directly from the search index without the need to query the table. 
     * This configuration optimizes query performance.
         */
        readonly store?: boolean | ros.IResolvable;
        /**
         * @Property index: This parameter specifies whether to index the column. 
     * The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
         */
        readonly index?: boolean | ros.IResolvable;
        /**
         * @Property analyzer: This parameter specifies the tokenizer. 
     * You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
         */
        readonly analyzer?: string | ros.IResolvable;
        /**
         * @Property fieldName: This parameter specifies the name of the field (column) to index. 
     * The field can be a primary key column or an attribute column.
         */
        readonly fieldName: string | ros.IResolvable;
        /**
         * @Property fieldType: This parameter specifies the type of the field. Type: FieldType. 
     * For more information, see the description of field types for a search index.
         */
        readonly fieldType: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SubFieldSchemasProperty`
 *
 * @param properties - the TypeScript properties of a `SubFieldSchemasProperty`
 *
 * @returns the result of the validation.
 */
function RosSearchIndex_SubFieldSchemasPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isArray', ros.validateBoolean)(properties.isArray));
    errors.collect(ros.propertyValidator('enableSortAndAgg', ros.validateBoolean)(properties.enableSortAndAgg));
    errors.collect(ros.propertyValidator('store', ros.validateBoolean)(properties.store));
    errors.collect(ros.propertyValidator('index', ros.validateBoolean)(properties.index));
    errors.collect(ros.propertyValidator('analyzer', ros.validateString)(properties.analyzer));
    errors.collect(ros.propertyValidator('fieldName', ros.requiredValidator)(properties.fieldName));
    errors.collect(ros.propertyValidator('fieldName', ros.validateString)(properties.fieldName));
    errors.collect(ros.propertyValidator('fieldType', ros.requiredValidator)(properties.fieldType));
    if(properties.fieldType && (typeof properties.fieldType) !== 'object') {
        errors.collect(ros.propertyValidator('fieldType', ros.validateAllowedValues)({
          data: properties.fieldType,
          allowedValues: ["FieldType.LONG","FieldType.DOUBLE","FieldType.BOOLEAN","FieldType.KEYWORD","FieldType.TEXT","FieldType.GEOPOINT","FieldType.NESTED"],
        }));
    }
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
function rosSearchIndexSubFieldSchemasPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSearchIndex_SubFieldSchemasPropertyValidator(properties).assertSuccess();
    return {
      'IsArray': ros.booleanToRosTemplate(properties.isArray),
      'EnableSortAndAgg': ros.booleanToRosTemplate(properties.enableSortAndAgg),
      'Store': ros.booleanToRosTemplate(properties.store),
      'Index': ros.booleanToRosTemplate(properties.index),
      'Analyzer': ros.stringToRosTemplate(properties.analyzer),
      'FieldName': ros.stringToRosTemplate(properties.fieldName),
      'FieldType': ros.stringToRosTemplate(properties.fieldType),
    };
}

/**
 * Properties for defining a `RosTable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-table
 */
export interface RosTableProps {

    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * @Property primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
     */
    readonly primaryKey: Array<RosTable.PrimaryKeyProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tableName: The table name of the OTS instance.
     */
    readonly tableName: string | ros.IResolvable;

    /**
     * @Property columns: Attribute column for table store.
     */
    readonly columns?: Array<RosTable.ColumnsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
     */
    readonly deviationCellVersionInSec?: number | ros.IResolvable;

    /**
     * @Property maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
     */
    readonly maxVersions?: number | ros.IResolvable;

    /**
     * @Property reservedThroughput: The initial reserved read\/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
     */
    readonly reservedThroughput?: RosTable.ReservedThroughputProperty | ros.IResolvable;

    /**
     * @Property secondaryIndices: The secondary indices of the table.
     */
    readonly secondaryIndices?: Array<RosTable.SecondaryIndicesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
     */
    readonly timeToLive?: number | ros.IResolvable;
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
          reg: /^[a-zA-Z][-a-zA-Z0-9]{1,14}[a-zA-Z0-9]$/
        }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('tableName', ros.requiredValidator)(properties.tableName));
    if(properties.tableName && (typeof properties.tableName) !== 'object') {
        errors.collect(ros.propertyValidator('tableName', ros.validateAllowedPattern)({
          data: properties.tableName,
          reg: /^[_a-zA-Z][_a-zA-Z0-9]{0,254}$/
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
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'PrimaryKey': ros.listMapper(rosTablePrimaryKeyPropertyToRosTemplate)(properties.primaryKey),
      'TableName': ros.stringToRosTemplate(properties.tableName),
      'Columns': ros.listMapper(rosTableColumnsPropertyToRosTemplate)(properties.columns),
      'DeviationCellVersionInSec': ros.numberToRosTemplate(properties.deviationCellVersionInSec),
      'MaxVersions': ros.numberToRosTemplate(properties.maxVersions),
      'ReservedThroughput': rosTableReservedThroughputPropertyToRosTemplate(properties.reservedThroughput),
      'SecondaryIndices': ros.listMapper(rosTableSecondaryIndicesPropertyToRosTemplate)(properties.secondaryIndices),
      'TimeToLive': ros.numberToRosTemplate(properties.timeToLive),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OTS::Table`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Table` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-table
 */
export class RosTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::Table";

    /**
     * @Attribute TableName: Table name
     */
    public readonly attrTableName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceName: The name of the OTS instance in which table will locate.
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
     */
    public primaryKey: Array<RosTable.PrimaryKeyProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tableName: The table name of the OTS instance.
     */
    public tableName: string | ros.IResolvable;

    /**
     * @Property columns: Attribute column for table store.
     */
    public columns: Array<RosTable.ColumnsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
     */
    public deviationCellVersionInSec: number | ros.IResolvable | undefined;

    /**
     * @Property maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
     */
    public maxVersions: number | ros.IResolvable | undefined;

    /**
     * @Property reservedThroughput: The initial reserved read\/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
     */
    public reservedThroughput: RosTable.ReservedThroughputProperty | ros.IResolvable | undefined;

    /**
     * @Property secondaryIndices: The secondary indices of the table.
     */
    public secondaryIndices: Array<RosTable.SecondaryIndicesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
     */
    public timeToLive: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTableProps, enableResourcePropertyConstraint: boolean) {
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
        readonly type: string | ros.IResolvable;
        /**
         * @Property name: The column name of the column.
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
          reg: /^[_a-zA-Z][_a-zA-Z0-9]{0,254}$/
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
      'Type': ros.stringToRosTemplate(properties.type),
      'Name': ros.stringToRosTemplate(properties.name),
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
        readonly type: string | ros.IResolvable;
        /**
         * @Property name: Name for primary key.
         */
        readonly name: string | ros.IResolvable;
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
          reg: /^[_a-zA-Z][_a-zA-Z0-9]{0,254}$/
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
      'Type': ros.stringToRosTemplate(properties.type),
      'Name': ros.stringToRosTemplate(properties.name),
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
        readonly read: number | ros.IResolvable;
        /**
         * @Property write: The write service capability unit consumed by this operation or the reserved write throughput of the table. Default to 0.
         */
        readonly write: number | ros.IResolvable;
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
      'Read': ros.numberToRosTemplate(properties.read),
      'Write': ros.numberToRosTemplate(properties.write),
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
        readonly indexName: string | ros.IResolvable;
        /**
         * @Property columns: The columns of the index.
         */
        readonly columns: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property primaryKeys: The primary keys of the index.
         */
        readonly primaryKeys: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property indexType: The index type
         */
        readonly indexType?: string | ros.IResolvable;
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
      'IndexName': ros.stringToRosTemplate(properties.indexName),
      'Columns': ros.listMapper(ros.stringToRosTemplate)(properties.columns),
      'PrimaryKeys': ros.listMapper(ros.stringToRosTemplate)(properties.primaryKeys),
      'IndexType': ros.stringToRosTemplate(properties.indexType),
    };
}

/**
 * Properties for defining a `RosVpcBinder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vpcbinder
 */
export interface RosVpcBinderProps {

    /**
     * @Property instanceName: Instance name
     */
    readonly instanceName: string | ros.IResolvable;

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
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'Vpcs': ros.listMapper(rosVpcBinderVpcsPropertyToRosTemplate)(properties.vpcs),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::OTS::VpcBinder`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpcBinder` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vpcbinder
 */
export class RosVpcBinder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OTS::VpcBinder";

    /**
     * @Attribute Domains: The domain names used to access the OTS instance in the VPC.
     */
    public readonly attrDomains: ros.IResolvable;

    /**
     * @Attribute Endpoints: Private network addresses used to access the OTS instance in the VPC.
     */
    public readonly attrEndpoints: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceName: Instance name
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property vpcs: Vpc binding configuration.
     */
    public vpcs: Array<RosVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcBinderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpcBinder.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomains = this.getAtt('Domains');
        this.attrEndpoints = this.getAtt('Endpoints');

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
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property instanceVpcName: Custom name, need to be unique under the OTS instance.
         */
        readonly instanceVpcName: string | ros.IResolvable;
        /**
         * @Property network: Instance network type. The values are as follows:
     * 1, the NORMAL instance does not limit the source of the request. (Defaults)
     * 2. A VPC instance only allows requests from all VPCs it is bound to.
     * 3, VPC_CONSOLE instance only allows requests from the console and all VPCs it is bound to
         */
        readonly network: string | ros.IResolvable;
        /**
         * @Property virtualSwitchId: vSwitch Id.
         */
        readonly virtualSwitchId: string | ros.IResolvable;
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
          reg: /^[a-zA-Z][a-zA-Z0-9]{2,15}$/
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
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'InstanceVpcName': ros.stringToRosTemplate(properties.instanceVpcName),
      'Network': ros.stringToRosTemplate(properties.network),
      'VirtualSwitchId': ros.stringToRosTemplate(properties.virtualSwitchId),
    };
}
