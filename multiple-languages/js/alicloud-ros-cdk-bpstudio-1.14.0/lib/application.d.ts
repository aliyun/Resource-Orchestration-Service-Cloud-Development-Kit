import * as ros from '@alicloud/ros-cdk-core';
import { RosApplication } from './bpstudio.generated';
export { RosApplication as ApplicationProperty };
/**
 * Properties for defining a `Application`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bpstudio-application
 */
export interface ApplicationProps {
    /**
     * Property imageUrl: The Picture in the OSS Storage Address.
     */
    readonly imageUrl: string | ros.IResolvable;
    /**
     * Property templateId: The ID of the template.
     */
    readonly templateId: string | ros.IResolvable;
    /**
     * Property topoUrl: Topo. Json Files in OSS Address.
     */
    readonly topoUrl: string | ros.IResolvable;
    /**
     * Property applicationName: The name of the resource.
     */
    readonly applicationName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `Application`.
 */
export interface IApplication extends ros.IResource {
    readonly props: ApplicationProps;
    /**
     * Attribute ApplicationId: The ID of the application.
     */
    readonly attrApplicationId: ros.IResolvable | string;
    /**
     * Attribute ApplicationName: Product Application.
     */
    readonly attrApplicationName: ros.IResolvable | string;
    /**
     * Attribute ImageUrl: The Picture in the OSS Storage Address.
     */
    readonly attrImageUrl: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute TemplateId: The ID of the template.
     */
    readonly attrTemplateId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::BPStudio::Application`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bpstudio-application
 */
export declare class Application extends ros.Resource implements IApplication {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ApplicationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ApplicationId: The ID of the application.
     */
    readonly attrApplicationId: ros.IResolvable | string;
    /**
     * Attribute ApplicationName: Product Application.
     */
    readonly attrApplicationName: ros.IResolvable | string;
    /**
     * Attribute ImageUrl: The Picture in the OSS Storage Address.
     */
    readonly attrImageUrl: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute TemplateId: The ID of the template.
     */
    readonly attrTemplateId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationProps, enableResourcePropertyConstraint?: boolean);
}
