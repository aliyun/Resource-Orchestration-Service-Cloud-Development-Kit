import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './vs.generated';
export { RosGroup as GroupProperty };
/**
 * Properties for defining a `ALIYUN::VS::Group`
 */
export interface GroupProps {
    /**
     * Property inProtocol: Access protocol used by the space.
     * Value: gb28181, rtmp
     */
    readonly inProtocol: string | ros.IResolvable;
    /**
     * Property name: Space name.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property outProtocol: Play protocol used by the space, multivalued separated by commas.
     * Value: flv, hls, rtmp
     */
    readonly outProtocol: string | ros.IResolvable;
    /**
     * Property playDomain: Use of the domain name space broadcast stream.
     */
    readonly playDomain: string | ros.IResolvable;
    /**
     * Property pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
     */
    readonly pushDomain: string | ros.IResolvable;
    /**
     * Property region: Space belongs to the region, as a service center.
     */
    readonly region: string | ros.IResolvable;
    /**
     * Property app: Application name space used, the default live.
     */
    readonly app?: string | ros.IResolvable;
    /**
     * Property callback: Updating the space callback device / flow state
     */
    readonly callback?: string | ros.IResolvable;
    /**
     * Property description: Space description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property enabled: Space is enabled.
     */
    readonly enabled?: boolean | ros.IResolvable;
    /**
     * Property lazyPull: Whether to enable on-demand pull flow, default false
     */
    readonly lazyPull?: boolean | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VS::Group`
 */
export declare class Group extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute GbId: GB ID space provided. (Applies only to access the space marked States)
     */
    readonly attrGbId: ros.IResolvable;
    /**
     * Attribute GbIp: GB signaling server address space provided. (Applies only to access the space marked States)
     */
    readonly attrGbIp: ros.IResolvable;
    /**
     * Attribute GbPort: GB Port space provided. (Applies only to access the space marked States)
     */
    readonly attrGbPort: ros.IResolvable;
    /**
     * Attribute Id: Space ID.
     */
    readonly attrId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VS::Group`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps, enableResourcePropertyConstraint?: boolean);
}
