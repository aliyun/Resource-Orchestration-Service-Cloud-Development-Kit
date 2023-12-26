import * as ros from '@alicloud/ros-cdk-core';
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
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ComputeNest::ServiceInstance`, which is used to create and deploy a service instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
 */
export declare class RosServiceInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ComputeNest::ServiceInstance";
    /**
     * @Attribute Components: Additional billing items.
     */
    readonly attrComponents: ros.IResolvable;
    /**
     * @Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute EnableInstanceOps: Whether the service instance has the O & M function.
     */
    readonly attrEnableInstanceOps: ros.IResolvable;
    /**
     * @Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.
     */
    readonly attrEnableUserPrometheus: ros.IResolvable;
    /**
     * @Attribute IsOperated: Whether the generation O & M function of the service instance is enabled.
     */
    readonly attrIsOperated: ros.IResolvable;
    /**
     * @Attribute LicenseEndTime: License expiration time.
     */
    readonly attrLicenseEndTime: ros.IResolvable;
    /**
     * @Attribute Name: The name of the service instance.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute NetworkConfig: Network configuration information.
     */
    readonly attrNetworkConfig: ros.IResolvable;
    /**
     * @Attribute Outputs: Create the output Field returned by the service instance.
     */
    readonly attrOutputs: ros.IResolvable;
    /**
     * @Attribute Parameters: The parameters entered by the deployment service instance.
     */
    readonly attrParameters: ros.IResolvable;
    /**
     * @Attribute PredefinedParameterName: Package name.
     */
    readonly attrPredefinedParameterName: ros.IResolvable;
    /**
     * @Attribute Progress: The deployment progress of the service instance. Unit:%.
     */
    readonly attrProgress: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Service: Service details.
     */
    readonly attrService: ros.IResolvable;
    /**
     * @Attribute ServiceInstanceId: The ID of the service instance.
     */
    readonly attrServiceInstanceId: ros.IResolvable;
    /**
     * @Attribute ServiceType: Service type.
     */
    readonly attrServiceType: ros.IResolvable;
    /**
     * @Attribute Source: The source of the service instance.
     */
    readonly attrSource: ros.IResolvable;
    /**
     * @Attribute StatusDetail: The status description of the deployment instance.
     */
    readonly attrStatusDetail: ros.IResolvable;
    /**
     * @Attribute SupplierUid: Service provider AliUid.
     */
    readonly attrSupplierUid: ros.IResolvable;
    /**
     * @Attribute Tags: User-defined labels.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute TemplateName: Template name.
     */
    readonly attrTemplateName: ros.IResolvable;
    /**
     * @Attribute UpdateTime: Update time.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * @Attribute UserId: AliUid of the user.
     */
    readonly attrUserId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property service: Service details.
     */
    service: RosServiceInstance.ServiceProperty | ros.IResolvable;
    /**
     * @Property commodity: Cloud market commodity purchase parameters.
     */
    commodity: RosServiceInstance.CommodityProperty | ros.IResolvable | undefined;
    /**
     * @Property contactGroup: Alarm Contact Group.
     */
    contactGroup: string | ros.IResolvable | undefined;
    /**
     * @Property enableInstanceOps: Whether the service instance has the O & M function. Possible values:
     * - true: The service instance has a generation O & M function.
     * - false: The service instance does not have the O & M function.
     */
    enableInstanceOps: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableUserPrometheus: Whether Prometheus monitoring is enabled. Possible values:
     * - true: enabled.
     * - false: not enabled.
     */
    enableUserPrometheus: boolean | ros.IResolvable | undefined;
    /**
     * @Property marketInstanceId: The ID of the cloud marketplace instance.
     */
    marketInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the service instance.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property operationName: Change operation name.
     */
    operationName: string | ros.IResolvable | undefined;
    /**
     * @Property parameters: The parameters entered by the deployment service instance.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property predefinedParameterName: Package name.
     */
    predefinedParameterName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property specificationCode: Commodity specification Code.
     */
    specificationCode: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of service instance.
     */
    tags: RosServiceInstance.TagsProperty[] | undefined;
    /**
     * @Property templateName: Template name.
     */
    templateName: string | ros.IResolvable | undefined;
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
export declare namespace RosServiceInstance {
    /**
     * @stability external
     */
    interface CommodityProperty {
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
export declare namespace RosServiceInstance {
    /**
     * @stability external
     */
    interface ServiceProperty {
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
export declare namespace RosServiceInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
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
