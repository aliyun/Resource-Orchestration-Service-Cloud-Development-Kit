import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-rule
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PVTZ::Rule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-rule
 */
export declare class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::Rule";
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
 * Properties for defining a `RosSyncEcsHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-syncecshost
 */
export interface RosSyncEcsHostProps {
    /**
     * @Property regions: A list of region information to be synchronized.
     */
    readonly regions: Array<RosSyncEcsHost.RegionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property status: The host synchronizes the task state. Valid values: ON, OFF.
     */
    readonly status: string | ros.IResolvable;
    /**
     * @Property zoneId: Zone ID, a unique identifier for the Zone.
     */
    readonly zoneId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PVTZ::SyncEcsHost`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SyncEcsHost` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-syncecshost
 */
export declare class RosSyncEcsHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::SyncEcsHost";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property regions: A list of region information to be synchronized.
     */
    regions: Array<RosSyncEcsHost.RegionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property status: The host synchronizes the task state. Valid values: ON, OFF.
     */
    status: string | ros.IResolvable;
    /**
     * @Property zoneId: Zone ID, a unique identifier for the Zone.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSyncEcsHostProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSyncEcsHost {
    /**
     * @stability external
     */
    interface RegionsProperty {
        /**
         * @Property userId: Region-owned user ID for cross-account sync scenarios.
         */
        readonly userId?: string | ros.IResolvable;
        /**
         * @Property regionId: Region id.
         */
        readonly regionId: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosUserVpcAuthorization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-uservpcauthorization
 */
export interface RosUserVpcAuthorizationProps {
    /**
     * @Property authorizedUserId: The ID of the account that owns the authorized resources.
     * > Only cloud accounts are supported. RAM users are not supported. You can
     * associate accounts only if they are on the same site. Cross-site association
     * is not supported.
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
     * @Property authType: The authorization type. Valid values:
     * - NORMAL: standard authorization.
     * - CLOUD_PRODUCT: cloud product authorization.
     */
    readonly authType?: string | ros.IResolvable;
    /**
     * @Property ignoreDeletionForbidden: Whether to ignore following deletion forbidden errors when deleting:- UserAuth.DeleteForbidden.ZoneVpcExists
     */
    readonly ignoreDeletionForbidden?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PVTZ::UserVpcAuthorization`, which is used to associate virtual private clouds (VPCs) across accounts.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserVpcAuthorization` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-uservpcauthorization
 */
export declare class RosUserVpcAuthorization extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::UserVpcAuthorization";
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
     * @Property authorizedUserId: The ID of the account that owns the authorized resources.
     * > Only cloud accounts are supported. RAM users are not supported. You can
     * associate accounts only if they are on the same site. Cross-site association
     * is not supported.
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
     * @Property authType: The authorization type. Valid values:
     * - NORMAL: standard authorization.
     * - CLOUD_PRODUCT: cloud product authorization.
     */
    authType: string | ros.IResolvable | undefined;
    /**
     * @Property ignoreDeletionForbidden: Whether to ignore following deletion forbidden errors when deleting:- UserAuth.DeleteForbidden.ZoneVpcExists
     */
    ignoreDeletionForbidden: boolean | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosZone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
 */
export interface RosZoneProps {
    /**
     * @Property zoneName: Zone name
     */
    readonly zoneName: string | ros.IResolvable;
    /**
     * @Property dnsGroup: The location of the built-in authoritative zone. Valid values:
     * - NORMAL_ZONE: Standard zone. DNS responses are cached. If a cache miss occurs,
     * the query is sent to the built-in authoritative standard zone. The time to live
     * (TTL) value affects the time when a DNS record change takes effect. You cannot
     * use custom DNS lines or weighted round-robin.
     * - FAST_ZONE: Accelerated zone (recommended). DNS queries are directly responded
     * to with the lowest latency. DNS record changes take effect in real time. You can
     * use custom DNS lines and weighted round-robin.
     * Default value: NORMAL_ZONE.
     * > The built-in authoritative accelerated zone is located before the cache module.
     * DNS responses are not cached. This may increase the number of DNS queries and
     * your costs.
     * > Starting from April 30, 2025 (UTC+8), when new users activate Cloud DNS
     * PrivateZone, added zones are set as accelerated zones by default.
     */
    readonly dnsGroup?: string | ros.IResolvable;
    /**
     * @Property ignoredStackTagKeys: Stack tag keys to ignore
     */
    readonly ignoredStackTagKeys?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property proxyPattern: Specifies whether to enable subdomain recursive proxy. Valid values:
     * - ZONE: Disables the feature. If a DNS query for a subdomain that does not exist
     * under the current domain name is received, an NXDOMAIN error is returned.
     * - RECORD: Enables the feature. If a DNS query for a subdomain that does not exist
     * under the current domain name is received, the query is processed by the
     * forwarding and recursion modules in sequence. The final result is used to respond
     * to the DNS query.
     * Default value: ZONE.
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
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PVTZ::Zone`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zone` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
 */
export declare class RosZone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::Zone";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
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
     * @Property dnsGroup: The location of the built-in authoritative zone. Valid values:
     * - NORMAL_ZONE: Standard zone. DNS responses are cached. If a cache miss occurs,
     * the query is sent to the built-in authoritative standard zone. The time to live
     * (TTL) value affects the time when a DNS record change takes effect. You cannot
     * use custom DNS lines or weighted round-robin.
     * - FAST_ZONE: Accelerated zone (recommended). DNS queries are directly responded
     * to with the lowest latency. DNS record changes take effect in real time. You can
     * use custom DNS lines and weighted round-robin.
     * Default value: NORMAL_ZONE.
     * > The built-in authoritative accelerated zone is located before the cache module.
     * DNS responses are not cached. This may increase the number of DNS queries and
     * your costs.
     * > Starting from April 30, 2025 (UTC+8), when new users activate Cloud DNS
     * PrivateZone, added zones are set as accelerated zones by default.
     */
    dnsGroup: string | ros.IResolvable | undefined;
    /**
     * @Property ignoredStackTagKeys: Stack tag keys to ignore
     */
    ignoredStackTagKeys: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property proxyPattern: Specifies whether to enable subdomain recursive proxy. Valid values:
     * - ZONE: Disables the feature. If a DNS query for a subdomain that does not exist
     * under the current domain name is received, an NXDOMAIN error is returned.
     * - RECORD: Enables the feature. If a DNS query for a subdomain that does not exist
     * under the current domain name is received, the query is processed by the
     * forwarding and recursion modules in sequence. The final result is used to respond
     * to the DNS query.
     * Default value: ZONE.
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
 * Properties for defining a `RosZoneRecord`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
 */
export interface RosZoneRecordProps {
    /**
     * @Property rr: The host record. A host record is the prefix of a domain name. Common host
     * records include www, @, \* (for wildcard DNS), and mail (for mailboxes).
     * For example, to resolve @.example.com, set the host record to "@", not an empty
     * string.
     */
    readonly rr: string | ros.IResolvable;
    /**
     * @Property status: The status of the DNS record. Valid values:
     * - ENABLE: Enables DNS resolution.
     * - DISABLE: Pauses DNS resolution.
     */
    readonly status: string | ros.IResolvable;
    /**
     * @Property type: The type of the DNS record. The following types are supported:
     * - A: Maps a domain name to an IPv4 address in dotted decimal notation.
     * - AAAA: Maps a domain name to an IPv6 address.
     * - CNAME: Maps a domain name to another domain name.
     * - TXT: A text record. The text can be up to 255 characters in length. TXT records
     * are often used for Sender Policy Framework (SPF) records to prevent spam.
     * - MX: Maps a domain name to the domain name of a mail server.
     * - PTR: Maps an IP address to a domain name.
     * - SRV: Specifies the server for a specific service. The format is: Priority
     * Weight Port Target. Separate each value with a space.
     * > Before adding a PTR record, configure a reverse lookup zone. For more
     * information, see [Reverse DNS lookups and PTR records]().
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
     * @Property priority: The priority of the MX record. A smaller value indicates a higher priority. Valid
     * values: \[1, 99].
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * @Property ttl: The time to live (TTL). The unit is seconds (s). Valid values are 5, 30, 60, 3600
     * (1 hour), 43200 (12 hours), and 86400 (1 day). The default value is 60.
     */
    readonly ttl?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PVTZ::ZoneRecord`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ZoneRecord` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
 */
export declare class RosZoneRecord extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::ZoneRecord";
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
     * @Property rr: The host record. A host record is the prefix of a domain name. Common host
     * records include www, @, \* (for wildcard DNS), and mail (for mailboxes).
     * For example, to resolve @.example.com, set the host record to "@", not an empty
     * string.
     */
    rr: string | ros.IResolvable;
    /**
     * @Property status: The status of the DNS record. Valid values:
     * - ENABLE: Enables DNS resolution.
     * - DISABLE: Pauses DNS resolution.
     */
    status: string | ros.IResolvable;
    /**
     * @Property type: The type of the DNS record. The following types are supported:
     * - A: Maps a domain name to an IPv4 address in dotted decimal notation.
     * - AAAA: Maps a domain name to an IPv6 address.
     * - CNAME: Maps a domain name to another domain name.
     * - TXT: A text record. The text can be up to 255 characters in length. TXT records
     * are often used for Sender Policy Framework (SPF) records to prevent spam.
     * - MX: Maps a domain name to the domain name of a mail server.
     * - PTR: Maps an IP address to a domain name.
     * - SRV: Specifies the server for a specific service. The format is: Priority
     * Weight Port Target. Separate each value with a space.
     * > Before adding a PTR record, configure a reverse lookup zone. For more
     * information, see [Reverse DNS lookups and PTR records]().
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
     * @Property priority: The priority of the MX record. A smaller value indicates a higher priority. Valid
     * values: \[1, 99].
     */
    priority: number | ros.IResolvable | undefined;
    /**
     * @Property ttl: The time to live (TTL). The unit is seconds (s). Valid values are 5, 30, 60, 3600
     * (1 hour), 43200 (12 hours), and 86400 (1 day). The default value is 60.
     */
    ttl: number | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosZoneVpcBinder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonevpcbinder
 */
export interface RosZoneVpcBinderProps {
    /**
     * @Property vpcs: The VPCs.
     * > If you leave this parameter empty, all VPCs bound to the zone are unbound.
     */
    readonly vpcs: Array<RosZoneVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: Zone Id
     */
    readonly zoneId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PVTZ::ZoneVpcBinder`, which is used to bind a private zone to or unbind a private zone from a virtual private cloud (VPC).
 * @Note This class does not contain additional functions, so it is recommended to use the `ZoneVpcBinder` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonevpcbinder
 */
export declare class RosZoneVpcBinder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::ZoneVpcBinder";
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
     * @Property vpcs: The VPCs.
     * > If you leave this parameter empty, all VPCs bound to the zone are unbound.
     */
    vpcs: Array<RosZoneVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: Zone Id
     */
    zoneId: string | ros.IResolvable;
    /**
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
