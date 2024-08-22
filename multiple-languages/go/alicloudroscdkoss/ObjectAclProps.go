package alicloudroscdkoss


// Properties for defining a `ObjectAcl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
type ObjectAclProps struct {
	// Property bucket: Bucket name.
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	// Property objectAcl: Object acl.
	ObjectAcl interface{} `field:"required" json:"objectAcl" yaml:"objectAcl"`
	// Property objectKey: Object key.
	ObjectKey interface{} `field:"required" json:"objectKey" yaml:"objectKey"`
}

