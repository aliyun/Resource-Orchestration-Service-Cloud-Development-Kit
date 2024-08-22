package alicloudroscdksae


// Properties for defining a `Namespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace
type NamespaceProps struct {
	// Property namespaceId: Namespace ID.
	//
	// Format: "regionId:logicalId" or "logicalId".
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	// Property namespaceName: Namespace name.
	NamespaceName interface{} `field:"required" json:"namespaceName" yaml:"namespaceName"`
	// Property namespaceDescription: Namespace description.
	NamespaceDescription interface{} `field:"optional" json:"namespaceDescription" yaml:"namespaceDescription"`
}

