import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterMember } from './edas.generated';
export { RosClusterMember as ClusterMemberProperty };
/**
 * Properties for defining a `ALIYUN::EDAS::ClusterMember`
 */
export interface ClusterMemberProps {
    /**
     * @Property clusterId: Cluster ID to import ECS instance
     */
    readonly clusterId: string;
    /**
     * @Property instanceIds: ECS instance ID list to import.
     */
    readonly instanceIds: string[];
    /**
     * @Property password: Password ECS hosts need to import (ECS settings can continue to use purchased)
     */
    readonly password: string;
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
     * @Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: any;
    /**
     * @Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
     */
    readonly attrClusterMemberIds: any;
    /**
     * @Attribute InstanceIds: ECS instance IDs.
     */
    readonly attrInstanceIds: any;
    /**
     * Create a new `ALIYUN::EDAS::ClusterMember`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterMemberProps, enableResourcePropertyConstraint?: boolean);
}
