import * as ros from '@alicloud/ros-cdk-core';
import { RosRepositories } from './cr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRepositories as RepositoriesProperty };

/**
 * Properties for defining a `Repositories`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-repositories
 */
export interface RepositoriesProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property repoNamespace: The namespace of repository.
     */
    readonly repoNamespace?: string | ros.IResolvable;

    /**
     * Property status: The status of repository.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Represents a `Repositories`.
 */
export interface IRepositories extends ros.IResource {
    readonly props: RepositoriesProps;

    /**
     * Attribute RepoNames: The list of repository names.
     */
    readonly attrRepoNames: ros.IResolvable | string;

    /**
     * Attribute Repos: The list of repositories.
     */
    readonly attrRepos: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CR::Repositories`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRepositories`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-repositories
 */
export class Repositories extends ros.Resource implements IRepositories {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RepositoriesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RepoNames: The list of repository names.
     */
    public readonly attrRepoNames: ros.IResolvable | string;

    /**
     * Attribute Repos: The list of repositories.
     */
    public readonly attrRepos: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RepositoriesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRepositories = new RosRepositories(this, id,  {
            status: props.status,
            repoNamespace: props.repoNamespace,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRepositories;
        this.attrRepoNames = rosRepositories.attrRepoNames;
        this.attrRepos = rosRepositories.attrRepos;
    }
}
