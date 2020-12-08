import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficControl } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrafficControl as TrafficControlProperty };

/**
 * Properties for defining a `ALIYUN::ApiGateway::TrafficControl`
 */
export interface TrafficControlProps {

    /**
     * @Property apiDefault: Default API traffic value.
     */
    readonly apiDefault: number;

    /**
     * @Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly trafficControlName: string;

    /**
     * @Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
     */
    readonly trafficControlUnit: string;

    /**
     * @Property appDefault: Default APP traffic value.
     */
    readonly appDefault?: string;

    /**
     * @Property description: Description of the traffic control, less than 180 characters.
     */
    readonly description?: string;

    /**
     * @Property special: Special traffic controls.
     */
    readonly special?: Array<RosTrafficControl.SpecialProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property userDefault: Default user traffic value.
     */
    readonly userDefault?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ApiGateway::TrafficControl`
 */
export class TrafficControl extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute TrafficControlId: The id of the traffic control
     */
    public readonly attrTrafficControlId: any;

    /**
     * Create a new `ALIYUN::ApiGateway::TrafficControl`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficControlProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
