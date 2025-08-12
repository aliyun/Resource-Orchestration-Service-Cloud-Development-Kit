import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceInstance } from './computenest.generated';
export { RosServiceInstance as ServiceInstanceProperty };
/**
 * Properties for defining a `ServiceInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
 */
export interface ServiceInstanceProps {
    /**
     * Property service: Service details.
     */
    readonly service: RosServiceInstance.ServiceProperty | ros.IResolvable;
    /**
     * Property commodity: The purchase order information of the cloud market does not need to be transmitted if the service is not on the cloud market or charged by volume.
     */
    readonly commodity?: RosServiceInstance.CommodityProperty | ros.IResolvable;
    /**
     * Property contactGroup: Alarm Contact Group.
     */
    readonly contactGroup?: string | ros.IResolvable;
    /**
     * Property dryRun: Whether to perform PreCheck on the creation request, including permissions and instance status verification. Possible values:
     * - **true**: The request is sent without creating a service instance.
     * - **false**: Sends the request and creates a service instance after the check is passed.
     */
    readonly dryRun?: boolean | ros.IResolvable;
    /**
     * Property enableInstanceOps: Whether the service instance has the O & M function. Possible values:
     * - true: The service instance has a generation O & M function.
     * - false: The service instance does not have the O & M function.
     */
    readonly enableInstanceOps?: boolean | ros.IResolvable;
    /**
     * Property enableUserPrometheus: Whether Prometheus monitoring is enabled. Possible values:
     * - true: enabled.
     * - false: not enabled.
     */
    readonly enableUserPrometheus?: boolean | ros.IResolvable;
    /**
     * Property operationName: Change operation name.
     */
    readonly operationName?: string | ros.IResolvable;
    /**
     * Property parameters: The parameters entered by the deployment service instance.
     */
    readonly parameters?: string | ros.IResolvable;
    /**
     * Property predefinedParameterName: Package name.
     */
    readonly predefinedParameterName?: string | ros.IResolvable;
    /**
     * Property resourceAutoPay: Whether the resource is automatically deducted from the balance. Value:
     * - **true**: automatic payment.
     * - **false**: Do not pay automatically.
     */
    readonly resourceAutoPay?: boolean | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property serviceInstanceName: The name of the service instance.
     */
    readonly serviceInstanceName?: string | ros.IResolvable;
    /**
     * Property specificationCode: Commodity specification Code.
     */
    readonly specificationCode?: string | ros.IResolvable;
    /**
     * Property tags: Tags of service instance.
     */
    readonly tags?: RosServiceInstance.TagsProperty[];
    /**
     * Property templateName: Template name.
     */
    readonly templateName?: string | ros.IResolvable;
}
/**
 * Represents a `ServiceInstance`.
 */
