// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-lindorm-instances
 */
export interface RosInstancesProps {

    /**
     * @Property instanceIds: The list of the instance id.
     */
    readonly instanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property queryStr: Instance name keyword, which can be used for fuzzy search.
     */
    readonly queryStr?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The resource group id of lindorm instance.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property serviceType: The type of lindorm instance.
     */
    readonly serviceType?: string | ros.IResolvable;

    /**
     * @Property supportEngine: Database engine types supported by the queried instance.
     * 1: Support search engines.
     * 2: Support timing engine.
     * 4: Support wide table engine.
     * 8: Support file engine.
     * Note For example: the value of SupportEngine is 15, 15=8+4+2+1, which means that the instance supports search engine, timing engine, wide table engine and file engine. The value of SupportEngine is 6, 6=4+2, indicating that the instance supports timing engine and wide table engine.
     */
    readonly supportEngine?: number | ros.IResolvable;

    /**
     * @Property tags: Tags of lindorm instance.
     */
    readonly tags?: RosInstances.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.serviceType && (typeof properties.serviceType) !== 'object') {
        errors.collect(ros.propertyValidator('serviceType', ros.validateAllowedValues)({
          data: properties.serviceType,
          allowedValues: ["lindorm","lindorm_multizone","serverless_lindorm","lindorm_standalone","lts"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceType', ros.validateString)(properties.serviceType));
    errors.collect(ros.propertyValidator('queryStr', ros.validateString)(properties.queryStr));
    errors.collect(ros.propertyValidator('supportEngine', ros.validateNumber)(properties.supportEngine));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstances_TagsPropertyValidator))(properties.tags));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::Lindorm::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::Lindorm::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceIds': ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
      'QueryStr': ros.stringToRosTemplate(properties.queryStr),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'ServiceType': ros.stringToRosTemplate(properties.serviceType),
      'SupportEngine': ros.numberToRosTemplate(properties.supportEngine),
      'Tags': ros.listMapper(rosInstancesTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::Lindorm::Instances`, which is used to query the information about Lindorm instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-lindorm-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::Lindorm::Instances";

    /**
     * @Attribute InstanceIds: The list of The instance list.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The detail list of The instance.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceIds: The list of the instance id.
     */
    public instanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property queryStr: Instance name keyword, which can be used for fuzzy search.
     */
    public queryStr: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The resource group id of lindorm instance.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property serviceType: The type of lindorm instance.
     */
    public serviceType: string | ros.IResolvable | undefined;

    /**
     * @Property supportEngine: Database engine types supported by the queried instance.
     * 1: Support search engines.
     * 2: Support timing engine.
     * 4: Support wide table engine.
     * 8: Support file engine.
     * Note For example: the value of SupportEngine is 15, 15=8+4+2+1, which means that the instance supports search engine, timing engine, wide table engine and file engine. The value of SupportEngine is 6, 6=4+2, indicating that the instance supports timing engine and wide table engine.
     */
    public supportEngine: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of lindorm instance.
     */
    public tags: RosInstances.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceIds = props.instanceIds;
        this.queryStr = props.queryStr;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.serviceType = props.serviceType;
        this.supportEngine = props.supportEngine;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceIds: this.instanceIds,
            queryStr: this.queryStr,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            serviceType: this.serviceType,
            supportEngine: this.supportEngine,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstances {
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
function RosInstances_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::Lindorm::Instances.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::Lindorm::Instances.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstancesTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstances_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
