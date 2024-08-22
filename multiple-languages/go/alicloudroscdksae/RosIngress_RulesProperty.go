package alicloudroscdksae


type RosIngress_RulesProperty struct {
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	ContainerPort interface{} `field:"required" json:"containerPort" yaml:"containerPort"`
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
	Path interface{} `field:"required" json:"path" yaml:"path"`
	BackendProtocol interface{} `field:"optional" json:"backendProtocol" yaml:"backendProtocol"`
	RewritePath interface{} `field:"optional" json:"rewritePath" yaml:"rewritePath"`
}

