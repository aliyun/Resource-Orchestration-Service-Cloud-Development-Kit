using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `Application`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.ApplicationProps")]
    public interface IApplicationProps
    {
        /// <summary>Property appName: Application Name.</summary>
        /// <remarks>
        /// Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
        /// </remarks>
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppName
        {
            get;
        }

        /// <summary>Property cpu: Each instance of the CPU required, in units of milli core, can not be zero.</summary>
        /// <remarks>
        /// Currently only supports fixed specifications instance type.
        /// </remarks>
        [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Cpu
        {
            get;
        }

        /// <summary>Property memory: Each instance of the required memory, in units of MB, can not be zero.</summary>
        /// <remarks>
        /// Currently only supports fixed specifications instance type.
        /// </remarks>
        [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Memory
        {
            get;
        }

        /// <summary>Property namespaceId: EDAS namespace corresponding to ID.</summary>
        /// <remarks>
        /// Canada supports only the name of the scribe lowercase namespace must begin with a letter.
        /// Namespace can interface to obtain from DescribeNamespaceList.
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NamespaceId
        {
            get;
        }

        /// <summary>Property packageType: Application package type.</summary>
        /// <remarks>
        /// Support FatJar, War, Image.
        /// </remarks>
        [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PackageType
        {
            get;
        }

        /// <summary>Property replicas: The initial number of instances.</summary>
        [JsiiProperty(name: "replicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Replicas
        {
            get;
        }

        /// <summary>Property appDescription: Application description.</summary>
        /// <remarks>
        /// No more than 1024 characters.
        /// </remarks>
        [JsiiProperty(name: "appDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppDescription
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
        [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Command
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
        [JsiiProperty(name: "commandArgs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CommandArgs
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
        [JsiiProperty(name: "customHostAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomHostAlias
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
        [JsiiProperty(name: "edasContainerVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EdasContainerVersion
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
        [JsiiProperty(name: "envs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Envs
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
        [JsiiProperty(name: "imageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageUrl
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
        [JsiiProperty(name: "jarStartArgs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JarStartArgs
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
        [JsiiProperty(name: "jarStartOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JarStartOptions
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
        [JsiiProperty(name: "jdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Jdk
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
        [JsiiProperty(name: "liveness", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Liveness
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mountDesc: Mount Description.</summary>
        [JsiiProperty(name: "mountDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MountDesc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mountHost: nas mount point in the application of vpc.</summary>
        [JsiiProperty(name: "mountHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MountHost
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
        [JsiiProperty(name: "nasId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NasId
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
        [JsiiProperty(name: "packageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PackageUrl
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
        [JsiiProperty(name: "packageVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PackageVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "\/ etc \/ group"}}.</summary>
        [JsiiProperty(name: "postStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PostStart
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "\/ etc \/ group"}}.</summary>
        [JsiiProperty(name: "preStop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PreStop
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
        [JsiiProperty(name: "readiness", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Readiness
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: Security group ID.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property slsConfigs: Log collection configuration file.</summary>
        [JsiiProperty(name: "slsConfigs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlsConfigs
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplication.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Sae.RosApplication.ITagsProperty[]? Tags
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
        [JsiiProperty(name: "timezone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timezone
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
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
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
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
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
        [JsiiProperty(name: "warStartOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WarStartOptions
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
        [JsiiProperty(name: "webContainer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WebContainer
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Application`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
        /// </remarks>
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
            [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cpu: Each instance of the CPU required, in units of milli core, can not be zero.</summary>
            /// <remarks>
            /// Currently only supports fixed specifications instance type.
            /// </remarks>
            [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Cpu
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property memory: Each instance of the required memory, in units of MB, can not be zero.</summary>
            /// <remarks>
            /// Currently only supports fixed specifications instance type.
            /// </remarks>
            [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Memory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property namespaceId: EDAS namespace corresponding to ID.</summary>
            /// <remarks>
            /// Canada supports only the name of the scribe lowercase namespace must begin with a letter.
            /// Namespace can interface to obtain from DescribeNamespaceList.
            /// </remarks>
            [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NamespaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property packageType: Application package type.</summary>
            /// <remarks>
            /// Support FatJar, War, Image.
            /// </remarks>
            [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PackageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property replicas: The initial number of instances.</summary>
            [JsiiProperty(name: "replicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Replicas
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property appDescription: Application description.</summary>
            /// <remarks>
            /// No more than 1024 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property command: Mirroring the start command.</summary>
            /// <remarks>
            /// The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Command
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property commandArgs: Mirroring the start command parameters.</summary>
            /// <remarks>
            /// Parameters required for the start-command. For example: [ "1d"]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "commandArgs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CommandArgs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property customHostAlias: Custom mapping host vessel.</summary>
            /// <remarks>
            /// For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customHostAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomHostAlias
            {
                get => GetInstanceProperty<object?>();
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
            [JsiiProperty(name: "edasContainerVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EdasContainerVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property envs: Container environment variable parameters.</summary>
            /// <remarks>
            /// For example: [{ "name": "envtmp", "value": "0"}]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "envs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Envs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageUrl: Mirroring address.</summary>
            /// <remarks>
            /// Image only type of application can be configured to mirror address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property jarStartArgs: Jar package startup application parameters.</summary>
            /// <remarks>
            /// Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
            /// $ JarStartArgs
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jarStartArgs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JarStartArgs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property jarStartOptions: Jar start the application package option.</summary>
            /// <remarks>
            /// Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
            /// $ JarStartArgs
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jarStartOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JarStartOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property jdk: Deployment of JDK version of the package depends on.</summary>
            /// <remarks>
            /// Mirroring not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Jdk
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property liveness: Container health check, health check fails container will be killed and recovery.</summary>
            /// <remarks>
            /// Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "liveness", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Liveness
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mountDesc: Mount Description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "mountDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MountDesc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mountHost: nas mount point in the application of vpc.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "mountHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MountHost
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nasId: Mount the NAS ID, you must be in the same region and cluster.</summary>
            /// <remarks>
            /// It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nasId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NasId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property packageUrl: Deployment packages address.</summary>
            /// <remarks>
            /// Only FatJar War or the type of application can be configured to deploy packet address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "packageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PackageUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property packageVersion: The version number of the deployed package, War FatJar type required.</summary>
            /// <remarks>
            /// Please customize it meaning.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "packageVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PackageVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "\/ etc \/ group"}}.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "postStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PostStart
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "\/ etc \/ group"}}.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "preStop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PreStop
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted.</summary>
            /// <remarks>
            /// Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "readiness", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Readiness
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupId: Security group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property slsConfigs: Log collection configuration file.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "slsConfigs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlsConfigs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to application.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplication.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Sae.RosApplication.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Sae.RosApplication.ITagsProperty[]?>();
            }

            /// <summary>Property timezone: Application time zone.</summary>
            /// <remarks>
            /// Default Asia/Shanghai.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timezone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timezone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: EDAS namespace corresponding VPC.</summary>
            /// <remarks>
            /// In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: Application examples where the elastic card virtual switch.</summary>
            /// <remarks>
            /// The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property warStartOptions: War Start the application package option.</summary>
            /// <remarks>
            /// Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "warStartOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WarStartOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property webContainer: Tomcat deployment of the package depends on the version.</summary>
            /// <remarks>
            /// Mirroring not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "webContainer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WebContainer
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
