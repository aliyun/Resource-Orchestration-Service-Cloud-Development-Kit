import * as ros from '@alicloud/ros-cdk-core';
import { RosLaunchTemplates } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property templateResourceGroupId: The ID of the enterprise resource group to which the template is launched.
     */
    readonly templateResourceGroupId?: string | ros.IResolvable;
}

/**
 * Represents a `LaunchTemplates`.
 */
export interface ILaunchTemplates extends ros.IResource {
    readonly props: LaunchTemplatesProps;

    /**
     * Attribute LaunchTemplateIds: The list of launch template IDs.
     */
    readonly attrLaunchTemplateIds: ros.IResolvable | string;

    /**
     * Attribute LaunchTemplates: The list of launch templates.
     */
    readonly attrLaunchTemplates: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::LaunchTemplates`, which is used to query launch templates.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLaunchTemplates`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplates
 */
export class LaunchTemplates extends ros.Resource implements ILaunchTemplates {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: LaunchTemplatesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute LaunchTemplateIds: The list of launch template IDs.
     */
    public readonly attrLaunchTemplateIds: ros.IResolvable | string;

    /**
     * Attribute LaunchTemplates: The list of launch templates.
     */
    public readonly attrLaunchTemplates: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LaunchTemplatesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosLaunchTemplates = new RosLaunchTemplates(this, id,  {
            launchTemplateName: props.launchTemplateName,
            launchTemplateId: props.launchTemplateId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            templateResourceGroupId: props.templateResourceGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLaunchTemplates;
        this.attrLaunchTemplateIds = rosLaunchTemplates.attrLaunchTemplateIds;
        this.attrLaunchTemplates = rosLaunchTemplates.attrLaunchTemplates;
    }
}
