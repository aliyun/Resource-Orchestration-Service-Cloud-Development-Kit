import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterMember } from './edas.generated';
export { RosClusterMember as ClusterMemberProperty };
/**
 * Properties for defining a `ALIYUN::EDAS::ClusterMember`
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
 * A ROS resource type:  `ALIYUN::EDAS::ClusterMember`
 */
export declare class ClusterMember extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
     */
    readonly attrClusterMemberIds: ros.IResolvable;
    /**
     * Attribute InstanceIds: ECS instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Create a new `ALIYUN::EDAS::ClusterMember`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterMemberProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=clustermember.d.ts.map