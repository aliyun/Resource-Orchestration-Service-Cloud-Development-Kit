import * as ros from '@alicloud/ros-cdk-core';
import { RosRepoSyncRule } from './cr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRepoSyncRule as RepoSyncRuleProperty };

/**
 * Properties for defining a `RepoSyncRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
 */
export interface RepoSyncRuleProps {

    /**
     * Property instanceId: The ID of the CR instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property namespaceName: The name of the CR namespace.
     */
    readonly namespaceName: string | ros.IResolvable;

    /**
     * Property syncRuleName: The name of the image sync rule.
     */
    readonly syncRuleName: string | ros.IResolvable;

    /**
     * Property syncScope: The synchronization scope. Valid values: REPO, NAMESPACE
     */
    readonly syncScope: string | ros.IResolvable;

    /**
     * Property syncTrigger: The mode of triggering the synchronization rule. Valid values: INITIATIVE, PASSIVE
     */
    readonly syncTrigger: string | ros.IResolvable;

    /**
     * Property targetInstanceId: The ID of the destination instance.
     */
    readonly targetInstanceId: string | ros.IResolvable;

    /**
     * Property targetNamespaceName: The name of the destination namespace.
     */
    readonly targetNamespaceName: string | ros.IResolvable;

    /**
     * Property targetRegionId: The ID of the destination region.
     */
    readonly targetRegionId: string | ros.IResolvable;

    /**
     * Property repoName: The name of the repository. This parameter is required when SyncScope is REPO.
     */
    readonly repoName?: string | ros.IResolvable;

    /**
     * Property repoNameFilter: The regular expression that is used to filter repositories.
     */
    readonly repoNameFilter?: string | ros.IResolvable;

    /**
     * Property tagFilter: The tag filter. Default value: .*
     */
    readonly tagFilter?: string | ros.IResolvable;

    /**
     * Property targetRepoName: The name of the destination image repository. This parameter is optional.
     */
    readonly targetRepoName?: string | ros.IResolvable;

    /**
     * Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.
     */
    readonly targetUserId?: string | ros.IResolvable;
}

/**
 * Represents a `RepoSyncRule`.
 */
export interface IRepoSyncRule extends ros.IResource {
    readonly props: RepoSyncRuleProps;

    /**
     * Attribute SyncRuleId: The ID of the synchronization rule.
     */
    readonly attrSyncRuleId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CR::RepoSyncRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRepoSyncRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
 */
export class RepoSyncRule extends ros.Resource implements IRepoSyncRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RepoSyncRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SyncRuleId: The ID of the synchronization rule.
     */
    public readonly attrSyncRuleId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RepoSyncRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRepoSyncRule = new RosRepoSyncRule(this, id,  {
            syncScope: props.syncScope,
            instanceId: props.instanceId,
            tagFilter: props.tagFilter,
            repoName: props.repoName,
            targetInstanceId: props.targetInstanceId,
            syncRuleName: props.syncRuleName,
            namespaceName: props.namespaceName,
            targetRepoName: props.targetRepoName,
            syncTrigger: props.syncTrigger,
            repoNameFilter: props.repoNameFilter,
            targetRegionId: props.targetRegionId,
            targetNamespaceName: props.targetNamespaceName,
            targetUserId: props.targetUserId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRepoSyncRule;
        this.attrSyncRuleId = rosRepoSyncRule.attrSyncRuleId;
    }
}
