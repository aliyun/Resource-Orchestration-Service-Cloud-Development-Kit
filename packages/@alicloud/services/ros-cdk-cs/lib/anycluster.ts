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
 * Represents a `AnyCluster`.
 */
export interface IAnyCluster extends ros.IResource {
    readonly props: AnyClusterProps;

    /**
     * Attribute APIServerSLBId: The id of API server SLB
     */
    readonly attrApiServerSlbId: ros.IResolvable | string;

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrDefaultUserKubeConfig: ros.IResolvable | string;

    /**
     * Attribute IngressSLBId: The id of ingress SLB
     */
    readonly attrIngressSlbId: ros.IResolvable | string;

    /**
     * Attribute Nodes: The list of cluster nodes.
     */
    readonly attrNodes: ros.IResolvable | string;

    /**
     * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrPrivateUserKubConfig: ros.IResolvable | string;

    /**
     * Attribute ScalingConfigurationId: Scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable | string;

    /**
     * Attribute ScalingGroupId: Scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable | string;

    /**
     * Attribute ScalingRuleId: Scaling rule id
     */
    readonly attrScalingRuleId: ros.IResolvable | string;

    /**
     * Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    readonly attrTaskId: ros.IResolvable | string;

    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::AnyCluster`, which is used to create a Container Service for Kubernetes (ACK) cluster of a specific type.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAnyCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-anycluster
 */
export class AnyCluster extends ros.Resource implements IAnyCluster {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AnyClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute APIServerSLBId: The id of API server SLB
     */
    public readonly attrApiServerSlbId: ros.IResolvable | string;

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrDefaultUserKubeConfig: ros.IResolvable | string;

    /**
     * Attribute IngressSLBId: The id of ingress SLB
     */
    public readonly attrIngressSlbId: ros.IResolvable | string;

    /**
     * Attribute Nodes: The list of cluster nodes.
     */
    public readonly attrNodes: ros.IResolvable | string;

    /**
     * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrPrivateUserKubConfig: ros.IResolvable | string;

    /**
     * Attribute ScalingConfigurationId: Scaling configuration id
     */
    public readonly attrScalingConfigurationId: ros.IResolvable | string;

    /**
     * Attribute ScalingGroupId: Scaling group id
     */
    public readonly attrScalingGroupId: ros.IResolvable | string;

    /**
     * Attribute ScalingRuleId: Scaling rule id
     */
    public readonly attrScalingRuleId: ros.IResolvable | string;

    /**
     * Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable | string;

    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AnyClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAnyCluster = new RosAnyCluster(this, id,  {
            clusterConfig: props.clusterConfig,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAnyCluster;
        this.attrApiServerSlbId = rosAnyCluster.attrApiServerSlbId;
        this.attrClusterId = rosAnyCluster.attrClusterId;
        this.attrDefaultUserKubeConfig = rosAnyCluster.attrDefaultUserKubeConfig;
        this.attrIngressSlbId = rosAnyCluster.attrIngressSlbId;
        this.attrNodes = rosAnyCluster.attrNodes;
        this.attrPrivateUserKubConfig = rosAnyCluster.attrPrivateUserKubConfig;
        this.attrScalingConfigurationId = rosAnyCluster.attrScalingConfigurationId;
        this.attrScalingGroupId = rosAnyCluster.attrScalingGroupId;
        this.attrScalingRuleId = rosAnyCluster.attrScalingRuleId;
        this.attrTaskId = rosAnyCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosAnyCluster.attrWorkerRamRoleName;
    }
}
