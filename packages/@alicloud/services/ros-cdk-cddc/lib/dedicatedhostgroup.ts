import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHostGroup } from './cddc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDedicatedHostGroup as DedicatedHostGroupProperty };

/**
 * Properties for defining a `DedicatedHostGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup
 */
export interface DedicatedHostGroupProps {

    /**
     * Property engine: Database Engine Type
     */
    readonly engine: string | ros.IResolvable;

    /**
     * Property vpcId: VPC ID
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property allocationPolicy: Allocation Policy
     */
    readonly allocationPolicy?: string | ros.IResolvable;

    /**
     * Property cpuAllocationRatio: Cpu Allocation Ratio
     */
    readonly cpuAllocationRatio?: number | ros.IResolvable;

    /**
     * Property dedicatedHostGroupDesc: Dedicated Host Group Description
     */
    readonly dedicatedHostGroupDesc?: string | ros.IResolvable;

    /**
     * Property diskAllocationRatio: Disk Allocation Ratio
     */
    readonly diskAllocationRatio?: number | ros.IResolvable;

    /**
     * Property hostReplacePolicy: Host Replace Policy
     */
    readonly hostReplacePolicy?: string | ros.IResolvable;

    /**
     * Property memAllocationRatio: Memory Allocation Ratio
     */
    readonly memAllocationRatio?: number | ros.IResolvable;

    /**
     * Property openPermission: Whether Open OS Permission
     */
    readonly openPermission?: string | ros.IResolvable;
}

/**
 * Represents a `DedicatedHostGroup`.
 */
export interface IDedicatedHostGroup extends ros.IResource {
    readonly props: DedicatedHostGroupProps;

    /**
     * Attribute AllocationPolicy: Allocation Policy
     */
    readonly attrAllocationPolicy: ros.IResolvable | string;

    /**
     * Attribute BastionInstanceId: BastionInstanceId
     */
    readonly attrBastionInstanceId: ros.IResolvable | string;

    /**
     * Attribute CpuAllocateRation: CpuAllocateRation
     */
    readonly attrCpuAllocateRation: ros.IResolvable | string;

    /**
     * Attribute CpuAllocatedAmount: CpuAllocatedAmount
     */
    readonly attrCpuAllocatedAmount: ros.IResolvable | string;

    /**
     * Attribute CpuAllocationRatio: Cpu Allocation Ratio
     */
    readonly attrCpuAllocationRatio: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostGroupDesc: Dedicated Host Group Description
     */
    readonly attrDedicatedHostGroupDesc: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostGroupId: Dedicated Host Group ID
     */
    readonly attrDedicatedHostGroupId: ros.IResolvable | string;

    /**
     * Attribute DeployType: DeployType
     */
    readonly attrDeployType: ros.IResolvable | string;

    /**
     * Attribute DiskAllocateRation: DiskAllocateRation
     */
    readonly attrDiskAllocateRation: ros.IResolvable | string;

    /**
     * Attribute DiskAllocatedAmount: DiskAllocatedAmount
     */
    readonly attrDiskAllocatedAmount: ros.IResolvable | string;

    /**
     * Attribute DiskAllocationRatio: Disk Allocation Ratio
     */
    readonly attrDiskAllocationRatio: ros.IResolvable | string;

    /**
     * Attribute DiskUsedAmount: DiskUsedAmount
     */
    readonly attrDiskUsedAmount: ros.IResolvable | string;

    /**
     * Attribute DiskUtility: DiskUtility
     */
    readonly attrDiskUtility: ros.IResolvable | string;

    /**
     * Attribute Engine: Database Engine Type
     */
    readonly attrEngine: ros.IResolvable | string;

    /**
     * Attribute HostNumber: Total Host Number
     */
    readonly attrHostNumber: ros.IResolvable | string;

    /**
     * Attribute HostReplacePolicy: Host Replace Policy
     */
    readonly attrHostReplacePolicy: ros.IResolvable | string;

