import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::SAG::ACL`
 */
export interface RosACLProps {
    /**
     * @Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
     */
    readonly name: string;
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
    readonly attrAclId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
     */
    name: string;
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
    readonly aclId: string;
    /**
     * @Property smartAgId: An intelligent gateway instance that needs to bind access control.
     */
    readonly smartAgId: string;
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
    aclId: string;
    /**
     * @Property smartAgId: An intelligent gateway instance that needs to bind access control.
     */
    smartAgId: string;
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
    readonly aclId: string;
    /**
     * @Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    readonly destCidr: string;
    /**
     * @Property destPortRange: Destination port range, 80/80.
     */
    readonly destPortRange: string;
    /**
     * @Property direction: Regular direction.
     * Value: in|out
     */
    readonly direction: string;
    /**
     * @Property ipProtocol: Protocol, not case sensitive.
     */
    readonly ipProtocol: string;
    /**
     * @Property policy: Access: accept|drop
     */
    readonly policy: string;
    /**
     * @Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
     */
    readonly sourceCidr: string;
    /**
     * @Property sourcePortRange: Source port range, 80/80.
     */
    readonly sourcePortRange: string;
    /**
     * @Property description: Rule description information, ranging from 1 to 512 characters.
     */
    readonly description?: string;
    /**
     * @Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    readonly priority?: number;
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
    readonly attrAcrId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclId: Access control ID.
     */
    aclId: string;
    /**
     * @Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    destCidr: string;
    /**
     * @Property destPortRange: Destination port range, 80/80.
     */
    destPortRange: string;
    /**
     * @Property direction: Regular direction.
     * Value: in|out
     */
    direction: string;
    /**
     * @Property ipProtocol: Protocol, not case sensitive.
     */
    ipProtocol: string;
    /**
     * @Property policy: Access: accept|drop
     */
    policy: string;
    /**
     * @Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
     */
    sourceCidr: string;
    /**
     * @Property sourcePortRange: Source port range, 80/80.
     */
    sourcePortRange: string;
    /**
     * @Property description: Rule description information, ranging from 1 to 512 characters.
     */
    description: string | undefined;
    /**
     * @Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    priority: number | undefined;
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
 * Properties for defining a `ALIYUN::SAG::CloudConnectNetwork`
 */
export interface RosCloudConnectNetworkProps {
    /**
     * @Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
     */
    readonly description?: string;
    /**
     * @Property isDefault: Whether is created by system
     */
    readonly isDefault?: boolean | ros.IResolvable;
    /**
     * @Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
     */
    readonly name?: string;
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
    readonly attrCcnId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
     */
    description: string | undefined;
    /**
     * @Property isDefault: Whether is created by system
     */
    isDefault: boolean | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
     */
    name: string | undefined;
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
/**
 * Properties for defining a `ALIYUN::SAG::GrantCcnToCen`
 */
export interface RosGrantCcnToCenProps {
    /**
     * @Property ccnInstanceId: The ID of the CCN instance.
     */
    readonly ccnInstanceId: string;
    /**
     * @Property cenInstanceId: The ID of the CEN instance.
     */
    readonly cenInstanceId: string;
    /**
     * @Property cenUid: The ID of the account to which the CEN instance belongs.
     */
    readonly cenUid: string;
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
    readonly attrCcnInstanceId: any;
    /**
     * @Attribute CenInstanceId: The ID of the CEN instance.
     */
    readonly attrCenInstanceId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ccnInstanceId: The ID of the CCN instance.
     */
    ccnInstanceId: string;
    /**
     * @Property cenInstanceId: The ID of the CEN instance.
     */
    cenInstanceId: string;
    /**
     * @Property cenUid: The ID of the account to which the CEN instance belongs.
     */
    cenUid: string;
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
 * Properties for defining a `ALIYUN::SAG::SmartAccessGatewayBinding`
 */
export interface RosSmartAccessGatewayBindingProps {
    /**
     * @Property ccnId: The ID of the CCN instance to bind.
     */
    readonly ccnId: string;
    /**
     * @Property smartAgId: The ID of the Smart Access Gateway instance.
     */
    readonly smartAgId: string;
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
    readonly attrSmartAgId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ccnId: The ID of the CCN instance to bind.
     */
    ccnId: string;
    /**
     * @Property smartAgId: The ID of the Smart Access Gateway instance.
     */
    smartAgId: string;
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
