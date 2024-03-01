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
     * Property repoNamespace: The namespace of repository.
     */
    readonly repoNamespace?: string | ros.IResolvable;

    /**
     * Property status: The status of repository.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CR::Repositories`, which is used to query the details of repositories.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRepositories`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-repositories
 */
export class Repositories extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RepositoriesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RepoNames: The list of repository names.
     */
    public readonly attrRepoNames: ros.IResolvable;

    /**
     * Attribute Repos: The list of repositories.
     */
    public readonly attrRepos: ros.IResolvable;

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
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRepositories;
        this.attrRepoNames = rosRepositories.attrRepoNames;
        this.attrRepos = rosRepositories.attrRepos;
    }
}
