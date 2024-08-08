package datasource


// Properties for defining a `KubernetesClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
type KubernetesClustersProps struct {
	// Property clusterSpec: The specification of the cluster.
	//
	// If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
	// ack.pro.small: professional managed Kubernetes cluster
	// ack.standard: standard managed Kubernetes cluster
	// By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	// Property clusterType: The type of the cluster.
	//
	// Valid values:
	// Kubernetes: dedicated Kubernetes cluster
	// ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
	// Ask: ASK cluster
	// ExternalKubernetes: registered external cluster
	// When you query an ASK cluster, the value specified when the cluster was created is returned.
	ClusterType interface{} `field:"optional" json:"clusterType" yaml:"clusterType"`
	// Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property profile: The identifier of the cluster.
	//
	// If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
	// Default: managed Kubernetes cluster
	// Serverless: ASK cluster
	// Edge: edge Kubernetes cluster
	// By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
	Profile interface{} `field:"optional" json:"profile" yaml:"profile"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

