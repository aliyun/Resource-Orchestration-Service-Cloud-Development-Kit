import * as ros from '@alicloud/ros-cdk-core';
import { RosTemplate } from './bpstudio.generated';
export { RosTemplate as TemplateProperty };
/**
 * Properties for defining a `Template`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-template
 */
export interface TemplateProps {
    /**
     * Property templateId: The first ID of the resource.
     */
    readonly templateId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Template`.
 */
export interface ITemplate extends ros.IResource {
    readonly props: TemplateProps;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: Template description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute ImageUrl: Representative resource picture address.
     */
    readonly attrImageUrl: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute TemplateId: The first ID of the resource.
     */
    readonly attrTemplateId: ros.IResolvable | string;
    /**
     * Attribute TemplateName: The name of the resource.
     */
    readonly attrTemplateName: ros.IResolvable | string;
    /**
     * Attribute TopoUrl: Represents resource file address.
     */
    readonly attrTopoUrl: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::BPStudio::Template`, which is used to query the information about a template, such as the architecture diagram.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-template
 */
export declare class Template extends ros.Resource implements ITemplate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TemplateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: Template description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute ImageUrl: Representative resource picture address.
     */
    readonly attrImageUrl: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute TemplateId: The first ID of the resource.
     */
    readonly attrTemplateId: ros.IResolvable | string;
    /**
     * Attribute TemplateName: The name of the resource.
     */
    readonly attrTemplateName: ros.IResolvable | string;
    /**
     * Attribute TopoUrl: Represents resource file address.
     */
    readonly attrTopoUrl: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TemplateProps, enableResourcePropertyConstraint?: boolean);
}
