import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterMember } from './edas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosClusterMember as ClusterMemberProperty };

/**
 * Properties for defining a `ALIYUN::EDAS::ClusterMember`
 */
export interface ClusterMemberProps {

    /**
     * Property clusterId: Cluster ID to import ECS instance
     */
    readonly clusterId: string;

    /**
     * Property instanceIds: ECS instance ID list to import.
     */
    readonly instanceIds: string[];

    /**
     * Property password: Password ECS hosts need to import (ECS settings can continue to use purchased)
     */
    readonly password: string;
}

/**
 * A ROS resource type:  `ALIYUN::EDAS::ClusterMember`
 */
export class ClusterMember extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterId: Cluster ID.
     */
    public readonly attrClusterId: any;

    /**
     * Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
     */
    public readonly attrClusterMemberIds: any;

    /**
     * Attribute InstanceIds: ECS instance IDs.
     */
    public readonly attrInstanceIds: any;

    /**
     * Create a new `ALIYUN::EDAS::ClusterMember`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterMemberProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosClusterMember = new RosClusterMember(this, id,  {
            clusterId: props.clusterId,
            instanceIds: props.instanceIds,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterMember;
        this.attrClusterId = rosClusterMember.attrClusterId;
        this.attrClusterMemberIds = rosClusterMember.attrClusterMemberIds;
        this.attrInstanceIds = rosClusterMember.attrInstanceIds;
    }
}
