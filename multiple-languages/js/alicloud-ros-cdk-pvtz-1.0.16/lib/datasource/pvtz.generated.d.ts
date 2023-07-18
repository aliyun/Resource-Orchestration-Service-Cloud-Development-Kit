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
 * A ROS template type:  `DATASOURCE::PVTZ::Rules`
 */
export declare class RosRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PVTZ::Rules";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute RuleIds: The list of rule IDs.
     */
    readonly attrRuleIds: ros.IResolvable;
    /**
     * @Attribute Rules: The list of rules.
     */
    readonly attrRules: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property endpointId: EndpointId
     */
    endpointId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::PVTZ::Rules`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRulesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * A ROS template type:  `DATASOURCE::PVTZ::Zones`
 */
export declare class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PVTZ::Zones";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ZoneIds: The list of zone IDs.
     */
    readonly attrZoneIds: ros.IResolvable;
    /**
     * @Attribute Zones: The list of zones.
     */
    readonly attrZones: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property resourceGroupId: ResourceGroupId
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::PVTZ::Zones`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZonesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
