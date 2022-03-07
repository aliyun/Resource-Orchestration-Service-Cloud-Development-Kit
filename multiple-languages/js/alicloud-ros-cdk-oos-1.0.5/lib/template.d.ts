import * as ros from '@alicloud/ros-cdk-core';
import { RosTemplate } from './oos.generated';
export { RosTemplate as TemplateProperty };
/**
 * Properties for defining a `ALIYUN::OOS::Template`
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
     * Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    readonly tags?: {
        [key: string]: (any);
    };
}
/**
 * A ROS resource type:  `ALIYUN::OOS::Template`
 */
export declare class Template extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ExecutionPolicy: Execution Policy
     */
    readonly attrExecutionPolicy: ros.IResolvable;
    /**
     * Attribute TemplateId: Template ID
     */
    readonly attrTemplateId: ros.IResolvable;
    /**
     * Attribute TemplateName: Template Name
     */
    readonly attrTemplateName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::OOS::Template`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TemplateProps, enableResourcePropertyConstraint?: boolean);
}
