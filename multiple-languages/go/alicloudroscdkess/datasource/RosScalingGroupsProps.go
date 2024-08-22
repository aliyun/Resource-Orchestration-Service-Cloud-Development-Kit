package datasource


// Properties for defining a `RosScalingGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
type RosScalingGroupsProps struct {
	GroupType interface{} `field:"optional" json:"groupType" yaml:"groupType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ScalingGroupIds interface{} `field:"optional" json:"scalingGroupIds" yaml:"scalingGroupIds"`
	ScalingGroupNames interface{} `field:"optional" json:"scalingGroupNames" yaml:"scalingGroupNames"`
}

