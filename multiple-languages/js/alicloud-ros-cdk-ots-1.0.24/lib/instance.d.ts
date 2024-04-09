import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './ots.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instance
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::OTS::Instance`, which is used to create a Tablestore instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instance
 */
export declare class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
