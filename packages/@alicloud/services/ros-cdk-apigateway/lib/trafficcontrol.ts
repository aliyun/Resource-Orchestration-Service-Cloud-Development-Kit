import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficControl } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrafficControl as TrafficControlProperty };

/**
 * Properties for defining a `TrafficControl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrol
 */
export interface TrafficControlProps {

    /**
     * Property apiDefault: Default API traffic value.
     */
    readonly apiDefault: number | ros.IResolvable;

    /**
     * Property trafficControlName: The name of the traffic control.It must be 4 to 128 characters in length, and can contain letters, digits, underscores (_), dashes (-), spaces and dots (.), It must start with a letter.
     */
    readonly trafficControlName: string | ros.IResolvable;

    /**
     * Property trafficControlUnit: Traffic control unit, DAY\/HOUR\/MINUTE.
     */
    readonly trafficControlUnit: string | ros.IResolvable;

    /**
     * Property appDefault: Default APP traffic value.
     */
    readonly appDefault?: string | ros.IResolvable;

    /**
     * Property description: Description of the traffic control, less than 180 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property special: Special traffic controls.
     */
    readonly special?: Array<RosTrafficControl.SpecialProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property userDefault: Default user traffic value.
     */
    readonly userDefault?: string | ros.IResolvable;
}

/**
 * Represents a `TrafficControl`.
 */
export interface ITrafficControl extends ros.IResource {
    readonly props: TrafficControlProps;

    /**
     * Attribute TrafficControlId: The id of the traffic control
     */
    readonly attrTrafficControlId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::TrafficControl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficControl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrol
 */
export class TrafficControl extends ros.Resource implements ITrafficControl {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TrafficControlProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TrafficControlId: The id of the traffic control
     */
    public readonly attrTrafficControlId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficControlProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTrafficControl = new RosTrafficControl(this, id,  {
            description: props.description,
            trafficControlUnit: props.trafficControlUnit,
            trafficControlName: props.trafficControlName,
            appDefault: props.appDefault,
            special: props.special,
            userDefault: props.userDefault,
            apiDefault: props.apiDefault,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrafficControl;
        this.attrTrafficControlId = rosTrafficControl.attrTrafficControlId;
    }
}
