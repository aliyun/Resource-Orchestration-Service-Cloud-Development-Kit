import * as ros from '@alicloud/ros-cdk-core';
import { RosApplication } from './sae.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApplication as ApplicationProperty };

/**
 * Properties for defining a `Application`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
 */
export interface ApplicationProps {

    /**
     * Property appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
     */
    readonly appName: string | ros.IResolvable;

    /**
     * Property cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
     */
    readonly cpu: number | ros.IResolvable;

    /**
     * Property memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
     */
    readonly memory: number | ros.IResolvable;

    /**
     * Property namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
     * Namespace can interface to obtain from DescribeNamespaceList.
     */
    readonly namespaceId: string | ros.IResolvable;

    /**
     * Property packageType: Application package type. Support FatJar, War, Image.
     */
    readonly packageType: string | ros.IResolvable;

    /**
     * Property replicas: The initial number of instances.
     */
    readonly replicas: number | ros.IResolvable;

    /**
     * Property acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.
     */
    readonly acrAssumeRoleArn?: string | ros.IResolvable;

    /**
     * Property acrInstanceId: Container Image service ACR Enterprise Edition instance ID. Required when ImageUrl serves enterprise edition for container images.
     */
    readonly acrInstanceId?: string | ros.IResolvable;

    /**
     * Property appDescription: Application description. No more than 1024 characters.
     */
    readonly appDescription?: string | ros.IResolvable;

    /**
     * Property appSource: Application source.
     */
    readonly appSource?: string | ros.IResolvable;

    /**
     * Property associateEip: Whether to bind EIP. The values are explained as follows:
     * - true: Binding.
     * - false: No binding
     */
    readonly associateEip?: boolean | ros.IResolvable;

    /**
     * Property autoConfig: Whether to automatically configure the network environment. The values are explained as follows:
     * - true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.
     * - false: SAE manually config the network environment when creating the application.
     */
    readonly autoConfig?: boolean | ros.IResolvable;

    /**
     * Property baseAppId: Base application ID.
     */
    readonly baseAppId?: string | ros.IResolvable;

    /**
     * Property command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
     */
    readonly command?: string | ros.IResolvable;

    /**
     * Property commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
     */
    readonly commandArgs?: string | ros.IResolvable;

    /**
     * Property configMapMountDesc: ConfigMap mount description. Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
     */
    readonly configMapMountDesc?: string | ros.IResolvable;

    /**
     * Property customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
     */
    readonly customHostAlias?: string | ros.IResolvable;

    /**
     * Property deploy: Whether deployed immediately take effect, the default is false.
     */
    readonly deploy?: boolean | ros.IResolvable;

    /**
     * Property edasContainerVersion: EDAS pandora runtime environment used by the application.
     */
    readonly edasContainerVersion?: string | ros.IResolvable;

    /**
     * Property enableEbpf: Whether to enable EBPF. Enable application monitoring for non-Java applications. The values are explained as follows:
     * - true: Enable.
     * - false: Disable.
     */
    readonly enableEbpf?: string | ros.IResolvable;

    /**
     * Property envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
     */
    readonly envs?: string | ros.IResolvable;

    /**
     * Property imagePullSecrets: Corresponding to the secret dictionary ID.
     */
    readonly imagePullSecrets?: string | ros.IResolvable;

    /**
     * Property imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
     */
    readonly imageUrl?: string | ros.IResolvable;

    /**
     * Property jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    readonly jarStartArgs?: string | ros.IResolvable;

    /**
     * Property jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    readonly jarStartOptions?: string | ros.IResolvable;

    /**
     * Property jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
     */
    readonly jdk?: string | ros.IResolvable;

    /**
     * Property kafkaConfigs: Logs are ingested to Kafka configuration summary information. The values are explained as follows:
     * - kafkaEndpoint: The service access address for the Kafka API
     * - kafkaInstanceId: Kafka instance ID
     * - kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.
     */
    readonly kafkaConfigs?: string | ros.IResolvable;

    /**
     * Property liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
     */
    readonly liveness?: string | ros.IResolvable;

