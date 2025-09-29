package alicloudroscdkesa


type RosSiteDeliveryTask_HttpDeliveryProperty struct {
	DestUrl interface{} `field:"required" json:"destUrl" yaml:"destUrl"`
	Compress interface{} `field:"optional" json:"compress" yaml:"compress"`
	HeaderParam interface{} `field:"optional" json:"headerParam" yaml:"headerParam"`
	LogBodyPrefix interface{} `field:"optional" json:"logBodyPrefix" yaml:"logBodyPrefix"`
	LogBodySuffix interface{} `field:"optional" json:"logBodySuffix" yaml:"logBodySuffix"`
	MaxBatchMb interface{} `field:"optional" json:"maxBatchMb" yaml:"maxBatchMb"`
	MaxBatchSize interface{} `field:"optional" json:"maxBatchSize" yaml:"maxBatchSize"`
	MaxRetry interface{} `field:"optional" json:"maxRetry" yaml:"maxRetry"`
	QueryParam interface{} `field:"optional" json:"queryParam" yaml:"queryParam"`
	StandardAuthOn interface{} `field:"optional" json:"standardAuthOn" yaml:"standardAuthOn"`
	StandardAuthParam interface{} `field:"optional" json:"standardAuthParam" yaml:"standardAuthParam"`
	TransformTimeout interface{} `field:"optional" json:"transformTimeout" yaml:"transformTimeout"`
}

