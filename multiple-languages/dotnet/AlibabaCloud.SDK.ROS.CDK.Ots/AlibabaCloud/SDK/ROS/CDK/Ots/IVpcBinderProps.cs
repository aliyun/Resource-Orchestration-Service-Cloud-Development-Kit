using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    /// <summary>Properties for defining a `VpcBinder`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vpcbinder
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVpcBinderProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.VpcBinderProps")]
    public interface IVpcBinderProps
    {
        /// <summary>Property instanceName: Instance name.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <summary>Property vpcs: Vpc binding configuration.</summary>
        [JsiiProperty(name: "vpcs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosVpcBinder.VpcsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Vpcs
        {
            get;
        }

        /// <summary>Properties for defining a `VpcBinder`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vpcbinder
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVpcBinderProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.VpcBinderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.IVpcBinderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceName: Instance name.</summary>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcs: Vpc binding configuration.</summary>
            [JsiiProperty(name: "vpcs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosVpcBinder.VpcsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Vpcs
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
