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
        [JsiiProperty(name: "launchTime", typeJson: "{\"primitive\":\"string\"}")]
        string LaunchTime
        {
            get;
        }

        /// <summary>Property scheduledAction: Operations performed when the scheduled task is triggered.</summary>
        /// <remarks>
        /// Fill in the unique identifier of the scaling rule.
        /// </remarks>
        [JsiiProperty(name: "scheduledAction", typeJson: "{\"primitive\":\"string\"}")]
        string ScheduledAction
        {
            get;
        }

        /// <summary>Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
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
        [JsiiProperty(name: "launchExpirationTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? LaunchExpirationTime
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
        [JsiiProperty(name: "recurrenceEndTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RecurrenceEndTime
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
        [JsiiProperty(name: "recurrenceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RecurrenceType
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
        [JsiiProperty(name: "recurrenceValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RecurrenceValue
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
        [JsiiProperty(name: "scheduledTaskName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ScheduledTaskName
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
            [JsiiProperty(name: "launchTime", typeJson: "{\"primitive\":\"string\"}")]
            public string LaunchTime
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property scheduledAction: Operations performed when the scheduled task is triggered.</summary>
            /// <remarks>
            /// Fill in the unique identifier of the scaling rule.
            /// </remarks>
            [JsiiProperty(name: "scheduledAction", typeJson: "{\"primitive\":\"string\"}")]
            public string ScheduledAction
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property launchExpirationTime: Time period within which the failed scheduled task is retried.</summary>
            /// <remarks>
            /// The default value is 600s.
            /// Value range: [0, 21600]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchExpirationTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? LaunchExpirationTime
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property recurrenceEndTime: End time of the scheduled task to be repeated.</summary>
            /// <remarks>
            /// The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
            /// A time point 90 days after creation or modification cannot be entered.
            /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recurrenceEndTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RecurrenceEndTime
            {
                get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "recurrenceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RecurrenceType
            {
                get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "recurrenceValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RecurrenceValue
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long.</summary>
            /// <remarks>
            /// It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
            /// The account name is unique in the same region.
            /// If this parameter is not specified, the default value ScheduledScalingTaskId is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduledTaskName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ScheduledTaskName
            {
                get => GetInstanceProperty<string?>();
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
