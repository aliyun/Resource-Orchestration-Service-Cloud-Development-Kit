package alicloudroscdksas


type RosInstance_PostPayInstanceModuleProperty struct {
	AgentlessDetection interface{} `field:"optional" json:"agentlessDetection" yaml:"agentlessDetection"`
	CloudSecurityPostureManagement interface{} `field:"optional" json:"cloudSecurityPostureManagement" yaml:"cloudSecurityPostureManagement"`
	Ctdr interface{} `field:"optional" json:"ctdr" yaml:"ctdr"`
	HostAndContainerSecurity interface{} `field:"optional" json:"hostAndContainerSecurity" yaml:"hostAndContainerSecurity"`
	ServerlessAssetProtection interface{} `field:"optional" json:"serverlessAssetProtection" yaml:"serverlessAssetProtection"`
	VulnerabilityFixing interface{} `field:"optional" json:"vulnerabilityFixing" yaml:"vulnerabilityFixing"`
}

