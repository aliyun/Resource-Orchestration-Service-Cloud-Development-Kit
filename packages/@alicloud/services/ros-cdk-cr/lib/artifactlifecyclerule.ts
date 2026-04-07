import * as ros from '@alicloud/ros-cdk-core';
import { RosArtifactLifecycleRule } from './cr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosArtifactLifecycleRule as ArtifactLifecycleRuleProperty };

/**
 * Properties for defining a `ArtifactLifecycleRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule
 */
export interface ArtifactLifecycleRuleProps {

    /**
     * Property auto: Specify whether to automatically execute the lifecycle management rule.
     */
    readonly auto: boolean | ros.IResolvable;

    /**
     * Property instanceId: ACR Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property namespaceName: The name of the namespace.
     */
    readonly namespaceName?: string | ros.IResolvable;

    /**
     * Property repoName: The name of the image repository.
     */
    readonly repoName?: string | ros.IResolvable;

    /**
     * Property retentionTagCount: The number of images that you want to retain.
     */
    readonly retentionTagCount?: number | ros.IResolvable;

    /**
     * Property scheduleTime: The execution cycle of the lifecycle management rule.
     */
    readonly scheduleTime?: string | ros.IResolvable;

    /**
     * Property scope: The deletion scope.
     */
    readonly scope?: string | ros.IResolvable;

    /**
     * Property tagRegexp: The regular expression that is used to indicate which image tags are retained.
     */
    readonly tagRegexp?: string | ros.IResolvable;
}

/**
 * Represents a `ArtifactLifecycleRule`.
 */
export interface IArtifactLifecycleRule extends ros.IResource {
    readonly props: ArtifactLifecycleRuleProps;

    /**
     * Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.
     */
    readonly attrArtifactLifecycleRuleId: ros.IResolvable | string;

    /**
     * Attribute Auto: Specify whether to automatically execute the lifecycle management rule.
     */
    readonly attrAuto: ros.IResolvable | string;

    /**
     * Attribute CreateTime: Creation time of the lifecycle management rule.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: ACR Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute ModifiedTime: Change time of the lifecycle management rule.
     */
    readonly attrModifiedTime: ros.IResolvable | string;

    /**
     * Attribute NamespaceName: The name of the namespace.
     */
    readonly attrNamespaceName: ros.IResolvable | string;

    /**
     * Attribute RepoName: The name of the image repository.
     */
    readonly attrRepoName: ros.IResolvable | string;

    /**
     * Attribute RetentionTagCount: The number of images that you want to retain.
     */
    readonly attrRetentionTagCount: ros.IResolvable | string;

    /**
     * Attribute ScheduleTime: The execution cycle of the lifecycle management rule.
     */
    readonly attrScheduleTime: ros.IResolvable | string;

    /**
     * Attribute Scope: The deletion scope.
     */
    readonly attrScope: ros.IResolvable | string;

    /**
     * Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.
     */
    readonly attrTagRegexp: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CR::ArtifactLifecycleRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosArtifactLifecycleRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule
 */
export class ArtifactLifecycleRule extends ros.Resource implements IArtifactLifecycleRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ArtifactLifecycleRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.
     */
    public readonly attrArtifactLifecycleRuleId: ros.IResolvable | string;

    /**
     * Attribute Auto: Specify whether to automatically execute the lifecycle management rule.
     */
    public readonly attrAuto: ros.IResolvable | string;

    /**
     * Attribute CreateTime: Creation time of the lifecycle management rule.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: ACR Instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute ModifiedTime: Change time of the lifecycle management rule.
     */
    public readonly attrModifiedTime: ros.IResolvable | string;

    /**
     * Attribute NamespaceName: The name of the namespace.
     */
    public readonly attrNamespaceName: ros.IResolvable | string;

    /**
     * Attribute RepoName: The name of the image repository.
     */
    public readonly attrRepoName: ros.IResolvable | string;

    /**
     * Attribute RetentionTagCount: The number of images that you want to retain.
     */
    public readonly attrRetentionTagCount: ros.IResolvable | string;

    /**
     * Attribute ScheduleTime: The execution cycle of the lifecycle management rule.
     */
    public readonly attrScheduleTime: ros.IResolvable | string;

    /**
     * Attribute Scope: The deletion scope.
     */
    public readonly attrScope: ros.IResolvable | string;

    /**
     * Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.
     */
    public readonly attrTagRegexp: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ArtifactLifecycleRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosArtifactLifecycleRule = new RosArtifactLifecycleRule(this, id,  {
            auto: props.auto,
            namespaceName: props.namespaceName,
            retentionTagCount: props.retentionTagCount,
            scheduleTime: props.scheduleTime,
            scope: props.scope,
            instanceId: props.instanceId,
            tagRegexp: props.tagRegexp,
            repoName: props.repoName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosArtifactLifecycleRule;
        this.attrArtifactLifecycleRuleId = rosArtifactLifecycleRule.attrArtifactLifecycleRuleId;
        this.attrAuto = rosArtifactLifecycleRule.attrAuto;
        this.attrCreateTime = rosArtifactLifecycleRule.attrCreateTime;
        this.attrInstanceId = rosArtifactLifecycleRule.attrInstanceId;
        this.attrModifiedTime = rosArtifactLifecycleRule.attrModifiedTime;
        this.attrNamespaceName = rosArtifactLifecycleRule.attrNamespaceName;
        this.attrRepoName = rosArtifactLifecycleRule.attrRepoName;
        this.attrRetentionTagCount = rosArtifactLifecycleRule.attrRetentionTagCount;
        this.attrScheduleTime = rosArtifactLifecycleRule.attrScheduleTime;
        this.attrScope = rosArtifactLifecycleRule.attrScope;
        this.attrTagRegexp = rosArtifactLifecycleRule.attrTagRegexp;
    }
}
