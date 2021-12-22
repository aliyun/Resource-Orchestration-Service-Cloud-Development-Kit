import * as ros from '@alicloud/ros-cdk-core';
import { RosAlarmTask } from './ess.generated';
export { RosAlarmTask as AlarmTaskProperty };
/**
 * Properties for defining a `ALIYUN::ESS::AlarmTask`
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
 * A ROS resource type:  `ALIYUN::ESS::AlarmTask`
 */
export declare class AlarmTask extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AlarmTaskId: The alarm task ID
     */
    readonly attrAlarmTaskId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ESS::AlarmTask`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlarmTaskProps, enableResourcePropertyConstraint?: boolean);
}
