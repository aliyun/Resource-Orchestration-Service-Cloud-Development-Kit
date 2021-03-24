using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Interface for lazy list producers.</summary>
    [JsiiInterface(nativeType: typeof(IListProducer), fullyQualifiedName: "@alicloud/ros-cdk-core.IListProducer")]
    public interface IListProducer
    {
        /// <summary>Produce the list value.</summary>
        [JsiiMethod(name: "produce", returnsJson: "{\"optional\":true,\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}", parametersJson: "[{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
        string[]? Produce(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context);

        /// <summary>Interface for lazy list producers.</summary>
        [JsiiTypeProxy(nativeType: typeof(IListProducer), fullyQualifiedName: "@alicloud/ros-cdk-core.IListProducer")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IListProducer
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Produce the list value.</summary>
            [JsiiMethod(name: "produce", returnsJson: "{\"optional\":true,\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}", parametersJson: "[{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
            public string[]? Produce(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
            {
                return InvokeInstanceMethod<string[]?>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{context});
            }
        }
    }
}
