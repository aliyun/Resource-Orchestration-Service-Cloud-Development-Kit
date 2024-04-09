import * as ros from '@alicloud/ros-cdk-core';
import { RosSnapshot } from './ens.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSnapshot as SnapshotProperty };

/**
 * Properties for defining a `Snapshot`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-snapshot
 */
export interface SnapshotProps {

    /**
     * Property diskId: The ID of the cloud disk.
     */
    readonly diskId: string | ros.IResolvable;

    /**
     * Property ensRegionId: The ID of the edge node.
     */
    readonly ensRegionId: string | ros.IResolvable;

    /**
     * Property description: The description of the snapshot. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     * By default, this parameter is left empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property snapshotName: The name of the snapshot. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly snapshotName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::Snapshot`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSnapshot`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-snapshot
 */
export class Snapshot extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SnapshotProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SnapShotId: The ID of the snapshot.
     */
    public readonly attrSnapShotId: ros.IResolvable;

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
            description: props.description,
            ensRegionId: props.ensRegionId,
            snapshotName: props.snapshotName,
            diskId: props.diskId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSnapshot;
        this.attrSnapShotId = rosSnapshot.attrSnapShotId;
    }
}
