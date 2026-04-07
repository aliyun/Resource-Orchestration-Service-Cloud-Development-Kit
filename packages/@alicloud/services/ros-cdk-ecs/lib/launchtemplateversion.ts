import * as ros from '@alicloud/ros-cdk-core';
import { RosLaunchTemplateVersion } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLaunchTemplateVersion as LaunchTemplateVersionProperty };

/**
 * Properties for defining a `LaunchTemplateVersion`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplateversion
 */
export interface LaunchTemplateVersionProps {

    /**
     * Property launchTemplateData: The configurations of the launch template.
     */
    readonly launchTemplateData?: RosLaunchTemplateVersion.LaunchTemplateDataProperty | ros.IResolvable;

    /**
     * Property launchTemplateId: The ID of the launch template. You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.
     */
    readonly launchTemplateId?: string | ros.IResolvable;

    /**
     * Property launchTemplateName: The name of the launch template. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly launchTemplateName?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which to assign the instance.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property versionDescription: The description of the launch template version. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly versionDescription?: string | ros.IResolvable;
}

/**
 * Represents a `LaunchTemplateVersion`.
 */
export interface ILaunchTemplateVersion extends ros.IResource {
    readonly props: LaunchTemplateVersionProps;

    /**
     * Attribute CreateTime: The time when the launch template version was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreatedBy: The ID of the Alibaba Cloud account that created the launch template.
     */
    readonly attrCreatedBy: ros.IResolvable | string;

    /**
     * Attribute DefaultVersion: Indicates whether the launch template version is the default version.
     */
    readonly attrDefaultVersion: ros.IResolvable | string;

    /**
     * Attribute LaunchTemplateData: The configurations of the launch template.
     */
    readonly attrLaunchTemplateData: ros.IResolvable | string;

    /**
     * Attribute LaunchTemplateId: The ID of the launch template.
     */
    readonly attrLaunchTemplateId: ros.IResolvable | string;

    /**
     * Attribute LaunchTemplateName: The name of the launch template.
     */
    readonly attrLaunchTemplateName: ros.IResolvable | string;

    /**
     * Attribute ModifiedTime: The time when the launch template version was modified.
     */
    readonly attrModifiedTime: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which to assign the instance.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute VersionDescription: The description of the launch template version.
     */
    readonly attrVersionDescription: ros.IResolvable | string;

    /**
     * Attribute VersionNumber: The number of the created version of the launch template.
     */
    readonly attrVersionNumber: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::LaunchTemplateVersion`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLaunchTemplateVersion`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplateversion
 */
export class LaunchTemplateVersion extends ros.Resource implements ILaunchTemplateVersion {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: LaunchTemplateVersionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time when the launch template version was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreatedBy: The ID of the Alibaba Cloud account that created the launch template.
     */
    public readonly attrCreatedBy: ros.IResolvable | string;

    /**
     * Attribute DefaultVersion: Indicates whether the launch template version is the default version.
     */
    public readonly attrDefaultVersion: ros.IResolvable | string;

    /**
     * Attribute LaunchTemplateData: The configurations of the launch template.
     */
    public readonly attrLaunchTemplateData: ros.IResolvable | string;

    /**
     * Attribute LaunchTemplateId: The ID of the launch template.
     */
    public readonly attrLaunchTemplateId: ros.IResolvable | string;

    /**
     * Attribute LaunchTemplateName: The name of the launch template.
     */
    public readonly attrLaunchTemplateName: ros.IResolvable | string;

    /**
     * Attribute ModifiedTime: The time when the launch template version was modified.
     */
    public readonly attrModifiedTime: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which to assign the instance.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute VersionDescription: The description of the launch template version.
     */
    public readonly attrVersionDescription: ros.IResolvable | string;

    /**
     * Attribute VersionNumber: The number of the created version of the launch template.
     */
    public readonly attrVersionNumber: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LaunchTemplateVersionProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosLaunchTemplateVersion = new RosLaunchTemplateVersion(this, id,  {
            launchTemplateName: props.launchTemplateName,
            launchTemplateData: props.launchTemplateData,
            versionDescription: props.versionDescription,
            resourceGroupId: props.resourceGroupId,
            launchTemplateId: props.launchTemplateId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLaunchTemplateVersion;
        this.attrCreateTime = rosLaunchTemplateVersion.attrCreateTime;
        this.attrCreatedBy = rosLaunchTemplateVersion.attrCreatedBy;
        this.attrDefaultVersion = rosLaunchTemplateVersion.attrDefaultVersion;
        this.attrLaunchTemplateData = rosLaunchTemplateVersion.attrLaunchTemplateData;
        this.attrLaunchTemplateId = rosLaunchTemplateVersion.attrLaunchTemplateId;
        this.attrLaunchTemplateName = rosLaunchTemplateVersion.attrLaunchTemplateName;
        this.attrModifiedTime = rosLaunchTemplateVersion.attrModifiedTime;
        this.attrResourceGroupId = rosLaunchTemplateVersion.attrResourceGroupId;
        this.attrVersionDescription = rosLaunchTemplateVersion.attrVersionDescription;
        this.attrVersionNumber = rosLaunchTemplateVersion.attrVersionNumber;
    }
}
