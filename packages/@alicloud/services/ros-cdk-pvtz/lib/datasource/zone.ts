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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PVTZ::Zone`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZone`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zone
 */
export class Zone extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ZoneProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BindVpcs: The VPCs associated with the zone.
     */
    public readonly attrBindVpcs: ros.IResolvable;

    /**
     * Attribute CreateTime: The time when the zone was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute CreateTimestamp: The time when the zone was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    public readonly attrCreateTimestamp: ros.IResolvable;

    /**
     * Attribute IsPtr: Indicates whether the zone is a reverse lookup zone.
     */
    public readonly attrIsPtr: ros.IResolvable;

    /**
     * Attribute ProxyPattern: Indicates whether the recursive resolution proxy for subdomain names is enabled.
     */
    public readonly attrProxyPattern: ros.IResolvable;

    /**
     * Attribute RecordCount: The total number of DNS records added in the zone.
     */
    public readonly attrRecordCount: ros.IResolvable;

    /**
     * Attribute Remark: The description of the zone.
     */
    public readonly attrRemark: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the zone belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SlaveDns: Indicates whether the secondary Domain Name System (DNS) feature is enabled for the zone.
     */
    public readonly attrSlaveDns: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the zone.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute UpdateTime: The time when the zone was last updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * Attribute UpdateTimestamp: The time when the zone was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    public readonly attrUpdateTimestamp: ros.IResolvable;

    /**
     * Attribute ZoneId: The zone ID.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Attribute ZoneName: The zone name.
     */
    public readonly attrZoneName: ros.IResolvable;

    /**
     * Attribute ZoneTag: Not open to users for the time being, no value transfer is required.
     */
    public readonly attrZoneTag: ros.IResolvable;

    /**
     * Attribute ZoneType: The zone type, temporarily closed to users, no need to pass values.
     */
    public readonly attrZoneType: ros.IResolvable;

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
