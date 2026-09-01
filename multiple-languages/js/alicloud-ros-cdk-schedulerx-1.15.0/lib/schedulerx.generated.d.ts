import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAppGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup
 */
export interface RosAppGroupProps {
    /**
     * @Property appName: The application name.
     */
    readonly appName: string | ros.IResolvable;
    /**
     * @Property groupId: The group ID of the application group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property namespace: The namespace of the application group.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * @Property appKey: The application key.
     */
    readonly appKey?: string | ros.IResolvable;
    /**
     * @Property appType: The type of the application.
     */
    readonly appType?: number | ros.IResolvable;
    /**
     * @Property appVersion: The version of the application.
     */
    readonly appVersion?: number | ros.IResolvable;
    /**
     * @Property description: The description of the application group.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property enableLog: Whether to enable log.
     */
    readonly enableLog?: boolean | ros.IResolvable;
    /**
     * @Property maxJobs: The maximum number of jobs.
     */
    readonly maxJobs?: number | ros.IResolvable;
    /**
     * @Property monitorConfig: The monitor configuration in JSON format.
     */
    readonly monitorConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property monitorContacts: The monitor contacts in JSON format.
     */
    readonly monitorContacts?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property namespaceName: The name of the namespace.
     */
    readonly namespaceName?: string | ros.IResolvable;
    /**
     * @Property namespaceSource: The namespace source of the job.
     */
    readonly namespaceSource?: string | ros.IResolvable;
    /**
     * @Property notificationPolicyName: The notification policy name.
     */
    readonly notificationPolicyName?: string | ros.IResolvable;
    /**
     * @Property scheduleBusyWorkers: Whether to schedule busy workers.
     */
    readonly scheduleBusyWorkers?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SchedulerX::AppGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AppGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup
 */
export declare class RosAppGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SchedulerX::AppGroup";
    /**
     * @Attribute AppGroupId: The group ID of the application group.
     */
    readonly attrAppGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appName: The application name.
     */
    appName: string | ros.IResolvable;
    /**
     * @Property groupId: The group ID of the application group.
     */
    groupId: string | ros.IResolvable;
    /**
     * @Property namespace: The namespace of the application group.
     */
    namespace: string | ros.IResolvable;
    /**
     * @Property appKey: The application key.
     */
    appKey: string | ros.IResolvable | undefined;
    /**
     * @Property appType: The type of the application.
     */
    appType: number | ros.IResolvable | undefined;
    /**
     * @Property appVersion: The version of the application.
     */
    appVersion: number | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the application group.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property enableLog: Whether to enable log.
     */
    enableLog: boolean | ros.IResolvable | undefined;
    /**
     * @Property maxJobs: The maximum number of jobs.
     */
    maxJobs: number | ros.IResolvable | undefined;
    /**
     * @Property monitorConfig: The monitor configuration in JSON format.
     */
    monitorConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property monitorContacts: The monitor contacts in JSON format.
     */
    monitorContacts: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property namespaceName: The name of the namespace.
     */
    namespaceName: string | ros.IResolvable | undefined;
    /**
     * @Property namespaceSource: The namespace source of the job.
     */
    namespaceSource: string | ros.IResolvable | undefined;
    /**
     * @Property notificationPolicyName: The notification policy name.
     */
    notificationPolicyName: string | ros.IResolvable | undefined;
    /**
     * @Property scheduleBusyWorkers: Whether to schedule busy workers.
     */
    scheduleBusyWorkers: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
 */
export interface RosJobProps {
    /**
     * @Property executeMode: The execute mode of the job.
     */
    readonly executeMode: string | ros.IResolvable;
    /**
     * @Property groupId: The group ID of the job.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property jobType: The type of the job.
     */
    readonly jobType: string | ros.IResolvable;
    /**
     * @Property name: The name of the job.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property namespace: The namespace of the job.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * @Property timeType: The time type of the job.
     * cron：1
     * fixed_rate：3
     * second_delay：4
     * one_time ：5
     * api：100
     * none：-1
     */
    readonly timeType: number | ros.IResolvable;
    /**
     * @Property attemptInterval: The retry interval for a failed job, in seconds. Defaults to 30.
     */
    readonly attemptInterval?: number | ros.IResolvable;
    /**
     * @Property calendar: For a `cron` job, you can specify a custom calendar.
     */
    readonly calendar?: string | ros.IResolvable;
    /**
     * @Property className: The fully qualified class name of the job interface.
     * Required for `java` jobs.
     */
    readonly className?: string | ros.IResolvable;
    /**
     * @Property consumerSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of consumer
     * threads per machine for processing subtasks. Defaults to 5.
     */
    readonly consumerSize?: number | ros.IResolvable;
    /**
     * @Property contactInfo: The contact information for the job.
     * ><notice>
     * This parameter is deprecated.
     * ><\/notice>
     */
    readonly contactInfo?: Array<RosJob.ContactInfoProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property content: - For a `python`, `shell`, or `k8s` job, this parameter specifies the script
     * content.
     * - For a `go` job, the content must be in the following format:
     * {"jobName":"HelloWorld"}
     */
    readonly content?: string | ros.IResolvable;
    /**
     * @Property dataOffset: The time offset in seconds for a `cron` job.
     */
    readonly dataOffset?: number | ros.IResolvable;
    /**
     * @Property description: The description of the job.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property dispatcherSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of threads
     * for dispatching subtasks. Defaults to 5.
     */
    readonly dispatcherSize?: number | ros.IResolvable;
    /**
     * @Property failEnable: Specifies whether to enable alerts for failed jobs. Valid values:
     * - true: Enables failure alerts.
     * - false: Disables failure alerts.
     */
    readonly failEnable?: boolean | ros.IResolvable;
    /**
     * @Property failTimes: The number of consecutive failures that triggers an alert.
     */
    readonly failTimes?: number | ros.IResolvable;
    /**
     * @Property maxAttempt: The maximum number of retries for a failed job. Defaults to 0.
     */
    readonly maxAttempt?: number | ros.IResolvable;
    /**
     * @Property maxConcurrency: The maximum number of concurrent job instances. Defaults to 1. If an existing job
     * instance is still running, a new one will not be triggered, even if its scheduled
     * time has passed.
     */
    readonly maxConcurrency?: number | ros.IResolvable;
    /**
     * @Property missWorkerEnable: Specifies whether to send an alert when no worker is available to run the job.
     * - true: Enables the alert.
     * - false: Disables the alert.
     */
    readonly missWorkerEnable?: boolean | ros.IResolvable;
    /**
     * @Property namespaceSource: This parameter is required only for specific third-party integrations.
     */
    readonly namespaceSource?: string | ros.IResolvable;
    /**
     * @Property pageSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of subtasks
     * retrieved per pull. Defaults to 100.
     */
    readonly pageSize?: number | ros.IResolvable;
    /**
     * @Property parameters: The parameters of the job.
     */
    readonly parameters?: string | ros.IResolvable;
    /**
     * @Property priority: The job priority. Valid values:
     * - 1: Low
     * - 5: Medium
     * - 10: High
     * - 15: Very High
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * @Property queueSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of
     * subtasks the queue can hold. Defaults to 10000.
     */
    readonly queueSize?: number | ros.IResolvable;
    /**
     * @Property sendChannel: The channel for sending alerts.
     * - For the default channel of the application group, use `default`.
     * - For a specific channel for the job, use `sms`, `mail`, `phone`, or `webhook`.
     */
    readonly sendChannel?: string | ros.IResolvable;
    /**
     * @Property successNoticeEnable: Whether success notice is enabled for the job.
     */
    readonly successNoticeEnable?: boolean | ros.IResolvable;
    /**
     * @Property taskAttemptInterval: \[Advanced] For `parallel` and `grid` jobs, this specifies the retry interval in
     * seconds for a failed subtask. Defaults to 0.
     */
    readonly taskAttemptInterval?: number | ros.IResolvable;
    /**
     * @Property taskMaxAttempt: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of
     * retries for a failed subtask. Defaults to 0.
     */
    readonly taskMaxAttempt?: number | ros.IResolvable;
    /**
     * @Property timeExpression: The time expression, which depends on the value of `TimeType`.
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
     * @Property timeout: The timeout threshold in seconds. Defaults to 7200.
     */
    readonly timeout?: number | ros.IResolvable;
    /**
     * @Property timeoutEnable: Specifies whether to enable timeout alerts. Valid values:
     * - true: Enables timeout alerts.
     * - false: Disables timeout alerts.
     */
    readonly timeoutEnable?: boolean | ros.IResolvable;
    /**
     * @Property timeoutKillEnable: Specifies whether to terminate the job upon timeout. Valid values:
     * - true: Terminates the job if it times out.
     * - false: The job is not terminated if it times out.
     */
    readonly timeoutKillEnable?: boolean | ros.IResolvable;
    /**
     * @Property timezone: The timezone of the job.
     */
    readonly timezone?: string | ros.IResolvable;
    /**
     * @Property xAttrs: This parameter is required for `k8s` jobs.<br>For job tasks:
     * {"resource":"job"}<br>For shell tasks:
     * {"image":"busybox","resource":"shell"}<br><br>
     */
    readonly xAttrs?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SchedulerX::Job`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Job` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
 */
export declare class RosJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SchedulerX::Job";
    /**
     * @Attribute JobId: The ID of the job.
     */
    readonly attrJobId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property executeMode: The execute mode of the job.
     */
    executeMode: string | ros.IResolvable;
    /**
     * @Property groupId: The group ID of the job.
     */
    groupId: string | ros.IResolvable;
    /**
     * @Property jobType: The type of the job.
     */
    jobType: string | ros.IResolvable;
    /**
     * @Property name: The name of the job.
     */
    name: string | ros.IResolvable;
    /**
     * @Property namespace: The namespace of the job.
     */
    namespace: string | ros.IResolvable;
    /**
     * @Property timeType: The time type of the job.
     * cron：1
     * fixed_rate：3
     * second_delay：4
     * one_time ：5
     * api：100
     * none：-1
     */
    timeType: number | ros.IResolvable;
    /**
     * @Property attemptInterval: The retry interval for a failed job, in seconds. Defaults to 30.
     */
    attemptInterval: number | ros.IResolvable | undefined;
    /**
     * @Property calendar: For a `cron` job, you can specify a custom calendar.
     */
    calendar: string | ros.IResolvable | undefined;
    /**
     * @Property className: The fully qualified class name of the job interface.
     * Required for `java` jobs.
     */
    className: string | ros.IResolvable | undefined;
    /**
     * @Property consumerSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of consumer
     * threads per machine for processing subtasks. Defaults to 5.
     */
    consumerSize: number | ros.IResolvable | undefined;
    /**
     * @Property contactInfo: The contact information for the job.
     * ><notice>
     * This parameter is deprecated.
     * ><\/notice>
     */
    contactInfo: Array<RosJob.ContactInfoProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property content: - For a `python`, `shell`, or `k8s` job, this parameter specifies the script
     * content.
     * - For a `go` job, the content must be in the following format:
     * {"jobName":"HelloWorld"}
     */
    content: string | ros.IResolvable | undefined;
    /**
     * @Property dataOffset: The time offset in seconds for a `cron` job.
     */
    dataOffset: number | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the job.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property dispatcherSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of threads
     * for dispatching subtasks. Defaults to 5.
     */
    dispatcherSize: number | ros.IResolvable | undefined;
    /**
     * @Property failEnable: Specifies whether to enable alerts for failed jobs. Valid values:
     * - true: Enables failure alerts.
     * - false: Disables failure alerts.
     */
    failEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property failTimes: The number of consecutive failures that triggers an alert.
     */
    failTimes: number | ros.IResolvable | undefined;
    /**
     * @Property maxAttempt: The maximum number of retries for a failed job. Defaults to 0.
     */
    maxAttempt: number | ros.IResolvable | undefined;
    /**
     * @Property maxConcurrency: The maximum number of concurrent job instances. Defaults to 1. If an existing job
     * instance is still running, a new one will not be triggered, even if its scheduled
     * time has passed.
     */
    maxConcurrency: number | ros.IResolvable | undefined;
    /**
     * @Property missWorkerEnable: Specifies whether to send an alert when no worker is available to run the job.
     * - true: Enables the alert.
     * - false: Disables the alert.
     */
    missWorkerEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property namespaceSource: This parameter is required only for specific third-party integrations.
     */
    namespaceSource: string | ros.IResolvable | undefined;
    /**
     * @Property pageSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of subtasks
     * retrieved per pull. Defaults to 100.
     */
    pageSize: number | ros.IResolvable | undefined;
    /**
     * @Property parameters: The parameters of the job.
     */
    parameters: string | ros.IResolvable | undefined;
    /**
     * @Property priority: The job priority. Valid values:
     * - 1: Low
     * - 5: Medium
     * - 10: High
     * - 15: Very High
     */
    priority: number | ros.IResolvable | undefined;
    /**
     * @Property queueSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of
     * subtasks the queue can hold. Defaults to 10000.
     */
    queueSize: number | ros.IResolvable | undefined;
    /**
     * @Property sendChannel: The channel for sending alerts.
     * - For the default channel of the application group, use `default`.
     * - For a specific channel for the job, use `sms`, `mail`, `phone`, or `webhook`.
     */
    sendChannel: string | ros.IResolvable | undefined;
    /**
     * @Property successNoticeEnable: Whether success notice is enabled for the job.
     */
    successNoticeEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property taskAttemptInterval: \[Advanced] For `parallel` and `grid` jobs, this specifies the retry interval in
     * seconds for a failed subtask. Defaults to 0.
     */
    taskAttemptInterval: number | ros.IResolvable | undefined;
    /**
     * @Property taskMaxAttempt: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of
     * retries for a failed subtask. Defaults to 0.
     */
    taskMaxAttempt: number | ros.IResolvable | undefined;
    /**
     * @Property timeExpression: The time expression, which depends on the value of `TimeType`.
     * - cron: A standard cron expression.
     * - api: No time expression is required.
     * - fixed_rate: A fixed interval in seconds. For example, a value of 30 triggers
     * the job every 30 seconds.
     * - second_delay: A fixed delay in seconds before the job is executed. Valid
     * values: 1 to 60.
     * - one_time: A specific time in `yyyy-MM-dd HH:mm:ss` format or a Unix timestamp
     * in milliseconds. Example: "2022-10-10 10:10:00".
     */
    timeExpression: string | ros.IResolvable | undefined;
    /**
     * @Property timeout: The timeout threshold in seconds. Defaults to 7200.
     */
    timeout: number | ros.IResolvable | undefined;
    /**
     * @Property timeoutEnable: Specifies whether to enable timeout alerts. Valid values:
     * - true: Enables timeout alerts.
     * - false: Disables timeout alerts.
     */
    timeoutEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property timeoutKillEnable: Specifies whether to terminate the job upon timeout. Valid values:
     * - true: Terminates the job if it times out.
     * - false: The job is not terminated if it times out.
     */
    timeoutKillEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property timezone: The timezone of the job.
     */
    timezone: string | ros.IResolvable | undefined;
    /**
     * @Property xAttrs: This parameter is required for `k8s` jobs.<br>For job tasks:
     * {"resource":"job"}<br>For shell tasks:
     * {"image":"busybox","resource":"shell"}<br><br>
     */
    xAttrs: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosJobProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosJob {
    /**
     * @stability external
     */
    interface ContactInfoProperty {
        /**
         * @Property userName: The user name in contact info.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property userPhone: The user phone in contact info.
         */
        readonly userPhone?: string | ros.IResolvable;
        /**
         * @Property userMail: The user mail in contact info.
         */
        readonly userMail?: string | ros.IResolvable;
        /**
         * @Property ding: The ding in contact info.
         */
        readonly ding?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace
 */
export interface RosNamespaceProps {
    /**
     * @Property name: The name of the namespace.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property description: The description of the namespace.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property uid: Namespace UID is globally unique; it is recommended to generate it using UUID.
     */
    readonly uid?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SchedulerX::Namespace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace
 */
export declare class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SchedulerX::Namespace";
    /**
     * @Attribute NamespaceUid: The ID of the namespace.
     */
    readonly attrNamespaceUid: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the namespace.
     */
    name: string | ros.IResolvable;
    /**
     * @Property description: The description of the namespace.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property uid: Namespace UID is globally unique; it is recommended to generate it using UUID.
     */
    uid: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosWorkFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-workflow
 */
export interface RosWorkFlowProps {
    /**
     * @Property groupId: The application Group ID, which is obtained from the application management page of the console.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property namespace: The namespace ID, which is obtained from the namespace page in the console.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * @Property timeType: Time type. Currently, the following time types are supported:
     * - cron: 1
     * - api: 100.
     */
    readonly timeType: number | ros.IResolvable;
    /**
     * @Property workflowName: Workflow Name.
     */
    readonly workflowName: string | ros.IResolvable;
    /**
     * @Property description: Workflow description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property maxConcurrency: The maximum number of workflow instances running at the same time. The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
     */
    readonly maxConcurrency?: number | ros.IResolvable;
    /**
     * @Property namespaceSource: Special third parties are required.
     */
    readonly namespaceSource?: string | ros.IResolvable;
    /**
     * @Property timeExpression: Time expression, which is set based on the selected time type.
     * - cron: Fill in standard cron expressions to support online verification.
     * - api: No time expression.
     */
    readonly timeExpression?: string | ros.IResolvable;
    /**
     * @Property timezone: Time Zone.
     */
    readonly timezone?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SchedulerX::WorkFlow`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkFlow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-workflow
 */
export declare class RosWorkFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SchedulerX::WorkFlow";
    /**
     * @Attribute Description: Workflow description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * @Attribute MaxConcurrency: The maximum number of workflow instances running at the same time. The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
     */
    readonly attrMaxConcurrency: ros.IResolvable;
    /**
     * @Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * @Attribute TimeExpression: Time expression, which is set based on the selected time type.
     */
    readonly attrTimeExpression: ros.IResolvable;
    /**
     * @Attribute TimeType: Time type.
     */
    readonly attrTimeType: ros.IResolvable;
    /**
     * @Attribute WorkFlowId: workflow id.
     */
    readonly attrWorkFlowId: ros.IResolvable;
    /**
     * @Attribute WorkflowName: Workflow Name.
     */
    readonly attrWorkflowName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupId: The application Group ID, which is obtained from the application management page of the console.
     */
    groupId: string | ros.IResolvable;
    /**
     * @Property namespace: The namespace ID, which is obtained from the namespace page in the console.
     */
    namespace: string | ros.IResolvable;
    /**
     * @Property timeType: Time type. Currently, the following time types are supported:
     * - cron: 1
     * - api: 100.
     */
    timeType: number | ros.IResolvable;
    /**
     * @Property workflowName: Workflow Name.
     */
    workflowName: string | ros.IResolvable;
    /**
     * @Property description: Workflow description.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property maxConcurrency: The maximum number of workflow instances running at the same time. The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
     */
    maxConcurrency: number | ros.IResolvable | undefined;
    /**
     * @Property namespaceSource: Special third parties are required.
     */
    namespaceSource: string | ros.IResolvable | undefined;
    /**
     * @Property timeExpression: Time expression, which is set based on the selected time type.
     * - cron: Fill in standard cron expressions to support online verification.
     * - api: No time expression.
     */
    timeExpression: string | ros.IResolvable | undefined;
    /**
     * @Property timezone: Time Zone.
     */
    timezone: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkFlowProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
