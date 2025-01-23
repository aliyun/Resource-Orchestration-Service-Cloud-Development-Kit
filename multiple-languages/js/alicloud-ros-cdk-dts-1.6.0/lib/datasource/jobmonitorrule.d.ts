import * as ros from '@alicloud/ros-cdk-core';
import { RosJobMonitorRule } from './dts.generated';
export { RosJobMonitorRule as JobMonitorRuleProperty };
/**
 * Properties for defining a `JobMonitorRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrule
 */
export interface JobMonitorRuleProps {
    /**
     * Property dtsJobId: The ID of the data migration, data synchronization, or change tracking task.
     */
    readonly dtsJobId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `JobMonitorRule`.
 */
export interface IJobMonitorRule extends ros.IResource {
    readonly props: JobMonitorRuleProps;
    /**
     * Attribute DelayRuleTime: The threshold that triggers the alert.
     */
    readonly attrDelayRuleTime: ros.IResolvable | string;
    /**
     * Attribute DtsJobId: The ID of the data migration, data synchronization, or change tracking task.
     */
    readonly attrDtsJobId: ros.IResolvable | string;
    /**
     * Attribute Period: The statistical period for incremental validation tasks, in minutes.
     */
    readonly attrPeriod: ros.IResolvable | string;
    /**
     * Attribute Phone: The mobile phone numbers that receive alert notifications. Multiple mobile numbers are separated by commas (,).
     */
    readonly attrPhone: ros.IResolvable | string;
    /**
     * Attribute State: Indicates whether the monitoring rule is enabled.
     */
    readonly attrState: ros.IResolvable | string;
    /**
     * Attribute Times: The number of cycles for the incremental validation task.
     */
    readonly attrTimes: ros.IResolvable | string;
    /**
     * Attribute Type: The type of the monitoring rule.
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::JobMonitorRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosJobMonitorRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrule
 */
export declare class JobMonitorRule extends ros.Resource implements IJobMonitorRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: JobMonitorRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DelayRuleTime: The threshold that triggers the alert.
     */
    readonly attrDelayRuleTime: ros.IResolvable | string;
    /**
     * Attribute DtsJobId: The ID of the data migration, data synchronization, or change tracking task.
     */
    readonly attrDtsJobId: ros.IResolvable | string;
    /**
     * Attribute Period: The statistical period for incremental validation tasks, in minutes.
     */
    readonly attrPeriod: ros.IResolvable | string;
    /**
     * Attribute Phone: The mobile phone numbers that receive alert notifications. Multiple mobile numbers are separated by commas (,).
     */
    readonly attrPhone: ros.IResolvable | string;
    /**
     * Attribute State: Indicates whether the monitoring rule is enabled.
     */
    readonly attrState: ros.IResolvable | string;
    /**
     * Attribute Times: The number of cycles for the incremental validation task.
     */
    readonly attrTimes: ros.IResolvable | string;
    /**
     * Attribute Type: The type of the monitoring rule.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: JobMonitorRuleProps, enableResourcePropertyConstraint?: boolean);
}
