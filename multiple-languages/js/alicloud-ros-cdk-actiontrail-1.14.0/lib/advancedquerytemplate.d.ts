import * as ros from '@alicloud/ros-cdk-core';
import { RosAdvancedQueryTemplate } from './actiontrail.generated';
export { RosAdvancedQueryTemplate as AdvancedQueryTemplateProperty };
/**
 * Properties for defining a `AdvancedQueryTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate
 */
export interface AdvancedQueryTemplateProps {
    /**
     * Property simpleQuery: Indicates whether the template is a simple query.
     */
    readonly simpleQuery: boolean | ros.IResolvable;
    /**
     * Property templateSql: The SQL statement of the advanced query template.
     */
    readonly templateSql: string | ros.IResolvable;
    /**
     * Property templateName: The name of the advanced query template.
     */
    readonly templateName?: string | ros.IResolvable;
}
/**
 * Represents a `AdvancedQueryTemplate`.
 */
export interface IAdvancedQueryTemplate extends ros.IResource {
    readonly props: AdvancedQueryTemplateProps;
    /**
     * Attribute TemplateId: The ID of the advanced query template.
     */
    readonly attrTemplateId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ACTIONTRAIL::AdvancedQueryTemplate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAdvancedQueryTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate
 */
export declare class AdvancedQueryTemplate extends ros.Resource implements IAdvancedQueryTemplate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AdvancedQueryTemplateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute TemplateId: The ID of the advanced query template.
     */
    readonly attrTemplateId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AdvancedQueryTemplateProps, enableResourcePropertyConstraint?: boolean);
}
