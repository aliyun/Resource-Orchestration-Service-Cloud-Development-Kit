// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-cluster
 */
export interface RosClusterProps {

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.pro.small.
     */
    readonly clusterSpec?: string | ros.IResolvable;

    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster. 
     * After deletion protection is enabled, the cluster cannot be deleted 
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * @Property ipStack: The IP stack of the cluster.
     */
    readonly ipStack?: string | ros.IResolvable;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;

    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;

    /**
     * @Property loggingType: The logging type of the cluster. By default, no logging service is used.
     */
    readonly loggingType?: string | ros.IResolvable;

    /**
     * @Property maintenanceWindow: The maintenance window of the cluster.
     */
    readonly maintenanceWindow?: RosCluster.MaintenanceWindowProperty | ros.IResolvable;

    /**
     * @Property podVSwitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    readonly podVSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

    /**
     * @Property serviceDiscoveryTypes: Intra-cluster service discovery type,
     * used to specify the service discovery method in the ASK cluster.
     * CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
     * a set of containers needs to be deployed in the cluster for DNS resolution.
     * By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
     * PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
     * the PrivateZone service needs to be enabled.
     * Default value: off
     */
    readonly serviceDiscoveryTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property slsProjectName: The SLS project name of the cluster. If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
     */
    readonly slsProjectName?: string | ros.IResolvable;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;

    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosCluster.TagsProperty[];

