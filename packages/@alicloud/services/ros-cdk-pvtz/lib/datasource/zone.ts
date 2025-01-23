import * as ros from '@alicloud/ros-cdk-core';
import { RosZone } from './pvtz.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `Zone`.
 */
export interface IZone extends ros.IResource {
    readonly props: ZoneProps;

    /**
     * Attribute BindVpcs: The VPCs associated with the zone.
     */
    readonly attrBindVpcs: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the zone was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreateTimestamp: The time when the zone was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly attrCreateTimestamp: ros.IResolvable | string;

    /**
     * Attribute IsPtr: Indicates whether the zone is a reverse lookup zone.
     */
    readonly attrIsPtr: ros.IResolvable | string;

    /**
     * Attribute ProxyPattern: Indicates whether the recursive resolution proxy for subdomain names is enabled.
     */
    readonly attrProxyPattern: ros.IResolvable | string;

    /**
     * Attribute RecordCount: The total number of DNS records added in the zone.
     */
    readonly attrRecordCount: ros.IResolvable | string;

    /**
     * Attribute Remark: The description of the zone.
     */
    readonly attrRemark: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the zone belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SlaveDns: Indicates whether the secondary Domain Name System (DNS) feature is enabled for the zone.
     */
    readonly attrSlaveDns: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the zone.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the zone was last updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute UpdateTimestamp: The time when the zone was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly attrUpdateTimestamp: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID.
     */
    readonly attrZoneId: ros.IResolvable | string;

    /**
     * Attribute ZoneName: The zone name.
     */
    readonly attrZoneName: ros.IResolvable | string;

    /**
     * Attribute ZoneTag: Not open to users for the time being, no value transfer is required.
     */
    readonly attrZoneTag: ros.IResolvable | string;

    /**
     * Attribute ZoneType: The zone type, temporarily closed to users, no need to pass values.
     */
    readonly attrZoneType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PVTZ::Zone`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZone`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zone
 */
export class Zone extends ros.Resource implements IZone {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ZoneProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BindVpcs: The VPCs associated with the zone.
     */
    public readonly attrBindVpcs: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the zone was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreateTimestamp: The time when the zone was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    public readonly attrCreateTimestamp: ros.IResolvable | string;

    /**
     * Attribute IsPtr: Indicates whether the zone is a reverse lookup zone.
     */
    public readonly attrIsPtr: ros.IResolvable | string;

    /**
     * Attribute ProxyPattern: Indicates whether the recursive resolution proxy for subdomain names is enabled.
     */
    public readonly attrProxyPattern: ros.IResolvable | string;

    /**
     * Attribute RecordCount: The total number of DNS records added in the zone.
     */
    public readonly attrRecordCount: ros.IResolvable | string;

    /**
     * Attribute Remark: The description of the zone.
     */
    public readonly attrRemark: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the zone belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SlaveDns: Indicates whether the secondary Domain Name System (DNS) feature is enabled for the zone.
     */
    public readonly attrSlaveDns: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the zone.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the zone was last updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute UpdateTimestamp: The time when the zone was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    public readonly attrUpdateTimestamp: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID.
     */
    public readonly attrZoneId: ros.IResolvable | string;

    /**
     * Attribute ZoneName: The zone name.
     */
    public readonly attrZoneName: ros.IResolvable | string;

    /**
     * Attribute ZoneTag: Not open to users for the time being, no value transfer is required.
     */
    public readonly attrZoneTag: ros.IResolvable | string;

    /**
     * Attribute ZoneType: The zone type, temporarily closed to users, no need to pass values.
     */
    public readonly attrZoneType: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosZone = new RosZone(this, id,  {
            zoneId: props.zoneId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosZone;
        this.attrBindVpcs = rosZone.attrBindVpcs;
        this.attrCreateTime = rosZone.attrCreateTime;
        this.attrCreateTimestamp = rosZone.attrCreateTimestamp;
        this.attrIsPtr = rosZone.attrIsPtr;
        this.attrProxyPattern = rosZone.attrProxyPattern;
        this.attrRecordCount = rosZone.attrRecordCount;
        this.attrRemark = rosZone.attrRemark;
        this.attrResourceGroupId = rosZone.attrResourceGroupId;
        this.attrSlaveDns = rosZone.attrSlaveDns;
        this.attrTags = rosZone.attrTags;
        this.attrUpdateTime = rosZone.attrUpdateTime;
        this.attrUpdateTimestamp = rosZone.attrUpdateTimestamp;
        this.attrZoneId = rosZone.attrZoneId;
        this.attrZoneName = rosZone.attrZoneName;
        this.attrZoneTag = rosZone.attrZoneTag;
        this.attrZoneType = rosZone.attrZoneType;
    }
}
