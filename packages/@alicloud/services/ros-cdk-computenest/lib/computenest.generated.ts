// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ComputeNest::ServiceInstance`
 */
export interface RosServiceInstanceProps {

    /**
     * @Property service: Service details.
     */
    readonly service: RosServiceInstance.ServiceProperty | ros.IResolvable;

    /**
     * @Property commodity: Cloud market commodity purchase parameters.
     */
    readonly commodity?: RosServiceInstance.CommodityProperty | ros.IResolvable;

    /**
     * @Property contactGroup: Alarm Contact Group.
     */
    readonly contactGroup?: string | ros.IResolvable;

    /**
     * @Property enableInstanceOps: Whether the service instance has the O & M function. Possible values:
     * - true: The service instance has a generation O & M function.
     * - false: The service instance does not have the O & M function.
     */
    readonly enableInstanceOps?: boolean | ros.IResolvable;

    /**
     * @Property enableUserPrometheus: Whether Prometheus monitoring is enabled. Possible values:
     * - true: enabled.
     * - false: not enabled.
     */
    readonly enableUserPrometheus?: boolean | ros.IResolvable;

    /**
     * @Property marketInstanceId: The ID of the cloud marketplace instance.
     */
    readonly marketInstanceId?: string | ros.IResolvable;

    /**
     * @Property name: The name of the service instance.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property operationName: Change operation name.
     */
    readonly operationName?: string | ros.IResolvable;

    /**
     * @Property parameters: The parameters entered by the deployment service instance.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property predefinedParameterName: Package name.
     */
    readonly predefinedParameterName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property specificationCode: Commodity specification Code.
     */
    readonly specificationCode?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of service instance.
     */
    readonly tags?: RosServiceInstance.TagsProperty[];

