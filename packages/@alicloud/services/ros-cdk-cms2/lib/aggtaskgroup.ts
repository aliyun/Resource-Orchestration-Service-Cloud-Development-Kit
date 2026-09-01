import * as ros from '@alicloud/ros-cdk-core';
import { RosAggTaskGroup } from './cms2.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAggTaskGroup as AggTaskGroupProperty };

/**
 * Properties for defining a `AggTaskGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-aggtaskgroup
 */
export interface AggTaskGroupProps {

    /**
     * Property aggTaskGroupConfig: The config of the agg task group. Only "RecordingRuleYaml" format is supported, which must conform to the RecordingRule format of the open source Prometheus.
     */
    readonly aggTaskGroupConfig: string | ros.IResolvable;

    /**
     * Property aggTaskGroupName: The name of the agg task group.
     */
    readonly aggTaskGroupName: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of the source Prometheus instance the agg task group reads data from.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property targetPrometheusId: The ID of the target Prometheus instance of the agg task group.
     */
    readonly targetPrometheusId: string | ros.IResolvable;

    /**
     * Property aggTaskGroupConfigType: The config type of the agg task group. Default: "RecordingRuleYaml".
     */
    readonly aggTaskGroupConfigType?: string | ros.IResolvable;

    /**
     * Property cronExpr: The cron expression used when ScheduleMode is "Cron". For example, "0\/1 * * * *" means scheduling every 1 minute starting from minute 0.
     */
    readonly cronExpr?: string | ros.IResolvable;

    /**
     * Property delay: The fixed delay of the schedule, in seconds. Default: 30.
     */
    readonly delay?: number | ros.IResolvable;

    /**
     * Property description: The description of the agg task group.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property fromTime: The second-level timestamp corresponding to the schedule start time.
     */
    readonly fromTime?: number | ros.IResolvable;

    /**
     * Property maxRetries: The maximum number of retries for executing the agg task. Default: 20.
     */
    readonly maxRetries?: number | ros.IResolvable;

    /**
     * Property maxRunTimeInSeconds: The maximum retry time for executing the agg task, in seconds. Default: 600.
     */
    readonly maxRunTimeInSeconds?: number | ros.IResolvable;

    /**
     * Property overrideIfExists: Whether to override and update an existing agg task group with the same name when creating. Create-only, cannot be updated.
     */
    readonly overrideIfExists?: boolean | ros.IResolvable;

    /**
     * Property precheckString: The precheck config. Not configured by default.
     */
    readonly precheckString?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property scheduleMode: The schedule mode, "Cron" or "FixedRate". Default: "FixedRate".
     */
    readonly scheduleMode?: string | ros.IResolvable;

    /**
     * Property scheduleTimeExpr: The schedule time expression, "@s" or "@m" is recommended, indicating the rounding granularity of the schedule time window. Default: "@m".
     */
    readonly scheduleTimeExpr?: string | ros.IResolvable;

    /**
     * Property status: The status of the agg task group, "Running" or "Stopped". Default: Running.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * Property tags: The tags of the agg task group.
     */
    readonly tags?: RosAggTaskGroup.TagsProperty[];

    /**
     * Property toTime: The second-level timestamp corresponding to the schedule end time. 0 means the schedule never stops.
     */
    readonly toTime?: number | ros.IResolvable;
}

/**
 * Represents a `AggTaskGroup`.
 */
export interface IAggTaskGroup extends ros.IResource {
    readonly props: AggTaskGroupProps;

    /**
     * Attribute AggTaskGroupConfigHash: The config hash of the agg task group.
     */
    readonly attrAggTaskGroupConfigHash: ros.IResolvable | string;

    /**
     * Attribute AggTaskGroupId: The ID of the agg task group.
     */
    readonly attrAggTaskGroupId: ros.IResolvable | string;

    /**
     * Attribute AggTaskGroupName: The name of the agg task group.
     */
    readonly attrAggTaskGroupName: ros.IResolvable | string;

    /**
     * Attribute SourcePrometheusId: The ID of the source Prometheus instance of the agg task group.
     */
    readonly attrSourcePrometheusId: ros.IResolvable | string;

    /**
     * Attribute Status: The current status of the agg task group.
     */
    readonly attrStatus: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS2::AggTaskGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAggTaskGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-aggtaskgroup
 */
export class AggTaskGroup extends ros.Resource implements IAggTaskGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AggTaskGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AggTaskGroupConfigHash: The config hash of the agg task group.
     */
    public readonly attrAggTaskGroupConfigHash: ros.IResolvable | string;

    /**
     * Attribute AggTaskGroupId: The ID of the agg task group.
     */
    public readonly attrAggTaskGroupId: ros.IResolvable | string;

    /**
     * Attribute AggTaskGroupName: The name of the agg task group.
     */
    public readonly attrAggTaskGroupName: ros.IResolvable | string;

    /**
     * Attribute SourcePrometheusId: The ID of the source Prometheus instance of the agg task group.
     */
    public readonly attrSourcePrometheusId: ros.IResolvable | string;

    /**
     * Attribute Status: The current status of the agg task group.
     */
    public readonly attrStatus: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AggTaskGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAggTaskGroup = new RosAggTaskGroup(this, id,  {
            maxRetries: props.maxRetries === undefined || props.maxRetries === null ? 20 : props.maxRetries,
            status: props.status === undefined || props.status === null ? 'Running' : props.status,
            scheduleTimeExpr: props.scheduleTimeExpr === undefined || props.scheduleTimeExpr === null ? '@m' : props.scheduleTimeExpr,
            targetPrometheusId: props.targetPrometheusId,
            description: props.description,
            instanceId: props.instanceId,
            cronExpr: props.cronExpr,
            delay: props.delay === undefined || props.delay === null ? 30 : props.delay,
            aggTaskGroupName: props.aggTaskGroupName,
            overrideIfExists: props.overrideIfExists === undefined || props.overrideIfExists === null ? false : props.overrideIfExists,
            toTime: props.toTime,
            maxRunTimeInSeconds: props.maxRunTimeInSeconds === undefined || props.maxRunTimeInSeconds === null ? 600 : props.maxRunTimeInSeconds,
            aggTaskGroupConfigType: props.aggTaskGroupConfigType === undefined || props.aggTaskGroupConfigType === null ? 'RecordingRuleYaml' : props.aggTaskGroupConfigType,
            aggTaskGroupConfig: props.aggTaskGroupConfig,
            scheduleMode: props.scheduleMode === undefined || props.scheduleMode === null ? 'FixedRate' : props.scheduleMode,
            precheckString: props.precheckString,
            fromTime: props.fromTime,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAggTaskGroup;
        this.attrAggTaskGroupConfigHash = rosAggTaskGroup.attrAggTaskGroupConfigHash;
        this.attrAggTaskGroupId = rosAggTaskGroup.attrAggTaskGroupId;
        this.attrAggTaskGroupName = rosAggTaskGroup.attrAggTaskGroupName;
        this.attrSourcePrometheusId = rosAggTaskGroup.attrSourcePrometheusId;
        this.attrStatus = rosAggTaskGroup.attrStatus;
    }
}