    /**
     * Attribute InstanceNumber: Total Instance Number
     */
    readonly attrInstanceNumber: ros.IResolvable | string;

    /**
     * Attribute MemAllocateRation: MemAllocateRation
     */
    readonly attrMemAllocateRation: ros.IResolvable | string;

    /**
     * Attribute MemAllocatedAmount: MemAllocatedAmount
     */
    readonly attrMemAllocatedAmount: ros.IResolvable | string;

    /**
     * Attribute MemAllocationRatio: Memory Allocation Ratio
     */
    readonly attrMemAllocationRatio: ros.IResolvable | string;

    /**
     * Attribute MemUsedAmount: MemUsedAmount
     */
    readonly attrMemUsedAmount: ros.IResolvable | string;

    /**
     * Attribute MemUtility: MemUtility
     */
    readonly attrMemUtility: ros.IResolvable | string;

    /**
     * Attribute OpenPermission: Whether Open OS Permission
     */
    readonly attrOpenPermission: ros.IResolvable | string;

    /**
     * Attribute Text: Text
     */
    readonly attrText: ros.IResolvable | string;

    /**
     * Attribute VpcId: VPC ID
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDDC::DedicatedHostGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHostGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup
 */
export class DedicatedHostGroup extends ros.Resource implements IDedicatedHostGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DedicatedHostGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AllocationPolicy: Allocation Policy
     */
    public readonly attrAllocationPolicy: ros.IResolvable | string;

    /**
     * Attribute BastionInstanceId: BastionInstanceId
     */
    public readonly attrBastionInstanceId: ros.IResolvable | string;

    /**
     * Attribute CpuAllocateRation: CpuAllocateRation
     */
    public readonly attrCpuAllocateRation: ros.IResolvable | string;

    /**
     * Attribute CpuAllocatedAmount: CpuAllocatedAmount
     */
    public readonly attrCpuAllocatedAmount: ros.IResolvable | string;

    /**
     * Attribute CpuAllocationRatio: Cpu Allocation Ratio
     */
    public readonly attrCpuAllocationRatio: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostGroupDesc: Dedicated Host Group Description
     */
    public readonly attrDedicatedHostGroupDesc: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostGroupId: Dedicated Host Group ID
     */
    public readonly attrDedicatedHostGroupId: ros.IResolvable | string;

    /**
     * Attribute DeployType: DeployType
     */
    public readonly attrDeployType: ros.IResolvable | string;

    /**
     * Attribute DiskAllocateRation: DiskAllocateRation
     */
    public readonly attrDiskAllocateRation: ros.IResolvable | string;

    /**
     * Attribute DiskAllocatedAmount: DiskAllocatedAmount
     */
    public readonly attrDiskAllocatedAmount: ros.IResolvable | string;

    /**
     * Attribute DiskAllocationRatio: Disk Allocation Ratio
     */
    public readonly attrDiskAllocationRatio: ros.IResolvable | string;

    /**
     * Attribute DiskUsedAmount: DiskUsedAmount
     */
    public readonly attrDiskUsedAmount: ros.IResolvable | string;

    /**
     * Attribute DiskUtility: DiskUtility
     */
    public readonly attrDiskUtility: ros.IResolvable | string;

    /**
     * Attribute Engine: Database Engine Type
     */
    public readonly attrEngine: ros.IResolvable | string;

    /**
     * Attribute HostNumber: Total Host Number
     */
    public readonly attrHostNumber: ros.IResolvable | string;

    /**
     * Attribute HostReplacePolicy: Host Replace Policy
     */
    public readonly attrHostReplacePolicy: ros.IResolvable | string;

    /**
     * Attribute InstanceNumber: Total Instance Number
     */
    public readonly attrInstanceNumber: ros.IResolvable | string;

    /**
     * Attribute MemAllocateRation: MemAllocateRation
     */
    public readonly attrMemAllocateRation: ros.IResolvable | string;

