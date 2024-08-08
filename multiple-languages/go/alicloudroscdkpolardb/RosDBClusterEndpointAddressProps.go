package alicloudroscdkpolardb


// Properties for defining a `RosDBClusterEndpointAddress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress
type RosDBClusterEndpointAddressProps struct {
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	DbEndpointId interface{} `field:"required" json:"dbEndpointId" yaml:"dbEndpointId"`
	ConnectionStringPrefix interface{} `field:"optional" json:"connectionStringPrefix" yaml:"connectionStringPrefix"`
	NetType interface{} `field:"optional" json:"netType" yaml:"netType"`
}

