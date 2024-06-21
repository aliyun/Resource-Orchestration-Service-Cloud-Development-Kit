import * as ros from '@alicloud/ros-cdk-core';
import { RosLaunchTemplates } from './ecs.generated';
export { RosLaunchTemplates as LaunchTemplatesProperty };
/**
 * Properties for defining a `LaunchTemplates`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplates
 */
export interface LaunchTemplatesProps {
    /**
     * Property launchTemplateId: The ID of the launch template.
     */
    readonly launchTemplateId?: string | ros.IResolvable;
    /**
     * Property launchTemplateName: The name of the launch template.
     */
    readonly launchTemplateName?: string | ros.IResolvable;
    /**
     * Property templateResourceGroupId: The ID of the enterprise resource group to which the template is launched.
     */
    readonly templateResourceGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::LaunchTemplates`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLaunchTemplates`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplates
 */
export declare class LaunchTemplates extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: LaunchTemplatesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute LaunchTemplateIds: The list of launch template IDs.
     */
    readonly attrLaunchTemplateIds: ros.IResolvable;
    /**
     * Attribute LaunchTemplates: The list of launch templates.
     */
    readonly attrLaunchTemplates: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: LaunchTemplatesProps, enableResourcePropertyConstraint?: boolean);
}
