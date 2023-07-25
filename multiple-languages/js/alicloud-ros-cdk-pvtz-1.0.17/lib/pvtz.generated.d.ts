import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::PVTZ::Rule`
 */
export interface RosRuleProps {
    /**
     * @Property endpointId: The ID of the endpoint.
     */
    readonly endpointId: string | ros.IResolvable;
    /**
     * @Property forwardIp: The destination external server.
     */
    readonly forwardIp: Array<RosRule.ForwardIpProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ruleName: The name of the forwarding rule.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * @Property type: The type of the forwarding rule. Valid value:
     * OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property zoneName: The domain name that requires DNS traffic forwarding.
     */
    readonly zoneName: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::PVTZ::Rule`
 */
export declare class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::Rule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CreateTime: The timestamp when the forwarding rule was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute EndpointId: The ID of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable;
    /**
     * @Attribute EndpointName: The name of the endpoint.
     */
    readonly attrEndpointName: ros.IResolvable;
    /**
     * @Attribute ForwardIp: The information about each destination external server.
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
     * @Attribute Vpcs: The information about each virtual private cloud (VPC) that is associated with the forwarding rule.
     */
    readonly attrVpcs: ros.IResolvable;
    /**
     * @Attribute ZoneName: The domain name that requires Domain Name System (DNS) traffic forwarding.
     */
    readonly attrZoneName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property endpointId: The ID of the endpoint.
     */
    endpointId: string | ros.IResolvable;
    /**
     * @Property forwardIp: The destination external server.
     */
    forwardIp: Array<RosRule.ForwardIpProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ruleName: The name of the forwarding rule.
     */
    ruleName: string | ros.IResolvable;
    /**
     * @Property type: The type of the forwarding rule. Valid value:
     * OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
     */
    type: string | ros.IResolvable;
    /**
     * @Property zoneName: The domain name that requires DNS traffic forwarding.
     */
    zoneName: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::PVTZ::Rule`.
     *
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
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface ForwardIpProperty {
        /**
         * @Property ip: The IP address of the destination external server.
         */
        readonly ip: string | ros.IResolvable;
        /**
         * @Property port: The port number of the destination external server.
         */
        readonly port: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::PVTZ::UserVpcAuthorization`
 */
