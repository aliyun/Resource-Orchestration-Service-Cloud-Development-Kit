import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceInstance } from './computenest.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServiceInstance as ServiceInstanceProperty };

/**
 * Properties for defining a `ServiceInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstance
 */
export interface ServiceInstanceProps {

    /**
     * Property serviceInstanceId: The ID of the service instance.
     */
    readonly serviceInstanceId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `ServiceInstance`.
 */
export interface IServiceInstance extends ros.IResource {
    readonly props: ServiceInstanceProps;

    /**
     * Attribute Components: Cloud Marketplace additional billing items.
     */
    readonly attrComponents: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the serviceInstance was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute EnableInstanceOps: Indicates whether the service instance supports the operation feature.
     */
    readonly attrEnableInstanceOps: ros.IResolvable | string;

    /**
     * Attribute EnableUserPrometheus: Whether to enable Prometheus monitoring.
     */
    readonly attrEnableUserPrometheus: ros.IResolvable | string;

    /**
     * Attribute IsOperated: Indicates whether the hosted O&M feature is enabled for the service instance.
     */
    readonly attrIsOperated: ros.IResolvable | string;

    /**
     * Attribute LicenseEndTime: The expiration time of licence.
     */
    readonly attrLicenseEndTime: ros.IResolvable | string;

    /**
     * Attribute MarketInstanceId: The ID of the cloud marketplace instance.
     */
    readonly attrMarketInstanceId: ros.IResolvable | string;

    /**
     * Attribute NetworkConfig: The network configurations.
     */
    readonly attrNetworkConfig: ros.IResolvable | string;

    /**
     * Attribute Outputs: The outputs returned from creating the service instance.
     */
    readonly attrOutputs: ros.IResolvable | string;

    /**
     * Attribute Parameters: The parameters configured for the service instance.
     */
    readonly attrParameters: ros.IResolvable | string;

    /**
     * Attribute PredefinedParameterName: The name of the package .
     */
    readonly attrPredefinedParameterName: ros.IResolvable | string;

    /**
     * Attribute Progress: The deployment progress of the service instance. Unit: percentage.
     */
    readonly attrProgress: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Service: The information about the service to which the service instance belongs.
     */
    readonly attrService: ros.IResolvable | string;

    /**
     * Attribute ServiceInstanceId: The ID of the service instance.
     */
    readonly attrServiceInstanceId: ros.IResolvable | string;

    /**
     * Attribute ServiceInstanceName: The name of the resource.
     */
    readonly attrServiceInstanceName: ros.IResolvable | string;

    /**
     * Attribute ServiceType: The type of the service.
     */
    readonly attrServiceType: ros.IResolvable | string;

    /**
     * Attribute Source: The source of the service instance.
     */
    readonly attrSource: ros.IResolvable | string;

    /**
     * Attribute StatusDetail: The description of the deployment state of the service instance.
     */
    readonly attrStatusDetail: ros.IResolvable | string;

