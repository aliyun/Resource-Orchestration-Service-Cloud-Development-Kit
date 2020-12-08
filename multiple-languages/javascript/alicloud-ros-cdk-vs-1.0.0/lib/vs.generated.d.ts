import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::VS::Group`
 */
export interface RosGroupProps {
    /**
     * @Property inProtocol: Access protocol used by the space.
     * Value: gb28181, rtmp
     */
    readonly inProtocol: string;
    /**
     * @Property name: Space name.
     */
    readonly name: string;
    /**
     * @Property outProtocol: Play protocol used by the space, multivalued separated by commas.
     * Value: flv, hls, rtmp
     */
    readonly outProtocol: string;
    /**
     * @Property playDomain: Use of the domain name space broadcast stream.
     */
    readonly playDomain: string;
    /**
     * @Property pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
     */
    readonly pushDomain: string;
    /**
     * @Property region: Space belongs to the region, as a service center.
     */
    readonly region: string;
    /**
     * @Property app: Application name space used, the default live.
     */
    readonly app?: string;
    /**
     * @Property callback: Updating the space callback device / flow state
     */
    readonly callback?: string;
    /**
     * @Property description: Space description.
     */
    readonly description?: string;
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
 * A ROS template type:  `ALIYUN::VS::Group`
 */
export declare class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VS::Group";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute GbId: GB ID space provided. (Applies only to access the space marked States)
     */
    readonly attrGbId: any;
    /**
     * @Attribute GbIp: GB signaling server address space provided. (Applies only to access the space marked States)
     */
    readonly attrGbIp: any;
    /**
     * @Attribute GbPort: GB Port space provided. (Applies only to access the space marked States)
     */
    readonly attrGbPort: any;
    /**
     * @Attribute Id: Space ID.
     */
    readonly attrId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property inProtocol: Access protocol used by the space.
     * Value: gb28181, rtmp
     */
    inProtocol: string;
    /**
     * @Property name: Space name.
     */
    name: string;
    /**
     * @Property outProtocol: Play protocol used by the space, multivalued separated by commas.
     * Value: flv, hls, rtmp
     */
    outProtocol: string;
    /**
     * @Property playDomain: Use of the domain name space broadcast stream.
     */
    playDomain: string;
    /**
     * @Property pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
     */
    pushDomain: string;
    /**
     * @Property region: Space belongs to the region, as a service center.
     */
    region: string;
    /**
     * @Property app: Application name space used, the default live.
     */
    app: string | undefined;
    /**
     * @Property callback: Updating the space callback device / flow state
     */
    callback: string | undefined;
    /**
     * @Property description: Space description.
     */
    description: string | undefined;
    /**
     * @Property enabled: Space is enabled.
     */
    enabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property lazyPull: Whether to enable on-demand pull flow, default false
     */
    lazyPull: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::VS::Group`.
     *
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
