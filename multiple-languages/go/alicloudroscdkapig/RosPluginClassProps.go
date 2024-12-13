package alicloudroscdkapig


// Properties for defining a `RosPluginClass`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
type RosPluginClassProps struct {
	Description interface{} `field:"required" json:"description" yaml:"description"`
	ExecutePriority interface{} `field:"required" json:"executePriority" yaml:"executePriority"`
	ExecuteStage interface{} `field:"required" json:"executeStage" yaml:"executeStage"`
	PluginClassName interface{} `field:"required" json:"pluginClassName" yaml:"pluginClassName"`
	Version interface{} `field:"required" json:"version" yaml:"version"`
	VersionDescription interface{} `field:"required" json:"versionDescription" yaml:"versionDescription"`
	WasmLanguage interface{} `field:"required" json:"wasmLanguage" yaml:"wasmLanguage"`
	WasmUrl interface{} `field:"required" json:"wasmUrl" yaml:"wasmUrl"`
	Alias interface{} `field:"optional" json:"alias" yaml:"alias"`
	SupportedMinGatewayVersion interface{} `field:"optional" json:"supportedMinGatewayVersion" yaml:"supportedMinGatewayVersion"`
}

