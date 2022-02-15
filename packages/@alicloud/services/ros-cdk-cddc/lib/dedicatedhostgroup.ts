import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHostGroup } from './cddc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDedicatedHostGroup as DedicatedHostGroupProperty };

/**
 * Properties for defining a `ALIYUN::CDDC::DedicatedHostGroup`
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
 * A ROS resource type:  `ALIYUN::CDDC::DedicatedHostGroup`
 */
export class DedicatedHostGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AllocationPolicy: Allocation Policy
     */
    public readonly attrAllocationPolicy: ros.IResolvable;

    /**
     * Attribute BastionInstanceId: BastionInstanceId
     */
    public readonly attrBastionInstanceId: ros.IResolvable;

    /**
     * Attribute CpuAllocateRation: CpuAllocateRation
     */
    public readonly attrCpuAllocateRation: ros.IResolvable;

    /**
     * Attribute CpuAllocatedAmount: CpuAllocatedAmount
     */
    public readonly attrCpuAllocatedAmount: ros.IResolvable;

    /**
     * Attribute CpuAllocationRatio: Cpu Allocation Ratio
     */
    public readonly attrCpuAllocationRatio: ros.IResolvable;

    /**
     * Attribute DedicatedHostGroupDesc: Dedicated Host Group Description
     */
    public readonly attrDedicatedHostGroupDesc: ros.IResolvable;

    /**
     * Attribute DedicatedHostGroupId: Dedicated Host Group ID
     */
    public readonly attrDedicatedHostGroupId: ros.IResolvable;

    /**
     * Attribute DeployType: DeployType
     */
    public readonly attrDeployType: ros.IResolvable;

    /**
     * Attribute DiskAllocateRation: DiskAllocateRation
     */
    public readonly attrDiskAllocateRation: ros.IResolvable;

    /**
     * Attribute DiskAllocatedAmount: DiskAllocatedAmount
     */
    public readonly attrDiskAllocatedAmount: ros.IResolvable;

    /**
     * Attribute DiskAllocationRatio: Disk Allocation Ratio
     */
    public readonly attrDiskAllocationRatio: ros.IResolvable;

    /**
     * Attribute DiskUsedAmount: DiskUsedAmount
     */
    public readonly attrDiskUsedAmount: ros.IResolvable;

    /**
     * Attribute DiskUtility: DiskUtility
     */
    public readonly attrDiskUtility: ros.IResolvable;

    /**
     * Attribute Engine: Database Engine Type
     */
    public readonly attrEngine: ros.IResolvable;

    /**
     * Attribute HostNumber: Total Host Number
     */
    public readonly attrHostNumber: ros.IResolvable;

    /**
     * Attribute HostReplacePolicy: Host Replace Policy
     */
    public readonly attrHostReplacePolicy: ros.IResolvable;

    /**
     * Attribute InstanceNumber: Total Instance Number
     */
    public readonly attrInstanceNumber: ros.IResolvable;

    /**
     * Attribute MemAllocateRation: MemAllocateRation
     */
    public readonly attrMemAllocateRation: ros.IResolvable;

    /**
     * Attribute MemAllocatedAmount: MemAllocatedAmount
     */
    public readonly attrMemAllocatedAmount: ros.IResolvable;

    /**
     * Attribute MemAllocationRatio: Memory Allocation Ratio
     */
    public readonly attrMemAllocationRatio: ros.IResolvable;

    /**
     * Attribute MemUsedAmount: MemUsedAmount
     */
    public readonly attrMemUsedAmount: ros.IResolvable;

    /**
     * Attribute MemUtility: MemUtility
     */
    public readonly attrMemUtility: ros.IResolvable;

    /**
     * Attribute OpenPermission: Whether Open OS Permission
     */
    public readonly attrOpenPermission: ros.IResolvable;

    /**
     * Attribute Text: Text
     */
    public readonly attrText: ros.IResolvable;

    /**
     * Attribute VpcId: VPC ID
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::CDDC::DedicatedHostGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