    /**
     * Attribute SupplierUid: The Alibaba Cloud account ID of the service provider.
     */
    readonly attrSupplierUid: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the service instance.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute TemplateName: The name of the template.
     */
    readonly attrTemplateName: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the serviceInstance was last updated.
     */
    readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute UserId: The AliUid of the user.
     */
    readonly attrUserId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ComputeNest::ServiceInstance`, which type is used to query the information about a service instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstance
 */
export class ServiceInstance extends ros.Resource implements IServiceInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ServiceInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Components: Cloud Marketplace additional billing items.
     */
    public readonly attrComponents: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the serviceInstance was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute EnableInstanceOps: Indicates whether the service instance supports the operation feature.
     */
    public readonly attrEnableInstanceOps: ros.IResolvable | string;

    /**
     * Attribute EnableUserPrometheus: Whether to enable Prometheus monitoring.
     */
    public readonly attrEnableUserPrometheus: ros.IResolvable | string;

    /**
     * Attribute IsOperated: Indicates whether the hosted O&M feature is enabled for the service instance.
     */
    public readonly attrIsOperated: ros.IResolvable | string;

    /**
     * Attribute LicenseEndTime: The expiration time of licence.
     */
    public readonly attrLicenseEndTime: ros.IResolvable | string;

    /**
     * Attribute MarketInstanceId: The ID of the cloud marketplace instance.
     */
    public readonly attrMarketInstanceId: ros.IResolvable | string;

    /**
     * Attribute NetworkConfig: The network configurations.
     */
    public readonly attrNetworkConfig: ros.IResolvable | string;

    /**
     * Attribute Outputs: The outputs returned from creating the service instance.
     */
    public readonly attrOutputs: ros.IResolvable | string;

    /**
     * Attribute Parameters: The parameters configured for the service instance.
     */
    public readonly attrParameters: ros.IResolvable | string;

    /**
     * Attribute PredefinedParameterName: The name of the package .
     */
    public readonly attrPredefinedParameterName: ros.IResolvable | string;

    /**
     * Attribute Progress: The deployment progress of the service instance. Unit: percentage.
     */
    public readonly attrProgress: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Service: The information about the service to which the service instance belongs.
     */
    public readonly attrService: ros.IResolvable | string;

    /**
     * Attribute ServiceInstanceId: The ID of the service instance.
     */
    public readonly attrServiceInstanceId: ros.IResolvable | string;

    /**
     * Attribute ServiceInstanceName: The name of the resource.
     */
    public readonly attrServiceInstanceName: ros.IResolvable | string;

    /**
     * Attribute ServiceType: The type of the service.
     */
    public readonly attrServiceType: ros.IResolvable | string;

    /**
     * Attribute Source: The source of the service instance.
     */
    public readonly attrSource: ros.IResolvable | string;

    /**
     * Attribute StatusDetail: The description of the deployment state of the service instance.
     */
    public readonly attrStatusDetail: ros.IResolvable | string;

    /**
     * Attribute SupplierUid: The Alibaba Cloud account ID of the service provider.
     */
    public readonly attrSupplierUid: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the service instance.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute TemplateName: The name of the template.
     */
    public readonly attrTemplateName: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the serviceInstance was last updated.
     */
    public readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute UserId: The AliUid of the user.
     */
    public readonly attrUserId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosServiceInstance = new RosServiceInstance(this, id,  {
            serviceInstanceId: props.serviceInstanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServiceInstance;
        this.attrComponents = rosServiceInstance.attrComponents;
        this.attrCreateTime = rosServiceInstance.attrCreateTime;
        this.attrEnableInstanceOps = rosServiceInstance.attrEnableInstanceOps;
        this.attrEnableUserPrometheus = rosServiceInstance.attrEnableUserPrometheus;
        this.attrIsOperated = rosServiceInstance.attrIsOperated;
        this.attrLicenseEndTime = rosServiceInstance.attrLicenseEndTime;
        this.attrMarketInstanceId = rosServiceInstance.attrMarketInstanceId;
        this.attrNetworkConfig = rosServiceInstance.attrNetworkConfig;
        this.attrOutputs = rosServiceInstance.attrOutputs;
        this.attrParameters = rosServiceInstance.attrParameters;
        this.attrPredefinedParameterName = rosServiceInstance.attrPredefinedParameterName;
        this.attrProgress = rosServiceInstance.attrProgress;
        this.attrResourceGroupId = rosServiceInstance.attrResourceGroupId;
        this.attrService = rosServiceInstance.attrService;
        this.attrServiceInstanceId = rosServiceInstance.attrServiceInstanceId;
        this.attrServiceInstanceName = rosServiceInstance.attrServiceInstanceName;
        this.attrServiceType = rosServiceInstance.attrServiceType;
        this.attrSource = rosServiceInstance.attrSource;
        this.attrStatusDetail = rosServiceInstance.attrStatusDetail;
        this.attrSupplierUid = rosServiceInstance.attrSupplierUid;
        this.attrTags = rosServiceInstance.attrTags;
        this.attrTemplateName = rosServiceInstance.attrTemplateName;
        this.attrUpdateTime = rosServiceInstance.attrUpdateTime;
        this.attrUserId = rosServiceInstance.attrUserId;
    }
}
