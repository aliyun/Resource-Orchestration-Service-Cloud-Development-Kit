// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosGrafanaWorkspace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspace
 */
export interface RosGrafanaWorkspaceProps {

    /**
     * @Property grafanaWorkspaceId: The first ID of the resource.
     */
    readonly grafanaWorkspaceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGrafanaWorkspaceProps`
 *
 * @param properties - the TypeScript properties of a `RosGrafanaWorkspaceProps`
 *
 * @returns the result of the validation.
 */
function RosGrafanaWorkspacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('grafanaWorkspaceId', ros.requiredValidator)(properties.grafanaWorkspaceId));
    errors.collect(ros.propertyValidator('grafanaWorkspaceId', ros.validateString)(properties.grafanaWorkspaceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosGrafanaWorkspaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::GrafanaWorkspace` resource
 *
 * @param properties - the TypeScript properties of a `RosGrafanaWorkspaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::GrafanaWorkspace` resource.
 */
// @ts-ignore TS6133
function rosGrafanaWorkspacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGrafanaWorkspacePropsValidator(properties).assertSuccess();
    }
    return {
      'GrafanaWorkspaceId': ros.stringToRosTemplate(properties.grafanaWorkspaceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::GrafanaWorkspace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GrafanaWorkspace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspace
 */
export class RosGrafanaWorkspace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::GrafanaWorkspace";

    /**
     * @Attribute CreateTime: The time when the workspace was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description of the workspace.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute GrafanaVersion: The version number of Grafana.
     */
    public readonly attrGrafanaVersion: ros.IResolvable;

    /**
     * @Attribute GrafanaWorkspaceEdition: The version of the workspace.
     */
    public readonly attrGrafanaWorkspaceEdition: ros.IResolvable;

    /**
     * @Attribute GrafanaWorkspaceId: The ID of the workspace.
     */
    public readonly attrGrafanaWorkspaceId: ros.IResolvable;

    /**
     * @Attribute GrafanaWorkspaceName: The workspace name.
     */
    public readonly attrGrafanaWorkspaceName: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The resource group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the resource.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property grafanaWorkspaceId: The first ID of the resource.
     */
    public grafanaWorkspaceId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosGrafanaWorkspaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGrafanaWorkspace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrGrafanaVersion = this.getAtt('GrafanaVersion');
        this.attrGrafanaWorkspaceEdition = this.getAtt('GrafanaWorkspaceEdition');
        this.attrGrafanaWorkspaceId = this.getAtt('GrafanaWorkspaceId');
        this.attrGrafanaWorkspaceName = this.getAtt('GrafanaWorkspaceName');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.grafanaWorkspaceId = props.grafanaWorkspaceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            grafanaWorkspaceId: this.grafanaWorkspaceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGrafanaWorkspacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosGrafanaWorkspaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspaces
 */
export interface RosGrafanaWorkspacesProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the Prometheus instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGrafanaWorkspacesProps`
 *
 * @param properties - the TypeScript properties of a `RosGrafanaWorkspacesProps`
 *
 * @returns the result of the validation.
 */
function RosGrafanaWorkspacesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosGrafanaWorkspacesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::GrafanaWorkspaces` resource
 *
 * @param properties - the TypeScript properties of a `RosGrafanaWorkspacesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::GrafanaWorkspaces` resource.
 */
// @ts-ignore TS6133
function rosGrafanaWorkspacesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGrafanaWorkspacesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::GrafanaWorkspaces`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GrafanaWorkspaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspaces
 */
export class RosGrafanaWorkspaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::GrafanaWorkspaces";

    /**
     * @Attribute GrafanaWorkspaceIds: The list of grafana workspace IDs.
     */
    public readonly attrGrafanaWorkspaceIds: ros.IResolvable;

    /**
     * @Attribute GrafanaWorkspaces: The list of grafana workspaces.
     */
    public readonly attrGrafanaWorkspaces: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the Prometheus instance belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGrafanaWorkspacesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGrafanaWorkspaces.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGrafanaWorkspaceIds = this.getAtt('GrafanaWorkspaceIds');
        this.attrGrafanaWorkspaces = this.getAtt('GrafanaWorkspaces');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGrafanaWorkspacesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPrometheis`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis
 */
export interface RosPrometheisProps {

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
 * Determine whether the given properties match those of a `RosPrometheisProps`
 *
 * @param properties - the TypeScript properties of a `RosPrometheisProps`
 *
 * @returns the result of the validation.
 */
function RosPrometheisPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPrometheisProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::Prometheis` resource
 *
 * @param properties - the TypeScript properties of a `RosPrometheisProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::Prometheis` resource.
 */
// @ts-ignore TS6133
function rosPrometheisPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrometheisPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::Prometheis`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Prometheis` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis
 */
export class RosPrometheis extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::Prometheis";

    /**
     * @Attribute ClusterIds: The list of cluster IDs.
     */
    public readonly attrClusterIds: ros.IResolvable;

    /**
     * @Attribute Prometheis: The list of Prometheis.
     */
    public readonly attrPrometheis: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


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
    constructor(scope: ros.Construct, id: string, props: RosPrometheisProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrometheis.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterIds = this.getAtt('ClusterIds');
        this.attrPrometheis = this.getAtt('Prometheis');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrometheisPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPrometheus`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheus
 */
export interface RosPrometheusProps {

    /**
     * @Property clusterId: The ID of the Prometheus instance.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPrometheusProps`
 *
 * @param properties - the TypeScript properties of a `RosPrometheusProps`
 *
 * @returns the result of the validation.
 */
function RosPrometheusPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPrometheusProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::Prometheus` resource
 *
 * @param properties - the TypeScript properties of a `RosPrometheusProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::Prometheus` resource.
 */
// @ts-ignore TS6133
function rosPrometheusPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrometheusPropsValidator(properties).assertSuccess();
    }
    return {
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::Prometheus`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Prometheus` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheus
 */
export class RosPrometheus extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::Prometheus";

    /**
     * @Attribute ClusterId: The ID of the Prometheus instance.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ClusterType: The type of the instance.
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute GrafanaInstanceId: The ID of the Grafana workspace.
     */
    public readonly attrGrafanaInstanceId: ros.IResolvable;

    /**
     * @Attribute PaymentType: The billing method.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute PrometheusName: The name of the instance.
     */
    public readonly attrPrometheusName: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityGroupId: The ID of the security group. This parameter is returned only for Prometheus instances for ECS.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * @Attribute SubClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    public readonly attrSubClustersJson: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the instance.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute UserId: The user ID.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The vSwitch ID. This parameter is returned only for Prometheus instances for ECS.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: The VPC ID. This parameter is returned only for Prometheus instances for ECS.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: The ID of the Prometheus instance.
     */
    public clusterId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosPrometheusProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrometheus.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrGrafanaInstanceId = this.getAtt('GrafanaInstanceId');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPrometheusName = this.getAtt('PrometheusName');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');
        this.attrSubClustersJson = this.getAtt('SubClustersJson');
        this.attrTags = this.getAtt('Tags');
        this.attrUserId = this.getAtt('UserId');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrometheusPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPrometheusAuthToken`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken
 */
export interface RosPrometheusAuthTokenProps {

    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPrometheusAuthTokenProps`
 *
 * @param properties - the TypeScript properties of a `RosPrometheusAuthTokenProps`
 *
 * @returns the result of the validation.
 */
function RosPrometheusAuthTokenPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPrometheusAuthTokenProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::PrometheusAuthToken` resource
 *
 * @param properties - the TypeScript properties of a `RosPrometheusAuthTokenProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::PrometheusAuthToken` resource.
 */
// @ts-ignore TS6133
function rosPrometheusAuthTokenPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrometheusAuthTokenPropsValidator(properties).assertSuccess();
    }
    return {
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::PrometheusAuthToken`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrometheusAuthToken` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken
 */
export class RosPrometheusAuthToken extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::PrometheusAuthToken";

    /**
     * @Attribute Token: The token for Grafana read URL.
     */
    public readonly attrToken: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: Cluster ID.
     */
    public clusterId: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosPrometheusAuthTokenProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrometheusAuthToken.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrToken = this.getAtt('Token');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrometheusAuthTokenPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPrometheusUrl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
 */
export interface RosPrometheusUrlProps {

    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPrometheusUrlProps`
 *
 * @param properties - the TypeScript properties of a `RosPrometheusUrlProps`
 *
 * @returns the result of the validation.
 */
function RosPrometheusUrlPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPrometheusUrlProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::PrometheusUrl` resource
 *
 * @param properties - the TypeScript properties of a `RosPrometheusUrlProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::PrometheusUrl` resource.
 */
// @ts-ignore TS6133
function rosPrometheusUrlPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrometheusUrlPropsValidator(properties).assertSuccess();
    }
    return {
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::PrometheusUrl`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrometheusUrl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
 */
export class RosPrometheusUrl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::PrometheusUrl";

    /**
     * @Attribute ClusterId: Cluster ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ClusterType: Cluster type.
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).
     */
    public readonly attrGrafanaUrl: ros.IResolvable;

    /**
     * @Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
     */
    public readonly attrInternetGrafanaUrl: ros.IResolvable;

    /**
     * @Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
     */
    public readonly attrInternetOpenTelemetryUrl: ros.IResolvable;

    /**
     * @Attribute InternetPushGatewayUrl: Internet push gateway URL.
     */
    public readonly attrInternetPushGatewayUrl: ros.IResolvable;

    /**
     * @Attribute InternetRemoteReadUrl: Internet remote read URL.
     */
    public readonly attrInternetRemoteReadUrl: ros.IResolvable;

    /**
     * @Attribute InternetRemoteWriteUrl: Internet remote write URL.
     */
    public readonly attrInternetRemoteWriteUrl: ros.IResolvable;

    /**
     * @Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.
     */
    public readonly attrOpenTelemetryUrl: ros.IResolvable;

    /**
     * @Attribute PushGatewayUrl: Internal push gateway URL.
     */
    public readonly attrPushGatewayUrl: ros.IResolvable;

    /**
     * @Attribute RemoteReadUrl: Internal remote read URL.
     */
    public readonly attrRemoteReadUrl: ros.IResolvable;

    /**
     * @Attribute RemoteWriteUrl: Internal remote write URL.
     */
    public readonly attrRemoteWriteUrl: ros.IResolvable;

    /**
     * @Attribute Token: The token for Grafana read URL.
     */
    public readonly attrToken: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: Cluster ID.
     */
    public clusterId: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosPrometheusUrlProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrometheusUrl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrGrafanaUrl = this.getAtt('GrafanaUrl');
        this.attrInternetGrafanaUrl = this.getAtt('InternetGrafanaUrl');
        this.attrInternetOpenTelemetryUrl = this.getAtt('InternetOpenTelemetryUrl');
        this.attrInternetPushGatewayUrl = this.getAtt('InternetPushGatewayUrl');
        this.attrInternetRemoteReadUrl = this.getAtt('InternetRemoteReadUrl');
        this.attrInternetRemoteWriteUrl = this.getAtt('InternetRemoteWriteUrl');
        this.attrOpenTelemetryUrl = this.getAtt('OpenTelemetryUrl');
        this.attrPushGatewayUrl = this.getAtt('PushGatewayUrl');
        this.attrRemoteReadUrl = this.getAtt('RemoteReadUrl');
        this.attrRemoteWriteUrl = this.getAtt('RemoteWriteUrl');
        this.attrToken = this.getAtt('Token');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrometheusUrlPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSyntheticTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictask
 */
export interface RosSyntheticTaskProps {

    /**
     * @Property taskId: The ID of the synthetic monitoring task.
     */
    readonly taskId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSyntheticTaskProps`
 *
 * @param properties - the TypeScript properties of a `RosSyntheticTaskProps`
 *
 * @returns the result of the validation.
 */
function RosSyntheticTaskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('taskId', ros.requiredValidator)(properties.taskId));
    errors.collect(ros.propertyValidator('taskId', ros.validateString)(properties.taskId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosSyntheticTaskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::SyntheticTask` resource
 *
 * @param properties - the TypeScript properties of a `RosSyntheticTaskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::SyntheticTask` resource.
 */
// @ts-ignore TS6133
function rosSyntheticTaskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSyntheticTaskPropsValidator(properties).assertSuccess();
    }
    return {
      'TaskId': ros.stringToRosTemplate(properties.taskId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::SyntheticTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SyntheticTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictask
 */
export class RosSyntheticTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::SyntheticTask";

    /**
     * @Attribute AvailableAssertions: The list of assertions.
     */
    public readonly attrAvailableAssertions: ros.IResolvable;

    /**
     * @Attribute CommonSetting: The general settings.
     */
    public readonly attrCommonSetting: ros.IResolvable;

    /**
     * @Attribute CustomPeriod: The custom cycle.
     */
    public readonly attrCustomPeriod: ros.IResolvable;

    /**
     * @Attribute Frequency: The detection frequency.
     */
    public readonly attrFrequency: ros.IResolvable;

    /**
     * @Attribute MonitorCategory: The detection point type. 1: PC. 2: mobile device.
     */
    public readonly attrMonitorCategory: ros.IResolvable;

    /**
     * @Attribute MonitorConf: The monitoring configurations.
     */
    public readonly attrMonitorConf: ros.IResolvable;

    /**
     * @Attribute Monitors: The list of monitoring points.
     */
    public readonly attrMonitors: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SyntheticTaskName: The name of synthetic task.
     */
    public readonly attrSyntheticTaskName: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the instance.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute TaskId: The ID of the synthetic monitoring task.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * @Attribute TaskType: The type of the task.
     */
    public readonly attrTaskType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property taskId: The ID of the synthetic monitoring task.
     */
    public taskId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosSyntheticTaskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSyntheticTask.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAvailableAssertions = this.getAtt('AvailableAssertions');
        this.attrCommonSetting = this.getAtt('CommonSetting');
        this.attrCustomPeriod = this.getAtt('CustomPeriod');
        this.attrFrequency = this.getAtt('Frequency');
        this.attrMonitorCategory = this.getAtt('MonitorCategory');
        this.attrMonitorConf = this.getAtt('MonitorConf');
        this.attrMonitors = this.getAtt('Monitors');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSyntheticTaskName = this.getAtt('SyntheticTaskName');
        this.attrTags = this.getAtt('Tags');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrTaskType = this.getAtt('TaskType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.taskId = props.taskId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            taskId: this.taskId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSyntheticTaskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSyntheticTasks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictasks
 */
export interface RosSyntheticTasksProps {

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
 * Determine whether the given properties match those of a `RosSyntheticTasksProps`
 *
 * @param properties - the TypeScript properties of a `RosSyntheticTasksProps`
 *
 * @returns the result of the validation.
 */
function RosSyntheticTasksPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosSyntheticTasksProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::SyntheticTasks` resource
 *
 * @param properties - the TypeScript properties of a `RosSyntheticTasksProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::SyntheticTasks` resource.
 */
// @ts-ignore TS6133
function rosSyntheticTasksPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSyntheticTasksPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::SyntheticTasks`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SyntheticTasks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictasks
 */
export class RosSyntheticTasks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::SyntheticTasks";

    /**
     * @Attribute SyntheticTasks: The list of synthetic tasks.
     */
    public readonly attrSyntheticTasks: ros.IResolvable;

    /**
     * @Attribute TaskIds: The list of task IDs.
     */
    public readonly attrTaskIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


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
    constructor(scope: ros.Construct, id: string, props: RosSyntheticTasksProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSyntheticTasks.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSyntheticTasks = this.getAtt('SyntheticTasks');
        this.attrTaskIds = this.getAtt('TaskIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSyntheticTasksPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosXTraceApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapp
 */
export interface RosXTraceAppProps {

    /**
     * @Property pid: The process identifier (PID) of the application.
     */
    readonly pid: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosXTraceAppProps`
 *
 * @param properties - the TypeScript properties of a `RosXTraceAppProps`
 *
 * @returns the result of the validation.
 */
function RosXTraceAppPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('pid', ros.requiredValidator)(properties.pid));
    errors.collect(ros.propertyValidator('pid', ros.validateString)(properties.pid));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosXTraceAppProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::XTraceApp` resource
 *
 * @param properties - the TypeScript properties of a `RosXTraceAppProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::XTraceApp` resource.
 */
// @ts-ignore TS6133
function rosXTraceAppPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosXTraceAppPropsValidator(properties).assertSuccess();
    }
    return {
      'Pid': ros.stringToRosTemplate(properties.pid),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::XTraceApp`.
 * @Note This class does not contain additional functions, so it is recommended to use the `XTraceApp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapp
 */
export class RosXTraceApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::XTraceApp";

    /**
     * @Attribute CreateTime: The timestamp generated when the task was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Pid: The process identifier (PID) of the application.
     */
    public readonly attrPid: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the application.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute XTraceAppName: The name of the application.
     */
    public readonly attrXTraceAppName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property pid: The process identifier (PID) of the application.
     */
    public pid: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosXTraceAppProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosXTraceApp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrPid = this.getAtt('Pid');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTags = this.getAtt('Tags');
        this.attrXTraceAppName = this.getAtt('XTraceAppName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.pid = props.pid;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            pid: this.pid,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosXTraceAppPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosXTraceApps`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapps
 */
export interface RosXTraceAppsProps {

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
 * Determine whether the given properties match those of a `RosXTraceAppsProps`
 *
 * @param properties - the TypeScript properties of a `RosXTraceAppsProps`
 *
 * @returns the result of the validation.
 */
function RosXTraceAppsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosXTraceAppsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::XTraceApps` resource
 *
 * @param properties - the TypeScript properties of a `RosXTraceAppsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::XTraceApps` resource.
 */
// @ts-ignore TS6133
function rosXTraceAppsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosXTraceAppsPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::XTraceApps`.
 * @Note This class does not contain additional functions, so it is recommended to use the `XTraceApps` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapps
 */
export class RosXTraceApps extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::XTraceApps";

    /**
     * @Attribute Pids: The list of Pids.
     */
    public readonly attrPids: ros.IResolvable;

    /**
     * @Attribute XTraceApps: The list of Application Monitoring tasks.
     */
    public readonly attrXTraceApps: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


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
    constructor(scope: ros.Construct, id: string, props: RosXTraceAppsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosXTraceApps.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPids = this.getAtt('Pids');
        this.attrXTraceApps = this.getAtt('XTraceApps');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosXTraceAppsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
