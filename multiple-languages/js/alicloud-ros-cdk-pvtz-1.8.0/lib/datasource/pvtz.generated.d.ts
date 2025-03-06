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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PVTZ::Rule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rule
 */
export declare class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PVTZ::Rule";
    /**
     * @Attribute CreateTime: The time when the forwarding rule was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute EndpointId: The endpoint ID.
     */
    readonly attrEndpointId: ros.IResolvable;
    /**
     * @Attribute EndpointName: The endpoint name.
     */
    readonly attrEndpointName: ros.IResolvable;
    /**
     * @Attribute ForwardIp: The destination IP address.
     */
    readonly attrForwardIp: ros.IResolvable;
    /**
     * @Attribute RuleName: The name of the forwarding rule.
     */
    readonly attrRuleName: ros.IResolvable;
    /**
     * @Attribute Type: The type of the forwarding rule.
     */
    readonly attrType: ros.IResolvable;
    /**
     * @Attribute Vpcs: The virtual private clouds (VPCs) that are associated with the forwarding rule.
     */
    readonly attrVpcs: ros.IResolvable;
    /**
     * @Attribute ZoneName: The name of the forward zone.
     */
    readonly attrZoneName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ruleId: The ID of the forwarding rule.
     */
    ruleId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PVTZ::Rules`, which is used to query forwarding rules.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rules
 */
export declare class RosRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PVTZ::Rules";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PVTZ::Zone`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zone` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zone
 */
export declare class RosZone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PVTZ::Zone";
    /**
     * @Attribute BindVpcs: The VPCs associated with the zone.
     */
    readonly attrBindVpcs: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the zone was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CreateTimestamp: The time when the zone was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly attrCreateTimestamp: ros.IResolvable;
    /**
     * @Attribute IsPtr: Indicates whether the zone is a reverse lookup zone.
     */
    readonly attrIsPtr: ros.IResolvable;
    /**
     * @Attribute ProxyPattern: Indicates whether the recursive resolution proxy for subdomain names is enabled.
     */
    readonly attrProxyPattern: ros.IResolvable;
    /**
     * @Attribute RecordCount: The total number of DNS records added in the zone.
     */
    readonly attrRecordCount: ros.IResolvable;
    /**
     * @Attribute Remark: The description of the zone.
     */
    readonly attrRemark: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the zone belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SlaveDns: Indicates whether the secondary Domain Name System (DNS) feature is enabled for the zone.
     */
    readonly attrSlaveDns: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the zone.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute UpdateTime: The time when the zone was last updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * @Attribute UpdateTimestamp: The time when the zone was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly attrUpdateTimestamp: ros.IResolvable;
    /**
     * @Attribute ZoneId: The zone ID.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * @Attribute ZoneName: The zone name.
     */
    readonly attrZoneName: ros.IResolvable;
    /**
     * @Attribute ZoneTag: Not open to users for the time being, no value transfer is required.
     */
    readonly attrZoneTag: ros.IResolvable;
    /**
     * @Attribute ZoneType: The zone type, temporarily closed to users, no need to pass values.
     */
    readonly attrZoneType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property zoneId: The zone ID.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZoneProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PVTZ::Zones`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zones` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zones
 */
export declare class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PVTZ::Zones";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: ResourceGroupId
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
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
