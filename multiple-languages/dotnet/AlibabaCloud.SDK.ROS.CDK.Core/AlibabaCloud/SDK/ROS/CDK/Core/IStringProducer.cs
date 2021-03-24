using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Interface for lazy string producers.</summary>
    [JsiiInterface(nativeType: typeof(IStringProducer), fullyQualifiedName: "@alicloud/ros-cdk-core.IStringProducer")]
    public interface IStringProducer
    {
        /// <summary>Produce the string value.</summary>
        [JsiiMethod(name: "produce", returnsJson: "{\"optional\":true,\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
        string? Produce(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context);

        /// <summary>Interface for lazy string producers.</summary>
        [JsiiTypeProxy(nativeType: typeof(IStringProducer), fullyQualifiedName: "@alicloud/ros-cdk-core.IStringProducer")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IStringProducer
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Produce the string value.</summary>
            [JsiiMethod(name: "produce", returnsJson: "{\"optional\":true,\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
            public string? Produce(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
            {
                return InvokeInstanceMethod<string?>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{context});
            }
        }
    }
}
