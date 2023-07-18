import * as ros from '@alicloud/ros-cdk-core';
import { RosRepositories } from './cr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRepositories as RepositoriesProperty };

/**
 * Properties for defining a `DATASOURCE::CR::Repositories`
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
 * A ROS resource type:  `DATASOURCE::CR::Repositories`
 */
export class Repositories extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute RepoNames: The list of repository names.
     */
    public readonly attrRepoNames: ros.IResolvable;

    /**
     * Attribute Repos: The list of repositories.
     */
    public readonly attrRepos: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::CR::Repositories`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RepositoriesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosRepositories = new RosRepositories(this, id,  {
            status: props.status,
            repoNamespace: props.repoNamespace,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRepositories;
        this.attrRepoNames = rosRepositories.attrRepoNames;
        this.attrRepos = rosRepositories.attrRepos;
    }
}
