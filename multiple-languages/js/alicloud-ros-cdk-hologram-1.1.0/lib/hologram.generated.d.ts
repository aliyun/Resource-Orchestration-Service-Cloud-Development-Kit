import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hologram-instance
 */
export interface RosInstanceProps {
    /**
     * @Property endpoints: List of domain names.
     */
    readonly endpoints: Array<RosInstance.EndpointsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceName: The name of the resource.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * @Property instanceType: The instance type. Value:
     * - Standard: Universal.
     * - Follower: Read-only slave instance.
     * - Warehouse: calculation group type.
     * - Shared: Shared.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * @Property paymentType: The payment type of the resource.
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone Id.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property autoPay: Whether to pay automatically. The default value is true. Value:
     * - true: automatic payment
     * - false: only generate orders, not pay
     * > The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property coldStorageSize: Instance low-frequency storage space. Unit: GB.
     * > Pay-As-You-Go (PostPaid) instances ignore this parameter.
     */
    readonly coldStorageSize?: number | ros.IResolvable;
    /**
     * @Property cpu: Instance specifications. Value:
     * - 8 cores 32 GB (number of compute nodes: 1)
     * - 16 cores 64 GB (number of compute nodes: 1)
     * - 32 core 128 GB (number of compute nodes: 2)
     * - 64 core 256 GB (number of compute nodes: 4)
     * - 96 core 384 GB (number of computing nodes: 6)
     * - 128 core 512 GB (number of compute nodes: 8)
     * - Wait
     * >>
     * >- just fill in the audit number.
     * >- Please submit a work order application for purchasing 1024 or above specifications.
     * >- Shared instance types do not need to specify specifications.
     * > The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.
     */
    readonly cpu?: number | ros.IResolvable;
    /**
     * @Property duration: The buying cycle. Buy for 2 months.
     * > If the Payment type is PostPaid, you do not need to specify it.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * @Property gatewayCount: Number of gateway nodes.
     */
    readonly gatewayCount?: number | ros.IResolvable;
    /**
     * @Property initialDatabases: Initialize the database and split multiple database names ",".
     */
    readonly initialDatabases?: string | ros.IResolvable;
    /**
     * @Property leaderInstanceId: The id of leader instance.
     */
    readonly leaderInstanceId?: string | ros.IResolvable;
    /**
     * @Property pricingCycle: Billing cycle. Value:
     * - Month: monthly billing
     * - Hour: hourly billing
     * >>
     * > - PrePaid only supports Month
     * > - PostPaid only supports Hour
     * >- The Shared type is automatically set to Hour without specifying it.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * @Property productCode: product code.
     */
    readonly productCode?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property scaleType: Change matching type. Value:
     * - UPGRADE: UPGRADE
     * - DOWNGRADE: Downgrading
     * >>
     * >- The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.
     * >- The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.
     */
    readonly scaleType?: string | ros.IResolvable;
    /**
     * @Property storageSize: The standard storage space of the instance. Unit: GB.
     * > Pay-As-You-Go instances (PostPaid) ignore this parameter.
     */
    readonly storageSize?: number | ros.IResolvable;
    /**
     * @Property tags: Tags of instance.
     */
    readonly tags?: RosInstance.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Hologram::Instance`, which is used to create a Hologres instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hologram-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Hologram::Instance";
    /**
     * @Attribute AutoRenewal: Whether automatic renewal is enabled.
     */
    readonly attrAutoRenewal: ros.IResolvable;
    /**
     * @Attribute ColdStorageSize: Instance low-frequency storage space. Unit: GB.
     */
    readonly attrColdStorageSize: ros.IResolvable;
    /**
     * @Attribute CommodityCode: The commodity code.
     */
    readonly attrCommodityCode: ros.IResolvable;
    /**
     * @Attribute ComputeNodeCount: Number of compute nodes.
     */
    readonly attrComputeNodeCount: ros.IResolvable;
    /**
     * @Attribute Cpu: Instance specifications.
     */
    readonly attrCpu: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute EnableHiveAccess: Whether data Lake acceleration is enabled.
     */
    readonly attrEnableHiveAccess: ros.IResolvable;
    /**
     * @Attribute Endpoints: List of domain names.
     */
    readonly attrEndpoints: ros.IResolvable;
    /**
     * @Attribute ExpirationTime: Expiration time.
     */
    readonly attrExpirationTime: ros.IResolvable;
    /**
     * @Attribute GatewayCount: Number of gateway nodes.
     */
    readonly attrGatewayCount: ros.IResolvable;
    /**
     * @Attribute GatewayCpu: Cpu resources of the Gateway.
     */
    readonly attrGatewayCpu: ros.IResolvable;
    /**
     * @Attribute GatewayMemory: Gateway memory resources.
     */
    readonly attrGatewayMemory: ros.IResolvable;
    /**
     * @Attribute InstanceId: Resource attribute fields that represent the resource's primary key.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: The name of the resource.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute InstanceOwner: The instance owner.
     */
    readonly attrInstanceOwner: ros.IResolvable;
    /**
     * @Attribute InstanceType: The instance type.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * @Attribute Memory: Memory.
     */
    readonly attrMemory: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute StorageSize: The standard storage space of the instance. Unit: GB.
     */
    readonly attrStorageSize: ros.IResolvable;
    /**
     * @Attribute SuspendReason: Reason for suspension.
     */
    readonly attrSuspendReason: ros.IResolvable;
    /**
     * @Attribute Tags: Instance tag.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute Version: The instance version.
     */
    readonly attrVersion: ros.IResolvable;
    /**
     * @Attribute ZoneId: The zone Id.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property endpoints: List of domain names.
     */
    endpoints: Array<RosInstance.EndpointsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceName: The name of the resource.
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property instanceType: The instance type. Value:
     * - Standard: Universal.
     * - Follower: Read-only slave instance.
     * - Warehouse: calculation group type.
     * - Shared: Shared.
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property paymentType: The payment type of the resource.
     */
    paymentType: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone Id.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property autoPay: Whether to pay automatically. The default value is true. Value:
     * - true: automatic payment
     * - false: only generate orders, not pay
     * > The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property coldStorageSize: Instance low-frequency storage space. Unit: GB.
     * > Pay-As-You-Go (PostPaid) instances ignore this parameter.
     */
    coldStorageSize: number | ros.IResolvable | undefined;
    /**
     * @Property cpu: Instance specifications. Value:
     * - 8 cores 32 GB (number of compute nodes: 1)
     * - 16 cores 64 GB (number of compute nodes: 1)
     * - 32 core 128 GB (number of compute nodes: 2)
     * - 64 core 256 GB (number of compute nodes: 4)
     * - 96 core 384 GB (number of computing nodes: 6)
     * - 128 core 512 GB (number of compute nodes: 8)
     * - Wait
     * >>
     * >- just fill in the audit number.
     * >- Please submit a work order application for purchasing 1024 or above specifications.
     * >- Shared instance types do not need to specify specifications.
     * > The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.
     */
    cpu: number | ros.IResolvable | undefined;
    /**
     * @Property duration: The buying cycle. Buy for 2 months.
     * > If the Payment type is PostPaid, you do not need to specify it.
     */
    duration: number | ros.IResolvable | undefined;
    /**
     * @Property gatewayCount: Number of gateway nodes.
     */
    gatewayCount: number | ros.IResolvable | undefined;
    /**
     * @Property initialDatabases: Initialize the database and split multiple database names ",".
     */
    initialDatabases: string | ros.IResolvable | undefined;
    /**
     * @Property leaderInstanceId: The id of leader instance.
     */
    leaderInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: Billing cycle. Value:
     * - Month: monthly billing
     * - Hour: hourly billing
     * >>
     * > - PrePaid only supports Month
     * > - PostPaid only supports Hour
     * >- The Shared type is automatically set to Hour without specifying it.
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property productCode: product code.
     */
    productCode: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property scaleType: Change matching type. Value:
     * - UPGRADE: UPGRADE
     * - DOWNGRADE: Downgrading
     * >>
     * >- The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.
     * >- The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.
     */
    scaleType: string | ros.IResolvable | undefined;
    /**
     * @Property storageSize: The standard storage space of the instance. Unit: GB.
     * > Pay-As-You-Go instances (PostPaid) ignore this parameter.
     */
    storageSize: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of instance.
     */
    tags: RosInstance.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface EndpointsProperty {
        /**
         * @Property type: The network type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property endpoint: Domain name.
         */
        readonly endpoint?: string | ros.IResolvable;
        /**
         * @Property vpcId: VPC primary key.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the virtual switch.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property enabled: Whether to turn on the network.
         */
        readonly enabled?: boolean | ros.IResolvable;
        /**
         * @Property vpcInstanceId: The vpc instance ID.
         */
        readonly vpcInstanceId?: string | ros.IResolvable;
        /**
         * @Property alternativeEndpoints: Some old instances have both AnyTunnel and SingleTunnel enabled. When switching from AnyTunnel to SingleTunnel, the endpoints of both are retained. Therefore, one more field is required to store the Endpoint.
         */
        readonly alternativeEndpoints?: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
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
