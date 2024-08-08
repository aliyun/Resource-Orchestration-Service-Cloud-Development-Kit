package alicloudroscdkram


// Properties for defining a `RosSAMLProvider`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-samlprovider
type RosSAMLProviderProps struct {
	SamlProviderName interface{} `field:"required" json:"samlProviderName" yaml:"samlProviderName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EncodedSamlMetadataDocument interface{} `field:"optional" json:"encodedSamlMetadataDocument" yaml:"encodedSamlMetadataDocument"`
	SamlMetadataDocument interface{} `field:"optional" json:"samlMetadataDocument" yaml:"samlMetadataDocument"`
	SamlMetadataDocumentUrl interface{} `field:"optional" json:"samlMetadataDocumentUrl" yaml:"samlMetadataDocumentUrl"`
}

