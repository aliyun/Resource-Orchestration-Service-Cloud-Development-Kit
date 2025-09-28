package datasource


// Properties for defining a `Namespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespace
type NamespaceProps struct {
	// Property namespaceId: The ID of the namespace.
	NamespaceId interface{} `field:"optional" json:"namespaceId" yaml:"namespaceId"`
	// Property nameSpaceShortId: The ID of the short namespace.
	NameSpaceShortId interface{} `field:"optional" json:"nameSpaceShortId" yaml:"nameSpaceShortId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

