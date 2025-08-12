package alicloudroscdksls


type RosEtlV2_SinksProperty struct {
	Logstore interface{} `field:"required" json:"logstore" yaml:"logstore"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Project interface{} `field:"required" json:"project" yaml:"project"`
	RoleArn interface{} `field:"required" json:"roleArn" yaml:"roleArn"`
	Datasets interface{} `field:"optional" json:"datasets" yaml:"datasets"`
	Endpoint interface{} `field:"optional" json:"endpoint" yaml:"endpoint"`
}

