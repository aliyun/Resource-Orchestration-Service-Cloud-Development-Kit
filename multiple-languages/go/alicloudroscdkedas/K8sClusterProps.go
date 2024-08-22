package alicloudroscdkedas


// Properties for defining a `K8sCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8scluster
type K8sClusterProps struct {
	// Property csClusterId: The ID of the CS cluster.
	CsClusterId interface{} `field:"required" json:"csClusterId" yaml:"csClusterId"`
	// Property enableAsm: Whether enable ASM.
	EnableAsm interface{} `field:"optional" json:"enableAsm" yaml:"enableAsm"`
	// Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
	NamespaceId interface{} `field:"optional" json:"namespaceId" yaml:"namespaceId"`
}

