package alicloudroscdkess


// Properties for defining a `LifecycleHook`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-lifecyclehook
type LifecycleHookProps struct {
	// Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:   SCALE_OUT: scale-out event   SCALE_IN: scale-in event.
	LifecycleTransition interface{} `field:"required" json:"lifecycleTransition" yaml:"lifecycleTransition"`
	// Property scalingGroupId: The ID of the scaling group.
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	// Property defaultResult: The action that the scaling group takes when the lifecycle hook times out.
	//
	// Value range:
	//   CONTINUE: the scaling group continues with the scale-in or scale-out process.
	//   ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
	// Default value: CONTINUE
	// If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
	DefaultResult interface{} `field:"optional" json:"defaultResult" yaml:"defaultResult"`
	// Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out.
	//
	// If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
	// You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
	HeartbeatTimeout interface{} `field:"optional" json:"heartbeatTimeout" yaml:"heartbeatTimeout"`
	// Property lifecycleHookName: The name of the lifecycle hook.
	//
	// Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
	// Default value: Lifecycle Hook ID.
	LifecycleHookName interface{} `field:"optional" json:"lifecycleHookName" yaml:"lifecycleHookName"`
	// Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook.
	//
	// This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
	// region: the region to which the scaling group locates
	// account-id: Alibaba Cloud ID
	// For example:
	// MNS queue: acs:ess:{region}:{account-id}:queue\/{queuename}
	// MNS topic: acs:ess:{region}:{account-id}:topic\/{topicname}
	// OOS template: acs:ess:{region}:{account-id}:oos\/{templatename}.
	NotificationArn interface{} `field:"optional" json:"notificationArn" yaml:"notificationArn"`
	// Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target.
	//
	// The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
	NotificationMetadata interface{} `field:"optional" json:"notificationMetadata" yaml:"notificationMetadata"`
}

