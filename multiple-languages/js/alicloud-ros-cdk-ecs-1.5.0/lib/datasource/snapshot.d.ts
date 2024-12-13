import * as ros from '@alicloud/ros-cdk-core';
import { RosSnapshot } from './ecs.generated';
export { RosSnapshot as SnapshotProperty };
/**
 * Properties for defining a `Snapshot`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshot
 */
export interface SnapshotProps {
    /**
     * Property snapshotId: The snapshot id.
     */
    readonly snapshotId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Snapshot`, which is used to query the information about a snapshot.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSnapshot`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshot
 */
export declare class Snapshot extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SnapshotProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The create time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: The description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute DiskId: The source disk id.
     */
    readonly attrDiskId: ros.IResolvable;
    /**
     * Attribute Encrypted: Whether the snapshot is encrypted.
     */
    readonly attrEncrypted: ros.IResolvable;
    /**
     * Attribute InstantAccess: Whether snapshot speed availability is enabled.
     */
    readonly attrInstantAccess: ros.IResolvable;
    /**
     * Attribute InstantAccessRetentionDays: InstantAccessRetentionDays.
     */
    readonly attrInstantAccessRetentionDays: ros.IResolvable;
    /**
     * Attribute ProductCode: The product number inherited from the mirror market.
     */
    readonly attrProductCode: ros.IResolvable;
    /**
     * Attribute Progress: Snapshot creation progress, in percentage.
     */
    readonly attrProgress: ros.IResolvable;
    /**
     * Attribute RemainTime: Remaining completion time for the snapshot being created.
     */
    readonly attrRemainTime: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The resource group id.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute RetentionDays: Automatic snapshot retention days.
     */
    readonly attrRetentionDays: ros.IResolvable;
    /**
     * Attribute SnapshotId: The snapshot id.
     */
    readonly attrSnapshotId: ros.IResolvable;
    /**
     * Attribute SnapshotName: Snapshot Display Name.
     */
    readonly attrSnapshotName: ros.IResolvable;
    /**
     * Attribute SnapshotSN: Snapshot serial number.
     */
    readonly attrSnapshotSn: ros.IResolvable;
    /**
     * Attribute SnapshotType: Snapshot creation type.
     */
    readonly attrSnapshotType: ros.IResolvable;
    /**
     * Attribute SourceDiskSize: Source disk capacity.
     */
    readonly attrSourceDiskSize: ros.IResolvable;
    /**
     * Attribute SourceDiskType: Source disk attributes.
     */
    readonly attrSourceDiskType: ros.IResolvable;
    /**
     * Attribute SourceStorageType: Original disk type.
     */
    readonly attrSourceStorageType: ros.IResolvable;
    /**
     * Attribute Tags: The tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute Usage: A resource type that has a reference relationship.
     */
    readonly attrUsage: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SnapshotProps, enableResourcePropertyConstraint?: boolean);
}
