import * as ros from '@alicloud/ros-cdk-core';
import { RosSignature } from './paiplugin.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSignature as SignatureProperty };

/**
 * Properties for defining a `Signature`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-signature
 */
export interface SignatureProps {

    /**
     * Property name: The name of the Signature.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property description: Application instructions.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAIPlugin::Signature`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSignature`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-signature
 */
export class Signature extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SignatureProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreatedTime: The creation time of the Signature.
     */
    public readonly attrCreatedTime: ros.IResolvable;

    /**
     * Attribute Description: Application instructions.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute Id: The ID of the Signature.
     */
    public readonly attrId: ros.IResolvable;

    /**
     * Attribute Name: The name of the Signature.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Attribute Reason: Review recommendations.
     */
    public readonly attrReason: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SignatureProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSignature = new RosSignature(this, id,  {
            description: props.description,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSignature;
        this.attrCreatedTime = rosSignature.attrCreatedTime;
        this.attrDescription = rosSignature.attrDescription;
        this.attrId = rosSignature.attrId;
        this.attrName = rosSignature.attrName;
        this.attrReason = rosSignature.attrReason;
    }
}
