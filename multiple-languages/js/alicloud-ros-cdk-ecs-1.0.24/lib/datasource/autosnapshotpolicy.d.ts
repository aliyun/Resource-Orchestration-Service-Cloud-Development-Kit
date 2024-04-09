import * as ros from '@alicloud/ros-cdk-core';
import { RosAutoSnapshotPolicy } from './ecs.generated';
export { RosAutoSnapshotPolicy as AutoSnapshotPolicyProperty };
/**
 * Properties for defining a `AutoSnapshotPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
 */
export interface AutoSnapshotPolicyProps {
    /**
     * Property autoSnapshotPolicyId: The name of the automatic snapshot policy.
     */
    readonly autoSnapshotPolicyId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::AutoSnapshotPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAutoSnapshotPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
 */
export declare class AutoSnapshotPolicy extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AutoSnapshotPolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AutoSnapshotPolicyName: Name of the automatic snapshot policy.
     */
    readonly attrAutoSnapshotPolicyName: ros.IResolvable;
    /**
     * Attribute CreateTime: The time when the automatic snapshot policy was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DiskNums: Number of cloud disks with this policy enabled.
     */
    readonly attrDiskNums: ros.IResolvable;
    /**
     * Attribute RepeatWeekdays: The days of the week on which to create automatic snapshots. Valid values: 1 to 7, which correspond to the days of the week. 1 indicates Monday. One or more days can be specified.
     */
    readonly attrRepeatWeekdays: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute RetentionDays: The retention period of the automatic snapshot. Unit: days. Valid values:
- -1: The automatic snapshot is retained until it is deleted.
- 1 to 65536: The automatic snapshot is retained for the specified number of days.
     */
    readonly attrRetentionDays: ros.IResolvable;
    /**
     * Attribute Tags: The tags of the automatic snapshot policy.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute TimePoints: The time when the automatic snapshot policy was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrTimePoints: ros.IResolvable;
    /**
     * Attribute VolumeNums: The number of extended volumes to which the automatic snapshot policy is applied.
     */
    readonly attrVolumeNums: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AutoSnapshotPolicyProps, enableResourcePropertyConstraint?: boolean);
}
