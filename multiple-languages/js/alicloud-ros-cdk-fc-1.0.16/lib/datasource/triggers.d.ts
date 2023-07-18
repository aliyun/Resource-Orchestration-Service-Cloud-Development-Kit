import * as ros from '@alicloud/ros-cdk-core';
import { RosTriggers } from './fc.generated';
export { RosTriggers as TriggersProperty };
/**
 * Properties for defining a `DATASOURCE::FC::Triggers`
 */
export interface TriggersProps {
    /**
     * Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * Property prefix: Qualified returned trigger names must be prefixed with Prefix. For example, if the Prefix is "a", the returned trigger names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::FC::Triggers`
 */
export declare class Triggers extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute TriggerNames: The list of trigger names.
     */
    readonly attrTriggerNames: ros.IResolvable;
    /**
     * Attribute Triggers: The list of triggers.
     */
    readonly attrTriggers: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::FC::Triggers`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TriggersProps, enableResourcePropertyConstraint?: boolean);
}
