package alicloudroscdksae


type RosNlbBinding_ListenersProperty struct {
	Port interface{} `field:"required" json:"port" yaml:"port"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	TargetPort interface{} `field:"required" json:"targetPort" yaml:"targetPort"`
	CertIds interface{} `field:"optional" json:"certIds" yaml:"certIds"`
}

