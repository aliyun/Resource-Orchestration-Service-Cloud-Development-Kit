using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `ALIYUN::SAE::Application`.</summary>
    [JsiiInterface(nativeType: typeof(IApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.ApplicationProps")]
    public interface IApplicationProps
    {
        /// <summary>Property appName: Application Name.</summary>
        /// <remarks>
        /// Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
        /// </remarks>
        [JsiiProperty(name: "appName", typeJson: "{\"primitive\":\"string\"}")]
        string AppName
        {
            get;
        }

        /// <summary>Property cpu: Each instance of the CPU required, in units of milli core, can not be zero.</summary>
        /// <remarks>
        /// Currently only supports fixed specifications instance type.
        /// </remarks>
        [JsiiProperty(name: "cpu", typeJson: "{\"primitive\":\"number\"}")]
        double Cpu
        {
            get;
        }

        /// <summary>Property memory: Each instance of the required memory, in units of MB, can not be zero.</summary>
        /// <remarks>
        /// Currently only supports fixed specifications instance type.
        /// </remarks>
        [JsiiProperty(name: "memory", typeJson: "{\"primitive\":\"number\"}")]
        double Memory
        {
            get;
        }

        /// <summary>Property namespaceId: EDAS namespace corresponding to ID.</summary>
        /// <remarks>
        /// Canada supports only the name of the scribe lowercase namespace must begin with a letter.
        /// Namespace can interface to obtain from DescribeNamespaceList.
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"primitive\":\"string\"}")]
        string NamespaceId
        {
            get;
        }

        /// <summary>Property packageType: Application package type.</summary>
        /// <remarks>
        /// Support FatJar, War, Image.
        /// </remarks>
        [JsiiProperty(name: "packageType", typeJson: "{\"primitive\":\"string\"}")]
        string PackageType
        {
            get;
        }

        /// <summary>Property replicas: The initial number of instances.</summary>
        [JsiiProperty(name: "replicas", typeJson: "{\"primitive\":\"number\"}")]
        double Replicas
        {
            get;
        }

        /// <summary>Property appDescription: Application description.</summary>
        /// <remarks>
        /// No more than 1024 characters.
        /// </remarks>
        [JsiiProperty(name: "appDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AppDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property command: Mirroring the start command.</summary>
        /// <remarks>
        /// The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
        /// </remarks>
        [JsiiProperty(name: "command", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Command
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property commandArgs: Mirroring the start command parameters.</summary>
        /// <remarks>
        /// Parameters required for the start-command. For example: [ "1d"]
        /// </remarks>
        [JsiiProperty(name: "commandArgs", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CommandArgs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property customHostAlias: Custom mapping host vessel.</summary>
        /// <remarks>
        /// For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
        /// </remarks>
        [JsiiProperty(name: "customHostAlias", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CustomHostAlias
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deploy: Whether deployed immediately take effect, the default is false.</summary>
        [JsiiProperty(name: "deploy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Deploy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property edasContainerVersion: EDAS pandora runtime environment used by the application.</summary>
        [JsiiProperty(name: "edasContainerVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EdasContainerVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property envs: Container environment variable parameters.</summary>
        /// <remarks>
        /// For example: [{ "name": "envtmp", "value": "0"}]
        /// </remarks>
        [JsiiProperty(name: "envs", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Envs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageUrl: Mirroring address.</summary>
        /// <remarks>
        /// Image only type of application can be configured to mirror address.
        /// </remarks>
        [JsiiProperty(name: "imageUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ImageUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property jarStartArgs: Jar package startup application parameters.</summary>
        /// <remarks>
        /// Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        /// $ JarStartArgs
        /// </remarks>
        [JsiiProperty(name: "jarStartArgs", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? JarStartArgs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property jarStartOptions: Jar start the application package option.</summary>
        /// <remarks>
        /// Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        /// $ JarStartArgs
        /// </remarks>
        [JsiiProperty(name: "jarStartOptions", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? JarStartOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property jdk: Deployment of JDK version of the package depends on.</summary>
        /// <remarks>
        /// Mirroring not supported.
        /// </remarks>
        [JsiiProperty(name: "jdk", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Jdk
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property liveness: Container health check, health check fails container will be killed and recovery.</summary>
        /// <remarks>
        /// Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
        /// </remarks>
        [JsiiProperty(name: "liveness", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Liveness
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mountDesc: Mount Description.</summary>
        [JsiiProperty(name: "mountDesc", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MountDesc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mountHost: nas mount point in the application of vpc.</summary>
        [JsiiProperty(name: "mountHost", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MountHost
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nasId: Mount the NAS ID, you must be in the same region and cluster.</summary>
        /// <remarks>
        /// It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
        /// </remarks>
        [JsiiProperty(name: "nasId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NasId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property packageUrl: Deployment packages address.</summary>
        /// <remarks>
        /// Only FatJar War or the type of application can be configured to deploy packet address.
        /// </remarks>
        [JsiiProperty(name: "packageUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PackageUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property packageVersion: The version number of the deployed package, War FatJar type required.</summary>
        /// <remarks>
        /// Please customize it meaning.
        /// </remarks>
        [JsiiProperty(name: "packageVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PackageVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}.</summary>
        [JsiiProperty(name: "postStart", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PostStart
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}.</summary>
        [JsiiProperty(name: "preStop", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PreStop
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted.</summary>
        /// <remarks>
        /// Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
        /// </remarks>
        [JsiiProperty(name: "readiness", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Readiness
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: Security group ID.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property slsConfigs: Log collection configuration file.</summary>
        [JsiiProperty(name: "slsConfigs", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SlsConfigs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to application.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timezone: Application time zone.</summary>
        /// <remarks>
        /// Default Asia/Shanghai.
        /// </remarks>
        [JsiiProperty(name: "timezone", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Timezone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: EDAS namespace corresponding VPC.</summary>
        /// <remarks>
        /// In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: Application examples where the elastic card virtual switch.</summary>
        /// <remarks>
        /// The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property warStartOptions: War Start the application package option.</summary>
        /// <remarks>
        /// Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
        /// </remarks>
        [JsiiProperty(name: "warStartOptions", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? WarStartOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property webContainer: Tomcat deployment of the package depends on the version.</summary>
        /// <remarks>
        /// Mirroring not supported.
        /// </remarks>
        [JsiiProperty(name: "webContainer", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? WebContainer
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SAE::Application`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.ApplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.IApplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appName: Application Name.</summary>
            /// <remarks>
            /// Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
            /// </remarks>
            [JsiiProperty(name: "appName", typeJson: "{\"primitive\":\"string\"}")]
            public string AppName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property cpu: Each instance of the CPU required, in units of milli core, can not be zero.</summary>
            /// <remarks>
            /// Currently only supports fixed specifications instance type.
            /// </remarks>
            [JsiiProperty(name: "cpu", typeJson: "{\"primitive\":\"number\"}")]
            public double Cpu
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property memory: Each instance of the required memory, in units of MB, can not be zero.</summary>
            /// <remarks>
            /// Currently only supports fixed specifications instance type.
            /// </remarks>
            [JsiiProperty(name: "memory", typeJson: "{\"primitive\":\"number\"}")]
            public double Memory
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property namespaceId: EDAS namespace corresponding to ID.</summary>
            /// <remarks>
            /// Canada supports only the name of the scribe lowercase namespace must begin with a letter.
            /// Namespace can interface to obtain from DescribeNamespaceList.
            /// </remarks>
            [JsiiProperty(name: "namespaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string NamespaceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property packageType: Application package type.</summary>
            /// <remarks>
            /// Support FatJar, War, Image.
            /// </remarks>
            [JsiiProperty(name: "packageType", typeJson: "{\"primitive\":\"string\"}")]
            public string PackageType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property replicas: The initial number of instances.</summary>
            [JsiiProperty(name: "replicas", typeJson: "{\"primitive\":\"number\"}")]
            public double Replicas
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property appDescription: Application description.</summary>
            /// <remarks>
            /// No more than 1024 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AppDescription
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property command: Mirroring the start command.</summary>
            /// <remarks>
            /// The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "command", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Command
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property commandArgs: Mirroring the start command parameters.</summary>
            /// <remarks>
            /// Parameters required for the start-command. For example: [ "1d"]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "commandArgs", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CommandArgs
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property customHostAlias: Custom mapping host vessel.</summary>
            /// <remarks>
            /// For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customHostAlias", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CustomHostAlias
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property deploy: Whether deployed immediately take effect, the default is false.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deploy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Deploy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property edasContainerVersion: EDAS pandora runtime environment used by the application.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "edasContainerVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EdasContainerVersion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property envs: Container environment variable parameters.</summary>
            /// <remarks>
            /// For example: [{ "name": "envtmp", "value": "0"}]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "envs", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Envs
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property imageUrl: Mirroring address.</summary>
            /// <remarks>
            /// Image only type of application can be configured to mirror address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ImageUrl
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property jarStartArgs: Jar package startup application parameters.</summary>
            /// <remarks>
            /// Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
            /// $ JarStartArgs
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jarStartArgs", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? JarStartArgs
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property jarStartOptions: Jar start the application package option.</summary>
            /// <remarks>
            /// Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
            /// $ JarStartArgs
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jarStartOptions", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? JarStartOptions
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property jdk: Deployment of JDK version of the package depends on.</summary>
            /// <remarks>
            /// Mirroring not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jdk", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Jdk
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property liveness: Container health check, health check fails container will be killed and recovery.</summary>
            /// <remarks>
            /// Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "liveness", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Liveness
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property mountDesc: Mount Description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "mountDesc", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MountDesc
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property mountHost: nas mount point in the application of vpc.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "mountHost", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MountHost
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property nasId: Mount the NAS ID, you must be in the same region and cluster.</summary>
            /// <remarks>
            /// It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nasId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NasId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property packageUrl: Deployment packages address.</summary>
            /// <remarks>
            /// Only FatJar War or the type of application can be configured to deploy packet address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "packageUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PackageUrl
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property packageVersion: The version number of the deployed package, War FatJar type required.</summary>
            /// <remarks>
            /// Please customize it meaning.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "packageVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PackageVersion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "postStart", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PostStart
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "preStop", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PreStop
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted.</summary>
            /// <remarks>
            /// Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "readiness", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Readiness
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityGroupId: Security group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property slsConfigs: Log collection configuration file.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "slsConfigs", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SlsConfigs
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to application.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property timezone: Application time zone.</summary>
            /// <remarks>
            /// Default Asia/Shanghai.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timezone", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Timezone
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vpcId: EDAS namespace corresponding VPC.</summary>
            /// <remarks>
            /// In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vSwitchId: Application examples where the elastic card virtual switch.</summary>
            /// <remarks>
            /// The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property warStartOptions: War Start the application package option.</summary>
            /// <remarks>
            /// Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "warStartOptions", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? WarStartOptions
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property webContainer: Tomcat deployment of the package depends on the version.</summary>
            /// <remarks>
            /// Mirroring not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "webContainer", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? WebContainer
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
