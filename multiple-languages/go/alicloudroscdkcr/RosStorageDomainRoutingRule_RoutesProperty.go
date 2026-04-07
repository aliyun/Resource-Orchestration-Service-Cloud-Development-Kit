package alicloudroscdkcr


type RosStorageDomainRoutingRule_RoutesProperty struct {
	EndpointType interface{} `field:"required" json:"endpointType" yaml:"endpointType"`
	InstanceDomain interface{} `field:"required" json:"instanceDomain" yaml:"instanceDomain"`
	StorageDomain interface{} `field:"required" json:"storageDomain" yaml:"storageDomain"`
}

