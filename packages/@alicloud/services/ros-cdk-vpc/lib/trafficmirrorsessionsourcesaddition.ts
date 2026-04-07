import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficMirrorSessionSourcesAddition } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrafficMirrorSessionSourcesAddition as TrafficMirrorSessionSourcesAdditionProperty };

/**
 * Properties for defining a `TrafficMirrorSessionSourcesAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
 */
export interface TrafficMirrorSessionSourcesAdditionProps {

    /**
     * Property trafficMirrorSessionId: The ID of the traffic mirror session.
     */
    readonly trafficMirrorSessionId: string | ros.IResolvable;

    /**
     * Property trafficMirrorSourceIds: undefined
     */
    readonly trafficMirrorSourceIds: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `TrafficMirrorSessionSourcesAddition`.
 */
export interface ITrafficMirrorSessionSourcesAddition extends ros.IResource {
    readonly props: TrafficMirrorSessionSourcesAdditionProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::TrafficMirrorSessionSourcesAddition`, which is used to add traffic mirror sources to traffic mirror sessions.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficMirrorSessionSourcesAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
 */
export class TrafficMirrorSessionSourcesAddition extends ros.Resource implements ITrafficMirrorSessionSourcesAddition {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TrafficMirrorSessionSourcesAdditionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficMirrorSessionSourcesAdditionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTrafficMirrorSessionSourcesAddition = new RosTrafficMirrorSessionSourcesAddition(this, id,  {
            trafficMirrorSourceIds: props.trafficMirrorSourceIds,
            trafficMirrorSessionId: props.trafficMirrorSessionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrafficMirrorSessionSourcesAddition;
    }
}
