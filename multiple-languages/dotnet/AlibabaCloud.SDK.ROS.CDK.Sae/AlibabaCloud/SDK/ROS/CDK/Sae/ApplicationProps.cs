using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAE::Application`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sae.ApplicationProps")]
    public class ApplicationProps : AlibabaCloud.SDK.ROS.CDK.Sae.IApplicationProps
    {
        /// <summary>Property appName: Application Name.</summary>
        /// <remarks>
        /// Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
        /// </remarks>
        [JsiiProperty(name: "appName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AppName
        {
            get;
            set;
        }

        /// <summary>Property cpu: Each instance of the CPU required, in units of milli core, can not be zero.</summary>
        /// <remarks>
        /// Currently only supports fixed specifications instance type.
        /// </remarks>
        [JsiiProperty(name: "cpu", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Cpu
        {
            get;
            set;
        }

        /// <summary>Property memory: Each instance of the required memory, in units of MB, can not be zero.</summary>
        /// <remarks>
        /// Currently only supports fixed specifications instance type.
        /// </remarks>
        [JsiiProperty(name: "memory", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Memory
        {
            get;
            set;
        }

        /// <summary>Property namespaceId: EDAS namespace corresponding to ID.</summary>
        /// <remarks>
        /// Canada supports only the name of the scribe lowercase namespace must begin with a letter.
        /// Namespace can interface to obtain from DescribeNamespaceList.
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NamespaceId
        {
            get;
            set;
        }

        /// <summary>Property packageType: Application package type.</summary>
        /// <remarks>
        /// Support FatJar, War, Image.
        /// </remarks>
        [JsiiProperty(name: "packageType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PackageType
        {
            get;
            set;
        }

        /// <summary>Property replicas: The initial number of instances.</summary>
        [JsiiProperty(name: "replicas", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Replicas
        {
            get;
            set;
        }

        /// <summary>Property appDescription: Application description.</summary>
        /// <remarks>
        /// No more than 1024 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "appDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AppDescription
        {
            get;
            set;
        }

        /// <summary>Property command: Mirroring the start command.</summary>
        /// <remarks>
        /// The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "command", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Command
        {
            get;
            set;
        }

        /// <summary>Property commandArgs: Mirroring the start command parameters.</summary>
        /// <remarks>
        /// Parameters required for the start-command. For example: [ "1d"]
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "commandArgs", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CommandArgs
        {
            get;
            set;
        }

        /// <summary>Property customHostAlias: Custom mapping host vessel.</summary>
        /// <remarks>
        /// For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "customHostAlias", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CustomHostAlias
        {
            get;
            set;
        }

        /// <summary>Property deploy: Whether deployed immediately take effect, the default is false.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "deploy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Deploy
        {
            get;
            set;
        }

        /// <summary>Property edasContainerVersion: EDAS pandora runtime environment used by the application.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "edasContainerVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EdasContainerVersion
        {
            get;
            set;
        }

        /// <summary>Property envs: Container environment variable parameters.</summary>
        /// <remarks>
        /// For example: [{ "name": "envtmp", "value": "0"}]
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "envs", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Envs
        {
            get;
            set;
        }

        /// <summary>Property imageUrl: Mirroring address.</summary>
        /// <remarks>
        /// Image only type of application can be configured to mirror address.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ImageUrl
        {
            get;
            set;
        }

        /// <summary>Property jarStartArgs: Jar package startup application parameters.</summary>
        /// <remarks>
        /// Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        /// $ JarStartArgs
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "jarStartArgs", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? JarStartArgs
        {
            get;
            set;
        }

        /// <summary>Property jarStartOptions: Jar start the application package option.</summary>
        /// <remarks>
        /// Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        /// $ JarStartArgs
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "jarStartOptions", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? JarStartOptions
        {
            get;
            set;
        }

        /// <summary>Property jdk: Deployment of JDK version of the package depends on.</summary>
        /// <remarks>
        /// Mirroring not supported.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "jdk", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Jdk
        {
            get;
            set;
        }

        /// <summary>Property liveness: Container health check, health check fails container will be killed and recovery.</summary>
        /// <remarks>
        /// Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "liveness", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Liveness
        {
            get;
            set;
        }

        /// <summary>Property mountDesc: Mount Description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "mountDesc", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MountDesc
        {
            get;
            set;
        }

        /// <summary>Property mountHost: nas mount point in the application of vpc.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "mountHost", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MountHost
        {
            get;
            set;
        }

        /// <summary>Property nasId: Mount the NAS ID, you must be in the same region and cluster.</summary>
        /// <remarks>
        /// It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nasId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NasId
        {
            get;
            set;
        }

        /// <summary>Property packageUrl: Deployment packages address.</summary>
        /// <remarks>
        /// Only FatJar War or the type of application can be configured to deploy packet address.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "packageUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PackageUrl
        {
            get;
            set;
        }

        /// <summary>Property packageVersion: The version number of the deployed package, War FatJar type required.</summary>
        /// <remarks>
        /// Please customize it meaning.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "packageVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PackageVersion
        {
            get;
            set;
        }

        /// <summary>Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "postStart", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PostStart
        {
            get;
            set;
        }

        /// <summary>Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "preStop", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PreStop
        {
            get;
            set;
        }

        /// <summary>Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted.</summary>
        /// <remarks>
        /// Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "readiness", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Readiness
        {
            get;
            set;
        }

        /// <summary>Property securityGroupId: Security group ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
        }

        /// <summary>Property slsConfigs: Log collection configuration file.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "slsConfigs", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SlsConfigs
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to application.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property timezone: Application time zone.</summary>
        /// <remarks>
        /// Default Asia/Shanghai.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timezone", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Timezone
        {
            get;
            set;
        }

        /// <summary>Property vpcId: EDAS namespace corresponding VPC.</summary>
        /// <remarks>
        /// In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: Application examples where the elastic card virtual switch.</summary>
        /// <remarks>
        /// The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property warStartOptions: War Start the application package option.</summary>
        /// <remarks>
        /// Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "warStartOptions", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? WarStartOptions
        {
            get;
            set;
        }

        /// <summary>Property webContainer: Tomcat deployment of the package depends on the version.</summary>
        /// <remarks>
        /// Mirroring not supported.
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
