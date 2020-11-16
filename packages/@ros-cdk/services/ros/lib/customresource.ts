import * as ros from '@ros-cdk/core';
import { RosCustomResource } from './ros.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCustomResource as CustomResourceProperty };

/**
 * Properties for defining a `ALIYUN::ROS::CustomResource`
 */
export interface CustomResourceProps {

    /**
     * @Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
     * Allowed values:
     * - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
     * - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
     * - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
     * - HTTP&HTTPS: web[options]:<url>
     *   Two options are supported:
     *   - sync: sync HTTP&HTTPS request.
     *   - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
     * Examples:
     *   - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
     *   - acs:mns:cn-hangzhou:123456789:queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:/queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:topics/test-topic
     *   - acs:mns:cn-hangzhou:123456789:/topics/test-topic
     *   - web:https://abc.com
     *   - web[sync]:http://abc.com
     *   - web[sync,idempotent]:https://abc.com
     */
    readonly serviceToken: string;

    /**
     * @Property timeout: Timeout seconds before service provider responses.
     * It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
     * Timeout seconds are always 10 for sync HTTP&HTTPS request.
     */
    readonly timeout: number;

    /**
     * @Property parameters: Parameters to be passed to service provider.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ROS::CustomResource`
 */
export class CustomResource extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute Outputs: Output data received from service provider.
     */
    public readonly attrOutputs: any;

    /**
     * Create a new `ALIYUN::ROS::CustomResource`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomResourceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCustomResource = new RosCustomResource(this, id,  {
            serviceToken: props.serviceToken,
            parameters: props.parameters,
            timeout: props.timeout ? props.timeout : 60,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomResource;
        this.attrOutputs = rosCustomResource.attrOutputs;
    }
}
