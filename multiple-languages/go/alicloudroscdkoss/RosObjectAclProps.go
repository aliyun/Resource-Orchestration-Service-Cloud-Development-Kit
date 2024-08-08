package alicloudroscdkoss


// Properties for defining a `RosObjectAcl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
type RosObjectAclProps struct {
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	ObjectAcl interface{} `field:"required" json:"objectAcl" yaml:"objectAcl"`
	ObjectKey interface{} `field:"required" json:"objectKey" yaml:"objectKey"`
}

