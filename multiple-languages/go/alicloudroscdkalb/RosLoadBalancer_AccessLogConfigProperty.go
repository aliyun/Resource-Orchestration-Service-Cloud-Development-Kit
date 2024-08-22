package alicloudroscdkalb


type RosLoadBalancer_AccessLogConfigProperty struct {
	LogProject interface{} `field:"required" json:"logProject" yaml:"logProject"`
	LogStore interface{} `field:"required" json:"logStore" yaml:"logStore"`
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
}

