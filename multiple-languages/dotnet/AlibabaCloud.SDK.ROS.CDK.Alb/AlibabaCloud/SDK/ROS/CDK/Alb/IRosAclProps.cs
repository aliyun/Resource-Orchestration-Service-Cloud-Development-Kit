using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `RosAcl`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-acl
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAclProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosAclProps")]
    public interface IRosAclProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aclEntries: undefined
        /// </remarks>
        [JsiiProperty(name: "aclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosAcl.AclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AclEntries
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: aclName: The name of the ACL. The name must be 2 to 128 characters in length, and can contain
        /// letters, digits, hyphens (-) and underscores (_). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "aclName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AclName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAcl`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-acl
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAclProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosAclProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IRosAclProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: aclEntries: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosAcl.AclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AclEntries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: aclName: The name of the ACL. The name must be 2 to 128 characters in length, and can contain
            /// letters, digits, hyphens (-) and underscores (_). It must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aclName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AclName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
