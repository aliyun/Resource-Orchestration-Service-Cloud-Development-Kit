using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `RosAccessLogEnable`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-accesslogenable
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAccessLogEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosAccessLogEnableProps")]
    public interface IRosAccessLogEnableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of the ALB instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logProject: The name of the LogHub project.
        /// </remarks>
        [JsiiProperty(name: "logProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogProject
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logStore: The name of the LogHub logstore.
        /// </remarks>
        [JsiiProperty(name: "logStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogStore
        {
            get;
        }

        /// <summary>Properties for defining a `RosAccessLogEnable`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-accesslogenable
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAccessLogEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosAccessLogEnableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IRosAccessLogEnableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: The ID of the ALB instance.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logProject: The name of the LogHub project.
            /// </remarks>
            [JsiiProperty(name: "logProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogProject
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logStore: The name of the LogHub logstore.
            /// </remarks>
            [JsiiProperty(name: "logStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogStore
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
