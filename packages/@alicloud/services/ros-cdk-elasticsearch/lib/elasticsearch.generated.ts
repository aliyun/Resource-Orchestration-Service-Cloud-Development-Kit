// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ElasticSearch::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property dataNode: The Elasticsearch cluster's data node setting.
     */
    readonly dataNode: RosInstance.DataNodeProperty | ros.IResolvable;

    /**
     * @Property password: The password of the instance. The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!@#$%&*()_+-=).
     */
    readonly password: string | ros.IResolvable;

    /**
     * @Property version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
     */
    readonly version: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of VSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property enableKibanaPrivate: Enables or disables intranet access to Kibana.
     */
    readonly enableKibanaPrivate?: boolean | ros.IResolvable;

    /**
     * @Property enableKibanaPublic: Enables or disables Internet access to Kibana.
     */
    readonly enableKibanaPublic?: boolean | ros.IResolvable;

    /**
     * @Property enablePublic: Whether enable public access. If properties is true, will allocate public address.Default: false.
     */
    readonly enablePublic?: boolean | ros.IResolvable;

    /**
     * @Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property kibanaNode: The dedicated kibana node setting.
     */
    readonly kibanaNode?: RosInstance.KibanaNodeProperty | ros.IResolvable;

    /**
     * @Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
     */
    readonly kibanaWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
     */
    readonly masterNode?: RosInstance.MasterNodeProperty | ros.IResolvable;

    /**
     * @Property period: The duration that you will buy Elasticsearch instance. It is valid when instance_charge_type is PrePaid. Unit is Month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Unit is Year, it could be from 1 to 3. Default value is 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property privateWhitelist: Set the instance's IP whitelist in VPC network.
     */
    readonly privateWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property publicWhitelist: Set the instance's IP whitelist in Internet. The AllocatePublicAddress should be true.
     */
    readonly publicWhitelist?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];

    /**
     * @Property ymlConfig: In the YML Configuration section of the Cluster 
     * Configuration page of your Alibaba Cloud Elasticsearch cluster, 
     * you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
     */
    readonly ymlConfig?: RosInstance.YMLConfigProperty | ros.IResolvable;

    /**
     * @Property zoneCount: undefined
     */
    readonly zoneCount?: number | ros.IResolvable;

    /**
     * @Property zoneId: The zone id of elasticsearch.
     */
    readonly zoneId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('masterNode', RosInstance_MasterNodePropertyValidator)(properties.masterNode));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('kibanaNode', RosInstance_KibanaNodePropertyValidator)(properties.kibanaNode));
    errors.collect(ros.propertyValidator('enableKibanaPrivate', ros.validateBoolean)(properties.enableKibanaPrivate));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('publicWhitelist', ros.listValidator(ros.validateAny))(properties.publicWhitelist));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('enableKibanaPublic', ros.validateBoolean)(properties.enableKibanaPublic));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('enablePublic', ros.validateBoolean)(properties.enablePublic));
    errors.collect(ros.propertyValidator('privateWhitelist', ros.listValidator(ros.validateAny))(properties.privateWhitelist));
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('dataNode', ros.requiredValidator)(properties.dataNode));
    errors.collect(ros.propertyValidator('dataNode', RosInstance_DataNodePropertyValidator)(properties.dataNode));
    errors.collect(ros.propertyValidator('kibanaWhitelist', ros.listValidator(ros.validateAny))(properties.kibanaWhitelist));
    errors.collect(ros.propertyValidator('ymlConfig', RosInstance_YMLConfigPropertyValidator)(properties.ymlConfig));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstance_TagsPropertyValidator))(properties.tags));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    if(properties.zoneCount && (typeof properties.zoneCount) !== 'object') {
        errors.collect(ros.propertyValidator('zoneCount', ros.validateAllowedValues)({
          data: properties.zoneCount,
          allowedValues: [1,2,3],
        }));
    }
    errors.collect(ros.propertyValidator('zoneCount', ros.validateNumber)(properties.zoneCount));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      DataNode: rosInstanceDataNodePropertyToRosTemplate(properties.dataNode),
      Password: ros.stringToRosTemplate(properties.password),
      Version: ros.stringToRosTemplate(properties.version),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      Description: ros.stringToRosTemplate(properties.description),
      EnableKibanaPrivate: ros.booleanToRosTemplate(properties.enableKibanaPrivate),
      EnableKibanaPublic: ros.booleanToRosTemplate(properties.enableKibanaPublic),
      EnablePublic: ros.booleanToRosTemplate(properties.enablePublic),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      KibanaNode: rosInstanceKibanaNodePropertyToRosTemplate(properties.kibanaNode),
      KibanaWhitelist: ros.listMapper(ros.objectToRosTemplate)(properties.kibanaWhitelist),
      MasterNode: rosInstanceMasterNodePropertyToRosTemplate(properties.masterNode),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      PrivateWhitelist: ros.listMapper(ros.objectToRosTemplate)(properties.privateWhitelist),
      PublicWhitelist: ros.listMapper(ros.objectToRosTemplate)(properties.publicWhitelist),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
      YMLConfig: rosInstanceYMLConfigPropertyToRosTemplate(properties.ymlConfig),
      ZoneCount: ros.numberToRosTemplate(properties.zoneCount),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ElasticSearch::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ElasticSearch::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Domain: Instance connection domain (only VPC network access supported).
     */
    public readonly attrDomain: ros.IResolvable;

    /**
     * @Attribute InstanceChargeType: Instance charge type.
     */
    public readonly attrInstanceChargeType: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the Elasticsearch instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute KibanaDomain: Kibana console domain (Internet access supported).
     */
    public readonly attrKibanaDomain: ros.IResolvable;

    /**
     * @Attribute KibanaPort: Kibana console port.
     */
    public readonly attrKibanaPort: ros.IResolvable;

    /**
     * @Attribute Port:  Instance connection port.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * @Attribute PublicDomain: Instance public connection domain.
     */
    public readonly attrPublicDomain: ros.IResolvable;

    /**
     * @Attribute Status: The Elasticsearch instance status. Includes active, activating, inactive. Some operations are denied when status is not active.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The ID of VSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute Version: Elasticsearch version.
     */
    public readonly attrVersion: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dataNode: The Elasticsearch cluster's data node setting.
     */
    public dataNode: RosInstance.DataNodeProperty | ros.IResolvable;

    /**
     * @Property password: The password of the instance. The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!@#$%&*()_+-=).
     */
    public password: string | ros.IResolvable;

    /**
     * @Property version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
     */
    public version: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of VSwitch.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property enableKibanaPrivate: Enables or disables intranet access to Kibana.
     */
    public enableKibanaPrivate: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableKibanaPublic: Enables or disables Internet access to Kibana.
     */
    public enableKibanaPublic: boolean | ros.IResolvable | undefined;

    /**
     * @Property enablePublic: Whether enable public access. If properties is true, will allocate public address.Default: false.
     */
    public enablePublic: boolean | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property kibanaNode: The dedicated kibana node setting.
     */
    public kibanaNode: RosInstance.KibanaNodeProperty | ros.IResolvable | undefined;

    /**
     * @Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
     */
    public kibanaWhitelist: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
     */
    public masterNode: RosInstance.MasterNodeProperty | ros.IResolvable | undefined;

    /**
     * @Property period: The duration that you will buy Elasticsearch instance. It is valid when instance_charge_type is PrePaid. Unit is Month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Unit is Year, it could be from 1 to 3. Default value is 1.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property privateWhitelist: Set the instance's IP whitelist in VPC network.
     */
    public privateWhitelist: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property publicWhitelist: Set the instance's IP whitelist in Internet. The AllocatePublicAddress should be true.
     */
    public publicWhitelist: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosInstance.TagsProperty[] | undefined;

    /**
     * @Property ymlConfig: In the YML Configuration section of the Cluster 
     * Configuration page of your Alibaba Cloud Elasticsearch cluster, 
     * you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
     */
    public ymlConfig: RosInstance.YMLConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property zoneCount: undefined
     */
    public zoneCount: number | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone id of elasticsearch.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ElasticSearch::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomain = this.getAtt('Domain');
        this.attrInstanceChargeType = this.getAtt('InstanceChargeType');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrKibanaDomain = this.getAtt('KibanaDomain');
        this.attrKibanaPort = this.getAtt('KibanaPort');
        this.attrPort = this.getAtt('Port');
        this.attrPublicDomain = this.getAtt('PublicDomain');
        this.attrStatus = this.getAtt('Status');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVersion = this.getAtt('Version');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dataNode = props.dataNode;
        this.password = props.password;
        this.version = props.version;
        this.vSwitchId = props.vSwitchId;
        this.description = props.description;
        this.enableKibanaPrivate = props.enableKibanaPrivate;
        this.enableKibanaPublic = props.enableKibanaPublic;
        this.enablePublic = props.enablePublic;
        this.instanceChargeType = props.instanceChargeType;
        this.kibanaNode = props.kibanaNode;
        this.kibanaWhitelist = props.kibanaWhitelist;
        this.masterNode = props.masterNode;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.privateWhitelist = props.privateWhitelist;
        this.publicWhitelist = props.publicWhitelist;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.ymlConfig = props.ymlConfig;
        this.zoneCount = props.zoneCount;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dataNode: this.dataNode,
            password: this.password,
            version: this.version,
            vSwitchId: this.vSwitchId,
            description: this.description,
            enableKibanaPrivate: this.enableKibanaPrivate,
            enableKibanaPublic: this.enableKibanaPublic,
            enablePublic: this.enablePublic,
            instanceChargeType: this.instanceChargeType,
            kibanaNode: this.kibanaNode,
            kibanaWhitelist: this.kibanaWhitelist,
            masterNode: this.masterNode,
            period: this.period,
            periodUnit: this.periodUnit,
            privateWhitelist: this.privateWhitelist,
            publicWhitelist: this.publicWhitelist,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            ymlConfig: this.ymlConfig,
            zoneCount: this.zoneCount,
            zoneId: this.zoneId,
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
    export interface DataNodeProperty {
        /**
         * @Property diskType: The data node disk type. Supported values: cloud_ssd, cloud_efficiency, cloud_essd
         */
        readonly diskType: string | ros.IResolvable;
        /**
         * @Property diskEncryption: Whether to enable cloud disk encryption.
         */
        readonly diskEncryption?: boolean | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the ESSD. When the storage type is cloud_essd, 
     * this parameter is required and supports PL1, PL2, and PL3.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property amount: The Elasticsearch cluster's data node quantity, between 2 and 50.
         */
        readonly amount: number | ros.IResolvable;
        /**
         * @Property diskSize: The single data node storage space.
     * cloud_ssd: An SSD disk, supports a maximum of 2048 GiB (2 TB).
     * cloud_efficiency: An ultra disk, supports a maximum of 5120 GiB (5 TB). If the data to be stored is larger than 2048 GiB, an ultra disk can only support the following data sizes (GiB): [2560, 3072, 3584, 4096, 4608, 5120].
         */
        readonly diskSize: number | ros.IResolvable;
        /**
         * @Property spec: The data node specifications of the Elasticsearch instance.
         */
        readonly spec: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DataNodeProperty`
 *
 * @param properties - the TypeScript properties of a `DataNodeProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_DataNodePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('diskType', ros.requiredValidator)(properties.diskType));
    if(properties.diskType && (typeof properties.diskType) !== 'object') {
        errors.collect(ros.propertyValidator('diskType', ros.validateAllowedValues)({
          data: properties.diskType,
          allowedValues: ["cloud_ssd","cloud_efficiency","cloud_essd"],
        }));
    }
    errors.collect(ros.propertyValidator('diskType', ros.validateString)(properties.diskType));
    errors.collect(ros.propertyValidator('diskEncryption', ros.validateBoolean)(properties.diskEncryption));
    if(properties.performanceLevel && (typeof properties.performanceLevel) !== 'object') {
        errors.collect(ros.propertyValidator('performanceLevel', ros.validateAllowedValues)({
          data: properties.performanceLevel,
          allowedValues: ["PL1","PL2","PL3"],
        }));
    }
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('amount', ros.requiredValidator)(properties.amount));
    if(properties.amount && (typeof properties.amount) !== 'object') {
        errors.collect(ros.propertyValidator('amount', ros.validateRange)({
            data: properties.amount,
            min: 2,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('amount', ros.validateNumber)(properties.amount));
    errors.collect(ros.propertyValidator('diskSize', ros.requiredValidator)(properties.diskSize));
    errors.collect(ros.propertyValidator('diskSize', ros.validateNumber)(properties.diskSize));
    errors.collect(ros.propertyValidator('spec', ros.requiredValidator)(properties.spec));
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    return errors.wrap('supplied properties not correct for "DataNodeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.DataNode` resource
 *
 * @param properties - the TypeScript properties of a `DataNodeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.DataNode` resource.
 */
// @ts-ignore TS6133
function rosInstanceDataNodePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_DataNodePropertyValidator(properties).assertSuccess();
    return {
      DiskType: ros.stringToRosTemplate(properties.diskType),
      DiskEncryption: ros.booleanToRosTemplate(properties.diskEncryption),
      PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
      Amount: ros.numberToRosTemplate(properties.amount),
      DiskSize: ros.numberToRosTemplate(properties.diskSize),
      Spec: ros.stringToRosTemplate(properties.spec),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface KibanaNodeProperty {
        /**
         * @Property spec: The dedicated kibana node spec.
         */
        readonly spec: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `KibanaNodeProperty`
 *
 * @param properties - the TypeScript properties of a `KibanaNodeProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_KibanaNodePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('spec', ros.requiredValidator)(properties.spec));
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    return errors.wrap('supplied properties not correct for "KibanaNodeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.KibanaNode` resource
 *
 * @param properties - the TypeScript properties of a `KibanaNodeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.KibanaNode` resource.
 */
// @ts-ignore TS6133
function rosInstanceKibanaNodePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_KibanaNodePropertyValidator(properties).assertSuccess();
    return {
      Spec: ros.stringToRosTemplate(properties.spec),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface MasterNodeProperty {
        /**
         * @Property diskType: The dedicated master node disk type.
         */
        readonly diskType?: string | ros.IResolvable;
        /**
         * @Property amount: The dedicated master node quantity. Default to 3.
         */
        readonly amount?: number | ros.IResolvable;
        /**
         * @Property diskSize: The dedicated master node storage space. Default to 20.
         */
        readonly diskSize?: number | ros.IResolvable;
        /**
         * @Property spec: The dedicated master node spec.
         */
        readonly spec: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MasterNodeProperty`
 *
 * @param properties - the TypeScript properties of a `MasterNodeProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_MasterNodePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('diskType', ros.validateString)(properties.diskType));
    errors.collect(ros.propertyValidator('amount', ros.validateNumber)(properties.amount));
    errors.collect(ros.propertyValidator('diskSize', ros.validateNumber)(properties.diskSize));
    errors.collect(ros.propertyValidator('spec', ros.requiredValidator)(properties.spec));
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    return errors.wrap('supplied properties not correct for "MasterNodeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.MasterNode` resource
 *
 * @param properties - the TypeScript properties of a `MasterNodeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.MasterNode` resource.
 */
// @ts-ignore TS6133
function rosInstanceMasterNodePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_MasterNodePropertyValidator(properties).assertSuccess();
    return {
      DiskType: ros.stringToRosTemplate(properties.diskType),
      Amount: ros.numberToRosTemplate(properties.amount),
      DiskSize: ros.numberToRosTemplate(properties.diskSize),
      Spec: ros.stringToRosTemplate(properties.spec),
    };
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface YMLConfigProperty {
        /**
         * @Property createIndex: Specifies whether to automatically create an index when a new document 
     * is uploaded to your Elasticsearch cluster but no index exists. 
     * We recommend that you disable Auto Indexing because indexes created 
     * by this feature may not meet your business requirements. 
     * This parameter corresponds to the action.auto_create_index configuration 
     * item in the YML file. The default value of this configuration item is false.
         */
        readonly createIndex?: string | ros.IResolvable;
        /**
         * @Property destructiveRequiresName: Specifies whether to specify the index name when you delete an index. 
     * If you set this parameter to Allow Wildcards, you can use wildcards to 
     * delete multiple indexes at a time. Deleted indexes cannot be recovered. 
     * Exercise caution when you configure this parameter.
     * This parameter corresponds to the action.destructive_requires_name configuration 
     * item in the YML file. The default value of this configuration item is true.
         */
        readonly destructiveRequiresName?: boolean | ros.IResolvable;
        /**
         * @Property otherConfigs: Other Configurations.
         */
        readonly otherConfigs?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property watcher: If you enable Watcher, you can use the X-Pack Watcher feature. 
     * You must clear the .watcher-history* index on a regular basis to free up disk space.
     * This parameter corresponds to the xpack.watcher.enabled configuration item in the YML file. 
     * The default value of this configuration item is false.
         */
        readonly watcher?: boolean | ros.IResolvable;
        /**
         * @Property auditLog: If you enable Audit Log Indexing, the system generates audit logs 
     * for the create, delete, modify, and search operations that are performed 
     * in the Elasticsearch cluster. These logs consume disk space and affect 
     * cluster performance. Therefore, we recommend that you disable Audit Log 
     * Indexing and exercise caution when you configure this parameter.
     * This parameter is unavailable for Elasticsearch clusters of V7.0 or later.
         */
        readonly auditLog?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `YMLConfigProperty`
 *
 * @param properties - the TypeScript properties of a `YMLConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_YMLConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('createIndex', ros.validateString)(properties.createIndex));
    errors.collect(ros.propertyValidator('destructiveRequiresName', ros.validateBoolean)(properties.destructiveRequiresName));
    errors.collect(ros.propertyValidator('otherConfigs', ros.hashValidator(ros.validateAny))(properties.otherConfigs));
    errors.collect(ros.propertyValidator('watcher', ros.validateBoolean)(properties.watcher));
    errors.collect(ros.propertyValidator('auditLog', ros.validateBoolean)(properties.auditLog));
    return errors.wrap('supplied properties not correct for "YMLConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.YMLConfig` resource
 *
 * @param properties - the TypeScript properties of a `YMLConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearch::Instance.YMLConfig` resource.
 */
// @ts-ignore TS6133
function rosInstanceYMLConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_YMLConfigPropertyValidator(properties).assertSuccess();
    return {
      CreateIndex: ros.stringToRosTemplate(properties.createIndex),
      DestructiveRequiresName: ros.booleanToRosTemplate(properties.destructiveRequiresName),
      OtherConfigs: ros.hashMapper(ros.objectToRosTemplate)(properties.otherConfigs),
      Watcher: ros.booleanToRosTemplate(properties.watcher),
      AuditLog: ros.booleanToRosTemplate(properties.auditLog),
    };
}
