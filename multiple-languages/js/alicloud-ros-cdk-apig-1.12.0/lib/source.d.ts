import * as ros from '@alicloud/ros-cdk-core';
import { RosSource } from './apig.generated';
export { RosSource as SourceProperty };
/**
 * Properties for defining a `Source`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-source
 */
export interface SourceProps {
    /**
     * Property gatewayId: The gateway ID.
     */
    readonly gatewayId?: string | ros.IResolvable;
    /**
     * Property k8SSourceConfig: The K8s source configuration.
     */
    readonly k8SSourceConfig?: RosSource.K8sSourceConfigProperty | ros.IResolvable;
    /**
     * Property nacosSourceConfig: The Nacos source configuration.
     */
    readonly nacosSourceConfig?: RosSource.NacosSourceConfigProperty | ros.IResolvable;
    /**
     * Property resourceGroupId: The resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property type: The source type:
     * - MSE_NACOS: MSE Nacos.
     * - K8S: Container service.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * Represents a `Source`.
 */
export interface ISource extends ros.IResource {
    readonly props: SourceProps;
    /**
     * Attribute SourceId: The ID of the source.
     */
    readonly attrSourceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::Source`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSource`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-source
 */
export declare class Source extends ros.Resource implements ISource {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SourceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SourceId: The ID of the source.
     */
    readonly attrSourceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: SourceProps, enableResourcePropertyConstraint?: boolean);
}
