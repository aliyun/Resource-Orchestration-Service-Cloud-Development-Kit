import * as ros from '@alicloud/ros-cdk-core';
import { RosK8sApplication } from './edas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosK8sApplication as K8sApplicationProperty };

/**
 * Properties for defining a `K8sApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sapplication
 */
export interface K8sApplicationProps {

    /**
     * Property appName: The name of the application. The name must start with a letter and can contain digits,
     * letters, and hyphens (-). It can be up to 36 characters in length.
     */
    readonly appName: string | ros.IResolvable;

    /**
     * Property clusterId: The cluster ID. You can query the cluster ID by calling the ListCluster operation.
     * For more information, see ListCluster.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * Property applicationDescription: The description of the application.
     */
    readonly applicationDescription?: string | ros.IResolvable;

    /**
     * Property command: The command that is specified. If it is specified, it replaces the startup command in the image when the image is started.
     */
    readonly command?: string | ros.IResolvable;

    /**
     * Property commandArgs: The collection of commands. For example, [{"argument":"-c"},{"argument":"test"}], where -c and test are two parameters that can be set.
     */
    readonly commandArgs?: Array<RosK8sApplication.CommandArgsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes. The value true indicates yes, whereas other values indicate no.
     */
    readonly deployAcrossNodes?: boolean | ros.IResolvable;

    /**
     * Property deployAcrossZones: Specifies whether to distribute application instances to multiple zones. The value true indicates yes, whereas other values indicate no.
     */
    readonly deployAcrossZones?: boolean | ros.IResolvable;

    /**
     * Property edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends.
     * Note This parameter is not supported when you deploy an application by using images.
     */
    readonly edasContainerVersion?: string | ros.IResolvable;

    /**
     * Property enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS).
     */
    readonly enableAhas?: boolean | ros.IResolvable;

    /**
     * Property envs: The collection of deployment environment variables. For example, [{"Name":"x","Value":"y"},{"Name":"x2","Value":"y2"}].
     */
    readonly envs?: Array<RosK8sApplication.EnvsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property imageUrl: The image URL. When PackageType is set to Image, this parameter is required.
     */
    readonly imageUrl?: string | ros.IResolvable;

    /**
     * Property internetSlbId: The ID of the Internet-facing SLB instance. If this parameter is not specified, EDAS automatically purchases a new SLB instance for you.
     */
    readonly internetSlbId?: string | ros.IResolvable;

    /**
     * Property internetSlbPort: The frontend port of the Internet-facing SLB instance. Valid values: 1 to 65535.
     */
    readonly internetSlbPort?: number | ros.IResolvable;

    /**
     * Property internetSlbProtocol: The protocol of the Internet-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
     */
    readonly internetSlbProtocol?: string | ros.IResolvable;

    /**
     * Property internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application.
     * Valid values: 1 to 65535.
     */
    readonly internetTargetPort?: number | ros.IResolvable;

    /**
     * Property intranetSlbId: The ID of the internal-facing SLB instance. If this parameter is not specified, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
     */
    readonly intranetSlbId?: string | ros.IResolvable;

    /**
     * Property intranetSlbPort: The frontend port of the internal-facing SLB instance. Valid values: 1 to 65535.
     */
    readonly intranetSlbPort?: number | ros.IResolvable;

    /**
     * Property intranetSlbProtocol: The protocol of the internal-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
     */
    readonly intranetSlbProtocol?: string | ros.IResolvable;

    /**
     * Property intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application. Valid values: 1 to 65535.
     */
    readonly intranetTargetPort?: number | ros.IResolvable;

    /**
     * Property isMultilingualApp: Specifies whether the application is a multi-language application.
     */
    readonly isMultilingualApp?: boolean | ros.IResolvable;

    /**
     * Property javaStartUpConfig: The configuration of Java startup parameters for a Java application. These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Proper parameter settings help reduce the GC overhead, shorten the server response time, and improve the throughput.
     * The system automatically concatenates all startup values as the configuration of Java startup parameters for the application.
     */
    readonly javaStartUpConfig?: RosK8sApplication.JavaStartUpConfigProperty | ros.IResolvable;

    /**
     * Property jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends. 
     * Valid values: Open JDK 7 and Open JDK 8. This parameter is not supported when you deploy an application by using images.
     */
    readonly jdk?: string | ros.IResolvable;

