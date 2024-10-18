package datasource


// Properties for defining a `UserAuthConfigs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-appflow-userauthconfigs
type UserAuthConfigsProps struct {
	// Property connectorId: The id of connector.
	ConnectorId interface{} `field:"required" json:"connectorId" yaml:"connectorId"`
	// Property authConfigNames: The names of the config.
	AuthConfigNames interface{} `field:"optional" json:"authConfigNames" yaml:"authConfigNames"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

