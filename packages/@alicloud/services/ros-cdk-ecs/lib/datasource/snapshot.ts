import * as ros from '@alicloud/ros-cdk-core';
import { RosSnapshot } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Snapshot`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSnapshot`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshot
 */
export class Snapshot extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SnapshotProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The create time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: The description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute DiskId: The source disk id.
     */
    public readonly attrDiskId: ros.IResolvable;

    /**
     * Attribute Encrypted: Whether the snapshot is encrypted.
     */
    public readonly attrEncrypted: ros.IResolvable;

    /**
     * Attribute InstantAccess: Whether snapshot speed availability is enabled.
     */
    public readonly attrInstantAccess: ros.IResolvable;

    /**
     * Attribute InstantAccessRetentionDays: InstantAccessRetentionDays.
     */
    public readonly attrInstantAccessRetentionDays: ros.IResolvable;

    /**
     * Attribute ProductCode: The product number inherited from the mirror market.
     */
    public readonly attrProductCode: ros.IResolvable;

    /**
     * Attribute Progress: Snapshot creation progress, in percentage.
     */
    public readonly attrProgress: ros.IResolvable;

    /**
     * Attribute RemainTime: Remaining completion time for the snapshot being created.
     */
    public readonly attrRemainTime: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The resource group id.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute RetentionDays: Automatic snapshot retention days.
     */
    public readonly attrRetentionDays: ros.IResolvable;

    /**
     * Attribute SnapshotId: The snapshot id.
     */
    public readonly attrSnapshotId: ros.IResolvable;

    /**
     * Attribute SnapshotName: Snapshot Display Name.
     */
    public readonly attrSnapshotName: ros.IResolvable;

    /**
     * Attribute SnapshotSN: Snapshot serial number.
     */
    public readonly attrSnapshotSn: ros.IResolvable;

    /**
     * Attribute SnapshotType: Snapshot creation type.
     */
    public readonly attrSnapshotType: ros.IResolvable;

    /**
     * Attribute SourceDiskSize: Source disk capacity.
     */
    public readonly attrSourceDiskSize: ros.IResolvable;

    /**
     * Attribute SourceDiskType: Source disk attributes.
     */
    public readonly attrSourceDiskType: ros.IResolvable;

    /**
     * Attribute SourceStorageType: Original disk type.
     */
    public readonly attrSourceStorageType: ros.IResolvable;

    /**
     * Attribute Tags: The tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute Usage: A resource type that has a reference relationship.
     */
    public readonly attrUsage: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SnapshotProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSnapshot = new RosSnapshot(this, id,  {
            snapshotId: props.snapshotId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSnapshot;
        this.attrCreateTime = rosSnapshot.attrCreateTime;
        this.attrDescription = rosSnapshot.attrDescription;
        this.attrDiskId = rosSnapshot.attrDiskId;
        this.attrEncrypted = rosSnapshot.attrEncrypted;
        this.attrInstantAccess = rosSnapshot.attrInstantAccess;
        this.attrInstantAccessRetentionDays = rosSnapshot.attrInstantAccessRetentionDays;
        this.attrProductCode = rosSnapshot.attrProductCode;
        this.attrProgress = rosSnapshot.attrProgress;
        this.attrRemainTime = rosSnapshot.attrRemainTime;
        this.attrResourceGroupId = rosSnapshot.attrResourceGroupId;
        this.attrRetentionDays = rosSnapshot.attrRetentionDays;
        this.attrSnapshotId = rosSnapshot.attrSnapshotId;
        this.attrSnapshotName = rosSnapshot.attrSnapshotName;
        this.attrSnapshotSn = rosSnapshot.attrSnapshotSn;
        this.attrSnapshotType = rosSnapshot.attrSnapshotType;
        this.attrSourceDiskSize = rosSnapshot.attrSourceDiskSize;
        this.attrSourceDiskType = rosSnapshot.attrSourceDiskType;
        this.attrSourceStorageType = rosSnapshot.attrSourceStorageType;
        this.attrTags = rosSnapshot.attrTags;
        this.attrUsage = rosSnapshot.attrUsage;
    }
}
