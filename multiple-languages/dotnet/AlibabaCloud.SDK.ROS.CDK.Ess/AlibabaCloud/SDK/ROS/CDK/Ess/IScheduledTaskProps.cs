using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `ScheduledTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scheduledtask
    /// </remarks>
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

        /// <summary>Property desiredCapacity: The expected number of instances in the scaling group if the scaling method of the scaling group is to specify the number of instances.</summary>
        /// <remarks>
        ///     You must specify the <c>DesiredCapacity</c> parameter when you create a scaling
        ///     group.
        /// </remarks>
        [JsiiProperty(name: "desiredCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DesiredCapacity
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

        /// <summary>Property maxValue: The maximum number of instances in the scaling group if the scaling method of the scaling group is to specify the number of instances.</summary>
        [JsiiProperty(name: "maxValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxValue
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property minValue: The minimum number of instances in the scaling group if the scaling method of the scaling group is to specify the number of instances.</summary>
        [JsiiProperty(name: "minValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinValue
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property recurrenceEndTime: The end time of the scheduled task.</summary>
        /// <remarks>
        /// Specify the time in the ISO 8601 standard in
        /// the YYYY-MM-DDThh:mmZ format.
        /// The time must be in UTC. You cannot enter a point in time that is later than 365
        /// days from the point in time at which the scheduled task is created.
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

        /// <summary>Property recurrenceType: The interval at which the scheduled task is repeatedly executed.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Daily: The scheduled task is executed once every specified number of days.</description>
        /// <description>Weekly: The scheduled task is executed on each specified day of a week.</description>
        /// <description>Monthly: The scheduled task is executed on each specified day of a month.</description>
        /// <description>Cron: The scheduled task is executed based on the specified cron expression.
        /// You must specify the <c>RecurrenceType</c> and <c>RecurrenceValue</c> parameters at the
        /// same time.</description>
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
        /// <description>Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.</description>
        /// <description>Cron: A cron expression is written in UTC time and consists of the following fields: minute, hour, day, month, and week. The expression can contain the letters L and W and the following wildcard characters: commas (,), question marks (?), hyphens (-), asterisks (*), number signs (#), and forward slashes (/).
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

        /// <summary>Property scalingGroupId: The ID of the scaling group whose number of instances is changed when the scheduled task is triggered.</summary>
        /// <remarks>
        /// If you specify the <c>ScalingGroupId</c> parameter for a
        /// scheduled task, the scaling method of the scheduled task is to specify the number
        /// of instances in the scaling group. In this case, you must specify at least one of
        /// the <c>MinValue</c>, <c>MaxValue</c>, and <c>DesiredCapacity</c> parameters.
        ///
        ///     You cannot specify the <c>ScheduledAction</c> and <c>ScalingGroupId</c> parameters at
        ///     the same time.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scheduledAction: The scaling rule that you want to execute when the scheduled task is triggered.</summary>
        /// <remarks>
        /// Specify the unique identifier of the scaling rule. If you specify the
        /// <c>ScheduledAction</c> parameter, you must select an existing scaling rule for the
        /// scheduled task.
        ///
        ///     You cannot specify the <c>ScheduledAction</c> and <c>ScalingGroupId</c> parameters at
        ///     the same time.
        /// </remarks>
        [JsiiProperty(name: "scheduledAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScheduledAction
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scheduledTaskName: The name of the scheduled task.</summary>
        /// <remarks>
        /// The name must be 2 to 64 characters in length and
        /// can contain letters, digits, underscores (_), hyphens (-), and periods (.). The
        /// name must start with a letter or a digit. The name of the scheduled task must be
        /// unique in the region and within the account.
        /// By default, the value of the <c>ScheduledTaskId</c> parameter is used.
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

        /// <summary>Properties for defining a `ScheduledTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scheduledtask
        /// </remarks>
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

            /// <summary>Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property desiredCapacity: The expected number of instances in the scaling group if the scaling method of the scaling group is to specify the number of instances.</summary>
            /// <remarks>
            ///     You must specify the <c>DesiredCapacity</c> parameter when you create a scaling
            ///     group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "desiredCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DesiredCapacity
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

            /// <summary>Property maxValue: The maximum number of instances in the scaling group if the scaling method of the scaling group is to specify the number of instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "maxValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxValue
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property minValue: The minimum number of instances in the scaling group if the scaling method of the scaling group is to specify the number of instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "minValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinValue
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property recurrenceEndTime: The end time of the scheduled task.</summary>
            /// <remarks>
            /// Specify the time in the ISO 8601 standard in
            /// the YYYY-MM-DDThh:mmZ format.
            /// The time must be in UTC. You cannot enter a point in time that is later than 365
            /// days from the point in time at which the scheduled task is created.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recurrenceEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RecurrenceEndTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property recurrenceType: The interval at which the scheduled task is repeatedly executed.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Daily: The scheduled task is executed once every specified number of days.</description>
            /// <description>Weekly: The scheduled task is executed on each specified day of a week.</description>
            /// <description>Monthly: The scheduled task is executed on each specified day of a month.</description>
            /// <description>Cron: The scheduled task is executed based on the specified cron expression.
            /// You must specify the <c>RecurrenceType</c> and <c>RecurrenceValue</c> parameters at the
            /// same time.</description>
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
            /// <description>Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.</description>
            /// <description>Cron: A cron expression is written in UTC time and consists of the following fields: minute, hour, day, month, and week. The expression can contain the letters L and W and the following wildcard characters: commas (,), question marks (?), hyphens (-), asterisks (*), number signs (#), and forward slashes (/).
            /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recurrenceValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RecurrenceValue
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingGroupId: The ID of the scaling group whose number of instances is changed when the scheduled task is triggered.</summary>
            /// <remarks>
            /// If you specify the <c>ScalingGroupId</c> parameter for a
            /// scheduled task, the scaling method of the scheduled task is to specify the number
            /// of instances in the scaling group. In this case, you must specify at least one of
            /// the <c>MinValue</c>, <c>MaxValue</c>, and <c>DesiredCapacity</c> parameters.
            ///
            ///     You cannot specify the <c>ScheduledAction</c> and <c>ScalingGroupId</c> parameters at
            ///     the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scheduledAction: The scaling rule that you want to execute when the scheduled task is triggered.</summary>
            /// <remarks>
            /// Specify the unique identifier of the scaling rule. If you specify the
            /// <c>ScheduledAction</c> parameter, you must select an existing scaling rule for the
            /// scheduled task.
            ///
            ///     You cannot specify the <c>ScheduledAction</c> and <c>ScalingGroupId</c> parameters at
            ///     the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduledAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScheduledAction
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scheduledTaskName: The name of the scheduled task.</summary>
            /// <remarks>
            /// The name must be 2 to 64 characters in length and
            /// can contain letters, digits, underscores (_), hyphens (-), and periods (.). The
            /// name must start with a letter or a digit. The name of the scheduled task must be
            /// unique in the region and within the account.
            /// By default, the value of the <c>ScheduledTaskId</c> parameter is used.
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
