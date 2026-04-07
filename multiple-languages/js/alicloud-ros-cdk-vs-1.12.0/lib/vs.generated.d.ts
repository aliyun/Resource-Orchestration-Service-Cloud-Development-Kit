import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vs-group
 */
export interface RosGroupProps {
    /**
     * @Property inProtocol: Access protocol used by the space.
     * Value: gb28181, rtmp
     */
    readonly inProtocol: string | ros.IResolvable;
    /**
     * @Property name: Space name.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property outProtocol: Play protocol used by the space, multivalued separated by commas.
     * Value: flv, hls, rtmp
     */
    readonly outProtocol: string | ros.IResolvable;
    /**
     * @Property playDomain: Use of the domain name space broadcast stream.
     */
    readonly playDomain: string | ros.IResolvable;
    /**
     * @Property pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
     */
    readonly pushDomain: string | ros.IResolvable;
    /**
     * @Property region: Space belongs to the region, as a service center.
     */
    readonly region: string | ros.IResolvable;
    /**
     * @Property app: Application name space used, the default live.
     */
    readonly app?: string | ros.IResolvable;
    /**
     * @Property callback: Updating the space callback device \/ flow state
     */
    readonly callback?: string | ros.IResolvable;
    /**
     * @Property description: Space description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property enabled: Space is enabled.
     */
    readonly enabled?: boolean | ros.IResolvable;
    /**
     * @Property lazyPull: Whether to enable on-demand pull flow, default false
     */
    readonly lazyPull?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VS::Group`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vs-group
 */
export declare class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VS::Group";
    /**
     * @Attribute GbId: GB ID space provided. (Applies only to access the space marked States)
     */
    readonly attrGbId: ros.IResolvable;
    /**
     * @Attribute GbIp: GB signaling server address space provided. (Applies only to access the space marked States)
     */
    readonly attrGbIp: ros.IResolvable;
    /**
     * @Attribute GbPort: GB Port space provided. (Applies only to access the space marked States)
     */
    readonly attrGbPort: ros.IResolvable;
    /**
     * @Attribute Id: Space ID.
     */
    readonly attrId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property inProtocol: Access protocol used by the space.
     * Value: gb28181, rtmp
     */
    inProtocol: string | ros.IResolvable;
    /**
     * @Property name: Space name.
     */
    name: string | ros.IResolvable;
    /**
     * @Property outProtocol: Play protocol used by the space, multivalued separated by commas.
     * Value: flv, hls, rtmp
     */
    outProtocol: string | ros.IResolvable;
    /**
     * @Property playDomain: Use of the domain name space broadcast stream.
     */
    playDomain: string | ros.IResolvable;
    /**
     * @Property pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
     */
    pushDomain: string | ros.IResolvable;
    /**
     * @Property region: Space belongs to the region, as a service center.
     */
    region: string | ros.IResolvable;
    /**
     * @Property app: Application name space used, the default live.
     */
    app: string | ros.IResolvable | undefined;
    /**
     * @Property callback: Updating the space callback device \/ flow state
     */
    callback: string | ros.IResolvable | undefined;
    /**
     * @Property description: Space description.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property enabled: Space is enabled.
     */
    enabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property lazyPull: Whether to enable on-demand pull flow, default false
     */
    lazyPull: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
