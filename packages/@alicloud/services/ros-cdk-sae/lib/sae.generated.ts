// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::SAE::Application`
 */
export interface RosApplicationProps {

    /**
     * @Property appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
     */
    readonly appName: string;

    /**
     * @Property cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
     */
    readonly cpu: number;

    /**
     * @Property memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
     */
    readonly memory: number;

    /**
     * @Property namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
     * Namespace can interface to obtain from DescribeNamespaceList.
     */
    readonly namespaceId: string;

    /**
     * @Property packageType: Application package type. Support FatJar, War, Image.
     */
    readonly packageType: string;

    /**
     * @Property replicas: The initial number of instances.
     */
    readonly replicas: number;

    /**
     * @Property appDescription: Application description. No more than 1024 characters.
     */
    readonly appDescription?: string;

    /**
     * @Property command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
     */
    readonly command?: string;

    /**
     * @Property commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
     */
    readonly commandArgs?: string;

    /**
     * @Property customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
     */
    readonly customHostAlias?: string;

    /**
     * @Property deploy: Whether deployed immediately take effect, the default is false.
     */
    readonly deploy?: boolean | ros.IResolvable;

    /**
     * @Property edasContainerVersion: EDAS pandora runtime environment used by the application.
     */
    readonly edasContainerVersion?: string;

    /**
     * @Property envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
     */
    readonly envs?: string;

    /**
     * @Property imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
     */
    readonly imageUrl?: string;

    /**
     * @Property jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    readonly jarStartArgs?: string;

    /**
     * @Property jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    readonly jarStartOptions?: string;

    /**
     * @Property jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
     */
    readonly jdk?: string;

    /**
     * @Property liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
     */
    readonly liveness?: string;

    /**
     * @Property mountDesc: Mount Description
     */
    readonly mountDesc?: string;

    /**
     * @Property mountHost: nas mount point in the application of vpc.
     */
    readonly mountHost?: string;

    /**
     * @Property nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
     */
    readonly nasId?: string;

    /**
     * @Property packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
     */
    readonly packageUrl?: string;

    /**
     * @Property packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
     */
    readonly packageVersion?: string;

    /**
     * @Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}
     */
    readonly postStart?: string;

    /**
     * @Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}
     */
    readonly preStop?: string;

    /**
     * @Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
     */
    readonly readiness?: string;

    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId?: string;

    /**
     * @Property slsConfigs: Log collection configuration file
     */
    readonly slsConfigs?: string;

    /**
     * @Property timezone: Application time zone. Default Asia/Shanghai.
     */
    readonly timezone?: string;

    /**
     * @Property vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
     */
    readonly vSwitchId?: string;

    /**
     * @Property warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
     */
    readonly warStartOptions?: string;

    /**
     * @Property webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
     */
    readonly webContainer?: string;
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
      Timezone: ros.stringToRosTemplate(properties.timezone),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      WarStartOptions: ros.stringToRosTemplate(properties.warStartOptions),
      WebContainer: ros.stringToRosTemplate(properties.webContainer),
    };
}

/**
 * A ROS template type:  `ALIYUN::SAE::Application`
 */
