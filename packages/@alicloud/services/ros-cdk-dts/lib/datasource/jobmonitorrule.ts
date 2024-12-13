import * as ros from '@alicloud/ros-cdk-core';
import { RosJobMonitorRule } from './dts.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::JobMonitorRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosJobMonitorRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrule
 */
export class JobMonitorRule extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: JobMonitorRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DelayRuleTime: The threshold that triggers the alert.
     */
    public readonly attrDelayRuleTime: ros.IResolvable;

    /**
     * Attribute DtsJobId: The ID of the data migration, data synchronization, or change tracking task.
     */
    public readonly attrDtsJobId: ros.IResolvable;

    /**
     * Attribute Period: The statistical period for incremental validation tasks, in minutes.
     */
    public readonly attrPeriod: ros.IResolvable;

    /**
     * Attribute Phone: The mobile phone numbers that receive alert notifications. Multiple mobile numbers are separated by commas (,).
     */
    public readonly attrPhone: ros.IResolvable;

    /**
     * Attribute State: Indicates whether the monitoring rule is enabled.
     */
    public readonly attrState: ros.IResolvable;

    /**
     * Attribute Times: The number of cycles for the incremental validation task.
     */
    public readonly attrTimes: ros.IResolvable;

    /**
     * Attribute Type: The type of the monitoring rule.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: JobMonitorRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosJobMonitorRule = new RosJobMonitorRule(this, id,  {
            dtsJobId: props.dtsJobId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosJobMonitorRule;
        this.attrDelayRuleTime = rosJobMonitorRule.attrDelayRuleTime;
        this.attrDtsJobId = rosJobMonitorRule.attrDtsJobId;
        this.attrPeriod = rosJobMonitorRule.attrPeriod;
        this.attrPhone = rosJobMonitorRule.attrPhone;
        this.attrState = rosJobMonitorRule.attrState;
        this.attrTimes = rosJobMonitorRule.attrTimes;
        this.attrType = rosJobMonitorRule.attrType;
    }
}
