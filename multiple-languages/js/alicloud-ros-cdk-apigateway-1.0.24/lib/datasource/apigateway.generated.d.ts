import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosApis`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis
 */
export interface RosApisProps {
    /**
     * @Property apiId: ID of the specified API.
     */
    readonly apiId?: string | ros.IResolvable;
    /**
     * @Property apiName: API name (fuzzy matching).
     */
    readonly apiName?: string | ros.IResolvable;
    /**
     * @Property catalogId: Catalog number.
     */
    readonly catalogId?: string | ros.IResolvable;
    /**
     * @Property enableTagAuth: Enable label validation.
     */
    readonly enableTagAuth?: boolean | ros.IResolvable;
    /**
     * @Property groupId: ID of the specified group.
     */
    readonly groupId?: string | ros.IResolvable;
    /**
     * @Property visibility: Whether the API is public.
     */
    readonly visibility?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ApiGateway::Apis`, which is used to query APIs in API Gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `Apis` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis
 */
export declare class RosApis extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Apis";
    /**
     * @Attribute ApiIds: The list of The ApiGateway api ids.
     */
    readonly attrApiIds: ros.IResolvable;
    /**
     * @Attribute Apis: The information about ApiGateway apis.
     */
    readonly attrApis: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property apiId: ID of the specified API.
     */
    apiId: string | ros.IResolvable | undefined;
    /**
     * @Property apiName: API name (fuzzy matching).
     */
    apiName: string | ros.IResolvable | undefined;
    /**
     * @Property catalogId: Catalog number.
     */
    catalogId: string | ros.IResolvable | undefined;
    /**
     * @Property enableTagAuth: Enable label validation.
     */
    enableTagAuth: boolean | ros.IResolvable | undefined;
    /**
     * @Property groupId: ID of the specified group.
     */
    groupId: string | ros.IResolvable | undefined;
    /**
     * @Property visibility: Whether the API is public.
     */
    visibility: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApisProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosApps`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps
 */
export interface RosAppsProps {
    /**
     * @Property appId: Unique ID of the app.
     */
    readonly appId?: string | ros.IResolvable;
    /**
     * @Property appOwner: Alibaba Cloud account ID of the app owner.
     */
    readonly appOwner?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ApiGateway::Apps`, which is used to query applications.
 * @Note This class does not contain additional functions, so it is recommended to use the `Apps` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps
 */
export declare class RosApps extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Apps";
    /**
     * @Attribute AppIds: The list of The ApiGateway app ids.
     */
    readonly attrAppIds: ros.IResolvable;
    /**
     * @Attribute Apps: The information about ApiGateway apps.
     */
    readonly attrApps: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appId: Unique ID of the app.
     */
    appId: string | ros.IResolvable | undefined;
    /**
     * @Property appOwner: Alibaba Cloud account ID of the app owner.
     */
    appOwner: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups
 */
export interface RosGroupsProps {
    /**
     * @Property groupId: API group ID.
     */
    readonly groupId?: string | ros.IResolvable;
    /**
     * @Property groupName: Specified keyword of the API group name.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property instanceId: API Gateway Instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property sort: Sort.
     */
    readonly sort?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ApiGateway::Groups`, which is used to query the details of existing API groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `Groups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups
 */
export declare class RosGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Groups";
    /**
     * @Attribute ApiGroupIds: The list of The ApiGateway group ids.
     */
    readonly attrApiGroupIds: ros.IResolvable;
    /**
     * @Attribute ApiGroups: The information about ApiGateway groups.
     */
    readonly attrApiGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupId: API group ID.
     */
    groupId: string | ros.IResolvable | undefined;
    /**
     * @Property groupName: Specified keyword of the API group name.
     */
    groupName: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: API Gateway Instance ID.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property sort: Sort.
     */
    sort: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instance
 */
export interface RosInstanceProps {
    /**
     * @Property instanceId: Instance id.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ApiGateway::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Instance";
    /**
     * @Attribute AclId: Access control ID.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * @Attribute AclName: Access control name.
     */
    readonly attrAclName: ros.IResolvable;
    /**
     * @Attribute AclStatus: Access control type.
     */
    readonly attrAclStatus: ros.IResolvable;
    /**
     * @Attribute AclType: Access control type.
     */
    readonly attrAclType: ros.IResolvable;
    /**
     * @Attribute ClassicEgressAddress: Classic network exit address.
     */
    readonly attrClassicEgressAddress: ros.IResolvable;
    /**
     * @Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute EgressIpv6Enable: Does IPV6 Capability Support.
     */
    readonly attrEgressIpv6Enable: ros.IResolvable;
    /**
     * @Attribute ExpiredTime: Instance expiration time.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * @Attribute HttpsPolicy: Https policy.
     */
    readonly attrHttpsPolicy: ros.IResolvable;
    /**
     * @Attribute InstanceId: Instance id.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: Instance name.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute InstanceRpsLimit: Instance rps limits.
     */
    readonly attrInstanceRpsLimit: ros.IResolvable;
    /**
     * @Attribute InstanceSpec: Instance type.
     */
    readonly attrInstanceSpec: ros.IResolvable;
    /**
     * @Attribute InstanceSpecAttributes: Instance type.
     */
    readonly attrInstanceSpecAttributes: ros.IResolvable;
    /**
     * @Attribute InstanceType: Instance type.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * @Attribute InternetEgressAddress: Public network exit address.
     */
    readonly attrInternetEgressAddress: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute SupportIpv6: Does ipv6 support.
     */
    readonly attrSupportIpv6: ros.IResolvable;
    /**
     * @Attribute UserVpcId: User's VpcID.
     */
    readonly attrUserVpcId: ros.IResolvable;
    /**
     * @Attribute UserVswitchId: DescribeInstances.
     */
    readonly attrUserVswitchId: ros.IResolvable;
    /**
     * @Attribute VipTypeList: Vip type.
     */
    readonly attrVipTypeList: ros.IResolvable;
    /**
     * @Attribute VpcEgressAddress: Intranet VPC exit network segment.
     */
    readonly attrVpcEgressAddress: ros.IResolvable;
    /**
     * @Attribute VpcIntranetEnable: Whether Vpc allows authorization.
     */
    readonly attrVpcIntranetEnable: ros.IResolvable;
    /**
     * @Attribute VpcOwnerId: Vpc licensor ID.
     */
    readonly attrVpcOwnerId: ros.IResolvable;
    /**
     * @Attribute VpcSlbIntranetEnable: Whether the slb of the Vpc supports.
     */
    readonly attrVpcSlbIntranetEnable: ros.IResolvable;
    /**
     * @Attribute ZoneId: Zone.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * @Attribute ZoneLocalName: Available area.
     */
    readonly attrZoneLocalName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Instance id.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instances
 */
export interface RosInstancesProps {
    /**
     * @Property instanceId: API Gateway Instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property language: Language Type.
     */
    readonly language?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ApiGateway::Instances`, which is used to query instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instances
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Instances";
    /**
     * @Attribute ApiGatewayInstanceIds: The list of The ApiGateway group ids.
     */
    readonly attrApiGatewayInstanceIds: ros.IResolvable;
    /**
     * @Attribute ApiGatewayInstances: The information about ApiGateway groups.
     */
    readonly attrApiGatewayInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: API Gateway Instance ID.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property language: Language Type.
     */
    language: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
