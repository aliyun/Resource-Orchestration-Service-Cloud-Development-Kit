import * as ros from '@alicloud/ros-cdk-core';
import { RosTemplate } from './oos.generated';
export { RosTemplate as TemplateProperty };
/**
 * Properties for defining a `Template`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-template
 */
export interface TemplateProps {
    /**
     * Property content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
     */
    readonly content: string | ros.IResolvable;
    /**
     * Property templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
     */
    readonly templateName: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    readonly tags?: {
        [key: string]: (any);
    };
}
/**
 * Represents a `Template`.
 */
export interface ITemplate extends ros.IResource {
    readonly props: TemplateProps;
    /**
     * Attribute ExecutionPolicy: Execution Policy
     */
    readonly attrExecutionPolicy: ros.IResolvable | string;
    /**
     * Attribute TemplateId: Template ID
     */
    readonly attrTemplateId: ros.IResolvable | string;
    /**
     * Attribute TemplateName: Template Name
     */
    readonly attrTemplateName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::Template`, which is used to create a template.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-template
 */
export declare class Template extends ros.Resource implements ITemplate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TemplateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ExecutionPolicy: Execution Policy
     */
    readonly attrExecutionPolicy: ros.IResolvable | string;
    /**
     * Attribute TemplateId: Template ID
     */
    readonly attrTemplateId: ros.IResolvable | string;
    /**
     * Attribute TemplateName: Template Name
     */
    readonly attrTemplateName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TemplateProps, enableResourcePropertyConstraint?: boolean);
}
