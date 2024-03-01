// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosClusterApplicationResources`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources
 */
export interface RosClusterApplicationResourcesProps {

    /**
     * @Property clusterId: The ID of the kubernetes cluster.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * @Property kind: The kind of kubernetes resources to query.
     */
    readonly kind: string | ros.IResolvable;

    /**
     * @Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
     */
    readonly firstMatch?: boolean | ros.IResolvable;

    /**
     * @Property jsonPath: Json path expression to filter the output.
     */
    readonly jsonPath?: string | ros.IResolvable;

    /**
     * @Property name: The name of the kubernetes resource to query.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property namespace: The namespace of kubernetes containing the resource. Default value is default
     */
    readonly namespace?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClusterApplicationResourcesProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterApplicationResourcesProps`
 *
 * @returns the result of the validation.
 */
function RosClusterApplicationResourcesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('firstMatch', ros.validateBoolean)(properties.firstMatch));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('kind', ros.requiredValidator)(properties.kind));
    errors.collect(ros.propertyValidator('kind', ros.validateString)(properties.kind));
    errors.collect(ros.propertyValidator('jsonPath', ros.validateString)(properties.jsonPath));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosClusterApplicationResourcesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CS::ClusterApplicationResources` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterApplicationResourcesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CS::ClusterApplicationResources` resource.
 */
// @ts-ignore TS6133
function rosClusterApplicationResourcesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterApplicationResourcesPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      Kind: ros.stringToRosTemplate(properties.kind),
      FirstMatch: ros.booleanToRosTemplate(properties.firstMatch),
      JsonPath: ros.stringToRosTemplate(properties.jsonPath),
      Name: ros.stringToRosTemplate(properties.name),
      Namespace: ros.stringToRosTemplate(properties.namespace),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CS::ClusterApplicationResources`, which is used to query the details of specified types of resources in a Container Service for Kubernetes (ACK) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterApplicationResources` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources
 */
export class RosClusterApplicationResources extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::ClusterApplicationResources";

    /**
     * @Attribute Response: Query result of kubernetes resource(s).
     */
    public readonly attrResponse: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: The ID of the kubernetes cluster.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property kind: The kind of kubernetes resources to query.
     */
    public kind: string | ros.IResolvable;

    /**
     * @Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
     */
    public firstMatch: boolean | ros.IResolvable | undefined;

    /**
     * @Property jsonPath: Json path expression to filter the output.
     */
    public jsonPath: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the kubernetes resource to query.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property namespace: The namespace of kubernetes containing the resource. Default value is default
     */
    public namespace: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterApplicationResourcesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClusterApplicationResources.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrResponse = this.getAtt('Response');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.kind = props.kind;
        this.firstMatch = props.firstMatch;
        this.jsonPath = props.jsonPath;
        this.name = props.name;
        this.namespace = props.namespace;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            kind: this.kind,
            firstMatch: this.firstMatch,
            jsonPath: this.jsonPath,
            name: this.name,
            namespace: this.namespace,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterApplicationResourcesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosClusterNodePools`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools
 */
export interface RosClusterNodePoolsProps {

    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClusterNodePoolsProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterNodePoolsProps`
 *
 * @returns the result of the validation.
 */
function RosClusterNodePoolsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    return errors.wrap('supplied properties not correct for "RosClusterNodePoolsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CS::ClusterNodePools` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterNodePoolsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CS::ClusterNodePools` resource.
 */
// @ts-ignore TS6133
function rosClusterNodePoolsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterNodePoolsPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CS::ClusterNodePools`, which is used to query the details of all node pools in a cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterNodePools` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools
 */
export class RosClusterNodePools extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::ClusterNodePools";

    /**
     * @Attribute NodePoolIds: The list of node_pool IDs.
     */
    public readonly attrNodePoolIds: ros.IResolvable;

    /**
     * @Attribute NodePools: The list of node_pools.
     */
    public readonly attrNodePools: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: Cluster ID.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterNodePoolsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClusterNodePools.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNodePoolIds = this.getAtt('NodePoolIds');
        this.attrNodePools = this.getAtt('NodePools');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterNodePoolsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosClusterUserKubeconfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig
 */
export interface RosClusterUserKubeconfigProps {

    /**
     * @Property clusterId: The ID of the ACK cluster.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * @Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network. Valid values:
     * true: obtains the credential that is used to connect to the cluster over the internal network.
     * false: obtains the credential that is used to connect to the cluster over the Internet.
     * Default value: false.
     */
    readonly privateIpAddress?: boolean | ros.IResolvable;

    /**
     * @Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320.
     * Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
     */
    readonly temporaryDurationMinutes?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClusterUserKubeconfigProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterUserKubeconfigProps`
 *
 * @returns the result of the validation.
 */
function RosClusterUserKubeconfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateBoolean)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if(properties.temporaryDurationMinutes && (typeof properties.temporaryDurationMinutes) !== 'object') {
        errors.collect(ros.propertyValidator('temporaryDurationMinutes', ros.validateRange)({
            data: properties.temporaryDurationMinutes,
            min: 15,
            max: 4320,
          }));
    }
    errors.collect(ros.propertyValidator('temporaryDurationMinutes', ros.validateNumber)(properties.temporaryDurationMinutes));
    return errors.wrap('supplied properties not correct for "RosClusterUserKubeconfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CS::ClusterUserKubeconfig` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterUserKubeconfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CS::ClusterUserKubeconfig` resource.
 */
// @ts-ignore TS6133
function rosClusterUserKubeconfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterUserKubeconfigPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      PrivateIpAddress: ros.booleanToRosTemplate(properties.privateIpAddress),
      TemporaryDurationMinutes: ros.numberToRosTemplate(properties.temporaryDurationMinutes),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CS::ClusterUserKubeconfig`, which is used to query the kubeconfig configurations of a Container Service for Kubernetes (ACK) cluster by cluster ID.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterUserKubeconfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig
 */
export class RosClusterUserKubeconfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::ClusterUserKubeconfig";

    /**
     * @Attribute ClusterId: The ID of the ACK cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute Config: The content of the kubeconfig file.
     */
    public readonly attrConfig: ros.IResolvable;

    /**
     * @Attribute Expiration: The expiration time of the kubeconfig file. The value is the UTC time displayed in RFC3339 format.
     */
    public readonly attrExpiration: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: The ID of the ACK cluster.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network. Valid values:
     * true: obtains the credential that is used to connect to the cluster over the internal network.
     * false: obtains the credential that is used to connect to the cluster over the Internet.
     * Default value: false.
     */
    public privateIpAddress: boolean | ros.IResolvable | undefined;

    /**
     * @Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320.
     * Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
     */
    public temporaryDurationMinutes: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterUserKubeconfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClusterUserKubeconfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrConfig = this.getAtt('Config');
        this.attrExpiration = this.getAtt('Expiration');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.privateIpAddress = props.privateIpAddress;
        this.temporaryDurationMinutes = props.temporaryDurationMinutes;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            privateIpAddress: this.privateIpAddress,
            temporaryDurationMinutes: this.temporaryDurationMinutes,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterUserKubeconfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosKubernetesCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
 */
export interface RosKubernetesClusterProps {

    /**
     * @Property clusterId: Cluster instance ID.
     */
    readonly clusterId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    return errors.wrap('supplied properties not correct for "RosKubernetesClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CS::KubernetesCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosKubernetesClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CS::KubernetesCluster` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKubernetesClusterPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CS::KubernetesCluster`, which is used to query the information about a Container Service for Kubernetes (ACK) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `KubernetesCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
 */
export class RosKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::KubernetesCluster";

    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ClusterSpec: The type of the managed Kubernetes cluster. This parameter is returned for a managed Kubernetes cluster. Valid values:
- ack.pro.small: professional managed Kubernetes cluster.
- ack.standard: standard managed Kubernetes cluster.
     */
    public readonly attrClusterSpec: ros.IResolvable;

    /**
     * @Attribute ClusterType: The type of the cluster. Valid values:
- Kubernetes: dedicated Kubernetes cluster
- ManagedKubernetes: managed Kubernetes cluster
- Ask: ASK cluster
- ExternalKubernetes: registered external Kubernetes cluster
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute Created: The time when the cluster was created.
     */
    public readonly attrCreated: ros.IResolvable;

    /**
     * @Attribute CurrentVersion: The current Kubernetes version of the cluster. For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
     */
    public readonly attrCurrentVersion: ros.IResolvable;

    /**
     * @Attribute DeletionProtection: Indicates whether deletion protection is enabled. If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling the API. Valid values:
- true: Deletion protection is enabled. You cannot delete the cluster in the ACK console or by calling the API.
- false: Deletion protection is not enabled. You can delete the cluster in the ACK console or by calling the API.
     */
    public readonly attrDeletionProtection: ros.IResolvable;

    /**
     * @Attribute DockerVersion: The Docker version that is used by the cluster.
     */
    public readonly attrDockerVersion: ros.IResolvable;

    /**
     * @Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.
     */
    public readonly attrExternalLoadbalancerId: ros.IResolvable;

    /**
     * @Attribute InitVersion: The Kubernetes version that is initially used by the cluster.
     */
    public readonly attrInitVersion: ros.IResolvable;

    /**
     * @Attribute MaintenanceWindow: The maintenance window of the cluster. This feature is available in only professional managed Kubernetes clusters.
     */
    public readonly attrMaintenanceWindow: ros.IResolvable;

    /**
     * @Attribute MasterUrl: The address of the cluster. It includes an internal endpoint and a public endpoint.
     */
    public readonly attrMasterUrl: ros.IResolvable;

    /**
     * @Attribute MetaData: The metadata of the cluster.
     */
    public readonly attrMetaData: ros.IResolvable;

    /**
     * @Attribute Name: The name of the cluster. The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute NetworkMode: The network mode of the cluster. Valid values: 
- classic: the classic network 
- vpc: virtual private cloud (VPC) 
- overlay: overlay network
- calico: network powered by Calico
Default value: vpc.
     */
    public readonly attrNetworkMode: ros.IResolvable;

    /**
     * @Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.
     */
    public readonly attrNextVersion: ros.IResolvable;

    /**
     * @Attribute Parameters: A collection of cluster ROS parameters.
     */
    public readonly attrParameters: ros.IResolvable;

    /**
     * @Attribute PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.
- true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.
     */
    public readonly attrPrivateZone: ros.IResolvable;

    /**
     * @Attribute Profile: Indicates the scenario in which the cluster is used. Valid values:
- Default: indicates that the cluster is used in non-edge computing scenarios.
- Edge: indicates that the ACK cluster is used in edge computing scenarios.
     */
    public readonly attrProfile: ros.IResolvable;

    /**
     * @Attribute RegionId: The ID of the region where the cluster is deployed.
     */
    public readonly attrRegionId: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * @Attribute Size: The number of nodes in the cluster. Master nodes and worker nodes are included.
     */
    public readonly attrSize: ros.IResolvable;

    /**
     * @Attribute State: The state of the cluster. Valid values:
- initial: The cluster is being created.
- failed: The cluster failed to be created.
- running: The cluster is running.
- updating: The cluster is being upgraded.
- updating_failed: The cluster failed to be upgraded.
- scaling: The cluster is being scaled.
- waiting: The registered cluster is waiting for connecting.
- disconnected: The registeredcluster is disconnected.
- stopped: The cluster is stopped.
- deleting: The cluster is being deleted.
- deleted: The cluster is deleted.
- delete_failed: The cluster failed to be deleted.
     */
    public readonly attrState: ros.IResolvable;

    /**
     * @Attribute SubnetCidr: The pod CIDR block. It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:
- 10.0.0.0/8
- 172.16-31.0.0/12-16
- 192.168.0.0/16
The pod CIDR block cannot overlap with that of the VPC or those of the ACK clusters that are deployed in the VPC. For more information about the network segmentation of ACK clusters, see Plan CIDR blocks for ACK clusters in a VPC.
     */
    public readonly attrSubnetCidr: ros.IResolvable;

    /**
     * @Attribute Tags: The labels of the cluster.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute Updated: The time when the cluster was updated.
     */
    public readonly attrUpdated: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The IDs of the vSwitches. You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the VPC where the cluster is deployed. This parameter is required when you create an ACK cluster.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute WorkerRamRoleName: The name of the worker RAM role. 
The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    /**
     * @Attribute ZoneId: The ID of the zone where the cluster is deployed.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: Cluster instance ID.
     */
    public clusterId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKubernetesClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKubernetesCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterSpec = this.getAtt('ClusterSpec');
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrCreated = this.getAtt('Created');
        this.attrCurrentVersion = this.getAtt('CurrentVersion');
        this.attrDeletionProtection = this.getAtt('DeletionProtection');
        this.attrDockerVersion = this.getAtt('DockerVersion');
        this.attrExternalLoadbalancerId = this.getAtt('ExternalLoadbalancerId');
        this.attrInitVersion = this.getAtt('InitVersion');
        this.attrMaintenanceWindow = this.getAtt('MaintenanceWindow');
        this.attrMasterUrl = this.getAtt('MasterUrl');
        this.attrMetaData = this.getAtt('MetaData');
        this.attrName = this.getAtt('Name');
        this.attrNetworkMode = this.getAtt('NetworkMode');
        this.attrNextVersion = this.getAtt('NextVersion');
        this.attrParameters = this.getAtt('Parameters');
        this.attrPrivateZone = this.getAtt('PrivateZone');
        this.attrProfile = this.getAtt('Profile');
        this.attrRegionId = this.getAtt('RegionId');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');
        this.attrSize = this.getAtt('Size');
        this.attrState = this.getAtt('State');
        this.attrSubnetCidr = this.getAtt('SubnetCidr');
        this.attrTags = this.getAtt('Tags');
        this.attrUpdated = this.getAtt('Updated');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrWorkerRamRoleName = this.getAtt('WorkerRamRoleName');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKubernetesClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosKubernetesClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
 */
export interface RosKubernetesClustersProps {

    /**
     * @Property clusterSpec: The specification of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
     * ack.pro.small: professional managed Kubernetes cluster
     * ack.standard: standard managed Kubernetes cluster
     * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
     */
    readonly clusterSpec?: string | ros.IResolvable;

    /**
     * @Property clusterType: The type of the cluster. Valid values:
     * Kubernetes: dedicated Kubernetes cluster
     * ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
     * Ask: ASK cluster
     * ExternalKubernetes: registered external cluster
     * When you query an ASK cluster, the value specified when the cluster was created is returned.
     */
    readonly clusterType?: string | ros.IResolvable;

    /**
     * @Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property profile: The identifier of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
     * Default: managed Kubernetes cluster
     * Serverless: ASK cluster
     * Edge: edge Kubernetes cluster
     * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
     */
    readonly profile?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosKubernetesClustersProps`
 *
 * @param properties - the TypeScript properties of a `RosKubernetesClustersProps`
 *
 * @returns the result of the validation.
 */
function RosKubernetesClustersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterSpec', ros.validateString)(properties.clusterSpec));
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    errors.collect(ros.propertyValidator('profile', ros.validateString)(properties.profile));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosKubernetesClustersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CS::KubernetesClusters` resource
 *
 * @param properties - the TypeScript properties of a `RosKubernetesClustersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CS::KubernetesClusters` resource.
 */
// @ts-ignore TS6133
function rosKubernetesClustersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKubernetesClustersPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterSpec: ros.stringToRosTemplate(properties.clusterSpec),
      ClusterType: ros.stringToRosTemplate(properties.clusterType),
      Name: ros.stringToRosTemplate(properties.name),
      Profile: ros.stringToRosTemplate(properties.profile),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CS::KubernetesClusters`, which is used to query Container Service for Kubernetes (ACK) clusters.
 * @Note This class does not contain additional functions, so it is recommended to use the `KubernetesClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
 */
export class RosKubernetesClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::KubernetesClusters";

    /**
     * @Attribute ClusterIds: The list of cluster IDs.
     */
    public readonly attrClusterIds: ros.IResolvable;

    /**
     * @Attribute Clusters: The list of clusters.
     */
    public readonly attrClusters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterSpec: The specification of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
     * ack.pro.small: professional managed Kubernetes cluster
     * ack.standard: standard managed Kubernetes cluster
     * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
     */
    public clusterSpec: string | ros.IResolvable | undefined;

    /**
     * @Property clusterType: The type of the cluster. Valid values:
     * Kubernetes: dedicated Kubernetes cluster
     * ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
     * Ask: ASK cluster
     * ExternalKubernetes: registered external cluster
     * When you query an ASK cluster, the value specified when the cluster was created is returned.
     */
    public clusterType: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property profile: The identifier of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
     * Default: managed Kubernetes cluster
     * Serverless: ASK cluster
     * Edge: edge Kubernetes cluster
     * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
     */
    public profile: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKubernetesClustersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKubernetesClusters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterIds = this.getAtt('ClusterIds');
        this.attrClusters = this.getAtt('Clusters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterSpec = props.clusterSpec;
        this.clusterType = props.clusterType;
        this.name = props.name;
        this.profile = props.profile;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterSpec: this.clusterSpec,
            clusterType: this.clusterType,
            name: this.name,
            profile: this.profile,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKubernetesClustersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
