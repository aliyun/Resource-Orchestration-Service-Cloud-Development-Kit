package alicloudroscdkapig


type RosHttpApi_PolicyConfigsProperty struct {
	AiCacheConfig interface{} `field:"optional" json:"aiCacheConfig" yaml:"aiCacheConfig"`
	AiFallbackConfig interface{} `field:"optional" json:"aiFallbackConfig" yaml:"aiFallbackConfig"`
	AiNetworkSearchConfig interface{} `field:"optional" json:"aiNetworkSearchConfig" yaml:"aiNetworkSearchConfig"`
	AiSecurityGuardConfig interface{} `field:"optional" json:"aiSecurityGuardConfig" yaml:"aiSecurityGuardConfig"`
	AiStatisticsConfig interface{} `field:"optional" json:"aiStatisticsConfig" yaml:"aiStatisticsConfig"`
	AiTokenRateLimitConfig interface{} `field:"optional" json:"aiTokenRateLimitConfig" yaml:"aiTokenRateLimitConfig"`
	AiToolSelectionConfig interface{} `field:"optional" json:"aiToolSelectionConfig" yaml:"aiToolSelectionConfig"`
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	SemanticRouterConfig interface{} `field:"optional" json:"semanticRouterConfig" yaml:"semanticRouterConfig"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

