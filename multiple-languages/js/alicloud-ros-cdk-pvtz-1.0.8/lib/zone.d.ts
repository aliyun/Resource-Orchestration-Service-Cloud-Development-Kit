import * as ros from '@alicloud/ros-cdk-core';
import { RosZone } from './pvtz.generated';
export { RosZone as ZoneProperty };
/**
 * Properties for defining a `ALIYUN::PVTZ::Zone`
 */
export interface ZoneProps {
    /**
     * Property zoneName: Zone name
     */
    readonly zoneName: string | ros.IResolvable;
    /**
     * Property ignoredStackTagKeys: Stack tag keys to ignore
     */
    readonly ignoredStackTagKeys?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property proxyPattern: ZONE: completely hijack the entire zone.
     * RECORD: Incomplete hijacking, recursive resolution agent.
     * Default to ZONE.
     */
    readonly proxyPattern?: string | ros.IResolvable;
    /**
     * Property remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosZone.TagsProperty[];
    /**
     * Property zoneTag: Zone label. It will be ignored when ZoneType is AUTH_ZONE.
     */
    readonly zoneTag?: string | ros.IResolvable;
    /**
     * Property zoneType: Zone type. For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
     */
    readonly zoneType?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::PVTZ::Zone`
 */
export declare class Zone extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ZoneId: Zone ID.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Attribute ZoneName: Zone name.
     */
    readonly attrZoneName: ros.IResolvable;
    /**
     * Attribute ZoneTag: Zone label.
     */
    readonly attrZoneTag: ros.IResolvable;
    /**
     * Attribute ZoneType: Zone type.
     */
    readonly attrZoneType: ros.IResolvable;
    /**
     * Create a new `ALIYUN::PVTZ::Zone`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneProps, enableResourcePropertyConstraint?: boolean);
}
