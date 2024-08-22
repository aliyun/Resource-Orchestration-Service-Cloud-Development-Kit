package alicloudroscdkpolardb


// Properties for defining a `DBClusterEndpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint
type DBClusterEndpointProps struct {
	// Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
	//
	// Valid values: Enable, Disable.
	// Default value: Disable.
	AutoAddNewNodes interface{} `field:"optional" json:"autoAddNewNodes" yaml:"autoAddNewNodes"`
	// Property endpointConfig:.
	EndpointConfig interface{} `field:"optional" json:"endpointConfig" yaml:"endpointConfig"`
	// Property endpointType: The type of the cluster connection point.
	//
	// Set this parameter to Custom.
	EndpointType interface{} `field:"optional" json:"endpointType" yaml:"endpointType"`
	// Property nodes: The nodes to be added to this connection point to process read requests from this connection point.
	//
	// Add at least two nodes.
	// If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
	Nodes interface{} `field:"optional" json:"nodes" yaml:"nodes"`
	// Property readWriteMode: The read\/write mode of the cluster connection point.
	//
	// Valid values:
	// ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
	// ReadOnly: receives and forwards only read requests.
	// Default value: ReadOnly.
	ReadWriteMode interface{} `field:"optional" json:"readWriteMode" yaml:"readWriteMode"`
}

