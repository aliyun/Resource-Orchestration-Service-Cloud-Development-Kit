import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::SAG::ACL`
 */
export interface RosACLProps {
    /**
     * @Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
     */
    readonly name: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::ACL`
 */
export declare class RosACL extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACL";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AclId: Access control set ID.
     */
    readonly attrAclId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
     */
    name: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::ACL`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosACLProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::ACLAssociation`
 */
export interface RosACLAssociationProps {
    /**
     * @Property aclId: Access control ID.
     */
    readonly aclId: string | ros.IResolvable;
    /**
     * @Property smartAgId: An intelligent gateway instance that needs to bind access control.
     */
    readonly smartAgId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::ACLAssociation`
 */
export declare class RosACLAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACLAssociation";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclId: Access control ID.
     */
    aclId: string | ros.IResolvable;
    /**
     * @Property smartAgId: An intelligent gateway instance that needs to bind access control.
     */
    smartAgId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::ACLAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosACLAssociationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::ACLRule`
 */
export interface RosACLRuleProps {
    /**
     * @Property aclId: Access control ID.
     */
    readonly aclId: string | ros.IResolvable;
    /**
     * @Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    readonly destCidr: string | ros.IResolvable;
    /**
     * @Property destPortRange: Destination port range, 80/80.
     */
    readonly destPortRange: string | ros.IResolvable;
    /**
     * @Property direction: Regular direction.
     * Value: in|out
     */
    readonly direction: string | ros.IResolvable;
    /**
     * @Property ipProtocol: Protocol, not case sensitive.
     */
    readonly ipProtocol: string | ros.IResolvable;
    /**
     * @Property policy: Access: accept|drop
     */
    readonly policy: string | ros.IResolvable;
    /**
     * @Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
     */
    readonly sourceCidr: string | ros.IResolvable;
    /**
     * @Property sourcePortRange: Source port range, 80/80.
     */
    readonly sourcePortRange: string | ros.IResolvable;
    /**
     * @Property description: Rule description information, ranging from 1 to 512 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property dpiGroupIds: The ID of the application group.
     * You can enter at most 100 application group IDs at a time.
     * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
     */
    readonly dpiGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property dpiSignatureIds: The ID of the application.
     * You can enter at most 100 application IDs at a time.
     * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
     */
    readonly dpiSignatureIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property name: The name of the ACL rule.
     * The name must be 2 to 100 characters in length, and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * @Property type: The type of the ACL rule: Valid values:
     * LAN: The ACL rule controls traffic of private IP addresses. This is the default value.
     * WAN: The ACL rule controls traffic of public IP addresses.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::ACLRule`
 */
export declare class RosACLRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACLRule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AcrId: Access control rule ID.
     */
    readonly attrAcrId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclId: Access control ID.
     */
    aclId: string | ros.IResolvable;
    /**
     * @Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    destCidr: string | ros.IResolvable;
    /**
     * @Property destPortRange: Destination port range, 80/80.
     */
    destPortRange: string | ros.IResolvable;
    /**
     * @Property direction: Regular direction.
     * Value: in|out
     */
    direction: string | ros.IResolvable;
    /**
     * @Property ipProtocol: Protocol, not case sensitive.
     */
    ipProtocol: string | ros.IResolvable;
    /**
     * @Property policy: Access: accept|drop
     */
    policy: string | ros.IResolvable;
    /**
     * @Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
     */
    sourceCidr: string | ros.IResolvable;
    /**
     * @Property sourcePortRange: Source port range, 80/80.
     */
    sourcePortRange: string | ros.IResolvable;
    /**
     * @Property description: Rule description information, ranging from 1 to 512 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property dpiGroupIds: The ID of the application group.
     * You can enter at most 100 application group IDs at a time.
     * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
     */
    dpiGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property dpiSignatureIds: The ID of the application.
     * You can enter at most 100 application IDs at a time.
     * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
     */
    dpiSignatureIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the ACL rule.
     * The name must be 2 to 100 characters in length, and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    priority: number | ros.IResolvable | undefined;
    /**
     * @Property type: The type of the ACL rule: Valid values:
     * LAN: The ACL rule controls traffic of private IP addresses. This is the default value.
     * WAN: The ACL rule controls traffic of public IP addresses.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SAG::ACLRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosACLRuleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::App`
 */
export interface RosAppProps {
    /**
     * @Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances. Default value:
     * false. Valid values:
     * true: automatically pays the bills of SAG APP instances.
     * false: does not automatically pay the bills of SAG APP instances.
     * If you set the parameter to false, after you call this operation, go to Billing Management
     * of the SAG console to complete the payment, the instance can be created.
     */
    readonly autoPay: boolean | ros.IResolvable;
    /**
     * @Property dataPlan: The quota of the traffic plan that the system allows each client account to use for
     * free each month. Unit: GB. Set the value to 5.
     * Note The system allows each client account to use 5 GB traffic plan for free.
     */
    readonly dataPlan: number | ros.IResolvable;
    /**
     * @Property period: The subscription period of the SAG APP instance. Unit: months.
     * Valid values: 1~9, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;
    /**
     * @Property userCount: The quota of client accounts for the SAG APP instance.
     * Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
     */
    readonly userCount: number | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the SAG APP instance. Set the value to PREPAY.
     * This value indicates that the SAG APP instance is a subscription resource.
     */
    readonly chargeType?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::App`
 */
export declare class RosApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::App";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute OrderId: The ID of the order that you placed to subscribe to the SAG APP instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute SmartAGId: The ID of the SAG APP instance.
     */
    readonly attrSmartAgId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances. Default value:
     * false. Valid values:
     * true: automatically pays the bills of SAG APP instances.
     * false: does not automatically pay the bills of SAG APP instances.
     * If you set the parameter to false, after you call this operation, go to Billing Management
     * of the SAG console to complete the payment, the instance can be created.
     */
    autoPay: boolean | ros.IResolvable;
    /**
     * @Property dataPlan: The quota of the traffic plan that the system allows each client account to use for
     * free each month. Unit: GB. Set the value to 5.
     * Note The system allows each client account to use 5 GB traffic plan for free.
     */
    dataPlan: number | ros.IResolvable;
    /**
     * @Property period: The subscription period of the SAG APP instance. Unit: months.
     * Valid values: 1~9, 12, 24, and 36.
     */
    period: number | ros.IResolvable;
    /**
     * @Property userCount: The quota of client accounts for the SAG APP instance.
     * Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
     */
    userCount: number | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the SAG APP instance. Set the value to PREPAY.
     * This value indicates that the SAG APP instance is a subscription resource.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SAG::App`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::AppUser`
 */
export interface RosAppUserProps {
    /**
     * @Property bandwidth: The bandwidth. Unit: Kbit/s. Maximum bandwidth: 2,000 Kbit/s.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * @Property smartAgId: The ID of the SAG APP instance.
     */
    readonly smartAgId: string | ros.IResolvable;
    /**
     * @Property userMail: The email address of the user. The username and password are sent to the specified
     * email address.
     */
    readonly userMail: string | ros.IResolvable;
    /**
     * @Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP. In this
     * case, SAG APP connects to Alibaba Cloud through the specified IP address.
     * Note The IP address must fall into the CIDR block of the private network.
     * After this feature is disabled, an IP address within the CIDR block of the private
     * network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
     * IP address.
     */
    readonly clientIp?: string | ros.IResolvable;
    /**
     * @Property disable: Disable user or not.
     */
    readonly disable?: boolean | ros.IResolvable;
    /**
     * @Property password: The password used to log on to SAG APP.
     * For a client account, if you specify the username, you must also specify the password.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * @Property userName: The username of the client account. Usernames of client accounts added to the same
     * SAG APP instance must be unique.
     * For a client account, if you specify the username, you must also specify the password.
     */
    readonly userName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::AppUser`
 */
export declare class RosAppUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::AppUser";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SmartAGId: The ID of the SAG APP instance.
     */
    readonly attrSmartAgId: ros.IResolvable;
    /**
     * @Attribute UserName: <heat.engine.properties.Schema object at 0x7ff887c8ec10>
     */
    readonly attrUserName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: The bandwidth. Unit: Kbit/s. Maximum bandwidth: 2,000 Kbit/s.
     */
    bandwidth: number | ros.IResolvable;
    /**
     * @Property smartAgId: The ID of the SAG APP instance.
     */
    smartAgId: string | ros.IResolvable;
    /**
     * @Property userMail: The email address of the user. The username and password are sent to the specified
     * email address.
     */
    userMail: string | ros.IResolvable;
    /**
     * @Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP. In this
     * case, SAG APP connects to Alibaba Cloud through the specified IP address.
     * Note The IP address must fall into the CIDR block of the private network.
     * After this feature is disabled, an IP address within the CIDR block of the private
     * network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
     * IP address.
     */
    clientIp: string | ros.IResolvable | undefined;
    /**
     * @Property disable: Disable user or not.
     */
    disable: boolean | ros.IResolvable | undefined;
    /**
     * @Property password: The password used to log on to SAG APP.
     * For a client account, if you specify the username, you must also specify the password.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property userName: The username of the client account. Usernames of client accounts added to the same
     * SAG APP instance must be unique.
     * For a client account, if you specify the username, you must also specify the password.
     */
    userName: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SAG::AppUser`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppUserProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::CloudConnectNetwork`
 */
export interface RosCloudConnectNetworkProps {
    /**
     * @Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property isDefault: Whether is created by system
     */
    readonly isDefault?: boolean | ros.IResolvable;
    /**
     * @Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCloudConnectNetwork.TagsProperty[];
}
/**
 * A ROS template type:  `ALIYUN::SAG::CloudConnectNetwork`
 */
export declare class RosCloudConnectNetwork extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::CloudConnectNetwork";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CcnId: The ID of the CCN instance.
     */
    readonly attrCcnId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property isDefault: Whether is created by system
     */
    isDefault: boolean | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosCloudConnectNetwork.TagsProperty[] | undefined;
    /**
     * Create a new `ALIYUN::SAG::CloudConnectNetwork`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCloudConnectNetworkProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCloudConnectNetwork {
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
 * Properties for defining a `ALIYUN::SAG::GrantCcnToCen`
 */
export interface RosGrantCcnToCenProps {
    /**
     * @Property ccnInstanceId: The ID of the CCN instance.
     */
    readonly ccnInstanceId: string | ros.IResolvable;
    /**
     * @Property cenInstanceId: The ID of the CEN instance.
     */
    readonly cenInstanceId: string | ros.IResolvable;
    /**
     * @Property cenUid: The ID of the account to which the CEN instance belongs.
     */
    readonly cenUid: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::GrantCcnToCen`
 */
export declare class RosGrantCcnToCen extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::GrantCcnToCen";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CcnInstanceId: The ID of the CCN instance.
     */
    readonly attrCcnInstanceId: ros.IResolvable;
    /**
     * @Attribute CenInstanceId: The ID of the CEN instance.
     */
    readonly attrCenInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ccnInstanceId: The ID of the CCN instance.
     */
    ccnInstanceId: string | ros.IResolvable;
    /**
     * @Property cenInstanceId: The ID of the CEN instance.
     */
    cenInstanceId: string | ros.IResolvable;
    /**
     * @Property cenUid: The ID of the account to which the CEN instance belongs.
     */
    cenUid: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::GrantCcnToCen`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGrantCcnToCenProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::Qos`
 */
export interface RosQosProps {
    /**
     * @Property qosName: The name of the QoS policy.
     * The name must be 2 to 100 characters in length and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly qosName: string | ros.IResolvable;
    /**
     * @Property qosDescription: The description of the QoS policy.
     * The description must be 1 to 512 characters in length and can contain letters, digits,
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly qosDescription?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::Qos`
 */
export declare class RosQos extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::Qos";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute QosId: The ID of the QoS policy.
     */
    readonly attrQosId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property qosName: The name of the QoS policy.
     * The name must be 2 to 100 characters in length and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    qosName: string | ros.IResolvable;
    /**
     * @Property qosDescription: The description of the QoS policy.
     * The description must be 1 to 512 characters in length and can contain letters, digits,
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    qosDescription: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SAG::Qos`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQosProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::QosAssociation`
 */
export interface RosQosAssociationProps {
    /**
     * @Property qosId: The instance ID of the QoS policy.
     */
    readonly qosId: string | ros.IResolvable;
    /**
     * @Property smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.
     */
    readonly smartAgId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::QosAssociation`
 */
export declare class RosQosAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::QosAssociation";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute QosId: The ID of the QoS policy.
     */
    readonly attrQosId: ros.IResolvable;
    /**
     * @Attribute SmartAGId: The ID of the SAG instance to which the QoS policy is to be applied.
     */
    readonly attrSmartAgId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property qosId: The instance ID of the QoS policy.
     */
    qosId: string | ros.IResolvable;
    /**
     * @Property smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.
     */
    smartAgId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::QosAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQosAssociationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::QosCar`
 */
export interface RosQosCarProps {
    /**
     * @Property limitType: The type of the traffic throttling policy. Valid values:
     * Absolute: throttles traffic by a specific bandwidth range.
     * Percent: throttles traffic by a specific range of bandwidth percentage.
     */
    readonly limitType: string | ros.IResolvable;
    /**
     * @Property priority: The priority of the traffic throttling policy. A smaller value represents a higher
     * priority. If policies are assigned the same priority, the one applied the earliest
     * prevails. Valid values: 1 to 7.
     */
    readonly priority: number | ros.IResolvable;
    /**
     * @Property qosId: The ID of the QoS policy.
     */
    readonly qosId: string | ros.IResolvable;
    /**
     * @Property description: The description of the traffic throttling policy.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property maxBandwidthAbs: The maximum bandwidth. This parameter is required when LimitType is set to Absolute.
     */
    readonly maxBandwidthAbs?: number | ros.IResolvable;
    /**
     * @Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG
     * instance.
     * This parameter is required when LimitType is set to Percent.
     */
    readonly maxBandwidthPercent?: number | ros.IResolvable;
    /**
     * @Property minBandwidthAbs: The minimum bandwidth. This parameter is required when LimitType is set to Absolute.
     */
    readonly minBandwidthAbs?: number | ros.IResolvable;
    /**
     * @Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG
     * instance.
     * This parameter is required when LimitType is set to Percent.
     */
    readonly minBandwidthPercent?: number | ros.IResolvable;
    /**
     * @Property name: The name of the traffic throttling policy. The name must be 2 to 128 characters in
     * length, and can contain Chinese characters, letters, digits, periods (.), underscores
     * (_), and hyphens (-).
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following
     * options are available:
     * CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
     * InternetUpBandwidth: Internet upstream bandwidth.
     */
    readonly percentSourceType?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::QosCar`
 */
export declare class RosQosCar extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::QosCar";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute QosCarId: The ID of the traffic throttling policy.
     */
    readonly attrQosCarId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property limitType: The type of the traffic throttling policy. Valid values:
     * Absolute: throttles traffic by a specific bandwidth range.
     * Percent: throttles traffic by a specific range of bandwidth percentage.
     */
    limitType: string | ros.IResolvable;
    /**
     * @Property priority: The priority of the traffic throttling policy. A smaller value represents a higher
     * priority. If policies are assigned the same priority, the one applied the earliest
     * prevails. Valid values: 1 to 7.
     */
    priority: number | ros.IResolvable;
    /**
     * @Property qosId: The ID of the QoS policy.
     */
    qosId: string | ros.IResolvable;
    /**
     * @Property description: The description of the traffic throttling policy.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property maxBandwidthAbs: The maximum bandwidth. This parameter is required when LimitType is set to Absolute.
     */
    maxBandwidthAbs: number | ros.IResolvable | undefined;
    /**
     * @Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG
     * instance.
     * This parameter is required when LimitType is set to Percent.
     */
    maxBandwidthPercent: number | ros.IResolvable | undefined;
    /**
     * @Property minBandwidthAbs: The minimum bandwidth. This parameter is required when LimitType is set to Absolute.
     */
    minBandwidthAbs: number | ros.IResolvable | undefined;
    /**
     * @Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG
     * instance.
     * This parameter is required when LimitType is set to Percent.
     */
    minBandwidthPercent: number | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the traffic throttling policy. The name must be 2 to 128 characters in
     * length, and can contain Chinese characters, letters, digits, periods (.), underscores
     * (_), and hyphens (-).
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following
     * options are available:
     * CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
     * InternetUpBandwidth: Internet upstream bandwidth.
     */
    percentSourceType: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SAG::QosCar`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQosCarProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::QosPolicy`
 */
export interface RosQosPolicyProps {
    /**
     * @Property destCidr: The range of the destination IP addresses.
     * Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
     */
    readonly destCidr: string | ros.IResolvable;
    /**
     * @Property destPortRange: The range of destination ports.
     * Valid values: 1 to 65535 and -1.
     * Set this parameter in one of the following formats:
     * 1/200: a port range from 1 to 200
     * 80/80: port 80
     * -1/-1: all ports
     */
    readonly destPortRange: string | ros.IResolvable;
    /**
     * @Property ipProtocol: The type of the protocol that applies to the traffic classification rule.
     * The supported protocols provided in this topic are for reference only. The actual
     * protocols in the console shall prevail.
     */
    readonly ipProtocol: string | ros.IResolvable;
    /**
     * @Property priority: The priority of the traffic throttling policy to which the traffic classification
     * rule belongs.
     */
    readonly priority: number | ros.IResolvable;
    /**
     * @Property qosId: The ID of the QoS policy.
     */
    readonly qosId: string | ros.IResolvable;
    /**
     * @Property sourceCidr: The range of the source IP addresses.
     * Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
     */
    readonly sourceCidr: string | ros.IResolvable;
    /**
     * @Property sourcePortRange: The range of source ports.
     * Valid values: 1 to 65535 and -1.
     * Set this parameter in one of the following formats:
     * 1/200: a port range from 1 to 200
     * 80/80: port 80
     * -1/-1: all ports
     */
    readonly sourcePortRange: string | ros.IResolvable;
    /**
     * @Property description: The description of the traffic classification rule.
     * The description must be 1 to 512 characters in length and can contain letters, digits,
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property dpiGroupIds: The ID of the application group.
     * You can enter at most 100 application group IDs at a time.
     * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
     */
    readonly dpiGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property dpiSignatureIds: The ID of the application.
     * You can enter at most 100 application IDs at a time.
     * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
     */
    readonly dpiSignatureIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property endTime: The time when the traffic classification rule becomes invalid.
     * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
     * The time must be in UTC+8.
     */
    readonly endTime?: string | ros.IResolvable;
    /**
     * @Property name: The name of the traffic classification rule.
     * The name must be 2 to 100 characters in length, and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property startTime: The time when the traffic classification rule takes effect.
     * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
     * The time must be in UTC+8.
     */
    readonly startTime?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::QosPolicy`
 */
export declare class RosQosPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::QosPolicy";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute QosPolicyId: The ID of the traffic classification rule.
     */
    readonly attrQosPolicyId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property destCidr: The range of the destination IP addresses.
     * Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
     */
    destCidr: string | ros.IResolvable;
    /**
     * @Property destPortRange: The range of destination ports.
     * Valid values: 1 to 65535 and -1.
     * Set this parameter in one of the following formats:
     * 1/200: a port range from 1 to 200
     * 80/80: port 80
     * -1/-1: all ports
     */
    destPortRange: string | ros.IResolvable;
    /**
     * @Property ipProtocol: The type of the protocol that applies to the traffic classification rule.
     * The supported protocols provided in this topic are for reference only. The actual
     * protocols in the console shall prevail.
     */
    ipProtocol: string | ros.IResolvable;
    /**
     * @Property priority: The priority of the traffic throttling policy to which the traffic classification
     * rule belongs.
     */
    priority: number | ros.IResolvable;
    /**
     * @Property qosId: The ID of the QoS policy.
     */
    qosId: string | ros.IResolvable;
    /**
     * @Property sourceCidr: The range of the source IP addresses.
     * Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
     */
    sourceCidr: string | ros.IResolvable;
    /**
     * @Property sourcePortRange: The range of source ports.
     * Valid values: 1 to 65535 and -1.
     * Set this parameter in one of the following formats:
     * 1/200: a port range from 1 to 200
     * 80/80: port 80
     * -1/-1: all ports
     */
    sourcePortRange: string | ros.IResolvable;
    /**
     * @Property description: The description of the traffic classification rule.
     * The description must be 1 to 512 characters in length and can contain letters, digits,
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property dpiGroupIds: The ID of the application group.
     * You can enter at most 100 application group IDs at a time.
     * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
     */
    dpiGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property dpiSignatureIds: The ID of the application.
     * You can enter at most 100 application IDs at a time.
     * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
     */
    dpiSignatureIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property endTime: The time when the traffic classification rule becomes invalid.
     * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
     * The time must be in UTC+8.
     */
    endTime: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the traffic classification rule.
     * The name must be 2 to 100 characters in length, and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property startTime: The time when the traffic classification rule takes effect.
     * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
     * The time must be in UTC+8.
     */
    startTime: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SAG::QosPolicy`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQosPolicyProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::SerialNumberBinding`
 */
export interface RosSerialNumberBindingProps {
    /**
     * @Property serialNumber: The serial number (SN) of the SAG device.
     */
    readonly serialNumber: string | ros.IResolvable;
    /**
     * @Property smartAgId: The ID of the SAG instance.
     */
    readonly smartAgId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::SerialNumberBinding`
 */
export declare class RosSerialNumberBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SerialNumberBinding";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SmartAGId: The ID of the SAG instance.
     */
    readonly attrSmartAgId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serialNumber: The serial number (SN) of the SAG device.
     */
    serialNumber: string | ros.IResolvable;
    /**
     * @Property smartAgId: The ID of the SAG instance.
     */
    smartAgId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::SerialNumberBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSerialNumberBindingProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::SmartAccessGateway`
 */
export interface RosSmartAccessGatewayProps {
    /**
     * @Property buyerMessage: The remarks left by the buyer.
     */
    readonly buyerMessage: string | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the SAG instance.
     * Set the value to PREPAY, which specifies the subscription billing method.
     */
    readonly chargeType: string | ros.IResolvable;
    /**
     * @Property hardWareSpec: The type of the SAG instance. Valid values:
     * sag-100wm
     * sag-1000
     * sag-vcpe
     */
    readonly hardWareSpec: string | ros.IResolvable;
    /**
     * @Property haType: The deployment mode. Valid values:
     * no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
     * cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
     * device and the other serves as a standby device. Only the active device is connected
     * to Alibaba Cloud. If the active device is not working as expected, you must manually
     * perform a switchover.
     * warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
     * Alibaba Cloud. If an active device is not working as expected, a failover is automatically
     * performed.
     * Note If you want to create an SAG vCPE instance, set the value to warm_backup.
     */
    readonly haType: string | ros.IResolvable;
    /**
     * @Property maxBandWidth: The bandwidth of the SAG instance.
     * If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
     * If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
     * If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
     */
    readonly maxBandWidth: number | ros.IResolvable;
    /**
     * @Property period: The subscription period of the SAG instance. Unit: months.
     * Valid values: 1 to 9, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;
    /**
     * @Property receiverAddress: The detailed address of the recipient.
     */
    readonly receiverAddress: string | ros.IResolvable;
    /**
     * @Property receiverCity: The city of the recipient address.
     */
    readonly receiverCity: string | ros.IResolvable;
    /**
     * @Property receiverCountry: The country of the recipient address.
     */
    readonly receiverCountry: string | ros.IResolvable;
    /**
     * @Property receiverDistrict: The district of the recipient address.
     */
    readonly receiverDistrict: string | ros.IResolvable;
    /**
     * @Property receiverEmail: The email address of the recipient.
     */
    readonly receiverEmail: string | ros.IResolvable;
    /**
     * @Property receiverMobile: The mobile phone number of the recipient.
     */
    readonly receiverMobile: string | ros.IResolvable;
    /**
     * @Property receiverName: The name of the recipient.
     */
    readonly receiverName: string | ros.IResolvable;
    /**
     * @Property receiverState: The province of the recipient address.
     */
    readonly receiverState: string | ros.IResolvable;
    /**
     * @Property receiverTown: The town of the recipient address.
     */
    readonly receiverTown: string | ros.IResolvable;
    /**
     * @Property receiverZip: The postcode of the recipient address.
     */
    readonly receiverZip: string | ros.IResolvable;
    /**
     * @Property activate: Activate SAG or not. Default is False
     */
    readonly activate?: boolean | ros.IResolvable;
    /**
     * @Property alreadyHaveSag: Specifies whether you already have an SAG device. Valid values:
     * true: yes
     * false (default): no
     */
    readonly alreadyHaveSag?: boolean | ros.IResolvable;
    /**
     * @Property autoPay: Specifies whether to enable auto-payment for the instance. Valid values:
     * true: yes
     * false: no
     * If you set the parameter to false, go to Billing Management to complete the payment
     * after you call this operation. After you complete the payment, the instance can be
     * created.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks
     * do not overlap with each other.
     * If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
     * the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
     * Protocol (DHCP) enabled.
     */
    readonly cidrBlock?: string | ros.IResolvable;
    /**
     * @Property description: The description of the SAG instance.
     * The description must be 2 to 256 characters in length, and can contain digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the SAG instance.
     * The name must be 2 to 128 characters in length and can contain digits, periods (.),
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property receiverPhone: The landline phone number of the recipient.
     */
    readonly receiverPhone?: string | ros.IResolvable;
    /**
     * @Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
     * static: static routing.
     * dynamic: dynamic routing.
     */
    readonly routingStrategy?: string | ros.IResolvable;
    /**
     * @Property securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter
     * than zero second.
     * Unit: second.
     */
    readonly securityLockThreshold?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::SmartAccessGateway`
 */
export declare class RosSmartAccessGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SmartAccessGateway";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute OrderId: The ID of the order.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute SmartAGId: The ID of the SAG instance.
     */
    readonly attrSmartAgId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property buyerMessage: The remarks left by the buyer.
     */
    buyerMessage: string | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the SAG instance.
     * Set the value to PREPAY, which specifies the subscription billing method.
     */
    chargeType: string | ros.IResolvable;
    /**
     * @Property hardWareSpec: The type of the SAG instance. Valid values:
     * sag-100wm
     * sag-1000
     * sag-vcpe
     */
    hardWareSpec: string | ros.IResolvable;
    /**
     * @Property haType: The deployment mode. Valid values:
     * no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
     * cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
     * device and the other serves as a standby device. Only the active device is connected
     * to Alibaba Cloud. If the active device is not working as expected, you must manually
     * perform a switchover.
     * warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
     * Alibaba Cloud. If an active device is not working as expected, a failover is automatically
     * performed.
     * Note If you want to create an SAG vCPE instance, set the value to warm_backup.
     */
    haType: string | ros.IResolvable;
    /**
     * @Property maxBandWidth: The bandwidth of the SAG instance.
     * If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
     * If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
     * If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
     */
    maxBandWidth: number | ros.IResolvable;
    /**
     * @Property period: The subscription period of the SAG instance. Unit: months.
     * Valid values: 1 to 9, 12, 24, and 36.
     */
    period: number | ros.IResolvable;
    /**
     * @Property receiverAddress: The detailed address of the recipient.
     */
    receiverAddress: string | ros.IResolvable;
    /**
     * @Property receiverCity: The city of the recipient address.
     */
    receiverCity: string | ros.IResolvable;
    /**
     * @Property receiverCountry: The country of the recipient address.
     */
    receiverCountry: string | ros.IResolvable;
    /**
     * @Property receiverDistrict: The district of the recipient address.
     */
    receiverDistrict: string | ros.IResolvable;
    /**
     * @Property receiverEmail: The email address of the recipient.
     */
    receiverEmail: string | ros.IResolvable;
    /**
     * @Property receiverMobile: The mobile phone number of the recipient.
     */
    receiverMobile: string | ros.IResolvable;
    /**
     * @Property receiverName: The name of the recipient.
     */
    receiverName: string | ros.IResolvable;
    /**
     * @Property receiverState: The province of the recipient address.
     */
    receiverState: string | ros.IResolvable;
    /**
     * @Property receiverTown: The town of the recipient address.
     */
    receiverTown: string | ros.IResolvable;
    /**
     * @Property receiverZip: The postcode of the recipient address.
     */
    receiverZip: string | ros.IResolvable;
    /**
     * @Property activate: Activate SAG or not. Default is False
     */
    activate: boolean | ros.IResolvable | undefined;
    /**
     * @Property alreadyHaveSag: Specifies whether you already have an SAG device. Valid values:
     * true: yes
     * false (default): no
     */
    alreadyHaveSag: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoPay: Specifies whether to enable auto-payment for the instance. Valid values:
     * true: yes
     * false: no
     * If you set the parameter to false, go to Billing Management to complete the payment
     * after you call this operation. After you complete the payment, the instance can be
     * created.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks
     * do not overlap with each other.
     * If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
     * the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
     * Protocol (DHCP) enabled.
     */
    cidrBlock: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the SAG instance.
     * The description must be 2 to 256 characters in length, and can contain digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the SAG instance.
     * The name must be 2 to 128 characters in length and can contain digits, periods (.),
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property receiverPhone: The landline phone number of the recipient.
     */
    receiverPhone: string | ros.IResolvable | undefined;
    /**
     * @Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
     * static: static routing.
     * dynamic: dynamic routing.
     */
    routingStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter
     * than zero second.
     * Unit: second.
     */
    securityLockThreshold: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SAG::SmartAccessGateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSmartAccessGatewayProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SAG::SmartAccessGatewayBinding`
 */
export interface RosSmartAccessGatewayBindingProps {
    /**
     * @Property ccnId: The ID of the CCN instance to bind.
     */
    readonly ccnId: string | ros.IResolvable;
    /**
     * @Property smartAgId: The ID of the Smart Access Gateway instance.
     */
    readonly smartAgId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SAG::SmartAccessGatewayBinding`
 */
export declare class RosSmartAccessGatewayBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SmartAccessGatewayBinding";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SmartAGId: The ID of the Smart Access Gateway instance.
     */
    readonly attrSmartAgId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ccnId: The ID of the CCN instance to bind.
     */
    ccnId: string | ros.IResolvable;
    /**
     * @Property smartAgId: The ID of the Smart Access Gateway instance.
     */
    smartAgId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::SmartAccessGatewayBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSmartAccessGatewayBindingProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
