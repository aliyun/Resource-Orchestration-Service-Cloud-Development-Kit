import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHostGroup } from './cddc.generated';
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
export declare class DedicatedHostGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AllocationPolicy: Allocation Policy
     */
    readonly attrAllocationPolicy: ros.IResolvable;
    /**
     * Attribute BastionInstanceId: BastionInstanceId
     */
    readonly attrBastionInstanceId: ros.IResolvable;
    /**
     * Attribute CpuAllocateRation: CpuAllocateRation
     */
    readonly attrCpuAllocateRation: ros.IResolvable;
    /**
     * Attribute CpuAllocatedAmount: CpuAllocatedAmount
     */
    readonly attrCpuAllocatedAmount: ros.IResolvable;
    /**
     * Attribute CpuAllocationRatio: Cpu Allocation Ratio
     */
    readonly attrCpuAllocationRatio: ros.IResolvable;
    /**
     * Attribute DedicatedHostGroupDesc: Dedicated Host Group Description
     */
    readonly attrDedicatedHostGroupDesc: ros.IResolvable;
    /**
     * Attribute DedicatedHostGroupId: Dedicated Host Group ID
     */
    readonly attrDedicatedHostGroupId: ros.IResolvable;
    /**
     * Attribute DeployType: DeployType
     */
    readonly attrDeployType: ros.IResolvable;
    /**
     * Attribute DiskAllocateRation: DiskAllocateRation
     */
    readonly attrDiskAllocateRation: ros.IResolvable;
    /**
     * Attribute DiskAllocatedAmount: DiskAllocatedAmount
     */
    readonly attrDiskAllocatedAmount: ros.IResolvable;
    /**
     * Attribute DiskAllocationRatio: Disk Allocation Ratio
     */
    readonly attrDiskAllocationRatio: ros.IResolvable;
    /**
     * Attribute DiskUsedAmount: DiskUsedAmount
     */
    readonly attrDiskUsedAmount: ros.IResolvable;
    /**
     * Attribute DiskUtility: DiskUtility
     */
    readonly attrDiskUtility: ros.IResolvable;
    /**
     * Attribute Engine: Database Engine Type
     */
    readonly attrEngine: ros.IResolvable;
    /**
     * Attribute HostNumber: Total Host Number
     */
    readonly attrHostNumber: ros.IResolvable;
    /**
     * Attribute HostReplacePolicy: Host Replace Policy
     */
    readonly attrHostReplacePolicy: ros.IResolvable;
    /**
     * Attribute InstanceNumber: Total Instance Number
     */
    readonly attrInstanceNumber: ros.IResolvable;
    /**
     * Attribute MemAllocateRation: MemAllocateRation
     */
    readonly attrMemAllocateRation: ros.IResolvable;
    /**
     * Attribute MemAllocatedAmount: MemAllocatedAmount
     */
    readonly attrMemAllocatedAmount: ros.IResolvable;
    /**
     * Attribute MemAllocationRatio: Memory Allocation Ratio
     */
    readonly attrMemAllocationRatio: ros.IResolvable;
    /**
     * Attribute MemUsedAmount: MemUsedAmount
     */
    readonly attrMemUsedAmount: ros.IResolvable;
    /**
     * Attribute MemUtility: MemUtility
     */
    readonly attrMemUtility: ros.IResolvable;
    /**
     * Attribute OpenPermission: Whether Open OS Permission
     */
    readonly attrOpenPermission: ros.IResolvable;
    /**
     * Attribute Text: Text
     */
    readonly attrText: ros.IResolvable;
    /**
     * Attribute VpcId: VPC ID
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CDDC::DedicatedHostGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostGroupProps, enableResourcePropertyConstraint?: boolean);
}
