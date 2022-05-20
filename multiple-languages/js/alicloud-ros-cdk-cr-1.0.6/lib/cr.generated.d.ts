import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::CR::InstanceEndpointAclPolicy`
 */
export interface RosInstanceEndpointAclPolicyProps {
    /**
     * @Property entry: The IP address range that is allowed to access the instance.
     */
    readonly entry: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property comment: The description of the entry.
     */
    readonly comment?: string | ros.IResolvable;
    /**
     * @Property endpointType: The type of the endpoint.
     */
    readonly endpointType?: string | ros.IResolvable;
    /**
     * @Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid
     * values: Registry and Chart.
     */
    readonly moduleName?: string | ros.IResolvable;
    /**
     * @Property regionId: Region ID of instance. Default is current region.
     */
    readonly regionId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CR::InstanceEndpointAclPolicy`
 */
export declare class RosInstanceEndpointAclPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::InstanceEndpointAclPolicy";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Entry: The IP address range that is allowed to access the instance.
     */
    readonly attrEntry: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property entry: The IP address range that is allowed to access the instance.
     */
    entry: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property comment: The description of the entry.
     */
    comment: string | ros.IResolvable | undefined;
    /**
     * @Property endpointType: The type of the endpoint.
     */
    endpointType: string | ros.IResolvable | undefined;
    /**
     * @Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid
     * values: Registry and Chart.
     */
    moduleName: string | ros.IResolvable | undefined;
    /**
     * @Property regionId: Region ID of instance. Default is current region.
     */
    regionId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CR::InstanceEndpointAclPolicy`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceEndpointAclPolicyProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::CR::Namespace`
 */
export interface RosNamespaceProps {
    /**
     * @Property namespace: The name of the namespace.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * @Property autoCreate: Specifies whether to automatically create an image repository.
     */
    readonly autoCreate?: boolean | ros.IResolvable;
    /**
     * @Property defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
     */
    readonly defaultVisibility?: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CR::Namespace`
 */
export declare class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::Namespace";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InstanceId: The ID of the enterprise edition instance which namespace belongs to.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute Namespace: The namespace.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * @Attribute NamespaceId: The namespace ID.
     */
    readonly attrNamespaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property namespace: The name of the namespace.
     */
    namespace: string | ros.IResolvable;
    /**
     * @Property autoCreate: Specifies whether to automatically create an image repository.
     */
    autoCreate: boolean | ros.IResolvable | undefined;
    /**
     * @Property defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
     */
    defaultVisibility: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CR::Namespace`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::CR::Repository`
 */
export interface RosRepositoryProps {
    /**
     * @Property repoName: The name of the repository.
     */
    readonly repoName: string | ros.IResolvable;
    /**
     * @Property repoNamespace: The name of the namespace to which the repository belongs.
     */
    readonly repoNamespace: string | ros.IResolvable;
    /**
     * @Property repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
     */
    readonly repoType: string | ros.IResolvable;
    /**
     * @Property summary: The summary of the repository.
     */
    readonly summary: string | ros.IResolvable;
    /**
     * @Property detail: The description of the repository.
     */
    readonly detail?: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property repoSource: Code Source message.
     */
    readonly repoSource?: RosRepository.RepoSourceProperty | ros.IResolvable;
    /**
     * @Property tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
     */
    readonly tagImmutability?: boolean | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CR::Repository`
 */
export declare class RosRepository extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::Repository";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute RepoId: The repository ID.
     */
    readonly attrRepoId: ros.IResolvable;
    /**
     * @Attribute RepoName: The name of the repository.
     */
    readonly attrRepoName: ros.IResolvable;
    /**
     * @Attribute RepoNamespace: The name of the namespace to which the repository belongs.
     */
    readonly attrRepoNamespace: ros.IResolvable;
    /**
     * @Attribute RepoType: The type of the repository.
     */
    readonly attrRepoType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property repoName: The name of the repository.
     */
    repoName: string | ros.IResolvable;
    /**
     * @Property repoNamespace: The name of the namespace to which the repository belongs.
     */
    repoNamespace: string | ros.IResolvable;
    /**
     * @Property repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
     */
    repoType: string | ros.IResolvable;
    /**
     * @Property summary: The summary of the repository.
     */
    summary: string | ros.IResolvable;
    /**
     * @Property detail: The description of the repository.
     */
    detail: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property repoSource: Code Source message.
     */
    repoSource: RosRepository.RepoSourceProperty | ros.IResolvable | undefined;
    /**
     * @Property tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
     */
    tagImmutability: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CR::Repository`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRepositoryProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosRepository {
    /**
     * @stability external
     */
    interface RepoSourceProperty {
        /**
         * @Property isAutoBuild: Whether to enable automatic construction
         */
        readonly isAutoBuild: boolean | ros.IResolvable;
        /**
         * @Property sourceRepoName: Source code warehouse name
         */
        readonly sourceRepoName: string | ros.IResolvable;
        /**
         * @Property sourceRepoNamespace: Source code repository namespace
         */
        readonly sourceRepoNamespace: string | ros.IResolvable;
        /**
         * @Property isOversea: Whether to enable overseas construction
         */
        readonly isOversea: boolean | ros.IResolvable;
        /**
         * @Property sourceRepoType: code source type. Allow values:
     * CODE, GITHUB, GITLAB, BITBUCKET. Enterprise Edition additional support CODEUP and GITEE
         */
        readonly sourceRepoType: string | ros.IResolvable;
        /**
         * @Property isDisableCache: Whether to disable Cache at build time
         */
        readonly isDisableCache: boolean | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::CR::UserInfo`
 */
export interface RosUserInfoProps {
    /**
     * @Property user: User info. If user exists, will update user info.
     */
    readonly user: RosUserInfo.UserProperty | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CR::UserInfo`
 */
export declare class RosUserInfo extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::UserInfo";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute LoginName: Login name.
     */
    readonly attrLoginName: ros.IResolvable;
    /**
     * @Attribute UserId: User ID.
     */
    readonly attrUserId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property user: User info. If user exists, will update user info.
     */
    user: RosUserInfo.UserProperty | ros.IResolvable;
    /**
     * Create a new `ALIYUN::CR::UserInfo`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserInfoProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosUserInfo {
    /**
     * @stability external
     */
    interface UserProperty {
        /**
         * @Property password: Password.
         */
        readonly password: string | ros.IResolvable;
    }
}
//# sourceMappingURL=cr.generated.d.ts.map