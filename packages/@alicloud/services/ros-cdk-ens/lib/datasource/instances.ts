import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './ens.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstances as InstancesProperty };

/**
 * Properties for defining a `Instances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instances
 */
export interface InstancesProps {

    /**
     * Property ensRegionIds: The list of ENS region IDs.
     */
    readonly ensRegionIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ensServiceId: The ID of ENS service.
     */
    readonly ensServiceId?: string | ros.IResolvable;

    /**
     * Property imageId: The image ID of instance.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * Property instanceIds: The list of instance IDs.
     */
    readonly instanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property instanceName: The name of instance.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property instanceResourceType: The resource type of instance. Valid values:
     * EnsPostPaidInstance: PostPaid instance.
     * EnsService: Edge service instance.
     * BuildMachine: Image building machine.
     */
    readonly instanceResourceType?: string | ros.IResolvable;

    /**
     * Property status: The status of instance.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ENS::Instances`, which is used to query the details of Edge Node Service (ENS) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instances
 */
export class Instances extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstancesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * Attribute Instances: The list of instances.
     */
    public readonly attrInstances: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstances = new RosInstances(this, id,  {
            status: props.status,
            instanceName: props.instanceName,
            ensServiceId: props.ensServiceId,
            imageId: props.imageId,
            instanceIds: props.instanceIds,
            ensRegionIds: props.ensRegionIds,
            instanceResourceType: props.instanceResourceType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstances;
        this.attrInstanceIds = rosInstances.attrInstanceIds;
        this.attrInstances = rosInstances.attrInstances;
    }
}
