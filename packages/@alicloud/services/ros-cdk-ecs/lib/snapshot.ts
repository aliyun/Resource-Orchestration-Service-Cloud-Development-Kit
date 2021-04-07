import * as ros from '@alicloud/ros-cdk-core';
import { RosSnapshot } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSnapshot as SnapshotProperty };

/**
 * Properties for defining a `ALIYUN::ECS::Snapshot`
 */
export interface SnapshotProps {

    /**
     * Property diskId: Indicates the ID of the specified disk.
     */
    readonly diskId: string | ros.IResolvable;

    /**
     * Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://. The description will appear on the console. By default, the value is zero.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property instantAccess: Specifies whether to enable the instant access feature. Valid values: 
     * true: enables the instant access feature. This feature can be enabled only for enhanced SSDs (ESSDs) 
     * false: disables the instant access feature. If InstantAccess is set to false, normal snapshots are created.
     * Default value: false.
     * Note This parameter and the Category parameter cannot be specified at the same time. 
     * For more information, see the "Description" section in this topic.
     */
    readonly instantAccess?: boolean | ros.IResolvable;

    /**
     * Property instantAccessRetentionDays: Specifies the retention period of the instant access feature. After the retention period ends, 
     * the snapshot is automatically released. This parameter takes effect only when InstantAccess 
     * is set to true. Unit: days.
     * Valid values: 1 to 65535. By default, the value of 
     * this parameter is the same as that of RetentionDays.
     */
    readonly instantAccessRetentionDays?: number | ros.IResolvable;

    /**
     * Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
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
 * A ROS resource type:  `ALIYUN::ECS::Snapshot`
 */
export class Snapshot extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute SnapshotId: The snapshot ID.
     */
    public readonly attrSnapshotId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ECS::Snapshot`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SnapshotProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSnapshot = new RosSnapshot(this, id,  {
            instantAccess: props.instantAccess,
            description: props.description,
            timeout: props.timeout ? props.timeout : 200,
            snapshotName: props.snapshotName,
            instantAccessRetentionDays: props.instantAccessRetentionDays,
            tags: props.tags,
            diskId: props.diskId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSnapshot;
        this.attrSnapshotId = rosSnapshot.attrSnapshotId;
    }
}
