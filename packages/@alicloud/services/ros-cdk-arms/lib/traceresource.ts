import * as ros from '@alicloud/ros-cdk-core';
import { RosTraceResource } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTraceResource as TraceResourceProperty };

/**
 * Properties for defining a `TraceResource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-traceresource
 */
export interface TraceResourceProps {

    /**
     * Property appType: The application type of the trace resource. Allowed values: default, trace, cms.
     */
    readonly appType?: string | ros.IResolvable;

    /**
     * Property createAllResource: Whether to create all trace resources.
     */
    readonly createAllResource?: boolean | ros.IResolvable;

    /**
     * Property workspace: The workspace of the trace resource.
     */
    readonly workspace?: string | ros.IResolvable;
}

/**
 * Represents a `TraceResource`.
 */
export interface ITraceResource extends ros.IResource {
    readonly props: TraceResourceProps;

    /**
     * Attribute SlsEndpointDesc: The sls endpoint description of the trace resource.
     */
    readonly attrSlsEndpointDesc: ros.IResolvable | string;

    /**
     * Attribute TraceEndpointDesc: The trace endpoint description of the trace resource.
     */
    readonly attrTraceEndpointDesc: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::TraceResource`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTraceResource`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-traceresource
 */
export class TraceResource extends ros.Resource implements ITraceResource {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TraceResourceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SlsEndpointDesc: The sls endpoint description of the trace resource.
     */
    public readonly attrSlsEndpointDesc: ros.IResolvable | string;

    /**
     * Attribute TraceEndpointDesc: The trace endpoint description of the trace resource.
     */
    public readonly attrTraceEndpointDesc: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TraceResourceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTraceResource = new RosTraceResource(this, id,  {
            createAllResource: props.createAllResource,
            appType: props.appType,
            workspace: props.workspace,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTraceResource;
        this.attrSlsEndpointDesc = rosTraceResource.attrSlsEndpointDesc;
        this.attrTraceEndpointDesc = rosTraceResource.attrTraceEndpointDesc;
    }
}
