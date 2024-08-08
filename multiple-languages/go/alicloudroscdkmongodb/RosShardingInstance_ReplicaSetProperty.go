package alicloudroscdkmongodb


type RosShardingInstance_ReplicaSetProperty struct {
	Class interface{} `field:"required" json:"class" yaml:"class"`
	Storage interface{} `field:"required" json:"storage" yaml:"storage"`
	ReadonlyReplicas interface{} `field:"optional" json:"readonlyReplicas" yaml:"readonlyReplicas"`
}

