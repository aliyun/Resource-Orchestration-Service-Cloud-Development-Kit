using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `RosScheduledTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scheduledtask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosScheduledTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScheduledTaskProps")]
    public interface IRosScheduledTaskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: launchTime: Time point at which the scheduled task is triggered.
        /// The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        /// If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
        /// A time point 90 days after creation or modification cannot be entered.
        /// </remarks>
        [JsiiProperty(name: "launchTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LaunchTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
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
        /// <strong>Property</strong>: desiredCapacity: The ID of the scaling group whose number of instances must be modified when the scheduled task is triggered. If you specify the **ScalingGroupId** parameter for a scheduled task, you must specify the minimum, maximum, or expected numbers of instances for a scaling group in the scheduled task. That is, you must specify at least one of the **MinValue**, **MaxValue**, and **DesiredCapacity** parameters.
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

        /// <remarks>
        /// <strong>Property</strong>: launchExpirationTime: Time period within which the failed scheduled task is retried.
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

        /// <remarks>
        /// <strong>Property</strong>: maxValue: The expected number of instances in the scaling group if you specify the ScalingGroupId parameter.
        /// **Note**: You must specify the **DesiredCapacity** parameter when you create a scaling group.
        /// </remarks>
        [JsiiProperty(name: "maxValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxValue
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: minValue: The maximum number of instances in the scaling group if you specify the ScalingGroupId parameter.
        /// </remarks>
        [JsiiProperty(name: "minValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinValue
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: recurrenceEndTime: End time of the scheduled task to be repeated.
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

        /// <remarks>
        /// <strong>Property</strong>: recurrenceType: Type of the scheduled task to be repeated. Optional values:
        /// - Daily: Recurrence interval by day for a scheduled task.
        /// - Weekly: Recurrence interval by week for a scheduled task.
        /// - Monthly: Recurrence interval by month for a scheduled task.
        /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
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

        /// <remarks>
        /// <strong>Property</strong>: recurrenceValue: Value of the scheduled task to be repeated.
        /// - Daily: Only one value in the range [1,31] can be filled.
        /// - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
        /// - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
        /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
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

        /// <remarks>
        /// <strong>Property</strong>: scalingGroupId: The globally unique ID of the scheduled task. The globally unique ID is generated by the system.
        /// **Note**: You cannot specify the **ScheduledAction** and **ScalingGroupId** parameters at the same time.
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

        /// <remarks>
        /// <strong>Property</strong>: scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
        /// **Note**: You cannot specify the **ScheduledAction** and **ScalingGroupId** parameters at the same time.
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

        /// <remarks>
        /// <strong>Property</strong>: scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper\/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
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

        /// <remarks>
        /// <strong>Property</strong>: taskEnabled: Whether to enable the scheduled task.
        /// - When the parameter is set to true, the task is enabled.
        /// - When the parameter is set to false, the task is disabled.
        /// The default value is true.
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

        /// <summary>Properties for defining a `RosScheduledTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scheduledtask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosScheduledTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScheduledTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IRosScheduledTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: launchTime: Time point at which the scheduled task is triggered.
            /// The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
            /// If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
            /// A time point 90 days after creation or modification cannot be entered.
            /// </remarks>
            [JsiiProperty(name: "launchTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LaunchTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: desiredCapacity: The ID of the scaling group whose number of instances must be modified when the scheduled task is triggered. If you specify the **ScalingGroupId** parameter for a scheduled task, you must specify the minimum, maximum, or expected numbers of instances for a scaling group in the scheduled task. That is, you must specify at least one of the **MinValue**, **MaxValue**, and **DesiredCapacity** parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "desiredCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DesiredCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: launchExpirationTime: Time period within which the failed scheduled task is retried.
            /// The default value is 600s.
            /// Value range: [0, 21600]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchExpirationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchExpirationTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxValue: The expected number of instances in the scaling group if you specify the ScalingGroupId parameter.
            /// **Note**: You must specify the **DesiredCapacity** parameter when you create a scaling group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxValue
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: minValue: The maximum number of instances in the scaling group if you specify the ScalingGroupId parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinValue
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: recurrenceEndTime: End time of the scheduled task to be repeated.
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

            /// <remarks>
            /// <strong>Property</strong>: recurrenceType: Type of the scheduled task to be repeated. Optional values:
            /// - Daily: Recurrence interval by day for a scheduled task.
            /// - Weekly: Recurrence interval by week for a scheduled task.
            /// - Monthly: Recurrence interval by month for a scheduled task.
            /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recurrenceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RecurrenceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: recurrenceValue: Value of the scheduled task to be repeated.
            /// - Daily: Only one value in the range [1,31] can be filled.
            /// - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
            /// - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
            /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recurrenceValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RecurrenceValue
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingGroupId: The globally unique ID of the scheduled task. The globally unique ID is generated by the system.
            /// **Note**: You cannot specify the **ScheduledAction** and **ScalingGroupId** parameters at the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
            /// **Note**: You cannot specify the **ScheduledAction** and **ScalingGroupId** parameters at the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduledAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScheduledAction
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper\/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
            /// The account name is unique in the same region.
            /// If this parameter is not specified, the default value ScheduledScalingTaskId is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduledTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScheduledTaskName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: taskEnabled: Whether to enable the scheduled task.
            /// - When the parameter is set to true, the task is enabled.
            /// - When the parameter is set to false, the task is disabled.
            /// The default value is true.
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
