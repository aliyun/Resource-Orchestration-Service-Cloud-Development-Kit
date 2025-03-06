using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Represents a `FunctionInvoker`.</summary>
    [JsiiInterface(nativeType: typeof(IFunctionInvoker), fullyQualifiedName: "@alicloud/ros-cdk-fc.IFunctionInvoker")]
    public interface IFunctionInvoker : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Result: Depends on result type: NoResult: Async invoke has no result.</summary>
        /// <remarks>
        /// Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
        /// Failure: Error Message.
        /// </remarks>
        [JsiiProperty(name: "attrResult", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResult
        {
            get;
        }

        /// <summary>Attribute ResultType: Result type: NoResult: Async invoke has no result.</summary>
        /// <remarks>
        /// Success: Sync invoke succeeds.
        /// Failure: Sync invoke fails.
        /// </remarks>
        [JsiiProperty(name: "attrResultType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResultType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fc.FunctionInvokerProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionInvokerProps Props
        {
            get;
        }

        /// <summary>Represents a `FunctionInvoker`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFunctionInvoker), fullyQualifiedName: "@alicloud/ros-cdk-fc.IFunctionInvoker")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionInvoker
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Result: Depends on result type: NoResult: Async invoke has no result.</summary>
            /// <remarks>
            /// Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
            /// Failure: Error Message.
            /// </remarks>
            [JsiiProperty(name: "attrResult", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResult
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResultType: Result type: NoResult: Async invoke has no result.</summary>
            /// <remarks>
            /// Success: Sync invoke succeeds.
            /// Failure: Sync invoke fails.
            /// </remarks>
            [JsiiProperty(name: "attrResultType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResultType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fc.FunctionInvokerProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionInvokerProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionInvokerProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
