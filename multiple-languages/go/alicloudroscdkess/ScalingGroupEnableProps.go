package alicloudroscdkess


// Properties for defining a `ScalingGroupEnable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroupenable
type ScalingGroupEnableProps struct {
	// Property scalingGroupId: The id of operated scaling group.
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	// Property attachOptions: Options for attaching instances.
	AttachOptions interface{} `field:"optional" json:"attachOptions" yaml:"attachOptions"`
	// Property detachOptions: Options for detaching instances.
	DetachOptions interface{} `field:"optional" json:"detachOptions" yaml:"detachOptions"`
	// Property instanceIds: The id list of ECS instance which will be attached.
	//
	// Max support 1000 instances.
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	// Property removeInstanceIds: The id list of ECS instance which will be removed.
	//
	// Max support 1000 instances.
	RemoveInstanceIds interface{} `field:"optional" json:"removeInstanceIds" yaml:"removeInstanceIds"`
	// Property scalingConfigurationId: The id of scaling configuration which will be activate.
	ScalingConfigurationId interface{} `field:"optional" json:"scalingConfigurationId" yaml:"scalingConfigurationId"`
	// Property scalingRuleAris: A list of scaling rule aris which will be executed.
	//
	// Max support 10 scaling rule aris.
	// When creating the resource, all the scaling rule aris in the list will be executed.
	// When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
	ScalingRuleAris interface{} `field:"optional" json:"scalingRuleAris" yaml:"scalingRuleAris"`
	// Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
	ScalingRuleArisExecuteVersion interface{} `field:"optional" json:"scalingRuleArisExecuteVersion" yaml:"scalingRuleArisExecuteVersion"`
}

