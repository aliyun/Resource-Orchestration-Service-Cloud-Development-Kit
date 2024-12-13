package alicloudroscdkapig


type RosPluginAttachment_PluginInfoProperty struct {
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	PluginId interface{} `field:"required" json:"pluginId" yaml:"pluginId"`
	PluginConfig interface{} `field:"optional" json:"pluginConfig" yaml:"pluginConfig"`
}

