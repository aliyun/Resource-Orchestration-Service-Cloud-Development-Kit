package alicloudroscdkcore


// An enum representing the various ARN formats that different services use.
type ArnFormat string

const (
	// This represents a format where there is no 'resourceName' part.
	//
	// Everything after the last colon is considered the 'resource',
	// even if it contains slashes.
	// For some resource types, e.g. OSS buckets, 'resource' part defines the bucket name.
	ArnFormat_NO_RESOURCE_NAME ArnFormat = "NO_RESOURCE_NAME"
	// This represents a format where the 'resource' and 'resourceName' parts are separated with a colon.
	//
	// Everything after the last colon is considered the 'resourceName',
	// even if it contains slashes.
	ArnFormat_COLON_RESOURCE_NAME ArnFormat = "COLON_RESOURCE_NAME"
	// This represents a format where the 'resource' and 'resourceName' parts are separated with a slash.
	//
	// Like in: 'acs:ecs:cn-hangzhou:123456789012****:instance/i-12345678****'.
	// Everything after the separating slash is considered the 'resourceName',
	// even if it contains colons.
	// The region part can be omitted.
	// Like in: 'acs:ram::123456789012****:role/RoleName'.
	ArnFormat_SLASH_RESOURCE_NAME ArnFormat = "SLASH_RESOURCE_NAME"
	// This represents a format where the 'resource' and 'resourceName' parts are seperated with a slash, but there is also an additional slash after the colon separating 'account' from 'resource'.
	//
	// Like in: 'acs:mns:cn-hangzhou:123456789012****:/topics/my-topic'.
	// Note that the leading slash is _not_ included in the parsed 'resource' part.
	ArnFormat_SLASH_RESOURCE_SLASH_RESOURCE_NAME ArnFormat = "SLASH_RESOURCE_SLASH_RESOURCE_NAME"
)

