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

        /// <summary>Property attemptInterval: The attempt interval of the job.</summary>
        [JsiiProperty(name: "attemptInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AttemptInterval
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property calendar: The calendar of the job.</summary>
        [JsiiProperty(name: "calendar", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Calendar
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property className: The class name of the job.</summary>
        [JsiiProperty(name: "className", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClassName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property consumerSize: The consumer size of the job.</summary>
        [JsiiProperty(name: "consumerSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConsumerSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property contactInfo: The contact info of the job.</summary>
        [JsiiProperty(name: "contactInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-schedulerx.RosJob.ContactInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContactInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property content: The content of the job.</summary>
        [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Content
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataOffset: The data offset of the job.</summary>
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

        /// <summary>Property dispatcherSize: The dispatcher size of the job.</summary>
        [JsiiProperty(name: "dispatcherSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DispatcherSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property failEnable: Whether fail is enabled for the job.</summary>
        [JsiiProperty(name: "failEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property failTimes: The fail times of the job.</summary>
        [JsiiProperty(name: "failTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailTimes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxAttempt: The max attempt of the job.</summary>
        [JsiiProperty(name: "maxAttempt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxAttempt
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxConcurrency: The max concurrency of the job.</summary>
        [JsiiProperty(name: "maxConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxConcurrency
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property missWorkerEnable: Whether miss worker is enabled for the job.</summary>
        [JsiiProperty(name: "missWorkerEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MissWorkerEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property namespaceSource: The namespace source of the job.</summary>
        [JsiiProperty(name: "namespaceSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NamespaceSource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pageSize: Advanced configuration for parallel grid tasks, the default number of sub-tasks pulled at a time is 100.</summary>
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

        /// <summary>Property priority: The priority of the job.</summary>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Priority
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property queueSize: The queue size of the job.</summary>
        [JsiiProperty(name: "queueSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueueSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sendChannel: The send channel of the job.</summary>
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

        /// <summary>Property taskAttemptInterval: The task attempt interval of the job.</summary>
        [JsiiProperty(name: "taskAttemptInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TaskAttemptInterval
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property taskMaxAttempt: The task max attempt of the job.</summary>
        [JsiiProperty(name: "taskMaxAttempt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TaskMaxAttempt
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeExpression: The time expression of the job.</summary>
        [JsiiProperty(name: "timeExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TimeExpression
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeout: The timeout of the job.</summary>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeoutEnable: Whether timeout is enabled for the job.</summary>
        [JsiiProperty(name: "timeoutEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TimeoutEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeoutKillEnable: Whether timeout kill is enabled for the job.</summary>
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

        /// <summary>Property xAttrs: The extended attributes of the job.</summary>
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

            /// <summary>Property attemptInterval: The attempt interval of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "attemptInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AttemptInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property calendar: The calendar of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "calendar", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Calendar
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property className: The class name of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "className", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClassName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property consumerSize: The consumer size of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "consumerSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConsumerSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property contactInfo: The contact info of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "contactInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-schedulerx.RosJob.ContactInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ContactInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property content: The content of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Content
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataOffset: The data offset of the job.</summary>
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

            /// <summary>Property dispatcherSize: The dispatcher size of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dispatcherSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DispatcherSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property failEnable: Whether fail is enabled for the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "failEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property failTimes: The fail times of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "failTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailTimes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxAttempt: The max attempt of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "maxAttempt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxAttempt
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxConcurrency: The max concurrency of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "maxConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxConcurrency
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property missWorkerEnable: Whether miss worker is enabled for the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "missWorkerEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MissWorkerEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property namespaceSource: The namespace source of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NamespaceSource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pageSize: Advanced configuration for parallel grid tasks, the default number of sub-tasks pulled at a time is 100.</summary>
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

            /// <summary>Property priority: The priority of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property queueSize: The queue size of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "queueSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueueSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sendChannel: The send channel of the job.</summary>
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

            /// <summary>Property taskAttemptInterval: The task attempt interval of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "taskAttemptInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TaskAttemptInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property taskMaxAttempt: The task max attempt of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "taskMaxAttempt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TaskMaxAttempt
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeExpression: The time expression of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "timeExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeExpression
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeout: The timeout of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeoutEnable: Whether timeout is enabled for the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeoutEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeoutKillEnable: Whether timeout kill is enabled for the job.</summary>
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

            /// <summary>Property xAttrs: The extended attributes of the job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "xAttrs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? XAttrs
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
