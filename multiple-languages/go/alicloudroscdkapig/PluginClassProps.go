package alicloudroscdkapig


// Properties for defining a `PluginClass`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
type PluginClassProps struct {
	// Property description: The description of the plugin class.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property executePriority: The execute priority of the Plugin.
	ExecutePriority interface{} `field:"required" json:"executePriority" yaml:"executePriority"`
	// Property executeStage: The Execution stage.
	ExecuteStage interface{} `field:"required" json:"executeStage" yaml:"executeStage"`
	// Property pluginClassName: The name of the plugin class.
	PluginClassName interface{} `field:"required" json:"pluginClassName" yaml:"pluginClassName"`
	// Property version: The version of plugin class.
	Version interface{} `field:"required" json:"version" yaml:"version"`
	// Property versionDescription: The description of the version .
	VersionDescription interface{} `field:"required" json:"versionDescription" yaml:"versionDescription"`
	// Property wasmLanguage: the language of the wasm.
	WasmLanguage interface{} `field:"required" json:"wasmLanguage" yaml:"wasmLanguage"`
	// Property wasmUrl: The url of the wasm.
	WasmUrl interface{} `field:"required" json:"wasmUrl" yaml:"wasmUrl"`
	// Property alias: The alias of the plugin class.
	Alias interface{} `field:"optional" json:"alias" yaml:"alias"`
	// Property supportedMinGatewayVersion: The supported minimum gateway version.
	SupportedMinGatewayVersion interface{} `field:"optional" json:"supportedMinGatewayVersion" yaml:"supportedMinGatewayVersion"`
}

