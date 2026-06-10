import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-application
 */
export interface RosApplicationProps {
    /**
     * @Property applicationId: The first ID of the resource.
     */
    readonly applicationId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::BPStudio::Application`, which is used to query the information about an application.
 * @Note This class does not contain additional functions, so it is recommended to use the `Application` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-application
 */
export declare class RosApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::BPStudio::Application";
    /**
     * @Attribute ApplicationId: The first ID of the resource.
     */
    readonly attrApplicationId: ros.IResolvable;
    /**
     * @Attribute ApplicationName: Application name.
     */
    readonly attrApplicationName: ros.IResolvable;
    /**
     * @Attribute ImageUrl: The Picture in the OSS Storage Address.
     */
    readonly attrImageUrl: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the resource belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Status: The status of the resource.
     */
    readonly attrStatus: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property applicationId: The first ID of the resource.
     */
    applicationId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-template
 */
export interface RosTemplateProps {
    /**
     * @Property templateId: The first ID of the resource.
     */
    readonly templateId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::BPStudio::Template`, which is used to query the information about a template, such as the architecture diagram.
 * @Note This class does not contain additional functions, so it is recommended to use the `Template` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-template
 */
export declare class RosTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::BPStudio::Template";
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: Template description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute ImageUrl: Representative resource picture address.
     */
    readonly attrImageUrl: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute TemplateId: The first ID of the resource.
     */
    readonly attrTemplateId: ros.IResolvable;
    /**
     * @Attribute TemplateName: The name of the resource.
     */
    readonly attrTemplateName: ros.IResolvable;
    /**
     * @Attribute TopoUrl: Represents resource file address.
     */
    readonly attrTopoUrl: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property templateId: The first ID of the resource.
     */
    templateId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTemplateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