    /**
     * Property limitCpu: The maximum number of CPUs allowed for each application instance when the application
     * is running. Unit: cores.
     */
    readonly limitCpu?: number | ros.IResolvable;

    /**
     * Property limitMem: The maximum amount of memory allowed for each application instance when the application is running. Unit: MB.
     */
    readonly limitMem?: number | ros.IResolvable;

    /**
     * Property liveness: The liveness check on the container.
     */
    readonly liveness?: RosK8sApplication.LivenessProperty | ros.IResolvable;

    /**
     * Property localVolume: The configuration for mounting host files to the container where the application is running. For example, the value can be [{"type":"", "nodePath":"\/localfiles", "mountPath":"\/app\/files"}, {"type":"Directory", "nodePath":"\/mnt", "mountPath":"\/app\/storage"}].
     */
    readonly localVolume?: Array<RosK8sApplication.LocalVolumeProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property logicalRegionId: The ID of the EDAS namespace. This parameter is required for a non-default namespace.
     */
    readonly logicalRegionId?: string | ros.IResolvable;

    /**
     * Property mountDescs: The description of the NAS mounting configuration. For example, the value can be [{"NasPath": "\/k8s","MountPath": "\/mnt"}, {"NasPath": "\/files", "MountPath": "\/app\/files"}].
     */
    readonly mountDescs?: Array<RosK8sApplication.MountDescsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property namespace: The namespace of the Kubernetes cluster. This parameter determines the Kubernetes namespace where your application is deployed. By default, this parameter is set to default.
     */
    readonly namespace?: string | ros.IResolvable;

    /**
     * Property nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running. The NAS file system must be in the same region as the cluster. The NAS file system must have an available mount target, or have a mount
     * target on the vSwitch in the virtual private cloud (VPC) where the application is located. If this parameter is not specified and the mountDescs field exists, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC by default.
     */
    readonly nasId?: string | ros.IResolvable;

    /**
     * Property packageType: The type of the deployment package. Valid values: FatJar, WAR, and Image.
     */
    readonly packageType?: string | ros.IResolvable;

    /**
     * Property packageUrl: The URL of the deployment package. This parameter must be set for the applications
     * that are deployed by using FatJar or WAR packages.
     * Note The version of SDK for Java or Python must be 2.44.0 or later.
     */
    readonly packageUrl?: string | ros.IResolvable;

    /**
     * Property packageVersion: The version of the deployment package. This parameter is required when the PackageType parameter is set to WAR or FatJar. You must specify a version.
     * Note The version of SDK for Java or Python must be 2.44.0 or later.
     */
    readonly packageVersion?: string | ros.IResolvable;

    /**
     * Property postStart: The post-start script. For example, {"Exec": {"Command": ["ls", "\/"]}}.
     */
    readonly postStart?: RosK8sApplication.PostStartProperty | ros.IResolvable;

    /**
     * Property preStop: The pre-stop script. For example, {"Exec": {"Command": ["ls", "\/"]}}.
     */
    readonly preStop?: RosK8sApplication.PreStopProperty | ros.IResolvable;

    /**
     * Property readiness: The readiness check on the container.
     */
    readonly readiness?: RosK8sApplication.ReadinessProperty | ros.IResolvable;

    /**
     * Property replicas: The number of instances for the application that you want to create. Default: 1
     */
    readonly replicas?: number | ros.IResolvable;

    /**
     * Property repoId: The ID of the image repository.
     */
    readonly repoId?: string | ros.IResolvable;

    /**
     * Property requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created. Unit: cores. The value 0 indicates no limit.
     */
    readonly requestsCpu?: number | ros.IResolvable;

    /**
     * Property requestsMem: The maximum amount of memory allowed for each application instance when the application
     * is created. Unit: MB. The value 0 indicates no limit.
     */
    readonly requestsMem?: number | ros.IResolvable;

    /**
     * Property runtimeClassName: The type of the container runtime. This parameter is applicable only to clusters that use sandboxed containers.
     */
    readonly runtimeClassName?: string | ros.IResolvable;

    /**
     * Property slsConfigs: The Logstore configurations.
     */
    readonly slsConfigs?: Array<RosK8sApplication.SlsConfigsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property storageType: Only SSD is supported.
     */
    readonly storageType?: string | ros.IResolvable;

