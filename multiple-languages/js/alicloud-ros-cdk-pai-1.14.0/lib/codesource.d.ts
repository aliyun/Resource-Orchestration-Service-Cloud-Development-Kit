import * as ros from '@alicloud/ros-cdk-core';
import { RosCodeSource } from './pai.generated';
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
 * Represents a `CodeSource`.
 */
export interface ICodeSource extends ros.IResource {
    readonly props: CodeSourceProps;
    /**
     * Attribute Accessibility: Visibility of the code configuration.
     */
    readonly attrAccessibility: ros.IResolvable | string;
    /**
     * Attribute CodeBranch: Code repository branch.
     */
    readonly attrCodeBranch: ros.IResolvable | string;
    /**
     * Attribute CodeCommit: The code CommitId.
     */
    readonly attrCodeCommit: ros.IResolvable | string;
    /**
     * Attribute CodeRepo: Code repository address.
     */
    readonly attrCodeRepo: ros.IResolvable | string;
    /**
     * Attribute CodeRepoAccessToken: The Token used to access the code repository.
     */
    readonly attrCodeRepoAccessToken: ros.IResolvable | string;
    /**
     * Attribute CodeRepoUserName: The user name of the code repository.
     */
    readonly attrCodeRepoUserName: ros.IResolvable | string;
    /**
     * Attribute CodeSourcesId: The ID of the created code configuration.
     */
    readonly attrCodeSourcesId: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the code.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: A detailed description of the code configuration.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DisplayName: Code source configuration name.
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Attribute GmtModifyTime: Code configuration modification time. The time format is iso8601.
     */
    readonly attrGmtModifyTime: ros.IResolvable | string;
    /**
     * Attribute MountPath: The local Mount Directory of the code.
     */
    readonly attrMountPath: ros.IResolvable | string;
    /**
     * Attribute UserId: The ID of the creator of the code configuration source.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::CodeSource`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCodeSource`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
 */
export declare class CodeSource extends ros.Resource implements ICodeSource {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CodeSourceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Accessibility: Visibility of the code configuration.
     */
    readonly attrAccessibility: ros.IResolvable | string;
    /**
     * Attribute CodeBranch: Code repository branch.
     */
    readonly attrCodeBranch: ros.IResolvable | string;
    /**
     * Attribute CodeCommit: The code CommitId.
     */
    readonly attrCodeCommit: ros.IResolvable | string;
    /**
     * Attribute CodeRepo: Code repository address.
     */
    readonly attrCodeRepo: ros.IResolvable | string;
    /**
     * Attribute CodeRepoAccessToken: The Token used to access the code repository.
     */
    readonly attrCodeRepoAccessToken: ros.IResolvable | string;
    /**
     * Attribute CodeRepoUserName: The user name of the code repository.
     */
    readonly attrCodeRepoUserName: ros.IResolvable | string;
    /**
     * Attribute CodeSourcesId: The ID of the created code configuration.
     */
    readonly attrCodeSourcesId: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the code.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: A detailed description of the code configuration.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DisplayName: Code source configuration name.
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Attribute GmtModifyTime: Code configuration modification time. The time format is iso8601.
     */
    readonly attrGmtModifyTime: ros.IResolvable | string;
    /**
     * Attribute MountPath: The local Mount Directory of the code.
     */
    readonly attrMountPath: ros.IResolvable | string;
    /**
     * Attribute UserId: The ID of the creator of the code configuration source.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CodeSourceProps, enableResourcePropertyConstraint?: boolean);
}
