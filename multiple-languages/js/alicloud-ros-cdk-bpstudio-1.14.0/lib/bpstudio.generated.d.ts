import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bpstudio-application
 */
export interface RosApplicationProps {
    /**
     * @Property imageUrl: The Picture in the OSS Storage Address.
     */
    readonly imageUrl: string | ros.IResolvable;
    /**
     * @Property templateId: The ID of the template.
     */
    readonly templateId: string | ros.IResolvable;
    /**
     * @Property topoUrl: Topo. Json Files in OSS Address.
     */
    readonly topoUrl: string | ros.IResolvable;
    /**
     * @Property applicationName: The name of the resource.
     */
    readonly applicationName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BPStudio::Application`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Application` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bpstudio-application
 */
export declare class RosApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BPStudio::Application";
    /**
     * @Attribute ApplicationId: The ID of the application.
     */
    readonly attrApplicationId: ros.IResolvable;
    /**
     * @Attribute ApplicationName: Product Application.
     */
    readonly attrApplicationName: ros.IResolvable;
    /**
     * @Attribute ImageUrl: The Picture in the OSS Storage Address.
     */
    readonly attrImageUrl: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute TemplateId: The ID of the template.
     */
    readonly attrTemplateId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageUrl: The Picture in the OSS Storage Address.
     */
    imageUrl: string | ros.IResolvable;
    /**
     * @Property templateId: The ID of the template.
     */
    templateId: string | ros.IResolvable;
    /**
     * @Property topoUrl: Topo. Json Files in OSS Address.
     */
    topoUrl: string | ros.IResolvable;
    /**
     * @Property applicationName: The name of the resource.
     */
    applicationName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
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
