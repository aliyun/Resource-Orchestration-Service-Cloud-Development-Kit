package alicloudroscdksae


// Properties for defining a `Application`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
type ApplicationProps struct {
	// Property appName: Application Name.
	//
	// Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	// Property cpu: Each instance of the CPU required, in units of milli core, can not be zero.
	//
	// Currently only supports fixed specifications instance type.
	Cpu interface{} `field:"required" json:"cpu" yaml:"cpu"`
	// Property memory: Each instance of the required memory, in units of MB, can not be zero.
	//
	// Currently only supports fixed specifications instance type.
	Memory interface{} `field:"required" json:"memory" yaml:"memory"`
	// Property namespaceId: EDAS namespace corresponding to ID.
	//
	// Canada supports only the name of the scribe lowercase namespace must begin with a letter.
	// Namespace can interface to obtain from DescribeNamespaceList.
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	// Property packageType: Application package type.
	//
	// Support FatJar, War, Image.
	PackageType interface{} `field:"required" json:"packageType" yaml:"packageType"`
	// Property replicas: The initial number of instances.
	Replicas interface{} `field:"required" json:"replicas" yaml:"replicas"`
	// Property acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.
	AcrAssumeRoleArn interface{} `field:"optional" json:"acrAssumeRoleArn" yaml:"acrAssumeRoleArn"`
	// Property acrInstanceId: Container Image service ACR Enterprise Edition instance ID.
	//
	// Required when ImageUrl serves enterprise edition for container images.
	AcrInstanceId interface{} `field:"optional" json:"acrInstanceId" yaml:"acrInstanceId"`
	// Property appDescription: Application description.
	//
	// No more than 1024 characters.
	AppDescription interface{} `field:"optional" json:"appDescription" yaml:"appDescription"`
	// Property appSource: Application source.
	AppSource interface{} `field:"optional" json:"appSource" yaml:"appSource"`
	// Property associateEip: Whether to bind EIP.
	//
	// The values are explained as follows:
	// - true: Binding.
	// - false: No binding.
	AssociateEip interface{} `field:"optional" json:"associateEip" yaml:"associateEip"`
	// Property autoConfig: Whether to automatically configure the network environment.
	//
	// The values are explained as follows:
	// - true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.
	// - false: SAE manually config the network environment when creating the application.
	AutoConfig interface{} `field:"optional" json:"autoConfig" yaml:"autoConfig"`
	// Property baseAppId: Base application ID.
	BaseAppId interface{} `field:"optional" json:"baseAppId" yaml:"baseAppId"`
	// Property command: Mirroring the start command.
	//
	// The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
	Command interface{} `field:"optional" json:"command" yaml:"command"`
	// Property commandArgs: Mirroring the start command parameters.
	//
	// Parameters required for the start-command. For example: [ "1d"]
	CommandArgs interface{} `field:"optional" json:"commandArgs" yaml:"commandArgs"`
	// Property configMapMountDesc: ConfigMap mount description.
	//
	// Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
	ConfigMapMountDesc interface{} `field:"optional" json:"configMapMountDesc" yaml:"configMapMountDesc"`
	// Property customHostAlias: Custom mapping host vessel.
	//
	// For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
	CustomHostAlias interface{} `field:"optional" json:"customHostAlias" yaml:"customHostAlias"`
	// Property deploy: Whether deployed immediately take effect, the default is false.
	Deploy interface{} `field:"optional" json:"deploy" yaml:"deploy"`
	// Property edasContainerVersion: EDAS pandora runtime environment used by the application.
	EdasContainerVersion interface{} `field:"optional" json:"edasContainerVersion" yaml:"edasContainerVersion"`
	// Property enableEbpf: Whether to enable EBPF.
	//
	// Enable application monitoring for non-Java applications. The values are explained as follows:
	// - true: Enable.
	// - false: Disable.
	EnableEbpf interface{} `field:"optional" json:"enableEbpf" yaml:"enableEbpf"`
	// Property envs: Container environment variable parameters.
	//
	// For example: [{ "name": "envtmp", "value": "0"}].
	Envs interface{} `field:"optional" json:"envs" yaml:"envs"`
	// Property imagePullSecrets: Corresponding to the secret dictionary ID.
	ImagePullSecrets interface{} `field:"optional" json:"imagePullSecrets" yaml:"imagePullSecrets"`
	// Property imageUrl: Mirroring address.
	//
	// Image only type of application can be configured to mirror address.
	ImageUrl interface{} `field:"optional" json:"imageUrl" yaml:"imageUrl"`
	// Property jarStartArgs: Jar package startup application parameters.
	//
	// Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
	// $ JarStartArgs.
	JarStartArgs interface{} `field:"optional" json:"jarStartArgs" yaml:"jarStartArgs"`
	// Property jarStartOptions: Jar start the application package option.
	//
	// Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
	// $ JarStartArgs.
	JarStartOptions interface{} `field:"optional" json:"jarStartOptions" yaml:"jarStartOptions"`
	// Property jdk: Deployment of JDK version of the package depends on.
	//
	// Mirroring not supported.
	Jdk interface{} `field:"optional" json:"jdk" yaml:"jdk"`
	// Property kafkaConfigs: Logs are ingested to Kafka configuration summary information.
	//
	// The values are explained as follows:
	// - kafkaEndpoint: The service access address for the Kafka API
	// - kafkaInstanceId: Kafka instance ID
	// - kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.
	KafkaConfigs interface{} `field:"optional" json:"kafkaConfigs" yaml:"kafkaConfigs"`
	// Property liveness: Container health check, health check fails container will be killed and recovery.
	//
	// Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
	Liveness interface{} `field:"optional" json:"liveness" yaml:"liveness"`
	// Property microRegistration: Select the Nacos registry with the following values: - 0: SAE built-in Nacos.
	//
	// - 1: User-built Nacos.
	// - 2: MSE commercial version of Nacos.
	MicroRegistration interface{} `field:"optional" json:"microRegistration" yaml:"microRegistration"`
	// Property microRegistrationConfig: Registry configuration information.
	MicroRegistrationConfig interface{} `field:"optional" json:"microRegistrationConfig" yaml:"microRegistrationConfig"`
	// Property mountDesc: Mount Description.
	MountDesc interface{} `field:"optional" json:"mountDesc" yaml:"mountDesc"`
	// Property mountHost: nas mount point in the application of vpc.
	MountHost interface{} `field:"optional" json:"mountHost" yaml:"mountHost"`
	// Property nasConfigs: Configuration to mount the NAS.
	//
	// The values are explained as follows:
	// - mountPath: The container mount path
	// - readOnly: A value of false indicates read and write permission.
	// - nasId: NAS ID
	// - mountDomain: The container mount point address For more information, see DescribeMountTargets.
	// - nasPath: NAS relative file directory.
	NasConfigs interface{} `field:"optional" json:"nasConfigs" yaml:"nasConfigs"`
	// Property nasId: Mount the NAS ID, you must be in the same region and cluster.
	//
	// It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
	NasId interface{} `field:"optional" json:"nasId" yaml:"nasId"`
	// Property ossAkId: AccessKey ID of the OSS.
	OssAkId interface{} `field:"optional" json:"ossAkId" yaml:"ossAkId"`
	// Property ossAkSecret: AccessKey Secret of the OSS.
	OssAkSecret interface{} `field:"optional" json:"ossAkSecret" yaml:"ossAkSecret"`
	// Property ossMountDescs: OSS mount description information.
	//
	// The parameters are described as follows:
	// - bucketName: The name of the Bucket
	// - bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.
	// - mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.
	// - readOnly: This specifies whether the container path has read-only permissions for mount directory resources:
	//    - true: Read-only permission
	// - false: Read and write permissions.
	OssMountDescs interface{} `field:"optional" json:"ossMountDescs" yaml:"ossMountDescs"`
	// Property packageUrl: Deployment packages address.
	//
	// Only FatJar War or the type of application can be configured to deploy packet address.
	PackageUrl interface{} `field:"optional" json:"packageUrl" yaml:"packageUrl"`
	// Property packageVersion: The version number of the deployed package, War FatJar type required.
	//
	// Please customize it meaning.
	PackageVersion interface{} `field:"optional" json:"packageVersion" yaml:"packageVersion"`
	// Property php: PHP version.
	Php interface{} `field:"optional" json:"php" yaml:"php"`
	// Property phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path.
	//
	// You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
	PhpArmsConfigLocation interface{} `field:"optional" json:"phpArmsConfigLocation" yaml:"phpArmsConfigLocation"`
	// Property phpConfig: PHP configuration file contents.
	PhpConfig interface{} `field:"optional" json:"phpConfig" yaml:"phpConfig"`
	// Property phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.
	PhpConfigLocation interface{} `field:"optional" json:"phpConfigLocation" yaml:"phpConfigLocation"`
	// Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "\/ etc \/ group"}}.
	PostStart interface{} `field:"optional" json:"postStart" yaml:"postStart"`
	// Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "\/ etc \/ group"}}.
	PreStop interface{} `field:"optional" json:"preStop" yaml:"preStop"`
	// Property programmingLanguage: Create the stack language for the application.
	//
	// The values are explained as follows:
	// - java: The Java language
	// - php: PHP language.
	// - other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.
	ProgrammingLanguage interface{} `field:"optional" json:"programmingLanguage" yaml:"programmingLanguage"`
	// Property pvtzDiscoverySvc: Enable K8s Service registration discovery.
	//
	// The values are explained as follows:
	// - serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.
	// - namespaceId: The namespace ID
	// - portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.
	// - portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.
	// - enable: Enable K8s Service registration discovery.
	PvtzDiscoverySvc interface{} `field:"optional" json:"pvtzDiscoverySvc" yaml:"pvtzDiscoverySvc"`
	// Property python: Python version.
	//
	// Supports PYTHON 3.9.15
	Python interface{} `field:"optional" json:"python" yaml:"python"`
	// Property pythonModules: Install custom module dependencies.
	//
	// The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
	PythonModules interface{} `field:"optional" json:"pythonModules" yaml:"pythonModules"`
	// Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted.
	//
	// Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
	Readiness interface{} `field:"optional" json:"readiness" yaml:"readiness"`
	// Property saeVersion: SAE version.
	SaeVersion interface{} `field:"optional" json:"saeVersion" yaml:"saeVersion"`
	// Property securityGroupId: Security group ID.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property serviceTags: Service tags.
	ServiceTags interface{} `field:"optional" json:"serviceTags" yaml:"serviceTags"`
	// Property slsConfigs: Log collection configuration file.
	SlsConfigs interface{} `field:"optional" json:"slsConfigs" yaml:"slsConfigs"`
	// Property tags: Tags to attach to application.
	//
	// Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosApplication_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds.
	//
	// The value ranges from 1 to 300.
	TerminationGracePeriodSeconds interface{} `field:"optional" json:"terminationGracePeriodSeconds" yaml:"terminationGracePeriodSeconds"`
	// Property timezone: Application time zone.
	//
	// Default Asia\/Shanghai.
	Timezone interface{} `field:"optional" json:"timezone" yaml:"timezone"`
	// Property tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration: - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024.
	//
	// If not configured, it defaults to 8080.
	// - contextPath: The access path, defaults to the root directory "\/"
	// - maxThreads: This config the number of connections in the pool; the default is 400.
	// - uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.
	// - useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).
	TomcatConfig interface{} `field:"optional" json:"tomcatConfig" yaml:"tomcatConfig"`
	// Property vpcId: EDAS namespace corresponding VPC.
	//
	// In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: Application examples where the elastic card virtual switch.
	//
	// The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property warStartOptions: War Start the application package option.
	//
	// Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
	WarStartOptions interface{} `field:"optional" json:"warStartOptions" yaml:"warStartOptions"`
	// Property webContainer: Tomcat deployment of the package depends on the version.
	//
	// Mirroring not supported.
	WebContainer interface{} `field:"optional" json:"webContainer" yaml:"webContainer"`
}

