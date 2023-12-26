using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `JoinSecurityGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-joinsecuritygroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IJoinSecurityGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.JoinSecurityGroupProps")]
    public interface IJoinSecurityGroupProps
    {
        /// <summary>Property securityGroupId: Security group id to join.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityGroupId
        {
            get;
        }

        /// <summary>Property instanceId: Instance Id to the join the security group.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.</summary>
        [JsiiProperty(name: "instanceIdList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceIdList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkInterfaceList: Network interface list.</summary>
        [JsiiProperty(name: "networkInterfaceList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkInterfaceList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `JoinSecurityGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-joinsecuritygroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IJoinSecurityGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.JoinSecurityGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IJoinSecurityGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property securityGroupId: Security group id to join.</summary>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: Instance Id to the join the security group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceIdList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceIdList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkInterfaceList: Network interface list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "networkInterfaceList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkInterfaceList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
