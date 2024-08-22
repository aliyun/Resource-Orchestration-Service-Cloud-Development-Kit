package alicloudroscdkeci


type RosContainerGroup_InitContainerProperty struct {
	Arg interface{} `field:"optional" json:"arg" yaml:"arg"`
	Command interface{} `field:"optional" json:"command" yaml:"command"`
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	EnvironmentVar interface{} `field:"optional" json:"environmentVar" yaml:"environmentVar"`
	Image interface{} `field:"optional" json:"image" yaml:"image"`
	ImagePullPolicy interface{} `field:"optional" json:"imagePullPolicy" yaml:"imagePullPolicy"`
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	SecurityContext interface{} `field:"optional" json:"securityContext" yaml:"securityContext"`
	VolumeMount interface{} `field:"optional" json:"volumeMount" yaml:"volumeMount"`
	WorkingDir interface{} `field:"optional" json:"workingDir" yaml:"workingDir"`
}

