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
 * Properties for defining a `ALIYUN::EDAS::K8sApplication`
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
     * @Property localVolume: The configuration for mounting host files to the container where the application is running. For example, the value can be [{"type":"", "nodePath":"/localfiles", "mountPath":"/app/files"}, {"type":"Directory", "nodePath":"/mnt", "mountPath":"/app/storage"}].
     */
    readonly localVolume?: Array<RosK8sApplication.LocalVolumeProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property logicalRegionId: The ID of the EDAS namespace. This parameter is required for a non-default namespace.
     */
    readonly logicalRegionId?: string | ros.IResolvable;

    /**
     * @Property mountDescs: The description of the NAS mounting configuration. For example, the value can be [{"NasPath": "/k8s","MountPath": "/mnt"}, {"NasPath": "/files", "MountPath": "/app/files"}].
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
     * @Property postStart: The post-start script. For example, {"Exec": {"Command": ["ls", "/"]}}.
     */
    readonly postStart?: RosK8sApplication.PostStartProperty | ros.IResolvable;

    /**
     * @Property preStop: The pre-stop script. For example, {"Exec": {"Command": ["ls", "/"]}}.
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
 * Determine whether the given properties match those of a `RosK8sApplicationProps`
 *
 * @param properties - the TypeScript properties of a `RosK8sApplicationProps`
 *
 * @returns the result of the validation.
 */
