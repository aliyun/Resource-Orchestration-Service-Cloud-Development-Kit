import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficControl } from './apigateway.generated';
export { RosTrafficControl as TrafficControlProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::TrafficControl`
 */
export interface TrafficControlProps {
    /**
     * Property apiDefault: Default API traffic value.
     */
    readonly apiDefault: number | ros.IResolvable;
    /**
     * Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly trafficControlName: string | ros.IResolvable;
    /**
     * Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
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
 * A ROS resource type:  `ALIYUN::ApiGateway::TrafficControl`
 */
export declare class TrafficControl extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute TrafficControlId: The id of the traffic control
     */
    readonly attrTrafficControlId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ApiGateway::TrafficControl`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficControlProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=trafficcontrol.d.ts.map