    /**
     * Property microRegistration: Select the Nacos registry with the following values:
     * - 0: SAE built-in Nacos.
     * - 1: User-built Nacos.
     * - 2: MSE commercial version of Nacos.
     */
    readonly microRegistration?: string | ros.IResolvable;

    /**
     * Property microRegistrationConfig: Registry configuration information.
     */
    readonly microRegistrationConfig?: string | ros.IResolvable;

    /**
     * Property mountDesc: Mount Description
     */
    readonly mountDesc?: string | ros.IResolvable;

    /**
     * Property mountHost: nas mount point in the application of vpc.
     */
    readonly mountHost?: string | ros.IResolvable;

    /**
     * Property nasConfigs: Configuration to mount the NAS. The values are explained as follows:
     * - mountPath: The container mount path
     * - readOnly: A value of false indicates read and write permission.
     * - nasId: NAS ID
     * - mountDomain: The container mount point address For more information, see DescribeMountTargets.
     * - nasPath: NAS relative file directory
     */
    readonly nasConfigs?: string | ros.IResolvable;

    /**
     * Property nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
     */
    readonly nasId?: string | ros.IResolvable;

    /**
     * Property ossAkId: AccessKey ID of the OSS.
     */
    readonly ossAkId?: string | ros.IResolvable;

    /**
     * Property ossAkSecret: AccessKey Secret of the OSS.
     */
    readonly ossAkSecret?: string | ros.IResolvable;

    /**
     * Property ossMountDescs: OSS mount description information. The parameters are described as follows:
     * - bucketName: The name of the Bucket
     * - bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.
     * - mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.
     * - readOnly: This specifies whether the container path has read-only permissions for mount directory resources:
     *   - true: Read-only permission
     *   - false: Read and write permissions
     */
    readonly ossMountDescs?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
     */
    readonly packageUrl?: string | ros.IResolvable;

    /**
     * Property packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
     */
    readonly packageVersion?: string | ros.IResolvable;

    /**
     * Property php: PHP version.
     */
    readonly php?: string | ros.IResolvable;

    /**
     * Property phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path. You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
     */
    readonly phpArmsConfigLocation?: string | ros.IResolvable;

    /**
     * Property phpConfig: PHP configuration file contents.
     */
    readonly phpConfig?: string | ros.IResolvable;

    /**
     * Property phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.
     */
    readonly phpConfigLocation?: string | ros.IResolvable;

    /**
     * Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "\/ etc \/ group"}}
     */
    readonly postStart?: string | ros.IResolvable;

    /**
     * Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "\/ etc \/ group"}}
     */
    readonly preStop?: string | ros.IResolvable;

    /**
     * Property programmingLanguage: Create the stack language for the application. The values are explained as follows:
     * - java: The Java language
     * - php: PHP language.
     * - other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.
     */
    readonly programmingLanguage?: string | ros.IResolvable;

    /**
     * Property pvtzDiscoverySvc: Enable K8s Service registration discovery. The values are explained as follows:
     * - serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.
     * - namespaceId: The namespace ID
     * - portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.
     * - portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.
     * - enable: Enable K8s Service registration discovery.
     */
    readonly pvtzDiscoverySvc?: string | ros.IResolvable;

    /**
     * Property python: Python version. Supports PYTHON 3.9.15
     */
    readonly python?: string | ros.IResolvable;

    /**
     * Property pythonModules: Install custom module dependencies. The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
     */
    readonly pythonModules?: string | ros.IResolvable;

    /**
     * Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
     */
    readonly readiness?: string | ros.IResolvable;

    /**
     * Property saeVersion: SAE version.
     */
    readonly saeVersion?: string | ros.IResolvable;

    /**
     * Property securityGroupId: Security group ID.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property serviceTags: Service tags.
     */
    readonly serviceTags?: string | ros.IResolvable;

    /**
     * Property slsConfigs: Log collection configuration file
     */
    readonly slsConfigs?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosApplication.TagsProperty[];

    /**
     * Property terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds. The value ranges from 1 to 300.
     */
    readonly terminationGracePeriodSeconds?: number | ros.IResolvable;

