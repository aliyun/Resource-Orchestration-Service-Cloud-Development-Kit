import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::ApiGateway::Apis`
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
 * A ROS template type:  `DATASOURCE::ApiGateway::Apis`
 */
export declare class RosApis extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Apis";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::ApiGateway::Apis`.
     *
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
 * Properties for defining a `DATASOURCE::ApiGateway::Apps`
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
 * A ROS template type:  `DATASOURCE::ApiGateway::Apps`
 */
export declare class RosApps extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Apps";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::ApiGateway::Apps`.
     *
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
 * Properties for defining a `DATASOURCE::ApiGateway::Groups`
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
 * A ROS template type:  `DATASOURCE::ApiGateway::Groups`
 */
export declare class RosGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Groups";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::ApiGateway::Groups`.
     *
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
 * Properties for defining a `DATASOURCE::ApiGateway::Instances`
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
 * A ROS template type:  `DATASOURCE::ApiGateway::Instances`
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Instances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::ApiGateway::Instances`.
     *
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
