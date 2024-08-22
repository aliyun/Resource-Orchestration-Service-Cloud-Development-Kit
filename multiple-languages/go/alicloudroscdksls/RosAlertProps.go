package alicloudroscdksls


// Properties for defining a `RosAlert`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert
type RosAlertProps struct {
	Detail interface{} `field:"required" json:"detail" yaml:"detail"`
	Project interface{} `field:"required" json:"project" yaml:"project"`
}

