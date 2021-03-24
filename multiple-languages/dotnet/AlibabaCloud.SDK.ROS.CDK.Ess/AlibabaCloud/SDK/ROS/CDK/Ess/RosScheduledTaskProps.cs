using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ESS::ScheduledTask`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.RosScheduledTaskProps")]
    public class RosScheduledTaskProps : AlibabaCloud.SDK.ROS.CDK.Ess.IRosScheduledTaskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: launchTime: Time point at which the scheduled task is triggered.
        /// The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        /// If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
        /// A time point 90 days after creation or modification cannot be entered.
        /// </remarks>
        [JsiiProperty(name: "launchTime", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LaunchTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
        /// </remarks>
        [JsiiProperty(name: "scheduledAction", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ScheduledAction
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: launchExpirationTime: Time period within which the failed scheduled task is retried.
        /// The default value is 600s.
        /// Value range: [0, 21600]
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "launchExpirationTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? LaunchExpirationTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: recurrenceEndTime: End time of the scheduled task to be repeated.
        /// The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        /// A time point 90 days after creation or modification cannot be entered.
        /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "recurrenceEndTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RecurrenceEndTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: recurrenceType: Type of the scheduled task to be repeated. Optional values:
        /// - Daily: Recurrence interval by day for a scheduled task.
        /// - Weekly: Recurrence interval by week for a scheduled task.
        /// - Monthly: Recurrence interval by month for a scheduled task.
        /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "recurrenceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RecurrenceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: recurrenceValue: Value of the scheduled task to be repeated.
        /// - Daily: Only one value in the range [1,31] can be filled.
        /// - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
        /// - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
        /// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "recurrenceValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RecurrenceValue
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
        /// The account name is unique in the same region.
        /// If this parameter is not specified, the default value ScheduledScalingTaskId is used.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scheduledTaskName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ScheduledTaskName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: taskEnabled: Whether to enable the scheduled task.
        /// - When the parameter is set to true, the task is enabled.
        /// - When the parameter is set to false, the task is disabled.
        /// The default value is true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "taskEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TaskEnabled
        {
            get;
            set;
        }
    }
}
