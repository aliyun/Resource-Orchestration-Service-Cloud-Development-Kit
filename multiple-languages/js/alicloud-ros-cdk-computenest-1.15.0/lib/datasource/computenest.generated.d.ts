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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ComputeNest::ServiceInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstance
 */
export declare class RosServiceInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ComputeNest::ServiceInstance";
    /**
     * @Attribute Components: Cloud Marketplace additional billing items.
     */
    readonly attrComponents: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the serviceInstance was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute EnableInstanceOps: Indicates whether the service instance supports the operation feature.
     */
    readonly attrEnableInstanceOps: ros.IResolvable;
    /**
     * @Attribute EnableUserPrometheus: Whether to enable Prometheus monitoring.
     */
    readonly attrEnableUserPrometheus: ros.IResolvable;
    /**
     * @Attribute IsOperated: Indicates whether the hosted O&M feature is enabled for the service instance.
     */
    readonly attrIsOperated: ros.IResolvable;
    /**
     * @Attribute LicenseEndTime: The expiration time of licence.
     */
    readonly attrLicenseEndTime: ros.IResolvable;
    /**
     * @Attribute MarketInstanceId: The ID of the cloud marketplace instance.
     */
    readonly attrMarketInstanceId: ros.IResolvable;
    /**
     * @Attribute NetworkConfig: The network configurations.
     */
    readonly attrNetworkConfig: ros.IResolvable;
    /**
     * @Attribute Outputs: The outputs returned from creating the service instance.
     */
    readonly attrOutputs: ros.IResolvable;
    /**
     * @Attribute Parameters: The parameters configured for the service instance.
     */
    readonly attrParameters: ros.IResolvable;
    /**
     * @Attribute PredefinedParameterName: The name of the package .
     */
    readonly attrPredefinedParameterName: ros.IResolvable;
    /**
     * @Attribute Progress: The deployment progress of the service instance. Unit: percentage.
     */
    readonly attrProgress: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Service: The information about the service to which the service instance belongs.
     */
    readonly attrService: ros.IResolvable;
    /**
     * @Attribute ServiceInstanceId: The ID of the service instance.
     */
    readonly attrServiceInstanceId: ros.IResolvable;
    /**
     * @Attribute ServiceInstanceName: The name of the resource.
     */
    readonly attrServiceInstanceName: ros.IResolvable;
    /**
     * @Attribute ServiceType: The type of the service.
     */
    readonly attrServiceType: ros.IResolvable;
    /**
     * @Attribute Source: The source of the service instance.
     */
    readonly attrSource: ros.IResolvable;
    /**
     * @Attribute StatusDetail: The description of the deployment state of the service instance.
     */
    readonly attrStatusDetail: ros.IResolvable;
    /**
     * @Attribute SupplierUid: The Alibaba Cloud account ID of the service provider.
     */
    readonly attrSupplierUid: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the service instance.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute TemplateName: The name of the template.
     */
    readonly attrTemplateName: ros.IResolvable;
    /**
     * @Attribute UpdateTime: The time when the serviceInstance was last updated.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * @Attribute UserId: The AliUid of the user.
     */
    readonly attrUserId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serviceInstanceId: The ID of the service instance.
     */
    serviceInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ComputeNest::ServiceInstances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstances
 */
export declare class RosServiceInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ComputeNest::ServiceInstances";
    /**
     * @Attribute ServiceInstanceIds: The list of service instance IDs.
     */
    readonly attrServiceInstanceIds: ros.IResolvable;
    /**
     * @Attribute ServiceInstances: The list of service instances.
     */
    readonly attrServiceInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
