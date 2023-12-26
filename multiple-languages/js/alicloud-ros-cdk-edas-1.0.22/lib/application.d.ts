import * as ros from '@alicloud/ros-cdk-core';
import { RosApplication } from './edas.generated';
export { RosApplication as ApplicationProperty };
/**
 * Properties for defining a `Application`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-application
 */
export interface ApplicationProps {
    /**
     * Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters)
     */
    readonly applicationName: string | ros.IResolvable;
    /**
     * Property clusterId: Cluster ID of ECS application
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition). When creating HSF application, this parameter must be specified
     */
    readonly buildPackId?: number | ros.IResolvable;
    /**
     * Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo
     * Application required) or standard Java application (jar package format Spring Boot \/ Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning:
     * 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
     * 1.7.x
     */
    readonly componentIds?: string | ros.IResolvable;
    /**
     * Property deployment: Deploy application information to ECS clusters
     */
    readonly deployment?: RosApplication.DeploymentProperty | ros.IResolvable;
    /**
     * Property description: Descriptive information
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id
     * Interface to obtain).
     */
    readonly ecuInfo?: string | ros.IResolvable;
    /**
     * Property healthCheckUrl: Application Health Check URL
     */
    readonly healthCheckUrl?: string | ros.IResolvable;
    /**
     * Property logicalRegionId: Namespace ID
     */
    readonly logicalRegionId?: string | ros.IResolvable;
    /**
     * Property packageType: Application packet format, possible values: war or jar
     */
    readonly packageType?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::Application`, which is used to create an application in an Elastic Compute Service (ECS) cluster in Enterprise Distributed Application Service (EDAS).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-application
 */
export declare class Application extends ros.Resource {
    /**
     * Attribute AppId: Application Id, a unique identifier EDAS application
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * Attribute Port: Application port
     */
    readonly attrPort: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationProps, enableResourcePropertyConstraint?: boolean);
}
