import * as ros from '@alicloud/ros-cdk-core';
import { RosLayerVersion } from './fc3.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLayerVersion as LayerVersionProperty };

/**
 * Properties for defining a `LayerVersion`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-layerversion
 */
export interface LayerVersionProps {

    /**
     * Property layerName: Name of the layer.
     */
    readonly layerName: string | ros.IResolvable;

    /**
     * Property acl: The access permission of the layer, 1: public, 0: private, default is private.
     */
    readonly acl?: string | ros.IResolvable;

    /**
     * Property code: Layer code configuration.
     */
    readonly code?: RosLayerVersion.CodeProperty | ros.IResolvable;

    /**
     * Property compatibleRuntime: List of runtime environments supported by the layer.
     */
    readonly compatibleRuntime?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property description: Description of the version.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property license: Layer License Agreement.
     */
    readonly license?: string | ros.IResolvable;
}

/**
 * Represents a `LayerVersion`.
 */
export interface ILayerVersion extends ros.IResource {
    readonly props: LayerVersionProps;

    /**
     * Attribute Acl: The access permission of the layer, 1: public, 0: private, default is private.
     */
    readonly attrAcl: ros.IResolvable | string;

    /**
     * Attribute CodeSize: The code package size of the layer, in bytes.
     */
    readonly attrCodeSize: ros.IResolvable | string;

    /**
     * Attribute CompatibleRuntime: List of runtime environments supported by the layer.
     */
    readonly attrCompatibleRuntime: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: Description of the version.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute LayerName: Name of the layer.
     */
    readonly attrLayerName: ros.IResolvable | string;

    /**
     * Attribute LayerVersionArn: Layer version ARN. The format is acs:fc:{region }:{ accountID}:layers/{layerName}/versions/{layerVersion}.
     */
    readonly attrLayerVersionArn: ros.IResolvable | string;

    /**
     * Attribute License: Layer License Agreement.
     */
    readonly attrLicense: ros.IResolvable | string;

    /**
     * Attribute Version: The version of the layer.
     */
    readonly attrVersion: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC3::LayerVersion`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLayerVersion`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-layerversion
 */
export class LayerVersion extends ros.Resource implements ILayerVersion {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: LayerVersionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Acl: The access permission of the layer, 1: public, 0: private, default is private.
     */
    public readonly attrAcl: ros.IResolvable | string;

    /**
     * Attribute CodeSize: The code package size of the layer, in bytes.
     */
    public readonly attrCodeSize: ros.IResolvable | string;

    /**
     * Attribute CompatibleRuntime: List of runtime environments supported by the layer.
     */
    public readonly attrCompatibleRuntime: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: Description of the version.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute LayerName: Name of the layer.
     */
    public readonly attrLayerName: ros.IResolvable | string;

    /**
     * Attribute LayerVersionArn: Layer version ARN. The format is acs:fc:{region }:{ accountID}:layers/{layerName}/versions/{layerVersion}.
     */
    public readonly attrLayerVersionArn: ros.IResolvable | string;

    /**
     * Attribute License: Layer License Agreement.
     */
    public readonly attrLicense: ros.IResolvable | string;

    /**
     * Attribute Version: The version of the layer.
     */
    public readonly attrVersion: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LayerVersionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosLayerVersion = new RosLayerVersion(this, id,  {
            compatibleRuntime: props.compatibleRuntime,
            description: props.description,
            layerName: props.layerName,
            license: props.license,
            acl: props.acl,
            code: props.code,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLayerVersion;
        this.attrAcl = rosLayerVersion.attrAcl;
        this.attrCodeSize = rosLayerVersion.attrCodeSize;
        this.attrCompatibleRuntime = rosLayerVersion.attrCompatibleRuntime;
        this.attrCreateTime = rosLayerVersion.attrCreateTime;
        this.attrDescription = rosLayerVersion.attrDescription;
        this.attrLayerName = rosLayerVersion.attrLayerName;
        this.attrLayerVersionArn = rosLayerVersion.attrLayerVersionArn;
        this.attrLicense = rosLayerVersion.attrLicense;
        this.attrVersion = rosLayerVersion.attrVersion;
    }
}
