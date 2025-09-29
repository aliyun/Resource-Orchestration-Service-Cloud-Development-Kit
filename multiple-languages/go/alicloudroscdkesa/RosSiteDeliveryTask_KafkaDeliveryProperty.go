package alicloudroscdkesa


type RosSiteDeliveryTask_KafkaDeliveryProperty struct {
	Balancer interface{} `field:"optional" json:"balancer" yaml:"balancer"`
	Brokers interface{} `field:"optional" json:"brokers" yaml:"brokers"`
	Compress interface{} `field:"optional" json:"compress" yaml:"compress"`
	MachanismType interface{} `field:"optional" json:"machanismType" yaml:"machanismType"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	Topic interface{} `field:"optional" json:"topic" yaml:"topic"`
	UserAuth interface{} `field:"optional" json:"userAuth" yaml:"userAuth"`
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}

