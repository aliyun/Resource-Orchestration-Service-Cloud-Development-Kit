import * as ros from '@alicloud/ros-cdk-core';
import { RosTemplate } from './paiplugin.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTemplate as TemplateProperty };

/**
 * Properties for defining a `Template`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-template
 */
export interface TemplateProps {

    /**
     * Property content: The content of the template.
     */
    readonly content: string | ros.IResolvable;

    /**
     * Property description: For the template content, please keep the total word count within 70 words. The excess will be charged as long text messages. Each text message is recorded as 67 words.
     */
    readonly description: string | ros.IResolvable;

    /**
     * Property name: The name of the template.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property type: The type of the template. The following values are supported:
     * 0: Verification code.
     * 1: SMS notification.
     * 2: Promotional SMS.
     */
    readonly type: number | ros.IResolvable;

    /**
     * Property signature: The name of the Signature, You must select either Signature or SignatureId, but not both.
     */
    readonly signature?: string | ros.IResolvable;

    /**
     * Property signatureId: The ID of the Signature, You must select either Signature or SignatureId, but not both.
     */
    readonly signatureId?: string | ros.IResolvable;
}

/**
 * Represents a `Template`.
 */
export interface ITemplate extends ros.IResource {
    readonly props: TemplateProps;

    /**
     * Attribute CreatedTime: The creation time of the Signature.
     */
    readonly attrCreatedTime: ros.IResolvable | string;

    /**
     * Attribute Description: Application instructions.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Id: The ID of the Signature.
     */
    readonly attrId: ros.IResolvable | string;

    /**
     * Attribute Name: The name of the Signature.
     */
    readonly attrName: ros.IResolvable | string;

    /**
     * Attribute Reason: Review recommendations.
     */
    readonly attrReason: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAIPlugin::Template`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-template
 */
export class Template extends ros.Resource implements ITemplate {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TemplateProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreatedTime: The creation time of the Signature.
     */
    public readonly attrCreatedTime: ros.IResolvable | string;

    /**
     * Attribute Description: Application instructions.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Id: The ID of the Signature.
     */
    public readonly attrId: ros.IResolvable | string;

    /**
     * Attribute Name: The name of the Signature.
     */
    public readonly attrName: ros.IResolvable | string;

    /**
     * Attribute Reason: Review recommendations.
     */
    public readonly attrReason: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TemplateProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTemplate = new RosTemplate(this, id,  {
            signatureId: props.signatureId,
            type: props.type,
            description: props.description,
            content: props.content,
            signature: props.signature,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTemplate;
        this.attrCreatedTime = rosTemplate.attrCreatedTime;
        this.attrDescription = rosTemplate.attrDescription;
        this.attrId = rosTemplate.attrId;
        this.attrName = rosTemplate.attrName;
        this.attrReason = rosTemplate.attrReason;
    }
}
