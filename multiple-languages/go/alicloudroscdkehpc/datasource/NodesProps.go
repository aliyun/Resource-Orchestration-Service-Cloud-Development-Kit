package datasource


// Properties for defining a `Nodes`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ehpc-nodes
type NodesProps struct {
	// Property clusterId: The ID of the cluster.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property hostName: The name of the node.
	//
	// You can perform a fuzzy search. MySQL regular expressions are supported.
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	// Property hostNamePrefix: The prefix of the hostname.
	//
	// You can query nodes that have a specified prefix.
	HostNamePrefix interface{} `field:"optional" json:"hostNamePrefix" yaml:"hostNamePrefix"`
	// Property hostNameSuffix: The suffix of the hostname.
	//
	// You can query nodes that have a specified suffix.
	HostNameSuffix interface{} `field:"optional" json:"hostNameSuffix" yaml:"hostNameSuffix"`
	// Property privateIpAddress: The private IP address of the node.
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property role: The type of the node.
	//
	// Valid values:
	// Manager: management node
	// Login: logon node
	// Compute: compute node.
	Role interface{} `field:"optional" json:"role" yaml:"role"`
}

