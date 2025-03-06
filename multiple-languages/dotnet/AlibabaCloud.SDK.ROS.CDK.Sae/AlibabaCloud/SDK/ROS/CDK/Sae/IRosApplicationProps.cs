using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `RosApplication`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationProps")]
    public interface IRosApplicationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
        /// </remarks>
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
        /// </remarks>
        [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Cpu
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
        /// </remarks>
        [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Memory
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
        /// Namespace can interface to obtain from DescribeNamespaceList.
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NamespaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: packageType: Application package type. Support FatJar, War, Image.
        /// </remarks>
        [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PackageType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: replicas: The initial number of instances.
        /// </remarks>
        [JsiiProperty(name: "replicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Replicas
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.
        /// </remarks>
        [JsiiProperty(name: "acrAssumeRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AcrAssumeRoleArn
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: acrInstanceId: Container Image service ACR Enterprise Edition instance ID. Required when ImageUrl serves enterprise edition for container images.
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

        /// <remarks>
        /// <strong>Property</strong>: appDescription: Application description. No more than 1024 characters.
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

        /// <remarks>
        /// <strong>Property</strong>: appSource: Application source.
        /// </remarks>
        [JsiiProperty(name: "appSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppSource
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: associateEip: Whether to bind EIP. The values are explained as follows:
        /// - true: Binding.
        /// - false: No binding
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

        /// <remarks>
        /// <strong>Property</strong>: autoConfig: Whether to automatically configure the network environment. The values are explained as follows:
        /// - true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.
        /// - false: SAE manually config the network environment when creating the application.
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

        /// <remarks>
        /// <strong>Property</strong>: baseAppId: Base application ID.
        /// </remarks>
        [JsiiProperty(name: "baseAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BaseAppId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
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

        /// <remarks>
        /// <strong>Property</strong>: commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
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

        /// <remarks>
        /// <strong>Property</strong>: configMapMountDesc: ConfigMap mount description. Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
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

        /// <remarks>
        /// <strong>Property</strong>: customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
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

        /// <remarks>
        /// <strong>Property</strong>: deploy: Whether deployed immediately take effect, the default is true.
        /// </remarks>
        [JsiiProperty(name: "deploy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Deploy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: edasContainerVersion: EDAS pandora runtime environment used by the application.
        /// </remarks>
        [JsiiProperty(name: "edasContainerVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EdasContainerVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableEbpf: Whether to enable EBPF. Enable application monitoring for non-Java applications. The values are explained as follows:
        /// - true: Enable.
        /// - false: Disable.
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

        /// <remarks>
        /// <strong>Property</strong>: envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
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

        /// <remarks>
        /// <strong>Property</strong>: imagePullSecrets: Corresponding to the secret dictionary ID.
        /// </remarks>
        [JsiiProperty(name: "imagePullSecrets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImagePullSecrets
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
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

        /// <remarks>
        /// <strong>Property</strong>: jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
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

        /// <remarks>
        /// <strong>Property</strong>: jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
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

        /// <remarks>
        /// <strong>Property</strong>: jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
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

        /// <remarks>
        /// <strong>Property</strong>: kafkaConfigs: Logs are ingested to Kafka configuration summary information. The values are explained as follows:
        /// - kafkaEndpoint: The service access address for the Kafka API
        /// - kafkaInstanceId: Kafka instance ID
        /// - kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.
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

        /// <remarks>
        /// <strong>Property</strong>: liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
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

        /// <remarks>
        /// <strong>Property</strong>: microRegistration: Select the Nacos registry with the following values:
        /// - 0: SAE built-in Nacos.
        /// - 1: User-built Nacos.
        /// - 2: MSE commercial version of Nacos.
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

        /// <remarks>
        /// <strong>Property</strong>: microRegistrationConfig: Registry configuration information.
        /// </remarks>
        [JsiiProperty(name: "microRegistrationConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MicroRegistrationConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mountDesc: Mount Description
        /// </remarks>
        [JsiiProperty(name: "mountDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MountDesc
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mountHost: nas mount point in the application of vpc.
        /// </remarks>
        [JsiiProperty(name: "mountHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MountHost
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: nasConfigs: Configuration to mount the NAS. The values are explained as follows:
        /// - mountPath: The container mount path
        /// - readOnly: A value of false indicates read and write permission.
        /// - nasId: NAS ID
        /// - mountDomain: The container mount point address For more information, see DescribeMountTargets.
        /// - nasPath: NAS relative file directory
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

        /// <remarks>
        /// <strong>Property</strong>: nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
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

        /// <remarks>
        /// <strong>Property</strong>: ossAkId: AccessKey ID of the OSS.
        /// </remarks>
        [JsiiProperty(name: "ossAkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssAkId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ossAkSecret: AccessKey Secret of the OSS.
        /// </remarks>
        [JsiiProperty(name: "ossAkSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssAkSecret
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ossMountDescs: OSS mount description information. The parameters are described as follows:
        /// - bucketName: The name of the Bucket
        /// - bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.
        /// - mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.
        /// - readOnly: This specifies whether the container path has read-only permissions for mount directory resources:
        /// - true: Read-only permission
        /// - false: Read and write permissions
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

        /// <remarks>
        /// <strong>Property</strong>: packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
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

        /// <remarks>
        /// <strong>Property</strong>: packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
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

        /// <remarks>
        /// <strong>Property</strong>: php: PHP version.
        /// </remarks>
        [JsiiProperty(name: "php", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Php
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path. You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
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

        /// <remarks>
        /// <strong>Property</strong>: phpConfig: PHP configuration file contents.
        /// </remarks>
        [JsiiProperty(name: "phpConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PhpConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.
        /// </remarks>
        [JsiiProperty(name: "phpConfigLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PhpConfigLocation
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "\/ etc \/ group"}}
        /// </remarks>
        [JsiiProperty(name: "postStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PostStart
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "\/ etc \/ group"}}
        /// </remarks>
        [JsiiProperty(name: "preStop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PreStop
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: programmingLanguage: Create the stack language for the application. The values are explained as follows:
        /// - java: The Java language
        /// - php: PHP language.
        /// - other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.
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

        /// <remarks>
        /// <strong>Property</strong>: pvtzDiscoverySvc: Enable K8s Service registration discovery. The values are explained as follows:
        /// - serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.
        /// - namespaceId: The namespace ID
        /// - portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.
        /// - portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.
        /// - enable: Enable K8s Service registration discovery.
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

        /// <remarks>
        /// <strong>Property</strong>: python: Python version. Supports PYTHON 3.9.15
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

        /// <remarks>
        /// <strong>Property</strong>: pythonModules: Install custom module dependencies. The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
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

        /// <remarks>
        /// <strong>Property</strong>: readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
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

        /// <remarks>
        /// <strong>Property</strong>: saeVersion: SAE version.
        /// </remarks>
        [JsiiProperty(name: "saeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SaeVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Security group ID.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceTags: Service tags.
        /// </remarks>
        [JsiiProperty(name: "serviceTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceTags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: slsConfigs: Log collection configuration file
        /// </remarks>
        [JsiiProperty(name: "slsConfigs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlsConfigs
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
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

        /// <remarks>
        /// <strong>Property</strong>: terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds. The value ranges from 1 to 300.
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

        /// <remarks>
        /// <strong>Property</strong>: timezone: Application time zone. Default Asia\/Shanghai.
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

        /// <remarks>
        /// <strong>Property</strong>: tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration:
        /// - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024. If not configured, it defaults to 8080.
        /// - contextPath: The access path, defaults to the root directory "\/"
        /// - maxThreads: This config the number of connections in the pool; the default is 400.
        /// - uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.
        /// - useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).
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

        /// <remarks>
        /// <strong>Property</strong>: vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
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

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
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

        /// <remarks>
        /// <strong></strong>: " start
        ///
        /// <strong>Property</strong>: warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$
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

        /// <remarks>
        /// <strong>Property</strong>: webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
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

        /// <summary>Properties for defining a `RosApplication`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.IRosApplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
            /// </remarks>
            [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
            /// </remarks>
            [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Cpu
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
            /// </remarks>
            [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Memory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
            /// Namespace can interface to obtain from DescribeNamespaceList.
            /// </remarks>
            [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NamespaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: packageType: Application package type. Support FatJar, War, Image.
            /// </remarks>
            [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PackageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: replicas: The initial number of instances.
            /// </remarks>
            [JsiiProperty(name: "replicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Replicas
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "acrAssumeRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AcrAssumeRoleArn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: acrInstanceId: Container Image service ACR Enterprise Edition instance ID. Required when ImageUrl serves enterprise edition for container images.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "acrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AcrInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: appDescription: Application description. No more than 1024 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: appSource: Application source.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppSource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: associateEip: Whether to bind EIP. The values are explained as follows:
            /// - true: Binding.
            /// - false: No binding
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "associateEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AssociateEip
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoConfig: Whether to automatically configure the network environment. The values are explained as follows:
            /// - true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.
            /// - false: SAE manually config the network environment when creating the application.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: baseAppId: Base application ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "baseAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BaseAppId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Command
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "commandArgs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CommandArgs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: configMapMountDesc: ConfigMap mount description. Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configMapMountDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConfigMapMountDesc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customHostAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomHostAlias
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deploy: Whether deployed immediately take effect, the default is true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deploy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Deploy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: edasContainerVersion: EDAS pandora runtime environment used by the application.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "edasContainerVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EdasContainerVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableEbpf: Whether to enable EBPF. Enable application monitoring for non-Java applications. The values are explained as follows:
            /// - true: Enable.
            /// - false: Disable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableEbpf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableEbpf
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "envs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Envs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imagePullSecrets: Corresponding to the secret dictionary ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imagePullSecrets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImagePullSecrets
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
            /// $ JarStartArgs
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jarStartArgs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JarStartArgs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
            /// $ JarStartArgs
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jarStartOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JarStartOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Jdk
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: kafkaConfigs: Logs are ingested to Kafka configuration summary information. The values are explained as follows:
            /// - kafkaEndpoint: The service access address for the Kafka API
            /// - kafkaInstanceId: Kafka instance ID
            /// - kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kafkaConfigs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KafkaConfigs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "liveness", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Liveness
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: microRegistration: Select the Nacos registry with the following values:
            /// - 0: SAE built-in Nacos.
            /// - 1: User-built Nacos.
            /// - 2: MSE commercial version of Nacos.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "microRegistration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MicroRegistration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: microRegistrationConfig: Registry configuration information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "microRegistrationConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MicroRegistrationConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mountDesc: Mount Description
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mountDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MountDesc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mountHost: nas mount point in the application of vpc.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mountHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MountHost
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: nasConfigs: Configuration to mount the NAS. The values are explained as follows:
            /// - mountPath: The container mount path
            /// - readOnly: A value of false indicates read and write permission.
            /// - nasId: NAS ID
            /// - mountDomain: The container mount point address For more information, see DescribeMountTargets.
            /// - nasPath: NAS relative file directory
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nasConfigs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NasConfigs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nasId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NasId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ossAkId: AccessKey ID of the OSS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossAkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssAkId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ossAkSecret: AccessKey Secret of the OSS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossAkSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssAkSecret
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ossMountDescs: OSS mount description information. The parameters are described as follows:
            /// - bucketName: The name of the Bucket
            /// - bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.
            /// - mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.
            /// - readOnly: This specifies whether the container path has read-only permissions for mount directory resources:
            /// - true: Read-only permission
            /// - false: Read and write permissions
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossMountDescs", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssMountDescs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "packageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PackageUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "packageVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PackageVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: php: PHP version.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "php", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Php
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path. You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "phpArmsConfigLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PhpArmsConfigLocation
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: phpConfig: PHP configuration file contents.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "phpConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PhpConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "phpConfigLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PhpConfigLocation
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "\/ etc \/ group"}}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "postStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PostStart
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "\/ etc \/ group"}}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "preStop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PreStop
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: programmingLanguage: Create the stack language for the application. The values are explained as follows:
            /// - java: The Java language
            /// - php: PHP language.
            /// - other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "programmingLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProgrammingLanguage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pvtzDiscoverySvc: Enable K8s Service registration discovery. The values are explained as follows:
            /// - serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.
            /// - namespaceId: The namespace ID
            /// - portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.
            /// - portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.
            /// - enable: Enable K8s Service registration discovery.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pvtzDiscoverySvc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PvtzDiscoverySvc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: python: Python version. Supports PYTHON 3.9.15
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "python", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Python
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pythonModules: Install custom module dependencies. The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pythonModules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PythonModules
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "readiness", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Readiness
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: saeVersion: SAE version.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "saeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SaeVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: Security group ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceTags: Service tags.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceTags
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: slsConfigs: Log collection configuration file
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slsConfigs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlsConfigs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplication.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Sae.RosApplication.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Sae.RosApplication.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds. The value ranges from 1 to 300.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "terminationGracePeriodSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TerminationGracePeriodSeconds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timezone: Application time zone. Default Asia\/Shanghai.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timezone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timezone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration:
            /// - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024. If not configured, it defaults to 8080.
            /// - contextPath: The access path, defaults to the root directory "\/"
            /// - maxThreads: This config the number of connections in the pool; the default is 400.
            /// - uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.
            /// - useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tomcatConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TomcatConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong></strong>: " start
            ///
            /// <strong>Property</strong>: warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "warStartOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WarStartOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
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