    /**
     * Property timeout: The timeout interval of the change process. Unit: seconds.
     */
    readonly timeout?: number | ros.IResolvable;

    /**
     * Property uriEncoding: The uniform resource identifier (URI) encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
     * Note If this parameter is not specified in application configuration, the default URI encoding
     * scheme in the Tomcat container is applied.
     */
    readonly uriEncoding?: string | ros.IResolvable;

    /**
     * Property useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled.
     * Note If this parameter is not specified in application configuration, the default value
     * false is applied.
     */
    readonly useBodyEncoding?: boolean | ros.IResolvable;

    /**
     * Property webContainer: The version of the Tomcat container on which the deployment package of the application depends. This parameter is applicable to Spring Cloud and Apache Dubbo applications that are deployed by using WAR packages. This parameter is not supported when you deploy an application by using images.
     */
    readonly webContainer?: string | ros.IResolvable;

    /**
     * Property webContainerConfig: The Tomcat container configuration.
     */
    readonly webContainerConfig?: RosK8sApplication.WebContainerConfigProperty | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::K8sApplication`, which is used to create an application in a Kubernetes cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosK8sApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sapplication
 */
export class K8sApplication extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: K8sApplicationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AppId: The ID of the application.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * Attribute AppName: The name of the application.
     */
    public readonly attrAppName: ros.IResolvable;

    /**
     * Attribute ChangeOrderId: The ID of the change process.
     */
    public readonly attrChangeOrderId: ros.IResolvable;

    /**
     * Attribute ClusterId: The cluster ID of the application.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute CsClusterId: The K8s cluster ID of the application.
     */
    public readonly attrCsClusterId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: K8sApplicationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosK8sApplication = new RosK8sApplication(this, id,  {
            logicalRegionId: props.logicalRegionId,
            nasId: props.nasId,
            liveness: props.liveness,
            intranetSlbId: props.intranetSlbId,
            webContainer: props.webContainer,
            limitCpu: props.limitCpu,
            slsConfigs: props.slsConfigs,
            intranetSlbProtocol: props.intranetSlbProtocol,
            webContainerConfig: props.webContainerConfig,
            packageVersion: props.packageVersion,
            appName: props.appName,
            jdk: props.jdk,
            internetSlbId: props.internetSlbId,
            preStop: props.preStop,
            internetSlbPort: props.internetSlbPort,
            readiness: props.readiness,
            deployAcrossNodes: props.deployAcrossNodes,
            requestsMem: props.requestsMem,
            packageType: props.packageType,
            useBodyEncoding: props.useBodyEncoding,
            javaStartUpConfig: props.javaStartUpConfig,
            isMultilingualApp: props.isMultilingualApp,
            requestsCpu: props.requestsCpu,
            commandArgs: props.commandArgs,
            storageType: props.storageType,
            clusterId: props.clusterId,
            timeout: props.timeout,
            envs: props.envs,
            imageUrl: props.imageUrl,
            deployAcrossZones: props.deployAcrossZones,
            postStart: props.postStart,
            internetTargetPort: props.internetTargetPort,
            replicas: props.replicas === undefined || props.replicas === null ? 1 : props.replicas,
            namespace: props.namespace,
            applicationDescription: props.applicationDescription,
            uriEncoding: props.uriEncoding,
            intranetTargetPort: props.intranetTargetPort,
            mountDescs: props.mountDescs,
            localVolume: props.localVolume,
            edasContainerVersion: props.edasContainerVersion,
            runtimeClassName: props.runtimeClassName,
            command: props.command,
            internetSlbProtocol: props.internetSlbProtocol,
            packageUrl: props.packageUrl,
            intranetSlbPort: props.intranetSlbPort,
            repoId: props.repoId,
            enableAhas: props.enableAhas,
            limitMem: props.limitMem,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosK8sApplication;
        this.attrAppId = rosK8sApplication.attrAppId;
        this.attrAppName = rosK8sApplication.attrAppName;
        this.attrChangeOrderId = rosK8sApplication.attrChangeOrderId;
        this.attrClusterId = rosK8sApplication.attrClusterId;
        this.attrCsClusterId = rosK8sApplication.attrCsClusterId;
    }
}
