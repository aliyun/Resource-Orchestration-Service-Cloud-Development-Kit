package alicloudroscdkeci


type RosContainerGroup_InitContainerSecurityContextProperty struct {
	CapabilityAdd interface{} `field:"optional" json:"capabilityAdd" yaml:"capabilityAdd"`
	ReadOnlyRootFilesystem interface{} `field:"optional" json:"readOnlyRootFilesystem" yaml:"readOnlyRootFilesystem"`
	RunAsUser interface{} `field:"optional" json:"runAsUser" yaml:"runAsUser"`
}

