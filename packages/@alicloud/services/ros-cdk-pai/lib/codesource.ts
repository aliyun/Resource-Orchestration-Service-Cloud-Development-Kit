import * as ros from '@alicloud/ros-cdk-core';
import { RosCodeSource } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCodeSource as CodeSourceProperty };

/**
 * Properties for defining a `CodeSource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
 */
export interface CodeSourceProps {

    /**
     * Property accessibility: Visibility of the code configuration, possible values:
     * - PRIVATE: In this workspace, it is only visible to you and the administrator.
     * - PUBLIC: In this workspace, it is visible to everyone.
     */
    readonly accessibility: string | ros.IResolvable;

    /**
     * Property codeRepo: Code repository address.
     */
    readonly codeRepo: string | ros.IResolvable;

    /**
     * Property displayName: Code source configuration name.
     */
    readonly displayName: string | ros.IResolvable;

    /**
     * Property mountPath: The local Mount Directory of the code.
     */
    readonly mountPath: string | ros.IResolvable;

    /**
     * Property workspaceId: The ID of the workspace.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * Property codeBranch: Code repository branch.
     */
    readonly codeBranch?: string | ros.IResolvable;

    /**
     * Property codeCommit: The code CommitId.
     */
    readonly codeCommit?: string | ros.IResolvable;

    /**
     * Property codeRepoAccessToken: The Token used to access the code repository.
     */
    readonly codeRepoAccessToken?: string | ros.IResolvable;

    /**
     * Property codeRepoUserName: The user name of the code repository.
     */
    readonly codeRepoUserName?: string | ros.IResolvable;

    /**
     * Property description: A detailed description of the code configuration.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::CodeSource`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCodeSource`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
 */
export class CodeSource extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CodeSourceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Accessibility: Visibility of the code configuration.
     */
    public readonly attrAccessibility: ros.IResolvable;

    /**
     * Attribute CodeBranch: Code repository branch.
     */
    public readonly attrCodeBranch: ros.IResolvable;

    /**
     * Attribute CodeCommit: The code CommitId.
     */
    public readonly attrCodeCommit: ros.IResolvable;

    /**
     * Attribute CodeRepo: Code repository address.
     */
    public readonly attrCodeRepo: ros.IResolvable;

    /**
     * Attribute CodeRepoAccessToken: The Token used to access the code repository.
     */
    public readonly attrCodeRepoAccessToken: ros.IResolvable;

    /**
     * Attribute CodeRepoUserName: The user name of the code repository.
     */
    public readonly attrCodeRepoUserName: ros.IResolvable;

    /**
     * Attribute CodeSourcesId: The ID of the created code configuration.
     */
    public readonly attrCodeSourcesId: ros.IResolvable;

    /**
     * Attribute CreateTime: The creation time of the code.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: A detailed description of the code configuration.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute DisplayName: Code source configuration name.
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * Attribute GmtModifyTime: Code configuration modification time. The time format is iso8601.
     */
    public readonly attrGmtModifyTime: ros.IResolvable;

    /**
     * Attribute MountPath: The local Mount Directory of the code.
     */
    public readonly attrMountPath: ros.IResolvable;

    /**
     * Attribute UserId: The ID of the creator of the code configuration source.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CodeSourceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCodeSource = new RosCodeSource(this, id,  {
            mountPath: props.mountPath,
            codeRepo: props.codeRepo,
            description: props.description,
            codeRepoAccessToken: props.codeRepoAccessToken,
            accessibility: props.accessibility,
            codeCommit: props.codeCommit,
            displayName: props.displayName,
            workspaceId: props.workspaceId,
            codeBranch: props.codeBranch,
            codeRepoUserName: props.codeRepoUserName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCodeSource;
        this.attrAccessibility = rosCodeSource.attrAccessibility;
        this.attrCodeBranch = rosCodeSource.attrCodeBranch;
        this.attrCodeCommit = rosCodeSource.attrCodeCommit;
        this.attrCodeRepo = rosCodeSource.attrCodeRepo;
        this.attrCodeRepoAccessToken = rosCodeSource.attrCodeRepoAccessToken;
        this.attrCodeRepoUserName = rosCodeSource.attrCodeRepoUserName;
        this.attrCodeSourcesId = rosCodeSource.attrCodeSourcesId;
        this.attrCreateTime = rosCodeSource.attrCreateTime;
        this.attrDescription = rosCodeSource.attrDescription;
        this.attrDisplayName = rosCodeSource.attrDisplayName;
        this.attrGmtModifyTime = rosCodeSource.attrGmtModifyTime;
        this.attrMountPath = rosCodeSource.attrMountPath;
        this.attrUserId = rosCodeSource.attrUserId;
        this.attrWorkspaceId = rosCodeSource.attrWorkspaceId;
    }
}
