package alicloudroscdksae


// Properties for defining a `RosNamespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace
type RosNamespaceProps struct {
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	NamespaceName interface{} `field:"required" json:"namespaceName" yaml:"namespaceName"`
	NamespaceDescription interface{} `field:"optional" json:"namespaceDescription" yaml:"namespaceDescription"`
}