function RosK8sApplicationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logicalRegionId', ros.validateString)(properties.logicalRegionId));
    errors.collect(ros.propertyValidator('nasId', ros.validateString)(properties.nasId));
    errors.collect(ros.propertyValidator('liveness', RosK8sApplication_LivenessPropertyValidator)(properties.liveness));
    errors.collect(ros.propertyValidator('intranetSlbId', ros.validateString)(properties.intranetSlbId));
    errors.collect(ros.propertyValidator('webContainer', ros.validateString)(properties.webContainer));
    errors.collect(ros.propertyValidator('limitCpu', ros.validateNumber)(properties.limitCpu));
    errors.collect(ros.propertyValidator('slsConfigs', ros.listValidator(RosK8sApplication_SlsConfigsPropertyValidator))(properties.slsConfigs));
    if(properties.intranetSlbProtocol && (typeof properties.intranetSlbProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('intranetSlbProtocol', ros.validateAllowedValues)({
          data: properties.intranetSlbProtocol,
          allowedValues: ["TCP","HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('intranetSlbProtocol', ros.validateString)(properties.intranetSlbProtocol));
    errors.collect(ros.propertyValidator('webContainerConfig', RosK8sApplication_WebContainerConfigPropertyValidator)(properties.webContainerConfig));
    errors.collect(ros.propertyValidator('packageVersion', ros.validateString)(properties.packageVersion));
    errors.collect(ros.propertyValidator('appName', ros.requiredValidator)(properties.appName));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    errors.collect(ros.propertyValidator('jdk', ros.validateString)(properties.jdk));
    errors.collect(ros.propertyValidator('internetSlbId', ros.validateString)(properties.internetSlbId));
    errors.collect(ros.propertyValidator('preStop', RosK8sApplication_PreStopPropertyValidator)(properties.preStop));
    if(properties.internetSlbPort && (typeof properties.internetSlbPort) !== 'object') {
        errors.collect(ros.propertyValidator('internetSlbPort', ros.validateRange)({
            data: properties.internetSlbPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('internetSlbPort', ros.validateNumber)(properties.internetSlbPort));
    errors.collect(ros.propertyValidator('readiness', RosK8sApplication_ReadinessPropertyValidator)(properties.readiness));
    errors.collect(ros.propertyValidator('deployAcrossNodes', ros.validateBoolean)(properties.deployAcrossNodes));
    if(properties.requestsMem && (typeof properties.requestsMem) !== 'object') {
        errors.collect(ros.propertyValidator('requestsMem', ros.validateRange)({
            data: properties.requestsMem,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('requestsMem', ros.validateNumber)(properties.requestsMem));
    errors.collect(ros.propertyValidator('packageType', ros.validateString)(properties.packageType));
    errors.collect(ros.propertyValidator('useBodyEncoding', ros.validateBoolean)(properties.useBodyEncoding));
    errors.collect(ros.propertyValidator('javaStartUpConfig', RosK8sApplication_JavaStartUpConfigPropertyValidator)(properties.javaStartUpConfig));
    errors.collect(ros.propertyValidator('isMultilingualApp', ros.validateBoolean)(properties.isMultilingualApp));
    if(properties.requestsCpu && (typeof properties.requestsCpu) !== 'object') {
        errors.collect(ros.propertyValidator('requestsCpu', ros.validateRange)({
            data: properties.requestsCpu,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('requestsCpu', ros.validateNumber)(properties.requestsCpu));
    errors.collect(ros.propertyValidator('commandArgs', ros.listValidator(RosK8sApplication_CommandArgsPropertyValidator))(properties.commandArgs));
    errors.collect(ros.propertyValidator('storageType', ros.validateString)(properties.storageType));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('envs', ros.listValidator(RosK8sApplication_EnvsPropertyValidator))(properties.envs));
    errors.collect(ros.propertyValidator('imageUrl', ros.validateString)(properties.imageUrl));
    errors.collect(ros.propertyValidator('deployAcrossZones', ros.validateBoolean)(properties.deployAcrossZones));
    errors.collect(ros.propertyValidator('postStart', RosK8sApplication_PostStartPropertyValidator)(properties.postStart));
    if(properties.internetTargetPort && (typeof properties.internetTargetPort) !== 'object') {
        errors.collect(ros.propertyValidator('internetTargetPort', ros.validateRange)({
            data: properties.internetTargetPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('internetTargetPort', ros.validateNumber)(properties.internetTargetPort));
    if(properties.replicas && (typeof properties.replicas) !== 'object') {
        errors.collect(ros.propertyValidator('replicas', ros.validateRange)({
            data: properties.replicas,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('replicas', ros.validateNumber)(properties.replicas));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('applicationDescription', ros.validateString)(properties.applicationDescription));
    errors.collect(ros.propertyValidator('uriEncoding', ros.validateString)(properties.uriEncoding));
    errors.collect(ros.propertyValidator('intranetTargetPort', ros.validateNumber)(properties.intranetTargetPort));
    errors.collect(ros.propertyValidator('mountDescs', ros.listValidator(RosK8sApplication_MountDescsPropertyValidator))(properties.mountDescs));
    errors.collect(ros.propertyValidator('localVolume', ros.listValidator(RosK8sApplication_LocalVolumePropertyValidator))(properties.localVolume));
    errors.collect(ros.propertyValidator('edasContainerVersion', ros.validateString)(properties.edasContainerVersion));
    errors.collect(ros.propertyValidator('runtimeClassName', ros.validateString)(properties.runtimeClassName));
    errors.collect(ros.propertyValidator('command', ros.validateString)(properties.command));
    if(properties.internetSlbProtocol && (typeof properties.internetSlbProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('internetSlbProtocol', ros.validateAllowedValues)({
          data: properties.internetSlbProtocol,
          allowedValues: ["TCP","HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('internetSlbProtocol', ros.validateString)(properties.internetSlbProtocol));
    errors.collect(ros.propertyValidator('packageUrl', ros.validateString)(properties.packageUrl));
    if(properties.intranetSlbPort && (typeof properties.intranetSlbPort) !== 'object') {
        errors.collect(ros.propertyValidator('intranetSlbPort', ros.validateRange)({
            data: properties.intranetSlbPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('intranetSlbPort', ros.validateNumber)(properties.intranetSlbPort));
    errors.collect(ros.propertyValidator('repoId', ros.validateString)(properties.repoId));
    errors.collect(ros.propertyValidator('enableAhas', ros.validateBoolean)(properties.enableAhas));
    if(properties.limitMem && (typeof properties.limitMem) !== 'object') {
        errors.collect(ros.propertyValidator('limitMem', ros.validateRange)({
            data: properties.limitMem,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('limitMem', ros.validateNumber)(properties.limitMem));
    return errors.wrap('supplied properties not correct for "RosK8sApplicationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication` resource
 *
 * @param properties - the TypeScript properties of a `RosK8sApplicationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosK8sApplicationPropsValidator(properties).assertSuccess();
    }
    return {
      AppName: ros.stringToRosTemplate(properties.appName),
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      ApplicationDescription: ros.stringToRosTemplate(properties.applicationDescription),
      Command: ros.stringToRosTemplate(properties.command),
      CommandArgs: ros.listMapper(rosK8sApplicationCommandArgsPropertyToRosTemplate)(properties.commandArgs),
      DeployAcrossNodes: ros.booleanToRosTemplate(properties.deployAcrossNodes),
      DeployAcrossZones: ros.booleanToRosTemplate(properties.deployAcrossZones),
      EdasContainerVersion: ros.stringToRosTemplate(properties.edasContainerVersion),
      EnableAhas: ros.booleanToRosTemplate(properties.enableAhas),
      Envs: ros.listMapper(rosK8sApplicationEnvsPropertyToRosTemplate)(properties.envs),
      ImageUrl: ros.stringToRosTemplate(properties.imageUrl),
      InternetSlbId: ros.stringToRosTemplate(properties.internetSlbId),
      InternetSlbPort: ros.numberToRosTemplate(properties.internetSlbPort),
      InternetSlbProtocol: ros.stringToRosTemplate(properties.internetSlbProtocol),
      InternetTargetPort: ros.numberToRosTemplate(properties.internetTargetPort),
      IntranetSlbId: ros.stringToRosTemplate(properties.intranetSlbId),
      IntranetSlbPort: ros.numberToRosTemplate(properties.intranetSlbPort),
      IntranetSlbProtocol: ros.stringToRosTemplate(properties.intranetSlbProtocol),
      IntranetTargetPort: ros.numberToRosTemplate(properties.intranetTargetPort),
      IsMultilingualApp: ros.booleanToRosTemplate(properties.isMultilingualApp),
      JavaStartUpConfig: rosK8sApplicationJavaStartUpConfigPropertyToRosTemplate(properties.javaStartUpConfig),
      JDK: ros.stringToRosTemplate(properties.jdk),
      LimitCpu: ros.numberToRosTemplate(properties.limitCpu),
      LimitMem: ros.numberToRosTemplate(properties.limitMem),
      Liveness: rosK8sApplicationLivenessPropertyToRosTemplate(properties.liveness),
      LocalVolume: ros.listMapper(rosK8sApplicationLocalVolumePropertyToRosTemplate)(properties.localVolume),
      LogicalRegionId: ros.stringToRosTemplate(properties.logicalRegionId),
      MountDescs: ros.listMapper(rosK8sApplicationMountDescsPropertyToRosTemplate)(properties.mountDescs),
      Namespace: ros.stringToRosTemplate(properties.namespace),
      NasId: ros.stringToRosTemplate(properties.nasId),
      PackageType: ros.stringToRosTemplate(properties.packageType),
      PackageUrl: ros.stringToRosTemplate(properties.packageUrl),
      PackageVersion: ros.stringToRosTemplate(properties.packageVersion),
      PostStart: rosK8sApplicationPostStartPropertyToRosTemplate(properties.postStart),
      PreStop: rosK8sApplicationPreStopPropertyToRosTemplate(properties.preStop),
      Readiness: rosK8sApplicationReadinessPropertyToRosTemplate(properties.readiness),
      Replicas: ros.numberToRosTemplate(properties.replicas),
      RepoId: ros.stringToRosTemplate(properties.repoId),
      RequestsCpu: ros.numberToRosTemplate(properties.requestsCpu),
      RequestsMem: ros.numberToRosTemplate(properties.requestsMem),
      RuntimeClassName: ros.stringToRosTemplate(properties.runtimeClassName),
      SlsConfigs: ros.listMapper(rosK8sApplicationSlsConfigsPropertyToRosTemplate)(properties.slsConfigs),
      StorageType: ros.stringToRosTemplate(properties.storageType),
      Timeout: ros.numberToRosTemplate(properties.timeout),
      UriEncoding: ros.stringToRosTemplate(properties.uriEncoding),
      UseBodyEncoding: ros.booleanToRosTemplate(properties.useBodyEncoding),
      WebContainer: ros.stringToRosTemplate(properties.webContainer),
      WebContainerConfig: rosK8sApplicationWebContainerConfigPropertyToRosTemplate(properties.webContainerConfig),
    };
}

/**
 * A ROS template type:  `ALIYUN::EDAS::K8sApplication`
 */
export class RosK8sApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::K8sApplication";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AppId: The ID of the application.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * @Attribute AppName: The name of the application.
     */
    public readonly attrAppName: ros.IResolvable;

    /**
     * @Attribute ChangeOrderId: The ID of the change process.
     */
    public readonly attrChangeOrderId: ros.IResolvable;

    /**
     * @Attribute ClusterId: The cluster ID of the application.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute CsClusterId: The K8s cluster ID of the application.
     */
    public readonly attrCsClusterId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appName: The name of the application. The name must start with a letter and can contain digits,
     * letters, and hyphens (-). It can be up to 36 characters in length.
     */
    public appName: string | ros.IResolvable;

    /**
     * @Property clusterId: The cluster ID. You can query the cluster ID by calling the ListCluster operation.
     * For more information, see ListCluster.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property applicationDescription: The description of the application.
     */
    public applicationDescription: string | ros.IResolvable | undefined;

    /**
     * @Property command: The command that is specified. If it is specified, it replaces the startup command in the image when the image is started.
     */
    public command: string | ros.IResolvable | undefined;

    /**
     * @Property commandArgs: The collection of commands. For example, [{"argument":"-c"},{"argument":"test"}], where -c and test are two parameters that can be set.
     */
    public commandArgs: Array<RosK8sApplication.CommandArgsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes. The value true indicates yes, whereas other values indicate no.
     */
    public deployAcrossNodes: boolean | ros.IResolvable | undefined;

    /**
     * @Property deployAcrossZones: Specifies whether to distribute application instances to multiple zones. The value true indicates yes, whereas other values indicate no.
     */
    public deployAcrossZones: boolean | ros.IResolvable | undefined;

    /**
     * @Property edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends.
     * Note This parameter is not supported when you deploy an application by using images.
     */
    public edasContainerVersion: string | ros.IResolvable | undefined;

    /**
     * @Property enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS).
     */
    public enableAhas: boolean | ros.IResolvable | undefined;

    /**
     * @Property envs: The collection of deployment environment variables. For example, [{"Name":"x","Value":"y"},{"Name":"x2","Value":"y2"}].
     */
    public envs: Array<RosK8sApplication.EnvsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property imageUrl: The image URL. When PackageType is set to Image, this parameter is required.
     */
    public imageUrl: string | ros.IResolvable | undefined;

    /**
     * @Property internetSlbId: The ID of the Internet-facing SLB instance. If this parameter is not specified, EDAS automatically purchases a new SLB instance for you.
     */
    public internetSlbId: string | ros.IResolvable | undefined;

    /**
     * @Property internetSlbPort: The frontend port of the Internet-facing SLB instance. Valid values: 1 to 65535.
     */
    public internetSlbPort: number | ros.IResolvable | undefined;

    /**
     * @Property internetSlbProtocol: The protocol of the Internet-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
     */
    public internetSlbProtocol: string | ros.IResolvable | undefined;

    /**
     * @Property internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application.
     * Valid values: 1 to 65535.
     */
    public internetTargetPort: number | ros.IResolvable | undefined;

    /**
     * @Property intranetSlbId: The ID of the internal-facing SLB instance. If this parameter is not specified, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
     */
    public intranetSlbId: string | ros.IResolvable | undefined;

    /**
     * @Property intranetSlbPort: The frontend port of the internal-facing SLB instance. Valid values: 1 to 65535.
     */
    public intranetSlbPort: number | ros.IResolvable | undefined;

    /**
     * @Property intranetSlbProtocol: The protocol of the internal-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
     */
    public intranetSlbProtocol: string | ros.IResolvable | undefined;

    /**
     * @Property intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application. Valid values: 1 to 65535.
     */
    public intranetTargetPort: number | ros.IResolvable | undefined;

    /**
     * @Property isMultilingualApp: Specifies whether the application is a multi-language application.
     */
    public isMultilingualApp: boolean | ros.IResolvable | undefined;

    /**
     * @Property javaStartUpConfig: The configuration of Java startup parameters for a Java application. These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Proper parameter settings help reduce the GC overhead, shorten the server response time, and improve the throughput.
     * The system automatically concatenates all startup values as the configuration of Java startup parameters for the application.
     */
    public javaStartUpConfig: RosK8sApplication.JavaStartUpConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends. 
     * Valid values: Open JDK 7 and Open JDK 8. This parameter is not supported when you deploy an application by using images.
     */
    public jdk: string | ros.IResolvable | undefined;

    /**
     * @Property limitCpu: The maximum number of CPUs allowed for each application instance when the application
     * is running. Unit: cores.
     */
    public limitCpu: number | ros.IResolvable | undefined;

    /**
     * @Property limitMem: The maximum amount of memory allowed for each application instance when the application is running. Unit: MB.
     */
    public limitMem: number | ros.IResolvable | undefined;

    /**
     * @Property liveness: The liveness check on the container.
     */
    public liveness: RosK8sApplication.LivenessProperty | ros.IResolvable | undefined;

    /**
     * @Property localVolume: The configuration for mounting host files to the container where the application is running. For example, the value can be [{"type":"", "nodePath":"/localfiles", "mountPath":"/app/files"}, {"type":"Directory", "nodePath":"/mnt", "mountPath":"/app/storage"}].
     */
    public localVolume: Array<RosK8sApplication.LocalVolumeProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property logicalRegionId: The ID of the EDAS namespace. This parameter is required for a non-default namespace.
     */
    public logicalRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property mountDescs: The description of the NAS mounting configuration. For example, the value can be [{"NasPath": "/k8s","MountPath": "/mnt"}, {"NasPath": "/files", "MountPath": "/app/files"}].
     */
    public mountDescs: Array<RosK8sApplication.MountDescsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property namespace: The namespace of the Kubernetes cluster. This parameter determines the Kubernetes namespace where your application is deployed. By default, this parameter is set to default.
     */
    public namespace: string | ros.IResolvable | undefined;

    /**
     * @Property nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running. The NAS file system must be in the same region as the cluster. The NAS file system must have an available mount target, or have a mount
     * target on the vSwitch in the virtual private cloud (VPC) where the application is located. If this parameter is not specified and the mountDescs field exists, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC by default.
     */
    public nasId: string | ros.IResolvable | undefined;

    /**
     * @Property packageType: The type of the deployment package. Valid values: FatJar, WAR, and Image.
     */
    public packageType: string | ros.IResolvable | undefined;

    /**
     * @Property packageUrl: The URL of the deployment package. This parameter must be set for the applications
     * that are deployed by using FatJar or WAR packages.
     * Note The version of SDK for Java or Python must be 2.44.0 or later.
     */
    public packageUrl: string | ros.IResolvable | undefined;

    /**
     * @Property packageVersion: The version of the deployment package. This parameter is required when the PackageType parameter is set to WAR or FatJar. You must specify a version.
     * Note The version of SDK for Java or Python must be 2.44.0 or later.
     */
    public packageVersion: string | ros.IResolvable | undefined;

    /**
     * @Property postStart: The post-start script. For example, {"Exec": {"Command": ["ls", "/"]}}.
     */
    public postStart: RosK8sApplication.PostStartProperty | ros.IResolvable | undefined;

    /**
     * @Property preStop: The pre-stop script. For example, {"Exec": {"Command": ["ls", "/"]}}.
     */
    public preStop: RosK8sApplication.PreStopProperty | ros.IResolvable | undefined;

    /**
     * @Property readiness: The readiness check on the container.
     */
    public readiness: RosK8sApplication.ReadinessProperty | ros.IResolvable | undefined;

    /**
     * @Property replicas: The number of instances for the application that you want to create. Default: 1
     */
    public replicas: number | ros.IResolvable | undefined;

    /**
     * @Property repoId: The ID of the image repository.
     */
    public repoId: string | ros.IResolvable | undefined;

    /**
     * @Property requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created. Unit: cores. The value 0 indicates no limit.
     */
    public requestsCpu: number | ros.IResolvable | undefined;

    /**
     * @Property requestsMem: The maximum amount of memory allowed for each application instance when the application
     * is created. Unit: MB. The value 0 indicates no limit.
     */
    public requestsMem: number | ros.IResolvable | undefined;

    /**
     * @Property runtimeClassName: The type of the container runtime. This parameter is applicable only to clusters that use sandboxed containers.
     */
    public runtimeClassName: string | ros.IResolvable | undefined;

    /**
     * @Property slsConfigs: The Logstore configurations.
     */
    public slsConfigs: Array<RosK8sApplication.SlsConfigsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property storageType: Only SSD is supported.
     */
    public storageType: string | ros.IResolvable | undefined;

    /**
     * @Property timeout: The timeout interval of the change process. Unit: seconds.
     */
    public timeout: number | ros.IResolvable | undefined;

    /**
     * @Property uriEncoding: The uniform resource identifier (URI) encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
     * Note If this parameter is not specified in application configuration, the default URI encoding
     * scheme in the Tomcat container is applied.
     */
    public uriEncoding: string | ros.IResolvable | undefined;

    /**
     * @Property useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled.
     * Note If this parameter is not specified in application configuration, the default value
     * false is applied.
     */
    public useBodyEncoding: boolean | ros.IResolvable | undefined;

    /**
     * @Property webContainer: The version of the Tomcat container on which the deployment package of the application depends. This parameter is applicable to Spring Cloud and Apache Dubbo applications that are deployed by using WAR packages. This parameter is not supported when you deploy an application by using images.
     */
    public webContainer: string | ros.IResolvable | undefined;

    /**
     * @Property webContainerConfig: The Tomcat container configuration.
     */
    public webContainerConfig: RosK8sApplication.WebContainerConfigProperty | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::EDAS::K8sApplication`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosK8sApplicationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosK8sApplication.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrAppName = this.getAtt('AppName');
        this.attrChangeOrderId = this.getAtt('ChangeOrderId');
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrCsClusterId = this.getAtt('CsClusterId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appName = props.appName;
        this.clusterId = props.clusterId;
        this.applicationDescription = props.applicationDescription;
        this.command = props.command;
        this.commandArgs = props.commandArgs;
        this.deployAcrossNodes = props.deployAcrossNodes;
        this.deployAcrossZones = props.deployAcrossZones;
        this.edasContainerVersion = props.edasContainerVersion;
        this.enableAhas = props.enableAhas;
        this.envs = props.envs;
        this.imageUrl = props.imageUrl;
        this.internetSlbId = props.internetSlbId;
        this.internetSlbPort = props.internetSlbPort;
        this.internetSlbProtocol = props.internetSlbProtocol;
        this.internetTargetPort = props.internetTargetPort;
        this.intranetSlbId = props.intranetSlbId;
        this.intranetSlbPort = props.intranetSlbPort;
        this.intranetSlbProtocol = props.intranetSlbProtocol;
        this.intranetTargetPort = props.intranetTargetPort;
        this.isMultilingualApp = props.isMultilingualApp;
        this.javaStartUpConfig = props.javaStartUpConfig;
        this.jdk = props.jdk;
        this.limitCpu = props.limitCpu;
        this.limitMem = props.limitMem;
        this.liveness = props.liveness;
        this.localVolume = props.localVolume;
        this.logicalRegionId = props.logicalRegionId;
        this.mountDescs = props.mountDescs;
        this.namespace = props.namespace;
        this.nasId = props.nasId;
        this.packageType = props.packageType;
        this.packageUrl = props.packageUrl;
        this.packageVersion = props.packageVersion;
        this.postStart = props.postStart;
        this.preStop = props.preStop;
        this.readiness = props.readiness;
        this.replicas = props.replicas;
        this.repoId = props.repoId;
        this.requestsCpu = props.requestsCpu;
        this.requestsMem = props.requestsMem;
        this.runtimeClassName = props.runtimeClassName;
        this.slsConfigs = props.slsConfigs;
        this.storageType = props.storageType;
        this.timeout = props.timeout;
        this.uriEncoding = props.uriEncoding;
        this.useBodyEncoding = props.useBodyEncoding;
        this.webContainer = props.webContainer;
        this.webContainerConfig = props.webContainerConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appName: this.appName,
            clusterId: this.clusterId,
            applicationDescription: this.applicationDescription,
            command: this.command,
            commandArgs: this.commandArgs,
            deployAcrossNodes: this.deployAcrossNodes,
            deployAcrossZones: this.deployAcrossZones,
            edasContainerVersion: this.edasContainerVersion,
            enableAhas: this.enableAhas,
            envs: this.envs,
            imageUrl: this.imageUrl,
            internetSlbId: this.internetSlbId,
            internetSlbPort: this.internetSlbPort,
            internetSlbProtocol: this.internetSlbProtocol,
            internetTargetPort: this.internetTargetPort,
            intranetSlbId: this.intranetSlbId,
            intranetSlbPort: this.intranetSlbPort,
            intranetSlbProtocol: this.intranetSlbProtocol,
            intranetTargetPort: this.intranetTargetPort,
            isMultilingualApp: this.isMultilingualApp,
            javaStartUpConfig: this.javaStartUpConfig,
            jdk: this.jdk,
            limitCpu: this.limitCpu,
            limitMem: this.limitMem,
            liveness: this.liveness,
            localVolume: this.localVolume,
            logicalRegionId: this.logicalRegionId,
            mountDescs: this.mountDescs,
            namespace: this.namespace,
            nasId: this.nasId,
            packageType: this.packageType,
            packageUrl: this.packageUrl,
            packageVersion: this.packageVersion,
            postStart: this.postStart,
            preStop: this.preStop,
            readiness: this.readiness,
            replicas: this.replicas,
            repoId: this.repoId,
            requestsCpu: this.requestsCpu,
            requestsMem: this.requestsMem,
            runtimeClassName: this.runtimeClassName,
            slsConfigs: this.slsConfigs,
            storageType: this.storageType,
            timeout: this.timeout,
            uriEncoding: this.uriEncoding,
            useBodyEncoding: this.useBodyEncoding,
            webContainer: this.webContainer,
            webContainerConfig: this.webContainerConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosK8sApplicationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface CommandArgsProperty {
        /**
         * @Property argument: undefined
         */
        readonly argument?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CommandArgsProperty`
 *
 * @param properties - the TypeScript properties of a `CommandArgsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_CommandArgsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('argument', ros.validateString)(properties.argument));
    return errors.wrap('supplied properties not correct for "CommandArgsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.CommandArgs` resource
 *
 * @param properties - the TypeScript properties of a `CommandArgsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.CommandArgs` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationCommandArgsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_CommandArgsPropertyValidator(properties).assertSuccess();
    return {
      Argument: ros.stringToRosTemplate(properties.argument),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface ConcGCThreadsProperty {
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
/**
 * Determine whether the given properties match those of a `ConcGCThreadsProperty`
 *
 * @param properties - the TypeScript properties of a `ConcGCThreadsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ConcGCThreadsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "ConcGCThreadsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ConcGCThreads` resource
 *
 * @param properties - the TypeScript properties of a `ConcGCThreadsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ConcGCThreads` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationConcGCThreadsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_ConcGCThreadsPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface CustomParamsProperty {
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
 * Determine whether the given properties match those of a `CustomParamsProperty`
 *
 * @param properties - the TypeScript properties of a `CustomParamsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_CustomParamsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateString)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "CustomParamsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.CustomParams` resource
 *
 * @param properties - the TypeScript properties of a `CustomParamsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.CustomParams` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationCustomParamsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_CustomParamsPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.stringToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface EnvsProperty {
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
/**
 * Determine whether the given properties match those of a `EnvsProperty`
 *
 * @param properties - the TypeScript properties of a `EnvsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_EnvsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "EnvsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Envs` resource
 *
 * @param properties - the TypeScript properties of a `EnvsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Envs` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationEnvsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_EnvsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface ExecProperty {
        /**
         * @Property command: undefined
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ExecProperty`
 *
 * @param properties - the TypeScript properties of a `ExecProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ExecPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    return errors.wrap('supplied properties not correct for "ExecProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Exec` resource
 *
 * @param properties - the TypeScript properties of a `ExecProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Exec` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationExecPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_ExecPropertyValidator(properties).assertSuccess();
    return {
      Command: ros.listMapper(ros.stringToRosTemplate)(properties.command),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface G1HeapRegionSizeProperty {
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
/**
 * Determine whether the given properties match those of a `G1HeapRegionSizeProperty`
 *
 * @param properties - the TypeScript properties of a `G1HeapRegionSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_G1HeapRegionSizePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "G1HeapRegionSizeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.G1HeapRegionSize` resource
 *
 * @param properties - the TypeScript properties of a `G1HeapRegionSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.G1HeapRegionSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationG1HeapRegionSizePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_G1HeapRegionSizePropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface GCLogFilePathProperty {
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
 * Determine whether the given properties match those of a `GCLogFilePathProperty`
 *
 * @param properties - the TypeScript properties of a `GCLogFilePathProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_GCLogFilePathPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateString)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "GCLogFilePathProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.GCLogFilePath` resource
 *
 * @param properties - the TypeScript properties of a `GCLogFilePathProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.GCLogFilePath` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationGCLogFilePathPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_GCLogFilePathPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.stringToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface GCLogFileSizeProperty {
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
/**
 * Determine whether the given properties match those of a `GCLogFileSizeProperty`
 *
 * @param properties - the TypeScript properties of a `GCLogFileSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_GCLogFileSizePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "GCLogFileSizeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.GCLogFileSize` resource
 *
 * @param properties - the TypeScript properties of a `GCLogFileSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.GCLogFileSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationGCLogFileSizePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_GCLogFileSizePropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface HeapDumpOnOutOfMemoryErrorProperty {
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
/**
 * Determine whether the given properties match those of a `HeapDumpOnOutOfMemoryErrorProperty`
 *
 * @param properties - the TypeScript properties of a `HeapDumpOnOutOfMemoryErrorProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_HeapDumpOnOutOfMemoryErrorPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateBoolean)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "HeapDumpOnOutOfMemoryErrorProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HeapDumpOnOutOfMemoryError` resource
 *
 * @param properties - the TypeScript properties of a `HeapDumpOnOutOfMemoryErrorProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HeapDumpOnOutOfMemoryError` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationHeapDumpOnOutOfMemoryErrorPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_HeapDumpOnOutOfMemoryErrorPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.booleanToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface HeapDumpPathProperty {
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
 * Determine whether the given properties match those of a `HeapDumpPathProperty`
 *
 * @param properties - the TypeScript properties of a `HeapDumpPathProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_HeapDumpPathPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateString)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "HeapDumpPathProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HeapDumpPath` resource
 *
 * @param properties - the TypeScript properties of a `HeapDumpPathProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HeapDumpPath` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationHeapDumpPathPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_HeapDumpPathPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.stringToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface HttpGetProperty {
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
/**
 * Determine whether the given properties match those of a `HttpGetProperty`
 *
 * @param properties - the TypeScript properties of a `HttpGetProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_HttpGetPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('httpHeaders', ros.listValidator(RosK8sApplication_HttpHeadersPropertyValidator))(properties.httpHeaders));
    if(properties.scheme && (typeof properties.scheme) !== 'object') {
        errors.collect(ros.propertyValidator('scheme', ros.validateAllowedValues)({
          data: properties.scheme,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('scheme', ros.validateString)(properties.scheme));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "HttpGetProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HttpGet` resource
 *
 * @param properties - the TypeScript properties of a `HttpGetProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HttpGet` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationHttpGetPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_HttpGetPropertyValidator(properties).assertSuccess();
    return {
      Path: ros.stringToRosTemplate(properties.path),
      HttpHeaders: ros.listMapper(rosK8sApplicationHttpHeadersPropertyToRosTemplate)(properties.httpHeaders),
      Scheme: ros.stringToRosTemplate(properties.scheme),
      Port: ros.stringToRosTemplate(properties.port),
      Host: ros.stringToRosTemplate(properties.host),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface HttpGetHttpHeadersProperty {
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
/**
 * Determine whether the given properties match those of a `HttpGetHttpHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `HttpGetHttpHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_HttpGetHttpHeadersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "HttpGetHttpHeadersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HttpGetHttpHeaders` resource
 *
 * @param properties - the TypeScript properties of a `HttpGetHttpHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HttpGetHttpHeaders` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationHttpGetHttpHeadersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_HttpGetHttpHeadersPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface HttpHeadersProperty {
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
/**
 * Determine whether the given properties match those of a `HttpHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `HttpHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_HttpHeadersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "HttpHeadersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HttpHeaders` resource
 *
 * @param properties - the TypeScript properties of a `HttpHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.HttpHeaders` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationHttpHeadersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_HttpHeadersPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface InitialHeapSizeProperty {
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
/**
 * Determine whether the given properties match those of a `InitialHeapSizeProperty`
 *
 * @param properties - the TypeScript properties of a `InitialHeapSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_InitialHeapSizePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "InitialHeapSizeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.InitialHeapSize` resource
 *
 * @param properties - the TypeScript properties of a `InitialHeapSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.InitialHeapSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationInitialHeapSizePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_InitialHeapSizePropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface JavaStartUpConfigProperty {
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
         * @Property survivorRatio: Eden/Survivor Memory Size Ratio.
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
         * @Property newRatio: Old/Young Generation Memory Size Ratio.
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
/**
 * Determine whether the given properties match those of a `JavaStartUpConfigProperty`
 *
 * @param properties - the TypeScript properties of a `JavaStartUpConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_JavaStartUpConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('maxHeapSize', RosK8sApplication_MaxHeapSizePropertyValidator)(properties.maxHeapSize));
    errors.collect(ros.propertyValidator('useGcLogFileRotation', RosK8sApplication_UseGCLogFileRotationPropertyValidator)(properties.useGcLogFileRotation));
    errors.collect(ros.propertyValidator('customParams', RosK8sApplication_CustomParamsPropertyValidator)(properties.customParams));
    errors.collect(ros.propertyValidator('parallelGcThreads', RosK8sApplication_ParallelGCThreadsPropertyValidator)(properties.parallelGcThreads));
    errors.collect(ros.propertyValidator('initialHeapSize', RosK8sApplication_InitialHeapSizePropertyValidator)(properties.initialHeapSize));
    errors.collect(ros.propertyValidator('nacosUseEndpointParsingRule', RosK8sApplication_NacosUseEndpointParsingRulePropertyValidator)(properties.nacosUseEndpointParsingRule));
    errors.collect(ros.propertyValidator('threadStackSize', RosK8sApplication_ThreadStackSizePropertyValidator)(properties.threadStackSize));
    errors.collect(ros.propertyValidator('survivorRatio', RosK8sApplication_SurvivorRatioPropertyValidator)(properties.survivorRatio));
    errors.collect(ros.propertyValidator('permSize', RosK8sApplication_PermSizePropertyValidator)(properties.permSize));
    errors.collect(ros.propertyValidator('newSize', RosK8sApplication_NewSizePropertyValidator)(properties.newSize));
    errors.collect(ros.propertyValidator('concGcThreads', RosK8sApplication_ConcGCThreadsPropertyValidator)(properties.concGcThreads));
    errors.collect(ros.propertyValidator('newRatio', RosK8sApplication_NewRatioPropertyValidator)(properties.newRatio));
    errors.collect(ros.propertyValidator('gcLogFileSize', RosK8sApplication_GCLogFileSizePropertyValidator)(properties.gcLogFileSize));
    errors.collect(ros.propertyValidator('maxNewSize', RosK8sApplication_MaxNewSizePropertyValidator)(properties.maxNewSize));
    errors.collect(ros.propertyValidator('g1HeapRegionSize', RosK8sApplication_G1HeapRegionSizePropertyValidator)(properties.g1HeapRegionSize));
    errors.collect(ros.propertyValidator('printGc', RosK8sApplication_PrintGCPropertyValidator)(properties.printGc));
    errors.collect(ros.propertyValidator('maxDirectMemorySize', RosK8sApplication_MaxDirectMemorySizePropertyValidator)(properties.maxDirectMemorySize));
    errors.collect(ros.propertyValidator('maxPermSize', RosK8sApplication_MaxPermSizePropertyValidator)(properties.maxPermSize));
    errors.collect(ros.propertyValidator('heapDumpOnOutOfMemoryError', RosK8sApplication_HeapDumpOnOutOfMemoryErrorPropertyValidator)(properties.heapDumpOnOutOfMemoryError));
    errors.collect(ros.propertyValidator('nacosUseCloudNamespaceParsing', RosK8sApplication_NacosUseCloudNamespaceParsingPropertyValidator)(properties.nacosUseCloudNamespaceParsing));
    errors.collect(ros.propertyValidator('heapDumpPath', RosK8sApplication_HeapDumpPathPropertyValidator)(properties.heapDumpPath));
    errors.collect(ros.propertyValidator('gcLogFilePath', RosK8sApplication_GCLogFilePathPropertyValidator)(properties.gcLogFilePath));
    errors.collect(ros.propertyValidator('printGcDateStamps', RosK8sApplication_PrintGCDateStampsPropertyValidator)(properties.printGcDateStamps));
    errors.collect(ros.propertyValidator('youngGarbageCollector', RosK8sApplication_YoungGarbageCollectorPropertyValidator)(properties.youngGarbageCollector));
    errors.collect(ros.propertyValidator('oldGarbageCollector', RosK8sApplication_OldGarbageCollectorPropertyValidator)(properties.oldGarbageCollector));
    return errors.wrap('supplied properties not correct for "JavaStartUpConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.JavaStartUpConfig` resource
 *
 * @param properties - the TypeScript properties of a `JavaStartUpConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.JavaStartUpConfig` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationJavaStartUpConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_JavaStartUpConfigPropertyValidator(properties).assertSuccess();
    return {
      MaxHeapSize: rosK8sApplicationMaxHeapSizePropertyToRosTemplate(properties.maxHeapSize),
      UseGCLogFileRotation: rosK8sApplicationUseGCLogFileRotationPropertyToRosTemplate(properties.useGcLogFileRotation),
      CustomParams: rosK8sApplicationCustomParamsPropertyToRosTemplate(properties.customParams),
      ParallelGCThreads: rosK8sApplicationParallelGCThreadsPropertyToRosTemplate(properties.parallelGcThreads),
      InitialHeapSize: rosK8sApplicationInitialHeapSizePropertyToRosTemplate(properties.initialHeapSize),
      NacosUseEndpointParsingRule: rosK8sApplicationNacosUseEndpointParsingRulePropertyToRosTemplate(properties.nacosUseEndpointParsingRule),
      ThreadStackSize: rosK8sApplicationThreadStackSizePropertyToRosTemplate(properties.threadStackSize),
      SurvivorRatio: rosK8sApplicationSurvivorRatioPropertyToRosTemplate(properties.survivorRatio),
      PermSize: rosK8sApplicationPermSizePropertyToRosTemplate(properties.permSize),
      NewSize: rosK8sApplicationNewSizePropertyToRosTemplate(properties.newSize),
      ConcGCThreads: rosK8sApplicationConcGCThreadsPropertyToRosTemplate(properties.concGcThreads),
      NewRatio: rosK8sApplicationNewRatioPropertyToRosTemplate(properties.newRatio),
      GCLogFileSize: rosK8sApplicationGCLogFileSizePropertyToRosTemplate(properties.gcLogFileSize),
      MaxNewSize: rosK8sApplicationMaxNewSizePropertyToRosTemplate(properties.maxNewSize),
      G1HeapRegionSize: rosK8sApplicationG1HeapRegionSizePropertyToRosTemplate(properties.g1HeapRegionSize),
      PrintGC: rosK8sApplicationPrintGCPropertyToRosTemplate(properties.printGc),
      MaxDirectMemorySize: rosK8sApplicationMaxDirectMemorySizePropertyToRosTemplate(properties.maxDirectMemorySize),
      MaxPermSize: rosK8sApplicationMaxPermSizePropertyToRosTemplate(properties.maxPermSize),
      HeapDumpOnOutOfMemoryError: rosK8sApplicationHeapDumpOnOutOfMemoryErrorPropertyToRosTemplate(properties.heapDumpOnOutOfMemoryError),
      NacosUseCloudNamespaceParsing: rosK8sApplicationNacosUseCloudNamespaceParsingPropertyToRosTemplate(properties.nacosUseCloudNamespaceParsing),
      HeapDumpPath: rosK8sApplicationHeapDumpPathPropertyToRosTemplate(properties.heapDumpPath),
      GCLogFilePath: rosK8sApplicationGCLogFilePathPropertyToRosTemplate(properties.gcLogFilePath),
      PrintGCDateStamps: rosK8sApplicationPrintGCDateStampsPropertyToRosTemplate(properties.printGcDateStamps),
      YoungGarbageCollector: rosK8sApplicationYoungGarbageCollectorPropertyToRosTemplate(properties.youngGarbageCollector),
      OldGarbageCollector: rosK8sApplicationOldGarbageCollectorPropertyToRosTemplate(properties.oldGarbageCollector),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface LivenessProperty {
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
/**
 * Determine whether the given properties match those of a `LivenessProperty`
 *
 * @param properties - the TypeScript properties of a `LivenessProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_LivenessPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.timeoutSeconds && (typeof properties.timeoutSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateRange)({
            data: properties.timeoutSeconds,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateNumber)(properties.timeoutSeconds));
    errors.collect(ros.propertyValidator('exec', RosK8sApplication_ExecPropertyValidator)(properties.exec));
    if(properties.initialDelaySeconds && (typeof properties.initialDelaySeconds) !== 'object') {
        errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateRange)({
            data: properties.initialDelaySeconds,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateNumber)(properties.initialDelaySeconds));
    errors.collect(ros.propertyValidator('httpGet', RosK8sApplication_HttpGetPropertyValidator)(properties.httpGet));
    if(properties.periodSeconds && (typeof properties.periodSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('periodSeconds', ros.validateRange)({
            data: properties.periodSeconds,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('periodSeconds', ros.validateNumber)(properties.periodSeconds));
    errors.collect(ros.propertyValidator('tcpSocket', RosK8sApplication_TcpSocketPropertyValidator)(properties.tcpSocket));
    if(properties.failureThreshold && (typeof properties.failureThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('failureThreshold', ros.validateRange)({
            data: properties.failureThreshold,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('failureThreshold', ros.validateNumber)(properties.failureThreshold));
    if(properties.successThreshold && (typeof properties.successThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('successThreshold', ros.validateRange)({
            data: properties.successThreshold,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('successThreshold', ros.validateNumber)(properties.successThreshold));
    return errors.wrap('supplied properties not correct for "LivenessProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Liveness` resource
 *
 * @param properties - the TypeScript properties of a `LivenessProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Liveness` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationLivenessPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_LivenessPropertyValidator(properties).assertSuccess();
    return {
      TimeoutSeconds: ros.numberToRosTemplate(properties.timeoutSeconds),
      Exec: rosK8sApplicationExecPropertyToRosTemplate(properties.exec),
      InitialDelaySeconds: ros.numberToRosTemplate(properties.initialDelaySeconds),
      HttpGet: rosK8sApplicationHttpGetPropertyToRosTemplate(properties.httpGet),
      PeriodSeconds: ros.numberToRosTemplate(properties.periodSeconds),
      TcpSocket: rosK8sApplicationTcpSocketPropertyToRosTemplate(properties.tcpSocket),
      FailureThreshold: ros.numberToRosTemplate(properties.failureThreshold),
      SuccessThreshold: ros.numberToRosTemplate(properties.successThreshold),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface LocalVolumeProperty {
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
/**
 * Determine whether the given properties match those of a `LocalVolumeProperty`
 *
 * @param properties - the TypeScript properties of a `LocalVolumeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_LocalVolumePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountPath', ros.validateString)(properties.mountPath));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('nodePath', ros.validateString)(properties.nodePath));
    return errors.wrap('supplied properties not correct for "LocalVolumeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.LocalVolume` resource
 *
 * @param properties - the TypeScript properties of a `LocalVolumeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.LocalVolume` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationLocalVolumePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_LocalVolumePropertyValidator(properties).assertSuccess();
    return {
      MountPath: ros.stringToRosTemplate(properties.mountPath),
      Type: ros.stringToRosTemplate(properties.type),
      NodePath: ros.stringToRosTemplate(properties.nodePath),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface MaxDirectMemorySizeProperty {
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
/**
 * Determine whether the given properties match those of a `MaxDirectMemorySizeProperty`
 *
 * @param properties - the TypeScript properties of a `MaxDirectMemorySizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_MaxDirectMemorySizePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "MaxDirectMemorySizeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxDirectMemorySize` resource
 *
 * @param properties - the TypeScript properties of a `MaxDirectMemorySizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxDirectMemorySize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationMaxDirectMemorySizePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_MaxDirectMemorySizePropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface MaxHeapSizeProperty {
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
/**
 * Determine whether the given properties match those of a `MaxHeapSizeProperty`
 *
 * @param properties - the TypeScript properties of a `MaxHeapSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_MaxHeapSizePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "MaxHeapSizeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxHeapSize` resource
 *
 * @param properties - the TypeScript properties of a `MaxHeapSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxHeapSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationMaxHeapSizePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_MaxHeapSizePropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface MaxNewSizeProperty {
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
/**
 * Determine whether the given properties match those of a `MaxNewSizeProperty`
 *
 * @param properties - the TypeScript properties of a `MaxNewSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_MaxNewSizePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "MaxNewSizeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxNewSize` resource
 *
 * @param properties - the TypeScript properties of a `MaxNewSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxNewSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationMaxNewSizePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_MaxNewSizePropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface MaxPermSizeProperty {
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
/**
 * Determine whether the given properties match those of a `MaxPermSizeProperty`
 *
 * @param properties - the TypeScript properties of a `MaxPermSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_MaxPermSizePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "MaxPermSizeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxPermSize` resource
 *
 * @param properties - the TypeScript properties of a `MaxPermSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MaxPermSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationMaxPermSizePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_MaxPermSizePropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface MountDescsProperty {
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
/**
 * Determine whether the given properties match those of a `MountDescsProperty`
 *
 * @param properties - the TypeScript properties of a `MountDescsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_MountDescsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountPath', ros.validateString)(properties.mountPath));
    errors.collect(ros.propertyValidator('nasPath', ros.validateString)(properties.nasPath));
    return errors.wrap('supplied properties not correct for "MountDescsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MountDescs` resource
 *
 * @param properties - the TypeScript properties of a `MountDescsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.MountDescs` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationMountDescsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_MountDescsPropertyValidator(properties).assertSuccess();
    return {
      MountPath: ros.stringToRosTemplate(properties.mountPath),
      NasPath: ros.stringToRosTemplate(properties.nasPath),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface NacosUseCloudNamespaceParsingProperty {
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
/**
 * Determine whether the given properties match those of a `NacosUseCloudNamespaceParsingProperty`
 *
 * @param properties - the TypeScript properties of a `NacosUseCloudNamespaceParsingProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_NacosUseCloudNamespaceParsingPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateBoolean)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "NacosUseCloudNamespaceParsingProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NacosUseCloudNamespaceParsing` resource
 *
 * @param properties - the TypeScript properties of a `NacosUseCloudNamespaceParsingProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NacosUseCloudNamespaceParsing` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationNacosUseCloudNamespaceParsingPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_NacosUseCloudNamespaceParsingPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.booleanToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface NacosUseEndpointParsingRuleProperty {
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
/**
 * Determine whether the given properties match those of a `NacosUseEndpointParsingRuleProperty`
 *
 * @param properties - the TypeScript properties of a `NacosUseEndpointParsingRuleProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_NacosUseEndpointParsingRulePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateBoolean)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "NacosUseEndpointParsingRuleProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NacosUseEndpointParsingRule` resource
 *
 * @param properties - the TypeScript properties of a `NacosUseEndpointParsingRuleProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NacosUseEndpointParsingRule` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationNacosUseEndpointParsingRulePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_NacosUseEndpointParsingRulePropertyValidator(properties).assertSuccess();
    return {
      Original: ros.booleanToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface NewRatioProperty {
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
/**
 * Determine whether the given properties match those of a `NewRatioProperty`
 *
 * @param properties - the TypeScript properties of a `NewRatioProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_NewRatioPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "NewRatioProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NewRatio` resource
 *
 * @param properties - the TypeScript properties of a `NewRatioProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NewRatio` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationNewRatioPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_NewRatioPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface NewSizeProperty {
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
/**
 * Determine whether the given properties match those of a `NewSizeProperty`
 *
 * @param properties - the TypeScript properties of a `NewSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_NewSizePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "NewSizeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NewSize` resource
 *
 * @param properties - the TypeScript properties of a `NewSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.NewSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationNewSizePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_NewSizePropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface OldGarbageCollectorProperty {
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
 * Determine whether the given properties match those of a `OldGarbageCollectorProperty`
 *
 * @param properties - the TypeScript properties of a `OldGarbageCollectorProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_OldGarbageCollectorPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateString)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "OldGarbageCollectorProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.OldGarbageCollector` resource
 *
 * @param properties - the TypeScript properties of a `OldGarbageCollectorProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.OldGarbageCollector` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationOldGarbageCollectorPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_OldGarbageCollectorPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.stringToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface ParallelGCThreadsProperty {
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
/**
 * Determine whether the given properties match those of a `ParallelGCThreadsProperty`
 *
 * @param properties - the TypeScript properties of a `ParallelGCThreadsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ParallelGCThreadsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "ParallelGCThreadsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ParallelGCThreads` resource
 *
 * @param properties - the TypeScript properties of a `ParallelGCThreadsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ParallelGCThreads` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationParallelGCThreadsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_ParallelGCThreadsPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface PermSizeProperty {
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
/**
 * Determine whether the given properties match those of a `PermSizeProperty`
 *
 * @param properties - the TypeScript properties of a `PermSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PermSizePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "PermSizeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PermSize` resource
 *
 * @param properties - the TypeScript properties of a `PermSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PermSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPermSizePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_PermSizePropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface PostStartProperty {
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
/**
 * Determine whether the given properties match those of a `PostStartProperty`
 *
 * @param properties - the TypeScript properties of a `PostStartProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PostStartPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('exec', RosK8sApplication_PostStartExecPropertyValidator)(properties.exec));
    errors.collect(ros.propertyValidator('httpGet', RosK8sApplication_PostStartHttpGetPropertyValidator)(properties.httpGet));
    return errors.wrap('supplied properties not correct for "PostStartProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PostStart` resource
 *
 * @param properties - the TypeScript properties of a `PostStartProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PostStart` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPostStartPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_PostStartPropertyValidator(properties).assertSuccess();
    return {
      Exec: rosK8sApplicationPostStartExecPropertyToRosTemplate(properties.exec),
      HttpGet: rosK8sApplicationPostStartHttpGetPropertyToRosTemplate(properties.httpGet),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface PostStartExecProperty {
        /**
         * @Property command: undefined
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PostStartExecProperty`
 *
 * @param properties - the TypeScript properties of a `PostStartExecProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PostStartExecPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    return errors.wrap('supplied properties not correct for "PostStartExecProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PostStartExec` resource
 *
 * @param properties - the TypeScript properties of a `PostStartExecProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PostStartExec` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPostStartExecPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_PostStartExecPropertyValidator(properties).assertSuccess();
    return {
      Command: ros.listMapper(ros.stringToRosTemplate)(properties.command),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface PostStartHttpGetProperty {
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
/**
 * Determine whether the given properties match those of a `PostStartHttpGetProperty`
 *
 * @param properties - the TypeScript properties of a `PostStartHttpGetProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PostStartHttpGetPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('httpHeaders', ros.listValidator(RosK8sApplication_HttpGetHttpHeadersPropertyValidator))(properties.httpHeaders));
    if(properties.scheme && (typeof properties.scheme) !== 'object') {
        errors.collect(ros.propertyValidator('scheme', ros.validateAllowedValues)({
          data: properties.scheme,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('scheme', ros.validateString)(properties.scheme));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "PostStartHttpGetProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PostStartHttpGet` resource
 *
 * @param properties - the TypeScript properties of a `PostStartHttpGetProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PostStartHttpGet` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPostStartHttpGetPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_PostStartHttpGetPropertyValidator(properties).assertSuccess();
    return {
      Path: ros.stringToRosTemplate(properties.path),
      HttpHeaders: ros.listMapper(rosK8sApplicationHttpGetHttpHeadersPropertyToRosTemplate)(properties.httpHeaders),
      Scheme: ros.stringToRosTemplate(properties.scheme),
      Port: ros.stringToRosTemplate(properties.port),
      Host: ros.stringToRosTemplate(properties.host),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface PreStopProperty {
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
/**
 * Determine whether the given properties match those of a `PreStopProperty`
 *
 * @param properties - the TypeScript properties of a `PreStopProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PreStopPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('exec', RosK8sApplication_PreStopExecPropertyValidator)(properties.exec));
    errors.collect(ros.propertyValidator('httpGet', RosK8sApplication_PreStopHttpGetPropertyValidator)(properties.httpGet));
    return errors.wrap('supplied properties not correct for "PreStopProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStop` resource
 *
 * @param properties - the TypeScript properties of a `PreStopProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStop` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPreStopPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_PreStopPropertyValidator(properties).assertSuccess();
    return {
      Exec: rosK8sApplicationPreStopExecPropertyToRosTemplate(properties.exec),
      HttpGet: rosK8sApplicationPreStopHttpGetPropertyToRosTemplate(properties.httpGet),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface PreStopExecProperty {
        /**
         * @Property command: undefined
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PreStopExecProperty`
 *
 * @param properties - the TypeScript properties of a `PreStopExecProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PreStopExecPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    return errors.wrap('supplied properties not correct for "PreStopExecProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStopExec` resource
 *
 * @param properties - the TypeScript properties of a `PreStopExecProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStopExec` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPreStopExecPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_PreStopExecPropertyValidator(properties).assertSuccess();
    return {
      Command: ros.listMapper(ros.stringToRosTemplate)(properties.command),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface PreStopHttpGetProperty {
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
/**
 * Determine whether the given properties match those of a `PreStopHttpGetProperty`
 *
 * @param properties - the TypeScript properties of a `PreStopHttpGetProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PreStopHttpGetPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('httpHeaders', ros.listValidator(RosK8sApplication_PreStopHttpGetHttpHeadersPropertyValidator))(properties.httpHeaders));
    if(properties.scheme && (typeof properties.scheme) !== 'object') {
        errors.collect(ros.propertyValidator('scheme', ros.validateAllowedValues)({
          data: properties.scheme,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('scheme', ros.validateString)(properties.scheme));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "PreStopHttpGetProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStopHttpGet` resource
 *
 * @param properties - the TypeScript properties of a `PreStopHttpGetProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStopHttpGet` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPreStopHttpGetPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_PreStopHttpGetPropertyValidator(properties).assertSuccess();
    return {
      Path: ros.stringToRosTemplate(properties.path),
      HttpHeaders: ros.listMapper(rosK8sApplicationPreStopHttpGetHttpHeadersPropertyToRosTemplate)(properties.httpHeaders),
      Scheme: ros.stringToRosTemplate(properties.scheme),
      Port: ros.stringToRosTemplate(properties.port),
      Host: ros.stringToRosTemplate(properties.host),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface PreStopHttpGetHttpHeadersProperty {
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
/**
 * Determine whether the given properties match those of a `PreStopHttpGetHttpHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `PreStopHttpGetHttpHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PreStopHttpGetHttpHeadersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "PreStopHttpGetHttpHeadersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStopHttpGetHttpHeaders` resource
 *
 * @param properties - the TypeScript properties of a `PreStopHttpGetHttpHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PreStopHttpGetHttpHeaders` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPreStopHttpGetHttpHeadersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_PreStopHttpGetHttpHeadersPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface PrintGCProperty {
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
/**
 * Determine whether the given properties match those of a `PrintGCProperty`
 *
 * @param properties - the TypeScript properties of a `PrintGCProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PrintGCPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateBoolean)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "PrintGCProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PrintGC` resource
 *
 * @param properties - the TypeScript properties of a `PrintGCProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PrintGC` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPrintGCPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_PrintGCPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.booleanToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface PrintGCDateStampsProperty {
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
/**
 * Determine whether the given properties match those of a `PrintGCDateStampsProperty`
 *
 * @param properties - the TypeScript properties of a `PrintGCDateStampsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_PrintGCDateStampsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateBoolean)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "PrintGCDateStampsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PrintGCDateStamps` resource
 *
 * @param properties - the TypeScript properties of a `PrintGCDateStampsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.PrintGCDateStamps` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationPrintGCDateStampsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_PrintGCDateStampsPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.booleanToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface ReadinessProperty {
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
/**
 * Determine whether the given properties match those of a `ReadinessProperty`
 *
 * @param properties - the TypeScript properties of a `ReadinessProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ReadinessPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.timeoutSeconds && (typeof properties.timeoutSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateRange)({
            data: properties.timeoutSeconds,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateNumber)(properties.timeoutSeconds));
    errors.collect(ros.propertyValidator('exec', RosK8sApplication_ReadinessExecPropertyValidator)(properties.exec));
    if(properties.initialDelaySeconds && (typeof properties.initialDelaySeconds) !== 'object') {
        errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateRange)({
            data: properties.initialDelaySeconds,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateNumber)(properties.initialDelaySeconds));
    errors.collect(ros.propertyValidator('httpGet', RosK8sApplication_ReadinessHttpGetPropertyValidator)(properties.httpGet));
    if(properties.periodSeconds && (typeof properties.periodSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('periodSeconds', ros.validateRange)({
            data: properties.periodSeconds,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('periodSeconds', ros.validateNumber)(properties.periodSeconds));
    errors.collect(ros.propertyValidator('tcpSocket', RosK8sApplication_ReadinessTcpSocketPropertyValidator)(properties.tcpSocket));
    if(properties.failureThreshold && (typeof properties.failureThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('failureThreshold', ros.validateRange)({
            data: properties.failureThreshold,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('failureThreshold', ros.validateNumber)(properties.failureThreshold));
    if(properties.successThreshold && (typeof properties.successThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('successThreshold', ros.validateRange)({
            data: properties.successThreshold,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('successThreshold', ros.validateNumber)(properties.successThreshold));
    return errors.wrap('supplied properties not correct for "ReadinessProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Readiness` resource
 *
 * @param properties - the TypeScript properties of a `ReadinessProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.Readiness` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationReadinessPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_ReadinessPropertyValidator(properties).assertSuccess();
    return {
      TimeoutSeconds: ros.numberToRosTemplate(properties.timeoutSeconds),
      Exec: rosK8sApplicationReadinessExecPropertyToRosTemplate(properties.exec),
      InitialDelaySeconds: ros.numberToRosTemplate(properties.initialDelaySeconds),
      HttpGet: rosK8sApplicationReadinessHttpGetPropertyToRosTemplate(properties.httpGet),
      PeriodSeconds: ros.numberToRosTemplate(properties.periodSeconds),
      TcpSocket: rosK8sApplicationReadinessTcpSocketPropertyToRosTemplate(properties.tcpSocket),
      FailureThreshold: ros.numberToRosTemplate(properties.failureThreshold),
      SuccessThreshold: ros.numberToRosTemplate(properties.successThreshold),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface ReadinessExecProperty {
        /**
         * @Property command: undefined
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ReadinessExecProperty`
 *
 * @param properties - the TypeScript properties of a `ReadinessExecProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ReadinessExecPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    return errors.wrap('supplied properties not correct for "ReadinessExecProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessExec` resource
 *
 * @param properties - the TypeScript properties of a `ReadinessExecProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessExec` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationReadinessExecPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_ReadinessExecPropertyValidator(properties).assertSuccess();
    return {
      Command: ros.listMapper(ros.stringToRosTemplate)(properties.command),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface ReadinessHttpGetProperty {
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
/**
 * Determine whether the given properties match those of a `ReadinessHttpGetProperty`
 *
 * @param properties - the TypeScript properties of a `ReadinessHttpGetProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ReadinessHttpGetPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('httpHeaders', ros.listValidator(RosK8sApplication_ReadinessHttpGetHttpHeadersPropertyValidator))(properties.httpHeaders));
    if(properties.scheme && (typeof properties.scheme) !== 'object') {
        errors.collect(ros.propertyValidator('scheme', ros.validateAllowedValues)({
          data: properties.scheme,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('scheme', ros.validateString)(properties.scheme));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "ReadinessHttpGetProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessHttpGet` resource
 *
 * @param properties - the TypeScript properties of a `ReadinessHttpGetProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessHttpGet` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationReadinessHttpGetPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_ReadinessHttpGetPropertyValidator(properties).assertSuccess();
    return {
      Path: ros.stringToRosTemplate(properties.path),
      HttpHeaders: ros.listMapper(rosK8sApplicationReadinessHttpGetHttpHeadersPropertyToRosTemplate)(properties.httpHeaders),
      Scheme: ros.stringToRosTemplate(properties.scheme),
      Port: ros.stringToRosTemplate(properties.port),
      Host: ros.stringToRosTemplate(properties.host),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface ReadinessHttpGetHttpHeadersProperty {
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
/**
 * Determine whether the given properties match those of a `ReadinessHttpGetHttpHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `ReadinessHttpGetHttpHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ReadinessHttpGetHttpHeadersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "ReadinessHttpGetHttpHeadersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessHttpGetHttpHeaders` resource
 *
 * @param properties - the TypeScript properties of a `ReadinessHttpGetHttpHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessHttpGetHttpHeaders` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationReadinessHttpGetHttpHeadersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_ReadinessHttpGetHttpHeadersPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface ReadinessTcpSocketProperty {
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
/**
 * Determine whether the given properties match those of a `ReadinessTcpSocketProperty`
 *
 * @param properties - the TypeScript properties of a `ReadinessTcpSocketProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ReadinessTcpSocketPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "ReadinessTcpSocketProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessTcpSocket` resource
 *
 * @param properties - the TypeScript properties of a `ReadinessTcpSocketProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ReadinessTcpSocket` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationReadinessTcpSocketPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_ReadinessTcpSocketPropertyValidator(properties).assertSuccess();
    return {
      Port: ros.stringToRosTemplate(properties.port),
      Host: ros.stringToRosTemplate(properties.host),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface SlsConfigsProperty {
        /**
         * @Property type: The collection type. The file type is file and the standard output type is stdout.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property logDir: If the standard output type is used, the collection path is stdout.log. If the file type is used, the collection path is the path of the collected file. Wildcards(*) are supported. The collection path must match the following regular expression:
     * ^/( +)/(. *)^/$.
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
/**
 * Determine whether the given properties match those of a `SlsConfigsProperty`
 *
 * @param properties - the TypeScript properties of a `SlsConfigsProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_SlsConfigsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["file","stdout"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('logDir', ros.validateString)(properties.logDir));
    errors.collect(ros.propertyValidator('logstore', ros.validateString)(properties.logstore));
    return errors.wrap('supplied properties not correct for "SlsConfigsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.SlsConfigs` resource
 *
 * @param properties - the TypeScript properties of a `SlsConfigsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.SlsConfigs` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationSlsConfigsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_SlsConfigsPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      LogDir: ros.stringToRosTemplate(properties.logDir),
      Logstore: ros.stringToRosTemplate(properties.logstore),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface SurvivorRatioProperty {
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
/**
 * Determine whether the given properties match those of a `SurvivorRatioProperty`
 *
 * @param properties - the TypeScript properties of a `SurvivorRatioProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_SurvivorRatioPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "SurvivorRatioProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.SurvivorRatio` resource
 *
 * @param properties - the TypeScript properties of a `SurvivorRatioProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.SurvivorRatio` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationSurvivorRatioPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_SurvivorRatioPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface TcpSocketProperty {
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
/**
 * Determine whether the given properties match those of a `TcpSocketProperty`
 *
 * @param properties - the TypeScript properties of a `TcpSocketProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_TcpSocketPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "TcpSocketProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.TcpSocket` resource
 *
 * @param properties - the TypeScript properties of a `TcpSocketProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.TcpSocket` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationTcpSocketPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_TcpSocketPropertyValidator(properties).assertSuccess();
    return {
      Port: ros.stringToRosTemplate(properties.port),
      Host: ros.stringToRosTemplate(properties.host),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface ThreadStackSizeProperty {
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
/**
 * Determine whether the given properties match those of a `ThreadStackSizeProperty`
 *
 * @param properties - the TypeScript properties of a `ThreadStackSizeProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_ThreadStackSizePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateNumber)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "ThreadStackSizeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ThreadStackSize` resource
 *
 * @param properties - the TypeScript properties of a `ThreadStackSizeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.ThreadStackSize` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationThreadStackSizePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_ThreadStackSizePropertyValidator(properties).assertSuccess();
    return {
      Original: ros.numberToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface UseGCLogFileRotationProperty {
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
/**
 * Determine whether the given properties match those of a `UseGCLogFileRotationProperty`
 *
 * @param properties - the TypeScript properties of a `UseGCLogFileRotationProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_UseGCLogFileRotationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateBoolean)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "UseGCLogFileRotationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.UseGCLogFileRotation` resource
 *
 * @param properties - the TypeScript properties of a `UseGCLogFileRotationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.UseGCLogFileRotation` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationUseGCLogFileRotationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_UseGCLogFileRotationPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.booleanToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface WebContainerConfigProperty {
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
     * root: The application access path is /. You do not need to enter a custom path.
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
/**
 * Determine whether the given properties match those of a `WebContainerConfigProperty`
 *
 * @param properties - the TypeScript properties of a `WebContainerConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_WebContainerConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.httpPort && (typeof properties.httpPort) !== 'object') {
        errors.collect(ros.propertyValidator('httpPort', ros.validateRange)({
            data: properties.httpPort,
            min: 1024,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('httpPort', ros.validateNumber)(properties.httpPort));
    errors.collect(ros.propertyValidator('uriEncoding', ros.validateString)(properties.uriEncoding));
    errors.collect(ros.propertyValidator('contextPath', ros.validateString)(properties.contextPath));
    errors.collect(ros.propertyValidator('contextInputType', ros.validateString)(properties.contextInputType));
    errors.collect(ros.propertyValidator('useBodyEncoding', ros.validateBoolean)(properties.useBodyEncoding));
    errors.collect(ros.propertyValidator('serverXml', ros.validateString)(properties.serverXml));
    errors.collect(ros.propertyValidator('maxThreads', ros.validateNumber)(properties.maxThreads));
    errors.collect(ros.propertyValidator('useAdvancedServerXml', ros.validateBoolean)(properties.useAdvancedServerXml));
    errors.collect(ros.propertyValidator('useDefaultConfig', ros.validateBoolean)(properties.useDefaultConfig));
    return errors.wrap('supplied properties not correct for "WebContainerConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.WebContainerConfig` resource
 *
 * @param properties - the TypeScript properties of a `WebContainerConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.WebContainerConfig` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationWebContainerConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_WebContainerConfigPropertyValidator(properties).assertSuccess();
    return {
      HttpPort: ros.numberToRosTemplate(properties.httpPort),
      UriEncoding: ros.stringToRosTemplate(properties.uriEncoding),
      ContextPath: ros.stringToRosTemplate(properties.contextPath),
      ContextInputType: ros.stringToRosTemplate(properties.contextInputType),
      UseBodyEncoding: ros.booleanToRosTemplate(properties.useBodyEncoding),
      ServerXml: ros.stringToRosTemplate(properties.serverXml),
      MaxThreads: ros.numberToRosTemplate(properties.maxThreads),
      UseAdvancedServerXml: ros.booleanToRosTemplate(properties.useAdvancedServerXml),
      UseDefaultConfig: ros.booleanToRosTemplate(properties.useDefaultConfig),
    };
}

export namespace RosK8sApplication {
    /**
     * @stability external
     */
    export interface YoungGarbageCollectorProperty {
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
 * Determine whether the given properties match those of a `YoungGarbageCollectorProperty`
 *
 * @param properties - the TypeScript properties of a `YoungGarbageCollectorProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sApplication_YoungGarbageCollectorPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('original', ros.validateString)(properties.original));
    errors.collect(ros.propertyValidator('startup', ros.validateString)(properties.startup));
    return errors.wrap('supplied properties not correct for "YoungGarbageCollectorProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.YoungGarbageCollector` resource
 *
 * @param properties - the TypeScript properties of a `YoungGarbageCollectorProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sApplication.YoungGarbageCollector` resource.
 */
// @ts-ignore TS6133
function rosK8sApplicationYoungGarbageCollectorPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sApplication_YoungGarbageCollectorPropertyValidator(properties).assertSuccess();
    return {
      Original: ros.stringToRosTemplate(properties.original),
      Startup: ros.stringToRosTemplate(properties.startup),
    };
}

/**
 * Properties for defining a `ALIYUN::EDAS::K8sCluster`
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
 * Determine whether the given properties match those of a `RosK8sClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosK8sClusterProps`
 *
 * @returns the result of the validation.
 */
function RosK8sClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableAsm', ros.validateString)(properties.enableAsm));
    errors.collect(ros.propertyValidator('namespaceId', ros.validateString)(properties.namespaceId));
    errors.collect(ros.propertyValidator('csClusterId', ros.requiredValidator)(properties.csClusterId));
    errors.collect(ros.propertyValidator('csClusterId', ros.validateString)(properties.csClusterId));
    return errors.wrap('supplied properties not correct for "RosK8sClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosK8sClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sCluster` resource.
 */
// @ts-ignore TS6133
function rosK8sClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosK8sClusterPropsValidator(properties).assertSuccess();
    }
    return {
      CsClusterId: ros.stringToRosTemplate(properties.csClusterId),
      EnableAsm: ros.stringToRosTemplate(properties.enableAsm),
      NamespaceId: ros.stringToRosTemplate(properties.namespaceId),
    };
}

/**
 * A ROS template type:  `ALIYUN::EDAS::K8sCluster`
 */
export class RosK8sCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::K8sCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ClusterName: The name of the cluster.
     */
    public readonly attrClusterName: ros.IResolvable;

    /**
     * @Attribute ClusterType: The type of the cluster:
2: ECS cluster
5: Container Service K8s cluster or Serverless K8s cluster
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute CsClusterId: The ID of the K8s cluster.
     */
    public readonly attrCsClusterId: ros.IResolvable;

    /**
     * @Attribute NetworkMode: Network node:
1: Classic network
2: VPC
     */
    public readonly attrNetworkMode: ros.IResolvable;

    /**
     * @Attribute NodeNum: Number of nodes.
     */
    public readonly attrNodeNum: ros.IResolvable;

    /**
     * @Attribute SubNetCidr: Sub net CIDR.
     */
    public readonly attrSubNetCidr: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the cluster.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute VswitchId: The ID of the cluster.
     */
    public readonly attrVswitchId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property csClusterId: The ID of the CS cluster.
     */
    public csClusterId: string | ros.IResolvable;

    /**
     * @Property enableAsm: Whether enable ASM.
     */
    public enableAsm: string | ros.IResolvable | undefined;

    /**
     * @Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
     */
    public namespaceId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::EDAS::K8sCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosK8sClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosK8sCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterName = this.getAtt('ClusterName');
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrCsClusterId = this.getAtt('CsClusterId');
        this.attrNetworkMode = this.getAtt('NetworkMode');
        this.attrNodeNum = this.getAtt('NodeNum');
        this.attrSubNetCidr = this.getAtt('SubNetCidr');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrVswitchId = this.getAtt('VswitchId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.csClusterId = props.csClusterId;
        this.enableAsm = props.enableAsm;
        this.namespaceId = props.namespaceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            csClusterId: this.csClusterId,
            enableAsm: this.enableAsm,
            namespaceId: this.namespaceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosK8sClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::EDAS::K8sSlbBinding`
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
 * Determine whether the given properties match those of a `RosK8sSlbBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosK8sSlbBindingProps`
 *
 * @returns the result of the validation.
 */
function RosK8sSlbBindingPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["internet","intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('appId', ros.requiredValidator)(properties.appId));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('scheduler', ros.validateString)(properties.scheduler));
    errors.collect(ros.propertyValidator('specification', ros.validateString)(properties.specification));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('servicePortInfos', ros.requiredValidator)(properties.servicePortInfos));
    if(properties.servicePortInfos && (Array.isArray(properties.servicePortInfos) || (typeof properties.servicePortInfos) === 'string')) {
        errors.collect(ros.propertyValidator('servicePortInfos', ros.validateLength)({
            data: properties.servicePortInfos.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('servicePortInfos', ros.listValidator(RosK8sSlbBinding_ServicePortInfosPropertyValidator))(properties.servicePortInfos));
    return errors.wrap('supplied properties not correct for "RosK8sSlbBindingProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sSlbBinding` resource
 *
 * @param properties - the TypeScript properties of a `RosK8sSlbBindingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sSlbBinding` resource.
 */
// @ts-ignore TS6133
function rosK8sSlbBindingPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosK8sSlbBindingPropsValidator(properties).assertSuccess();
    }
    return {
      AppId: ros.stringToRosTemplate(properties.appId),
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      ServicePortInfos: ros.listMapper(rosK8sSlbBindingServicePortInfosPropertyToRosTemplate)(properties.servicePortInfos),
      Type: ros.stringToRosTemplate(properties.type),
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      Scheduler: ros.stringToRosTemplate(properties.scheduler),
      Specification: ros.stringToRosTemplate(properties.specification),
    };
}

/**
 * A ROS template type:  `ALIYUN::EDAS::K8sSlbBinding`
 */
export class RosK8sSlbBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EDAS::K8sSlbBinding";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Address: The address of load balancer instance.
     */
    public readonly attrAddress: ros.IResolvable;

    /**
     * @Attribute AppId: The ID of the application.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * @Attribute ChangeOrderId: The ID of the change process.
     */
    public readonly attrChangeOrderId: ros.IResolvable;

    /**
     * @Attribute LoadBalancerId: The ID of load balancer instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * @Attribute LoadBalancerName: The name of load balancer instance defined in EDAS.
     */
    public readonly attrLoadBalancerName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appId: The ID of the application.
     */
    public appId: string | ros.IResolvable;

    /**
     * @Property clusterId: The ID of the cluster.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property servicePortInfos: The information about the ports.
     */
    public servicePortInfos: Array<RosK8sSlbBinding.ServicePortInfosProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property type: The type of the SLB instance. Valid values: internet and intranet.
     */
    public type: string | ros.IResolvable;

    /**
     * @Property loadBalancerId: The ID of the load balancer instance. If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
     */
    public loadBalancerId: string | ros.IResolvable | undefined;

    /**
     * @Property scheduler: The scheduling algorithm. Valid values: 
     * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
     * rr: Requests are distributed to backend servers in sequence.
     * Default value: rr
     */
    public scheduler: string | ros.IResolvable | undefined;

    /**
     * @Property specification: The specification of the load balancer instance.
     */
    public specification: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::EDAS::K8sSlbBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosK8sSlbBindingProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosK8sSlbBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddress = this.getAtt('Address');
        this.attrAppId = this.getAtt('AppId');
        this.attrChangeOrderId = this.getAtt('ChangeOrderId');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');
        this.attrLoadBalancerName = this.getAtt('LoadBalancerName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appId = props.appId;
        this.clusterId = props.clusterId;
        this.servicePortInfos = props.servicePortInfos;
        this.type = props.type;
        this.loadBalancerId = props.loadBalancerId;
        this.scheduler = props.scheduler;
        this.specification = props.specification;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appId: this.appId,
            clusterId: this.clusterId,
            servicePortInfos: this.servicePortInfos,
            type: this.type,
            loadBalancerId: this.loadBalancerId,
            scheduler: this.scheduler,
            specification: this.specification,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosK8sSlbBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosK8sSlbBinding {
    /**
     * @stability external
     */
    export interface ServicePortInfosProperty {
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
 * Determine whether the given properties match those of a `ServicePortInfosProperty`
 *
 * @param properties - the TypeScript properties of a `ServicePortInfosProperty`
 *
 * @returns the result of the validation.
 */
function RosK8sSlbBinding_ServicePortInfosPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('targetPort', ros.requiredValidator)(properties.targetPort));
    if(properties.targetPort && (typeof properties.targetPort) !== 'object') {
        errors.collect(ros.propertyValidator('targetPort', ros.validateRange)({
            data: properties.targetPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('targetPort', ros.validateNumber)(properties.targetPort));
    errors.collect(ros.propertyValidator('loadBalancerProtocol', ros.requiredValidator)(properties.loadBalancerProtocol));
    if(properties.loadBalancerProtocol && (typeof properties.loadBalancerProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('loadBalancerProtocol', ros.validateAllowedValues)({
          data: properties.loadBalancerProtocol,
          allowedValues: ["TCP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('loadBalancerProtocol', ros.validateString)(properties.loadBalancerProtocol));
    errors.collect(ros.propertyValidator('certId', ros.validateString)(properties.certId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    return errors.wrap('supplied properties not correct for "ServicePortInfosProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sSlbBinding.ServicePortInfos` resource
 *
 * @param properties - the TypeScript properties of a `ServicePortInfosProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EDAS::K8sSlbBinding.ServicePortInfos` resource.
 */
// @ts-ignore TS6133
function rosK8sSlbBindingServicePortInfosPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosK8sSlbBinding_ServicePortInfosPropertyValidator(properties).assertSuccess();
    return {
      TargetPort: ros.numberToRosTemplate(properties.targetPort),
      LoadBalancerProtocol: ros.stringToRosTemplate(properties.loadBalancerProtocol),
      CertId: ros.stringToRosTemplate(properties.certId),
      Port: ros.numberToRosTemplate(properties.port),
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
