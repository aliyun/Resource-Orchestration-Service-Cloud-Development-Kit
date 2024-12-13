package datasource


// Properties for defining a `RosStorageBundle`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundle
type RosStorageBundleProps struct {
	StorageBundleId interface{} `field:"required" json:"storageBundleId" yaml:"storageBundleId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

