import * as ros from '@alicloud/ros-cdk-core';
import { RosLayer } from './fc.generated';
export { RosLayer as LayerProperty };
/**
 * Properties for defining a `Layer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-layer
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
 * Represents a `Layer`.
 */
export interface ILayer extends ros.IResource {
    readonly props: LayerProps;
    /**
     * Attribute Arn: The name of the layer resource.
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute LayerName: The name of layer
     */
    readonly attrLayerName: ros.IResolvable | string;
    /**
     * Attribute Version: The version of the layer resource.
     */
    readonly attrVersion: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC::Layer`, which is used to release a layer version.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLayer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-layer
 */
export declare class Layer extends ros.Resource implements ILayer {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: LayerProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The name of the layer resource.
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute LayerName: The name of layer
     */
    readonly attrLayerName: ros.IResolvable | string;
    /**
     * Attribute Version: The version of the layer resource.
     */
    readonly attrVersion: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LayerProps, enableResourcePropertyConstraint?: boolean);
}
