package alicloudroscdkossdeployment


type BucketDeploymentProps struct {
	// The OSS bucket to sync the contents of the zip file to.
	DestinationBucket interface{} `field:"required" json:"destinationBucket" yaml:"destinationBucket"`
	// The sources from which to deploy the contents of this bucket.
	Sources *[]ISource `field:"required" json:"sources" yaml:"sources"`
	// Whether log monitoring is enabled.
	//
	// Enabling log monitoring allows you to record the details of your deployment,
	// which makes it easier to troubleshoot when something goes wrong.
	//
	// Enabling logging monitoring incurs an additional logging service fee.
	LogMonitoring *bool `field:"optional" json:"logMonitoring" yaml:"logMonitoring"`
	// If this is set to false, the bucket temporarily storing the asset or data will be deleted after the asset or data is deployed to the destination bucket.
	//
	// Otherwise, the temporary bucket will be deleted when the stack is destroyed.
	RetainOnCreate *bool `field:"optional" json:"retainOnCreate" yaml:"retainOnCreate"`
	// The ARN of the execution role associated with this function.
	RoleArn interface{} `field:"optional" json:"roleArn" yaml:"roleArn"`
	// The timeout period in seconds for the function to run.
	Timeout *float64 `field:"optional" json:"timeout" yaml:"timeout"`
}

