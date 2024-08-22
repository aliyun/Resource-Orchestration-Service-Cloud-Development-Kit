package datasource


// Properties for defining a `RosDisk`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disk
type RosDiskProps struct {
	DiskId interface{} `field:"required" json:"diskId" yaml:"diskId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

