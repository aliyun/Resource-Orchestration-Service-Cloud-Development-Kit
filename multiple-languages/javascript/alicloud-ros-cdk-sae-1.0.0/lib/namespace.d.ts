import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './sae.generated';
export { RosNamespace as NamespaceProperty };
/**
 * Properties for defining a `ALIYUN::SAE::Namespace`
 */
export interface NamespaceProps {
    /**
     * @Property namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
     */
    readonly namespaceId: string;
    /**
     * @Property namespaceName: Namespace name
     */
    readonly namespaceName: string;
    /**
     * @Property namespaceDescription: Namespace description
     */
    readonly namespaceDescription?: string;
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
     * @Attribute NamespaceId: Namespace ID
     */
    readonly attrNamespaceId: any;
    /**
     * Create a new `ALIYUN::SAE::Namespace`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint?: boolean);
}
