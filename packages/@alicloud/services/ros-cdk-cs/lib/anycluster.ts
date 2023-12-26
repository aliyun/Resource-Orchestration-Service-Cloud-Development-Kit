import * as ros from '@alicloud/ros-cdk-core';
import { RosAnyCluster } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAnyCluster as AnyClusterProperty };

/**
 * Properties for defining a `AnyCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-anycluster
 */
export interface AnyClusterProps {

    /**
     * Property clusterConfig: Cluster config.
     */
    readonly clusterConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::AnyCluster`, which is used to create an ACK cluster of a specific type.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAnyCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-anycluster
 */
export class AnyCluster extends ros.Resource {

    /**
     * Attribute APIServerSLBId: The id of API server SLB
     */
    public readonly attrApiServerSlbId: ros.IResolvable;

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrDefaultUserKubeConfig: ros.IResolvable;

    /**
     * Attribute Nodes: The list of cluster nodes.
     */
    public readonly attrNodes: ros.IResolvable;

    /**
     * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrPrivateUserKubConfig: ros.IResolvable;

    /**
     * Attribute ScalingConfigurationId: Scaling configuration id
     */
    public readonly attrScalingConfigurationId: ros.IResolvable;

    /**
     * Attribute ScalingGroupId: Scaling group id
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * Attribute ScalingRuleId: Scaling rule id
     */
    public readonly attrScalingRuleId: ros.IResolvable;

    /**
     * Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AnyClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAnyCluster = new RosAnyCluster(this, id,  {
            clusterConfig: props.clusterConfig,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAnyCluster;
        this.attrApiServerSlbId = rosAnyCluster.attrApiServerSlbId;
        this.attrClusterId = rosAnyCluster.attrClusterId;
        this.attrDefaultUserKubeConfig = rosAnyCluster.attrDefaultUserKubeConfig;
        this.attrNodes = rosAnyCluster.attrNodes;
        this.attrPrivateUserKubConfig = rosAnyCluster.attrPrivateUserKubConfig;
        this.attrScalingConfigurationId = rosAnyCluster.attrScalingConfigurationId;
        this.attrScalingGroupId = rosAnyCluster.attrScalingGroupId;
        this.attrScalingRuleId = rosAnyCluster.attrScalingRuleId;
        this.attrTaskId = rosAnyCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosAnyCluster.attrWorkerRamRoleName;
    }
}
