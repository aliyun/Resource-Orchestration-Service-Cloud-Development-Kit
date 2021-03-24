using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Interface for lazy untyped value producers.</summary>
    [JsiiInterface(nativeType: typeof(IAnyProducer), fullyQualifiedName: "@alicloud/ros-cdk-core.IAnyProducer")]
    public interface IAnyProducer
    {
        /// <summary>Produce the value.</summary>
        [JsiiMethod(name: "produce", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
        object Produce(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context);

        /// <summary>Interface for lazy untyped value producers.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAnyProducer), fullyQualifiedName: "@alicloud/ros-cdk-core.IAnyProducer")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IAnyProducer
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Produce the value.</summary>
            [JsiiMethod(name: "produce", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
            public object Produce(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
            {
                return InvokeInstanceMethod<object>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{context})!;
            }
        }
    }
}
