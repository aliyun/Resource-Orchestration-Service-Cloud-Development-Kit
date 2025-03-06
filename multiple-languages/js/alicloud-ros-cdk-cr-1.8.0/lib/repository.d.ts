import * as ros from '@alicloud/ros-cdk-core';
import { RosRepository } from './cr.generated';
export { RosRepository as RepositoryProperty };
/**
 * Properties for defining a `Repository`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
 */
export interface RepositoryProps {
    /**
     * Property repoName: The name of the repository.
     */
    readonly repoName: string | ros.IResolvable;
    /**
     * Property repoNamespace: The name of the namespace to which the repository belongs.
     */
    readonly repoNamespace: string | ros.IResolvable;
    /**
     * Property repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
     */
    readonly repoType: string | ros.IResolvable;
    /**
     * Property summary: The summary of the repository.
     */
    readonly summary: string | ros.IResolvable;
    /**
     * Property detail: The description of the repository.
     */
    readonly detail?: string | ros.IResolvable;
    /**
     * Property instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property repoSource: Code Source message.
     */
    readonly repoSource?: RosRepository.RepoSourceProperty | ros.IResolvable;
    /**
     * Property tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
     */
    readonly tagImmutability?: boolean | ros.IResolvable;
}
/**
 * Represents a `Repository`.
 */
export interface IRepository extends ros.IResource {
    readonly props: RepositoryProps;
    /**
     * Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute RepoId: The repository ID.
     */
    readonly attrRepoId: ros.IResolvable | string;
    /**
     * Attribute RepoName: The name of the repository.
     */
    readonly attrRepoName: ros.IResolvable | string;
    /**
     * Attribute RepoNamespace: The name of the namespace to which the repository belongs.
     */
    readonly attrRepoNamespace: ros.IResolvable | string;
    /**
     * Attribute RepoType: The type of the repository.
     */
    readonly attrRepoType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CR::Repository`, which is used to create an image repository.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRepository`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
 */
export declare class Repository extends ros.Resource implements IRepository {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RepositoryProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute RepoId: The repository ID.
     */
    readonly attrRepoId: ros.IResolvable | string;
    /**
     * Attribute RepoName: The name of the repository.
     */
    readonly attrRepoName: ros.IResolvable | string;
    /**
     * Attribute RepoNamespace: The name of the namespace to which the repository belongs.
     */
    readonly attrRepoNamespace: ros.IResolvable | string;
    /**
     * Attribute RepoType: The type of the repository.
     */
    readonly attrRepoType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RepositoryProps, enableResourcePropertyConstraint?: boolean);
}
