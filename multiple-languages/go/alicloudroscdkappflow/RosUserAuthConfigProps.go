package alicloudroscdkappflow


// Properties for defining a `RosUserAuthConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
type RosUserAuthConfigProps struct {
	AuthConfig interface{} `field:"required" json:"authConfig" yaml:"authConfig"`
	AuthConfigName interface{} `field:"required" json:"authConfigName" yaml:"authConfigName"`
	ConnectorId interface{} `field:"required" json:"connectorId" yaml:"connectorId"`
}

