import * as ros from '@alicloud/ros-cdk-core';
import { RosAnyCluster } from './cs.generated';
export { RosAnyCluster as AnyClusterProperty };
/**
 * Properties for defining a `ALIYUN::CS::AnyCluster`
 */
export interface AnyClusterProps {
    /**
     * Property clusterConfig: Cluster config.
     */
    readonly clusterConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CS::AnyCluster`
 */
export declare class AnyCluster extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute APIServerSLBId: The id of API server SLB
     */
    readonly attrApiServerSlbId: ros.IResolvable;
    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrDefaultUserKubeConfig: ros.IResolvable;
    /**
     * Attribute Nodes: The list of cluster nodes.
     */
    readonly attrNodes: ros.IResolvable;
    /**
     * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrPrivateUserKubConfig: ros.IResolvable;
    /**
     * Attribute ScalingConfigurationId: Scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    /**
     * Attribute ScalingGroupId: Scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * Attribute ScalingRuleId: Scaling rule id
     */
    readonly attrScalingRuleId: ros.IResolvable;
    /**
     * Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CS::AnyCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AnyClusterProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=anycluster.d.ts.map