package datasource


// Properties for defining a `RosNamespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespace
type RosNamespaceProps struct {
	NamespaceId interface{} `field:"optional" json:"namespaceId" yaml:"namespaceId"`
	NameSpaceShortId interface{} `field:"optional" json:"nameSpaceShortId" yaml:"nameSpaceShortId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

