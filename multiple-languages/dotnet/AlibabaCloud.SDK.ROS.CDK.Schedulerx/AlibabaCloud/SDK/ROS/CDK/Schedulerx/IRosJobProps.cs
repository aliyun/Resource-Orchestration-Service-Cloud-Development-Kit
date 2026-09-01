using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Schedulerx
{
    /// <summary>Properties for defining a `RosJob`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosJobProps), fullyQualifiedName: "@alicloud/ros-cdk-schedulerx.RosJobProps")]
    public interface IRosJobProps
    {
        /// <remarks>
        /// <strong>Property</strong>: executeMode: The execute mode of the job.
        /// </remarks>
        [JsiiProperty(name: "executeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExecuteMode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The group ID of the job.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: jobType: The type of the job.
        /// </remarks>
        [JsiiProperty(name: "jobType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object JobType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the job.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespace: The namespace of the job.
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Namespace
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeType: The time type of the job.
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

        /// <remarks>
        /// <strong>Property</strong>: attemptInterval: The retry interval for a failed job, in seconds. Defaults to 30.
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

        /// <remarks>
        /// <strong>Property</strong>: calendar: For a `cron` job, you can specify a custom calendar.
        /// </remarks>
        [JsiiProperty(name: "calendar", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Calendar
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: className: The fully qualified class name of the job interface.
        /// Required for `java` jobs.
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

        /// <remarks>
        /// <strong>Property</strong>: consumerSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of consumer
        /// threads per machine for processing subtasks. Defaults to 5.
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

        /// <remarks>
        /// <strong>Property</strong>: contactInfo: The contact information for the job.
        /// ><notice>
        /// This parameter is deprecated.
        /// ><\/notice>
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

        /// <remarks>
        /// <strong>Property</strong>: content: - For a `python`, `shell`, or `k8s` job, this parameter specifies the script
        /// content.
        /// - For a `go` job, the content must be in the following format:
        /// {"jobName":"HelloWorld"}
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

        /// <remarks>
        /// <strong>Property</strong>: dataOffset: The time offset in seconds for a `cron` job.
        /// </remarks>
        [JsiiProperty(name: "dataOffset", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataOffset
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the job.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dispatcherSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of threads
        /// for dispatching subtasks. Defaults to 5.
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

        /// <remarks>
        /// <strong>Property</strong>: failEnable: Specifies whether to enable alerts for failed jobs. Valid values:
        /// - true: Enables failure alerts.
        /// - false: Disables failure alerts.
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

        /// <remarks>
        /// <strong>Property</strong>: failTimes: The number of consecutive failures that triggers an alert.
        /// </remarks>
        [JsiiProperty(name: "failTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailTimes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxAttempt: The maximum number of retries for a failed job. Defaults to 0.
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

        /// <remarks>
        /// <strong>Property</strong>: maxConcurrency: The maximum number of concurrent job instances. Defaults to 1. If an existing job
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

        /// <remarks>
        /// <strong>Property</strong>: missWorkerEnable: Specifies whether to send an alert when no worker is available to run the job.
        /// - true: Enables the alert.
        /// - false: Disables the alert.
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

        /// <remarks>
        /// <strong>Property</strong>: namespaceSource: This parameter is required only for specific third-party integrations.
        /// </remarks>
        [JsiiProperty(name: "namespaceSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NamespaceSource
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pageSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of subtasks
        /// retrieved per pull. Defaults to 100.
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

        /// <remarks>
        /// <strong>Property</strong>: parameters: The parameters of the job.
        /// </remarks>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Parameters
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: The job priority. Valid values:
        /// - 1: Low
        /// - 5: Medium
        /// - 10: High
        /// - 15: Very High
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

        /// <remarks>
        /// <strong>Property</strong>: queueSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of
        /// subtasks the queue can hold. Defaults to 10000.
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

        /// <remarks>
        /// <strong>Property</strong>: sendChannel: The channel for sending alerts.
        /// - For the default channel of the application group, use `default`.
        /// - For a specific channel for the job, use `sms`, `mail`, `phone`, or `webhook`.
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

        /// <remarks>
        /// <strong>Property</strong>: successNoticeEnable: Whether success notice is enabled for the job.
        /// </remarks>
        [JsiiProperty(name: "successNoticeEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SuccessNoticeEnable
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: taskAttemptInterval: \[Advanced] For `parallel` and `grid` jobs, this specifies the retry interval in
        /// seconds for a failed subtask. Defaults to 0.
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

        /// <remarks>
        /// <strong>Property</strong>: taskMaxAttempt: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of
        /// retries for a failed subtask. Defaults to 0.
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

        /// <remarks>
        /// <strong>Property</strong>: timeExpression: The time expression, which depends on the value of `TimeType`.
        /// - cron: A standard cron expression.
        /// - api: No time expression is required.
        /// - fixed_rate: A fixed interval in seconds. For example, a value of 30 triggers
        /// the job every 30 seconds.
        /// - second_delay: A fixed delay in seconds before the job is executed. Valid
        /// values: 1 to 60.
        /// - one_time: A specific time in `yyyy-MM-dd HH:mm:ss` format or a Unix timestamp
        /// in milliseconds. Example: "2022-10-10 10:10:00".
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

        /// <remarks>
        /// <strong>Property</strong>: timeout: The timeout threshold in seconds. Defaults to 7200.
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

        /// <remarks>
        /// <strong>Property</strong>: timeoutEnable: Specifies whether to enable timeout alerts. Valid values:
        /// - true: Enables timeout alerts.
        /// - false: Disables timeout alerts.
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

        /// <remarks>
        /// <strong>Property</strong>: timeoutKillEnable: Specifies whether to terminate the job upon timeout. Valid values:
        /// - true: Terminates the job if it times out.
        /// - false: The job is not terminated if it times out.
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

        /// <remarks>
        /// <strong>Property</strong>: timezone: The timezone of the job.
        /// </remarks>
        [JsiiProperty(name: "timezone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timezone
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: xAttrs: This parameter is required for `k8s` jobs.<br>For job tasks:
        /// {"resource":"job"}<br>For shell tasks:
        /// {"image":"busybox","resource":"shell"}<br><br>
        /// </remarks>
        [JsiiProperty(name: "xAttrs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? XAttrs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosJob`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosJobProps), fullyQualifiedName: "@alicloud/ros-cdk-schedulerx.RosJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Schedulerx.IRosJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: executeMode: The execute mode of the job.
            /// </remarks>
            [JsiiProperty(name: "executeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExecuteMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: The group ID of the job.
            /// </remarks>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: jobType: The type of the job.
            /// </remarks>
            [JsiiProperty(name: "jobType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object JobType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the job.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: namespace: The namespace of the job.
            /// </remarks>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: timeType: The time type of the job.
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

            /// <remarks>
            /// <strong>Property</strong>: attemptInterval: The retry interval for a failed job, in seconds. Defaults to 30.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "attemptInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AttemptInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: calendar: For a `cron` job, you can specify a custom calendar.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "calendar", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Calendar
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: className: The fully qualified class name of the job interface.
            /// Required for `java` jobs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "className", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClassName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: consumerSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of consumer
            /// threads per machine for processing subtasks. Defaults to 5.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "consumerSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConsumerSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: contactInfo: The contact information for the job.
            /// ><notice>
            /// This parameter is deprecated.
            /// ><\/notice>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contactInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-schedulerx.RosJob.ContactInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ContactInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: content: - For a `python`, `shell`, or `k8s` job, this parameter specifies the script
            /// content.
            /// - For a `go` job, the content must be in the following format:
            /// {"jobName":"HelloWorld"}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Content
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dataOffset: The time offset in seconds for a `cron` job.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataOffset", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataOffset
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the job.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dispatcherSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of threads
            /// for dispatching subtasks. Defaults to 5.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dispatcherSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DispatcherSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: failEnable: Specifies whether to enable alerts for failed jobs. Valid values:
            /// - true: Enables failure alerts.
            /// - false: Disables failure alerts.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: failTimes: The number of consecutive failures that triggers an alert.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailTimes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxAttempt: The maximum number of retries for a failed job. Defaults to 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxAttempt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxAttempt
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxConcurrency: The maximum number of concurrent job instances. Defaults to 1. If an existing job
            /// instance is still running, a new one will not be triggered, even if its scheduled
            /// time has passed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxConcurrency
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: missWorkerEnable: Specifies whether to send an alert when no worker is available to run the job.
            /// - true: Enables the alert.
            /// - false: Disables the alert.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "missWorkerEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MissWorkerEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: namespaceSource: This parameter is required only for specific third-party integrations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NamespaceSource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pageSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of subtasks
            /// retrieved per pull. Defaults to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PageSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: parameters: The parameters of the job.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Parameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: The job priority. Valid values:
            /// - 1: Low
            /// - 5: Medium
            /// - 10: High
            /// - 15: Very High
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: queueSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of
            /// subtasks the queue can hold. Defaults to 10000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queueSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueueSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sendChannel: The channel for sending alerts.
            /// - For the default channel of the application group, use `default`.
            /// - For a specific channel for the job, use `sms`, `mail`, `phone`, or `webhook`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sendChannel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SendChannel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: successNoticeEnable: Whether success notice is enabled for the job.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "successNoticeEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SuccessNoticeEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: taskAttemptInterval: \[Advanced] For `parallel` and `grid` jobs, this specifies the retry interval in
            /// seconds for a failed subtask. Defaults to 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "taskAttemptInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TaskAttemptInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: taskMaxAttempt: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of
            /// retries for a failed subtask. Defaults to 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "taskMaxAttempt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TaskMaxAttempt
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timeExpression: The time expression, which depends on the value of `TimeType`.
            /// - cron: A standard cron expression.
            /// - api: No time expression is required.
            /// - fixed_rate: A fixed interval in seconds. For example, a value of 30 triggers
            /// the job every 30 seconds.
            /// - second_delay: A fixed delay in seconds before the job is executed. Valid
            /// values: 1 to 60.
            /// - one_time: A specific time in `yyyy-MM-dd HH:mm:ss` format or a Unix timestamp
            /// in milliseconds. Example: "2022-10-10 10:10:00".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeExpression
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timeout: The timeout threshold in seconds. Defaults to 7200.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timeoutEnable: Specifies whether to enable timeout alerts. Valid values:
            /// - true: Enables timeout alerts.
            /// - false: Disables timeout alerts.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeoutEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timeoutKillEnable: Specifies whether to terminate the job upon timeout. Valid values:
            /// - true: Terminates the job if it times out.
            /// - false: The job is not terminated if it times out.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutKillEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeoutKillEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timezone: The timezone of the job.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timezone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timezone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: xAttrs: This parameter is required for `k8s` jobs.<br>For job tasks:
            /// {"resource":"job"}<br>For shell tasks:
            /// {"image":"busybox","resource":"shell"}<br><br>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xAttrs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? XAttrs
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
