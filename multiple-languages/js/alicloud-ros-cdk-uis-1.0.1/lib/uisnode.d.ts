import * as ros from '@alicloud/ros-cdk-core';
import { RosUisNode } from './uis.generated';
export { RosUisNode as UisNodeProperty };
/**
 * Properties for defining a `ALIYUN::UIS::UisNode`
 */
export interface UisNodeProps {
    /**
     * Property ipAddrsNum: The number of IPs available at the boarding point. The default is 2, the maximum is 10, if you need more quota, please submit the work order.
     */
    readonly ipAddrsNum: number | ros.IResolvable;
    /**
     * Property uisId: The instance ID to which the boarding point belongs.
     */
    readonly uisId: string | ros.IResolvable;
    /**
     * Property uisNodeAreaId: Specifies the territory ID of the node. You can query the supported territories through the DescribeRegions interface.
     */
    readonly uisNodeAreaId: string | ros.IResolvable;
    /**
     * Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
     * If you do not specify a bandwidth, the default value is 20Mbps.
     */
    readonly uisNodeBandwidth: number | ros.IResolvable;
    /**
     * Property description: Description of the instance of the boarding point.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property name: The name of the instance of the boarding point.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::UIS::UisNode`
 */
export declare class UisNode extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute UisNodeActiveIps: The node active IP list.
     */
    readonly attrUisNodeActiveIps: ros.IResolvable;
    /**
     * Attribute UisNodeId: The node ID of the instance.
     */
    readonly attrUisNodeId: ros.IResolvable;
    /**
     * Attribute UisNodeIps: The node IP list.
     */
    readonly attrUisNodeIps: ros.IResolvable;
    /**
     * Create a new `ALIYUN::UIS::UisNode`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UisNodeProps, enableResourcePropertyConstraint?: boolean);
}
