using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `AccessLogsAddition`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesslogsaddition
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccessLogsAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.AccessLogsAdditionProps")]
    public interface IAccessLogsAdditionProps
    {
        /// <summary>Property loadBalancerId: The load balancer id.Only SLB Layer 7 load balancing (HTTP\/HTTPS listening) supports the access log function.Prerequisites1. A SLB instance has been created. For details, see Creating and Managing CLB Instances.2. A virtual server group has been created. Backend servers have been added to the server group.3. HTTP or HTTPS listening has been configured for CLB. 4. You have enabled the log service. For details, see Activating the Log Service.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <summary>Property logProject: The log project name.</summary>
        [JsiiProperty(name: "logProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogProject
        {
            get;
        }

        /// <summary>Property logStore: The log store name.</summary>
        [JsiiProperty(name: "logStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogStore
        {
            get;
        }

        /// <summary>Properties for defining a `AccessLogsAddition`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesslogsaddition
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccessLogsAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.AccessLogsAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IAccessLogsAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property loadBalancerId: The load balancer id.Only SLB Layer 7 load balancing (HTTP\/HTTPS listening) supports the access log function.Prerequisites1. A SLB instance has been created. For details, see Creating and Managing CLB Instances.2. A virtual server group has been created. Backend servers have been added to the server group.3. HTTP or HTTPS listening has been configured for CLB. 4. You have enabled the log service. For details, see Activating the Log Service.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logProject: The log project name.</summary>
            [JsiiProperty(name: "logProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogProject
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logStore: The log store name.</summary>
            [JsiiProperty(name: "logStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogStore
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
