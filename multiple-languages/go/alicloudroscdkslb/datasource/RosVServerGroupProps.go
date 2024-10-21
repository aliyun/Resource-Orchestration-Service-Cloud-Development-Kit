package datasource


// Properties for defining a `RosVServerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroup
type RosVServerGroupProps struct {
	VServerGroupId interface{} `field:"required" json:"vServerGroupId" yaml:"vServerGroupId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

