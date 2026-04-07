package alicloudroscdkdns


// Properties for defining a `AccessStrategy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
type AccessStrategyProps struct {
	// Property defaultAddrPool: The default address pool of the access strategy.
	DefaultAddrPool interface{} `field:"required" json:"defaultAddrPool" yaml:"defaultAddrPool"`
	// Property defaultAddrPoolType: The type of the default address pool.
	DefaultAddrPoolType interface{} `field:"required" json:"defaultAddrPoolType" yaml:"defaultAddrPoolType"`
	// Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
	DefaultMinAvailableAddrNum interface{} `field:"required" json:"defaultMinAvailableAddrNum" yaml:"defaultMinAvailableAddrNum"`
	// Property instanceId: The ID of the Dns instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property strategyMode: The mode of the access strategy.
	StrategyMode interface{} `field:"required" json:"strategyMode" yaml:"strategyMode"`
	// Property strategyName: The name of the access strategy.
	StrategyName interface{} `field:"required" json:"strategyName" yaml:"strategyName"`
	// Property accessMode: The access mode of the access strategy.
	AccessMode interface{} `field:"optional" json:"accessMode" yaml:"accessMode"`
	// Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
	DefaultLatencyOptimization interface{} `field:"optional" json:"defaultLatencyOptimization" yaml:"defaultLatencyOptimization"`
	// Property defaultLbaStrategy: The load balancing strategy of the default address pool.
	DefaultLbaStrategy interface{} `field:"optional" json:"defaultLbaStrategy" yaml:"defaultLbaStrategy"`
	// Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
	DefaultMaxReturnAddrNum interface{} `field:"optional" json:"defaultMaxReturnAddrNum" yaml:"defaultMaxReturnAddrNum"`
	// Property failoverAddrPool: The failover address pool of the access strategy.
	FailoverAddrPool interface{} `field:"optional" json:"failoverAddrPool" yaml:"failoverAddrPool"`
	// Property failoverAddrPoolType: The type of the failover address pool.
	FailoverAddrPoolType interface{} `field:"optional" json:"failoverAddrPoolType" yaml:"failoverAddrPoolType"`
	// Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
	FailoverLatencyOptimization interface{} `field:"optional" json:"failoverLatencyOptimization" yaml:"failoverLatencyOptimization"`
	// Property failoverLbaStrategy: The load balancing strategy of the failover address pool.
	FailoverLbaStrategy interface{} `field:"optional" json:"failoverLbaStrategy" yaml:"failoverLbaStrategy"`
	// Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
	FailoverMaxReturnAddrNum interface{} `field:"optional" json:"failoverMaxReturnAddrNum" yaml:"failoverMaxReturnAddrNum"`
	// Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
	FailoverMinAvailableAddrNum interface{} `field:"optional" json:"failoverMinAvailableAddrNum" yaml:"failoverMinAvailableAddrNum"`
	// Property lines: The lines of the access strategy.
	Lines interface{} `field:"optional" json:"lines" yaml:"lines"`
}

