package alicloudroscdkoos


// Properties for defining a `RosApplicationConnection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnection
type RosApplicationConnectionProps struct {
	ConnectionCategory interface{} `field:"required" json:"connectionCategory" yaml:"connectionCategory"`
	ConnectionType interface{} `field:"required" json:"connectionType" yaml:"connectionType"`
	EnvVars interface{} `field:"required" json:"envVars" yaml:"envVars"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
}

