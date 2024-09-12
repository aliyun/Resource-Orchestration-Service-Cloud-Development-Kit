import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
 */
export interface RosProjectProps {
    /**
     * @Property name: Name of the project.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property projectType: Type of the project.
     */
    readonly projectType: string | ros.IResolvable;
    /**
     * @Property description: Description of the project.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property sdkType: Type of the SDK.
     */
    readonly sdkType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLS::Project`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
 */
export declare class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLS::Project";
    /**
     * @Attribute AppKey: The app key of the project.
     */
    readonly attrAppKey: ros.IResolvable;
    /**
     * @Attribute ProjectId: The ID of the project.
     */
    readonly attrProjectId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: Name of the project.
     */
    name: string | ros.IResolvable;
    /**
     * @Property projectType: Type of the project.
     */
    projectType: string | ros.IResolvable;
    /**
     * @Property description: Description of the project.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property sdkType: Type of the SDK.
     */
    sdkType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
