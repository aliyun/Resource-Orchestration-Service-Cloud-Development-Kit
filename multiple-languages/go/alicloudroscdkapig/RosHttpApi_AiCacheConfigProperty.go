package alicloudroscdkapig


type RosHttpApi_AiCacheConfigProperty struct {
	CacheKeyStrategy interface{} `field:"optional" json:"cacheKeyStrategy" yaml:"cacheKeyStrategy"`
	CacheMode interface{} `field:"optional" json:"cacheMode" yaml:"cacheMode"`
	CacheTtl interface{} `field:"optional" json:"cacheTtl" yaml:"cacheTtl"`
	EmbeddingConfig interface{} `field:"optional" json:"embeddingConfig" yaml:"embeddingConfig"`
	PluginStatus interface{} `field:"optional" json:"pluginStatus" yaml:"pluginStatus"`
	RedisConfig interface{} `field:"optional" json:"redisConfig" yaml:"redisConfig"`
	VectorConfig interface{} `field:"optional" json:"vectorConfig" yaml:"vectorConfig"`
}

