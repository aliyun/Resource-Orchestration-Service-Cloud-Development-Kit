package alicloudroscdksls


// Properties for defining a `RosOssExternalStore`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore
type RosOssExternalStoreProps struct {
	AccessId interface{} `field:"required" json:"accessId" yaml:"accessId"`
	AccessKey interface{} `field:"required" json:"accessKey" yaml:"accessKey"`
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	Columns interface{} `field:"required" json:"columns" yaml:"columns"`
	Endpoint interface{} `field:"required" json:"endpoint" yaml:"endpoint"`
	ExternalStoreName interface{} `field:"required" json:"externalStoreName" yaml:"externalStoreName"`
	Objects interface{} `field:"required" json:"objects" yaml:"objects"`
	Project interface{} `field:"required" json:"project" yaml:"project"`
	StoreType interface{} `field:"required" json:"storeType" yaml:"storeType"`
}

