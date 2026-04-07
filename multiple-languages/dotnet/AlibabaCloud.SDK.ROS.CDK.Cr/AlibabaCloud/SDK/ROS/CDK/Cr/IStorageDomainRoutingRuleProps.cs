using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `StorageDomainRoutingRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IStorageDomainRoutingRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.StorageDomainRoutingRuleProps")]
    public interface IStorageDomainRoutingRuleProps
    {
        /// <summary>Property instanceId: ACR Instance ID.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property routes: Domain name routing entry.</summary>
        [JsiiProperty(name: "routes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosStorageDomainRoutingRule.RoutesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Routes
        {
            get;
        }

        /// <summary>Properties for defining a `StorageDomainRoutingRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IStorageDomainRoutingRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.StorageDomainRoutingRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IStorageDomainRoutingRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: ACR Instance ID.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property routes: Domain name routing entry.</summary>
            [JsiiProperty(name: "routes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosStorageDomainRoutingRule.RoutesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Routes
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
