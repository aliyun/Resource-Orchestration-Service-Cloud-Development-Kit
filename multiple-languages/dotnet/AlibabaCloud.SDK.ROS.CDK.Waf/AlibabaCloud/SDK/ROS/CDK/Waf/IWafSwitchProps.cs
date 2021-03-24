using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>Properties for defining a `ALIYUN::WAF::WafSwitch`.</summary>
    [JsiiInterface(nativeType: typeof(IWafSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.WafSwitchProps")]
    public interface IWafSwitchProps
    {
        /// <summary>Property domain: Domain name.</summary>
        [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}")]
        string Domain
        {
            get;
        }

        /// <summary>Property instanceId: WAF instance ID.</summary>
        /// <remarks>
        /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <summary>Property serviceOn: Web attack protection switch, the value of: 0: closed.</summary>
        /// <remarks>
        /// 1: indicate on.
        /// </remarks>
        [JsiiProperty(name: "serviceOn", typeJson: "{\"primitive\":\"number\"}")]
        double ServiceOn
        {
            get;
        }

        /// <summary>Property region: Examples of areas where the WAF.</summary>
        /// <remarks>
        /// Value:
        /// cn: China mainland (default)
        /// cn-hongkong: China HongKong and other overseas
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Region
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::WAF::WafSwitch`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IWafSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.WafSwitchProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.IWafSwitchProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domain: Domain name.</summary>
            [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}")]
            public string Domain
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceId: WAF instance ID.</summary>
            /// <remarks>
            /// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property serviceOn: Web attack protection switch, the value of: 0: closed.</summary>
            /// <remarks>
            /// 1: indicate on.
            /// </remarks>
            [JsiiProperty(name: "serviceOn", typeJson: "{\"primitive\":\"number\"}")]
            public double ServiceOn
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property region: Examples of areas where the WAF.</summary>
            /// <remarks>
            /// Value:
            /// cn: China mainland (default)
            /// cn-hongkong: China HongKong and other overseas
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Region
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
