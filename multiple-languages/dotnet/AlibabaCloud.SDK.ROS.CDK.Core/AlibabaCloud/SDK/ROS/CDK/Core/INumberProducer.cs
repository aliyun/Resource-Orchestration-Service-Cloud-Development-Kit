using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Interface for lazy number producers.</summary>
    [JsiiInterface(nativeType: typeof(INumberProducer), fullyQualifiedName: "@alicloud/ros-cdk-core.INumberProducer")]
    public interface INumberProducer
    {
        /// <summary>Produce the number value.</summary>
        [JsiiMethod(name: "produce", returnsJson: "{\"optional\":true,\"type\":{\"primitive\":\"number\"}}", parametersJson: "[{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
        double? Produce(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context);

        /// <summary>Interface for lazy number producers.</summary>
        [JsiiTypeProxy(nativeType: typeof(INumberProducer), fullyQualifiedName: "@alicloud/ros-cdk-core.INumberProducer")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.INumberProducer
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Produce the number value.</summary>
            [JsiiMethod(name: "produce", returnsJson: "{\"optional\":true,\"type\":{\"primitive\":\"number\"}}", parametersJson: "[{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
            public double? Produce(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
            {
                return InvokeInstanceMethod<double?>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{context});
            }
        }
    }
}
