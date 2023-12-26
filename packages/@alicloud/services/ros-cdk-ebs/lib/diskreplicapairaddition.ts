import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskReplicaPairAddition } from './ebs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDiskReplicaPairAddition as DiskReplicaPairAdditionProperty };

/**
 * Properties for defining a `DiskReplicaPairAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapairaddition
 */
export interface DiskReplicaPairAdditionProps {

    /**
     * Property replicaGroupId: The ID of the replication pair-consistent group.
     */
    readonly replicaGroupId: string | ros.IResolvable;

    /**
     * Property replicaPairId: The ID of the replication pair. You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
     */
    readonly replicaPairId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EBS::DiskReplicaPairAddition`, which is used to add a replication pair to a replication pair-consistent group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskReplicaPairAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapairaddition
 */
export class DiskReplicaPairAddition extends ros.Resource {

    /**
     * Attribute ReplicaGroupId: The ID of the replication pair-consistent group.
     */
    public readonly attrReplicaGroupId: ros.IResolvable;

    /**
     * Attribute ReplicaPairId: The ID of the replication pair.
     */
    public readonly attrReplicaPairId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskReplicaPairAdditionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDiskReplicaPairAddition = new RosDiskReplicaPairAddition(this, id,  {
            replicaPairId: props.replicaPairId,
            replicaGroupId: props.replicaGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDiskReplicaPairAddition;
        this.attrReplicaGroupId = rosDiskReplicaPairAddition.attrReplicaGroupId;
        this.attrReplicaPairId = rosDiskReplicaPairAddition.attrReplicaPairId;
    }
}
