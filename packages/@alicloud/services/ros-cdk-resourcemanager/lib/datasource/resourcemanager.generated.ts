// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosResourceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroup
 */
export interface RosResourceGroupProps {

    /**
     * @Property includeTags: Whether to include the tags of the resource group in the query results.
     */
    readonly includeTags?: boolean | ros.IResolvable;

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
 * Determine whether the given properties match those of a `RosResourceGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupProps`
 *
 * @returns the result of the validation.
 */
function RosResourceGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('includeTags', ros.validateBoolean)(properties.includeTags));
    if(properties.resourceGroupId && (Array.isArray(properties.resourceGroupId) || (typeof properties.resourceGroupId) === 'string')) {
        errors.collect(ros.propertyValidator('resourceGroupId', ros.validateLength)({
            data: properties.resourceGroupId.length,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosResourceGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ResourceManager::ResourceGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ResourceManager::ResourceGroup` resource.
 */
// @ts-ignore TS6133
function rosResourceGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourceGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'IncludeTags': ros.booleanToRosTemplate(properties.includeTags),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ResourceManager::ResourceGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroup
 */
export class RosResourceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ResourceManager::ResourceGroup";

    /**
     * @Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.
     */
    public readonly attrAccountId: ros.IResolvable;

    /**
     * @Attribute CreateDate: The time when the resource group was created.
     */
    public readonly attrCreateDate: ros.IResolvable;

    /**
     * @Attribute DisplayName: The display name of the resource group.
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * @Attribute Name: The name of the resource group.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute RegionStatuses: The status of the resource group in each region.
     */
    public readonly attrRegionStatuses: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Status: The status of the resource group.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the resource group.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property includeTags: Whether to include the tags of the resource group in the query results.
     */
    public includeTags: boolean | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourceGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountId = this.getAtt('AccountId');
        this.attrCreateDate = this.getAtt('CreateDate');
        this.attrDisplayName = this.getAtt('DisplayName');
        this.attrName = this.getAtt('Name');
        this.attrRegionStatuses = this.getAtt('RegionStatuses');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrStatus = this.getAtt('Status');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.includeTags = props.includeTags;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            includeTags: this.includeTags,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosResourceGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroups
 */
export interface RosResourceGroupsProps {

    /**
     * @Property displayName: The display name of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported.The display name can be a maximum of 50 characters in length.
     */
    readonly displayName?: string | ros.IResolvable;

    /**
     * @Property includeTags: Whether to include the tags of the resource groups in the query results.
     */
    readonly includeTags?: boolean | ros.IResolvable;

    /**
     * @Property name: The identifier of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported. The identifier can be a maximum of 50 characters in length and can contain letters, digits, and hyphens (-).
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupIds: The IDs of the resource groups. This parameter specifies a filter condition for the query.You can specify a maximum of 100 resource group IDs.
     */
    readonly resourceGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosResourceGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosResourceGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('includeTags', ros.validateBoolean)(properties.includeTags));
    if(properties.resourceGroupIds && (Array.isArray(properties.resourceGroupIds) || (typeof properties.resourceGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('resourceGroupIds', ros.validateLength)({
            data: properties.resourceGroupIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('resourceGroupIds', ros.listValidator(ros.validateString))(properties.resourceGroupIds));
    if(properties.displayName && (Array.isArray(properties.displayName) || (typeof properties.displayName) === 'string')) {
        errors.collect(ros.propertyValidator('displayName', ros.validateLength)({
            data: properties.displayName.length,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    if(properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosResourceGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ResourceManager::ResourceGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ResourceManager::ResourceGroups` resource.
 */
// @ts-ignore TS6133
function rosResourceGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourceGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
      'IncludeTags': ros.booleanToRosTemplate(properties.includeTags),
      'Name': ros.stringToRosTemplate(properties.name),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupIds': ros.listMapper(ros.stringToRosTemplate)(properties.resourceGroupIds),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ResourceManager::ResourceGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroups
 */
export class RosResourceGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ResourceManager::ResourceGroups";

    /**
     * @Attribute ResourceGroupIds: The IDs of the resource groups.
     */
    public readonly attrResourceGroupIds: ros.IResolvable;

    /**
     * @Attribute ResourceGroups: The list of the resource groups.
     */
    public readonly attrResourceGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property displayName: The display name of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported.The display name can be a maximum of 50 characters in length.
     */
    public displayName: string | ros.IResolvable | undefined;

    /**
     * @Property includeTags: Whether to include the tags of the resource groups in the query results.
     */
    public includeTags: boolean | ros.IResolvable | undefined;

    /**
     * @Property name: The identifier of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported. The identifier can be a maximum of 50 characters in length and can contain letters, digits, and hyphens (-).
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupIds: The IDs of the resource groups. This parameter specifies a filter condition for the query.You can specify a maximum of 100 resource group IDs.
     */
    public resourceGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourceGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrResourceGroupIds = this.getAtt('ResourceGroupIds');
        this.attrResourceGroups = this.getAtt('ResourceGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.displayName = props.displayName;
        this.includeTags = props.includeTags;
        this.name = props.name;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupIds = props.resourceGroupIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            displayName: this.displayName,
            includeTags: this.includeTags,
            name: this.name,
            refreshOptions: this.refreshOptions,
            resourceGroupIds: this.resourceGroupIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
