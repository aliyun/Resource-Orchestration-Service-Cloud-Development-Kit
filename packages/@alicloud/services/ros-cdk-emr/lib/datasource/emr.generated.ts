// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosCluster2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-cluster2
 */
export interface RosCluster2Props {

    /**
     * @Property clusterIds: The list of emr cluster id.
     */
    readonly clusterIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clusterName: The name of cluster.
     */
    readonly clusterName?: string | ros.IResolvable;

    /**
     * @Property clusterStates: The list of emr cluster state.
     */
    readonly clusterStates?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clusterType: The list of emr cluster type.
     */
    readonly clusterType?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property paymentTypes: The payment type of emr cluster.
     */
    readonly paymentTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The resource group id of emr cluster.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of emr cluster.
     */
    readonly tags?: RosCluster2.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosCluster2Props`
 *
 * @param properties - the TypeScript properties of a `RosCluster2Props`
 *
 * @returns the result of the validation.
 */
function RosCluster2PropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('paymentTypes', ros.listValidator(ros.validateString))(properties.paymentTypes));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('clusterName', ros.validateString)(properties.clusterName));
    errors.collect(ros.propertyValidator('clusterType', ros.listValidator(ros.validateString))(properties.clusterType));
    errors.collect(ros.propertyValidator('clusterIds', ros.listValidator(ros.validateString))(properties.clusterIds));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosCluster2_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('clusterStates', ros.listValidator(ros.validateString))(properties.clusterStates));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosCluster2Props"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EMR::Cluster2` resource
 *
 * @param properties - the TypeScript properties of a `RosCluster2Props`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EMR::Cluster2` resource.
 */
// @ts-ignore TS6133
function rosCluster2PropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCluster2PropsValidator(properties).assertSuccess();
    }
    return {
      'ClusterIds': ros.listMapper(ros.stringToRosTemplate)(properties.clusterIds),
      'ClusterName': ros.stringToRosTemplate(properties.clusterName),
      'ClusterStates': ros.listMapper(ros.stringToRosTemplate)(properties.clusterStates),
      'ClusterType': ros.listMapper(ros.stringToRosTemplate)(properties.clusterType),
      'PaymentTypes': ros.listMapper(ros.stringToRosTemplate)(properties.paymentTypes),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosCluster2TagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EMR::Cluster2`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-cluster2
 */
export class RosCluster2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EMR::Cluster2";

    /**
     * @Attribute ClusterIds: The list of the cluster id.
     */
    public readonly attrClusterIds: ros.IResolvable;

    /**
     * @Attribute Clusters: The detail of the cluster.
     */
    public readonly attrClusters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterIds: The list of emr cluster id.
     */
    public clusterIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property clusterName: The name of cluster.
     */
    public clusterName: string | ros.IResolvable | undefined;

    /**
     * @Property clusterStates: The list of emr cluster state.
     */
    public clusterStates: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property clusterType: The list of emr cluster type.
     */
    public clusterType: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property paymentTypes: The payment type of emr cluster.
     */
    public paymentTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The resource group id of emr cluster.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of emr cluster.
     */
    public tags: RosCluster2.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCluster2Props, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster2.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterIds = this.getAtt('ClusterIds');
        this.attrClusters = this.getAtt('Clusters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterIds = props.clusterIds;
        this.clusterName = props.clusterName;
        this.clusterStates = props.clusterStates;
        this.clusterType = props.clusterType;
        this.paymentTypes = props.paymentTypes;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterIds: this.clusterIds,
            clusterName: this.clusterName,
            clusterStates: this.clusterStates,
            clusterType: this.clusterType,
            paymentTypes: this.paymentTypes,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCluster2PropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCluster2 {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
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
function RosCluster2_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EMR::Cluster2.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EMR::Cluster2.Tags` resource.
 */
// @ts-ignore TS6133
function rosCluster2TagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster2_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosFlowProjects`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-flowprojects
 */
export interface RosFlowProjectsProps {

    /**
     * @Property flowProjectId: The first ID of the resource
     */
    readonly flowProjectId?: string | ros.IResolvable;

    /**
     * @Property flowProjectName: Project name.
     */
    readonly flowProjectName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFlowProjectsProps`
 *
 * @param properties - the TypeScript properties of a `RosFlowProjectsProps`
 *
 * @returns the result of the validation.
 */
function RosFlowProjectsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('flowProjectName', ros.validateString)(properties.flowProjectName));
    errors.collect(ros.propertyValidator('flowProjectId', ros.validateString)(properties.flowProjectId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosFlowProjectsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EMR::FlowProjects` resource
 *
 * @param properties - the TypeScript properties of a `RosFlowProjectsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EMR::FlowProjects` resource.
 */
// @ts-ignore TS6133
function rosFlowProjectsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFlowProjectsPropsValidator(properties).assertSuccess();
    }
    return {
      'FlowProjectId': ros.stringToRosTemplate(properties.flowProjectId),
      'FlowProjectName': ros.stringToRosTemplate(properties.flowProjectName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EMR::FlowProjects`.
 * @Note This class does not contain additional functions, so it is recommended to use the `FlowProjects` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-flowprojects
 */
export class RosFlowProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EMR::FlowProjects";

    /**
     * @Attribute FlowProjectIds: The list of flow project IDs.
     */
    public readonly attrFlowProjectIds: ros.IResolvable;

    /**
     * @Attribute FlowProjects: The list of flow projects.
     */
    public readonly attrFlowProjects: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property flowProjectId: The first ID of the resource
     */
    public flowProjectId: string | ros.IResolvable | undefined;

    /**
     * @Property flowProjectName: Project name.
     */
    public flowProjectName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowProjectsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFlowProjects.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFlowProjectIds = this.getAtt('FlowProjectIds');
        this.attrFlowProjects = this.getAtt('FlowProjects');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.flowProjectId = props.flowProjectId;
        this.flowProjectName = props.flowProjectName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            flowProjectId: this.flowProjectId,
            flowProjectName: this.flowProjectName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFlowProjectsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
