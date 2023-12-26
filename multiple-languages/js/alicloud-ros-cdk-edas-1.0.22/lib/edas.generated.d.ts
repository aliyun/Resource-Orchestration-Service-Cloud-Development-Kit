import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-application
 */
export interface RosApplicationProps {
    /**
     * @Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters)
     */
    readonly applicationName: string | ros.IResolvable;
    /**
     * @Property clusterId: Cluster ID of ECS application
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition). When creating HSF application, this parameter must be specified
     */
    readonly buildPackId?: number | ros.IResolvable;
    /**
     * @Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo
     * Application required) or standard Java application (jar package format Spring Boot \/ Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning:
     * 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
     * 1.7.x
     */
    readonly componentIds?: string | ros.IResolvable;
    /**
     * @Property deployment: Deploy application information to ECS clusters
     */
    readonly deployment?: RosApplication.DeploymentProperty | ros.IResolvable;
    /**
     * @Property description: Descriptive information
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id
     * Interface to obtain).
     */
    readonly ecuInfo?: string | ros.IResolvable;
    /**
     * @Property healthCheckUrl: Application Health Check URL
     */
    readonly healthCheckUrl?: string | ros.IResolvable;
    /**
     * @Property logicalRegionId: Namespace ID
     */
    readonly logicalRegionId?: string | ros.IResolvable;
    /**
     * @Property packageType: Application packet format, possible values: war or jar
     */
    readonly packageType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::Application`, which is used to create an application in an Elastic Compute Service (ECS) cluster in Enterprise Distributed Application Service (EDAS).
 * @Note This class does not contain additional functions, so it is recommended to use the `Application` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-application
 */
export declare class RosApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::Application";
    /**
     * @Attribute AppId: Application Id, a unique identifier EDAS application
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute Port: Application port
     */
    readonly attrPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters)
     */
    applicationName: string | ros.IResolvable;
    /**
     * @Property clusterId: Cluster ID of ECS application
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition). When creating HSF application, this parameter must be specified
     */
    buildPackId: number | ros.IResolvable | undefined;
    /**
     * @Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo
     * Application required) or standard Java application (jar package format Spring Boot \/ Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning:
     * 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
     * 1.7.x
     */
    componentIds: string | ros.IResolvable | undefined;
    /**
     * @Property deployment: Deploy application information to ECS clusters
     */
    deployment: RosApplication.DeploymentProperty | ros.IResolvable | undefined;
    /**
     * @Property description: Descriptive information
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id
     * Interface to obtain).
     */
    ecuInfo: string | ros.IResolvable | undefined;
    /**
     * @Property healthCheckUrl: Application Health Check URL
     */
    healthCheckUrl: string | ros.IResolvable | undefined;
    /**
     * @Property logicalRegionId: Namespace ID
     */
    logicalRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property packageType: Application packet format, possible values: war or jar
     */
    packageType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
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
    interface DeploymentProperty {
        /**
         * @Property releaseType: Batch mode.
     * 0 is automatic.
     * 1 means manual confirmation is required between batches.
         */
        readonly releaseType?: number | ros.IResolvable;
        /**
         * @Property desc: Application deployment description information
         */
        readonly desc?: string | ros.IResolvable;
        /**
         * @Property gray: Whether Canary Release.
     * True: Canary Release.
     * When implementing a gray release, the GroupId that will be used for the gray release must be specified.
     * Gray release is a batch release.
     * After the gray release is complete, normal release can be done, and the Batch controls the grouping.
     * False: Non-Canary Release (single or grouped release).
         */
        readonly gray?: boolean | ros.IResolvable;
        /**
         * @Property appEnv: Deployment environment variables, the format must conform to
     * {"name":"x","value":"y"},{"name":"x2","value":"y2"},
     * and the key is fixed as name and value.
         */
        readonly appEnv?: string | ros.IResolvable;
        /**
         * @Property batch: Each group of batches.When the GroupId of the specified application group is a specific application group ID,
     * it means to deploy to the specified application group.
     *  At this time, the minimum number of batches that can be specified is 1,
     *  and the maximum number of batches is the maximum number of
     *  ECS instances in the normal state under the application group.
     * The actual number of batches results range: [1, specified number of batches].
     * When the GroupId of the specified application group is all,
     * it means to deploy to all application groups.
     * At this time, the minimum number of batches that can be specified is 1,
     * and the maximum number of batches is the number of
     * ECS instances under the group with the largest number of ECSs in the normal state.
         */
        readonly batch?: number | ros.IResolvable;
        /**
         * @Property warUrl: The URL address of the application deployment package (WAR or JAR).
     * It is recommended to use the application deployment package path stored in OSS.
         */
        readonly warUrl: string | ros.IResolvable;
        /**
         * @Property trafficControlStrategy: Gray release policy content
         */
        readonly trafficControlStrategy?: string | ros.IResolvable;
        /**
         * @Property batchWaitTime: Batch waiting time, unit: minute.
     * The default is 0, which means no waiting.
     * The maximum is 5.
     * When the actual number of batches is large, a reasonable value needs to be set,
     * otherwise the change duration of this application deployment will be longer.
         */
        readonly batchWaitTime?: number | ros.IResolvable;
        /**
         * @Property packageVersion: Deployed application deployment package version,
     * up to 64 characters, it is recommended to use timestamp
         */
        readonly packageVersion: string | ros.IResolvable;
        /**
         * @Property groupId: Deployment group ID.
     * If you want to deploy to all groups, set the parameter to all.
         */
        readonly groupId?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-cluster
 */
export interface RosClusterProps {
    /**
     * @Property clusterName: Cluster name
     */
    readonly clusterName: string | ros.IResolvable;
    /**
     * @Property clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
     */
    readonly clusterType: number | ros.IResolvable;
    /**
     * @Property networkMode: Network Type. 1- classic network, 2-VPC
     */
    readonly networkMode: number | ros.IResolvable;
    /**
     * @Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier)
     */
    readonly logicalRegionId?: string | ros.IResolvable;
    /**
     * @Property oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) \/ 4 (1: 4) \/ 8 (1: 8 ratio)
     */
    readonly oversoldFactor?: number | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC network ID. If network selection VPC, this parameter Required
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::Cluster`, which is used to create a cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-cluster
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::Cluster";
    /**
     * @Attribute ClusterId: Cluster ID
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute ClusterName: Cluster name
     */
    readonly attrClusterName: ros.IResolvable;
    /**
     * @Attribute ClusterType: Cluster type
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * @Attribute IaasProvider: Provider
     */
    readonly attrIaasProvider: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterName: Cluster name
     */
    clusterName: string | ros.IResolvable;
    /**
     * @Property clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
     */
    clusterType: number | ros.IResolvable;
    /**
     * @Property networkMode: Network Type. 1- classic network, 2-VPC
     */
    networkMode: number | ros.IResolvable;
    /**
     * @Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier)
     */
    logicalRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) \/ 4 (1: 4) \/ 8 (1: 8 ratio)
     */
    oversoldFactor: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: VPC network ID. If network selection VPC, this parameter Required
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosClusterMember`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-clustermember
 */
export interface RosClusterMemberProps {
    /**
     * @Property clusterId: Cluster ID to import ECS instance
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property instanceIds: ECS instance ID list to import.
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property password: Password ECS hosts need to import (ECS settings can continue to use purchased)
     */
    readonly password: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::ClusterMember`, which is used to add Elastic Compute Service (ECS) instances to a cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterMember` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-clustermember
 */
export declare class RosClusterMember extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::ClusterMember";
    /**
     * @Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
     */
    readonly attrClusterMemberIds: ros.IResolvable;
    /**
     * @Attribute EcuIds: ECU IDs corresponding to the ECS instance IDs.
     */
    readonly attrEcuIds: ros.IResolvable;
    /**
     * @Attribute InstanceIds: ECS instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: Cluster ID to import ECS instance
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property instanceIds: ECS instance ID list to import.
     */
    instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property password: Password ECS hosts need to import (ECS settings can continue to use purchased)
     */
    password: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterMemberProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDeployGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-deploygroup
 */
export interface RosDeployGroupProps {
    /**
     * @Property appId: Application ID
     */
    readonly appId: string | ros.IResolvable;
    /**
     * @Property groupName: Group name, maximum length of 64.
     */
    readonly groupName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::DeployGroup`, which is used to create an instance group for an application.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeployGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-deploygroup
 */
