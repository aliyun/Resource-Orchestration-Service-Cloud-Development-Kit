import * as ros from '@alicloud/ros-cdk-core';
import { RosJob } from './schedulerx.generated';
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
     * Property attemptInterval: The retry interval for a failed job, in seconds. Defaults to 30.
     */
    readonly attemptInterval?: number | ros.IResolvable;
    /**
     * Property calendar: For a `cron` job, you can specify a custom calendar.
     */
    readonly calendar?: string | ros.IResolvable;
    /**
     * Property className: The fully qualified class name of the job interface.
     * Required for `java` jobs.
     */
    readonly className?: string | ros.IResolvable;
    /**
     * Property consumerSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of consumer
     * threads per machine for processing subtasks. Defaults to 5.
     */
    readonly consumerSize?: number | ros.IResolvable;
    /**
     * Property contactInfo: The contact information for the job.
     * ><notice>
     * This parameter is deprecated.
     * ><\/notice>
     */
    readonly contactInfo?: Array<RosJob.ContactInfoProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property content: - For a `python`, `shell`, or `k8s` job, this parameter specifies the script
     * content.
     * - For a `go` job, the content must be in the following format:
     * {"jobName":"HelloWorld"}
     */
    readonly content?: string | ros.IResolvable;
    /**
     * Property dataOffset: The time offset in seconds for a `cron` job.
     */
    readonly dataOffset?: number | ros.IResolvable;
    /**
     * Property description: The description of the job.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property dispatcherSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of threads
     * for dispatching subtasks. Defaults to 5.
     */
    readonly dispatcherSize?: number | ros.IResolvable;
    /**
     * Property failEnable: Specifies whether to enable alerts for failed jobs. Valid values:
     * - true: Enables failure alerts.
     * - false: Disables failure alerts.
     */
    readonly failEnable?: boolean | ros.IResolvable;
    /**
     * Property failTimes: The number of consecutive failures that triggers an alert.
     */
    readonly failTimes?: number | ros.IResolvable;
    /**
     * Property maxAttempt: The maximum number of retries for a failed job. Defaults to 0.
     */
    readonly maxAttempt?: number | ros.IResolvable;
    /**
     * Property maxConcurrency: The maximum number of concurrent job instances. Defaults to 1. If an existing job
     * instance is still running, a new one will not be triggered, even if its scheduled
     * time has passed.
     */
    readonly maxConcurrency?: number | ros.IResolvable;
    /**
     * Property missWorkerEnable: Specifies whether to send an alert when no worker is available to run the job.
     * - true: Enables the alert.
     * - false: Disables the alert.
     */
    readonly missWorkerEnable?: boolean | ros.IResolvable;
    /**
     * Property namespaceSource: This parameter is required only for specific third-party integrations.
     */
    readonly namespaceSource?: string | ros.IResolvable;
    /**
     * Property pageSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of subtasks
     * retrieved per pull. Defaults to 100.
     */
    readonly pageSize?: number | ros.IResolvable;
    /**
     * Property parameters: The parameters of the job.
     */
    readonly parameters?: string | ros.IResolvable;
    /**
     * Property priority: The job priority. Valid values:
     * - 1: Low
     * - 5: Medium
     * - 10: High
     * - 15: Very High
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * Property queueSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of
     * subtasks the queue can hold. Defaults to 10000.
     */
    readonly queueSize?: number | ros.IResolvable;
    /**
     * Property sendChannel: The channel for sending alerts.
     * - For the default channel of the application group, use `default`.
     * - For a specific channel for the job, use `sms`, `mail`, `phone`, or `webhook`.
     */
    readonly sendChannel?: string | ros.IResolvable;
    /**
     * Property successNoticeEnable: Whether success notice is enabled for the job.
     */
    readonly successNoticeEnable?: boolean | ros.IResolvable;
    /**
     * Property taskAttemptInterval: \[Advanced] For `parallel` and `grid` jobs, this specifies the retry interval in
     * seconds for a failed subtask. Defaults to 0.
     */
    readonly taskAttemptInterval?: number | ros.IResolvable;
    /**
     * Property taskMaxAttempt: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of
     * retries for a failed subtask. Defaults to 0.
     */
    readonly taskMaxAttempt?: number | ros.IResolvable;
    /**
     * Property timeExpression: The time expression, which depends on the value of `TimeType`.
     * - cron: A standard cron expression.
     * - api: No time expression is required.
     * - fixed_rate: A fixed interval in seconds. For example, a value of 30 triggers
     * the job every 30 seconds.
     * - second_delay: A fixed delay in seconds before the job is executed. Valid
     * values: 1 to 60.
     * - one_time: A specific time in `yyyy-MM-dd HH:mm:ss` format or a Unix timestamp
     * in milliseconds. Example: "2022-10-10 10:10:00".
     */
    readonly timeExpression?: string | ros.IResolvable;
    /**
     * Property timeout: The timeout threshold in seconds. Defaults to 7200.
     */
    readonly timeout?: number | ros.IResolvable;
    /**
     * Property timeoutEnable: Specifies whether to enable timeout alerts. Valid values:
     * - true: Enables timeout alerts.
     * - false: Disables timeout alerts.
     */
    readonly timeoutEnable?: boolean | ros.IResolvable;
    /**
     * Property timeoutKillEnable: Specifies whether to terminate the job upon timeout. Valid values:
     * - true: Terminates the job if it times out.
     * - false: The job is not terminated if it times out.
     */
    readonly timeoutKillEnable?: boolean | ros.IResolvable;
    /**
     * Property timezone: The timezone of the job.
     */
    readonly timezone?: string | ros.IResolvable;
    /**
     * Property xAttrs: This parameter is required for `k8s` jobs.<br>For job tasks:
     * {"resource":"job"}<br>For shell tasks:
     * {"image":"busybox","resource":"shell"}<br><br>
     */
    readonly xAttrs?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
export declare class Job extends ros.Resource implements IJob {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: JobProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute JobId: The ID of the job.
     */
    readonly attrJobId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: JobProps, enableResourcePropertyConstraint?: boolean);
}
