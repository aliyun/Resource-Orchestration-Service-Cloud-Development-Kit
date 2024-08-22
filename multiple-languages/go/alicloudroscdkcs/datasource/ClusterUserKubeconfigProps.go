package datasource


// Properties for defining a `ClusterUserKubeconfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig
type ClusterUserKubeconfigProps struct {
	// Property clusterId: The ID of the ACK cluster.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network.
	//
	// Valid values:
	// true: obtains the credential that is used to connect to the cluster over the internal network.
	// false: obtains the credential that is used to connect to the cluster over the Internet.
	// Default value: false.
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file.
	//
	// Unit: minutes. Valid values: 15 to 4320.
	// Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
	TemporaryDurationMinutes interface{} `field:"optional" json:"temporaryDurationMinutes" yaml:"temporaryDurationMinutes"`
}

