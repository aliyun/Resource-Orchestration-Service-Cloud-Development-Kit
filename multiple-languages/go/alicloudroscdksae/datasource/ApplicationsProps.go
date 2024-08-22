package datasource


// Properties for defining a `Applications`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-applications
type ApplicationsProps struct {
	// Property appName: The name of application.
	AppName interface{} `field:"optional" json:"appName" yaml:"appName"`
	// Property fieldType: Set the dimension of the filter application.
	//
	// Valid values:
	// appName: The application name.
	// appIds: App IDs.
	// slbIps: SLB IP address.
	// instanceIps: Instance IP address.
	FieldType interface{} `field:"optional" json:"fieldType" yaml:"fieldType"`
	// Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
	FieldValue interface{} `field:"optional" json:"fieldValue" yaml:"fieldValue"`
	// Property namespaceId: The ID of namespace.
	NamespaceId interface{} `field:"optional" json:"namespaceId" yaml:"namespaceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

