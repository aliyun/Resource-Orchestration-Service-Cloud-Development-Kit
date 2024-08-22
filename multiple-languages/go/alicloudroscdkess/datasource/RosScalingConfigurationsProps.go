package datasource


// Properties for defining a `RosScalingConfigurations`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
type RosScalingConfigurationsProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ScalingConfigurationIds interface{} `field:"optional" json:"scalingConfigurationIds" yaml:"scalingConfigurationIds"`
	ScalingConfigurationNames interface{} `field:"optional" json:"scalingConfigurationNames" yaml:"scalingConfigurationNames"`
	ScalingGroupId interface{} `field:"optional" json:"scalingGroupId" yaml:"scalingGroupId"`
}

