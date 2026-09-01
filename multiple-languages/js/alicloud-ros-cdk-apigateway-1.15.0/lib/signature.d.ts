import * as ros from '@alicloud/ros-cdk-core';
import { RosSignature } from './apigateway.generated';
export { RosSignature as SignatureProperty };
/**
 * Properties for defining a `Signature`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
 */
export interface SignatureProps {
    /**
     * Property signatureKey: The Key value of the key. The value must be 6 to 20 characters in length and can
     * contain letters, digits, and underscores (_). It must start with a letter.
     */
    readonly signatureKey: string | ros.IResolvable;
    /**
     * Property signatureName: The displayed name of the key. The name must be 4 to 50 characters in length and
     * can contain letters, digits, and underscores (_). It must start with a letter.
     */
    readonly signatureName: string | ros.IResolvable;
    /**
     * Property signatureSecret: The Secret value of the key. The value must be 6 to 30 characters in length and
     * can contain letters, digits, and special characters. Special characters include
     * underscores (_), at signs (@), number signs (#), exclamation points (!), and
     * asterisks (\*). The value must start with a letter.
     */
    readonly signatureSecret: string | ros.IResolvable;
}
/**
 * Represents a `Signature`.
 */
export interface ISignature extends ros.IResource {
    readonly props: SignatureProps;
    /**
     * Attribute SignatureId: The id of the created signature
     */
    readonly attrSignatureId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::Signature`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSignature`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
 */
export declare class Signature extends ros.Resource implements ISignature {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SignatureProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SignatureId: The id of the created signature
     */
    readonly attrSignatureId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SignatureProps, enableResourcePropertyConstraint?: boolean);
}
