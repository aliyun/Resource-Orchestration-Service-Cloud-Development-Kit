package alicloudroscdkedas


// Properties for defining a `K8sApplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sapplication
type K8sApplicationProps struct {
	// Property appName: The name of the application.
	//
	// The name must start with a letter and can contain digits,
	// letters, and hyphens (-). It can be up to 36 characters in length.
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	// Property clusterId: The cluster ID.
	//
	// You can query the cluster ID by calling the ListCluster operation.
	// For more information, see ListCluster.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property applicationDescription: The description of the application.
	ApplicationDescription interface{} `field:"optional" json:"applicationDescription" yaml:"applicationDescription"`
	// Property command: The command that is specified.
	//
	// If it is specified, it replaces the startup command in the image when the image is started.
	Command interface{} `field:"optional" json:"command" yaml:"command"`
	// Property commandArgs: The collection of commands.
	//
	// For example, [{"argument":"-c"},{"argument":"test"}], where -c and test are two parameters that can be set.
	CommandArgs interface{} `field:"optional" json:"commandArgs" yaml:"commandArgs"`
	// Property deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes.
	//
	// The value true indicates yes, whereas other values indicate no.
	DeployAcrossNodes interface{} `field:"optional" json:"deployAcrossNodes" yaml:"deployAcrossNodes"`
	// Property deployAcrossZones: Specifies whether to distribute application instances to multiple zones.
	//
	// The value true indicates yes, whereas other values indicate no.
	DeployAcrossZones interface{} `field:"optional" json:"deployAcrossZones" yaml:"deployAcrossZones"`
	// Property edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends.
	//
	// Note This parameter is not supported when you deploy an application by using images.
	EdasContainerVersion interface{} `field:"optional" json:"edasContainerVersion" yaml:"edasContainerVersion"`
	// Property enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS).
	EnableAhas interface{} `field:"optional" json:"enableAhas" yaml:"enableAhas"`
	// Property envs: The collection of deployment environment variables.
	//
	// For example, [{"Name":"x","Value":"y"},{"Name":"x2","Value":"y2"}].
	Envs interface{} `field:"optional" json:"envs" yaml:"envs"`
	// Property imageUrl: The image URL.
	//
	// When PackageType is set to Image, this parameter is required.
	ImageUrl interface{} `field:"optional" json:"imageUrl" yaml:"imageUrl"`
	// Property internetSlbId: The ID of the Internet-facing SLB instance.
	//
	// If this parameter is not specified, EDAS automatically purchases a new SLB instance for you.
	InternetSlbId interface{} `field:"optional" json:"internetSlbId" yaml:"internetSlbId"`
	// Property internetSlbPort: The frontend port of the Internet-facing SLB instance.
	//
	// Valid values: 1 to 65535.
	InternetSlbPort interface{} `field:"optional" json:"internetSlbPort" yaml:"internetSlbPort"`
	// Property internetSlbProtocol: The protocol of the Internet-facing SLB instance.
	//
	// Valid values: TCP, HTTP, and HTTPS.
	InternetSlbProtocol interface{} `field:"optional" json:"internetSlbProtocol" yaml:"internetSlbProtocol"`
	// Property internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application.
	//
	// Valid values: 1 to 65535.
	InternetTargetPort interface{} `field:"optional" json:"internetTargetPort" yaml:"internetTargetPort"`
	// Property intranetSlbId: The ID of the internal-facing SLB instance.
	//
	// If this parameter is not specified, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
	IntranetSlbId interface{} `field:"optional" json:"intranetSlbId" yaml:"intranetSlbId"`
	// Property intranetSlbPort: The frontend port of the internal-facing SLB instance.
	//
	// Valid values: 1 to 65535.
	IntranetSlbPort interface{} `field:"optional" json:"intranetSlbPort" yaml:"intranetSlbPort"`
	// Property intranetSlbProtocol: The protocol of the internal-facing SLB instance.
	//
	// Valid values: TCP, HTTP, and HTTPS.
	IntranetSlbProtocol interface{} `field:"optional" json:"intranetSlbProtocol" yaml:"intranetSlbProtocol"`
	// Property intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application.
	//
	// Valid values: 1 to 65535.
	IntranetTargetPort interface{} `field:"optional" json:"intranetTargetPort" yaml:"intranetTargetPort"`
	// Property isMultilingualApp: Specifies whether the application is a multi-language application.
	IsMultilingualApp interface{} `field:"optional" json:"isMultilingualApp" yaml:"isMultilingualApp"`
	// Property javaStartUpConfig: The configuration of Java startup parameters for a Java application.
	//
	// These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Proper parameter settings help reduce the GC overhead, shorten the server response time, and improve the throughput.
	// The system automatically concatenates all startup values as the configuration of Java startup parameters for the application.
	JavaStartUpConfig interface{} `field:"optional" json:"javaStartUpConfig" yaml:"javaStartUpConfig"`
	// Property jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends.
	//
	// Valid values: Open JDK 7 and Open JDK 8. This parameter is not supported when you deploy an application by using images.
	Jdk interface{} `field:"optional" json:"jdk" yaml:"jdk"`
	// Property limitCpu: The maximum number of CPUs allowed for each application instance when the application is running.
	//
	// Unit: cores.
	LimitCpu interface{} `field:"optional" json:"limitCpu" yaml:"limitCpu"`
	// Property limitMem: The maximum amount of memory allowed for each application instance when the application is running.
	//
	// Unit: MB.
	LimitMem interface{} `field:"optional" json:"limitMem" yaml:"limitMem"`
	// Property liveness: The liveness check on the container.
	Liveness interface{} `field:"optional" json:"liveness" yaml:"liveness"`
	// Property localVolume: The configuration for mounting host files to the container where the application is running.
	//
	// For example, the value can be [{"type":"", "nodePath":"\/localfiles", "mountPath":"\/app\/files"}, {"type":"Directory", "nodePath":"\/mnt", "mountPath":"\/app\/storage"}].
	LocalVolume interface{} `field:"optional" json:"localVolume" yaml:"localVolume"`
	// Property logicalRegionId: The ID of the EDAS namespace.
	//
	// This parameter is required for a non-default namespace.
	LogicalRegionId interface{} `field:"optional" json:"logicalRegionId" yaml:"logicalRegionId"`
	// Property mountDescs: The description of the NAS mounting configuration.
	//
	// For example, the value can be [{"NasPath": "\/k8s","MountPath": "\/mnt"}, {"NasPath": "\/files", "MountPath": "\/app\/files"}].
	MountDescs interface{} `field:"optional" json:"mountDescs" yaml:"mountDescs"`
	// Property namespace: The namespace of the Kubernetes cluster.
	//
	// This parameter determines the Kubernetes namespace where your application is deployed. By default, this parameter is set to default.
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
	// Property nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running.
	//
	// The NAS file system must be in the same region as the cluster. The NAS file system must have an available mount target, or have a mount
	// target on the vSwitch in the virtual private cloud (VPC) where the application is located. If this parameter is not specified and the mountDescs field exists, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC by default.
	NasId interface{} `field:"optional" json:"nasId" yaml:"nasId"`
	// Property packageType: The type of the deployment package.
	//
	// Valid values: FatJar, WAR, and Image.
	PackageType interface{} `field:"optional" json:"packageType" yaml:"packageType"`
	// Property packageUrl: The URL of the deployment package.
	//
	// This parameter must be set for the applications
	// that are deployed by using FatJar or WAR packages.
	// Note The version of SDK for Java or Python must be 2.44.0 or later.
	PackageUrl interface{} `field:"optional" json:"packageUrl" yaml:"packageUrl"`
	// Property packageVersion: The version of the deployment package.
	//
	// This parameter is required when the PackageType parameter is set to WAR or FatJar. You must specify a version.
	// Note The version of SDK for Java or Python must be 2.44.0 or later.
	PackageVersion interface{} `field:"optional" json:"packageVersion" yaml:"packageVersion"`
	// Property postStart: The post-start script.
	//
	// For example, {"Exec": {"Command": ["ls", "\/"]}}.
	PostStart interface{} `field:"optional" json:"postStart" yaml:"postStart"`
	// Property preStop: The pre-stop script.
	//
	// For example, {"Exec": {"Command": ["ls", "\/"]}}.
	PreStop interface{} `field:"optional" json:"preStop" yaml:"preStop"`
	// Property readiness: The readiness check on the container.
	Readiness interface{} `field:"optional" json:"readiness" yaml:"readiness"`
	// Property replicas: The number of instances for the application that you want to create.
	//
	// Default: 1.
	Replicas interface{} `field:"optional" json:"replicas" yaml:"replicas"`
	// Property repoId: The ID of the image repository.
	RepoId interface{} `field:"optional" json:"repoId" yaml:"repoId"`
	// Property requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created.
	//
	// Unit: cores. The value 0 indicates no limit.
	RequestsCpu interface{} `field:"optional" json:"requestsCpu" yaml:"requestsCpu"`
	// Property requestsMem: The maximum amount of memory allowed for each application instance when the application is created.
	//
	// Unit: MB. The value 0 indicates no limit.
	RequestsMem interface{} `field:"optional" json:"requestsMem" yaml:"requestsMem"`
	// Property runtimeClassName: The type of the container runtime.
	//
	// This parameter is applicable only to clusters that use sandboxed containers.
	RuntimeClassName interface{} `field:"optional" json:"runtimeClassName" yaml:"runtimeClassName"`
	// Property slsConfigs: The Logstore configurations.
	SlsConfigs interface{} `field:"optional" json:"slsConfigs" yaml:"slsConfigs"`
	// Property storageType: Only SSD is supported.
	StorageType interface{} `field:"optional" json:"storageType" yaml:"storageType"`
	// Property timeout: The timeout interval of the change process.
	//
	// Unit: seconds.
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	// Property uriEncoding: The uniform resource identifier (URI) encoding scheme.
	//
	// Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
	// Note If this parameter is not specified in application configuration, the default URI encoding
	// scheme in the Tomcat container is applied.
	UriEncoding interface{} `field:"optional" json:"uriEncoding" yaml:"uriEncoding"`
	// Property useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled.
	//
	// Note If this parameter is not specified in application configuration, the default value
	// false is applied.
	UseBodyEncoding interface{} `field:"optional" json:"useBodyEncoding" yaml:"useBodyEncoding"`
	// Property webContainer: The version of the Tomcat container on which the deployment package of the application depends.
	//
	// This parameter is applicable to Spring Cloud and Apache Dubbo applications that are deployed by using WAR packages. This parameter is not supported when you deploy an application by using images.
	WebContainer interface{} `field:"optional" json:"webContainer" yaml:"webContainer"`
	// Property webContainerConfig: The Tomcat container configuration.
	WebContainerConfig interface{} `field:"optional" json:"webContainerConfig" yaml:"webContainerConfig"`
}

