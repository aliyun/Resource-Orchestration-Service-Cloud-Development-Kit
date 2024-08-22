package datasource


// Properties for defining a `ScalingConfigurations`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
type ScalingConfigurationsProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property scalingConfigurationIds: The ID of scaling configuration that you want to query.
	//
	// Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
	ScalingConfigurationIds interface{} `field:"optional" json:"scalingConfigurationIds" yaml:"scalingConfigurationIds"`
	// Property scalingConfigurationNames: The name of scaling configuration that you want to query.
	//
	// Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
	ScalingConfigurationNames interface{} `field:"optional" json:"scalingConfigurationNames" yaml:"scalingConfigurationNames"`
	// Property scalingGroupId: The ID of the scaling group.
	//
	// You can use the ID to query all scaling configurations in the scaling group.
	ScalingGroupId interface{} `field:"optional" json:"scalingGroupId" yaml:"scalingGroupId"`
}

