// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosIntranetConnectorEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint
 */
export interface RosIntranetConnectorEndpointProps {

    /**
     * @Property endpointRegionId: The region ID of the endpoint.
     */
    readonly endpointRegionId: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC to which the endpoint belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property description: The description of the endpoint, supporting full character set. The length must not exceed 500 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property enablePrivateZone: Whether to enable the private zone.
     * This parameter is only valid when the access point type is Managed.
     */
    readonly enablePrivateZone?: boolean | ros.IResolvable;

    /**
     * @Property name: The name of the endpoint, supporting full character set except space. The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS. Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
     * Hosted access points do not require incoming.
     */
    readonly resourceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property type: The type of the endpoint.
     * - Private (default) : private access point
     * - Managed: managed access point.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosIntranetConnectorEndpointProps`
 *
 * @param properties - the TypeScript properties of a `RosIntranetConnectorEndpointProps`
 *
 * @returns the result of the validation.
 */
function RosIntranetConnectorEndpointPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enablePrivateZone', ros.validateBoolean)(properties.enablePrivateZone));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Private","Managed"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('endpointRegionId', ros.requiredValidator)(properties.endpointRegionId));
    errors.collect(ros.propertyValidator('endpointRegionId', ros.validateString)(properties.endpointRegionId));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.resourceIds && (Array.isArray(properties.resourceIds) || (typeof properties.resourceIds) === 'string')) {
        errors.collect(ros.propertyValidator('resourceIds', ros.validateLength)({
            data: properties.resourceIds.length,
            min: undefined,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('resourceIds', ros.listValidator(ros.validateString))(properties.resourceIds));
    if(properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedPattern)({
          data: properties.name,
          reg: /^[^\s]{1,200}$/
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosIntranetConnectorEndpointProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ComputeNest::IntranetConnectorEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `RosIntranetConnectorEndpointProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ComputeNest::IntranetConnectorEndpoint` resource.
 */
// @ts-ignore TS6133
function rosIntranetConnectorEndpointPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIntranetConnectorEndpointPropsValidator(properties).assertSuccess();
    }
    return {
      EndpointRegionId: ros.stringToRosTemplate(properties.endpointRegionId),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      Description: ros.stringToRosTemplate(properties.description),
      EnablePrivateZone: ros.booleanToRosTemplate(properties.enablePrivateZone),
      Name: ros.stringToRosTemplate(properties.name),
      ResourceIds: ros.listMapper(ros.stringToRosTemplate)(properties.resourceIds),
      Type: ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ComputeNest::IntranetConnectorEndpoint`.
 * @Note This class does not contain additional functions, so it is recommended to use the `IntranetConnectorEndpoint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint
 */
export class RosIntranetConnectorEndpoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ComputeNest::IntranetConnectorEndpoint";

    /**
     * @Attribute EndpointId: The ID of the endpoint.
     */
    public readonly attrEndpointId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property endpointRegionId: The region ID of the endpoint.
     */
    public endpointRegionId: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC to which the endpoint belongs.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property description: The description of the endpoint, supporting full character set. The length must not exceed 500 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property enablePrivateZone: Whether to enable the private zone.
     * This parameter is only valid when the access point type is Managed.
     */
    public enablePrivateZone: boolean | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the endpoint, supporting full character set except space. The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS. Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
     * Hosted access points do not require incoming.
     */
    public resourceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property type: The type of the endpoint.
     * - Private (default) : private access point
     * - Managed: managed access point.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIntranetConnectorEndpointProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIntranetConnectorEndpoint.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEndpointId = this.getAtt('EndpointId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.endpointRegionId = props.endpointRegionId;
        this.vpcId = props.vpcId;
        this.description = props.description;
        this.enablePrivateZone = props.enablePrivateZone;
        this.name = props.name;
        this.resourceIds = props.resourceIds;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            endpointRegionId: this.endpointRegionId,
            vpcId: this.vpcId,
            description: this.description,
            enablePrivateZone: this.enablePrivateZone,
            name: this.name,
            resourceIds: this.resourceIds,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIntranetConnectorEndpointPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosServiceInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ComputeNest::ServiceInstance`, which is used to create and deploy a service instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
 */
export class RosServiceInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ComputeNest::ServiceInstance";

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
