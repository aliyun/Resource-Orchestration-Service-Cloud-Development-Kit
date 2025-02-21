import * as ros from '@alicloud/ros-cdk-core';
import { RosOperation } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosOperation as OperationProperty };

/**
 * Properties for defining a `Operation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation
 */
export interface OperationProps {

    /**
     * Property httpApiId: The HTTP API ID to which the interface belongs
     */
    readonly httpApiId: string | ros.IResolvable;

    /**
     * Property method: The method of http protocol.
     */
    readonly method: string | ros.IResolvable;

    /**
     * Property operationName: The name of the operation.
     */
    readonly operationName: string | ros.IResolvable;

    /**
     * Property path: The interface path of the operation.
     */
    readonly path: string | ros.IResolvable;

    /**
     * Property description: The description of the operation.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property mock: Mock configuration.
     */
    readonly mock?: RosOperation.MockProperty | ros.IResolvable;
}

/**
 * Represents a `Operation`.
 */
export interface IOperation extends ros.IResource {
    readonly props: OperationProps;

    /**
     * Attribute CreateTime: The creation timestamp of the operation.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the operation.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Method: The method of http protocol.
     */
    readonly attrMethod: ros.IResolvable | string;

    /**
     * Attribute Mock: Mock configuration.
     */
    readonly attrMock: ros.IResolvable | string;

    /**
     * Attribute OperationId: The ID of the operation.
     */
    readonly attrOperationId: ros.IResolvable | string;

    /**
     * Attribute OperationName: The name of the resource.
     */
    readonly attrOperationName: ros.IResolvable | string;

    /**
     * Attribute Path: The interface path of the operation.
     */
    readonly attrPath: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::Operation`, which is used to create an operation for an HTTP API.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOperation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation
 */
export class Operation extends ros.Resource implements IOperation {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: OperationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation timestamp of the operation.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the operation.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Method: The method of http protocol.
     */
    public readonly attrMethod: ros.IResolvable | string;

    /**
     * Attribute Mock: Mock configuration.
     */
    public readonly attrMock: ros.IResolvable | string;

    /**
     * Attribute OperationId: The ID of the operation.
     */
    public readonly attrOperationId: ros.IResolvable | string;

    /**
     * Attribute OperationName: The name of the resource.
     */
    public readonly attrOperationName: ros.IResolvable | string;

    /**
     * Attribute Path: The interface path of the operation.
     */
    public readonly attrPath: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OperationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosOperation = new RosOperation(this, id,  {
            path: props.path,
            description: props.description,
            operationName: props.operationName,
            method: props.method,
            httpApiId: props.httpApiId,
            mock: props.mock,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosOperation;
        this.attrCreateTime = rosOperation.attrCreateTime;
        this.attrDescription = rosOperation.attrDescription;
        this.attrMethod = rosOperation.attrMethod;
        this.attrMock = rosOperation.attrMock;
        this.attrOperationId = rosOperation.attrOperationId;
        this.attrOperationName = rosOperation.attrOperationName;
        this.attrPath = rosOperation.attrPath;
    }
}
