import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHost } from './cddc.generated';
export { RosDedicatedHost as DedicatedHostProperty };
/**
 * Properties for defining a `DedicatedHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
 */
export interface DedicatedHostProps {
    /**
     * Property dedicatedHostGroupId: Dedicated Host Group ID
     */
    readonly dedicatedHostGroupId: string | ros.IResolvable;
    /**
     * Property hostClass: Host Class
     */
    readonly hostClass: string | ros.IResolvable;
    /**
     * Property paymentType: Payment Type
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * Property vSwitchId: VSwitch ID
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property zoneId: Zone ID
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * Property autoRenew: Whether Auto Renew
     */
    readonly autoRenew?: string | ros.IResolvable;
    /**
     * Property hostName: Host Name
     */
    readonly hostName?: string | ros.IResolvable;
    /**
     * Property imageCategory: Host Image Category
     */
    readonly imageCategory?: string | ros.IResolvable;
    /**
     * Property osPassword:
     */
    readonly osPassword?: string | ros.IResolvable;
    /**
     * Property period:
     */
    readonly period?: string | ros.IResolvable;
    /**
     * Property tags: The tag of the resource
     */
    readonly tags?: RosDedicatedHost.TagsProperty[];
    /**
     * Property usedTime:
     */
    readonly usedTime?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDDC::DedicatedHost`, which is used to create a host in a dedicated cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHost`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
 */
export declare class DedicatedHost extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DedicatedHostProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AutoRenew: Whether Auto Renew
     */
    readonly attrAutoRenew: ros.IResolvable;
    /**
     * Attribute CpuAllocationRatio: CPU Allocation Ratio
     */
    readonly attrCpuAllocationRatio: ros.IResolvable;
    /**
     * Attribute CpuUsed: CPU Used
     */
    readonly attrCpuUsed: ros.IResolvable;
    /**
     * Attribute DedicatedHostGroupId: Dedicated Host Group ID
     */
    readonly attrDedicatedHostGroupId: ros.IResolvable;
    /**
     * Attribute DedicatedHostId: The first ID of the resource
     */
    readonly attrDedicatedHostId: ros.IResolvable;
    /**
     * Attribute DiskAllocationRatio: Disk Allocation Ratio
     */
    readonly attrDiskAllocationRatio: ros.IResolvable;
    /**
     * Attribute EcsClassCode: ECS Class Code
     */
    readonly attrEcsClassCode: ros.IResolvable;
    /**
     * Attribute HostClass: Host Class
     */
    readonly attrHostClass: ros.IResolvable;
    /**
     * Attribute HostCpu: Host CPU
     */
    readonly attrHostCpu: ros.IResolvable;
    /**
     * Attribute HostMem: Host Memory
     */
    readonly attrHostMem: ros.IResolvable;
    /**
     * Attribute HostName: Host Name
     */
    readonly attrHostName: ros.IResolvable;
    /**
     * Attribute HostStorage: Host Storage
     */
    readonly attrHostStorage: ros.IResolvable;
    /**
     * Attribute HostType: Host Storage Type
     */
    readonly attrHostType: ros.IResolvable;
    /**
     * Attribute ImageCategory: Host Image Category
     */
    readonly attrImageCategory: ros.IResolvable;
    /**
     * Attribute IpAddress: Host IP Address
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * Attribute MemAllocationRatio: Memory Allocation Ratio
     */
    readonly attrMemAllocationRatio: ros.IResolvable;
    /**
     * Attribute MemoryUsed: Host Memory Used
     */
    readonly attrMemoryUsed: ros.IResolvable;
    /**
     * Attribute OpenPermission: Whether Open OS Permission
     */
    readonly attrOpenPermission: ros.IResolvable;
    /**
     * Attribute PaymentType: Payment Type
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute StorageUsed: Storage Used
     */
    readonly attrStorageUsed: ros.IResolvable;
    /**
     * Attribute VSwitchId: VSwitch ID
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VpcId: VPC ID
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute ZoneId: Zone ID
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostProps, enableResourcePropertyConstraint?: boolean);
}
