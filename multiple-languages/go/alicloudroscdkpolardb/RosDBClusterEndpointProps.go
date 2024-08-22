package alicloudroscdkpolardb


// Properties for defining a `RosDBClusterEndpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint
type RosDBClusterEndpointProps struct {
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	AutoAddNewNodes interface{} `field:"optional" json:"autoAddNewNodes" yaml:"autoAddNewNodes"`
	EndpointConfig interface{} `field:"optional" json:"endpointConfig" yaml:"endpointConfig"`
	EndpointType interface{} `field:"optional" json:"endpointType" yaml:"endpointType"`
	Nodes interface{} `field:"optional" json:"nodes" yaml:"nodes"`
	ReadWriteMode interface{} `field:"optional" json:"readWriteMode" yaml:"readWriteMode"`
}

