package alicloudroscdkcloudstoragegateway


// Properties for defining a `RosStorageBundle`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
type RosStorageBundleProps struct {
	StorageBundleName interface{} `field:"required" json:"storageBundleName" yaml:"storageBundleName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

