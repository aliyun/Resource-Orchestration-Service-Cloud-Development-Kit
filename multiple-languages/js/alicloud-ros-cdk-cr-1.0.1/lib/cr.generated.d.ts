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
     * @Property namespace: domain name
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * @Property autoCreate: whether auto create repository
     */
    readonly autoCreate?: boolean | ros.IResolvable;
    /**
     * @Property defaultVisibility: repository default visibility, public or private
     */
    readonly defaultVisibility?: string | ros.IResolvable;
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
     * @Attribute NamespaceId: The namespace id
     */
    readonly attrNamespaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property namespace: domain name
     */
    namespace: string | ros.IResolvable;
    /**
     * @Property autoCreate: whether auto create repository
     */
    autoCreate: boolean | ros.IResolvable | undefined;
    /**
     * @Property defaultVisibility: repository default visibility, public or private
     */
    defaultVisibility: string | ros.IResolvable | undefined;
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
     * @Property repoName: the name of the repo
     */
    readonly repoName: string | ros.IResolvable;
    /**
     * @Property repoNamespace: the namespace the repo belongs to
     */
    readonly repoNamespace: string | ros.IResolvable;
    /**
     * @Property repoType: repository visibility, public or private
     */
    readonly repoType: string | ros.IResolvable;
    /**
     * @Property summary: description or something alike
     */
    readonly summary: string | ros.IResolvable;
    /**
     * @Property detail: detailed configuration in markdown format
     */
    readonly detail?: string | ros.IResolvable;
    /**
     * @Property repoSource: Code Source message.
     */
    readonly repoSource?: RosRepository.RepoSourceProperty | ros.IResolvable;
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
     * @Attribute RepoId: The repo id
     */
    readonly attrRepoId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property repoName: the name of the repo
     */
    repoName: string | ros.IResolvable;
    /**
     * @Property repoNamespace: the namespace the repo belongs to
     */
    repoNamespace: string | ros.IResolvable;
    /**
     * @Property repoType: repository visibility, public or private
     */
    repoType: string | ros.IResolvable;
    /**
     * @Property summary: description or something alike
     */
    summary: string | ros.IResolvable;
    /**
     * @Property detail: detailed configuration in markdown format
     */
    detail: string | ros.IResolvable | undefined;
    /**
     * @Property repoSource: Code Source message.
     */
    repoSource: RosRepository.RepoSourceProperty | ros.IResolvable | undefined;
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
