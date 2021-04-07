// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosApplicationProps`
 *
 * @param properties - the TypeScript properties of a `RosApplicationProps`
 *
 * @returns the result of the validation.
 */
function RosApplicationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('componentIds', ros.validateString)(properties.componentIds));
    errors.collect(ros.propertyValidator('logicalRegionId', ros.validateString)(properties.logicalRegionId));
    errors.collect(ros.propertyValidator('applicationName', ros.requiredValidator)(properties.applicationName));
    if(properties.applicationName && (Array.isArray(properties.applicationName) || (typeof properties.applicationName) === 'string')) {
        errors.collect(ros.propertyValidator('applicationName', ros.validateLength)({
            data: properties.applicationName.length,
            min: 1,
            max: 36,
          }));
    }
    errors.collect(ros.propertyValidator('applicationName', ros.validateString)(properties.applicationName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('ecuInfo', ros.validateString)(properties.ecuInfo));
    errors.collect(ros.propertyValidator('healthCheckUrl', ros.validateString)(properties.healthCheckUrl));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if(properties.packageType && (typeof properties.packageType) !== 'object') {
        errors.collect(ros.propertyValidator('packageType', ros.validateAllowedValues)({
          data: properties.packageType,
          allowedValues: ["war","jar"],
        }));
    }
    errors.collect(ros.propertyValidator('packageType', ros.validateString)(properties.packageType));
    errors.collect(ros.propertyValidator('buildPackId', ros.validateNumber)(properties.buildPackId));
    return errors.wrap('supplied properties not correct for "RosApplicationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::Application` resource
 *
 * @param properties - the TypeScript properties of a `RosApplicationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::Application` resource.
 */
// @ts-ignore TS6133
function rosApplicationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApplicationPropsValidator(properties).assertSuccess();
    }
    return {
      ApplicationName: ros.stringToRosTemplate(properties.applicationName),
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      BuildPackId: ros.numberToRosTemplate(properties.buildPackId),
      ComponentIds: ros.stringToRosTemplate(properties.componentIds),
      Description: ros.stringToRosTemplate(properties.description),
      EcuInfo: ros.stringToRosTemplate(properties.ecuInfo),
      HealthCheckURL: ros.stringToRosTemplate(properties.healthCheckUrl),
      LogicalRegionId: ros.stringToRosTemplate(properties.logicalRegionId),
      PackageType: ros.stringToRosTemplate(properties.packageType),
    };
}

/**
 * A ROS template type:  `ALIYUN::EDAS::Application`
 */
export class RosApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::Application";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AppId: Application Id, a unique identifier EDAS application
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * @Attribute Port: Application port
     */
    public readonly attrPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters)
     */
    public applicationName: string | ros.IResolvable;

    /**
     * @Property clusterId: Cluster ID of ECS application
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition). When creating HSF application, this parameter must be specified
     */
    public buildPackId: number | ros.IResolvable | undefined;

    /**
     * @Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo
     * Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning:
     * 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
     * 1.7.x
     */
    public componentIds: string | ros.IResolvable | undefined;

    /**
     * @Property description: Descriptive information
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id
     * Interface to obtain).
     */
    public ecuInfo: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckUrl: Application Health Check URL
     */
    public healthCheckUrl: string | ros.IResolvable | undefined;

    /**
     * @Property logicalRegionId: Namespace ID
     */
    public logicalRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property packageType: Application packet format, possible values: war or jar
     */
    public packageType: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::EDAS::Application`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApplication.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrPort = this.getAtt('Port');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.applicationName = props.applicationName;
        this.clusterId = props.clusterId;
        this.buildPackId = props.buildPackId;
        this.componentIds = props.componentIds;
        this.description = props.description;
        this.ecuInfo = props.ecuInfo;
        this.healthCheckUrl = props.healthCheckUrl;
        this.logicalRegionId = props.logicalRegionId;
        this.packageType = props.packageType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            applicationName: this.applicationName,
            clusterId: this.clusterId,
            buildPackId: this.buildPackId,
            componentIds: this.componentIds,
            description: this.description,
            ecuInfo: this.ecuInfo,
            healthCheckUrl: this.healthCheckUrl,
            logicalRegionId: this.logicalRegionId,
            packageType: this.packageType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApplicationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the result of the validation.
 */
function RosClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logicalRegionId', ros.validateString)(properties.logicalRegionId));
    if(properties.oversoldFactor && (typeof properties.oversoldFactor) !== 'object') {
        errors.collect(ros.propertyValidator('oversoldFactor', ros.validateAllowedValues)({
          data: properties.oversoldFactor,
          allowedValues: [2,4,8],
        }));
    }
    errors.collect(ros.propertyValidator('oversoldFactor', ros.validateNumber)(properties.oversoldFactor));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('clusterName', ros.requiredValidator)(properties.clusterName));
    errors.collect(ros.propertyValidator('clusterName', ros.validateString)(properties.clusterName));
    errors.collect(ros.propertyValidator('networkMode', ros.requiredValidator)(properties.networkMode));
    errors.collect(ros.propertyValidator('networkMode', ros.validateNumber)(properties.networkMode));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    errors.collect(ros.propertyValidator('clusterType', ros.validateNumber)(properties.clusterType));
    return errors.wrap('supplied properties not correct for "RosClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::Cluster` resource.
 */
