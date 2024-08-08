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
     * @Property appDescription: Application description. No more than 1024 characters.
     */
    readonly appDescription?: string | ros.IResolvable;

    /**
     * @Property command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
     */
    readonly command?: string | ros.IResolvable;

    /**
     * @Property commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
     */
    readonly commandArgs?: string | ros.IResolvable;

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
     * @Property envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
     */
    readonly envs?: string | ros.IResolvable;

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
     * @Property liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
     */
    readonly liveness?: string | ros.IResolvable;

    /**
     * @Property mountDesc: Mount Description
     */
    readonly mountDesc?: string | ros.IResolvable;

    /**
     * @Property mountHost: nas mount point in the application of vpc.
     */
    readonly mountHost?: string | ros.IResolvable;

    /**
     * @Property nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
     */
    readonly nasId?: string | ros.IResolvable;

    /**
     * @Property packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
     */
    readonly packageUrl?: string | ros.IResolvable;

    /**
     * @Property packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
     */
    readonly packageVersion?: string | ros.IResolvable;

    /**
     * @Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "\/ etc \/ group"}}
     */
    readonly postStart?: string | ros.IResolvable;

    /**
     * @Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "\/ etc \/ group"}}
     */
    readonly preStop?: string | ros.IResolvable;

    /**
     * @Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
     */
    readonly readiness?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property slsConfigs: Log collection configuration file
     */
    readonly slsConfigs?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosApplication.TagsProperty[];

    /**
     * @Property timezone: Application time zone. Default Asia\/Shanghai.
     */
    readonly timezone?: string | ros.IResolvable;

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
    if(properties.appDescription && (Array.isArray(properties.appDescription) || (typeof properties.appDescription) === 'string')) {
        errors.collect(ros.propertyValidator('appDescription', ros.validateLength)({
            data: properties.appDescription.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('appDescription', ros.validateString)(properties.appDescription));
    errors.collect(ros.propertyValidator('mountDesc', ros.validateString)(properties.mountDesc));
    errors.collect(ros.propertyValidator('nasId', ros.validateString)(properties.nasId));
    errors.collect(ros.propertyValidator('warStartOptions', ros.validateString)(properties.warStartOptions));
    errors.collect(ros.propertyValidator('liveness', ros.validateString)(properties.liveness));
    errors.collect(ros.propertyValidator('memory', ros.requiredValidator)(properties.memory));
    if(properties.memory && (typeof properties.memory) !== 'object') {
        errors.collect(ros.propertyValidator('memory', ros.validateRange)({
            data: properties.memory,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('memory', ros.validateNumber)(properties.memory));
    errors.collect(ros.propertyValidator('webContainer', ros.validateString)(properties.webContainer));
    errors.collect(ros.propertyValidator('slsConfigs', ros.validateString)(properties.slsConfigs));
    errors.collect(ros.propertyValidator('cpu', ros.requiredValidator)(properties.cpu));
    if(properties.cpu && (typeof properties.cpu) !== 'object') {
        errors.collect(ros.propertyValidator('cpu', ros.validateRange)({
            data: properties.cpu,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('cpu', ros.validateNumber)(properties.cpu));
    errors.collect(ros.propertyValidator('deploy', ros.validateBoolean)(properties.deploy));
    errors.collect(ros.propertyValidator('packageVersion', ros.validateString)(properties.packageVersion));
    errors.collect(ros.propertyValidator('appName', ros.requiredValidator)(properties.appName));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    errors.collect(ros.propertyValidator('jdk', ros.validateString)(properties.jdk));
    errors.collect(ros.propertyValidator('jarStartArgs', ros.validateString)(properties.jarStartArgs));
    errors.collect(ros.propertyValidator('preStop', ros.validateString)(properties.preStop));
    errors.collect(ros.propertyValidator('readiness', ros.validateString)(properties.readiness));
    errors.collect(ros.propertyValidator('packageType', ros.requiredValidator)(properties.packageType));
    errors.collect(ros.propertyValidator('packageType', ros.validateString)(properties.packageType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosApplication_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('commandArgs', ros.validateString)(properties.commandArgs));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('envs', ros.validateString)(properties.envs));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('imageUrl', ros.validateString)(properties.imageUrl));
    errors.collect(ros.propertyValidator('postStart', ros.validateString)(properties.postStart));
    errors.collect(ros.propertyValidator('jarStartOptions', ros.validateString)(properties.jarStartOptions));
    errors.collect(ros.propertyValidator('mountHost', ros.validateString)(properties.mountHost));
    errors.collect(ros.propertyValidator('replicas', ros.requiredValidator)(properties.replicas));
    errors.collect(ros.propertyValidator('replicas', ros.validateNumber)(properties.replicas));
    errors.collect(ros.propertyValidator('customHostAlias', ros.validateString)(properties.customHostAlias));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('command', ros.validateString)(properties.command));
    errors.collect(ros.propertyValidator('edasContainerVersion', ros.validateString)(properties.edasContainerVersion));
    errors.collect(ros.propertyValidator('packageUrl', ros.validateString)(properties.packageUrl));
    errors.collect(ros.propertyValidator('namespaceId', ros.requiredValidator)(properties.namespaceId));
    errors.collect(ros.propertyValidator('namespaceId', ros.validateString)(properties.namespaceId));
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
      AppName: ros.stringToRosTemplate(properties.appName),
      Cpu: ros.numberToRosTemplate(properties.cpu),
      Memory: ros.numberToRosTemplate(properties.memory),
      NamespaceId: ros.stringToRosTemplate(properties.namespaceId),
      PackageType: ros.stringToRosTemplate(properties.packageType),
      Replicas: ros.numberToRosTemplate(properties.replicas),
      AppDescription: ros.stringToRosTemplate(properties.appDescription),
      Command: ros.stringToRosTemplate(properties.command),
      CommandArgs: ros.stringToRosTemplate(properties.commandArgs),
      CustomHostAlias: ros.stringToRosTemplate(properties.customHostAlias),
      Deploy: ros.booleanToRosTemplate(properties.deploy),
      EdasContainerVersion: ros.stringToRosTemplate(properties.edasContainerVersion),
      Envs: ros.stringToRosTemplate(properties.envs),
      ImageUrl: ros.stringToRosTemplate(properties.imageUrl),
      JarStartArgs: ros.stringToRosTemplate(properties.jarStartArgs),
      JarStartOptions: ros.stringToRosTemplate(properties.jarStartOptions),
      Jdk: ros.stringToRosTemplate(properties.jdk),
      Liveness: ros.stringToRosTemplate(properties.liveness),
      MountDesc: ros.stringToRosTemplate(properties.mountDesc),
      MountHost: ros.stringToRosTemplate(properties.mountHost),
      NasId: ros.stringToRosTemplate(properties.nasId),
      PackageUrl: ros.stringToRosTemplate(properties.packageUrl),
      PackageVersion: ros.stringToRosTemplate(properties.packageVersion),
      PostStart: ros.stringToRosTemplate(properties.postStart),
      PreStop: ros.stringToRosTemplate(properties.preStop),
      Readiness: ros.stringToRosTemplate(properties.readiness),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SlsConfigs: ros.stringToRosTemplate(properties.slsConfigs),
      Tags: ros.listMapper(rosApplicationTagsPropertyToRosTemplate)(properties.tags),
      Timezone: ros.stringToRosTemplate(properties.timezone),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      WarStartOptions: ros.stringToRosTemplate(properties.warStartOptions),
      WebContainer: ros.stringToRosTemplate(properties.webContainer),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::Application`, which is used to create an application in Serverless App Engine (SAE).
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
     * @Property cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
     */
    public cpu: number | ros.IResolvable;

    /**
     * @Property memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
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
     * @Property appDescription: Application description. No more than 1024 characters.
     */
    public appDescription: string | ros.IResolvable | undefined;

    /**
     * @Property command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
     */
    public command: string | ros.IResolvable | undefined;

    /**
     * @Property commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
     */
    public commandArgs: string | ros.IResolvable | undefined;

    /**
     * @Property customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
     */
    public customHostAlias: string | ros.IResolvable | undefined;

    /**
     * @Property deploy: Whether deployed immediately take effect, the default is false.
     */
    public deploy: boolean | ros.IResolvable | undefined;

    /**
     * @Property edasContainerVersion: EDAS pandora runtime environment used by the application.
     */
    public edasContainerVersion: string | ros.IResolvable | undefined;

    /**
     * @Property envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
     */
    public envs: string | ros.IResolvable | undefined;

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
     * @Property liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
     */
    public liveness: string | ros.IResolvable | undefined;

    /**
     * @Property mountDesc: Mount Description
     */
    public mountDesc: string | ros.IResolvable | undefined;

    /**
     * @Property mountHost: nas mount point in the application of vpc.
     */
    public mountHost: string | ros.IResolvable | undefined;

    /**
     * @Property nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
     */
    public nasId: string | ros.IResolvable | undefined;

    /**
     * @Property packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
     */
    public packageUrl: string | ros.IResolvable | undefined;

    /**
     * @Property packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
     */
    public packageVersion: string | ros.IResolvable | undefined;

    /**
     * @Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "\/ etc \/ group"}}
     */
    public postStart: string | ros.IResolvable | undefined;

    /**
     * @Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "\/ etc \/ group"}}
     */
    public preStop: string | ros.IResolvable | undefined;

    /**
     * @Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
     */
    public readiness: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Security group ID.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property slsConfigs: Log collection configuration file
     */
    public slsConfigs: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosApplication.TagsProperty[] | undefined;

    /**
     * @Property timezone: Application time zone. Default Asia\/Shanghai.
     */
    public timezone: string | ros.IResolvable | undefined;

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
        this.appDescription = props.appDescription;
        this.command = props.command;
        this.commandArgs = props.commandArgs;
        this.customHostAlias = props.customHostAlias;
        this.deploy = props.deploy;
        this.edasContainerVersion = props.edasContainerVersion;
        this.envs = props.envs;
        this.imageUrl = props.imageUrl;
        this.jarStartArgs = props.jarStartArgs;
        this.jarStartOptions = props.jarStartOptions;
        this.jdk = props.jdk;
        this.liveness = props.liveness;
        this.mountDesc = props.mountDesc;
        this.mountHost = props.mountHost;
        this.nasId = props.nasId;
        this.packageUrl = props.packageUrl;
        this.packageVersion = props.packageVersion;
        this.postStart = props.postStart;
        this.preStop = props.preStop;
        this.readiness = props.readiness;
        this.securityGroupId = props.securityGroupId;
        this.slsConfigs = props.slsConfigs;
        this.tags = props.tags;
        this.timezone = props.timezone;
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
            appDescription: this.appDescription,
            command: this.command,
            commandArgs: this.commandArgs,
            customHostAlias: this.customHostAlias,
            deploy: this.deploy,
            edasContainerVersion: this.edasContainerVersion,
            envs: this.envs,
            imageUrl: this.imageUrl,
            jarStartArgs: this.jarStartArgs,
            jarStartOptions: this.jarStartOptions,
            jdk: this.jdk,
            liveness: this.liveness,
            mountDesc: this.mountDesc,
            mountHost: this.mountHost,
            nasId: this.nasId,
            packageUrl: this.packageUrl,
            packageVersion: this.packageVersion,
            postStart: this.postStart,
            preStop: this.preStop,
            readiness: this.readiness,
            securityGroupId: this.securityGroupId,
            slsConfigs: this.slsConfigs,
            tags: this.tags,
            timezone: this.timezone,
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
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
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
      DefaultRule: rosIngressDefaultRulePropertyToRosTemplate(properties.defaultRule),
      Description: ros.stringToRosTemplate(properties.description),
      ListenerPort: ros.numberToRosTemplate(properties.listenerPort),
      NamespaceId: ros.stringToRosTemplate(properties.namespaceId),
      Rules: ros.listMapper(rosIngressRulesPropertyToRosTemplate)(properties.rules),
      SlbId: ros.stringToRosTemplate(properties.slbId),
      CertId: ros.stringToRosTemplate(properties.certId),
      CertIds: ros.listMapper(ros.stringToRosTemplate)(properties.certIds),
      ListenerProtocol: ros.stringToRosTemplate(properties.listenerProtocol),
      LoadBalanceType: ros.stringToRosTemplate(properties.loadBalanceType),
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
      BackendProtocol: ros.stringToRosTemplate(properties.backendProtocol),
      AppId: ros.stringToRosTemplate(properties.appId),
      ContainerPort: ros.numberToRosTemplate(properties.containerPort),
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
      Path: ros.stringToRosTemplate(properties.path),
      BackendProtocol: ros.stringToRosTemplate(properties.backendProtocol),
      AppId: ros.stringToRosTemplate(properties.appId),
      RewritePath: ros.stringToRosTemplate(properties.rewritePath),
      ContainerPort: ros.numberToRosTemplate(properties.containerPort),
      Domain: ros.stringToRosTemplate(properties.domain),
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
      NamespaceId: ros.stringToRosTemplate(properties.namespaceId),
      NamespaceName: ros.stringToRosTemplate(properties.namespaceName),
      NamespaceDescription: ros.stringToRosTemplate(properties.namespaceDescription),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::Namespace`, which is used to create a Namespace.
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
      AppId: ros.stringToRosTemplate(properties.appId),
      Internet: ros.stringToRosTemplate(properties.internet),
      InternetSlbId: ros.stringToRosTemplate(properties.internetSlbId),
      Intranet: ros.stringToRosTemplate(properties.intranet),
      IntranetSlbId: ros.stringToRosTemplate(properties.intranetSlbId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::SlbBinding`, which is used to bind an SLB instance to an application.
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
