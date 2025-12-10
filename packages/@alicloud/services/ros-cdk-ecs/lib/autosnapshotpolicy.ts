import * as ros from '@alicloud/ros-cdk-core';
import { RosAutoSnapshotPolicy } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAutoSnapshotPolicy as AutoSnapshotPolicyProperty };

/**
 * Properties for defining a `AutoSnapshotPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autosnapshotpolicy
 */
export interface AutoSnapshotPolicyProps {

    /**
     * Property repeatWeekdays: The automatic snapshot repetition dates. The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
     * A maximum of seven time points can be selected.
     * The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
     */
    readonly repeatWeekdays: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * Property retentionDays: The snapshot retention time, and the unit of measurement is day. Optional values:
     * -1: The automatic snapshots are retained permanently.
     * [1, 65536]: The number of days retained.
     * Default value: -1.
     */
    readonly retentionDays: number | ros.IResolvable;

    /**
     * Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour. Value range: [0, 23], which represents from 00:00 to 24:00, for example 1 indicates 01:00. When you want to schedule multiple automatic snapshot tasks for a disk in a day, you can set the TimePoints to an array.
     * A maximum of 24 time points can be selected.
     * The format is a list of [0, 1, ..., 23] and the time points are separated by commas (,).
     */
    readonly timePoints: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property autoSnapshotPolicyName: The name of the automatic snapshot policy.
     * It can consist of [2, 128] English or Chinese characters.
     * Must begin with an uppercase or lowercase letter or a Chinese character. Can contain numbers, periods (.), colons (:), underscores (_), and hyphens (-).
     * Cannot start with http:\/\/ or https:\/\/.
     * Default value: null.
     */
    readonly autoSnapshotPolicyName?: string | ros.IResolvable;

    /**
     * Property copiedSnapshotsRetentionDays: Retention time in days for replicated snapshots across geographies. Range:
     * -1: Permanent storage
     * 1-65535: Specifies the number of days to save
     * Default value: -1
     */
    readonly copiedSnapshotsRetentionDays?: number | ros.IResolvable;

    /**
     * Property copyEncryptionConfiguration: The encryption configuration for copied snapshots.
     */
    readonly copyEncryptionConfiguration?: RosAutoSnapshotPolicy.CopyEncryptionConfigurationProperty | ros.IResolvable;

    /**
     * Property diskIds: The disk ID. When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
     */
    readonly diskIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property enableCrossRegionCopy: Whether to enable cross-region copying of snapshots.
     */
    readonly enableCrossRegionCopy?: boolean | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosAutoSnapshotPolicy.TagsProperty[];

    /**
     * Property targetCopyRegions: The target region of the snapshot is replicated across geographies. Setting a target region is currently supported.
     */
    readonly targetCopyRegions?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `AutoSnapshotPolicy`.
 */
export interface IAutoSnapshotPolicy extends ros.IResource {
    readonly props: AutoSnapshotPolicyProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute AutoSnapshotPolicyId: The automatic snapshot policy ID.
     */
    readonly attrAutoSnapshotPolicyId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::AutoSnapshotPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAutoSnapshotPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autosnapshotpolicy
 */
export class AutoSnapshotPolicy extends ros.Resource implements IAutoSnapshotPolicy {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AutoSnapshotPolicyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute AutoSnapshotPolicyId: The automatic snapshot policy ID.
     */
    public readonly attrAutoSnapshotPolicyId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AutoSnapshotPolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAutoSnapshotPolicy = new RosAutoSnapshotPolicy(this, id,  {
            timePoints: props.timePoints,
            diskIds: props.diskIds,
            targetCopyRegions: props.targetCopyRegions,
            resourceGroupId: props.resourceGroupId,
            enableCrossRegionCopy: props.enableCrossRegionCopy,
            copyEncryptionConfiguration: props.copyEncryptionConfiguration,
            retentionDays: props.retentionDays,
            repeatWeekdays: props.repeatWeekdays,
            autoSnapshotPolicyName: props.autoSnapshotPolicyName,
            tags: props.tags,
            copiedSnapshotsRetentionDays: props.copiedSnapshotsRetentionDays,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAutoSnapshotPolicy;
        this.attrArn = rosAutoSnapshotPolicy.attrArn;
        this.attrAutoSnapshotPolicyId = rosAutoSnapshotPolicy.attrAutoSnapshotPolicyId;
    }
}
