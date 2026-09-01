import * as ros from '@alicloud/ros-cdk-core';
import { RosImageComponent } from './ecs.generated';
export { RosImageComponent as ImageComponentProperty };
/**
 * Properties for defining a `ImageComponent`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagecomponent
 */
export interface ImageComponentProps {
    /**
     * Property content: The content of the image component. The image component consists of multiple
     * commands. The command content cannot exceed 16 KB in size. For information about
     * the commands supported by Image Builder and the formats of the commands, see
     * [Commands supported by Image Builder]().
     */
    readonly content: string | ros.IResolvable;
    /**
     * Property componentType: The type of the image component. Only image building components and image test
     * components are supported.
     * Valid values:
     * - Build
     * - Test
     * Default value: Build.
     * > Image building components can be used only in image building templates. Image
     * test components can be used only in image test templates.
     */
    readonly componentType?: string | ros.IResolvable;
    /**
     * Property description: The description. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property name: The component name. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:\/\/ or https:\/\/.The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     * Note If you do not configure Name, the return value of ImageComponentId is used.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property systemType: The type of the operating system supported by the image component.
     * Valid values:
     * - Linux
     * - Windows
     * Default value: Linux.
     */
    readonly systemType?: string | ros.IResolvable;
    /**
     * Property tags:
     */
    readonly tags?: RosImageComponent.TagsProperty[];
}
/**
 * Represents a `ImageComponent`.
 */
export interface IImageComponent extends ros.IResource {
    readonly props: ImageComponentProps;
    /**
     * Attribute ImageComponentId: The ID of the image component.
     */
    readonly attrImageComponentId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::ImageComponent`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageComponent`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagecomponent
 */
export declare class ImageComponent extends ros.Resource implements IImageComponent {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ImageComponentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ImageComponentId: The ID of the image component.
     */
    readonly attrImageComponentId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageComponentProps, enableResourcePropertyConstraint?: boolean);
}
