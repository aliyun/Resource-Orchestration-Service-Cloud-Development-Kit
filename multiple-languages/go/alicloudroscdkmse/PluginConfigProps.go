package alicloudroscdkmse


// Properties for defining a `PluginConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
type PluginConfigProps struct {
	// Property configLevel: The scope of the plugin application.
	//
	// - 0: Global
	// - 1: Route
	// - 2: Domain.
	ConfigLevel interface{} `field:"required" json:"configLevel" yaml:"configLevel"`
	// Property enable: Whether to enable the plugin.
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
	// Property gatewayUniqueId: The unique ID of the gateway.
	GatewayUniqueId interface{} `field:"required" json:"gatewayUniqueId" yaml:"gatewayUniqueId"`
	// Property pluginId: The ID of the gateway plugin.
	PluginId interface{} `field:"required" json:"pluginId" yaml:"pluginId"`
	// Property config: The configuration of the plugin.
	//
	// For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
	Config interface{} `field:"optional" json:"config" yaml:"config"`
	// Property resourceIdList: List of domain IDs\/route IDs (depending on ConfigLevel).
	ResourceIdList interface{} `field:"optional" json:"resourceIdList" yaml:"resourceIdList"`
}

