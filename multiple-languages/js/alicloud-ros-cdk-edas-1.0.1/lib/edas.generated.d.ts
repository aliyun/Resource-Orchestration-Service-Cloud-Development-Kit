import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::EDAS::Application`
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
     * Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning:
     * 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
     * 1.7.x
     */
    readonly componentIds?: string | ros.IResolvable;
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
}
/**
 * A ROS template type:  `ALIYUN::EDAS::Application`
 */
export declare class RosApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::Application";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning:
     * 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
     * 1.7.x
     */
    componentIds: string | ros.IResolvable | undefined;
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
     * Create a new `ALIYUN::EDAS::Application`.
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
 * Properties for defining a `ALIYUN::EDAS::Cluster`
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
     * @Property oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
     */
    readonly oversoldFactor?: number | ros.IResolvable;
    /**
     * @Property vpcId: VPC network ID. If network selection VPC, this parameter Required
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::EDAS::Cluster`
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::Cluster";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
     */
    oversoldFactor: number | ros.IResolvable | undefined;
    /**
     * @Property vpcId: VPC network ID. If network selection VPC, this parameter Required
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::EDAS::Cluster`.
     *
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
 * Properties for defining a `ALIYUN::EDAS::ClusterMember`
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
 * A ROS template type:  `ALIYUN::EDAS::ClusterMember`
 */
export declare class RosClusterMember extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::ClusterMember";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
     */
    readonly attrClusterMemberIds: ros.IResolvable;
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
     * Create a new `ALIYUN::EDAS::ClusterMember`.
     *
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
 * Properties for defining a `ALIYUN::EDAS::DeployGroup`
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
 * A ROS template type:  `ALIYUN::EDAS::DeployGroup`
 */
export declare class RosDeployGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::DeployGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::EDAS::DeployGroup`.
     *
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
 * Properties for defining a `ALIYUN::EDAS::UserDefineRegion`
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
 * A ROS template type:  `ALIYUN::EDAS::UserDefineRegion`
 */
export declare class RosUserDefineRegion extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::UserDefineRegion";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::EDAS::UserDefineRegion`.
     *
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
