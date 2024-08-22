package alicloudroscdkpolardb


type RosDBClusterEndpoint_EndpointConfigProperty struct {
	ConnectionPersist interface{} `field:"optional" json:"connectionPersist" yaml:"connectionPersist"`
	ConsistLevel interface{} `field:"optional" json:"consistLevel" yaml:"consistLevel"`
	ConsistTimeout interface{} `field:"optional" json:"consistTimeout" yaml:"consistTimeout"`
	ConsistTimeoutAction interface{} `field:"optional" json:"consistTimeoutAction" yaml:"consistTimeoutAction"`
	DistributedTransaction interface{} `field:"optional" json:"distributedTransaction" yaml:"distributedTransaction"`
	EnableHtapImci interface{} `field:"optional" json:"enableHtapImci" yaml:"enableHtapImci"`
	EnableOverloadThrottle interface{} `field:"optional" json:"enableOverloadThrottle" yaml:"enableOverloadThrottle"`
	LoadBalancePolicy interface{} `field:"optional" json:"loadBalancePolicy" yaml:"loadBalancePolicy"`
	MasterAcceptReads interface{} `field:"optional" json:"masterAcceptReads" yaml:"masterAcceptReads"`
	MaxParallelDegree interface{} `field:"optional" json:"maxParallelDegree" yaml:"maxParallelDegree"`
}

