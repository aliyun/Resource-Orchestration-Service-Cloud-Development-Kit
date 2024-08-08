package datasource


// Properties for defining a `RosAccessGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroup
type RosAccessGroupProps struct {
	AccessGroupName interface{} `field:"required" json:"accessGroupName" yaml:"accessGroupName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

