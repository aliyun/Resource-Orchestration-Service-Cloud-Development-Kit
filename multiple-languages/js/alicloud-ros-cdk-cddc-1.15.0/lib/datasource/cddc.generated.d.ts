import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDedicatedHostGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroup
 */
export interface RosDedicatedHostGroupProps {
    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    readonly dedicatedHostGroupId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CDDC::DedicatedHostGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHostGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroup
 */
export declare class RosDedicatedHostGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CDDC::DedicatedHostGroup";
    /**
     * @Attribute AllocationPolicy: Allocation Policy.
     */
    readonly attrAllocationPolicy: ros.IResolvable;
    /**
     * @Attribute BastionInstanceId: BastionInstanceId.
     */
    readonly attrBastionInstanceId: ros.IResolvable;
    /**
     * @Attribute Category: The dedicated cluster family to which the host belongs.
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * @Attribute CpuAllocateRation: CpuAllocateRation.
     */
    readonly attrCpuAllocateRation: ros.IResolvable;
    /**
     * @Attribute CpuAllocatedAmount: CpuAllocatedAmount.
     */
    readonly attrCpuAllocatedAmount: ros.IResolvable;
    /**
     * @Attribute CpuAllocationRatio: Cpu Allocation Ratio.
     */
    readonly attrCpuAllocationRatio: ros.IResolvable;
    /**
     * @Attribute CreateTime: Create Time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DedicatedHostCountGroupByHostType: DedicatedHostCountGroupByHostType.
     */
    readonly attrDedicatedHostCountGroupByHostType: ros.IResolvable;
    /**
     * @Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.
     */
    readonly attrDedicatedHostGroupDesc: ros.IResolvable;
    /**
     * @Attribute DedicatedHostGroupId: Dedicated Host Group ID.
     */
    readonly attrDedicatedHostGroupId: ros.IResolvable;
    /**
     * @Attribute DeployType: DeployType.
     */
    readonly attrDeployType: ros.IResolvable;
    /**
     * @Attribute DiskAllocateRation: DiskAllocateRation.
     */
    readonly attrDiskAllocateRation: ros.IResolvable;
    /**
     * @Attribute DiskAllocatedAmount: DiskAllocatedAmount.
     */
    readonly attrDiskAllocatedAmount: ros.IResolvable;
    /**
     * @Attribute DiskAllocationRatio: Disk Allocation Ratio.
     */
    readonly attrDiskAllocationRatio: ros.IResolvable;
    /**
     * @Attribute DiskUsedAmount: DiskUsedAmount.
     */
    readonly attrDiskUsedAmount: ros.IResolvable;
    /**
     * @Attribute DiskUtility: DiskUtility.
     */
    readonly attrDiskUtility: ros.IResolvable;
    /**
     * @Attribute Engine: Database Engine Type.
     */
    readonly attrEngine: ros.IResolvable;
    /**
     * @Attribute HostNumber: Total Host Number.
     */
    readonly attrHostNumber: ros.IResolvable;
    /**
     * @Attribute HostReplacePolicy: Host Replace Policy.
     */
    readonly attrHostReplacePolicy: ros.IResolvable;
    /**
     * @Attribute InstanceNumber: Total Instance Number.
     */
    readonly attrInstanceNumber: ros.IResolvable;
    /**
     * @Attribute MemAllocateRation: MemAllocateRation.
     */
    readonly attrMemAllocateRation: ros.IResolvable;
    /**
     * @Attribute MemAllocatedAmount: MemAllocatedAmount.
     */
    readonly attrMemAllocatedAmount: ros.IResolvable;
    /**
     * @Attribute MemAllocationRatio: Memory Allocation Ratio.
     */
    readonly attrMemAllocationRatio: ros.IResolvable;
    /**
     * @Attribute MemUsedAmount: MemUsedAmount.
     */
    readonly attrMemUsedAmount: ros.IResolvable;
    /**
     * @Attribute MemUtility: MemUtility.
     */
    readonly attrMemUtility: ros.IResolvable;
    /**
     * @Attribute OpenPermission: Whether Open OS Permission.
     */
    readonly attrOpenPermission: ros.IResolvable;
    /**
     * @Attribute Text: Text.
     */
    readonly attrText: ros.IResolvable;
    /**
     * @Attribute VpcId: VPC ID.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneIdList: ZoneIDList.
     */
    readonly attrZoneIdList: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    dedicatedHostGroupId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
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
/**
 * Properties for defining a `RosDedicatedHostGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
 */
export interface RosDedicatedHostGroupsProps {
    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;
    /**
     * @Property engine: Database Engine Type.
     */
    readonly engine?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CDDC::DedicatedHostGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHostGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
 */
export declare class RosDedicatedHostGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CDDC::DedicatedHostGroups";
    /**
     * @Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.
     */
    readonly attrDedicatedHostGroupIds: ros.IResolvable;
    /**
     * @Attribute DedicatedHostGroups: The list of dedicated host groups.
     */
    readonly attrDedicatedHostGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    dedicatedHostGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property engine: Database Engine Type.
     */
    engine: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostGroupsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
