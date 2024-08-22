package alicloudroscdksls


type RosOssExport_SinkProperty struct {
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	BufferInterval interface{} `field:"required" json:"bufferInterval" yaml:"bufferInterval"`
	BufferSize interface{} `field:"required" json:"bufferSize" yaml:"bufferSize"`
	ContentType interface{} `field:"required" json:"contentType" yaml:"contentType"`
	RoleArn interface{} `field:"required" json:"roleArn" yaml:"roleArn"`
	CompressionType interface{} `field:"optional" json:"compressionType" yaml:"compressionType"`
	ContentDetail interface{} `field:"optional" json:"contentDetail" yaml:"contentDetail"`
	DelaySeconds interface{} `field:"optional" json:"delaySeconds" yaml:"delaySeconds"`
	Endpoint interface{} `field:"optional" json:"endpoint" yaml:"endpoint"`
	PathFormat interface{} `field:"optional" json:"pathFormat" yaml:"pathFormat"`
	PathFormatType interface{} `field:"optional" json:"pathFormatType" yaml:"pathFormatType"`
	Prefix interface{} `field:"optional" json:"prefix" yaml:"prefix"`
	Suffix interface{} `field:"optional" json:"suffix" yaml:"suffix"`
	TimeZone interface{} `field:"optional" json:"timeZone" yaml:"timeZone"`
}

