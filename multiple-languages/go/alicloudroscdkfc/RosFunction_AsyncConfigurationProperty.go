package alicloudroscdkfc


type RosFunction_AsyncConfigurationProperty struct {
	Destination interface{} `field:"optional" json:"destination" yaml:"destination"`
	MaxAsyncEventAgeInSeconds interface{} `field:"optional" json:"maxAsyncEventAgeInSeconds" yaml:"maxAsyncEventAgeInSeconds"`
	MaxAsyncRetryAttempts interface{} `field:"optional" json:"maxAsyncRetryAttempts" yaml:"maxAsyncRetryAttempts"`
	StatefulInvocation interface{} `field:"optional" json:"statefulInvocation" yaml:"statefulInvocation"`
}

