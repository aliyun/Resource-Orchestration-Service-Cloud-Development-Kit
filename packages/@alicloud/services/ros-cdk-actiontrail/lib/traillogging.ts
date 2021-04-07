import * as ros from '@alicloud/ros-cdk-core';
import { RosTrailLogging } from './actiontrail.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrailLogging as TrailLoggingProperty };

/**
 * Properties for defining a `ALIYUN::ACTIONTRAIL::TrailLogging`
 */
export interface TrailLoggingProps {

    /**
     * Property enable: Whether to enable the trail logging.
     */
    readonly enable: boolean | ros.IResolvable;

    /**
     * Property name: The name of the trail to be enabled.
     */
    readonly name: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ACTIONTRAIL::TrailLogging`
 */
export class TrailLogging extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute IsLogging: Indicates whether the trail is logging API invocations.
     */
    public readonly attrIsLogging: ros.IResolvable;

    /**
     * Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.
     */
    public readonly attrLatestDeliveryError: ros.IResolvable;

    /**
     * Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.
     */
    public readonly attrLatestDeliveryTime: ros.IResolvable;

    /**
     * Attribute StartLoggingTime: The most recent date and time when the user enables the trail.
     */
    public readonly attrStartLoggingTime: ros.IResolvable;

    /**
     * Attribute StopLoggingTime: The most recent date and time when the user disables the trail.
     */
    public readonly attrStopLoggingTime: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ACTIONTRAIL::TrailLogging`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrailLoggingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTrailLogging = new RosTrailLogging(this, id,  {
            enable: props.enable,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrailLogging;
        this.attrIsLogging = rosTrailLogging.attrIsLogging;
        this.attrLatestDeliveryError = rosTrailLogging.attrLatestDeliveryError;
        this.attrLatestDeliveryTime = rosTrailLogging.attrLatestDeliveryTime;
        this.attrStartLoggingTime = rosTrailLogging.attrStartLoggingTime;
        this.attrStopLoggingTime = rosTrailLogging.attrStopLoggingTime;
    }
}
