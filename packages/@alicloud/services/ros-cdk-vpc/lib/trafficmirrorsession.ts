import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficMirrorSession } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrafficMirrorSession as TrafficMirrorSessionProperty };

/**
 * Properties for defining a `TrafficMirrorSession`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsession
 */
export interface TrafficMirrorSessionProps {

    /**
     * Property priority: The priority of the traffic mirror session. Valid values: **1 to 32766**.
     * A smaller value indicates a higher priority. You cannot specify identical priorities for traffic mirror sessions that are created in the same region by using the same account.
     */
    readonly priority: number | ros.IResolvable;

    /**
     * Property trafficMirrorFilterId: The ID of the filter.
     */
    readonly trafficMirrorFilterId: string | ros.IResolvable;

    /**
     * Property trafficMirrorSourceIds: undefined
     */
    readonly trafficMirrorSourceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property trafficMirrorTargetId: The ID of the traffic mirror destination. You can specify only an elastic network interface (ENI) or a Server Load Balancer (SLB) instance as a traffic mirror destination.
     */
    readonly trafficMirrorTargetId: string | ros.IResolvable;

    /**
     * Property trafficMirrorTargetType: The type of the traffic mirror destination. Valid values:
     * - **NetworkInterface**: an ENI
     * - **SLB**: an SLB instance
     */
    readonly trafficMirrorTargetType: string | ros.IResolvable;

    /**
     * Property enabled: Specifies whether to enable the traffic mirror session. Valid values:
     * - **false** (default): does not enable the traffic mirror session.
     * - **true**: enables the traffic mirror session.
     */
    readonly enabled?: boolean | ros.IResolvable;

    /**
     * Property packetLength: The maximum transmission unit (MTU). Default value: **1500**.
     */
    readonly packetLength?: number | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the mirrored traffic belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tag:
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;

    /**
     * Property trafficMirrorSessionDescription: The description of the traffic mirror session.
     * The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly trafficMirrorSessionDescription?: string | ros.IResolvable;

    /**
     * Property trafficMirrorSessionName: The name of the traffic mirror session.
     * The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly trafficMirrorSessionName?: string | ros.IResolvable;

    /**
     * Property virtualNetworkId: The VXLAN network identifier (VNI). Valid values: **0 to 16777215**. 
     * You can use VNIs to identify mirrored traffic from different sessions at the traffic mirror destination. You can specify a custom VNI or use a random VNI allocated by the system. If you want the system to randomly allocate a VNI, do not enter a value.
     */
    readonly virtualNetworkId?: number | ros.IResolvable;
}

/**
 * Represents a `TrafficMirrorSession`.
 */
export interface ITrafficMirrorSession extends ros.IResource {
    readonly props: TrafficMirrorSessionProps;

    /**
     * Attribute TrafficMirrorSessionId: The ID of the traffic mirror session.
     */
    readonly attrTrafficMirrorSessionId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::TrafficMirrorSession`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficMirrorSession`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsession
 */
export class TrafficMirrorSession extends ros.Resource implements ITrafficMirrorSession {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TrafficMirrorSessionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TrafficMirrorSessionId: The ID of the traffic mirror session.
     */
    public readonly attrTrafficMirrorSessionId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficMirrorSessionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTrafficMirrorSession = new RosTrafficMirrorSession(this, id,  {
            trafficMirrorTargetId: props.trafficMirrorTargetId,
            resourceGroupId: props.resourceGroupId,
            virtualNetworkId: props.virtualNetworkId,
            trafficMirrorSourceIds: props.trafficMirrorSourceIds,
            priority: props.priority,
            packetLength: props.packetLength,
            enabled: props.enabled,
            trafficMirrorSessionDescription: props.trafficMirrorSessionDescription,
            tag: props.tag,
            trafficMirrorSessionName: props.trafficMirrorSessionName,
            trafficMirrorFilterId: props.trafficMirrorFilterId,
            trafficMirrorTargetType: props.trafficMirrorTargetType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrafficMirrorSession;
        this.attrTrafficMirrorSessionId = rosTrafficMirrorSession.attrTrafficMirrorSessionId;
    }
}
