package alicloudroscdkedas


type RosK8sSlbBinding_ServicePortInfosProperty struct {
	LoadBalancerProtocol interface{} `field:"required" json:"loadBalancerProtocol" yaml:"loadBalancerProtocol"`
	Port interface{} `field:"required" json:"port" yaml:"port"`
	TargetPort interface{} `field:"required" json:"targetPort" yaml:"targetPort"`
	CertId interface{} `field:"optional" json:"certId" yaml:"certId"`
}

