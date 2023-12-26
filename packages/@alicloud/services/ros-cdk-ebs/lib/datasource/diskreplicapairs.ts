import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskReplicaPairs } from './ebs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDiskReplicaPairs as DiskReplicaPairsProperty };

/**
 * Properties for defining a `DiskReplicaPairs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs
 */
export interface DiskReplicaPairsProps {

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EBS::DiskReplicaPairs`, which is used to query the information about one or more replication pairs.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskReplicaPairs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs
 */
export class DiskReplicaPairs extends ros.Resource {

    /**
     * Attribute DiskReplicaPairs: The list of disk replica pairs.
     */
    public readonly attrDiskReplicaPairs: ros.IResolvable;

    /**
     * Attribute ReplicaPairIds: The list of replica pair IDs.
     */
    public readonly attrReplicaPairIds: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskReplicaPairsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDiskReplicaPairs = new RosDiskReplicaPairs(this, id,  {
            resourceGroupId: props.resourceGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDiskReplicaPairs;
        this.attrDiskReplicaPairs = rosDiskReplicaPairs.attrDiskReplicaPairs;
        this.attrReplicaPairIds = rosDiskReplicaPairs.attrReplicaPairIds;
    }
}
