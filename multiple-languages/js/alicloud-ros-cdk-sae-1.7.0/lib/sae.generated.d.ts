import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
 */
export interface RosApplicationProps {
    /**
     * @Property appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
     */
    readonly appName: string | ros.IResolvable;
    /**
     * @Property cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
     */
    readonly cpu: number | ros.IResolvable;
    /**
     * @Property memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
     */
    readonly memory: number | ros.IResolvable;
    /**
     * @Property namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
     * Namespace can interface to obtain from DescribeNamespaceList.
     */
    readonly namespaceId: string | ros.IResolvable;
    /**
     * @Property packageType: Application package type. Support FatJar, War, Image.
     */
    readonly packageType: string | ros.IResolvable;
    /**
     * @Property replicas: The initial number of instances.
     */
    readonly replicas: number | ros.IResolvable;
    /**
     * @Property acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.
     */
    readonly acrAssumeRoleArn?: string | ros.IResolvable;
    /**
     * @Property acrInstanceId: Container Image service ACR Enterprise Edition instance ID. Required when ImageUrl serves enterprise edition for container images.
     */
    readonly acrInstanceId?: string | ros.IResolvable;
    /**
     * @Property appDescription: Application description. No more than 1024 characters.
     */
    readonly appDescription?: string | ros.IResolvable;
    /**
     * @Property appSource: Application source.
     */
    readonly appSource?: string | ros.IResolvable;
    /**
     * @Property associateEip: Whether to bind EIP. The values are explained as follows:
     * - true: Binding.
     * - false: No binding
     */
    readonly associateEip?: boolean | ros.IResolvable;
    /**
     * @Property autoConfig: Whether to automatically configure the network environment. The values are explained as follows:
     * - true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.
     * - false: SAE manually config the network environment when creating the application.
     */
    readonly autoConfig?: boolean | ros.IResolvable;
    /**
     * @Property baseAppId: Base application ID.
     */
    readonly baseAppId?: string | ros.IResolvable;
    /**
     * @Property command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
     */
    readonly command?: string | ros.IResolvable;
    /**
     * @Property commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
     */
    readonly commandArgs?: string | ros.IResolvable;
    /**
     * @Property configMapMountDesc: ConfigMap mount description. Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
     */
    readonly configMapMountDesc?: string | ros.IResolvable;
    /**
     * @Property customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
     */
    readonly customHostAlias?: string | ros.IResolvable;
    /**
     * @Property deploy: Whether deployed immediately take effect, the default is false.
     */
    readonly deploy?: boolean | ros.IResolvable;
    /**
     * @Property edasContainerVersion: EDAS pandora runtime environment used by the application.
     */
    readonly edasContainerVersion?: string | ros.IResolvable;
    /**
     * @Property enableEbpf: Whether to enable EBPF. Enable application monitoring for non-Java applications. The values are explained as follows:
     * - true: Enable.
     * - false: Disable.
     */
    readonly enableEbpf?: string | ros.IResolvable;
    /**
     * @Property envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
     */
    readonly envs?: string | ros.IResolvable;
    /**
     * @Property imagePullSecrets: Corresponding to the secret dictionary ID.
     */
    readonly imagePullSecrets?: string | ros.IResolvable;
    /**
     * @Property imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
     */
    readonly imageUrl?: string | ros.IResolvable;
    /**
     * @Property jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    readonly jarStartArgs?: string | ros.IResolvable;
    /**
     * @Property jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    readonly jarStartOptions?: string | ros.IResolvable;
    /**
     * @Property jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
     */
    readonly jdk?: string | ros.IResolvable;
    /**
     * @Property kafkaConfigs: Logs are ingested to Kafka configuration summary information. The values are explained as follows:
     * - kafkaEndpoint: The service access address for the Kafka API
     * - kafkaInstanceId: Kafka instance ID
     * - kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.
     */
    readonly kafkaConfigs?: string | ros.IResolvable;
    /**
     * @Property liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
     */
    readonly liveness?: string | ros.IResolvable;
    /**
     * @Property microRegistration: Select the Nacos registry with the following values:
     * - 0: SAE built-in Nacos.
     * - 1: User-built Nacos.
     * - 2: MSE commercial version of Nacos.
     */
    readonly microRegistration?: string | ros.IResolvable;
    /**
     * @Property microRegistrationConfig: Registry configuration information.
     */
    readonly microRegistrationConfig?: string | ros.IResolvable;
    /**
     * @Property mountDesc: Mount Description
     */
    readonly mountDesc?: string | ros.IResolvable;
    /**
     * @Property mountHost: nas mount point in the application of vpc.
     */
    readonly mountHost?: string | ros.IResolvable;
    /**
     * @Property nasConfigs: Configuration to mount the NAS. The values are explained as follows:
     * - mountPath: The container mount path
     * - readOnly: A value of false indicates read and write permission.
     * - nasId: NAS ID
     * - mountDomain: The container mount point address For more information, see DescribeMountTargets.
     * - nasPath: NAS relative file directory
     */
    readonly nasConfigs?: string | ros.IResolvable;
    /**
     * @Property nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
     */
    readonly nasId?: string | ros.IResolvable;
    /**
     * @Property ossAkId: AccessKey ID of the OSS.
     */
    readonly ossAkId?: string | ros.IResolvable;
    /**
     * @Property ossAkSecret: AccessKey Secret of the OSS.
     */
    readonly ossAkSecret?: string | ros.IResolvable;
    /**
     * @Property ossMountDescs: OSS mount description information. The parameters are described as follows:
     * - bucketName: The name of the Bucket
     * - bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.
     * - mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.
     * - readOnly: This specifies whether the container path has read-only permissions for mount directory resources:
     *   - true: Read-only permission
     *   - false: Read and write permissions
     */
    readonly ossMountDescs?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
     */
    readonly packageUrl?: string | ros.IResolvable;
    /**
     * @Property packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
     */
    readonly packageVersion?: string | ros.IResolvable;
    /**
     * @Property php: PHP version.
     */
    readonly php?: string | ros.IResolvable;
    /**
     * @Property phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path. You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
     */
    readonly phpArmsConfigLocation?: string | ros.IResolvable;
    /**
     * @Property phpConfig: PHP configuration file contents.
     */
    readonly phpConfig?: string | ros.IResolvable;
    /**
     * @Property phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.
     */
    readonly phpConfigLocation?: string | ros.IResolvable;
    /**
     * @Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "\/ etc \/ group"}}
     */
    readonly postStart?: string | ros.IResolvable;
    /**
     * @Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "\/ etc \/ group"}}
     */
    readonly preStop?: string | ros.IResolvable;
    /**
     * @Property programmingLanguage: Create the stack language for the application. The values are explained as follows:
     * - java: The Java language
     * - php: PHP language.
     * - other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.
     */
    readonly programmingLanguage?: string | ros.IResolvable;
    /**
     * @Property pvtzDiscoverySvc: Enable K8s Service registration discovery. The values are explained as follows:
     * - serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.
     * - namespaceId: The namespace ID
     * - portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.
     * - portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.
     * - enable: Enable K8s Service registration discovery.
     */
    readonly pvtzDiscoverySvc?: string | ros.IResolvable;
    /**
     * @Property python: Python version. Supports PYTHON 3.9.15
     */
    readonly python?: string | ros.IResolvable;
    /**
     * @Property pythonModules: Install custom module dependencies. The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
     */
    readonly pythonModules?: string | ros.IResolvable;
    /**
     * @Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
     */
    readonly readiness?: string | ros.IResolvable;
    /**
     * @Property saeVersion: SAE version.
     */
    readonly saeVersion?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property serviceTags: Service tags.
     */
    readonly serviceTags?: string | ros.IResolvable;
    /**
     * @Property slsConfigs: Log collection configuration file
     */
    readonly slsConfigs?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosApplication.TagsProperty[];
    /**
     * @Property terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds. The value ranges from 1 to 300.
     */
    readonly terminationGracePeriodSeconds?: number | ros.IResolvable;
    /**
     * @Property timezone: Application time zone. Default Asia\/Shanghai.
     */
    readonly timezone?: string | ros.IResolvable;
    /**
     * @Property tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration:
     * - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024. If not configured, it defaults to 8080.
     * - contextPath: The access path, defaults to the root directory "\/"
     * - maxThreads: This config the number of connections in the pool; the default is 400.
     * - uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.
     * - useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).
     */
    readonly tomcatConfig?: string | ros.IResolvable;
    /**
     * @Property vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
     */
    readonly warStartOptions?: string | ros.IResolvable;
    /**
     * @Property webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
     */
    readonly webContainer?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::Application`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Application` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
 */
export declare class RosApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::Application";
    /**
     * @Attribute AppId: Creating successful application ID.
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    readonly attrChangeOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
     */
    appName: string | ros.IResolvable;
    /**
     * @Property cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
     */
    cpu: number | ros.IResolvable;
    /**
     * @Property memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
     */
    memory: number | ros.IResolvable;
    /**
     * @Property namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
     * Namespace can interface to obtain from DescribeNamespaceList.
     */
    namespaceId: string | ros.IResolvable;
    /**
     * @Property packageType: Application package type. Support FatJar, War, Image.
     */
    packageType: string | ros.IResolvable;
    /**
     * @Property replicas: The initial number of instances.
     */
    replicas: number | ros.IResolvable;
    /**
     * @Property acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.
     */
    acrAssumeRoleArn: string | ros.IResolvable | undefined;
    /**
     * @Property acrInstanceId: Container Image service ACR Enterprise Edition instance ID. Required when ImageUrl serves enterprise edition for container images.
     */
    acrInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property appDescription: Application description. No more than 1024 characters.
     */
    appDescription: string | ros.IResolvable | undefined;
    /**
     * @Property appSource: Application source.
     */
    appSource: string | ros.IResolvable | undefined;
    /**
     * @Property associateEip: Whether to bind EIP. The values are explained as follows:
     * - true: Binding.
     * - false: No binding
     */
    associateEip: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoConfig: Whether to automatically configure the network environment. The values are explained as follows:
     * - true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.
     * - false: SAE manually config the network environment when creating the application.
     */
    autoConfig: boolean | ros.IResolvable | undefined;
    /**
     * @Property baseAppId: Base application ID.
     */
    baseAppId: string | ros.IResolvable | undefined;
    /**
     * @Property command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
     */
    command: string | ros.IResolvable | undefined;
    /**
     * @Property commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
     */
    commandArgs: string | ros.IResolvable | undefined;
    /**
     * @Property configMapMountDesc: ConfigMap mount description. Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
     */
    configMapMountDesc: string | ros.IResolvable | undefined;
    /**
     * @Property customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
     */
    customHostAlias: string | ros.IResolvable | undefined;
    /**
     * @Property deploy: Whether deployed immediately take effect, the default is false.
     */
    deploy: boolean | ros.IResolvable | undefined;
    /**
     * @Property edasContainerVersion: EDAS pandora runtime environment used by the application.
     */
    edasContainerVersion: string | ros.IResolvable | undefined;
    /**
     * @Property enableEbpf: Whether to enable EBPF. Enable application monitoring for non-Java applications. The values are explained as follows:
     * - true: Enable.
     * - false: Disable.
     */
    enableEbpf: string | ros.IResolvable | undefined;
    /**
     * @Property envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
     */
    envs: string | ros.IResolvable | undefined;
    /**
     * @Property imagePullSecrets: Corresponding to the secret dictionary ID.
     */
    imagePullSecrets: string | ros.IResolvable | undefined;
    /**
     * @Property imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
     */
    imageUrl: string | ros.IResolvable | undefined;
    /**
     * @Property jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    jarStartArgs: string | ros.IResolvable | undefined;
    /**
     * @Property jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    jarStartOptions: string | ros.IResolvable | undefined;
    /**
     * @Property jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
     */
    jdk: string | ros.IResolvable | undefined;
    /**
     * @Property kafkaConfigs: Logs are ingested to Kafka configuration summary information. The values are explained as follows:
     * - kafkaEndpoint: The service access address for the Kafka API
     * - kafkaInstanceId: Kafka instance ID
     * - kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.
     */
    kafkaConfigs: string | ros.IResolvable | undefined;
    /**
     * @Property liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
     */
    liveness: string | ros.IResolvable | undefined;
    /**
     * @Property microRegistration: Select the Nacos registry with the following values:
     * - 0: SAE built-in Nacos.
     * - 1: User-built Nacos.
     * - 2: MSE commercial version of Nacos.
     */
    microRegistration: string | ros.IResolvable | undefined;
    /**
     * @Property microRegistrationConfig: Registry configuration information.
     */
    microRegistrationConfig: string | ros.IResolvable | undefined;
    /**
     * @Property mountDesc: Mount Description
     */
    mountDesc: string | ros.IResolvable | undefined;
    /**
     * @Property mountHost: nas mount point in the application of vpc.
     */
    mountHost: string | ros.IResolvable | undefined;
    /**
     * @Property nasConfigs: Configuration to mount the NAS. The values are explained as follows:
     * - mountPath: The container mount path
     * - readOnly: A value of false indicates read and write permission.
     * - nasId: NAS ID
     * - mountDomain: The container mount point address For more information, see DescribeMountTargets.
     * - nasPath: NAS relative file directory
     */
    nasConfigs: string | ros.IResolvable | undefined;
    /**
     * @Property nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
     */
    nasId: string | ros.IResolvable | undefined;
    /**
     * @Property ossAkId: AccessKey ID of the OSS.
     */
    ossAkId: string | ros.IResolvable | undefined;
    /**
     * @Property ossAkSecret: AccessKey Secret of the OSS.
     */
    ossAkSecret: string | ros.IResolvable | undefined;
    /**
     * @Property ossMountDescs: OSS mount description information. The parameters are described as follows:
     * - bucketName: The name of the Bucket
     * - bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.
     * - mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.
     * - readOnly: This specifies whether the container path has read-only permissions for mount directory resources:
     *   - true: Read-only permission
     *   - false: Read and write permissions
     */
    ossMountDescs: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
     */
    packageUrl: string | ros.IResolvable | undefined;
    /**
     * @Property packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
     */
    packageVersion: string | ros.IResolvable | undefined;
    /**
     * @Property php: PHP version.
     */
    php: string | ros.IResolvable | undefined;
    /**
     * @Property phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path. You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
     */
    phpArmsConfigLocation: string | ros.IResolvable | undefined;
    /**
     * @Property phpConfig: PHP configuration file contents.
     */
    phpConfig: string | ros.IResolvable | undefined;
    /**
     * @Property phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.
     */
    phpConfigLocation: string | ros.IResolvable | undefined;
    /**
     * @Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "\/ etc \/ group"}}
     */
    postStart: string | ros.IResolvable | undefined;
    /**
     * @Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "\/ etc \/ group"}}
     */
    preStop: string | ros.IResolvable | undefined;
    /**
     * @Property programmingLanguage: Create the stack language for the application. The values are explained as follows:
     * - java: The Java language
     * - php: PHP language.
     * - other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.
     */
    programmingLanguage: string | ros.IResolvable | undefined;
    /**
     * @Property pvtzDiscoverySvc: Enable K8s Service registration discovery. The values are explained as follows:
     * - serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.
     * - namespaceId: The namespace ID
     * - portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.
     * - portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.
     * - enable: Enable K8s Service registration discovery.
     */
    pvtzDiscoverySvc: string | ros.IResolvable | undefined;
    /**
     * @Property python: Python version. Supports PYTHON 3.9.15
     */
    python: string | ros.IResolvable | undefined;
    /**
     * @Property pythonModules: Install custom module dependencies. The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
     */
    pythonModules: string | ros.IResolvable | undefined;
    /**
     * @Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
     */
    readiness: string | ros.IResolvable | undefined;
    /**
     * @Property saeVersion: SAE version.
     */
    saeVersion: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Security group ID.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serviceTags: Service tags.
     */
    serviceTags: string | ros.IResolvable | undefined;
    /**
     * @Property slsConfigs: Log collection configuration file
     */
    slsConfigs: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosApplication.TagsProperty[] | undefined;
    /**
     * @Property terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds. The value ranges from 1 to 300.
     */
    terminationGracePeriodSeconds: number | ros.IResolvable | undefined;
    /**
     * @Property timezone: Application time zone. Default Asia\/Shanghai.
     */
    timezone: string | ros.IResolvable | undefined;
    /**
     * @Property tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration:
     * - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024. If not configured, it defaults to 8080.
     * - contextPath: The access path, defaults to the root directory "\/"
     * - maxThreads: This config the number of connections in the pool; the default is 400.
     * - uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.
     * - useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).
     */
    tomcatConfig: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
     */
    warStartOptions: string | ros.IResolvable | undefined;
    /**
     * @Property webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
     */
    webContainer: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosApplication {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosApplicationScalingRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-applicationscalingrule
 */
export interface RosApplicationScalingRuleProps {
    /**
     * @Property appId: The ID of the application.
     */
    readonly appId: string | ros.IResolvable;
    /**
     * @Property scalingRuleName: The name of the auto scaling policy. The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
     */
    readonly scalingRuleName: string | ros.IResolvable;
    /**
     * @Property scalingRuleType: The type of the auto scaling policy. Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
     */
    readonly scalingRuleType: string | ros.IResolvable;
    /**
     * @Property minReadyInstanceRatio: The minimum percentage of surviving instances. The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
     */
    readonly minReadyInstanceRatio?: number | ros.IResolvable;
    /**
     * @Property minReadyInstances: Minimum number of surviving instances. The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to **-1**, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
     */
    readonly minReadyInstances?: number | ros.IResolvable;
    /**
     * @Property scalingRuleEnable: Whether to enable the scaling rule.
     */
    readonly scalingRuleEnable?: boolean | ros.IResolvable;
    /**
     * @Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy. This parameter is required when you select monitoring indicator elasticity policy setting.
     */
    readonly scalingRuleMetric?: RosApplicationScalingRule.ScalingRuleMetricProperty | ros.IResolvable;
    /**
     * @Property scalingRuleTimer: The configuration of the timer scaling policy.
     */
    readonly scalingRuleTimer?: RosApplicationScalingRule.ScalingRuleTimerProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::ApplicationScalingRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApplicationScalingRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-applicationscalingrule
 */
export declare class RosApplicationScalingRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::ApplicationScalingRule";
    /**
     * @Attribute ScalingRuleName: The name of the scaling rule.
     */
    readonly attrScalingRuleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appId: The ID of the application.
     */
    appId: string | ros.IResolvable;
    /**
     * @Property scalingRuleName: The name of the auto scaling policy. The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
     */
    scalingRuleName: string | ros.IResolvable;
    /**
     * @Property scalingRuleType: The type of the auto scaling policy. Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
     */
    scalingRuleType: string | ros.IResolvable;
    /**
     * @Property minReadyInstanceRatio: The minimum percentage of surviving instances. The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
     */
    minReadyInstanceRatio: number | ros.IResolvable | undefined;
    /**
     * @Property minReadyInstances: Minimum number of surviving instances. The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to **-1**, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
     */
    minReadyInstances: number | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleEnable: Whether to enable the scaling rule.
     */
    scalingRuleEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy. This parameter is required when you select monitoring indicator elasticity policy setting.
     */
    scalingRuleMetric: RosApplicationScalingRule.ScalingRuleMetricProperty | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleTimer: The configuration of the timer scaling policy.
     */
    scalingRuleTimer: RosApplicationScalingRule.ScalingRuleTimerProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationScalingRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosApplicationScalingRule {
    /**
     * @stability external
     */
    interface MetricsProperty {
        /**
         * @Property slbId: The ID of the SLB instance.
         */
        readonly slbId?: string | ros.IResolvable;
        /**
         * @Property metricType: CPU: CPU usage.MEMORY: Memory usage.QPS: Average QPS of a single instance of a JAVA application within 1 minute.RT: Average RT value of all service of a JAVA application within 1 minute.tcpActiveConn: Average number of active TCP connections of a single instance within 30 seconds.SLB_QPS: Average public network SLB QPS of a single instance within 15 seconds.SLB_RT: Average response time of public network SLB within 15 seconds.INTRANET_SLB_QPS: Average private network SLB QPS of a single instance within 15 seconds.INTRANET_SLB_RT: Average response time of private network SLB within 15 seconds.
         */
        readonly metricType: string | ros.IResolvable;
        /**
         * @Property vport: The port of the SLB instance.
         */
        readonly vport?: string | ros.IResolvable;
        /**
         * @Property slbLogstore: The name of the log store of the SLS project for SLB instance.
         */
        readonly slbLogstore?: string | ros.IResolvable;
        /**
         * @Property slbProject: The project ID of the  SLS project for SLB instance.
         */
        readonly slbProject?: string | ros.IResolvable;
        /**
         * @Property metricTargetAverageUtilization: According to different metricTypes, set the target value of the corresponding monitoring indicator.CPU usage target value, in percentage.Memory usage target value, in percentage.QPS, in seconds.Response time, in milliseconds.Average number of active TCP connections, in pieces\/second.Public network SLB QPS, in seconds.Public network SLB response time, in milliseconds.Private network SLB QPS, in seconds.Private network SLB response time, in milliseconds.
         */
        readonly metricTargetAverageUtilization: number | ros.IResolvable;
    }
}
export declare namespace RosApplicationScalingRule {
    /**
     * @stability external
     */
    interface ScaleDownRulesProperty {
        /**
         * @Property step: The elastic expansion or reduction step size. The maximum number of instances that can be expanded or reduced in a unit of time.
         */
        readonly step: string | ros.IResolvable;
        /**
         * @Property stabilizationWindowSeconds: The number of seconds that the scaling rule waits before it can be executed again.
         */
        readonly stabilizationWindowSeconds?: number | ros.IResolvable;
        /**
         * @Property disabled: Whether to disable the scaling rule. Default value: false
         */
        readonly disabled?: boolean | ros.IResolvable;
    }
}
export declare namespace RosApplicationScalingRule {
    /**
     * @stability external
     */
    interface ScaleUpRulesProperty {
        /**
         * @Property step: The elastic expansion or reduction step size. The maximum number of instances that can be expanded or reduced in a unit of time.
         */
        readonly step: string | ros.IResolvable;
        /**
         * @Property stabilizationWindowSeconds: The number of seconds that the scaling rule waits before it can be executed again.
         */
        readonly stabilizationWindowSeconds?: number | ros.IResolvable;
        /**
         * @Property disabled: Whether to disable the scaling rule. Default value: false
         */
        readonly disabled?: boolean | ros.IResolvable;
    }
}
export declare namespace RosApplicationScalingRule {
    /**
     * @stability external
     */
    interface ScalingRuleMetricProperty {
        /**
         * @Property metrics: The configuration of the monitoring indicator.
         */
        readonly metrics: Array<RosApplicationScalingRule.MetricsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property minReplicas: The minimum number of application instances that can be automatically scaled down.
         */
        readonly minReplicas: number | ros.IResolvable;
        /**
         * @Property maxReplicas: The maximum number of application instances that can be automatically scaled up.
         */
        readonly maxReplicas: number | ros.IResolvable;
        /**
         * @Property scaleDownRules: Application scale down rules
         */
        readonly scaleDownRules?: RosApplicationScalingRule.ScaleDownRulesProperty | ros.IResolvable;
        /**
         * @Property scaleUpRules: Application scale up rules
         */
        readonly scaleUpRules?: RosApplicationScalingRule.ScaleUpRulesProperty | ros.IResolvable;
    }
}
export declare namespace RosApplicationScalingRule {
    /**
     * @stability external
     */
    interface ScalingRuleTimerProperty {
        /**
         * @Property schedules: The time when the elastic scaling policy is triggered, and the number of application instances that need to be maintained during this time period. A maximum of 20 time points are supported.
         */
        readonly schedules: Array<RosApplicationScalingRule.SchedulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property period: The period for executing the scheduled elastic scaling policy. The value description is as follows:* * *: Execute the scheduled policy at a specified time every day.* * Fri,Mon: Execute the scheduled policy at a specified time on a specified day of the week. Multiple selections are supported. GMT+8 time zone. The value description is as follows:Sun: SundayMon: MondayTue: TuesdayWed: WednesdayThu: ThursdayFri: FridaySat: Saturday1,2,3,28,31 * *: Execute the scheduled policy at a specified time on a specified date of each month. Multiple selections are supported. The value range is [1,31]. If there is no 31st day in the month, skip that day and execute the scheduled policy.
         */
        readonly period: string | ros.IResolvable;
        /**
         * @Property endDate: The end time of the scaling policy. The end time must be in the future. The end time must be in the format of YYYY-MM-DD.When all values are null, it indicates long-term execution, which is the default value.
         */
        readonly endDate?: string | ros.IResolvable;
        /**
         * @Property beginDate: The start time of the scaling policy. The start time must be in the future. The start time must be in the format of YYYY-MM-DD.When all values are null, it indicates long-term execution, which is the default value.
         */
        readonly beginDate?: string | ros.IResolvable;
    }
}
export declare namespace RosApplicationScalingRule {
    /**
     * @stability external
     */
    interface SchedulesProperty {
        /**
         * @Property targetReplicas: The number of application instances that need to be maintained during this time period.
         */
        readonly targetReplicas: number | ros.IResolvable;
        /**
         * @Property atTime: The time when the scheduled scaling policy is executed. The time must be in the format of HH:mm. The time must be in the range of 00:00 to 23:59.
         */
        readonly atTime: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosConfigMap`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap
 */
export interface RosConfigMapProps {
    /**
     * @Property data: Configmap key value pairs of data, json format.The format is as follows:
     * {"k1":"v1", "k2":"v2"}
     * K means key, V represents value.For more information about configuration items, see management and use of configuration items.
     */
    readonly data: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property name: The name of the config map.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property namespaceId: The ID of the namespace to which this config map instance belongs.
     */
    readonly namespaceId: string | ros.IResolvable;
    /**
     * @Property description: Describe information, do not enter the space without more than 255 characters.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::ConfigMap`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConfigMap` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap
 */
export declare class RosConfigMap extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::ConfigMap";
    /**
     * @Attribute ConfigMapId: The ID of the config map.
     */
    readonly attrConfigMapId: ros.IResolvable;
    /**
     * @Attribute NamespaceId: The ID of the namespace to which this config map instance belongs.
     */
    readonly attrNamespaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property data: Configmap key value pairs of data, json format.The format is as follows:
     * {"k1":"v1", "k2":"v2"}
     * K means key, V represents value.For more information about configuration items, see management and use of configuration items.
     */
    data: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property name: The name of the config map.
     */
    name: string | ros.IResolvable;
    /**
     * @Property namespaceId: The ID of the namespace to which this config map instance belongs.
     */
    namespaceId: string | ros.IResolvable;
    /**
     * @Property description: Describe information, do not enter the space without more than 255 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConfigMapProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosIngress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress
 */
export interface RosIngressProps {
    /**
     * @Property defaultRule: The default forwarding rule. You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.
     */
    readonly defaultRule: RosIngress.DefaultRuleProperty | ros.IResolvable;
    /**
     * @Property description: The name of the routing rule.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property listenerPort: The listener port of the SLB instance. You must specify a vacant port.
     */
    readonly listenerPort: number | ros.IResolvable;
    /**
     * @Property namespaceId: The ID of the namespace to which the application belongs. You can specify only one namespace ID each time you call this operation.
     */
    readonly namespaceId: string | ros.IResolvable;
    /**
     * @Property rules: The forwarding rules. You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
     */
    readonly rules: Array<RosIngress.RulesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property slbId: The Server Load Balancer (SLB) instance that is used by the routing rule.
     */
    readonly slbId: string | ros.IResolvable;
    /**
     * @Property certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance.
     * If LoadBalanceType is set to clb, specify this parameter to configure a certificate for the HTTP listener.
     */
    readonly certId?: string | ros.IResolvable;
    /**
     * @Property certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance.
     */
    readonly certIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property listenerProtocol: The protocol that is used to forward requests.
     */
    readonly listenerProtocol?: string | ros.IResolvable;
    /**
     * @Property loadBalanceType: The type of the SLB instance based on the processing capabilities. The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule.
     */
    readonly loadBalanceType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::Ingress`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ingress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress
 */
export declare class RosIngress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::Ingress";
    /**
     * @Attribute IngressId: The ID of the routing rule.
     */
    readonly attrIngressId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property defaultRule: The default forwarding rule. You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.
     */
    defaultRule: RosIngress.DefaultRuleProperty | ros.IResolvable;
    /**
     * @Property description: The name of the routing rule.
     */
    description: string | ros.IResolvable;
    /**
     * @Property listenerPort: The listener port of the SLB instance. You must specify a vacant port.
     */
    listenerPort: number | ros.IResolvable;
    /**
     * @Property namespaceId: The ID of the namespace to which the application belongs. You can specify only one namespace ID each time you call this operation.
     */
    namespaceId: string | ros.IResolvable;
    /**
     * @Property rules: The forwarding rules. You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
     */
    rules: Array<RosIngress.RulesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property slbId: The Server Load Balancer (SLB) instance that is used by the routing rule.
     */
    slbId: string | ros.IResolvable;
    /**
     * @Property certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance.
     * If LoadBalanceType is set to clb, specify this parameter to configure a certificate for the HTTP listener.
     */
    certId: string | ros.IResolvable | undefined;
    /**
     * @Property certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance.
     */
    certIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property listenerProtocol: The protocol that is used to forward requests.
     */
    listenerProtocol: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalanceType: The type of the SLB instance based on the processing capabilities. The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule.
     */
    loadBalanceType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIngressProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosIngress {
    /**
     * @stability external
     */
    interface DefaultRuleProperty {
        /**
         * @Property backendProtocol: The protocol of the application.
         */
        readonly backendProtocol?: string | ros.IResolvable;
        /**
         * @Property appId: The application ID
         */
        readonly appId: string | ros.IResolvable;
        /**
         * @Property containerPort: The container port of the application.
         */
        readonly containerPort: number | ros.IResolvable;
    }
}
export declare namespace RosIngress {
    /**
     * @stability external
     */
    interface RulesProperty {
        /**
         * @Property path: The request path.
         */
        readonly path: string | ros.IResolvable;
        /**
         * @Property backendProtocol: The protocol of the application.
         */
        readonly backendProtocol?: string | ros.IResolvable;
        /**
         * @Property appId: The application ID
         */
        readonly appId: string | ros.IResolvable;
        /**
         * @Property rewritePath: The rewrite path.
         */
        readonly rewritePath?: string | ros.IResolvable;
        /**
         * @Property containerPort: The container port of the application.
         */
        readonly containerPort: number | ros.IResolvable;
        /**
         * @Property domain: The domain name.
         */
        readonly domain: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace
 */
export interface RosNamespaceProps {
    /**
     * @Property namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
     */
    readonly namespaceId: string | ros.IResolvable;
    /**
     * @Property namespaceName: Namespace name
     */
    readonly namespaceName: string | ros.IResolvable;
    /**
     * @Property namespaceDescription: Namespace description
     */
    readonly namespaceDescription?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::Namespace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace
 */
export declare class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::Namespace";
    /**
     * @Attribute NamespaceId: Namespace ID
     */
    readonly attrNamespaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
     */
    namespaceId: string | ros.IResolvable;
    /**
     * @Property namespaceName: Namespace name
     */
    namespaceName: string | ros.IResolvable;
    /**
     * @Property namespaceDescription: Namespace description
     */
    namespaceDescription: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosSlbBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding
 */
export interface RosSlbBindingProps {
    /**
     * @Property appId: Successful application deployment target ID
     */
    readonly appId: string | ros.IResolvable;
    /**
     * @Property internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    readonly internet?: string | ros.IResolvable;
    /**
     * @Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    readonly internetSlbId?: string | ros.IResolvable;
    /**
     * @Property intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    readonly intranet?: string | ros.IResolvable;
    /**
     * @Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    readonly intranetSlbId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::SlbBinding`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SlbBinding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding
 */
export declare class RosSlbBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::SlbBinding";
    /**
     * @Attribute AppId: Successful application deployment target ID
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    readonly attrChangeOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appId: Successful application deployment target ID
     */
    appId: string | ros.IResolvable;
    /**
     * @Property internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    internet: string | ros.IResolvable | undefined;
    /**
     * @Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    internetSlbId: string | ros.IResolvable | undefined;
    /**
     * @Property intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    intranet: string | ros.IResolvable | undefined;
    /**
     * @Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    intranetSlbId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSlbBindingProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
