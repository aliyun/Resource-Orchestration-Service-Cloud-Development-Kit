import * as ros from '@ros-cdk/core';
import { RosApplication } from './edas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApplication as ApplicationProperty };

/**
 * Properties for defining a `ALIYUN::EDAS::Application`
 */
export interface ApplicationProps {

    /**
     * @Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters)
     */
    readonly applicationName: string;

    /**
     * @Property clusterId: Cluster ID of ECS application
     */
    readonly clusterId: string;

    /**
     * @Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition). When creating HSF application, this parameter must be specified
     */
    readonly buildPackId?: number;

    /**
     * @Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo
     * Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning:
     * 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
     * 1.7.x
     */
    readonly componentIds?: string;

    /**
     * @Property description: Descriptive information
     */
    readonly description?: string;

    /**
     * @Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id
     * Interface to obtain).
     */
    readonly ecuInfo?: string;

    /**
     * @Property healthCheckUrl: Application Health Check URL
     */
    readonly healthCheckUrl?: string;

    /**
     * @Property logicalRegionId: Namespace ID
     */
    readonly logicalRegionId?: string;

    /**
     * @Property packageType: Application packet format, possible values: war or jar
     */
    readonly packageType?: string;
}

/**
 * A ROS resource type:  `ALIYUN::EDAS::Application`
 */
export class Application extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute AppId: Application Id, a unique identifier EDAS application
     */
    public readonly attrAppId: any;

    /**
     * @Attribute Port: Application port
     */
    public readonly attrPort: any;

    /**
     * Create a new `ALIYUN::EDAS::Application`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosApplication = new RosApplication(this, id,  {
            componentIds: props.componentIds,
            logicalRegionId: props.logicalRegionId,
            applicationName: props.applicationName,
            description: props.description,
            ecuInfo: props.ecuInfo,
            healthCheckUrl: props.healthCheckUrl,
            clusterId: props.clusterId,
            packageType: props.packageType ? props.packageType : 'war',
            buildPackId: props.buildPackId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApplication;
        this.attrAppId = rosApplication.attrAppId;
        this.attrPort = rosApplication.attrPort;
    }
}
