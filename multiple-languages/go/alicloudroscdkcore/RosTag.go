package alicloudroscdkcore


type RosTag struct {
	Key *string `field:"required" json:"key" yaml:"key"`
	Value *string `field:"optional" json:"value" yaml:"value"`
}

