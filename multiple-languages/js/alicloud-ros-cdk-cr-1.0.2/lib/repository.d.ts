import * as ros from '@alicloud/ros-cdk-core';
import { RosRepository } from './cr.generated';
export { RosRepository as RepositoryProperty };
/**
 * Properties for defining a `ALIYUN::CR::Repository`
 */
export interface RepositoryProps {
    /**
     * Property repoName: the name of the repo
     */
    readonly repoName: string | ros.IResolvable;
    /**
     * Property repoNamespace: the namespace the repo belongs to
     */
    readonly repoNamespace: string | ros.IResolvable;
    /**
     * Property repoType: repository visibility, public or private
     */
    readonly repoType: string | ros.IResolvable;
    /**
     * Property summary: description or something alike
     */
    readonly summary: string | ros.IResolvable;
    /**
     * Property detail: detailed configuration in markdown format
     */
    readonly detail?: string | ros.IResolvable;
    /**
     * Property repoSource: Code Source message.
     */
    readonly repoSource?: RosRepository.RepoSourceProperty | ros.IResolvable;
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
     * Attribute RepoId: The repo id
     */
    readonly attrRepoId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CR::Repository`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RepositoryProps, enableResourcePropertyConstraint?: boolean);
}
