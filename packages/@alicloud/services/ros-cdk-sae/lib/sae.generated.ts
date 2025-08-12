// Generated from the AliCloud ROS Resource Specification

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
     * @Property cpu: The CPU required for each instance. Valid values: 500, 1000, 2000, 4000, 8000, 16000, 32000.
     */
    readonly cpu: number | ros.IResolvable;

    /**
     * @Property memory: The memory required for each instance, in MB, cannot be 0. One-to-one correspondence with CPU. Valid values: 1024, 2048, 4096, 8192, 12288, 16384, 24576, 32768, 65536, 131072.
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
     * @Property deploy: Whether deployed immediately take effect, the default is true.
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
     * @Property enableNewArms: Whether to enable the new ARMS feature.
     */
    readonly enableNewArms?: boolean | ros.IResolvable;

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
     * @Property newSaeVersion: The new SAE version. Supported versions: lite, std, pro.
     */
    readonly newSaeVersion?: string | ros.IResolvable;

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
     * - python: Python language.
     * - dotnet: .NET Core language.
     * - golang: GoLang language.
     * - other: Multiple languages such as C++, Node.js, etc.
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
 * Determine whether the given properties match those of a `RosApplicationProps`
 *
 * @param properties - the TypeScript properties of a `RosApplicationProps`
 *
 * @returns the result of the validation.
 */
function RosApplicationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('timezone', ros.validateString)(properties.timezone));
    errors.collect(ros.propertyValidator('phpConfig', ros.validateString)(properties.phpConfig));
    errors.collect(ros.propertyValidator('mountDesc', ros.validateString)(properties.mountDesc));
    errors.collect(ros.propertyValidator('microRegistrationConfig', ros.validateString)(properties.microRegistrationConfig));
    errors.collect(ros.propertyValidator('warStartOptions', ros.validateString)(properties.warStartOptions));
    errors.collect(ros.propertyValidator('liveness', ros.validateString)(properties.liveness));
    errors.collect(ros.propertyValidator('memory', ros.requiredValidator)(properties.memory));
    if(properties.memory && (typeof properties.memory) !== 'object') {
        errors.collect(ros.propertyValidator('memory', ros.validateAllowedValues)({
          data: properties.memory,
          allowedValues: [1024,2048,4096,8192,12288,16384,24576,32768,65536,131072],
        }));
    }
    errors.collect(ros.propertyValidator('memory', ros.validateNumber)(properties.memory));
    errors.collect(ros.propertyValidator('webContainer', ros.validateString)(properties.webContainer));
    errors.collect(ros.propertyValidator('cpu', ros.requiredValidator)(properties.cpu));
    if(properties.cpu && (typeof properties.cpu) !== 'object') {
        errors.collect(ros.propertyValidator('cpu', ros.validateAllowedValues)({
          data: properties.cpu,
          allowedValues: [500,1000,2000,4000,8000,16000,32000],
        }));
    }
    errors.collect(ros.propertyValidator('cpu', ros.validateNumber)(properties.cpu));
    errors.collect(ros.propertyValidator('nasConfigs', ros.validateString)(properties.nasConfigs));
    errors.collect(ros.propertyValidator('jarStartArgs', ros.validateString)(properties.jarStartArgs));
    errors.collect(ros.propertyValidator('preStop', ros.validateString)(properties.preStop));
    errors.collect(ros.propertyValidator('phpArmsConfigLocation', ros.validateString)(properties.phpArmsConfigLocation));
    errors.collect(ros.propertyValidator('packageType', ros.requiredValidator)(properties.packageType));
    errors.collect(ros.propertyValidator('packageType', ros.validateString)(properties.packageType));
    errors.collect(ros.propertyValidator('autoConfig', ros.validateBoolean)(properties.autoConfig));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosApplication_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('python', ros.validateString)(properties.python));
    errors.collect(ros.propertyValidator('ossAkSecret', ros.validateString)(properties.ossAkSecret));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('imageUrl', ros.validateString)(properties.imageUrl));
    errors.collect(ros.propertyValidator('postStart', ros.validateString)(properties.postStart));
    errors.collect(ros.propertyValidator('baseAppId', ros.validateString)(properties.baseAppId));
    errors.collect(ros.propertyValidator('configMapMountDesc', ros.validateString)(properties.configMapMountDesc));
    if(properties.newSaeVersion && (typeof properties.newSaeVersion) !== 'object') {
        errors.collect(ros.propertyValidator('newSaeVersion', ros.validateAllowedValues)({
          data: properties.newSaeVersion,
          allowedValues: ["lite","std","pro"],
        }));
    }
    errors.collect(ros.propertyValidator('newSaeVersion', ros.validateString)(properties.newSaeVersion));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.enableEbpf && (typeof properties.enableEbpf) !== 'object') {
        errors.collect(ros.propertyValidator('enableEbpf', ros.validateAllowedValues)({
          data: properties.enableEbpf,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('enableEbpf', ros.validateString)(properties.enableEbpf));
    errors.collect(ros.propertyValidator('edasContainerVersion', ros.validateString)(properties.edasContainerVersion));
    errors.collect(ros.propertyValidator('serviceTags', ros.validateString)(properties.serviceTags));
    errors.collect(ros.propertyValidator('namespaceId', ros.requiredValidator)(properties.namespaceId));
    errors.collect(ros.propertyValidator('namespaceId', ros.validateString)(properties.namespaceId));
    errors.collect(ros.propertyValidator('tomcatConfig', ros.validateString)(properties.tomcatConfig));
    if(properties.appDescription && (Array.isArray(properties.appDescription) || (typeof properties.appDescription) === 'string')) {
        errors.collect(ros.propertyValidator('appDescription', ros.validateLength)({
            data: properties.appDescription.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('appDescription', ros.validateString)(properties.appDescription));
    errors.collect(ros.propertyValidator('nasId', ros.validateString)(properties.nasId));
    errors.collect(ros.propertyValidator('pythonModules', ros.validateString)(properties.pythonModules));
    errors.collect(ros.propertyValidator('acrInstanceId', ros.validateString)(properties.acrInstanceId));
    errors.collect(ros.propertyValidator('kafkaConfigs', ros.validateString)(properties.kafkaConfigs));
    errors.collect(ros.propertyValidator('slsConfigs', ros.validateString)(properties.slsConfigs));
    errors.collect(ros.propertyValidator('ossAkId', ros.validateString)(properties.ossAkId));
    errors.collect(ros.propertyValidator('ossMountDescs', ros.listValidator(ros.validateAny))(properties.ossMountDescs));
    errors.collect(ros.propertyValidator('deploy', ros.validateBoolean)(properties.deploy));
    errors.collect(ros.propertyValidator('packageVersion', ros.validateString)(properties.packageVersion));
    errors.collect(ros.propertyValidator('appName', ros.requiredValidator)(properties.appName));
    if(properties.appName && (typeof properties.appName) !== 'object') {
        errors.collect(ros.propertyValidator('appName', ros.validateAllowedPattern)({
          data: properties.appName,
          reg: /^[a-zA-Z][a-zA-Z0-9-]{0,35}$/
        }));
    }
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    errors.collect(ros.propertyValidator('jdk', ros.validateString)(properties.jdk));
    errors.collect(ros.propertyValidator('readiness', ros.validateString)(properties.readiness));
    if(properties.microRegistration && (typeof properties.microRegistration) !== 'object') {
        errors.collect(ros.propertyValidator('microRegistration', ros.validateAllowedValues)({
          data: properties.microRegistration,
          allowedValues: ["0","1","2"],
        }));
    }
    errors.collect(ros.propertyValidator('microRegistration', ros.validateString)(properties.microRegistration));
    errors.collect(ros.propertyValidator('php', ros.validateString)(properties.php));
    errors.collect(ros.propertyValidator('commandArgs', ros.validateString)(properties.commandArgs));
    errors.collect(ros.propertyValidator('acrAssumeRoleArn', ros.validateString)(properties.acrAssumeRoleArn));
    errors.collect(ros.propertyValidator('saeVersion', ros.validateString)(properties.saeVersion));
    if(properties.terminationGracePeriodSeconds && (typeof properties.terminationGracePeriodSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('terminationGracePeriodSeconds', ros.validateRange)({
            data: properties.terminationGracePeriodSeconds,
            min: 1,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('terminationGracePeriodSeconds', ros.validateNumber)(properties.terminationGracePeriodSeconds));
    errors.collect(ros.propertyValidator('envs', ros.validateString)(properties.envs));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('pvtzDiscoverySvc', ros.validateString)(properties.pvtzDiscoverySvc));
    errors.collect(ros.propertyValidator('jarStartOptions', ros.validateString)(properties.jarStartOptions));
    errors.collect(ros.propertyValidator('imagePullSecrets', ros.validateString)(properties.imagePullSecrets));
    errors.collect(ros.propertyValidator('mountHost', ros.validateString)(properties.mountHost));
    errors.collect(ros.propertyValidator('replicas', ros.requiredValidator)(properties.replicas));
    errors.collect(ros.propertyValidator('replicas', ros.validateNumber)(properties.replicas));
    errors.collect(ros.propertyValidator('customHostAlias', ros.validateString)(properties.customHostAlias));
    errors.collect(ros.propertyValidator('appSource', ros.validateString)(properties.appSource));
    errors.collect(ros.propertyValidator('associateEip', ros.validateBoolean)(properties.associateEip));
    errors.collect(ros.propertyValidator('command', ros.validateString)(properties.command));
    errors.collect(ros.propertyValidator('packageUrl', ros.validateString)(properties.packageUrl));
    errors.collect(ros.propertyValidator('phpConfigLocation', ros.validateString)(properties.phpConfigLocation));
    errors.collect(ros.propertyValidator('enableNewArms', ros.validateBoolean)(properties.enableNewArms));
    if(properties.programmingLanguage && (typeof properties.programmingLanguage) !== 'object') {
        errors.collect(ros.propertyValidator('programmingLanguage', ros.validateAllowedValues)({
          data: properties.programmingLanguage,
          allowedValues: ["java","php","python","dotnet","golang","other"],
        }));
    }
    errors.collect(ros.propertyValidator('programmingLanguage', ros.validateString)(properties.programmingLanguage));
    return errors.wrap('supplied properties not correct for "RosApplicationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::Application` resource
 *
 * @param properties - the TypeScript properties of a `RosApplicationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::Application` resource.
 */
// @ts-ignore TS6133
function rosApplicationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApplicationPropsValidator(properties).assertSuccess();
    }
    return {
      'AppName': ros.stringToRosTemplate(properties.appName),
      'Cpu': ros.numberToRosTemplate(properties.cpu),
      'Memory': ros.numberToRosTemplate(properties.memory),
      'NamespaceId': ros.stringToRosTemplate(properties.namespaceId),
      'PackageType': ros.stringToRosTemplate(properties.packageType),
      'Replicas': ros.numberToRosTemplate(properties.replicas),
      'AcrAssumeRoleArn': ros.stringToRosTemplate(properties.acrAssumeRoleArn),
      'AcrInstanceId': ros.stringToRosTemplate(properties.acrInstanceId),
      'AppDescription': ros.stringToRosTemplate(properties.appDescription),
      'AppSource': ros.stringToRosTemplate(properties.appSource),
      'AssociateEip': ros.booleanToRosTemplate(properties.associateEip),
      'AutoConfig': ros.booleanToRosTemplate(properties.autoConfig),
      'BaseAppId': ros.stringToRosTemplate(properties.baseAppId),
      'Command': ros.stringToRosTemplate(properties.command),
      'CommandArgs': ros.stringToRosTemplate(properties.commandArgs),
      'ConfigMapMountDesc': ros.stringToRosTemplate(properties.configMapMountDesc),
      'CustomHostAlias': ros.stringToRosTemplate(properties.customHostAlias),
      'Deploy': ros.booleanToRosTemplate(properties.deploy),
      'EdasContainerVersion': ros.stringToRosTemplate(properties.edasContainerVersion),
      'EnableEbpf': ros.stringToRosTemplate(properties.enableEbpf),
      'EnableNewArms': ros.booleanToRosTemplate(properties.enableNewArms),
      'Envs': ros.stringToRosTemplate(properties.envs),
      'ImagePullSecrets': ros.stringToRosTemplate(properties.imagePullSecrets),
      'ImageUrl': ros.stringToRosTemplate(properties.imageUrl),
      'JarStartArgs': ros.stringToRosTemplate(properties.jarStartArgs),
      'JarStartOptions': ros.stringToRosTemplate(properties.jarStartOptions),
      'Jdk': ros.stringToRosTemplate(properties.jdk),
      'KafkaConfigs': ros.stringToRosTemplate(properties.kafkaConfigs),
      'Liveness': ros.stringToRosTemplate(properties.liveness),
      'MicroRegistration': ros.stringToRosTemplate(properties.microRegistration),
      'MicroRegistrationConfig': ros.stringToRosTemplate(properties.microRegistrationConfig),
      'MountDesc': ros.stringToRosTemplate(properties.mountDesc),
      'MountHost': ros.stringToRosTemplate(properties.mountHost),
      'NasConfigs': ros.stringToRosTemplate(properties.nasConfigs),
      'NasId': ros.stringToRosTemplate(properties.nasId),
      'NewSaeVersion': ros.stringToRosTemplate(properties.newSaeVersion),
      'OssAkId': ros.stringToRosTemplate(properties.ossAkId),
      'OssAkSecret': ros.stringToRosTemplate(properties.ossAkSecret),
      'OssMountDescs': ros.listMapper(ros.objectToRosTemplate)(properties.ossMountDescs),
      'PackageUrl': ros.stringToRosTemplate(properties.packageUrl),
      'PackageVersion': ros.stringToRosTemplate(properties.packageVersion),
      'Php': ros.stringToRosTemplate(properties.php),
      'PhpArmsConfigLocation': ros.stringToRosTemplate(properties.phpArmsConfigLocation),
      'PhpConfig': ros.stringToRosTemplate(properties.phpConfig),
      'PhpConfigLocation': ros.stringToRosTemplate(properties.phpConfigLocation),
      'PostStart': ros.stringToRosTemplate(properties.postStart),
      'PreStop': ros.stringToRosTemplate(properties.preStop),
      'ProgrammingLanguage': ros.stringToRosTemplate(properties.programmingLanguage),
      'PvtzDiscoverySvc': ros.stringToRosTemplate(properties.pvtzDiscoverySvc),
      'Python': ros.stringToRosTemplate(properties.python),
      'PythonModules': ros.stringToRosTemplate(properties.pythonModules),
      'Readiness': ros.stringToRosTemplate(properties.readiness),
      'SaeVersion': ros.stringToRosTemplate(properties.saeVersion),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'ServiceTags': ros.stringToRosTemplate(properties.serviceTags),
      'SlsConfigs': ros.stringToRosTemplate(properties.slsConfigs),
      'Tags': ros.listMapper(rosApplicationTagsPropertyToRosTemplate)(properties.tags),
      'TerminationGracePeriodSeconds': ros.numberToRosTemplate(properties.terminationGracePeriodSeconds),
      'Timezone': ros.stringToRosTemplate(properties.timezone),
      'TomcatConfig': ros.stringToRosTemplate(properties.tomcatConfig),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'WarStartOptions': ros.stringToRosTemplate(properties.warStartOptions),
      'WebContainer': ros.stringToRosTemplate(properties.webContainer),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::Application`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Application` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
 */
export class RosApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::Application";

    /**
     * @Attribute AppId: Creating successful application ID.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * @Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    public readonly attrChangeOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
     */
    public appName: string | ros.IResolvable;

    /**
     * @Property cpu: The CPU required for each instance. Valid values: 500, 1000, 2000, 4000, 8000, 16000, 32000.
     */
    public cpu: number | ros.IResolvable;

    /**
     * @Property memory: The memory required for each instance, in MB, cannot be 0. One-to-one correspondence with CPU. Valid values: 1024, 2048, 4096, 8192, 12288, 16384, 24576, 32768, 65536, 131072.
     */
    public memory: number | ros.IResolvable;

    /**
     * @Property namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
     * Namespace can interface to obtain from DescribeNamespaceList.
     */
    public namespaceId: string | ros.IResolvable;

    /**
     * @Property packageType: Application package type. Support FatJar, War, Image.
     */
    public packageType: string | ros.IResolvable;

    /**
     * @Property replicas: The initial number of instances.
     */
    public replicas: number | ros.IResolvable;

    /**
     * @Property acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.
     */
    public acrAssumeRoleArn: string | ros.IResolvable | undefined;

    /**
     * @Property acrInstanceId: Container Image service ACR Enterprise Edition instance ID. Required when ImageUrl serves enterprise edition for container images.
     */
    public acrInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property appDescription: Application description. No more than 1024 characters.
     */
    public appDescription: string | ros.IResolvable | undefined;

    /**
     * @Property appSource: Application source.
     */
    public appSource: string | ros.IResolvable | undefined;

    /**
     * @Property associateEip: Whether to bind EIP. The values are explained as follows:
     * - true: Binding.
     * - false: No binding
     */
    public associateEip: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoConfig: Whether to automatically configure the network environment. The values are explained as follows:
     * - true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.
     * - false: SAE manually config the network environment when creating the application.
     */
    public autoConfig: boolean | ros.IResolvable | undefined;

    /**
     * @Property baseAppId: Base application ID.
     */
    public baseAppId: string | ros.IResolvable | undefined;

    /**
     * @Property command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
     */
    public command: string | ros.IResolvable | undefined;

    /**
     * @Property commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
     */
    public commandArgs: string | ros.IResolvable | undefined;

    /**
     * @Property configMapMountDesc: ConfigMap mount description. Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
     */
    public configMapMountDesc: string | ros.IResolvable | undefined;

    /**
     * @Property customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
     */
    public customHostAlias: string | ros.IResolvable | undefined;

    /**
     * @Property deploy: Whether deployed immediately take effect, the default is true.
     */
    public deploy: boolean | ros.IResolvable | undefined;

    /**
     * @Property edasContainerVersion: EDAS pandora runtime environment used by the application.
     */
    public edasContainerVersion: string | ros.IResolvable | undefined;

    /**
     * @Property enableEbpf: Whether to enable EBPF. Enable application monitoring for non-Java applications. The values are explained as follows:
     * - true: Enable.
     * - false: Disable.
     */
    public enableEbpf: string | ros.IResolvable | undefined;

    /**
     * @Property enableNewArms: Whether to enable the new ARMS feature.
     */
    public enableNewArms: boolean | ros.IResolvable | undefined;

    /**
     * @Property envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
     */
    public envs: string | ros.IResolvable | undefined;

    /**
     * @Property imagePullSecrets: Corresponding to the secret dictionary ID.
     */
    public imagePullSecrets: string | ros.IResolvable | undefined;

    /**
     * @Property imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
     */
    public imageUrl: string | ros.IResolvable | undefined;

    /**
     * @Property jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    public jarStartArgs: string | ros.IResolvable | undefined;

    /**
     * @Property jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME \/ bin \/ java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    public jarStartOptions: string | ros.IResolvable | undefined;

    /**
     * @Property jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
     */
    public jdk: string | ros.IResolvable | undefined;

    /**
     * @Property kafkaConfigs: Logs are ingested to Kafka configuration summary information. The values are explained as follows:
     * - kafkaEndpoint: The service access address for the Kafka API
     * - kafkaInstanceId: Kafka instance ID
     * - kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.
     */
    public kafkaConfigs: string | ros.IResolvable | undefined;

    /**
     * @Property liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
     */
    public liveness: string | ros.IResolvable | undefined;

    /**
     * @Property microRegistration: Select the Nacos registry with the following values:
     * - 0: SAE built-in Nacos.
     * - 1: User-built Nacos.
     * - 2: MSE commercial version of Nacos.
     */
    public microRegistration: string | ros.IResolvable | undefined;

    /**
     * @Property microRegistrationConfig: Registry configuration information.
     */
    public microRegistrationConfig: string | ros.IResolvable | undefined;

    /**
     * @Property mountDesc: Mount Description
     */
    public mountDesc: string | ros.IResolvable | undefined;

    /**
     * @Property mountHost: nas mount point in the application of vpc.
     */
    public mountHost: string | ros.IResolvable | undefined;

    /**
     * @Property nasConfigs: Configuration to mount the NAS. The values are explained as follows:
     * - mountPath: The container mount path
     * - readOnly: A value of false indicates read and write permission.
     * - nasId: NAS ID
     * - mountDomain: The container mount point address For more information, see DescribeMountTargets.
     * - nasPath: NAS relative file directory
     */
    public nasConfigs: string | ros.IResolvable | undefined;

    /**
     * @Property nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
     */
    public nasId: string | ros.IResolvable | undefined;

    /**
     * @Property newSaeVersion: The new SAE version. Supported versions: lite, std, pro.
     */
    public newSaeVersion: string | ros.IResolvable | undefined;

    /**
     * @Property ossAkId: AccessKey ID of the OSS.
     */
    public ossAkId: string | ros.IResolvable | undefined;

    /**
     * @Property ossAkSecret: AccessKey Secret of the OSS.
     */
    public ossAkSecret: string | ros.IResolvable | undefined;

    /**
     * @Property ossMountDescs: OSS mount description information. The parameters are described as follows:
     * - bucketName: The name of the Bucket
     * - bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.
     * - mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.
     * - readOnly: This specifies whether the container path has read-only permissions for mount directory resources:
     *   - true: Read-only permission
     *   - false: Read and write permissions
     */
    public ossMountDescs: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
     */
    public packageUrl: string | ros.IResolvable | undefined;

    /**
     * @Property packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
     */
    public packageVersion: string | ros.IResolvable | undefined;

    /**
     * @Property php: PHP version.
     */
    public php: string | ros.IResolvable | undefined;

    /**
     * @Property phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path. You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
     */
    public phpArmsConfigLocation: string | ros.IResolvable | undefined;

    /**
     * @Property phpConfig: PHP configuration file contents.
     */
    public phpConfig: string | ros.IResolvable | undefined;

    /**
     * @Property phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.
     */
    public phpConfigLocation: string | ros.IResolvable | undefined;

    /**
     * @Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "\/ etc \/ group"}}
     */
    public postStart: string | ros.IResolvable | undefined;

    /**
     * @Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "\/ etc \/ group"}}
     */
    public preStop: string | ros.IResolvable | undefined;

    /**
     * @Property programmingLanguage: Create the stack language for the application. The values are explained as follows:
     * - java: The Java language
     * - php: PHP language.
     * - python: Python language.
     * - dotnet: .NET Core language.
     * - golang: GoLang language.
     * - other: Multiple languages such as C++, Node.js, etc.
     */
    public programmingLanguage: string | ros.IResolvable | undefined;

    /**
     * @Property pvtzDiscoverySvc: Enable K8s Service registration discovery. The values are explained as follows:
     * - serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.
     * - namespaceId: The namespace ID
     * - portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.
     * - portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.
     * - enable: Enable K8s Service registration discovery.
     */
    public pvtzDiscoverySvc: string | ros.IResolvable | undefined;

    /**
     * @Property python: Python version. Supports PYTHON 3.9.15
     */
    public python: string | ros.IResolvable | undefined;

    /**
     * @Property pythonModules: Install custom module dependencies. The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
     */
    public pythonModules: string | ros.IResolvable | undefined;

    /**
     * @Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
     */
    public readiness: string | ros.IResolvable | undefined;

    /**
     * @Property saeVersion: SAE version.
     */
    public saeVersion: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Security group ID.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property serviceTags: Service tags.
     */
    public serviceTags: string | ros.IResolvable | undefined;

    /**
     * @Property slsConfigs: Log collection configuration file
     */
    public slsConfigs: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosApplication.TagsProperty[] | undefined;

    /**
     * @Property terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds. The value ranges from 1 to 300.
     */
    public terminationGracePeriodSeconds: number | ros.IResolvable | undefined;

    /**
     * @Property timezone: Application time zone. Default Asia\/Shanghai.
     */
    public timezone: string | ros.IResolvable | undefined;

    /**
     * @Property tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration:
     * - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024. If not configured, it defaults to 8080.
     * - contextPath: The access path, defaults to the root directory "\/"
     * - maxThreads: This config the number of connections in the pool; the default is 400.
     * - uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.
     * - useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).
     */
    public tomcatConfig: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
     */
    public warStartOptions: string | ros.IResolvable | undefined;

    /**
     * @Property webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
     */
    public webContainer: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApplication.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrChangeOrderId = this.getAtt('ChangeOrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appName = props.appName;
        this.cpu = props.cpu;
        this.memory = props.memory;
        this.namespaceId = props.namespaceId;
        this.packageType = props.packageType;
        this.replicas = props.replicas;
        this.acrAssumeRoleArn = props.acrAssumeRoleArn;
        this.acrInstanceId = props.acrInstanceId;
        this.appDescription = props.appDescription;
        this.appSource = props.appSource;
        this.associateEip = props.associateEip;
        this.autoConfig = props.autoConfig;
        this.baseAppId = props.baseAppId;
        this.command = props.command;
        this.commandArgs = props.commandArgs;
        this.configMapMountDesc = props.configMapMountDesc;
        this.customHostAlias = props.customHostAlias;
        this.deploy = props.deploy;
        this.edasContainerVersion = props.edasContainerVersion;
        this.enableEbpf = props.enableEbpf;
        this.enableNewArms = props.enableNewArms;
        this.envs = props.envs;
        this.imagePullSecrets = props.imagePullSecrets;
        this.imageUrl = props.imageUrl;
        this.jarStartArgs = props.jarStartArgs;
        this.jarStartOptions = props.jarStartOptions;
        this.jdk = props.jdk;
        this.kafkaConfigs = props.kafkaConfigs;
        this.liveness = props.liveness;
        this.microRegistration = props.microRegistration;
        this.microRegistrationConfig = props.microRegistrationConfig;
        this.mountDesc = props.mountDesc;
        this.mountHost = props.mountHost;
        this.nasConfigs = props.nasConfigs;
        this.nasId = props.nasId;
        this.newSaeVersion = props.newSaeVersion;
        this.ossAkId = props.ossAkId;
        this.ossAkSecret = props.ossAkSecret;
        this.ossMountDescs = props.ossMountDescs;
        this.packageUrl = props.packageUrl;
        this.packageVersion = props.packageVersion;
        this.php = props.php;
        this.phpArmsConfigLocation = props.phpArmsConfigLocation;
        this.phpConfig = props.phpConfig;
        this.phpConfigLocation = props.phpConfigLocation;
        this.postStart = props.postStart;
        this.preStop = props.preStop;
        this.programmingLanguage = props.programmingLanguage;
        this.pvtzDiscoverySvc = props.pvtzDiscoverySvc;
        this.python = props.python;
        this.pythonModules = props.pythonModules;
        this.readiness = props.readiness;
        this.saeVersion = props.saeVersion;
        this.securityGroupId = props.securityGroupId;
        this.serviceTags = props.serviceTags;
        this.slsConfigs = props.slsConfigs;
        this.tags = props.tags;
        this.terminationGracePeriodSeconds = props.terminationGracePeriodSeconds;
        this.timezone = props.timezone;
        this.tomcatConfig = props.tomcatConfig;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.warStartOptions = props.warStartOptions;
        this.webContainer = props.webContainer;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appName: this.appName,
            cpu: this.cpu,
            memory: this.memory,
            namespaceId: this.namespaceId,
            packageType: this.packageType,
            replicas: this.replicas,
            acrAssumeRoleArn: this.acrAssumeRoleArn,
            acrInstanceId: this.acrInstanceId,
            appDescription: this.appDescription,
            appSource: this.appSource,
            associateEip: this.associateEip,
            autoConfig: this.autoConfig,
            baseAppId: this.baseAppId,
            command: this.command,
            commandArgs: this.commandArgs,
            configMapMountDesc: this.configMapMountDesc,
            customHostAlias: this.customHostAlias,
            deploy: this.deploy,
            edasContainerVersion: this.edasContainerVersion,
            enableEbpf: this.enableEbpf,
            enableNewArms: this.enableNewArms,
            envs: this.envs,
            imagePullSecrets: this.imagePullSecrets,
            imageUrl: this.imageUrl,
            jarStartArgs: this.jarStartArgs,
            jarStartOptions: this.jarStartOptions,
            jdk: this.jdk,
            kafkaConfigs: this.kafkaConfigs,
            liveness: this.liveness,
            microRegistration: this.microRegistration,
            microRegistrationConfig: this.microRegistrationConfig,
            mountDesc: this.mountDesc,
            mountHost: this.mountHost,
            nasConfigs: this.nasConfigs,
            nasId: this.nasId,
            newSaeVersion: this.newSaeVersion,
            ossAkId: this.ossAkId,
            ossAkSecret: this.ossAkSecret,
            ossMountDescs: this.ossMountDescs,
            packageUrl: this.packageUrl,
            packageVersion: this.packageVersion,
            php: this.php,
            phpArmsConfigLocation: this.phpArmsConfigLocation,
            phpConfig: this.phpConfig,
            phpConfigLocation: this.phpConfigLocation,
            postStart: this.postStart,
            preStop: this.preStop,
            programmingLanguage: this.programmingLanguage,
            pvtzDiscoverySvc: this.pvtzDiscoverySvc,
            python: this.python,
            pythonModules: this.pythonModules,
            readiness: this.readiness,
            saeVersion: this.saeVersion,
            securityGroupId: this.securityGroupId,
            serviceTags: this.serviceTags,
            slsConfigs: this.slsConfigs,
            tags: this.tags,
            terminationGracePeriodSeconds: this.terminationGracePeriodSeconds,
            timezone: this.timezone,
            tomcatConfig: this.tomcatConfig,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            warStartOptions: this.warStartOptions,
            webContainer: this.webContainer,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApplicationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosApplication {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosApplication_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::Application.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::Application.Tags` resource.
 */
// @ts-ignore TS6133
function rosApplicationTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApplication_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
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
 * Determine whether the given properties match those of a `RosApplicationScalingRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosApplicationScalingRuleProps`
 *
 * @returns the result of the validation.
 */
function RosApplicationScalingRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('scalingRuleMetric', RosApplicationScalingRule_ScalingRuleMetricPropertyValidator)(properties.scalingRuleMetric));
    errors.collect(ros.propertyValidator('scalingRuleTimer', RosApplicationScalingRule_ScalingRuleTimerPropertyValidator)(properties.scalingRuleTimer));
    errors.collect(ros.propertyValidator('scalingRuleName', ros.requiredValidator)(properties.scalingRuleName));
    if(properties.scalingRuleName && (typeof properties.scalingRuleName) !== 'object') {
        errors.collect(ros.propertyValidator('scalingRuleName', ros.validateAllowedPattern)({
          data: properties.scalingRuleName,
          reg: /^[a-z][a-z0-9-]{0,31}$/
        }));
    }
    errors.collect(ros.propertyValidator('scalingRuleName', ros.validateString)(properties.scalingRuleName));
    errors.collect(ros.propertyValidator('scalingRuleEnable', ros.validateBoolean)(properties.scalingRuleEnable));
    errors.collect(ros.propertyValidator('appId', ros.requiredValidator)(properties.appId));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    if(properties.minReadyInstances && (typeof properties.minReadyInstances) !== 'object') {
        errors.collect(ros.propertyValidator('minReadyInstances', ros.validateRange)({
            data: properties.minReadyInstances,
            min: -1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('minReadyInstances', ros.validateNumber)(properties.minReadyInstances));
    if(properties.minReadyInstanceRatio && (typeof properties.minReadyInstanceRatio) !== 'object') {
        errors.collect(ros.propertyValidator('minReadyInstanceRatio', ros.validateRange)({
            data: properties.minReadyInstanceRatio,
            min: -1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('minReadyInstanceRatio', ros.validateNumber)(properties.minReadyInstanceRatio));
    errors.collect(ros.propertyValidator('scalingRuleType', ros.requiredValidator)(properties.scalingRuleType));
    if(properties.scalingRuleType && (typeof properties.scalingRuleType) !== 'object') {
        errors.collect(ros.propertyValidator('scalingRuleType', ros.validateAllowedValues)({
          data: properties.scalingRuleType,
          allowedValues: ["timing","metric","mix"],
        }));
    }
    errors.collect(ros.propertyValidator('scalingRuleType', ros.validateString)(properties.scalingRuleType));
    return errors.wrap('supplied properties not correct for "RosApplicationScalingRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule` resource
 *
 * @param properties - the TypeScript properties of a `RosApplicationScalingRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule` resource.
 */
// @ts-ignore TS6133
function rosApplicationScalingRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApplicationScalingRulePropsValidator(properties).assertSuccess();
    }
    return {
      'AppId': ros.stringToRosTemplate(properties.appId),
      'ScalingRuleName': ros.stringToRosTemplate(properties.scalingRuleName),
      'ScalingRuleType': ros.stringToRosTemplate(properties.scalingRuleType),
      'MinReadyInstanceRatio': ros.numberToRosTemplate(properties.minReadyInstanceRatio),
      'MinReadyInstances': ros.numberToRosTemplate(properties.minReadyInstances),
      'ScalingRuleEnable': ros.booleanToRosTemplate(properties.scalingRuleEnable),
      'ScalingRuleMetric': rosApplicationScalingRuleScalingRuleMetricPropertyToRosTemplate(properties.scalingRuleMetric),
      'ScalingRuleTimer': rosApplicationScalingRuleScalingRuleTimerPropertyToRosTemplate(properties.scalingRuleTimer),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::ApplicationScalingRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApplicationScalingRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-applicationscalingrule
 */
export class RosApplicationScalingRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::ApplicationScalingRule";

    /**
     * @Attribute ScalingRuleName: The name of the scaling rule.
     */
    public readonly attrScalingRuleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appId: The ID of the application.
     */
    public appId: string | ros.IResolvable;

    /**
     * @Property scalingRuleName: The name of the auto scaling policy. The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
     */
    public scalingRuleName: string | ros.IResolvable;

    /**
     * @Property scalingRuleType: The type of the auto scaling policy. Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
     */
    public scalingRuleType: string | ros.IResolvable;

    /**
     * @Property minReadyInstanceRatio: The minimum percentage of surviving instances. The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
     */
    public minReadyInstanceRatio: number | ros.IResolvable | undefined;

    /**
     * @Property minReadyInstances: Minimum number of surviving instances. The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to **-1**, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
     */
    public minReadyInstances: number | ros.IResolvable | undefined;

    /**
     * @Property scalingRuleEnable: Whether to enable the scaling rule.
     */
    public scalingRuleEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy. This parameter is required when you select monitoring indicator elasticity policy setting.
     */
    public scalingRuleMetric: RosApplicationScalingRule.ScalingRuleMetricProperty | ros.IResolvable | undefined;

    /**
     * @Property scalingRuleTimer: The configuration of the timer scaling policy.
     */
    public scalingRuleTimer: RosApplicationScalingRule.ScalingRuleTimerProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationScalingRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApplicationScalingRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingRuleName = this.getAtt('ScalingRuleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appId = props.appId;
        this.scalingRuleName = props.scalingRuleName;
        this.scalingRuleType = props.scalingRuleType;
        this.minReadyInstanceRatio = props.minReadyInstanceRatio;
        this.minReadyInstances = props.minReadyInstances;
        this.scalingRuleEnable = props.scalingRuleEnable;
        this.scalingRuleMetric = props.scalingRuleMetric;
        this.scalingRuleTimer = props.scalingRuleTimer;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appId: this.appId,
            scalingRuleName: this.scalingRuleName,
            scalingRuleType: this.scalingRuleType,
            minReadyInstanceRatio: this.minReadyInstanceRatio,
            minReadyInstances: this.minReadyInstances,
            scalingRuleEnable: this.scalingRuleEnable,
            scalingRuleMetric: this.scalingRuleMetric,
            scalingRuleTimer: this.scalingRuleTimer,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApplicationScalingRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosApplicationScalingRule {
    /**
     * @stability external
     */
    export interface MetricsProperty {
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
/**
 * Determine whether the given properties match those of a `MetricsProperty`
 *
 * @param properties - the TypeScript properties of a `MetricsProperty`
 *
 * @returns the result of the validation.
 */
function RosApplicationScalingRule_MetricsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('slbId', ros.validateString)(properties.slbId));
    errors.collect(ros.propertyValidator('metricType', ros.requiredValidator)(properties.metricType));
    if(properties.metricType && (typeof properties.metricType) !== 'object') {
        errors.collect(ros.propertyValidator('metricType', ros.validateAllowedValues)({
          data: properties.metricType,
          allowedValues: ["CPU","MEMORY","QPS","RT","tcpActiveConn","SLB_QPS","SLB_RT","INTRANET_SLB_QPS","INTRANET_SLB_RT"],
        }));
    }
    errors.collect(ros.propertyValidator('metricType', ros.validateString)(properties.metricType));
    errors.collect(ros.propertyValidator('vport', ros.validateString)(properties.vport));
    errors.collect(ros.propertyValidator('slbLogstore', ros.validateString)(properties.slbLogstore));
    errors.collect(ros.propertyValidator('slbProject', ros.validateString)(properties.slbProject));
    errors.collect(ros.propertyValidator('metricTargetAverageUtilization', ros.requiredValidator)(properties.metricTargetAverageUtilization));
    errors.collect(ros.propertyValidator('metricTargetAverageUtilization', ros.validateNumber)(properties.metricTargetAverageUtilization));
    return errors.wrap('supplied properties not correct for "MetricsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule.Metrics` resource
 *
 * @param properties - the TypeScript properties of a `MetricsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule.Metrics` resource.
 */
// @ts-ignore TS6133
function rosApplicationScalingRuleMetricsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApplicationScalingRule_MetricsPropertyValidator(properties).assertSuccess();
    return {
      'SlbId': ros.stringToRosTemplate(properties.slbId),
      'MetricType': ros.stringToRosTemplate(properties.metricType),
      'Vport': ros.stringToRosTemplate(properties.vport),
      'SlbLogstore': ros.stringToRosTemplate(properties.slbLogstore),
      'SlbProject': ros.stringToRosTemplate(properties.slbProject),
      'MetricTargetAverageUtilization': ros.numberToRosTemplate(properties.metricTargetAverageUtilization),
    };
}

export namespace RosApplicationScalingRule {
    /**
     * @stability external
     */
    export interface ScaleDownRulesProperty {
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
/**
 * Determine whether the given properties match those of a `ScaleDownRulesProperty`
 *
 * @param properties - the TypeScript properties of a `ScaleDownRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosApplicationScalingRule_ScaleDownRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('step', ros.requiredValidator)(properties.step));
    errors.collect(ros.propertyValidator('step', ros.validateString)(properties.step));
    errors.collect(ros.propertyValidator('stabilizationWindowSeconds', ros.validateNumber)(properties.stabilizationWindowSeconds));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    return errors.wrap('supplied properties not correct for "ScaleDownRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule.ScaleDownRules` resource
 *
 * @param properties - the TypeScript properties of a `ScaleDownRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule.ScaleDownRules` resource.
 */
// @ts-ignore TS6133
function rosApplicationScalingRuleScaleDownRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApplicationScalingRule_ScaleDownRulesPropertyValidator(properties).assertSuccess();
    return {
      'Step': ros.stringToRosTemplate(properties.step),
      'StabilizationWindowSeconds': ros.numberToRosTemplate(properties.stabilizationWindowSeconds),
      'Disabled': ros.booleanToRosTemplate(properties.disabled),
    };
}

export namespace RosApplicationScalingRule {
    /**
     * @stability external
     */
    export interface ScaleUpRulesProperty {
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
/**
 * Determine whether the given properties match those of a `ScaleUpRulesProperty`
 *
 * @param properties - the TypeScript properties of a `ScaleUpRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosApplicationScalingRule_ScaleUpRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('step', ros.requiredValidator)(properties.step));
    errors.collect(ros.propertyValidator('step', ros.validateString)(properties.step));
    errors.collect(ros.propertyValidator('stabilizationWindowSeconds', ros.validateNumber)(properties.stabilizationWindowSeconds));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    return errors.wrap('supplied properties not correct for "ScaleUpRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule.ScaleUpRules` resource
 *
 * @param properties - the TypeScript properties of a `ScaleUpRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule.ScaleUpRules` resource.
 */
// @ts-ignore TS6133
function rosApplicationScalingRuleScaleUpRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApplicationScalingRule_ScaleUpRulesPropertyValidator(properties).assertSuccess();
    return {
      'Step': ros.stringToRosTemplate(properties.step),
      'StabilizationWindowSeconds': ros.numberToRosTemplate(properties.stabilizationWindowSeconds),
      'Disabled': ros.booleanToRosTemplate(properties.disabled),
    };
}

export namespace RosApplicationScalingRule {
    /**
     * @stability external
     */
    export interface ScalingRuleMetricProperty {
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
/**
 * Determine whether the given properties match those of a `ScalingRuleMetricProperty`
 *
 * @param properties - the TypeScript properties of a `ScalingRuleMetricProperty`
 *
 * @returns the result of the validation.
 */
function RosApplicationScalingRule_ScalingRuleMetricPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('metrics', ros.requiredValidator)(properties.metrics));
    if(properties.metrics && (Array.isArray(properties.metrics) || (typeof properties.metrics) === 'string')) {
        errors.collect(ros.propertyValidator('metrics', ros.validateLength)({
            data: properties.metrics.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('metrics', ros.listValidator(RosApplicationScalingRule_MetricsPropertyValidator))(properties.metrics));
    errors.collect(ros.propertyValidator('minReplicas', ros.requiredValidator)(properties.minReplicas));
    errors.collect(ros.propertyValidator('minReplicas', ros.validateNumber)(properties.minReplicas));
    errors.collect(ros.propertyValidator('maxReplicas', ros.requiredValidator)(properties.maxReplicas));
    errors.collect(ros.propertyValidator('maxReplicas', ros.validateNumber)(properties.maxReplicas));
    errors.collect(ros.propertyValidator('scaleDownRules', RosApplicationScalingRule_ScaleDownRulesPropertyValidator)(properties.scaleDownRules));
    errors.collect(ros.propertyValidator('scaleUpRules', RosApplicationScalingRule_ScaleUpRulesPropertyValidator)(properties.scaleUpRules));
    return errors.wrap('supplied properties not correct for "ScalingRuleMetricProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule.ScalingRuleMetric` resource
 *
 * @param properties - the TypeScript properties of a `ScalingRuleMetricProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule.ScalingRuleMetric` resource.
 */
// @ts-ignore TS6133
function rosApplicationScalingRuleScalingRuleMetricPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApplicationScalingRule_ScalingRuleMetricPropertyValidator(properties).assertSuccess();
    return {
      'Metrics': ros.listMapper(rosApplicationScalingRuleMetricsPropertyToRosTemplate)(properties.metrics),
      'MinReplicas': ros.numberToRosTemplate(properties.minReplicas),
      'MaxReplicas': ros.numberToRosTemplate(properties.maxReplicas),
      'ScaleDownRules': rosApplicationScalingRuleScaleDownRulesPropertyToRosTemplate(properties.scaleDownRules),
      'ScaleUpRules': rosApplicationScalingRuleScaleUpRulesPropertyToRosTemplate(properties.scaleUpRules),
    };
}

export namespace RosApplicationScalingRule {
    /**
     * @stability external
     */
    export interface ScalingRuleTimerProperty {
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
/**
 * Determine whether the given properties match those of a `ScalingRuleTimerProperty`
 *
 * @param properties - the TypeScript properties of a `ScalingRuleTimerProperty`
 *
 * @returns the result of the validation.
 */
function RosApplicationScalingRule_ScalingRuleTimerPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('schedules', ros.requiredValidator)(properties.schedules));
    if(properties.schedules && (Array.isArray(properties.schedules) || (typeof properties.schedules) === 'string')) {
        errors.collect(ros.propertyValidator('schedules', ros.validateLength)({
            data: properties.schedules.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('schedules', ros.listValidator(RosApplicationScalingRule_SchedulesPropertyValidator))(properties.schedules));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    errors.collect(ros.propertyValidator('endDate', ros.validateString)(properties.endDate));
    errors.collect(ros.propertyValidator('beginDate', ros.validateString)(properties.beginDate));
    return errors.wrap('supplied properties not correct for "ScalingRuleTimerProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule.ScalingRuleTimer` resource
 *
 * @param properties - the TypeScript properties of a `ScalingRuleTimerProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule.ScalingRuleTimer` resource.
 */
// @ts-ignore TS6133
function rosApplicationScalingRuleScalingRuleTimerPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApplicationScalingRule_ScalingRuleTimerPropertyValidator(properties).assertSuccess();
    return {
      'Schedules': ros.listMapper(rosApplicationScalingRuleSchedulesPropertyToRosTemplate)(properties.schedules),
      'Period': ros.stringToRosTemplate(properties.period),
      'EndDate': ros.stringToRosTemplate(properties.endDate),
      'BeginDate': ros.stringToRosTemplate(properties.beginDate),
    };
}

export namespace RosApplicationScalingRule {
    /**
     * @stability external
     */
    export interface SchedulesProperty {
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
 * Determine whether the given properties match those of a `SchedulesProperty`
 *
 * @param properties - the TypeScript properties of a `SchedulesProperty`
 *
 * @returns the result of the validation.
 */
function RosApplicationScalingRule_SchedulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('targetReplicas', ros.requiredValidator)(properties.targetReplicas));
    if(properties.targetReplicas && (typeof properties.targetReplicas) !== 'object') {
        errors.collect(ros.propertyValidator('targetReplicas', ros.validateRange)({
            data: properties.targetReplicas,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('targetReplicas', ros.validateNumber)(properties.targetReplicas));
    errors.collect(ros.propertyValidator('atTime', ros.requiredValidator)(properties.atTime));
    errors.collect(ros.propertyValidator('atTime', ros.validateString)(properties.atTime));
    return errors.wrap('supplied properties not correct for "SchedulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule.Schedules` resource
 *
 * @param properties - the TypeScript properties of a `SchedulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::ApplicationScalingRule.Schedules` resource.
 */
// @ts-ignore TS6133
function rosApplicationScalingRuleSchedulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApplicationScalingRule_SchedulesPropertyValidator(properties).assertSuccess();
    return {
      'TargetReplicas': ros.numberToRosTemplate(properties.targetReplicas),
      'AtTime': ros.stringToRosTemplate(properties.atTime),
    };
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
    readonly data: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
 * Determine whether the given properties match those of a `RosConfigMapProps`
 *
 * @param properties - the TypeScript properties of a `RosConfigMapProps`
 *
 * @returns the result of the validation.
 */
function RosConfigMapPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('data', ros.requiredValidator)(properties.data));
    errors.collect(ros.propertyValidator('data', ros.hashValidator(ros.validateAny))(properties.data));
    errors.collect(ros.propertyValidator('namespaceId', ros.requiredValidator)(properties.namespaceId));
    errors.collect(ros.propertyValidator('namespaceId', ros.validateString)(properties.namespaceId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosConfigMapProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::ConfigMap` resource
 *
 * @param properties - the TypeScript properties of a `RosConfigMapProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::ConfigMap` resource.
 */
// @ts-ignore TS6133
function rosConfigMapPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConfigMapPropsValidator(properties).assertSuccess();
    }
    return {
      'Data': ros.hashMapper(ros.objectToRosTemplate)(properties.data),
      'Name': ros.stringToRosTemplate(properties.name),
      'NamespaceId': ros.stringToRosTemplate(properties.namespaceId),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::ConfigMap`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConfigMap` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap
 */
export class RosConfigMap extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::ConfigMap";

    /**
     * @Attribute ConfigMapId: The ID of the config map.
     */
    public readonly attrConfigMapId: ros.IResolvable;

    /**
     * @Attribute NamespaceId: The ID of the namespace to which this config map instance belongs.
     */
    public readonly attrNamespaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property data: Configmap key value pairs of data, json format.The format is as follows:
     * {"k1":"v1", "k2":"v2"}
     * K means key, V represents value.For more information about configuration items, see management and use of configuration items.
     */
    public data: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property name: The name of the config map.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property namespaceId: The ID of the namespace to which this config map instance belongs.
     */
    public namespaceId: string | ros.IResolvable;

    /**
     * @Property description: Describe information, do not enter the space without more than 255 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConfigMapProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConfigMap.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfigMapId = this.getAtt('ConfigMapId');
        this.attrNamespaceId = this.getAtt('NamespaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.data = props.data;
        this.name = props.name;
        this.namespaceId = props.namespaceId;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            data: this.data,
            name: this.name,
            namespaceId: this.namespaceId,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConfigMapPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosIngressProps`
 *
 * @param properties - the TypeScript properties of a `RosIngressProps`
 *
 * @returns the result of the validation.
 */
function RosIngressPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('defaultRule', ros.requiredValidator)(properties.defaultRule));
    errors.collect(ros.propertyValidator('defaultRule', RosIngress_DefaultRulePropertyValidator)(properties.defaultRule));
    errors.collect(ros.propertyValidator('slbId', ros.requiredValidator)(properties.slbId));
    errors.collect(ros.propertyValidator('slbId', ros.validateString)(properties.slbId));
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    if(properties.listenerPort && (typeof properties.listenerPort) !== 'object') {
        errors.collect(ros.propertyValidator('listenerPort', ros.validateRange)({
            data: properties.listenerPort,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    if(properties.description && (typeof properties.description) !== 'object') {
        errors.collect(ros.propertyValidator('description', ros.validateAllowedPattern)({
          data: properties.description,
          reg: /^[a-z0-9]([a-z0-9.-]{0,61}[a-z0-9])?$/
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.certIds && (Array.isArray(properties.certIds) || (typeof properties.certIds) === 'string')) {
        errors.collect(ros.propertyValidator('certIds', ros.validateLength)({
            data: properties.certIds.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('certIds', ros.listValidator(ros.validateString))(properties.certIds));
    errors.collect(ros.propertyValidator('certId', ros.validateString)(properties.certId));
    errors.collect(ros.propertyValidator('loadBalanceType', ros.validateString)(properties.loadBalanceType));
    errors.collect(ros.propertyValidator('namespaceId', ros.requiredValidator)(properties.namespaceId));
    errors.collect(ros.propertyValidator('namespaceId', ros.validateString)(properties.namespaceId));
    if(properties.listenerProtocol && (typeof properties.listenerProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('listenerProtocol', ros.validateAllowedValues)({
          data: properties.listenerProtocol,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('listenerProtocol', ros.validateString)(properties.listenerProtocol));
    errors.collect(ros.propertyValidator('rules', ros.requiredValidator)(properties.rules));
    if(properties.rules && (Array.isArray(properties.rules) || (typeof properties.rules) === 'string')) {
        errors.collect(ros.propertyValidator('rules', ros.validateLength)({
            data: properties.rules.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('rules', ros.listValidator(RosIngress_RulesPropertyValidator))(properties.rules));
    return errors.wrap('supplied properties not correct for "RosIngressProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::Ingress` resource
 *
 * @param properties - the TypeScript properties of a `RosIngressProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::Ingress` resource.
 */
// @ts-ignore TS6133
function rosIngressPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIngressPropsValidator(properties).assertSuccess();
    }
    return {
      'DefaultRule': rosIngressDefaultRulePropertyToRosTemplate(properties.defaultRule),
      'Description': ros.stringToRosTemplate(properties.description),
      'ListenerPort': ros.numberToRosTemplate(properties.listenerPort),
      'NamespaceId': ros.stringToRosTemplate(properties.namespaceId),
      'Rules': ros.listMapper(rosIngressRulesPropertyToRosTemplate)(properties.rules),
      'SlbId': ros.stringToRosTemplate(properties.slbId),
      'CertId': ros.stringToRosTemplate(properties.certId),
      'CertIds': ros.listMapper(ros.stringToRosTemplate)(properties.certIds),
      'ListenerProtocol': ros.stringToRosTemplate(properties.listenerProtocol),
      'LoadBalanceType': ros.stringToRosTemplate(properties.loadBalanceType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::Ingress`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ingress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress
 */
export class RosIngress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::Ingress";

    /**
     * @Attribute IngressId: The ID of the routing rule.
     */
    public readonly attrIngressId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property defaultRule: The default forwarding rule. You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.
     */
    public defaultRule: RosIngress.DefaultRuleProperty | ros.IResolvable;

    /**
     * @Property description: The name of the routing rule.
     */
    public description: string | ros.IResolvable;

    /**
     * @Property listenerPort: The listener port of the SLB instance. You must specify a vacant port.
     */
    public listenerPort: number | ros.IResolvable;

    /**
     * @Property namespaceId: The ID of the namespace to which the application belongs. You can specify only one namespace ID each time you call this operation.
     */
    public namespaceId: string | ros.IResolvable;

    /**
     * @Property rules: The forwarding rules. You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
     */
    public rules: Array<RosIngress.RulesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property slbId: The Server Load Balancer (SLB) instance that is used by the routing rule.
     */
    public slbId: string | ros.IResolvable;

    /**
     * @Property certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance.
     * If LoadBalanceType is set to clb, specify this parameter to configure a certificate for the HTTP listener.
     */
    public certId: string | ros.IResolvable | undefined;

    /**
     * @Property certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance.
     */
    public certIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property listenerProtocol: The protocol that is used to forward requests.
     */
    public listenerProtocol: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalanceType: The type of the SLB instance based on the processing capabilities. The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule.
     */
    public loadBalanceType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIngressProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIngress.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIngressId = this.getAtt('IngressId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.defaultRule = props.defaultRule;
        this.description = props.description;
        this.listenerPort = props.listenerPort;
        this.namespaceId = props.namespaceId;
        this.rules = props.rules;
        this.slbId = props.slbId;
        this.certId = props.certId;
        this.certIds = props.certIds;
        this.listenerProtocol = props.listenerProtocol;
        this.loadBalanceType = props.loadBalanceType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            defaultRule: this.defaultRule,
            description: this.description,
            listenerPort: this.listenerPort,
            namespaceId: this.namespaceId,
            rules: this.rules,
            slbId: this.slbId,
            certId: this.certId,
            certIds: this.certIds,
            listenerProtocol: this.listenerProtocol,
            loadBalanceType: this.loadBalanceType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIngressPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosIngress {
    /**
     * @stability external
     */
    export interface DefaultRuleProperty {
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
/**
 * Determine whether the given properties match those of a `DefaultRuleProperty`
 *
 * @param properties - the TypeScript properties of a `DefaultRuleProperty`
 *
 * @returns the result of the validation.
 */
function RosIngress_DefaultRulePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.backendProtocol && (typeof properties.backendProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('backendProtocol', ros.validateAllowedValues)({
          data: properties.backendProtocol,
          allowedValues: ["http","https","grpc"],
        }));
    }
    errors.collect(ros.propertyValidator('backendProtocol', ros.validateString)(properties.backendProtocol));
    errors.collect(ros.propertyValidator('appId', ros.requiredValidator)(properties.appId));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    errors.collect(ros.propertyValidator('containerPort', ros.requiredValidator)(properties.containerPort));
    if(properties.containerPort && (typeof properties.containerPort) !== 'object') {
        errors.collect(ros.propertyValidator('containerPort', ros.validateRange)({
            data: properties.containerPort,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('containerPort', ros.validateNumber)(properties.containerPort));
    return errors.wrap('supplied properties not correct for "DefaultRuleProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::Ingress.DefaultRule` resource
 *
 * @param properties - the TypeScript properties of a `DefaultRuleProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::Ingress.DefaultRule` resource.
 */
// @ts-ignore TS6133
function rosIngressDefaultRulePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIngress_DefaultRulePropertyValidator(properties).assertSuccess();
    return {
      'BackendProtocol': ros.stringToRosTemplate(properties.backendProtocol),
      'AppId': ros.stringToRosTemplate(properties.appId),
      'ContainerPort': ros.numberToRosTemplate(properties.containerPort),
    };
}

export namespace RosIngress {
    /**
     * @stability external
     */
    export interface RulesProperty {
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
 * Determine whether the given properties match those of a `RulesProperty`
 *
 * @param properties - the TypeScript properties of a `RulesProperty`
 *
 * @returns the result of the validation.
 */
function RosIngress_RulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.requiredValidator)(properties.path));
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    if(properties.backendProtocol && (typeof properties.backendProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('backendProtocol', ros.validateAllowedValues)({
          data: properties.backendProtocol,
          allowedValues: ["http","https","grpc"],
        }));
    }
    errors.collect(ros.propertyValidator('backendProtocol', ros.validateString)(properties.backendProtocol));
    errors.collect(ros.propertyValidator('appId', ros.requiredValidator)(properties.appId));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    errors.collect(ros.propertyValidator('rewritePath', ros.validateString)(properties.rewritePath));
    errors.collect(ros.propertyValidator('containerPort', ros.requiredValidator)(properties.containerPort));
    if(properties.containerPort && (typeof properties.containerPort) !== 'object') {
        errors.collect(ros.propertyValidator('containerPort', ros.validateRange)({
            data: properties.containerPort,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('containerPort', ros.validateNumber)(properties.containerPort));
    errors.collect(ros.propertyValidator('domain', ros.requiredValidator)(properties.domain));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    return errors.wrap('supplied properties not correct for "RulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::Ingress.Rules` resource
 *
 * @param properties - the TypeScript properties of a `RulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::Ingress.Rules` resource.
 */
// @ts-ignore TS6133
function rosIngressRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIngress_RulesPropertyValidator(properties).assertSuccess();
    return {
      'Path': ros.stringToRosTemplate(properties.path),
      'BackendProtocol': ros.stringToRosTemplate(properties.backendProtocol),
      'AppId': ros.stringToRosTemplate(properties.appId),
      'RewritePath': ros.stringToRosTemplate(properties.rewritePath),
      'ContainerPort': ros.numberToRosTemplate(properties.containerPort),
      'Domain': ros.stringToRosTemplate(properties.domain),
    };
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
 * Determine whether the given properties match those of a `RosNamespaceProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('namespaceName', ros.requiredValidator)(properties.namespaceName));
    errors.collect(ros.propertyValidator('namespaceName', ros.validateString)(properties.namespaceName));
    errors.collect(ros.propertyValidator('namespaceId', ros.requiredValidator)(properties.namespaceId));
    errors.collect(ros.propertyValidator('namespaceId', ros.validateString)(properties.namespaceId));
    errors.collect(ros.propertyValidator('namespaceDescription', ros.validateString)(properties.namespaceDescription));
    return errors.wrap('supplied properties not correct for "RosNamespaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::Namespace` resource
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::Namespace` resource.
 */
// @ts-ignore TS6133
function rosNamespacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNamespacePropsValidator(properties).assertSuccess();
    }
    return {
      'NamespaceId': ros.stringToRosTemplate(properties.namespaceId),
      'NamespaceName': ros.stringToRosTemplate(properties.namespaceName),
      'NamespaceDescription': ros.stringToRosTemplate(properties.namespaceDescription),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::Namespace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace
 */
export class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::Namespace";

    /**
     * @Attribute NamespaceId: Namespace ID
     */
    public readonly attrNamespaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
     */
    public namespaceId: string | ros.IResolvable;

    /**
     * @Property namespaceName: Namespace name
     */
    public namespaceName: string | ros.IResolvable;

    /**
     * @Property namespaceDescription: Namespace description
     */
    public namespaceDescription: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNamespace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNamespaceId = this.getAtt('NamespaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.namespaceId = props.namespaceId;
        this.namespaceName = props.namespaceName;
        this.namespaceDescription = props.namespaceDescription;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            namespaceId: this.namespaceId,
            namespaceName: this.namespaceName,
            namespaceDescription: this.namespaceDescription,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNamespacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSecret`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-secret
 */
export interface RosSecretProps {

    /**
     * @Property namespaceId: The namespace ID where the Secret instance resides. If the namespace you are in is the default namespace, you just need to fill in the RegionId.
     */
    readonly namespaceId: string | ros.IResolvable;

    /**
     * @Property secretData: Secret key-value pair data, required.The format is as follows:
     * {"Data":"{"k1":"v1", "k2":"v2"}"}
     * k represents the key and v represents the value.
     */
    readonly secretData: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property secretName: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters.
     */
    readonly secretName: string | ros.IResolvable;

    /**
     * @Property secretType: The currently supported Secret instance type.The values are as follows:
     * kubernetes.io\/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment.
     */
    readonly secretType: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSecretProps`
 *
 * @param properties - the TypeScript properties of a `RosSecretProps`
 *
 * @returns the result of the validation.
 */
function RosSecretPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('secretName', ros.requiredValidator)(properties.secretName));
    if(properties.secretName && (typeof properties.secretName) !== 'object') {
        errors.collect(ros.propertyValidator('secretName', ros.validateAllowedPattern)({
          data: properties.secretName,
          reg: /^[a-zA-Z][a-zA-Z0-9_-]*$/
        }));
    }
    errors.collect(ros.propertyValidator('secretName', ros.validateString)(properties.secretName));
    errors.collect(ros.propertyValidator('secretType', ros.requiredValidator)(properties.secretType));
    if(properties.secretType && (typeof properties.secretType) !== 'object') {
        errors.collect(ros.propertyValidator('secretType', ros.validateAllowedValues)({
          data: properties.secretType,
          allowedValues: ["Opaque","kubernetes.io/dockerconfigjson","kubernetes.io/tls"],
        }));
    }
    errors.collect(ros.propertyValidator('secretType', ros.validateString)(properties.secretType));
    errors.collect(ros.propertyValidator('namespaceId', ros.requiredValidator)(properties.namespaceId));
    errors.collect(ros.propertyValidator('namespaceId', ros.validateString)(properties.namespaceId));
    errors.collect(ros.propertyValidator('secretData', ros.requiredValidator)(properties.secretData));
    errors.collect(ros.propertyValidator('secretData', ros.hashValidator(ros.validateAny))(properties.secretData));
    return errors.wrap('supplied properties not correct for "RosSecretProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::Secret` resource
 *
 * @param properties - the TypeScript properties of a `RosSecretProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::Secret` resource.
 */
// @ts-ignore TS6133
function rosSecretPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecretPropsValidator(properties).assertSuccess();
    }
    return {
      'NamespaceId': ros.stringToRosTemplate(properties.namespaceId),
      'SecretData': ros.hashMapper(ros.objectToRosTemplate)(properties.secretData),
      'SecretName': ros.stringToRosTemplate(properties.secretName),
      'SecretType': ros.stringToRosTemplate(properties.secretType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::Secret`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Secret` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-secret
 */
export class RosSecret extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::Secret";

    /**
     * @Attribute NamespaceId: The namespace ID that the Secret instance belongs to.
     */
    public readonly attrNamespaceId: ros.IResolvable;

    /**
     * @Attribute SecretId: The ID of the secret.
     */
    public readonly attrSecretId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property namespaceId: The namespace ID where the Secret instance resides. If the namespace you are in is the default namespace, you just need to fill in the RegionId.
     */
    public namespaceId: string | ros.IResolvable;

    /**
     * @Property secretData: Secret key-value pair data, required.The format is as follows:
     * {"Data":"{"k1":"v1", "k2":"v2"}"}
     * k represents the key and v represents the value.
     */
    public secretData: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property secretName: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters.
     */
    public secretName: string | ros.IResolvable;

    /**
     * @Property secretType: The currently supported Secret instance type.The values are as follows:
     * kubernetes.io\/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment.
     */
    public secretType: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecret.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNamespaceId = this.getAtt('NamespaceId');
        this.attrSecretId = this.getAtt('SecretId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.namespaceId = props.namespaceId;
        this.secretData = props.secretData;
        this.secretName = props.secretName;
        this.secretType = props.secretType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            namespaceId: this.namespaceId,
            secretData: this.secretData,
            secretName: this.secretName,
            secretType: this.secretType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecretPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosSlbBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosSlbBindingProps`
 *
 * @returns the result of the validation.
 */
function RosSlbBindingPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('internetSlbId', ros.validateString)(properties.internetSlbId));
    errors.collect(ros.propertyValidator('appId', ros.requiredValidator)(properties.appId));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    errors.collect(ros.propertyValidator('intranet', ros.validateString)(properties.intranet));
    errors.collect(ros.propertyValidator('intranetSlbId', ros.validateString)(properties.intranetSlbId));
    errors.collect(ros.propertyValidator('internet', ros.validateString)(properties.internet));
    return errors.wrap('supplied properties not correct for "RosSlbBindingProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAE::SlbBinding` resource
 *
 * @param properties - the TypeScript properties of a `RosSlbBindingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAE::SlbBinding` resource.
 */
// @ts-ignore TS6133
function rosSlbBindingPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSlbBindingPropsValidator(properties).assertSuccess();
    }
    return {
      'AppId': ros.stringToRosTemplate(properties.appId),
      'Internet': ros.stringToRosTemplate(properties.internet),
      'InternetSlbId': ros.stringToRosTemplate(properties.internetSlbId),
      'Intranet': ros.stringToRosTemplate(properties.intranet),
      'IntranetSlbId': ros.stringToRosTemplate(properties.intranetSlbId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::SlbBinding`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SlbBinding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding
 */
export class RosSlbBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::SlbBinding";

    /**
     * @Attribute AppId: Successful application deployment target ID
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * @Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    public readonly attrChangeOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appId: Successful application deployment target ID
     */
    public appId: string | ros.IResolvable;

    /**
     * @Property internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    public internet: string | ros.IResolvable | undefined;

    /**
     * @Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    public internetSlbId: string | ros.IResolvable | undefined;

    /**
     * @Property intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    public intranet: string | ros.IResolvable | undefined;

    /**
     * @Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    public intranetSlbId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSlbBindingProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSlbBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrChangeOrderId = this.getAtt('ChangeOrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appId = props.appId;
        this.internet = props.internet;
        this.internetSlbId = props.internetSlbId;
        this.intranet = props.intranet;
        this.intranetSlbId = props.intranetSlbId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appId: this.appId,
            internet: this.internet,
            internetSlbId: this.internetSlbId,
            intranet: this.intranet,
            intranetSlbId: this.intranetSlbId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSlbBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
