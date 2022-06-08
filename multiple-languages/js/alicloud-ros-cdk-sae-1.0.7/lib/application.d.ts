import * as ros from '@alicloud/ros-cdk-core';
import { RosApplication } from './sae.generated';
export { RosApplication as ApplicationProperty };
/**
 * Properties for defining a `ALIYUN::SAE::Application`
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
     * Property appDescription: Application description. No more than 1024 characters.
     */
    readonly appDescription?: string | ros.IResolvable;
    /**
     * Property command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
     */
    readonly command?: string | ros.IResolvable;
    /**
     * Property commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
     */
    readonly commandArgs?: string | ros.IResolvable;
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
     * Property envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
     */
    readonly envs?: string | ros.IResolvable;
    /**
     * Property imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
     */
    readonly imageUrl?: string | ros.IResolvable;
    /**
     * Property jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    readonly jarStartArgs?: string | ros.IResolvable;
    /**
     * Property jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    readonly jarStartOptions?: string | ros.IResolvable;
    /**
     * Property jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
     */
    readonly jdk?: string | ros.IResolvable;
    /**
     * Property liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
     */
    readonly liveness?: string | ros.IResolvable;
    /**
     * Property mountDesc: Mount Description
     */
    readonly mountDesc?: string | ros.IResolvable;
    /**
     * Property mountHost: nas mount point in the application of vpc.
     */
    readonly mountHost?: string | ros.IResolvable;
    /**
     * Property nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
     */
    readonly nasId?: string | ros.IResolvable;
    /**
     * Property packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
     */
    readonly packageUrl?: string | ros.IResolvable;
    /**
     * Property packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
     */
    readonly packageVersion?: string | ros.IResolvable;
    /**
     * Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}
     */
    readonly postStart?: string | ros.IResolvable;
    /**
     * Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}
     */
    readonly preStop?: string | ros.IResolvable;
    /**
     * Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
     */
    readonly readiness?: string | ros.IResolvable;
    /**
     * Property securityGroupId: Security group ID.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * Property slsConfigs: Log collection configuration file
     */
    readonly slsConfigs?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosApplication.TagsProperty[];
    /**
     * Property timezone: Application time zone. Default Asia/Shanghai.
     */
    readonly timezone?: string | ros.IResolvable;
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
 * A ROS resource type:  `ALIYUN::SAE::Application`
 */
export declare class Application extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AppId: Creating successful application ID.
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    readonly attrChangeOrderId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAE::Application`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=application.d.ts.map