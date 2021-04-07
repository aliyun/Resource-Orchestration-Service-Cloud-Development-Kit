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
     * Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
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
