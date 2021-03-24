using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `ALIYUN::PVTZ::ZoneVpcBinder`.</summary>
    [JsiiInterface(nativeType: typeof(IZoneVpcBinderProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.ZoneVpcBinderProps")]
    public interface IZoneVpcBinderProps
    {
        /// <summary>Property vpcs:.</summary>
        [JsiiProperty(name: "vpcs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosZoneVpcBinder.VpcsProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Vpcs
        {
            get;
        }

        /// <summary>Property zoneId: Zone Id.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
        string ZoneId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::PVTZ::ZoneVpcBinder`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IZoneVpcBinderProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.ZoneVpcBinderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.IZoneVpcBinderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpcs:.</summary>
            [JsiiProperty(name: "vpcs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosZoneVpcBinder.VpcsProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Vpcs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: Zone Id.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
            public string ZoneId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
