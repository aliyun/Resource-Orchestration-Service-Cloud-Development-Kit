import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHost } from './cddc.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `DedicatedHost`.
 */
export interface IDedicatedHost extends ros.IResource {
    readonly props: DedicatedHostProps;

    /**
     * Attribute AutoRenew: Whether Auto Renew
     */
    readonly attrAutoRenew: ros.IResolvable | string;

    /**
     * Attribute CpuAllocationRatio: CPU Allocation Ratio
     */
    readonly attrCpuAllocationRatio: ros.IResolvable | string;

    /**
     * Attribute CpuUsed: CPU Used
     */
    readonly attrCpuUsed: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostGroupId: Dedicated Host Group ID
     */
    readonly attrDedicatedHostGroupId: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostId: The first ID of the resource
     */
    readonly attrDedicatedHostId: ros.IResolvable | string;

    /**
     * Attribute DiskAllocationRatio: Disk Allocation Ratio
     */
    readonly attrDiskAllocationRatio: ros.IResolvable | string;

    /**
     * Attribute EcsClassCode: ECS Class Code
     */
    readonly attrEcsClassCode: ros.IResolvable | string;

    /**
     * Attribute HostClass: Host Class
     */
    readonly attrHostClass: ros.IResolvable | string;

    /**
     * Attribute HostCpu: Host CPU
     */
    readonly attrHostCpu: ros.IResolvable | string;

    /**
     * Attribute HostMem: Host Memory
     */
    readonly attrHostMem: ros.IResolvable | string;

    /**
     * Attribute HostName: Host Name
     */
    readonly attrHostName: ros.IResolvable | string;

    /**
     * Attribute HostStorage: Host Storage
     */
    readonly attrHostStorage: ros.IResolvable | string;

    /**
     * Attribute HostType: Host Storage Type
     */
    readonly attrHostType: ros.IResolvable | string;

    /**
     * Attribute ImageCategory: Host Image Category
     */
    readonly attrImageCategory: ros.IResolvable | string;

    /**
     * Attribute IpAddress: Host IP Address
     */
    readonly attrIpAddress: ros.IResolvable | string;

    /**
     * Attribute MemAllocationRatio: Memory Allocation Ratio
     */
    readonly attrMemAllocationRatio: ros.IResolvable | string;

    /**
     * Attribute MemoryUsed: Host Memory Used
     */
    readonly attrMemoryUsed: ros.IResolvable | string;

    /**
     * Attribute OpenPermission: Whether Open OS Permission
     */
    readonly attrOpenPermission: ros.IResolvable | string;

    /**
     * Attribute PaymentType: Payment Type
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute StorageUsed: Storage Used
     */
    readonly attrStorageUsed: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: VSwitch ID
     */
    readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcId: VPC ID
     */
    readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: Zone ID
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDDC::DedicatedHost`, which is used to create a host in a dedicated cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHost`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
 */
export class DedicatedHost extends ros.Resource implements IDedicatedHost {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DedicatedHostProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AutoRenew: Whether Auto Renew
     */
    public readonly attrAutoRenew: ros.IResolvable | string;

    /**
     * Attribute CpuAllocationRatio: CPU Allocation Ratio
     */
    public readonly attrCpuAllocationRatio: ros.IResolvable | string;

    /**
     * Attribute CpuUsed: CPU Used
     */
    public readonly attrCpuUsed: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostGroupId: Dedicated Host Group ID
     */
    public readonly attrDedicatedHostGroupId: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostId: The first ID of the resource
     */
    public readonly attrDedicatedHostId: ros.IResolvable | string;

    /**
     * Attribute DiskAllocationRatio: Disk Allocation Ratio
     */
    public readonly attrDiskAllocationRatio: ros.IResolvable | string;

    /**
     * Attribute EcsClassCode: ECS Class Code
     */
    public readonly attrEcsClassCode: ros.IResolvable | string;

    /**
     * Attribute HostClass: Host Class
     */
    public readonly attrHostClass: ros.IResolvable | string;

