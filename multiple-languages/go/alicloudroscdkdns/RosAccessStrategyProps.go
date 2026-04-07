package alicloudroscdkdns


// Properties for defining a `RosAccessStrategy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
type RosAccessStrategyProps struct {
	DefaultAddrPool interface{} `field:"required" json:"defaultAddrPool" yaml:"defaultAddrPool"`
	DefaultAddrPoolType interface{} `field:"required" json:"defaultAddrPoolType" yaml:"defaultAddrPoolType"`
	DefaultMinAvailableAddrNum interface{} `field:"required" json:"defaultMinAvailableAddrNum" yaml:"defaultMinAvailableAddrNum"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	StrategyMode interface{} `field:"required" json:"strategyMode" yaml:"strategyMode"`
	StrategyName interface{} `field:"required" json:"strategyName" yaml:"strategyName"`
	AccessMode interface{} `field:"optional" json:"accessMode" yaml:"accessMode"`
	DefaultLatencyOptimization interface{} `field:"optional" json:"defaultLatencyOptimization" yaml:"defaultLatencyOptimization"`
	DefaultLbaStrategy interface{} `field:"optional" json:"defaultLbaStrategy" yaml:"defaultLbaStrategy"`
	DefaultMaxReturnAddrNum interface{} `field:"optional" json:"defaultMaxReturnAddrNum" yaml:"defaultMaxReturnAddrNum"`
	FailoverAddrPool interface{} `field:"optional" json:"failoverAddrPool" yaml:"failoverAddrPool"`
	FailoverAddrPoolType interface{} `field:"optional" json:"failoverAddrPoolType" yaml:"failoverAddrPoolType"`
	FailoverLatencyOptimization interface{} `field:"optional" json:"failoverLatencyOptimization" yaml:"failoverLatencyOptimization"`
	FailoverLbaStrategy interface{} `field:"optional" json:"failoverLbaStrategy" yaml:"failoverLbaStrategy"`
	FailoverMaxReturnAddrNum interface{} `field:"optional" json:"failoverMaxReturnAddrNum" yaml:"failoverMaxReturnAddrNum"`
	FailoverMinAvailableAddrNum interface{} `field:"optional" json:"failoverMinAvailableAddrNum" yaml:"failoverMinAvailableAddrNum"`
	Lines interface{} `field:"optional" json:"lines" yaml:"lines"`
}

