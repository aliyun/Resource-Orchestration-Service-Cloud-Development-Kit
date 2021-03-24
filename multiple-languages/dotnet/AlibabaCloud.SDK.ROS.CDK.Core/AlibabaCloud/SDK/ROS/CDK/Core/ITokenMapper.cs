using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Interface to apply operation to tokens in a string&#xD; &#xD; Interface so it can be exported via jsii.</summary>
    [JsiiInterface(nativeType: typeof(ITokenMapper), fullyQualifiedName: "@alicloud/ros-cdk-core.ITokenMapper")]
    public interface ITokenMapper
    {
        /// <summary>Replace a single token.</summary>
        [JsiiMethod(name: "mapToken", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"t\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}]")]
        object MapToken(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable t);

        /// <summary>Interface to apply operation to tokens in a string&#xD; &#xD; Interface so it can be exported via jsii.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITokenMapper), fullyQualifiedName: "@alicloud/ros-cdk-core.ITokenMapper")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ITokenMapper
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Replace a single token.</summary>
            [JsiiMethod(name: "mapToken", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"t\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}]")]
            public object MapToken(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable t)
            {
                return InvokeInstanceMethod<object>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable)}, new object[]{t})!;
            }
        }
    }
}
