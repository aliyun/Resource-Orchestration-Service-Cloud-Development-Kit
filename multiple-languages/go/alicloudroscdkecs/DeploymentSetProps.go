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
	// Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set.
	//
	// Valid values:
	// CancelMembershipAndStart: restarts the instances immediately after they are shut down
	// and migrated to other deployment sets. This is the default value.
	// KeepStopped: keeps the instances shut down and restarts them after the deployment
	// set is replenished.
	OnUnableToRedeployFailedInstance interface{} `field:"optional" json:"onUnableToRedeployFailedInstance" yaml:"onUnableToRedeployFailedInstance"`
	// Property strategy: Deployment strategy.
	//
	// Ranges:
	// Availability: High availability strategy.
	// AvailabilityGroup: Deployment group high availability strategy.
	// LowLatency: Network low latency strategy.
	Strategy interface{} `field:"optional" json:"strategy" yaml:"strategy"`
}

