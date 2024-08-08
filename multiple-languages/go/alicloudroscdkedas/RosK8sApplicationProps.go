package alicloudroscdkedas


// Properties for defining a `RosK8sApplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sapplication
type RosK8sApplicationProps struct {
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	ApplicationDescription interface{} `field:"optional" json:"applicationDescription" yaml:"applicationDescription"`
	Command interface{} `field:"optional" json:"command" yaml:"command"`
	CommandArgs interface{} `field:"optional" json:"commandArgs" yaml:"commandArgs"`
	DeployAcrossNodes interface{} `field:"optional" json:"deployAcrossNodes" yaml:"deployAcrossNodes"`
	DeployAcrossZones interface{} `field:"optional" json:"deployAcrossZones" yaml:"deployAcrossZones"`
	EdasContainerVersion interface{} `field:"optional" json:"edasContainerVersion" yaml:"edasContainerVersion"`
	EnableAhas interface{} `field:"optional" json:"enableAhas" yaml:"enableAhas"`
	Envs interface{} `field:"optional" json:"envs" yaml:"envs"`
	ImageUrl interface{} `field:"optional" json:"imageUrl" yaml:"imageUrl"`
	InternetSlbId interface{} `field:"optional" json:"internetSlbId" yaml:"internetSlbId"`
	InternetSlbPort interface{} `field:"optional" json:"internetSlbPort" yaml:"internetSlbPort"`
	InternetSlbProtocol interface{} `field:"optional" json:"internetSlbProtocol" yaml:"internetSlbProtocol"`
	InternetTargetPort interface{} `field:"optional" json:"internetTargetPort" yaml:"internetTargetPort"`
	IntranetSlbId interface{} `field:"optional" json:"intranetSlbId" yaml:"intranetSlbId"`
	IntranetSlbPort interface{} `field:"optional" json:"intranetSlbPort" yaml:"intranetSlbPort"`
	IntranetSlbProtocol interface{} `field:"optional" json:"intranetSlbProtocol" yaml:"intranetSlbProtocol"`
	IntranetTargetPort interface{} `field:"optional" json:"intranetTargetPort" yaml:"intranetTargetPort"`
	IsMultilingualApp interface{} `field:"optional" json:"isMultilingualApp" yaml:"isMultilingualApp"`
	JavaStartUpConfig interface{} `field:"optional" json:"javaStartUpConfig" yaml:"javaStartUpConfig"`
	Jdk interface{} `field:"optional" json:"jdk" yaml:"jdk"`
	LimitCpu interface{} `field:"optional" json:"limitCpu" yaml:"limitCpu"`
	LimitMem interface{} `field:"optional" json:"limitMem" yaml:"limitMem"`
	Liveness interface{} `field:"optional" json:"liveness" yaml:"liveness"`
	LocalVolume interface{} `field:"optional" json:"localVolume" yaml:"localVolume"`
	LogicalRegionId interface{} `field:"optional" json:"logicalRegionId" yaml:"logicalRegionId"`
	MountDescs interface{} `field:"optional" json:"mountDescs" yaml:"mountDescs"`
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
	NasId interface{} `field:"optional" json:"nasId" yaml:"nasId"`
	PackageType interface{} `field:"optional" json:"packageType" yaml:"packageType"`
	PackageUrl interface{} `field:"optional" json:"packageUrl" yaml:"packageUrl"`
	PackageVersion interface{} `field:"optional" json:"packageVersion" yaml:"packageVersion"`
	PostStart interface{} `field:"optional" json:"postStart" yaml:"postStart"`
	PreStop interface{} `field:"optional" json:"preStop" yaml:"preStop"`
	Readiness interface{} `field:"optional" json:"readiness" yaml:"readiness"`
	Replicas interface{} `field:"optional" json:"replicas" yaml:"replicas"`
	RepoId interface{} `field:"optional" json:"repoId" yaml:"repoId"`
	RequestsCpu interface{} `field:"optional" json:"requestsCpu" yaml:"requestsCpu"`
	RequestsMem interface{} `field:"optional" json:"requestsMem" yaml:"requestsMem"`
	RuntimeClassName interface{} `field:"optional" json:"runtimeClassName" yaml:"runtimeClassName"`
	SlsConfigs interface{} `field:"optional" json:"slsConfigs" yaml:"slsConfigs"`
	StorageType interface{} `field:"optional" json:"storageType" yaml:"storageType"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	UriEncoding interface{} `field:"optional" json:"uriEncoding" yaml:"uriEncoding"`
	UseBodyEncoding interface{} `field:"optional" json:"useBodyEncoding" yaml:"useBodyEncoding"`
	WebContainer interface{} `field:"optional" json:"webContainer" yaml:"webContainer"`
	WebContainerConfig interface{} `field:"optional" json:"webContainerConfig" yaml:"webContainerConfig"`
}

