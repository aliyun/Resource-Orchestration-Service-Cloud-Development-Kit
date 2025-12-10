import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterMember } from './edas.generated';
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
 * Represents a `ClusterMember`.
 */
export interface IClusterMember extends ros.IResource {
    readonly props: ClusterMemberProps;
    /**
     * Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable | string;
    /**
     * Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
     */
    readonly attrClusterMemberIds: ros.IResolvable | string;
    /**
     * Attribute EcuIds: ECU IDs corresponding to the ECS instance IDs.
     */
    readonly attrEcuIds: ros.IResolvable | string;
    /**
     * Attribute InstanceIds: ECS instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::ClusterMember`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterMember`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-clustermember
 */
export declare class ClusterMember extends ros.Resource implements IClusterMember {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ClusterMemberProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable | string;
    /**
     * Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
     */
    readonly attrClusterMemberIds: ros.IResolvable | string;
    /**
     * Attribute EcuIds: ECU IDs corresponding to the ECS instance IDs.
     */
    readonly attrEcuIds: ros.IResolvable | string;
    /**
     * Attribute InstanceIds: ECS instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterMemberProps, enableResourcePropertyConstraint?: boolean);
}
