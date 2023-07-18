import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskReplicaPairs } from './ebs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDiskReplicaPairs as DiskReplicaPairsProperty };

/**
 * Properties for defining a `DATASOURCE::EBS::DiskReplicaPairs`
 */
export interface DiskReplicaPairsProps {

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::EBS::DiskReplicaPairs`
 */
export class DiskReplicaPairs extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DiskReplicaPairs: The list of disk replica pairs.
     */
    public readonly attrDiskReplicaPairs: ros.IResolvable;

    /**
     * Attribute ReplicaPairIds: The list of replica pair IDs.
     */
    public readonly attrReplicaPairIds: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::EBS::DiskReplicaPairs`.
     *
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
