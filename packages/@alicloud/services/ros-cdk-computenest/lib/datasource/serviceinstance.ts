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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ComputeNest::ServiceInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstance
 */
export class ServiceInstance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ServiceInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Components: Cloud Marketplace additional billing items.
     */
    public readonly attrComponents: ros.IResolvable;

    /**
     * Attribute CreateTime: The time when the serviceInstance was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute EnableInstanceOps: Indicates whether the service instance supports the operation feature.
     */
    public readonly attrEnableInstanceOps: ros.IResolvable;

    /**
     * Attribute EnableUserPrometheus: Whether to enable Prometheus monitoring.
     */
    public readonly attrEnableUserPrometheus: ros.IResolvable;

    /**
     * Attribute IsOperated: Indicates whether the hosted O&M feature is enabled for the service instance.
     */
    public readonly attrIsOperated: ros.IResolvable;

    /**
     * Attribute LicenseEndTime: The expiration time of licence.
     */
    public readonly attrLicenseEndTime: ros.IResolvable;

    /**
     * Attribute MarketInstanceId: The ID of the cloud marketplace instance.
     */
    public readonly attrMarketInstanceId: ros.IResolvable;

    /**
     * Attribute NetworkConfig: The network configurations.
     */
    public readonly attrNetworkConfig: ros.IResolvable;

    /**
     * Attribute Outputs: The outputs returned from creating the service instance.
     */
    public readonly attrOutputs: ros.IResolvable;

    /**
     * Attribute Parameters: The parameters configured for the service instance.
     */
    public readonly attrParameters: ros.IResolvable;

    /**
     * Attribute PredefinedParameterName: The name of the package .
     */
    public readonly attrPredefinedParameterName: ros.IResolvable;

    /**
     * Attribute Progress: The deployment progress of the service instance. Unit: percentage.
     */
    public readonly attrProgress: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Service: The information about the service to which the service instance belongs.
     */
    public readonly attrService: ros.IResolvable;

    /**
     * Attribute ServiceInstanceId: The ID of the service instance.
     */
    public readonly attrServiceInstanceId: ros.IResolvable;

    /**
     * Attribute ServiceInstanceName: The name of the resource.
     */
    public readonly attrServiceInstanceName: ros.IResolvable;

    /**
     * Attribute ServiceType: The type of the service.
     */
    public readonly attrServiceType: ros.IResolvable;

    /**
     * Attribute Source: The source of the service instance.
     */
    public readonly attrSource: ros.IResolvable;

    /**
     * Attribute StatusDetail: The description of the deployment state of the service instance.
     */
    public readonly attrStatusDetail: ros.IResolvable;

    /**
     * Attribute SupplierUid: The Alibaba Cloud account ID of the service provider.
     */
    public readonly attrSupplierUid: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the service instance.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute TemplateName: The name of the template.
     */
    public readonly attrTemplateName: ros.IResolvable;

    /**
     * Attribute UpdateTime: The time when the serviceInstance was last updated.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * Attribute UserId: The AliUid of the user.
     */
    public readonly attrUserId: ros.IResolvable;

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
