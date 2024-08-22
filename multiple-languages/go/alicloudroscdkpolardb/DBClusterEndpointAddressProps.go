package alicloudroscdkpolardb


// Properties for defining a `DBClusterEndpointAddress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress
type DBClusterEndpointAddressProps struct {
	// Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property dbEndpointId: The ID of the cluster connection point.
	DbEndpointId interface{} `field:"required" json:"dbEndpointId" yaml:"dbEndpointId"`
	// Property connectionStringPrefix: The prefix of the connection string.
	//
	// The prefix must comply with the following rules:
	// It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
	// The length is 6~30 characters.
	ConnectionStringPrefix interface{} `field:"optional" json:"connectionStringPrefix" yaml:"connectionStringPrefix"`
	// Property netType: The network type of the connection string.
	//
	// If set to Public, ROS will create, modify and delete Public address for you.
	// If set to Private, ROS will only modify Private address for you.
	// Default to Public.
	NetType interface{} `field:"optional" json:"netType" yaml:"netType"`
}

