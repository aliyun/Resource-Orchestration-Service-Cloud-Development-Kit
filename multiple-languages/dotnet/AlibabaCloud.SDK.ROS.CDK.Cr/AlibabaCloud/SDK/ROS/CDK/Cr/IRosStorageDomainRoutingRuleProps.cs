using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `RosStorageDomainRoutingRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosStorageDomainRoutingRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosStorageDomainRoutingRuleProps")]
    public interface IRosStorageDomainRoutingRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: ACR Instance ID.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routes: Domain name routing entry.
        /// </remarks>
        [JsiiProperty(name: "routes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosStorageDomainRoutingRule.RoutesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Routes
        {
            get;
        }

        /// <summary>Properties for defining a `RosStorageDomainRoutingRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosStorageDomainRoutingRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosStorageDomainRoutingRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IRosStorageDomainRoutingRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: ACR Instance ID.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routes: Domain name routing entry.
            /// </remarks>
            [JsiiProperty(name: "routes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosStorageDomainRoutingRule.RoutesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Routes
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
