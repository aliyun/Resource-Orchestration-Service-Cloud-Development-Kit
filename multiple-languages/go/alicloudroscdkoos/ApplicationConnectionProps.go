package alicloudroscdkoos


// Properties for defining a `ApplicationConnection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnection
type ApplicationConnectionProps struct {
	// Property connectionCategory: The category of the application connection.
	ConnectionCategory interface{} `field:"required" json:"connectionCategory" yaml:"connectionCategory"`
	// Property connectionType: The type of the application connection.
	ConnectionType interface{} `field:"required" json:"connectionType" yaml:"connectionType"`
	// Property envVars: The environment variables of the application connection.
	EnvVars interface{} `field:"required" json:"envVars" yaml:"envVars"`
	// Property name: The name of the application connection.
	Name interface{} `field:"required" json:"name" yaml:"name"`
}

