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
     * Property commodity: Cloud market commodity purchase parameters.
     */
    readonly commodity?: RosServiceInstance.CommodityProperty | ros.IResolvable;
    /**
     * Property contactGroup: Alarm Contact Group.
     */
    readonly contactGroup?: string | ros.IResolvable;
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
     * Property marketInstanceId: The ID of the cloud marketplace instance.
     */
    readonly marketInstanceId?: string | ros.IResolvable;
    /**
     * Property name: The name of the service instance.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property operationName: Change operation name.
     */
    readonly operationName?: string | ros.IResolvable;
    /**
     * Property parameters: The parameters entered by the deployment service instance.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property predefinedParameterName: Package name.
     */
    readonly predefinedParameterName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ComputeNest::ServiceInstance`, which is used to create and deploy a service instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
 */
export declare class ServiceInstance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ServiceInstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Components: Additional billing items.
     */
    readonly attrComponents: ros.IResolvable;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute EnableInstanceOps: Whether the service instance has the O & M function.
     */
    readonly attrEnableInstanceOps: ros.IResolvable;
    /**
     * Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.
     */
    readonly attrEnableUserPrometheus: ros.IResolvable;
    /**
     * Attribute IsOperated: Whether the generation O & M function of the service instance is enabled.
     */
    readonly attrIsOperated: ros.IResolvable;
    /**
     * Attribute LicenseEndTime: License expiration time.
     */
    readonly attrLicenseEndTime: ros.IResolvable;
    /**
     * Attribute Name: The name of the service instance.
     */
    readonly attrName: ros.IResolvable;
    /**
     * Attribute NetworkConfig: Network configuration information.
     */
    readonly attrNetworkConfig: ros.IResolvable;
    /**
     * Attribute Outputs: Create the output Field returned by the service instance.
     */
    readonly attrOutputs: ros.IResolvable;
    /**
     * Attribute Parameters: The parameters entered by the deployment service instance.
     */
    readonly attrParameters: ros.IResolvable;
    /**
     * Attribute PredefinedParameterName: Package name.
     */
    readonly attrPredefinedParameterName: ros.IResolvable;
    /**
     * Attribute Progress: The deployment progress of the service instance. Unit:%.
     */
    readonly attrProgress: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute Service: Service details.
     */
    readonly attrService: ros.IResolvable;
    /**
     * Attribute ServiceInstanceId: The ID of the service instance.
     */
    readonly attrServiceInstanceId: ros.IResolvable;
    /**
     * Attribute ServiceType: Service type.
     */
    readonly attrServiceType: ros.IResolvable;
    /**
     * Attribute Source: The source of the service instance.
     */
    readonly attrSource: ros.IResolvable;
    /**
     * Attribute StatusDetail: The status description of the deployment instance.
     */
    readonly attrStatusDetail: ros.IResolvable;
    /**
     * Attribute SupplierUid: Service provider AliUid.
     */
    readonly attrSupplierUid: ros.IResolvable;
    /**
     * Attribute Tags: User-defined labels.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute TemplateName: Template name.
     */
    readonly attrTemplateName: ros.IResolvable;
    /**
     * Attribute UpdateTime: Update time.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * Attribute UserId: AliUid of the user.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceInstanceProps, enableResourcePropertyConstraint?: boolean);
}
