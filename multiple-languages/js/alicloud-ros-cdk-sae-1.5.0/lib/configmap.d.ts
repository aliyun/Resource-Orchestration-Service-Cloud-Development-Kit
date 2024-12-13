import * as ros from '@alicloud/ros-cdk-core';
import { RosConfigMap } from './sae.generated';
export { RosConfigMap as ConfigMapProperty };
/**
 * Properties for defining a `ConfigMap`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap
 */
export interface ConfigMapProps {
    /**
     * Property data: Configmap key value pairs of data, json format.The format is as follows:
     * {"k1":"v1", "k2":"v2"}
     * K means key, V represents value.For more information about configuration items, see management and use of configuration items.
     */
    readonly data: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property name: The name of the config map.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property namespaceId: The ID of the namespace to which this config map instance belongs.
     */
    readonly namespaceId: string | ros.IResolvable;
    /**
     * Property description: Describe information, do not enter the space without more than 255 characters.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAE::ConfigMap`, which is used to create a ConfigMap instance in a namespace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConfigMap`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap
 */
export declare class ConfigMap extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ConfigMapProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConfigMapId: The ID of the config map.
     */
    readonly attrConfigMapId: ros.IResolvable;
    /**
     * Attribute NamespaceId: The ID of the namespace to which this config map instance belongs.
     */
    readonly attrNamespaceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConfigMapProps, enableResourcePropertyConstraint?: boolean);
}
