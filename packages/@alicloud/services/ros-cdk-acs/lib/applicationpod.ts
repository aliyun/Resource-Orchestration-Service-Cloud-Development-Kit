import * as ros from '@alicloud/ros-cdk-core';
import { RosApplicationPod } from './acs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApplicationPod as ApplicationPodProperty };

/**
 * Properties for defining a `ApplicationPod`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-applicationpod
 */
export interface ApplicationPodProps {

    /**
     * Property computeClass: Compute class of the application pod.
     */
    readonly computeClass: string | ros.IResolvable;

    /**
     * Property computeQos: Compute QoS of the application pod.
     */
    readonly computeQos: string | ros.IResolvable;

    /**
     * Property cpuCoreNumber: CPU core number required by the container.
     */
    readonly cpuCoreNumber: string | ros.IResolvable;

    /**
     * Property image: Container image for the application pod.
     */
    readonly image: string | ros.IResolvable;

    /**
     * Property kind: Kind of the application pod (Job, CronJob, Deployment, StatefulSet).
     */
    readonly kind: string | ros.IResolvable;

    /**
     * Property memory: Memory size (in GB) required by the container.
     */
    readonly memory: number | ros.IResolvable;

    /**
     * Property diskConfig: Disk configurations for the application pod.
     */
    readonly diskConfig?: RosApplicationPod.DiskConfigProperty | ros.IResolvable;

    /**
     * Property gpuCoreNumber: GPU core number, if using GPU.
     */
    readonly gpuCoreNumber?: number | ros.IResolvable;

    /**
     * Property gpuModelSeries: GPU model series, if using GPU.
     */
    readonly gpuModelSeries?: string | ros.IResolvable;

    /**
     * Property gpuType: GPU type, default is nvidia.com\/gpu.
     */
    readonly gpuType?: string | ros.IResolvable;

    /**
     * Property replicas: Number of replicas for Deployment or StatefulSet.
     */
    readonly replicas?: number | ros.IResolvable;

    /**
     * Property zoneId: Zone ID for the application pod.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Represents a `ApplicationPod`.
 */
export interface IApplicationPod extends ros.IResource {
    readonly props: ApplicationPodProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ACS::ApplicationPod`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplicationPod`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-applicationpod
 */
export class ApplicationPod extends ros.Resource implements IApplicationPod {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ApplicationPodProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationPodProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosApplicationPod = new RosApplicationPod(this, id,  {
            zoneId: props.zoneId,
            cpuCoreNumber: props.cpuCoreNumber,
            memory: props.memory,
            gpuModelSeries: props.gpuModelSeries,
            gpuCoreNumber: props.gpuCoreNumber,
            diskConfig: props.diskConfig,
            kind: props.kind,
            computeClass: props.computeClass,
            gpuType: props.gpuType === undefined || props.gpuType === null ? 'nvidia.com/gpu' : props.gpuType,
            computeQos: props.computeQos,
            image: props.image,
            replicas: props.replicas,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApplicationPod;
    }
}
