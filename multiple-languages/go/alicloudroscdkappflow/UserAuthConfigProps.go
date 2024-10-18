package alicloudroscdkappflow


// Properties for defining a `UserAuthConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
type UserAuthConfigProps struct {
	// Property authConfig: AuthConfig.
	AuthConfig interface{} `field:"required" json:"authConfig" yaml:"authConfig"`
	// Property authConfigName: The name of the config.
	AuthConfigName interface{} `field:"required" json:"authConfigName" yaml:"authConfigName"`
	// Property connectorId: The id of connector.
	ConnectorId interface{} `field:"required" json:"connectorId" yaml:"connectorId"`
}

