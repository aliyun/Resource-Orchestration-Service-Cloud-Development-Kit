package alicloudroscdkapigateway


// Properties for defining a `RosLogConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-logconfig
type RosLogConfigProps struct {
	SlsLogStore interface{} `field:"required" json:"slsLogStore" yaml:"slsLogStore"`
	SlsProject interface{} `field:"required" json:"slsProject" yaml:"slsProject"`
}

