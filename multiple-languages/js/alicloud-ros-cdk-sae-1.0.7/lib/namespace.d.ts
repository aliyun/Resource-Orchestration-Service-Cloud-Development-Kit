import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './sae.generated';
export { RosNamespace as NamespaceProperty };
/**
 * Properties for defining a `ALIYUN::SAE::Namespace`
 */
export interface NamespaceProps {
    /**
     * Property namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
     */
    readonly namespaceId: string | ros.IResolvable;
    /**
     * Property namespaceName: Namespace name
     */
    readonly namespaceName: string | ros.IResolvable;
    /**
     * Property namespaceDescription: Namespace description
     */
    readonly namespaceDescription?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SAE::Namespace`
 */
export declare class Namespace extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute NamespaceId: Namespace ID
     */
    readonly attrNamespaceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAE::Namespace`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=namespace.d.ts.map