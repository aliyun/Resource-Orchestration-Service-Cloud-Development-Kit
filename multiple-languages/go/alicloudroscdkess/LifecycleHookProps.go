package alicloudroscdkess


// Properties for defining a `LifecycleHook`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-lifecyclehook
type LifecycleHookProps struct {
	// Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:   SCALE_OUT: scale-out event   SCALE_IN: scale-in event.
	LifecycleTransition interface{} `field:"required" json:"lifecycleTransition" yaml:"lifecycleTransition"`
	// Property scalingGroupId: The ID of the scaling group.
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	// Property defaultResult: The action that Auto Scaling performs after the lifecycle hook times out.
	//
	// Valid
	// values:
	// *   CONTINUE: Auto Scaling continues to respond to a scale-in or scale-out
	// request.
	// *   ABANDON: Auto Scaling releases ECS instances that are created during
	// scale-out activities or removes ECS instances from the scaling group during
	// scale-in activities.
	// *   ROLLBACK: For scale-in activities, Auto Scaling rejects the requests to
	// release ECS instances but rolls back ECS instances. For scale-out activities, the
	// ROLLBACK setting has the same effect as the `ABANDON` setting.
	// If a scaling group has multiple lifecycle hooks in effect and you set the
	// `DefaultResult` parameter for one of the lifecycle hooks to `ABANDON` or
	// `ROLLBACK`, the following rule applies to scale-in activities: When the lifecycle
	// hook whose DefaultResult parameter is set to ABANDON or ROLLBACK times out, other
	// lifecycle hooks time out ahead of schedule. In other cases, Auto Scaling performs
	// the action only after all lifecycle hooks time out. The action that Auto Scaling
	// performs is specified by the DefaultResult parameter of the last lifecycle hook
	// that times out.
	// Default value: CONTINUE.
	DefaultResult interface{} `field:"optional" json:"defaultResult" yaml:"defaultResult"`
	// Property heartbeatTimeout: The period of time before the lifecycle hook times out.
	//
	// When the lifecycle hook
	// times out, Auto Scaling performs the action that is specified by the
	// DefaultResult parameter. Valid values: 30 to 21600. Unit: seconds.
	// You can call the [RecordLifecycleActionHeartbeat]() operation to extend the
	// period of time before a lifecycle hook times out. You can also call the
	// [CompleteLifecycleAction]() operation to end a lifecycle hook ahead of schedule.
	// Default value: 600.
	HeartbeatTimeout interface{} `field:"optional" json:"heartbeatTimeout" yaml:"heartbeatTimeout"`
	// Property lifecycleHookName: The name of the lifecycle hook.
	//
	// Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
	// Default value: Lifecycle Hook ID.
	LifecycleHookName interface{} `field:"optional" json:"lifecycleHookName" yaml:"lifecycleHookName"`
	// Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification recipient.
	//
	// If you do not specify this parameter, no notification is sent when the lifecycle hook takes effect. If you specify this parameter, the value must be in one of the following formats:
	// - If you specify a Simple Message Queue (SMQ, formerly MNS) as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:queue\/{queuename} format.
	// - If you specify an SMQ topic as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:topic\/{topicname} format.
	// - If you specify a CloudOps Orchestration Service (OOS) template as the notification recipient, specify the value in the acs:oos:{region-id}:{account-id}:template\/{templatename} format.
	// - If you specify an event bus as the notification recipient, specify the value in the acs:eventbridge:{region-id}:{account-id}:eventbus\/default format.
	//
	// The variables in the preceding value formats have the following meanings:
	// - region-id: the region ID of your scaling group.
	// - account-id: the ID of the Alibaba Cloud account. IDs of Resource Access Management (RAM) users are not supported.
	// - queuename: the name of the SMQ queue.
	// - topicname: the name of the SMQ topic.
	// - templatename: the name of the OOS template.
	NotificationArn interface{} `field:"optional" json:"notificationArn" yaml:"notificationArn"`
	// Property notificationMetadata: The fixed string that is included in a notification that Auto Scaling sends when the lifecycle hook takes effect.
	//
	// Auto Scaling sends the value of the
	// NotificationMetadata parameter together with the notification. This helps you
	// categorize your notifications. If you specify this parameter, you must also
	// specify the `NotificationArn` parameter. The value of this parameter cannot
	// exceed 4,096 characters in length.
	// If you use the `NotificationArn` parameter to specify a public or custom OOS
	// template, the value of the `NotificationMetadata` parameter must be a JSON string
	// that contains the OOS template parameters.
	// For example, your OOS template includes the following parameters:
	// `{"dbInstanceId": "dds-bp17661e0135****", "modifyMode": "Append"}`,
	// `dbInstanceId`, and `modifyMode`. Specific parameters that are defined in your
	// OOS template have default values. When you specify the `NotificationMetadata`
	// parameter, specify parameters that do not have default values. If you specify
	// parameters that have default values, the default values are overwritten. The
	// default values of the following parameters must be retained to obtain information
	// about scaling activities that are in progress:
	// *   regionId: the region ID of the scaling activity that is in progress. Default
	// value: ${regionId}.
	// *   instanceIds: the IDs of ECS instances that are scaled in the scaling
	// activity. Default value: ${instanceIds}.
	// *   lifecycleHookId: the ID of the lifecycle hook. Default value:
	// ${lifecycleHookId}.
	// *   lifecycleActionToken: the token of the lifecycle hook. You can use the token
	// to end the timeout period of the lifecycle hook ahead of schedule. Default value:
	// ${lifecycleActionToken}
	// *   scalingGroupId: the ID of the scaling group in which the scaling activity is
	// executed. Default value: ${scalingGroupId}.
	// *   lifecycleActionResult: the action that Auto Scaling performs after the
	// lifecycle hook times out. If the OOS template fails to be executed, the lifecycle
	// hook times out ahead of schedule. If you set the `DefalutResult` parameter to
	// `ROLLBACK`, the default value of this parameter is `ROLLBACK`. If you set the
	// `DefaultResult` parameter to other values, the default value of this parameter is
	// ABANDON.
	// Note**
	// *   You can specify a value for the `lifecycleActionResult` parameter to
	// overwrite the default value. Valid values: ABANDON, CONTINUE, ROLLBACK, and
	// ${lifecycleActionResult}. A value of `${lifecycleActionResult}` specifies that
	// the value of the lifecycleActionResult parameter is the same as the value of the
	// DefaultResult parameter.
	// *   You can view the details of the OOS template that you specify in the OOS
	// console.
	NotificationMetadata interface{} `field:"optional" json:"notificationMetadata" yaml:"notificationMetadata"`
}