    /**
     * Property timezone: Application time zone. Default Asia\/Shanghai.
     */
    readonly timezone?: string | ros.IResolvable;

    /**
     * Property tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration:
     * - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024. If not configured, it defaults to 8080.
     * - contextPath: The access path, defaults to the root directory "\/"
     * - maxThreads: This config the number of connections in the pool; the default is 400.
     * - uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.
     * - useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).
     */
    readonly tomcatConfig?: string | ros.IResolvable;

    /**
     * Property vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * Property warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
     */
    readonly warStartOptions?: string | ros.IResolvable;

    /**
     * Property webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
     */
    readonly webContainer?: string | ros.IResolvable;
}

/**
 * Represents a `Application`.
 */
export interface IApplication extends ros.IResource {
    readonly props: ApplicationProps;

    /**
     * Attribute AppId: Creating successful application ID.
     */
    readonly attrAppId: ros.IResolvable | string;

    /**
     * Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    readonly attrChangeOrderId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAE::Application`, which is used to create an application in Serverless App Engine (SAE).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
 */
export class Application extends ros.Resource implements IApplication {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ApplicationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AppId: Creating successful application ID.
     */
    public readonly attrAppId: ros.IResolvable | string;

    /**
     * Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    public readonly attrChangeOrderId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosApplication = new RosApplication(this, id,  {
            timezone: props.timezone,
            phpConfig: props.phpConfig,
            mountDesc: props.mountDesc,
            microRegistrationConfig: props.microRegistrationConfig,
            liveness: props.liveness,
            warStartOptions: props.warStartOptions,
            memory: props.memory,
            webContainer: props.webContainer,
            cpu: props.cpu,
            nasConfigs: props.nasConfigs,
            jarStartArgs: props.jarStartArgs,
            preStop: props.preStop,
            phpArmsConfigLocation: props.phpArmsConfigLocation,
            packageType: props.packageType,
            autoConfig: props.autoConfig,
            tags: props.tags,
            python: props.python,
            ossAkSecret: props.ossAkSecret,
            vSwitchId: props.vSwitchId,
            imageUrl: props.imageUrl,
            postStart: props.postStart,
            baseAppId: props.baseAppId,
            configMapMountDesc: props.configMapMountDesc,
            vpcId: props.vpcId,
            enableEbpf: props.enableEbpf,
            edasContainerVersion: props.edasContainerVersion,
            serviceTags: props.serviceTags,
            namespaceId: props.namespaceId,
            tomcatConfig: props.tomcatConfig,
            appDescription: props.appDescription,
            nasId: props.nasId,
            pythonModules: props.pythonModules,
            acrInstanceId: props.acrInstanceId,
            kafkaConfigs: props.kafkaConfigs,
            slsConfigs: props.slsConfigs,
            ossAkId: props.ossAkId,
            ossMountDescs: props.ossMountDescs,
            deploy: props.deploy,
            packageVersion: props.packageVersion,
            appName: props.appName,
            jdk: props.jdk,
            readiness: props.readiness,
            microRegistration: props.microRegistration,
            php: props.php,
            commandArgs: props.commandArgs,
            acrAssumeRoleArn: props.acrAssumeRoleArn,
            saeVersion: props.saeVersion,
            terminationGracePeriodSeconds: props.terminationGracePeriodSeconds,
            envs: props.envs,
            securityGroupId: props.securityGroupId,
            pvtzDiscoverySvc: props.pvtzDiscoverySvc,
            jarStartOptions: props.jarStartOptions,
            imagePullSecrets: props.imagePullSecrets,
            mountHost: props.mountHost,
            replicas: props.replicas,
            customHostAlias: props.customHostAlias,
            appSource: props.appSource,
            associateEip: props.associateEip,
            command: props.command,
            packageUrl: props.packageUrl,
            phpConfigLocation: props.phpConfigLocation,
            programmingLanguage: props.programmingLanguage,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApplication;
        this.attrAppId = rosApplication.attrAppId;
        this.attrChangeOrderId = rosApplication.attrChangeOrderId;
    }
}
