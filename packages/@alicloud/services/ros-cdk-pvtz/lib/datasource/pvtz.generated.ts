// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::PVTZ::Rules`
 */
export interface RosRulesProps {

    /**
     * @Property endpointId: EndpointId
     */
    readonly endpointId?: string | ros.IResolvable;
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
      EndpointId: ros.stringToRosTemplate(properties.endpointId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::PVTZ::Rules`
 */
export class RosRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PVTZ::Rules";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `DATASOURCE::PVTZ::Rules`.
     *
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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            endpointId: this.endpointId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRulesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::PVTZ::Zones`
 */
export interface RosZonesProps {

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
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::PVTZ::Zones`
 */
export class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PVTZ::Zones";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * @Property resourceGroupId: ResourceGroupId
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::PVTZ::Zones`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZonesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosZones.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrZoneIds = this.getAtt('ZoneIds');
        this.attrZones = this.getAtt('Zones');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosZonesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
