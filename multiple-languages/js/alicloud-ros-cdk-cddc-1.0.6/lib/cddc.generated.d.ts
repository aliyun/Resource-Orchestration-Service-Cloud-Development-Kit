import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::CDDC::DedicatedHost`
 */
export interface RosDedicatedHostProps {
    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID
     */
    readonly dedicatedHostGroupId: string | ros.IResolvable;
    /**
     * @Property hostClass: Host Class
     */
    readonly hostClass: string | ros.IResolvable;
    /**
     * @Property paymentType: Payment Type
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitch ID
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: Zone ID
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Whether Auto Renew
     */
    readonly autoRenew?: string | ros.IResolvable;
    /**
     * @Property hostName: Host Name
     */
    readonly hostName?: string | ros.IResolvable;
    /**
     * @Property imageCategory: Host Image Category
     */
    readonly imageCategory?: string | ros.IResolvable;
    /**
     * @Property osPassword:
     */
    readonly osPassword?: string | ros.IResolvable;
    /**
     * @Property period:
     */
    readonly period?: string | ros.IResolvable;
    /**
     * @Property tags: The tag of the resource
     */
    readonly tags?: RosDedicatedHost.TagsProperty[];
    /**
     * @Property usedTime:
     */
    readonly usedTime?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CDDC::DedicatedHost`
 */
export declare class RosDedicatedHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDDC::DedicatedHost";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AutoRenew: Whether Auto Renew
     */
    readonly attrAutoRenew: ros.IResolvable;
    /**
     * @Attribute CpuAllocationRatio: CPU Allocation Ratio
     */
    readonly attrCpuAllocationRatio: ros.IResolvable;
    /**
     * @Attribute CpuUsed: CPU Used
     */
    readonly attrCpuUsed: ros.IResolvable;
    /**
     * @Attribute DedicatedHostGroupId: Dedicated Host Group ID
     */
    readonly attrDedicatedHostGroupId: ros.IResolvable;
    /**
     * @Attribute DedicatedHostId: The first ID of the resource
     */
    readonly attrDedicatedHostId: ros.IResolvable;
    /**
     * @Attribute DiskAllocationRatio: Disk Allocation Ratio
     */
    readonly attrDiskAllocationRatio: ros.IResolvable;
    /**
     * @Attribute EcsClassCode: ECS Class Code
     */
    readonly attrEcsClassCode: ros.IResolvable;
    /**
     * @Attribute HostClass: Host Class
     */
    readonly attrHostClass: ros.IResolvable;
    /**
     * @Attribute HostCpu: Host CPU
     */
    readonly attrHostCpu: ros.IResolvable;
    /**
     * @Attribute HostMem: Host Memory
     */
    readonly attrHostMem: ros.IResolvable;
    /**
     * @Attribute HostName: Host Name
     */
    readonly attrHostName: ros.IResolvable;
    /**
     * @Attribute HostStorage: Host Storage
     */
    readonly attrHostStorage: ros.IResolvable;
    /**
     * @Attribute HostType: Host Storage Type
     */
    readonly attrHostType: ros.IResolvable;
    /**
     * @Attribute ImageCategory: Host Image Category
     */
    readonly attrImageCategory: ros.IResolvable;
    /**
     * @Attribute IpAddress: Host IP Address
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * @Attribute MemAllocationRatio: Memory Allocation Ratio
     */
    readonly attrMemAllocationRatio: ros.IResolvable;
    /**
     * @Attribute MemoryUsed: Host Memory Used
     */
    readonly attrMemoryUsed: ros.IResolvable;
    /**
     * @Attribute OpenPermission: Whether Open OS Permission
     */
    readonly attrOpenPermission: ros.IResolvable;
    /**
     * @Attribute PaymentType: Payment Type
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute StorageUsed: Storage Used
     */
    readonly attrStorageUsed: ros.IResolvable;
    /**
     * @Attribute VSwitchId: VSwitch ID
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: VPC ID
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneId: Zone ID
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID
     */
    dedicatedHostGroupId: string | ros.IResolvable;
    /**
     * @Property hostClass: Host Class
     */
    hostClass: string | ros.IResolvable;
    /**
     * @Property paymentType: Payment Type
     */
    paymentType: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitch ID
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: Zone ID
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Whether Auto Renew
     */
    autoRenew: string | ros.IResolvable | undefined;
    /**
     * @Property hostName: Host Name
     */
    hostName: string | ros.IResolvable | undefined;
    /**
     * @Property imageCategory: Host Image Category
     */
    imageCategory: string | ros.IResolvable | undefined;
    /**
     * @Property osPassword:
     */
    osPassword: string | ros.IResolvable | undefined;
    /**
     * @Property period:
     */
    period: string | ros.IResolvable | undefined;
    /**
     * @Property tags: The tag of the resource
     */
    tags: RosDedicatedHost.TagsProperty[] | undefined;
    /**
     * @Property usedTime:
     */
    usedTime: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CDDC::DedicatedHost`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDedicatedHost {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property tagKey: The key of the tags
         */
        readonly tagKey?: string | ros.IResolvable;
        /**
         * @Property tagValue: The value of the tags
         */
        readonly tagValue?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::CDDC::DedicatedHostGroup`
 */
