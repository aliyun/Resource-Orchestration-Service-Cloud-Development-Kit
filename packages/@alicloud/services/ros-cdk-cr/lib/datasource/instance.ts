import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './cr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-instance
 */
export interface InstanceProps {

    /**
     * Property instanceId: The first ID of the resource.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CR::Instance`, which is used to query the information about an instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-instance
 */
export class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute InstanceId: The first ID of the resource.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceName: InstanceName.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * Attribute InstanceSpecification: InstanceSpecification.
     */
    public readonly attrInstanceSpecification: ros.IResolvable;

    /**
     * Attribute ModifiedTime: Last modification time.
     */
    public readonly attrModifiedTime: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            instanceId: props.instanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrCreateTime = rosInstance.attrCreateTime;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrInstanceSpecification = rosInstance.attrInstanceSpecification;
        this.attrModifiedTime = rosInstance.attrModifiedTime;
        this.attrResourceGroupId = rosInstance.attrResourceGroupId;
    }
}
