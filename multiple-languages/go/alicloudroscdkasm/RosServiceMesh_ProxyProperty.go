package alicloudroscdkasm


type RosServiceMesh_ProxyProperty struct {
	ClusterDomain interface{} `field:"optional" json:"clusterDomain" yaml:"clusterDomain"`
	ProxyLimitCpu interface{} `field:"optional" json:"proxyLimitCpu" yaml:"proxyLimitCpu"`
	ProxyLimitMemory interface{} `field:"optional" json:"proxyLimitMemory" yaml:"proxyLimitMemory"`
	ProxyRequestCpu interface{} `field:"optional" json:"proxyRequestCpu" yaml:"proxyRequestCpu"`
	ProxyRequestMemory interface{} `field:"optional" json:"proxyRequestMemory" yaml:"proxyRequestMemory"`
}

