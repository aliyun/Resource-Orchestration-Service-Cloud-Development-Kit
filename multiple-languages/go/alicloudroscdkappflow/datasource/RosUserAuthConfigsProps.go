package datasource


// Properties for defining a `RosUserAuthConfigs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-appflow-userauthconfigs
type RosUserAuthConfigsProps struct {
	ConnectorId interface{} `field:"required" json:"connectorId" yaml:"connectorId"`
	AuthConfigNames interface{} `field:"optional" json:"authConfigNames" yaml:"authConfigNames"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

