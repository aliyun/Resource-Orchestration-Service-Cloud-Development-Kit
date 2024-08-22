package alicloudroscdkkafka


type RosInstance_ServerlessConfigProperty struct {
	ReservedPublishCapacity interface{} `field:"required" json:"reservedPublishCapacity" yaml:"reservedPublishCapacity"`
	ReservedSubscribeCapacity interface{} `field:"required" json:"reservedSubscribeCapacity" yaml:"reservedSubscribeCapacity"`
}

