package alicloudroscdkrds


type RosPrepayDBInstance_ServerlessConfigProperty struct {
	MaxCapacity interface{} `field:"required" json:"maxCapacity" yaml:"maxCapacity"`
	MinCapacity interface{} `field:"required" json:"minCapacity" yaml:"minCapacity"`
	AutoPause interface{} `field:"optional" json:"autoPause" yaml:"autoPause"`
	SwitchForce interface{} `field:"optional" json:"switchForce" yaml:"switchForce"`
}

