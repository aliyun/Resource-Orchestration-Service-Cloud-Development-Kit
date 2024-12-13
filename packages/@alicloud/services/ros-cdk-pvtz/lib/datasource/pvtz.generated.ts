// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rule
 */
export interface RosRuleProps {

    /**
     * @Property ruleId: The ID of the forwarding rule.
     */
    readonly ruleId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the result of the validation.
 */
function RosRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ruleId', ros.requiredValidator)(properties.ruleId));
    errors.collect(ros.propertyValidator('ruleId', ros.validateString)(properties.ruleId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PVTZ::Rule` resource
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PVTZ::Rule` resource.
 */
// @ts-ignore TS6133
function rosRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRulePropsValidator(properties).assertSuccess();
    }
    return {
      'RuleId': ros.stringToRosTemplate(properties.ruleId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PVTZ::Rule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rule
 */
export class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PVTZ::Rule";

    /**
     * @Attribute CreateTime: The time when the forwarding rule was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute EndpointId: The endpoint ID.
     */
    public readonly attrEndpointId: ros.IResolvable;

    /**
     * @Attribute EndpointName: The endpoint name.
     */
    public readonly attrEndpointName: ros.IResolvable;

    /**
     * @Attribute ForwardIp: The destination IP address.
     */
    public readonly attrForwardIp: ros.IResolvable;

    /**
     * @Attribute RuleName: The name of the forwarding rule.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Type: The type of the forwarding rule.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * @Attribute Vpcs: The virtual private clouds (VPCs) that are associated with the forwarding rule.
     */
    public readonly attrVpcs: ros.IResolvable;

    /**
     * @Attribute ZoneName: The name of the forward zone.
     */
    public readonly attrZoneName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ruleId: The ID of the forwarding rule.
     */
    public ruleId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEndpointId = this.getAtt('EndpointId');
        this.attrEndpointName = this.getAtt('EndpointName');
        this.attrForwardIp = this.getAtt('ForwardIp');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrType = this.getAtt('Type');
        this.attrVpcs = this.getAtt('Vpcs');
        this.attrZoneName = this.getAtt('ZoneName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ruleId = props.ruleId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ruleId: this.ruleId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rules
 */
export interface RosRulesProps {

    /**
     * @Property endpointId: EndpointId
     */
    readonly endpointId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRulesProps`
 *
 * @param properties - the TypeScript properties of a `RosRulesProps`
 *
 * @returns the result of the validation.
 */
function RosRulesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpointId', ros.validateString)(properties.endpointId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosRulesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PVTZ::Rules` resource
 *
 * @param properties - the TypeScript properties of a `RosRulesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PVTZ::Rules` resource.
 */
// @ts-ignore TS6133
function rosRulesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRulesPropsValidator(properties).assertSuccess();
    }
    return {
      'EndpointId': ros.stringToRosTemplate(properties.endpointId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PVTZ::Rules`, which is used to query forwarding rules.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rules
 */
export class RosRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PVTZ::Rules";

    /**
     * @Attribute RuleIds: The list of rule IDs.
     */
    public readonly attrRuleIds: ros.IResolvable;

    /**
     * @Attribute Rules: The list of rules.
     */
    public readonly attrRules: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property endpointId: EndpointId
     */
    public endpointId: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosRulesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRules.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRuleIds = this.getAtt('RuleIds');
        this.attrRules = this.getAtt('Rules');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.endpointId = props.endpointId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            endpointId: this.endpointId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRulesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosZone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zone
 */
export interface RosZoneProps {

    /**
     * @Property zoneId: The zone ID.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosZoneProps`
 *
 * @param properties - the TypeScript properties of a `RosZoneProps`
 *
 * @returns the result of the validation.
 */
function RosZonePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosZoneProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PVTZ::Zone` resource
 *
 * @param properties - the TypeScript properties of a `RosZoneProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PVTZ::Zone` resource.
 */
// @ts-ignore TS6133
function rosZonePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosZonePropsValidator(properties).assertSuccess();
    }
    return {
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PVTZ::Zone`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zone` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zone
 */
export class RosZone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PVTZ::Zone";

    /**
     * @Attribute BindVpcs: The VPCs associated with the zone.
     */
    public readonly attrBindVpcs: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the zone was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CreateTimestamp: The time when the zone was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    public readonly attrCreateTimestamp: ros.IResolvable;

    /**
     * @Attribute IsPtr: Indicates whether the zone is a reverse lookup zone.
     */
    public readonly attrIsPtr: ros.IResolvable;

    /**
     * @Attribute ProxyPattern: Indicates whether the recursive resolution proxy for subdomain names is enabled.
     */
    public readonly attrProxyPattern: ros.IResolvable;

    /**
     * @Attribute RecordCount: The total number of DNS records added in the zone.
     */
    public readonly attrRecordCount: ros.IResolvable;

    /**
     * @Attribute Remark: The description of the zone.
     */
    public readonly attrRemark: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the zone belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SlaveDns: Indicates whether the secondary Domain Name System (DNS) feature is enabled for the zone.
     */
    public readonly attrSlaveDns: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the zone.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute UpdateTime: The time when the zone was last updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * @Attribute UpdateTimestamp: The time when the zone was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    public readonly attrUpdateTimestamp: ros.IResolvable;

    /**
     * @Attribute ZoneId: The zone ID.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * @Attribute ZoneName: The zone name.
     */
    public readonly attrZoneName: ros.IResolvable;

    /**
     * @Attribute ZoneTag: Not open to users for the time being, no value transfer is required.
     */
    public readonly attrZoneTag: ros.IResolvable;

    /**
     * @Attribute ZoneType: The zone type, temporarily closed to users, no need to pass values.
     */
    public readonly attrZoneType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property zoneId: The zone ID.
     */
    public zoneId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosZoneProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosZone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBindVpcs = this.getAtt('BindVpcs');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCreateTimestamp = this.getAtt('CreateTimestamp');
        this.attrIsPtr = this.getAtt('IsPtr');
        this.attrProxyPattern = this.getAtt('ProxyPattern');
        this.attrRecordCount = this.getAtt('RecordCount');
        this.attrRemark = this.getAtt('Remark');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSlaveDns = this.getAtt('SlaveDns');
        this.attrTags = this.getAtt('Tags');
        this.attrUpdateTime = this.getAtt('UpdateTime');
        this.attrUpdateTimestamp = this.getAtt('UpdateTimestamp');
        this.attrZoneId = this.getAtt('ZoneId');
        this.attrZoneName = this.getAtt('ZoneName');
        this.attrZoneTag = this.getAtt('ZoneTag');
        this.attrZoneType = this.getAtt('ZoneType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.zoneId = props.zoneId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            zoneId: this.zoneId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosZonePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosZones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zones
 */
export interface RosZonesProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: ResourceGroupId
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosZonesProps`
 *
 * @param properties - the TypeScript properties of a `RosZonesProps`
 *
 * @returns the result of the validation.
 */
function RosZonesPropsValidator(properties: any): ros.ValidationResult {
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
    return errors.wrap('supplied properties not correct for "RosZonesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PVTZ::Zones` resource
 *
 * @param properties - the TypeScript properties of a `RosZonesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PVTZ::Zones` resource.
 */
// @ts-ignore TS6133
function rosZonesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosZonesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PVTZ::Zones`, which is used to query built-in authoritative zones.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zones` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zones
 */
export class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PVTZ::Zones";

    /**
     * @Attribute ZoneIds: The list of zone IDs.
     */
    public readonly attrZoneIds: ros.IResolvable;

    /**
     * @Attribute Zones: The list of zones.
     */
    public readonly attrZones: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: ResourceGroupId
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZonesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosZones.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrZoneIds = this.getAtt('ZoneIds');
        this.attrZones = this.getAtt('Zones');

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
        return rosZonesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