    /**
     * @Property timeZone: The time zone of the cluster.
     */
    readonly timeZone?: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property zoneIds: The zone IDs of the cluster.
     */
    readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('kubernetesVersion', ros.validateString)(properties.kubernetesVersion));
    errors.collect(ros.propertyValidator('endpointPublicAccess', ros.validateBoolean)(properties.endpointPublicAccess));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosCluster_AddonsPropertyValidator))(properties.addons));
    errors.collect(ros.propertyValidator('podVSwitchIds', ros.listValidator(ros.validateString))(properties.podVSwitchIds));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('clusterSpec', ros.validateString)(properties.clusterSpec));
    errors.collect(ros.propertyValidator('loggingType', ros.validateString)(properties.loggingType));
    errors.collect(ros.propertyValidator('ipStack', ros.validateString)(properties.ipStack));
    errors.collect(ros.propertyValidator('loadBalancerSpec', ros.validateString)(properties.loadBalancerSpec));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('timeZone', ros.validateString)(properties.timeZone));
    if(properties.serviceDiscoveryTypes && (Array.isArray(properties.serviceDiscoveryTypes) || (typeof properties.serviceDiscoveryTypes) === 'string')) {
        errors.collect(ros.propertyValidator('serviceDiscoveryTypes', ros.validateLength)({
            data: properties.serviceDiscoveryTypes.length,
            min: 1,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('serviceDiscoveryTypes', ros.listValidator(ros.validateString))(properties.serviceDiscoveryTypes));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('slsProjectName', ros.validateString)(properties.slsProjectName));
    errors.collect(ros.propertyValidator('serviceCidr', ros.validateString)(properties.serviceCidr));
    errors.collect(ros.propertyValidator('snatEntry', ros.validateBoolean)(properties.snatEntry));
    if(properties.zoneIds && (Array.isArray(properties.zoneIds) || (typeof properties.zoneIds) === 'string')) {
        errors.collect(ros.propertyValidator('zoneIds', ros.validateLength)({
            data: properties.zoneIds.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('zoneIds', ros.listValidator(ros.validateString))(properties.zoneIds));
    errors.collect(ros.propertyValidator('maintenanceWindow', RosCluster_MaintenanceWindowPropertyValidator)(properties.maintenanceWindow));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosCluster_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ACS::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ACS::Cluster` resource.
 */
// @ts-ignore TS6133
function rosClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'Addons': ros.listMapper(rosClusterAddonsPropertyToRosTemplate)(properties.addons),
      'ClusterSpec': ros.stringToRosTemplate(properties.clusterSpec),
      'DeletionProtection': ros.booleanToRosTemplate(properties.deletionProtection),
      'EndpointPublicAccess': ros.booleanToRosTemplate(properties.endpointPublicAccess),
      'IpStack': ros.stringToRosTemplate(properties.ipStack),
      'KubernetesVersion': ros.stringToRosTemplate(properties.kubernetesVersion),
      'LoadBalancerSpec': ros.stringToRosTemplate(properties.loadBalancerSpec),
      'LoggingType': ros.stringToRosTemplate(properties.loggingType),
      'MaintenanceWindow': rosClusterMaintenanceWindowPropertyToRosTemplate(properties.maintenanceWindow),
      'PodVSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.podVSwitchIds),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'ServiceCidr': ros.stringToRosTemplate(properties.serviceCidr),
      'ServiceDiscoveryTypes': ros.listMapper(ros.stringToRosTemplate)(properties.serviceDiscoveryTypes),
      'SlsProjectName': ros.stringToRosTemplate(properties.slsProjectName),
      'SnatEntry': ros.booleanToRosTemplate(properties.snatEntry),
      'Tags': ros.listMapper(rosClusterTagsPropertyToRosTemplate)(properties.tags),
      'TimeZone': ros.stringToRosTemplate(properties.timeZone),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      'ZoneIds': ros.listMapper(ros.stringToRosTemplate)(properties.zoneIds),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ACS::Cluster`, which is used to create an Alibaba Cloud Container Compute Service (ACS) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-cluster
 */
export class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACS::Cluster";

    /**
     * @Attribute APIServerSLBId: The id of API server SLB
     */
    public readonly attrApiServerSlbId: ros.IResolvable;

    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrDefaultUserKubeConfig: ros.IResolvable;

    /**
     * @Attribute IngressSLBId: The id of ingress SLB
     */
    public readonly attrIngressSlbId: ros.IResolvable;

    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    public readonly attrNodes: ros.IResolvable;

    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrPrivateUserKubConfig: ros.IResolvable;

    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    public readonly attrScalingConfigurationId: ros.IResolvable;

    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    public readonly attrScalingRuleId: ros.IResolvable;

    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    public addons: Array<RosCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.pro.small.
     */
    public clusterSpec: string | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster. 
     * After deletion protection is enabled, the cluster cannot be deleted 
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    public endpointPublicAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property ipStack: The IP stack of the cluster.
     */
    public ipStack: string | ros.IResolvable | undefined;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    public kubernetesVersion: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    public loadBalancerSpec: string | ros.IResolvable | undefined;

    /**
     * @Property loggingType: The logging type of the cluster. By default, no logging service is used.
     */
    public loggingType: string | ros.IResolvable | undefined;

    /**
     * @Property maintenanceWindow: The maintenance window of the cluster.
     */
    public maintenanceWindow: RosCluster.MaintenanceWindowProperty | ros.IResolvable | undefined;

    /**
     * @Property podVSwitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    public podVSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    public serviceCidr: string | ros.IResolvable | undefined;

    /**
     * @Property serviceDiscoveryTypes: Intra-cluster service discovery type,
     * used to specify the service discovery method in the ASK cluster.
     * CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
     * a set of containers needs to be deployed in the cluster for DNS resolution.
     * By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
     * PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
     * the PrivateZone service needs to be enabled.
     * Default value: off
     */
    public serviceDiscoveryTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property slsProjectName: The SLS project name of the cluster. If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
     */
    public slsProjectName: string | ros.IResolvable | undefined;

    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    public snatEntry: boolean | ros.IResolvable | undefined;

    /**
     * @Property tags: Tag the cluster.
     */
    public tags: RosCluster.TagsProperty[] | undefined;

    /**
     * @Property timeZone: The time zone of the cluster.
     */
    public timeZone: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: VPC ID.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    public vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property zoneIds: The zone IDs of the cluster.
     */
    public zoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApiServerSlbId = this.getAtt('APIServerSLBId');
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrDefaultUserKubeConfig = this.getAtt('DefaultUserKubeConfig');
        this.attrIngressSlbId = this.getAtt('IngressSLBId');
        this.attrNodes = this.getAtt('Nodes');
        this.attrPrivateUserKubConfig = this.getAtt('PrivateUserKubConfig');
        this.attrScalingConfigurationId = this.getAtt('ScalingConfigurationId');
        this.attrScalingGroupId = this.getAtt('ScalingGroupId');
        this.attrScalingRuleId = this.getAtt('ScalingRuleId');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrWorkerRamRoleName = this.getAtt('WorkerRamRoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.addons = props.addons;
        this.clusterSpec = props.clusterSpec;
        this.deletionProtection = props.deletionProtection;
        this.endpointPublicAccess = props.endpointPublicAccess;
        this.ipStack = props.ipStack;
        this.kubernetesVersion = props.kubernetesVersion;
        this.loadBalancerSpec = props.loadBalancerSpec;
        this.loggingType = props.loggingType;
        this.maintenanceWindow = props.maintenanceWindow;
        this.podVSwitchIds = props.podVSwitchIds;
        this.resourceGroupId = props.resourceGroupId;
        this.serviceCidr = props.serviceCidr;
        this.serviceDiscoveryTypes = props.serviceDiscoveryTypes;
        this.slsProjectName = props.slsProjectName;
        this.snatEntry = props.snatEntry;
        this.tags = props.tags;
        this.timeZone = props.timeZone;
        this.vpcId = props.vpcId;
        this.vSwitchIds = props.vSwitchIds;
        this.zoneIds = props.zoneIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            addons: this.addons,
            clusterSpec: this.clusterSpec,
            deletionProtection: this.deletionProtection,
            endpointPublicAccess: this.endpointPublicAccess,
            ipStack: this.ipStack,
            kubernetesVersion: this.kubernetesVersion,
            loadBalancerSpec: this.loadBalancerSpec,
            loggingType: this.loggingType,
            maintenanceWindow: this.maintenanceWindow,
            podVSwitchIds: this.podVSwitchIds,
            resourceGroupId: this.resourceGroupId,
            serviceCidr: this.serviceCidr,
            serviceDiscoveryTypes: this.serviceDiscoveryTypes,
            slsProjectName: this.slsProjectName,
            snatEntry: this.snatEntry,
            tags: this.tags,
            timeZone: this.timeZone,
            vpcId: this.vpcId,
            vSwitchIds: this.vSwitchIds,
            zoneIds: this.zoneIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface AddonsProperty {
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: The name of the add-on.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AddonsProperty`
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ACS::Cluster.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ACS::Cluster.Addons` resource.
 */
// @ts-ignore TS6133
function rosClusterAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_AddonsPropertyValidator(properties).assertSuccess();
    return {
      'Config': ros.stringToRosTemplate(properties.config),
      'Disabled': ros.booleanToRosTemplate(properties.disabled),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface MaintenanceWindowProperty {
        /**
         * @Property maintenanceTime: The maintenance time of the maintenance window.
         */
        readonly maintenanceTime?: string | ros.IResolvable;
        /**
         * @Property weeklyPeriod: The weekly period of the maintenance window.
         */
        readonly weeklyPeriod?: string | ros.IResolvable;
        /**
         * @Property enable: Whether to enable the maintenance window.
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property duration: The duration of the maintenance window.
         */
        readonly duration?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MaintenanceWindowProperty`
 *
 * @param properties - the TypeScript properties of a `MaintenanceWindowProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_MaintenanceWindowPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('maintenanceTime', ros.validateString)(properties.maintenanceTime));
    if(properties.weeklyPeriod && (typeof properties.weeklyPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('weeklyPeriod', ros.validateAllowedValues)({
          data: properties.weeklyPeriod,
          allowedValues: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        }));
    }
    errors.collect(ros.propertyValidator('weeklyPeriod', ros.validateString)(properties.weeklyPeriod));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('duration', ros.validateString)(properties.duration));
    return errors.wrap('supplied properties not correct for "MaintenanceWindowProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ACS::Cluster.MaintenanceWindow` resource
 *
 * @param properties - the TypeScript properties of a `MaintenanceWindowProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ACS::Cluster.MaintenanceWindow` resource.
 */
// @ts-ignore TS6133
function rosClusterMaintenanceWindowPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_MaintenanceWindowPropertyValidator(properties).assertSuccess();
    return {
      'MaintenanceTime': ros.stringToRosTemplate(properties.maintenanceTime),
      'WeeklyPeriod': ros.stringToRosTemplate(properties.weeklyPeriod),
      'Enable': ros.booleanToRosTemplate(properties.enable),
      'Duration': ros.stringToRosTemplate(properties.duration),
    };
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ACS::Cluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ACS::Cluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
