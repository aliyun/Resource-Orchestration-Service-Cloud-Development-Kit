using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `NlbBinding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-nlbbinding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INlbBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.NlbBindingProps")]
    public interface INlbBindingProps
    {
        /// <summary>Property appId: The ID of the SAE application.</summary>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppId
        {
            get;
        }

        /// <summary>Property listeners: The listeners of the NLB.</summary>
        [JsiiProperty(name: "listeners", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosNlbBinding.ListenersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Listeners
        {
            get;
        }

        /// <summary>Property nlbId: The ID of the Network Load Balancer (NLB).</summary>
        [JsiiProperty(name: "nlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NlbId
        {
            get;
        }

        /// <summary>Properties for defining a `NlbBinding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-nlbbinding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INlbBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.NlbBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.INlbBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appId: The ID of the SAE application.</summary>
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property listeners: The listeners of the NLB.</summary>
            [JsiiProperty(name: "listeners", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosNlbBinding.ListenersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Listeners
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property nlbId: The ID of the Network Load Balancer (NLB).</summary>
            [JsiiProperty(name: "nlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NlbId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
