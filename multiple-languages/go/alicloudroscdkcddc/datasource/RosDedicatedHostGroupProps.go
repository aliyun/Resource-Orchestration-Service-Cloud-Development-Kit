package datasource


// Properties for defining a `RosDedicatedHostGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroup
type RosDedicatedHostGroupProps struct {
	DedicatedHostGroupId interface{} `field:"required" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

