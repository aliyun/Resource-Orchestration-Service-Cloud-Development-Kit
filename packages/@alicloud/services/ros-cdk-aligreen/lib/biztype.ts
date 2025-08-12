import * as ros from '@alicloud/ros-cdk-core';
import { RosBizType } from './aligreen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBizType as BizTypeProperty };

/**
 * Properties for defining a `BizType`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
 */
export interface BizTypeProps {

    /**
     * Property bizTypeName: The name of the business scenario defined by the customer. It can contain no more than 32 characters in English, numbers, and underscores.
     */
    readonly bizTypeName: string | ros.IResolvable;

    /**
     * Property citeTemplate: Specifies whether to import the configuration of an industry template. Default value: false. Valid values:
     * true: imports the configuration of an industry template.
     * false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
     */
    readonly citeTemplate: boolean | ros.IResolvable;

    /**
     * Property bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.
     */
    readonly bizTypeImport?: string | ros.IResolvable;

    /**
     * Property description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property industryInfo: The industry classification. For specific types see <a href='https:\/\/help.aliyun.com\/document_detail\/210982.html' target='_blank'>CreateBizType<\/a>.
     */
    readonly industryInfo?: string | ros.IResolvable;
}

/**
 * Represents a `BizType`.
 */
export interface IBizType extends ros.IResource {
    readonly props: BizTypeProps;

    /**
     * Attribute BizTypeName: The name of the business scenario defined by the customer.
     */
    readonly attrBizTypeName: ros.IResolvable | string;

    /**
     * Attribute CiteTemplate: Specifies whether to import the configuration of an industry template. Default value: false.
     */
    readonly attrCiteTemplate: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the business scenario defined by the customer.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute IndustryInfo: The industry classification.
     */
    readonly attrIndustryInfo: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Aligreen::BizType`, which is used to create a business scenario.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBizType`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
 */
export class BizType extends ros.Resource implements IBizType {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BizTypeProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BizTypeName: The name of the business scenario defined by the customer.
     */
    public readonly attrBizTypeName: ros.IResolvable | string;

    /**
     * Attribute CiteTemplate: Specifies whether to import the configuration of an industry template. Default value: false.
     */
    public readonly attrCiteTemplate: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the business scenario defined by the customer.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute IndustryInfo: The industry classification.
     */
    public readonly attrIndustryInfo: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BizTypeProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBizType = new RosBizType(this, id,  {
            bizTypeImport: props.bizTypeImport,
            bizTypeName: props.bizTypeName,
            description: props.description,
            citeTemplate: props.citeTemplate,
            industryInfo: props.industryInfo,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBizType;
        this.attrBizTypeName = rosBizType.attrBizTypeName;
        this.attrCiteTemplate = rosBizType.attrCiteTemplate;
        this.attrDescription = rosBizType.attrDescription;
        this.attrIndustryInfo = rosBizType.attrIndustryInfo;
    }
}
