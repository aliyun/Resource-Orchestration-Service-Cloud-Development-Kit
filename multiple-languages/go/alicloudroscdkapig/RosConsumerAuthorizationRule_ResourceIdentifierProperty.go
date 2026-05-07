package alicloudroscdkapig


type RosConsumerAuthorizationRule_ResourceIdentifierProperty struct {
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	ResourceId interface{} `field:"required" json:"resourceId" yaml:"resourceId"`
	ParentResourceId interface{} `field:"optional" json:"parentResourceId" yaml:"parentResourceId"`
	Resources interface{} `field:"optional" json:"resources" yaml:"resources"`
}

