// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::CS::ClusterApplicationResources`
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
    if(properties.kind && (typeof properties.kind) !== 'object') {
        errors.collect(ros.propertyValidator('kind', ros.validateAllowedValues)({
          data: properties.kind,
          allowedValues: ["ConfigMap","Service","PodTemplate","Namespace","Secret","Node","ComponentStatus","ReplicationController","LimitRange","ResourceQuota","PersistentVolumeClaim","ServiceAccount","PersistentVolume","Endpoints","Binding","Pod","Event"],
        }));
    }
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
 * A ROS template type:  `DATASOURCE::CS::ClusterApplicationResources`
 */
export class RosClusterApplicationResources extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::ClusterApplicationResources";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `DATASOURCE::CS::ClusterApplicationResources`.
     *
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
 * Properties for defining a `DATASOURCE::CS::ClusterNodePools`
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
 * A ROS template type:  `DATASOURCE::CS::ClusterNodePools`
 */
export class RosClusterNodePools extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::ClusterNodePools";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `DATASOURCE::CS::ClusterNodePools`.
     *
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
 * Properties for defining a `DATASOURCE::CS::ClusterUserKubeconfig`
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
 * A ROS template type:  `DATASOURCE::CS::ClusterUserKubeconfig`
 */
export class RosClusterUserKubeconfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::ClusterUserKubeconfig";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `DATASOURCE::CS::ClusterUserKubeconfig`.
     *
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
 * Properties for defining a `DATASOURCE::CS::KubernetesClusters`
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
 * A ROS template type:  `DATASOURCE::CS::KubernetesClusters`
 */
export class RosKubernetesClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::KubernetesClusters";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `DATASOURCE::CS::KubernetesClusters`.
     *
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
