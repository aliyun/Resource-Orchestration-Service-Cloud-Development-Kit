package alicloudroscdkcloudstoragegateway


// Properties for defining a `StorageBundle`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
type StorageBundleProps struct {
	// Property storageBundleName: The name of the gateway cluster.
	//
	// The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
	StorageBundleName interface{} `field:"required" json:"storageBundleName" yaml:"storageBundleName"`
	// Property description: The description of the gateway cluster.
	//
	// The description must be 0 to 128 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