// @ts-ignore TS6133
function rosClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterName: ros.stringToRosTemplate(properties.clusterName),
      ClusterType: ros.numberToRosTemplate(properties.clusterType),
      NetworkMode: ros.numberToRosTemplate(properties.networkMode),
      LogicalRegionId: ros.stringToRosTemplate(properties.logicalRegionId),
      OversoldFactor: ros.numberToRosTemplate(properties.oversoldFactor),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * A ROS template type:  `ALIYUN::EDAS::Cluster`
 */
export class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::Cluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster ID
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ClusterName: Cluster name
     */
    public readonly attrClusterName: ros.IResolvable;

    /**
     * @Attribute ClusterType: Cluster type
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute IaasProvider: Provider
     */
    public readonly attrIaasProvider: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterName: Cluster name
     */
    public clusterName: string | ros.IResolvable;

    /**
     * @Property clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
     */
    public clusterType: number | ros.IResolvable;

    /**
     * @Property networkMode: Network Type. 1- classic network, 2-VPC
     */
    public networkMode: number | ros.IResolvable;

    /**
     * @Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier)
     */
    public logicalRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
     */
    public oversoldFactor: number | ros.IResolvable | undefined;

    /**
     * @Property vpcId: VPC network ID. If network selection VPC, this parameter Required
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::EDAS::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterName = this.getAtt('ClusterName');
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrIaasProvider = this.getAtt('IaasProvider');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterName = props.clusterName;
        this.clusterType = props.clusterType;
        this.networkMode = props.networkMode;
        this.logicalRegionId = props.logicalRegionId;
        this.oversoldFactor = props.oversoldFactor;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterName: this.clusterName,
            clusterType: this.clusterType,
            networkMode: this.networkMode,
            logicalRegionId: this.logicalRegionId,
            oversoldFactor: this.oversoldFactor,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosClusterMemberProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterMemberProps`
 *
 * @returns the result of the validation.
 */
function RosClusterMemberPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosClusterMemberProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::ClusterMember` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterMemberProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::ClusterMember` resource.
 */
// @ts-ignore TS6133
function rosClusterMemberPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterMemberPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      InstanceIds: ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
      Password: ros.stringToRosTemplate(properties.password),
    };
}

/**
 * A ROS template type:  `ALIYUN::EDAS::ClusterMember`
 */
export class RosClusterMember extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::ClusterMember";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
     */
    public readonly attrClusterMemberIds: ros.IResolvable;

    /**
     * @Attribute InstanceIds: ECS instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: Cluster ID to import ECS instance
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property instanceIds: ECS instance ID list to import.
     */
    public instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property password: Password ECS hosts need to import (ECS settings can continue to use purchased)
     */
    public password: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::EDAS::ClusterMember`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterMemberProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClusterMember.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterMemberIds = this.getAtt('ClusterMemberIds');
        this.attrInstanceIds = this.getAtt('InstanceIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.instanceIds = props.instanceIds;
        this.password = props.password;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            instanceIds: this.instanceIds,
            password: this.password,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterMemberPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosDeployGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosDeployGroupProps`
 *
 * @returns the result of the validation.
 */
function RosDeployGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    if(properties.groupName && (Array.isArray(properties.groupName) || (typeof properties.groupName) === 'string')) {
        errors.collect(ros.propertyValidator('groupName', ros.validateLength)({
            data: properties.groupName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('appId', ros.requiredValidator)(properties.appId));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    return errors.wrap('supplied properties not correct for "RosDeployGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::DeployGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosDeployGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::DeployGroup` resource.
 */
// @ts-ignore TS6133
function rosDeployGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDeployGroupPropsValidator(properties).assertSuccess();
    }
    return {
      AppId: ros.stringToRosTemplate(properties.appId),
      GroupName: ros.stringToRosTemplate(properties.groupName),
    };
}

/**
 * A ROS template type:  `ALIYUN::EDAS::DeployGroup`
 */
export class RosDeployGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::DeployGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AppId: Application ID
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * @Attribute GroupName: Deploy group name
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * @Attribute Id: Deploy group ID
     */
    public readonly attrId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appId: Application ID
     */
    public appId: string | ros.IResolvable;

    /**
     * @Property groupName: Group name, maximum length of 64.
     */
    public groupName: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::EDAS::DeployGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeployGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDeployGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrGroupName = this.getAtt('GroupName');
        this.attrId = this.getAtt('Id');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appId = props.appId;
        this.groupName = props.groupName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appId: this.appId,
            groupName: this.groupName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDeployGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosUserDefineRegionProps`
 *
 * @param properties - the TypeScript properties of a `RosUserDefineRegionProps`
 *
 * @returns the result of the validation.
 */
function RosUserDefineRegionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('regionName', ros.requiredValidator)(properties.regionName));
    errors.collect(ros.propertyValidator('regionName', ros.validateString)(properties.regionName));
    errors.collect(ros.propertyValidator('regionTag', ros.requiredValidator)(properties.regionTag));
    errors.collect(ros.propertyValidator('regionTag', ros.validateString)(properties.regionTag));
    errors.collect(ros.propertyValidator('debugEnable', ros.validateBoolean)(properties.debugEnable));
    return errors.wrap('supplied properties not correct for "RosUserDefineRegionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::UserDefineRegion` resource
 *
 * @param properties - the TypeScript properties of a `RosUserDefineRegionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::UserDefineRegion` resource.
 */
// @ts-ignore TS6133
function rosUserDefineRegionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserDefineRegionPropsValidator(properties).assertSuccess();
    }
    return {
      RegionName: ros.stringToRosTemplate(properties.regionName),
      RegionTag: ros.stringToRosTemplate(properties.regionTag),
      DebugEnable: ros.booleanToRosTemplate(properties.debugEnable),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * A ROS template type:  `ALIYUN::EDAS::UserDefineRegion`
 */
export class RosUserDefineRegion extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::UserDefineRegion";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute BelongRegion: Under the physical region ID
     */
    public readonly attrBelongRegion: ros.IResolvable;

    /**
     * @Attribute DebugEnable: Whether debug is enable
     */
    public readonly attrDebugEnable: ros.IResolvable;

    /**
     * @Attribute Id: Resource ID
     */
    public readonly attrId: ros.IResolvable;

    /**
     * @Attribute RegionName: Region name
     */
    public readonly attrRegionName: ros.IResolvable;

    /**
     * @Attribute UserId: User account ID
     */
    public readonly attrUserId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property regionName: Logical region (or namespace) name
     */
    public regionName: string | ros.IResolvable;

    /**
     * @Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier")
     */
    public regionTag: string | ros.IResolvable;

    /**
     * @Property debugEnable: Whether debug is enable
     */
    public debugEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: Logic region (or namespace) description
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::EDAS::UserDefineRegion`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserDefineRegionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserDefineRegion.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBelongRegion = this.getAtt('BelongRegion');
        this.attrDebugEnable = this.getAtt('DebugEnable');
        this.attrId = this.getAtt('Id');
        this.attrRegionName = this.getAtt('RegionName');
        this.attrUserId = this.getAtt('UserId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.regionName = props.regionName;
        this.regionTag = props.regionTag;
        this.debugEnable = props.debugEnable;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            regionName: this.regionName,
            regionTag: this.regionTag,
            debugEnable: this.debugEnable,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserDefineRegionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
