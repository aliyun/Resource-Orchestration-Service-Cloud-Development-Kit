package alicloudroscdkpolardb


type RosApplication_ComponentsProperty struct {
	ComponentClass interface{} `field:"optional" json:"componentClass" yaml:"componentClass"`
	ComponentMaxReplica interface{} `field:"optional" json:"componentMaxReplica" yaml:"componentMaxReplica"`
	ComponentReplica interface{} `field:"optional" json:"componentReplica" yaml:"componentReplica"`
	ComponentType interface{} `field:"optional" json:"componentType" yaml:"componentType"`
	ScaleMax interface{} `field:"optional" json:"scaleMax" yaml:"scaleMax"`
	ScaleMin interface{} `field:"optional" json:"scaleMin" yaml:"scaleMin"`
	SecurityGroups interface{} `field:"optional" json:"securityGroups" yaml:"securityGroups"`
	SecurityIpArrayName interface{} `field:"optional" json:"securityIpArrayName" yaml:"securityIpArrayName"`
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	SecurityIpType interface{} `field:"optional" json:"securityIpType" yaml:"securityIpType"`
}

