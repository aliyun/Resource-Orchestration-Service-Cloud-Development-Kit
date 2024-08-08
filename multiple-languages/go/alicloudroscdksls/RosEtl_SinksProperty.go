package alicloudroscdksls


type RosEtl_SinksProperty struct {
	Logstore interface{} `field:"required" json:"logstore" yaml:"logstore"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Project interface{} `field:"required" json:"project" yaml:"project"`
	Endpoint interface{} `field:"optional" json:"endpoint" yaml:"endpoint"`
	RoleArn interface{} `field:"optional" json:"roleArn" yaml:"roleArn"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

