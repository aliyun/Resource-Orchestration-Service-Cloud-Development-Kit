package datasource


// Properties for defining a `RosStorages`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-storages
type RosStoragesProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

