package alicloudroscdkeci


type RosContainerGroup_ImageRegistryCredentialProperty struct {
	Password interface{} `field:"required" json:"password" yaml:"password"`
	Server interface{} `field:"required" json:"server" yaml:"server"`
	UserName interface{} `field:"required" json:"userName" yaml:"userName"`
}

