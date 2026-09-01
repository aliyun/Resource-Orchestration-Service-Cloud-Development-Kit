import * as ros from '@alicloud/ros-cdk-core';
import { RosQueue } from './ehpc.generated';
export { RosQueue as QueueProperty };
/**
 * Properties for defining a `Queue`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-queue
 */
export interface QueueProps {
    /**
     * Property clusterId: The cluster ID.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * Property computeNodes: The hardware configurations of the compute nodes in the queue. Valid values of N: 1 to 10.
     */
    readonly computeNodes?: Array<RosQueue.ComputeNodesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property enableScaleIn: Specifies whether to enable auto scale-in for the queue. Valid values:
     * *   true
     * *   false.
     */
    readonly enableScaleIn?: boolean | ros.IResolvable;
    /**
     * Property enableScaleOut: Specifies whether to enable auto scale-out for the queue. Valid values:
     * *   true
     * *   false.
     */
    readonly enableScaleOut?: boolean | ros.IResolvable;
    /**
     * Property hostnamePrefix: The hostname prefix of the added compute nodes.
     */
    readonly hostnamePrefix?: string | ros.IResolvable;
    /**
     * Property hostnameSuffix: The hostname suffix of the compute nodes in the queue.
     */
    readonly hostnameSuffix?: string | ros.IResolvable;
    /**
     * Property initialCount: The initial number of compute nodes in the queue.
     */
    readonly initialCount?: number | ros.IResolvable;
    /**
     * Property interConnect: The type of the network for interconnecting compute nodes in the queue.
     */
    readonly interConnect?: string | ros.IResolvable;
    /**
     * Property maxCount: The maximum number of compute nodes that the queue can contain.
     */
    readonly maxCount?: number | ros.IResolvable;
    /**
     * Property minCount: The minimum number of compute nodes that the queue must contain.
     */
    readonly minCount?: number | ros.IResolvable;
    /**
     * Property queueName: The queue name.
     */
    readonly queueName?: string | ros.IResolvable;
    /**
     * Property vSwitchIds: The VSwitches available for use by compute nodes in the queue.
     */
    readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `Queue`.
 */
export interface IQueue extends ros.IResource {
    readonly props: QueueProps;
    /**
     * Attribute ComputeNodes: The hardware configurations of the compute nodes in the queue.
     */
    readonly attrComputeNodes: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Queue creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EnableScaleIn: Specifies whether to enable auto scale-in for the queue.
     */
    readonly attrEnableScaleIn: ros.IResolvable | string;
    /**
     * Attribute EnableScaleOut: Specifies whether to enable auto scale-out for the queue.
     */
    readonly attrEnableScaleOut: ros.IResolvable | string;
    /**
     * Attribute HostnamePrefix: The hostname prefix of the added compute nodes.
     */
    readonly attrHostnamePrefix: ros.IResolvable | string;
    /**
     * Attribute HostnameSuffix: The hostname suffix of the compute nodes in the queue.
     */
    readonly attrHostnameSuffix: ros.IResolvable | string;
    /**
     * Attribute InitialCount: The initial number of compute nodes in the queue.
     */
    readonly attrInitialCount: ros.IResolvable | string;
    /**
     * Attribute InterConnect: The type of the network for interconnecting compute nodes in the queue.
     */
    readonly attrInterConnect: ros.IResolvable | string;
    /**
     * Attribute MaxCount: The maximum number of compute nodes that the queue can contain.
     */
    readonly attrMaxCount: ros.IResolvable | string;
    /**
     * Attribute MinCount: The minimum number of compute nodes that the queue must contain.
     */
    readonly attrMinCount: ros.IResolvable | string;
    /**
     * Attribute QueueName: The queue name.
     */
    readonly attrQueueName: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: Queue update time.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Attribute VSwitchIds: The VSwitches available for use by compute nodes in the queue.
     */
    readonly attrVSwitchIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EHPC::Queue`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQueue`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-queue
 */
export declare class Queue extends ros.Resource implements IQueue {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: QueueProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ComputeNodes: The hardware configurations of the compute nodes in the queue.
     */
    readonly attrComputeNodes: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Queue creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EnableScaleIn: Specifies whether to enable auto scale-in for the queue.
     */
    readonly attrEnableScaleIn: ros.IResolvable | string;
    /**
     * Attribute EnableScaleOut: Specifies whether to enable auto scale-out for the queue.
     */
    readonly attrEnableScaleOut: ros.IResolvable | string;
    /**
     * Attribute HostnamePrefix: The hostname prefix of the added compute nodes.
     */
    readonly attrHostnamePrefix: ros.IResolvable | string;
    /**
     * Attribute HostnameSuffix: The hostname suffix of the compute nodes in the queue.
     */
    readonly attrHostnameSuffix: ros.IResolvable | string;
    /**
     * Attribute InitialCount: The initial number of compute nodes in the queue.
     */
    readonly attrInitialCount: ros.IResolvable | string;
    /**
     * Attribute InterConnect: The type of the network for interconnecting compute nodes in the queue.
     */
    readonly attrInterConnect: ros.IResolvable | string;
    /**
     * Attribute MaxCount: The maximum number of compute nodes that the queue can contain.
     */
    readonly attrMaxCount: ros.IResolvable | string;
    /**
     * Attribute MinCount: The minimum number of compute nodes that the queue must contain.
     */
    readonly attrMinCount: ros.IResolvable | string;
    /**
     * Attribute QueueName: The queue name.
     */
    readonly attrQueueName: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: Queue update time.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Attribute VSwitchIds: The VSwitches available for use by compute nodes in the queue.
     */
    readonly attrVSwitchIds: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: QueueProps, enableResourcePropertyConstraint?: boolean);
}
