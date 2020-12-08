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
 * A ROS template type:  `ALIYUN::SAE::Application`
 */
export declare class RosApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::Application";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AppId: Creating successful application ID.
     */
    readonly attrAppId: any;
    /**
     * @Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    readonly attrChangeOrderId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
     */
    appName: string;
    /**
     * @Property cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
     */
    cpu: number;
    /**
     * @Property memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
     */
    memory: number;
    /**
     * @Property namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
     * Namespace can interface to obtain from DescribeNamespaceList.
     */
    namespaceId: string;
    /**
     * @Property packageType: Application package type. Support FatJar, War, Image.
     */
    packageType: string;
    /**
     * @Property replicas: The initial number of instances.
     */
    replicas: number;
    /**
     * @Property appDescription: Application description. No more than 1024 characters.
     */
    appDescription: string | undefined;
    /**
     * @Property command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
     */
    command: string | undefined;
    /**
     * @Property commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
     */
    commandArgs: string | undefined;
    /**
     * @Property customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
     */
    customHostAlias: string | undefined;
    /**
     * @Property deploy: Whether deployed immediately take effect, the default is false.
     */
    deploy: boolean | ros.IResolvable | undefined;
    /**
     * @Property edasContainerVersion: EDAS pandora runtime environment used by the application.
     */
    edasContainerVersion: string | undefined;
    /**
     * @Property envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
     */
    envs: string | undefined;
    /**
     * @Property imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
     */
    imageUrl: string | undefined;
    /**
     * @Property jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    jarStartArgs: string | undefined;
    /**
     * @Property jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    jarStartOptions: string | undefined;
    /**
     * @Property jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
     */
    jdk: string | undefined;
    /**
     * @Property liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
     */
    liveness: string | undefined;
    /**
     * @Property mountDesc: Mount Description
     */
    mountDesc: string | undefined;
    /**
     * @Property mountHost: nas mount point in the application of vpc.
     */
    mountHost: string | undefined;
    /**
     * @Property nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
     */
    nasId: string | undefined;
    /**
     * @Property packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
     */
    packageUrl: string | undefined;
    /**
     * @Property packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
     */
    packageVersion: string | undefined;
    /**
     * @Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}
     */
    postStart: string | undefined;
    /**
     * @Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}
     */
    preStop: string | undefined;
    /**
     * @Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
     */
    readiness: string | undefined;
    /**
     * @Property securityGroupId: Security group ID.
     */
    securityGroupId: string | undefined;
    /**
     * @Property slsConfigs: Log collection configuration file
     */
    slsConfigs: string | undefined;
    /**
     * @Property timezone: Application time zone. Default Asia/Shanghai.
     */
    timezone: string | undefined;
    /**
     * @Property vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
     */
    vSwitchId: string | undefined;
    /**
     * @Property warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
     */
    warStartOptions: string | undefined;
    /**
     * @Property webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
     */
    webContainer: string | undefined;
    /**
     * Create a new `ALIYUN::SAE::Application`.
     *
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
 * A ROS template type:  `ALIYUN::SAE::Namespace`
 */
export declare class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::Namespace";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute NamespaceId: Namespace ID
     */
    readonly attrNamespaceId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
     */
    namespaceId: string;
    /**
     * @Property namespaceName: Namespace name
     */
    namespaceName: string;
    /**
     * @Property namespaceDescription: Namespace description
     */
    namespaceDescription: string | undefined;
    /**
     * Create a new `ALIYUN::SAE::Namespace`.
     *
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
 * A ROS template type:  `ALIYUN::SAE::SlbBinding`
 */
export declare class RosSlbBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAE::SlbBinding";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AppId: Successful application deployment target ID
     */
    readonly attrAppId: any;
    /**
     * @Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    readonly attrChangeOrderId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appId: Successful application deployment target ID
     */
    appId: string;
    /**
     * @Property internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    internet: string | undefined;
    /**
     * @Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    internetSlbId: string | undefined;
    /**
     * @Property intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    intranet: string | undefined;
    /**
     * @Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    intranetSlbId: string | undefined;
    /**
     * Create a new `ALIYUN::SAE::SlbBinding`.
     *
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
