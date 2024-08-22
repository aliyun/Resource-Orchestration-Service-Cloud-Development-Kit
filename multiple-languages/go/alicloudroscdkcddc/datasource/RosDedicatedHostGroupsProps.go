package datasource


// Properties for defining a `RosDedicatedHostGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
type RosDedicatedHostGroupsProps struct {
	DedicatedHostGroupId interface{} `field:"optional" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	Engine interface{} `field:"optional" json:"engine" yaml:"engine"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

