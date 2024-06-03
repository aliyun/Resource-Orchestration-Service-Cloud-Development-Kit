import * as ros from '@alicloud/ros-cdk-core';
import { RosApplicationMonitor } from './ga.generated';
export { RosApplicationMonitor as ApplicationMonitorProperty };
/**
 * Properties for defining a `ApplicationMonitor`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
 */
export interface ApplicationMonitorProps {
    /**
     * Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * Property address: The URL or IP address that you want to probe.
     */
    readonly address: string | ros.IResolvable;
    /**
     * Property listenerId: The ID of the listener on which you want to perform the origin probing task.
     */
    readonly listenerId: string | ros.IResolvable;
    /**
     * Property taskName: The name of the origin probing task. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly taskName: string | ros.IResolvable;
    /**
     * Property detectEnable: Specifies whether to enable the automatic diagnostics feature.
     */
    readonly detectEnable?: boolean | ros.IResolvable;
    /**
     * Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature. Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
     */
    readonly detectThreshold?: number | ros.IResolvable;
    /**
     * Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered. Valid values: 1 to 20. Default value: 1.
     */
    readonly detectTimes?: number | ros.IResolvable;
    /**
     * Property optionsJson: The extended options of the listener protocol that is used by the origin probing task. The options vary based on the listener protocol.
     */
    readonly optionsJson?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property silenceTime: The silence period of the automatic diagnostics feature. This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
     */
    readonly silenceTime?: number | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::ApplicationMonitor`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplicationMonitor`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
 */
export declare class ApplicationMonitor extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ApplicationMonitorProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute TaskId: The ID of the origin probing task.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationMonitorProps, enableResourcePropertyConstraint?: boolean);
}
