package alicloudroscdkoss


type RosBucket_ServerSideEncryptionConfigurationProperty struct {
	SseAlgorithm interface{} `field:"required" json:"sseAlgorithm" yaml:"sseAlgorithm"`
	KmsMasterKeyId interface{} `field:"optional" json:"kmsMasterKeyId" yaml:"kmsMasterKeyId"`
}

