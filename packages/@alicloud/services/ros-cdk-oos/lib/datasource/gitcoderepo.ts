import * as ros from '@alicloud/ros-cdk-core';
import { RosGitCodeRepo } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGitCodeRepo as GitCodeRepoProperty };

/**
 * Properties for defining a `GitCodeRepo`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-gitcoderepo
 */
export interface GitCodeRepoProps {

    /**
     * Property owner: Git account.
     */
    readonly owner: string | ros.IResolvable;

    /**
     * Property platform: Git platform.
     */
    readonly platform: string | ros.IResolvable;

    /**
     * Property repository: Git repository.
     */
    readonly repository: string | ros.IResolvable;

    /**
     * Property commitId: Git commit id.
     */
    readonly commitId?: string | ros.IResolvable;

    /**
     * Property organization: Git organization.
     */
    readonly organization?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::GitCodeRepo`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGitCodeRepo`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-gitcoderepo
 */
export class GitCodeRepo extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: GitCodeRepoProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AuthorizedUrl: Authorized url.
     */
    public readonly attrAuthorizedUrl: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GitCodeRepoProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGitCodeRepo = new RosGitCodeRepo(this, id,  {
            repository: props.repository,
            owner: props.owner,
            organization: props.organization,
            platform: props.platform,
            commitId: props.commitId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGitCodeRepo;
        this.attrAuthorizedUrl = rosGitCodeRepo.attrAuthorizedUrl;
    }
}
