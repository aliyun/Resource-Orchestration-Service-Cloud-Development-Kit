package datasource


// Properties for defining a `RosVServerGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroups
type RosVServerGroupsProps struct {
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

