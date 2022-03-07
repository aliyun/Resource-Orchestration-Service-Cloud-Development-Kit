import * as ros from '@alicloud/ros-cdk-core';
import { RosSignature } from './apigateway.generated';
export { RosSignature as SignatureProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::Signature`
 */
export interface SignatureProps {
    /**
     * Property signatureKey: The key of the signature.
     */
    readonly signatureKey: string | ros.IResolvable;
    /**
     * Property signatureName: The name of the Signature.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly signatureName: string | ros.IResolvable;
    /**
     * Property signatureSecret: The secret of the signature.
     */
    readonly signatureSecret: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::Signature`
 */
export declare class Signature extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SignatureId: The id of the created signature
     */
    readonly attrSignatureId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ApiGateway::Signature`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SignatureProps, enableResourcePropertyConstraint?: boolean);
}
