import * as ros from '@alicloud/ros-cdk-core';
import { RosSnapshot } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSnapshot as SnapshotProperty };

/**
 * Properties for defining a `Snapshot`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshot
 */
export interface SnapshotProps {

    /**
     * Property diskId: Indicates the ID of the specified disk.
     */
    readonly diskId: string | ros.IResolvable;

    /**
     * Property description: The snapshot description must be 2 to 256 characters in length and cannot start
     * with `http:\/\/` or `https:\/\/`.
     * This parameter is empty by default.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property instantAccess: Specifies whether to enable the Instant Access feature. Valid values:
     * - true: Enables the Instant Access feature. This feature can be enabled only for
     * snapshots of ESSD cloud disks.
     * - false: Disables the Instant Access feature. A standard snapshot is created.
     * Default value: false.
     * > This parameter is deprecated. standard snapshots for ESSD cloud disks now
     * include the [Instant Access]() feature by default at no additional cost.
     */
    readonly instantAccess?: boolean | ros.IResolvable;

    /**
     * Property instantAccessRetentionDays: The retention period for the Instant Access feature, in days. The snapshot is
     * automatically deleted when this retention period expires. This parameter takes
     * effect only when `InstantAccess` is set to `true`. Valid values: 1 to 65,535.
     * Defaults to the value of `RetentionDays`.
     * > This parameter is deprecated. standard snapshots for ESSD cloud disks now
     * include the [Instant Access]() feature by default at no additional cost.
     */
    readonly instantAccessRetentionDays?: number | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property retentionDays: The retention period of the snapshot, in days. Valid values: 1 to 65,536. The
     * snapshot is automatically deleted when the retention period expires.
     * If this parameter is not specified, the snapshot is retained indefinitely.
     */
    readonly retentionDays?: number | ros.IResolvable;

    /**
     * Property snapshotName: The snapshot name must be 2 to 128 characters long. It must start with a letter
     * or a Chinese character and can contain letters, digits, colons (:), underscores
     * (_), periods (.), and hyphens (-).
     * > The name cannot start with `http:\/\/` or `https:\/\/`. To avoid conflicts with
     * auto snapshot names, the name cannot start with `auto`.
     */
    readonly snapshotName?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSnapshot.TagsProperty[];

    /**
     * Property timeout: The number of minutes to wait for create snapshot.
     */
    readonly timeout?: number | ros.IResolvable;
}

/**
 * Represents a `Snapshot`.
 */
export interface ISnapshot extends ros.IResource {
    readonly props: SnapshotProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute SnapshotId: The snapshot ID.
     */
    readonly attrSnapshotId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::Snapshot`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSnapshot`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshot
 */
export class Snapshot extends ros.Resource implements ISnapshot {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SnapshotProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute SnapshotId: The snapshot ID.
     */
    public readonly attrSnapshotId: ros.IResolvable | string;

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
            instantAccess: props.instantAccess,
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            timeout: props.timeout === undefined || props.timeout === null ? 200 : props.timeout,
            retentionDays: props.retentionDays,
            snapshotName: props.snapshotName,
            instantAccessRetentionDays: props.instantAccessRetentionDays,
            tags: props.tags,
            diskId: props.diskId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSnapshot;
        this.attrArn = rosSnapshot.attrArn;
        this.attrSnapshotId = rosSnapshot.attrSnapshotId;
    }
}
