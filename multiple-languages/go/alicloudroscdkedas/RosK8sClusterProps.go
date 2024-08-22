package alicloudroscdkedas


// Properties for defining a `RosK8sCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8scluster
type RosK8sClusterProps struct {
	CsClusterId interface{} `field:"required" json:"csClusterId" yaml:"csClusterId"`
	EnableAsm interface{} `field:"optional" json:"enableAsm" yaml:"enableAsm"`
	NamespaceId interface{} `field:"optional" json:"namespaceId" yaml:"namespaceId"`
}

