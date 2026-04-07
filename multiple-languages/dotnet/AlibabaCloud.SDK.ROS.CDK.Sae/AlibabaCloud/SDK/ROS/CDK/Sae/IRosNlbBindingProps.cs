using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `RosNlbBinding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-nlbbinding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNlbBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosNlbBindingProps")]
    public interface IRosNlbBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appId: The ID of the SAE application.
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: listeners: The listeners of the NLB.
        /// </remarks>
        [JsiiProperty(name: "listeners", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosNlbBinding.ListenersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Listeners
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: nlbId: The ID of the Network Load Balancer (NLB).
        /// </remarks>
        [JsiiProperty(name: "nlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NlbId
        {
            get;
        }

        /// <summary>Properties for defining a `RosNlbBinding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-nlbbinding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNlbBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosNlbBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.IRosNlbBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: appId: The ID of the SAE application.
            /// </remarks>
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: listeners: The listeners of the NLB.
            /// </remarks>
            [JsiiProperty(name: "listeners", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosNlbBinding.ListenersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Listeners
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: nlbId: The ID of the Network Load Balancer (NLB).
            /// </remarks>
            [JsiiProperty(name: "nlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NlbId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
