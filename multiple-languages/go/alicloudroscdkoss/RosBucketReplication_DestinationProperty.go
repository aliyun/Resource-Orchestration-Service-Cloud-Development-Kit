package alicloudroscdkoss


type RosBucketReplication_DestinationProperty struct {
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	Location interface{} `field:"required" json:"location" yaml:"location"`
	TransferType interface{} `field:"required" json:"transferType" yaml:"transferType"`
}

