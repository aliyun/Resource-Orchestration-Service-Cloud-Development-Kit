import * as ros from '@alicloud/ros-cdk-core';
import { RosAlarmTask } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAlarmTask as AlarmTaskProperty };

/**
 * Properties for defining a `AlarmTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
 */
export interface AlarmTaskProps {

    /**
     * Property alarmAction: Alarm Actions
     */
    readonly alarmAction: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property metricName: Metric Name
     */
    readonly metricName: string | ros.IResolvable;

    /**
     * Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * Property threshold: Threshold
     */
    readonly threshold: number | ros.IResolvable;

    /**
     * Property comparisonOperator: Comparison Operator
     */
    readonly comparisonOperator?: string | ros.IResolvable;

    /**
     * Property description: Description
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property dimensions: Dimensions
     */
    readonly dimensions?: Array<RosAlarmTask.DimensionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property evaluationCount: Evaluation Count
     */
    readonly evaluationCount?: number | ros.IResolvable;

    /**
     * Property groupId: Group Id
     */
    readonly groupId?: number | ros.IResolvable;

    /**
     * Property metricType: Metric Type
     */
    readonly metricType?: string | ros.IResolvable;

    /**
     * Property name: Name
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property period: Period
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property statistics: Statistics
     */
    readonly statistics?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESS::AlarmTask`, which is used to create a metric-based alarm task.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlarmTask`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
 */
export class AlarmTask extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AlarmTaskProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AlarmTaskId: The alarm task ID
     */
    public readonly attrAlarmTaskId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlarmTaskProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAlarmTask = new RosAlarmTask(this, id,  {
            comparisonOperator: props.comparisonOperator,
            description: props.description,
            scalingGroupId: props.scalingGroupId,
            metricType: props.metricType,
            evaluationCount: props.evaluationCount,
            period: props.period,
            dimensions: props.dimensions,
            statistics: props.statistics,
            name: props.name,
            groupId: props.groupId,
            metricName: props.metricName,
            alarmAction: props.alarmAction,
            threshold: props.threshold,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlarmTask;
        this.attrAlarmTaskId = rosAlarmTask.attrAlarmTaskId;
    }
}
