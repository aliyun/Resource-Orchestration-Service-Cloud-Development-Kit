package alicloudroscdkpvtz


// Properties for defining a `RosSyncEcsHost`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-syncecshost
type RosSyncEcsHostProps struct {
	Regions interface{} `field:"required" json:"regions" yaml:"regions"`
	Status interface{} `field:"required" json:"status" yaml:"status"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
}

