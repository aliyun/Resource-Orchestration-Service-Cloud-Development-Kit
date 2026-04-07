using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `AccessLogEnable`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-accesslogenable
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccessLogEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.AccessLogEnableProps")]
    public interface IAccessLogEnableProps
    {
        /// <summary>Property loadBalancerId: The ID of the ALB instance.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <summary>Property logProject: The name of the LogHub project.</summary>
        [JsiiProperty(name: "logProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogProject
        {
            get;
        }

        /// <summary>Property logStore: The name of the LogHub logstore.</summary>
        [JsiiProperty(name: "logStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogStore
        {
            get;
        }

        /// <summary>Properties for defining a `AccessLogEnable`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-accesslogenable
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccessLogEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.AccessLogEnableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IAccessLogEnableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property loadBalancerId: The ID of the ALB instance.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logProject: The name of the LogHub project.</summary>
            [JsiiProperty(name: "logProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogProject
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logStore: The name of the LogHub logstore.</summary>
            [JsiiProperty(name: "logStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogStore
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
