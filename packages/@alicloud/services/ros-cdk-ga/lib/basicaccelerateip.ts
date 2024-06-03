import * as ros from '@alicloud/ros-cdk-core';
import { RosBasicAccelerateIp } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBasicAccelerateIp as BasicAccelerateIpProperty };

/**
 * Properties for defining a `BasicAccelerateIp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
 */
export interface BasicAccelerateIpProps {

    /**
     * Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * Property ipSetId: The ID of the acceleration region.
     */
    readonly ipSetId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::BasicAccelerateIp`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBasicAccelerateIp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
 */
export class BasicAccelerateIp extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BasicAccelerateIpProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccelerateIpId: The ID of the accelerated IP address.
     */
    public readonly attrAccelerateIpId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BasicAccelerateIpProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBasicAccelerateIp = new RosBasicAccelerateIp(this, id,  {
            ipSetId: props.ipSetId,
            acceleratorId: props.acceleratorId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBasicAccelerateIp;
        this.attrAccelerateIpId = rosBasicAccelerateIp.attrAccelerateIpId;
    }
}