    /**
     * Attribute MemAllocatedAmount: MemAllocatedAmount
     */
    public readonly attrMemAllocatedAmount: ros.IResolvable | string;

    /**
     * Attribute MemAllocationRatio: Memory Allocation Ratio
     */
    public readonly attrMemAllocationRatio: ros.IResolvable | string;

    /**
     * Attribute MemUsedAmount: MemUsedAmount
     */
    public readonly attrMemUsedAmount: ros.IResolvable | string;

    /**
     * Attribute MemUtility: MemUtility
     */
    public readonly attrMemUtility: ros.IResolvable | string;

    /**
     * Attribute OpenPermission: Whether Open OS Permission
     */
    public readonly attrOpenPermission: ros.IResolvable | string;

    /**
     * Attribute Text: Text
     */
    public readonly attrText: ros.IResolvable | string;

    /**
     * Attribute VpcId: VPC ID
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDedicatedHostGroup = new RosDedicatedHostGroup(this, id,  {
            diskAllocationRatio: props.diskAllocationRatio,
            allocationPolicy: props.allocationPolicy,
            vpcId: props.vpcId,
            memAllocationRatio: props.memAllocationRatio,
            hostReplacePolicy: props.hostReplacePolicy,
            cpuAllocationRatio: props.cpuAllocationRatio,
            engine: props.engine,
            dedicatedHostGroupDesc: props.dedicatedHostGroupDesc,
            openPermission: props.openPermission,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDedicatedHostGroup;
        this.attrAllocationPolicy = rosDedicatedHostGroup.attrAllocationPolicy;
        this.attrBastionInstanceId = rosDedicatedHostGroup.attrBastionInstanceId;
        this.attrCpuAllocateRation = rosDedicatedHostGroup.attrCpuAllocateRation;
        this.attrCpuAllocatedAmount = rosDedicatedHostGroup.attrCpuAllocatedAmount;
        this.attrCpuAllocationRatio = rosDedicatedHostGroup.attrCpuAllocationRatio;
        this.attrDedicatedHostGroupDesc = rosDedicatedHostGroup.attrDedicatedHostGroupDesc;
        this.attrDedicatedHostGroupId = rosDedicatedHostGroup.attrDedicatedHostGroupId;
        this.attrDeployType = rosDedicatedHostGroup.attrDeployType;
        this.attrDiskAllocateRation = rosDedicatedHostGroup.attrDiskAllocateRation;
        this.attrDiskAllocatedAmount = rosDedicatedHostGroup.attrDiskAllocatedAmount;
        this.attrDiskAllocationRatio = rosDedicatedHostGroup.attrDiskAllocationRatio;
        this.attrDiskUsedAmount = rosDedicatedHostGroup.attrDiskUsedAmount;
        this.attrDiskUtility = rosDedicatedHostGroup.attrDiskUtility;
        this.attrEngine = rosDedicatedHostGroup.attrEngine;
        this.attrHostNumber = rosDedicatedHostGroup.attrHostNumber;
        this.attrHostReplacePolicy = rosDedicatedHostGroup.attrHostReplacePolicy;
        this.attrInstanceNumber = rosDedicatedHostGroup.attrInstanceNumber;
        this.attrMemAllocateRation = rosDedicatedHostGroup.attrMemAllocateRation;
        this.attrMemAllocatedAmount = rosDedicatedHostGroup.attrMemAllocatedAmount;
        this.attrMemAllocationRatio = rosDedicatedHostGroup.attrMemAllocationRatio;
        this.attrMemUsedAmount = rosDedicatedHostGroup.attrMemUsedAmount;
        this.attrMemUtility = rosDedicatedHostGroup.attrMemUtility;
        this.attrOpenPermission = rosDedicatedHostGroup.attrOpenPermission;
        this.attrText = rosDedicatedHostGroup.attrText;
        this.attrVpcId = rosDedicatedHostGroup.attrVpcId;
    }
}
