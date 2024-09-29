// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosASKCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-askcluster
 */
export interface RosASKClusterProps {

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosASKCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.pro.small.
     */
    readonly clusterSpec?: string | ros.IResolvable;

    /**
     * @Property deleteOptions: Delete options, only work for deleting resource.
     */
    readonly deleteOptions?: Array<RosASKCluster.DeleteOptionsProperty | ros.IResolvable> | ros.IResolvable;

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
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default value: true.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;

    /**
     * @Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    readonly privateZone?: boolean | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;

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
    readonly tags?: RosASKCluster.TagsProperty[];

    /**
     * @Property timeZone: The time zone used by the cluster..
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
     * @Property zoneId: The zone ID.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosASKClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosASKClusterProps`
 *
 * @returns the result of the validation.
 */
function RosASKClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('kubernetesVersion', ros.validateString)(properties.kubernetesVersion));
    errors.collect(ros.propertyValidator('endpointPublicAccess', ros.validateBoolean)(properties.endpointPublicAccess));
    errors.collect(ros.propertyValidator('deleteOptions', ros.listValidator(RosASKCluster_DeleteOptionsPropertyValidator))(properties.deleteOptions));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosASKCluster_AddonsPropertyValidator))(properties.addons));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('clusterSpec', ros.validateString)(properties.clusterSpec));
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
    errors.collect(ros.propertyValidator('serviceCidr', ros.validateString)(properties.serviceCidr));
    errors.collect(ros.propertyValidator('snatEntry', ros.validateBoolean)(properties.snatEntry));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosASKCluster_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('privateZone', ros.validateBoolean)(properties.privateZone));
    return errors.wrap('supplied properties not correct for "RosASKClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ASKCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosASKClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ASKCluster` resource.
 */
// @ts-ignore TS6133
function rosASKClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosASKClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'Addons': ros.listMapper(rosASKClusterAddonsPropertyToRosTemplate)(properties.addons),
      'ClusterSpec': ros.stringToRosTemplate(properties.clusterSpec),
      'DeleteOptions': ros.listMapper(rosASKClusterDeleteOptionsPropertyToRosTemplate)(properties.deleteOptions),
      'DeletionProtection': ros.booleanToRosTemplate(properties.deletionProtection),
      'EndpointPublicAccess': ros.booleanToRosTemplate(properties.endpointPublicAccess),
      'KubernetesVersion': ros.stringToRosTemplate(properties.kubernetesVersion),
      'PrivateZone': ros.booleanToRosTemplate(properties.privateZone),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'ServiceCidr': ros.stringToRosTemplate(properties.serviceCidr),
      'ServiceDiscoveryTypes': ros.listMapper(ros.stringToRosTemplate)(properties.serviceDiscoveryTypes),
      'SnatEntry': ros.booleanToRosTemplate(properties.snatEntry),
      'Tags': ros.listMapper(rosASKClusterTagsPropertyToRosTemplate)(properties.tags),
      'TimeZone': ros.stringToRosTemplate(properties.timeZone),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ASKCluster`, which is used to create a serverless Kubernetes (ASK) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ASKCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-askcluster
 */
export class RosASKCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ASKCluster";

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
    public addons: Array<RosASKCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.pro.small.
     */
    public clusterSpec: string | ros.IResolvable | undefined;

    /**
     * @Property deleteOptions: Delete options, only work for deleting resource.
     */
    public deleteOptions: Array<RosASKCluster.DeleteOptionsProperty | ros.IResolvable> | ros.IResolvable | undefined;

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
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default value: true.
     */
    public endpointPublicAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    public kubernetesVersion: string | ros.IResolvable | undefined;

    /**
     * @Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    public privateZone: boolean | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

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
    public tags: RosASKCluster.TagsProperty[] | undefined;

    /**
     * @Property timeZone: The time zone used by the cluster..
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
     * @Property zoneId: The zone ID.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosASKClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosASKCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
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
        this.deleteOptions = props.deleteOptions;
        this.deletionProtection = props.deletionProtection;
        this.endpointPublicAccess = props.endpointPublicAccess;
        this.kubernetesVersion = props.kubernetesVersion;
        this.privateZone = props.privateZone;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.serviceCidr = props.serviceCidr;
        this.serviceDiscoveryTypes = props.serviceDiscoveryTypes;
        this.snatEntry = props.snatEntry;
        this.tags = props.tags;
        this.timeZone = props.timeZone;
        this.vpcId = props.vpcId;
        this.vSwitchIds = props.vSwitchIds;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            addons: this.addons,
            clusterSpec: this.clusterSpec,
            deleteOptions: this.deleteOptions,
            deletionProtection: this.deletionProtection,
            endpointPublicAccess: this.endpointPublicAccess,
            kubernetesVersion: this.kubernetesVersion,
            privateZone: this.privateZone,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            serviceCidr: this.serviceCidr,
            serviceDiscoveryTypes: this.serviceDiscoveryTypes,
            snatEntry: this.snatEntry,
            tags: this.tags,
            timeZone: this.timeZone,
            vpcId: this.vpcId,
            vSwitchIds: this.vSwitchIds,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosASKClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosASKCluster {
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
function RosASKCluster_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ASKCluster.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ASKCluster.Addons` resource.
 */
// @ts-ignore TS6133
function rosASKClusterAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosASKCluster_AddonsPropertyValidator(properties).assertSuccess();
    return {
      'Config': ros.stringToRosTemplate(properties.config),
      'Disabled': ros.booleanToRosTemplate(properties.disabled),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosASKCluster {
    /**
     * @stability external
     */
    export interface DeleteOptionsProperty {
        /**
         * @Property deleteMode: Deletion policy of this type of resource. The value can be:
     * - delete: delete the resource.
     * - retain: retain the resource.
         */
        readonly deleteMode?: string | ros.IResolvable;
        /**
         * @Property resourceType: Resource type. The value can be:
     * - SLB: SLB resource created by service. It is deleted by default but can be retained
     * - ALB: ALB Ingress Controller Created ALB resource. It is reserved by default and can be deleted
     * - SLS_Data: log service Project used by the cluster log function. This service is reserved by default and can be deleted
     * - SLS_ControlPlane: Project log service used for logs of the managed cluster control plane. This service is reserved by default and can be deleted
     * - PrivateZone: ACK Serverless PrivateZone resource created in the cluster. It is reserved by default and can be deleted
     *
         */
        readonly resourceType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DeleteOptionsProperty`
 *
 * @param properties - the TypeScript properties of a `DeleteOptionsProperty`
 *
 * @returns the result of the validation.
 */
function RosASKCluster_DeleteOptionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.deleteMode && (typeof properties.deleteMode) !== 'object') {
        errors.collect(ros.propertyValidator('deleteMode', ros.validateAllowedValues)({
          data: properties.deleteMode,
          allowedValues: ["delete","retain"],
        }));
    }
    errors.collect(ros.propertyValidator('deleteMode', ros.validateString)(properties.deleteMode));
    if(properties.resourceType && (typeof properties.resourceType) !== 'object') {
        errors.collect(ros.propertyValidator('resourceType', ros.validateAllowedValues)({
          data: properties.resourceType,
          allowedValues: ["SLB","ALB","SLS_Data","SLS_ControlPlane","PrivateZone"],
        }));
    }
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    return errors.wrap('supplied properties not correct for "DeleteOptionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ASKCluster.DeleteOptions` resource
 *
 * @param properties - the TypeScript properties of a `DeleteOptionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ASKCluster.DeleteOptions` resource.
 */
// @ts-ignore TS6133
function rosASKClusterDeleteOptionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosASKCluster_DeleteOptionsPropertyValidator(properties).assertSuccess();
    return {
      'DeleteMode': ros.stringToRosTemplate(properties.deleteMode),
      'ResourceType': ros.stringToRosTemplate(properties.resourceType),
    };
}

export namespace RosASKCluster {
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
function RosASKCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ASKCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ASKCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosASKClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosASKCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosAnyCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-anycluster
 */
export interface RosAnyClusterProps {

    /**
     * @Property clusterConfig: Cluster config.
     */
    readonly clusterConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAnyClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosAnyClusterProps`
 *
 * @returns the result of the validation.
 */
function RosAnyClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterConfig', ros.requiredValidator)(properties.clusterConfig));
    errors.collect(ros.propertyValidator('clusterConfig', ros.hashValidator(ros.validateAny))(properties.clusterConfig));
    return errors.wrap('supplied properties not correct for "RosAnyClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::AnyCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosAnyClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::AnyCluster` resource.
 */
// @ts-ignore TS6133
function rosAnyClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAnyClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'ClusterConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.clusterConfig),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::AnyCluster`, which is used to create a Container Service for Kubernetes (ACK) cluster of a specific type.
 * @Note This class does not contain additional functions, so it is recommended to use the `AnyCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-anycluster
 */
export class RosAnyCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::AnyCluster";

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
     * @Property clusterConfig: Cluster config.
     */
    public clusterConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAnyClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAnyCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
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
        this.clusterConfig = props.clusterConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterConfig: this.clusterConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAnyClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosClusterAddons`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusteraddons
 */
export interface RosClusterAddonsProps {

    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons: Array<RosClusterAddons.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * @Property installedIgnore: Whether to ignore already installed addons when creating. If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
     * Default false.
     */
    readonly installedIgnore?: boolean | ros.IResolvable;

    /**
     * @Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    readonly rolePolicy?: string | ros.IResolvable;

    /**
     * @Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of WaitUntil.
     */
    readonly validationMode?: string | ros.IResolvable;

    /**
     * @Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    readonly waitUntil?: Array<RosClusterAddons.WaitUntilProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClusterAddonsProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterAddonsProps`
 *
 * @returns the result of the validation.
 */
function RosClusterAddonsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.rolePolicy && (typeof properties.rolePolicy) !== 'object') {
        errors.collect(ros.propertyValidator('rolePolicy', ros.validateAllowedValues)({
          data: properties.rolePolicy,
          allowedValues: ["EnsureAdminRoleAndBinding","None"],
        }));
    }
    errors.collect(ros.propertyValidator('rolePolicy', ros.validateString)(properties.rolePolicy));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('addons', ros.requiredValidator)(properties.addons));
    if(properties.addons && (Array.isArray(properties.addons) || (typeof properties.addons) === 'string')) {
        errors.collect(ros.propertyValidator('addons', ros.validateLength)({
            data: properties.addons.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosClusterAddons_AddonsPropertyValidator))(properties.addons));
    if(properties.validationMode && (typeof properties.validationMode) !== 'object') {
        errors.collect(ros.propertyValidator('validationMode', ros.validateAllowedValues)({
          data: properties.validationMode,
          allowedValues: ["Basic","Strict"],
        }));
    }
    errors.collect(ros.propertyValidator('validationMode', ros.validateString)(properties.validationMode));
    if(properties.waitUntil && (Array.isArray(properties.waitUntil) || (typeof properties.waitUntil) === 'string')) {
        errors.collect(ros.propertyValidator('waitUntil', ros.validateLength)({
            data: properties.waitUntil.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('waitUntil', ros.listValidator(RosClusterAddons_WaitUntilPropertyValidator))(properties.waitUntil));
    errors.collect(ros.propertyValidator('installedIgnore', ros.validateBoolean)(properties.installedIgnore));
    return errors.wrap('supplied properties not correct for "RosClusterAddonsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterAddons` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterAddonsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterAddons` resource.
 */
// @ts-ignore TS6133
function rosClusterAddonsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterAddonsPropsValidator(properties).assertSuccess();
    }
    return {
      'Addons': ros.listMapper(rosClusterAddonsAddonsPropertyToRosTemplate)(properties.addons),
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'InstalledIgnore': ros.booleanToRosTemplate(properties.installedIgnore),
      'RolePolicy': ros.stringToRosTemplate(properties.rolePolicy),
      'ValidationMode': ros.stringToRosTemplate(properties.validationMode),
      'WaitUntil': ros.listMapper(rosClusterAddonsWaitUntilPropertyToRosTemplate)(properties.waitUntil),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ClusterAddons`, which is used to install components in a cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterAddons` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusteraddons
 */
export class RosClusterAddons extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ClusterAddons";

    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.
     */
    public readonly attrWaitUntilData: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    public addons: Array<RosClusterAddons.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clusterId: Cluster ID.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property installedIgnore: Whether to ignore already installed addons when creating. If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
     * Default false.
     */
    public installedIgnore: boolean | ros.IResolvable | undefined;

    /**
     * @Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    public rolePolicy: string | ros.IResolvable | undefined;

    /**
     * @Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of WaitUntil.
     */
    public validationMode: string | ros.IResolvable | undefined;

    /**
     * @Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    public waitUntil: Array<RosClusterAddons.WaitUntilProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterAddonsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClusterAddons.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrWaitUntilData = this.getAtt('WaitUntilData');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addons = props.addons;
        this.clusterId = props.clusterId;
        this.installedIgnore = props.installedIgnore;
        this.rolePolicy = props.rolePolicy;
        this.validationMode = props.validationMode;
        this.waitUntil = props.waitUntil;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addons: this.addons,
            clusterId: this.clusterId,
            installedIgnore: this.installedIgnore,
            rolePolicy: this.rolePolicy,
            validationMode: this.validationMode,
            waitUntil: this.waitUntil,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterAddonsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosClusterAddons {
    /**
     * @stability external
     */
    export interface AddonsProperty {
        /**
         * @Property version: When the value is empty, the latest version is selected by default.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property name: Addon plugin name
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
function RosClusterAddons_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterAddons.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterAddons.Addons` resource.
 */
// @ts-ignore TS6133
function rosClusterAddonsAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterAddons_AddonsPropertyValidator(properties).assertSuccess();
    return {
      'Version': ros.stringToRosTemplate(properties.version),
      'Config': ros.stringToRosTemplate(properties.config),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosClusterAddons {
    /**
     * @stability external
     */
    export interface WaitUntilProperty {
        /**
         * @Property operator: The operator to compare the value with the result of jsonpath expression.
         */
        readonly operator: string | ros.IResolvable;
        /**
         * @Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
         */
        readonly firstMatch?: boolean | ros.IResolvable;
        /**
         * @Property valueType: The type of value. Default value is String.
         */
        readonly valueType?: string | ros.IResolvable;
        /**
         * @Property timeout: The timeout of waiting for the condition to be met. The unit is seconds.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property kind: The kind of kubernetes resources to query.
         */
        readonly kind: string | ros.IResolvable;
        /**
         * @Property value: The value to compare with the result of jsonpath expression.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property stage: At what stage to wait. Valid values:
     * - Create\/Update: the create and update stage.
     * - Delete: the delete stage.
     * The default is Create\/Update.
         */
        readonly stage?: string | ros.IResolvable;
        /**
         * @Property jsonPath: Json path expression to filter the output.
         */
        readonly jsonPath?: string | ros.IResolvable;
        /**
         * @Property namespace: The namespace of kubernetes containing the resource. Default value is DefaultNamespace
         */
        readonly namespace?: string | ros.IResolvable;
        /**
         * @Property name: The name of the kubernetes resource to query.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WaitUntilProperty`
 *
 * @param properties - the TypeScript properties of a `WaitUntilProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterAddons_WaitUntilPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('operator', ros.requiredValidator)(properties.operator));
    if(properties.operator && (typeof properties.operator) !== 'object') {
        errors.collect(ros.propertyValidator('operator', ros.validateAllowedValues)({
          data: properties.operator,
          allowedValues: ["Empty","NotEmpty","Equals","NotEquals"],
        }));
    }
    errors.collect(ros.propertyValidator('operator', ros.validateString)(properties.operator));
    errors.collect(ros.propertyValidator('firstMatch', ros.validateBoolean)(properties.firstMatch));
    if(properties.valueType && (typeof properties.valueType) !== 'object') {
        errors.collect(ros.propertyValidator('valueType', ros.validateAllowedValues)({
          data: properties.valueType,
          allowedValues: ["String","Json"],
        }));
    }
    errors.collect(ros.propertyValidator('valueType', ros.validateString)(properties.valueType));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 10,
            max: 10800,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('kind', ros.requiredValidator)(properties.kind));
    errors.collect(ros.propertyValidator('kind', ros.validateString)(properties.kind));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    if(properties.stage && (typeof properties.stage) !== 'object') {
        errors.collect(ros.propertyValidator('stage', ros.validateAllowedValues)({
          data: properties.stage,
          allowedValues: ["Create/Update","Create","Update","Delete"],
        }));
    }
    errors.collect(ros.propertyValidator('stage', ros.validateString)(properties.stage));
    errors.collect(ros.propertyValidator('jsonPath', ros.validateString)(properties.jsonPath));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "WaitUntilProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterAddons.WaitUntil` resource
 *
 * @param properties - the TypeScript properties of a `WaitUntilProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterAddons.WaitUntil` resource.
 */
// @ts-ignore TS6133
function rosClusterAddonsWaitUntilPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterAddons_WaitUntilPropertyValidator(properties).assertSuccess();
    return {
      'Operator': ros.stringToRosTemplate(properties.operator),
      'FirstMatch': ros.booleanToRosTemplate(properties.firstMatch),
      'ValueType': ros.stringToRosTemplate(properties.valueType),
      'Timeout': ros.numberToRosTemplate(properties.timeout),
      'Kind': ros.stringToRosTemplate(properties.kind),
      'Value': ros.stringToRosTemplate(properties.value),
      'Stage': ros.stringToRosTemplate(properties.stage),
      'JsonPath': ros.stringToRosTemplate(properties.jsonPath),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `RosClusterApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
 */
export interface RosClusterApplicationProps {

    /**
     * @Property clusterId: The ID of the kubernetes cluster.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * @Property yamlContent: The yaml content of application.
     */
    readonly yamlContent: string | ros.IResolvable;

    /**
     * @Property defaultNamespace: The default namespace for the application, default value is default.
     * If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
     * If the DefaultNamespace does not exist, ROS will automatically create it and delete it during the deletion phase.
     */
    readonly defaultNamespace?: string | ros.IResolvable;

    /**
     * @Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    readonly rolePolicy?: string | ros.IResolvable;

    /**
     * @Property stage: At what stage to run. Valid values:
     * - All: all stages, including create, update, and delete.
     * - Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
     * The default is All.
     */
    readonly stage?: string | ros.IResolvable;

    /**
     * @Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of YamlContent and WaitUntil.
     */
    readonly validationMode?: string | ros.IResolvable;

    /**
     * @Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    readonly waitUntil?: Array<RosClusterApplication.WaitUntilProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClusterApplicationProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterApplicationProps`
 *
 * @returns the result of the validation.
 */
function RosClusterApplicationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.rolePolicy && (typeof properties.rolePolicy) !== 'object') {
        errors.collect(ros.propertyValidator('rolePolicy', ros.validateAllowedValues)({
          data: properties.rolePolicy,
          allowedValues: ["EnsureAdminRoleAndBinding","None"],
        }));
    }
    errors.collect(ros.propertyValidator('rolePolicy', ros.validateString)(properties.rolePolicy));
    errors.collect(ros.propertyValidator('yamlContent', ros.requiredValidator)(properties.yamlContent));
    if(properties.yamlContent && (Array.isArray(properties.yamlContent) || (typeof properties.yamlContent) === 'string')) {
        errors.collect(ros.propertyValidator('yamlContent', ros.validateLength)({
            data: properties.yamlContent.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('yamlContent', ros.validateString)(properties.yamlContent));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('defaultNamespace', ros.validateString)(properties.defaultNamespace));
    if(properties.stage && (typeof properties.stage) !== 'object') {
        errors.collect(ros.propertyValidator('stage', ros.validateAllowedValues)({
          data: properties.stage,
          allowedValues: ["All","Delete"],
        }));
    }
    errors.collect(ros.propertyValidator('stage', ros.validateString)(properties.stage));
    if(properties.validationMode && (typeof properties.validationMode) !== 'object') {
        errors.collect(ros.propertyValidator('validationMode', ros.validateAllowedValues)({
          data: properties.validationMode,
          allowedValues: ["Basic","Strict"],
        }));
    }
    errors.collect(ros.propertyValidator('validationMode', ros.validateString)(properties.validationMode));
    if(properties.waitUntil && (Array.isArray(properties.waitUntil) || (typeof properties.waitUntil) === 'string')) {
        errors.collect(ros.propertyValidator('waitUntil', ros.validateLength)({
            data: properties.waitUntil.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('waitUntil', ros.listValidator(RosClusterApplication_WaitUntilPropertyValidator))(properties.waitUntil));
    return errors.wrap('supplied properties not correct for "RosClusterApplicationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterApplication` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterApplicationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterApplication` resource.
 */
// @ts-ignore TS6133
function rosClusterApplicationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterApplicationPropsValidator(properties).assertSuccess();
    }
    return {
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'YamlContent': ros.stringToRosTemplate(properties.yamlContent),
      'DefaultNamespace': ros.stringToRosTemplate(properties.defaultNamespace),
      'RolePolicy': ros.stringToRosTemplate(properties.rolePolicy),
      'Stage': ros.stringToRosTemplate(properties.stage),
      'ValidationMode': ros.stringToRosTemplate(properties.validationMode),
      'WaitUntil': ros.listMapper(rosClusterApplicationWaitUntilPropertyToRosTemplate)(properties.waitUntil),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ClusterApplication`, which is used to deploy an application in a Container Service for Kubernetes (ACK) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterApplication` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
 */
export class RosClusterApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ClusterApplication";

    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.
     */
    public readonly attrWaitUntilData: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: The ID of the kubernetes cluster.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property yamlContent: The yaml content of application.
     */
    public yamlContent: string | ros.IResolvable;

    /**
     * @Property defaultNamespace: The default namespace for the application, default value is default.
     * If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
     * If the DefaultNamespace does not exist, ROS will automatically create it and delete it during the deletion phase.
     */
    public defaultNamespace: string | ros.IResolvable | undefined;

    /**
     * @Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    public rolePolicy: string | ros.IResolvable | undefined;

    /**
     * @Property stage: At what stage to run. Valid values:
     * - All: all stages, including create, update, and delete.
     * - Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
     * The default is All.
     */
    public stage: string | ros.IResolvable | undefined;

    /**
     * @Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of YamlContent and WaitUntil.
     */
    public validationMode: string | ros.IResolvable | undefined;

    /**
     * @Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    public waitUntil: Array<RosClusterApplication.WaitUntilProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterApplicationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClusterApplication.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrWaitUntilData = this.getAtt('WaitUntilData');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.yamlContent = props.yamlContent;
        this.defaultNamespace = props.defaultNamespace;
        this.rolePolicy = props.rolePolicy;
        this.stage = props.stage;
        this.validationMode = props.validationMode;
        this.waitUntil = props.waitUntil;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            yamlContent: this.yamlContent,
            defaultNamespace: this.defaultNamespace,
            rolePolicy: this.rolePolicy,
            stage: this.stage,
            validationMode: this.validationMode,
            waitUntil: this.waitUntil,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterApplicationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosClusterApplication {
    /**
     * @stability external
     */
    export interface WaitUntilProperty {
        /**
         * @Property operator: The operator to compare the value with the result of jsonpath expression.
         */
        readonly operator: string | ros.IResolvable;
        /**
         * @Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
         */
        readonly firstMatch?: boolean | ros.IResolvable;
        /**
         * @Property valueType: The type of value. Default value is String.
         */
        readonly valueType?: string | ros.IResolvable;
        /**
         * @Property timeout: The timeout of waiting for the condition to be met. The unit is seconds.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property kind: The kind of kubernetes resources to query.
         */
        readonly kind: string | ros.IResolvable;
        /**
         * @Property value: The value to compare with the result of jsonpath expression.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property stage: At what stage to wait. Valid values:
     * - Create\/Update: the create and update stage.
     * - Delete: the delete stage.
     * The default is Create\/Update.
         */
        readonly stage?: string | ros.IResolvable;
        /**
         * @Property jsonPath: Json path expression to filter the output.
         */
        readonly jsonPath?: string | ros.IResolvable;
        /**
         * @Property namespace: The namespace of kubernetes containing the resource. Default value is DefaultNamespace
         */
        readonly namespace?: string | ros.IResolvable;
        /**
         * @Property name: The name of the kubernetes resource to query.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WaitUntilProperty`
 *
 * @param properties - the TypeScript properties of a `WaitUntilProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterApplication_WaitUntilPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('operator', ros.requiredValidator)(properties.operator));
    if(properties.operator && (typeof properties.operator) !== 'object') {
        errors.collect(ros.propertyValidator('operator', ros.validateAllowedValues)({
          data: properties.operator,
          allowedValues: ["Empty","NotEmpty","Equals","NotEquals"],
        }));
    }
    errors.collect(ros.propertyValidator('operator', ros.validateString)(properties.operator));
    errors.collect(ros.propertyValidator('firstMatch', ros.validateBoolean)(properties.firstMatch));
    if(properties.valueType && (typeof properties.valueType) !== 'object') {
        errors.collect(ros.propertyValidator('valueType', ros.validateAllowedValues)({
          data: properties.valueType,
          allowedValues: ["String","Json"],
        }));
    }
    errors.collect(ros.propertyValidator('valueType', ros.validateString)(properties.valueType));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 10,
            max: 10800,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('kind', ros.requiredValidator)(properties.kind));
    errors.collect(ros.propertyValidator('kind', ros.validateString)(properties.kind));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    if(properties.stage && (typeof properties.stage) !== 'object') {
        errors.collect(ros.propertyValidator('stage', ros.validateAllowedValues)({
          data: properties.stage,
          allowedValues: ["Create/Update","Create","Update","Delete"],
        }));
    }
    errors.collect(ros.propertyValidator('stage', ros.validateString)(properties.stage));
    errors.collect(ros.propertyValidator('jsonPath', ros.validateString)(properties.jsonPath));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "WaitUntilProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterApplication.WaitUntil` resource
 *
 * @param properties - the TypeScript properties of a `WaitUntilProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterApplication.WaitUntil` resource.
 */
// @ts-ignore TS6133
function rosClusterApplicationWaitUntilPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterApplication_WaitUntilPropertyValidator(properties).assertSuccess();
    return {
      'Operator': ros.stringToRosTemplate(properties.operator),
      'FirstMatch': ros.booleanToRosTemplate(properties.firstMatch),
      'ValueType': ros.stringToRosTemplate(properties.valueType),
      'Timeout': ros.numberToRosTemplate(properties.timeout),
      'Kind': ros.stringToRosTemplate(properties.kind),
      'Value': ros.stringToRosTemplate(properties.value),
      'Stage': ros.stringToRosTemplate(properties.stage),
      'JsonPath': ros.stringToRosTemplate(properties.jsonPath),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `RosClusterHelmApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterhelmapplication
 */
export interface RosClusterHelmApplicationProps {

    /**
     * @Property chartUrl: The URL of chart. Supports HTTP or HTTPS.
     */
    readonly chartUrl: string | ros.IResolvable;

    /**
     * @Property clusterId: The ID of the kubernetes cluster.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * @Property name: The name for helm release.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property chartValues: Chart custom values.
     */
    readonly chartValues?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property credential: The credential of ACR repo. Only take effects when ChartUrl is the address of ACR repo.
     */
    readonly credential?: RosClusterHelmApplication.CredentialProperty | ros.IResolvable;

    /**
     * @Property namespace: Namespace to use with helm. Default is default.
     * If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
     */
    readonly namespace?: string | ros.IResolvable;

    /**
     * @Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    readonly rolePolicy?: string | ros.IResolvable;

    /**
     * @Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of WaitUntil.
     */
    readonly validationMode?: string | ros.IResolvable;

    /**
     * @Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    readonly waitUntil?: Array<RosClusterHelmApplication.WaitUntilProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClusterHelmApplicationProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterHelmApplicationProps`
 *
 * @returns the result of the validation.
 */
function RosClusterHelmApplicationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.rolePolicy && (typeof properties.rolePolicy) !== 'object') {
        errors.collect(ros.propertyValidator('rolePolicy', ros.validateAllowedValues)({
          data: properties.rolePolicy,
          allowedValues: ["EnsureAdminRoleAndBinding","None"],
        }));
    }
    errors.collect(ros.propertyValidator('rolePolicy', ros.validateString)(properties.rolePolicy));
    errors.collect(ros.propertyValidator('chartValues', ros.hashValidator(ros.validateAny))(properties.chartValues));
    errors.collect(ros.propertyValidator('credential', RosClusterHelmApplication_CredentialPropertyValidator)(properties.credential));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('chartUrl', ros.requiredValidator)(properties.chartUrl));
    if(properties.chartUrl && (typeof properties.chartUrl) !== 'object') {
        errors.collect(ros.propertyValidator('chartUrl', ros.validateAllowedPattern)({
          data: properties.chartUrl,
          reg: /^(http|https):\/\/[\w\W]+$/
        }));
    }
    errors.collect(ros.propertyValidator('chartUrl', ros.validateString)(properties.chartUrl));
    if(properties.validationMode && (typeof properties.validationMode) !== 'object') {
        errors.collect(ros.propertyValidator('validationMode', ros.validateAllowedValues)({
          data: properties.validationMode,
          allowedValues: ["Basic","Strict"],
        }));
    }
    errors.collect(ros.propertyValidator('validationMode', ros.validateString)(properties.validationMode));
    if(properties.waitUntil && (Array.isArray(properties.waitUntil) || (typeof properties.waitUntil) === 'string')) {
        errors.collect(ros.propertyValidator('waitUntil', ros.validateLength)({
            data: properties.waitUntil.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('waitUntil', ros.listValidator(RosClusterHelmApplication_WaitUntilPropertyValidator))(properties.waitUntil));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosClusterHelmApplicationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterHelmApplication` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterHelmApplicationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterHelmApplication` resource.
 */
// @ts-ignore TS6133
function rosClusterHelmApplicationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterHelmApplicationPropsValidator(properties).assertSuccess();
    }
    return {
      'ChartUrl': ros.stringToRosTemplate(properties.chartUrl),
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'Name': ros.stringToRosTemplate(properties.name),
      'ChartValues': ros.hashMapper(ros.objectToRosTemplate)(properties.chartValues),
      'Credential': rosClusterHelmApplicationCredentialPropertyToRosTemplate(properties.credential),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'RolePolicy': ros.stringToRosTemplate(properties.rolePolicy),
      'ValidationMode': ros.stringToRosTemplate(properties.validationMode),
      'WaitUntil': ros.listMapper(rosClusterHelmApplicationWaitUntilPropertyToRosTemplate)(properties.waitUntil),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ClusterHelmApplication`, which is used to deploy an application by using Helm.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterHelmApplication` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterhelmapplication
 */
export class RosClusterHelmApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ClusterHelmApplication";

    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.
     */
    public readonly attrWaitUntilData: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property chartUrl: The URL of chart. Supports HTTP or HTTPS.
     */
    public chartUrl: string | ros.IResolvable;

    /**
     * @Property clusterId: The ID of the kubernetes cluster.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property name: The name for helm release.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property chartValues: Chart custom values.
     */
    public chartValues: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property credential: The credential of ACR repo. Only take effects when ChartUrl is the address of ACR repo.
     */
    public credential: RosClusterHelmApplication.CredentialProperty | ros.IResolvable | undefined;

    /**
     * @Property namespace: Namespace to use with helm. Default is default.
     * If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
     */
    public namespace: string | ros.IResolvable | undefined;

    /**
     * @Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    public rolePolicy: string | ros.IResolvable | undefined;

    /**
     * @Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of WaitUntil.
     */
    public validationMode: string | ros.IResolvable | undefined;

    /**
     * @Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    public waitUntil: Array<RosClusterHelmApplication.WaitUntilProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterHelmApplicationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClusterHelmApplication.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrWaitUntilData = this.getAtt('WaitUntilData');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.chartUrl = props.chartUrl;
        this.clusterId = props.clusterId;
        this.name = props.name;
        this.chartValues = props.chartValues;
        this.credential = props.credential;
        this.namespace = props.namespace;
        this.rolePolicy = props.rolePolicy;
        this.validationMode = props.validationMode;
        this.waitUntil = props.waitUntil;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            chartUrl: this.chartUrl,
            clusterId: this.clusterId,
            name: this.name,
            chartValues: this.chartValues,
            credential: this.credential,
            namespace: this.namespace,
            rolePolicy: this.rolePolicy,
            validationMode: this.validationMode,
            waitUntil: this.waitUntil,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterHelmApplicationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosClusterHelmApplication {
    /**
     * @stability external
     */
    export interface CredentialProperty {
        /**
         * @Property userName: The username of repo.
         */
        readonly userName: string | ros.IResolvable;
        /**
         * @Property password: The password of repo.
         */
        readonly password: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CredentialProperty`
 *
 * @param properties - the TypeScript properties of a `CredentialProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterHelmApplication_CredentialPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "CredentialProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterHelmApplication.Credential` resource
 *
 * @param properties - the TypeScript properties of a `CredentialProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterHelmApplication.Credential` resource.
 */
// @ts-ignore TS6133
function rosClusterHelmApplicationCredentialPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterHelmApplication_CredentialPropertyValidator(properties).assertSuccess();
    return {
      'UserName': ros.stringToRosTemplate(properties.userName),
      'Password': ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosClusterHelmApplication {
    /**
     * @stability external
     */
    export interface WaitUntilProperty {
        /**
         * @Property operator: The operator to compare the value with the result of jsonpath expression.
         */
        readonly operator: string | ros.IResolvable;
        /**
         * @Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
         */
        readonly firstMatch?: boolean | ros.IResolvable;
        /**
         * @Property valueType: The type of value. Default value is String.
         */
        readonly valueType?: string | ros.IResolvable;
        /**
         * @Property timeout: The timeout of waiting for the condition to be met. The unit is seconds.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property kind: The kind of kubernetes resources to query.
         */
        readonly kind: string | ros.IResolvable;
        /**
         * @Property value: The value to compare with the result of jsonpath expression.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property stage: At what stage to wait. Valid values:
     * - Create\/Update: the create and update stage.
     * - Delete: the delete stage.
     * The default is Create\/Update.
         */
        readonly stage?: string | ros.IResolvable;
        /**
         * @Property jsonPath: Json path expression to filter the output.
         */
        readonly jsonPath?: string | ros.IResolvable;
        /**
         * @Property namespace: The namespace of kubernetes containing the resource. Default value is DefaultNamespace
         */
        readonly namespace?: string | ros.IResolvable;
        /**
         * @Property name: The name of the kubernetes resource to query.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WaitUntilProperty`
 *
 * @param properties - the TypeScript properties of a `WaitUntilProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterHelmApplication_WaitUntilPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('operator', ros.requiredValidator)(properties.operator));
    if(properties.operator && (typeof properties.operator) !== 'object') {
        errors.collect(ros.propertyValidator('operator', ros.validateAllowedValues)({
          data: properties.operator,
          allowedValues: ["Empty","NotEmpty","Equals","NotEquals"],
        }));
    }
    errors.collect(ros.propertyValidator('operator', ros.validateString)(properties.operator));
    errors.collect(ros.propertyValidator('firstMatch', ros.validateBoolean)(properties.firstMatch));
    if(properties.valueType && (typeof properties.valueType) !== 'object') {
        errors.collect(ros.propertyValidator('valueType', ros.validateAllowedValues)({
          data: properties.valueType,
          allowedValues: ["String","Json"],
        }));
    }
    errors.collect(ros.propertyValidator('valueType', ros.validateString)(properties.valueType));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 10,
            max: 10800,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('kind', ros.requiredValidator)(properties.kind));
    errors.collect(ros.propertyValidator('kind', ros.validateString)(properties.kind));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    if(properties.stage && (typeof properties.stage) !== 'object') {
        errors.collect(ros.propertyValidator('stage', ros.validateAllowedValues)({
          data: properties.stage,
          allowedValues: ["Create/Update","Create","Update","Delete"],
        }));
    }
    errors.collect(ros.propertyValidator('stage', ros.validateString)(properties.stage));
    errors.collect(ros.propertyValidator('jsonPath', ros.validateString)(properties.jsonPath));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "WaitUntilProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterHelmApplication.WaitUntil` resource
 *
 * @param properties - the TypeScript properties of a `WaitUntilProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterHelmApplication.WaitUntil` resource.
 */
// @ts-ignore TS6133
function rosClusterHelmApplicationWaitUntilPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterHelmApplication_WaitUntilPropertyValidator(properties).assertSuccess();
    return {
      'Operator': ros.stringToRosTemplate(properties.operator),
      'FirstMatch': ros.booleanToRosTemplate(properties.firstMatch),
      'ValueType': ros.stringToRosTemplate(properties.valueType),
      'Timeout': ros.numberToRosTemplate(properties.timeout),
      'Kind': ros.stringToRosTemplate(properties.kind),
      'Value': ros.stringToRosTemplate(properties.value),
      'Stage': ros.stringToRosTemplate(properties.stage),
      'JsonPath': ros.stringToRosTemplate(properties.jsonPath),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `RosClusterNodePool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusternodepool
 */
export interface RosClusterNodePoolProps {

    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * @Property scalingGroup: The configurations of the scaling group used by the node pool.
     */
    readonly scalingGroup: RosClusterNodePool.ScalingGroupProperty | ros.IResolvable;

    /**
     * @Property autoScaling: The configurations of auto scaling.
     */
    readonly autoScaling?: RosClusterNodePool.AutoScalingProperty | ros.IResolvable;

    /**
     * @Property count: The number of nodes in the node pool.
     */
    readonly count?: number | ros.IResolvable;

    /**
     * @Property kubernetesConfig: The configurations of the ACK cluster.
     */
    readonly kubernetesConfig?: RosClusterNodePool.KubernetesConfigProperty | ros.IResolvable;

    /**
     * @Property management: The configurations of the managed node pool.
     */
    readonly management?: RosClusterNodePool.ManagementProperty | ros.IResolvable;

    /**
     * @Property nodePoolInfo: The configurations of the node pool.
     */
    readonly nodePoolInfo?: RosClusterNodePool.NodePoolInfoProperty | ros.IResolvable;

    /**
     * @Property teeConfig: The configurations of confidential computing.
     */
    readonly teeConfig?: RosClusterNodePool.TeeConfigProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClusterNodePoolProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterNodePoolProps`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePoolPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('teeConfig', RosClusterNodePool_TeeConfigPropertyValidator)(properties.teeConfig));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('nodePoolInfo', RosClusterNodePool_NodePoolInfoPropertyValidator)(properties.nodePoolInfo));
    errors.collect(ros.propertyValidator('kubernetesConfig', RosClusterNodePool_KubernetesConfigPropertyValidator)(properties.kubernetesConfig));
    errors.collect(ros.propertyValidator('count', ros.validateNumber)(properties.count));
    errors.collect(ros.propertyValidator('management', RosClusterNodePool_ManagementPropertyValidator)(properties.management));
    errors.collect(ros.propertyValidator('autoScaling', RosClusterNodePool_AutoScalingPropertyValidator)(properties.autoScaling));
    errors.collect(ros.propertyValidator('scalingGroup', ros.requiredValidator)(properties.scalingGroup));
    errors.collect(ros.propertyValidator('scalingGroup', RosClusterNodePool_ScalingGroupPropertyValidator)(properties.scalingGroup));
    return errors.wrap('supplied properties not correct for "RosClusterNodePoolProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterNodePoolProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterNodePoolPropsValidator(properties).assertSuccess();
    }
    return {
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'ScalingGroup': rosClusterNodePoolScalingGroupPropertyToRosTemplate(properties.scalingGroup),
      'AutoScaling': rosClusterNodePoolAutoScalingPropertyToRosTemplate(properties.autoScaling),
      'Count': ros.numberToRosTemplate(properties.count),
      'KubernetesConfig': rosClusterNodePoolKubernetesConfigPropertyToRosTemplate(properties.kubernetesConfig),
      'Management': rosClusterNodePoolManagementPropertyToRosTemplate(properties.management),
      'NodePoolInfo': rosClusterNodePoolNodePoolInfoPropertyToRosTemplate(properties.nodePoolInfo),
      'TeeConfig': rosClusterNodePoolTeeConfigPropertyToRosTemplate(properties.teeConfig),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ClusterNodePool`, which is used to create a node pool for a Container Service for Kubernetes (ACK) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterNodePool` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusternodepool
 */
export class RosClusterNodePool extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ClusterNodePool";

    /**
     * @Attribute NodePoolId: Cluster node pool ID.
     */
    public readonly attrNodePoolId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: Cluster ID.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property scalingGroup: The configurations of the scaling group used by the node pool.
     */
    public scalingGroup: RosClusterNodePool.ScalingGroupProperty | ros.IResolvable;

    /**
     * @Property autoScaling: The configurations of auto scaling.
     */
    public autoScaling: RosClusterNodePool.AutoScalingProperty | ros.IResolvable | undefined;

    /**
     * @Property count: The number of nodes in the node pool.
     */
    public count: number | ros.IResolvable | undefined;

    /**
     * @Property kubernetesConfig: The configurations of the ACK cluster.
     */
    public kubernetesConfig: RosClusterNodePool.KubernetesConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property management: The configurations of the managed node pool.
     */
    public management: RosClusterNodePool.ManagementProperty | ros.IResolvable | undefined;

    /**
     * @Property nodePoolInfo: The configurations of the node pool.
     */
    public nodePoolInfo: RosClusterNodePool.NodePoolInfoProperty | ros.IResolvable | undefined;

    /**
     * @Property teeConfig: The configurations of confidential computing.
     */
    public teeConfig: RosClusterNodePool.TeeConfigProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterNodePoolProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClusterNodePool.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNodePoolId = this.getAtt('NodePoolId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.scalingGroup = props.scalingGroup;
        this.autoScaling = props.autoScaling;
        this.count = props.count;
        this.kubernetesConfig = props.kubernetesConfig;
        this.management = props.management;
        this.nodePoolInfo = props.nodePoolInfo;
        this.teeConfig = props.teeConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            scalingGroup: this.scalingGroup,
            autoScaling: this.autoScaling,
            count: this.count,
            kubernetesConfig: this.kubernetesConfig,
            management: this.management,
            nodePoolInfo: this.nodePoolInfo,
            teeConfig: this.teeConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterNodePoolPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface AutoScalingProperty {
        /**
         * @Property eipBandwidth: The peak bandwidth of the EIP. Unit: Mbps
         */
        readonly eipBandwidth?: number | ros.IResolvable;
        /**
         * @Property type: The instance types that can be used for the auto scaling of the node pool. Valid values:
     * cpu: regular instance.
     * gpu: GPU-accelerated instance.
     * gpushare: shared GPU-accelerated instance.
     * spot: preemptible instance.
     * Default value: cpu.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property isBondEip: Specifies whether to associate an elastic IP address (EIP) with the node pool. Valid values:
     * true: associates an EIP with the node pool.
     * false: does not associate an EIP with the node pool.
     * Default value: false.
         */
        readonly isBondEip?: boolean | ros.IResolvable;
        /**
         * @Property minInstances: The minimum number of Elastic Compute Service (ECS) instances in the scaling group.
         */
        readonly minInstances?: number | ros.IResolvable;
        /**
         * @Property enable: Specifies whether to enable auto scaling. Valid values:
     * true: enables auto scaling.
     * false: disables auto scaling.
     * If you set this parameter to false, other parameters in the auto_scaling section do not take effect.
         */
        readonly enable: boolean | ros.IResolvable;
        /**
         * @Property maxInstances: The maximum number of Elastic Compute Service (ECS) instances in the scaling group.
         */
        readonly maxInstances?: number | ros.IResolvable;
        /**
         * @Property eipInternetChargeType: The billing method of the EIP. Valid values:
     * PayByBandwidth: pay-by-bandwidth.
     * PayByTraffic: pay-by-data-transfer.
     * Default value: PayByBandwidth.
         */
        readonly eipInternetChargeType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AutoScalingProperty`
 *
 * @param properties - the TypeScript properties of a `AutoScalingProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_AutoScalingPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.eipBandwidth && (typeof properties.eipBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('eipBandwidth', ros.validateRange)({
            data: properties.eipBandwidth,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('eipBandwidth', ros.validateNumber)(properties.eipBandwidth));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('isBondEip', ros.validateBoolean)(properties.isBondEip));
    errors.collect(ros.propertyValidator('minInstances', ros.validateNumber)(properties.minInstances));
    errors.collect(ros.propertyValidator('enable', ros.requiredValidator)(properties.enable));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('maxInstances', ros.validateNumber)(properties.maxInstances));
    if(properties.eipInternetChargeType && (typeof properties.eipInternetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('eipInternetChargeType', ros.validateAllowedValues)({
          data: properties.eipInternetChargeType,
          allowedValues: ["PayByBandwidth","PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('eipInternetChargeType', ros.validateString)(properties.eipInternetChargeType));
    return errors.wrap('supplied properties not correct for "AutoScalingProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.AutoScaling` resource
 *
 * @param properties - the TypeScript properties of a `AutoScalingProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.AutoScaling` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolAutoScalingPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_AutoScalingPropertyValidator(properties).assertSuccess();
    return {
      'EipBandwidth': ros.numberToRosTemplate(properties.eipBandwidth),
      'Type': ros.stringToRosTemplate(properties.type),
      'IsBondEip': ros.booleanToRosTemplate(properties.isBondEip),
      'MinInstances': ros.numberToRosTemplate(properties.minInstances),
      'Enable': ros.booleanToRosTemplate(properties.enable),
      'MaxInstances': ros.numberToRosTemplate(properties.maxInstances),
      'EipInternetChargeType': ros.stringToRosTemplate(properties.eipInternetChargeType),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface DataDisksProperty {
        /**
         * @Property category: The type of data disk. Valid values:
     * cloud: basic disk.
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property encrypted: Specifies whether to encrypt a data disk. Valid values:
     * true: encrypts a data disk.
     * false: does not encrypt a data disk.
     * Default value: false.
         */
        readonly encrypted?: boolean | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of a data disk. The size is measured in GiB.
     * Valid values: 40 to 32768.
         */
        readonly size?: number | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
     * By default, this parameter is empty. This indicates that automatic backup is disabled.
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_DataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    return errors.wrap('supplied properties not correct for "DataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.DataDisks` resource
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.DataDisks` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_DataDisksPropertyValidator(properties).assertSuccess();
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'Encrypted': ros.booleanToRosTemplate(properties.encrypted),
      'PerformanceLevel': ros.stringToRosTemplate(properties.performanceLevel),
      'Size': ros.numberToRosTemplate(properties.size),
      'AutoSnapshotPolicyId': ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface KubernetesConfigProperty {
        /**
         * @Property cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
     * static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
     * none: This policy indicates that the default CPU affinity is used.
     * Default value: none.
         */
        readonly cpuPolicy?: string | ros.IResolvable;
        /**
         * @Property runtime: The name of the container runtime.
         */
        readonly runtime: string | ros.IResolvable;
        /**
         * @Property cmsEnabled: Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
     * true: installs the CloudMonitor agent on ECS nodes.
     * false: does not install the CloudMonitor agent on ECS nodes.
     * Default value: false.
         */
        readonly cmsEnabled?: boolean | ros.IResolvable;
        /**
         * @Property userData: The user-defined data.
         */
        readonly userData?: string | ros.IResolvable;
        /**
         * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
         */
        readonly nodeNameMode?: string | ros.IResolvable;
        /**
         * @Property runtimeVersion: The version of the container runtime.
         */
        readonly runtimeVersion: string | ros.IResolvable;
        /**
         * @Property labels: You can add labels to nodes that are added to the cluster.
         */
        readonly labels?: Array<RosClusterNodePool.LabelsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property unschedulable: Set new nodes to unschedulable. If true, newly added nodes become unschedulable after they are registered to the cluster. You can enable scheduling for the nodes on the Nodes page in the console.
         */
        readonly unschedulable?: boolean | ros.IResolvable;
        /**
         * @Property taints: The taints of the nodes.
         */
        readonly taints?: Array<RosClusterNodePool.TaintsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `KubernetesConfigProperty`
 *
 * @param properties - the TypeScript properties of a `KubernetesConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_KubernetesConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cpuPolicy', ros.validateString)(properties.cpuPolicy));
    errors.collect(ros.propertyValidator('runtime', ros.requiredValidator)(properties.runtime));
    errors.collect(ros.propertyValidator('runtime', ros.validateString)(properties.runtime));
    errors.collect(ros.propertyValidator('cmsEnabled', ros.validateBoolean)(properties.cmsEnabled));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    errors.collect(ros.propertyValidator('nodeNameMode', ros.validateString)(properties.nodeNameMode));
    errors.collect(ros.propertyValidator('runtimeVersion', ros.requiredValidator)(properties.runtimeVersion));
    errors.collect(ros.propertyValidator('runtimeVersion', ros.validateString)(properties.runtimeVersion));
    if(properties.labels && (Array.isArray(properties.labels) || (typeof properties.labels) === 'string')) {
        errors.collect(ros.propertyValidator('labels', ros.validateLength)({
            data: properties.labels.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('labels', ros.listValidator(RosClusterNodePool_LabelsPropertyValidator))(properties.labels));
    errors.collect(ros.propertyValidator('unschedulable', ros.validateBoolean)(properties.unschedulable));
    if(properties.taints && (Array.isArray(properties.taints) || (typeof properties.taints) === 'string')) {
        errors.collect(ros.propertyValidator('taints', ros.validateLength)({
            data: properties.taints.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('taints', ros.listValidator(RosClusterNodePool_TaintsPropertyValidator))(properties.taints));
    return errors.wrap('supplied properties not correct for "KubernetesConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.KubernetesConfig` resource
 *
 * @param properties - the TypeScript properties of a `KubernetesConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.KubernetesConfig` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolKubernetesConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_KubernetesConfigPropertyValidator(properties).assertSuccess();
    return {
      'CpuPolicy': ros.stringToRosTemplate(properties.cpuPolicy),
      'Runtime': ros.stringToRosTemplate(properties.runtime),
      'CmsEnabled': ros.booleanToRosTemplate(properties.cmsEnabled),
      'UserData': ros.stringToRosTemplate(properties.userData),
      'NodeNameMode': ros.stringToRosTemplate(properties.nodeNameMode),
      'RuntimeVersion': ros.stringToRosTemplate(properties.runtimeVersion),
      'Labels': ros.listMapper(rosClusterNodePoolLabelsPropertyToRosTemplate)(properties.labels),
      'Unschedulable': ros.booleanToRosTemplate(properties.unschedulable),
      'Taints': ros.listMapper(rosClusterNodePoolTaintsPropertyToRosTemplate)(properties.taints),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface LabelsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LabelsProperty`
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_LabelsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "LabelsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Labels` resource
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Labels` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolLabelsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_LabelsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface ManagementProperty {
        /**
         * @Property upgradeConfig: The configurations of auto upgrading. The configurations take effect only when Enable=true is specified.
         */
        readonly upgradeConfig?: RosClusterNodePool.UpgradeConfigProperty | ros.IResolvable;
        /**
         * @Property autoRepair: Specifies whether to enable auto repairing. This parameter takes effect only when Enable=true is specified.
     * true: enables auto repairing.
     * false: disables auto repairing.
         */
        readonly autoRepair?: boolean | ros.IResolvable;
        /**
         * @Property enable: Specifies whether to enable managed node pools. Valid values:
     * true: enables managed node pools.
     * false: disables managed node pools. The other parameters in this section take effect only when Enable=true is specified.
         */
        readonly enable: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ManagementProperty`
 *
 * @param properties - the TypeScript properties of a `ManagementProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_ManagementPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('upgradeConfig', RosClusterNodePool_UpgradeConfigPropertyValidator)(properties.upgradeConfig));
    errors.collect(ros.propertyValidator('autoRepair', ros.validateBoolean)(properties.autoRepair));
    errors.collect(ros.propertyValidator('enable', ros.requiredValidator)(properties.enable));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    return errors.wrap('supplied properties not correct for "ManagementProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Management` resource
 *
 * @param properties - the TypeScript properties of a `ManagementProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Management` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolManagementPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_ManagementPropertyValidator(properties).assertSuccess();
    return {
      'UpgradeConfig': rosClusterNodePoolUpgradeConfigPropertyToRosTemplate(properties.upgradeConfig),
      'AutoRepair': ros.booleanToRosTemplate(properties.autoRepair),
      'Enable': ros.booleanToRosTemplate(properties.enable),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface NodePoolInfoProperty {
        /**
         * @Property resourceGroupId: The ID of the resource group to which the node pool belongs.
         */
        readonly resourceGroupId?: string | ros.IResolvable;
        /**
         * @Property name: The name of the node pool.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NodePoolInfoProperty`
 *
 * @param properties - the TypeScript properties of a `NodePoolInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_NodePoolInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "NodePoolInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.NodePoolInfo` resource
 *
 * @param properties - the TypeScript properties of a `NodePoolInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.NodePoolInfo` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolNodePoolInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_NodePoolInfoPropertyValidator(properties).assertSuccess();
    return {
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface ScalingGroupProperty {
        /**
         * @Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:
     * true: supplements preemptible instances.
     * false: does not supplement preemptible instances.
         */
        readonly spotInstanceRemedy?: boolean | ros.IResolvable;
        /**
         * @Property platform: The release version of the operating system. Valid values:
     * CentOS, AliyunLinux, Windows, WindowsCore.
     * Default value: AliyunLinux.
         */
        readonly platform?: string | ros.IResolvable;
        /**
         * @Property dataDisks: The configurations of data disks.
         */
        readonly dataDisks?: Array<RosClusterNodePool.DataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
         */
        readonly systemDiskSize: number | ros.IResolvable;
        /**
         * @Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the cost or insufficient inventory. This parameter takes effect when multi_az_policy is set to COST_OPTIMIZED. Valid values:
     * true: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
     * false: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
         */
        readonly compensateWithOnDemand?: boolean | ros.IResolvable;
        /**
         * @Property instanceChargeType: The billing method of nodes in the node pool. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Default value: PostPaid.
         */
        readonly instanceChargeType?: string | ros.IResolvable;
        /**
         * @Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by on_demand_base_capacity. Valid values: 0 to 100.
         */
        readonly onDemandPercentageAboveBaseCapacity?: number | ros.IResolvable;
        /**
         * @Property autoRenew: Specifies whether to enable auto-renewal for nodes in the node pool. This parameter takes effect only when instance_charge_type is set to PrePaid. Valid values:
     * true: enables auto-renewal.
     * false: disables auto-renewal.
     * Default value: true.
         */
        readonly autoRenew?: boolean | ros.IResolvable;
        /**
         * @Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. When the number of pay-as-you-go instances is lower than this value, pay-as-you-go instances are preferably created to meet the required number.
         */
        readonly onDemandBaseCapacity?: number | ros.IResolvable;
        /**
         * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property imageId: The ID of a custom image. By default, the image provided by ACK is used.
         */
        readonly imageId?: string | ros.IResolvable;
        /**
         * @Property spotPriceLimit: The instance type for preemptible instances and the price limit of the instance type.
         */
        readonly spotPriceLimit?: Array<RosClusterNodePool.SpotPriceLimitProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceTypes: The ECS instance types of the nodes.
         */
        readonly instanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property zoneIds: Zone ids of virtual switches belongs to.
         */
        readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: Adds labels only to ECS instances.
     * A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:\/\/ or http:\/\/.
         */
        readonly tags?: RosClusterNodePool.TagsProperty[];
        /**
         * @Property spotStrategy: The type of preemptible instance. Valid values:
     * NoSpot: non-preemptible instance.
     * SpotWithPriceLimit: specifies the highest bid for a preemptible instance.
     * SpotAsPriceGo: automatically submits bids based on the up-to-date market price.
         */
        readonly spotStrategy?: string | ros.IResolvable;
        /**
         * @Property loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
         */
        readonly loginPassword?: string | ros.IResolvable;
        /**
         * @Property multiAzPolicy: The scaling policy of ECS instances in a multi-zone scaling group. Valid values:
     * PRIORITY: the scaling group is scaled based on the VSwitchIds.N parameter. When ECS instances cannot be created in the zone where the vSwitch with the highest priority is deployed, the system attempts to create ECS instances in the zone where the vSwitch with the next highest priority is deployed.
     * COST_OPTIMIZED: ECS instances are created based on the unit price of vCPUs in ascending order. Preemptible instances are preferably created when multiple instance types are specified in the scaling configurations. You can set the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
     * BALANCE: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances are not evenly distributed across multiple zones due to insufficient inventory, you can call the RebalanceInstances operation to balance the instance distribution among zones.
     * Default value: PRIORITY.
         */
        readonly multiAzPolicy?: string | ros.IResolvable;
        /**
         * @Property autoRenewPeriod: The auto-renewal period for nodes in the node pool. This parameter takes effect and is required only when instance_charge_type is set to PrePaid and auto_renew is set to true. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
     * Default value: 1
         */
        readonly autoRenewPeriod?: number | ros.IResolvable;
        /**
         * @Property scalingPolicy: The scaling mode of the scaling group. Valid values:
     * release: the standard mode. ECS instances are created and released based on the resource usage.
     * recycle: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances attached with local disks.
     * Default value:release.
         */
        readonly scalingPolicy?: string | ros.IResolvable;
        /**
         * @Property keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
         */
        readonly keyPair?: string | ros.IResolvable;
        /**
         * @Property vSwitchIds: The IDs of vSwitches.
         */
        readonly vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group to which the nodes belong.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property spotInstancePools: The number of available instance types. The scaling group creates preemptible instances of multiple instance types at the lowest cost. Valid values: 1 to 10.
         */
        readonly spotInstancePools?: number | ros.IResolvable;
        /**
         * @Property period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "6", "12", "24", "36"}
     * When PeriodUnit = Year, Period values are: {"1", "2", "3"}
     * Default value: 1.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
         */
        readonly internetChargeType?: string | ros.IResolvable;
        /**
         * @Property systemDiskCategory: The type of system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly systemDiskCategory?: string | ros.IResolvable;
        /**
         * @Property internetMaxBandwidthOut: The release version of the operating system. Valid values:
     * CentOS, AliyunLinux, Windows, WindowsCore.
     * Default value: AliyunLinux.
         */
        readonly internetMaxBandwidthOut?: number | ros.IResolvable;
        /**
         * @Property rdsInstances: The IDs of the ApsaraDB RDS instances.
         */
        readonly rdsInstances?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Year: time in years
     * Default to Month
         */
        readonly periodUnit?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ScalingGroupProperty`
 *
 * @param properties - the TypeScript properties of a `ScalingGroupProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_ScalingGroupPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('spotInstanceRemedy', ros.validateBoolean)(properties.spotInstanceRemedy));
    errors.collect(ros.propertyValidator('platform', ros.validateString)(properties.platform));
    if(properties.dataDisks && (Array.isArray(properties.dataDisks) || (typeof properties.dataDisks) === 'string')) {
        errors.collect(ros.propertyValidator('dataDisks', ros.validateLength)({
            data: properties.dataDisks.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dataDisks', ros.listValidator(RosClusterNodePool_DataDisksPropertyValidator))(properties.dataDisks));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.requiredValidator)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('compensateWithOnDemand', ros.validateBoolean)(properties.compensateWithOnDemand));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if(properties.onDemandPercentageAboveBaseCapacity && (typeof properties.onDemandPercentageAboveBaseCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('onDemandPercentageAboveBaseCapacity', ros.validateRange)({
            data: properties.onDemandPercentageAboveBaseCapacity,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('onDemandPercentageAboveBaseCapacity', ros.validateNumber)(properties.onDemandPercentageAboveBaseCapacity));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.onDemandBaseCapacity && (typeof properties.onDemandBaseCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('onDemandBaseCapacity', ros.validateRange)({
            data: properties.onDemandBaseCapacity,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('onDemandBaseCapacity', ros.validateNumber)(properties.onDemandBaseCapacity));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    if(properties.spotPriceLimit && (Array.isArray(properties.spotPriceLimit) || (typeof properties.spotPriceLimit) === 'string')) {
        errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateLength)({
            data: properties.spotPriceLimit.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.listValidator(RosClusterNodePool_SpotPriceLimitPropertyValidator))(properties.spotPriceLimit));
    errors.collect(ros.propertyValidator('instanceTypes', ros.requiredValidator)(properties.instanceTypes));
    if(properties.instanceTypes && (Array.isArray(properties.instanceTypes) || (typeof properties.instanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('instanceTypes', ros.validateLength)({
            data: properties.instanceTypes.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('instanceTypes', ros.listValidator(ros.validateString))(properties.instanceTypes));
    errors.collect(ros.propertyValidator('zoneIds', ros.listValidator(ros.validateString))(properties.zoneIds));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosClusterNodePool_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('loginPassword', ros.validateString)(properties.loginPassword));
    errors.collect(ros.propertyValidator('multiAzPolicy', ros.validateString)(properties.multiAzPolicy));
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('scalingPolicy', ros.validateString)(properties.scalingPolicy));
    errors.collect(ros.propertyValidator('keyPair', ros.validateString)(properties.keyPair));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.requiredValidator)(properties.vSwitchIds));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.spotInstancePools && (typeof properties.spotInstancePools) !== 'object') {
        errors.collect(ros.propertyValidator('spotInstancePools', ros.validateRange)({
            data: properties.spotInstancePools,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('spotInstancePools', ros.validateNumber)(properties.spotInstancePools));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 36,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    if(properties.rdsInstances && (Array.isArray(properties.rdsInstances) || (typeof properties.rdsInstances) === 'string')) {
        errors.collect(ros.propertyValidator('rdsInstances', ros.validateLength)({
            data: properties.rdsInstances.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('rdsInstances', ros.listValidator(ros.validateString))(properties.rdsInstances));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "ScalingGroupProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.ScalingGroup` resource
 *
 * @param properties - the TypeScript properties of a `ScalingGroupProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.ScalingGroup` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolScalingGroupPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_ScalingGroupPropertyValidator(properties).assertSuccess();
    return {
      'SpotInstanceRemedy': ros.booleanToRosTemplate(properties.spotInstanceRemedy),
      'Platform': ros.stringToRosTemplate(properties.platform),
      'DataDisks': ros.listMapper(rosClusterNodePoolDataDisksPropertyToRosTemplate)(properties.dataDisks),
      'SystemDiskSize': ros.numberToRosTemplate(properties.systemDiskSize),
      'CompensateWithOnDemand': ros.booleanToRosTemplate(properties.compensateWithOnDemand),
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'OnDemandPercentageAboveBaseCapacity': ros.numberToRosTemplate(properties.onDemandPercentageAboveBaseCapacity),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'OnDemandBaseCapacity': ros.numberToRosTemplate(properties.onDemandBaseCapacity),
      'SystemDiskPerformanceLevel': ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'SpotPriceLimit': ros.listMapper(rosClusterNodePoolSpotPriceLimitPropertyToRosTemplate)(properties.spotPriceLimit),
      'InstanceTypes': ros.listMapper(ros.stringToRosTemplate)(properties.instanceTypes),
      'ZoneIds': ros.listMapper(ros.stringToRosTemplate)(properties.zoneIds),
      'Tags': ros.listMapper(rosClusterNodePoolTagsPropertyToRosTemplate)(properties.tags),
      'SpotStrategy': ros.stringToRosTemplate(properties.spotStrategy),
      'LoginPassword': ros.stringToRosTemplate(properties.loginPassword),
      'MultiAzPolicy': ros.stringToRosTemplate(properties.multiAzPolicy),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'ScalingPolicy': ros.stringToRosTemplate(properties.scalingPolicy),
      'KeyPair': ros.stringToRosTemplate(properties.keyPair),
      'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'SpotInstancePools': ros.numberToRosTemplate(properties.spotInstancePools),
      'Period': ros.numberToRosTemplate(properties.period),
      'InternetChargeType': ros.stringToRosTemplate(properties.internetChargeType),
      'SystemDiskCategory': ros.stringToRosTemplate(properties.systemDiskCategory),
      'InternetMaxBandwidthOut': ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      'RdsInstances': ros.listMapper(ros.stringToRosTemplate)(properties.rdsInstances),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface SpotPriceLimitProperty {
        /**
         * @Property priceLimit: The price limit of a preemptible instance.
         */
        readonly priceLimit: number | ros.IResolvable;
        /**
         * @Property instanceType: The instance type for preemptible instances.
         */
        readonly instanceType: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SpotPriceLimitProperty`
 *
 * @param properties - the TypeScript properties of a `SpotPriceLimitProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_SpotPriceLimitPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('priceLimit', ros.requiredValidator)(properties.priceLimit));
    errors.collect(ros.propertyValidator('priceLimit', ros.validateNumber)(properties.priceLimit));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    return errors.wrap('supplied properties not correct for "SpotPriceLimitProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.SpotPriceLimit` resource
 *
 * @param properties - the TypeScript properties of a `SpotPriceLimitProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.SpotPriceLimit` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolSpotPriceLimitPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_SpotPriceLimitPropertyValidator(properties).assertSuccess();
    return {
      'PriceLimit': ros.numberToRosTemplate(properties.priceLimit),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
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
function RosClusterNodePool_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Tags` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface TaintsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property effect: The scheduling policy. Valid values:
     * NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
     * NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
     * PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
     * Default value: NoSchedule.
         */
        readonly effect?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TaintsProperty`
 *
 * @param properties - the TypeScript properties of a `TaintsProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_TaintsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TaintsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Taints` resource
 *
 * @param properties - the TypeScript properties of a `TaintsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.Taints` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolTaintsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_TaintsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Effect': ros.stringToRosTemplate(properties.effect),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface TeeConfigProperty {
        /**
         * @Property teeEnable: Specifies whether to enable confidential computing for the cluster.
         */
        readonly teeEnable: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TeeConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TeeConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_TeeConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('teeEnable', ros.requiredValidator)(properties.teeEnable));
    errors.collect(ros.propertyValidator('teeEnable', ros.validateBoolean)(properties.teeEnable));
    return errors.wrap('supplied properties not correct for "TeeConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.TeeConfig` resource
 *
 * @param properties - the TypeScript properties of a `TeeConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.TeeConfig` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolTeeConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_TeeConfigPropertyValidator(properties).assertSuccess();
    return {
      'TeeEnable': ros.booleanToRosTemplate(properties.teeEnable),
    };
}

export namespace RosClusterNodePool {
    /**
     * @stability external
     */
    export interface UpgradeConfigProperty {
        /**
         * @Property autoUpgrade: Specifies whether to enable auto upgrading. Valid values:
     * true: enables auto upgrading.
     * false: disables auto upgrading.
         */
        readonly autoUpgrade?: boolean | ros.IResolvable;
        /**
         * @Property surgePercentage: The ratio of extra nodes to the nodes in the node pool. You must set this parameter or Surge.
         */
        readonly surgePercentage?: number | ros.IResolvable;
        /**
         * @Property surge: The number of extra nodes that can be added to the node pool during an auto upgrade.
         */
        readonly surge?: number | ros.IResolvable;
        /**
         * @Property maxUnavailable: The maximum number of nodes that can be in the unschedulable state.
     * Valid values: 1 to 1000.
     * Default value: 1.
         */
        readonly maxUnavailable?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `UpgradeConfigProperty`
 *
 * @param properties - the TypeScript properties of a `UpgradeConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePool_UpgradeConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('autoUpgrade', ros.validateBoolean)(properties.autoUpgrade));
    errors.collect(ros.propertyValidator('surgePercentage', ros.validateNumber)(properties.surgePercentage));
    errors.collect(ros.propertyValidator('surge', ros.validateNumber)(properties.surge));
    if(properties.maxUnavailable && (typeof properties.maxUnavailable) !== 'object') {
        errors.collect(ros.propertyValidator('maxUnavailable', ros.validateRange)({
            data: properties.maxUnavailable,
            min: 1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('maxUnavailable', ros.validateNumber)(properties.maxUnavailable));
    return errors.wrap('supplied properties not correct for "UpgradeConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.UpgradeConfig` resource
 *
 * @param properties - the TypeScript properties of a `UpgradeConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ClusterNodePool.UpgradeConfig` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolUpgradeConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterNodePool_UpgradeConfigPropertyValidator(properties).assertSuccess();
    return {
      'AutoUpgrade': ros.booleanToRosTemplate(properties.autoUpgrade),
      'SurgePercentage': ros.numberToRosTemplate(properties.surgePercentage),
      'Surge': ros.numberToRosTemplate(properties.surge),
      'MaxUnavailable': ros.numberToRosTemplate(properties.maxUnavailable),
    };
}

/**
 * Properties for defining a `RosGrantPermissions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
 */
export interface RosGrantPermissionsProps {

    /**
     * @Property permissions: The permissions that you want to grant to the RAM user.
     */
    readonly permissions: Array<RosGrantPermissions.PermissionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property userId: The ID of the RAM user.
     */
    readonly userId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGrantPermissionsProps`
 *
 * @param properties - the TypeScript properties of a `RosGrantPermissionsProps`
 *
 * @returns the result of the validation.
 */
function RosGrantPermissionsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userId', ros.requiredValidator)(properties.userId));
    errors.collect(ros.propertyValidator('userId', ros.validateString)(properties.userId));
    errors.collect(ros.propertyValidator('permissions', ros.requiredValidator)(properties.permissions));
    if(properties.permissions && (Array.isArray(properties.permissions) || (typeof properties.permissions) === 'string')) {
        errors.collect(ros.propertyValidator('permissions', ros.validateLength)({
            data: properties.permissions.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('permissions', ros.listValidator(RosGrantPermissions_PermissionsPropertyValidator))(properties.permissions));
    return errors.wrap('supplied properties not correct for "RosGrantPermissionsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::GrantPermissions` resource
 *
 * @param properties - the TypeScript properties of a `RosGrantPermissionsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::GrantPermissions` resource.
 */
// @ts-ignore TS6133
function rosGrantPermissionsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGrantPermissionsPropsValidator(properties).assertSuccess();
    }
    return {
      'Permissions': ros.listMapper(rosGrantPermissionsPermissionsPropertyToRosTemplate)(properties.permissions),
      'UserId': ros.stringToRosTemplate(properties.userId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::GrantPermissions`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GrantPermissions` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
 */
export class RosGrantPermissions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::GrantPermissions";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property permissions: The permissions that you want to grant to the RAM user.
     */
    public permissions: Array<RosGrantPermissions.PermissionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property userId: The ID of the RAM user.
     */
    public userId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGrantPermissionsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGrantPermissions.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.permissions = props.permissions;
        this.userId = props.userId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            permissions: this.permissions,
            userId: this.userId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGrantPermissionsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosGrantPermissions {
    /**
     * @stability external
     */
    export interface PermissionsProperty {
        /**
         * @Property roleName: he predefined role name. Valid values:
     * admin: administrator
     * ops: O&M engineer
     * dev: developer
     * restricted: restricted user
     * The custom cluster role.
         */
        readonly roleName: string | ros.IResolvable;
        /**
         * @Property clusterId: The ID of the cluster that you want to manage. When the role_type parameter is set to all-clusters, this parameter is set to an empty string.
         */
        readonly clusterId: string | ros.IResolvable;
        /**
         * @Property roleType: The authorization type. Valid values:
     * cluster: indicates that the permissions are scoped to a cluster.
     * namespace: specifies that the permissions are scoped to a namespace of a cluster.
     * all-clusters: specifies that the permissions are scoped to all clusters.
         */
        readonly roleType: string | ros.IResolvable;
        /**
         * @Property isCustom: Specifies whether to perform a custom authorization. To perform a custom authorization, set RoleName to a custom cluster role.
         */
        readonly isCustom?: boolean | ros.IResolvable;
        /**
         * @Property isRamRole: Specifies whether the permissions are granted to a RAM role.
         */
        readonly isRamRole?: boolean | ros.IResolvable;
        /**
         * @Property namespace: The namespace to which the permissions are scoped. This parameter is required only if you set RoleType to namespace.
         */
        readonly namespace?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PermissionsProperty`
 *
 * @param properties - the TypeScript properties of a `PermissionsProperty`
 *
 * @returns the result of the validation.
 */
function RosGrantPermissions_PermissionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('roleName', ros.requiredValidator)(properties.roleName));
    errors.collect(ros.propertyValidator('roleName', ros.validateString)(properties.roleName));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('roleType', ros.requiredValidator)(properties.roleType));
    if(properties.roleType && (typeof properties.roleType) !== 'object') {
        errors.collect(ros.propertyValidator('roleType', ros.validateAllowedValues)({
          data: properties.roleType,
          allowedValues: ["cluster","namespace","all-clusters"],
        }));
    }
    errors.collect(ros.propertyValidator('roleType', ros.validateString)(properties.roleType));
    errors.collect(ros.propertyValidator('isCustom', ros.validateBoolean)(properties.isCustom));
    errors.collect(ros.propertyValidator('isRamRole', ros.validateBoolean)(properties.isRamRole));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    return errors.wrap('supplied properties not correct for "PermissionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::GrantPermissions.Permissions` resource
 *
 * @param properties - the TypeScript properties of a `PermissionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::GrantPermissions.Permissions` resource.
 */
// @ts-ignore TS6133
function rosGrantPermissionsPermissionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGrantPermissions_PermissionsPropertyValidator(properties).assertSuccess();
    return {
      'RoleName': ros.stringToRosTemplate(properties.roleName),
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'RoleType': ros.stringToRosTemplate(properties.roleType),
      'IsCustom': ros.booleanToRosTemplate(properties.isCustom),
      'IsRamRole': ros.booleanToRosTemplate(properties.isRamRole),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
    };
}

/**
 * Properties for defining a `RosKubernetesCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-kubernetescluster
 */
export interface RosKubernetesClusterProps {

    /**
     * @Property masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
     * List size must be 3, Instance Type can be repeated.
     */
    readonly masterInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
     */
    readonly masterVSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property workerVSwitchIds: The virtual switch ID of the worker node.
     */
    readonly workerVSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons?: Array<RosKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0\/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;

    /**
     * @Property cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
     */
    readonly cpuPolicy?: string | ros.IResolvable;

    /**
     * @Property deleteOptions: Delete options, only work for deleting resource.
     */
    readonly deleteOptions?: Array<RosKubernetesCluster.DeleteOptionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster. 
     * After deletion protection is enabled, the cluster cannot be deleted 
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * @Property formatDisk: Specifies whether to mount a data disk to nodes that are created 
     * on existing Elastic Compute Service (ECS) instances. Valid values:
     * true: stores the data of containers and images on a data disk. 
     * The original data on the disk will be overwritten. 
     * Back up data before you mount the disk.
     * false: does not store the data of containers and images on a data disk.
     * Default value: false.
     * How to mount a data disk:
     * If the ECS instances have data disks mounted and the file system of the last 
     * data disk is not initialized, the system automatically formats the data disk to ext4. 
     * Then, the system mounts the data disk to \/var\/lib\/docker and \/var\/lib\/kubelet.
     * The system does not create or mount a new data disk if no data disk has been 
     * mounted to the ECS instances.
     */
    readonly formatDisk?: boolean | ros.IResolvable;

    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. 
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;

    /**
     * @Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
     * true: retains the names.
     * false: does not retain the names. The new names are assigned by the system.
     * Default value: true.
     */
    readonly keepInstanceName?: boolean | ros.IResolvable;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;

    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;

    /**
     * @Property masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
     */
    readonly masterCount?: number | ros.IResolvable;

    /**
     * @Property masterDataDisk: Whether the master node mounts data disks can be selected as:
     * true: mount the data disk
     * false: no data disk is mounted, default is false
     */
    readonly masterDataDisk?: boolean | ros.IResolvable;

    /**
     * @Property masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
     */
    readonly masterDataDisks?: Array<RosKubernetesCluster.MasterDataDisksProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterSystemDiskCategory: Master disk system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
     */
    readonly masterSystemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.
     * Valid values: PL0|PL1|PL2|PL3
     */
    readonly masterSystemDiskPerformanceLevel?: string | ros.IResolvable;

    /**
     * @Property masterSystemDiskSize: Master disk system disk size in GiB.
     * Default to 120.
     */
    readonly masterSystemDiskSize?: number | ros.IResolvable;

    /**
     * @Property masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.
     */
    readonly masterSystemDiskSnapshotPolicyId?: string | ros.IResolvable;

    /**
     * @Property masterZoneIds: Zone ids of master node virtual switches belongs to.
     */
    readonly masterZoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. 
     * This number is determined by the specified pod CIDR block. 
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    readonly nodeCidrMask?: string | ros.IResolvable;

    /**
     * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
     */
    readonly nodeNameMode?: string | ros.IResolvable;

    /**
     * @Property nodePools: The configurations of Node pools.
     */
    readonly nodePools?: Array<RosKubernetesCluster.NodePoolsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property nodePortRange: Node service port. The value range is [30000, 65535].
     * Default to 30000-65535.
     */
    readonly nodePortRange?: string | ros.IResolvable;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    readonly numOfNodes?: number | ros.IResolvable;

    /**
     * @Property osType: The type of operating system. Valid values:
     * Windows
     * Linux
     * Default value: Linux.
     */
    readonly osType?: string | ros.IResolvable;

    /**
     * @Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
     * Default to 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Year: time in years
     * Default to Month
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property platform: The release version of the operating system. Valid values:
     * CentOS
     * AliyunLinux
     * QbootAliyunLinux
     * Qboot
     * Windows
     * WindowsCore
     * Default value: CentOS.
     */
    readonly platform?: string | ros.IResolvable;

    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    readonly podVswitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    readonly runtime?: RosKubernetesCluster.RuntimeProperty | ros.IResolvable;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property securityHardeningOs: Alibaba Cloud OS security hardening. Value:
     * true: enables security hardening OS.
     * false: disables security hardening OS.
     * Default value: false.
     */
    readonly securityHardeningOs?: boolean | ros.IResolvable;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

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
     * @Property socEnabled: Valid values:
     * true: enables reinforcement based on classified protection.
     * false: disables reinforcement based on classified protection.
     * Default value: false.
     */
    readonly socEnabled?: boolean | ros.IResolvable;

    /**
     * @Property sshFlags: Whether to enable public network SSH login:
     * true: open
     * false: not open
     */
    readonly sshFlags?: boolean | ros.IResolvable;

    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosKubernetesCluster.TagsProperty[];

    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    readonly taint?: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;

    /**
     * @Property timeZone: The time zone of the cluster.
     */
    readonly timeZone?: string | ros.IResolvable;

    /**
     * @Property userCa: The CA of cluster
     */
    readonly userCa?: string | ros.IResolvable;

    /**
     * @Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    readonly workerDataDisks?: Array<RosKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;

    /**
     * @Property workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.
     */
    readonly workerSystemDiskSnapshotPolicyId?: string | ros.IResolvable;

    /**
     * @Property workerZoneIds: Zone ids of worker node virtual switches belongs to.
     */
    readonly workerZoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosKubernetesClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosKubernetesClusterProps`
 *
 * @returns the result of the validation.
 */
function RosKubernetesClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpointPublicAccess', ros.validateBoolean)(properties.endpointPublicAccess));
    errors.collect(ros.propertyValidator('socEnabled', ros.validateBoolean)(properties.socEnabled));
    errors.collect(ros.propertyValidator('platform', ros.validateString)(properties.platform));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('masterSystemDiskCategory', ros.validateString)(properties.masterSystemDiskCategory));
    if(properties.masterCount && (typeof properties.masterCount) !== 'object') {
        errors.collect(ros.propertyValidator('masterCount', ros.validateAllowedValues)({
          data: properties.masterCount,
          allowedValues: [3,5],
        }));
    }
    errors.collect(ros.propertyValidator('masterCount', ros.validateNumber)(properties.masterCount));
    errors.collect(ros.propertyValidator('sshFlags', ros.validateBoolean)(properties.sshFlags));
    errors.collect(ros.propertyValidator('loadBalancerSpec', ros.validateString)(properties.loadBalancerSpec));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('taint', ros.listValidator(ros.validateAnyDict))(properties.taint));
    errors.collect(ros.propertyValidator('masterDataDisks', ros.listValidator(RosKubernetesCluster_MasterDataDisksPropertyValidator))(properties.masterDataDisks));
    errors.collect(ros.propertyValidator('isEnterpriseSecurityGroup', ros.validateBoolean)(properties.isEnterpriseSecurityGroup));
    errors.collect(ros.propertyValidator('runtime', RosKubernetesCluster_RuntimePropertyValidator)(properties.runtime));
    errors.collect(ros.propertyValidator('masterZoneIds', ros.listValidator(ros.validateString))(properties.masterZoneIds));
    if(properties.osType && (typeof properties.osType) !== 'object') {
        errors.collect(ros.propertyValidator('osType', ros.validateAllowedValues)({
          data: properties.osType,
          allowedValues: ["Windows","Linux"],
        }));
    }
    errors.collect(ros.propertyValidator('osType', ros.validateString)(properties.osType));
    errors.collect(ros.propertyValidator('nodeNameMode', ros.validateString)(properties.nodeNameMode));
    errors.collect(ros.propertyValidator('workerZoneIds', ros.listValidator(ros.validateString))(properties.workerZoneIds));
    errors.collect(ros.propertyValidator('proxyMode', ros.validateString)(properties.proxyMode));
    errors.collect(ros.propertyValidator('disableRollback', ros.validateBoolean)(properties.disableRollback));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosKubernetesCluster_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('containerCidr', ros.validateString)(properties.containerCidr));
    errors.collect(ros.propertyValidator('deleteOptions', ros.listValidator(RosKubernetesCluster_DeleteOptionsPropertyValidator))(properties.deleteOptions));
    errors.collect(ros.propertyValidator('cpuPolicy', ros.validateString)(properties.cpuPolicy));
    errors.collect(ros.propertyValidator('keyPair', ros.validateString)(properties.keyPair));
    errors.collect(ros.propertyValidator('nodeCidrMask', ros.validateString)(properties.nodeCidrMask));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('timeZone', ros.validateString)(properties.timeZone));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.nodePools && (Array.isArray(properties.nodePools) || (typeof properties.nodePools) === 'string')) {
        errors.collect(ros.propertyValidator('nodePools', ros.validateLength)({
            data: properties.nodePools.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('nodePools', ros.listValidator(RosKubernetesCluster_NodePoolsPropertyValidator))(properties.nodePools));
    errors.collect(ros.propertyValidator('userCa', ros.validateString)(properties.userCa));
    errors.collect(ros.propertyValidator('snatEntry', ros.validateBoolean)(properties.snatEntry));
    errors.collect(ros.propertyValidator('masterDataDisk', ros.validateBoolean)(properties.masterDataDisk));
    errors.collect(ros.propertyValidator('masterSystemDiskSnapshotPolicyId', ros.validateString)(properties.masterSystemDiskSnapshotPolicyId));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('formatDisk', ros.validateBoolean)(properties.formatDisk));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosKubernetesCluster_AddonsPropertyValidator))(properties.addons));
    if(properties.masterSystemDiskSize && (typeof properties.masterSystemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('masterSystemDiskSize', ros.validateRange)({
            data: properties.masterSystemDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('masterSystemDiskSize', ros.validateNumber)(properties.masterSystemDiskSize));
    errors.collect(ros.propertyValidator('workerSystemDiskCategory', ros.validateString)(properties.workerSystemDiskCategory));
    if(properties.workerSystemDiskSize && (typeof properties.workerSystemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateRange)({
            data: properties.workerSystemDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateNumber)(properties.workerSystemDiskSize));
    errors.collect(ros.propertyValidator('nodePortRange', ros.validateString)(properties.nodePortRange));
    errors.collect(ros.propertyValidator('masterVSwitchIds', ros.requiredValidator)(properties.masterVSwitchIds));
    if(properties.masterVSwitchIds && (Array.isArray(properties.masterVSwitchIds) || (typeof properties.masterVSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('masterVSwitchIds', ros.validateLength)({
            data: properties.masterVSwitchIds.length,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('masterVSwitchIds', ros.listValidator(ros.validateString))(properties.masterVSwitchIds));
    errors.collect(ros.propertyValidator('cloudMonitorFlags', ros.validateBoolean)(properties.cloudMonitorFlags));
    errors.collect(ros.propertyValidator('securityHardeningOs', ros.validateBoolean)(properties.securityHardeningOs));
    errors.collect(ros.propertyValidator('serviceCidr', ros.validateString)(properties.serviceCidr));
    errors.collect(ros.propertyValidator('podVswitchIds', ros.listValidator(ros.validateString))(properties.podVswitchIds));
    if(properties.workerInstanceTypes && (Array.isArray(properties.workerInstanceTypes) || (typeof properties.workerInstanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('workerInstanceTypes', ros.validateLength)({
            data: properties.workerInstanceTypes.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('workerInstanceTypes', ros.listValidator(ros.validateString))(properties.workerInstanceTypes));
    errors.collect(ros.propertyValidator('loginPassword', ros.validateString)(properties.loginPassword));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('kubernetesVersion', ros.validateString)(properties.kubernetesVersion));
    errors.collect(ros.propertyValidator('masterInstanceTypes', ros.requiredValidator)(properties.masterInstanceTypes));
    if(properties.masterInstanceTypes && (Array.isArray(properties.masterInstanceTypes) || (typeof properties.masterInstanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('masterInstanceTypes', ros.validateLength)({
            data: properties.masterInstanceTypes.length,
            min: 3,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('masterInstanceTypes', ros.listValidator(ros.validateString))(properties.masterInstanceTypes));
    errors.collect(ros.propertyValidator('masterSystemDiskPerformanceLevel', ros.validateString)(properties.masterSystemDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('workerDataDisks', ros.listValidator(RosKubernetesCluster_WorkerDataDisksPropertyValidator))(properties.workerDataDisks));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('timeoutMins', ros.validateNumber)(properties.timeoutMins));
    errors.collect(ros.propertyValidator('workerDataDisk', ros.validateBoolean)(properties.workerDataDisk));
    if(properties.numOfNodes && (typeof properties.numOfNodes) !== 'object') {
        errors.collect(ros.propertyValidator('numOfNodes', ros.validateRange)({
            data: properties.numOfNodes,
            min: 0,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('numOfNodes', ros.validateNumber)(properties.numOfNodes));
    errors.collect(ros.propertyValidator('keepInstanceName', ros.validateBoolean)(properties.keepInstanceName));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('workerSystemDiskSnapshotPolicyId', ros.validateString)(properties.workerSystemDiskSnapshotPolicyId));
    errors.collect(ros.propertyValidator('workerVSwitchIds', ros.requiredValidator)(properties.workerVSwitchIds));
    if(properties.workerVSwitchIds && (Array.isArray(properties.workerVSwitchIds) || (typeof properties.workerVSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('workerVSwitchIds', ros.validateLength)({
            data: properties.workerVSwitchIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerVSwitchIds', ros.listValidator(ros.validateString))(properties.workerVSwitchIds));
    return errors.wrap('supplied properties not correct for "RosKubernetesClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosKubernetesClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKubernetesClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'MasterInstanceTypes': ros.listMapper(ros.stringToRosTemplate)(properties.masterInstanceTypes),
      'MasterVSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.masterVSwitchIds),
      'Name': ros.stringToRosTemplate(properties.name),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'WorkerVSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.workerVSwitchIds),
      'Addons': ros.listMapper(rosKubernetesClusterAddonsPropertyToRosTemplate)(properties.addons),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'CloudMonitorFlags': ros.booleanToRosTemplate(properties.cloudMonitorFlags),
      'ContainerCidr': ros.stringToRosTemplate(properties.containerCidr),
      'CpuPolicy': ros.stringToRosTemplate(properties.cpuPolicy),
      'DeleteOptions': ros.listMapper(rosKubernetesClusterDeleteOptionsPropertyToRosTemplate)(properties.deleteOptions),
      'DeletionProtection': ros.booleanToRosTemplate(properties.deletionProtection),
      'DisableRollback': ros.booleanToRosTemplate(properties.disableRollback),
      'EndpointPublicAccess': ros.booleanToRosTemplate(properties.endpointPublicAccess),
      'FormatDisk': ros.booleanToRosTemplate(properties.formatDisk),
      'IsEnterpriseSecurityGroup': ros.booleanToRosTemplate(properties.isEnterpriseSecurityGroup),
      'KeepInstanceName': ros.booleanToRosTemplate(properties.keepInstanceName),
      'KeyPair': ros.stringToRosTemplate(properties.keyPair),
      'KubernetesVersion': ros.stringToRosTemplate(properties.kubernetesVersion),
      'LoadBalancerSpec': ros.stringToRosTemplate(properties.loadBalancerSpec),
      'LoginPassword': ros.stringToRosTemplate(properties.loginPassword),
      'MasterCount': ros.numberToRosTemplate(properties.masterCount),
      'MasterDataDisk': ros.booleanToRosTemplate(properties.masterDataDisk),
      'MasterDataDisks': ros.listMapper(rosKubernetesClusterMasterDataDisksPropertyToRosTemplate)(properties.masterDataDisks),
      'MasterSystemDiskCategory': ros.stringToRosTemplate(properties.masterSystemDiskCategory),
      'MasterSystemDiskPerformanceLevel': ros.stringToRosTemplate(properties.masterSystemDiskPerformanceLevel),
      'MasterSystemDiskSize': ros.numberToRosTemplate(properties.masterSystemDiskSize),
      'MasterSystemDiskSnapshotPolicyId': ros.stringToRosTemplate(properties.masterSystemDiskSnapshotPolicyId),
      'MasterZoneIds': ros.listMapper(ros.stringToRosTemplate)(properties.masterZoneIds),
      'NodeCidrMask': ros.stringToRosTemplate(properties.nodeCidrMask),
      'NodeNameMode': ros.stringToRosTemplate(properties.nodeNameMode),
      'NodePools': ros.listMapper(rosKubernetesClusterNodePoolsPropertyToRosTemplate)(properties.nodePools),
      'NodePortRange': ros.stringToRosTemplate(properties.nodePortRange),
      'NumOfNodes': ros.numberToRosTemplate(properties.numOfNodes),
      'OsType': ros.stringToRosTemplate(properties.osType),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'Platform': ros.stringToRosTemplate(properties.platform),
      'PodVswitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.podVswitchIds),
      'ProxyMode': ros.stringToRosTemplate(properties.proxyMode),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Runtime': rosKubernetesClusterRuntimePropertyToRosTemplate(properties.runtime),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'SecurityHardeningOs': ros.booleanToRosTemplate(properties.securityHardeningOs),
      'ServiceCidr': ros.stringToRosTemplate(properties.serviceCidr),
      'SnatEntry': ros.booleanToRosTemplate(properties.snatEntry),
      'SocEnabled': ros.booleanToRosTemplate(properties.socEnabled),
      'SshFlags': ros.booleanToRosTemplate(properties.sshFlags),
      'Tags': ros.listMapper(rosKubernetesClusterTagsPropertyToRosTemplate)(properties.tags),
      'Taint': ros.listMapper(ros.anyDictToRosTemplate)(properties.taint),
      'TimeoutMins': ros.numberToRosTemplate(properties.timeoutMins),
      'TimeZone': ros.stringToRosTemplate(properties.timeZone),
      'UserCa': ros.stringToRosTemplate(properties.userCa),
      'UserData': ros.stringToRosTemplate(properties.userData),
      'WorkerDataDisk': ros.booleanToRosTemplate(properties.workerDataDisk),
      'WorkerDataDisks': ros.listMapper(rosKubernetesClusterWorkerDataDisksPropertyToRosTemplate)(properties.workerDataDisks),
      'WorkerInstanceTypes': ros.listMapper(ros.stringToRosTemplate)(properties.workerInstanceTypes),
      'WorkerSystemDiskCategory': ros.stringToRosTemplate(properties.workerSystemDiskCategory),
      'WorkerSystemDiskSize': ros.numberToRosTemplate(properties.workerSystemDiskSize),
      'WorkerSystemDiskSnapshotPolicyId': ros.stringToRosTemplate(properties.workerSystemDiskSnapshotPolicyId),
      'WorkerZoneIds': ros.listMapper(ros.stringToRosTemplate)(properties.workerZoneIds),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::KubernetesCluster`, which is used to create a Container Service for Kubernetes (ACK) dedicated cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `KubernetesCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-kubernetescluster
 */
export class RosKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::KubernetesCluster";

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
     * @Property masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
     * List size must be 3, Instance Type can be repeated.
     */
    public masterInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
     */
    public masterVSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property workerVSwitchIds: The virtual switch ID of the worker node.
     */
    public workerVSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    public addons: Array<RosKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    public cloudMonitorFlags: boolean | ros.IResolvable | undefined;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0\/16 is used by default.
     */
    public containerCidr: string | ros.IResolvable | undefined;

    /**
     * @Property cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
     */
    public cpuPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property deleteOptions: Delete options, only work for deleting resource.
     */
    public deleteOptions: Array<RosKubernetesCluster.DeleteOptionsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster. 
     * After deletion protection is enabled, the cluster cannot be deleted 
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    public disableRollback: boolean | ros.IResolvable | undefined;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    public endpointPublicAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property formatDisk: Specifies whether to mount a data disk to nodes that are created 
     * on existing Elastic Compute Service (ECS) instances. Valid values:
     * true: stores the data of containers and images on a data disk. 
     * The original data on the disk will be overwritten. 
     * Back up data before you mount the disk.
     * false: does not store the data of containers and images on a data disk.
     * Default value: false.
     * How to mount a data disk:
     * If the ECS instances have data disks mounted and the file system of the last 
     * data disk is not initialized, the system automatically formats the data disk to ext4. 
     * Then, the system mounts the data disk to \/var\/lib\/docker and \/var\/lib\/kubelet.
     * The system does not create or mount a new data disk if no data disk has been 
     * mounted to the ECS instances.
     */
    public formatDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. 
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    public isEnterpriseSecurityGroup: boolean | ros.IResolvable | undefined;

    /**
     * @Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
     * true: retains the names.
     * false: does not retain the names. The new names are assigned by the system.
     * Default value: true.
     */
    public keepInstanceName: boolean | ros.IResolvable | undefined;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    public keyPair: string | ros.IResolvable | undefined;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    public kubernetesVersion: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    public loadBalancerSpec: string | ros.IResolvable | undefined;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    public loginPassword: string | ros.IResolvable | undefined;

    /**
     * @Property masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
     */
    public masterCount: number | ros.IResolvable | undefined;

    /**
     * @Property masterDataDisk: Whether the master node mounts data disks can be selected as:
     * true: mount the data disk
     * false: no data disk is mounted, default is false
     */
    public masterDataDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
     */
    public masterDataDisks: Array<RosKubernetesCluster.MasterDataDisksProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property masterSystemDiskCategory: Master disk system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
     */
    public masterSystemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.
     * Valid values: PL0|PL1|PL2|PL3
     */
    public masterSystemDiskPerformanceLevel: string | ros.IResolvable | undefined;

    /**
     * @Property masterSystemDiskSize: Master disk system disk size in GiB.
     * Default to 120.
     */
    public masterSystemDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.
     */
    public masterSystemDiskSnapshotPolicyId: string | ros.IResolvable | undefined;

    /**
     * @Property masterZoneIds: Zone ids of master node virtual switches belongs to.
     */
    public masterZoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. 
     * This number is determined by the specified pod CIDR block. 
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    public nodeCidrMask: string | ros.IResolvable | undefined;

    /**
     * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
     */
    public nodeNameMode: string | ros.IResolvable | undefined;

    /**
     * @Property nodePools: The configurations of Node pools.
     */
    public nodePools: Array<RosKubernetesCluster.NodePoolsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property nodePortRange: Node service port. The value range is [30000, 65535].
     * Default to 30000-65535.
     */
    public nodePortRange: string | ros.IResolvable | undefined;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    public numOfNodes: number | ros.IResolvable | undefined;

    /**
     * @Property osType: The type of operating system. Valid values:
     * Windows
     * Linux
     * Default value: Linux.
     */
    public osType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
     * Default to 1.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Year: time in years
     * Default to Month
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property platform: The release version of the operating system. Valid values:
     * CentOS
     * AliyunLinux
     * QbootAliyunLinux
     * Qboot
     * Windows
     * WindowsCore
     * Default value: CentOS.
     */
    public platform: string | ros.IResolvable | undefined;

    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    public podVswitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    public proxyMode: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    public runtime: RosKubernetesCluster.RuntimeProperty | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityHardeningOs: Alibaba Cloud OS security hardening. Value:
     * true: enables security hardening OS.
     * false: disables security hardening OS.
     * Default value: false.
     */
    public securityHardeningOs: boolean | ros.IResolvable | undefined;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    public serviceCidr: string | ros.IResolvable | undefined;

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
     * @Property socEnabled: Valid values:
     * true: enables reinforcement based on classified protection.
     * false: disables reinforcement based on classified protection.
     * Default value: false.
     */
    public socEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property sshFlags: Whether to enable public network SSH login:
     * true: open
     * false: not open
     */
    public sshFlags: boolean | ros.IResolvable | undefined;

    /**
     * @Property tags: Tag the cluster.
     */
    public tags: RosKubernetesCluster.TagsProperty[] | undefined;

    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    public taint: Array<{ [key: string]: any }> | ros.IResolvable | undefined;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    public timeoutMins: number | ros.IResolvable | undefined;

    /**
     * @Property timeZone: The time zone of the cluster.
     */
    public timeZone: string | ros.IResolvable | undefined;

    /**
     * @Property userCa: The CA of cluster
     */
    public userCa: string | ros.IResolvable | undefined;

    /**
     * @Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    public userData: string | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    public workerDataDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    public workerDataDisks: Array<RosKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    public workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    public workerSystemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    public workerSystemDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.
     */
    public workerSystemDiskSnapshotPolicyId: string | ros.IResolvable | undefined;

    /**
     * @Property workerZoneIds: Zone ids of worker node virtual switches belongs to.
     */
    public workerZoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKubernetesClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKubernetesCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
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
        this.masterInstanceTypes = props.masterInstanceTypes;
        this.masterVSwitchIds = props.masterVSwitchIds;
        this.name = props.name;
        this.vpcId = props.vpcId;
        this.workerVSwitchIds = props.workerVSwitchIds;
        this.addons = props.addons;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.chargeType = props.chargeType;
        this.cloudMonitorFlags = props.cloudMonitorFlags;
        this.containerCidr = props.containerCidr;
        this.cpuPolicy = props.cpuPolicy;
        this.deleteOptions = props.deleteOptions;
        this.deletionProtection = props.deletionProtection;
        this.disableRollback = props.disableRollback;
        this.endpointPublicAccess = props.endpointPublicAccess;
        this.formatDisk = props.formatDisk;
        this.isEnterpriseSecurityGroup = props.isEnterpriseSecurityGroup;
        this.keepInstanceName = props.keepInstanceName;
        this.keyPair = props.keyPair;
        this.kubernetesVersion = props.kubernetesVersion;
        this.loadBalancerSpec = props.loadBalancerSpec;
        this.loginPassword = props.loginPassword;
        this.masterCount = props.masterCount;
        this.masterDataDisk = props.masterDataDisk;
        this.masterDataDisks = props.masterDataDisks;
        this.masterSystemDiskCategory = props.masterSystemDiskCategory;
        this.masterSystemDiskPerformanceLevel = props.masterSystemDiskPerformanceLevel;
        this.masterSystemDiskSize = props.masterSystemDiskSize;
        this.masterSystemDiskSnapshotPolicyId = props.masterSystemDiskSnapshotPolicyId;
        this.masterZoneIds = props.masterZoneIds;
        this.nodeCidrMask = props.nodeCidrMask;
        this.nodeNameMode = props.nodeNameMode;
        this.nodePools = props.nodePools;
        this.nodePortRange = props.nodePortRange;
        this.numOfNodes = props.numOfNodes;
        this.osType = props.osType;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.platform = props.platform;
        this.podVswitchIds = props.podVswitchIds;
        this.proxyMode = props.proxyMode;
        this.resourceGroupId = props.resourceGroupId;
        this.runtime = props.runtime;
        this.securityGroupId = props.securityGroupId;
        this.securityHardeningOs = props.securityHardeningOs;
        this.serviceCidr = props.serviceCidr;
        this.snatEntry = props.snatEntry;
        this.socEnabled = props.socEnabled;
        this.sshFlags = props.sshFlags;
        this.tags = props.tags;
        this.taint = props.taint;
        this.timeoutMins = props.timeoutMins;
        this.timeZone = props.timeZone;
        this.userCa = props.userCa;
        this.userData = props.userData;
        this.workerDataDisk = props.workerDataDisk;
        this.workerDataDisks = props.workerDataDisks;
        this.workerInstanceTypes = props.workerInstanceTypes;
        this.workerSystemDiskCategory = props.workerSystemDiskCategory;
        this.workerSystemDiskSize = props.workerSystemDiskSize;
        this.workerSystemDiskSnapshotPolicyId = props.workerSystemDiskSnapshotPolicyId;
        this.workerZoneIds = props.workerZoneIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            masterInstanceTypes: this.masterInstanceTypes,
            masterVSwitchIds: this.masterVSwitchIds,
            name: this.name,
            vpcId: this.vpcId,
            workerVSwitchIds: this.workerVSwitchIds,
            addons: this.addons,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            chargeType: this.chargeType,
            cloudMonitorFlags: this.cloudMonitorFlags,
            containerCidr: this.containerCidr,
            cpuPolicy: this.cpuPolicy,
            deleteOptions: this.deleteOptions,
            deletionProtection: this.deletionProtection,
            disableRollback: this.disableRollback,
            endpointPublicAccess: this.endpointPublicAccess,
            formatDisk: this.formatDisk,
            isEnterpriseSecurityGroup: this.isEnterpriseSecurityGroup,
            keepInstanceName: this.keepInstanceName,
            keyPair: this.keyPair,
            kubernetesVersion: this.kubernetesVersion,
            loadBalancerSpec: this.loadBalancerSpec,
            loginPassword: this.loginPassword,
            masterCount: this.masterCount,
            masterDataDisk: this.masterDataDisk,
            masterDataDisks: this.masterDataDisks,
            masterSystemDiskCategory: this.masterSystemDiskCategory,
            masterSystemDiskPerformanceLevel: this.masterSystemDiskPerformanceLevel,
            masterSystemDiskSize: this.masterSystemDiskSize,
            masterSystemDiskSnapshotPolicyId: this.masterSystemDiskSnapshotPolicyId,
            masterZoneIds: this.masterZoneIds,
            nodeCidrMask: this.nodeCidrMask,
            nodeNameMode: this.nodeNameMode,
            nodePools: this.nodePools,
            nodePortRange: this.nodePortRange,
            numOfNodes: this.numOfNodes,
            osType: this.osType,
            period: this.period,
            periodUnit: this.periodUnit,
            platform: this.platform,
            podVswitchIds: this.podVswitchIds,
            proxyMode: this.proxyMode,
            resourceGroupId: this.resourceGroupId,
            runtime: this.runtime,
            securityGroupId: this.securityGroupId,
            securityHardeningOs: this.securityHardeningOs,
            serviceCidr: this.serviceCidr,
            snatEntry: this.snatEntry,
            socEnabled: this.socEnabled,
            sshFlags: this.sshFlags,
            tags: this.tags,
            taint: this.taint,
            timeoutMins: this.timeoutMins,
            timeZone: this.timeZone,
            userCa: this.userCa,
            userData: this.userData,
            workerDataDisk: this.workerDataDisk,
            workerDataDisks: this.workerDataDisks,
            workerInstanceTypes: this.workerInstanceTypes,
            workerSystemDiskCategory: this.workerSystemDiskCategory,
            workerSystemDiskSize: this.workerSystemDiskSize,
            workerSystemDiskSnapshotPolicyId: this.workerSystemDiskSnapshotPolicyId,
            workerZoneIds: this.workerZoneIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKubernetesClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosKubernetesCluster {
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
         * @Property name: Addon plugin name
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
function RosKubernetesCluster_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Addons` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_AddonsPropertyValidator(properties).assertSuccess();
    return {
      'Config': ros.stringToRosTemplate(properties.config),
      'Disabled': ros.booleanToRosTemplate(properties.disabled),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface DataDisksProperty {
        /**
         * @Property category: The type of data disk. Valid values:
     * cloud: basic disk.
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property encrypted: Specifies whether to encrypt a data disk. Valid values:
     * true: encrypts a data disk.
     * false: does not encrypt a data disk.
     * Default value: false.
         */
        readonly encrypted?: boolean | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of a data disk. The size is measured in GiB.
     * Valid values: 40 to 32768.
         */
        readonly size?: number | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
     * By default, this parameter is empty. This indicates that automatic backup is disabled.
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_DataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    return errors.wrap('supplied properties not correct for "DataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.DataDisks` resource
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.DataDisks` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_DataDisksPropertyValidator(properties).assertSuccess();
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'Encrypted': ros.booleanToRosTemplate(properties.encrypted),
      'PerformanceLevel': ros.stringToRosTemplate(properties.performanceLevel),
      'Size': ros.numberToRosTemplate(properties.size),
      'AutoSnapshotPolicyId': ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface DeleteOptionsProperty {
        /**
         * @Property deleteMode: Deletion policy of this type of resource. The value can be:
     * - delete: delete the resource.
     * - retain: retain the resource.
         */
        readonly deleteMode?: string | ros.IResolvable;
        /**
         * @Property resourceType: Resource type. The value can be:
     * - SLB: SLB resource created by service. It is deleted by default but can be retained
     * - ALB: ALB Ingress Controller Created ALB resource. It is reserved by default and can be deleted
     * - SLS_Data: log service Project used by the cluster log function. This service is reserved by default and can be deleted
     * - SLS_ControlPlane: Project log service used for logs of the managed cluster control plane. This service is reserved by default and can be deleted
     * - PrivateZone: ACK Serverless PrivateZone resource created in the cluster. It is reserved by default and can be deleted
     *
         */
        readonly resourceType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DeleteOptionsProperty`
 *
 * @param properties - the TypeScript properties of a `DeleteOptionsProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_DeleteOptionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.deleteMode && (typeof properties.deleteMode) !== 'object') {
        errors.collect(ros.propertyValidator('deleteMode', ros.validateAllowedValues)({
          data: properties.deleteMode,
          allowedValues: ["delete","retain"],
        }));
    }
    errors.collect(ros.propertyValidator('deleteMode', ros.validateString)(properties.deleteMode));
    if(properties.resourceType && (typeof properties.resourceType) !== 'object') {
        errors.collect(ros.propertyValidator('resourceType', ros.validateAllowedValues)({
          data: properties.resourceType,
          allowedValues: ["SLB","ALB","SLS_Data","SLS_ControlPlane","PrivateZone"],
        }));
    }
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    return errors.wrap('supplied properties not correct for "DeleteOptionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.DeleteOptions` resource
 *
 * @param properties - the TypeScript properties of a `DeleteOptionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.DeleteOptions` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterDeleteOptionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_DeleteOptionsPropertyValidator(properties).assertSuccess();
    return {
      'DeleteMode': ros.stringToRosTemplate(properties.deleteMode),
      'ResourceType': ros.stringToRosTemplate(properties.resourceType),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface KubernetesConfigProperty {
        /**
         * @Property cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
     * static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
     * none: This policy indicates that the default CPU affinity is used.
     * Default value: none.
         */
        readonly cpuPolicy?: string | ros.IResolvable;
        /**
         * @Property runtime: The name of the container runtime.
         */
        readonly runtime: string | ros.IResolvable;
        /**
         * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
         */
        readonly nodeNameMode?: string | ros.IResolvable;
        /**
         * @Property runtimeVersion: The version of the container runtime.
         */
        readonly runtimeVersion: string | ros.IResolvable;
        /**
         * @Property labels: You can add labels to nodes that are added to the cluster.
         */
        readonly labels?: Array<RosKubernetesCluster.LabelsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property taints: You can add taints to nodes that are added to the cluster.
         */
        readonly taints?: Array<RosKubernetesCluster.TaintsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `KubernetesConfigProperty`
 *
 * @param properties - the TypeScript properties of a `KubernetesConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_KubernetesConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cpuPolicy', ros.validateString)(properties.cpuPolicy));
    errors.collect(ros.propertyValidator('runtime', ros.requiredValidator)(properties.runtime));
    errors.collect(ros.propertyValidator('runtime', ros.validateString)(properties.runtime));
    errors.collect(ros.propertyValidator('nodeNameMode', ros.validateString)(properties.nodeNameMode));
    errors.collect(ros.propertyValidator('runtimeVersion', ros.requiredValidator)(properties.runtimeVersion));
    errors.collect(ros.propertyValidator('runtimeVersion', ros.validateString)(properties.runtimeVersion));
    if(properties.labels && (Array.isArray(properties.labels) || (typeof properties.labels) === 'string')) {
        errors.collect(ros.propertyValidator('labels', ros.validateLength)({
            data: properties.labels.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('labels', ros.listValidator(RosKubernetesCluster_LabelsPropertyValidator))(properties.labels));
    if(properties.taints && (Array.isArray(properties.taints) || (typeof properties.taints) === 'string')) {
        errors.collect(ros.propertyValidator('taints', ros.validateLength)({
            data: properties.taints.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('taints', ros.listValidator(RosKubernetesCluster_TaintsPropertyValidator))(properties.taints));
    return errors.wrap('supplied properties not correct for "KubernetesConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.KubernetesConfig` resource
 *
 * @param properties - the TypeScript properties of a `KubernetesConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.KubernetesConfig` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterKubernetesConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_KubernetesConfigPropertyValidator(properties).assertSuccess();
    return {
      'CpuPolicy': ros.stringToRosTemplate(properties.cpuPolicy),
      'Runtime': ros.stringToRosTemplate(properties.runtime),
      'NodeNameMode': ros.stringToRosTemplate(properties.nodeNameMode),
      'RuntimeVersion': ros.stringToRosTemplate(properties.runtimeVersion),
      'Labels': ros.listMapper(rosKubernetesClusterLabelsPropertyToRosTemplate)(properties.labels),
      'Taints': ros.listMapper(rosKubernetesClusterTaintsPropertyToRosTemplate)(properties.taints),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface LabelsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LabelsProperty`
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_LabelsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "LabelsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Labels` resource
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Labels` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterLabelsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_LabelsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface MasterDataDisksProperty {
        /**
         * @Property category: Data disk type. Value includes:
     * cloud: ordinary cloud disk
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: Data disk size in GiB.
         */
        readonly size: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MasterDataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `MasterDataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_MasterDataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    return errors.wrap('supplied properties not correct for "MasterDataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.MasterDataDisks` resource
 *
 * @param properties - the TypeScript properties of a `MasterDataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.MasterDataDisks` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterMasterDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_MasterDataDisksPropertyValidator(properties).assertSuccess();
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'Size': ros.numberToRosTemplate(properties.size),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface NodePoolInfoProperty {
        /**
         * @Property type: Node pool type. Value range:
     * ess: Node pool.
     * edge: Edge node pool.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property resourceGroupId: Resource Group ID of a node pool.
         */
        readonly resourceGroupId?: string | ros.IResolvable;
        /**
         * @Property name: The name of the node pool.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NodePoolInfoProperty`
 *
 * @param properties - the TypeScript properties of a `NodePoolInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_NodePoolInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["ess","edge"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "NodePoolInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.NodePoolInfo` resource
 *
 * @param properties - the TypeScript properties of a `NodePoolInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.NodePoolInfo` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterNodePoolInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_NodePoolInfoPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface NodePoolsProperty {
        /**
         * @Property nodePoolInfo: The configurations of the node pool.
         */
        readonly nodePoolInfo?: RosKubernetesCluster.NodePoolInfoProperty | ros.IResolvable;
        /**
         * @Property kubernetesConfig: The configurations of the ACK cluster.
         */
        readonly kubernetesConfig?: RosKubernetesCluster.KubernetesConfigProperty | ros.IResolvable;
        /**
         * @Property count: The number of nodes in the node pool.
         */
        readonly count?: number | ros.IResolvable;
        /**
         * @Property scalingGroup: The configurations of the scaling group used by the node pool.
         */
        readonly scalingGroup: RosKubernetesCluster.ScalingGroupProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NodePoolsProperty`
 *
 * @param properties - the TypeScript properties of a `NodePoolsProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_NodePoolsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('nodePoolInfo', RosKubernetesCluster_NodePoolInfoPropertyValidator)(properties.nodePoolInfo));
    errors.collect(ros.propertyValidator('kubernetesConfig', RosKubernetesCluster_KubernetesConfigPropertyValidator)(properties.kubernetesConfig));
    errors.collect(ros.propertyValidator('count', ros.validateNumber)(properties.count));
    errors.collect(ros.propertyValidator('scalingGroup', ros.requiredValidator)(properties.scalingGroup));
    errors.collect(ros.propertyValidator('scalingGroup', RosKubernetesCluster_ScalingGroupPropertyValidator)(properties.scalingGroup));
    return errors.wrap('supplied properties not correct for "NodePoolsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.NodePools` resource
 *
 * @param properties - the TypeScript properties of a `NodePoolsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.NodePools` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterNodePoolsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_NodePoolsPropertyValidator(properties).assertSuccess();
    return {
      'NodePoolInfo': rosKubernetesClusterNodePoolInfoPropertyToRosTemplate(properties.nodePoolInfo),
      'KubernetesConfig': rosKubernetesClusterKubernetesConfigPropertyToRosTemplate(properties.kubernetesConfig),
      'Count': ros.numberToRosTemplate(properties.count),
      'ScalingGroup': rosKubernetesClusterScalingGroupPropertyToRosTemplate(properties.scalingGroup),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface RuntimeProperty {
        /**
         * @Property version: The version of the container runtime.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property name: The name of the container runtime. Supports containerd, docker or sandboxed-container.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RuntimeProperty`
 *
 * @param properties - the TypeScript properties of a `RuntimeProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_RuntimePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RuntimeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Runtime` resource
 *
 * @param properties - the TypeScript properties of a `RuntimeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Runtime` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterRuntimePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_RuntimePropertyValidator(properties).assertSuccess();
    return {
      'Version': ros.stringToRosTemplate(properties.version),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface ScalingGroupProperty {
        /**
         * @Property keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
         */
        readonly keyPair?: string | ros.IResolvable;
        /**
         * @Property platform: The release version of the operating system. Valid values:
     * CentOS, AliyunLinux, Windows, WindowsCore.
     * Default value: AliyunLinux.
         */
        readonly platform?: string | ros.IResolvable;
        /**
         * @Property dataDisks: The configurations of data disks.
         */
        readonly dataDisks?: Array<RosKubernetesCluster.DataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
         */
        readonly systemDiskSize: number | ros.IResolvable;
        /**
         * @Property vSwitchIds: The IDs of vSwitches.
         */
        readonly vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceChargeType: The billing method of nodes in the node pool. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Default value: PostPaid.
         */
        readonly instanceChargeType?: string | ros.IResolvable;
        /**
         * @Property period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12. 
     * Default value: 1.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property systemDiskCategory: The type of system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly systemDiskCategory?: string | ros.IResolvable;
        /**
         * @Property internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
         */
        readonly internetChargeType?: string | ros.IResolvable;
        /**
         * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. 
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
         */
        readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;
        /**
         * @Property internetMaxBandwidthOut: The release version of the operating system. Valid values:
     * CentOS, AliyunLinux, Windows, WindowsCore.
     * Default value: AliyunLinux.
         */
        readonly internetMaxBandwidthOut?: number | ros.IResolvable;
        /**
         * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property rdsInstances: The IDs of the ApsaraDB RDS instances.
         */
        readonly rdsInstances?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property imageId: The ID of a custom image. By default, the image provided by ACK is used.
         */
        readonly imageId?: string | ros.IResolvable;
        /**
         * @Property instanceTypes: The ECS instance types of the nodes.
         */
        readonly instanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property zoneIds: Zone ids of virtual switches belongs to.
         */
        readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: Adds labels only to ECS instances.
     * A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:\/\/ or http:\/\/.
         */
        readonly tags?: RosKubernetesCluster.ScalingGroupTagsProperty[];
        /**
         * @Property periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. A value of Month specifies that the subscription period is measured in months.
         */
        readonly periodUnit?: string | ros.IResolvable;
        /**
         * @Property loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
         */
        readonly loginPassword?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ScalingGroupProperty`
 *
 * @param properties - the TypeScript properties of a `ScalingGroupProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_ScalingGroupPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPair', ros.validateString)(properties.keyPair));
    errors.collect(ros.propertyValidator('platform', ros.validateString)(properties.platform));
    if(properties.dataDisks && (Array.isArray(properties.dataDisks) || (typeof properties.dataDisks) === 'string')) {
        errors.collect(ros.propertyValidator('dataDisks', ros.validateLength)({
            data: properties.dataDisks.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dataDisks', ros.listValidator(RosKubernetesCluster_DataDisksPropertyValidator))(properties.dataDisks));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.requiredValidator)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.requiredValidator)(properties.vSwitchIds));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('isEnterpriseSecurityGroup', ros.validateBoolean)(properties.isEnterpriseSecurityGroup));
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    if(properties.rdsInstances && (Array.isArray(properties.rdsInstances) || (typeof properties.rdsInstances) === 'string')) {
        errors.collect(ros.propertyValidator('rdsInstances', ros.validateLength)({
            data: properties.rdsInstances.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('rdsInstances', ros.listValidator(ros.validateString))(properties.rdsInstances));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('instanceTypes', ros.requiredValidator)(properties.instanceTypes));
    if(properties.instanceTypes && (Array.isArray(properties.instanceTypes) || (typeof properties.instanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('instanceTypes', ros.validateLength)({
            data: properties.instanceTypes.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('instanceTypes', ros.listValidator(ros.validateString))(properties.instanceTypes));
    errors.collect(ros.propertyValidator('zoneIds', ros.listValidator(ros.validateString))(properties.zoneIds));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosKubernetesCluster_ScalingGroupTagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('loginPassword', ros.validateString)(properties.loginPassword));
    return errors.wrap('supplied properties not correct for "ScalingGroupProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.ScalingGroup` resource
 *
 * @param properties - the TypeScript properties of a `ScalingGroupProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.ScalingGroup` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterScalingGroupPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_ScalingGroupPropertyValidator(properties).assertSuccess();
    return {
      'KeyPair': ros.stringToRosTemplate(properties.keyPair),
      'Platform': ros.stringToRosTemplate(properties.platform),
      'DataDisks': ros.listMapper(rosKubernetesClusterDataDisksPropertyToRosTemplate)(properties.dataDisks),
      'SystemDiskSize': ros.numberToRosTemplate(properties.systemDiskSize),
      'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'Period': ros.numberToRosTemplate(properties.period),
      'SystemDiskCategory': ros.stringToRosTemplate(properties.systemDiskCategory),
      'InternetChargeType': ros.stringToRosTemplate(properties.internetChargeType),
      'IsEnterpriseSecurityGroup': ros.booleanToRosTemplate(properties.isEnterpriseSecurityGroup),
      'InternetMaxBandwidthOut': ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      'SystemDiskPerformanceLevel': ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
      'RdsInstances': ros.listMapper(ros.stringToRosTemplate)(properties.rdsInstances),
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'InstanceTypes': ros.listMapper(ros.stringToRosTemplate)(properties.instanceTypes),
      'ZoneIds': ros.listMapper(ros.stringToRosTemplate)(properties.zoneIds),
      'Tags': ros.listMapper(rosKubernetesClusterScalingGroupTagsPropertyToRosTemplate)(properties.tags),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'LoginPassword': ros.stringToRosTemplate(properties.loginPassword),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface ScalingGroupTagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ScalingGroupTagsProperty`
 *
 * @param properties - the TypeScript properties of a `ScalingGroupTagsProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_ScalingGroupTagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "ScalingGroupTagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.ScalingGroupTags` resource
 *
 * @param properties - the TypeScript properties of a `ScalingGroupTagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.ScalingGroupTags` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterScalingGroupTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_ScalingGroupTagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosKubernetesCluster {
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
function RosKubernetesCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface TaintsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property effect: The scheduling policy. Valid values:
     * NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
     * NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
     * PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
     * Default value: NoSchedule.
         */
        readonly effect?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TaintsProperty`
 *
 * @param properties - the TypeScript properties of a `TaintsProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_TaintsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    if(properties.effect && (typeof properties.effect) !== 'object') {
        errors.collect(ros.propertyValidator('effect', ros.validateAllowedValues)({
          data: properties.effect,
          allowedValues: ["NoSchedule","NoExecute","PreferNoSchedule"],
        }));
    }
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TaintsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Taints` resource
 *
 * @param properties - the TypeScript properties of a `TaintsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.Taints` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterTaintsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_TaintsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Effect': ros.stringToRosTemplate(properties.effect),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    export interface WorkerDataDisksProperty {
        /**
         * @Property category: Data disk type. Value includes:
     * cloud: ordinary cloud disk
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: Data disk size in GiB.
         */
        readonly size: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WorkerDataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosKubernetesCluster_WorkerDataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    return errors.wrap('supplied properties not correct for "WorkerDataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.WorkerDataDisks` resource
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::KubernetesCluster.WorkerDataDisks` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterWorkerDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKubernetesCluster_WorkerDataDisksPropertyValidator(properties).assertSuccess();
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'Size': ros.numberToRosTemplate(properties.size),
    };
}

/**
 * Properties for defining a `RosManagedEdgeKubernetesCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managededgekubernetescluster
 */
export interface RosManagedEdgeKubernetesClusterProps {

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300]
     */
    readonly numOfNodes: number | ros.IResolvable;

    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosManagedEdgeKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;

    /**
     * @Property clusterSpec: The edge managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    readonly clusterSpec?: string | ros.IResolvable;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0\/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;

    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster. 
     * After deletion protection is enabled, the cluster cannot be deleted 
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. 
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;

    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. 
     * This number is determined by the specified pod CIDR block. 
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    readonly nodeCidrMask?: string | ros.IResolvable;

    /**
     * @Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
     * Default to 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Year: time in years
     * Default to Month
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property profile: Edge cluster ID. The default value is Edge.
     */
    readonly profile?: string | ros.IResolvable;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

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
    readonly tags?: RosManagedEdgeKubernetesCluster.TagsProperty[];

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0\/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    readonly vSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;

    /**
     * @Property workerDataDiskCategory: Data disk type.
     */
    readonly workerDataDiskCategory?: string | ros.IResolvable;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    readonly workerDataDisks?: Array<RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerDataDiskSize: Data disk size in GiB.
     */
    readonly workerDataDiskSize?: number | ros.IResolvable;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. 
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;

    /**
     * @Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosManagedEdgeKubernetesClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosManagedEdgeKubernetesClusterProps`
 *
 * @returns the result of the validation.
 */
function RosManagedEdgeKubernetesClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpointPublicAccess', ros.validateBoolean)(properties.endpointPublicAccess));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosManagedEdgeKubernetesCluster_AddonsPropertyValidator))(properties.addons));
    errors.collect(ros.propertyValidator('workerSystemDiskCategory', ros.validateString)(properties.workerSystemDiskCategory));
    if(properties.workerSystemDiskSize && (typeof properties.workerSystemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateRange)({
            data: properties.workerSystemDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateNumber)(properties.workerSystemDiskSize));
    errors.collect(ros.propertyValidator('profile', ros.validateString)(properties.profile));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('isEnterpriseSecurityGroup', ros.validateBoolean)(properties.isEnterpriseSecurityGroup));
    if(properties.workerDataDiskSize && (typeof properties.workerDataDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('workerDataDiskSize', ros.validateRange)({
            data: properties.workerDataDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerDataDiskSize', ros.validateNumber)(properties.workerDataDiskSize));
    errors.collect(ros.propertyValidator('cloudMonitorFlags', ros.validateBoolean)(properties.cloudMonitorFlags));
    errors.collect(ros.propertyValidator('serviceCidr', ros.validateString)(properties.serviceCidr));
    errors.collect(ros.propertyValidator('zoneIds', ros.listValidator(ros.validateString))(properties.zoneIds));
    errors.collect(ros.propertyValidator('proxyMode', ros.validateString)(properties.proxyMode));
    errors.collect(ros.propertyValidator('disableRollback', ros.validateBoolean)(properties.disableRollback));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosManagedEdgeKubernetesCluster_TagsPropertyValidator))(properties.tags));
    if(properties.workerInstanceTypes && (Array.isArray(properties.workerInstanceTypes) || (typeof properties.workerInstanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('workerInstanceTypes', ros.validateLength)({
            data: properties.workerInstanceTypes.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('workerInstanceTypes', ros.listValidator(ros.validateString))(properties.workerInstanceTypes));
    errors.collect(ros.propertyValidator('loginPassword', ros.validateString)(properties.loginPassword));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('containerCidr', ros.validateString)(properties.containerCidr));
    errors.collect(ros.propertyValidator('keyPair', ros.validateString)(properties.keyPair));
    errors.collect(ros.propertyValidator('nodeCidrMask', ros.validateString)(properties.nodeCidrMask));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateAny))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('workerDataDisks', ros.listValidator(RosManagedEdgeKubernetesCluster_WorkerDataDisksPropertyValidator))(properties.workerDataDisks));
    errors.collect(ros.propertyValidator('timeoutMins', ros.validateNumber)(properties.timeoutMins));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('clusterSpec', ros.validateString)(properties.clusterSpec));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('workerDataDisk', ros.validateBoolean)(properties.workerDataDisk));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('numOfNodes', ros.requiredValidator)(properties.numOfNodes));
    if(properties.numOfNodes && (typeof properties.numOfNodes) !== 'object') {
        errors.collect(ros.propertyValidator('numOfNodes', ros.validateRange)({
            data: properties.numOfNodes,
            min: 0,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('numOfNodes', ros.validateNumber)(properties.numOfNodes));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('workerDataDiskCategory', ros.validateString)(properties.workerDataDiskCategory));
    errors.collect(ros.propertyValidator('snatEntry', ros.validateBoolean)(properties.snatEntry));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosManagedEdgeKubernetesClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosManagedEdgeKubernetesClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster` resource.
 */
// @ts-ignore TS6133
function rosManagedEdgeKubernetesClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosManagedEdgeKubernetesClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'NumOfNodes': ros.numberToRosTemplate(properties.numOfNodes),
      'Addons': ros.listMapper(rosManagedEdgeKubernetesClusterAddonsPropertyToRosTemplate)(properties.addons),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'CloudMonitorFlags': ros.booleanToRosTemplate(properties.cloudMonitorFlags),
      'ClusterSpec': ros.stringToRosTemplate(properties.clusterSpec),
      'ContainerCidr': ros.stringToRosTemplate(properties.containerCidr),
      'DeletionProtection': ros.booleanToRosTemplate(properties.deletionProtection),
      'DisableRollback': ros.booleanToRosTemplate(properties.disableRollback),
      'EndpointPublicAccess': ros.booleanToRosTemplate(properties.endpointPublicAccess),
      'IsEnterpriseSecurityGroup': ros.booleanToRosTemplate(properties.isEnterpriseSecurityGroup),
      'KeyPair': ros.stringToRosTemplate(properties.keyPair),
      'LoginPassword': ros.stringToRosTemplate(properties.loginPassword),
      'NodeCidrMask': ros.stringToRosTemplate(properties.nodeCidrMask),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'Profile': ros.stringToRosTemplate(properties.profile),
      'ProxyMode': ros.stringToRosTemplate(properties.proxyMode),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'ServiceCidr': ros.stringToRosTemplate(properties.serviceCidr),
      'SnatEntry': ros.booleanToRosTemplate(properties.snatEntry),
      'Tags': ros.listMapper(rosManagedEdgeKubernetesClusterTagsPropertyToRosTemplate)(properties.tags),
      'TimeoutMins': ros.numberToRosTemplate(properties.timeoutMins),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchIds': ros.listMapper(ros.objectToRosTemplate)(properties.vSwitchIds),
      'WorkerDataDisk': ros.booleanToRosTemplate(properties.workerDataDisk),
      'WorkerDataDiskCategory': ros.stringToRosTemplate(properties.workerDataDiskCategory),
      'WorkerDataDisks': ros.listMapper(rosManagedEdgeKubernetesClusterWorkerDataDisksPropertyToRosTemplate)(properties.workerDataDisks),
      'WorkerDataDiskSize': ros.numberToRosTemplate(properties.workerDataDiskSize),
      'WorkerInstanceTypes': ros.listMapper(ros.stringToRosTemplate)(properties.workerInstanceTypes),
      'WorkerSystemDiskCategory': ros.stringToRosTemplate(properties.workerSystemDiskCategory),
      'WorkerSystemDiskSize': ros.numberToRosTemplate(properties.workerSystemDiskSize),
      'ZoneIds': ros.listMapper(ros.stringToRosTemplate)(properties.zoneIds),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ManagedEdgeKubernetesCluster`, which is used to create a Container Service for Kubernetes (ACK) edge cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ManagedEdgeKubernetesCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managededgekubernetescluster
 */
export class RosManagedEdgeKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ManagedEdgeKubernetesCluster";

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
     * @Property numOfNodes: Number of worker nodes. The range is [0,300]
     */
    public numOfNodes: number | ros.IResolvable;

    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    public addons: Array<RosManagedEdgeKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    public cloudMonitorFlags: boolean | ros.IResolvable | undefined;

    /**
     * @Property clusterSpec: The edge managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    public clusterSpec: string | ros.IResolvable | undefined;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0\/16 is used by default.
     */
    public containerCidr: string | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster. 
     * After deletion protection is enabled, the cluster cannot be deleted 
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    public disableRollback: boolean | ros.IResolvable | undefined;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
     */
    public endpointPublicAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. 
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    public isEnterpriseSecurityGroup: boolean | ros.IResolvable | undefined;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    public keyPair: string | ros.IResolvable | undefined;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    public loginPassword: string | ros.IResolvable | undefined;

    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. 
     * This number is determined by the specified pod CIDR block. 
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    public nodeCidrMask: string | ros.IResolvable | undefined;

    /**
     * @Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
     * Default to 1.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Year: time in years
     * Default to Month
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property profile: Edge cluster ID. The default value is Edge.
     */
    public profile: string | ros.IResolvable | undefined;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    public proxyMode: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    public serviceCidr: string | ros.IResolvable | undefined;

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
    public tags: RosManagedEdgeKubernetesCluster.TagsProperty[] | undefined;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    public timeoutMins: number | ros.IResolvable | undefined;

    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0\/16. 
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    public vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    public workerDataDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property workerDataDiskCategory: Data disk type.
     */
    public workerDataDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    public workerDataDisks: Array<RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerDataDiskSize: Data disk size in GiB.
     */
    public workerDataDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    public workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. 
     * Default to cloud_efficiency.
     */
    public workerSystemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    public workerSystemDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    public zoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedEdgeKubernetesClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosManagedEdgeKubernetesCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
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
        this.numOfNodes = props.numOfNodes;
        this.addons = props.addons;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.chargeType = props.chargeType;
        this.cloudMonitorFlags = props.cloudMonitorFlags;
        this.clusterSpec = props.clusterSpec;
        this.containerCidr = props.containerCidr;
        this.deletionProtection = props.deletionProtection;
        this.disableRollback = props.disableRollback;
        this.endpointPublicAccess = props.endpointPublicAccess;
        this.isEnterpriseSecurityGroup = props.isEnterpriseSecurityGroup;
        this.keyPair = props.keyPair;
        this.loginPassword = props.loginPassword;
        this.nodeCidrMask = props.nodeCidrMask;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.profile = props.profile;
        this.proxyMode = props.proxyMode;
        this.resourceGroupId = props.resourceGroupId;
        this.serviceCidr = props.serviceCidr;
        this.snatEntry = props.snatEntry;
        this.tags = props.tags;
        this.timeoutMins = props.timeoutMins;
        this.vpcId = props.vpcId;
        this.vSwitchIds = props.vSwitchIds;
        this.workerDataDisk = props.workerDataDisk;
        this.workerDataDiskCategory = props.workerDataDiskCategory;
        this.workerDataDisks = props.workerDataDisks;
        this.workerDataDiskSize = props.workerDataDiskSize;
        this.workerInstanceTypes = props.workerInstanceTypes;
        this.workerSystemDiskCategory = props.workerSystemDiskCategory;
        this.workerSystemDiskSize = props.workerSystemDiskSize;
        this.zoneIds = props.zoneIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            numOfNodes: this.numOfNodes,
            addons: this.addons,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            chargeType: this.chargeType,
            cloudMonitorFlags: this.cloudMonitorFlags,
            clusterSpec: this.clusterSpec,
            containerCidr: this.containerCidr,
            deletionProtection: this.deletionProtection,
            disableRollback: this.disableRollback,
            endpointPublicAccess: this.endpointPublicAccess,
            isEnterpriseSecurityGroup: this.isEnterpriseSecurityGroup,
            keyPair: this.keyPair,
            loginPassword: this.loginPassword,
            nodeCidrMask: this.nodeCidrMask,
            period: this.period,
            periodUnit: this.periodUnit,
            profile: this.profile,
            proxyMode: this.proxyMode,
            resourceGroupId: this.resourceGroupId,
            serviceCidr: this.serviceCidr,
            snatEntry: this.snatEntry,
            tags: this.tags,
            timeoutMins: this.timeoutMins,
            vpcId: this.vpcId,
            vSwitchIds: this.vSwitchIds,
            workerDataDisk: this.workerDataDisk,
            workerDataDiskCategory: this.workerDataDiskCategory,
            workerDataDisks: this.workerDataDisks,
            workerDataDiskSize: this.workerDataDiskSize,
            workerInstanceTypes: this.workerInstanceTypes,
            workerSystemDiskCategory: this.workerSystemDiskCategory,
            workerSystemDiskSize: this.workerSystemDiskSize,
            zoneIds: this.zoneIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosManagedEdgeKubernetesClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosManagedEdgeKubernetesCluster {
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
function RosManagedEdgeKubernetesCluster_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.Addons` resource.
 */
// @ts-ignore TS6133
function rosManagedEdgeKubernetesClusterAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedEdgeKubernetesCluster_AddonsPropertyValidator(properties).assertSuccess();
    return {
      'Config': ros.stringToRosTemplate(properties.config),
      'Disabled': ros.booleanToRosTemplate(properties.disabled),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosManagedEdgeKubernetesCluster {
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
function RosManagedEdgeKubernetesCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosManagedEdgeKubernetesClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedEdgeKubernetesCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    export interface WorkerDataDisksProperty {
        /**
         * @Property category: Data disk type. Value includes:
     * cloud: ordinary cloud disk
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: Data disk size in GiB.
         */
        readonly size: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WorkerDataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedEdgeKubernetesCluster_WorkerDataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    return errors.wrap('supplied properties not correct for "WorkerDataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.WorkerDataDisks` resource
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedEdgeKubernetesCluster.WorkerDataDisks` resource.
 */
// @ts-ignore TS6133
function rosManagedEdgeKubernetesClusterWorkerDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedEdgeKubernetesCluster_WorkerDataDisksPropertyValidator(properties).assertSuccess();
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'Size': ros.numberToRosTemplate(properties.size),
    };
}

/**
 * Properties for defining a `RosManagedKubernetesCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managedkubernetescluster
 */
export interface RosManagedKubernetesClusterProps {

    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    readonly vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons?: Array<RosManagedKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;

    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    readonly clusterSpec?: string | ros.IResolvable;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0\/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;

    /**
     * @Property deleteOptions: Delete options, only work for deleting resource.
     */
    readonly deleteOptions?: Array<RosManagedKubernetesCluster.DeleteOptionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster. 
     * After deletion protection is enabled, the cluster cannot be deleted 
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;

    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    readonly encryptionProviderKey?: string | ros.IResolvable;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * @Property formatDisk: Specifies whether to mount a data disk to nodes that are created 
     * on existing Elastic Compute Service (ECS) instances. Valid values:
     * true: stores the data of containers and images on a data disk. 
     * The original data on the disk will be overwritten. 
     * Back up data before you mount the disk.
     * false: does not store the data of containers and images on a data disk.
     * Default value: false.
     * How to mount a data disk:
     * If the ECS instances have data disks mounted and the file system of the last 
     * data disk is not initialized, the system automatically formats the data disk to ext4. 
     * Then, the system mounts the data disk to \/var\/lib\/docker and \/var\/lib\/kubelet.
     * The system does not create or mount a new data disk if no data disk has been 
     * mounted to the ECS instances.
     */
    readonly formatDisk?: boolean | ros.IResolvable;

    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. 
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;

    /**
     * @Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
     * true: retains the names.
     * false: does not retain the names. The new names are assigned by the system.
     * Default value: true.
     */
    readonly keepInstanceName?: boolean | ros.IResolvable;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;

    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;

    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. 
     * This number is determined by the specified pod CIDR block. 
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    readonly nodeCidrMask?: string | ros.IResolvable;

    /**
     * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
     */
    readonly nodeNameMode?: string | ros.IResolvable;

    /**
     * @Property nodePools: The configurations of Node pools.
     */
    readonly nodePools?: Array<RosManagedKubernetesCluster.NodePoolsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    readonly numOfNodes?: number | ros.IResolvable;

    /**
     * @Property osType: The type of operating system. Valid values:
     * Windows
     * Linux
     * Default value: Linux.
     */
    readonly osType?: string | ros.IResolvable;

    /**
     * @Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
     * Default to 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Year: time in years
     * Default to Month
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property platform: The release version of the operating system. Valid values:
     * CentOS
     * AliyunLinux
     * QbootAliyunLinux
     * Qboot
     * Windows
     * WindowsCore
     * Default value: CentOS.
     */
    readonly platform?: string | ros.IResolvable;

    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    readonly podVswitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    readonly runtime?: RosManagedKubernetesCluster.RuntimeProperty | ros.IResolvable;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property securityHardeningOs: Alibaba Cloud OS security hardening. Value:
     * true: enables security hardening OS.
     * false: disables security hardening OS.
     * Default value: false.
     */
    readonly securityHardeningOs?: boolean | ros.IResolvable;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

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
     * @Property socEnabled: Valid values:
     * true: enables reinforcement based on classified protection.
     * false: disables reinforcement based on classified protection.
     * Default value: false.
     */
    readonly socEnabled?: boolean | ros.IResolvable;

    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosManagedKubernetesCluster.TagsProperty[];

    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    readonly taint?: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;

    /**
     * @Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    readonly workerDataDisks?: Array<RosManagedKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL0. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     *
     */
    readonly workerSystemDiskPerformanceLevel?: string | ros.IResolvable;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;

    /**
     * @Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosManagedKubernetesClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosManagedKubernetesClusterProps`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpointPublicAccess', ros.validateBoolean)(properties.endpointPublicAccess));
    errors.collect(ros.propertyValidator('socEnabled', ros.validateBoolean)(properties.socEnabled));
    errors.collect(ros.propertyValidator('platform', ros.validateString)(properties.platform));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('loadBalancerSpec', ros.validateString)(properties.loadBalancerSpec));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('taint', ros.listValidator(ros.validateAnyDict))(properties.taint));
    errors.collect(ros.propertyValidator('isEnterpriseSecurityGroup', ros.validateBoolean)(properties.isEnterpriseSecurityGroup));
    errors.collect(ros.propertyValidator('runtime', RosManagedKubernetesCluster_RuntimePropertyValidator)(properties.runtime));
    if(properties.osType && (typeof properties.osType) !== 'object') {
        errors.collect(ros.propertyValidator('osType', ros.validateAllowedValues)({
          data: properties.osType,
          allowedValues: ["Windows","Linux"],
        }));
    }
    errors.collect(ros.propertyValidator('osType', ros.validateString)(properties.osType));
    errors.collect(ros.propertyValidator('nodeNameMode', ros.validateString)(properties.nodeNameMode));
    errors.collect(ros.propertyValidator('proxyMode', ros.validateString)(properties.proxyMode));
    errors.collect(ros.propertyValidator('disableRollback', ros.validateBoolean)(properties.disableRollback));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosManagedKubernetesCluster_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('containerCidr', ros.validateString)(properties.containerCidr));
    errors.collect(ros.propertyValidator('deleteOptions', ros.listValidator(RosManagedKubernetesCluster_DeleteOptionsPropertyValidator))(properties.deleteOptions));
    errors.collect(ros.propertyValidator('keyPair', ros.validateString)(properties.keyPair));
    errors.collect(ros.propertyValidator('nodeCidrMask', ros.validateString)(properties.nodeCidrMask));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.requiredValidator)(properties.vSwitchIds));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.nodePools && (Array.isArray(properties.nodePools) || (typeof properties.nodePools) === 'string')) {
        errors.collect(ros.propertyValidator('nodePools', ros.validateLength)({
            data: properties.nodePools.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('nodePools', ros.listValidator(RosManagedKubernetesCluster_NodePoolsPropertyValidator))(properties.nodePools));
    errors.collect(ros.propertyValidator('encryptionProviderKey', ros.validateString)(properties.encryptionProviderKey));
    errors.collect(ros.propertyValidator('snatEntry', ros.validateBoolean)(properties.snatEntry));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('formatDisk', ros.validateBoolean)(properties.formatDisk));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('addons', ros.listValidator(RosManagedKubernetesCluster_AddonsPropertyValidator))(properties.addons));
    errors.collect(ros.propertyValidator('workerSystemDiskCategory', ros.validateString)(properties.workerSystemDiskCategory));
    if(properties.workerSystemDiskSize && (typeof properties.workerSystemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateRange)({
            data: properties.workerSystemDiskSize,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workerSystemDiskSize', ros.validateNumber)(properties.workerSystemDiskSize));
    errors.collect(ros.propertyValidator('cloudMonitorFlags', ros.validateBoolean)(properties.cloudMonitorFlags));
    errors.collect(ros.propertyValidator('securityHardeningOs', ros.validateBoolean)(properties.securityHardeningOs));
    errors.collect(ros.propertyValidator('serviceCidr', ros.validateString)(properties.serviceCidr));
    errors.collect(ros.propertyValidator('podVswitchIds', ros.listValidator(ros.validateString))(properties.podVswitchIds));
    errors.collect(ros.propertyValidator('zoneIds', ros.listValidator(ros.validateString))(properties.zoneIds));
    errors.collect(ros.propertyValidator('workerSystemDiskPerformanceLevel', ros.validateString)(properties.workerSystemDiskPerformanceLevel));
    if(properties.workerInstanceTypes && (Array.isArray(properties.workerInstanceTypes) || (typeof properties.workerInstanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('workerInstanceTypes', ros.validateLength)({
            data: properties.workerInstanceTypes.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('workerInstanceTypes', ros.listValidator(ros.validateString))(properties.workerInstanceTypes));
    errors.collect(ros.propertyValidator('loginPassword', ros.validateString)(properties.loginPassword));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('kubernetesVersion', ros.validateString)(properties.kubernetesVersion));
    errors.collect(ros.propertyValidator('workerDataDisks', ros.listValidator(RosManagedKubernetesCluster_WorkerDataDisksPropertyValidator))(properties.workerDataDisks));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('timeoutMins', ros.validateNumber)(properties.timeoutMins));
    errors.collect(ros.propertyValidator('clusterSpec', ros.validateString)(properties.clusterSpec));
    errors.collect(ros.propertyValidator('workerDataDisk', ros.validateBoolean)(properties.workerDataDisk));
    if(properties.numOfNodes && (typeof properties.numOfNodes) !== 'object') {
        errors.collect(ros.propertyValidator('numOfNodes', ros.validateRange)({
            data: properties.numOfNodes,
            min: 0,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('numOfNodes', ros.validateNumber)(properties.numOfNodes));
    errors.collect(ros.propertyValidator('keepInstanceName', ros.validateBoolean)(properties.keepInstanceName));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    return errors.wrap('supplied properties not correct for "RosManagedKubernetesClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosManagedKubernetesClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosManagedKubernetesClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      'Addons': ros.listMapper(rosManagedKubernetesClusterAddonsPropertyToRosTemplate)(properties.addons),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'CloudMonitorFlags': ros.booleanToRosTemplate(properties.cloudMonitorFlags),
      'ClusterSpec': ros.stringToRosTemplate(properties.clusterSpec),
      'ContainerCidr': ros.stringToRosTemplate(properties.containerCidr),
      'DeleteOptions': ros.listMapper(rosManagedKubernetesClusterDeleteOptionsPropertyToRosTemplate)(properties.deleteOptions),
      'DeletionProtection': ros.booleanToRosTemplate(properties.deletionProtection),
      'DisableRollback': ros.booleanToRosTemplate(properties.disableRollback),
      'EncryptionProviderKey': ros.stringToRosTemplate(properties.encryptionProviderKey),
      'EndpointPublicAccess': ros.booleanToRosTemplate(properties.endpointPublicAccess),
      'FormatDisk': ros.booleanToRosTemplate(properties.formatDisk),
      'IsEnterpriseSecurityGroup': ros.booleanToRosTemplate(properties.isEnterpriseSecurityGroup),
      'KeepInstanceName': ros.booleanToRosTemplate(properties.keepInstanceName),
      'KeyPair': ros.stringToRosTemplate(properties.keyPair),
      'KubernetesVersion': ros.stringToRosTemplate(properties.kubernetesVersion),
      'LoadBalancerSpec': ros.stringToRosTemplate(properties.loadBalancerSpec),
      'LoginPassword': ros.stringToRosTemplate(properties.loginPassword),
      'NodeCidrMask': ros.stringToRosTemplate(properties.nodeCidrMask),
      'NodeNameMode': ros.stringToRosTemplate(properties.nodeNameMode),
      'NodePools': ros.listMapper(rosManagedKubernetesClusterNodePoolsPropertyToRosTemplate)(properties.nodePools),
      'NumOfNodes': ros.numberToRosTemplate(properties.numOfNodes),
      'OsType': ros.stringToRosTemplate(properties.osType),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'Platform': ros.stringToRosTemplate(properties.platform),
      'PodVswitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.podVswitchIds),
      'ProxyMode': ros.stringToRosTemplate(properties.proxyMode),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Runtime': rosManagedKubernetesClusterRuntimePropertyToRosTemplate(properties.runtime),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'SecurityHardeningOs': ros.booleanToRosTemplate(properties.securityHardeningOs),
      'ServiceCidr': ros.stringToRosTemplate(properties.serviceCidr),
      'SnatEntry': ros.booleanToRosTemplate(properties.snatEntry),
      'SocEnabled': ros.booleanToRosTemplate(properties.socEnabled),
      'Tags': ros.listMapper(rosManagedKubernetesClusterTagsPropertyToRosTemplate)(properties.tags),
      'Taint': ros.listMapper(ros.anyDictToRosTemplate)(properties.taint),
      'TimeoutMins': ros.numberToRosTemplate(properties.timeoutMins),
      'UserData': ros.stringToRosTemplate(properties.userData),
      'WorkerDataDisk': ros.booleanToRosTemplate(properties.workerDataDisk),
      'WorkerDataDisks': ros.listMapper(rosManagedKubernetesClusterWorkerDataDisksPropertyToRosTemplate)(properties.workerDataDisks),
      'WorkerInstanceTypes': ros.listMapper(ros.stringToRosTemplate)(properties.workerInstanceTypes),
      'WorkerSystemDiskCategory': ros.stringToRosTemplate(properties.workerSystemDiskCategory),
      'WorkerSystemDiskPerformanceLevel': ros.stringToRosTemplate(properties.workerSystemDiskPerformanceLevel),
      'WorkerSystemDiskSize': ros.numberToRosTemplate(properties.workerSystemDiskSize),
      'ZoneIds': ros.listMapper(ros.stringToRosTemplate)(properties.zoneIds),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ManagedKubernetesCluster`, which is used to create a Container Service for Kubernetes (ACK) managed cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ManagedKubernetesCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managedkubernetescluster
 */
export class RosManagedKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ManagedKubernetesCluster";

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
     * @Property vpcId: VPC ID.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    public vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    public addons: Array<RosManagedKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    public cloudMonitorFlags: boolean | ros.IResolvable | undefined;

    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    public clusterSpec: string | ros.IResolvable | undefined;

    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0\/16 is used by default.
     */
    public containerCidr: string | ros.IResolvable | undefined;

    /**
     * @Property deleteOptions: Delete options, only work for deleting resource.
     */
    public deleteOptions: Array<RosManagedKubernetesCluster.DeleteOptionsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster. 
     * After deletion protection is enabled, the cluster cannot be deleted 
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    public disableRollback: boolean | ros.IResolvable | undefined;

    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    public encryptionProviderKey: string | ros.IResolvable | undefined;

    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    public endpointPublicAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property formatDisk: Specifies whether to mount a data disk to nodes that are created 
     * on existing Elastic Compute Service (ECS) instances. Valid values:
     * true: stores the data of containers and images on a data disk. 
     * The original data on the disk will be overwritten. 
     * Back up data before you mount the disk.
     * false: does not store the data of containers and images on a data disk.
     * Default value: false.
     * How to mount a data disk:
     * If the ECS instances have data disks mounted and the file system of the last 
     * data disk is not initialized, the system automatically formats the data disk to ext4. 
     * Then, the system mounts the data disk to \/var\/lib\/docker and \/var\/lib\/kubelet.
     * The system does not create or mount a new data disk if no data disk has been 
     * mounted to the ECS instances.
     */
    public formatDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. 
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    public isEnterpriseSecurityGroup: boolean | ros.IResolvable | undefined;

    /**
     * @Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
     * true: retains the names.
     * false: does not retain the names. The new names are assigned by the system.
     * Default value: true.
     */
    public keepInstanceName: boolean | ros.IResolvable | undefined;

    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    public keyPair: string | ros.IResolvable | undefined;

    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    public kubernetesVersion: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    public loadBalancerSpec: string | ros.IResolvable | undefined;

    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    public loginPassword: string | ros.IResolvable | undefined;

    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. 
     * This number is determined by the specified pod CIDR block. 
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    public nodeCidrMask: string | ros.IResolvable | undefined;

    /**
     * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
     */
    public nodeNameMode: string | ros.IResolvable | undefined;

    /**
     * @Property nodePools: The configurations of Node pools.
     */
    public nodePools: Array<RosManagedKubernetesCluster.NodePoolsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    public numOfNodes: number | ros.IResolvable | undefined;

    /**
     * @Property osType: The type of operating system. Valid values:
     * Windows
     * Linux
     * Default value: Linux.
     */
    public osType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
     * Default to 1.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Year: time in years
     * Default to Month
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property platform: The release version of the operating system. Valid values:
     * CentOS
     * AliyunLinux
     * QbootAliyunLinux
     * Qboot
     * Windows
     * WindowsCore
     * Default value: CentOS.
     */
    public platform: string | ros.IResolvable | undefined;

    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    public podVswitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    public proxyMode: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    public runtime: RosManagedKubernetesCluster.RuntimeProperty | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityHardeningOs: Alibaba Cloud OS security hardening. Value:
     * true: enables security hardening OS.
     * false: disables security hardening OS.
     * Default value: false.
     */
    public securityHardeningOs: boolean | ros.IResolvable | undefined;

    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    public serviceCidr: string | ros.IResolvable | undefined;

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
     * @Property socEnabled: Valid values:
     * true: enables reinforcement based on classified protection.
     * false: disables reinforcement based on classified protection.
     * Default value: false.
     */
    public socEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property tags: Tag the cluster.
     */
    public tags: RosManagedKubernetesCluster.TagsProperty[] | undefined;

    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    public taint: Array<{ [key: string]: any }> | ros.IResolvable | undefined;

    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    public timeoutMins: number | ros.IResolvable | undefined;

    /**
     * @Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    public userData: string | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    public workerDataDisk: boolean | ros.IResolvable | undefined;

    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    public workerDataDisks: Array<RosManagedKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    public workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    public workerSystemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL0. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     *
     */
    public workerSystemDiskPerformanceLevel: string | ros.IResolvable | undefined;

    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    public workerSystemDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    public zoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedKubernetesClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosManagedKubernetesCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
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
        this.vpcId = props.vpcId;
        this.vSwitchIds = props.vSwitchIds;
        this.addons = props.addons;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.chargeType = props.chargeType;
        this.cloudMonitorFlags = props.cloudMonitorFlags;
        this.clusterSpec = props.clusterSpec;
        this.containerCidr = props.containerCidr;
        this.deleteOptions = props.deleteOptions;
        this.deletionProtection = props.deletionProtection;
        this.disableRollback = props.disableRollback;
        this.encryptionProviderKey = props.encryptionProviderKey;
        this.endpointPublicAccess = props.endpointPublicAccess;
        this.formatDisk = props.formatDisk;
        this.isEnterpriseSecurityGroup = props.isEnterpriseSecurityGroup;
        this.keepInstanceName = props.keepInstanceName;
        this.keyPair = props.keyPair;
        this.kubernetesVersion = props.kubernetesVersion;
        this.loadBalancerSpec = props.loadBalancerSpec;
        this.loginPassword = props.loginPassword;
        this.nodeCidrMask = props.nodeCidrMask;
        this.nodeNameMode = props.nodeNameMode;
        this.nodePools = props.nodePools;
        this.numOfNodes = props.numOfNodes;
        this.osType = props.osType;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.platform = props.platform;
        this.podVswitchIds = props.podVswitchIds;
        this.proxyMode = props.proxyMode;
        this.resourceGroupId = props.resourceGroupId;
        this.runtime = props.runtime;
        this.securityGroupId = props.securityGroupId;
        this.securityHardeningOs = props.securityHardeningOs;
        this.serviceCidr = props.serviceCidr;
        this.snatEntry = props.snatEntry;
        this.socEnabled = props.socEnabled;
        this.tags = props.tags;
        this.taint = props.taint;
        this.timeoutMins = props.timeoutMins;
        this.userData = props.userData;
        this.workerDataDisk = props.workerDataDisk;
        this.workerDataDisks = props.workerDataDisks;
        this.workerInstanceTypes = props.workerInstanceTypes;
        this.workerSystemDiskCategory = props.workerSystemDiskCategory;
        this.workerSystemDiskPerformanceLevel = props.workerSystemDiskPerformanceLevel;
        this.workerSystemDiskSize = props.workerSystemDiskSize;
        this.zoneIds = props.zoneIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            vpcId: this.vpcId,
            vSwitchIds: this.vSwitchIds,
            addons: this.addons,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            chargeType: this.chargeType,
            cloudMonitorFlags: this.cloudMonitorFlags,
            clusterSpec: this.clusterSpec,
            containerCidr: this.containerCidr,
            deleteOptions: this.deleteOptions,
            deletionProtection: this.deletionProtection,
            disableRollback: this.disableRollback,
            encryptionProviderKey: this.encryptionProviderKey,
            endpointPublicAccess: this.endpointPublicAccess,
            formatDisk: this.formatDisk,
            isEnterpriseSecurityGroup: this.isEnterpriseSecurityGroup,
            keepInstanceName: this.keepInstanceName,
            keyPair: this.keyPair,
            kubernetesVersion: this.kubernetesVersion,
            loadBalancerSpec: this.loadBalancerSpec,
            loginPassword: this.loginPassword,
            nodeCidrMask: this.nodeCidrMask,
            nodeNameMode: this.nodeNameMode,
            nodePools: this.nodePools,
            numOfNodes: this.numOfNodes,
            osType: this.osType,
            period: this.period,
            periodUnit: this.periodUnit,
            platform: this.platform,
            podVswitchIds: this.podVswitchIds,
            proxyMode: this.proxyMode,
            resourceGroupId: this.resourceGroupId,
            runtime: this.runtime,
            securityGroupId: this.securityGroupId,
            securityHardeningOs: this.securityHardeningOs,
            serviceCidr: this.serviceCidr,
            snatEntry: this.snatEntry,
            socEnabled: this.socEnabled,
            tags: this.tags,
            taint: this.taint,
            timeoutMins: this.timeoutMins,
            userData: this.userData,
            workerDataDisk: this.workerDataDisk,
            workerDataDisks: this.workerDataDisks,
            workerInstanceTypes: this.workerInstanceTypes,
            workerSystemDiskCategory: this.workerSystemDiskCategory,
            workerSystemDiskPerformanceLevel: this.workerSystemDiskPerformanceLevel,
            workerSystemDiskSize: this.workerSystemDiskSize,
            zoneIds: this.zoneIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosManagedKubernetesClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface AddonsProperty {
        /**
         * @Property version: When the value is empty, the latest version is selected by default.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: Addon plugin name
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
function RosManagedKubernetesCluster_AddonsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "AddonsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Addons` resource
 *
 * @param properties - the TypeScript properties of a `AddonsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Addons` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterAddonsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_AddonsPropertyValidator(properties).assertSuccess();
    return {
      'Version': ros.stringToRosTemplate(properties.version),
      'Config': ros.stringToRosTemplate(properties.config),
      'Disabled': ros.booleanToRosTemplate(properties.disabled),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface DataDisksProperty {
        /**
         * @Property category: The type of data disk. Valid values:
     * cloud: basic disk.
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property encrypted: Specifies whether to encrypt a data disk. Valid values:
     * true: encrypts a data disk.
     * false: does not encrypt a data disk.
     * Default value: false.
         */
        readonly encrypted?: boolean | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of a data disk. The size is measured in GiB.
     * Valid values: 40 to 32768.
         */
        readonly size?: number | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
     * By default, this parameter is empty. This indicates that automatic backup is disabled.
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_DataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    return errors.wrap('supplied properties not correct for "DataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.DataDisks` resource
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.DataDisks` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_DataDisksPropertyValidator(properties).assertSuccess();
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'Encrypted': ros.booleanToRosTemplate(properties.encrypted),
      'PerformanceLevel': ros.stringToRosTemplate(properties.performanceLevel),
      'Size': ros.numberToRosTemplate(properties.size),
      'AutoSnapshotPolicyId': ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface DeleteOptionsProperty {
        /**
         * @Property deleteMode: Deletion policy of this type of resource. The value can be:
     * - delete: delete the resource.
     * - retain: retain the resource.
         */
        readonly deleteMode?: string | ros.IResolvable;
        /**
         * @Property resourceType: Resource type. The value can be:
     * - SLB: SLB resource created by service. It is deleted by default but can be retained
     * - ALB: ALB Ingress Controller Created ALB resource. It is reserved by default and can be deleted
     * - SLS_Data: log service Project used by the cluster log function. This service is reserved by default and can be deleted
     * - SLS_ControlPlane: Project log service used for logs of the managed cluster control plane. This service is reserved by default and can be deleted
     * - PrivateZone: ACK Serverless PrivateZone resource created in the cluster. It is reserved by default and can be deleted
     *
         */
        readonly resourceType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DeleteOptionsProperty`
 *
 * @param properties - the TypeScript properties of a `DeleteOptionsProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_DeleteOptionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.deleteMode && (typeof properties.deleteMode) !== 'object') {
        errors.collect(ros.propertyValidator('deleteMode', ros.validateAllowedValues)({
          data: properties.deleteMode,
          allowedValues: ["delete","retain"],
        }));
    }
    errors.collect(ros.propertyValidator('deleteMode', ros.validateString)(properties.deleteMode));
    if(properties.resourceType && (typeof properties.resourceType) !== 'object') {
        errors.collect(ros.propertyValidator('resourceType', ros.validateAllowedValues)({
          data: properties.resourceType,
          allowedValues: ["SLB","ALB","SLS_Data","SLS_ControlPlane","PrivateZone"],
        }));
    }
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    return errors.wrap('supplied properties not correct for "DeleteOptionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.DeleteOptions` resource
 *
 * @param properties - the TypeScript properties of a `DeleteOptionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.DeleteOptions` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterDeleteOptionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_DeleteOptionsPropertyValidator(properties).assertSuccess();
    return {
      'DeleteMode': ros.stringToRosTemplate(properties.deleteMode),
      'ResourceType': ros.stringToRosTemplate(properties.resourceType),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface KubernetesConfigProperty {
        /**
         * @Property cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
     * static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
     * none: This policy indicates that the default CPU affinity is used.
     * Default value: none.
         */
        readonly cpuPolicy?: string | ros.IResolvable;
        /**
         * @Property runtime: The name of the container runtime.
         */
        readonly runtime: string | ros.IResolvable;
        /**
         * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
         */
        readonly nodeNameMode?: string | ros.IResolvable;
        /**
         * @Property runtimeVersion: The version of the container runtime.
         */
        readonly runtimeVersion: string | ros.IResolvable;
        /**
         * @Property labels: You can add labels to nodes that are added to the cluster.
         */
        readonly labels?: Array<RosManagedKubernetesCluster.LabelsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property taints: You can add taints to nodes that are added to the cluster.
         */
        readonly taints?: Array<RosManagedKubernetesCluster.TaintsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `KubernetesConfigProperty`
 *
 * @param properties - the TypeScript properties of a `KubernetesConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_KubernetesConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cpuPolicy', ros.validateString)(properties.cpuPolicy));
    errors.collect(ros.propertyValidator('runtime', ros.requiredValidator)(properties.runtime));
    errors.collect(ros.propertyValidator('runtime', ros.validateString)(properties.runtime));
    errors.collect(ros.propertyValidator('nodeNameMode', ros.validateString)(properties.nodeNameMode));
    errors.collect(ros.propertyValidator('runtimeVersion', ros.requiredValidator)(properties.runtimeVersion));
    errors.collect(ros.propertyValidator('runtimeVersion', ros.validateString)(properties.runtimeVersion));
    if(properties.labels && (Array.isArray(properties.labels) || (typeof properties.labels) === 'string')) {
        errors.collect(ros.propertyValidator('labels', ros.validateLength)({
            data: properties.labels.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('labels', ros.listValidator(RosManagedKubernetesCluster_LabelsPropertyValidator))(properties.labels));
    if(properties.taints && (Array.isArray(properties.taints) || (typeof properties.taints) === 'string')) {
        errors.collect(ros.propertyValidator('taints', ros.validateLength)({
            data: properties.taints.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('taints', ros.listValidator(RosManagedKubernetesCluster_TaintsPropertyValidator))(properties.taints));
    return errors.wrap('supplied properties not correct for "KubernetesConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.KubernetesConfig` resource
 *
 * @param properties - the TypeScript properties of a `KubernetesConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.KubernetesConfig` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterKubernetesConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_KubernetesConfigPropertyValidator(properties).assertSuccess();
    return {
      'CpuPolicy': ros.stringToRosTemplate(properties.cpuPolicy),
      'Runtime': ros.stringToRosTemplate(properties.runtime),
      'NodeNameMode': ros.stringToRosTemplate(properties.nodeNameMode),
      'RuntimeVersion': ros.stringToRosTemplate(properties.runtimeVersion),
      'Labels': ros.listMapper(rosManagedKubernetesClusterLabelsPropertyToRosTemplate)(properties.labels),
      'Taints': ros.listMapper(rosManagedKubernetesClusterTaintsPropertyToRosTemplate)(properties.taints),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface LabelsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LabelsProperty`
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_LabelsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "LabelsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Labels` resource
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Labels` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterLabelsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_LabelsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface NodePoolInfoProperty {
        /**
         * @Property type: Node pool type. Value range:
     * ess: Node pool.
     * edge: Edge node pool.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property resourceGroupId: Resource Group ID of a node pool.
         */
        readonly resourceGroupId?: string | ros.IResolvable;
        /**
         * @Property name: The name of the node pool.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NodePoolInfoProperty`
 *
 * @param properties - the TypeScript properties of a `NodePoolInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_NodePoolInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["ess","edge"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "NodePoolInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.NodePoolInfo` resource
 *
 * @param properties - the TypeScript properties of a `NodePoolInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.NodePoolInfo` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterNodePoolInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_NodePoolInfoPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface NodePoolsProperty {
        /**
         * @Property nodePoolInfo: The configurations of the node pool.
         */
        readonly nodePoolInfo?: RosManagedKubernetesCluster.NodePoolInfoProperty | ros.IResolvable;
        /**
         * @Property kubernetesConfig: The configurations of the ACK cluster.
         */
        readonly kubernetesConfig?: RosManagedKubernetesCluster.KubernetesConfigProperty | ros.IResolvable;
        /**
         * @Property count: The number of nodes in the node pool.
         */
        readonly count?: number | ros.IResolvable;
        /**
         * @Property scalingGroup: The configurations of the scaling group used by the node pool.
         */
        readonly scalingGroup: RosManagedKubernetesCluster.ScalingGroupProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NodePoolsProperty`
 *
 * @param properties - the TypeScript properties of a `NodePoolsProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_NodePoolsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('nodePoolInfo', RosManagedKubernetesCluster_NodePoolInfoPropertyValidator)(properties.nodePoolInfo));
    errors.collect(ros.propertyValidator('kubernetesConfig', RosManagedKubernetesCluster_KubernetesConfigPropertyValidator)(properties.kubernetesConfig));
    errors.collect(ros.propertyValidator('count', ros.validateNumber)(properties.count));
    errors.collect(ros.propertyValidator('scalingGroup', ros.requiredValidator)(properties.scalingGroup));
    errors.collect(ros.propertyValidator('scalingGroup', RosManagedKubernetesCluster_ScalingGroupPropertyValidator)(properties.scalingGroup));
    return errors.wrap('supplied properties not correct for "NodePoolsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.NodePools` resource
 *
 * @param properties - the TypeScript properties of a `NodePoolsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.NodePools` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterNodePoolsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_NodePoolsPropertyValidator(properties).assertSuccess();
    return {
      'NodePoolInfo': rosManagedKubernetesClusterNodePoolInfoPropertyToRosTemplate(properties.nodePoolInfo),
      'KubernetesConfig': rosManagedKubernetesClusterKubernetesConfigPropertyToRosTemplate(properties.kubernetesConfig),
      'Count': ros.numberToRosTemplate(properties.count),
      'ScalingGroup': rosManagedKubernetesClusterScalingGroupPropertyToRosTemplate(properties.scalingGroup),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface RuntimeProperty {
        /**
         * @Property version: The version of the container runtime.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property name: The name of the container runtime. Supports containerd, Docker or Sandboxed-Container.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RuntimeProperty`
 *
 * @param properties - the TypeScript properties of a `RuntimeProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_RuntimePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RuntimeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Runtime` resource
 *
 * @param properties - the TypeScript properties of a `RuntimeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Runtime` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterRuntimePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_RuntimePropertyValidator(properties).assertSuccess();
    return {
      'Version': ros.stringToRosTemplate(properties.version),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface ScalingGroupProperty {
        /**
         * @Property keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
         */
        readonly keyPair?: string | ros.IResolvable;
        /**
         * @Property platform: The release version of the operating system. Valid values:
     * CentOS, AliyunLinux, Windows, WindowsCore.
     * Default value: AliyunLinux.
         */
        readonly platform?: string | ros.IResolvable;
        /**
         * @Property dataDisks: The configurations of data disks.
         */
        readonly dataDisks?: Array<RosManagedKubernetesCluster.DataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
         */
        readonly systemDiskSize: number | ros.IResolvable;
        /**
         * @Property vSwitchIds: The IDs of vSwitches.
         */
        readonly vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceChargeType: The billing method of nodes in the node pool. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Default value: PostPaid.
         */
        readonly instanceChargeType?: string | ros.IResolvable;
        /**
         * @Property period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12. 
     * Default value: 1.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property systemDiskCategory: The type of system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly systemDiskCategory?: string | ros.IResolvable;
        /**
         * @Property internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
         */
        readonly internetChargeType?: string | ros.IResolvable;
        /**
         * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. 
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
         */
        readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;
        /**
         * @Property internetMaxBandwidthOut: The release version of the operating system. Valid values:
     * CentOS, AliyunLinux, Windows, WindowsCore.
     * Default value: AliyunLinux.
         */
        readonly internetMaxBandwidthOut?: number | ros.IResolvable;
        /**
         * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property rdsInstances: The IDs of the ApsaraDB RDS instances.
         */
        readonly rdsInstances?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property imageId: The ID of a custom image. By default, the image provided by ACK is used.
         */
        readonly imageId?: string | ros.IResolvable;
        /**
         * @Property instanceTypes: The ECS instance types of the nodes.
         */
        readonly instanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property zoneIds: Zone ids of virtual switches belongs to.
         */
        readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: Adds labels only to ECS instances.
     * A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:\/\/ or http:\/\/.
         */
        readonly tags?: RosManagedKubernetesCluster.ScalingGroupTagsProperty[];
        /**
         * @Property periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. A value of Month specifies that the subscription period is measured in months.
         */
        readonly periodUnit?: string | ros.IResolvable;
        /**
         * @Property loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
         */
        readonly loginPassword?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ScalingGroupProperty`
 *
 * @param properties - the TypeScript properties of a `ScalingGroupProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_ScalingGroupPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPair', ros.validateString)(properties.keyPair));
    errors.collect(ros.propertyValidator('platform', ros.validateString)(properties.platform));
    if(properties.dataDisks && (Array.isArray(properties.dataDisks) || (typeof properties.dataDisks) === 'string')) {
        errors.collect(ros.propertyValidator('dataDisks', ros.validateLength)({
            data: properties.dataDisks.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dataDisks', ros.listValidator(RosManagedKubernetesCluster_DataDisksPropertyValidator))(properties.dataDisks));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.requiredValidator)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.requiredValidator)(properties.vSwitchIds));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('isEnterpriseSecurityGroup', ros.validateBoolean)(properties.isEnterpriseSecurityGroup));
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    if(properties.rdsInstances && (Array.isArray(properties.rdsInstances) || (typeof properties.rdsInstances) === 'string')) {
        errors.collect(ros.propertyValidator('rdsInstances', ros.validateLength)({
            data: properties.rdsInstances.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('rdsInstances', ros.listValidator(ros.validateString))(properties.rdsInstances));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('instanceTypes', ros.requiredValidator)(properties.instanceTypes));
    if(properties.instanceTypes && (Array.isArray(properties.instanceTypes) || (typeof properties.instanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('instanceTypes', ros.validateLength)({
            data: properties.instanceTypes.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('instanceTypes', ros.listValidator(ros.validateString))(properties.instanceTypes));
    errors.collect(ros.propertyValidator('zoneIds', ros.listValidator(ros.validateString))(properties.zoneIds));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosManagedKubernetesCluster_ScalingGroupTagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('loginPassword', ros.validateString)(properties.loginPassword));
    return errors.wrap('supplied properties not correct for "ScalingGroupProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.ScalingGroup` resource
 *
 * @param properties - the TypeScript properties of a `ScalingGroupProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.ScalingGroup` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterScalingGroupPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_ScalingGroupPropertyValidator(properties).assertSuccess();
    return {
      'KeyPair': ros.stringToRosTemplate(properties.keyPair),
      'Platform': ros.stringToRosTemplate(properties.platform),
      'DataDisks': ros.listMapper(rosManagedKubernetesClusterDataDisksPropertyToRosTemplate)(properties.dataDisks),
      'SystemDiskSize': ros.numberToRosTemplate(properties.systemDiskSize),
      'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'Period': ros.numberToRosTemplate(properties.period),
      'SystemDiskCategory': ros.stringToRosTemplate(properties.systemDiskCategory),
      'InternetChargeType': ros.stringToRosTemplate(properties.internetChargeType),
      'IsEnterpriseSecurityGroup': ros.booleanToRosTemplate(properties.isEnterpriseSecurityGroup),
      'InternetMaxBandwidthOut': ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      'SystemDiskPerformanceLevel': ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
      'RdsInstances': ros.listMapper(ros.stringToRosTemplate)(properties.rdsInstances),
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'InstanceTypes': ros.listMapper(ros.stringToRosTemplate)(properties.instanceTypes),
      'ZoneIds': ros.listMapper(ros.stringToRosTemplate)(properties.zoneIds),
      'Tags': ros.listMapper(rosManagedKubernetesClusterScalingGroupTagsPropertyToRosTemplate)(properties.tags),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'LoginPassword': ros.stringToRosTemplate(properties.loginPassword),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface ScalingGroupTagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ScalingGroupTagsProperty`
 *
 * @param properties - the TypeScript properties of a `ScalingGroupTagsProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_ScalingGroupTagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "ScalingGroupTagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.ScalingGroupTags` resource
 *
 * @param properties - the TypeScript properties of a `ScalingGroupTagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.ScalingGroupTags` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterScalingGroupTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_ScalingGroupTagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosManagedKubernetesCluster {
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
function RosManagedKubernetesCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface TaintsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property effect: The scheduling policy. Valid values:
     * NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
     * NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
     * PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
     * Default value: NoSchedule.
         */
        readonly effect?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TaintsProperty`
 *
 * @param properties - the TypeScript properties of a `TaintsProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_TaintsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    if(properties.effect && (typeof properties.effect) !== 'object') {
        errors.collect(ros.propertyValidator('effect', ros.validateAllowedValues)({
          data: properties.effect,
          allowedValues: ["NoSchedule","NoExecute","PreferNoSchedule"],
        }));
    }
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TaintsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Taints` resource
 *
 * @param properties - the TypeScript properties of a `TaintsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.Taints` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterTaintsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_TaintsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Effect': ros.stringToRosTemplate(properties.effect),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    export interface WorkerDataDisksProperty {
        /**
         * @Property category: Data disk type. Value includes:
     * cloud: ordinary cloud disk
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL0. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     *
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: Data disk size in GiB.
         */
        readonly size: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WorkerDataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedKubernetesCluster_WorkerDataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    return errors.wrap('supplied properties not correct for "WorkerDataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.WorkerDataDisks` resource
 *
 * @param properties - the TypeScript properties of a `WorkerDataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CS::ManagedKubernetesCluster.WorkerDataDisks` resource.
 */
// @ts-ignore TS6133
function rosManagedKubernetesClusterWorkerDataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedKubernetesCluster_WorkerDataDisksPropertyValidator(properties).assertSuccess();
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'PerformanceLevel': ros.stringToRosTemplate(properties.performanceLevel),
      'Size': ros.numberToRosTemplate(properties.size),
    };
}
