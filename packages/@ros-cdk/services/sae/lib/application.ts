import * as ros from '@ros-cdk/core';
import { RosApplication } from './sae.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApplication as ApplicationProperty };

/**
 * Properties for defining a `ALIYUN::SAE::Application`
 */
export interface ApplicationProps {

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
 * A ROS resource type:  `ALIYUN::SAE::Application`
 */
export class Application extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute AppId: Creating successful application ID.
     */
    public readonly attrAppId: any;

    /**
     * @Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    public readonly attrChangeOrderId: any;

    /**
     * Create a new `ALIYUN::SAE::Application`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosApplication = new RosApplication(this, id,  {
            timezone: props.timezone,
            appDescription: props.appDescription,
            mountDesc: props.mountDesc,
            nasId: props.nasId,
            warStartOptions: props.warStartOptions,
            liveness: props.liveness,
            memory: props.memory,
            webContainer: props.webContainer,
            slsConfigs: props.slsConfigs,
            cpu: props.cpu,
            deploy: props.deploy,
            packageVersion: props.packageVersion,
            appName: props.appName,
            jdk: props.jdk,
            jarStartArgs: props.jarStartArgs,
            preStop: props.preStop,
            readiness: props.readiness,
            packageType: props.packageType,
            commandArgs: props.commandArgs,
            securityGroupId: props.securityGroupId,
            envs: props.envs,
            vSwitchId: props.vSwitchId,
            imageUrl: props.imageUrl,
            postStart: props.postStart,
            jarStartOptions: props.jarStartOptions,
            mountHost: props.mountHost,
            replicas: props.replicas,
            customHostAlias: props.customHostAlias,
            vpcId: props.vpcId,
            command: props.command,
            edasContainerVersion: props.edasContainerVersion,
            packageUrl: props.packageUrl,
            namespaceId: props.namespaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApplication;
        this.attrAppId = rosApplication.attrAppId;
        this.attrChangeOrderId = rosApplication.attrChangeOrderId;
    }
}
