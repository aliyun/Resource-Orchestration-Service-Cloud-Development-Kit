import * as ros from '@alicloud/ros-cdk-core';
import { RosDbAgent } from './hbr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDbAgent as DbAgentProperty };

/**
 * Properties for defining a `ALIYUN::HBR::DbAgent`
 */
export interface DbAgentProps {

    /**
     * Property instanceInfo: Instance infos
     */
    readonly instanceInfo: Array<RosDbAgent.InstanceInfoProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::HBR::DbAgent`
 */
export class DbAgent extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute InstanceIds: Uni backup agent instance ids
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * Attribute TaskId: Uni backup agent install task id.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * Attribute UniBackupInstanceDetails: Uni backup agent instance info details
     */
    public readonly attrUniBackupInstanceDetails: ros.IResolvable;

    /**
     * Attribute UniBackupInstances: Uni backup agent instance info
     */
    public readonly attrUniBackupInstances: ros.IResolvable;

    /**
     * Create a new `ALIYUN::HBR::DbAgent`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DbAgentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDbAgent = new RosDbAgent(this, id,  {
            instanceInfo: props.instanceInfo,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDbAgent;
        this.attrInstanceIds = rosDbAgent.attrInstanceIds;
        this.attrTaskId = rosDbAgent.attrTaskId;
        this.attrUniBackupInstanceDetails = rosDbAgent.attrUniBackupInstanceDetails;
        this.attrUniBackupInstances = rosDbAgent.attrUniBackupInstances;
    }
}
