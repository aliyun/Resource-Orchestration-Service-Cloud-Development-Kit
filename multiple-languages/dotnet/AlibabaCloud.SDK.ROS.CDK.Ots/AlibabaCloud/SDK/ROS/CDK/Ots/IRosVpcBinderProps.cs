using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    /// <summary>Properties for defining a `ALIYUN::OTS::VpcBinder`.</summary>
    [JsiiInterface(nativeType: typeof(IRosVpcBinderProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosVpcBinderProps")]
    public interface IRosVpcBinderProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceName: Instance name
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcs: Vpc binding configuration.
        /// </remarks>
        [JsiiProperty(name: "vpcs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosVpcBinder.VpcsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Vpcs
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::OTS::VpcBinder`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosVpcBinderProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.RosVpcBinderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.IRosVpcBinderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: Instance name
            /// </remarks>
            [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcs: Vpc binding configuration.
            /// </remarks>
            [JsiiProperty(name: "vpcs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosVpcBinder.VpcsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Vpcs
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
