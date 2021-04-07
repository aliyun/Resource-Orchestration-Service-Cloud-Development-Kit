using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>(experimental) Function used to concatenate symbols in the target document language.</summary>
    /// <remarks>
    /// Interface so it could potentially be exposed over jsii.
    ///
    /// <strong>Stability</strong>: Experimental
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFragmentConcatenator), fullyQualifiedName: "@alicloud/ros-cdk-core.IFragmentConcatenator")]
    public interface IFragmentConcatenator
    {
        /// <summary>(experimental) Join the fragment on the left and on the right.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "join", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"left\",\"type\":{\"primitive\":\"any\"}},{\"name\":\"right\",\"type\":{\"primitive\":\"any\"}}]")]
        object Join(object left, object right);

        /// <summary>(experimental) Function used to concatenate symbols in the target document language.</summary>
        /// <remarks>
        /// Interface so it could potentially be exposed over jsii.
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFragmentConcatenator), fullyQualifiedName: "@alicloud/ros-cdk-core.IFragmentConcatenator")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IFragmentConcatenator
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>(experimental) Join the fragment on the left and on the right.</summary>
            /// <remarks>
            /// <strong>Stability</strong>: Experimental
            /// </remarks>
            [JsiiMethod(name: "join", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"left\",\"type\":{\"primitive\":\"any\"}},{\"name\":\"right\",\"type\":{\"primitive\":\"any\"}}]")]
            public object Join(object left, object right)
            {
                return InvokeInstanceMethod<object>(new System.Type[]{typeof(object), typeof(object)}, new object[]{left, right})!;
            }
        }
    }
}
