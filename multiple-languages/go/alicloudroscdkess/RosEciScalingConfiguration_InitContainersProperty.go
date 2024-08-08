package alicloudroscdkess


type RosEciScalingConfiguration_InitContainersProperty struct {
	Image interface{} `field:"required" json:"image" yaml:"image"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Args interface{} `field:"optional" json:"args" yaml:"args"`
	Commands interface{} `field:"optional" json:"commands" yaml:"commands"`
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	Gpu interface{} `field:"optional" json:"gpu" yaml:"gpu"`
	ImagePullPolicy interface{} `field:"optional" json:"imagePullPolicy" yaml:"imagePullPolicy"`
	InitContainerEnvironmentVars interface{} `field:"optional" json:"initContainerEnvironmentVars" yaml:"initContainerEnvironmentVars"`
	InitContainerVolumeMounts interface{} `field:"optional" json:"initContainerVolumeMounts" yaml:"initContainerVolumeMounts"`
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	SecurityContextCapabilitiesAdd interface{} `field:"optional" json:"securityContextCapabilitiesAdd" yaml:"securityContextCapabilitiesAdd"`
	SecurityContextRunAsUser interface{} `field:"optional" json:"securityContextRunAsUser" yaml:"securityContextRunAsUser"`
	WorkingDir interface{} `field:"optional" json:"workingDir" yaml:"workingDir"`
}