    /**
     * @Property templateName: Template name.
     */
    readonly templateName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServiceInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosServiceInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('specificationCode', ros.validateString)(properties.specificationCode));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('operationName', ros.validateString)(properties.operationName));
    errors.collect(ros.propertyValidator('enableInstanceOps', ros.validateBoolean)(properties.enableInstanceOps));
    errors.collect(ros.propertyValidator('service', ros.requiredValidator)(properties.service));
    errors.collect(ros.propertyValidator('service', RosServiceInstance_ServicePropertyValidator)(properties.service));
    errors.collect(ros.propertyValidator('predefinedParameterName', ros.validateString)(properties.predefinedParameterName));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('commodity', RosServiceInstance_CommodityPropertyValidator)(properties.commodity));
    errors.collect(ros.propertyValidator('enableUserPrometheus', ros.validateBoolean)(properties.enableUserPrometheus));
    errors.collect(ros.propertyValidator('templateName', ros.validateString)(properties.templateName));
    errors.collect(ros.propertyValidator('marketInstanceId', ros.validateString)(properties.marketInstanceId));
    errors.collect(ros.propertyValidator('contactGroup', ros.validateString)(properties.contactGroup));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosServiceInstance_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosServiceInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ComputeNest::ServiceInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ComputeNest::ServiceInstance` resource.
 */
// @ts-ignore TS6133
function rosServiceInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServiceInstancePropsValidator(properties).assertSuccess();
    }
    return {
      Service: rosServiceInstanceServicePropertyToRosTemplate(properties.service),
      Commodity: rosServiceInstanceCommodityPropertyToRosTemplate(properties.commodity),
      ContactGroup: ros.stringToRosTemplate(properties.contactGroup),
      EnableInstanceOps: ros.booleanToRosTemplate(properties.enableInstanceOps),
      EnableUserPrometheus: ros.booleanToRosTemplate(properties.enableUserPrometheus),
      MarketInstanceId: ros.stringToRosTemplate(properties.marketInstanceId),
      Name: ros.stringToRosTemplate(properties.name),
      OperationName: ros.stringToRosTemplate(properties.operationName),
      Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
      PredefinedParameterName: ros.stringToRosTemplate(properties.predefinedParameterName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SpecificationCode: ros.stringToRosTemplate(properties.specificationCode),
      Tags: ros.listMapper(rosServiceInstanceTagsPropertyToRosTemplate)(properties.tags),
      TemplateName: ros.stringToRosTemplate(properties.templateName),
    };
}

/**
 * A ROS template type:  `ALIYUN::ComputeNest::ServiceInstance`
 */
export class RosServiceInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ComputeNest::ServiceInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Components: Additional billing items.
     */
    public readonly attrComponents: ros.IResolvable;

    /**
     * @Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute EnableInstanceOps: Whether the service instance has the O & M function.
     */
    public readonly attrEnableInstanceOps: ros.IResolvable;

    /**
     * @Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.
     */
    public readonly attrEnableUserPrometheus: ros.IResolvable;

    /**
     * @Attribute IsOperated: Whether the generation O & M function of the service instance is enabled.
     */
    public readonly attrIsOperated: ros.IResolvable;

    /**
     * @Attribute LicenseEndTime: License expiration time.
     */
    public readonly attrLicenseEndTime: ros.IResolvable;

    /**
     * @Attribute Name: The name of the service instance.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute NetworkConfig: Network configuration information.
     */
    public readonly attrNetworkConfig: ros.IResolvable;

    /**
     * @Attribute Outputs: Create the output Field returned by the service instance.
     */
    public readonly attrOutputs: ros.IResolvable;

    /**
     * @Attribute Parameters: The parameters entered by the deployment service instance.
     */
    public readonly attrParameters: ros.IResolvable;

    /**
     * @Attribute PredefinedParameterName: Package name.
     */
    public readonly attrPredefinedParameterName: ros.IResolvable;

    /**
     * @Attribute Progress: The deployment progress of the service instance. Unit:%.
     */
    public readonly attrProgress: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Service: Service details.
     */
    public readonly attrService: ros.IResolvable;

    /**
     * @Attribute ServiceInstanceId: The ID of the service instance.
     */
    public readonly attrServiceInstanceId: ros.IResolvable;

    /**
     * @Attribute ServiceType: Service type.
     */
    public readonly attrServiceType: ros.IResolvable;

    /**
     * @Attribute Source: The source of the service instance.
     */
    public readonly attrSource: ros.IResolvable;

    /**
     * @Attribute StatusDetail: The status description of the deployment instance.
     */
    public readonly attrStatusDetail: ros.IResolvable;

    /**
     * @Attribute SupplierUid: Service provider AliUid.
     */
    public readonly attrSupplierUid: ros.IResolvable;

    /**
     * @Attribute Tags: User-defined labels.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute TemplateName: Template name.
     */
    public readonly attrTemplateName: ros.IResolvable;

    /**
     * @Attribute UpdateTime: Update time.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * @Attribute UserId: AliUid of the user.
     */
    public readonly attrUserId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property service: Service details.
     */
    public service: RosServiceInstance.ServiceProperty | ros.IResolvable;

    /**
     * @Property commodity: Cloud market commodity purchase parameters.
     */
    public commodity: RosServiceInstance.CommodityProperty | ros.IResolvable | undefined;

    /**
     * @Property contactGroup: Alarm Contact Group.
     */
    public contactGroup: string | ros.IResolvable | undefined;

    /**
     * @Property enableInstanceOps: Whether the service instance has the O & M function. Possible values:
     * - true: The service instance has a generation O & M function.
     * - false: The service instance does not have the O & M function.
     */
    public enableInstanceOps: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableUserPrometheus: Whether Prometheus monitoring is enabled. Possible values:
     * - true: enabled.
     * - false: not enabled.
     */
    public enableUserPrometheus: boolean | ros.IResolvable | undefined;

    /**
     * @Property marketInstanceId: The ID of the cloud marketplace instance.
     */
    public marketInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the service instance.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property operationName: Change operation name.
     */
    public operationName: string | ros.IResolvable | undefined;

    /**
     * @Property parameters: The parameters entered by the deployment service instance.
     */
    public parameters: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property predefinedParameterName: Package name.
     */
    public predefinedParameterName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property specificationCode: Commodity specification Code.
     */
    public specificationCode: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of service instance.
     */
    public tags: RosServiceInstance.TagsProperty[] | undefined;

    /**
     * @Property templateName: Template name.
     */
    public templateName: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ComputeNest::ServiceInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServiceInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrComponents = this.getAtt('Components');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEnableInstanceOps = this.getAtt('EnableInstanceOps');
        this.attrEnableUserPrometheus = this.getAtt('EnableUserPrometheus');
        this.attrIsOperated = this.getAtt('IsOperated');
        this.attrLicenseEndTime = this.getAtt('LicenseEndTime');
        this.attrName = this.getAtt('Name');
        this.attrNetworkConfig = this.getAtt('NetworkConfig');
        this.attrOutputs = this.getAtt('Outputs');
        this.attrParameters = this.getAtt('Parameters');
        this.attrPredefinedParameterName = this.getAtt('PredefinedParameterName');
        this.attrProgress = this.getAtt('Progress');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrService = this.getAtt('Service');
        this.attrServiceInstanceId = this.getAtt('ServiceInstanceId');
        this.attrServiceType = this.getAtt('ServiceType');
        this.attrSource = this.getAtt('Source');
        this.attrStatusDetail = this.getAtt('StatusDetail');
        this.attrSupplierUid = this.getAtt('SupplierUid');
        this.attrTags = this.getAtt('Tags');
        this.attrTemplateName = this.getAtt('TemplateName');
        this.attrUpdateTime = this.getAtt('UpdateTime');
        this.attrUserId = this.getAtt('UserId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.service = props.service;
        this.commodity = props.commodity;
        this.contactGroup = props.contactGroup;
        this.enableInstanceOps = props.enableInstanceOps;
        this.enableUserPrometheus = props.enableUserPrometheus;
        this.marketInstanceId = props.marketInstanceId;
        this.name = props.name;
        this.operationName = props.operationName;
        this.parameters = props.parameters;
        this.predefinedParameterName = props.predefinedParameterName;
        this.resourceGroupId = props.resourceGroupId;
        this.specificationCode = props.specificationCode;
        this.tags = props.tags;
        this.templateName = props.templateName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            service: this.service,
            commodity: this.commodity,
            contactGroup: this.contactGroup,
            enableInstanceOps: this.enableInstanceOps,
            enableUserPrometheus: this.enableUserPrometheus,
            marketInstanceId: this.marketInstanceId,
            name: this.name,
            operationName: this.operationName,
            parameters: this.parameters,
            predefinedParameterName: this.predefinedParameterName,
            resourceGroupId: this.resourceGroupId,
            specificationCode: this.specificationCode,
            tags: this.tags,
            templateName: this.templateName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServiceInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosServiceInstance {
    /**
     * @stability external
     */
    export interface CommodityProperty {
        /**
         * @Property payPeriod: Cloud Market Goods Purchase Duration.
         */
        readonly payPeriod?: number | ros.IResolvable;
        /**
         * @Property payPeriodUnit: Cloud market goods purchase time unit, possible value:
     * - Month: monthly purchase
     * - Year: buy on an annual basis.
         */
        readonly payPeriodUnit?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CommodityProperty`
 *
 * @param properties - the TypeScript properties of a `CommodityProperty`
 *
 * @returns the result of the validation.
 */
