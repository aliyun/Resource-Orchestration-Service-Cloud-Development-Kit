package alicloudroscdkapigateway


// Properties for defining a `LogConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-logconfig
type LogConfigProps struct {
	// Property slsLogStore: Logstore name of SLS.
	SlsLogStore interface{} `field:"required" json:"slsLogStore" yaml:"slsLogStore"`
	// Property slsProject: Project name of SLS.
	SlsProject interface{} `field:"required" json:"slsProject" yaml:"slsProject"`
}