export declare class RosDeployGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::DeployGroup";
    /**
     * @Attribute AppId: Application ID
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute GroupName: Deploy group name
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * @Attribute Id: Deploy group ID
     */
    readonly attrId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appId: Application ID
     */
    appId: string | ros.IResolvable;
    /**
     * @Property groupName: Group name, maximum length of 64.
     */
    groupName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeployGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosK8sApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sapplication
 */
export interface RosK8sApplicationProps {
    /**
     * @Property appName: The name of the application. The name must start with a letter and can contain digits,
     * letters, and hyphens (-). It can be up to 36 characters in length.
     */
    readonly appName: string | ros.IResolvable;
    /**
     * @Property clusterId: The cluster ID. You can query the cluster ID by calling the ListCluster operation.
     * For more information, see ListCluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property applicationDescription: The description of the application.
     */
    readonly applicationDescription?: string | ros.IResolvable;
    /**
     * @Property command: The command that is specified. If it is specified, it replaces the startup command in the image when the image is started.
     */
    readonly command?: string | ros.IResolvable;
    /**
     * @Property commandArgs: The collection of commands. For example, [{"argument":"-c"},{"argument":"test"}], where -c and test are two parameters that can be set.
     */
    readonly commandArgs?: Array<RosK8sApplication.CommandArgsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes. The value true indicates yes, whereas other values indicate no.
     */
    readonly deployAcrossNodes?: boolean | ros.IResolvable;
    /**
     * @Property deployAcrossZones: Specifies whether to distribute application instances to multiple zones. The value true indicates yes, whereas other values indicate no.
     */
    readonly deployAcrossZones?: boolean | ros.IResolvable;
    /**
     * @Property edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends.
     * Note This parameter is not supported when you deploy an application by using images.
     */
    readonly edasContainerVersion?: string | ros.IResolvable;
    /**
     * @Property enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS).
     */
    readonly enableAhas?: boolean | ros.IResolvable;
    /**
     * @Property envs: The collection of deployment environment variables. For example, [{"Name":"x","Value":"y"},{"Name":"x2","Value":"y2"}].
     */
    readonly envs?: Array<RosK8sApplication.EnvsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property imageUrl: The image URL. When PackageType is set to Image, this parameter is required.
     */
    readonly imageUrl?: string | ros.IResolvable;
    /**
     * @Property internetSlbId: The ID of the Internet-facing SLB instance. If this parameter is not specified, EDAS automatically purchases a new SLB instance for you.
     */
    readonly internetSlbId?: string | ros.IResolvable;
    /**
     * @Property internetSlbPort: The frontend port of the Internet-facing SLB instance. Valid values: 1 to 65535.
     */
    readonly internetSlbPort?: number | ros.IResolvable;
    /**
     * @Property internetSlbProtocol: The protocol of the Internet-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
     */
    readonly internetSlbProtocol?: string | ros.IResolvable;
    /**
     * @Property internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application.
     * Valid values: 1 to 65535.
     */
    readonly internetTargetPort?: number | ros.IResolvable;
    /**
     * @Property intranetSlbId: The ID of the internal-facing SLB instance. If this parameter is not specified, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
     */
    readonly intranetSlbId?: string | ros.IResolvable;
    /**
     * @Property intranetSlbPort: The frontend port of the internal-facing SLB instance. Valid values: 1 to 65535.
     */
    readonly intranetSlbPort?: number | ros.IResolvable;
    /**
     * @Property intranetSlbProtocol: The protocol of the internal-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
     */
    readonly intranetSlbProtocol?: string | ros.IResolvable;
    /**
     * @Property intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application. Valid values: 1 to 65535.
     */
    readonly intranetTargetPort?: number | ros.IResolvable;
    /**
     * @Property isMultilingualApp: Specifies whether the application is a multi-language application.
     */
    readonly isMultilingualApp?: boolean | ros.IResolvable;
    /**
     * @Property javaStartUpConfig: The configuration of Java startup parameters for a Java application. These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Proper parameter settings help reduce the GC overhead, shorten the server response time, and improve the throughput.
     * The system automatically concatenates all startup values as the configuration of Java startup parameters for the application.
     */
    readonly javaStartUpConfig?: RosK8sApplication.JavaStartUpConfigProperty | ros.IResolvable;
    /**
     * @Property jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends.
     * Valid values: Open JDK 7 and Open JDK 8. This parameter is not supported when you deploy an application by using images.
     */
    readonly jdk?: string | ros.IResolvable;
    /**
     * @Property limitCpu: The maximum number of CPUs allowed for each application instance when the application
     * is running. Unit: cores.
     */
    readonly limitCpu?: number | ros.IResolvable;
    /**
     * @Property limitMem: The maximum amount of memory allowed for each application instance when the application is running. Unit: MB.
     */
    readonly limitMem?: number | ros.IResolvable;
    /**
     * @Property liveness: The liveness check on the container.
     */
    readonly liveness?: RosK8sApplication.LivenessProperty | ros.IResolvable;
    /**
     * @Property localVolume: The configuration for mounting host files to the container where the application is running. For example, the value can be [{"type":"", "nodePath":"\/localfiles", "mountPath":"\/app\/files"}, {"type":"Directory", "nodePath":"\/mnt", "mountPath":"\/app\/storage"}].
     */
    readonly localVolume?: Array<RosK8sApplication.LocalVolumeProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property logicalRegionId: The ID of the EDAS namespace. This parameter is required for a non-default namespace.
     */
    readonly logicalRegionId?: string | ros.IResolvable;
    /**
     * @Property mountDescs: The description of the NAS mounting configuration. For example, the value can be [{"NasPath": "\/k8s","MountPath": "\/mnt"}, {"NasPath": "\/files", "MountPath": "\/app\/files"}].
     */
    readonly mountDescs?: Array<RosK8sApplication.MountDescsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property namespace: The namespace of the Kubernetes cluster. This parameter determines the Kubernetes namespace where your application is deployed. By default, this parameter is set to default.
     */
    readonly namespace?: string | ros.IResolvable;
    /**
     * @Property nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running. The NAS file system must be in the same region as the cluster. The NAS file system must have an available mount target, or have a mount
     * target on the vSwitch in the virtual private cloud (VPC) where the application is located. If this parameter is not specified and the mountDescs field exists, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC by default.
     */
    readonly nasId?: string | ros.IResolvable;
    /**
     * @Property packageType: The type of the deployment package. Valid values: FatJar, WAR, and Image.
     */
    readonly packageType?: string | ros.IResolvable;
    /**
     * @Property packageUrl: The URL of the deployment package. This parameter must be set for the applications
     * that are deployed by using FatJar or WAR packages.
     * Note The version of SDK for Java or Python must be 2.44.0 or later.
     */
    readonly packageUrl?: string | ros.IResolvable;
    /**
     * @Property packageVersion: The version of the deployment package. This parameter is required when the PackageType parameter is set to WAR or FatJar. You must specify a version.
     * Note The version of SDK for Java or Python must be 2.44.0 or later.
     */
    readonly packageVersion?: string | ros.IResolvable;
    /**
     * @Property postStart: The post-start script. For example, {"Exec": {"Command": ["ls", "\/"]}}.
     */
    readonly postStart?: RosK8sApplication.PostStartProperty | ros.IResolvable;
    /**
     * @Property preStop: The pre-stop script. For example, {"Exec": {"Command": ["ls", "\/"]}}.
     */
    readonly preStop?: RosK8sApplication.PreStopProperty | ros.IResolvable;
    /**
     * @Property readiness: The readiness check on the container.
     */
    readonly readiness?: RosK8sApplication.ReadinessProperty | ros.IResolvable;
    /**
     * @Property replicas: The number of instances for the application that you want to create. Default: 1
     */
    readonly replicas?: number | ros.IResolvable;
    /**
     * @Property repoId: The ID of the image repository.
     */
    readonly repoId?: string | ros.IResolvable;
    /**
     * @Property requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created. Unit: cores. The value 0 indicates no limit.
     */
    readonly requestsCpu?: number | ros.IResolvable;
    /**
     * @Property requestsMem: The maximum amount of memory allowed for each application instance when the application
     * is created. Unit: MB. The value 0 indicates no limit.
     */
    readonly requestsMem?: number | ros.IResolvable;
    /**
     * @Property runtimeClassName: The type of the container runtime. This parameter is applicable only to clusters that use sandboxed containers.
     */
    readonly runtimeClassName?: string | ros.IResolvable;
    /**
     * @Property slsConfigs: The Logstore configurations.
     */
    readonly slsConfigs?: Array<RosK8sApplication.SlsConfigsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property storageType: Only SSD is supported.
     */
    readonly storageType?: string | ros.IResolvable;
    /**
     * @Property timeout: The timeout interval of the change process. Unit: seconds.
     */
    readonly timeout?: number | ros.IResolvable;
    /**
     * @Property uriEncoding: The uniform resource identifier (URI) encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
     * Note If this parameter is not specified in application configuration, the default URI encoding
     * scheme in the Tomcat container is applied.
     */
    readonly uriEncoding?: string | ros.IResolvable;
    /**
     * @Property useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled.
     * Note If this parameter is not specified in application configuration, the default value
     * false is applied.
     */
    readonly useBodyEncoding?: boolean | ros.IResolvable;
    /**
     * @Property webContainer: The version of the Tomcat container on which the deployment package of the application depends. This parameter is applicable to Spring Cloud and Apache Dubbo applications that are deployed by using WAR packages. This parameter is not supported when you deploy an application by using images.
     */
    readonly webContainer?: string | ros.IResolvable;
    /**
     * @Property webContainerConfig: The Tomcat container configuration.
     */
    readonly webContainerConfig?: RosK8sApplication.WebContainerConfigProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::K8sApplication`, which is used to create an application in a Kubernetes cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `K8sApplication` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sapplication
 */
export declare class RosK8sApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::K8sApplication";
    /**
     * @Attribute AppId: The ID of the application.
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute AppName: The name of the application.
     */
    readonly attrAppName: ros.IResolvable;
    /**
     * @Attribute ChangeOrderId: The ID of the change process.
     */
    readonly attrChangeOrderId: ros.IResolvable;
    /**
     * @Attribute ClusterId: The cluster ID of the application.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute CsClusterId: The K8s cluster ID of the application.
     */
    readonly attrCsClusterId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appName: The name of the application. The name must start with a letter and can contain digits,
     * letters, and hyphens (-). It can be up to 36 characters in length.
     */
    appName: string | ros.IResolvable;
    /**
     * @Property clusterId: The cluster ID. You can query the cluster ID by calling the ListCluster operation.
     * For more information, see ListCluster.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property applicationDescription: The description of the application.
     */
    applicationDescription: string | ros.IResolvable | undefined;
    /**
     * @Property command: The command that is specified. If it is specified, it replaces the startup command in the image when the image is started.
     */
    command: string | ros.IResolvable | undefined;
    /**
     * @Property commandArgs: The collection of commands. For example, [{"argument":"-c"},{"argument":"test"}], where -c and test are two parameters that can be set.
     */
    commandArgs: Array<RosK8sApplication.CommandArgsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes. The value true indicates yes, whereas other values indicate no.
     */
    deployAcrossNodes: boolean | ros.IResolvable | undefined;
    /**
     * @Property deployAcrossZones: Specifies whether to distribute application instances to multiple zones. The value true indicates yes, whereas other values indicate no.
     */
    deployAcrossZones: boolean | ros.IResolvable | undefined;
    /**
     * @Property edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends.
     * Note This parameter is not supported when you deploy an application by using images.
     */
    edasContainerVersion: string | ros.IResolvable | undefined;
    /**
     * @Property enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS).
     */
    enableAhas: boolean | ros.IResolvable | undefined;
    /**
     * @Property envs: The collection of deployment environment variables. For example, [{"Name":"x","Value":"y"},{"Name":"x2","Value":"y2"}].
     */
    envs: Array<RosK8sApplication.EnvsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property imageUrl: The image URL. When PackageType is set to Image, this parameter is required.
     */
    imageUrl: string | ros.IResolvable | undefined;
    /**
     * @Property internetSlbId: The ID of the Internet-facing SLB instance. If this parameter is not specified, EDAS automatically purchases a new SLB instance for you.
     */
    internetSlbId: string | ros.IResolvable | undefined;
    /**
     * @Property internetSlbPort: The frontend port of the Internet-facing SLB instance. Valid values: 1 to 65535.
     */
    internetSlbPort: number | ros.IResolvable | undefined;
    /**
     * @Property internetSlbProtocol: The protocol of the Internet-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
     */
    internetSlbProtocol: string | ros.IResolvable | undefined;
    /**
     * @Property internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application.
     * Valid values: 1 to 65535.
     */
    internetTargetPort: number | ros.IResolvable | undefined;
    /**
     * @Property intranetSlbId: The ID of the internal-facing SLB instance. If this parameter is not specified, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
     */
    intranetSlbId: string | ros.IResolvable | undefined;
    /**
     * @Property intranetSlbPort: The frontend port of the internal-facing SLB instance. Valid values: 1 to 65535.
     */
    intranetSlbPort: number | ros.IResolvable | undefined;
    /**
     * @Property intranetSlbProtocol: The protocol of the internal-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
     */
    intranetSlbProtocol: string | ros.IResolvable | undefined;
    /**
     * @Property intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application. Valid values: 1 to 65535.
     */
    intranetTargetPort: number | ros.IResolvable | undefined;
    /**
     * @Property isMultilingualApp: Specifies whether the application is a multi-language application.
     */
    isMultilingualApp: boolean | ros.IResolvable | undefined;
    /**
     * @Property javaStartUpConfig: The configuration of Java startup parameters for a Java application. These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Proper parameter settings help reduce the GC overhead, shorten the server response time, and improve the throughput.
     * The system automatically concatenates all startup values as the configuration of Java startup parameters for the application.
     */
    javaStartUpConfig: RosK8sApplication.JavaStartUpConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends.
     * Valid values: Open JDK 7 and Open JDK 8. This parameter is not supported when you deploy an application by using images.
     */
    jdk: string | ros.IResolvable | undefined;
    /**
     * @Property limitCpu: The maximum number of CPUs allowed for each application instance when the application
     * is running. Unit: cores.
     */
    limitCpu: number | ros.IResolvable | undefined;
    /**
     * @Property limitMem: The maximum amount of memory allowed for each application instance when the application is running. Unit: MB.
     */
    limitMem: number | ros.IResolvable | undefined;
    /**
     * @Property liveness: The liveness check on the container.
     */
    liveness: RosK8sApplication.LivenessProperty | ros.IResolvable | undefined;
    /**
     * @Property localVolume: The configuration for mounting host files to the container where the application is running. For example, the value can be [{"type":"", "nodePath":"\/localfiles", "mountPath":"\/app\/files"}, {"type":"Directory", "nodePath":"\/mnt", "mountPath":"\/app\/storage"}].
     */
    localVolume: Array<RosK8sApplication.LocalVolumeProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property logicalRegionId: The ID of the EDAS namespace. This parameter is required for a non-default namespace.
     */
    logicalRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property mountDescs: The description of the NAS mounting configuration. For example, the value can be [{"NasPath": "\/k8s","MountPath": "\/mnt"}, {"NasPath": "\/files", "MountPath": "\/app\/files"}].
     */
    mountDescs: Array<RosK8sApplication.MountDescsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property namespace: The namespace of the Kubernetes cluster. This parameter determines the Kubernetes namespace where your application is deployed. By default, this parameter is set to default.
     */
    namespace: string | ros.IResolvable | undefined;
    /**
     * @Property nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running. The NAS file system must be in the same region as the cluster. The NAS file system must have an available mount target, or have a mount
     * target on the vSwitch in the virtual private cloud (VPC) where the application is located. If this parameter is not specified and the mountDescs field exists, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC by default.
     */
    nasId: string | ros.IResolvable | undefined;
    /**
     * @Property packageType: The type of the deployment package. Valid values: FatJar, WAR, and Image.
     */
    packageType: string | ros.IResolvable | undefined;
    /**
     * @Property packageUrl: The URL of the deployment package. This parameter must be set for the applications
     * that are deployed by using FatJar or WAR packages.
     * Note The version of SDK for Java or Python must be 2.44.0 or later.
     */
    packageUrl: string | ros.IResolvable | undefined;
    /**
     * @Property packageVersion: The version of the deployment package. This parameter is required when the PackageType parameter is set to WAR or FatJar. You must specify a version.
     * Note The version of SDK for Java or Python must be 2.44.0 or later.
     */
    packageVersion: string | ros.IResolvable | undefined;
    /**
     * @Property postStart: The post-start script. For example, {"Exec": {"Command": ["ls", "\/"]}}.
     */
    postStart: RosK8sApplication.PostStartProperty | ros.IResolvable | undefined;
    /**
     * @Property preStop: The pre-stop script. For example, {"Exec": {"Command": ["ls", "\/"]}}.
     */
    preStop: RosK8sApplication.PreStopProperty | ros.IResolvable | undefined;
    /**
     * @Property readiness: The readiness check on the container.
     */
    readiness: RosK8sApplication.ReadinessProperty | ros.IResolvable | undefined;
    /**
     * @Property replicas: The number of instances for the application that you want to create. Default: 1
     */
    replicas: number | ros.IResolvable | undefined;
    /**
     * @Property repoId: The ID of the image repository.
     */
    repoId: string | ros.IResolvable | undefined;
    /**
     * @Property requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created. Unit: cores. The value 0 indicates no limit.
     */
    requestsCpu: number | ros.IResolvable | undefined;
    /**
     * @Property requestsMem: The maximum amount of memory allowed for each application instance when the application
     * is created. Unit: MB. The value 0 indicates no limit.
     */
    requestsMem: number | ros.IResolvable | undefined;
    /**
     * @Property runtimeClassName: The type of the container runtime. This parameter is applicable only to clusters that use sandboxed containers.
     */
    runtimeClassName: string | ros.IResolvable | undefined;
    /**
     * @Property slsConfigs: The Logstore configurations.
     */
    slsConfigs: Array<RosK8sApplication.SlsConfigsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property storageType: Only SSD is supported.
     */
    storageType: string | ros.IResolvable | undefined;
    /**
     * @Property timeout: The timeout interval of the change process. Unit: seconds.
     */
    timeout: number | ros.IResolvable | undefined;
    /**
     * @Property uriEncoding: The uniform resource identifier (URI) encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
     * Note If this parameter is not specified in application configuration, the default URI encoding
     * scheme in the Tomcat container is applied.
     */
    uriEncoding: string | ros.IResolvable | undefined;
    /**
     * @Property useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled.
     * Note If this parameter is not specified in application configuration, the default value
     * false is applied.
     */
    useBodyEncoding: boolean | ros.IResolvable | undefined;
    /**
     * @Property webContainer: The version of the Tomcat container on which the deployment package of the application depends. This parameter is applicable to Spring Cloud and Apache Dubbo applications that are deployed by using WAR packages. This parameter is not supported when you deploy an application by using images.
     */
    webContainer: string | ros.IResolvable | undefined;
    /**
     * @Property webContainerConfig: The Tomcat container configuration.
     */
    webContainerConfig: RosK8sApplication.WebContainerConfigProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosK8sApplicationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface CommandArgsProperty {
        /**
         * @Property argument: undefined
         */
        readonly argument?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface ConcGCThreadsProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface CustomParamsProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: string | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface EnvsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface ExecProperty {
        /**
         * @Property command: undefined
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface G1HeapRegionSizeProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface GCLogFilePathProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: string | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface GCLogFileSizeProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface HeapDumpOnOutOfMemoryErrorProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: boolean | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface HeapDumpPathProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: string | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface HttpGetProperty {
        /**
         * @Property path: undefined
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property httpHeaders: undefined
         */
        readonly httpHeaders?: Array<RosK8sApplication.HttpHeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property scheme: undefined
         */
        readonly scheme?: string | ros.IResolvable;
        /**
         * @Property port: undefined
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property host: undefined
         */
        readonly host?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface HttpGetHttpHeadersProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface HttpHeadersProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface InitialHeapSizeProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface JavaStartUpConfigProperty {
        /**
         * @Property maxHeapSize: The maximum heap size. Unit: MB. Value range: 0 to (0.85 x Available memory for ECS instances of the application)
         */
        readonly maxHeapSize?: RosK8sApplication.MaxHeapSizeProperty | ros.IResolvable;
        /**
         * @Property useGcLogFileRotation:
         */
        readonly useGcLogFileRotation?: RosK8sApplication.UseGCLogFileRotationProperty | ros.IResolvable;
        /**
         * @Property customParams: If the preceding options cannot meet your requirements, you can use custom parameters. Separate parameters with spaces.
         */
        readonly customParams?: RosK8sApplication.CustomParamsProperty | ros.IResolvable;
        /**
         * @Property parallelGcThreads: Number of parallel threads parallel gc will use.
         */
        readonly parallelGcThreads?: RosK8sApplication.ParallelGCThreadsProperty | ros.IResolvable;
        /**
         * @Property initialHeapSize: The size of the initial heap. Unit: MB. The value 0 indicates that the size is unlimited.
         */
        readonly initialHeapSize?: RosK8sApplication.InitialHeapSizeProperty | ros.IResolvable;
        /**
         * @Property nacosUseEndpointParsingRule: Whether enable rule parsing.
         */
        readonly nacosUseEndpointParsingRule?: RosK8sApplication.NacosUseEndpointParsingRuleProperty | ros.IResolvable;
        /**
         * @Property threadStackSize: Thread stack size (KB).
         */
        readonly threadStackSize?: RosK8sApplication.ThreadStackSizeProperty | ros.IResolvable;
        /**
         * @Property survivorRatio: Eden\/Survivor Memory Size Ratio.
         */
        readonly survivorRatio?: RosK8sApplication.SurvivorRatioProperty | ros.IResolvable;
        /**
         * @Property permSize: Initial Permanent Generation Size (MB).
         */
        readonly permSize?: RosK8sApplication.PermSizeProperty | ros.IResolvable;
        /**
         * @Property newSize: Initial Young Generation Size (MB).
         */
        readonly newSize?: RosK8sApplication.NewSizeProperty | ros.IResolvable;
        /**
         * @Property concGcThreads: Number of threads concurrent gc will use.
         */
        readonly concGcThreads?: RosK8sApplication.ConcGCThreadsProperty | ros.IResolvable;
        /**
         * @Property newRatio: Old\/Young Generation Memory Size Ratio.
         */
        readonly newRatio?: RosK8sApplication.NewRatioProperty | ros.IResolvable;
        /**
         * @Property gcLogFileSize: GC log file size.
         */
        readonly gcLogFileSize?: RosK8sApplication.GCLogFileSizeProperty | ros.IResolvable;
        /**
         * @Property maxNewSize: The maximum size of young generation. Unit: MB. The value max_uintx indicates that no upper limit is specified for memory usage.
         */
        readonly maxNewSize?: RosK8sApplication.MaxNewSizeProperty | ros.IResolvable;
        /**
         * @Property g1HeapRegionSize: Size of the G1 regions.
         */
        readonly g1HeapRegionSize?: RosK8sApplication.G1HeapRegionSizeProperty | ros.IResolvable;
        /**
         * @Property printGc:
         */
        readonly printGc?: RosK8sApplication.PrintGCProperty | ros.IResolvable;
        /**
         * @Property maxDirectMemorySize: The maximum size of NIO direct memory. Unit: MB.
         */
        readonly maxDirectMemorySize?: RosK8sApplication.MaxDirectMemorySizeProperty | ros.IResolvable;
        /**
         * @Property maxPermSize: The maximum size of permanent generation. Unit: MB.
         */
        readonly maxPermSize?: RosK8sApplication.MaxPermSizeProperty | ros.IResolvable;
        /**
         * @Property heapDumpOnOutOfMemoryError: Whether dump memory when OOM occurs.
         */
        readonly heapDumpOnOutOfMemoryError?: RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty | ros.IResolvable;
        /**
         * @Property nacosUseCloudNamespaceParsing: Whether enable automatic namespace parsing.
         */
        readonly nacosUseCloudNamespaceParsing?: RosK8sApplication.NacosUseCloudNamespaceParsingProperty | ros.IResolvable;
        /**
         * @Property heapDumpPath: Dump File Path.
         */
        readonly heapDumpPath?: RosK8sApplication.HeapDumpPathProperty | ros.IResolvable;
        /**
         * @Property gcLogFilePath: GC log directory.
         */
        readonly gcLogFilePath?: RosK8sApplication.GCLogFilePathProperty | ros.IResolvable;
        /**
         * @Property printGcDateStamps:
         */
        readonly printGcDateStamps?: RosK8sApplication.PrintGCDateStampsProperty | ros.IResolvable;
        /**
         * @Property youngGarbageCollector: It is used to configure young generation garbage collector.
         */
        readonly youngGarbageCollector?: RosK8sApplication.YoungGarbageCollectorProperty | ros.IResolvable;
        /**
         * @Property oldGarbageCollector: It is used to configure the old generation garbage collector. You must configure the young generation garbage collector first.
         */
        readonly oldGarbageCollector?: RosK8sApplication.OldGarbageCollectorProperty | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface LivenessProperty {
        /**
         * @Property timeoutSeconds: undefined
         */
        readonly timeoutSeconds?: number | ros.IResolvable;
        /**
         * @Property exec: undefined
         */
        readonly exec?: RosK8sApplication.ExecProperty | ros.IResolvable;
        /**
         * @Property initialDelaySeconds: undefined
         */
        readonly initialDelaySeconds?: number | ros.IResolvable;
        /**
         * @Property httpGet: undefined
         */
        readonly httpGet?: RosK8sApplication.HttpGetProperty | ros.IResolvable;
        /**
         * @Property periodSeconds: undefined
         */
        readonly periodSeconds?: number | ros.IResolvable;
        /**
         * @Property tcpSocket: undefined
         */
        readonly tcpSocket?: RosK8sApplication.TcpSocketProperty | ros.IResolvable;
        /**
         * @Property failureThreshold: undefined
         */
        readonly failureThreshold?: number | ros.IResolvable;
        /**
         * @Property successThreshold: undefined
         */
        readonly successThreshold?: number | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface LocalVolumeProperty {
        /**
         * @Property mountPath: Specifies the path within the container.
         */
        readonly mountPath?: string | ros.IResolvable;
        /**
         * @Property type: Specifies the mounting type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property nodePath: Specifies the host path.
         */
        readonly nodePath?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface MaxDirectMemorySizeProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface MaxHeapSizeProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface MaxNewSizeProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface MaxPermSizeProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface MountDescsProperty {
        /**
         * @Property mountPath: Specifies the path to mount the file system to the container where the application is running.
         */
        readonly mountPath?: string | ros.IResolvable;
        /**
         * @Property nasPath: Specifies the file storage path.
         */
        readonly nasPath?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface NacosUseCloudNamespaceParsingProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: boolean | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface NacosUseEndpointParsingRuleProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: boolean | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface NewRatioProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface NewSizeProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface OldGarbageCollectorProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: string | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface ParallelGCThreadsProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface PermSizeProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface PostStartProperty {
        /**
         * @Property exec: undefined
         */
        readonly exec?: RosK8sApplication.PostStartExecProperty | ros.IResolvable;
        /**
         * @Property httpGet: undefined
         */
        readonly httpGet?: RosK8sApplication.PostStartHttpGetProperty | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface PostStartExecProperty {
        /**
         * @Property command: undefined
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface PostStartHttpGetProperty {
        /**
         * @Property path: undefined
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property httpHeaders: undefined
         */
        readonly httpHeaders?: Array<RosK8sApplication.HttpGetHttpHeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property scheme: undefined
         */
        readonly scheme?: string | ros.IResolvable;
        /**
         * @Property port: undefined
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property host: undefined
         */
        readonly host?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface PreStopProperty {
        /**
         * @Property exec: undefined
         */
        readonly exec?: RosK8sApplication.PreStopExecProperty | ros.IResolvable;
        /**
         * @Property httpGet: undefined
         */
        readonly httpGet?: RosK8sApplication.PreStopHttpGetProperty | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface PreStopExecProperty {
        /**
         * @Property command: undefined
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface PreStopHttpGetProperty {
        /**
         * @Property path: undefined
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property httpHeaders: undefined
         */
        readonly httpHeaders?: Array<RosK8sApplication.PreStopHttpGetHttpHeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property scheme: undefined
         */
        readonly scheme?: string | ros.IResolvable;
        /**
         * @Property port: undefined
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property host: undefined
         */
        readonly host?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface PreStopHttpGetHttpHeadersProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface PrintGCProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: boolean | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface PrintGCDateStampsProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: boolean | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface ReadinessProperty {
        /**
         * @Property timeoutSeconds: undefined
         */
        readonly timeoutSeconds?: number | ros.IResolvable;
        /**
         * @Property exec: undefined
         */
        readonly exec?: RosK8sApplication.ReadinessExecProperty | ros.IResolvable;
        /**
         * @Property initialDelaySeconds: undefined
         */
        readonly initialDelaySeconds?: number | ros.IResolvable;
        /**
         * @Property httpGet: undefined
         */
        readonly httpGet?: RosK8sApplication.ReadinessHttpGetProperty | ros.IResolvable;
        /**
         * @Property periodSeconds: undefined
         */
        readonly periodSeconds?: number | ros.IResolvable;
        /**
         * @Property tcpSocket: undefined
         */
        readonly tcpSocket?: RosK8sApplication.ReadinessTcpSocketProperty | ros.IResolvable;
        /**
         * @Property failureThreshold: undefined
         */
        readonly failureThreshold?: number | ros.IResolvable;
        /**
         * @Property successThreshold: undefined
         */
        readonly successThreshold?: number | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface ReadinessExecProperty {
        /**
         * @Property command: undefined
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface ReadinessHttpGetProperty {
        /**
         * @Property path: undefined
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property httpHeaders: undefined
         */
        readonly httpHeaders?: Array<RosK8sApplication.ReadinessHttpGetHttpHeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property scheme: undefined
         */
        readonly scheme?: string | ros.IResolvable;
        /**
         * @Property port: undefined
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property host: undefined
         */
        readonly host?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface ReadinessHttpGetHttpHeadersProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface ReadinessTcpSocketProperty {
        /**
         * @Property port: undefined
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property host: undefined
         */
        readonly host?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface SlsConfigsProperty {
        /**
         * @Property type: The collection type. The file type is file and the standard output type is stdout.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property logDir: If the standard output type is used, the collection path is stdout.log. If the file type is used, the collection path is the path of the collected file. Wildcards(*) are supported. The collection path must match the following regular expression:
     * ^\/( +)\/(. *)^\/$.
         */
        readonly logDir?: string | ros.IResolvable;
        /**
         * @Property logstore: The name of the Logstore. Make sure that the name of the Logstore is unique in the cluster. The name must comply with the following rules:
     * The name can contain only lowercase letters, digits, hyphens (-), and underscores(_). The name must start and end with a lowercase letter or a digit. The name must be 3 to 63 characters in length.
     * If this parameter is empty, the system automatically generates a name.
         */
        readonly logstore?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface SurvivorRatioProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface TcpSocketProperty {
        /**
         * @Property port: undefined
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property host: undefined
         */
        readonly host?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface ThreadStackSizeProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: number | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface UseGCLogFileRotationProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: boolean | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface WebContainerConfigProperty {
        /**
         * @Property httpPort: The port range is from 1024 to 65535. The admin permission is configured for the container, but the root permission is required to perform operations on ports with numbers less than 1024. Therefore, enter a value greater than 1024 within the range. If you do not specify this parameter, 8080 is the default value.
         */
        readonly httpPort?: number | ros.IResolvable;
        /**
         * @Property uriEncoding: The encoding format for Tomcat. Valid values: UTF-8, ISO-8859-1, GBK, and GB2312. If you do not specify this parameter, ISO-8859-1 is the default value.
         */
        readonly uriEncoding?: string | ros.IResolvable;
        /**
         * @Property contextPath: The custom path. This parameter is required only when the ContextInputType parameter is set to custom.
         */
        readonly contextPath?: string | ros.IResolvable;
        /**
         * @Property contextInputType: Specifies whether to customize the access path for the application. Valid values:
     * war: The application access path is the name of the WAR package. You do not need to enter a custom path.
     * root: The application access path is \/. You do not need to enter a custom path.
     * custom: If you select this option, you must set contextPath to a custom path.
         */
        readonly contextInputType?: string | ros.IResolvable;
        /**
         * @Property useBodyEncoding: Specifies whether to use BodyEncoding for URL.
         */
        readonly useBodyEncoding?: boolean | ros.IResolvable;
        /**
         * @Property serverXml: serverXml: The content of the server.xml file customized in advanced configurations.
     * This parameter takes effect only when UseAdvancedServerXml is set to true.
         */
        readonly serverXml?: string | ros.IResolvable;
        /**
         * @Property maxThreads: The number of connections in the connection pool. Default value: 400.
     * Note This parameter greatly affects the application performance. We recommend that you set this parameter under professional guidance.
         */
        readonly maxThreads?: number | ros.IResolvable;
        /**
         * @Property useAdvancedServerXml: Specifies whether to use advanced configurations to customize the server.xml file. When the preceding parameter type and specific parameters cannot meet your requirements, you can use advanced configurations to edit the server.xml file of Tomcat.
         */
        readonly useAdvancedServerXml?: boolean | ros.IResolvable;
        /**
         * @Property useDefaultConfig: Specifies whether to use the custom configuration. The value true indicates that the custom configuration is not used, whereas the value false indicates that the custom configuration is used. If the custom configuration is not used, the following parameters do not take effect.
         */
        readonly useDefaultConfig?: boolean | ros.IResolvable;
    }
}
export declare namespace RosK8sApplication {
    /**
     * @stability external
     */
    interface YoungGarbageCollectorProperty {
        /**
         * @Property original: Indicates the configuration value.
         */
        readonly original?: string | ros.IResolvable;
        /**
         * @Property startup: Indicates a startup parameter.
         */
        readonly startup?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosK8sCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8scluster
 */
export interface RosK8sClusterProps {
    /**
     * @Property csClusterId: The ID of the CS cluster.
     */
    readonly csClusterId: string | ros.IResolvable;
    /**
     * @Property enableAsm: Whether enable ASM.
     */
    readonly enableAsm?: string | ros.IResolvable;
    /**
     * @Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
     */
    readonly namespaceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::K8sCluster`, which is used to create a cluster of Container Service for Kubernetes (ACK).
 * @Note This class does not contain additional functions, so it is recommended to use the `K8sCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8scluster
 */
export declare class RosK8sCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::K8sCluster";
    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute ClusterName: The name of the cluster.
     */
    readonly attrClusterName: ros.IResolvable;
    /**
     * @Attribute ClusterType: The type of the cluster:
2: ECS cluster
5: Container Service K8s cluster or Serverless K8s cluster
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * @Attribute CsClusterId: The ID of the K8s cluster.
     */
    readonly attrCsClusterId: ros.IResolvable;
    /**
     * @Attribute NetworkMode: Network node:
1: Classic network
2: VPC
     */
    readonly attrNetworkMode: ros.IResolvable;
    /**
     * @Attribute NodeNum: Number of nodes.
     */
    readonly attrNodeNum: ros.IResolvable;
    /**
     * @Attribute SubNetCidr: Sub net CIDR.
     */
    readonly attrSubNetCidr: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the cluster.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute VswitchId: The ID of the cluster.
     */
    readonly attrVswitchId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property csClusterId: The ID of the CS cluster.
     */
    csClusterId: string | ros.IResolvable;
    /**
     * @Property enableAsm: Whether enable ASM.
     */
    enableAsm: string | ros.IResolvable | undefined;
    /**
     * @Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
     */
    namespaceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosK8sClusterProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosK8sSlbBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sslbbinding
 */
export interface RosK8sSlbBindingProps {
    /**
     * @Property appId: The ID of the application.
     */
    readonly appId: string | ros.IResolvable;
    /**
     * @Property clusterId: The ID of the cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property servicePortInfos: The information about the ports.
     */
    readonly servicePortInfos: Array<RosK8sSlbBinding.ServicePortInfosProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property type: The type of the SLB instance. Valid values: internet and intranet.
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of the load balancer instance. If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
     */
    readonly loadBalancerId?: string | ros.IResolvable;
    /**
     * @Property scheduler: The scheduling algorithm. Valid values:
     * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
     * rr: Requests are distributed to backend servers in sequence.
     * Default value: rr
     */
    readonly scheduler?: string | ros.IResolvable;
    /**
     * @Property specification: The specification of the load balancer instance.
     */
    readonly specification?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::K8sSlbBinding`, which is used to bind a Server Load Balancer (SLB) instance to an application in a Container Service for Kubernetes (ACK) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `K8sSlbBinding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sslbbinding
 */
export declare class RosK8sSlbBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::K8sSlbBinding";
    /**
     * @Attribute Address: The address of load balancer instance.
     */
    readonly attrAddress: ros.IResolvable;
    /**
     * @Attribute AppId: The ID of the application.
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute ChangeOrderId: The ID of the change process.
     */
    readonly attrChangeOrderId: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The ID of load balancer instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * @Attribute LoadBalancerName: The name of load balancer instance defined in EDAS.
     */
    readonly attrLoadBalancerName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appId: The ID of the application.
     */
    appId: string | ros.IResolvable;
    /**
     * @Property clusterId: The ID of the cluster.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property servicePortInfos: The information about the ports.
     */
    servicePortInfos: Array<RosK8sSlbBinding.ServicePortInfosProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property type: The type of the SLB instance. Valid values: internet and intranet.
     */
    type: string | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of the load balancer instance. If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
     */
    loadBalancerId: string | ros.IResolvable | undefined;
    /**
     * @Property scheduler: The scheduling algorithm. Valid values:
     * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
     * rr: Requests are distributed to backend servers in sequence.
     * Default value: rr
     */
    scheduler: string | ros.IResolvable | undefined;
    /**
     * @Property specification: The specification of the load balancer instance.
     */
    specification: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosK8sSlbBindingProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosK8sSlbBinding {
    /**
     * @stability external
     */
    interface ServicePortInfosProperty {
        /**
         * @Property targetPort: The backend port. Valid values: 1 to 65535.
         */
        readonly targetPort: number | ros.IResolvable;
        /**
         * @Property loadBalancerProtocol: The protocol of load balancer. Valid values: TCP and HTTPS. If the HTTP protocol is used, set this parameter to TCP.
         */
        readonly loadBalancerProtocol: string | ros.IResolvable;
        /**
         * @Property certId: The ID of the certificate. This parameter is required if the HTTPS protocol is used.
         */
        readonly certId?: string | ros.IResolvable;
        /**
         * @Property port: The frontend port. Valid values: 1 to 65535. Each port must be unique.
         */
        readonly port: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosUserDefineRegion`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-userdefineregion
 */
export interface RosUserDefineRegionProps {
    /**
     * @Property regionName: Logical region (or namespace) name
     */
    readonly regionName: string | ros.IResolvable;
    /**
     * @Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier")
     */
    readonly regionTag: string | ros.IResolvable;
    /**
     * @Property debugEnable: Whether debug is enable
     */
    readonly debugEnable?: boolean | ros.IResolvable;
    /**
     * @Property description: Logic region (or namespace) description
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::UserDefineRegion`, which is used to create or edit a custom namespace.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserDefineRegion` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-userdefineregion
 */
export declare class RosUserDefineRegion extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::UserDefineRegion";
    /**
     * @Attribute BelongRegion: Under the physical region ID
     */
    readonly attrBelongRegion: ros.IResolvable;
    /**
     * @Attribute DebugEnable: Whether debug is enable
     */
    readonly attrDebugEnable: ros.IResolvable;
    /**
     * @Attribute Id: Resource ID
     */
    readonly attrId: ros.IResolvable;
    /**
     * @Attribute RegionName: Region name
     */
    readonly attrRegionName: ros.IResolvable;
    /**
     * @Attribute UserId: User account ID
     */
    readonly attrUserId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property regionName: Logical region (or namespace) name
     */
    regionName: string | ros.IResolvable;
    /**
     * @Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier")
     */
    regionTag: string | ros.IResolvable;
    /**
     * @Property debugEnable: Whether debug is enable
     */
    debugEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Logic region (or namespace) description
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserDefineRegionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
