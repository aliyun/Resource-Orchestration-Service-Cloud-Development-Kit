import * as ros from '@alicloud/ros-cdk-core';
import { RosSecret } from './sae.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecret as SecretProperty };

/**
 * Properties for defining a `Secret`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-secret
 */
export interface SecretProps {

    /**
     * Property namespaceId: The namespace ID where the Secret instance resides. If the namespace you are in is the default namespace, you just need to fill in the RegionId.
     */
    readonly namespaceId: string | ros.IResolvable;

    /**
     * Property secretData: Secret key-value pair data, required.The format is as follows:
     * {"Data":"{"k1":"v1", "k2":"v2"}"}
     * k represents the key and v represents the value.
     */
    readonly secretData: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property secretName: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters.
     */
    readonly secretName: string | ros.IResolvable;

    /**
     * Property secretType: The currently supported Secret instance type.The values are as follows:
     * kubernetes.io\/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment.
     */
    readonly secretType: string | ros.IResolvable;
}

/**
 * Represents a `Secret`.
 */
export interface ISecret extends ros.IResource {
    readonly props: SecretProps;

    /**
     * Attribute NamespaceId: The namespace ID that the Secret instance belongs to.
     */
    readonly attrNamespaceId: ros.IResolvable | string;

    /**
     * Attribute SecretId: The ID of the secret.
     */
    readonly attrSecretId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAE::Secret`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecret`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-secret
 */
export class Secret extends ros.Resource implements ISecret {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SecretProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NamespaceId: The namespace ID that the Secret instance belongs to.
     */
    public readonly attrNamespaceId: ros.IResolvable | string;

    /**
     * Attribute SecretId: The ID of the secret.
     */
    public readonly attrSecretId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecretProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSecret = new RosSecret(this, id,  {
            secretName: props.secretName,
            secretType: props.secretType,
            namespaceId: props.namespaceId,
            secretData: props.secretData,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecret;
        this.attrNamespaceId = rosSecret.attrNamespaceId;
        this.attrSecretId = rosSecret.attrSecretId;
    }
}
