import * as ros from '@alicloud/ros-cdk-core';
import { RosImageComponent } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosImageComponent as ImageComponentProperty };

/**
 * Properties for defining a `ImageComponent`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagecomponent
 */
export interface ImageComponentProps {

    /**
     * Property content: The content of the image component. The content consists of up to 127 commands.
     */
    readonly content: string | ros.IResolvable;

    /**
     * Property componentType: The type of the image component. Only image build components are supported. Set the value to Build.Default value: Build.
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
     * Property systemType: The operating system type supported by the image component. Only Linux is supported. Set the value to Linux.Default value: Linux.
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
export class ImageComponent extends ros.Resource implements IImageComponent {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ImageComponentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ImageComponentId: The ID of the image component.
     */
    public readonly attrImageComponentId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageComponentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosImageComponent = new RosImageComponent(this, id,  {
            componentType: props.componentType === undefined || props.componentType === null ? 'Build' : props.componentType,
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            content: props.content,
            systemType: props.systemType === undefined || props.systemType === null ? 'Linux' : props.systemType,
            tags: props.tags,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImageComponent;
        this.attrImageComponentId = rosImageComponent.attrImageComponentId;
    }
}
