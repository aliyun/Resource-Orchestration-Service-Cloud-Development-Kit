package alicloudroscdksae


type RosIngress_DefaultRuleProperty struct {
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	ContainerPort interface{} `field:"required" json:"containerPort" yaml:"containerPort"`
	BackendProtocol interface{} `field:"optional" json:"backendProtocol" yaml:"backendProtocol"`
}

