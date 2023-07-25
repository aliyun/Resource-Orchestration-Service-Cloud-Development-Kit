import * as ros from '@alicloud/ros-cdk-core';
import { RosSlbBinding } from './sae.generated';
export { RosSlbBinding as SlbBindingProperty };
/**
 * Properties for defining a `ALIYUN::SAE::SlbBinding`
 */
export interface SlbBindingProps {
    /**
     * Property appId: Successful application deployment target ID
     */
    readonly appId: string | ros.IResolvable;
    /**
     * Property internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    readonly internet?: string | ros.IResolvable;
    /**
     * Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    readonly internetSlbId?: string | ros.IResolvable;
    /**
     * Property intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
     */
    readonly intranet?: string | ros.IResolvable;
    /**
     * Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
     */
    readonly intranetSlbId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SAE::SlbBinding`
 */
export declare class SlbBinding extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AppId: Successful application deployment target ID
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    readonly attrChangeOrderId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAE::SlbBinding`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SlbBindingProps, enableResourcePropertyConstraint?: boolean);
}
