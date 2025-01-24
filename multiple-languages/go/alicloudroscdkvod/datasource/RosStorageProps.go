package datasource


// Properties for defining a `RosStorage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-storage
type RosStorageProps struct {
	StorageLocation interface{} `field:"required" json:"storageLocation" yaml:"storageLocation"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

