package alicloudroscdkoss


type RosBucket_RuleProperty struct {
	Prefix interface{} `field:"required" json:"prefix" yaml:"prefix"`
	AbortMultipartUpload interface{} `field:"optional" json:"abortMultipartUpload" yaml:"abortMultipartUpload"`
	Expiration interface{} `field:"optional" json:"expiration" yaml:"expiration"`
	Filter interface{} `field:"optional" json:"filter" yaml:"filter"`
	Id interface{} `field:"optional" json:"id" yaml:"id"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

