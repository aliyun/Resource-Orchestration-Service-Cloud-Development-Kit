import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceInstance } from './computenest.generated';
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ComputeNest::ServiceInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstance
 */
export declare class ServiceInstance extends ros.Resource implements IServiceInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ServiceInstanceProps;
    protected enableResourcePropertyConstraint: boolean;
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
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceInstanceProps, enableResourcePropertyConstraint?: boolean);
}
