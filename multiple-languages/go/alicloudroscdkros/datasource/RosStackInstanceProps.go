package datasource


// Properties for defining a `RosStackInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
type RosStackInstanceProps struct {
	StackGroupName interface{} `field:"required" json:"stackGroupName" yaml:"stackGroupName"`
	StackInstanceAccountId interface{} `field:"required" json:"stackInstanceAccountId" yaml:"stackInstanceAccountId"`
	StackInstanceRegionId interface{} `field:"required" json:"stackInstanceRegionId" yaml:"stackInstanceRegionId"`
	OutputOption interface{} `field:"optional" json:"outputOption" yaml:"outputOption"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

