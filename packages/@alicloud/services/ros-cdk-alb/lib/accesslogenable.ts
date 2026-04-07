import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessLogEnable } from './alb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccessLogEnable as AccessLogEnableProperty };

/**
 * Properties for defining a `AccessLogEnable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-accesslogenable
 */
export interface AccessLogEnableProps {

    /**
     * Property loadBalancerId: The ID of the ALB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * Property logProject: The name of the LogHub project.
     */
    readonly logProject: string | ros.IResolvable;

    /**
     * Property logStore: The name of the LogHub logstore.
     */
    readonly logStore: string | ros.IResolvable;
}

/**
 * Represents a `AccessLogEnable`.
 */
export interface IAccessLogEnable extends ros.IResource {
    readonly props: AccessLogEnableProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::AccessLogEnable`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessLogEnable`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-accesslogenable
 */
export class AccessLogEnable extends ros.Resource implements IAccessLogEnable {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AccessLogEnableProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessLogEnableProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccessLogEnable = new RosAccessLogEnable(this, id,  {
            logStore: props.logStore,
            loadBalancerId: props.loadBalancerId,
            logProject: props.logProject,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessLogEnable;
    }
}
