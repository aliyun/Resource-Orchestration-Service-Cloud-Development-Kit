// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosApplications`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-applications
 */
export interface RosApplicationsProps {

    /**
     * @Property appName: The application name keyword.
     */
    readonly appName?: string | ros.IResolvable;

    /**
     * @Property clusterId: The ID of the cluster.
     */
    readonly clusterId?: string | ros.IResolvable;

    /**
     * @Property logicalRegionId: The ID of the namespace.
     */
    readonly logicalRegionId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosApplicationsProps`
 *
 * @param properties - the TypeScript properties of a `RosApplicationsProps`
 *
 * @returns the result of the validation.
 */
function RosApplicationsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logicalRegionId', ros.validateString)(properties.logicalRegionId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    return errors.wrap('supplied properties not correct for "RosApplicationsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EDAS::Applications` resource
 *
 * @param properties - the TypeScript properties of a `RosApplicationsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EDAS::Applications` resource.
 */
// @ts-ignore TS6133
function rosApplicationsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApplicationsPropsValidator(properties).assertSuccess();
    }
    return {
      'AppName': ros.stringToRosTemplate(properties.appName),
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'LogicalRegionId': ros.stringToRosTemplate(properties.logicalRegionId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EDAS::Applications`, which is used to query applications.
 * @Note This class does not contain additional functions, so it is recommended to use the `Applications` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-applications
 */
export class RosApplications extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EDAS::Applications";

    /**
     * @Attribute AppIds: The list of application IDs.
     */
    public readonly attrAppIds: ros.IResolvable;

    /**
     * @Attribute Applications: The list of applications.
     */
    public readonly attrApplications: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appName: The application name keyword.
     */
    public appName: string | ros.IResolvable | undefined;

    /**
     * @Property clusterId: The ID of the cluster.
     */
    public clusterId: string | ros.IResolvable | undefined;

    /**
     * @Property logicalRegionId: The ID of the namespace.
     */
    public logicalRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApplications.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppIds = this.getAtt('AppIds');
        this.attrApplications = this.getAtt('Applications');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appName = props.appName;
        this.clusterId = props.clusterId;
        this.logicalRegionId = props.logicalRegionId;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appName: this.appName,
            clusterId: this.clusterId,
            logicalRegionId: this.logicalRegionId,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApplicationsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-clusters
 */
export interface RosClustersProps {

    /**
     * @Property logicalRegionId: The ID of the namespace.
     */
    readonly logicalRegionId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClustersProps`
 *
 * @param properties - the TypeScript properties of a `RosClustersProps`
 *
 * @returns the result of the validation.
 */
function RosClustersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logicalRegionId', ros.validateString)(properties.logicalRegionId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosClustersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EDAS::Clusters` resource
 *
 * @param properties - the TypeScript properties of a `RosClustersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EDAS::Clusters` resource.
 */
// @ts-ignore TS6133
function rosClustersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClustersPropsValidator(properties).assertSuccess();
    }
    return {
      'LogicalRegionId': ros.stringToRosTemplate(properties.logicalRegionId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EDAS::Clusters`, which is used to query clusters.
 * @Note This class does not contain additional functions, so it is recommended to use the `Clusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-clusters
 */
export class RosClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EDAS::Clusters";

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
     * @Property logicalRegionId: The ID of the namespace.
     */
    public logicalRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClustersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClusters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterIds = this.getAtt('ClusterIds');
        this.attrClusters = this.getAtt('Clusters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.logicalRegionId = props.logicalRegionId;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            logicalRegionId: this.logicalRegionId,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClustersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosUserDefineRegions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-userdefineregions
 */
export interface RosUserDefineRegionsProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserDefineRegionsProps`
 *
 * @param properties - the TypeScript properties of a `RosUserDefineRegionsProps`
 *
 * @returns the result of the validation.
 */
function RosUserDefineRegionsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosUserDefineRegionsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EDAS::UserDefineRegions` resource
 *
 * @param properties - the TypeScript properties of a `RosUserDefineRegionsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EDAS::UserDefineRegions` resource.
 */
// @ts-ignore TS6133
function rosUserDefineRegionsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserDefineRegionsPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EDAS::UserDefineRegions`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserDefineRegions` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-userdefineregions
 */
export class RosUserDefineRegions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EDAS::UserDefineRegions";

    /**
     * @Attribute Ids: The list of user define region IDs.
     */
    public readonly attrIds: ros.IResolvable;

    /**
     * @Attribute UserDefineRegions: The list of user define regions.
     */
    public readonly attrUserDefineRegions: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


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
    constructor(scope: ros.Construct, id: string, props: RosUserDefineRegionsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserDefineRegions.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIds = this.getAtt('Ids');
        this.attrUserDefineRegions = this.getAtt('UserDefineRegions');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserDefineRegionsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
