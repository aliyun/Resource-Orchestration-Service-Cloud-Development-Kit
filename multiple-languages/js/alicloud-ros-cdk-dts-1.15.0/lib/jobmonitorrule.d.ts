import * as ros from '@alicloud/ros-cdk-core';
import { RosJobMonitorRule } from './dts.generated';
export { RosJobMonitorRule as JobMonitorRuleProperty };
/**
 * Properties for defining a `JobMonitorRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-jobmonitorrule
 */
export interface JobMonitorRuleProps {
    /**
     * Property dtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
     */
    readonly dtsJobId: string | ros.IResolvable;
    /**
     * Property type: Monitoring rules of type, the return value:
     * - **delay**: delay alarm.
     * - **error**: abnormal alarm.
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property delayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
     */
    readonly delayRuleTime?: number | ros.IResolvable;
    /**
     * Property period: The statistical period of the incremental verification task. Unit: minutes.
     * > currently supported values are 1 minute, 3 minutes, 5 minutes and 30 minutes.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property phones: The alarm is triggered after notification of the contact phone number.
     */
    readonly phones?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property state: Whether to enable monitoring rules, return value:
     * - **Y**: enable.
     * - **N**: Inactive.
     */
    readonly state?: string | ros.IResolvable;
    /**
     * Property times: The number of cycles of the incremental verification task.
     */
    readonly times?: number | ros.IResolvable;
}
/**
 * Represents a `JobMonitorRule`.
 */
export interface IJobMonitorRule extends ros.IResource {
    readonly props: JobMonitorRuleProps;
    /**
     * Attribute DelayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
     */
    readonly attrDelayRuleTime: ros.IResolvable | string;
    /**
     * Attribute DtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
     */
    readonly attrDtsJobId: ros.IResolvable | string;
    /**
     * Attribute Period: The statistical period of the incremental verification task. Unit: minutes.
     */
    readonly attrPeriod: ros.IResolvable | string;
    /**
     * Attribute Phones: The alarm is triggered after notification of the contact phone number, A plurality of phone numbers between them with a comma (,) to separate.
     */
    readonly attrPhones: ros.IResolvable | string;
    /**
     * Attribute State: Whether to enable monitoring rules, return value:.
     */
    readonly attrState: ros.IResolvable | string;
    /**
     * Attribute Times: The number of cycles of the incremental verification task.
     */
    readonly attrTimes: ros.IResolvable | string;
    /**
     * Attribute Type: Monitoring rules of type, the return value:.
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DTS::JobMonitorRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosJobMonitorRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-jobmonitorrule
 */
export declare class JobMonitorRule extends ros.Resource implements IJobMonitorRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: JobMonitorRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DelayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
     */
    readonly attrDelayRuleTime: ros.IResolvable | string;
    /**
     * Attribute DtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
     */
    readonly attrDtsJobId: ros.IResolvable | string;
    /**
     * Attribute Period: The statistical period of the incremental verification task. Unit: minutes.
     */
    readonly attrPeriod: ros.IResolvable | string;
    /**
     * Attribute Phones: The alarm is triggered after notification of the contact phone number, A plurality of phone numbers between them with a comma (,) to separate.
     */
    readonly attrPhones: ros.IResolvable | string;
    /**
     * Attribute State: Whether to enable monitoring rules, return value:.
     */
    readonly attrState: ros.IResolvable | string;
    /**
     * Attribute Times: The number of cycles of the incremental verification task.
     */
    readonly attrTimes: ros.IResolvable | string;
    /**
     * Attribute Type: Monitoring rules of type, the return value:.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: JobMonitorRuleProps, enableResourcePropertyConstraint?: boolean);
}
