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
	// Property appDescription: Application description.
	//
	// No more than 1024 characters.
	AppDescription interface{} `field:"optional" json:"appDescription" yaml:"appDescription"`
	// Property command: Mirroring the start command.
	//
	// The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
	Command interface{} `field:"optional" json:"command" yaml:"command"`
	// Property commandArgs: Mirroring the start command parameters.
	//
	// Parameters required for the start-command. For example: [ "1d"]
	CommandArgs interface{} `field:"optional" json:"commandArgs" yaml:"commandArgs"`
	// Property customHostAlias: Custom mapping host vessel.
	//
	// For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
	CustomHostAlias interface{} `field:"optional" json:"customHostAlias" yaml:"customHostAlias"`
	// Property deploy: Whether deployed immediately take effect, the default is false.
	Deploy interface{} `field:"optional" json:"deploy" yaml:"deploy"`
	// Property edasContainerVersion: EDAS pandora runtime environment used by the application.
	EdasContainerVersion interface{} `field:"optional" json:"edasContainerVersion" yaml:"edasContainerVersion"`
	// Property envs: Container environment variable parameters.
	//
	// For example: [{ "name": "envtmp", "value": "0"}].
	Envs interface{} `field:"optional" json:"envs" yaml:"envs"`
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
	// Property liveness: Container health check, health check fails container will be killed and recovery.
	//
	// Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
	Liveness interface{} `field:"optional" json:"liveness" yaml:"liveness"`
	// Property mountDesc: Mount Description.
	MountDesc interface{} `field:"optional" json:"mountDesc" yaml:"mountDesc"`
	// Property mountHost: nas mount point in the application of vpc.
	MountHost interface{} `field:"optional" json:"mountHost" yaml:"mountHost"`
	// Property nasId: Mount the NAS ID, you must be in the same region and cluster.
	//
	// It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
	NasId interface{} `field:"optional" json:"nasId" yaml:"nasId"`
	// Property packageUrl: Deployment packages address.
	//
	// Only FatJar War or the type of application can be configured to deploy packet address.
	PackageUrl interface{} `field:"optional" json:"packageUrl" yaml:"packageUrl"`
	// Property packageVersion: The version number of the deployed package, War FatJar type required.
	//
	// Please customize it meaning.
	PackageVersion interface{} `field:"optional" json:"packageVersion" yaml:"packageVersion"`
	// Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "\/ etc \/ group"}}.
	PostStart interface{} `field:"optional" json:"postStart" yaml:"postStart"`
	// Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "\/ etc \/ group"}}.
	PreStop interface{} `field:"optional" json:"preStop" yaml:"preStop"`
	// Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted.
	//
	// Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
	Readiness interface{} `field:"optional" json:"readiness" yaml:"readiness"`
	// Property securityGroupId: Security group ID.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property slsConfigs: Log collection configuration file.
	SlsConfigs interface{} `field:"optional" json:"slsConfigs" yaml:"slsConfigs"`
	// Property tags: Tags to attach to application.
	//
	// Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosApplication_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property timezone: Application time zone.
	//
	// Default Asia\/Shanghai.
	Timezone interface{} `field:"optional" json:"timezone" yaml:"timezone"`
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

