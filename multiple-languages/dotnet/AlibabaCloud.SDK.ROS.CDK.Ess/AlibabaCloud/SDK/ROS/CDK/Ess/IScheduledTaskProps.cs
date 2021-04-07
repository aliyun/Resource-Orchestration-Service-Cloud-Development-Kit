using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `ALIYUN::ESS::ScheduledTask`.</summary>
    [JsiiInterface(nativeType: typeof(IScheduledTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScheduledTaskProps")]
    public interface IScheduledTaskProps
    {
        /// <summary>Property launchTime: Time point at which the scheduled task is triggered.</summary>
        /// <remarks>
        /// The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        /// If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
        /// A time point 90 days after creation or modification cannot be entered.
        /// </remarks>
        [JsiiProperty(name: "launchTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LaunchTime
        {
            get;
        }

        /// <summary>Property scheduledAction: Operations performed when the scheduled task is triggered.</summary>
        /// <remarks>
        /// Fill in the unique identifier of the scaling rule.
        /// </remarks>
        [JsiiProperty(name: "scheduledAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScheduledAction
        {
            get;
        }

        /// <summary>Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property launchExpirationTime: Time period within which the failed scheduled task is retried.</summary>
        /// <remarks>
        /// The default value is 600s.
        /// Value range: [0, 21600]
        /// </remarks>
        [JsiiProperty(name: "launchExpirationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchExpirationTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property recurrenceEndTime: End time of the scheduled task to be repeated.</summary>
        /// <remarks>
        /// The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        /// A time point 90 days after creation or modification cannot be entered.
        /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        /// </remarks>
        [JsiiProperty(name: "recurrenceEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RecurrenceEndTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property recurrenceType: Type of the scheduled task to be repeated.</summary>
        /// <remarks>
        /// Optional values:
        ///
        /// <list type="bullet">
        /// <description>Daily: Recurrence interval by day for a scheduled task.</description>
        /// <description>Weekly: Recurrence interval by week for a scheduled task.</description>
        /// <description>Monthly: Recurrence interval by month for a scheduled task.
        /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "recurrenceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RecurrenceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property recurrenceValue: Value of the scheduled task to be repeated.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Daily: Only one value in the range [1,31] can be filled.</description>
        /// <description>Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".</description>
        /// <description>Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
        /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "recurrenceValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RecurrenceValue
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long.</summary>
        /// <remarks>
        /// It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
        /// The account name is unique in the same region.
        /// If this parameter is not specified, the default value ScheduledScalingTaskId is used.
        /// </remarks>
        [JsiiProperty(name: "scheduledTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScheduledTaskName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property taskEnabled: Whether to enable the scheduled task.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>When the parameter is set to true, the task is enabled.</description>
        /// <description>When the parameter is set to false, the task is disabled.
        /// The default value is true.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "taskEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TaskEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ESS::ScheduledTask`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IScheduledTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScheduledTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IScheduledTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property launchTime: Time point at which the scheduled task is triggered.</summary>
            /// <remarks>
            /// The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
            /// If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
            /// A time point 90 days after creation or modification cannot be entered.
            /// </remarks>
            [JsiiProperty(name: "launchTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LaunchTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scheduledAction: Operations performed when the scheduled task is triggered.</summary>
            /// <remarks>
            /// Fill in the unique identifier of the scaling rule.
            /// </remarks>
            [JsiiProperty(name: "scheduledAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScheduledAction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property launchExpirationTime: Time period within which the failed scheduled task is retried.</summary>
            /// <remarks>
            /// The default value is 600s.
            /// Value range: [0, 21600]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchExpirationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchExpirationTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property recurrenceEndTime: End time of the scheduled task to be repeated.</summary>
            /// <remarks>
            /// The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
            /// A time point 90 days after creation or modification cannot be entered.
            /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recurrenceEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RecurrenceEndTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property recurrenceType: Type of the scheduled task to be repeated.</summary>
            /// <remarks>
            /// Optional values:
            ///
            /// <list type="bullet">
            /// <description>Daily: Recurrence interval by day for a scheduled task.</description>
            /// <description>Weekly: Recurrence interval by week for a scheduled task.</description>
            /// <description>Monthly: Recurrence interval by month for a scheduled task.
            /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recurrenceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RecurrenceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property recurrenceValue: Value of the scheduled task to be repeated.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Daily: Only one value in the range [1,31] can be filled.</description>
            /// <description>Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".</description>
            /// <description>Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
            /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recurrenceValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RecurrenceValue
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long.</summary>
            /// <remarks>
            /// It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
            /// The account name is unique in the same region.
            /// If this parameter is not specified, the default value ScheduledScalingTaskId is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduledTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScheduledTaskName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property taskEnabled: Whether to enable the scheduled task.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>When the parameter is set to true, the task is enabled.</description>
            /// <description>When the parameter is set to false, the task is disabled.
            /// The default value is true.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "taskEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TaskEnabled
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
