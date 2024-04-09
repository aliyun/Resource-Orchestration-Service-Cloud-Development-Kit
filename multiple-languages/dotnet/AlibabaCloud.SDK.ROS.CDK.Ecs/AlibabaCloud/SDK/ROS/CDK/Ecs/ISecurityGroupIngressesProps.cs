using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `SecurityGroupIngresses`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingresses
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISecurityGroupIngressesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SecurityGroupIngressesProps")]
    public interface ISecurityGroupIngressesProps
    {
        /// <summary>Property permissions: A list of security group rules.</summary>
        /// <remarks>
        /// A hundred at most.
        /// </remarks>
        [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosSecurityGroupIngresses.PermissionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Permissions
        {
            get;
        }

        /// <summary>Property securityGroupId: Id of the security group.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityGroupId
        {
            get;
        }

        /// <summary>Properties for defining a `SecurityGroupIngresses`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingresses
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISecurityGroupIngressesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SecurityGroupIngressesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ISecurityGroupIngressesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property permissions: A list of security group rules.</summary>
            /// <remarks>
            /// A hundred at most.
            /// </remarks>
            [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosSecurityGroupIngresses.PermissionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Permissions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property securityGroupId: Id of the security group.</summary>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
