package alicloudroscdksls


// Properties for defining a `OssExternalStore`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore
type OssExternalStoreProps struct {
	// Property accessId: The AccessKey ID.
	AccessId interface{} `field:"required" json:"accessId" yaml:"accessId"`
	// Property accessKey: The AccessKey secret.
	AccessKey interface{} `field:"required" json:"accessKey" yaml:"accessKey"`
	// Property bucket: The name of the OSS bucket.
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	// Property columns: The associated fields.
	Columns interface{} `field:"required" json:"columns" yaml:"columns"`
	// Property endpoint: The OSS endpoint.
	Endpoint interface{} `field:"required" json:"endpoint" yaml:"endpoint"`
	// Property externalStoreName: The name of the external store.
	ExternalStoreName interface{} `field:"required" json:"externalStoreName" yaml:"externalStoreName"`
	// Property objects: The associated OSS objects.
	//
	// Valid values of n: 1 to 100.
	Objects interface{} `field:"required" json:"objects" yaml:"objects"`
	// Property project: A short description of struct.
	Project interface{} `field:"required" json:"project" yaml:"project"`
	// Property storeType: The type of the external store.
	//
	// Set the value to oss.
	StoreType interface{} `field:"required" json:"storeType" yaml:"storeType"`
}

