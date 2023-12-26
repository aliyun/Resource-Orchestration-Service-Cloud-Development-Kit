import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomResource } from './ros.generated';
export { RosCustomResource as CustomResourceProperty };
/**
 * Properties for defining a `CustomResource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-customresource
 */
export interface CustomResourceProps {
    /**
     * Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
     * Allowed values:
     * - Function Compute: acs:fc:<region_id>:<account_id>:services\/<service_name>\/functions\/<function_name>
     * - MNS Queue: acs:mns:<region_id>:<account_id>:queues\/<queue_name> or acs:mns:<region_id>:<account_id>:\/queues\/<queue_name>
     * - MNS Topic: acs:mns:<region_id>:<account_id>:topics\/<topic_name> or acs:mns:<region_id>:<account_id>:\/topics\/<topic_name>
     * - HTTP&HTTPS: web[options]:<url>
     *   Two options are supported:
     *   - sync: sync HTTP&HTTPS request.
     *   - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
     * Examples:
     *   - acs:fc:cn-hangzhou:123456789:services\/test-service\/functions\/test-function
     *   - acs:mns:cn-hangzhou:123456789:queues\/test-queue
     *   - acs:mns:cn-hangzhou:123456789:\/queues\/test-queue
     *   - acs:mns:cn-hangzhou:123456789:topics\/test-topic
     *   - acs:mns:cn-hangzhou:123456789:\/topics\/test-topic
     *   - web:https:\/\/abc.com
     *   - web[sync]:http:\/\/abc.com
     *   - web[sync,idempotent]:https:\/\/abc.com
     */
    readonly serviceToken: string | ros.IResolvable;
    /**
     * Property timeout: Timeout seconds before service provider responses.
     * It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
     * Timeout seconds are always 10 for sync HTTP&HTTPS request.
     */
    readonly timeout: number | ros.IResolvable;
    /**
     * Property httpConfig: Config for HTTP&HTTPS service provider.
     */
    readonly httpConfig?: RosCustomResource.HttpConfigProperty | ros.IResolvable;
    /**
     * Property parameters: Parameters to be passed to service provider.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::CustomResource`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomResource`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-customresource
 */
export declare class CustomResource extends ros.Resource {
    /**
     * Attribute Outputs: Output data received from service provider.
     */
    readonly attrOutputs: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomResourceProps, enableResourcePropertyConstraint?: boolean);
}
