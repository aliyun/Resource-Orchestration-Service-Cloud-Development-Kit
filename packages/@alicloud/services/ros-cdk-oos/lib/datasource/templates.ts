import * as ros from '@alicloud/ros-cdk-core';
import { RosTemplates } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTemplates as TemplatesProperty };

/**
 * Properties for defining a `Templates`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
 */
export interface TemplatesProps {

    /**
     * Property category: The type of the template. Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
     */
    readonly category?: string | ros.IResolvable;

    /**
     * Property createdBy: The creator of the template.
     */
    readonly createdBy?: string | ros.IResolvable;

    /**
     * Property createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.
     */
    readonly createdDateAfter?: string | ros.IResolvable;

    /**
     * Property createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
     */
    readonly createdDateBefore?: string | ros.IResolvable;

    /**
     * Property hasTrigger: Specifies whether to query the template that is configured with a trigger.
     */
    readonly hasTrigger?: boolean | ros.IResolvable;

    /**
     * Property isExample: Specifies whether the template is an example template.
     */
    readonly isExample?: boolean | ros.IResolvable;

    /**
     * Property isFavorite: Specifies whether the template is added to favorites.
     */
    readonly isFavorite?: boolean | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property shareType: The share type of the template. Valid values:
     * Public
     * Private
     */
    readonly shareType?: string | ros.IResolvable;

    /**
     * Property sortField: The field that is used to sort the templates to be queried. Valid values:
     * TotalExecutionCount (default): The system sorts the returned templates based on the total number of times that the templates are used.
     * Popularity: The system sorts the returned templates based on the popularity of the templates.
     * TemplateName: The system sorts the returned templates based on the names of the templates.
     * CreatedDate: The system sorts the returned templates based on the points in time when the templates are created.
     * UpdatedDate: The system sorts the returned templates based on the points in time when the templates are updated.
     */
    readonly sortField?: string | ros.IResolvable;

    /**
     * Property sortOrder: The order in which you want to sort the results. Valid values:
     * Ascending: ascending order.
     * Descending: descending order. This is the default value.
     */
    readonly sortOrder?: string | ros.IResolvable;

    /**
     * Property tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
     */
    readonly tags?: { [key: string]: (any) };

    /**
     * Property templateFormat: The format of the template. Valid values:
     * JSON
     * YAML
     */
    readonly templateFormat?: string | ros.IResolvable;

    /**
     * Property templateName: The name of the template.
     */
    readonly templateName?: string | ros.IResolvable;

    /**
     * Property templateType: The type of the template. Valid values:
     * Automation: the template for automated tasks.
     * State: the template for configuration inventories.
     * Package: the template for software packages.
     */
    readonly templateType?: string | ros.IResolvable;
}

/**
 * Represents a `Templates`.
 */
export interface ITemplates extends ros.IResource {
    readonly props: TemplatesProps;

    /**
     * Attribute TemplateNames: The list of template_names.
     */
    readonly attrTemplateNames: ros.IResolvable | string;

    /**
     * Attribute Templates: The list of templates.
     */
    readonly attrTemplates: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::Templates`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTemplates`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
 */
export class Templates extends ros.Resource implements ITemplates {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TemplatesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TemplateNames: The list of template_names.
     */
    public readonly attrTemplateNames: ros.IResolvable | string;

    /**
     * Attribute Templates: The list of templates.
     */
    public readonly attrTemplates: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TemplatesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTemplates = new RosTemplates(this, id,  {
            category: props.category,
            createdBy: props.createdBy,
            resourceGroupId: props.resourceGroupId,
            templateFormat: props.templateFormat,
            createdDateAfter: props.createdDateAfter,
            isExample: props.isExample,
            createdDateBefore: props.createdDateBefore,
            sortOrder: props.sortOrder === undefined || props.sortOrder === null ? 'Descending' : props.sortOrder,
            sortField: props.sortField === undefined || props.sortField === null ? 'TotalExecutionCount' : props.sortField,
            templateType: props.templateType,
            isFavorite: props.isFavorite,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            hasTrigger: props.hasTrigger,
            templateName: props.templateName,
            tags: props.tags,
            shareType: props.shareType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTemplates;
        this.attrTemplateNames = rosTemplates.attrTemplateNames;
        this.attrTemplates = rosTemplates.attrTemplates;
    }
}
