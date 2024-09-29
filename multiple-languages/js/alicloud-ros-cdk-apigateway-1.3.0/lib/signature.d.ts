import * as ros from '@alicloud/ros-cdk-core';
import { RosSignature } from './apigateway.generated';
export { RosSignature as SignatureProperty };
/**
 * Properties for defining a `Signature`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
 */
export interface SignatureProps {
    /**
     * Property signatureKey: The key of the signature.
     */
    readonly signatureKey: string | ros.IResolvable;
    /**
     * Property signatureName: The name of the Signature.It must be 4 to 128 characters in length, and can contain letters, digits, underscores (_), dashes (-), spaces and dots (.), It must start with a letter.
     */
    readonly signatureName: string | ros.IResolvable;
    /**
     * Property signatureSecret: The secret of the signature.
     */
    readonly signatureSecret: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::Signature`, which is used to create a backend signature.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSignature`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
 */
export declare class Signature extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SignatureProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SignatureId: The id of the created signature
     */
    readonly attrSignatureId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SignatureProps, enableResourcePropertyConstraint?: boolean);
}
