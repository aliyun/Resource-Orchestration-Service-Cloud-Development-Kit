import * as ros from '@alicloud/ros-cdk-core';
import { RosTrailLogging } from './actiontrail.generated';
export { RosTrailLogging as TrailLoggingProperty };
/**
 * Properties for defining a `TrailLogging`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ACTIONTRAIL::TrailLogging`, which is used to enable or disable trail logging.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrailLogging`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging
 */
export declare class TrailLogging extends ros.Resource {
    /**
     * Attribute IsLogging: Indicates whether the trail is logging API invocations.
     */
    readonly attrIsLogging: ros.IResolvable;
    /**
     * Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.
     */
    readonly attrLatestDeliveryError: ros.IResolvable;
    /**
     * Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.
     */
    readonly attrLatestDeliveryTime: ros.IResolvable;
    /**
     * Attribute StartLoggingTime: The most recent date and time when the user enables the trail.
     */
    readonly attrStartLoggingTime: ros.IResolvable;
    /**
     * Attribute StopLoggingTime: The most recent date and time when the user disables the trail.
     */
    readonly attrStopLoggingTime: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrailLoggingProps, enableResourcePropertyConstraint?: boolean);
}
