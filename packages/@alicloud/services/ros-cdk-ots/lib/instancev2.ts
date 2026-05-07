import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceV2 } from './ots.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstanceV2 as InstanceV2Property };

/**
 * Properties for defining a `InstanceV2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instancev2
 */
export interface InstanceV2Props {

    /**
     * Property clusterType: Cluster type (i.e. instance specification).
     * Enumeration values:
     * SSD: High performance.
     * HYBRID: Capacity type.
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * Property instanceName: Instance name.The naming specifications for instances are as follows:
     * Must consist of English letters, numbers or dash lines (-).
     * The first character must be in English letters.
     * The end character cannot be a dash (-).
     * Insensitive case.
     * The length is between 3 and 16 characters.
     *
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * Property instanceDescription: Example description. The length is limited to between 3-256 characters.
     */
    readonly instanceDescription?: string | ros.IResolvable;

    /**
     * Property networkSourceAcl: The allowed-network source list. All networks are allowed by default.
     */
    readonly networkSourceAcl?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property networkTypeAcl: The instance allows the network type list, which is allowed by default.
     */
    readonly networkTypeAcl?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: The list of instance tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for instance.
     */
    readonly tags?: RosInstanceV2.TagsProperty[];
}

/**
 * Represents a `InstanceV2`.
 */
export interface IInstanceV2 extends ros.IResource {
    readonly props: InstanceV2Props;

    /**
     * Attribute InstanceName: Name of the tablestore instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OTS::InstanceV2`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstanceV2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instancev2
 */
export class InstanceV2 extends ros.Resource implements IInstanceV2 {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceV2Props;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceName: Name of the tablestore instance.
     */
    public readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceV2Props, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstanceV2 = new RosInstanceV2(this, id,  {
            instanceName: props.instanceName,
            networkSourceAcl: props.networkSourceAcl,
            networkTypeAcl: props.networkTypeAcl,
            resourceGroupId: props.resourceGroupId,
            instanceDescription: props.instanceDescription,
            clusterType: props.clusterType,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceV2;
        this.attrInstanceName = rosInstanceV2.attrInstanceName;
    }
}
