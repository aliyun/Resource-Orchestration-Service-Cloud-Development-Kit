import * as ros from '@alicloud/ros-cdk-core';
import { RosRepository } from './cr.generated';
export { RosRepository as RepositoryProperty };
/**
 * Properties for defining a `ALIYUN::CR::Repository`
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
 * A ROS resource type:  `ALIYUN::CR::Repository`
 */
export declare class Repository extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute RepoId: The repository ID.
     */
    readonly attrRepoId: ros.IResolvable;
    /**
     * Attribute RepoName: The name of the repository.
     */
    readonly attrRepoName: ros.IResolvable;
    /**
     * Attribute RepoNamespace: The name of the namespace to which the repository belongs.
     */
    readonly attrRepoNamespace: ros.IResolvable;
    /**
     * Attribute RepoType: The type of the repository.
     */
    readonly attrRepoType: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CR::Repository`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RepositoryProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=repository.d.ts.map