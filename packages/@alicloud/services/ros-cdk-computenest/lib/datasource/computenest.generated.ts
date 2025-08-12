// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosServiceInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstance
 */
export interface RosServiceInstanceProps {

    /**
     * @Property serviceInstanceId: The ID of the service instance.
     */
    readonly serviceInstanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('serviceInstanceId', ros.requiredValidator)(properties.serviceInstanceId));
    errors.collect(ros.propertyValidator('serviceInstanceId', ros.validateString)(properties.serviceInstanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosServiceInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ComputeNest::ServiceInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ComputeNest::ServiceInstance` resource.
 */
// @ts-ignore TS6133
function rosServiceInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServiceInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'ServiceInstanceId': ros.stringToRosTemplate(properties.serviceInstanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ComputeNest::ServiceInstance`, which type is used to query the information about a service instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstance
 */
export class RosServiceInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ComputeNest::ServiceInstance";

    /**
     * @Attribute Components: Cloud Marketplace additional billing items.
     */
    public readonly attrComponents: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the serviceInstance was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute EnableInstanceOps: Indicates whether the service instance supports the operation feature.
     */
    public readonly attrEnableInstanceOps: ros.IResolvable;

    /**
     * @Attribute EnableUserPrometheus: Whether to enable Prometheus monitoring.
     */
    public readonly attrEnableUserPrometheus: ros.IResolvable;

    /**
     * @Attribute IsOperated: Indicates whether the hosted O&M feature is enabled for the service instance.
     */
    public readonly attrIsOperated: ros.IResolvable;

    /**
     * @Attribute LicenseEndTime: The expiration time of licence.
     */
    public readonly attrLicenseEndTime: ros.IResolvable;

    /**
     * @Attribute MarketInstanceId: The ID of the cloud marketplace instance.
     */
    public readonly attrMarketInstanceId: ros.IResolvable;

    /**
     * @Attribute NetworkConfig: The network configurations.
     */
    public readonly attrNetworkConfig: ros.IResolvable;

    /**
     * @Attribute Outputs: The outputs returned from creating the service instance.
     */
    public readonly attrOutputs: ros.IResolvable;

    /**
     * @Attribute Parameters: The parameters configured for the service instance.
     */
    public readonly attrParameters: ros.IResolvable;

    /**
     * @Attribute PredefinedParameterName: The name of the package .
     */
    public readonly attrPredefinedParameterName: ros.IResolvable;

    /**
     * @Attribute Progress: The deployment progress of the service instance. Unit: percentage.
     */
    public readonly attrProgress: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The resource group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Service: The information about the service to which the service instance belongs.
     */
    public readonly attrService: ros.IResolvable;

    /**
     * @Attribute ServiceInstanceId: The ID of the service instance.
     */
    public readonly attrServiceInstanceId: ros.IResolvable;

    /**
     * @Attribute ServiceInstanceName: The name of the resource.
     */
    public readonly attrServiceInstanceName: ros.IResolvable;

    /**
     * @Attribute ServiceType: The type of the service.
     */
    public readonly attrServiceType: ros.IResolvable;

    /**
     * @Attribute Source: The source of the service instance.
     */
    public readonly attrSource: ros.IResolvable;

    /**
     * @Attribute StatusDetail: The description of the deployment state of the service instance.
     */
    public readonly attrStatusDetail: ros.IResolvable;

    /**
     * @Attribute SupplierUid: The Alibaba Cloud account ID of the service provider.
     */
    public readonly attrSupplierUid: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the service instance.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute TemplateName: The name of the template.
     */
    public readonly attrTemplateName: ros.IResolvable;

    /**
     * @Attribute UpdateTime: The time when the serviceInstance was last updated.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * @Attribute UserId: The AliUid of the user.
     */
    public readonly attrUserId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serviceInstanceId: The ID of the service instance.
     */
    public serviceInstanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

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
        this.attrMarketInstanceId = this.getAtt('MarketInstanceId');
        this.attrNetworkConfig = this.getAtt('NetworkConfig');
        this.attrOutputs = this.getAtt('Outputs');
        this.attrParameters = this.getAtt('Parameters');
        this.attrPredefinedParameterName = this.getAtt('PredefinedParameterName');
        this.attrProgress = this.getAtt('Progress');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrService = this.getAtt('Service');
        this.attrServiceInstanceId = this.getAtt('ServiceInstanceId');
        this.attrServiceInstanceName = this.getAtt('ServiceInstanceName');
        this.attrServiceType = this.getAtt('ServiceType');
        this.attrSource = this.getAtt('Source');
        this.attrStatusDetail = this.getAtt('StatusDetail');
        this.attrSupplierUid = this.getAtt('SupplierUid');
        this.attrTags = this.getAtt('Tags');
        this.attrTemplateName = this.getAtt('TemplateName');
        this.attrUpdateTime = this.getAtt('UpdateTime');
        this.attrUserId = this.getAtt('UserId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceInstanceId = props.serviceInstanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serviceInstanceId: this.serviceInstanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServiceInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosServiceInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstances
 */
export interface RosServiceInstancesProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServiceInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosServiceInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosServiceInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ComputeNest::ServiceInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ComputeNest::ServiceInstances` resource.
 */
// @ts-ignore TS6133
function rosServiceInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServiceInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ComputeNest::ServiceInstances`, which is used to query the information about service instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstances
 */
export class RosServiceInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ComputeNest::ServiceInstances";

    /**
     * @Attribute ServiceInstanceIds: The list of service instance IDs.
     */
    public readonly attrServiceInstanceIds: ros.IResolvable;

    /**
     * @Attribute ServiceInstances: The list of service instances.
     */
    public readonly attrServiceInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServiceInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServiceInstanceIds = this.getAtt('ServiceInstanceIds');
        this.attrServiceInstances = this.getAtt('ServiceInstances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServiceInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
