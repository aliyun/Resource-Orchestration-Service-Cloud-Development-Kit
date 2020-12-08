import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::PVTZ::Zone`
 */
export interface RosZoneProps {
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
 * A ROS template type:  `ALIYUN::PVTZ::Zone`
 */
export declare class RosZone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::Zone";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ZoneId: Zone ID
     */
    readonly attrZoneId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property zoneName: Zone name
     */
    zoneName: string;
    /**
     * @Property proxyPattern: ZONE: completely hijack the entire zone.
     * RECORD: Incomplete hijacking, recursive resolution agent.
     * Default to ZONE.
     */
    proxyPattern: string | undefined;
    /**
     * @Property remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
     */
    remark: string | undefined;
    /**
     * Create a new `ALIYUN::PVTZ::Zone`.
     *
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
 * Properties for defining a `ALIYUN::PVTZ::ZoneRecord`
 */
export interface RosZoneRecordProps {
    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    readonly rr: string;
    /**
     * @Property status: Allowed values: [ENABLE, DISABLE]
     */
    readonly status: string;
    /**
     * @Property type: Analyze record type, currently only supports A, CNAME, TXT, MX, PTR
     */
    readonly type: string;
    /**
     * @Property value: Record value
     */
    readonly value: string;
    /**
     * @Property zoneId: Zone Id
     */
    readonly zoneId: string;
    /**
     * @Property priority: MX record priority, value range [1,10]. Default to 10.
     */
    readonly priority?: number;
    /**
     * @Property ttl: Survival time, default is 60
     */
    readonly ttl?: number;
}
/**
 * A ROS template type:  `ALIYUN::PVTZ::ZoneRecord`
 */
export declare class RosZoneRecord extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::ZoneRecord";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute RecordId: Parsing record Id
     */
    readonly attrRecordId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    rr: string;
    /**
     * @Property status: Allowed values: [ENABLE, DISABLE]
     */
    status: string;
    /**
     * @Property type: Analyze record type, currently only supports A, CNAME, TXT, MX, PTR
     */
    type: string;
    /**
     * @Property value: Record value
     */
    value: string;
    /**
     * @Property zoneId: Zone Id
     */
    zoneId: string;
    /**
     * @Property priority: MX record priority, value range [1,10]. Default to 10.
     */
    priority: number | undefined;
    /**
     * @Property ttl: Survival time, default is 60
     */
    ttl: number | undefined;
    /**
     * Create a new `ALIYUN::PVTZ::ZoneRecord`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZoneRecordProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::PVTZ::ZoneVpcBinder`
 */
export interface RosZoneVpcBinderProps {
    /**
     * @Property vpcs:
     */
    readonly vpcs: Array<RosZoneVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: Zone Id
     */
    readonly zoneId: string;
}
/**
 * A ROS template type:  `ALIYUN::PVTZ::ZoneVpcBinder`
 */
export declare class RosZoneVpcBinder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::ZoneVpcBinder";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcs:
     */
    vpcs: Array<RosZoneVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: Zone Id
     */
    zoneId: string;
    /**
     * Create a new `ALIYUN::PVTZ::ZoneVpcBinder`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZoneVpcBinderProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosZoneVpcBinder {
    /**
     * @stability external
     */
    interface VpcsProperty {
        /**
         * @Property vpcId: Vpcs attribute, vpc Id
         */
        readonly vpcId: string;
        /**
         * @Property regionId: Vpcs attribute, region Id
         */
        readonly regionId: string;
    }
}
