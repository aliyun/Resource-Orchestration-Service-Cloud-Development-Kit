import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './vs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGroup as GroupProperty };

/**
 * Properties for defining a `ALIYUN::VS::Group`
 */
export interface GroupProps {

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
 * A ROS resource type:  `ALIYUN::VS::Group`
 */
export class Group extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute GbId: GB ID space provided. (Applies only to access the space marked States)
     */
    public readonly attrGbId: any;

    /**
     * @Attribute GbIp: GB signaling server address space provided. (Applies only to access the space marked States)
     */
    public readonly attrGbIp: any;

    /**
     * @Attribute GbPort: GB Port space provided. (Applies only to access the space marked States)
     */
    public readonly attrGbPort: any;

    /**
     * @Attribute Id: Space ID.
     */
    public readonly attrId: any;

    /**
     * Create a new `ALIYUN::VS::Group`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosGroup = new RosGroup(this, id,  {
            app: props.app,
            inProtocol: props.inProtocol,
            callback: props.callback,
            description: props.description,
            playDomain: props.playDomain,
            enabled: props.enabled,
            region: props.region,
            pushDomain: props.pushDomain,
            lazyPull: props.lazyPull,
            outProtocol: props.outProtocol,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroup;
        this.attrGbId = rosGroup.attrGbId;
        this.attrGbIp = rosGroup.attrGbIp;
        this.attrGbPort = rosGroup.attrGbPort;
        this.attrId = rosGroup.attrId;
    }
}
