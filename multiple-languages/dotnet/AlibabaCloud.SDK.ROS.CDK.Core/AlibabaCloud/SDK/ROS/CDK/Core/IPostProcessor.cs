using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>A Token that can post-process the complete resolved value, after resolve() has recursed over it.</summary>
    [JsiiInterface(nativeType: typeof(IPostProcessor), fullyQualifiedName: "@alicloud/ros-cdk-core.IPostProcessor")]
    public interface IPostProcessor
    {
        /// <summary>Process the completely resolved value, after full recursion/resolution has happened.</summary>
        [JsiiMethod(name: "postProcess", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"input\",\"type\":{\"primitive\":\"any\"}},{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
        object PostProcess(object input, AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context);

        /// <summary>A Token that can post-process the complete resolved value, after resolve() has recursed over it.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPostProcessor), fullyQualifiedName: "@alicloud/ros-cdk-core.IPostProcessor")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IPostProcessor
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Process the completely resolved value, after full recursion/resolution has happened.</summary>
            [JsiiMethod(name: "postProcess", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"input\",\"type\":{\"primitive\":\"any\"}},{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
            public object PostProcess(object input, AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
            {
                return InvokeInstanceMethod<object>(new System.Type[]{typeof(object), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{input, context})!;
            }
        }
    }
}
