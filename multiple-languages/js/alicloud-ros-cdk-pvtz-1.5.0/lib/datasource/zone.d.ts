import * as ros from '@alicloud/ros-cdk-core';
import { RosZone } from './pvtz.generated';
export { RosZone as ZoneProperty };
/**
 * Properties for defining a `Zone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zone
 */
export interface ZoneProps {
    /**
     * Property zoneId: The zone ID.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PVTZ::Zone`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZone`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zone
 */
export declare class Zone extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ZoneProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BindVpcs: The VPCs associated with the zone.
     */
    readonly attrBindVpcs: ros.IResolvable;
    /**
     * Attribute CreateTime: The time when the zone was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute CreateTimestamp: The time when the zone was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly attrCreateTimestamp: ros.IResolvable;
    /**
     * Attribute IsPtr: Indicates whether the zone is a reverse lookup zone.
     */
    readonly attrIsPtr: ros.IResolvable;
    /**
     * Attribute ProxyPattern: Indicates whether the recursive resolution proxy for subdomain names is enabled.
     */
    readonly attrProxyPattern: ros.IResolvable;
    /**
     * Attribute RecordCount: The total number of DNS records added in the zone.
     */
    readonly attrRecordCount: ros.IResolvable;
    /**
     * Attribute Remark: The description of the zone.
     */
    readonly attrRemark: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the zone belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SlaveDns: Indicates whether the secondary Domain Name System (DNS) feature is enabled for the zone.
     */
    readonly attrSlaveDns: ros.IResolvable;
    /**
     * Attribute Tags: The tags of the zone.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute UpdateTime: The time when the zone was last updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * Attribute UpdateTimestamp: The time when the zone was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly attrUpdateTimestamp: ros.IResolvable;
    /**
     * Attribute ZoneId: The zone ID.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Attribute ZoneName: The zone name.
     */
    readonly attrZoneName: ros.IResolvable;
    /**
     * Attribute ZoneTag: Not open to users for the time being, no value transfer is required.
     */
    readonly attrZoneTag: ros.IResolvable;
    /**
     * Attribute ZoneType: The zone type, temporarily closed to users, no need to pass values.
     */
    readonly attrZoneType: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneProps, enableResourcePropertyConstraint?: boolean);
}
