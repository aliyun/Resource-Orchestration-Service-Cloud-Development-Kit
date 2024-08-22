package alicloudroscdksae


// Properties for defining a `ConfigMap`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap
type ConfigMapProps struct {
	// Property data: Configmap key value pairs of data, json format.The format is as follows: {"k1":"v1", "k2":"v2"} K means key, V represents value.For more information about configuration items, see management and use of configuration items.
	Data interface{} `field:"required" json:"data" yaml:"data"`
	// Property name: The name of the config map.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property namespaceId: The ID of the namespace to which this config map instance belongs.
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	// Property description: Describe information, do not enter the space without more than 255 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

