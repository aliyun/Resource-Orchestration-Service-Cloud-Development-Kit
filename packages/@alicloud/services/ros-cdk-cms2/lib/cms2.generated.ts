// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAddonRelease`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
 */
export interface RosAddonReleaseProps {

    /**
     * @Property addonName: The name of the add-on.
     */
    readonly addonName: string | ros.IResolvable;

    /**
     * @Property addonVersion: The version of the add-on.
     */
    readonly addonVersion: string | ros.IResolvable;

    /**
     * @Property policyId: The ID of the integration policy.
     */
    readonly policyId: string | ros.IResolvable;

    /**
     * @Property entityRules: Entity discovery rules model.
     */
    readonly entityRules?: RosAddonRelease.EntityRulesProperty | ros.IResolvable;

    /**
     * @Property envType: The environment type.
     */
    readonly envType?: string | ros.IResolvable;

    /**
     * @Property lang: The language of the add-on.
     */
    readonly lang?: string | ros.IResolvable;

    /**
     * @Property parentAddonReleaseId: The ID of the parent add-on release.
     */
    readonly parentAddonReleaseId?: string | ros.IResolvable;

    /**
     * @Property releaseName: The name of the add-on release.
     */
    readonly releaseName?: string | ros.IResolvable;

    /**
     * @Property values: The values of the add-on release.
     */
    readonly values?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property workspace: The workspace of the add-on release.
     */
    readonly workspace?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAddonReleaseProps`
 *
 * @param properties - the TypeScript properties of a `RosAddonReleaseProps`
 *
 * @returns the result of the validation.
 */
function RosAddonReleasePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('addonVersion', ros.requiredValidator)(properties.addonVersion));
    errors.collect(ros.propertyValidator('addonVersion', ros.validateString)(properties.addonVersion));
    errors.collect(ros.propertyValidator('parentAddonReleaseId', ros.validateString)(properties.parentAddonReleaseId));
    errors.collect(ros.propertyValidator('values', ros.hashValidator(ros.validateAny))(properties.values));
    errors.collect(ros.propertyValidator('addonName', ros.requiredValidator)(properties.addonName));
    errors.collect(ros.propertyValidator('addonName', ros.validateString)(properties.addonName));
    errors.collect(ros.propertyValidator('lang', ros.validateString)(properties.lang));
    errors.collect(ros.propertyValidator('releaseName', ros.validateString)(properties.releaseName));
    errors.collect(ros.propertyValidator('entityRules', RosAddonRelease_EntityRulesPropertyValidator)(properties.entityRules));
    errors.collect(ros.propertyValidator('policyId', ros.requiredValidator)(properties.policyId));
    errors.collect(ros.propertyValidator('policyId', ros.validateString)(properties.policyId));
    if(properties.envType && (typeof properties.envType) !== 'object') {
        errors.collect(ros.propertyValidator('envType', ros.validateAllowedValues)({
          data: properties.envType,
          allowedValues: ["CS","ECS","Cloud"],
        }));
    }
    errors.collect(ros.propertyValidator('envType', ros.validateString)(properties.envType));
    errors.collect(ros.propertyValidator('workspace', ros.validateString)(properties.workspace));
    return errors.wrap('supplied properties not correct for "RosAddonReleaseProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease` resource
 *
 * @param properties - the TypeScript properties of a `RosAddonReleaseProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease` resource.
 */
// @ts-ignore TS6133
function rosAddonReleasePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAddonReleasePropsValidator(properties).assertSuccess();
    }
    return {
      'AddonName': ros.stringToRosTemplate(properties.addonName),
      'AddonVersion': ros.stringToRosTemplate(properties.addonVersion),
      'PolicyId': ros.stringToRosTemplate(properties.policyId),
      'EntityRules': rosAddonReleaseEntityRulesPropertyToRosTemplate(properties.entityRules),
      'EnvType': ros.stringToRosTemplate(properties.envType),
      'Lang': ros.stringToRosTemplate(properties.lang),
      'ParentAddonReleaseId': ros.stringToRosTemplate(properties.parentAddonReleaseId),
      'ReleaseName': ros.stringToRosTemplate(properties.releaseName),
      'Values': ros.hashMapper(ros.objectToRosTemplate)(properties.values),
      'Workspace': ros.stringToRosTemplate(properties.workspace),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS2::AddonRelease`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AddonRelease` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
 */
export class RosAddonRelease extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS2::AddonRelease";

    /**
     * @Attribute ReleaseName: The name of the add-on release.
     */
    public readonly attrReleaseName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addonName: The name of the add-on.
     */
    public addonName: string | ros.IResolvable;

    /**
     * @Property addonVersion: The version of the add-on.
     */
    public addonVersion: string | ros.IResolvable;

    /**
     * @Property policyId: The ID of the integration policy.
     */
    public policyId: string | ros.IResolvable;

    /**
     * @Property entityRules: Entity discovery rules model.
     */
    public entityRules: RosAddonRelease.EntityRulesProperty | ros.IResolvable | undefined;

    /**
     * @Property envType: The environment type.
     */
    public envType: string | ros.IResolvable | undefined;

    /**
     * @Property lang: The language of the add-on.
     */
    public lang: string | ros.IResolvable | undefined;

    /**
     * @Property parentAddonReleaseId: The ID of the parent add-on release.
     */
    public parentAddonReleaseId: string | ros.IResolvable | undefined;

    /**
     * @Property releaseName: The name of the add-on release.
     */
    public releaseName: string | ros.IResolvable | undefined;

    /**
     * @Property values: The values of the add-on release.
     */
    public values: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property workspace: The workspace of the add-on release.
     */
    public workspace: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddonReleaseProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAddonRelease.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrReleaseName = this.getAtt('ReleaseName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addonName = props.addonName;
        this.addonVersion = props.addonVersion;
        this.policyId = props.policyId;
        this.entityRules = props.entityRules;
        this.envType = props.envType;
        this.lang = props.lang;
        this.parentAddonReleaseId = props.parentAddonReleaseId;
        this.releaseName = props.releaseName;
        this.values = props.values;
        this.workspace = props.workspace;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addonName: this.addonName,
            addonVersion: this.addonVersion,
            policyId: this.policyId,
            entityRules: this.entityRules,
            envType: this.envType,
            lang: this.lang,
            parentAddonReleaseId: this.parentAddonReleaseId,
            releaseName: this.releaseName,
            values: this.values,
            workspace: this.workspace,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAddonReleasePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAddonRelease {
    /**
     * @stability external
     */
    export interface AnnotationsProperty {
        /**
         * @Property op: Operation.
         */
        readonly op: string | ros.IResolvable;
        /**
         * @Property tagKey: The key of the annotation.
         */
        readonly tagKey: string | ros.IResolvable;
        /**
         * @Property tagValues: The value sets of the annotation.
         */
        readonly tagValues: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AnnotationsProperty`
 *
 * @param properties - the TypeScript properties of a `AnnotationsProperty`
 *
 * @returns the result of the validation.
 */
function RosAddonRelease_AnnotationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('op', ros.requiredValidator)(properties.op));
    errors.collect(ros.propertyValidator('op', ros.validateString)(properties.op));
    errors.collect(ros.propertyValidator('tagKey', ros.requiredValidator)(properties.tagKey));
    errors.collect(ros.propertyValidator('tagKey', ros.validateString)(properties.tagKey));
    errors.collect(ros.propertyValidator('tagValues', ros.requiredValidator)(properties.tagValues));
    errors.collect(ros.propertyValidator('tagValues', ros.listValidator(ros.validateString))(properties.tagValues));
    return errors.wrap('supplied properties not correct for "AnnotationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease.Annotations` resource
 *
 * @param properties - the TypeScript properties of a `AnnotationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease.Annotations` resource.
 */
// @ts-ignore TS6133
function rosAddonReleaseAnnotationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAddonRelease_AnnotationsPropertyValidator(properties).assertSuccess();
    return {
      'Op': ros.stringToRosTemplate(properties.op),
      'TagKey': ros.stringToRosTemplate(properties.tagKey),
      'TagValues': ros.listMapper(ros.stringToRosTemplate)(properties.tagValues),
    };
}

export namespace RosAddonRelease {
    /**
     * @stability external
     */
    export interface EntityRulesProperty {
        /**
         * @Property fieldRules: Attribute matching rules.
         */
        readonly fieldRules?: Array<RosAddonRelease.FieldRulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property entityTypes: Entity type sets.
         */
        readonly entityTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property annotations: Annotation matching sets.
         */
        readonly annotations?: Array<RosAddonRelease.AnnotationsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resourceGroupId: Resource group ID.
         */
        readonly resourceGroupId?: string | ros.IResolvable;
        /**
         * @Property regionIds: Region ID sets.
         */
        readonly regionIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ipMatchRule: IP matching rule sets.
         */
        readonly ipMatchRule?: Array<RosAddonRelease.IpMatchRuleProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property labels: Label matching sets.
         */
        readonly labels?: Array<RosAddonRelease.LabelsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceIds: Instance ID sets.
         */
        readonly instanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: Discover services through tags.
         */
        readonly tags?: RosAddonRelease.TagsProperty[];
    }
}
/**
 * Determine whether the given properties match those of a `EntityRulesProperty`
 *
 * @param properties - the TypeScript properties of a `EntityRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosAddonRelease_EntityRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('fieldRules', ros.listValidator(RosAddonRelease_FieldRulesPropertyValidator))(properties.fieldRules));
    errors.collect(ros.propertyValidator('entityTypes', ros.listValidator(ros.validateString))(properties.entityTypes));
    errors.collect(ros.propertyValidator('annotations', ros.listValidator(RosAddonRelease_AnnotationsPropertyValidator))(properties.annotations));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('regionIds', ros.listValidator(ros.validateString))(properties.regionIds));
    errors.collect(ros.propertyValidator('ipMatchRule', ros.listValidator(RosAddonRelease_IpMatchRulePropertyValidator))(properties.ipMatchRule));
    errors.collect(ros.propertyValidator('labels', ros.listValidator(RosAddonRelease_LabelsPropertyValidator))(properties.labels));
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosAddonRelease_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "EntityRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease.EntityRules` resource
 *
 * @param properties - the TypeScript properties of a `EntityRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease.EntityRules` resource.
 */
// @ts-ignore TS6133
function rosAddonReleaseEntityRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAddonRelease_EntityRulesPropertyValidator(properties).assertSuccess();
    return {
      'FieldRules': ros.listMapper(rosAddonReleaseFieldRulesPropertyToRosTemplate)(properties.fieldRules),
      'EntityTypes': ros.listMapper(ros.stringToRosTemplate)(properties.entityTypes),
      'Annotations': ros.listMapper(rosAddonReleaseAnnotationsPropertyToRosTemplate)(properties.annotations),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'RegionIds': ros.listMapper(ros.stringToRosTemplate)(properties.regionIds),
      'IpMatchRule': ros.listMapper(rosAddonReleaseIpMatchRulePropertyToRosTemplate)(properties.ipMatchRule),
      'Labels': ros.listMapper(rosAddonReleaseLabelsPropertyToRosTemplate)(properties.labels),
      'InstanceIds': ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
      'Tags': ros.listMapper(rosAddonReleaseTagsPropertyToRosTemplate)(properties.tags),
    };
}

export namespace RosAddonRelease {
    /**
     * @stability external
     */
    export interface FieldRulesProperty {
        /**
         * @Property op: Operation.
         */
        readonly op: string | ros.IResolvable;
        /**
         * @Property fieldValues: The value sets of the attribute.
         */
        readonly fieldValues: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property fieldKey: The key of the attribute.
         */
        readonly fieldKey: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FieldRulesProperty`
 *
 * @param properties - the TypeScript properties of a `FieldRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosAddonRelease_FieldRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('op', ros.requiredValidator)(properties.op));
    errors.collect(ros.propertyValidator('op', ros.validateString)(properties.op));
    errors.collect(ros.propertyValidator('fieldValues', ros.requiredValidator)(properties.fieldValues));
    errors.collect(ros.propertyValidator('fieldValues', ros.listValidator(ros.validateString))(properties.fieldValues));
    errors.collect(ros.propertyValidator('fieldKey', ros.requiredValidator)(properties.fieldKey));
    errors.collect(ros.propertyValidator('fieldKey', ros.validateString)(properties.fieldKey));
    return errors.wrap('supplied properties not correct for "FieldRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease.FieldRules` resource
 *
 * @param properties - the TypeScript properties of a `FieldRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease.FieldRules` resource.
 */
// @ts-ignore TS6133
function rosAddonReleaseFieldRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAddonRelease_FieldRulesPropertyValidator(properties).assertSuccess();
    return {
      'Op': ros.stringToRosTemplate(properties.op),
      'FieldValues': ros.listMapper(ros.stringToRosTemplate)(properties.fieldValues),
      'FieldKey': ros.stringToRosTemplate(properties.fieldKey),
    };
}

export namespace RosAddonRelease {
    /**
     * @stability external
     */
    export interface IpMatchRuleProperty {
        /**
         * @Property ipFieldKey: The key of the IP field.
         */
        readonly ipFieldKey?: string | ros.IResolvable;
        /**
         * @Property ipCidr: The CIDR of the IP.
         */
        readonly ipCidr?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IpMatchRuleProperty`
 *
 * @param properties - the TypeScript properties of a `IpMatchRuleProperty`
 *
 * @returns the result of the validation.
 */
function RosAddonRelease_IpMatchRulePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ipFieldKey', ros.validateString)(properties.ipFieldKey));
    errors.collect(ros.propertyValidator('ipCidr', ros.validateString)(properties.ipCidr));
    return errors.wrap('supplied properties not correct for "IpMatchRuleProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease.IpMatchRule` resource
 *
 * @param properties - the TypeScript properties of a `IpMatchRuleProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease.IpMatchRule` resource.
 */
// @ts-ignore TS6133
function rosAddonReleaseIpMatchRulePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAddonRelease_IpMatchRulePropertyValidator(properties).assertSuccess();
    return {
      'IpFieldKey': ros.stringToRosTemplate(properties.ipFieldKey),
      'IpCIDR': ros.stringToRosTemplate(properties.ipCidr),
    };
}

export namespace RosAddonRelease {
    /**
     * @stability external
     */
    export interface LabelsProperty {
        /**
         * @Property op: Operation.
         */
        readonly op: string | ros.IResolvable;
        /**
         * @Property tagKey: The key of the label.
         */
        readonly tagKey: string | ros.IResolvable;
        /**
         * @Property tagValues: The value sets of the label.
         */
        readonly tagValues: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LabelsProperty`
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the result of the validation.
 */
function RosAddonRelease_LabelsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('op', ros.requiredValidator)(properties.op));
    errors.collect(ros.propertyValidator('op', ros.validateString)(properties.op));
    errors.collect(ros.propertyValidator('tagKey', ros.requiredValidator)(properties.tagKey));
    errors.collect(ros.propertyValidator('tagKey', ros.validateString)(properties.tagKey));
    errors.collect(ros.propertyValidator('tagValues', ros.requiredValidator)(properties.tagValues));
    errors.collect(ros.propertyValidator('tagValues', ros.listValidator(ros.validateString))(properties.tagValues));
    return errors.wrap('supplied properties not correct for "LabelsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease.Labels` resource
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease.Labels` resource.
 */
// @ts-ignore TS6133
function rosAddonReleaseLabelsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAddonRelease_LabelsPropertyValidator(properties).assertSuccess();
    return {
      'Op': ros.stringToRosTemplate(properties.op),
      'TagKey': ros.stringToRosTemplate(properties.tagKey),
      'TagValues': ros.listMapper(ros.stringToRosTemplate)(properties.tagValues),
    };
}

export namespace RosAddonRelease {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property op: Operation.
         */
        readonly op: string | ros.IResolvable;
        /**
         * @Property tagKey: The key of the tag.
         */
        readonly tagKey: string | ros.IResolvable;
        /**
         * @Property tagValues: The value sets of the tag.
         */
        readonly tagValues: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosAddonRelease_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('op', ros.requiredValidator)(properties.op));
    errors.collect(ros.propertyValidator('op', ros.validateString)(properties.op));
    errors.collect(ros.propertyValidator('tagKey', ros.requiredValidator)(properties.tagKey));
    errors.collect(ros.propertyValidator('tagKey', ros.validateString)(properties.tagKey));
    errors.collect(ros.propertyValidator('tagValues', ros.requiredValidator)(properties.tagValues));
    errors.collect(ros.propertyValidator('tagValues', ros.listValidator(ros.validateString))(properties.tagValues));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS2::AddonRelease.Tags` resource.
 */
// @ts-ignore TS6133
function rosAddonReleaseTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAddonRelease_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Op': ros.stringToRosTemplate(properties.op),
      'TagKey': ros.stringToRosTemplate(properties.tagKey),
      'TagValues': ros.listMapper(ros.stringToRosTemplate)(properties.tagValues),
    };
}

/**
 * Properties for defining a `RosIntegrationPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy
 */
export interface RosIntegrationPolicyProps {

    /**
     * @Property policyType: The type of the integration policy.
     */
    readonly policyType: string | ros.IResolvable;

    /**
     * @Property entityGroup: The entity group information.
     */
    readonly entityGroup?: RosIntegrationPolicy.EntityGroupProperty | ros.IResolvable;

    /**
     * @Property policyName: The name of the integration policy.
     */
    readonly policyName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to integration policy. Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosIntegrationPolicy.TagsProperty[];

    /**
     * @Property workspace: The workspace of the integration policy.
     */
    readonly workspace?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosIntegrationPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosIntegrationPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosIntegrationPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policyType', ros.requiredValidator)(properties.policyType));
    if(properties.policyType && (typeof properties.policyType) !== 'object') {
        errors.collect(ros.propertyValidator('policyType', ros.validateAllowedValues)({
          data: properties.policyType,
          allowedValues: ["CS","ECS","Cloud"],
        }));
    }
    errors.collect(ros.propertyValidator('policyType', ros.validateString)(properties.policyType));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('entityGroup', RosIntegrationPolicy_EntityGroupPropertyValidator)(properties.entityGroup));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosIntegrationPolicy_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('workspace', ros.validateString)(properties.workspace));
    return errors.wrap('supplied properties not correct for "RosIntegrationPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS2::IntegrationPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosIntegrationPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS2::IntegrationPolicy` resource.
 */
// @ts-ignore TS6133
function rosIntegrationPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIntegrationPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'PolicyType': ros.stringToRosTemplate(properties.policyType),
      'EntityGroup': rosIntegrationPolicyEntityGroupPropertyToRosTemplate(properties.entityGroup),
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosIntegrationPolicyTagsPropertyToRosTemplate)(properties.tags),
      'Workspace': ros.stringToRosTemplate(properties.workspace),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS2::IntegrationPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `IntegrationPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy
 */
export class RosIntegrationPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS2::IntegrationPolicy";

    /**
     * @Attribute PolicyId: The ID of the integration policy.
     */
    public readonly attrPolicyId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property policyType: The type of the integration policy.
     */
    public policyType: string | ros.IResolvable;

    /**
     * @Property entityGroup: The entity group information.
     */
    public entityGroup: RosIntegrationPolicy.EntityGroupProperty | ros.IResolvable | undefined;

    /**
     * @Property policyName: The name of the integration policy.
     */
    public policyName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to integration policy. Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosIntegrationPolicy.TagsProperty[] | undefined;

    /**
     * @Property workspace: The workspace of the integration policy.
     */
    public workspace: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIntegrationPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIntegrationPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPolicyId = this.getAtt('PolicyId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyType = props.policyType;
        this.entityGroup = props.entityGroup;
        this.policyName = props.policyName;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.workspace = props.workspace;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            policyType: this.policyType,
            entityGroup: this.entityGroup,
            policyName: this.policyName,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            workspace: this.workspace,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIntegrationPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosIntegrationPolicy {
    /**
     * @stability external
     */
    export interface EntityGroupProperty {
        /**
         * @Property entityUserId: The entity user ID.
         */
        readonly entityUserId?: string | ros.IResolvable;
        /**
         * @Property vpcId: The VPC ID.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property clusterId: The cluster ID.
         */
        readonly clusterId?: string | ros.IResolvable;
        /**
         * @Property clusterEntityType: The cluster entity type.
         */
        readonly clusterEntityType?: string | ros.IResolvable;
        /**
         * @Property entityGroupId: The entity group ID.
         */
        readonly entityGroupId?: string | ros.IResolvable;
        /**
         * @Property clusterNamespace: The cluster namespace.
         */
        readonly clusterNamespace?: string | ros.IResolvable;
        /**
         * @Property disablePolicyShare: Whether to disable policy sharing.
         */
        readonly disablePolicyShare?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EntityGroupProperty`
 *
 * @param properties - the TypeScript properties of a `EntityGroupProperty`
 *
 * @returns the result of the validation.
 */
function RosIntegrationPolicy_EntityGroupPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('entityUserId', ros.validateString)(properties.entityUserId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterEntityType', ros.validateString)(properties.clusterEntityType));
    errors.collect(ros.propertyValidator('entityGroupId', ros.validateString)(properties.entityGroupId));
    errors.collect(ros.propertyValidator('clusterNamespace', ros.validateString)(properties.clusterNamespace));
    errors.collect(ros.propertyValidator('disablePolicyShare', ros.validateBoolean)(properties.disablePolicyShare));
    return errors.wrap('supplied properties not correct for "EntityGroupProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS2::IntegrationPolicy.EntityGroup` resource
 *
 * @param properties - the TypeScript properties of a `EntityGroupProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS2::IntegrationPolicy.EntityGroup` resource.
 */
// @ts-ignore TS6133
function rosIntegrationPolicyEntityGroupPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIntegrationPolicy_EntityGroupPropertyValidator(properties).assertSuccess();
    return {
      'EntityUserId': ros.stringToRosTemplate(properties.entityUserId),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'ClusterEntityType': ros.stringToRosTemplate(properties.clusterEntityType),
      'EntityGroupId': ros.stringToRosTemplate(properties.entityGroupId),
      'ClusterNamespace': ros.stringToRosTemplate(properties.clusterNamespace),
      'DisablePolicyShare': ros.booleanToRosTemplate(properties.disablePolicyShare),
    };
}

export namespace RosIntegrationPolicy {
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
function RosIntegrationPolicy_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS2::IntegrationPolicy.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS2::IntegrationPolicy.Tags` resource.
 */
// @ts-ignore TS6133
function rosIntegrationPolicyTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIntegrationPolicy_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosPrometheusInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
 */
export interface RosPrometheusInstanceProps {

    /**
     * @Property prometheusInstanceName: The name of the Prometheus instance.
     */
    readonly prometheusInstanceName: string | ros.IResolvable;

    /**
     * @Property archiveDuration: The archive duration of the Prometheus instance.
     */
    readonly archiveDuration?: number | ros.IResolvable;

    /**
     * @Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
     */
    readonly authFreeReadPolicy?: string | ros.IResolvable;

    /**
     * @Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
     */
    readonly authFreeWritePolicy?: string | ros.IResolvable;

    /**
     * @Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
     */
    readonly basicMetricQueryLimit?: boolean | ros.IResolvable;

    /**
     * @Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
     */
    readonly enableAuthFreeRead?: boolean | ros.IResolvable;

    /**
     * @Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
     */
    readonly enableAuthFreeWrite?: boolean | ros.IResolvable;

    /**
     * @Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
     */
    readonly enableAuthToken?: boolean | ros.IResolvable;

    /**
     * @Property paymentType: The payment type of the Prometheus instance.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property status: The status of the Prometheus instance.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property storageDuration: The storage duration of the Prometheus instance.
     */
    readonly storageDuration?: number | ros.IResolvable;

    /**
     * @Property workspace: The workspace of the Prometheus instance.
     */
    readonly workspace?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPrometheusInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosPrometheusInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosPrometheusInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.archiveDuration && (typeof properties.archiveDuration) !== 'object') {
        errors.collect(ros.propertyValidator('archiveDuration', ros.validateRange)({
            data: properties.archiveDuration,
            min: 0,
            max: 3650,
          }));
    }
    errors.collect(ros.propertyValidator('archiveDuration', ros.validateNumber)(properties.archiveDuration));
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('prometheusInstanceName', ros.requiredValidator)(properties.prometheusInstanceName));
    if(properties.prometheusInstanceName && (Array.isArray(properties.prometheusInstanceName) || (typeof properties.prometheusInstanceName) === 'string')) {
        errors.collect(ros.propertyValidator('prometheusInstanceName', ros.validateLength)({
            data: properties.prometheusInstanceName.length,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('prometheusInstanceName', ros.validateString)(properties.prometheusInstanceName));
    errors.collect(ros.propertyValidator('authFreeReadPolicy', ros.validateString)(properties.authFreeReadPolicy));
    if(properties.storageDuration && (typeof properties.storageDuration) !== 'object') {
        errors.collect(ros.propertyValidator('storageDuration', ros.validateAllowedValues)({
          data: properties.storageDuration,
          allowedValues: [15,30,60,90,180],
        }));
    }
    errors.collect(ros.propertyValidator('storageDuration', ros.validateNumber)(properties.storageDuration));
    errors.collect(ros.propertyValidator('basicMetricQueryLimit', ros.validateBoolean)(properties.basicMetricQueryLimit));
    if(properties.paymentType && (typeof properties.paymentType) !== 'object') {
        errors.collect(ros.propertyValidator('paymentType', ros.validateAllowedValues)({
          data: properties.paymentType,
          allowedValues: ["POSTPAY","POSTPAY_GB"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('enableAuthToken', ros.validateBoolean)(properties.enableAuthToken));
    errors.collect(ros.propertyValidator('authFreeWritePolicy', ros.validateString)(properties.authFreeWritePolicy));
    errors.collect(ros.propertyValidator('enableAuthFreeRead', ros.validateBoolean)(properties.enableAuthFreeRead));
    errors.collect(ros.propertyValidator('enableAuthFreeWrite', ros.validateBoolean)(properties.enableAuthFreeWrite));
    errors.collect(ros.propertyValidator('workspace', ros.validateString)(properties.workspace));
    return errors.wrap('supplied properties not correct for "RosPrometheusInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS2::PrometheusInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosPrometheusInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS2::PrometheusInstance` resource.
 */
// @ts-ignore TS6133
function rosPrometheusInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrometheusInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'PrometheusInstanceName': ros.stringToRosTemplate(properties.prometheusInstanceName),
      'ArchiveDuration': ros.numberToRosTemplate(properties.archiveDuration),
      'AuthFreeReadPolicy': ros.stringToRosTemplate(properties.authFreeReadPolicy),
      'AuthFreeWritePolicy': ros.stringToRosTemplate(properties.authFreeWritePolicy),
      'BasicMetricQueryLimit': ros.booleanToRosTemplate(properties.basicMetricQueryLimit),
      'EnableAuthFreeRead': ros.booleanToRosTemplate(properties.enableAuthFreeRead),
      'EnableAuthFreeWrite': ros.booleanToRosTemplate(properties.enableAuthFreeWrite),
      'EnableAuthToken': ros.booleanToRosTemplate(properties.enableAuthToken),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Status': ros.stringToRosTemplate(properties.status),
      'StorageDuration': ros.numberToRosTemplate(properties.storageDuration),
      'Workspace': ros.stringToRosTemplate(properties.workspace),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS2::PrometheusInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrometheusInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
 */
export class RosPrometheusInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS2::PrometheusInstance";

    /**
     * @Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.
     */
    public readonly attrHttpApiInterUrl: ros.IResolvable;

    /**
     * @Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.
     */
    public readonly attrHttpApiIntraUrl: ros.IResolvable;

    /**
     * @Attribute PrometheusInstanceId: The ID of the Prometheus instance.
     */
    public readonly attrPrometheusInstanceId: ros.IResolvable;

    /**
     * @Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.
     */
    public readonly attrPushGatewayInterUrl: ros.IResolvable;

    /**
     * @Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.
     */
    public readonly attrPushGatewayIntraUrl: ros.IResolvable;

    /**
     * @Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.
     */
    public readonly attrRemoteReadInterUrl: ros.IResolvable;

    /**
     * @Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.
     */
    public readonly attrRemoteReadIntraUrl: ros.IResolvable;

    /**
     * @Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.
     */
    public readonly attrRemoteWriteInterUrl: ros.IResolvable;

    /**
     * @Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.
     */
    public readonly attrRemoteWriteIntraUrl: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property prometheusInstanceName: The name of the Prometheus instance.
     */
    public prometheusInstanceName: string | ros.IResolvable;

    /**
     * @Property archiveDuration: The archive duration of the Prometheus instance.
     */
    public archiveDuration: number | ros.IResolvable | undefined;

    /**
     * @Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
     */
    public authFreeReadPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
     */
    public authFreeWritePolicy: string | ros.IResolvable | undefined;

    /**
     * @Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
     */
    public basicMetricQueryLimit: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
     */
    public enableAuthFreeRead: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
     */
    public enableAuthFreeWrite: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
     */
    public enableAuthToken: boolean | ros.IResolvable | undefined;

    /**
     * @Property paymentType: The payment type of the Prometheus instance.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property status: The status of the Prometheus instance.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property storageDuration: The storage duration of the Prometheus instance.
     */
    public storageDuration: number | ros.IResolvable | undefined;

    /**
     * @Property workspace: The workspace of the Prometheus instance.
     */
    public workspace: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrometheusInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrometheusInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHttpApiInterUrl = this.getAtt('HttpApiInterUrl');
        this.attrHttpApiIntraUrl = this.getAtt('HttpApiIntraUrl');
        this.attrPrometheusInstanceId = this.getAtt('PrometheusInstanceId');
        this.attrPushGatewayInterUrl = this.getAtt('PushGatewayInterUrl');
        this.attrPushGatewayIntraUrl = this.getAtt('PushGatewayIntraUrl');
        this.attrRemoteReadInterUrl = this.getAtt('RemoteReadInterUrl');
        this.attrRemoteReadIntraUrl = this.getAtt('RemoteReadIntraUrl');
        this.attrRemoteWriteInterUrl = this.getAtt('RemoteWriteInterUrl');
        this.attrRemoteWriteIntraUrl = this.getAtt('RemoteWriteIntraUrl');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.prometheusInstanceName = props.prometheusInstanceName;
        this.archiveDuration = props.archiveDuration;
        this.authFreeReadPolicy = props.authFreeReadPolicy;
        this.authFreeWritePolicy = props.authFreeWritePolicy;
        this.basicMetricQueryLimit = props.basicMetricQueryLimit;
        this.enableAuthFreeRead = props.enableAuthFreeRead;
        this.enableAuthFreeWrite = props.enableAuthFreeWrite;
        this.enableAuthToken = props.enableAuthToken;
        this.paymentType = props.paymentType;
        this.resourceGroupId = props.resourceGroupId;
        this.status = props.status;
        this.storageDuration = props.storageDuration;
        this.workspace = props.workspace;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            prometheusInstanceName: this.prometheusInstanceName,
            archiveDuration: this.archiveDuration,
            authFreeReadPolicy: this.authFreeReadPolicy,
            authFreeWritePolicy: this.authFreeWritePolicy,
            basicMetricQueryLimit: this.basicMetricQueryLimit,
            enableAuthFreeRead: this.enableAuthFreeRead,
            enableAuthFreeWrite: this.enableAuthFreeWrite,
            enableAuthToken: this.enableAuthToken,
            paymentType: this.paymentType,
            resourceGroupId: this.resourceGroupId,
            status: this.status,
            storageDuration: this.storageDuration,
            workspace: this.workspace,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrometheusInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosServiceObservability`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability
 */
export interface RosServiceObservabilityProps {

    /**
     * @Property type: The type of the service observability.
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property workspace: The workspace of the service observability.
     */
    readonly workspace: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServiceObservabilityProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceObservabilityProps`
 *
 * @returns the result of the validation.
 */
function RosServiceObservabilityPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["apm","rum"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('workspace', ros.requiredValidator)(properties.workspace));
    errors.collect(ros.propertyValidator('workspace', ros.validateString)(properties.workspace));
    return errors.wrap('supplied properties not correct for "RosServiceObservabilityProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS2::ServiceObservability` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceObservabilityProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS2::ServiceObservability` resource.
 */
// @ts-ignore TS6133
function rosServiceObservabilityPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServiceObservabilityPropsValidator(properties).assertSuccess();
    }
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Workspace': ros.stringToRosTemplate(properties.workspace),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS2::ServiceObservability`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceObservability` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability
 */
export class RosServiceObservability extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS2::ServiceObservability";

    /**
     * @Attribute Workspace: The workspace of the service observability.
     */
    public readonly attrWorkspace: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property type: The type of the service observability.
     */
    public type: string | ros.IResolvable;

    /**
     * @Property workspace: The workspace of the service observability.
     */
    public workspace: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceObservabilityProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServiceObservability.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrWorkspace = this.getAtt('Workspace');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.type = props.type;
        this.workspace = props.workspace;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            type: this.type,
            workspace: this.workspace,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServiceObservabilityPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
