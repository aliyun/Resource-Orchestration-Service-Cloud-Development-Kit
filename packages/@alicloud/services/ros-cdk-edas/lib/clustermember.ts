import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterMember } from './edas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosClusterMember as ClusterMemberProperty };

/**
 * Properties for defining a `ClusterMember`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-clustermember
 */
export interface ClusterMemberProps {

    /**
     * Property clusterId: Cluster ID to import ECS instance
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * Property instanceIds: ECS instance ID list to import.
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property password: Password ECS hosts need to import (ECS settings can continue to use purchased)
     */
    readonly password: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::ClusterMember`, which is used to add Elastic Compute Service (ECS) instances to a cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterMember`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-clustermember
 */
export class ClusterMember extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ClusterMemberProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterId: Cluster ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
     */
    public readonly attrClusterMemberIds: ros.IResolvable;

    /**
     * Attribute EcuIds: ECU IDs corresponding to the ECS instance IDs.
     */
    public readonly attrEcuIds: ros.IResolvable;

    /**
     * Attribute InstanceIds: ECS instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterMemberProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosClusterMember = new RosClusterMember(this, id,  {
            clusterId: props.clusterId,
            instanceIds: props.instanceIds,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterMember;
        this.attrClusterId = rosClusterMember.attrClusterId;
        this.attrClusterMemberIds = rosClusterMember.attrClusterMemberIds;
        this.attrEcuIds = rosClusterMember.attrEcuIds;
        this.attrInstanceIds = rosClusterMember.attrInstanceIds;
    }
}
