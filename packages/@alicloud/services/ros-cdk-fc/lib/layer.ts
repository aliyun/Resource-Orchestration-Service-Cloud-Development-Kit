import * as ros from '@alicloud/ros-cdk-core';
import { RosLayer } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLayer as LayerProperty };

/**
 * Properties for defining a `ALIYUN::FC::Layer`
 */
export interface LayerProps {

    /**
     * Property code: The code of layer.
     */
    readonly code: RosLayer.CodeProperty | ros.IResolvable;

    /**
     * Property compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
     */
    readonly compatibleRuntime: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property layerName: The name of layer
     */
    readonly layerName: string | ros.IResolvable;

    /**
     * Property description: The description of the layer.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::FC::Layer`
 */
export class Layer extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Arn: The name of the layer resource.
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * Attribute LayerName: The name of layer
     */
    public readonly attrLayerName: ros.IResolvable;

    /**
     * Attribute Version: The version of the layer resource.
     */
    public readonly attrVersion: ros.IResolvable;

    /**
     * Create a new `ALIYUN::FC::Layer`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LayerProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosLayer = new RosLayer(this, id,  {
            compatibleRuntime: props.compatibleRuntime,
            description: props.description,
            layerName: props.layerName,
            code: props.code,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLayer;
        this.attrArn = rosLayer.attrArn;
        this.attrLayerName = rosLayer.attrLayerName;
        this.attrVersion = rosLayer.attrVersion;
    }
}