    /**
     * Attribute HostCpu: Host CPU
     */
    public readonly attrHostCpu: ros.IResolvable | string;

    /**
     * Attribute HostMem: Host Memory
     */
    public readonly attrHostMem: ros.IResolvable | string;

    /**
     * Attribute HostName: Host Name
     */
    public readonly attrHostName: ros.IResolvable | string;

    /**
     * Attribute HostStorage: Host Storage
     */
    public readonly attrHostStorage: ros.IResolvable | string;

    /**
     * Attribute HostType: Host Storage Type
     */
    public readonly attrHostType: ros.IResolvable | string;

    /**
     * Attribute ImageCategory: Host Image Category
     */
    public readonly attrImageCategory: ros.IResolvable | string;

    /**
     * Attribute IpAddress: Host IP Address
     */
    public readonly attrIpAddress: ros.IResolvable | string;

    /**
     * Attribute MemAllocationRatio: Memory Allocation Ratio
     */
    public readonly attrMemAllocationRatio: ros.IResolvable | string;

    /**
     * Attribute MemoryUsed: Host Memory Used
     */
    public readonly attrMemoryUsed: ros.IResolvable | string;

    /**
     * Attribute OpenPermission: Whether Open OS Permission
     */
    public readonly attrOpenPermission: ros.IResolvable | string;

    /**
     * Attribute PaymentType: Payment Type
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute StorageUsed: Storage Used
     */
    public readonly attrStorageUsed: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: VSwitch ID
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcId: VPC ID
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: Zone ID
     */
    public readonly attrZoneId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDedicatedHost = new RosDedicatedHost(this, id,  {
            hostClass: props.hostClass,
            osPassword: props.osPassword,
            zoneId: props.zoneId,
            dedicatedHostGroupId: props.dedicatedHostGroupId,
            autoRenew: props.autoRenew,
            vSwitchId: props.vSwitchId,
            usedTime: props.usedTime,
            imageCategory: props.imageCategory,
            period: props.period,
            paymentType: props.paymentType,
            hostName: props.hostName,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDedicatedHost;
        this.attrAutoRenew = rosDedicatedHost.attrAutoRenew;
        this.attrCpuAllocationRatio = rosDedicatedHost.attrCpuAllocationRatio;
        this.attrCpuUsed = rosDedicatedHost.attrCpuUsed;
        this.attrDedicatedHostGroupId = rosDedicatedHost.attrDedicatedHostGroupId;
        this.attrDedicatedHostId = rosDedicatedHost.attrDedicatedHostId;
        this.attrDiskAllocationRatio = rosDedicatedHost.attrDiskAllocationRatio;
        this.attrEcsClassCode = rosDedicatedHost.attrEcsClassCode;
        this.attrHostClass = rosDedicatedHost.attrHostClass;
        this.attrHostCpu = rosDedicatedHost.attrHostCpu;
        this.attrHostMem = rosDedicatedHost.attrHostMem;
        this.attrHostName = rosDedicatedHost.attrHostName;
        this.attrHostStorage = rosDedicatedHost.attrHostStorage;
        this.attrHostType = rosDedicatedHost.attrHostType;
        this.attrImageCategory = rosDedicatedHost.attrImageCategory;
        this.attrIpAddress = rosDedicatedHost.attrIpAddress;
        this.attrMemAllocationRatio = rosDedicatedHost.attrMemAllocationRatio;
        this.attrMemoryUsed = rosDedicatedHost.attrMemoryUsed;
        this.attrOpenPermission = rosDedicatedHost.attrOpenPermission;
        this.attrPaymentType = rosDedicatedHost.attrPaymentType;
        this.attrStorageUsed = rosDedicatedHost.attrStorageUsed;
        this.attrVSwitchId = rosDedicatedHost.attrVSwitchId;
        this.attrVpcId = rosDedicatedHost.attrVpcId;
        this.attrZoneId = rosDedicatedHost.attrZoneId;
    }
}
