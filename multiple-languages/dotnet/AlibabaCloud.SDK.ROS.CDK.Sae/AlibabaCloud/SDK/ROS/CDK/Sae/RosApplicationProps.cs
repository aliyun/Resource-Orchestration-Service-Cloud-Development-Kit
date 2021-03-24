using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAE::Application`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sae.RosApplicationProps")]
    public class RosApplicationProps : AlibabaCloud.SDK.ROS.CDK.Sae.IRosApplicationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
        /// </remarks>
        [JsiiProperty(name: "appName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AppName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
        /// </remarks>
        [JsiiProperty(name: "cpu", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Cpu
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
        /// </remarks>
        [JsiiProperty(name: "memory", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Memory
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
        /// Namespace can interface to obtain from DescribeNamespaceList.
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NamespaceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: packageType: Application package type. Support FatJar, War, Image.
        /// </remarks>
        [JsiiProperty(name: "packageType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PackageType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: replicas: The initial number of instances.
        /// </remarks>
        [JsiiProperty(name: "replicas", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Replicas
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: appDescription: Application description. No more than 1024 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "appDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AppDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "command", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Command
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "commandArgs", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CommandArgs
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "customHostAlias", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CustomHostAlias
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deploy: Whether deployed immediately take effect, the default is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deploy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Deploy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: edasContainerVersion: EDAS pandora runtime environment used by the application.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "edasContainerVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EdasContainerVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "envs", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Envs
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ImageUrl
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        /// $ JarStartArgs
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "jarStartArgs", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? JarStartArgs
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        /// $ JarStartArgs
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "jarStartOptions", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? JarStartOptions
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "jdk", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Jdk
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "liveness", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Liveness
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: mountDesc: Mount Description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "mountDesc", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MountDesc
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: mountHost: nas mount point in the application of vpc.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "mountHost", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MountHost
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nasId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NasId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "packageUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PackageUrl
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "packageVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PackageVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "postStart", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PostStart
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "preStop", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PreStop
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "readiness", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Readiness
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Security group ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsConfigs: Log collection configuration file
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slsConfigs", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SlsConfigs
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: timezone: Application time zone. Default Asia/Shanghai.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timezone", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Timezone
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong></strong>: " start
        /// 
        /// <strong>Property</strong>: warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "warStartOptions", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? WarStartOptions
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "webContainer", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? WebContainer
        {
            get;
            set;
        }
    }
}
