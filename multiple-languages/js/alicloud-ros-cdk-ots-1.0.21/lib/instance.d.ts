import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './ots.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `ALIYUN::OTS::Instance`
 */
export interface InstanceProps {
    /**
     * Property instanceName: The name of the instance.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * Property clusterType: Cluster type, the default is SSD.
     * This parameter specifies the specification of the ots instance.
     *  When the value is SSD, the ots instance is a high-performance instance.
     *  When the value is Hybid, the ots instance is a capacity instance
     */
    readonly clusterType?: string | ros.IResolvable;
    /**
     * Property description: Instance description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property network: Instance network type, default is NORMAL.
     */
    readonly network?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
}
/**
 * A ROS resource type:  `ALIYUN::OTS::Instance`
 */
export declare class Instance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceName: Instance name
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute PrivateEndpoint: Private endpoint
     */
    readonly attrPrivateEndpoint: ros.IResolvable;
    /**
     * Attribute PublicEndpoint: Public endpoint
     */
    readonly attrPublicEndpoint: ros.IResolvable;
    /**
     * Attribute VpcEndpoint: Vpc endpoint
     */
    readonly attrVpcEndpoint: ros.IResolvable;
    /**
     * Create a new `ALIYUN::OTS::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
