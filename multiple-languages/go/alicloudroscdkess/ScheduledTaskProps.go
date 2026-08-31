package alicloudroscdkess


// Properties for defining a `ScheduledTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scheduledtask
type ScheduledTaskProps struct {
	// Property launchTime: Time point at which the scheduled task is triggered.
	//
	// The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
	// If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
	// A time point 90 days after creation or modification cannot be entered.
	LaunchTime interface{} `field:"required" json:"launchTime" yaml:"launchTime"`
	// Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property desiredCapacity: The expected number of instances in the scaling group if the scaling method of the scaling group is to specify the number of instances.
	//
	// >  You must specify the `DesiredCapacity` parameter when you create a scaling
	// group.
	DesiredCapacity interface{} `field:"optional" json:"desiredCapacity" yaml:"desiredCapacity"`
	// Property launchExpirationTime: Time period within which the failed scheduled task is retried.
	//
	// The default value is 600s.
	// Value range: [0, 21600].
	LaunchExpirationTime interface{} `field:"optional" json:"launchExpirationTime" yaml:"launchExpirationTime"`
	// Property maxValue: The maximum number of instances in the scaling group if the scaling method of the scaling group is to specify the number of instances.
	MaxValue interface{} `field:"optional" json:"maxValue" yaml:"maxValue"`
	// Property minValue: The minimum number of instances in the scaling group if the scaling method of the scaling group is to specify the number of instances.
	MinValue interface{} `field:"optional" json:"minValue" yaml:"minValue"`
	// Property recurrenceEndTime: The end time of the scheduled task.
	//
	// Specify the time in the ISO 8601 standard in
	// the YYYY-MM-DDThh:mmZ format.
	// The time must be in UTC. You cannot enter a point in time that is later than 365
	// days from the point in time at which the scheduled task is created.
	RecurrenceEndTime interface{} `field:"optional" json:"recurrenceEndTime" yaml:"recurrenceEndTime"`
	// Property recurrenceType: The interval at which the scheduled task is repeatedly executed.
	//
	// Valid values:
	// *   Daily: The scheduled task is executed once every specified number of days.
	// *   Weekly: The scheduled task is executed on each specified day of a week.
	// *   Monthly: The scheduled task is executed on each specified day of a month.
	// *   Cron: The scheduled task is executed based on the specified cron expression.
	// You must specify the `RecurrenceType` and `RecurrenceValue` parameters at the
	// same time.
	RecurrenceType interface{} `field:"optional" json:"recurrenceType" yaml:"recurrenceType"`
	// Property recurrenceValue: Value of the scheduled task to be repeated.
	//
	// - Daily: Only one value in the range [1,31] can be filled.
	// - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
	// - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
	// - Cron: A cron expression is written in UTC time and consists of the following fields: minute, hour, day, month, and week. The expression can contain the letters L and W and the following wildcard characters: commas (,), question marks (?), hyphens (-), asterisks (*), number signs (#), and forward slashes (\/).
	// RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
	RecurrenceValue interface{} `field:"optional" json:"recurrenceValue" yaml:"recurrenceValue"`
	// Property scalingGroupId: The ID of the scaling group whose number of instances is changed when the scheduled task is triggered.
	//
	// If you specify the `ScalingGroupId` parameter for a
	// scheduled task, the scaling method of the scheduled task is to specify the number
	// of instances in the scaling group. In this case, you must specify at least one of
	// the `MinValue`, `MaxValue`, and `DesiredCapacity` parameters.
	// >  You cannot specify the `ScheduledAction` and `ScalingGroupId` parameters at
	// the same time.
	ScalingGroupId interface{} `field:"optional" json:"scalingGroupId" yaml:"scalingGroupId"`
	// Property scheduledAction: The scaling rule that you want to execute when the scheduled task is triggered.
	//
	// Specify the unique identifier of the scaling rule. If you specify the
	// `ScheduledAction` parameter, you must select an existing scaling rule for the
	// scheduled task.
	// >  You cannot specify the `ScheduledAction` and `ScalingGroupId` parameters at
	// the same time.
	ScheduledAction interface{} `field:"optional" json:"scheduledAction" yaml:"scheduledAction"`
	// Property scheduledTaskName: The name of the scheduled task.
	//
	// The name must be 2 to 64 characters in length and
	// can contain letters, digits, underscores (_), hyphens (-), and periods (.). The
	// name must start with a letter or a digit. The name of the scheduled task must be
	// unique in the region and within the account.
	// By default, the value of the `ScheduledTaskId` parameter is used.
	ScheduledTaskName interface{} `field:"optional" json:"scheduledTaskName" yaml:"scheduledTaskName"`
	// Property taskEnabled: Whether to enable the scheduled task.
	//
	// - When the parameter is set to true, the task is enabled.
	// - When the parameter is set to false, the task is disabled.
	// The default value is true.
	TaskEnabled interface{} `field:"optional" json:"taskEnabled" yaml:"taskEnabled"`
}

