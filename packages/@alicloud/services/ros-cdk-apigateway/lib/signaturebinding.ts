import * as ros from '@alicloud/ros-cdk-core';
import { RosSignatureBinding } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSignatureBinding as SignatureBindingProperty };

/**
 * Properties for defining a `SignatureBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signaturebinding
 */
export interface SignatureBindingProps {

    /**
     * Property apiIds: APIs to bind with the signature.
     */
    readonly apiIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property groupId: The id of group.
     */
    readonly groupId: string | ros.IResolvable;

    /**
     * Property signatureId: The id of the Signature.
     */
    readonly signatureId: string | ros.IResolvable;

    /**
     * Property stageName: Bind signature in this stage.
     */
    readonly stageName: string | ros.IResolvable;
}

/**
 * Represents a `SignatureBinding`.
 */
export interface ISignatureBinding extends ros.IResource {
    readonly props: SignatureBindingProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::SignatureBinding`, which is used to bind a backend signature to APIs.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSignatureBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signaturebinding
 */
export class SignatureBinding extends ros.Resource implements ISignatureBinding {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SignatureBindingProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SignatureBindingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSignatureBinding = new RosSignatureBinding(this, id,  {
            signatureId: props.signatureId,
            stageName: props.stageName,
            apiIds: props.apiIds,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSignatureBinding;
    }
}
