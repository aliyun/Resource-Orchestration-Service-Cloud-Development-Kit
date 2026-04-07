import * as ros from '@alicloud/ros-cdk-core';
import { RosJob } from './schedulerx.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosJob as JobProperty };

/**
 * Properties for defining a `Job`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
 */
export interface JobProps {

    /**
     * Property executeMode: The execute mode of the job.
     */
    readonly executeMode: string | ros.IResolvable;

    /**
     * Property groupId: The group ID of the job.
     */
    readonly groupId: string | ros.IResolvable;

    /**
     * Property jobType: The type of the job.
     */
    readonly jobType: string | ros.IResolvable;

    /**
     * Property name: The name of the job.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property namespace: The namespace of the job.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * Property timeType: The time type of the job.
     * cron：1
     * fixed_rate：3
     * second_delay：4
     * one_time ：5
     * api：100
     * none：-1
     */
    readonly timeType: number | ros.IResolvable;

    /**
     * Property attemptInterval: The attempt interval of the job.
     */
    readonly attemptInterval?: number | ros.IResolvable;

    /**
     * Property calendar: The calendar of the job.
     */
    readonly calendar?: string | ros.IResolvable;

    /**
     * Property className: The class name of the job.
     */
    readonly className?: string | ros.IResolvable;

    /**
     * Property consumerSize: The consumer size of the job.
     */
    readonly consumerSize?: number | ros.IResolvable;

    /**
     * Property contactInfo: The contact info of the job.
     */
    readonly contactInfo?: Array<RosJob.ContactInfoProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property content: The content of the job.
     */
    readonly content?: string | ros.IResolvable;

    /**
     * Property dataOffset: The data offset of the job.
     */
    readonly dataOffset?: number | ros.IResolvable;

    /**
     * Property description: The description of the job.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property dispatcherSize: The dispatcher size of the job.
     */
    readonly dispatcherSize?: number | ros.IResolvable;

    /**
     * Property failEnable: Whether fail is enabled for the job.
     */
    readonly failEnable?: boolean | ros.IResolvable;

    /**
     * Property failTimes: The fail times of the job.
     */
    readonly failTimes?: number | ros.IResolvable;

    /**
     * Property maxAttempt: The max attempt of the job.
     */
    readonly maxAttempt?: number | ros.IResolvable;

    /**
     * Property maxConcurrency: The max concurrency of the job.
     */
    readonly maxConcurrency?: number | ros.IResolvable;

    /**
     * Property missWorkerEnable: Whether miss worker is enabled for the job.
     */
    readonly missWorkerEnable?: boolean | ros.IResolvable;

    /**
     * Property namespaceSource: The namespace source of the job.
     */
    readonly namespaceSource?: string | ros.IResolvable;

    /**
     * Property pageSize: Advanced configuration for parallel grid tasks, the default number of sub-tasks pulled at a time is 100.
     */
    readonly pageSize?: number | ros.IResolvable;

    /**
     * Property parameters: The parameters of the job.
     */
    readonly parameters?: string | ros.IResolvable;

    /**
     * Property priority: The priority of the job.
     */
    readonly priority?: number | ros.IResolvable;

    /**
     * Property queueSize: The queue size of the job.
     */
    readonly queueSize?: number | ros.IResolvable;

    /**
     * Property sendChannel: The send channel of the job.
     */
    readonly sendChannel?: string | ros.IResolvable;

    /**
     * Property successNoticeEnable: Whether success notice is enabled for the job.
     */
    readonly successNoticeEnable?: boolean | ros.IResolvable;

    /**
     * Property taskAttemptInterval: The task attempt interval of the job.
     */
    readonly taskAttemptInterval?: number | ros.IResolvable;

    /**
     * Property taskMaxAttempt: The task max attempt of the job.
     */
    readonly taskMaxAttempt?: number | ros.IResolvable;

    /**
     * Property timeExpression: The time expression of the job.
     */
    readonly timeExpression?: string | ros.IResolvable;

    /**
     * Property timeout: The timeout of the job.
     */
    readonly timeout?: number | ros.IResolvable;

    /**
     * Property timeoutEnable: Whether timeout is enabled for the job.
     */
    readonly timeoutEnable?: boolean | ros.IResolvable;

    /**
     * Property timeoutKillEnable: Whether timeout kill is enabled for the job.
     */
    readonly timeoutKillEnable?: boolean | ros.IResolvable;

    /**
     * Property timezone: The timezone of the job.
     */
    readonly timezone?: string | ros.IResolvable;

    /**
     * Property xAttrs: The extended attributes of the job.
     */
    readonly xAttrs?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Represents a `Job`.
 */
export interface IJob extends ros.IResource {
    readonly props: JobProps;

    /**
     * Attribute JobId: The ID of the job.
     */
    readonly attrJobId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SchedulerX::Job`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
 */
export class Job extends ros.Resource implements IJob {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: JobProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute JobId: The ID of the job.
     */
    public readonly attrJobId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: JobProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosJob = new RosJob(this, id,  {
            timezone: props.timezone,
            description: props.description,
            pageSize: props.pageSize,
            timeExpression: props.timeExpression,
            name: props.name,
            timeType: props.timeType,
            queueSize: props.queueSize,
            dispatcherSize: props.dispatcherSize,
            taskMaxAttempt: props.taskMaxAttempt,
            missWorkerEnable: props.missWorkerEnable,
            namespaceSource: props.namespaceSource,
            className: props.className,
            failEnable: props.failEnable,
            attemptInterval: props.attemptInterval,
            contactInfo: props.contactInfo,
            consumerSize: props.consumerSize,
            executeMode: props.executeMode,
            xAttrs: props.xAttrs,
            maxAttempt: props.maxAttempt,
            parameters: props.parameters,
            timeout: props.timeout,
            successNoticeEnable: props.successNoticeEnable,
            priority: props.priority,
            calendar: props.calendar,
            maxConcurrency: props.maxConcurrency,
            dataOffset: props.dataOffset,
            timeoutKillEnable: props.timeoutKillEnable,
            namespace: props.namespace,
            groupId: props.groupId,
            taskAttemptInterval: props.taskAttemptInterval,
            jobType: props.jobType,
            timeoutEnable: props.timeoutEnable,
            content: props.content,
            failTimes: props.failTimes,
            sendChannel: props.sendChannel,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosJob;
        this.attrJobId = rosJob.attrJobId;
    }
}