export interface RosDedicatedHostGroupProps {
    /**
     * @Property engine: Database Engine Type
     */
    readonly engine: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property allocationPolicy: Allocation Policy
     */
    readonly allocationPolicy?: string | ros.IResolvable;
    /**
     * @Property cpuAllocationRatio: Cpu Allocation Ratio
     */
    readonly cpuAllocationRatio?: number | ros.IResolvable;
    /**
     * @Property dedicatedHostGroupDesc: Dedicated Host Group Description
     */
    readonly dedicatedHostGroupDesc?: string | ros.IResolvable;
    /**
     * @Property diskAllocationRatio: Disk Allocation Ratio
     */
    readonly diskAllocationRatio?: number | ros.IResolvable;
    /**
     * @Property hostReplacePolicy: Host Replace Policy
     */
    readonly hostReplacePolicy?: string | ros.IResolvable;
    /**
     * @Property memAllocationRatio: Memory Allocation Ratio
     */
    readonly memAllocationRatio?: number | ros.IResolvable;
    /**
     * @Property openPermission: Whether Open OS Permission
     */
    readonly openPermission?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CDDC::DedicatedHostGroup`
 */
export declare class RosDedicatedHostGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDDC::DedicatedHostGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AllocationPolicy: Allocation Policy
     */
    readonly attrAllocationPolicy: ros.IResolvable;
    /**
     * @Attribute BastionInstanceId: BastionInstanceId
     */
    readonly attrBastionInstanceId: ros.IResolvable;
    /**
     * @Attribute CpuAllocateRation: CpuAllocateRation
     */
    readonly attrCpuAllocateRation: ros.IResolvable;
    /**
     * @Attribute CpuAllocatedAmount: CpuAllocatedAmount
     */
    readonly attrCpuAllocatedAmount: ros.IResolvable;
    /**
     * @Attribute CpuAllocationRatio: Cpu Allocation Ratio
     */
    readonly attrCpuAllocationRatio: ros.IResolvable;
    /**
     * @Attribute DedicatedHostGroupDesc: Dedicated Host Group Description
     */
    readonly attrDedicatedHostGroupDesc: ros.IResolvable;
    /**
     * @Attribute DedicatedHostGroupId: Dedicated Host Group ID
     */
    readonly attrDedicatedHostGroupId: ros.IResolvable;
    /**
     * @Attribute DeployType: DeployType
     */
    readonly attrDeployType: ros.IResolvable;
    /**
     * @Attribute DiskAllocateRation: DiskAllocateRation
     */
    readonly attrDiskAllocateRation: ros.IResolvable;
    /**
     * @Attribute DiskAllocatedAmount: DiskAllocatedAmount
     */
    readonly attrDiskAllocatedAmount: ros.IResolvable;
    /**
     * @Attribute DiskAllocationRatio: Disk Allocation Ratio
     */
    readonly attrDiskAllocationRatio: ros.IResolvable;
    /**
     * @Attribute DiskUsedAmount: DiskUsedAmount
     */
    readonly attrDiskUsedAmount: ros.IResolvable;
    /**
     * @Attribute DiskUtility: DiskUtility
     */
    readonly attrDiskUtility: ros.IResolvable;
    /**
     * @Attribute Engine: Database Engine Type
     */
    readonly attrEngine: ros.IResolvable;
    /**
     * @Attribute HostNumber: Total Host Number
     */
    readonly attrHostNumber: ros.IResolvable;
    /**
     * @Attribute HostReplacePolicy: Host Replace Policy
     */
    readonly attrHostReplacePolicy: ros.IResolvable;
    /**
     * @Attribute InstanceNumber: Total Instance Number
     */
    readonly attrInstanceNumber: ros.IResolvable;
    /**
     * @Attribute MemAllocateRation: MemAllocateRation
     */
    readonly attrMemAllocateRation: ros.IResolvable;
    /**
     * @Attribute MemAllocatedAmount: MemAllocatedAmount
     */
    readonly attrMemAllocatedAmount: ros.IResolvable;
    /**
     * @Attribute MemAllocationRatio: Memory Allocation Ratio
     */
    readonly attrMemAllocationRatio: ros.IResolvable;
    /**
     * @Attribute MemUsedAmount: MemUsedAmount
     */
    readonly attrMemUsedAmount: ros.IResolvable;
    /**
     * @Attribute MemUtility: MemUtility
     */
    readonly attrMemUtility: ros.IResolvable;
    /**
     * @Attribute OpenPermission: Whether Open OS Permission
     */
    readonly attrOpenPermission: ros.IResolvable;
    /**
     * @Attribute Text: Text
     */
    readonly attrText: ros.IResolvable;
    /**
     * @Attribute VpcId: VPC ID
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property engine: Database Engine Type
     */
    engine: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property allocationPolicy: Allocation Policy
     */
    allocationPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property cpuAllocationRatio: Cpu Allocation Ratio
     */
    cpuAllocationRatio: number | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostGroupDesc: Dedicated Host Group Description
     */
    dedicatedHostGroupDesc: string | ros.IResolvable | undefined;
    /**
     * @Property diskAllocationRatio: Disk Allocation Ratio
     */
    diskAllocationRatio: number | ros.IResolvable | undefined;
    /**
     * @Property hostReplacePolicy: Host Replace Policy
     */
    hostReplacePolicy: string | ros.IResolvable | undefined;
    /**
     * @Property memAllocationRatio: Memory Allocation Ratio
     */
    memAllocationRatio: number | ros.IResolvable | undefined;
    /**
     * @Property openPermission: Whether Open OS Permission
     */
    openPermission: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CDDC::DedicatedHostGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
//# sourceMappingURL=cddc.generated.d.ts.map