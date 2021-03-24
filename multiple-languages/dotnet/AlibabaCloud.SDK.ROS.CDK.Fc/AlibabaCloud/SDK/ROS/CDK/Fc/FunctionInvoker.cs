using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>A ROS resource type:  `ALIYUN::FC::FunctionInvoker`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Fc.FunctionInvoker), fullyQualifiedName: "@alicloud/ros-cdk-fc.FunctionInvoker", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-fc.FunctionInvokerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class FunctionInvoker : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::FC::FunctionInvoker`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public FunctionInvoker(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionInvokerProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FunctionInvoker(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FunctionInvoker(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Result: Depends on result type: NoResult: Async invoke has no result.</summary>
        /// <remarks>
        /// Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
        /// Failure: Error Message.
        /// </remarks>
        [JsiiProperty(name: "attrResult", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrResult
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResultType: Result type: NoResult: Async invoke has no result.</summary>
        /// <remarks>
        /// Success: Sync invoke succeeds.
        /// Failure: Sync invoke fails.
        /// </remarks>
        [JsiiProperty(name: "attrResultType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrResultType
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
