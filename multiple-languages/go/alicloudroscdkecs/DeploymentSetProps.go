package alicloudroscdkecs


// Properties for defining a `DeploymentSet`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-deploymentset
type DeploymentSetProps struct {
	// Property deploymentSetName: The name of the deployment set.
	//
	// It must be 2 to 128 characters in length. It must
	// start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters,
	// digits, colons (:), underscores (_), and hyphens (-).
	DeploymentSetName interface{} `field:"optional" json:"deploymentSetName" yaml:"deploymentSetName"`
	// Property description: The description of the deployment set.
	//
	// It must be 2 to 256 characters in length. It
	// cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property groupCount: Set the number of groups for the deployment set group high availability policy.
	//
	// Value range: 1~7.
	// Default value: 3.
	// This parameter only takes effect when Strategy=AvailabilityGroup.
	GroupCount interface{} `field:"optional" json:"groupCount" yaml:"groupCount"`
	// Property onUnableToRedeployFailedInstance: The policy to use when an instance fails over but cannot be redeployed due to insufficient resources.
	//
	// Valid values:
	// - CancelMembershipAndStart: Removes the instance from the deployment set and
	// starts the instance immediately after failover.
	// - KeepStopped: Keeps the instance's deployment set membership and leaves it in
	// the Stopped state.
	// Default value: CancelMembershipAndStart.
	OnUnableToRedeployFailedInstance interface{} `field:"optional" json:"onUnableToRedeployFailedInstance" yaml:"onUnableToRedeployFailedInstance"`
	// Property strategy: The deployment strategy.
	//
	// Valid values:
	// - Availability: A high availability strategy.
	// - AvailabilityGroup: A high availability strategy for a deployment set group.
	// - LowLatency: A low-latency strategy.
	// Default value: Availability.
	Strategy interface{} `field:"optional" json:"strategy" yaml:"strategy"`
}

