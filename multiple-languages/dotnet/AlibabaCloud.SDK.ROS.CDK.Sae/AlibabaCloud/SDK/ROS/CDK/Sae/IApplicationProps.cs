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

        /// <summary>Property acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.</summary>
        [JsiiProperty(name: "acrAssumeRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AcrAssumeRoleArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property acrInstanceId: Container Image service ACR Enterprise Edition instance ID.</summary>
        /// <remarks>
        /// Required when ImageUrl serves enterprise edition for container images.
        /// </remarks>
        [JsiiProperty(name: "acrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AcrInstanceId
        {
            get
            {
                return null;
            }
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

        /// <summary>Property appSource: Application source.</summary>
        [JsiiProperty(name: "appSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppSource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property associateEip: Whether to bind EIP.</summary>
        /// <remarks>
        /// The values are explained as follows:
        ///
        /// <list type="bullet">
        /// <description>true: Binding.</description>
        /// <description>false: No binding</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "associateEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AssociateEip
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoConfig: Whether to automatically configure the network environment.</summary>
        /// <remarks>
        /// The values are explained as follows:
        ///
        /// <list type="bullet">
        /// <description>true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.</description>
        /// <description>false: SAE manually config the network environment when creating the application.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "autoConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property baseAppId: Base application ID.</summary>
        [JsiiProperty(name: "baseAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BaseAppId
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

        /// <summary>Property configMapMountDesc: ConfigMap mount description.</summary>
        /// <remarks>
        /// Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
        /// </remarks>
        [JsiiProperty(name: "configMapMountDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConfigMapMountDesc
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

        /// <summary>Property deploy: Whether deployed immediately take effect, the default is true.</summary>
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

        /// <summary>Property enableEbpf: Whether to enable EBPF.</summary>
        /// <remarks>
        /// Enable application monitoring for non-Java applications. The values are explained as follows:
        ///
        /// <list type="bullet">
        /// <description>true: Enable.</description>
        /// <description>false: Disable.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "enableEbpf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableEbpf
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

        /// <summary>Property imagePullSecrets: Corresponding to the secret dictionary ID.</summary>
        [JsiiProperty(name: "imagePullSecrets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImagePullSecrets
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

        /// <summary>Property kafkaConfigs: Logs are ingested to Kafka configuration summary information.</summary>
        /// <remarks>
        /// The values are explained as follows:
        ///
        /// <list type="bullet">
        /// <description>kafkaEndpoint: The service access address for the Kafka API</description>
        /// <description>kafkaInstanceId: Kafka instance ID</description>
        /// <description>kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "kafkaConfigs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KafkaConfigs
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

        /// <summary>Property microRegistration: Select the Nacos registry with the following values: - 0: SAE built-in Nacos.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>1: User-built Nacos.</description>
        /// <description>2: MSE commercial version of Nacos.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "microRegistration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MicroRegistration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property microRegistrationConfig: Registry configuration information.</summary>
        [JsiiProperty(name: "microRegistrationConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MicroRegistrationConfig
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

        /// <summary>Property nasConfigs: Configuration to mount the NAS.</summary>
        /// <remarks>
        /// The values are explained as follows:
        ///
        /// <list type="bullet">
        /// <description>mountPath: The container mount path</description>
        /// <description>readOnly: A value of false indicates read and write permission.</description>
        /// <description>nasId: NAS ID</description>
        /// <description>mountDomain: The container mount point address For more information, see DescribeMountTargets.</description>
        /// <description>nasPath: NAS relative file directory</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "nasConfigs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NasConfigs
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

        /// <summary>Property ossAkId: AccessKey ID of the OSS.</summary>
        [JsiiProperty(name: "ossAkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssAkId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ossAkSecret: AccessKey Secret of the OSS.</summary>
        [JsiiProperty(name: "ossAkSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssAkSecret
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ossMountDescs: OSS mount description information.</summary>
        /// <remarks>
        /// The parameters are described as follows:
        ///
        /// <list type="bullet">
        /// <description>bucketName: The name of the Bucket</description>
        /// <description>bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.</description>
        /// <description>mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.</description>
        /// <description>readOnly: This specifies whether the container path has read-only permissions for mount directory resources:
        ///
        /// <list type="bullet">
        /// <description>true: Read-only permission</description>
        /// <description>false: Read and write permissions</description>
        /// </list></description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ossMountDescs", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssMountDescs
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

        /// <summary>Property php: PHP version.</summary>
        [JsiiProperty(name: "php", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Php
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path.</summary>
        /// <remarks>
        /// You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
        /// </remarks>
        [JsiiProperty(name: "phpArmsConfigLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PhpArmsConfigLocation
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property phpConfig: PHP configuration file contents.</summary>
        [JsiiProperty(name: "phpConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PhpConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.</summary>
        [JsiiProperty(name: "phpConfigLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PhpConfigLocation
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

        /// <summary>Property programmingLanguage: Create the stack language for the application.</summary>
        /// <remarks>
        /// The values are explained as follows:
        ///
        /// <list type="bullet">
        /// <description>java: The Java language</description>
        /// <description>php: PHP language.</description>
        /// <description>other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "programmingLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProgrammingLanguage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pvtzDiscoverySvc: Enable K8s Service registration discovery.</summary>
        /// <remarks>
        /// The values are explained as follows:
        ///
        /// <list type="bullet">
        /// <description>serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.</description>
        /// <description>namespaceId: The namespace ID</description>
        /// <description>portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.</description>
        /// <description>portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.</description>
        /// <description>enable: Enable K8s Service registration discovery.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "pvtzDiscoverySvc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PvtzDiscoverySvc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property python: Python version.</summary>
        /// <remarks>
        /// Supports PYTHON 3.9.15
        /// </remarks>
        [JsiiProperty(name: "python", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Python
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pythonModules: Install custom module dependencies.</summary>
        /// <remarks>
        /// The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
        /// </remarks>
        [JsiiProperty(name: "pythonModules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PythonModules
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

        /// <summary>Property saeVersion: SAE version.</summary>
        [JsiiProperty(name: "saeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SaeVersion
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

        /// <summary>Property serviceTags: Service tags.</summary>
        [JsiiProperty(name: "serviceTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceTags
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

        /// <summary>Property terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds.</summary>
        /// <remarks>
        /// The value ranges from 1 to 300.
        /// </remarks>
        [JsiiProperty(name: "terminationGracePeriodSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TerminationGracePeriodSeconds
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

        /// <summary>Property tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration: - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024.</summary>
        /// <remarks>
        /// If not configured, it defaults to 8080.
        ///
        /// <list type="bullet">
        /// <description>contextPath: The access path, defaults to the root directory "/"</description>
        /// <description>maxThreads: This config the number of connections in the pool; the default is 400.</description>
        /// <description>uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.</description>
        /// <description>useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "tomcatConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TomcatConfig
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

            /// <summary>Property acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "acrAssumeRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AcrAssumeRoleArn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property acrInstanceId: Container Image service ACR Enterprise Edition instance ID.</summary>
            /// <remarks>
            /// Required when ImageUrl serves enterprise edition for container images.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "acrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AcrInstanceId
            {
                get => GetInstanceProperty<object?>();
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

            /// <summary>Property appSource: Application source.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppSource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property associateEip: Whether to bind EIP.</summary>
            /// <remarks>
            /// The values are explained as follows:
            ///
            /// <list type="bullet">
            /// <description>true: Binding.</description>
            /// <description>false: No binding</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "associateEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AssociateEip
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoConfig: Whether to automatically configure the network environment.</summary>
            /// <remarks>
            /// The values are explained as follows:
            ///
            /// <list type="bullet">
            /// <description>true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.</description>
            /// <description>false: SAE manually config the network environment when creating the application.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property baseAppId: Base application ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "baseAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BaseAppId
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

            /// <summary>Property configMapMountDesc: ConfigMap mount description.</summary>
            /// <remarks>
            /// Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configMapMountDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConfigMapMountDesc
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

            /// <summary>Property deploy: Whether deployed immediately take effect, the default is true.</summary>
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

            /// <summary>Property enableEbpf: Whether to enable EBPF.</summary>
            /// <remarks>
            /// Enable application monitoring for non-Java applications. The values are explained as follows:
            ///
            /// <list type="bullet">
            /// <description>true: Enable.</description>
            /// <description>false: Disable.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableEbpf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableEbpf
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

            /// <summary>Property imagePullSecrets: Corresponding to the secret dictionary ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imagePullSecrets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImagePullSecrets
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

            /// <summary>Property kafkaConfigs: Logs are ingested to Kafka configuration summary information.</summary>
            /// <remarks>
            /// The values are explained as follows:
            ///
            /// <list type="bullet">
            /// <description>kafkaEndpoint: The service access address for the Kafka API</description>
            /// <description>kafkaInstanceId: Kafka instance ID</description>
            /// <description>kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kafkaConfigs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KafkaConfigs
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

            /// <summary>Property microRegistration: Select the Nacos registry with the following values: - 0: SAE built-in Nacos.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>1: User-built Nacos.</description>
            /// <description>2: MSE commercial version of Nacos.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "microRegistration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MicroRegistration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property microRegistrationConfig: Registry configuration information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "microRegistrationConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MicroRegistrationConfig
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

            /// <summary>Property nasConfigs: Configuration to mount the NAS.</summary>
            /// <remarks>
            /// The values are explained as follows:
            ///
            /// <list type="bullet">
            /// <description>mountPath: The container mount path</description>
            /// <description>readOnly: A value of false indicates read and write permission.</description>
            /// <description>nasId: NAS ID</description>
            /// <description>mountDomain: The container mount point address For more information, see DescribeMountTargets.</description>
            /// <description>nasPath: NAS relative file directory</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nasConfigs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NasConfigs
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

            /// <summary>Property ossAkId: AccessKey ID of the OSS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ossAkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssAkId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ossAkSecret: AccessKey Secret of the OSS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ossAkSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssAkSecret
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ossMountDescs: OSS mount description information.</summary>
            /// <remarks>
            /// The parameters are described as follows:
            ///
            /// <list type="bullet">
            /// <description>bucketName: The name of the Bucket</description>
            /// <description>bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.</description>
            /// <description>mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.</description>
            /// <description>readOnly: This specifies whether the container path has read-only permissions for mount directory resources:
            ///
            /// <list type="bullet">
            /// <description>true: Read-only permission</description>
            /// <description>false: Read and write permissions</description>
            /// </list></description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossMountDescs", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssMountDescs
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

            /// <summary>Property php: PHP version.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "php", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Php
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path.</summary>
            /// <remarks>
            /// You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "phpArmsConfigLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PhpArmsConfigLocation
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property phpConfig: PHP configuration file contents.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "phpConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PhpConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "phpConfigLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PhpConfigLocation
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

            /// <summary>Property programmingLanguage: Create the stack language for the application.</summary>
            /// <remarks>
            /// The values are explained as follows:
            ///
            /// <list type="bullet">
            /// <description>java: The Java language</description>
            /// <description>php: PHP language.</description>
            /// <description>other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "programmingLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProgrammingLanguage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pvtzDiscoverySvc: Enable K8s Service registration discovery.</summary>
            /// <remarks>
            /// The values are explained as follows:
            ///
            /// <list type="bullet">
            /// <description>serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.</description>
            /// <description>namespaceId: The namespace ID</description>
            /// <description>portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.</description>
            /// <description>portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.</description>
            /// <description>enable: Enable K8s Service registration discovery.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pvtzDiscoverySvc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PvtzDiscoverySvc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property python: Python version.</summary>
            /// <remarks>
            /// Supports PYTHON 3.9.15
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "python", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Python
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pythonModules: Install custom module dependencies.</summary>
            /// <remarks>
            /// The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pythonModules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PythonModules
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

            /// <summary>Property saeVersion: SAE version.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "saeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SaeVersion
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

            /// <summary>Property serviceTags: Service tags.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serviceTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceTags
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

            /// <summary>Property terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds.</summary>
            /// <remarks>
            /// The value ranges from 1 to 300.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "terminationGracePeriodSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TerminationGracePeriodSeconds
            {
                get => GetInstanceProperty<object?>();
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

            /// <summary>Property tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration: - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024.</summary>
            /// <remarks>
            /// If not configured, it defaults to 8080.
            ///
            /// <list type="bullet">
            /// <description>contextPath: The access path, defaults to the root directory "/"</description>
            /// <description>maxThreads: This config the number of connections in the pool; the default is 400.</description>
            /// <description>uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.</description>
            /// <description>useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tomcatConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TomcatConfig
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
