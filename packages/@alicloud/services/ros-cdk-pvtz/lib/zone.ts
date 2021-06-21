import * as ros from '@alicloud/ros-cdk-core';
import { RosZone } from './pvtz.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property proxyPattern: ZONE: completely hijack the entire zone.
     * RECORD: Incomplete hijacking, recursive resolution agent.
     * Default to ZONE.
     */
    readonly proxyPattern?: string | ros.IResolvable;

    /**
     * Property remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
     */
    readonly remark?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::PVTZ::Zone`
 */
export class Zone extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ZoneId: Zone ID
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Attribute ZoneName: Zone name
     */
    public readonly attrZoneName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::PVTZ::Zone`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosZone = new RosZone(this, id,  {
            zoneName: props.zoneName,
            proxyPattern: props.proxyPattern === undefined || props.proxyPattern === null ? 'ZONE' : props.proxyPattern,
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosZone;
        this.attrZoneId = rosZone.attrZoneId;
        this.attrZoneName = rosZone.attrZoneName;
    }
}
