using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Schedulerx
{
    /// <summary>Properties for defining a `Job`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IJobProps), fullyQualifiedName: "@alicloud/ros-cdk-schedulerx.JobProps")]
    public interface IJobProps
    {
        /// <summary>Property executeMode: The execute mode of the job.</summary>
        [JsiiProperty(name: "executeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExecuteMode
        {
            get;
        }

        /// <summary>Property groupId: The group ID of the job.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <summary>Property jobType: The type of the job.</summary>
        [JsiiProperty(name: "jobType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object JobType
        {
            get;
        }

        /// <summary>Property name: The name of the job.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property namespace: The namespace of the job.</summary>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Namespace
        {
            get;
        }

        /// <summary>Property timeType: The time type of the job.</summary>
        /// <remarks>
        /// cron：1
        /// fixed_rate：3
        /// second_delay：4
        /// one_time ：5
        /// api：100
        /// none：-1
        /// </remarks>
        [JsiiProperty(name: "timeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TimeType
        {
            get;
        }

        /// <summary>Property attemptInterval: The retry interval for a failed job, in seconds.</summary>
        /// <remarks>
        /// Defaults to 30.
        /// </remarks>
        [JsiiProperty(name: "attemptInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AttemptInterval
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property calendar: For a `cron` job, you can specify a custom calendar.</summary>
        [JsiiProperty(name: "calendar", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Calendar
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property className: The fully qualified class name of the job interface.</summary>
        /// <remarks>
        /// Required for <c>java</c> jobs.
        /// </remarks>
        [JsiiProperty(name: "className", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClassName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property consumerSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of consumer threads per machine for processing subtasks.</summary>
        /// <remarks>
        /// Defaults to 5.
        /// </remarks>
        [JsiiProperty(name: "consumerSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConsumerSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property contactInfo: The contact information for the job.</summary>
        /// <remarks>
        ///     <notice xmlns="http://www.w3.org/1999/xhtml"></notice>
        ///
        /// This parameter is deprecated.
        /// </remarks>
        [JsiiProperty(name: "contactInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-schedulerx.RosJob.ContactInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContactInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property content: - For a `python`, `shell`, or `k8s` job, this parameter specifies the script content.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>For a <c>go</c> job, the content must be in the following format:
        /// {"jobName":"HelloWorld"}</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Content
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataOffset: The time offset in seconds for a `cron` job.</summary>
        [JsiiProperty(name: "dataOffset", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataOffset
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the job.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dispatcherSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of threads for dispatching subtasks.</summary>
        /// <remarks>
        /// Defaults to 5.
        /// </remarks>
        [JsiiProperty(name: "dispatcherSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DispatcherSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property failEnable: Specifies whether to enable alerts for failed jobs.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: Enables failure alerts.</description>
        /// <description>false: Disables failure alerts.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "failEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property failTimes: The number of consecutive failures that triggers an alert.</summary>
        [JsiiProperty(name: "failTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailTimes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxAttempt: The maximum number of retries for a failed job.</summary>
        /// <remarks>
        /// Defaults to 0.
        /// </remarks>
        [JsiiProperty(name: "maxAttempt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxAttempt
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxConcurrency: The maximum number of concurrent job instances.</summary>
        /// <remarks>
        /// Defaults to 1. If an existing job
        /// instance is still running, a new one will not be triggered, even if its scheduled
        /// time has passed.
        /// </remarks>
        [JsiiProperty(name: "maxConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxConcurrency
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property missWorkerEnable: Specifies whether to send an alert when no worker is available to run the job.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>true: Enables the alert.</description>
        /// <description>false: Disables the alert.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "missWorkerEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MissWorkerEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property namespaceSource: This parameter is required only for specific third-party integrations.</summary>
        [JsiiProperty(name: "namespaceSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NamespaceSource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pageSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of subtasks retrieved per pull.</summary>
        /// <remarks>
        /// Defaults to 100.
        /// </remarks>
        [JsiiProperty(name: "pageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PageSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property parameters: The parameters of the job.</summary>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Parameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property priority: The job priority.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>1: Low</description>
        /// <description>5: Medium</description>
        /// <description>10: High</description>
        /// <description>15: Very High</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Priority
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property queueSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of subtasks the queue can hold.</summary>
        /// <remarks>
        /// Defaults to 10000.
        /// </remarks>
        [JsiiProperty(name: "queueSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueueSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sendChannel: The channel for sending alerts.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>For the default channel of the application group, use <c>default</c>.</description>
        /// <description>For a specific channel for the job, use <c>sms</c>, <c>mail</c>, <c>phone</c>, or <c>webhook</c>.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "sendChannel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SendChannel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property successNoticeEnable: Whether success notice is enabled for the job.</summary>
        [JsiiProperty(name: "successNoticeEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SuccessNoticeEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property taskAttemptInterval: \[Advanced] For `parallel` and `grid` jobs, this specifies the retry interval in seconds for a failed subtask.</summary>
        /// <remarks>
        /// Defaults to 0.
        /// </remarks>
        [JsiiProperty(name: "taskAttemptInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TaskAttemptInterval
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property taskMaxAttempt: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of retries for a failed subtask.</summary>
        /// <remarks>
        /// Defaults to 0.
        /// </remarks>
        [JsiiProperty(name: "taskMaxAttempt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TaskMaxAttempt
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeExpression: The time expression, which depends on the value of `TimeType`.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>cron: A standard cron expression.</description>
        /// <description>api: No time expression is required.</description>
        /// <description>fixed_rate: A fixed interval in seconds. For example, a value of 30 triggers
        /// the job every 30 seconds.</description>
        /// <description>second_delay: A fixed delay in seconds before the job is executed. Valid
        /// values: 1 to 60.</description>
        /// <description>one_time: A specific time in <c>yyyy-MM-dd HH:mm:ss</c> format or a Unix timestamp
        /// in milliseconds. Example: "2022-10-10 10:10:00".</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "timeExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TimeExpression
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeout: The timeout threshold in seconds.</summary>
        /// <remarks>
        /// Defaults to 7200.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeoutEnable: Specifies whether to enable timeout alerts.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: Enables timeout alerts.</description>
        /// <description>false: Disables timeout alerts.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "timeoutEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TimeoutEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeoutKillEnable: Specifies whether to terminate the job upon timeout.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: Terminates the job if it times out.</description>
        /// <description>false: The job is not terminated if it times out.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "timeoutKillEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TimeoutKillEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timezone: The timezone of the job.</summary>
        [JsiiProperty(name: "timezone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timezone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property xAttrs: This parameter is required for `k8s` jobs.&lt;br&gt;For job tasks: {"resource":"job"}&lt;br&gt;For shell tasks: {"image":"busybox","resource":"shell"}&lt;br&gt;&lt;br&gt;.</summary>
        [JsiiProperty(name: "xAttrs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? XAttrs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Job`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IJobProps), fullyQualifiedName: "@alicloud/ros-cdk-schedulerx.JobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Schedulerx.IJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property executeMode: The execute mode of the job.</summary>
            [JsiiProperty(name: "executeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExecuteMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupId: The group ID of the job.</summary>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property jobType: The type of the job.</summary>
            [JsiiProperty(name: "jobType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object JobType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the job.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property namespace: The namespace of the job.</summary>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property timeType: The time type of the job.</summary>
            /// <remarks>
            /// cron：1
            /// fixed_rate：3
            /// second_delay：4
            /// one_time ：5
            /// api：100
            /// none：-1
            /// </remarks>
            [JsiiProperty(name: "timeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TimeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property attemptInterval: The retry interval for a failed job, in seconds.</summary>
            /// <remarks>
            /// Defaults to 30.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "attemptInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AttemptInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property calendar: For a `cron` job, you can specify a custom calendar.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "calendar", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Calendar
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property className: The fully qualified class name of the job interface.</summary>
            /// <remarks>
            /// Required for <c>java</c> jobs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "className", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClassName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property consumerSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of consumer threads per machine for processing subtasks.</summary>
            /// <remarks>
            /// Defaults to 5.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "consumerSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConsumerSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property contactInfo: The contact information for the job.</summary>
            /// <remarks>
            ///     <notice xmlns="http://www.w3.org/1999/xhtml"></notice>
            ///
            /// This parameter is deprecated.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contactInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-schedulerx.RosJob.ContactInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ContactInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property content: - For a `python`, `shell`, or `k8s` job, this parameter specifies the script content.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>For a <c>go</c> job, the content must be in the following format:
            /// {"jobName":"HelloWorld"}</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Content
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataOffset: The time offset in seconds for a `cron` job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataOffset", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataOffset
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dispatcherSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of threads for dispatching subtasks.</summary>
            /// <remarks>
            /// Defaults to 5.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dispatcherSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DispatcherSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property failEnable: Specifies whether to enable alerts for failed jobs.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: Enables failure alerts.</description>
            /// <description>false: Disables failure alerts.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property failTimes: The number of consecutive failures that triggers an alert.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "failTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailTimes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxAttempt: The maximum number of retries for a failed job.</summary>
            /// <remarks>
            /// Defaults to 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxAttempt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxAttempt
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxConcurrency: The maximum number of concurrent job instances.</summary>
            /// <remarks>
            /// Defaults to 1. If an existing job
            /// instance is still running, a new one will not be triggered, even if its scheduled
            /// time has passed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxConcurrency
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property missWorkerEnable: Specifies whether to send an alert when no worker is available to run the job.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>true: Enables the alert.</description>
            /// <description>false: Disables the alert.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "missWorkerEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MissWorkerEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property namespaceSource: This parameter is required only for specific third-party integrations.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NamespaceSource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pageSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of subtasks retrieved per pull.</summary>
            /// <remarks>
            /// Defaults to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PageSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property parameters: The parameters of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Parameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property priority: The job priority.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>1: Low</description>
            /// <description>5: Medium</description>
            /// <description>10: High</description>
            /// <description>15: Very High</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property queueSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of subtasks the queue can hold.</summary>
            /// <remarks>
            /// Defaults to 10000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queueSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueueSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sendChannel: The channel for sending alerts.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>For the default channel of the application group, use <c>default</c>.</description>
            /// <description>For a specific channel for the job, use <c>sms</c>, <c>mail</c>, <c>phone</c>, or <c>webhook</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sendChannel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SendChannel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property successNoticeEnable: Whether success notice is enabled for the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "successNoticeEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SuccessNoticeEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property taskAttemptInterval: \[Advanced] For `parallel` and `grid` jobs, this specifies the retry interval in seconds for a failed subtask.</summary>
            /// <remarks>
            /// Defaults to 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "taskAttemptInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TaskAttemptInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property taskMaxAttempt: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of retries for a failed subtask.</summary>
            /// <remarks>
            /// Defaults to 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "taskMaxAttempt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TaskMaxAttempt
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeExpression: The time expression, which depends on the value of `TimeType`.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>cron: A standard cron expression.</description>
            /// <description>api: No time expression is required.</description>
            /// <description>fixed_rate: A fixed interval in seconds. For example, a value of 30 triggers
            /// the job every 30 seconds.</description>
            /// <description>second_delay: A fixed delay in seconds before the job is executed. Valid
            /// values: 1 to 60.</description>
            /// <description>one_time: A specific time in <c>yyyy-MM-dd HH:mm:ss</c> format or a Unix timestamp
            /// in milliseconds. Example: "2022-10-10 10:10:00".</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeExpression
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeout: The timeout threshold in seconds.</summary>
            /// <remarks>
            /// Defaults to 7200.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeoutEnable: Specifies whether to enable timeout alerts.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: Enables timeout alerts.</description>
            /// <description>false: Disables timeout alerts.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeoutEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeoutKillEnable: Specifies whether to terminate the job upon timeout.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: Terminates the job if it times out.</description>
            /// <description>false: The job is not terminated if it times out.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutKillEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeoutKillEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timezone: The timezone of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "timezone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timezone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property xAttrs: This parameter is required for `k8s` jobs.&lt;br&gt;For job tasks: {"resource":"job"}&lt;br&gt;For shell tasks: {"image":"busybox","resource":"shell"}&lt;br&gt;&lt;br&gt;.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "xAttrs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? XAttrs
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
