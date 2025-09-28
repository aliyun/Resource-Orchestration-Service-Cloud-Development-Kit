import * as ros from '@alicloud/ros-cdk-core';
import { RosTemplate } from './oos.generated';
export { RosTemplate as TemplateProperty };
/**
 * Properties for defining a `Template`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-template
 */
export interface TemplateProps {
    /**
     * Property templateName: The name of the template.
     */
    readonly templateName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property templateVersion: The version of the template. The default value is the latest version of the template.Format: "v" + number. Value range: v1-v200.
     */
    readonly templateVersion?: string | ros.IResolvable;
}
/**
 * Represents a `Template`.
 */
export interface ITemplate extends ros.IResource {
    readonly props: TemplateProps;
    /**
     * Attribute Content: The content of the template.
     */
    readonly attrContent: ros.IResolvable | string;
    /**
     * Attribute CreatedBy: The creator of the template.
     */
    readonly attrCreatedBy: ros.IResolvable | string;
    /**
     * Attribute CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
     */
    readonly attrCreatedDate: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the template.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute HasTrigger: Specifies whether to query the template that is configured with a trigger.
     */
    readonly attrHasTrigger: ros.IResolvable | string;
    /**
     * Attribute Hash: The SHA-256 value of the template content.
     */
    readonly attrHash: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute ShareType: The share type of the template. Valid values:
Public
Private
     */
    readonly attrShareType: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TemplateFormat: The format of the template. Valid values:
JSON
YAML
     */
    readonly attrTemplateFormat: ros.IResolvable | string;
    /**
     * Attribute TemplateId: The ID of the template.
     */
    readonly attrTemplateId: ros.IResolvable | string;
    /**
     * Attribute TemplateType: The type of the template. Valid values:
Automation: the template for automated tasks.
State: the template for configuration inventories.
Package: the template for software packages.
     */
    readonly attrTemplateType: ros.IResolvable | string;
    /**
     * Attribute UpdatedBy: The user who last updated the template.
     */
    readonly attrUpdatedBy: ros.IResolvable | string;
    /**
     * Attribute UpdatedDate: The time when the template was last updated.
     */
    readonly attrUpdatedDate: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::Template`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-template
 */
export declare class Template extends ros.Resource implements ITemplate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TemplateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Content: The content of the template.
     */
    readonly attrContent: ros.IResolvable | string;
    /**
     * Attribute CreatedBy: The creator of the template.
     */
    readonly attrCreatedBy: ros.IResolvable | string;
    /**
     * Attribute CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
     */
    readonly attrCreatedDate: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the template.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute HasTrigger: Specifies whether to query the template that is configured with a trigger.
     */
    readonly attrHasTrigger: ros.IResolvable | string;
    /**
     * Attribute Hash: The SHA-256 value of the template content.
     */
    readonly attrHash: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute ShareType: The share type of the template. Valid values:
Public
Private
     */
    readonly attrShareType: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TemplateFormat: The format of the template. Valid values:
JSON
YAML
     */
    readonly attrTemplateFormat: ros.IResolvable | string;
    /**
     * Attribute TemplateId: The ID of the template.
     */
    readonly attrTemplateId: ros.IResolvable | string;
    /**
     * Attribute TemplateType: The type of the template. Valid values:
Automation: the template for automated tasks.
State: the template for configuration inventories.
Package: the template for software packages.
     */
    readonly attrTemplateType: ros.IResolvable | string;
    /**
     * Attribute UpdatedBy: The user who last updated the template.
     */
    readonly attrUpdatedBy: ros.IResolvable | string;
    /**
     * Attribute UpdatedDate: The time when the template was last updated.
     */
    readonly attrUpdatedDate: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TemplateProps, enableResourcePropertyConstraint?: boolean);
}
