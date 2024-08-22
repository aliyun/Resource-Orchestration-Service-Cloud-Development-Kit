package alicloudroscdkess


type RosEciScalingConfiguration_ContainersProperty struct {
	Image interface{} `field:"required" json:"image" yaml:"image"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Args interface{} `field:"optional" json:"args" yaml:"args"`
	Commands interface{} `field:"optional" json:"commands" yaml:"commands"`
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	EnvironmentVars interface{} `field:"optional" json:"environmentVars" yaml:"environmentVars"`
	Gpu interface{} `field:"optional" json:"gpu" yaml:"gpu"`
	ImagePullPolicy interface{} `field:"optional" json:"imagePullPolicy" yaml:"imagePullPolicy"`
	LivenessProbeExecCommands interface{} `field:"optional" json:"livenessProbeExecCommands" yaml:"livenessProbeExecCommands"`
	LivenessProbeFailureThreshold interface{} `field:"optional" json:"livenessProbeFailureThreshold" yaml:"livenessProbeFailureThreshold"`
	LivenessProbeHttpGetPath interface{} `field:"optional" json:"livenessProbeHttpGetPath" yaml:"livenessProbeHttpGetPath"`
	LivenessProbeHttpGetPort interface{} `field:"optional" json:"livenessProbeHttpGetPort" yaml:"livenessProbeHttpGetPort"`
	LivenessProbeHttpGetScheme interface{} `field:"optional" json:"livenessProbeHttpGetScheme" yaml:"livenessProbeHttpGetScheme"`
	LivenessProbeInitialDelaySeconds interface{} `field:"optional" json:"livenessProbeInitialDelaySeconds" yaml:"livenessProbeInitialDelaySeconds"`
	LivenessProbePeriodSeconds interface{} `field:"optional" json:"livenessProbePeriodSeconds" yaml:"livenessProbePeriodSeconds"`
	LivenessProbeSuccessThreshold interface{} `field:"optional" json:"livenessProbeSuccessThreshold" yaml:"livenessProbeSuccessThreshold"`
	LivenessProbeTcpSocketPort interface{} `field:"optional" json:"livenessProbeTcpSocketPort" yaml:"livenessProbeTcpSocketPort"`
	LivenessProbeTimeoutSeconds interface{} `field:"optional" json:"livenessProbeTimeoutSeconds" yaml:"livenessProbeTimeoutSeconds"`
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	Ports interface{} `field:"optional" json:"ports" yaml:"ports"`
	ReadinessProbeExecCommands interface{} `field:"optional" json:"readinessProbeExecCommands" yaml:"readinessProbeExecCommands"`
	ReadinessProbeFailureThreshold interface{} `field:"optional" json:"readinessProbeFailureThreshold" yaml:"readinessProbeFailureThreshold"`
	ReadinessProbeHttpGetPath interface{} `field:"optional" json:"readinessProbeHttpGetPath" yaml:"readinessProbeHttpGetPath"`
	ReadinessProbeHttpGetPort interface{} `field:"optional" json:"readinessProbeHttpGetPort" yaml:"readinessProbeHttpGetPort"`
	ReadinessProbeHttpGetScheme interface{} `field:"optional" json:"readinessProbeHttpGetScheme" yaml:"readinessProbeHttpGetScheme"`
	ReadinessProbeInitialDelaySeconds interface{} `field:"optional" json:"readinessProbeInitialDelaySeconds" yaml:"readinessProbeInitialDelaySeconds"`
	ReadinessProbePeriodSeconds interface{} `field:"optional" json:"readinessProbePeriodSeconds" yaml:"readinessProbePeriodSeconds"`
	ReadinessProbeSuccessThreshold interface{} `field:"optional" json:"readinessProbeSuccessThreshold" yaml:"readinessProbeSuccessThreshold"`
	ReadinessProbeTcpSocketPort interface{} `field:"optional" json:"readinessProbeTcpSocketPort" yaml:"readinessProbeTcpSocketPort"`
	ReadinessProbeTimeoutSeconds interface{} `field:"optional" json:"readinessProbeTimeoutSeconds" yaml:"readinessProbeTimeoutSeconds"`
	SecurityContextCapabilitiesAdd interface{} `field:"optional" json:"securityContextCapabilitiesAdd" yaml:"securityContextCapabilitiesAdd"`
	SecurityContextRunAsUser interface{} `field:"optional" json:"securityContextRunAsUser" yaml:"securityContextRunAsUser"`
	Stdin interface{} `field:"optional" json:"stdin" yaml:"stdin"`
	StdinOnce interface{} `field:"optional" json:"stdinOnce" yaml:"stdinOnce"`
	Tty interface{} `field:"optional" json:"tty" yaml:"tty"`
	VolumeMounts interface{} `field:"optional" json:"volumeMounts" yaml:"volumeMounts"`
	WorkingDir interface{} `field:"optional" json:"workingDir" yaml:"workingDir"`
}

