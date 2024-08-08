package alicloudroscdkmse


// Properties for defining a `ServiceSource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
type ServiceSourceProps struct {
	// Property gatewayUniqueId: The unique ID of the gateway.
	GatewayUniqueId interface{} `field:"required" json:"gatewayUniqueId" yaml:"gatewayUniqueId"`
	// Property name: The name.
	//
	// If Source=K8S, this parameter specifies the name of the ACK cluster.
	// If Source=MSE, this parameter specifies the ID of the Nacos instance.
	// If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
	// If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
	// If Source=SAE, this parameter specifies the ID of the SAE namespace.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property source: The service source.
	//
	// Valid values:
	// K8S: ACK cluster
	// MSE: MSE Nacos instance.
	Source interface{} `field:"required" json:"source" yaml:"source"`
	// Property address: Registration Address.
	//
	// If not specified, it will be automatically generated based on the selected instance.
	Address interface{} `field:"optional" json:"address" yaml:"address"`
	// Property groupList: The list of service groups.
	//
	// This is required when Source=EDAS.
	GroupList interface{} `field:"optional" json:"groupList" yaml:"groupList"`
	// Property ingressOptions: The Ingress configuration.
	IngressOptions interface{} `field:"optional" json:"ingressOptions" yaml:"ingressOptions"`
	// Property pathList: An array of service root paths.
	PathList interface{} `field:"optional" json:"pathList" yaml:"pathList"`
}

