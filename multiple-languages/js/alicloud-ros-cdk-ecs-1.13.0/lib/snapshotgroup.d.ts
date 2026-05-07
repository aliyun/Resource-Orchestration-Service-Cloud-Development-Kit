import * as ros from '@alicloud/ros-cdk-core';
import { RosSnapshotGroup } from './ecs.generated';
export { RosSnapshotGroup as SnapshotGroupProperty };
/**
 * Properties for defining a `SnapshotGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshotgroup
 */
export interface SnapshotGroupProps {
    /**
     * Property description: The description of the snapshot-consistent group. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property diskIds: The IDs of cloud disk for which you want to create snapshots. You can specify multiple cloud disk IDs across instances within the same zone. The length of the list ranges from 1 to 16. A single snapshot-consistent group can contain snapshots of up to 16 cloud disks whose total disk size does not exceed 32 TiB.
     * Take note of the following items:
     * You cannot specify both DiskIds and ExcludeDiskIdin the same request.
     * If InstanceId is set, you can use DiskIds to specify only cloud disks attached to the instance specified by InstanceId, and you cannot use DiskIds to specify cloud disks attached to multiple instances.
     */
    readonly diskIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property excludeDiskIds: The IDs of cloud disk for which you do not want to create snapshots. If this parameter is specified, the created snapshot-consistent group does not contain snapshots of the cloud disk. The length of the list ranges from 1 to 16.
     * This parameter is empty by default, which indicates that snapshots are created for all the disks of the instance.
     * Note You cannot specify ExcludeDiskIds and DiskIds in the same request.
     */
    readonly excludeDiskIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property instanceId: The instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property name: The name of the snapshot-consistent group. The name must be 2 to 128 characters in length. The name can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). It must start with a letter and cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the snapshot-consistent group belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to snapshot-consistent group. Max support 20 tags to add during create snapshot-consistent group. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSnapshotGroup.TagsProperty[];
}
/**
 * Represents a `SnapshotGroup`.
 */
export interface ISnapshotGroup extends ros.IResource {
    readonly props: SnapshotGroupProps;
    /**
     * Attribute SnapshotGroupId: The ID of the snapshot-consistent group.
     */
    readonly attrSnapshotGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::SnapshotGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSnapshotGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshotgroup
 */
export declare class SnapshotGroup extends ros.Resource implements ISnapshotGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SnapshotGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SnapshotGroupId: The ID of the snapshot-consistent group.
     */
    readonly attrSnapshotGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: SnapshotGroupProps, enableResourcePropertyConstraint?: boolean);
}
