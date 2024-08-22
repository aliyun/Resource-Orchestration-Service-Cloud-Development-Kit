package alicloudroscdkassemblyschema


// Destination for assets that need to be uploaded to AliCloud.
type AliCloudDestination struct {
	// The region where this asset will need to be published.
	Region *string `field:"optional" json:"region" yaml:"region"`
}

