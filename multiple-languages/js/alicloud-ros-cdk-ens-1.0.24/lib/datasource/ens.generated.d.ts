import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instances
 */
export interface RosInstancesProps {
    /**
     * @Property ensRegionIds: The list of ENS region IDs.
     */
    readonly ensRegionIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ensServiceId: The ID of ENS service.
     */
    readonly ensServiceId?: string | ros.IResolvable;
    /**
     * @Property imageId: The image ID of instance.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * @Property instanceIds: The list of instance IDs.
     */
    readonly instanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceName: The name of instance.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property instanceResourceType: The resource type of instance. Valid values:
     * EnsPostPaidInstance: PostPaid instance.
     * EnsService: Edge service instance.
     * BuildMachine: Image building machine.
     */
    readonly instanceResourceType?: string | ros.IResolvable;
    /**
     * @Property status: The status of instance.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ENS::Instances`, which is used to query the details of Edge Node Service (ENS) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instances
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ENS::Instances";
    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ensRegionIds: The list of ENS region IDs.
     */
    ensRegionIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ensServiceId: The ID of ENS service.
     */
    ensServiceId: string | ros.IResolvable | undefined;
    /**
     * @Property imageId: The image ID of instance.
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceIds: The list of instance IDs.
     */
    instanceIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceName: The name of instance.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property instanceResourceType: The resource type of instance. Valid values:
     * EnsPostPaidInstance: PostPaid instance.
     * EnsService: Edge service instance.
     * BuildMachine: Image building machine.
     */
    instanceResourceType: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of instance.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