export class RosApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::Application";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AppId: Creating successful application ID.
     */
    public readonly attrAppId: any;

    /**
     * @Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    public readonly attrChangeOrderId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
     */
    public appName: string;

    /**
     * @Property cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
     */
    public cpu: number;

    /**
     * @Property memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
     */
    public memory: number;

    /**
     * @Property namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
     * Namespace can interface to obtain from DescribeNamespaceList.
     */
    public namespaceId: string;

    /**
     * @Property packageType: Application package type. Support FatJar, War, Image.
     */
    public packageType: string;

    /**
     * @Property replicas: The initial number of instances.
     */
    public replicas: number;

    /**
     * @Property appDescription: Application description. No more than 1024 characters.
     */
    public appDescription: string | undefined;

    /**
     * @Property command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
     */
    public command: string | undefined;

    /**
     * @Property commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
     */
    public commandArgs: string | undefined;

    /**
     * @Property customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
     */
    public customHostAlias: string | undefined;

    /**
     * @Property deploy: Whether deployed immediately take effect, the default is false.
     */
    public deploy: boolean | ros.IResolvable | undefined;

    /**
     * @Property edasContainerVersion: EDAS pandora runtime environment used by the application.
     */
    public edasContainerVersion: string | undefined;

    /**
     * @Property envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
     */
    public envs: string | undefined;

    /**
     * @Property imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
     */
    public imageUrl: string | undefined;

    /**
     * @Property jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    public jarStartArgs: string | undefined;

    /**
     * @Property jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    public jarStartOptions: string | undefined;

    /**
     * @Property jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
     */
    public jdk: string | undefined;

    /**
     * @Property liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
     */
    public liveness: string | undefined;

    /**
     * @Property mountDesc: Mount Description
     */
    public mountDesc: string | undefined;

    /**
     * @Property mountHost: nas mount point in the application of vpc.
     */
    public mountHost: string | undefined;

    /**
     * @Property nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
     */
    public nasId: string | undefined;

    /**
     * @Property packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
     */
    public packageUrl: string | undefined;

    /**
     * @Property packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
     */
    public packageVersion: string | undefined;

    /**
     * @Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}
     */
    public postStart: string | undefined;

    /**
     * @Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}
     */
    public preStop: string | undefined;

    /**
     * @Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
     */
    public readiness: string | undefined;

    /**
     * @Property securityGroupId: Security group ID.
     */
    public securityGroupId: string | undefined;

    /**
     * @Property slsConfigs: Log collection configuration file
     */
    public slsConfigs: string | undefined;

    /**
     * @Property timezone: Application time zone. Default Asia/Shanghai.
     */
    public timezone: string | undefined;

    /**
     * @Property vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
     */
    public vSwitchId: string | undefined;

    /**
     * @Property warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
     */
    public warStartOptions: string | undefined;

    /**
     * @Property webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
     */
    public webContainer: string | undefined;

    /**
     * Create a new `ALIYUN::SAE::Application`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApplication.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = ros.Token.asString(this.getAtt('AppId'));
        this.attrChangeOrderId = ros.Token.asString(this.getAtt('ChangeOrderId'));

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

/**
 * Properties for defining a `ALIYUN::SAE::Namespace`
 */
export interface RosNamespaceProps {

    /**
     * @Property namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
     */
    readonly namespaceId: string;

    /**
     * @Property namespaceName: Namespace name
     */
    readonly namespaceName: string;

    /**
     * @Property namespaceDescription: Namespace description
     */
    readonly namespaceDescription?: string;
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
 * A ROS template type:  `ALIYUN::SAE::Namespace`
 */
export class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::Namespace";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute NamespaceId: Namespace ID
     */
    public readonly attrNamespaceId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
     */
    public namespaceId: string;

    /**
     * @Property namespaceName: Namespace name
     */
    public namespaceName: string;

    /**
     * @Property namespaceDescription: Namespace description
     */
    public namespaceDescription: string | undefined;

    /**
     * Create a new `ALIYUN::SAE::Namespace`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNamespace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNamespaceId = ros.Token.asString(this.getAtt('NamespaceId'));

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
 * Properties for defining a `ALIYUN::SAE::SlbBinding`
 */
export interface RosSlbBindingProps {

    /**
     * @Property appId: Successful application deployment target ID
     */
    readonly appId: string;

    /**
     * @Property internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    readonly internet?: string;

    /**
     * @Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    readonly internetSlbId?: string;

    /**
     * @Property intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    readonly intranet?: string;

    /**
     * @Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    readonly intranetSlbId?: string;
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
 * A ROS template type:  `ALIYUN::SAE::SlbBinding`
 */
export class RosSlbBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::SlbBinding";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AppId: Successful application deployment target ID
     */
    public readonly attrAppId: any;

    /**
     * @Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    public readonly attrChangeOrderId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appId: Successful application deployment target ID
     */
    public appId: string;

    /**
     * @Property internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    public internet: string | undefined;

    /**
     * @Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    public internetSlbId: string | undefined;

    /**
     * @Property intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    public intranet: string | undefined;

    /**
     * @Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    public intranetSlbId: string | undefined;

    /**
     * Create a new `ALIYUN::SAE::SlbBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSlbBindingProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSlbBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = ros.Token.asString(this.getAtt('AppId'));
        this.attrChangeOrderId = ros.Token.asString(this.getAtt('ChangeOrderId'));

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
