import * as ros from '@alicloud/ros-cdk-core';
import { RosApplicationConnectionBind } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApplicationConnectionBind as ApplicationConnectionBindProperty };

/**
 * Properties for defining a `ApplicationConnectionBind`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnectionbind
 */
export interface ApplicationConnectionBindProps {

    /**
     * Property connectionIds: The list of connection IDs to bind.
     * The maximum number of connections is 100.
     */
    readonly connectionIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property applicationGroupName: The name of the application group.
     */
    readonly applicationGroupName?: string | ros.IResolvable;

    /**
     * Property applicationName: The name of the application.
     */
    readonly applicationName?: string | ros.IResolvable;

    /**
     * Property parameters: The parameters of the application connection bind.
     */
    readonly parameters?: Array<RosApplicationConnectionBind.ParametersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `ApplicationConnectionBind`.
 */
export interface IApplicationConnectionBind extends ros.IResource {
    readonly props: ApplicationConnectionBindProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::ApplicationConnectionBind`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplicationConnectionBind`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnectionbind
 */
export class ApplicationConnectionBind extends ros.Resource implements IApplicationConnectionBind {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ApplicationConnectionBindProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationConnectionBindProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosApplicationConnectionBind = new RosApplicationConnectionBind(this, id,  {
            applicationName: props.applicationName,
            parameters: props.parameters,
            connectionIds: props.connectionIds,
            applicationGroupName: props.applicationGroupName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApplicationConnectionBind;
    }
}
