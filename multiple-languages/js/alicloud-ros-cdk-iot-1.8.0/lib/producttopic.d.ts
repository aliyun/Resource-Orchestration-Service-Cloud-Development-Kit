import * as ros from '@alicloud/ros-cdk-core';
import { RosProductTopic } from './iot.generated';
export { RosProductTopic as ProductTopicProperty };
/**
 * Properties for defining a `ProductTopic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-producttopic
 */
export interface ProductTopicProps {
    /**
     * Property operation: Operation permissions of devices on the topic category. Value options:
     * SUB: Subscribe. Devices can subscribe to the topics of this category.
     * PUB: Publish. Devices can publish messages using the topics of this category.
     * ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
     */
    readonly operation: string | ros.IResolvable;
    /**
     * Property productKey: The unique identifier of the product for which you want to create a topic category.
     */
    readonly productKey: string | ros.IResolvable;
    /**
     * Property topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (\/) are used to delimit the topic hierarchies. The format of a topic category is productKey\/${deviceName}\/topicShortName.
     * Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
     */
    readonly topicShortName: string | ros.IResolvable;
    /**
     * Property desc: The description of the topic category. You can enter a description with up to 100 characters.
     */
    readonly desc?: string | ros.IResolvable;
    /**
     * Property iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
     */
    readonly iotInstanceId?: string | ros.IResolvable;
}
/**
 * Represents a `ProductTopic`.
 */
export interface IProductTopic extends ros.IResource {
    readonly props: ProductTopicProps;
    /**
     * Attribute TopicId: Topic ID
     */
    readonly attrTopicId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::IOT::ProductTopic`, which is used to create a topic category for a specified product.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProductTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-producttopic
 */
export declare class ProductTopic extends ros.Resource implements IProductTopic {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ProductTopicProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute TopicId: Topic ID
     */
    readonly attrTopicId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProductTopicProps, enableResourcePropertyConstraint?: boolean);
}