export interface IServiceInstance extends ros.IResource {
    readonly props: ServiceInstanceProps;
    /**
     * Attribute Components: Additional billing items.
     */
    readonly attrComponents: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EnableInstanceOps: Whether the service instance has the O & M function.
     */
    readonly attrEnableInstanceOps: ros.IResolvable | string;
    /**
     * Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.
     */
    readonly attrEnableUserPrometheus: ros.IResolvable | string;
    /**
     * Attribute IsOperated: Whether the generation O & M function of the service instance is enabled.
     */
    readonly attrIsOperated: ros.IResolvable | string;
    /**
     * Attribute LicenseEndTime: License expiration time.
     */
    readonly attrLicenseEndTime: ros.IResolvable | string;
    /**
     * Attribute MarketInstanceId: The ID of the cloud marketplace instance.
     */
    readonly attrMarketInstanceId: ros.IResolvable | string;
    /**
     * Attribute NetworkConfig: Network configuration information.
     */
    readonly attrNetworkConfig: ros.IResolvable | string;
    /**
     * Attribute Output: Create the output Field returned by the service instance.
     */
    readonly attrOutput: ros.IResolvable | string;
    /**
     * Attribute Outputs: Create the output Field returned by the service instance.
     */
    readonly attrOutputs: ros.IResolvable | string;
    /**
     * Attribute Parameters: The parameters entered by the deployment service instance.
     */
    readonly attrParameters: ros.IResolvable | string;
    /**
     * Attribute PredefinedParameterName: Package name.
     */
    readonly attrPredefinedParameterName: ros.IResolvable | string;
    /**
     * Attribute Progress: The deployment progress of the service instance. Unit:%.
     */
    readonly attrProgress: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Service: Service details.
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
     * Attribute ServiceType: Service type.
     */
    readonly attrServiceType: ros.IResolvable | string;
    /**
     * Attribute Source: The source of the service instance.
     */
    readonly attrSource: ros.IResolvable | string;
    /**
     * Attribute StatusDetail: The status description of the deployment instance.
     */
    readonly attrStatusDetail: ros.IResolvable | string;
    /**
     * Attribute SupplierUid: Service provider AliUid.
     */
    readonly attrSupplierUid: ros.IResolvable | string;
    /**
     * Attribute Tags: User-defined labels.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TemplateName: Template name.
     */
    readonly attrTemplateName: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: Update time.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Attribute UserId: AliUid of the user.
     */
    readonly attrUserId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ComputeNest::ServiceInstance`, which is used to create and deploy a service instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
 */
export declare class ServiceInstance extends ros.Resource implements IServiceInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ServiceInstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Components: Additional billing items.
     */
    readonly attrComponents: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EnableInstanceOps: Whether the service instance has the O & M function.
     */
    readonly attrEnableInstanceOps: ros.IResolvable | string;
    /**
     * Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.
     */
    readonly attrEnableUserPrometheus: ros.IResolvable | string;
    /**
     * Attribute IsOperated: Whether the generation O & M function of the service instance is enabled.
     */
    readonly attrIsOperated: ros.IResolvable | string;
    /**
     * Attribute LicenseEndTime: License expiration time.
     */
    readonly attrLicenseEndTime: ros.IResolvable | string;
    /**
     * Attribute MarketInstanceId: The ID of the cloud marketplace instance.
     */
    readonly attrMarketInstanceId: ros.IResolvable | string;
    /**
     * Attribute NetworkConfig: Network configuration information.
     */
    readonly attrNetworkConfig: ros.IResolvable | string;
    /**
     * Attribute Output: Create the output Field returned by the service instance.
     */
    readonly attrOutput: ros.IResolvable | string;
    /**
     * Attribute Outputs: Create the output Field returned by the service instance.
     */
    readonly attrOutputs: ros.IResolvable | string;
    /**
     * Attribute Parameters: The parameters entered by the deployment service instance.
     */
    readonly attrParameters: ros.IResolvable | string;
    /**
     * Attribute PredefinedParameterName: Package name.
     */
    readonly attrPredefinedParameterName: ros.IResolvable | string;
    /**
     * Attribute Progress: The deployment progress of the service instance. Unit:%.
     */
    readonly attrProgress: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Service: Service details.
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
     * Attribute ServiceType: Service type.
     */
    readonly attrServiceType: ros.IResolvable | string;
    /**
     * Attribute Source: The source of the service instance.
     */
    readonly attrSource: ros.IResolvable | string;
    /**
     * Attribute StatusDetail: The status description of the deployment instance.
     */
    readonly attrStatusDetail: ros.IResolvable | string;
    /**
     * Attribute SupplierUid: Service provider AliUid.
     */
    readonly attrSupplierUid: ros.IResolvable | string;
    /**
     * Attribute Tags: User-defined labels.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TemplateName: Template name.
     */
    readonly attrTemplateName: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: Update time.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Attribute UserId: AliUid of the user.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceInstanceProps, enableResourcePropertyConstraint?: boolean);
}