export interface RosUserVpcAuthorizationProps {
    /**
     * @Property authorizedUserId: The account ID of the user who authorizes the resource.
     */
    readonly authorizedUserId: string | ros.IResolvable;
    /**
     * @Property authChannel: Authorization channel. Valid values:
     * AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
     * RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
     */
    readonly authChannel?: string | ros.IResolvable;
    /**
     * @Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
     */
    readonly authCode?: string | ros.IResolvable;
    /**
     * @Property authType: Authorization type.
     */
    readonly authType?: string | ros.IResolvable;
    /**
     * @Property ignoreDeletionForbidden: Whether to ignore following deletion forbidden errors when deleting:- UserAuth.DeleteForbidden.ZoneVpcExists
     */
    readonly ignoreDeletionForbidden?: boolean | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::PVTZ::UserVpcAuthorization`
 */
export declare class RosUserVpcAuthorization extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::UserVpcAuthorization";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AuthType: Authorization type.
     */
    readonly attrAuthType: ros.IResolvable;
    /**
     * @Attribute AuthorizedUserId: The account ID of the user who authorizes the resource.
     */
    readonly attrAuthorizedUserId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property authorizedUserId: The account ID of the user who authorizes the resource.
     */
    authorizedUserId: string | ros.IResolvable;
    /**
     * @Property authChannel: Authorization channel. Valid values:
     * AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
     * RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
     */
    authChannel: string | ros.IResolvable | undefined;
    /**
     * @Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
     */
    authCode: string | ros.IResolvable | undefined;
    /**
     * @Property authType: Authorization type.
     */
    authType: string | ros.IResolvable | undefined;
    /**
     * @Property ignoreDeletionForbidden: Whether to ignore following deletion forbidden errors when deleting:- UserAuth.DeleteForbidden.ZoneVpcExists
     */
    ignoreDeletionForbidden: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::PVTZ::UserVpcAuthorization`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserVpcAuthorizationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::PVTZ::Zone`
 */
export interface RosZoneProps {
    /**
     * @Property zoneName: Zone name
     */
    readonly zoneName: string | ros.IResolvable;
    /**
     * @Property ignoredStackTagKeys: Stack tag keys to ignore
     */
    readonly ignoredStackTagKeys?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property proxyPattern: ZONE: completely hijack the entire zone.
     * RECORD: Incomplete hijacking, recursive resolution agent.
     * Default to ZONE.
     */
    readonly proxyPattern?: string | ros.IResolvable;
    /**
     * @Property remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosZone.TagsProperty[];
    /**
     * @Property zoneTag: Zone label. It will be ignored when ZoneType is AUTH_ZONE.
     */
    readonly zoneTag?: string | ros.IResolvable;
    /**
     * @Property zoneType: Zone type. For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
     */
    readonly zoneType?: string | ros.IResolvable;
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
     * @Attribute ZoneId: Zone ID.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * @Attribute ZoneName: Zone name.
     */
    readonly attrZoneName: ros.IResolvable;
    /**
     * @Attribute ZoneTag: Zone label.
     */
    readonly attrZoneTag: ros.IResolvable;
    /**
     * @Attribute ZoneType: Zone type.
     */
    readonly attrZoneType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property zoneName: Zone name
     */
    zoneName: string | ros.IResolvable;
    /**
     * @Property ignoredStackTagKeys: Stack tag keys to ignore
     */
    ignoredStackTagKeys: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property proxyPattern: ZONE: completely hijack the entire zone.
     * RECORD: Incomplete hijacking, recursive resolution agent.
     * Default to ZONE.
     */
    proxyPattern: string | ros.IResolvable | undefined;
    /**
     * @Property remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosZone.TagsProperty[] | undefined;
    /**
     * @Property zoneTag: Zone label. It will be ignored when ZoneType is AUTH_ZONE.
     */
    zoneTag: string | ros.IResolvable | undefined;
    /**
     * @Property zoneType: Zone type. For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
     */
    zoneType: string | ros.IResolvable | undefined;
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
export declare namespace RosZone {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::PVTZ::ZoneRecord`
 */
export interface RosZoneRecordProps {
    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    readonly rr: string | ros.IResolvable;
    /**
     * @Property status: Allowed values: [ENABLE, DISABLE]
     */
    readonly status: string | ros.IResolvable;
    /**
     * @Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property value: Record value
     */
    readonly value: string | ros.IResolvable;
    /**
     * @Property zoneId: Zone Id
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property priority: MX record priority, value range [1,99]. Default to 10.
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * @Property ttl: Survival time, default is 60
     */
    readonly ttl?: number | ros.IResolvable;
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
     * @Attribute Record: Record data.
     */
    readonly attrRecord: ros.IResolvable;
    /**
     * @Attribute RecordId: Parsing record Id
     */
    readonly attrRecordId: ros.IResolvable;
    /**
     * @Attribute ZoneId: Zone ID.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    rr: string | ros.IResolvable;
    /**
     * @Property status: Allowed values: [ENABLE, DISABLE]
     */
    status: string | ros.IResolvable;
    /**
     * @Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
     */
    type: string | ros.IResolvable;
    /**
     * @Property value: Record value
     */
    value: string | ros.IResolvable;
    /**
     * @Property zoneId: Zone Id
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property priority: MX record priority, value range [1,99]. Default to 10.
     */
    priority: number | ros.IResolvable | undefined;
    /**
     * @Property ttl: Survival time, default is 60
     */
    ttl: number | ros.IResolvable | undefined;
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
    readonly zoneId: string | ros.IResolvable;
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
    /**
     * @Attribute Vpcs: Vpc list
     */
    readonly attrVpcs: ros.IResolvable;
    /**
     * @Attribute ZoneId: Zone Id
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcs:
     */
    vpcs: Array<RosZoneVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: Zone Id
     */
    zoneId: string | ros.IResolvable;
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
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property regionId: Vpcs attribute, region Id
         */
        readonly regionId: string | ros.IResolvable;
    }
}
