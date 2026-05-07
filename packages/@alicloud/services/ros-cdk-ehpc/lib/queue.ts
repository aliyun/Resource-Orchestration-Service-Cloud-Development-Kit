import * as ros from '@alicloud/ros-cdk-core';
import { RosQueue } from './ehpc.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Queue extends ros.Resource implements IQueue {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: QueueProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ComputeNodes: The hardware configurations of the compute nodes in the queue.
     */
    public readonly attrComputeNodes: ros.IResolvable | string;

    /**
     * Attribute CreateTime: Queue creation time.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute EnableScaleIn: Specifies whether to enable auto scale-in for the queue.
     */
    public readonly attrEnableScaleIn: ros.IResolvable | string;

    /**
     * Attribute EnableScaleOut: Specifies whether to enable auto scale-out for the queue.
     */
    public readonly attrEnableScaleOut: ros.IResolvable | string;

    /**
     * Attribute HostnamePrefix: The hostname prefix of the added compute nodes.
     */
    public readonly attrHostnamePrefix: ros.IResolvable | string;

    /**
     * Attribute HostnameSuffix: The hostname suffix of the compute nodes in the queue.
     */
    public readonly attrHostnameSuffix: ros.IResolvable | string;

    /**
     * Attribute InitialCount: The initial number of compute nodes in the queue.
     */
    public readonly attrInitialCount: ros.IResolvable | string;

    /**
     * Attribute InterConnect: The type of the network for interconnecting compute nodes in the queue.
     */
    public readonly attrInterConnect: ros.IResolvable | string;

    /**
     * Attribute MaxCount: The maximum number of compute nodes that the queue can contain.
     */
    public readonly attrMaxCount: ros.IResolvable | string;

    /**
     * Attribute MinCount: The minimum number of compute nodes that the queue must contain.
     */
    public readonly attrMinCount: ros.IResolvable | string;

    /**
     * Attribute QueueName: The queue name.
     */
    public readonly attrQueueName: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: Queue update time.
     */
    public readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute VSwitchIds: The VSwitches available for use by compute nodes in the queue.
     */
    public readonly attrVSwitchIds: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QueueProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosQueue = new RosQueue(this, id,  {
            enableScaleIn: props.enableScaleIn,
            clusterId: props.clusterId,
            vSwitchIds: props.vSwitchIds,
            hostnameSuffix: props.hostnameSuffix,
            computeNodes: props.computeNodes,
            interConnect: props.interConnect,
            enableScaleOut: props.enableScaleOut,
            maxCount: props.maxCount,
            queueName: props.queueName,
            initialCount: props.initialCount,
            hostnamePrefix: props.hostnamePrefix,
            minCount: props.minCount,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosQueue;
        this.attrComputeNodes = rosQueue.attrComputeNodes;
        this.attrCreateTime = rosQueue.attrCreateTime;
        this.attrEnableScaleIn = rosQueue.attrEnableScaleIn;
        this.attrEnableScaleOut = rosQueue.attrEnableScaleOut;
        this.attrHostnamePrefix = rosQueue.attrHostnamePrefix;
        this.attrHostnameSuffix = rosQueue.attrHostnameSuffix;
        this.attrInitialCount = rosQueue.attrInitialCount;
        this.attrInterConnect = rosQueue.attrInterConnect;
        this.attrMaxCount = rosQueue.attrMaxCount;
        this.attrMinCount = rosQueue.attrMinCount;
        this.attrQueueName = rosQueue.attrQueueName;
        this.attrUpdateTime = rosQueue.attrUpdateTime;
        this.attrVSwitchIds = rosQueue.attrVSwitchIds;
    }
}
