import * as ros from '@alicloud/ros-cdk-core';
import { RosAutoScaleConfig } from './ehpc.generated';
export { RosAutoScaleConfig as AutoScaleConfigProperty };
/**
 * Properties for defining a `ALIYUN::EHPC::AutoScaleConfig`
 */
export interface AutoScaleConfigProps {
    /**
     * Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property enableAutoGrow: Specifies whether to enable auto scale-out. Valid values:
     * true: enables auto scale-out.
     * false: disables auto scale-out
     * Default value: false
     */
    readonly enableAutoGrow?: boolean | ros.IResolvable;
    /**
     * Property enableAutoShrink: Specifies whether to enable auto scale-in. Valid values:
     * true: enables auto scale-in.
     * false: disables auto scale-in
     * Default value: false
     */
    readonly enableAutoShrink?: boolean | ros.IResolvable;
    /**
     * Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
     */
    readonly excludeNodes?: string | ros.IResolvable;
    /**
     * Property extraNodesGrowRatio: The percentage of extra compute nodes.
     * Default value: 0
     */
    readonly extraNodesGrowRatio?: number | ros.IResolvable;
    /**
     * Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out. Unit: minutes.
     * Default value: 2
     */
    readonly growIntervalInMinutes?: number | ros.IResolvable;
    /**
     * Property growRatio: The percentage of each round of scale-out.
     * Default value: 100
     */
    readonly growRatio?: number | ros.IResolvable;
    /**
     * Property growTimeoutInMinutes: The scale-out timeout period. Unit: minutes.
     * Default value: 20
     */
    readonly growTimeoutInMinutes?: number | ros.IResolvable;
    /**
     * Property imageId: The ID of the image.
     * If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
     * If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
     * If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
     * Default value: 100
     */
    readonly maxNodesInCluster?: number | ros.IResolvable;
    /**
     * Property queues:
     */
    readonly queues?: Array<RosAutoScaleConfig.QueuesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
     * Default value: 3
     */
    readonly shrinkIdleTimes?: number | ros.IResolvable;
    /**
     * Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. Unit: minutes.
     * Default value: 2
     */
    readonly shrinkIntervalInMinutes?: number | ros.IResolvable;
    /**
     * Property spotPriceLimit: The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
     */
    readonly spotPriceLimit?: number | ros.IResolvable;
    /**
     * Property spotStrategy: The preemption policy of the compute nodes. Valid values:
     * NoSpot: The compute nodes are pay-as-you-go instances.
     * SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
     * SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot
     */
    readonly spotStrategy?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::EHPC::AutoScaleConfig`
 */
export declare class AutoScaleConfig extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ClusterId: Cluster Id.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::EHPC::AutoScaleConfig`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AutoScaleConfigProps, enableResourcePropertyConstraint?: boolean);
}
