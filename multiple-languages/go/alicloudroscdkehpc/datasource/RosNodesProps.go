package datasource


// Properties for defining a `RosNodes`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ehpc-nodes
type RosNodesProps struct {
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	HostNamePrefix interface{} `field:"optional" json:"hostNamePrefix" yaml:"hostNamePrefix"`
	HostNameSuffix interface{} `field:"optional" json:"hostNameSuffix" yaml:"hostNameSuffix"`
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Role interface{} `field:"optional" json:"role" yaml:"role"`
}

