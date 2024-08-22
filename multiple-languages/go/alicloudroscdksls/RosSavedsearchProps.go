package alicloudroscdksls


// Properties for defining a `RosSavedsearch`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch
type RosSavedsearchProps struct {
	Detail interface{} `field:"required" json:"detail" yaml:"detail"`
	Project interface{} `field:"required" json:"project" yaml:"project"`
}

