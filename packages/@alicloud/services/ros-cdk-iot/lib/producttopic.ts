import * as ros from '@alicloud/ros-cdk-core';
import { RosProductTopic } from './iot.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProductTopic as ProductTopicProperty };

/**
 * Properties for defining a `ALIYUN::IOT::ProductTopic`
 */
export interface ProductTopicProps {

    /**
     * @Property operation: Operation permissions of devices on the topic category. Value options:
     * SUB: Subscribe. Devices can subscribe to the topics of this category.
     * PUB: Publish. Devices can publish messages using the topics of this category.
     * ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
     */
    readonly operation: string;

    /**
     * @Property productKey: The unique identifier of the product for which you want to create a topic category.
     */
    readonly productKey: string;

    /**
     * @Property topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
     * Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
     */
    readonly topicShortName: string;

    /**
     * @Property desc: The description of the topic category. You can enter a description with up to 100 characters.
     */
    readonly desc?: string;

    /**
     * @Property iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
     */
    readonly iotInstanceId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::IOT::ProductTopic`
 */
export class ProductTopic extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute TopicId: Topic ID
     */
    public readonly attrTopicId: any;

    /**
     * Create a new `ALIYUN::IOT::ProductTopic`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProductTopicProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosProductTopic = new RosProductTopic(this, id,  {
            desc: props.desc,
            iotInstanceId: props.iotInstanceId,
            topicShortName: props.topicShortName,
            operation: props.operation,
            productKey: props.productKey,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProductTopic;
        this.attrTopicId = rosProductTopic.attrTopicId;
    }
}
