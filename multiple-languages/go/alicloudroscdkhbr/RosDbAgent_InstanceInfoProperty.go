package alicloudroscdkhbr


type RosDbAgent_InstanceInfoProperty struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	AuthenticationType interface{} `field:"optional" json:"authenticationType" yaml:"authenticationType"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}

