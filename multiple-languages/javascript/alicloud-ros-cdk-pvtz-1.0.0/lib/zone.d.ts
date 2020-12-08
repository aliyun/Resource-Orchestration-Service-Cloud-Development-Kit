import * as ros from '@alicloud/ros-cdk-core';
import { RosZone } from './pvtz.generated';
export { RosZone as ZoneProperty };
/**
 * Properties for defining a `ALIYUN::PVTZ::Zone`
 */
export interface ZoneProps {
    /**
     * @Property zoneName: Zone name
     */
    readonly zoneName: string;
    /**
     * @Property proxyPattern: ZONE: completely hijack the entire zone.
     * RECORD: Incomplete hijacking, recursive resolution agent.
     * Default to ZONE.
     */
    readonly proxyPattern?: string;
    /**
     * @Property remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
     */
    readonly remark?: string;
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
     * @Attribute ZoneId: Zone ID
     */
    readonly attrZoneId: any;
    /**
     * Create a new `ALIYUN::PVTZ::Zone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneProps, enableResourcePropertyConstraint?: boolean);
}