function RosServiceInstance_CommodityPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('payPeriod', ros.validateNumber)(properties.payPeriod));
    errors.collect(ros.propertyValidator('payPeriodUnit', ros.validateString)(properties.payPeriodUnit));
    return errors.wrap('supplied properties not correct for "CommodityProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ComputeNest::ServiceInstance.Commodity` resource
 *
 * @param properties - the TypeScript properties of a `CommodityProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ComputeNest::ServiceInstance.Commodity` resource.
 */
// @ts-ignore TS6133
function rosServiceInstanceCommodityPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServiceInstance_CommodityPropertyValidator(properties).assertSuccess();
    return {
      PayPeriod: ros.numberToRosTemplate(properties.payPeriod),
      PayPeriodUnit: ros.stringToRosTemplate(properties.payPeriodUnit),
    };
}

export namespace RosServiceInstance {
    /**
     * @stability external
     */
    export interface ServiceProperty {
        /**
         * @Property version: Service version.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property serviceId: The service ID.
         */
        readonly serviceId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ServiceProperty`
 *
 * @param properties - the TypeScript properties of a `ServiceProperty`
 *
 * @returns the result of the validation.
 */
function RosServiceInstance_ServicePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('serviceId', ros.requiredValidator)(properties.serviceId));
    errors.collect(ros.propertyValidator('serviceId', ros.validateString)(properties.serviceId));
    return errors.wrap('supplied properties not correct for "ServiceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ComputeNest::ServiceInstance.Service` resource
 *
 * @param properties - the TypeScript properties of a `ServiceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ComputeNest::ServiceInstance.Service` resource.
 */
// @ts-ignore TS6133
function rosServiceInstanceServicePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServiceInstance_ServicePropertyValidator(properties).assertSuccess();
    return {
      Version: ros.stringToRosTemplate(properties.version),
      ServiceId: ros.stringToRosTemplate(properties.serviceId),
    };
}

export namespace RosServiceInstance {
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
function RosServiceInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ComputeNest::ServiceInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ComputeNest::ServiceInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosServiceInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServiceInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}
