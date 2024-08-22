package datasource


// Properties for defining a `ScalingGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
type ScalingGroupsProps struct {
	// Property groupType: The type of instances that are managed by the scaling group.
	//
	// Valid values:
	// ECS: the Elastic Compute Service (ECS) instances
	// ECI: the elastic container instances
	// Default value: ECS.
	GroupType interface{} `field:"optional" json:"groupType" yaml:"groupType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
	ScalingGroupIds interface{} `field:"optional" json:"scalingGroupIds" yaml:"scalingGroupIds"`
	// Property scalingGroupNames: The name of scaling group that you want to query.
	//
	// Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
	ScalingGroupNames interface{} `field:"optional" json:"scalingGroupNames" yaml:"scalingGroupNames"`
}

