package alicloudroscdkeci


type RosContainerGroup_ContainerProperty struct {
	Image interface{} `field:"required" json:"image" yaml:"image"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Arg interface{} `field:"optional" json:"arg" yaml:"arg"`
	Command interface{} `field:"optional" json:"command" yaml:"command"`
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	EnvironmentVar interface{} `field:"optional" json:"environmentVar" yaml:"environmentVar"`
	ImagePullPolicy interface{} `field:"optional" json:"imagePullPolicy" yaml:"imagePullPolicy"`
	LivenessProbe interface{} `field:"optional" json:"livenessProbe" yaml:"livenessProbe"`
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	ReadinessProbe interface{} `field:"optional" json:"readinessProbe" yaml:"readinessProbe"`
	SecurityContext interface{} `field:"optional" json:"securityContext" yaml:"securityContext"`
	Stdin interface{} `field:"optional" json:"stdin" yaml:"stdin"`
	StdinOnce interface{} `field:"optional" json:"stdinOnce" yaml:"stdinOnce"`
	Tty interface{} `field:"optional" json:"tty" yaml:"tty"`
	VolumeMount interface{} `field:"optional" json:"volumeMount" yaml:"volumeMount"`
	WorkingDir interface{} `field:"optional" json:"workingDir" yaml:"workingDir"`
}

