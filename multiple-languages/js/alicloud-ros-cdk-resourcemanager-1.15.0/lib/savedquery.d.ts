import * as ros from '@alicloud/ros-cdk-core';
import { RosSavedQuery } from './resourcemanager.generated';
export { RosSavedQuery as SavedQueryProperty };
/**
 * Properties for defining a `SavedQuery`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
 */
export interface SavedQueryProps {
    /**
     * Property expression: The expression of the template.
     */
    readonly expression: string | ros.IResolvable;
    /**
     * Property savedQueryName: The name of the template.
     * * The name must be 1 to 64 characters in length.
     * * The name can contain letters, digits, underscores (_), and hyphens (-).
     * * The template name must be unique.
     */
    readonly savedQueryName: string | ros.IResolvable;
    /**
     * Property description: The description of the template. The description must be 1 to 256 characters in length.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * Represents a `SavedQuery`.
 */
export interface ISavedQuery extends ros.IResource {
    readonly props: SavedQueryProps;
    /**
     * Attribute CreateTime: The creation time of the template.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the template.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute Expression: Query Expression of the template.
     */
    readonly attrExpression: ros.IResolvable | string;
    /**
     * Attribute SavedQueryId: The id of the template.
     */
    readonly attrSavedQueryId: ros.IResolvable | string;
    /**
     * Attribute SavedQueryName: The name of the template.
     */
    readonly attrSavedQueryName: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: Update time of the template.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::SavedQuery`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSavedQuery`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
 */
export declare class SavedQuery extends ros.Resource implements ISavedQuery {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SavedQueryProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the template.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the template.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute Expression: Query Expression of the template.
     */
    readonly attrExpression: ros.IResolvable | string;
    /**
     * Attribute SavedQueryId: The id of the template.
     */
    readonly attrSavedQueryId: ros.IResolvable | string;
    /**
     * Attribute SavedQueryName: The name of the template.
     */
    readonly attrSavedQueryName: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: Update time of the template.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SavedQueryProps, enableResourcePropertyConstraint?: boolean);
}
