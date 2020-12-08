import * as ros from '@alicloud/ros-cdk-core';
import { RosSnapshot } from './ecs.generated';
export { RosSnapshot as SnapshotProperty };
/**
 * Properties for defining a `ALIYUN::ECS::Snapshot`
 */
export interface SnapshotProps {
    /**
     * @Property diskId: Indicates the ID of the specified disk.
     */
    readonly diskId: string;
    /**
     * @Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://. The description will appear on the console. By default, the value is zero.
     */
    readonly description?: string;
    /**
     * @Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
     */
    readonly snapshotName?: string;
    /**
     * @Property timeout: The number of minutes to wait for create snapshot.
     */
    readonly timeout?: number;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::Snapshot`
 */
export declare class Snapshot extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute SnapshotId: The snapshot ID.
     */
    readonly attrSnapshotId: any;
    /**
     * Create a new `ALIYUN::ECS::Snapshot`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SnapshotProps, enableResourcePropertyConstraint?: boolean);
}
