import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './hologram.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `ALIYUN::Hologram::Instance`
 */
export interface InstanceProps {
    /**
     * Property endpoints: List of domain names.
     */
    readonly endpoints: Array<RosInstance.EndpointsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property instanceName: The name of the resource.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * Property instanceType: The instance type. Value:
     * - Standard: Universal.
     * - Follower: Read-only slave instance.
     * - Warehouse: calculation group type.
     * - Shared: Shared.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * Property paymentType: The payment type of the resource.
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * Property zoneId: The zone Id.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * Property autoPay: Whether to pay automatically. The default value is true. Value:
     * - true: automatic payment
     * - false: only generate orders, not pay
     * > The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * Property coldStorageSize: Instance low-frequency storage space. Unit: GB.
     * > Pay-As-You-Go (PostPaid) instances ignore this parameter.
     */
    readonly coldStorageSize?: number | ros.IResolvable;
    /**
     * Property cpu: Instance specifications. Value:
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
     * Property duration: The buying cycle. Buy for 2 months.
     * > If the Payment type is PostPaid, you do not need to specify it.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * Property gatewayCount: Number of gateway nodes.
     */
    readonly gatewayCount?: number | ros.IResolvable;
    /**
     * Property pricingCycle: Billing cycle. Value:
     * - Month: monthly billing
     * - Hour: hourly billing
     * >>
     * > - PrePaid only supports Month
     * > - PostPaid only supports Hour
     * >- The Shared type is automatically set to Hour without specifying it.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * Property productCode: product code.
     */
    readonly productCode?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property scaleType: Change matching type. Value:
     * - UPGRADE: UPGRADE
     * - DOWNGRADE: Downgrading
     * >>
     * >- The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.
     * >- The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.
     */
    readonly scaleType?: string | ros.IResolvable;
    /**
     * Property storageSize: The standard storage space of the instance. Unit: GB.
     * > Pay-As-You-Go instances (PostPaid) ignore this parameter.
     */
    readonly storageSize?: number | ros.IResolvable;
    /**
     * Property tags: Tags of instance.
     */
    readonly tags?: RosInstance.TagsProperty[];
}
/**
 * A ROS resource type:  `ALIYUN::Hologram::Instance`
 */
export declare class Instance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AutoRenewal: Whether automatic renewal is enabled.
     */
    readonly attrAutoRenewal: ros.IResolvable;
    /**
     * Attribute ColdStorageSize: Instance low-frequency storage space. Unit: GB.
     */
    readonly attrColdStorageSize: ros.IResolvable;
    /**
     * Attribute CommodityCode: The commodity code.
     */
    readonly attrCommodityCode: ros.IResolvable;
    /**
     * Attribute ComputeNodeCount: Number of compute nodes.
     */
    readonly attrComputeNodeCount: ros.IResolvable;
    /**
     * Attribute Cpu: Instance specifications.
     */
    readonly attrCpu: ros.IResolvable;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute EnableHiveAccess: Whether data Lake acceleration is enabled.
     */
    readonly attrEnableHiveAccess: ros.IResolvable;
    /**
     * Attribute Endpoints: List of domain names.
     */
    readonly attrEndpoints: ros.IResolvable;
    /**
     * Attribute ExpirationTime: Expiration time.
     */
    readonly attrExpirationTime: ros.IResolvable;
    /**
     * Attribute GatewayCount: Number of gateway nodes.
     */
    readonly attrGatewayCount: ros.IResolvable;
    /**
     * Attribute GatewayCpu: Cpu resources of the Gateway.
     */
    readonly attrGatewayCpu: ros.IResolvable;
    /**
     * Attribute GatewayMemory: Gateway memory resources.
     */
    readonly attrGatewayMemory: ros.IResolvable;
    /**
     * Attribute InstanceId: Resource attribute fields that represent the resource's primary key.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceName: The name of the resource.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute InstanceOwner: The instance owner.
     */
    readonly attrInstanceOwner: ros.IResolvable;
    /**
     * Attribute InstanceType: The instance type.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * Attribute Memory: Memory.
     */
    readonly attrMemory: ros.IResolvable;
    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute StorageSize: The standard storage space of the instance. Unit: GB.
     */
    readonly attrStorageSize: ros.IResolvable;
    /**
     * Attribute SuspendReason: Reason for suspension.
     */
    readonly attrSuspendReason: ros.IResolvable;
    /**
     * Attribute Tags: Instance tag.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute Version: The instance version.
     */
    readonly attrVersion: ros.IResolvable;
    /**
     * Attribute ZoneId: The zone Id.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::Hologram::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
